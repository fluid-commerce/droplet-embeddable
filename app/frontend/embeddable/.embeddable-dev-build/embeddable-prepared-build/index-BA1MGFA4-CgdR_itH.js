import { r as reactExports, n as nt } from "./embeddable-entry-point-DfzYO-OW.js";
import { r as rB } from "./Container-mop-J7T8-BpqPaGKG.js";
import { n as n1, T as T1, O as O2, V } from "./MapChart-0nwFxQXg.js";
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
export {
  lu as Annotation,
  iu as ComposableMap,
  ou as Geographies,
  Rf as Geography,
  cu as Line,
  kt as MapContext,
  ru as MapProvider,
  su as Marker,
  _f as ZoomPanContext,
  uu as ZoomPanProvider,
  au as ZoomableGroup,
  gf as useGeographies,
  Sf as useZoomPan
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgtQkExTUdGQTQtQ2dkUl9pdEguanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaHJpc3RvcGhlcmNhcmxzb24vZmx1aWQvZHJvcGxldC1lbWJlZGRhYmxlL2FwcC9mcm9udGVuZC9lbWJlZGRhYmxlL25vZGVfbW9kdWxlcy9AZW1iZWRkYWJsZS5jb20vdmFuaWxsYS1jb21wb25lbnRzL2Rpc3QvaW5kZXgtQkExTUdGQTQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG50LCB7IGZvcndhcmRSZWYgYXMgSXQsIG1lbW8gYXMgeXIsIHVzZUNvbnRleHQgYXMgRHQsIGNyZWF0ZUNvbnRleHQgYXMgV2ksIHVzZU1lbW8gYXMgSG4sIHVzZUNhbGxiYWNrIGFzIGZ1LCB1c2VTdGF0ZSBhcyBKdCwgdXNlRWZmZWN0IGFzIGJlLCBGcmFnbWVudCBhcyBodSwgdXNlUmVmIGFzIE9uIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBnIGFzIHB1IH0gZnJvbSBcIi4vQ29udGFpbmVyLW1vcC1KN1Q4LmpzXCI7XG5pbXBvcnQgeyBpIGFzIEd0LCBhIGFzIFZyLCBiIGFzIHZ1LCBjIGFzIEhyIH0gZnJvbSBcIi4vTWFwQ2hhcnQuZW1iLWxUS04xby1KLmpzXCI7XG5jbGFzcyBpdCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX3BhcnRpYWxzID0gbmV3IEZsb2F0NjRBcnJheSgzMiksIHRoaXMuX24gPSAwO1xuICB9XG4gIGFkZChuKSB7XG4gICAgY29uc3QgZSA9IHRoaXMuX3BhcnRpYWxzO1xuICAgIGxldCByID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX24gJiYgaSA8IDMyOyBpKyspIHtcbiAgICAgIGNvbnN0IG8gPSBlW2ldLCB1ID0gbiArIG8sIGEgPSBNYXRoLmFicyhuKSA8IE1hdGguYWJzKG8pID8gbiAtICh1IC0gbykgOiBvIC0gKHUgLSBuKTtcbiAgICAgIGEgJiYgKGVbcisrXSA9IGEpLCBuID0gdTtcbiAgICB9XG4gICAgcmV0dXJuIGVbcl0gPSBuLCB0aGlzLl9uID0gciArIDEsIHRoaXM7XG4gIH1cbiAgdmFsdWVPZigpIHtcbiAgICBjb25zdCBuID0gdGhpcy5fcGFydGlhbHM7XG4gICAgbGV0IGUgPSB0aGlzLl9uLCByLCBpLCBvLCB1ID0gMDtcbiAgICBpZiAoZSA+IDApIHtcbiAgICAgIGZvciAodSA9IG5bLS1lXTsgZSA+IDAgJiYgKHIgPSB1LCBpID0gblstLWVdLCB1ID0gciArIGksIG8gPSBpIC0gKHUgLSByKSwgIW8pOyApXG4gICAgICAgIDtcbiAgICAgIGUgPiAwICYmIChvIDwgMCAmJiBuW2UgLSAxXSA8IDAgfHwgbyA+IDAgJiYgbltlIC0gMV0gPiAwKSAmJiAoaSA9IG8gKiAyLCByID0gdSArIGksIGkgPT0gciAtIHUgJiYgKHUgPSByKSk7XG4gICAgfVxuICAgIHJldHVybiB1O1xuICB9XG59XG5mdW5jdGlvbiogZ3UodCkge1xuICBmb3IgKGNvbnN0IG4gb2YgdClcbiAgICB5aWVsZCogbjtcbn1cbmZ1bmN0aW9uIFVpKHQpIHtcbiAgcmV0dXJuIEFycmF5LmZyb20oZ3UodCkpO1xufVxuZnVuY3Rpb24gVnQodCwgbiwgZSkge1xuICB0ID0gK3QsIG4gPSArbiwgZSA9IChpID0gYXJndW1lbnRzLmxlbmd0aCkgPCAyID8gKG4gPSB0LCB0ID0gMCwgMSkgOiBpIDwgMyA/IDEgOiArZTtcbiAgZm9yICh2YXIgciA9IC0xLCBpID0gTWF0aC5tYXgoMCwgTWF0aC5jZWlsKChuIC0gdCkgLyBlKSkgfCAwLCBvID0gbmV3IEFycmF5KGkpOyArK3IgPCBpOyApXG4gICAgb1tyXSA9IHQgKyByICogZTtcbiAgcmV0dXJuIG87XG59XG52YXIgS3IgPSAxODAgLyBNYXRoLlBJLCBxZSA9IHtcbiAgdHJhbnNsYXRlWDogMCxcbiAgdHJhbnNsYXRlWTogMCxcbiAgcm90YXRlOiAwLFxuICBza2V3WDogMCxcbiAgc2NhbGVYOiAxLFxuICBzY2FsZVk6IDFcbn07XG5mdW5jdGlvbiBWaSh0LCBuLCBlLCByLCBpLCBvKSB7XG4gIHZhciB1LCBhLCBjO1xuICByZXR1cm4gKHUgPSBNYXRoLnNxcnQodCAqIHQgKyBuICogbikpICYmICh0IC89IHUsIG4gLz0gdSksIChjID0gdCAqIGUgKyBuICogcikgJiYgKGUgLT0gdCAqIGMsIHIgLT0gbiAqIGMpLCAoYSA9IE1hdGguc3FydChlICogZSArIHIgKiByKSkgJiYgKGUgLz0gYSwgciAvPSBhLCBjIC89IGEpLCB0ICogciA8IG4gKiBlICYmICh0ID0gLXQsIG4gPSAtbiwgYyA9IC1jLCB1ID0gLXUpLCB7XG4gICAgdHJhbnNsYXRlWDogaSxcbiAgICB0cmFuc2xhdGVZOiBvLFxuICAgIHJvdGF0ZTogTWF0aC5hdGFuMihuLCB0KSAqIEtyLFxuICAgIHNrZXdYOiBNYXRoLmF0YW4oYykgKiBLcixcbiAgICBzY2FsZVg6IHUsXG4gICAgc2NhbGVZOiBhXG4gIH07XG59XG52YXIgTG47XG5mdW5jdGlvbiBkdSh0KSB7XG4gIGNvbnN0IG4gPSBuZXcgKHR5cGVvZiBET01NYXRyaXggPT0gXCJmdW5jdGlvblwiID8gRE9NTWF0cml4IDogV2ViS2l0Q1NTTWF0cml4KSh0ICsgXCJcIik7XG4gIHJldHVybiBuLmlzSWRlbnRpdHkgPyBxZSA6IFZpKG4uYSwgbi5iLCBuLmMsIG4uZCwgbi5lLCBuLmYpO1xufVxuZnVuY3Rpb24gbXUodCkge1xuICByZXR1cm4gdCA9PSBudWxsIHx8IChMbiB8fCAoTG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcImdcIikpLCBMbi5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgdCksICEodCA9IExuLnRyYW5zZm9ybS5iYXNlVmFsLmNvbnNvbGlkYXRlKCkpKSA/IHFlIDogKHQgPSB0Lm1hdHJpeCwgVmkodC5hLCB0LmIsIHQuYywgdC5kLCB0LmUsIHQuZikpO1xufVxuZnVuY3Rpb24gSGkodCwgbiwgZSwgcikge1xuICBmdW5jdGlvbiBpKGwpIHtcbiAgICByZXR1cm4gbC5sZW5ndGggPyBsLnBvcCgpICsgXCIgXCIgOiBcIlwiO1xuICB9XG4gIGZ1bmN0aW9uIG8obCwgcywgZiwgaCwgcCwgdikge1xuICAgIGlmIChsICE9PSBmIHx8IHMgIT09IGgpIHtcbiAgICAgIHZhciBFID0gcC5wdXNoKFwidHJhbnNsYXRlKFwiLCBudWxsLCBuLCBudWxsLCBlKTtcbiAgICAgIHYucHVzaCh7IGk6IEUgLSA0LCB4OiBHdChsLCBmKSB9LCB7IGk6IEUgLSAyLCB4OiBHdChzLCBoKSB9KTtcbiAgICB9IGVsc2UgKGYgfHwgaCkgJiYgcC5wdXNoKFwidHJhbnNsYXRlKFwiICsgZiArIG4gKyBoICsgZSk7XG4gIH1cbiAgZnVuY3Rpb24gdShsLCBzLCBmLCBoKSB7XG4gICAgbCAhPT0gcyA/IChsIC0gcyA+IDE4MCA/IHMgKz0gMzYwIDogcyAtIGwgPiAxODAgJiYgKGwgKz0gMzYwKSwgaC5wdXNoKHsgaTogZi5wdXNoKGkoZikgKyBcInJvdGF0ZShcIiwgbnVsbCwgcikgLSAyLCB4OiBHdChsLCBzKSB9KSkgOiBzICYmIGYucHVzaChpKGYpICsgXCJyb3RhdGUoXCIgKyBzICsgcik7XG4gIH1cbiAgZnVuY3Rpb24gYShsLCBzLCBmLCBoKSB7XG4gICAgbCAhPT0gcyA/IGgucHVzaCh7IGk6IGYucHVzaChpKGYpICsgXCJza2V3WChcIiwgbnVsbCwgcikgLSAyLCB4OiBHdChsLCBzKSB9KSA6IHMgJiYgZi5wdXNoKGkoZikgKyBcInNrZXdYKFwiICsgcyArIHIpO1xuICB9XG4gIGZ1bmN0aW9uIGMobCwgcywgZiwgaCwgcCwgdikge1xuICAgIGlmIChsICE9PSBmIHx8IHMgIT09IGgpIHtcbiAgICAgIHZhciBFID0gcC5wdXNoKGkocCkgKyBcInNjYWxlKFwiLCBudWxsLCBcIixcIiwgbnVsbCwgXCIpXCIpO1xuICAgICAgdi5wdXNoKHsgaTogRSAtIDQsIHg6IEd0KGwsIGYpIH0sIHsgaTogRSAtIDIsIHg6IEd0KHMsIGgpIH0pO1xuICAgIH0gZWxzZSAoZiAhPT0gMSB8fCBoICE9PSAxKSAmJiBwLnB1c2goaShwKSArIFwic2NhbGUoXCIgKyBmICsgXCIsXCIgKyBoICsgXCIpXCIpO1xuICB9XG4gIHJldHVybiBmdW5jdGlvbihsLCBzKSB7XG4gICAgdmFyIGYgPSBbXSwgaCA9IFtdO1xuICAgIHJldHVybiBsID0gdChsKSwgcyA9IHQocyksIG8obC50cmFuc2xhdGVYLCBsLnRyYW5zbGF0ZVksIHMudHJhbnNsYXRlWCwgcy50cmFuc2xhdGVZLCBmLCBoKSwgdShsLnJvdGF0ZSwgcy5yb3RhdGUsIGYsIGgpLCBhKGwuc2tld1gsIHMuc2tld1gsIGYsIGgpLCBjKGwuc2NhbGVYLCBsLnNjYWxlWSwgcy5zY2FsZVgsIHMuc2NhbGVZLCBmLCBoKSwgbCA9IHMgPSBudWxsLCBmdW5jdGlvbihwKSB7XG4gICAgICBmb3IgKHZhciB2ID0gLTEsIEUgPSBoLmxlbmd0aCwgUzsgKyt2IDwgRTsgKSBmWyhTID0gaFt2XSkuaV0gPSBTLngocCk7XG4gICAgICByZXR1cm4gZi5qb2luKFwiXCIpO1xuICAgIH07XG4gIH07XG59XG52YXIgeXUgPSBIaShkdSwgXCJweCwgXCIsIFwicHgpXCIsIFwiZGVnKVwiKSwgd3UgPSBIaShtdSwgXCIsIFwiLCBcIilcIiwgXCIpXCIpLCBfdSA9IDFlLTEyO1xuZnVuY3Rpb24gUXIodCkge1xuICByZXR1cm4gKCh0ID0gTWF0aC5leHAodCkpICsgMSAvIHQpIC8gMjtcbn1cbmZ1bmN0aW9uIEV1KHQpIHtcbiAgcmV0dXJuICgodCA9IE1hdGguZXhwKHQpKSAtIDEgLyB0KSAvIDI7XG59XG5mdW5jdGlvbiBTdSh0KSB7XG4gIHJldHVybiAoKHQgPSBNYXRoLmV4cCgyICogdCkpIC0gMSkgLyAodCArIDEpO1xufVxuY29uc3QgTXUgPSBmdW5jdGlvbiB0KG4sIGUsIHIpIHtcbiAgZnVuY3Rpb24gaShvLCB1KSB7XG4gICAgdmFyIGEgPSBvWzBdLCBjID0gb1sxXSwgbCA9IG9bMl0sIHMgPSB1WzBdLCBmID0gdVsxXSwgaCA9IHVbMl0sIHAgPSBzIC0gYSwgdiA9IGYgLSBjLCBFID0gcCAqIHAgKyB2ICogdiwgUywgeTtcbiAgICBpZiAoRSA8IF91KVxuICAgICAgeSA9IE1hdGgubG9nKGggLyBsKSAvIG4sIFMgPSBmdW5jdGlvbihDKSB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgYSArIEMgKiBwLFxuICAgICAgICAgIGMgKyBDICogdixcbiAgICAgICAgICBsICogTWF0aC5leHAobiAqIEMgKiB5KVxuICAgICAgICBdO1xuICAgICAgfTtcbiAgICBlbHNlIHtcbiAgICAgIHZhciBNID0gTWF0aC5zcXJ0KEUpLCBtID0gKGggKiBoIC0gbCAqIGwgKyByICogRSkgLyAoMiAqIGwgKiBlICogTSksIF8gPSAoaCAqIGggLSBsICogbCAtIHIgKiBFKSAvICgyICogaCAqIGUgKiBNKSwgeCA9IE1hdGgubG9nKE1hdGguc3FydChtICogbSArIDEpIC0gbSksIE4gPSBNYXRoLmxvZyhNYXRoLnNxcnQoXyAqIF8gKyAxKSAtIF8pO1xuICAgICAgeSA9IChOIC0geCkgLyBuLCBTID0gZnVuY3Rpb24oQykge1xuICAgICAgICB2YXIgRiA9IEMgKiB5LCBEID0gUXIoeCksIGIgPSBsIC8gKGUgKiBNKSAqIChEICogU3UobiAqIEYgKyB4KSAtIEV1KHgpKTtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICBhICsgYiAqIHAsXG4gICAgICAgICAgYyArIGIgKiB2LFxuICAgICAgICAgIGwgKiBEIC8gUXIobiAqIEYgKyB4KVxuICAgICAgICBdO1xuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIFMuZHVyYXRpb24gPSB5ICogMWUzICogbiAvIE1hdGguU1FSVDIsIFM7XG4gIH1cbiAgcmV0dXJuIGkucmhvID0gZnVuY3Rpb24obykge1xuICAgIHZhciB1ID0gTWF0aC5tYXgoMWUtMywgK28pLCBhID0gdSAqIHUsIGMgPSBhICogYTtcbiAgICByZXR1cm4gdCh1LCBhLCBjKTtcbiAgfSwgaTtcbn0oTWF0aC5TUVJUMiwgMiwgNCk7XG52YXIga2UgPSB7IGV4cG9ydHM6IHt9IH0sIFJlLCBKcjtcbmZ1bmN0aW9uIHh1KCkge1xuICBpZiAoSnIpIHJldHVybiBSZTtcbiAgSnIgPSAxO1xuICB2YXIgdCA9IFwiU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRURcIjtcbiAgcmV0dXJuIFJlID0gdCwgUmU7XG59XG52YXIgQ2UsIHRpO1xuZnVuY3Rpb24gUHUoKSB7XG4gIGlmICh0aSkgcmV0dXJuIENlO1xuICB0aSA9IDE7XG4gIHZhciB0ID0gLyogQF9fUFVSRV9fICovIHh1KCk7XG4gIGZ1bmN0aW9uIG4oKSB7XG4gIH1cbiAgZnVuY3Rpb24gZSgpIHtcbiAgfVxuICByZXR1cm4gZS5yZXNldFdhcm5pbmdDYWNoZSA9IG4sIENlID0gZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gcih1LCBhLCBjLCBsLCBzLCBmKSB7XG4gICAgICBpZiAoZiAhPT0gdCkge1xuICAgICAgICB2YXIgaCA9IG5ldyBFcnJvcihcbiAgICAgICAgICBcIkNhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuIFVzZSBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKSB0byBjYWxsIHRoZW0uIFJlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXNcIlxuICAgICAgICApO1xuICAgICAgICB0aHJvdyBoLm5hbWUgPSBcIkludmFyaWFudCBWaW9sYXRpb25cIiwgaDtcbiAgICAgIH1cbiAgICB9XG4gICAgci5pc1JlcXVpcmVkID0gcjtcbiAgICBmdW5jdGlvbiBpKCkge1xuICAgICAgcmV0dXJuIHI7XG4gICAgfVxuICAgIHZhciBvID0ge1xuICAgICAgYXJyYXk6IHIsXG4gICAgICBiaWdpbnQ6IHIsXG4gICAgICBib29sOiByLFxuICAgICAgZnVuYzogcixcbiAgICAgIG51bWJlcjogcixcbiAgICAgIG9iamVjdDogcixcbiAgICAgIHN0cmluZzogcixcbiAgICAgIHN5bWJvbDogcixcbiAgICAgIGFueTogcixcbiAgICAgIGFycmF5T2Y6IGksXG4gICAgICBlbGVtZW50OiByLFxuICAgICAgZWxlbWVudFR5cGU6IHIsXG4gICAgICBpbnN0YW5jZU9mOiBpLFxuICAgICAgbm9kZTogcixcbiAgICAgIG9iamVjdE9mOiBpLFxuICAgICAgb25lT2Y6IGksXG4gICAgICBvbmVPZlR5cGU6IGksXG4gICAgICBzaGFwZTogaSxcbiAgICAgIGV4YWN0OiBpLFxuICAgICAgY2hlY2tQcm9wVHlwZXM6IGUsXG4gICAgICByZXNldFdhcm5pbmdDYWNoZTogblxuICAgIH07XG4gICAgcmV0dXJuIG8uUHJvcFR5cGVzID0gbywgbztcbiAgfSwgQ2U7XG59XG52YXIgbmk7XG5mdW5jdGlvbiBOdSgpIHtcbiAgcmV0dXJuIG5pIHx8IChuaSA9IDEsIGtlLmV4cG9ydHMgPSAvKiBAX19QVVJFX18gKi8gUHUoKSgpKSwga2UuZXhwb3J0cztcbn1cbnZhciAkdSA9IC8qIEBfX1BVUkVfXyAqLyBOdSgpO1xuY29uc3QgUCA9IC8qIEBfX1BVUkVfXyAqLyBwdSgkdSk7XG52YXIgeiA9IDFlLTYsIE1uID0gMWUtMTIsIGogPSBNYXRoLlBJLCBKID0gaiAvIDIsIEtuID0gaiAvIDQsIHN0ID0gaiAqIDIsIFcgPSAxODAgLyBqLCBPID0gaiAvIDE4MCwgWCA9IE1hdGguYWJzLCB1biA9IE1hdGguYXRhbiwgY3QgPSBNYXRoLmF0YW4yLCBSID0gTWF0aC5jb3MsIEZuID0gTWF0aC5jZWlsLCBLaSA9IE1hdGguZXhwLCBqZSA9IE1hdGguaHlwb3QsIFFuID0gTWF0aC5sb2csIHplID0gTWF0aC5wb3csIEEgPSBNYXRoLnNpbiwgX3QgPSBNYXRoLnNpZ24gfHwgZnVuY3Rpb24odCkge1xuICByZXR1cm4gdCA+IDAgPyAxIDogdCA8IDAgPyAtMSA6IDA7XG59LCBldCA9IE1hdGguc3FydCwgd3IgPSBNYXRoLnRhbjtcbmZ1bmN0aW9uIFFpKHQpIHtcbiAgcmV0dXJuIHQgPiAxID8gMCA6IHQgPCAtMSA/IGogOiBNYXRoLmFjb3ModCk7XG59XG5mdW5jdGlvbiBsdCh0KSB7XG4gIHJldHVybiB0ID4gMSA/IEogOiB0IDwgLTEgPyAtSiA6IE1hdGguYXNpbih0KTtcbn1cbmZ1bmN0aW9uIGVpKHQpIHtcbiAgcmV0dXJuICh0ID0gQSh0IC8gMikpICogdDtcbn1cbmZ1bmN0aW9uIEsoKSB7XG59XG5mdW5jdGlvbiBKbih0LCBuKSB7XG4gIHQgJiYgaWkuaGFzT3duUHJvcGVydHkodC50eXBlKSAmJiBpaVt0LnR5cGVdKHQsIG4pO1xufVxudmFyIHJpID0ge1xuICBGZWF0dXJlOiBmdW5jdGlvbih0LCBuKSB7XG4gICAgSm4odC5nZW9tZXRyeSwgbik7XG4gIH0sXG4gIEZlYXR1cmVDb2xsZWN0aW9uOiBmdW5jdGlvbih0LCBuKSB7XG4gICAgZm9yICh2YXIgZSA9IHQuZmVhdHVyZXMsIHIgPSAtMSwgaSA9IGUubGVuZ3RoOyArK3IgPCBpOyApIEpuKGVbcl0uZ2VvbWV0cnksIG4pO1xuICB9XG59LCBpaSA9IHtcbiAgU3BoZXJlOiBmdW5jdGlvbih0LCBuKSB7XG4gICAgbi5zcGhlcmUoKTtcbiAgfSxcbiAgUG9pbnQ6IGZ1bmN0aW9uKHQsIG4pIHtcbiAgICB0ID0gdC5jb29yZGluYXRlcywgbi5wb2ludCh0WzBdLCB0WzFdLCB0WzJdKTtcbiAgfSxcbiAgTXVsdGlQb2ludDogZnVuY3Rpb24odCwgbikge1xuICAgIGZvciAodmFyIGUgPSB0LmNvb3JkaW5hdGVzLCByID0gLTEsIGkgPSBlLmxlbmd0aDsgKytyIDwgaTsgKSB0ID0gZVtyXSwgbi5wb2ludCh0WzBdLCB0WzFdLCB0WzJdKTtcbiAgfSxcbiAgTGluZVN0cmluZzogZnVuY3Rpb24odCwgbikge1xuICAgIFhlKHQuY29vcmRpbmF0ZXMsIG4sIDApO1xuICB9LFxuICBNdWx0aUxpbmVTdHJpbmc6IGZ1bmN0aW9uKHQsIG4pIHtcbiAgICBmb3IgKHZhciBlID0gdC5jb29yZGluYXRlcywgciA9IC0xLCBpID0gZS5sZW5ndGg7ICsrciA8IGk7ICkgWGUoZVtyXSwgbiwgMCk7XG4gIH0sXG4gIFBvbHlnb246IGZ1bmN0aW9uKHQsIG4pIHtcbiAgICBvaSh0LmNvb3JkaW5hdGVzLCBuKTtcbiAgfSxcbiAgTXVsdGlQb2x5Z29uOiBmdW5jdGlvbih0LCBuKSB7XG4gICAgZm9yICh2YXIgZSA9IHQuY29vcmRpbmF0ZXMsIHIgPSAtMSwgaSA9IGUubGVuZ3RoOyArK3IgPCBpOyApIG9pKGVbcl0sIG4pO1xuICB9LFxuICBHZW9tZXRyeUNvbGxlY3Rpb246IGZ1bmN0aW9uKHQsIG4pIHtcbiAgICBmb3IgKHZhciBlID0gdC5nZW9tZXRyaWVzLCByID0gLTEsIGkgPSBlLmxlbmd0aDsgKytyIDwgaTsgKSBKbihlW3JdLCBuKTtcbiAgfVxufTtcbmZ1bmN0aW9uIFhlKHQsIG4sIGUpIHtcbiAgdmFyIHIgPSAtMSwgaSA9IHQubGVuZ3RoIC0gZSwgbztcbiAgZm9yIChuLmxpbmVTdGFydCgpOyArK3IgPCBpOyApIG8gPSB0W3JdLCBuLnBvaW50KG9bMF0sIG9bMV0sIG9bMl0pO1xuICBuLmxpbmVFbmQoKTtcbn1cbmZ1bmN0aW9uIG9pKHQsIG4pIHtcbiAgdmFyIGUgPSAtMSwgciA9IHQubGVuZ3RoO1xuICBmb3IgKG4ucG9seWdvblN0YXJ0KCk7ICsrZSA8IHI7ICkgWGUodFtlXSwgbiwgMSk7XG4gIG4ucG9seWdvbkVuZCgpO1xufVxuZnVuY3Rpb24gU3QodCwgbikge1xuICB0ICYmIHJpLmhhc093blByb3BlcnR5KHQudHlwZSkgPyByaVt0LnR5cGVdKHQsIG4pIDogSm4odCwgbik7XG59XG52YXIgdGUgPSBuZXcgaXQoKSwgbmUgPSBuZXcgaXQoKSwgSmksIHRvLCBHZSwgWmUsIEJlLCAkdCA9IHtcbiAgcG9pbnQ6IEssXG4gIGxpbmVTdGFydDogSyxcbiAgbGluZUVuZDogSyxcbiAgcG9seWdvblN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICB0ZSA9IG5ldyBpdCgpLCAkdC5saW5lU3RhcnQgPSBBdSwgJHQubGluZUVuZCA9IFR1O1xuICB9LFxuICBwb2x5Z29uRW5kOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgdCA9ICt0ZTtcbiAgICBuZS5hZGQodCA8IDAgPyBzdCArIHQgOiB0KSwgdGhpcy5saW5lU3RhcnQgPSB0aGlzLmxpbmVFbmQgPSB0aGlzLnBvaW50ID0gSztcbiAgfSxcbiAgc3BoZXJlOiBmdW5jdGlvbigpIHtcbiAgICBuZS5hZGQoc3QpO1xuICB9XG59O1xuZnVuY3Rpb24gQXUoKSB7XG4gICR0LnBvaW50ID0ga3U7XG59XG5mdW5jdGlvbiBUdSgpIHtcbiAgbm8oSmksIHRvKTtcbn1cbmZ1bmN0aW9uIGt1KHQsIG4pIHtcbiAgJHQucG9pbnQgPSBubywgSmkgPSB0LCB0byA9IG4sIHQgKj0gTywgbiAqPSBPLCBHZSA9IHQsIFplID0gUihuID0gbiAvIDIgKyBLbiksIEJlID0gQShuKTtcbn1cbmZ1bmN0aW9uIG5vKHQsIG4pIHtcbiAgdCAqPSBPLCBuICo9IE8sIG4gPSBuIC8gMiArIEtuO1xuICB2YXIgZSA9IHQgLSBHZSwgciA9IGUgPj0gMCA/IDEgOiAtMSwgaSA9IHIgKiBlLCBvID0gUihuKSwgdSA9IEEobiksIGEgPSBCZSAqIHUsIGMgPSBaZSAqIG8gKyBhICogUihpKSwgbCA9IGEgKiByICogQShpKTtcbiAgdGUuYWRkKGN0KGwsIGMpKSwgR2UgPSB0LCBaZSA9IG8sIEJlID0gdTtcbn1cbmZ1bmN0aW9uIFJ1KHQpIHtcbiAgcmV0dXJuIG5lID0gbmV3IGl0KCksIFN0KHQsICR0KSwgbmUgKiAyO1xufVxuZnVuY3Rpb24gZWUodCkge1xuICByZXR1cm4gW2N0KHRbMV0sIHRbMF0pLCBsdCh0WzJdKV07XG59XG5mdW5jdGlvbiBCdCh0KSB7XG4gIHZhciBuID0gdFswXSwgZSA9IHRbMV0sIHIgPSBSKGUpO1xuICByZXR1cm4gW3IgKiBSKG4pLCByICogQShuKSwgQShlKV07XG59XG5mdW5jdGlvbiBJbih0LCBuKSB7XG4gIHJldHVybiB0WzBdICogblswXSArIHRbMV0gKiBuWzFdICsgdFsyXSAqIG5bMl07XG59XG5mdW5jdGlvbiB0bih0LCBuKSB7XG4gIHJldHVybiBbdFsxXSAqIG5bMl0gLSB0WzJdICogblsxXSwgdFsyXSAqIG5bMF0gLSB0WzBdICogblsyXSwgdFswXSAqIG5bMV0gLSB0WzFdICogblswXV07XG59XG5mdW5jdGlvbiBPZSh0LCBuKSB7XG4gIHRbMF0gKz0gblswXSwgdFsxXSArPSBuWzFdLCB0WzJdICs9IG5bMl07XG59XG5mdW5jdGlvbiBEbih0LCBuKSB7XG4gIHJldHVybiBbdFswXSAqIG4sIHRbMV0gKiBuLCB0WzJdICogbl07XG59XG5mdW5jdGlvbiByZSh0KSB7XG4gIHZhciBuID0gZXQodFswXSAqIHRbMF0gKyB0WzFdICogdFsxXSArIHRbMl0gKiB0WzJdKTtcbiAgdFswXSAvPSBuLCB0WzFdIC89IG4sIHRbMl0gLz0gbjtcbn1cbnZhciBILCBmdCwgUSwgZHQsIFp0LCBlbywgcm8sIFF0LCB5biwgcXQsIEx0LCBDdCA9IHtcbiAgcG9pbnQ6IFllLFxuICBsaW5lU3RhcnQ6IHVpLFxuICBsaW5lRW5kOiBhaSxcbiAgcG9seWdvblN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICBDdC5wb2ludCA9IG9vLCBDdC5saW5lU3RhcnQgPSBDdSwgQ3QubGluZUVuZCA9IHp1LCB5biA9IG5ldyBpdCgpLCAkdC5wb2x5Z29uU3RhcnQoKTtcbiAgfSxcbiAgcG9seWdvbkVuZDogZnVuY3Rpb24oKSB7XG4gICAgJHQucG9seWdvbkVuZCgpLCBDdC5wb2ludCA9IFllLCBDdC5saW5lU3RhcnQgPSB1aSwgQ3QubGluZUVuZCA9IGFpLCB0ZSA8IDAgPyAoSCA9IC0oUSA9IDE4MCksIGZ0ID0gLShkdCA9IDkwKSkgOiB5biA+IHogPyBkdCA9IDkwIDogeW4gPCAteiAmJiAoZnQgPSAtOTApLCBMdFswXSA9IEgsIEx0WzFdID0gUTtcbiAgfSxcbiAgc3BoZXJlOiBmdW5jdGlvbigpIHtcbiAgICBIID0gLShRID0gMTgwKSwgZnQgPSAtKGR0ID0gOTApO1xuICB9XG59O1xuZnVuY3Rpb24gWWUodCwgbikge1xuICBxdC5wdXNoKEx0ID0gW0ggPSB0LCBRID0gdF0pLCBuIDwgZnQgJiYgKGZ0ID0gbiksIG4gPiBkdCAmJiAoZHQgPSBuKTtcbn1cbmZ1bmN0aW9uIGlvKHQsIG4pIHtcbiAgdmFyIGUgPSBCdChbdCAqIE8sIG4gKiBPXSk7XG4gIGlmIChRdCkge1xuICAgIHZhciByID0gdG4oUXQsIGUpLCBpID0gW3JbMV0sIC1yWzBdLCAwXSwgbyA9IHRuKGksIHIpO1xuICAgIHJlKG8pLCBvID0gZWUobyk7XG4gICAgdmFyIHUgPSB0IC0gWnQsIGEgPSB1ID4gMCA/IDEgOiAtMSwgYyA9IG9bMF0gKiBXICogYSwgbCwgcyA9IFgodSkgPiAxODA7XG4gICAgcyBeIChhICogWnQgPCBjICYmIGMgPCBhICogdCkgPyAobCA9IG9bMV0gKiBXLCBsID4gZHQgJiYgKGR0ID0gbCkpIDogKGMgPSAoYyArIDM2MCkgJSAzNjAgLSAxODAsIHMgXiAoYSAqIFp0IDwgYyAmJiBjIDwgYSAqIHQpID8gKGwgPSAtb1sxXSAqIFcsIGwgPCBmdCAmJiAoZnQgPSBsKSkgOiAobiA8IGZ0ICYmIChmdCA9IG4pLCBuID4gZHQgJiYgKGR0ID0gbikpKSwgcyA/IHQgPCBadCA/IGd0KEgsIHQpID4gZ3QoSCwgUSkgJiYgKFEgPSB0KSA6IGd0KHQsIFEpID4gZ3QoSCwgUSkgJiYgKEggPSB0KSA6IFEgPj0gSCA/ICh0IDwgSCAmJiAoSCA9IHQpLCB0ID4gUSAmJiAoUSA9IHQpKSA6IHQgPiBadCA/IGd0KEgsIHQpID4gZ3QoSCwgUSkgJiYgKFEgPSB0KSA6IGd0KHQsIFEpID4gZ3QoSCwgUSkgJiYgKEggPSB0KTtcbiAgfSBlbHNlXG4gICAgcXQucHVzaChMdCA9IFtIID0gdCwgUSA9IHRdKTtcbiAgbiA8IGZ0ICYmIChmdCA9IG4pLCBuID4gZHQgJiYgKGR0ID0gbiksIFF0ID0gZSwgWnQgPSB0O1xufVxuZnVuY3Rpb24gdWkoKSB7XG4gIEN0LnBvaW50ID0gaW87XG59XG5mdW5jdGlvbiBhaSgpIHtcbiAgTHRbMF0gPSBILCBMdFsxXSA9IFEsIEN0LnBvaW50ID0gWWUsIFF0ID0gbnVsbDtcbn1cbmZ1bmN0aW9uIG9vKHQsIG4pIHtcbiAgaWYgKFF0KSB7XG4gICAgdmFyIGUgPSB0IC0gWnQ7XG4gICAgeW4uYWRkKFgoZSkgPiAxODAgPyBlICsgKGUgPiAwID8gMzYwIDogLTM2MCkgOiBlKTtcbiAgfSBlbHNlXG4gICAgZW8gPSB0LCBybyA9IG47XG4gICR0LnBvaW50KHQsIG4pLCBpbyh0LCBuKTtcbn1cbmZ1bmN0aW9uIEN1KCkge1xuICAkdC5saW5lU3RhcnQoKTtcbn1cbmZ1bmN0aW9uIHp1KCkge1xuICBvbyhlbywgcm8pLCAkdC5saW5lRW5kKCksIFgoeW4pID4geiAmJiAoSCA9IC0oUSA9IDE4MCkpLCBMdFswXSA9IEgsIEx0WzFdID0gUSwgUXQgPSBudWxsO1xufVxuZnVuY3Rpb24gZ3QodCwgbikge1xuICByZXR1cm4gKG4gLT0gdCkgPCAwID8gbiArIDM2MCA6IG47XG59XG5mdW5jdGlvbiBPdSh0LCBuKSB7XG4gIHJldHVybiB0WzBdIC0gblswXTtcbn1cbmZ1bmN0aW9uIHNpKHQsIG4pIHtcbiAgcmV0dXJuIHRbMF0gPD0gdFsxXSA/IHRbMF0gPD0gbiAmJiBuIDw9IHRbMV0gOiBuIDwgdFswXSB8fCB0WzFdIDwgbjtcbn1cbmZ1bmN0aW9uIEx1KHQpIHtcbiAgdmFyIG4sIGUsIHIsIGksIG8sIHUsIGE7XG4gIGlmIChkdCA9IFEgPSAtKEggPSBmdCA9IDEgLyAwKSwgcXQgPSBbXSwgU3QodCwgQ3QpLCBlID0gcXQubGVuZ3RoKSB7XG4gICAgZm9yIChxdC5zb3J0KE91KSwgbiA9IDEsIHIgPSBxdFswXSwgbyA9IFtyXTsgbiA8IGU7ICsrbilcbiAgICAgIGkgPSBxdFtuXSwgc2kociwgaVswXSkgfHwgc2kociwgaVsxXSkgPyAoZ3QoclswXSwgaVsxXSkgPiBndChyWzBdLCByWzFdKSAmJiAoclsxXSA9IGlbMV0pLCBndChpWzBdLCByWzFdKSA+IGd0KHJbMF0sIHJbMV0pICYmIChyWzBdID0gaVswXSkpIDogby5wdXNoKHIgPSBpKTtcbiAgICBmb3IgKHUgPSAtMSAvIDAsIGUgPSBvLmxlbmd0aCAtIDEsIG4gPSAwLCByID0gb1tlXTsgbiA8PSBlOyByID0gaSwgKytuKVxuICAgICAgaSA9IG9bbl0sIChhID0gZ3QoclsxXSwgaVswXSkpID4gdSAmJiAodSA9IGEsIEggPSBpWzBdLCBRID0gclsxXSk7XG4gIH1cbiAgcmV0dXJuIHF0ID0gTHQgPSBudWxsLCBIID09PSAxIC8gMCB8fCBmdCA9PT0gMSAvIDAgPyBbW05hTiwgTmFOXSwgW05hTiwgTmFOXV0gOiBbW0gsIGZ0XSwgW1EsIGR0XV07XG59XG52YXIgbG4sIGllLCBvZSwgdWUsIGFlLCBzZSwgY2UsIGxlLCBXZSwgVWUsIFZlLCB1bywgYW8sIG90LCB1dCwgYXQsIE10ID0ge1xuICBzcGhlcmU6IEssXG4gIHBvaW50OiBfcixcbiAgbGluZVN0YXJ0OiBjaSxcbiAgbGluZUVuZDogbGksXG4gIHBvbHlnb25TdGFydDogZnVuY3Rpb24oKSB7XG4gICAgTXQubGluZVN0YXJ0ID0gRHUsIE10LmxpbmVFbmQgPSBidTtcbiAgfSxcbiAgcG9seWdvbkVuZDogZnVuY3Rpb24oKSB7XG4gICAgTXQubGluZVN0YXJ0ID0gY2ksIE10LmxpbmVFbmQgPSBsaTtcbiAgfVxufTtcbmZ1bmN0aW9uIF9yKHQsIG4pIHtcbiAgdCAqPSBPLCBuICo9IE87XG4gIHZhciBlID0gUihuKTtcbiAgVG4oZSAqIFIodCksIGUgKiBBKHQpLCBBKG4pKTtcbn1cbmZ1bmN0aW9uIFRuKHQsIG4sIGUpIHtcbiAgKytsbiwgb2UgKz0gKHQgLSBvZSkgLyBsbiwgdWUgKz0gKG4gLSB1ZSkgLyBsbiwgYWUgKz0gKGUgLSBhZSkgLyBsbjtcbn1cbmZ1bmN0aW9uIGNpKCkge1xuICBNdC5wb2ludCA9IEZ1O1xufVxuZnVuY3Rpb24gRnUodCwgbikge1xuICB0ICo9IE8sIG4gKj0gTztcbiAgdmFyIGUgPSBSKG4pO1xuICBvdCA9IGUgKiBSKHQpLCB1dCA9IGUgKiBBKHQpLCBhdCA9IEEobiksIE10LnBvaW50ID0gSXUsIFRuKG90LCB1dCwgYXQpO1xufVxuZnVuY3Rpb24gSXUodCwgbikge1xuICB0ICo9IE8sIG4gKj0gTztcbiAgdmFyIGUgPSBSKG4pLCByID0gZSAqIFIodCksIGkgPSBlICogQSh0KSwgbyA9IEEobiksIHUgPSBjdChldCgodSA9IHV0ICogbyAtIGF0ICogaSkgKiB1ICsgKHUgPSBhdCAqIHIgLSBvdCAqIG8pICogdSArICh1ID0gb3QgKiBpIC0gdXQgKiByKSAqIHUpLCBvdCAqIHIgKyB1dCAqIGkgKyBhdCAqIG8pO1xuICBpZSArPSB1LCBzZSArPSB1ICogKG90ICsgKG90ID0gcikpLCBjZSArPSB1ICogKHV0ICsgKHV0ID0gaSkpLCBsZSArPSB1ICogKGF0ICsgKGF0ID0gbykpLCBUbihvdCwgdXQsIGF0KTtcbn1cbmZ1bmN0aW9uIGxpKCkge1xuICBNdC5wb2ludCA9IF9yO1xufVxuZnVuY3Rpb24gRHUoKSB7XG4gIE10LnBvaW50ID0gcXU7XG59XG5mdW5jdGlvbiBidSgpIHtcbiAgc28odW8sIGFvKSwgTXQucG9pbnQgPSBfcjtcbn1cbmZ1bmN0aW9uIHF1KHQsIG4pIHtcbiAgdW8gPSB0LCBhbyA9IG4sIHQgKj0gTywgbiAqPSBPLCBNdC5wb2ludCA9IHNvO1xuICB2YXIgZSA9IFIobik7XG4gIG90ID0gZSAqIFIodCksIHV0ID0gZSAqIEEodCksIGF0ID0gQShuKSwgVG4ob3QsIHV0LCBhdCk7XG59XG5mdW5jdGlvbiBzbyh0LCBuKSB7XG4gIHQgKj0gTywgbiAqPSBPO1xuICB2YXIgZSA9IFIobiksIHIgPSBlICogUih0KSwgaSA9IGUgKiBBKHQpLCBvID0gQShuKSwgdSA9IHV0ICogbyAtIGF0ICogaSwgYSA9IGF0ICogciAtIG90ICogbywgYyA9IG90ICogaSAtIHV0ICogciwgbCA9IGplKHUsIGEsIGMpLCBzID0gbHQobCksIGYgPSBsICYmIC1zIC8gbDtcbiAgV2UuYWRkKGYgKiB1KSwgVWUuYWRkKGYgKiBhKSwgVmUuYWRkKGYgKiBjKSwgaWUgKz0gcywgc2UgKz0gcyAqIChvdCArIChvdCA9IHIpKSwgY2UgKz0gcyAqICh1dCArICh1dCA9IGkpKSwgbGUgKz0gcyAqIChhdCArIChhdCA9IG8pKSwgVG4ob3QsIHV0LCBhdCk7XG59XG5mdW5jdGlvbiBqdSh0KSB7XG4gIGxuID0gaWUgPSBvZSA9IHVlID0gYWUgPSBzZSA9IGNlID0gbGUgPSAwLCBXZSA9IG5ldyBpdCgpLCBVZSA9IG5ldyBpdCgpLCBWZSA9IG5ldyBpdCgpLCBTdCh0LCBNdCk7XG4gIHZhciBuID0gK1dlLCBlID0gK1VlLCByID0gK1ZlLCBpID0gamUobiwgZSwgcik7XG4gIHJldHVybiBpIDwgTW4gJiYgKG4gPSBzZSwgZSA9IGNlLCByID0gbGUsIGllIDwgeiAmJiAobiA9IG9lLCBlID0gdWUsIHIgPSBhZSksIGkgPSBqZShuLCBlLCByKSwgaSA8IE1uKSA/IFtOYU4sIE5hTl0gOiBbY3QoZSwgbikgKiBXLCBsdChyIC8gaSkgKiBXXTtcbn1cbmZ1bmN0aW9uIFV0KHQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0O1xuICB9O1xufVxuZnVuY3Rpb24gSGUodCwgbikge1xuICBmdW5jdGlvbiBlKHIsIGkpIHtcbiAgICByZXR1cm4gciA9IHQociwgaSksIG4oclswXSwgclsxXSk7XG4gIH1cbiAgcmV0dXJuIHQuaW52ZXJ0ICYmIG4uaW52ZXJ0ICYmIChlLmludmVydCA9IGZ1bmN0aW9uKHIsIGkpIHtcbiAgICByZXR1cm4gciA9IG4uaW52ZXJ0KHIsIGkpLCByICYmIHQuaW52ZXJ0KHJbMF0sIHJbMV0pO1xuICB9KSwgZTtcbn1cbmZ1bmN0aW9uIEtlKHQsIG4pIHtcbiAgcmV0dXJuIFgodCkgPiBqICYmICh0IC09IE1hdGgucm91bmQodCAvIHN0KSAqIHN0KSwgW3QsIG5dO1xufVxuS2UuaW52ZXJ0ID0gS2U7XG5mdW5jdGlvbiBFcih0LCBuLCBlKSB7XG4gIHJldHVybiAodCAlPSBzdCkgPyBuIHx8IGUgPyBIZShoaSh0KSwgcGkobiwgZSkpIDogaGkodCkgOiBuIHx8IGUgPyBwaShuLCBlKSA6IEtlO1xufVxuZnVuY3Rpb24gZmkodCkge1xuICByZXR1cm4gZnVuY3Rpb24obiwgZSkge1xuICAgIHJldHVybiBuICs9IHQsIFgobikgPiBqICYmIChuIC09IE1hdGgucm91bmQobiAvIHN0KSAqIHN0KSwgW24sIGVdO1xuICB9O1xufVxuZnVuY3Rpb24gaGkodCkge1xuICB2YXIgbiA9IGZpKHQpO1xuICByZXR1cm4gbi5pbnZlcnQgPSBmaSgtdCksIG47XG59XG5mdW5jdGlvbiBwaSh0LCBuKSB7XG4gIHZhciBlID0gUih0KSwgciA9IEEodCksIGkgPSBSKG4pLCBvID0gQShuKTtcbiAgZnVuY3Rpb24gdShhLCBjKSB7XG4gICAgdmFyIGwgPSBSKGMpLCBzID0gUihhKSAqIGwsIGYgPSBBKGEpICogbCwgaCA9IEEoYyksIHAgPSBoICogZSArIHMgKiByO1xuICAgIHJldHVybiBbXG4gICAgICBjdChmICogaSAtIHAgKiBvLCBzICogZSAtIGggKiByKSxcbiAgICAgIGx0KHAgKiBpICsgZiAqIG8pXG4gICAgXTtcbiAgfVxuICByZXR1cm4gdS5pbnZlcnQgPSBmdW5jdGlvbihhLCBjKSB7XG4gICAgdmFyIGwgPSBSKGMpLCBzID0gUihhKSAqIGwsIGYgPSBBKGEpICogbCwgaCA9IEEoYyksIHAgPSBoICogaSAtIGYgKiBvO1xuICAgIHJldHVybiBbXG4gICAgICBjdChmICogaSArIGggKiBvLCBzICogZSArIHAgKiByKSxcbiAgICAgIGx0KHAgKiBlIC0gcyAqIHIpXG4gICAgXTtcbiAgfSwgdTtcbn1cbmZ1bmN0aW9uIGNvKHQpIHtcbiAgdCA9IEVyKHRbMF0gKiBPLCB0WzFdICogTywgdC5sZW5ndGggPiAyID8gdFsyXSAqIE8gOiAwKTtcbiAgZnVuY3Rpb24gbihlKSB7XG4gICAgcmV0dXJuIGUgPSB0KGVbMF0gKiBPLCBlWzFdICogTyksIGVbMF0gKj0gVywgZVsxXSAqPSBXLCBlO1xuICB9XG4gIHJldHVybiBuLmludmVydCA9IGZ1bmN0aW9uKGUpIHtcbiAgICByZXR1cm4gZSA9IHQuaW52ZXJ0KGVbMF0gKiBPLCBlWzFdICogTyksIGVbMF0gKj0gVywgZVsxXSAqPSBXLCBlO1xuICB9LCBuO1xufVxuZnVuY3Rpb24gbG8odCwgbiwgZSwgciwgaSwgbykge1xuICBpZiAoZSkge1xuICAgIHZhciB1ID0gUihuKSwgYSA9IEEobiksIGMgPSByICogZTtcbiAgICBpID09IG51bGwgPyAoaSA9IG4gKyByICogc3QsIG8gPSBuIC0gYyAvIDIpIDogKGkgPSB2aSh1LCBpKSwgbyA9IHZpKHUsIG8pLCAociA+IDAgPyBpIDwgbyA6IGkgPiBvKSAmJiAoaSArPSByICogc3QpKTtcbiAgICBmb3IgKHZhciBsLCBzID0gaTsgciA+IDAgPyBzID4gbyA6IHMgPCBvOyBzIC09IGMpXG4gICAgICBsID0gZWUoW3UsIC1hICogUihzKSwgLWEgKiBBKHMpXSksIHQucG9pbnQobFswXSwgbFsxXSk7XG4gIH1cbn1cbmZ1bmN0aW9uIHZpKHQsIG4pIHtcbiAgbiA9IEJ0KG4pLCBuWzBdIC09IHQsIHJlKG4pO1xuICB2YXIgZSA9IFFpKC1uWzFdKTtcbiAgcmV0dXJuICgoLW5bMl0gPCAwID8gLWUgOiBlKSArIHN0IC0geikgJSBzdDtcbn1cbmZ1bmN0aW9uIFh1KCkge1xuICB2YXIgdCA9IFV0KFswLCAwXSksIG4gPSBVdCg5MCksIGUgPSBVdCgyKSwgciwgaSwgbyA9IHsgcG9pbnQ6IHUgfTtcbiAgZnVuY3Rpb24gdShjLCBsKSB7XG4gICAgci5wdXNoKGMgPSBpKGMsIGwpKSwgY1swXSAqPSBXLCBjWzFdICo9IFc7XG4gIH1cbiAgZnVuY3Rpb24gYSgpIHtcbiAgICB2YXIgYyA9IHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSwgbCA9IG4uYXBwbHkodGhpcywgYXJndW1lbnRzKSAqIE8sIHMgPSBlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgKiBPO1xuICAgIHJldHVybiByID0gW10sIGkgPSBFcigtY1swXSAqIE8sIC1jWzFdICogTywgMCkuaW52ZXJ0LCBsbyhvLCBsLCBzLCAxKSwgYyA9IHsgdHlwZTogXCJQb2x5Z29uXCIsIGNvb3JkaW5hdGVzOiBbcl0gfSwgciA9IGkgPSBudWxsLCBjO1xuICB9XG4gIHJldHVybiBhLmNlbnRlciA9IGZ1bmN0aW9uKGMpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh0ID0gdHlwZW9mIGMgPT0gXCJmdW5jdGlvblwiID8gYyA6IFV0KFsrY1swXSwgK2NbMV1dKSwgYSkgOiB0O1xuICB9LCBhLnJhZGl1cyA9IGZ1bmN0aW9uKGMpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChuID0gdHlwZW9mIGMgPT0gXCJmdW5jdGlvblwiID8gYyA6IFV0KCtjKSwgYSkgOiBuO1xuICB9LCBhLnByZWNpc2lvbiA9IGZ1bmN0aW9uKGMpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChlID0gdHlwZW9mIGMgPT0gXCJmdW5jdGlvblwiID8gYyA6IFV0KCtjKSwgYSkgOiBlO1xuICB9LCBhO1xufVxuZnVuY3Rpb24gZm8oKSB7XG4gIHZhciB0ID0gW10sIG47XG4gIHJldHVybiB7XG4gICAgcG9pbnQ6IGZ1bmN0aW9uKGUsIHIsIGkpIHtcbiAgICAgIG4ucHVzaChbZSwgciwgaV0pO1xuICAgIH0sXG4gICAgbGluZVN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICAgIHQucHVzaChuID0gW10pO1xuICAgIH0sXG4gICAgbGluZUVuZDogSyxcbiAgICByZWpvaW46IGZ1bmN0aW9uKCkge1xuICAgICAgdC5sZW5ndGggPiAxICYmIHQucHVzaCh0LnBvcCgpLmNvbmNhdCh0LnNoaWZ0KCkpKTtcbiAgICB9LFxuICAgIHJlc3VsdDogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgZSA9IHQ7XG4gICAgICByZXR1cm4gdCA9IFtdLCBuID0gbnVsbCwgZTtcbiAgICB9XG4gIH07XG59XG5mdW5jdGlvbiBHbih0LCBuKSB7XG4gIHJldHVybiBYKHRbMF0gLSBuWzBdKSA8IHogJiYgWCh0WzFdIC0gblsxXSkgPCB6O1xufVxuZnVuY3Rpb24gYm4odCwgbiwgZSwgcikge1xuICB0aGlzLnggPSB0LCB0aGlzLnogPSBuLCB0aGlzLm8gPSBlLCB0aGlzLmUgPSByLCB0aGlzLnYgPSAhMSwgdGhpcy5uID0gdGhpcy5wID0gbnVsbDtcbn1cbmZ1bmN0aW9uIGhvKHQsIG4sIGUsIHIsIGkpIHtcbiAgdmFyIG8gPSBbXSwgdSA9IFtdLCBhLCBjO1xuICBpZiAodC5mb3JFYWNoKGZ1bmN0aW9uKHYpIHtcbiAgICBpZiAoISgoRSA9IHYubGVuZ3RoIC0gMSkgPD0gMCkpIHtcbiAgICAgIHZhciBFLCBTID0gdlswXSwgeSA9IHZbRV0sIE07XG4gICAgICBpZiAoR24oUywgeSkpIHtcbiAgICAgICAgaWYgKCFTWzJdICYmICF5WzJdKSB7XG4gICAgICAgICAgZm9yIChpLmxpbmVTdGFydCgpLCBhID0gMDsgYSA8IEU7ICsrYSkgaS5wb2ludCgoUyA9IHZbYV0pWzBdLCBTWzFdKTtcbiAgICAgICAgICBpLmxpbmVFbmQoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgeVswXSArPSAyICogejtcbiAgICAgIH1cbiAgICAgIG8ucHVzaChNID0gbmV3IGJuKFMsIHYsIG51bGwsICEwKSksIHUucHVzaChNLm8gPSBuZXcgYm4oUywgbnVsbCwgTSwgITEpKSwgby5wdXNoKE0gPSBuZXcgYm4oeSwgdiwgbnVsbCwgITEpKSwgdS5wdXNoKE0ubyA9IG5ldyBibih5LCBudWxsLCBNLCAhMCkpO1xuICAgIH1cbiAgfSksICEhby5sZW5ndGgpIHtcbiAgICBmb3IgKHUuc29ydChuKSwgZ2kobyksIGdpKHUpLCBhID0gMCwgYyA9IHUubGVuZ3RoOyBhIDwgYzsgKythKVxuICAgICAgdVthXS5lID0gZSA9ICFlO1xuICAgIGZvciAodmFyIGwgPSBvWzBdLCBzLCBmOyA7ICkge1xuICAgICAgZm9yICh2YXIgaCA9IGwsIHAgPSAhMDsgaC52OyApIGlmICgoaCA9IGgubikgPT09IGwpIHJldHVybjtcbiAgICAgIHMgPSBoLnosIGkubGluZVN0YXJ0KCk7XG4gICAgICBkbyB7XG4gICAgICAgIGlmIChoLnYgPSBoLm8udiA9ICEwLCBoLmUpIHtcbiAgICAgICAgICBpZiAocClcbiAgICAgICAgICAgIGZvciAoYSA9IDAsIGMgPSBzLmxlbmd0aDsgYSA8IGM7ICsrYSkgaS5wb2ludCgoZiA9IHNbYV0pWzBdLCBmWzFdKTtcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICByKGgueCwgaC5uLngsIDEsIGkpO1xuICAgICAgICAgIGggPSBoLm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHApXG4gICAgICAgICAgICBmb3IgKHMgPSBoLnAueiwgYSA9IHMubGVuZ3RoIC0gMTsgYSA+PSAwOyAtLWEpIGkucG9pbnQoKGYgPSBzW2FdKVswXSwgZlsxXSk7XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgcihoLngsIGgucC54LCAtMSwgaSk7XG4gICAgICAgICAgaCA9IGgucDtcbiAgICAgICAgfVxuICAgICAgICBoID0gaC5vLCBzID0gaC56LCBwID0gIXA7XG4gICAgICB9IHdoaWxlICghaC52KTtcbiAgICAgIGkubGluZUVuZCgpO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gZ2kodCkge1xuICBpZiAobiA9IHQubGVuZ3RoKSB7XG4gICAgZm9yICh2YXIgbiwgZSA9IDAsIHIgPSB0WzBdLCBpOyArK2UgPCBuOyApXG4gICAgICByLm4gPSBpID0gdFtlXSwgaS5wID0gciwgciA9IGk7XG4gICAgci5uID0gaSA9IHRbMF0sIGkucCA9IHI7XG4gIH1cbn1cbmZ1bmN0aW9uIExlKHQpIHtcbiAgcmV0dXJuIFgodFswXSkgPD0gaiA/IHRbMF0gOiBfdCh0WzBdKSAqICgoWCh0WzBdKSArIGopICUgc3QgLSBqKTtcbn1cbmZ1bmN0aW9uIHBvKHQsIG4pIHtcbiAgdmFyIGUgPSBMZShuKSwgciA9IG5bMV0sIGkgPSBBKHIpLCBvID0gW0EoZSksIC1SKGUpLCAwXSwgdSA9IDAsIGEgPSAwLCBjID0gbmV3IGl0KCk7XG4gIGkgPT09IDEgPyByID0gSiArIHogOiBpID09PSAtMSAmJiAociA9IC1KIC0geik7XG4gIGZvciAodmFyIGwgPSAwLCBzID0gdC5sZW5ndGg7IGwgPCBzOyArK2wpXG4gICAgaWYgKGggPSAoZiA9IHRbbF0pLmxlbmd0aClcbiAgICAgIGZvciAodmFyIGYsIGgsIHAgPSBmW2ggLSAxXSwgdiA9IExlKHApLCBFID0gcFsxXSAvIDIgKyBLbiwgUyA9IEEoRSksIHkgPSBSKEUpLCBNID0gMDsgTSA8IGg7ICsrTSwgdiA9IF8sIFMgPSBOLCB5ID0gQywgcCA9IG0pIHtcbiAgICAgICAgdmFyIG0gPSBmW01dLCBfID0gTGUobSksIHggPSBtWzFdIC8gMiArIEtuLCBOID0gQSh4KSwgQyA9IFIoeCksIEYgPSBfIC0gdiwgRCA9IEYgPj0gMCA/IDEgOiAtMSwgYiA9IEQgKiBGLCBMID0gYiA+IGosIEcgPSBTICogTjtcbiAgICAgICAgaWYgKGMuYWRkKGN0KEcgKiBEICogQShiKSwgeSAqIEMgKyBHICogUihiKSkpLCB1ICs9IEwgPyBGICsgRCAqIHN0IDogRiwgTCBeIHYgPj0gZSBeIF8gPj0gZSkge1xuICAgICAgICAgIHZhciBCID0gdG4oQnQocCksIEJ0KG0pKTtcbiAgICAgICAgICByZShCKTtcbiAgICAgICAgICB2YXIgZyA9IHRuKG8sIEIpO1xuICAgICAgICAgIHJlKGcpO1xuICAgICAgICAgIHZhciBkID0gKEwgXiBGID49IDAgPyAtMSA6IDEpICogbHQoZ1syXSk7XG4gICAgICAgICAgKHIgPiBkIHx8IHIgPT09IGQgJiYgKEJbMF0gfHwgQlsxXSkpICYmIChhICs9IEwgXiBGID49IDAgPyAxIDogLTEpO1xuICAgICAgICB9XG4gICAgICB9XG4gIHJldHVybiAodSA8IC16IHx8IHUgPCB6ICYmIGMgPCAtTW4pIF4gYSAmIDE7XG59XG5mdW5jdGlvbiB2byh0LCBuLCBlLCByKSB7XG4gIHJldHVybiBmdW5jdGlvbihpKSB7XG4gICAgdmFyIG8gPSBuKGkpLCB1ID0gZm8oKSwgYSA9IG4odSksIGMgPSAhMSwgbCwgcywgZiwgaCA9IHtcbiAgICAgIHBvaW50OiBwLFxuICAgICAgbGluZVN0YXJ0OiBFLFxuICAgICAgbGluZUVuZDogUyxcbiAgICAgIHBvbHlnb25TdGFydDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGgucG9pbnQgPSB5LCBoLmxpbmVTdGFydCA9IE0sIGgubGluZUVuZCA9IG0sIHMgPSBbXSwgbCA9IFtdO1xuICAgICAgfSxcbiAgICAgIHBvbHlnb25FbmQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBoLnBvaW50ID0gcCwgaC5saW5lU3RhcnQgPSBFLCBoLmxpbmVFbmQgPSBTLCBzID0gVWkocyk7XG4gICAgICAgIHZhciBfID0gcG8obCwgcik7XG4gICAgICAgIHMubGVuZ3RoID8gKGMgfHwgKGkucG9seWdvblN0YXJ0KCksIGMgPSAhMCksIGhvKHMsIFp1LCBfLCBlLCBpKSkgOiBfICYmIChjIHx8IChpLnBvbHlnb25TdGFydCgpLCBjID0gITApLCBpLmxpbmVTdGFydCgpLCBlKG51bGwsIG51bGwsIDEsIGkpLCBpLmxpbmVFbmQoKSksIGMgJiYgKGkucG9seWdvbkVuZCgpLCBjID0gITEpLCBzID0gbCA9IG51bGw7XG4gICAgICB9LFxuICAgICAgc3BoZXJlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaS5wb2x5Z29uU3RhcnQoKSwgaS5saW5lU3RhcnQoKSwgZShudWxsLCBudWxsLCAxLCBpKSwgaS5saW5lRW5kKCksIGkucG9seWdvbkVuZCgpO1xuICAgICAgfVxuICAgIH07XG4gICAgZnVuY3Rpb24gcChfLCB4KSB7XG4gICAgICB0KF8sIHgpICYmIGkucG9pbnQoXywgeCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHYoXywgeCkge1xuICAgICAgby5wb2ludChfLCB4KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gRSgpIHtcbiAgICAgIGgucG9pbnQgPSB2LCBvLmxpbmVTdGFydCgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBTKCkge1xuICAgICAgaC5wb2ludCA9IHAsIG8ubGluZUVuZCgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiB5KF8sIHgpIHtcbiAgICAgIGYucHVzaChbXywgeF0pLCBhLnBvaW50KF8sIHgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBNKCkge1xuICAgICAgYS5saW5lU3RhcnQoKSwgZiA9IFtdO1xuICAgIH1cbiAgICBmdW5jdGlvbiBtKCkge1xuICAgICAgeShmWzBdWzBdLCBmWzBdWzFdKSwgYS5saW5lRW5kKCk7XG4gICAgICB2YXIgXyA9IGEuY2xlYW4oKSwgeCA9IHUucmVzdWx0KCksIE4sIEMgPSB4Lmxlbmd0aCwgRiwgRCwgYjtcbiAgICAgIGlmIChmLnBvcCgpLCBsLnB1c2goZiksIGYgPSBudWxsLCAhIUMpIHtcbiAgICAgICAgaWYgKF8gJiAxKSB7XG4gICAgICAgICAgaWYgKEQgPSB4WzBdLCAoRiA9IEQubGVuZ3RoIC0gMSkgPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGMgfHwgKGkucG9seWdvblN0YXJ0KCksIGMgPSAhMCksIGkubGluZVN0YXJ0KCksIE4gPSAwOyBOIDwgRjsgKytOKSBpLnBvaW50KChiID0gRFtOXSlbMF0sIGJbMV0pO1xuICAgICAgICAgICAgaS5saW5lRW5kKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBDID4gMSAmJiBfICYgMiAmJiB4LnB1c2goeC5wb3AoKS5jb25jYXQoeC5zaGlmdCgpKSksIHMucHVzaCh4LmZpbHRlcihHdSkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaDtcbiAgfTtcbn1cbmZ1bmN0aW9uIEd1KHQpIHtcbiAgcmV0dXJuIHQubGVuZ3RoID4gMTtcbn1cbmZ1bmN0aW9uIFp1KHQsIG4pIHtcbiAgcmV0dXJuICgodCA9IHQueClbMF0gPCAwID8gdFsxXSAtIEogLSB6IDogSiAtIHRbMV0pIC0gKChuID0gbi54KVswXSA8IDAgPyBuWzFdIC0gSiAtIHogOiBKIC0gblsxXSk7XG59XG5jb25zdCBRZSA9IHZvKFxuICBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gITA7XG4gIH0sXG4gIEJ1LFxuICBXdSxcbiAgWy1qLCAtSl1cbik7XG5mdW5jdGlvbiBCdSh0KSB7XG4gIHZhciBuID0gTmFOLCBlID0gTmFOLCByID0gTmFOLCBpO1xuICByZXR1cm4ge1xuICAgIGxpbmVTdGFydDogZnVuY3Rpb24oKSB7XG4gICAgICB0LmxpbmVTdGFydCgpLCBpID0gMTtcbiAgICB9LFxuICAgIHBvaW50OiBmdW5jdGlvbihvLCB1KSB7XG4gICAgICB2YXIgYSA9IG8gPiAwID8gaiA6IC1qLCBjID0gWChvIC0gbik7XG4gICAgICBYKGMgLSBqKSA8IHogPyAodC5wb2ludChuLCBlID0gKGUgKyB1KSAvIDIgPiAwID8gSiA6IC1KKSwgdC5wb2ludChyLCBlKSwgdC5saW5lRW5kKCksIHQubGluZVN0YXJ0KCksIHQucG9pbnQoYSwgZSksIHQucG9pbnQobywgZSksIGkgPSAwKSA6IHIgIT09IGEgJiYgYyA+PSBqICYmIChYKG4gLSByKSA8IHogJiYgKG4gLT0gciAqIHopLCBYKG8gLSBhKSA8IHogJiYgKG8gLT0gYSAqIHopLCBlID0gWXUobiwgZSwgbywgdSksIHQucG9pbnQociwgZSksIHQubGluZUVuZCgpLCB0LmxpbmVTdGFydCgpLCB0LnBvaW50KGEsIGUpLCBpID0gMCksIHQucG9pbnQobiA9IG8sIGUgPSB1KSwgciA9IGE7XG4gICAgfSxcbiAgICBsaW5lRW5kOiBmdW5jdGlvbigpIHtcbiAgICAgIHQubGluZUVuZCgpLCBuID0gZSA9IE5hTjtcbiAgICB9LFxuICAgIGNsZWFuOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAyIC0gaTtcbiAgICB9XG4gIH07XG59XG5mdW5jdGlvbiBZdSh0LCBuLCBlLCByKSB7XG4gIHZhciBpLCBvLCB1ID0gQSh0IC0gZSk7XG4gIHJldHVybiBYKHUpID4geiA/IHVuKChBKG4pICogKG8gPSBSKHIpKSAqIEEoZSkgLSBBKHIpICogKGkgPSBSKG4pKSAqIEEodCkpIC8gKGkgKiBvICogdSkpIDogKG4gKyByKSAvIDI7XG59XG5mdW5jdGlvbiBXdSh0LCBuLCBlLCByKSB7XG4gIHZhciBpO1xuICBpZiAodCA9PSBudWxsKVxuICAgIGkgPSBlICogSiwgci5wb2ludCgtaiwgaSksIHIucG9pbnQoMCwgaSksIHIucG9pbnQoaiwgaSksIHIucG9pbnQoaiwgMCksIHIucG9pbnQoaiwgLWkpLCByLnBvaW50KDAsIC1pKSwgci5wb2ludCgtaiwgLWkpLCByLnBvaW50KC1qLCAwKSwgci5wb2ludCgtaiwgaSk7XG4gIGVsc2UgaWYgKFgodFswXSAtIG5bMF0pID4geikge1xuICAgIHZhciBvID0gdFswXSA8IG5bMF0gPyBqIDogLWo7XG4gICAgaSA9IGUgKiBvIC8gMiwgci5wb2ludCgtbywgaSksIHIucG9pbnQoMCwgaSksIHIucG9pbnQobywgaSk7XG4gIH0gZWxzZVxuICAgIHIucG9pbnQoblswXSwgblsxXSk7XG59XG5mdW5jdGlvbiBnbyh0KSB7XG4gIHZhciBuID0gUih0KSwgZSA9IDIgKiBPLCByID0gbiA+IDAsIGkgPSBYKG4pID4gejtcbiAgZnVuY3Rpb24gbyhzLCBmLCBoLCBwKSB7XG4gICAgbG8ocCwgdCwgZSwgaCwgcywgZik7XG4gIH1cbiAgZnVuY3Rpb24gdShzLCBmKSB7XG4gICAgcmV0dXJuIFIocykgKiBSKGYpID4gbjtcbiAgfVxuICBmdW5jdGlvbiBhKHMpIHtcbiAgICB2YXIgZiwgaCwgcCwgdiwgRTtcbiAgICByZXR1cm4ge1xuICAgICAgbGluZVN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdiA9IHAgPSAhMSwgRSA9IDE7XG4gICAgICB9LFxuICAgICAgcG9pbnQ6IGZ1bmN0aW9uKFMsIHkpIHtcbiAgICAgICAgdmFyIE0gPSBbUywgeV0sIG0sIF8gPSB1KFMsIHkpLCB4ID0gciA/IF8gPyAwIDogbChTLCB5KSA6IF8gPyBsKFMgKyAoUyA8IDAgPyBqIDogLWopLCB5KSA6IDA7XG4gICAgICAgIGlmICghZiAmJiAodiA9IHAgPSBfKSAmJiBzLmxpbmVTdGFydCgpLCBfICE9PSBwICYmIChtID0gYyhmLCBNKSwgKCFtIHx8IEduKGYsIG0pIHx8IEduKE0sIG0pKSAmJiAoTVsyXSA9IDEpKSwgXyAhPT0gcClcbiAgICAgICAgICBFID0gMCwgXyA/IChzLmxpbmVTdGFydCgpLCBtID0gYyhNLCBmKSwgcy5wb2ludChtWzBdLCBtWzFdKSkgOiAobSA9IGMoZiwgTSksIHMucG9pbnQobVswXSwgbVsxXSwgMiksIHMubGluZUVuZCgpKSwgZiA9IG07XG4gICAgICAgIGVsc2UgaWYgKGkgJiYgZiAmJiByIF4gXykge1xuICAgICAgICAgIHZhciBOO1xuICAgICAgICAgICEoeCAmIGgpICYmIChOID0gYyhNLCBmLCAhMCkpICYmIChFID0gMCwgciA/IChzLmxpbmVTdGFydCgpLCBzLnBvaW50KE5bMF1bMF0sIE5bMF1bMV0pLCBzLnBvaW50KE5bMV1bMF0sIE5bMV1bMV0pLCBzLmxpbmVFbmQoKSkgOiAocy5wb2ludChOWzFdWzBdLCBOWzFdWzFdKSwgcy5saW5lRW5kKCksIHMubGluZVN0YXJ0KCksIHMucG9pbnQoTlswXVswXSwgTlswXVsxXSwgMykpKTtcbiAgICAgICAgfVxuICAgICAgICBfICYmICghZiB8fCAhR24oZiwgTSkpICYmIHMucG9pbnQoTVswXSwgTVsxXSksIGYgPSBNLCBwID0gXywgaCA9IHg7XG4gICAgICB9LFxuICAgICAgbGluZUVuZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHAgJiYgcy5saW5lRW5kKCksIGYgPSBudWxsO1xuICAgICAgfSxcbiAgICAgIC8vIFJlam9pbiBmaXJzdCBhbmQgbGFzdCBzZWdtZW50cyBpZiB0aGVyZSB3ZXJlIGludGVyc2VjdGlvbnMgYW5kIHRoZSBmaXJzdFxuICAgICAgLy8gYW5kIGxhc3QgcG9pbnRzIHdlcmUgdmlzaWJsZS5cbiAgICAgIGNsZWFuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIEUgfCAodiAmJiBwKSA8PCAxO1xuICAgICAgfVxuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gYyhzLCBmLCBoKSB7XG4gICAgdmFyIHAgPSBCdChzKSwgdiA9IEJ0KGYpLCBFID0gWzEsIDAsIDBdLCBTID0gdG4ocCwgdiksIHkgPSBJbihTLCBTKSwgTSA9IFNbMF0sIG0gPSB5IC0gTSAqIE07XG4gICAgaWYgKCFtKSByZXR1cm4gIWggJiYgcztcbiAgICB2YXIgXyA9IG4gKiB5IC8gbSwgeCA9IC1uICogTSAvIG0sIE4gPSB0bihFLCBTKSwgQyA9IERuKEUsIF8pLCBGID0gRG4oUywgeCk7XG4gICAgT2UoQywgRik7XG4gICAgdmFyIEQgPSBOLCBiID0gSW4oQywgRCksIEwgPSBJbihELCBEKSwgRyA9IGIgKiBiIC0gTCAqIChJbihDLCBDKSAtIDEpO1xuICAgIGlmICghKEcgPCAwKSkge1xuICAgICAgdmFyIEIgPSBldChHKSwgZyA9IERuKEQsICgtYiAtIEIpIC8gTCk7XG4gICAgICBpZiAoT2UoZywgQyksIGcgPSBlZShnKSwgIWgpIHJldHVybiBnO1xuICAgICAgdmFyIGQgPSBzWzBdLCB3ID0gZlswXSwgJCA9IHNbMV0sIGsgPSBmWzFdLCBUO1xuICAgICAgdyA8IGQgJiYgKFQgPSBkLCBkID0gdywgdyA9IFQpO1xuICAgICAgdmFyIEkgPSB3IC0gZCwgcSA9IFgoSSAtIGopIDwgeiwgWiA9IHEgfHwgSSA8IHo7XG4gICAgICBpZiAoIXEgJiYgayA8ICQgJiYgKFQgPSAkLCAkID0gaywgayA9IFQpLCBaID8gcSA/ICQgKyBrID4gMCBeIGdbMV0gPCAoWChnWzBdIC0gZCkgPCB6ID8gJCA6IGspIDogJCA8PSBnWzFdICYmIGdbMV0gPD0gayA6IEkgPiBqIF4gKGQgPD0gZ1swXSAmJiBnWzBdIDw9IHcpKSB7XG4gICAgICAgIHZhciBVID0gRG4oRCwgKC1iICsgQikgLyBMKTtcbiAgICAgICAgcmV0dXJuIE9lKFUsIEMpLCBbZywgZWUoVSldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBsKHMsIGYpIHtcbiAgICB2YXIgaCA9IHIgPyB0IDogaiAtIHQsIHAgPSAwO1xuICAgIHJldHVybiBzIDwgLWggPyBwIHw9IDEgOiBzID4gaCAmJiAocCB8PSAyKSwgZiA8IC1oID8gcCB8PSA0IDogZiA+IGggJiYgKHAgfD0gOCksIHA7XG4gIH1cbiAgcmV0dXJuIHZvKHUsIGEsIG8sIHIgPyBbMCwgLXRdIDogWy1qLCB0IC0gal0pO1xufVxuZnVuY3Rpb24gVXUodCwgbiwgZSwgciwgaSwgbykge1xuICB2YXIgdSA9IHRbMF0sIGEgPSB0WzFdLCBjID0gblswXSwgbCA9IG5bMV0sIHMgPSAwLCBmID0gMSwgaCA9IGMgLSB1LCBwID0gbCAtIGEsIHY7XG4gIGlmICh2ID0gZSAtIHUsICEoIWggJiYgdiA+IDApKSB7XG4gICAgaWYgKHYgLz0gaCwgaCA8IDApIHtcbiAgICAgIGlmICh2IDwgcykgcmV0dXJuO1xuICAgICAgdiA8IGYgJiYgKGYgPSB2KTtcbiAgICB9IGVsc2UgaWYgKGggPiAwKSB7XG4gICAgICBpZiAodiA+IGYpIHJldHVybjtcbiAgICAgIHYgPiBzICYmIChzID0gdik7XG4gICAgfVxuICAgIGlmICh2ID0gaSAtIHUsICEoIWggJiYgdiA8IDApKSB7XG4gICAgICBpZiAodiAvPSBoLCBoIDwgMCkge1xuICAgICAgICBpZiAodiA+IGYpIHJldHVybjtcbiAgICAgICAgdiA+IHMgJiYgKHMgPSB2KTtcbiAgICAgIH0gZWxzZSBpZiAoaCA+IDApIHtcbiAgICAgICAgaWYgKHYgPCBzKSByZXR1cm47XG4gICAgICAgIHYgPCBmICYmIChmID0gdik7XG4gICAgICB9XG4gICAgICBpZiAodiA9IHIgLSBhLCAhKCFwICYmIHYgPiAwKSkge1xuICAgICAgICBpZiAodiAvPSBwLCBwIDwgMCkge1xuICAgICAgICAgIGlmICh2IDwgcykgcmV0dXJuO1xuICAgICAgICAgIHYgPCBmICYmIChmID0gdik7XG4gICAgICAgIH0gZWxzZSBpZiAocCA+IDApIHtcbiAgICAgICAgICBpZiAodiA+IGYpIHJldHVybjtcbiAgICAgICAgICB2ID4gcyAmJiAocyA9IHYpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2ID0gbyAtIGEsICEoIXAgJiYgdiA8IDApKSB7XG4gICAgICAgICAgaWYgKHYgLz0gcCwgcCA8IDApIHtcbiAgICAgICAgICAgIGlmICh2ID4gZikgcmV0dXJuO1xuICAgICAgICAgICAgdiA+IHMgJiYgKHMgPSB2KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHAgPiAwKSB7XG4gICAgICAgICAgICBpZiAodiA8IHMpIHJldHVybjtcbiAgICAgICAgICAgIHYgPCBmICYmIChmID0gdik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBzID4gMCAmJiAodFswXSA9IHUgKyBzICogaCwgdFsxXSA9IGEgKyBzICogcCksIGYgPCAxICYmIChuWzBdID0gdSArIGYgKiBoLCBuWzFdID0gYSArIGYgKiBwKSwgITA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbnZhciBmbiA9IDFlOSwgcW4gPSAtZm47XG5mdW5jdGlvbiBQZSh0LCBuLCBlLCByKSB7XG4gIGZ1bmN0aW9uIGkobCwgcykge1xuICAgIHJldHVybiB0IDw9IGwgJiYgbCA8PSBlICYmIG4gPD0gcyAmJiBzIDw9IHI7XG4gIH1cbiAgZnVuY3Rpb24gbyhsLCBzLCBmLCBoKSB7XG4gICAgdmFyIHAgPSAwLCB2ID0gMDtcbiAgICBpZiAobCA9PSBudWxsIHx8IChwID0gdShsLCBmKSkgIT09ICh2ID0gdShzLCBmKSkgfHwgYyhsLCBzKSA8IDAgXiBmID4gMClcbiAgICAgIGRvXG4gICAgICAgIGgucG9pbnQocCA9PT0gMCB8fCBwID09PSAzID8gdCA6IGUsIHAgPiAxID8gciA6IG4pO1xuICAgICAgd2hpbGUgKChwID0gKHAgKyBmICsgNCkgJSA0KSAhPT0gdik7XG4gICAgZWxzZVxuICAgICAgaC5wb2ludChzWzBdLCBzWzFdKTtcbiAgfVxuICBmdW5jdGlvbiB1KGwsIHMpIHtcbiAgICByZXR1cm4gWChsWzBdIC0gdCkgPCB6ID8gcyA+IDAgPyAwIDogMyA6IFgobFswXSAtIGUpIDwgeiA/IHMgPiAwID8gMiA6IDEgOiBYKGxbMV0gLSBuKSA8IHogPyBzID4gMCA/IDEgOiAwIDogcyA+IDAgPyAzIDogMjtcbiAgfVxuICBmdW5jdGlvbiBhKGwsIHMpIHtcbiAgICByZXR1cm4gYyhsLngsIHMueCk7XG4gIH1cbiAgZnVuY3Rpb24gYyhsLCBzKSB7XG4gICAgdmFyIGYgPSB1KGwsIDEpLCBoID0gdShzLCAxKTtcbiAgICByZXR1cm4gZiAhPT0gaCA/IGYgLSBoIDogZiA9PT0gMCA/IHNbMV0gLSBsWzFdIDogZiA9PT0gMSA/IGxbMF0gLSBzWzBdIDogZiA9PT0gMiA/IGxbMV0gLSBzWzFdIDogc1swXSAtIGxbMF07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKGwpIHtcbiAgICB2YXIgcyA9IGwsIGYgPSBmbygpLCBoLCBwLCB2LCBFLCBTLCB5LCBNLCBtLCBfLCB4LCBOLCBDID0ge1xuICAgICAgcG9pbnQ6IEYsXG4gICAgICBsaW5lU3RhcnQ6IEcsXG4gICAgICBsaW5lRW5kOiBCLFxuICAgICAgcG9seWdvblN0YXJ0OiBiLFxuICAgICAgcG9seWdvbkVuZDogTFxuICAgIH07XG4gICAgZnVuY3Rpb24gRihkLCB3KSB7XG4gICAgICBpKGQsIHcpICYmIHMucG9pbnQoZCwgdyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIEQoKSB7XG4gICAgICBmb3IgKHZhciBkID0gMCwgdyA9IDAsICQgPSBwLmxlbmd0aDsgdyA8ICQ7ICsrdylcbiAgICAgICAgZm9yICh2YXIgayA9IHBbd10sIFQgPSAxLCBJID0gay5sZW5ndGgsIHEgPSBrWzBdLCBaLCBVLCBZID0gcVswXSwgViA9IHFbMV07IFQgPCBJOyArK1QpXG4gICAgICAgICAgWiA9IFksIFUgPSBWLCBxID0ga1tUXSwgWSA9IHFbMF0sIFYgPSBxWzFdLCBVIDw9IHIgPyBWID4gciAmJiAoWSAtIFopICogKHIgLSBVKSA+IChWIC0gVSkgKiAodCAtIFopICYmICsrZCA6IFYgPD0gciAmJiAoWSAtIFopICogKHIgLSBVKSA8IChWIC0gVSkgKiAodCAtIFopICYmIC0tZDtcbiAgICAgIHJldHVybiBkO1xuICAgIH1cbiAgICBmdW5jdGlvbiBiKCkge1xuICAgICAgcyA9IGYsIGggPSBbXSwgcCA9IFtdLCBOID0gITA7XG4gICAgfVxuICAgIGZ1bmN0aW9uIEwoKSB7XG4gICAgICB2YXIgZCA9IEQoKSwgdyA9IE4gJiYgZCwgJCA9IChoID0gVWkoaCkpLmxlbmd0aDtcbiAgICAgICh3IHx8ICQpICYmIChsLnBvbHlnb25TdGFydCgpLCB3ICYmIChsLmxpbmVTdGFydCgpLCBvKG51bGwsIG51bGwsIDEsIGwpLCBsLmxpbmVFbmQoKSksICQgJiYgaG8oaCwgYSwgZCwgbywgbCksIGwucG9seWdvbkVuZCgpKSwgcyA9IGwsIGggPSBwID0gdiA9IG51bGw7XG4gICAgfVxuICAgIGZ1bmN0aW9uIEcoKSB7XG4gICAgICBDLnBvaW50ID0gZywgcCAmJiBwLnB1c2godiA9IFtdKSwgeCA9ICEwLCBfID0gITEsIE0gPSBtID0gTmFOO1xuICAgIH1cbiAgICBmdW5jdGlvbiBCKCkge1xuICAgICAgaCAmJiAoZyhFLCBTKSwgeSAmJiBfICYmIGYucmVqb2luKCksIGgucHVzaChmLnJlc3VsdCgpKSksIEMucG9pbnQgPSBGLCBfICYmIHMubGluZUVuZCgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnKGQsIHcpIHtcbiAgICAgIHZhciAkID0gaShkLCB3KTtcbiAgICAgIGlmIChwICYmIHYucHVzaChbZCwgd10pLCB4KVxuICAgICAgICBFID0gZCwgUyA9IHcsIHkgPSAkLCB4ID0gITEsICQgJiYgKHMubGluZVN0YXJ0KCksIHMucG9pbnQoZCwgdykpO1xuICAgICAgZWxzZSBpZiAoJCAmJiBfKSBzLnBvaW50KGQsIHcpO1xuICAgICAgZWxzZSB7XG4gICAgICAgIHZhciBrID0gW00gPSBNYXRoLm1heChxbiwgTWF0aC5taW4oZm4sIE0pKSwgbSA9IE1hdGgubWF4KHFuLCBNYXRoLm1pbihmbiwgbSkpXSwgVCA9IFtkID0gTWF0aC5tYXgocW4sIE1hdGgubWluKGZuLCBkKSksIHcgPSBNYXRoLm1heChxbiwgTWF0aC5taW4oZm4sIHcpKV07XG4gICAgICAgIFV1KGssIFQsIHQsIG4sIGUsIHIpID8gKF8gfHwgKHMubGluZVN0YXJ0KCksIHMucG9pbnQoa1swXSwga1sxXSkpLCBzLnBvaW50KFRbMF0sIFRbMV0pLCAkIHx8IHMubGluZUVuZCgpLCBOID0gITEpIDogJCAmJiAocy5saW5lU3RhcnQoKSwgcy5wb2ludChkLCB3KSwgTiA9ICExKTtcbiAgICAgIH1cbiAgICAgIE0gPSBkLCBtID0gdywgXyA9ICQ7XG4gICAgfVxuICAgIHJldHVybiBDO1xuICB9O1xufVxuZnVuY3Rpb24gVnUoKSB7XG4gIHZhciB0ID0gMCwgbiA9IDAsIGUgPSA5NjAsIHIgPSA1MDAsIGksIG8sIHU7XG4gIHJldHVybiB1ID0ge1xuICAgIHN0cmVhbTogZnVuY3Rpb24oYSkge1xuICAgICAgcmV0dXJuIGkgJiYgbyA9PT0gYSA/IGkgOiBpID0gUGUodCwgbiwgZSwgcikobyA9IGEpO1xuICAgIH0sXG4gICAgZXh0ZW50OiBmdW5jdGlvbihhKSB7XG4gICAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh0ID0gK2FbMF1bMF0sIG4gPSArYVswXVsxXSwgZSA9ICthWzFdWzBdLCByID0gK2FbMV1bMV0sIGkgPSBvID0gbnVsbCwgdSkgOiBbW3QsIG5dLCBbZSwgcl1dO1xuICAgIH1cbiAgfTtcbn1cbnZhciBKZSwgdHIsIFpuLCBCbiwgbm4gPSB7XG4gIHNwaGVyZTogSyxcbiAgcG9pbnQ6IEssXG4gIGxpbmVTdGFydDogSHUsXG4gIGxpbmVFbmQ6IEssXG4gIHBvbHlnb25TdGFydDogSyxcbiAgcG9seWdvbkVuZDogS1xufTtcbmZ1bmN0aW9uIEh1KCkge1xuICBubi5wb2ludCA9IFF1LCBubi5saW5lRW5kID0gS3U7XG59XG5mdW5jdGlvbiBLdSgpIHtcbiAgbm4ucG9pbnQgPSBubi5saW5lRW5kID0gSztcbn1cbmZ1bmN0aW9uIFF1KHQsIG4pIHtcbiAgdCAqPSBPLCBuICo9IE8sIHRyID0gdCwgWm4gPSBBKG4pLCBCbiA9IFIobiksIG5uLnBvaW50ID0gSnU7XG59XG5mdW5jdGlvbiBKdSh0LCBuKSB7XG4gIHQgKj0gTywgbiAqPSBPO1xuICB2YXIgZSA9IEEobiksIHIgPSBSKG4pLCBpID0gWCh0IC0gdHIpLCBvID0gUihpKSwgdSA9IEEoaSksIGEgPSByICogdSwgYyA9IEJuICogZSAtIFpuICogciAqIG8sIGwgPSBabiAqIGUgKyBCbiAqIHIgKiBvO1xuICBKZS5hZGQoY3QoZXQoYSAqIGEgKyBjICogYyksIGwpKSwgdHIgPSB0LCBabiA9IGUsIEJuID0gcjtcbn1cbmZ1bmN0aW9uIG1vKHQpIHtcbiAgcmV0dXJuIEplID0gbmV3IGl0KCksIFN0KHQsIG5uKSwgK0plO1xufVxudmFyIG5yID0gW251bGwsIG51bGxdLCB0YSA9IHsgdHlwZTogXCJMaW5lU3RyaW5nXCIsIGNvb3JkaW5hdGVzOiBuciB9O1xuZnVuY3Rpb24gZmUodCwgbikge1xuICByZXR1cm4gbnJbMF0gPSB0LCBuclsxXSA9IG4sIG1vKHRhKTtcbn1cbnZhciBkaSA9IHtcbiAgRmVhdHVyZTogZnVuY3Rpb24odCwgbikge1xuICAgIHJldHVybiBoZSh0Lmdlb21ldHJ5LCBuKTtcbiAgfSxcbiAgRmVhdHVyZUNvbGxlY3Rpb246IGZ1bmN0aW9uKHQsIG4pIHtcbiAgICBmb3IgKHZhciBlID0gdC5mZWF0dXJlcywgciA9IC0xLCBpID0gZS5sZW5ndGg7ICsrciA8IGk7ICkgaWYgKGhlKGVbcl0uZ2VvbWV0cnksIG4pKSByZXR1cm4gITA7XG4gICAgcmV0dXJuICExO1xuICB9XG59LCBtaSA9IHtcbiAgU3BoZXJlOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gITA7XG4gIH0sXG4gIFBvaW50OiBmdW5jdGlvbih0LCBuKSB7XG4gICAgcmV0dXJuIHlpKHQuY29vcmRpbmF0ZXMsIG4pO1xuICB9LFxuICBNdWx0aVBvaW50OiBmdW5jdGlvbih0LCBuKSB7XG4gICAgZm9yICh2YXIgZSA9IHQuY29vcmRpbmF0ZXMsIHIgPSAtMSwgaSA9IGUubGVuZ3RoOyArK3IgPCBpOyApIGlmICh5aShlW3JdLCBuKSkgcmV0dXJuICEwO1xuICAgIHJldHVybiAhMTtcbiAgfSxcbiAgTGluZVN0cmluZzogZnVuY3Rpb24odCwgbikge1xuICAgIHJldHVybiB3aSh0LmNvb3JkaW5hdGVzLCBuKTtcbiAgfSxcbiAgTXVsdGlMaW5lU3RyaW5nOiBmdW5jdGlvbih0LCBuKSB7XG4gICAgZm9yICh2YXIgZSA9IHQuY29vcmRpbmF0ZXMsIHIgPSAtMSwgaSA9IGUubGVuZ3RoOyArK3IgPCBpOyApIGlmICh3aShlW3JdLCBuKSkgcmV0dXJuICEwO1xuICAgIHJldHVybiAhMTtcbiAgfSxcbiAgUG9seWdvbjogZnVuY3Rpb24odCwgbikge1xuICAgIHJldHVybiBfaSh0LmNvb3JkaW5hdGVzLCBuKTtcbiAgfSxcbiAgTXVsdGlQb2x5Z29uOiBmdW5jdGlvbih0LCBuKSB7XG4gICAgZm9yICh2YXIgZSA9IHQuY29vcmRpbmF0ZXMsIHIgPSAtMSwgaSA9IGUubGVuZ3RoOyArK3IgPCBpOyApIGlmIChfaShlW3JdLCBuKSkgcmV0dXJuICEwO1xuICAgIHJldHVybiAhMTtcbiAgfSxcbiAgR2VvbWV0cnlDb2xsZWN0aW9uOiBmdW5jdGlvbih0LCBuKSB7XG4gICAgZm9yICh2YXIgZSA9IHQuZ2VvbWV0cmllcywgciA9IC0xLCBpID0gZS5sZW5ndGg7ICsrciA8IGk7ICkgaWYgKGhlKGVbcl0sIG4pKSByZXR1cm4gITA7XG4gICAgcmV0dXJuICExO1xuICB9XG59O1xuZnVuY3Rpb24gaGUodCwgbikge1xuICByZXR1cm4gdCAmJiBtaS5oYXNPd25Qcm9wZXJ0eSh0LnR5cGUpID8gbWlbdC50eXBlXSh0LCBuKSA6ICExO1xufVxuZnVuY3Rpb24geWkodCwgbikge1xuICByZXR1cm4gZmUodCwgbikgPT09IDA7XG59XG5mdW5jdGlvbiB3aSh0LCBuKSB7XG4gIGZvciAodmFyIGUsIHIsIGksIG8gPSAwLCB1ID0gdC5sZW5ndGg7IG8gPCB1OyBvKyspIHtcbiAgICBpZiAociA9IGZlKHRbb10sIG4pLCByID09PSAwIHx8IG8gPiAwICYmIChpID0gZmUodFtvXSwgdFtvIC0gMV0pLCBpID4gMCAmJiBlIDw9IGkgJiYgciA8PSBpICYmIChlICsgciAtIGkpICogKDEgLSBNYXRoLnBvdygoZSAtIHIpIC8gaSwgMikpIDwgTW4gKiBpKSlcbiAgICAgIHJldHVybiAhMDtcbiAgICBlID0gcjtcbiAgfVxuICByZXR1cm4gITE7XG59XG5mdW5jdGlvbiBfaSh0LCBuKSB7XG4gIHJldHVybiAhIXBvKHQubWFwKG5hKSwgeW8obikpO1xufVxuZnVuY3Rpb24gbmEodCkge1xuICByZXR1cm4gdCA9IHQubWFwKHlvKSwgdC5wb3AoKSwgdDtcbn1cbmZ1bmN0aW9uIHlvKHQpIHtcbiAgcmV0dXJuIFt0WzBdICogTywgdFsxXSAqIE9dO1xufVxuZnVuY3Rpb24gZWEodCwgbikge1xuICByZXR1cm4gKHQgJiYgZGkuaGFzT3duUHJvcGVydHkodC50eXBlKSA/IGRpW3QudHlwZV0gOiBoZSkodCwgbik7XG59XG5mdW5jdGlvbiBFaSh0LCBuLCBlKSB7XG4gIHZhciByID0gVnQodCwgbiAtIHosIGUpLmNvbmNhdChuKTtcbiAgcmV0dXJuIGZ1bmN0aW9uKGkpIHtcbiAgICByZXR1cm4gci5tYXAoZnVuY3Rpb24obykge1xuICAgICAgcmV0dXJuIFtpLCBvXTtcbiAgICB9KTtcbiAgfTtcbn1cbmZ1bmN0aW9uIFNpKHQsIG4sIGUpIHtcbiAgdmFyIHIgPSBWdCh0LCBuIC0geiwgZSkuY29uY2F0KG4pO1xuICByZXR1cm4gZnVuY3Rpb24oaSkge1xuICAgIHJldHVybiByLm1hcChmdW5jdGlvbihvKSB7XG4gICAgICByZXR1cm4gW28sIGldO1xuICAgIH0pO1xuICB9O1xufVxuZnVuY3Rpb24gU3IoKSB7XG4gIHZhciB0LCBuLCBlLCByLCBpLCBvLCB1LCBhLCBjID0gMTAsIGwgPSBjLCBzID0gOTAsIGYgPSAzNjAsIGgsIHAsIHYsIEUsIFMgPSAyLjU7XG4gIGZ1bmN0aW9uIHkoKSB7XG4gICAgcmV0dXJuIHsgdHlwZTogXCJNdWx0aUxpbmVTdHJpbmdcIiwgY29vcmRpbmF0ZXM6IE0oKSB9O1xuICB9XG4gIGZ1bmN0aW9uIE0oKSB7XG4gICAgcmV0dXJuIFZ0KEZuKHIgLyBzKSAqIHMsIGUsIHMpLm1hcCh2KS5jb25jYXQoVnQoRm4oYSAvIGYpICogZiwgdSwgZikubWFwKEUpKS5jb25jYXQoVnQoRm4obiAvIGMpICogYywgdCwgYykuZmlsdGVyKGZ1bmN0aW9uKG0pIHtcbiAgICAgIHJldHVybiBYKG0gJSBzKSA+IHo7XG4gICAgfSkubWFwKGgpKS5jb25jYXQoVnQoRm4obyAvIGwpICogbCwgaSwgbCkuZmlsdGVyKGZ1bmN0aW9uKG0pIHtcbiAgICAgIHJldHVybiBYKG0gJSBmKSA+IHo7XG4gICAgfSkubWFwKHApKTtcbiAgfVxuICByZXR1cm4geS5saW5lcyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBNKCkubWFwKGZ1bmN0aW9uKG0pIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwiTGluZVN0cmluZ1wiLCBjb29yZGluYXRlczogbSB9O1xuICAgIH0pO1xuICB9LCB5Lm91dGxpbmUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogXCJQb2x5Z29uXCIsXG4gICAgICBjb29yZGluYXRlczogW1xuICAgICAgICB2KHIpLmNvbmNhdChcbiAgICAgICAgICBFKHUpLnNsaWNlKDEpLFxuICAgICAgICAgIHYoZSkucmV2ZXJzZSgpLnNsaWNlKDEpLFxuICAgICAgICAgIEUoYSkucmV2ZXJzZSgpLnNsaWNlKDEpXG4gICAgICAgIClcbiAgICAgIF1cbiAgICB9O1xuICB9LCB5LmV4dGVudCA9IGZ1bmN0aW9uKG0pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IHkuZXh0ZW50TWFqb3IobSkuZXh0ZW50TWlub3IobSkgOiB5LmV4dGVudE1pbm9yKCk7XG4gIH0sIHkuZXh0ZW50TWFqb3IgPSBmdW5jdGlvbihtKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAociA9ICttWzBdWzBdLCBlID0gK21bMV1bMF0sIGEgPSArbVswXVsxXSwgdSA9ICttWzFdWzFdLCByID4gZSAmJiAobSA9IHIsIHIgPSBlLCBlID0gbSksIGEgPiB1ICYmIChtID0gYSwgYSA9IHUsIHUgPSBtKSwgeS5wcmVjaXNpb24oUykpIDogW1tyLCBhXSwgW2UsIHVdXTtcbiAgfSwgeS5leHRlbnRNaW5vciA9IGZ1bmN0aW9uKG0pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChuID0gK21bMF1bMF0sIHQgPSArbVsxXVswXSwgbyA9ICttWzBdWzFdLCBpID0gK21bMV1bMV0sIG4gPiB0ICYmIChtID0gbiwgbiA9IHQsIHQgPSBtKSwgbyA+IGkgJiYgKG0gPSBvLCBvID0gaSwgaSA9IG0pLCB5LnByZWNpc2lvbihTKSkgOiBbW24sIG9dLCBbdCwgaV1dO1xuICB9LCB5LnN0ZXAgPSBmdW5jdGlvbihtKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyB5LnN0ZXBNYWpvcihtKS5zdGVwTWlub3IobSkgOiB5LnN0ZXBNaW5vcigpO1xuICB9LCB5LnN0ZXBNYWpvciA9IGZ1bmN0aW9uKG0pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChzID0gK21bMF0sIGYgPSArbVsxXSwgeSkgOiBbcywgZl07XG4gIH0sIHkuc3RlcE1pbm9yID0gZnVuY3Rpb24obSkge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGMgPSArbVswXSwgbCA9ICttWzFdLCB5KSA6IFtjLCBsXTtcbiAgfSwgeS5wcmVjaXNpb24gPSBmdW5jdGlvbihtKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoUyA9ICttLCBoID0gRWkobywgaSwgOTApLCBwID0gU2kobiwgdCwgUyksIHYgPSBFaShhLCB1LCA5MCksIEUgPSBTaShyLCBlLCBTKSwgeSkgOiBTO1xuICB9LCB5LmV4dGVudE1ham9yKFtbLTE4MCwgLTkwICsgel0sIFsxODAsIDkwIC0gel1dKS5leHRlbnRNaW5vcihbWy0xODAsIC04MCAtIHpdLCBbMTgwLCA4MCArIHpdXSk7XG59XG5mdW5jdGlvbiByYSgpIHtcbiAgcmV0dXJuIFNyKCkoKTtcbn1cbmZ1bmN0aW9uIGlhKHQsIG4pIHtcbiAgdmFyIGUgPSB0WzBdICogTywgciA9IHRbMV0gKiBPLCBpID0gblswXSAqIE8sIG8gPSBuWzFdICogTywgdSA9IFIociksIGEgPSBBKHIpLCBjID0gUihvKSwgbCA9IEEobyksIHMgPSB1ICogUihlKSwgZiA9IHUgKiBBKGUpLCBoID0gYyAqIFIoaSksIHAgPSBjICogQShpKSwgdiA9IDIgKiBsdChldChlaShvIC0gcikgKyB1ICogYyAqIGVpKGkgLSBlKSkpLCBFID0gQSh2KSwgUyA9IHYgPyBmdW5jdGlvbih5KSB7XG4gICAgdmFyIE0gPSBBKHkgKj0gdikgLyBFLCBtID0gQSh2IC0geSkgLyBFLCBfID0gbSAqIHMgKyBNICogaCwgeCA9IG0gKiBmICsgTSAqIHAsIE4gPSBtICogYSArIE0gKiBsO1xuICAgIHJldHVybiBbXG4gICAgICBjdCh4LCBfKSAqIFcsXG4gICAgICBjdChOLCBldChfICogXyArIHggKiB4KSkgKiBXXG4gICAgXTtcbiAgfSA6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBbZSAqIFcsIHIgKiBXXTtcbiAgfTtcbiAgcmV0dXJuIFMuZGlzdGFuY2UgPSB2LCBTO1xufVxuY29uc3QgeG4gPSAodCkgPT4gdDtcbnZhciBGZSA9IG5ldyBpdCgpLCBlciA9IG5ldyBpdCgpLCB3bywgX28sIHJyLCBpciwgenQgPSB7XG4gIHBvaW50OiBLLFxuICBsaW5lU3RhcnQ6IEssXG4gIGxpbmVFbmQ6IEssXG4gIHBvbHlnb25TdGFydDogZnVuY3Rpb24oKSB7XG4gICAgenQubGluZVN0YXJ0ID0gb2EsIHp0LmxpbmVFbmQgPSBhYTtcbiAgfSxcbiAgcG9seWdvbkVuZDogZnVuY3Rpb24oKSB7XG4gICAgenQubGluZVN0YXJ0ID0genQubGluZUVuZCA9IHp0LnBvaW50ID0gSywgRmUuYWRkKFgoZXIpKSwgZXIgPSBuZXcgaXQoKTtcbiAgfSxcbiAgcmVzdWx0OiBmdW5jdGlvbigpIHtcbiAgICB2YXIgdCA9IEZlIC8gMjtcbiAgICByZXR1cm4gRmUgPSBuZXcgaXQoKSwgdDtcbiAgfVxufTtcbmZ1bmN0aW9uIG9hKCkge1xuICB6dC5wb2ludCA9IHVhO1xufVxuZnVuY3Rpb24gdWEodCwgbikge1xuICB6dC5wb2ludCA9IEVvLCB3byA9IHJyID0gdCwgX28gPSBpciA9IG47XG59XG5mdW5jdGlvbiBFbyh0LCBuKSB7XG4gIGVyLmFkZChpciAqIHQgLSByciAqIG4pLCByciA9IHQsIGlyID0gbjtcbn1cbmZ1bmN0aW9uIGFhKCkge1xuICBFbyh3bywgX28pO1xufVxudmFyIGVuID0gMSAvIDAsIHBlID0gZW4sIFBuID0gLWVuLCB2ZSA9IFBuLCBnZSA9IHtcbiAgcG9pbnQ6IHNhLFxuICBsaW5lU3RhcnQ6IEssXG4gIGxpbmVFbmQ6IEssXG4gIHBvbHlnb25TdGFydDogSyxcbiAgcG9seWdvbkVuZDogSyxcbiAgcmVzdWx0OiBmdW5jdGlvbigpIHtcbiAgICB2YXIgdCA9IFtbZW4sIHBlXSwgW1BuLCB2ZV1dO1xuICAgIHJldHVybiBQbiA9IHZlID0gLShwZSA9IGVuID0gMSAvIDApLCB0O1xuICB9XG59O1xuZnVuY3Rpb24gc2EodCwgbikge1xuICB0IDwgZW4gJiYgKGVuID0gdCksIHQgPiBQbiAmJiAoUG4gPSB0KSwgbiA8IHBlICYmIChwZSA9IG4pLCBuID4gdmUgJiYgKHZlID0gbik7XG59XG52YXIgb3IgPSAwLCB1ciA9IDAsIGhuID0gMCwgZGUgPSAwLCBtZSA9IDAsIEh0ID0gMCwgYXIgPSAwLCBzciA9IDAsIHBuID0gMCwgU28sIE1vLCBQdCwgTnQsIHd0ID0ge1xuICBwb2ludDogWXQsXG4gIGxpbmVTdGFydDogTWksXG4gIGxpbmVFbmQ6IHhpLFxuICBwb2x5Z29uU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgIHd0LmxpbmVTdGFydCA9IGZhLCB3dC5saW5lRW5kID0gaGE7XG4gIH0sXG4gIHBvbHlnb25FbmQ6IGZ1bmN0aW9uKCkge1xuICAgIHd0LnBvaW50ID0gWXQsIHd0LmxpbmVTdGFydCA9IE1pLCB3dC5saW5lRW5kID0geGk7XG4gIH0sXG4gIHJlc3VsdDogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHQgPSBwbiA/IFthciAvIHBuLCBzciAvIHBuXSA6IEh0ID8gW2RlIC8gSHQsIG1lIC8gSHRdIDogaG4gPyBbb3IgLyBobiwgdXIgLyBobl0gOiBbTmFOLCBOYU5dO1xuICAgIHJldHVybiBvciA9IHVyID0gaG4gPSBkZSA9IG1lID0gSHQgPSBhciA9IHNyID0gcG4gPSAwLCB0O1xuICB9XG59O1xuZnVuY3Rpb24gWXQodCwgbikge1xuICBvciArPSB0LCB1ciArPSBuLCArK2huO1xufVxuZnVuY3Rpb24gTWkoKSB7XG4gIHd0LnBvaW50ID0gY2E7XG59XG5mdW5jdGlvbiBjYSh0LCBuKSB7XG4gIHd0LnBvaW50ID0gbGEsIFl0KFB0ID0gdCwgTnQgPSBuKTtcbn1cbmZ1bmN0aW9uIGxhKHQsIG4pIHtcbiAgdmFyIGUgPSB0IC0gUHQsIHIgPSBuIC0gTnQsIGkgPSBldChlICogZSArIHIgKiByKTtcbiAgZGUgKz0gaSAqIChQdCArIHQpIC8gMiwgbWUgKz0gaSAqIChOdCArIG4pIC8gMiwgSHQgKz0gaSwgWXQoUHQgPSB0LCBOdCA9IG4pO1xufVxuZnVuY3Rpb24geGkoKSB7XG4gIHd0LnBvaW50ID0gWXQ7XG59XG5mdW5jdGlvbiBmYSgpIHtcbiAgd3QucG9pbnQgPSBwYTtcbn1cbmZ1bmN0aW9uIGhhKCkge1xuICB4byhTbywgTW8pO1xufVxuZnVuY3Rpb24gcGEodCwgbikge1xuICB3dC5wb2ludCA9IHhvLCBZdChTbyA9IFB0ID0gdCwgTW8gPSBOdCA9IG4pO1xufVxuZnVuY3Rpb24geG8odCwgbikge1xuICB2YXIgZSA9IHQgLSBQdCwgciA9IG4gLSBOdCwgaSA9IGV0KGUgKiBlICsgciAqIHIpO1xuICBkZSArPSBpICogKFB0ICsgdCkgLyAyLCBtZSArPSBpICogKE50ICsgbikgLyAyLCBIdCArPSBpLCBpID0gTnQgKiB0IC0gUHQgKiBuLCBhciArPSBpICogKFB0ICsgdCksIHNyICs9IGkgKiAoTnQgKyBuKSwgcG4gKz0gaSAqIDMsIFl0KFB0ID0gdCwgTnQgPSBuKTtcbn1cbmZ1bmN0aW9uIFBvKHQpIHtcbiAgdGhpcy5fY29udGV4dCA9IHQ7XG59XG5Qby5wcm90b3R5cGUgPSB7XG4gIF9yYWRpdXM6IDQuNSxcbiAgcG9pbnRSYWRpdXM6IGZ1bmN0aW9uKHQpIHtcbiAgICByZXR1cm4gdGhpcy5fcmFkaXVzID0gdCwgdGhpcztcbiAgfSxcbiAgcG9seWdvblN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9saW5lID0gMDtcbiAgfSxcbiAgcG9seWdvbkVuZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fbGluZSA9IE5hTjtcbiAgfSxcbiAgbGluZVN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9wb2ludCA9IDA7XG4gIH0sXG4gIGxpbmVFbmQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2xpbmUgPT09IDAgJiYgdGhpcy5fY29udGV4dC5jbG9zZVBhdGgoKSwgdGhpcy5fcG9pbnQgPSBOYU47XG4gIH0sXG4gIHBvaW50OiBmdW5jdGlvbih0LCBuKSB7XG4gICAgc3dpdGNoICh0aGlzLl9wb2ludCkge1xuICAgICAgY2FzZSAwOiB7XG4gICAgICAgIHRoaXMuX2NvbnRleHQubW92ZVRvKHQsIG4pLCB0aGlzLl9wb2ludCA9IDE7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAxOiB7XG4gICAgICAgIHRoaXMuX2NvbnRleHQubGluZVRvKHQsIG4pO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgdGhpcy5fY29udGV4dC5tb3ZlVG8odCArIHRoaXMuX3JhZGl1cywgbiksIHRoaXMuX2NvbnRleHQuYXJjKHQsIG4sIHRoaXMuX3JhZGl1cywgMCwgc3QpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHJlc3VsdDogS1xufTtcbnZhciBjciA9IG5ldyBpdCgpLCBJZSwgTm8sICRvLCB2biwgZ24sIE5uID0ge1xuICBwb2ludDogSyxcbiAgbGluZVN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICBObi5wb2ludCA9IHZhO1xuICB9LFxuICBsaW5lRW5kOiBmdW5jdGlvbigpIHtcbiAgICBJZSAmJiBBbyhObywgJG8pLCBObi5wb2ludCA9IEs7XG4gIH0sXG4gIHBvbHlnb25TdGFydDogZnVuY3Rpb24oKSB7XG4gICAgSWUgPSAhMDtcbiAgfSxcbiAgcG9seWdvbkVuZDogZnVuY3Rpb24oKSB7XG4gICAgSWUgPSBudWxsO1xuICB9LFxuICByZXN1bHQ6IGZ1bmN0aW9uKCkge1xuICAgIHZhciB0ID0gK2NyO1xuICAgIHJldHVybiBjciA9IG5ldyBpdCgpLCB0O1xuICB9XG59O1xuZnVuY3Rpb24gdmEodCwgbikge1xuICBObi5wb2ludCA9IEFvLCBObyA9IHZuID0gdCwgJG8gPSBnbiA9IG47XG59XG5mdW5jdGlvbiBBbyh0LCBuKSB7XG4gIHZuIC09IHQsIGduIC09IG4sIGNyLmFkZChldCh2biAqIHZuICsgZ24gKiBnbikpLCB2biA9IHQsIGduID0gbjtcbn1cbmxldCBQaSwgeWUsIE5pLCAkaTtcbmNsYXNzIEFpIHtcbiAgY29uc3RydWN0b3Iobikge1xuICAgIHRoaXMuX2FwcGVuZCA9IG4gPT0gbnVsbCA/IFRvIDogZ2EobiksIHRoaXMuX3JhZGl1cyA9IDQuNSwgdGhpcy5fID0gXCJcIjtcbiAgfVxuICBwb2ludFJhZGl1cyhuKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JhZGl1cyA9ICtuLCB0aGlzO1xuICB9XG4gIHBvbHlnb25TdGFydCgpIHtcbiAgICB0aGlzLl9saW5lID0gMDtcbiAgfVxuICBwb2x5Z29uRW5kKCkge1xuICAgIHRoaXMuX2xpbmUgPSBOYU47XG4gIH1cbiAgbGluZVN0YXJ0KCkge1xuICAgIHRoaXMuX3BvaW50ID0gMDtcbiAgfVxuICBsaW5lRW5kKCkge1xuICAgIHRoaXMuX2xpbmUgPT09IDAgJiYgKHRoaXMuXyArPSBcIlpcIiksIHRoaXMuX3BvaW50ID0gTmFOO1xuICB9XG4gIHBvaW50KG4sIGUpIHtcbiAgICBzd2l0Y2ggKHRoaXMuX3BvaW50KSB7XG4gICAgICBjYXNlIDA6IHtcbiAgICAgICAgdGhpcy5fYXBwZW5kYE0ke259LCR7ZX1gLCB0aGlzLl9wb2ludCA9IDE7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAxOiB7XG4gICAgICAgIHRoaXMuX2FwcGVuZGBMJHtufSwke2V9YDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIGlmICh0aGlzLl9hcHBlbmRgTSR7bn0sJHtlfWAsIHRoaXMuX3JhZGl1cyAhPT0gTmkgfHwgdGhpcy5fYXBwZW5kICE9PSB5ZSkge1xuICAgICAgICAgIGNvbnN0IHIgPSB0aGlzLl9yYWRpdXMsIGkgPSB0aGlzLl87XG4gICAgICAgICAgdGhpcy5fID0gXCJcIiwgdGhpcy5fYXBwZW5kYG0wLCR7cn1hJHtyfSwke3J9IDAgMSwxIDAsJHstMiAqIHJ9YSR7cn0sJHtyfSAwIDEsMSAwLCR7MiAqIHJ9emAsIE5pID0gciwgeWUgPSB0aGlzLl9hcHBlbmQsICRpID0gdGhpcy5fLCB0aGlzLl8gPSBpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuXyArPSAkaTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJlc3VsdCgpIHtcbiAgICBjb25zdCBuID0gdGhpcy5fO1xuICAgIHJldHVybiB0aGlzLl8gPSBcIlwiLCBuLmxlbmd0aCA/IG4gOiBudWxsO1xuICB9XG59XG5mdW5jdGlvbiBUbyh0KSB7XG4gIGxldCBuID0gMTtcbiAgdGhpcy5fICs9IHRbMF07XG4gIGZvciAoY29uc3QgZSA9IHQubGVuZ3RoOyBuIDwgZTsgKytuKVxuICAgIHRoaXMuXyArPSBhcmd1bWVudHNbbl0gKyB0W25dO1xufVxuZnVuY3Rpb24gZ2EodCkge1xuICBjb25zdCBuID0gTWF0aC5mbG9vcih0KTtcbiAgaWYgKCEobiA+PSAwKSkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoYGludmFsaWQgZGlnaXRzOiAke3R9YCk7XG4gIGlmIChuID4gMTUpIHJldHVybiBUbztcbiAgaWYgKG4gIT09IFBpKSB7XG4gICAgY29uc3QgZSA9IDEwICoqIG47XG4gICAgUGkgPSBuLCB5ZSA9IGZ1bmN0aW9uKGkpIHtcbiAgICAgIGxldCBvID0gMTtcbiAgICAgIHRoaXMuXyArPSBpWzBdO1xuICAgICAgZm9yIChjb25zdCB1ID0gaS5sZW5ndGg7IG8gPCB1OyArK28pXG4gICAgICAgIHRoaXMuXyArPSBNYXRoLnJvdW5kKGFyZ3VtZW50c1tvXSAqIGUpIC8gZSArIGlbb107XG4gICAgfTtcbiAgfVxuICByZXR1cm4geWU7XG59XG5mdW5jdGlvbiBrbyh0LCBuKSB7XG4gIGxldCBlID0gMywgciA9IDQuNSwgaSwgbztcbiAgZnVuY3Rpb24gdShhKSB7XG4gICAgcmV0dXJuIGEgJiYgKHR5cGVvZiByID09IFwiZnVuY3Rpb25cIiAmJiBvLnBvaW50UmFkaXVzKCtyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpLCBTdChhLCBpKG8pKSksIG8ucmVzdWx0KCk7XG4gIH1cbiAgcmV0dXJuIHUuYXJlYSA9IGZ1bmN0aW9uKGEpIHtcbiAgICByZXR1cm4gU3QoYSwgaSh6dCkpLCB6dC5yZXN1bHQoKTtcbiAgfSwgdS5tZWFzdXJlID0gZnVuY3Rpb24oYSkge1xuICAgIHJldHVybiBTdChhLCBpKE5uKSksIE5uLnJlc3VsdCgpO1xuICB9LCB1LmJvdW5kcyA9IGZ1bmN0aW9uKGEpIHtcbiAgICByZXR1cm4gU3QoYSwgaShnZSkpLCBnZS5yZXN1bHQoKTtcbiAgfSwgdS5jZW50cm9pZCA9IGZ1bmN0aW9uKGEpIHtcbiAgICByZXR1cm4gU3QoYSwgaSh3dCkpLCB3dC5yZXN1bHQoKTtcbiAgfSwgdS5wcm9qZWN0aW9uID0gZnVuY3Rpb24oYSkge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGkgPSBhID09IG51bGwgPyAodCA9IG51bGwsIHhuKSA6ICh0ID0gYSkuc3RyZWFtLCB1KSA6IHQ7XG4gIH0sIHUuY29udGV4dCA9IGZ1bmN0aW9uKGEpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChvID0gYSA9PSBudWxsID8gKG4gPSBudWxsLCBuZXcgQWkoZSkpIDogbmV3IFBvKG4gPSBhKSwgdHlwZW9mIHIgIT0gXCJmdW5jdGlvblwiICYmIG8ucG9pbnRSYWRpdXMociksIHUpIDogbjtcbiAgfSwgdS5wb2ludFJhZGl1cyA9IGZ1bmN0aW9uKGEpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChyID0gdHlwZW9mIGEgPT0gXCJmdW5jdGlvblwiID8gYSA6IChvLnBvaW50UmFkaXVzKCthKSwgK2EpLCB1KSA6IHI7XG4gIH0sIHUuZGlnaXRzID0gZnVuY3Rpb24oYSkge1xuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIGU7XG4gICAgaWYgKGEgPT0gbnVsbCkgZSA9IG51bGw7XG4gICAgZWxzZSB7XG4gICAgICBjb25zdCBjID0gTWF0aC5mbG9vcihhKTtcbiAgICAgIGlmICghKGMgPj0gMCkpIHRocm93IG5ldyBSYW5nZUVycm9yKGBpbnZhbGlkIGRpZ2l0czogJHthfWApO1xuICAgICAgZSA9IGM7XG4gICAgfVxuICAgIHJldHVybiBuID09PSBudWxsICYmIChvID0gbmV3IEFpKGUpKSwgdTtcbiAgfSwgdS5wcm9qZWN0aW9uKHQpLmRpZ2l0cyhlKS5jb250ZXh0KG4pO1xufVxuZnVuY3Rpb24gZGEodCkge1xuICByZXR1cm4ge1xuICAgIHN0cmVhbToga24odClcbiAgfTtcbn1cbmZ1bmN0aW9uIGtuKHQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG4pIHtcbiAgICB2YXIgZSA9IG5ldyBscigpO1xuICAgIGZvciAodmFyIHIgaW4gdCkgZVtyXSA9IHRbcl07XG4gICAgcmV0dXJuIGUuc3RyZWFtID0gbiwgZTtcbiAgfTtcbn1cbmZ1bmN0aW9uIGxyKCkge1xufVxubHIucHJvdG90eXBlID0ge1xuICBjb25zdHJ1Y3RvcjogbHIsXG4gIHBvaW50OiBmdW5jdGlvbih0LCBuKSB7XG4gICAgdGhpcy5zdHJlYW0ucG9pbnQodCwgbik7XG4gIH0sXG4gIHNwaGVyZTogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zdHJlYW0uc3BoZXJlKCk7XG4gIH0sXG4gIGxpbmVTdGFydDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zdHJlYW0ubGluZVN0YXJ0KCk7XG4gIH0sXG4gIGxpbmVFbmQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc3RyZWFtLmxpbmVFbmQoKTtcbiAgfSxcbiAgcG9seWdvblN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnN0cmVhbS5wb2x5Z29uU3RhcnQoKTtcbiAgfSxcbiAgcG9seWdvbkVuZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zdHJlYW0ucG9seWdvbkVuZCgpO1xuICB9XG59O1xuZnVuY3Rpb24gTXIodCwgbiwgZSkge1xuICB2YXIgciA9IHQuY2xpcEV4dGVudCAmJiB0LmNsaXBFeHRlbnQoKTtcbiAgcmV0dXJuIHQuc2NhbGUoMTUwKS50cmFuc2xhdGUoWzAsIDBdKSwgciAhPSBudWxsICYmIHQuY2xpcEV4dGVudChudWxsKSwgU3QoZSwgdC5zdHJlYW0oZ2UpKSwgbihnZS5yZXN1bHQoKSksIHIgIT0gbnVsbCAmJiB0LmNsaXBFeHRlbnQociksIHQ7XG59XG5mdW5jdGlvbiBOZSh0LCBuLCBlKSB7XG4gIHJldHVybiBNcih0LCBmdW5jdGlvbihyKSB7XG4gICAgdmFyIGkgPSBuWzFdWzBdIC0gblswXVswXSwgbyA9IG5bMV1bMV0gLSBuWzBdWzFdLCB1ID0gTWF0aC5taW4oaSAvIChyWzFdWzBdIC0gclswXVswXSksIG8gLyAoclsxXVsxXSAtIHJbMF1bMV0pKSwgYSA9ICtuWzBdWzBdICsgKGkgLSB1ICogKHJbMV1bMF0gKyByWzBdWzBdKSkgLyAyLCBjID0gK25bMF1bMV0gKyAobyAtIHUgKiAoclsxXVsxXSArIHJbMF1bMV0pKSAvIDI7XG4gICAgdC5zY2FsZSgxNTAgKiB1KS50cmFuc2xhdGUoW2EsIGNdKTtcbiAgfSwgZSk7XG59XG5mdW5jdGlvbiB4cih0LCBuLCBlKSB7XG4gIHJldHVybiBOZSh0LCBbWzAsIDBdLCBuXSwgZSk7XG59XG5mdW5jdGlvbiBQcih0LCBuLCBlKSB7XG4gIHJldHVybiBNcih0LCBmdW5jdGlvbihyKSB7XG4gICAgdmFyIGkgPSArbiwgbyA9IGkgLyAoclsxXVswXSAtIHJbMF1bMF0pLCB1ID0gKGkgLSBvICogKHJbMV1bMF0gKyByWzBdWzBdKSkgLyAyLCBhID0gLW8gKiByWzBdWzFdO1xuICAgIHQuc2NhbGUoMTUwICogbykudHJhbnNsYXRlKFt1LCBhXSk7XG4gIH0sIGUpO1xufVxuZnVuY3Rpb24gTnIodCwgbiwgZSkge1xuICByZXR1cm4gTXIodCwgZnVuY3Rpb24ocikge1xuICAgIHZhciBpID0gK24sIG8gPSBpIC8gKHJbMV1bMV0gLSByWzBdWzFdKSwgdSA9IC1vICogclswXVswXSwgYSA9IChpIC0gbyAqIChyWzFdWzFdICsgclswXVsxXSkpIC8gMjtcbiAgICB0LnNjYWxlKDE1MCAqIG8pLnRyYW5zbGF0ZShbdSwgYV0pO1xuICB9LCBlKTtcbn1cbnZhciBUaSA9IDE2LCBtYSA9IFIoMzAgKiBPKTtcbmZ1bmN0aW9uIGtpKHQsIG4pIHtcbiAgcmV0dXJuICtuID8gd2EodCwgbikgOiB5YSh0KTtcbn1cbmZ1bmN0aW9uIHlhKHQpIHtcbiAgcmV0dXJuIGtuKHtcbiAgICBwb2ludDogZnVuY3Rpb24obiwgZSkge1xuICAgICAgbiA9IHQobiwgZSksIHRoaXMuc3RyZWFtLnBvaW50KG5bMF0sIG5bMV0pO1xuICAgIH1cbiAgfSk7XG59XG5mdW5jdGlvbiB3YSh0LCBuKSB7XG4gIGZ1bmN0aW9uIGUociwgaSwgbywgdSwgYSwgYywgbCwgcywgZiwgaCwgcCwgdiwgRSwgUykge1xuICAgIHZhciB5ID0gbCAtIHIsIE0gPSBzIC0gaSwgbSA9IHkgKiB5ICsgTSAqIE07XG4gICAgaWYgKG0gPiA0ICogbiAmJiBFLS0pIHtcbiAgICAgIHZhciBfID0gdSArIGgsIHggPSBhICsgcCwgTiA9IGMgKyB2LCBDID0gZXQoXyAqIF8gKyB4ICogeCArIE4gKiBOKSwgRiA9IGx0KE4gLz0gQyksIEQgPSBYKFgoTikgLSAxKSA8IHogfHwgWChvIC0gZikgPCB6ID8gKG8gKyBmKSAvIDIgOiBjdCh4LCBfKSwgYiA9IHQoRCwgRiksIEwgPSBiWzBdLCBHID0gYlsxXSwgQiA9IEwgLSByLCBnID0gRyAtIGksIGQgPSBNICogQiAtIHkgKiBnO1xuICAgICAgKGQgKiBkIC8gbSA+IG4gfHwgWCgoeSAqIEIgKyBNICogZykgLyBtIC0gMC41KSA+IDAuMyB8fCB1ICogaCArIGEgKiBwICsgYyAqIHYgPCBtYSkgJiYgKGUociwgaSwgbywgdSwgYSwgYywgTCwgRywgRCwgXyAvPSBDLCB4IC89IEMsIE4sIEUsIFMpLCBTLnBvaW50KEwsIEcpLCBlKEwsIEcsIEQsIF8sIHgsIE4sIGwsIHMsIGYsIGgsIHAsIHYsIEUsIFMpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKHIpIHtcbiAgICB2YXIgaSwgbywgdSwgYSwgYywgbCwgcywgZiwgaCwgcCwgdiwgRSwgUyA9IHtcbiAgICAgIHBvaW50OiB5LFxuICAgICAgbGluZVN0YXJ0OiBNLFxuICAgICAgbGluZUVuZDogXyxcbiAgICAgIHBvbHlnb25TdGFydDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHIucG9seWdvblN0YXJ0KCksIFMubGluZVN0YXJ0ID0geDtcbiAgICAgIH0sXG4gICAgICBwb2x5Z29uRW5kOiBmdW5jdGlvbigpIHtcbiAgICAgICAgci5wb2x5Z29uRW5kKCksIFMubGluZVN0YXJ0ID0gTTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGZ1bmN0aW9uIHkoRiwgRCkge1xuICAgICAgRiA9IHQoRiwgRCksIHIucG9pbnQoRlswXSwgRlsxXSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIE0oKSB7XG4gICAgICBmID0gTmFOLCBTLnBvaW50ID0gbSwgci5saW5lU3RhcnQoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gbShGLCBEKSB7XG4gICAgICB2YXIgYiA9IEJ0KFtGLCBEXSksIEwgPSB0KEYsIEQpO1xuICAgICAgZShmLCBoLCBzLCBwLCB2LCBFLCBmID0gTFswXSwgaCA9IExbMV0sIHMgPSBGLCBwID0gYlswXSwgdiA9IGJbMV0sIEUgPSBiWzJdLCBUaSwgciksIHIucG9pbnQoZiwgaCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIF8oKSB7XG4gICAgICBTLnBvaW50ID0geSwgci5saW5lRW5kKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHgoKSB7XG4gICAgICBNKCksIFMucG9pbnQgPSBOLCBTLmxpbmVFbmQgPSBDO1xuICAgIH1cbiAgICBmdW5jdGlvbiBOKEYsIEQpIHtcbiAgICAgIG0oaSA9IEYsIEQpLCBvID0gZiwgdSA9IGgsIGEgPSBwLCBjID0gdiwgbCA9IEUsIFMucG9pbnQgPSBtO1xuICAgIH1cbiAgICBmdW5jdGlvbiBDKCkge1xuICAgICAgZShmLCBoLCBzLCBwLCB2LCBFLCBvLCB1LCBpLCBhLCBjLCBsLCBUaSwgciksIFMubGluZUVuZCA9IF8sIF8oKTtcbiAgICB9XG4gICAgcmV0dXJuIFM7XG4gIH07XG59XG52YXIgX2EgPSBrbih7XG4gIHBvaW50OiBmdW5jdGlvbih0LCBuKSB7XG4gICAgdGhpcy5zdHJlYW0ucG9pbnQodCAqIE8sIG4gKiBPKTtcbiAgfVxufSk7XG5mdW5jdGlvbiBFYSh0KSB7XG4gIHJldHVybiBrbih7XG4gICAgcG9pbnQ6IGZ1bmN0aW9uKG4sIGUpIHtcbiAgICAgIHZhciByID0gdChuLCBlKTtcbiAgICAgIHJldHVybiB0aGlzLnN0cmVhbS5wb2ludChyWzBdLCByWzFdKTtcbiAgICB9XG4gIH0pO1xufVxuZnVuY3Rpb24gU2EodCwgbiwgZSwgciwgaSkge1xuICBmdW5jdGlvbiBvKHUsIGEpIHtcbiAgICByZXR1cm4gdSAqPSByLCBhICo9IGksIFtuICsgdCAqIHUsIGUgLSB0ICogYV07XG4gIH1cbiAgcmV0dXJuIG8uaW52ZXJ0ID0gZnVuY3Rpb24odSwgYSkge1xuICAgIHJldHVybiBbKHUgLSBuKSAvIHQgKiByLCAoZSAtIGEpIC8gdCAqIGldO1xuICB9LCBvO1xufVxuZnVuY3Rpb24gUmkodCwgbiwgZSwgciwgaSwgbykge1xuICBpZiAoIW8pIHJldHVybiBTYSh0LCBuLCBlLCByLCBpKTtcbiAgdmFyIHUgPSBSKG8pLCBhID0gQShvKSwgYyA9IHUgKiB0LCBsID0gYSAqIHQsIHMgPSB1IC8gdCwgZiA9IGEgLyB0LCBoID0gKGEgKiBlIC0gdSAqIG4pIC8gdCwgcCA9IChhICogbiArIHUgKiBlKSAvIHQ7XG4gIGZ1bmN0aW9uIHYoRSwgUykge1xuICAgIHJldHVybiBFICo9IHIsIFMgKj0gaSwgW2MgKiBFIC0gbCAqIFMgKyBuLCBlIC0gbCAqIEUgLSBjICogU107XG4gIH1cbiAgcmV0dXJuIHYuaW52ZXJ0ID0gZnVuY3Rpb24oRSwgUykge1xuICAgIHJldHVybiBbciAqIChzICogRSAtIGYgKiBTICsgaCksIGkgKiAocCAtIGYgKiBFIC0gcyAqIFMpXTtcbiAgfSwgdjtcbn1cbmZ1bmN0aW9uIEF0KHQpIHtcbiAgcmV0dXJuICRyKGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0O1xuICB9KSgpO1xufVxuZnVuY3Rpb24gJHIodCkge1xuICB2YXIgbiwgZSA9IDE1MCwgciA9IDQ4MCwgaSA9IDI1MCwgbyA9IDAsIHUgPSAwLCBhID0gMCwgYyA9IDAsIGwgPSAwLCBzLCBmID0gMCwgaCA9IDEsIHAgPSAxLCB2ID0gbnVsbCwgRSA9IFFlLCBTID0gbnVsbCwgeSwgTSwgbSwgXyA9IHhuLCB4ID0gMC41LCBOLCBDLCBGLCBELCBiO1xuICBmdW5jdGlvbiBMKGQpIHtcbiAgICByZXR1cm4gRihkWzBdICogTywgZFsxXSAqIE8pO1xuICB9XG4gIGZ1bmN0aW9uIEcoZCkge1xuICAgIHJldHVybiBkID0gRi5pbnZlcnQoZFswXSwgZFsxXSksIGQgJiYgW2RbMF0gKiBXLCBkWzFdICogV107XG4gIH1cbiAgTC5zdHJlYW0gPSBmdW5jdGlvbihkKSB7XG4gICAgcmV0dXJuIEQgJiYgYiA9PT0gZCA/IEQgOiBEID0gX2EoRWEocykoRShOKF8oYiA9IGQpKSkpKTtcbiAgfSwgTC5wcmVjbGlwID0gZnVuY3Rpb24oZCkge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKEUgPSBkLCB2ID0gdm9pZCAwLCBnKCkpIDogRTtcbiAgfSwgTC5wb3N0Y2xpcCA9IGZ1bmN0aW9uKGQpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChfID0gZCwgUyA9IHkgPSBNID0gbSA9IG51bGwsIGcoKSkgOiBfO1xuICB9LCBMLmNsaXBBbmdsZSA9IGZ1bmN0aW9uKGQpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChFID0gK2QgPyBnbyh2ID0gZCAqIE8pIDogKHYgPSBudWxsLCBRZSksIGcoKSkgOiB2ICogVztcbiAgfSwgTC5jbGlwRXh0ZW50ID0gZnVuY3Rpb24oZCkge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKF8gPSBkID09IG51bGwgPyAoUyA9IHkgPSBNID0gbSA9IG51bGwsIHhuKSA6IFBlKFMgPSArZFswXVswXSwgeSA9ICtkWzBdWzFdLCBNID0gK2RbMV1bMF0sIG0gPSArZFsxXVsxXSksIGcoKSkgOiBTID09IG51bGwgPyBudWxsIDogW1tTLCB5XSwgW00sIG1dXTtcbiAgfSwgTC5zY2FsZSA9IGZ1bmN0aW9uKGQpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChlID0gK2QsIEIoKSkgOiBlO1xuICB9LCBMLnRyYW5zbGF0ZSA9IGZ1bmN0aW9uKGQpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChyID0gK2RbMF0sIGkgPSArZFsxXSwgQigpKSA6IFtyLCBpXTtcbiAgfSwgTC5jZW50ZXIgPSBmdW5jdGlvbihkKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAobyA9IGRbMF0gJSAzNjAgKiBPLCB1ID0gZFsxXSAlIDM2MCAqIE8sIEIoKSkgOiBbbyAqIFcsIHUgKiBXXTtcbiAgfSwgTC5yb3RhdGUgPSBmdW5jdGlvbihkKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoYSA9IGRbMF0gJSAzNjAgKiBPLCBjID0gZFsxXSAlIDM2MCAqIE8sIGwgPSBkLmxlbmd0aCA+IDIgPyBkWzJdICUgMzYwICogTyA6IDAsIEIoKSkgOiBbYSAqIFcsIGMgKiBXLCBsICogV107XG4gIH0sIEwuYW5nbGUgPSBmdW5jdGlvbihkKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoZiA9IGQgJSAzNjAgKiBPLCBCKCkpIDogZiAqIFc7XG4gIH0sIEwucmVmbGVjdFggPSBmdW5jdGlvbihkKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoaCA9IGQgPyAtMSA6IDEsIEIoKSkgOiBoIDwgMDtcbiAgfSwgTC5yZWZsZWN0WSA9IGZ1bmN0aW9uKGQpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChwID0gZCA/IC0xIDogMSwgQigpKSA6IHAgPCAwO1xuICB9LCBMLnByZWNpc2lvbiA9IGZ1bmN0aW9uKGQpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChOID0ga2koQywgeCA9IGQgKiBkKSwgZygpKSA6IGV0KHgpO1xuICB9LCBMLmZpdEV4dGVudCA9IGZ1bmN0aW9uKGQsIHcpIHtcbiAgICByZXR1cm4gTmUoTCwgZCwgdyk7XG4gIH0sIEwuZml0U2l6ZSA9IGZ1bmN0aW9uKGQsIHcpIHtcbiAgICByZXR1cm4geHIoTCwgZCwgdyk7XG4gIH0sIEwuZml0V2lkdGggPSBmdW5jdGlvbihkLCB3KSB7XG4gICAgcmV0dXJuIFByKEwsIGQsIHcpO1xuICB9LCBMLmZpdEhlaWdodCA9IGZ1bmN0aW9uKGQsIHcpIHtcbiAgICByZXR1cm4gTnIoTCwgZCwgdyk7XG4gIH07XG4gIGZ1bmN0aW9uIEIoKSB7XG4gICAgdmFyIGQgPSBSaShlLCAwLCAwLCBoLCBwLCBmKS5hcHBseShudWxsLCBuKG8sIHUpKSwgdyA9IFJpKGUsIHIgLSBkWzBdLCBpIC0gZFsxXSwgaCwgcCwgZik7XG4gICAgcmV0dXJuIHMgPSBFcihhLCBjLCBsKSwgQyA9IEhlKG4sIHcpLCBGID0gSGUocywgQyksIE4gPSBraShDLCB4KSwgZygpO1xuICB9XG4gIGZ1bmN0aW9uIGcoKSB7XG4gICAgcmV0dXJuIEQgPSBiID0gbnVsbCwgTDtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIG4gPSB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyksIEwuaW52ZXJ0ID0gbi5pbnZlcnQgJiYgRywgQigpO1xuICB9O1xufVxuZnVuY3Rpb24gQXIodCkge1xuICB2YXIgbiA9IDAsIGUgPSBqIC8gMywgciA9ICRyKHQpLCBpID0gcihuLCBlKTtcbiAgcmV0dXJuIGkucGFyYWxsZWxzID0gZnVuY3Rpb24obykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gcihuID0gb1swXSAqIE8sIGUgPSBvWzFdICogTykgOiBbbiAqIFcsIGUgKiBXXTtcbiAgfSwgaTtcbn1cbmZ1bmN0aW9uIE1hKHQpIHtcbiAgdmFyIG4gPSBSKHQpO1xuICBmdW5jdGlvbiBlKHIsIGkpIHtcbiAgICByZXR1cm4gW3IgKiBuLCBBKGkpIC8gbl07XG4gIH1cbiAgcmV0dXJuIGUuaW52ZXJ0ID0gZnVuY3Rpb24ociwgaSkge1xuICAgIHJldHVybiBbciAvIG4sIGx0KGkgKiBuKV07XG4gIH0sIGU7XG59XG5mdW5jdGlvbiBSbyh0LCBuKSB7XG4gIHZhciBlID0gQSh0KSwgciA9IChlICsgQShuKSkgLyAyO1xuICBpZiAoWChyKSA8IHopIHJldHVybiBNYSh0KTtcbiAgdmFyIGkgPSAxICsgZSAqICgyICogciAtIGUpLCBvID0gZXQoaSkgLyByO1xuICBmdW5jdGlvbiB1KGEsIGMpIHtcbiAgICB2YXIgbCA9IGV0KGkgLSAyICogciAqIEEoYykpIC8gcjtcbiAgICByZXR1cm4gW2wgKiBBKGEgKj0gciksIG8gLSBsICogUihhKV07XG4gIH1cbiAgcmV0dXJuIHUuaW52ZXJ0ID0gZnVuY3Rpb24oYSwgYykge1xuICAgIHZhciBsID0gbyAtIGMsIHMgPSBjdChhLCBYKGwpKSAqIF90KGwpO1xuICAgIHJldHVybiBsICogciA8IDAgJiYgKHMgLT0gaiAqIF90KGEpICogX3QobCkpLCBbcyAvIHIsIGx0KChpIC0gKGEgKiBhICsgbCAqIGwpICogciAqIHIpIC8gKDIgKiByKSldO1xuICB9LCB1O1xufVxuZnVuY3Rpb24gd2UoKSB7XG4gIHJldHVybiBBcihSbykuc2NhbGUoMTU1LjQyNCkuY2VudGVyKFswLCAzMy42NDQyXSk7XG59XG5mdW5jdGlvbiBDbygpIHtcbiAgcmV0dXJuIHdlKCkucGFyYWxsZWxzKFsyOS41LCA0NS41XSkuc2NhbGUoMTA3MCkudHJhbnNsYXRlKFs0ODAsIDI1MF0pLnJvdGF0ZShbOTYsIDBdKS5jZW50ZXIoWy0wLjYsIDM4LjddKTtcbn1cbmZ1bmN0aW9uIHhhKHQpIHtcbiAgdmFyIG4gPSB0Lmxlbmd0aDtcbiAgcmV0dXJuIHtcbiAgICBwb2ludDogZnVuY3Rpb24oZSwgcikge1xuICAgICAgZm9yICh2YXIgaSA9IC0xOyArK2kgPCBuOyApIHRbaV0ucG9pbnQoZSwgcik7XG4gICAgfSxcbiAgICBzcGhlcmU6IGZ1bmN0aW9uKCkge1xuICAgICAgZm9yICh2YXIgZSA9IC0xOyArK2UgPCBuOyApIHRbZV0uc3BoZXJlKCk7XG4gICAgfSxcbiAgICBsaW5lU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgZm9yICh2YXIgZSA9IC0xOyArK2UgPCBuOyApIHRbZV0ubGluZVN0YXJ0KCk7XG4gICAgfSxcbiAgICBsaW5lRW5kOiBmdW5jdGlvbigpIHtcbiAgICAgIGZvciAodmFyIGUgPSAtMTsgKytlIDwgbjsgKSB0W2VdLmxpbmVFbmQoKTtcbiAgICB9LFxuICAgIHBvbHlnb25TdGFydDogZnVuY3Rpb24oKSB7XG4gICAgICBmb3IgKHZhciBlID0gLTE7ICsrZSA8IG47ICkgdFtlXS5wb2x5Z29uU3RhcnQoKTtcbiAgICB9LFxuICAgIHBvbHlnb25FbmQ6IGZ1bmN0aW9uKCkge1xuICAgICAgZm9yICh2YXIgZSA9IC0xOyArK2UgPCBuOyApIHRbZV0ucG9seWdvbkVuZCgpO1xuICAgIH1cbiAgfTtcbn1cbmZ1bmN0aW9uIFBhKCkge1xuICB2YXIgdCwgbiwgZSA9IENvKCksIHIsIGkgPSB3ZSgpLnJvdGF0ZShbMTU0LCAwXSkuY2VudGVyKFstMiwgNTguNV0pLnBhcmFsbGVscyhbNTUsIDY1XSksIG8sIHUgPSB3ZSgpLnJvdGF0ZShbMTU3LCAwXSkuY2VudGVyKFstMywgMTkuOV0pLnBhcmFsbGVscyhbOCwgMThdKSwgYSwgYywgbCA9IHsgcG9pbnQ6IGZ1bmN0aW9uKGgsIHApIHtcbiAgICBjID0gW2gsIHBdO1xuICB9IH07XG4gIGZ1bmN0aW9uIHMoaCkge1xuICAgIHZhciBwID0gaFswXSwgdiA9IGhbMV07XG4gICAgcmV0dXJuIGMgPSBudWxsLCByLnBvaW50KHAsIHYpLCBjIHx8IChvLnBvaW50KHAsIHYpLCBjKSB8fCAoYS5wb2ludChwLCB2KSwgYyk7XG4gIH1cbiAgcy5pbnZlcnQgPSBmdW5jdGlvbihoKSB7XG4gICAgdmFyIHAgPSBlLnNjYWxlKCksIHYgPSBlLnRyYW5zbGF0ZSgpLCBFID0gKGhbMF0gLSB2WzBdKSAvIHAsIFMgPSAoaFsxXSAtIHZbMV0pIC8gcDtcbiAgICByZXR1cm4gKFMgPj0gMC4xMiAmJiBTIDwgMC4yMzQgJiYgRSA+PSAtMC40MjUgJiYgRSA8IC0wLjIxNCA/IGkgOiBTID49IDAuMTY2ICYmIFMgPCAwLjIzNCAmJiBFID49IC0wLjIxNCAmJiBFIDwgLTAuMTE1ID8gdSA6IGUpLmludmVydChoKTtcbiAgfSwgcy5zdHJlYW0gPSBmdW5jdGlvbihoKSB7XG4gICAgcmV0dXJuIHQgJiYgbiA9PT0gaCA/IHQgOiB0ID0geGEoW2Uuc3RyZWFtKG4gPSBoKSwgaS5zdHJlYW0oaCksIHUuc3RyZWFtKGgpXSk7XG4gIH0sIHMucHJlY2lzaW9uID0gZnVuY3Rpb24oaCkge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGUucHJlY2lzaW9uKGgpLCBpLnByZWNpc2lvbihoKSwgdS5wcmVjaXNpb24oaCksIGYoKSkgOiBlLnByZWNpc2lvbigpO1xuICB9LCBzLnNjYWxlID0gZnVuY3Rpb24oaCkge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGUuc2NhbGUoaCksIGkuc2NhbGUoaCAqIDAuMzUpLCB1LnNjYWxlKGgpLCBzLnRyYW5zbGF0ZShlLnRyYW5zbGF0ZSgpKSkgOiBlLnNjYWxlKCk7XG4gIH0sIHMudHJhbnNsYXRlID0gZnVuY3Rpb24oaCkge1xuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIGUudHJhbnNsYXRlKCk7XG4gICAgdmFyIHAgPSBlLnNjYWxlKCksIHYgPSAraFswXSwgRSA9ICtoWzFdO1xuICAgIHJldHVybiByID0gZS50cmFuc2xhdGUoaCkuY2xpcEV4dGVudChbW3YgLSAwLjQ1NSAqIHAsIEUgLSAwLjIzOCAqIHBdLCBbdiArIDAuNDU1ICogcCwgRSArIDAuMjM4ICogcF1dKS5zdHJlYW0obCksIG8gPSBpLnRyYW5zbGF0ZShbdiAtIDAuMzA3ICogcCwgRSArIDAuMjAxICogcF0pLmNsaXBFeHRlbnQoW1t2IC0gMC40MjUgKiBwICsgeiwgRSArIDAuMTIgKiBwICsgel0sIFt2IC0gMC4yMTQgKiBwIC0geiwgRSArIDAuMjM0ICogcCAtIHpdXSkuc3RyZWFtKGwpLCBhID0gdS50cmFuc2xhdGUoW3YgLSAwLjIwNSAqIHAsIEUgKyAwLjIxMiAqIHBdKS5jbGlwRXh0ZW50KFtbdiAtIDAuMjE0ICogcCArIHosIEUgKyAwLjE2NiAqIHAgKyB6XSwgW3YgLSAwLjExNSAqIHAgLSB6LCBFICsgMC4yMzQgKiBwIC0gel1dKS5zdHJlYW0obCksIGYoKTtcbiAgfSwgcy5maXRFeHRlbnQgPSBmdW5jdGlvbihoLCBwKSB7XG4gICAgcmV0dXJuIE5lKHMsIGgsIHApO1xuICB9LCBzLmZpdFNpemUgPSBmdW5jdGlvbihoLCBwKSB7XG4gICAgcmV0dXJuIHhyKHMsIGgsIHApO1xuICB9LCBzLmZpdFdpZHRoID0gZnVuY3Rpb24oaCwgcCkge1xuICAgIHJldHVybiBQcihzLCBoLCBwKTtcbiAgfSwgcy5maXRIZWlnaHQgPSBmdW5jdGlvbihoLCBwKSB7XG4gICAgcmV0dXJuIE5yKHMsIGgsIHApO1xuICB9O1xuICBmdW5jdGlvbiBmKCkge1xuICAgIHJldHVybiB0ID0gbiA9IG51bGwsIHM7XG4gIH1cbiAgcmV0dXJuIHMuc2NhbGUoMTA3MCk7XG59XG5mdW5jdGlvbiB6byh0KSB7XG4gIHJldHVybiBmdW5jdGlvbihuLCBlKSB7XG4gICAgdmFyIHIgPSBSKG4pLCBpID0gUihlKSwgbyA9IHQociAqIGkpO1xuICAgIHJldHVybiBvID09PSAxIC8gMCA/IFsyLCAwXSA6IFtcbiAgICAgIG8gKiBpICogQShuKSxcbiAgICAgIG8gKiBBKGUpXG4gICAgXTtcbiAgfTtcbn1cbmZ1bmN0aW9uIFJuKHQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG4sIGUpIHtcbiAgICB2YXIgciA9IGV0KG4gKiBuICsgZSAqIGUpLCBpID0gdChyKSwgbyA9IEEoaSksIHUgPSBSKGkpO1xuICAgIHJldHVybiBbXG4gICAgICBjdChuICogbywgciAqIHUpLFxuICAgICAgbHQociAmJiBlICogbyAvIHIpXG4gICAgXTtcbiAgfTtcbn1cbnZhciBUciA9IHpvKGZ1bmN0aW9uKHQpIHtcbiAgcmV0dXJuIGV0KDIgLyAoMSArIHQpKTtcbn0pO1xuVHIuaW52ZXJ0ID0gUm4oZnVuY3Rpb24odCkge1xuICByZXR1cm4gMiAqIGx0KHQgLyAyKTtcbn0pO1xuZnVuY3Rpb24gTmEoKSB7XG4gIHJldHVybiBBdChUcikuc2NhbGUoMTI0Ljc1KS5jbGlwQW5nbGUoMTgwIC0gMWUtMyk7XG59XG52YXIga3IgPSB6byhmdW5jdGlvbih0KSB7XG4gIHJldHVybiAodCA9IFFpKHQpKSAmJiB0IC8gQSh0KTtcbn0pO1xua3IuaW52ZXJ0ID0gUm4oZnVuY3Rpb24odCkge1xuICByZXR1cm4gdDtcbn0pO1xuZnVuY3Rpb24gJGEoKSB7XG4gIHJldHVybiBBdChrcikuc2NhbGUoNzkuNDE4OCkuY2xpcEFuZ2xlKDE4MCAtIDFlLTMpO1xufVxuZnVuY3Rpb24gQ24odCwgbikge1xuICByZXR1cm4gW3QsIFFuKHdyKChKICsgbikgLyAyKSldO1xufVxuQ24uaW52ZXJ0ID0gZnVuY3Rpb24odCwgbikge1xuICByZXR1cm4gW3QsIDIgKiB1bihLaShuKSkgLSBKXTtcbn07XG5mdW5jdGlvbiBBYSgpIHtcbiAgcmV0dXJuIE9vKENuKS5zY2FsZSg5NjEgLyBzdCk7XG59XG5mdW5jdGlvbiBPbyh0KSB7XG4gIHZhciBuID0gQXQodCksIGUgPSBuLmNlbnRlciwgciA9IG4uc2NhbGUsIGkgPSBuLnRyYW5zbGF0ZSwgbyA9IG4uY2xpcEV4dGVudCwgdSA9IG51bGwsIGEsIGMsIGw7XG4gIG4uc2NhbGUgPSBmdW5jdGlvbihmKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAocihmKSwgcygpKSA6IHIoKTtcbiAgfSwgbi50cmFuc2xhdGUgPSBmdW5jdGlvbihmKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoaShmKSwgcygpKSA6IGkoKTtcbiAgfSwgbi5jZW50ZXIgPSBmdW5jdGlvbihmKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoZShmKSwgcygpKSA6IGUoKTtcbiAgfSwgbi5jbGlwRXh0ZW50ID0gZnVuY3Rpb24oZikge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGYgPT0gbnVsbCA/IHUgPSBhID0gYyA9IGwgPSBudWxsIDogKHUgPSArZlswXVswXSwgYSA9ICtmWzBdWzFdLCBjID0gK2ZbMV1bMF0sIGwgPSArZlsxXVsxXSksIHMoKSkgOiB1ID09IG51bGwgPyBudWxsIDogW1t1LCBhXSwgW2MsIGxdXTtcbiAgfTtcbiAgZnVuY3Rpb24gcygpIHtcbiAgICB2YXIgZiA9IGogKiByKCksIGggPSBuKGNvKG4ucm90YXRlKCkpLmludmVydChbMCwgMF0pKTtcbiAgICByZXR1cm4gbyh1ID09IG51bGwgPyBbW2hbMF0gLSBmLCBoWzFdIC0gZl0sIFtoWzBdICsgZiwgaFsxXSArIGZdXSA6IHQgPT09IENuID8gW1tNYXRoLm1heChoWzBdIC0gZiwgdSksIGFdLCBbTWF0aC5taW4oaFswXSArIGYsIGMpLCBsXV0gOiBbW3UsIE1hdGgubWF4KGhbMV0gLSBmLCBhKV0sIFtjLCBNYXRoLm1pbihoWzFdICsgZiwgbCldXSk7XG4gIH1cbiAgcmV0dXJuIHMoKTtcbn1cbmZ1bmN0aW9uIGpuKHQpIHtcbiAgcmV0dXJuIHdyKChKICsgdCkgLyAyKTtcbn1cbmZ1bmN0aW9uIExvKHQsIG4pIHtcbiAgdmFyIGUgPSBSKHQpLCByID0gdCA9PT0gbiA/IEEodCkgOiBRbihlIC8gUihuKSkgLyBRbihqbihuKSAvIGpuKHQpKSwgaSA9IGUgKiB6ZShqbih0KSwgcikgLyByO1xuICBpZiAoIXIpIHJldHVybiBDbjtcbiAgZnVuY3Rpb24gbyh1LCBhKSB7XG4gICAgaSA+IDAgPyBhIDwgLUogKyB6ICYmIChhID0gLUogKyB6KSA6IGEgPiBKIC0geiAmJiAoYSA9IEogLSB6KTtcbiAgICB2YXIgYyA9IGkgLyB6ZShqbihhKSwgcik7XG4gICAgcmV0dXJuIFtjICogQShyICogdSksIGkgLSBjICogUihyICogdSldO1xuICB9XG4gIHJldHVybiBvLmludmVydCA9IGZ1bmN0aW9uKHUsIGEpIHtcbiAgICB2YXIgYyA9IGkgLSBhLCBsID0gX3QocikgKiBldCh1ICogdSArIGMgKiBjKSwgcyA9IGN0KHUsIFgoYykpICogX3QoYyk7XG4gICAgcmV0dXJuIGMgKiByIDwgMCAmJiAocyAtPSBqICogX3QodSkgKiBfdChjKSksIFtzIC8gciwgMiAqIHVuKHplKGkgLyBsLCAxIC8gcikpIC0gSl07XG4gIH0sIG87XG59XG5mdW5jdGlvbiBUYSgpIHtcbiAgcmV0dXJuIEFyKExvKS5zY2FsZSgxMDkuNSkucGFyYWxsZWxzKFszMCwgMzBdKTtcbn1cbmZ1bmN0aW9uICRuKHQsIG4pIHtcbiAgcmV0dXJuIFt0LCBuXTtcbn1cbiRuLmludmVydCA9ICRuO1xuZnVuY3Rpb24ga2EoKSB7XG4gIHJldHVybiBBdCgkbikuc2NhbGUoMTUyLjYzKTtcbn1cbmZ1bmN0aW9uIEZvKHQsIG4pIHtcbiAgdmFyIGUgPSBSKHQpLCByID0gdCA9PT0gbiA/IEEodCkgOiAoZSAtIFIobikpIC8gKG4gLSB0KSwgaSA9IGUgLyByICsgdDtcbiAgaWYgKFgocikgPCB6KSByZXR1cm4gJG47XG4gIGZ1bmN0aW9uIG8odSwgYSkge1xuICAgIHZhciBjID0gaSAtIGEsIGwgPSByICogdTtcbiAgICByZXR1cm4gW2MgKiBBKGwpLCBpIC0gYyAqIFIobCldO1xuICB9XG4gIHJldHVybiBvLmludmVydCA9IGZ1bmN0aW9uKHUsIGEpIHtcbiAgICB2YXIgYyA9IGkgLSBhLCBsID0gY3QodSwgWChjKSkgKiBfdChjKTtcbiAgICByZXR1cm4gYyAqIHIgPCAwICYmIChsIC09IGogKiBfdCh1KSAqIF90KGMpKSwgW2wgLyByLCBpIC0gX3QocikgKiBldCh1ICogdSArIGMgKiBjKV07XG4gIH0sIG87XG59XG5mdW5jdGlvbiBSYSgpIHtcbiAgcmV0dXJuIEFyKEZvKS5zY2FsZSgxMzEuMTU0KS5jZW50ZXIoWzAsIDEzLjkzODldKTtcbn1cbnZhciB3biA9IDEuMzQwMjY0LCBfbiA9IC0wLjA4MTEwNiwgRW4gPSA4OTNlLTYsIFNuID0gMzc5NmUtNiwgX2UgPSBldCgzKSAvIDIsIENhID0gMTI7XG5mdW5jdGlvbiBScih0LCBuKSB7XG4gIHZhciBlID0gbHQoX2UgKiBBKG4pKSwgciA9IGUgKiBlLCBpID0gciAqIHIgKiByO1xuICByZXR1cm4gW1xuICAgIHQgKiBSKGUpIC8gKF9lICogKHduICsgMyAqIF9uICogciArIGkgKiAoNyAqIEVuICsgOSAqIFNuICogcikpKSxcbiAgICBlICogKHduICsgX24gKiByICsgaSAqIChFbiArIFNuICogcikpXG4gIF07XG59XG5Sci5pbnZlcnQgPSBmdW5jdGlvbih0LCBuKSB7XG4gIGZvciAodmFyIGUgPSBuLCByID0gZSAqIGUsIGkgPSByICogciAqIHIsIG8gPSAwLCB1LCBhLCBjOyBvIDwgQ2EgJiYgKGEgPSBlICogKHduICsgX24gKiByICsgaSAqIChFbiArIFNuICogcikpIC0gbiwgYyA9IHduICsgMyAqIF9uICogciArIGkgKiAoNyAqIEVuICsgOSAqIFNuICogciksIGUgLT0gdSA9IGEgLyBjLCByID0gZSAqIGUsIGkgPSByICogciAqIHIsICEoWCh1KSA8IE1uKSk7ICsrbylcbiAgICA7XG4gIHJldHVybiBbXG4gICAgX2UgKiB0ICogKHduICsgMyAqIF9uICogciArIGkgKiAoNyAqIEVuICsgOSAqIFNuICogcikpIC8gUihlKSxcbiAgICBsdChBKGUpIC8gX2UpXG4gIF07XG59O1xuZnVuY3Rpb24gemEoKSB7XG4gIHJldHVybiBBdChScikuc2NhbGUoMTc3LjE1OCk7XG59XG5mdW5jdGlvbiBDcih0LCBuKSB7XG4gIHZhciBlID0gUihuKSwgciA9IFIodCkgKiBlO1xuICByZXR1cm4gW2UgKiBBKHQpIC8gciwgQShuKSAvIHJdO1xufVxuQ3IuaW52ZXJ0ID0gUm4odW4pO1xuZnVuY3Rpb24gT2EoKSB7XG4gIHJldHVybiBBdChDcikuc2NhbGUoMTQ0LjA0OSkuY2xpcEFuZ2xlKDYwKTtcbn1cbmZ1bmN0aW9uIExhKCkge1xuICB2YXIgdCA9IDEsIG4gPSAwLCBlID0gMCwgciA9IDEsIGkgPSAxLCBvID0gMCwgdSwgYSwgYyA9IG51bGwsIGwsIHMsIGYsIGggPSAxLCBwID0gMSwgdiA9IGtuKHtcbiAgICBwb2ludDogZnVuY3Rpb24oXywgeCkge1xuICAgICAgdmFyIE4gPSBtKFtfLCB4XSk7XG4gICAgICB0aGlzLnN0cmVhbS5wb2ludChOWzBdLCBOWzFdKTtcbiAgICB9XG4gIH0pLCBFID0geG4sIFMsIHk7XG4gIGZ1bmN0aW9uIE0oKSB7XG4gICAgcmV0dXJuIGggPSB0ICogciwgcCA9IHQgKiBpLCBTID0geSA9IG51bGwsIG07XG4gIH1cbiAgZnVuY3Rpb24gbShfKSB7XG4gICAgdmFyIHggPSBfWzBdICogaCwgTiA9IF9bMV0gKiBwO1xuICAgIGlmIChvKSB7XG4gICAgICB2YXIgQyA9IE4gKiB1IC0geCAqIGE7XG4gICAgICB4ID0geCAqIHUgKyBOICogYSwgTiA9IEM7XG4gICAgfVxuICAgIHJldHVybiBbeCArIG4sIE4gKyBlXTtcbiAgfVxuICByZXR1cm4gbS5pbnZlcnQgPSBmdW5jdGlvbihfKSB7XG4gICAgdmFyIHggPSBfWzBdIC0gbiwgTiA9IF9bMV0gLSBlO1xuICAgIGlmIChvKSB7XG4gICAgICB2YXIgQyA9IE4gKiB1ICsgeCAqIGE7XG4gICAgICB4ID0geCAqIHUgLSBOICogYSwgTiA9IEM7XG4gICAgfVxuICAgIHJldHVybiBbeCAvIGgsIE4gLyBwXTtcbiAgfSwgbS5zdHJlYW0gPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIFMgJiYgeSA9PT0gXyA/IFMgOiBTID0gdihFKHkgPSBfKSk7XG4gIH0sIG0ucG9zdGNsaXAgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoRSA9IF8sIGMgPSBsID0gcyA9IGYgPSBudWxsLCBNKCkpIDogRTtcbiAgfSwgbS5jbGlwRXh0ZW50ID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKEUgPSBfID09IG51bGwgPyAoYyA9IGwgPSBzID0gZiA9IG51bGwsIHhuKSA6IFBlKGMgPSArX1swXVswXSwgbCA9ICtfWzBdWzFdLCBzID0gK19bMV1bMF0sIGYgPSArX1sxXVsxXSksIE0oKSkgOiBjID09IG51bGwgPyBudWxsIDogW1tjLCBsXSwgW3MsIGZdXTtcbiAgfSwgbS5zY2FsZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh0ID0gK18sIE0oKSkgOiB0O1xuICB9LCBtLnRyYW5zbGF0ZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChuID0gK19bMF0sIGUgPSArX1sxXSwgTSgpKSA6IFtuLCBlXTtcbiAgfSwgbS5hbmdsZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChvID0gXyAlIDM2MCAqIE8sIGEgPSBBKG8pLCB1ID0gUihvKSwgTSgpKSA6IG8gKiBXO1xuICB9LCBtLnJlZmxlY3RYID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHIgPSBfID8gLTEgOiAxLCBNKCkpIDogciA8IDA7XG4gIH0sIG0ucmVmbGVjdFkgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoaSA9IF8gPyAtMSA6IDEsIE0oKSkgOiBpIDwgMDtcbiAgfSwgbS5maXRFeHRlbnQgPSBmdW5jdGlvbihfLCB4KSB7XG4gICAgcmV0dXJuIE5lKG0sIF8sIHgpO1xuICB9LCBtLmZpdFNpemUgPSBmdW5jdGlvbihfLCB4KSB7XG4gICAgcmV0dXJuIHhyKG0sIF8sIHgpO1xuICB9LCBtLmZpdFdpZHRoID0gZnVuY3Rpb24oXywgeCkge1xuICAgIHJldHVybiBQcihtLCBfLCB4KTtcbiAgfSwgbS5maXRIZWlnaHQgPSBmdW5jdGlvbihfLCB4KSB7XG4gICAgcmV0dXJuIE5yKG0sIF8sIHgpO1xuICB9LCBtO1xufVxuZnVuY3Rpb24genIodCwgbikge1xuICB2YXIgZSA9IG4gKiBuLCByID0gZSAqIGU7XG4gIHJldHVybiBbXG4gICAgdCAqICgwLjg3MDcgLSAwLjEzMTk3OSAqIGUgKyByICogKC0wLjAxMzc5MSArIHIgKiAoMzk3MWUtNiAqIGUgLSAxNTI5ZS02ICogcikpKSxcbiAgICBuICogKDEuMDA3MjI2ICsgZSAqICgwLjAxNTA4NSArIHIgKiAoLTAuMDQ0NDc1ICsgMC4wMjg4NzQgKiBlIC0gNTkxNmUtNiAqIHIpKSlcbiAgXTtcbn1cbnpyLmludmVydCA9IGZ1bmN0aW9uKHQsIG4pIHtcbiAgdmFyIGUgPSBuLCByID0gMjUsIGk7XG4gIGRvIHtcbiAgICB2YXIgbyA9IGUgKiBlLCB1ID0gbyAqIG87XG4gICAgZSAtPSBpID0gKGUgKiAoMS4wMDcyMjYgKyBvICogKDAuMDE1MDg1ICsgdSAqICgtMC4wNDQ0NzUgKyAwLjAyODg3NCAqIG8gLSA1OTE2ZS02ICogdSkpKSAtIG4pIC8gKDEuMDA3MjI2ICsgbyAqICgwLjAxNTA4NSAqIDMgKyB1ICogKC0wLjA0NDQ3NSAqIDcgKyAwLjAyODg3NCAqIDkgKiBvIC0gNTkxNmUtNiAqIDExICogdSkpKTtcbiAgfSB3aGlsZSAoWChpKSA+IHogJiYgLS1yID4gMCk7XG4gIHJldHVybiBbXG4gICAgdCAvICgwLjg3MDcgKyAobyA9IGUgKiBlKSAqICgtMC4xMzE5NzkgKyBvICogKC0wLjAxMzc5MSArIG8gKiBvICogbyAqICgzOTcxZS02IC0gMTUyOWUtNiAqIG8pKSkpLFxuICAgIGVcbiAgXTtcbn07XG5mdW5jdGlvbiBGYSgpIHtcbiAgcmV0dXJuIEF0KHpyKS5zY2FsZSgxNzUuMjk1KTtcbn1cbmZ1bmN0aW9uIE9yKHQsIG4pIHtcbiAgcmV0dXJuIFtSKG4pICogQSh0KSwgQShuKV07XG59XG5Pci5pbnZlcnQgPSBSbihsdCk7XG5mdW5jdGlvbiBJYSgpIHtcbiAgcmV0dXJuIEF0KE9yKS5zY2FsZSgyNDkuNSkuY2xpcEFuZ2xlKDkwICsgeik7XG59XG5mdW5jdGlvbiBMcih0LCBuKSB7XG4gIHZhciBlID0gUihuKSwgciA9IDEgKyBSKHQpICogZTtcbiAgcmV0dXJuIFtlICogQSh0KSAvIHIsIEEobikgLyByXTtcbn1cbkxyLmludmVydCA9IFJuKGZ1bmN0aW9uKHQpIHtcbiAgcmV0dXJuIDIgKiB1bih0KTtcbn0pO1xuZnVuY3Rpb24gRGEoKSB7XG4gIHJldHVybiBBdChMcikuc2NhbGUoMjUwKS5jbGlwQW5nbGUoMTQyKTtcbn1cbmZ1bmN0aW9uIEZyKHQsIG4pIHtcbiAgcmV0dXJuIFtRbih3cigoSiArIG4pIC8gMikpLCAtdF07XG59XG5Gci5pbnZlcnQgPSBmdW5jdGlvbih0LCBuKSB7XG4gIHJldHVybiBbLW4sIDIgKiB1bihLaSh0KSkgLSBKXTtcbn07XG5mdW5jdGlvbiBiYSgpIHtcbiAgdmFyIHQgPSBPbyhGciksIG4gPSB0LmNlbnRlciwgZSA9IHQucm90YXRlO1xuICByZXR1cm4gdC5jZW50ZXIgPSBmdW5jdGlvbihyKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyBuKFstclsxXSwgclswXV0pIDogKHIgPSBuKCksIFtyWzFdLCAtclswXV0pO1xuICB9LCB0LnJvdGF0ZSA9IGZ1bmN0aW9uKHIpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IGUoW3JbMF0sIHJbMV0sIHIubGVuZ3RoID4gMiA/IHJbMl0gKyA5MCA6IDkwXSkgOiAociA9IGUoKSwgW3JbMF0sIHJbMV0sIHJbMl0gLSA5MF0pO1xuICB9LCBlKFswLCAwLCA5MF0pLnNjYWxlKDE1OS4xNTUpO1xufVxuY29uc3QgcWEgPSAvKiBAX19QVVJFX18gKi8gT2JqZWN0LmZyZWV6ZSgvKiBAX19QVVJFX18gKi8gT2JqZWN0LmRlZmluZVByb3BlcnR5KHtcbiAgX19wcm90b19fOiBudWxsLFxuICBnZW9BbGJlcnM6IENvLFxuICBnZW9BbGJlcnNVc2E6IFBhLFxuICBnZW9BcmVhOiBSdSxcbiAgZ2VvQXppbXV0aGFsRXF1YWxBcmVhOiBOYSxcbiAgZ2VvQXppbXV0aGFsRXF1YWxBcmVhUmF3OiBUcixcbiAgZ2VvQXppbXV0aGFsRXF1aWRpc3RhbnQ6ICRhLFxuICBnZW9BemltdXRoYWxFcXVpZGlzdGFudFJhdzoga3IsXG4gIGdlb0JvdW5kczogTHUsXG4gIGdlb0NlbnRyb2lkOiBqdSxcbiAgZ2VvQ2lyY2xlOiBYdSxcbiAgZ2VvQ2xpcEFudGltZXJpZGlhbjogUWUsXG4gIGdlb0NsaXBDaXJjbGU6IGdvLFxuICBnZW9DbGlwRXh0ZW50OiBWdSxcbiAgZ2VvQ2xpcFJlY3RhbmdsZTogUGUsXG4gIGdlb0NvbmljQ29uZm9ybWFsOiBUYSxcbiAgZ2VvQ29uaWNDb25mb3JtYWxSYXc6IExvLFxuICBnZW9Db25pY0VxdWFsQXJlYTogd2UsXG4gIGdlb0NvbmljRXF1YWxBcmVhUmF3OiBSbyxcbiAgZ2VvQ29uaWNFcXVpZGlzdGFudDogUmEsXG4gIGdlb0NvbmljRXF1aWRpc3RhbnRSYXc6IEZvLFxuICBnZW9Db250YWluczogZWEsXG4gIGdlb0Rpc3RhbmNlOiBmZSxcbiAgZ2VvRXF1YWxFYXJ0aDogemEsXG4gIGdlb0VxdWFsRWFydGhSYXc6IFJyLFxuICBnZW9FcXVpcmVjdGFuZ3VsYXI6IGthLFxuICBnZW9FcXVpcmVjdGFuZ3VsYXJSYXc6ICRuLFxuICBnZW9Hbm9tb25pYzogT2EsXG4gIGdlb0dub21vbmljUmF3OiBDcixcbiAgZ2VvR3JhdGljdWxlOiBTcixcbiAgZ2VvR3JhdGljdWxlMTA6IHJhLFxuICBnZW9JZGVudGl0eTogTGEsXG4gIGdlb0ludGVycG9sYXRlOiBpYSxcbiAgZ2VvTGVuZ3RoOiBtbyxcbiAgZ2VvTWVyY2F0b3I6IEFhLFxuICBnZW9NZXJjYXRvclJhdzogQ24sXG4gIGdlb05hdHVyYWxFYXJ0aDE6IEZhLFxuICBnZW9OYXR1cmFsRWFydGgxUmF3OiB6cixcbiAgZ2VvT3J0aG9ncmFwaGljOiBJYSxcbiAgZ2VvT3J0aG9ncmFwaGljUmF3OiBPcixcbiAgZ2VvUGF0aDoga28sXG4gIGdlb1Byb2plY3Rpb246IEF0LFxuICBnZW9Qcm9qZWN0aW9uTXV0YXRvcjogJHIsXG4gIGdlb1JvdGF0aW9uOiBjbyxcbiAgZ2VvU3RlcmVvZ3JhcGhpYzogRGEsXG4gIGdlb1N0ZXJlb2dyYXBoaWNSYXc6IExyLFxuICBnZW9TdHJlYW06IFN0LFxuICBnZW9UcmFuc2Zvcm06IGRhLFxuICBnZW9UcmFuc3ZlcnNlTWVyY2F0b3I6IGJhLFxuICBnZW9UcmFuc3ZlcnNlTWVyY2F0b3JSYXc6IEZyXG59LCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6IFwiTW9kdWxlXCIgfSkpO1xuZnVuY3Rpb24gamEodCkge1xuICByZXR1cm4gdDtcbn1cbmZ1bmN0aW9uIFhhKHQpIHtcbiAgaWYgKHQgPT0gbnVsbCkgcmV0dXJuIGphO1xuICB2YXIgbiwgZSwgciA9IHQuc2NhbGVbMF0sIGkgPSB0LnNjYWxlWzFdLCBvID0gdC50cmFuc2xhdGVbMF0sIHUgPSB0LnRyYW5zbGF0ZVsxXTtcbiAgcmV0dXJuIGZ1bmN0aW9uKGEsIGMpIHtcbiAgICBjIHx8IChuID0gZSA9IDApO1xuICAgIHZhciBsID0gMiwgcyA9IGEubGVuZ3RoLCBmID0gbmV3IEFycmF5KHMpO1xuICAgIGZvciAoZlswXSA9IChuICs9IGFbMF0pICogciArIG8sIGZbMV0gPSAoZSArPSBhWzFdKSAqIGkgKyB1OyBsIDwgczsgKSBmW2xdID0gYVtsXSwgKytsO1xuICAgIHJldHVybiBmO1xuICB9O1xufVxuZnVuY3Rpb24gR2EodCwgbikge1xuICBmb3IgKHZhciBlLCByID0gdC5sZW5ndGgsIGkgPSByIC0gbjsgaSA8IC0tcjsgKSBlID0gdFtpXSwgdFtpKytdID0gdFtyXSwgdFtyXSA9IGU7XG59XG5mdW5jdGlvbiBaYSh0LCBuKSB7XG4gIHJldHVybiB0eXBlb2YgbiA9PSBcInN0cmluZ1wiICYmIChuID0gdC5vYmplY3RzW25dKSwgbi50eXBlID09PSBcIkdlb21ldHJ5Q29sbGVjdGlvblwiID8geyB0eXBlOiBcIkZlYXR1cmVDb2xsZWN0aW9uXCIsIGZlYXR1cmVzOiBuLmdlb21ldHJpZXMubWFwKGZ1bmN0aW9uKGUpIHtcbiAgICByZXR1cm4gQ2kodCwgZSk7XG4gIH0pIH0gOiBDaSh0LCBuKTtcbn1cbmZ1bmN0aW9uIENpKHQsIG4pIHtcbiAgdmFyIGUgPSBuLmlkLCByID0gbi5iYm94LCBpID0gbi5wcm9wZXJ0aWVzID09IG51bGwgPyB7fSA6IG4ucHJvcGVydGllcywgbyA9IElvKHQsIG4pO1xuICByZXR1cm4gZSA9PSBudWxsICYmIHIgPT0gbnVsbCA/IHsgdHlwZTogXCJGZWF0dXJlXCIsIHByb3BlcnRpZXM6IGksIGdlb21ldHJ5OiBvIH0gOiByID09IG51bGwgPyB7IHR5cGU6IFwiRmVhdHVyZVwiLCBpZDogZSwgcHJvcGVydGllczogaSwgZ2VvbWV0cnk6IG8gfSA6IHsgdHlwZTogXCJGZWF0dXJlXCIsIGlkOiBlLCBiYm94OiByLCBwcm9wZXJ0aWVzOiBpLCBnZW9tZXRyeTogbyB9O1xufVxuZnVuY3Rpb24gSW8odCwgbikge1xuICB2YXIgZSA9IFhhKHQudHJhbnNmb3JtKSwgciA9IHQuYXJjcztcbiAgZnVuY3Rpb24gaShzLCBmKSB7XG4gICAgZi5sZW5ndGggJiYgZi5wb3AoKTtcbiAgICBmb3IgKHZhciBoID0gcltzIDwgMCA/IH5zIDogc10sIHAgPSAwLCB2ID0gaC5sZW5ndGg7IHAgPCB2OyArK3ApXG4gICAgICBmLnB1c2goZShoW3BdLCBwKSk7XG4gICAgcyA8IDAgJiYgR2EoZiwgdik7XG4gIH1cbiAgZnVuY3Rpb24gbyhzKSB7XG4gICAgcmV0dXJuIGUocyk7XG4gIH1cbiAgZnVuY3Rpb24gdShzKSB7XG4gICAgZm9yICh2YXIgZiA9IFtdLCBoID0gMCwgcCA9IHMubGVuZ3RoOyBoIDwgcDsgKytoKSBpKHNbaF0sIGYpO1xuICAgIHJldHVybiBmLmxlbmd0aCA8IDIgJiYgZi5wdXNoKGZbMF0pLCBmO1xuICB9XG4gIGZ1bmN0aW9uIGEocykge1xuICAgIGZvciAodmFyIGYgPSB1KHMpOyBmLmxlbmd0aCA8IDQ7ICkgZi5wdXNoKGZbMF0pO1xuICAgIHJldHVybiBmO1xuICB9XG4gIGZ1bmN0aW9uIGMocykge1xuICAgIHJldHVybiBzLm1hcChhKTtcbiAgfVxuICBmdW5jdGlvbiBsKHMpIHtcbiAgICB2YXIgZiA9IHMudHlwZSwgaDtcbiAgICBzd2l0Y2ggKGYpIHtcbiAgICAgIGNhc2UgXCJHZW9tZXRyeUNvbGxlY3Rpb25cIjpcbiAgICAgICAgcmV0dXJuIHsgdHlwZTogZiwgZ2VvbWV0cmllczogcy5nZW9tZXRyaWVzLm1hcChsKSB9O1xuICAgICAgY2FzZSBcIlBvaW50XCI6XG4gICAgICAgIGggPSBvKHMuY29vcmRpbmF0ZXMpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJNdWx0aVBvaW50XCI6XG4gICAgICAgIGggPSBzLmNvb3JkaW5hdGVzLm1hcChvKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiTGluZVN0cmluZ1wiOlxuICAgICAgICBoID0gdShzLmFyY3MpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJNdWx0aUxpbmVTdHJpbmdcIjpcbiAgICAgICAgaCA9IHMuYXJjcy5tYXAodSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIlBvbHlnb25cIjpcbiAgICAgICAgaCA9IGMocy5hcmNzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiTXVsdGlQb2x5Z29uXCI6XG4gICAgICAgIGggPSBzLmFyY3MubWFwKGMpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4geyB0eXBlOiBmLCBjb29yZGluYXRlczogaCB9O1xuICB9XG4gIHJldHVybiBsKG4pO1xufVxuZnVuY3Rpb24gQmEodCwgbikge1xuICB2YXIgZSA9IHt9LCByID0ge30sIGkgPSB7fSwgbyA9IFtdLCB1ID0gLTE7XG4gIG4uZm9yRWFjaChmdW5jdGlvbihsLCBzKSB7XG4gICAgdmFyIGYgPSB0LmFyY3NbbCA8IDAgPyB+bCA6IGxdLCBoO1xuICAgIGYubGVuZ3RoIDwgMyAmJiAhZlsxXVswXSAmJiAhZlsxXVsxXSAmJiAoaCA9IG5bKyt1XSwgblt1XSA9IGwsIG5bc10gPSBoKTtcbiAgfSksIG4uZm9yRWFjaChmdW5jdGlvbihsKSB7XG4gICAgdmFyIHMgPSBhKGwpLCBmID0gc1swXSwgaCA9IHNbMV0sIHAsIHY7XG4gICAgaWYgKHAgPSBpW2ZdKVxuICAgICAgaWYgKGRlbGV0ZSBpW3AuZW5kXSwgcC5wdXNoKGwpLCBwLmVuZCA9IGgsIHYgPSByW2hdKSB7XG4gICAgICAgIGRlbGV0ZSByW3Yuc3RhcnRdO1xuICAgICAgICB2YXIgRSA9IHYgPT09IHAgPyBwIDogcC5jb25jYXQodik7XG4gICAgICAgIHJbRS5zdGFydCA9IHAuc3RhcnRdID0gaVtFLmVuZCA9IHYuZW5kXSA9IEU7XG4gICAgICB9IGVsc2VcbiAgICAgICAgcltwLnN0YXJ0XSA9IGlbcC5lbmRdID0gcDtcbiAgICBlbHNlIGlmIChwID0gcltoXSlcbiAgICAgIGlmIChkZWxldGUgcltwLnN0YXJ0XSwgcC51bnNoaWZ0KGwpLCBwLnN0YXJ0ID0gZiwgdiA9IGlbZl0pIHtcbiAgICAgICAgZGVsZXRlIGlbdi5lbmRdO1xuICAgICAgICB2YXIgUyA9IHYgPT09IHAgPyBwIDogdi5jb25jYXQocCk7XG4gICAgICAgIHJbUy5zdGFydCA9IHYuc3RhcnRdID0gaVtTLmVuZCA9IHAuZW5kXSA9IFM7XG4gICAgICB9IGVsc2VcbiAgICAgICAgcltwLnN0YXJ0XSA9IGlbcC5lbmRdID0gcDtcbiAgICBlbHNlXG4gICAgICBwID0gW2xdLCByW3Auc3RhcnQgPSBmXSA9IGlbcC5lbmQgPSBoXSA9IHA7XG4gIH0pO1xuICBmdW5jdGlvbiBhKGwpIHtcbiAgICB2YXIgcyA9IHQuYXJjc1tsIDwgMCA/IH5sIDogbF0sIGYgPSBzWzBdLCBoO1xuICAgIHJldHVybiB0LnRyYW5zZm9ybSA/IChoID0gWzAsIDBdLCBzLmZvckVhY2goZnVuY3Rpb24ocCkge1xuICAgICAgaFswXSArPSBwWzBdLCBoWzFdICs9IHBbMV07XG4gICAgfSkpIDogaCA9IHNbcy5sZW5ndGggLSAxXSwgbCA8IDAgPyBbaCwgZl0gOiBbZiwgaF07XG4gIH1cbiAgZnVuY3Rpb24gYyhsLCBzKSB7XG4gICAgZm9yICh2YXIgZiBpbiBsKSB7XG4gICAgICB2YXIgaCA9IGxbZl07XG4gICAgICBkZWxldGUgc1toLnN0YXJ0XSwgZGVsZXRlIGguc3RhcnQsIGRlbGV0ZSBoLmVuZCwgaC5mb3JFYWNoKGZ1bmN0aW9uKHApIHtcbiAgICAgICAgZVtwIDwgMCA/IH5wIDogcF0gPSAxO1xuICAgICAgfSksIG8ucHVzaChoKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGMoaSwgciksIGMociwgaSksIG4uZm9yRWFjaChmdW5jdGlvbihsKSB7XG4gICAgZVtsIDwgMCA/IH5sIDogbF0gfHwgby5wdXNoKFtsXSk7XG4gIH0pLCBvO1xufVxuZnVuY3Rpb24gemkodCkge1xuICByZXR1cm4gSW8odCwgWWEuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG59XG5mdW5jdGlvbiBZYSh0LCBuLCBlKSB7XG4gIHZhciByLCBpLCBvO1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHIgPSBXYSh0LCBuLCBlKTtcbiAgZWxzZSBmb3IgKGkgPSAwLCByID0gbmV3IEFycmF5KG8gPSB0LmFyY3MubGVuZ3RoKTsgaSA8IG87ICsraSkgcltpXSA9IGk7XG4gIHJldHVybiB7IHR5cGU6IFwiTXVsdGlMaW5lU3RyaW5nXCIsIGFyY3M6IEJhKHQsIHIpIH07XG59XG5mdW5jdGlvbiBXYSh0LCBuLCBlKSB7XG4gIHZhciByID0gW10sIGkgPSBbXSwgbztcbiAgZnVuY3Rpb24gdShmKSB7XG4gICAgdmFyIGggPSBmIDwgMCA/IH5mIDogZjtcbiAgICAoaVtoXSB8fCAoaVtoXSA9IFtdKSkucHVzaCh7IGk6IGYsIGc6IG8gfSk7XG4gIH1cbiAgZnVuY3Rpb24gYShmKSB7XG4gICAgZi5mb3JFYWNoKHUpO1xuICB9XG4gIGZ1bmN0aW9uIGMoZikge1xuICAgIGYuZm9yRWFjaChhKTtcbiAgfVxuICBmdW5jdGlvbiBsKGYpIHtcbiAgICBmLmZvckVhY2goYyk7XG4gIH1cbiAgZnVuY3Rpb24gcyhmKSB7XG4gICAgc3dpdGNoIChvID0gZiwgZi50eXBlKSB7XG4gICAgICBjYXNlIFwiR2VvbWV0cnlDb2xsZWN0aW9uXCI6XG4gICAgICAgIGYuZ2VvbWV0cmllcy5mb3JFYWNoKHMpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJMaW5lU3RyaW5nXCI6XG4gICAgICAgIGEoZi5hcmNzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiTXVsdGlMaW5lU3RyaW5nXCI6XG4gICAgICBjYXNlIFwiUG9seWdvblwiOlxuICAgICAgICBjKGYuYXJjcyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIk11bHRpUG9seWdvblwiOlxuICAgICAgICBsKGYuYXJjcyk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcyhuKSwgaS5mb3JFYWNoKGUgPT0gbnVsbCA/IGZ1bmN0aW9uKGYpIHtcbiAgICByLnB1c2goZlswXS5pKTtcbiAgfSA6IGZ1bmN0aW9uKGYpIHtcbiAgICBlKGZbMF0uZywgZltmLmxlbmd0aCAtIDFdLmcpICYmIHIucHVzaChmWzBdLmkpO1xuICB9KSwgcjtcbn1cbnZhciBmciA9IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiO1xuY29uc3QgT2kgPSB7XG4gIHN2ZzogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICB4aHRtbDogZnIsXG4gIHhsaW5rOiBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIixcbiAgeG1sOiBcImh0dHA6Ly93d3cudzMub3JnL1hNTC8xOTk4L25hbWVzcGFjZVwiLFxuICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3htbG5zL1wiXG59O1xuZnVuY3Rpb24gJGUodCkge1xuICB2YXIgbiA9IHQgKz0gXCJcIiwgZSA9IG4uaW5kZXhPZihcIjpcIik7XG4gIHJldHVybiBlID49IDAgJiYgKG4gPSB0LnNsaWNlKDAsIGUpKSAhPT0gXCJ4bWxuc1wiICYmICh0ID0gdC5zbGljZShlICsgMSkpLCBPaS5oYXNPd25Qcm9wZXJ0eShuKSA/IHsgc3BhY2U6IE9pW25dLCBsb2NhbDogdCB9IDogdDtcbn1cbmZ1bmN0aW9uIFVhKHQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBuID0gdGhpcy5vd25lckRvY3VtZW50LCBlID0gdGhpcy5uYW1lc3BhY2VVUkk7XG4gICAgcmV0dXJuIGUgPT09IGZyICYmIG4uZG9jdW1lbnRFbGVtZW50Lm5hbWVzcGFjZVVSSSA9PT0gZnIgPyBuLmNyZWF0ZUVsZW1lbnQodCkgOiBuLmNyZWF0ZUVsZW1lbnROUyhlLCB0KTtcbiAgfTtcbn1cbmZ1bmN0aW9uIFZhKHQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm93bmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHQuc3BhY2UsIHQubG9jYWwpO1xuICB9O1xufVxuZnVuY3Rpb24gRG8odCkge1xuICB2YXIgbiA9ICRlKHQpO1xuICByZXR1cm4gKG4ubG9jYWwgPyBWYSA6IFVhKShuKTtcbn1cbmZ1bmN0aW9uIEhhKCkge1xufVxuZnVuY3Rpb24gSXIodCkge1xuICByZXR1cm4gdCA9PSBudWxsID8gSGEgOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5xdWVyeVNlbGVjdG9yKHQpO1xuICB9O1xufVxuZnVuY3Rpb24gS2EodCkge1xuICB0eXBlb2YgdCAhPSBcImZ1bmN0aW9uXCIgJiYgKHQgPSBJcih0KSk7XG4gIGZvciAodmFyIG4gPSB0aGlzLl9ncm91cHMsIGUgPSBuLmxlbmd0aCwgciA9IG5ldyBBcnJheShlKSwgaSA9IDA7IGkgPCBlOyArK2kpXG4gICAgZm9yICh2YXIgbyA9IG5baV0sIHUgPSBvLmxlbmd0aCwgYSA9IHJbaV0gPSBuZXcgQXJyYXkodSksIGMsIGwsIHMgPSAwOyBzIDwgdTsgKytzKVxuICAgICAgKGMgPSBvW3NdKSAmJiAobCA9IHQuY2FsbChjLCBjLl9fZGF0YV9fLCBzLCBvKSkgJiYgKFwiX19kYXRhX19cIiBpbiBjICYmIChsLl9fZGF0YV9fID0gYy5fX2RhdGFfXyksIGFbc10gPSBsKTtcbiAgcmV0dXJuIG5ldyBtdChyLCB0aGlzLl9wYXJlbnRzKTtcbn1cbmZ1bmN0aW9uIFFhKHQpIHtcbiAgcmV0dXJuIHQgPT0gbnVsbCA/IFtdIDogQXJyYXkuaXNBcnJheSh0KSA/IHQgOiBBcnJheS5mcm9tKHQpO1xufVxuZnVuY3Rpb24gSmEoKSB7XG4gIHJldHVybiBbXTtcbn1cbmZ1bmN0aW9uIGJvKHQpIHtcbiAgcmV0dXJuIHQgPT0gbnVsbCA/IEphIDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucXVlcnlTZWxlY3RvckFsbCh0KTtcbiAgfTtcbn1cbmZ1bmN0aW9uIHRzKHQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBRYSh0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9O1xufVxuZnVuY3Rpb24gbnModCkge1xuICB0eXBlb2YgdCA9PSBcImZ1bmN0aW9uXCIgPyB0ID0gdHModCkgOiB0ID0gYm8odCk7XG4gIGZvciAodmFyIG4gPSB0aGlzLl9ncm91cHMsIGUgPSBuLmxlbmd0aCwgciA9IFtdLCBpID0gW10sIG8gPSAwOyBvIDwgZTsgKytvKVxuICAgIGZvciAodmFyIHUgPSBuW29dLCBhID0gdS5sZW5ndGgsIGMsIGwgPSAwOyBsIDwgYTsgKytsKVxuICAgICAgKGMgPSB1W2xdKSAmJiAoci5wdXNoKHQuY2FsbChjLCBjLl9fZGF0YV9fLCBsLCB1KSksIGkucHVzaChjKSk7XG4gIHJldHVybiBuZXcgbXQociwgaSk7XG59XG5mdW5jdGlvbiBxbyh0KSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5tYXRjaGVzKHQpO1xuICB9O1xufVxuZnVuY3Rpb24gam8odCkge1xuICByZXR1cm4gZnVuY3Rpb24obikge1xuICAgIHJldHVybiBuLm1hdGNoZXModCk7XG4gIH07XG59XG52YXIgZXMgPSBBcnJheS5wcm90b3R5cGUuZmluZDtcbmZ1bmN0aW9uIHJzKHQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBlcy5jYWxsKHRoaXMuY2hpbGRyZW4sIHQpO1xuICB9O1xufVxuZnVuY3Rpb24gaXMoKSB7XG4gIHJldHVybiB0aGlzLmZpcnN0RWxlbWVudENoaWxkO1xufVxuZnVuY3Rpb24gb3ModCkge1xuICByZXR1cm4gdGhpcy5zZWxlY3QodCA9PSBudWxsID8gaXMgOiBycyh0eXBlb2YgdCA9PSBcImZ1bmN0aW9uXCIgPyB0IDogam8odCkpKTtcbn1cbnZhciB1cyA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXI7XG5mdW5jdGlvbiBhcygpIHtcbiAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5jaGlsZHJlbik7XG59XG5mdW5jdGlvbiBzcyh0KSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdXMuY2FsbCh0aGlzLmNoaWxkcmVuLCB0KTtcbiAgfTtcbn1cbmZ1bmN0aW9uIGNzKHQpIHtcbiAgcmV0dXJuIHRoaXMuc2VsZWN0QWxsKHQgPT0gbnVsbCA/IGFzIDogc3ModHlwZW9mIHQgPT0gXCJmdW5jdGlvblwiID8gdCA6IGpvKHQpKSk7XG59XG5mdW5jdGlvbiBscyh0KSB7XG4gIHR5cGVvZiB0ICE9IFwiZnVuY3Rpb25cIiAmJiAodCA9IHFvKHQpKTtcbiAgZm9yICh2YXIgbiA9IHRoaXMuX2dyb3VwcywgZSA9IG4ubGVuZ3RoLCByID0gbmV3IEFycmF5KGUpLCBpID0gMDsgaSA8IGU7ICsraSlcbiAgICBmb3IgKHZhciBvID0gbltpXSwgdSA9IG8ubGVuZ3RoLCBhID0gcltpXSA9IFtdLCBjLCBsID0gMDsgbCA8IHU7ICsrbClcbiAgICAgIChjID0gb1tsXSkgJiYgdC5jYWxsKGMsIGMuX19kYXRhX18sIGwsIG8pICYmIGEucHVzaChjKTtcbiAgcmV0dXJuIG5ldyBtdChyLCB0aGlzLl9wYXJlbnRzKTtcbn1cbmZ1bmN0aW9uIFhvKHQpIHtcbiAgcmV0dXJuIG5ldyBBcnJheSh0Lmxlbmd0aCk7XG59XG5mdW5jdGlvbiBmcygpIHtcbiAgcmV0dXJuIG5ldyBtdCh0aGlzLl9lbnRlciB8fCB0aGlzLl9ncm91cHMubWFwKFhvKSwgdGhpcy5fcGFyZW50cyk7XG59XG5mdW5jdGlvbiBFZSh0LCBuKSB7XG4gIHRoaXMub3duZXJEb2N1bWVudCA9IHQub3duZXJEb2N1bWVudCwgdGhpcy5uYW1lc3BhY2VVUkkgPSB0Lm5hbWVzcGFjZVVSSSwgdGhpcy5fbmV4dCA9IG51bGwsIHRoaXMuX3BhcmVudCA9IHQsIHRoaXMuX19kYXRhX18gPSBuO1xufVxuRWUucHJvdG90eXBlID0ge1xuICBjb25zdHJ1Y3RvcjogRWUsXG4gIGFwcGVuZENoaWxkOiBmdW5jdGlvbih0KSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudC5pbnNlcnRCZWZvcmUodCwgdGhpcy5fbmV4dCk7XG4gIH0sXG4gIGluc2VydEJlZm9yZTogZnVuY3Rpb24odCwgbikge1xuICAgIHJldHVybiB0aGlzLl9wYXJlbnQuaW5zZXJ0QmVmb3JlKHQsIG4pO1xuICB9LFxuICBxdWVyeVNlbGVjdG9yOiBmdW5jdGlvbih0KSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudC5xdWVyeVNlbGVjdG9yKHQpO1xuICB9LFxuICBxdWVyeVNlbGVjdG9yQWxsOiBmdW5jdGlvbih0KSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudC5xdWVyeVNlbGVjdG9yQWxsKHQpO1xuICB9XG59O1xuZnVuY3Rpb24gaHModCkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHQ7XG4gIH07XG59XG5mdW5jdGlvbiBwcyh0LCBuLCBlLCByLCBpLCBvKSB7XG4gIGZvciAodmFyIHUgPSAwLCBhLCBjID0gbi5sZW5ndGgsIGwgPSBvLmxlbmd0aDsgdSA8IGw7ICsrdSlcbiAgICAoYSA9IG5bdV0pID8gKGEuX19kYXRhX18gPSBvW3VdLCByW3VdID0gYSkgOiBlW3VdID0gbmV3IEVlKHQsIG9bdV0pO1xuICBmb3IgKDsgdSA8IGM7ICsrdSlcbiAgICAoYSA9IG5bdV0pICYmIChpW3VdID0gYSk7XG59XG5mdW5jdGlvbiB2cyh0LCBuLCBlLCByLCBpLCBvLCB1KSB7XG4gIHZhciBhLCBjLCBsID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSwgcyA9IG4ubGVuZ3RoLCBmID0gby5sZW5ndGgsIGggPSBuZXcgQXJyYXkocyksIHA7XG4gIGZvciAoYSA9IDA7IGEgPCBzOyArK2EpXG4gICAgKGMgPSBuW2FdKSAmJiAoaFthXSA9IHAgPSB1LmNhbGwoYywgYy5fX2RhdGFfXywgYSwgbikgKyBcIlwiLCBsLmhhcyhwKSA/IGlbYV0gPSBjIDogbC5zZXQocCwgYykpO1xuICBmb3IgKGEgPSAwOyBhIDwgZjsgKythKVxuICAgIHAgPSB1LmNhbGwodCwgb1thXSwgYSwgbykgKyBcIlwiLCAoYyA9IGwuZ2V0KHApKSA/IChyW2FdID0gYywgYy5fX2RhdGFfXyA9IG9bYV0sIGwuZGVsZXRlKHApKSA6IGVbYV0gPSBuZXcgRWUodCwgb1thXSk7XG4gIGZvciAoYSA9IDA7IGEgPCBzOyArK2EpXG4gICAgKGMgPSBuW2FdKSAmJiBsLmdldChoW2FdKSA9PT0gYyAmJiAoaVthXSA9IGMpO1xufVxuZnVuY3Rpb24gZ3ModCkge1xuICByZXR1cm4gdC5fX2RhdGFfXztcbn1cbmZ1bmN0aW9uIGRzKHQsIG4pIHtcbiAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLCBncyk7XG4gIHZhciBlID0gbiA/IHZzIDogcHMsIHIgPSB0aGlzLl9wYXJlbnRzLCBpID0gdGhpcy5fZ3JvdXBzO1xuICB0eXBlb2YgdCAhPSBcImZ1bmN0aW9uXCIgJiYgKHQgPSBocyh0KSk7XG4gIGZvciAodmFyIG8gPSBpLmxlbmd0aCwgdSA9IG5ldyBBcnJheShvKSwgYSA9IG5ldyBBcnJheShvKSwgYyA9IG5ldyBBcnJheShvKSwgbCA9IDA7IGwgPCBvOyArK2wpIHtcbiAgICB2YXIgcyA9IHJbbF0sIGYgPSBpW2xdLCBoID0gZi5sZW5ndGgsIHAgPSBtcyh0LmNhbGwocywgcyAmJiBzLl9fZGF0YV9fLCBsLCByKSksIHYgPSBwLmxlbmd0aCwgRSA9IGFbbF0gPSBuZXcgQXJyYXkodiksIFMgPSB1W2xdID0gbmV3IEFycmF5KHYpLCB5ID0gY1tsXSA9IG5ldyBBcnJheShoKTtcbiAgICBlKHMsIGYsIEUsIFMsIHksIHAsIG4pO1xuICAgIGZvciAodmFyIE0gPSAwLCBtID0gMCwgXywgeDsgTSA8IHY7ICsrTSlcbiAgICAgIGlmIChfID0gRVtNXSkge1xuICAgICAgICBmb3IgKE0gPj0gbSAmJiAobSA9IE0gKyAxKTsgISh4ID0gU1ttXSkgJiYgKyttIDwgdjsgKSA7XG4gICAgICAgIF8uX25leHQgPSB4IHx8IG51bGw7XG4gICAgICB9XG4gIH1cbiAgcmV0dXJuIHUgPSBuZXcgbXQodSwgciksIHUuX2VudGVyID0gYSwgdS5fZXhpdCA9IGMsIHU7XG59XG5mdW5jdGlvbiBtcyh0KSB7XG4gIHJldHVybiB0eXBlb2YgdCA9PSBcIm9iamVjdFwiICYmIFwibGVuZ3RoXCIgaW4gdCA/IHQgOiBBcnJheS5mcm9tKHQpO1xufVxuZnVuY3Rpb24geXMoKSB7XG4gIHJldHVybiBuZXcgbXQodGhpcy5fZXhpdCB8fCB0aGlzLl9ncm91cHMubWFwKFhvKSwgdGhpcy5fcGFyZW50cyk7XG59XG5mdW5jdGlvbiB3cyh0LCBuLCBlKSB7XG4gIHZhciByID0gdGhpcy5lbnRlcigpLCBpID0gdGhpcywgbyA9IHRoaXMuZXhpdCgpO1xuICByZXR1cm4gdHlwZW9mIHQgPT0gXCJmdW5jdGlvblwiID8gKHIgPSB0KHIpLCByICYmIChyID0gci5zZWxlY3Rpb24oKSkpIDogciA9IHIuYXBwZW5kKHQgKyBcIlwiKSwgbiAhPSBudWxsICYmIChpID0gbihpKSwgaSAmJiAoaSA9IGkuc2VsZWN0aW9uKCkpKSwgZSA9PSBudWxsID8gby5yZW1vdmUoKSA6IGUobyksIHIgJiYgaSA/IHIubWVyZ2UoaSkub3JkZXIoKSA6IGk7XG59XG5mdW5jdGlvbiBfcyh0KSB7XG4gIGZvciAodmFyIG4gPSB0LnNlbGVjdGlvbiA/IHQuc2VsZWN0aW9uKCkgOiB0LCBlID0gdGhpcy5fZ3JvdXBzLCByID0gbi5fZ3JvdXBzLCBpID0gZS5sZW5ndGgsIG8gPSByLmxlbmd0aCwgdSA9IE1hdGgubWluKGksIG8pLCBhID0gbmV3IEFycmF5KGkpLCBjID0gMDsgYyA8IHU7ICsrYylcbiAgICBmb3IgKHZhciBsID0gZVtjXSwgcyA9IHJbY10sIGYgPSBsLmxlbmd0aCwgaCA9IGFbY10gPSBuZXcgQXJyYXkoZiksIHAsIHYgPSAwOyB2IDwgZjsgKyt2KVxuICAgICAgKHAgPSBsW3ZdIHx8IHNbdl0pICYmIChoW3ZdID0gcCk7XG4gIGZvciAoOyBjIDwgaTsgKytjKVxuICAgIGFbY10gPSBlW2NdO1xuICByZXR1cm4gbmV3IG10KGEsIHRoaXMuX3BhcmVudHMpO1xufVxuZnVuY3Rpb24gRXMoKSB7XG4gIGZvciAodmFyIHQgPSB0aGlzLl9ncm91cHMsIG4gPSAtMSwgZSA9IHQubGVuZ3RoOyArK24gPCBlOyApXG4gICAgZm9yICh2YXIgciA9IHRbbl0sIGkgPSByLmxlbmd0aCAtIDEsIG8gPSByW2ldLCB1OyAtLWkgPj0gMDsgKVxuICAgICAgKHUgPSByW2ldKSAmJiAobyAmJiB1LmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKG8pIF4gNCAmJiBvLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHUsIG8pLCBvID0gdSk7XG4gIHJldHVybiB0aGlzO1xufVxuZnVuY3Rpb24gU3ModCkge1xuICB0IHx8ICh0ID0gTXMpO1xuICBmdW5jdGlvbiBuKGYsIGgpIHtcbiAgICByZXR1cm4gZiAmJiBoID8gdChmLl9fZGF0YV9fLCBoLl9fZGF0YV9fKSA6ICFmIC0gIWg7XG4gIH1cbiAgZm9yICh2YXIgZSA9IHRoaXMuX2dyb3VwcywgciA9IGUubGVuZ3RoLCBpID0gbmV3IEFycmF5KHIpLCBvID0gMDsgbyA8IHI7ICsrbykge1xuICAgIGZvciAodmFyIHUgPSBlW29dLCBhID0gdS5sZW5ndGgsIGMgPSBpW29dID0gbmV3IEFycmF5KGEpLCBsLCBzID0gMDsgcyA8IGE7ICsrcylcbiAgICAgIChsID0gdVtzXSkgJiYgKGNbc10gPSBsKTtcbiAgICBjLnNvcnQobik7XG4gIH1cbiAgcmV0dXJuIG5ldyBtdChpLCB0aGlzLl9wYXJlbnRzKS5vcmRlcigpO1xufVxuZnVuY3Rpb24gTXModCwgbikge1xuICByZXR1cm4gdCA8IG4gPyAtMSA6IHQgPiBuID8gMSA6IHQgPj0gbiA/IDAgOiBOYU47XG59XG5mdW5jdGlvbiB4cygpIHtcbiAgdmFyIHQgPSBhcmd1bWVudHNbMF07XG4gIHJldHVybiBhcmd1bWVudHNbMF0gPSB0aGlzLCB0LmFwcGx5KG51bGwsIGFyZ3VtZW50cyksIHRoaXM7XG59XG5mdW5jdGlvbiBQcygpIHtcbiAgcmV0dXJuIEFycmF5LmZyb20odGhpcyk7XG59XG5mdW5jdGlvbiBOcygpIHtcbiAgZm9yICh2YXIgdCA9IHRoaXMuX2dyb3VwcywgbiA9IDAsIGUgPSB0Lmxlbmd0aDsgbiA8IGU7ICsrbilcbiAgICBmb3IgKHZhciByID0gdFtuXSwgaSA9IDAsIG8gPSByLmxlbmd0aDsgaSA8IG87ICsraSkge1xuICAgICAgdmFyIHUgPSByW2ldO1xuICAgICAgaWYgKHUpIHJldHVybiB1O1xuICAgIH1cbiAgcmV0dXJuIG51bGw7XG59XG5mdW5jdGlvbiAkcygpIHtcbiAgbGV0IHQgPSAwO1xuICBmb3IgKGNvbnN0IG4gb2YgdGhpcykgKyt0O1xuICByZXR1cm4gdDtcbn1cbmZ1bmN0aW9uIEFzKCkge1xuICByZXR1cm4gIXRoaXMubm9kZSgpO1xufVxuZnVuY3Rpb24gVHModCkge1xuICBmb3IgKHZhciBuID0gdGhpcy5fZ3JvdXBzLCBlID0gMCwgciA9IG4ubGVuZ3RoOyBlIDwgcjsgKytlKVxuICAgIGZvciAodmFyIGkgPSBuW2VdLCBvID0gMCwgdSA9IGkubGVuZ3RoLCBhOyBvIDwgdTsgKytvKVxuICAgICAgKGEgPSBpW29dKSAmJiB0LmNhbGwoYSwgYS5fX2RhdGFfXywgbywgaSk7XG4gIHJldHVybiB0aGlzO1xufVxuZnVuY3Rpb24ga3ModCkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUodCk7XG4gIH07XG59XG5mdW5jdGlvbiBScyh0KSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZU5TKHQuc3BhY2UsIHQubG9jYWwpO1xuICB9O1xufVxuZnVuY3Rpb24gQ3ModCwgbikge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zZXRBdHRyaWJ1dGUodCwgbik7XG4gIH07XG59XG5mdW5jdGlvbiB6cyh0LCBuKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnNldEF0dHJpYnV0ZU5TKHQuc3BhY2UsIHQubG9jYWwsIG4pO1xuICB9O1xufVxuZnVuY3Rpb24gT3ModCwgbikge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGUgPSBuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgZSA9PSBudWxsID8gdGhpcy5yZW1vdmVBdHRyaWJ1dGUodCkgOiB0aGlzLnNldEF0dHJpYnV0ZSh0LCBlKTtcbiAgfTtcbn1cbmZ1bmN0aW9uIExzKHQsIG4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBlID0gbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIGUgPT0gbnVsbCA/IHRoaXMucmVtb3ZlQXR0cmlidXRlTlModC5zcGFjZSwgdC5sb2NhbCkgOiB0aGlzLnNldEF0dHJpYnV0ZU5TKHQuc3BhY2UsIHQubG9jYWwsIGUpO1xuICB9O1xufVxuZnVuY3Rpb24gRnModCwgbikge1xuICB2YXIgZSA9ICRlKHQpO1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcbiAgICB2YXIgciA9IHRoaXMubm9kZSgpO1xuICAgIHJldHVybiBlLmxvY2FsID8gci5nZXRBdHRyaWJ1dGVOUyhlLnNwYWNlLCBlLmxvY2FsKSA6IHIuZ2V0QXR0cmlidXRlKGUpO1xuICB9XG4gIHJldHVybiB0aGlzLmVhY2goKG4gPT0gbnVsbCA/IGUubG9jYWwgPyBScyA6IGtzIDogdHlwZW9mIG4gPT0gXCJmdW5jdGlvblwiID8gZS5sb2NhbCA/IExzIDogT3MgOiBlLmxvY2FsID8genMgOiBDcykoZSwgbikpO1xufVxuZnVuY3Rpb24gR28odCkge1xuICByZXR1cm4gdC5vd25lckRvY3VtZW50ICYmIHQub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldyB8fCB0LmRvY3VtZW50ICYmIHQgfHwgdC5kZWZhdWx0Vmlldztcbn1cbmZ1bmN0aW9uIElzKHQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc3R5bGUucmVtb3ZlUHJvcGVydHkodCk7XG4gIH07XG59XG5mdW5jdGlvbiBEcyh0LCBuLCBlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnN0eWxlLnNldFByb3BlcnR5KHQsIG4sIGUpO1xuICB9O1xufVxuZnVuY3Rpb24gYnModCwgbiwgZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHIgPSBuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgciA9PSBudWxsID8gdGhpcy5zdHlsZS5yZW1vdmVQcm9wZXJ0eSh0KSA6IHRoaXMuc3R5bGUuc2V0UHJvcGVydHkodCwgciwgZSk7XG4gIH07XG59XG5mdW5jdGlvbiBxcyh0LCBuLCBlKSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID4gMSA/IHRoaXMuZWFjaCgobiA9PSBudWxsID8gSXMgOiB0eXBlb2YgbiA9PSBcImZ1bmN0aW9uXCIgPyBicyA6IERzKSh0LCBuLCBlID8/IFwiXCIpKSA6IHJuKHRoaXMubm9kZSgpLCB0KTtcbn1cbmZ1bmN0aW9uIHJuKHQsIG4pIHtcbiAgcmV0dXJuIHQuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuKSB8fCBHbyh0KS5nZXRDb21wdXRlZFN0eWxlKHQsIG51bGwpLmdldFByb3BlcnR5VmFsdWUobik7XG59XG5mdW5jdGlvbiBqcyh0KSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBkZWxldGUgdGhpc1t0XTtcbiAgfTtcbn1cbmZ1bmN0aW9uIFhzKHQsIG4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHRoaXNbdF0gPSBuO1xuICB9O1xufVxuZnVuY3Rpb24gR3ModCwgbikge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGUgPSBuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgZSA9PSBudWxsID8gZGVsZXRlIHRoaXNbdF0gOiB0aGlzW3RdID0gZTtcbiAgfTtcbn1cbmZ1bmN0aW9uIFpzKHQsIG4pIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gdGhpcy5lYWNoKChuID09IG51bGwgPyBqcyA6IHR5cGVvZiBuID09IFwiZnVuY3Rpb25cIiA/IEdzIDogWHMpKHQsIG4pKSA6IHRoaXMubm9kZSgpW3RdO1xufVxuZnVuY3Rpb24gWm8odCkge1xuICByZXR1cm4gdC50cmltKCkuc3BsaXQoL158XFxzKy8pO1xufVxuZnVuY3Rpb24gRHIodCkge1xuICByZXR1cm4gdC5jbGFzc0xpc3QgfHwgbmV3IEJvKHQpO1xufVxuZnVuY3Rpb24gQm8odCkge1xuICB0aGlzLl9ub2RlID0gdCwgdGhpcy5fbmFtZXMgPSBabyh0LmdldEF0dHJpYnV0ZShcImNsYXNzXCIpIHx8IFwiXCIpO1xufVxuQm8ucHJvdG90eXBlID0ge1xuICBhZGQ6IGZ1bmN0aW9uKHQpIHtcbiAgICB2YXIgbiA9IHRoaXMuX25hbWVzLmluZGV4T2YodCk7XG4gICAgbiA8IDAgJiYgKHRoaXMuX25hbWVzLnB1c2godCksIHRoaXMuX25vZGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgdGhpcy5fbmFtZXMuam9pbihcIiBcIikpKTtcbiAgfSxcbiAgcmVtb3ZlOiBmdW5jdGlvbih0KSB7XG4gICAgdmFyIG4gPSB0aGlzLl9uYW1lcy5pbmRleE9mKHQpO1xuICAgIG4gPj0gMCAmJiAodGhpcy5fbmFtZXMuc3BsaWNlKG4sIDEpLCB0aGlzLl9ub2RlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIHRoaXMuX25hbWVzLmpvaW4oXCIgXCIpKSk7XG4gIH0sXG4gIGNvbnRhaW5zOiBmdW5jdGlvbih0KSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWVzLmluZGV4T2YodCkgPj0gMDtcbiAgfVxufTtcbmZ1bmN0aW9uIFlvKHQsIG4pIHtcbiAgZm9yICh2YXIgZSA9IERyKHQpLCByID0gLTEsIGkgPSBuLmxlbmd0aDsgKytyIDwgaTsgKSBlLmFkZChuW3JdKTtcbn1cbmZ1bmN0aW9uIFdvKHQsIG4pIHtcbiAgZm9yICh2YXIgZSA9IERyKHQpLCByID0gLTEsIGkgPSBuLmxlbmd0aDsgKytyIDwgaTsgKSBlLnJlbW92ZShuW3JdKTtcbn1cbmZ1bmN0aW9uIEJzKHQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIFlvKHRoaXMsIHQpO1xuICB9O1xufVxuZnVuY3Rpb24gWXModCkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgV28odGhpcywgdCk7XG4gIH07XG59XG5mdW5jdGlvbiBXcyh0LCBuKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAobi5hcHBseSh0aGlzLCBhcmd1bWVudHMpID8gWW8gOiBXbykodGhpcywgdCk7XG4gIH07XG59XG5mdW5jdGlvbiBVcyh0LCBuKSB7XG4gIHZhciBlID0gWm8odCArIFwiXCIpO1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcbiAgICBmb3IgKHZhciByID0gRHIodGhpcy5ub2RlKCkpLCBpID0gLTEsIG8gPSBlLmxlbmd0aDsgKytpIDwgbzsgKSBpZiAoIXIuY29udGFpbnMoZVtpXSkpIHJldHVybiAhMTtcbiAgICByZXR1cm4gITA7XG4gIH1cbiAgcmV0dXJuIHRoaXMuZWFjaCgodHlwZW9mIG4gPT0gXCJmdW5jdGlvblwiID8gV3MgOiBuID8gQnMgOiBZcykoZSwgbikpO1xufVxuZnVuY3Rpb24gVnMoKSB7XG4gIHRoaXMudGV4dENvbnRlbnQgPSBcIlwiO1xufVxuZnVuY3Rpb24gSHModCkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy50ZXh0Q29udGVudCA9IHQ7XG4gIH07XG59XG5mdW5jdGlvbiBLcyh0KSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgbiA9IHQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB0aGlzLnRleHRDb250ZW50ID0gbiA/PyBcIlwiO1xuICB9O1xufVxuZnVuY3Rpb24gUXModCkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IHRoaXMuZWFjaCh0ID09IG51bGwgPyBWcyA6ICh0eXBlb2YgdCA9PSBcImZ1bmN0aW9uXCIgPyBLcyA6IEhzKSh0KSkgOiB0aGlzLm5vZGUoKS50ZXh0Q29udGVudDtcbn1cbmZ1bmN0aW9uIEpzKCkge1xuICB0aGlzLmlubmVySFRNTCA9IFwiXCI7XG59XG5mdW5jdGlvbiB0Yyh0KSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmlubmVySFRNTCA9IHQ7XG4gIH07XG59XG5mdW5jdGlvbiBuYyh0KSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgbiA9IHQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB0aGlzLmlubmVySFRNTCA9IG4gPz8gXCJcIjtcbiAgfTtcbn1cbmZ1bmN0aW9uIGVjKHQpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyB0aGlzLmVhY2godCA9PSBudWxsID8gSnMgOiAodHlwZW9mIHQgPT0gXCJmdW5jdGlvblwiID8gbmMgOiB0YykodCkpIDogdGhpcy5ub2RlKCkuaW5uZXJIVE1MO1xufVxuZnVuY3Rpb24gcmMoKSB7XG4gIHRoaXMubmV4dFNpYmxpbmcgJiYgdGhpcy5wYXJlbnROb2RlLmFwcGVuZENoaWxkKHRoaXMpO1xufVxuZnVuY3Rpb24gaWMoKSB7XG4gIHJldHVybiB0aGlzLmVhY2gocmMpO1xufVxuZnVuY3Rpb24gb2MoKSB7XG4gIHRoaXMucHJldmlvdXNTaWJsaW5nICYmIHRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpcywgdGhpcy5wYXJlbnROb2RlLmZpcnN0Q2hpbGQpO1xufVxuZnVuY3Rpb24gdWMoKSB7XG4gIHJldHVybiB0aGlzLmVhY2gob2MpO1xufVxuZnVuY3Rpb24gYWModCkge1xuICB2YXIgbiA9IHR5cGVvZiB0ID09IFwiZnVuY3Rpb25cIiA/IHQgOiBEbyh0KTtcbiAgcmV0dXJuIHRoaXMuc2VsZWN0KGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmFwcGVuZENoaWxkKG4uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gc2MoKSB7XG4gIHJldHVybiBudWxsO1xufVxuZnVuY3Rpb24gY2ModCwgbikge1xuICB2YXIgZSA9IHR5cGVvZiB0ID09IFwiZnVuY3Rpb25cIiA/IHQgOiBEbyh0KSwgciA9IG4gPT0gbnVsbCA/IHNjIDogdHlwZW9mIG4gPT0gXCJmdW5jdGlvblwiID8gbiA6IElyKG4pO1xuICByZXR1cm4gdGhpcy5zZWxlY3QoZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5zZXJ0QmVmb3JlKGUuYXBwbHkodGhpcywgYXJndW1lbnRzKSwgci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IG51bGwpO1xuICB9KTtcbn1cbmZ1bmN0aW9uIGxjKCkge1xuICB2YXIgdCA9IHRoaXMucGFyZW50Tm9kZTtcbiAgdCAmJiB0LnJlbW92ZUNoaWxkKHRoaXMpO1xufVxuZnVuY3Rpb24gZmMoKSB7XG4gIHJldHVybiB0aGlzLmVhY2gobGMpO1xufVxuZnVuY3Rpb24gaGMoKSB7XG4gIHZhciB0ID0gdGhpcy5jbG9uZU5vZGUoITEpLCBuID0gdGhpcy5wYXJlbnROb2RlO1xuICByZXR1cm4gbiA/IG4uaW5zZXJ0QmVmb3JlKHQsIHRoaXMubmV4dFNpYmxpbmcpIDogdDtcbn1cbmZ1bmN0aW9uIHBjKCkge1xuICB2YXIgdCA9IHRoaXMuY2xvbmVOb2RlKCEwKSwgbiA9IHRoaXMucGFyZW50Tm9kZTtcbiAgcmV0dXJuIG4gPyBuLmluc2VydEJlZm9yZSh0LCB0aGlzLm5leHRTaWJsaW5nKSA6IHQ7XG59XG5mdW5jdGlvbiB2Yyh0KSB7XG4gIHJldHVybiB0aGlzLnNlbGVjdCh0ID8gcGMgOiBoYyk7XG59XG5mdW5jdGlvbiBnYyh0KSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gdGhpcy5wcm9wZXJ0eShcIl9fZGF0YV9fXCIsIHQpIDogdGhpcy5ub2RlKCkuX19kYXRhX187XG59XG5mdW5jdGlvbiBkYyh0KSB7XG4gIHJldHVybiBmdW5jdGlvbihuKSB7XG4gICAgdC5jYWxsKHRoaXMsIG4sIHRoaXMuX19kYXRhX18pO1xuICB9O1xufVxuZnVuY3Rpb24gbWModCkge1xuICByZXR1cm4gdC50cmltKCkuc3BsaXQoL158XFxzKy8pLm1hcChmdW5jdGlvbihuKSB7XG4gICAgdmFyIGUgPSBcIlwiLCByID0gbi5pbmRleE9mKFwiLlwiKTtcbiAgICByZXR1cm4gciA+PSAwICYmIChlID0gbi5zbGljZShyICsgMSksIG4gPSBuLnNsaWNlKDAsIHIpKSwgeyB0eXBlOiBuLCBuYW1lOiBlIH07XG4gIH0pO1xufVxuZnVuY3Rpb24geWModCkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIG4gPSB0aGlzLl9fb247XG4gICAgaWYgKG4pIHtcbiAgICAgIGZvciAodmFyIGUgPSAwLCByID0gLTEsIGkgPSBuLmxlbmd0aCwgbzsgZSA8IGk7ICsrZSlcbiAgICAgICAgbyA9IG5bZV0sICghdC50eXBlIHx8IG8udHlwZSA9PT0gdC50eXBlKSAmJiBvLm5hbWUgPT09IHQubmFtZSA/IHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihvLnR5cGUsIG8ubGlzdGVuZXIsIG8ub3B0aW9ucykgOiBuWysrcl0gPSBvO1xuICAgICAgKytyID8gbi5sZW5ndGggPSByIDogZGVsZXRlIHRoaXMuX19vbjtcbiAgICB9XG4gIH07XG59XG5mdW5jdGlvbiB3Yyh0LCBuLCBlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgciA9IHRoaXMuX19vbiwgaSwgbyA9IGRjKG4pO1xuICAgIGlmIChyKSB7XG4gICAgICBmb3IgKHZhciB1ID0gMCwgYSA9IHIubGVuZ3RoOyB1IDwgYTsgKyt1KVxuICAgICAgICBpZiAoKGkgPSByW3VdKS50eXBlID09PSB0LnR5cGUgJiYgaS5uYW1lID09PSB0Lm5hbWUpIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoaS50eXBlLCBpLmxpc3RlbmVyLCBpLm9wdGlvbnMpLCB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoaS50eXBlLCBpLmxpc3RlbmVyID0gbywgaS5vcHRpb25zID0gZSksIGkudmFsdWUgPSBuO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIodC50eXBlLCBvLCBlKSwgaSA9IHsgdHlwZTogdC50eXBlLCBuYW1lOiB0Lm5hbWUsIHZhbHVlOiBuLCBsaXN0ZW5lcjogbywgb3B0aW9uczogZSB9LCByID8gci5wdXNoKGkpIDogdGhpcy5fX29uID0gW2ldO1xuICB9O1xufVxuZnVuY3Rpb24gX2ModCwgbiwgZSkge1xuICB2YXIgciA9IG1jKHQgKyBcIlwiKSwgaSwgbyA9IHIubGVuZ3RoLCB1O1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcbiAgICB2YXIgYSA9IHRoaXMubm9kZSgpLl9fb247XG4gICAgaWYgKGEpIHtcbiAgICAgIGZvciAodmFyIGMgPSAwLCBsID0gYS5sZW5ndGgsIHM7IGMgPCBsOyArK2MpXG4gICAgICAgIGZvciAoaSA9IDAsIHMgPSBhW2NdOyBpIDwgbzsgKytpKVxuICAgICAgICAgIGlmICgodSA9IHJbaV0pLnR5cGUgPT09IHMudHlwZSAmJiB1Lm5hbWUgPT09IHMubmFtZSlcbiAgICAgICAgICAgIHJldHVybiBzLnZhbHVlO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cbiAgZm9yIChhID0gbiA/IHdjIDogeWMsIGkgPSAwOyBpIDwgbzsgKytpKSB0aGlzLmVhY2goYShyW2ldLCBuLCBlKSk7XG4gIHJldHVybiB0aGlzO1xufVxuZnVuY3Rpb24gVW8odCwgbiwgZSkge1xuICB2YXIgciA9IEdvKHQpLCBpID0gci5DdXN0b21FdmVudDtcbiAgdHlwZW9mIGkgPT0gXCJmdW5jdGlvblwiID8gaSA9IG5ldyBpKG4sIGUpIDogKGkgPSByLmRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiRXZlbnRcIiksIGUgPyAoaS5pbml0RXZlbnQobiwgZS5idWJibGVzLCBlLmNhbmNlbGFibGUpLCBpLmRldGFpbCA9IGUuZGV0YWlsKSA6IGkuaW5pdEV2ZW50KG4sICExLCAhMSkpLCB0LmRpc3BhdGNoRXZlbnQoaSk7XG59XG5mdW5jdGlvbiBFYyh0LCBuKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gVW8odGhpcywgdCwgbik7XG4gIH07XG59XG5mdW5jdGlvbiBTYyh0LCBuKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gVW8odGhpcywgdCwgbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfTtcbn1cbmZ1bmN0aW9uIE1jKHQsIG4pIHtcbiAgcmV0dXJuIHRoaXMuZWFjaCgodHlwZW9mIG4gPT0gXCJmdW5jdGlvblwiID8gU2MgOiBFYykodCwgbikpO1xufVxuZnVuY3Rpb24qIHhjKCkge1xuICBmb3IgKHZhciB0ID0gdGhpcy5fZ3JvdXBzLCBuID0gMCwgZSA9IHQubGVuZ3RoOyBuIDwgZTsgKytuKVxuICAgIGZvciAodmFyIHIgPSB0W25dLCBpID0gMCwgbyA9IHIubGVuZ3RoLCB1OyBpIDwgbzsgKytpKVxuICAgICAgKHUgPSByW2ldKSAmJiAoeWllbGQgdSk7XG59XG52YXIgVm8gPSBbbnVsbF07XG5mdW5jdGlvbiBtdCh0LCBuKSB7XG4gIHRoaXMuX2dyb3VwcyA9IHQsIHRoaXMuX3BhcmVudHMgPSBuO1xufVxuZnVuY3Rpb24gem4oKSB7XG4gIHJldHVybiBuZXcgbXQoW1tkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRdXSwgVm8pO1xufVxuZnVuY3Rpb24gUGMoKSB7XG4gIHJldHVybiB0aGlzO1xufVxubXQucHJvdG90eXBlID0gem4ucHJvdG90eXBlID0ge1xuICBjb25zdHJ1Y3RvcjogbXQsXG4gIHNlbGVjdDogS2EsXG4gIHNlbGVjdEFsbDogbnMsXG4gIHNlbGVjdENoaWxkOiBvcyxcbiAgc2VsZWN0Q2hpbGRyZW46IGNzLFxuICBmaWx0ZXI6IGxzLFxuICBkYXRhOiBkcyxcbiAgZW50ZXI6IGZzLFxuICBleGl0OiB5cyxcbiAgam9pbjogd3MsXG4gIG1lcmdlOiBfcyxcbiAgc2VsZWN0aW9uOiBQYyxcbiAgb3JkZXI6IEVzLFxuICBzb3J0OiBTcyxcbiAgY2FsbDogeHMsXG4gIG5vZGVzOiBQcyxcbiAgbm9kZTogTnMsXG4gIHNpemU6ICRzLFxuICBlbXB0eTogQXMsXG4gIGVhY2g6IFRzLFxuICBhdHRyOiBGcyxcbiAgc3R5bGU6IHFzLFxuICBwcm9wZXJ0eTogWnMsXG4gIGNsYXNzZWQ6IFVzLFxuICB0ZXh0OiBRcyxcbiAgaHRtbDogZWMsXG4gIHJhaXNlOiBpYyxcbiAgbG93ZXI6IHVjLFxuICBhcHBlbmQ6IGFjLFxuICBpbnNlcnQ6IGNjLFxuICByZW1vdmU6IGZjLFxuICBjbG9uZTogdmMsXG4gIGRhdHVtOiBnYyxcbiAgb246IF9jLFxuICBkaXNwYXRjaDogTWMsXG4gIFtTeW1ib2wuaXRlcmF0b3JdOiB4Y1xufTtcbmZ1bmN0aW9uIGp0KHQpIHtcbiAgcmV0dXJuIHR5cGVvZiB0ID09IFwic3RyaW5nXCIgPyBuZXcgbXQoW1tkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHQpXV0sIFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRdKSA6IG5ldyBtdChbW3RdXSwgVm8pO1xufVxuZnVuY3Rpb24gTmModCkge1xuICBsZXQgbjtcbiAgZm9yICg7IG4gPSB0LnNvdXJjZUV2ZW50OyApIHQgPSBuO1xuICByZXR1cm4gdDtcbn1cbmZ1bmN0aW9uIFh0KHQsIG4pIHtcbiAgaWYgKHQgPSBOYyh0KSwgbiA9PT0gdm9pZCAwICYmIChuID0gdC5jdXJyZW50VGFyZ2V0KSwgbikge1xuICAgIHZhciBlID0gbi5vd25lclNWR0VsZW1lbnQgfHwgbjtcbiAgICBpZiAoZS5jcmVhdGVTVkdQb2ludCkge1xuICAgICAgdmFyIHIgPSBlLmNyZWF0ZVNWR1BvaW50KCk7XG4gICAgICByZXR1cm4gci54ID0gdC5jbGllbnRYLCByLnkgPSB0LmNsaWVudFksIHIgPSByLm1hdHJpeFRyYW5zZm9ybShuLmdldFNjcmVlbkNUTSgpLmludmVyc2UoKSksIFtyLngsIHIueV07XG4gICAgfVxuICAgIGlmIChuLmdldEJvdW5kaW5nQ2xpZW50UmVjdCkge1xuICAgICAgdmFyIGkgPSBuLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgcmV0dXJuIFt0LmNsaWVudFggLSBpLmxlZnQgLSBuLmNsaWVudExlZnQsIHQuY2xpZW50WSAtIGkudG9wIC0gbi5jbGllbnRUb3BdO1xuICAgIH1cbiAgfVxuICByZXR1cm4gW3QucGFnZVgsIHQucGFnZVldO1xufVxudmFyICRjID0geyB2YWx1ZTogKCkgPT4ge1xufSB9O1xuZnVuY3Rpb24gYnIoKSB7XG4gIGZvciAodmFyIHQgPSAwLCBuID0gYXJndW1lbnRzLmxlbmd0aCwgZSA9IHt9LCByOyB0IDwgbjsgKyt0KSB7XG4gICAgaWYgKCEociA9IGFyZ3VtZW50c1t0XSArIFwiXCIpIHx8IHIgaW4gZSB8fCAvW1xccy5dLy50ZXN0KHIpKSB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIHR5cGU6IFwiICsgcik7XG4gICAgZVtyXSA9IFtdO1xuICB9XG4gIHJldHVybiBuZXcgWW4oZSk7XG59XG5mdW5jdGlvbiBZbih0KSB7XG4gIHRoaXMuXyA9IHQ7XG59XG5mdW5jdGlvbiBBYyh0LCBuKSB7XG4gIHJldHVybiB0LnRyaW0oKS5zcGxpdCgvXnxcXHMrLykubWFwKGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgciA9IFwiXCIsIGkgPSBlLmluZGV4T2YoXCIuXCIpO1xuICAgIGlmIChpID49IDAgJiYgKHIgPSBlLnNsaWNlKGkgKyAxKSwgZSA9IGUuc2xpY2UoMCwgaSkpLCBlICYmICFuLmhhc093blByb3BlcnR5KGUpKSB0aHJvdyBuZXcgRXJyb3IoXCJ1bmtub3duIHR5cGU6IFwiICsgZSk7XG4gICAgcmV0dXJuIHsgdHlwZTogZSwgbmFtZTogciB9O1xuICB9KTtcbn1cblluLnByb3RvdHlwZSA9IGJyLnByb3RvdHlwZSA9IHtcbiAgY29uc3RydWN0b3I6IFluLFxuICBvbjogZnVuY3Rpb24odCwgbikge1xuICAgIHZhciBlID0gdGhpcy5fLCByID0gQWModCArIFwiXCIsIGUpLCBpLCBvID0gLTEsIHUgPSByLmxlbmd0aDtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcbiAgICAgIGZvciAoOyArK28gPCB1OyApIGlmICgoaSA9ICh0ID0gcltvXSkudHlwZSkgJiYgKGkgPSBUYyhlW2ldLCB0Lm5hbWUpKSkgcmV0dXJuIGk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChuICE9IG51bGwgJiYgdHlwZW9mIG4gIT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgRXJyb3IoXCJpbnZhbGlkIGNhbGxiYWNrOiBcIiArIG4pO1xuICAgIGZvciAoOyArK28gPCB1OyApXG4gICAgICBpZiAoaSA9ICh0ID0gcltvXSkudHlwZSkgZVtpXSA9IExpKGVbaV0sIHQubmFtZSwgbik7XG4gICAgICBlbHNlIGlmIChuID09IG51bGwpIGZvciAoaSBpbiBlKSBlW2ldID0gTGkoZVtpXSwgdC5uYW1lLCBudWxsKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgY29weTogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHQgPSB7fSwgbiA9IHRoaXMuXztcbiAgICBmb3IgKHZhciBlIGluIG4pIHRbZV0gPSBuW2VdLnNsaWNlKCk7XG4gICAgcmV0dXJuIG5ldyBZbih0KTtcbiAgfSxcbiAgY2FsbDogZnVuY3Rpb24odCwgbikge1xuICAgIGlmICgoaSA9IGFyZ3VtZW50cy5sZW5ndGggLSAyKSA+IDApIGZvciAodmFyIGUgPSBuZXcgQXJyYXkoaSksIHIgPSAwLCBpLCBvOyByIDwgaTsgKytyKSBlW3JdID0gYXJndW1lbnRzW3IgKyAyXTtcbiAgICBpZiAoIXRoaXMuXy5oYXNPd25Qcm9wZXJ0eSh0KSkgdGhyb3cgbmV3IEVycm9yKFwidW5rbm93biB0eXBlOiBcIiArIHQpO1xuICAgIGZvciAobyA9IHRoaXMuX1t0XSwgciA9IDAsIGkgPSBvLmxlbmd0aDsgciA8IGk7ICsrcikgb1tyXS52YWx1ZS5hcHBseShuLCBlKTtcbiAgfSxcbiAgYXBwbHk6IGZ1bmN0aW9uKHQsIG4sIGUpIHtcbiAgICBpZiAoIXRoaXMuXy5oYXNPd25Qcm9wZXJ0eSh0KSkgdGhyb3cgbmV3IEVycm9yKFwidW5rbm93biB0eXBlOiBcIiArIHQpO1xuICAgIGZvciAodmFyIHIgPSB0aGlzLl9bdF0sIGkgPSAwLCBvID0gci5sZW5ndGg7IGkgPCBvOyArK2kpIHJbaV0udmFsdWUuYXBwbHkobiwgZSk7XG4gIH1cbn07XG5mdW5jdGlvbiBUYyh0LCBuKSB7XG4gIGZvciAodmFyIGUgPSAwLCByID0gdC5sZW5ndGgsIGk7IGUgPCByOyArK2UpXG4gICAgaWYgKChpID0gdFtlXSkubmFtZSA9PT0gbilcbiAgICAgIHJldHVybiBpLnZhbHVlO1xufVxuZnVuY3Rpb24gTGkodCwgbiwgZSkge1xuICBmb3IgKHZhciByID0gMCwgaSA9IHQubGVuZ3RoOyByIDwgaTsgKytyKVxuICAgIGlmICh0W3JdLm5hbWUgPT09IG4pIHtcbiAgICAgIHRbcl0gPSAkYywgdCA9IHQuc2xpY2UoMCwgcikuY29uY2F0KHQuc2xpY2UociArIDEpKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgcmV0dXJuIGUgIT0gbnVsbCAmJiB0LnB1c2goeyBuYW1lOiBuLCB2YWx1ZTogZSB9KSwgdDtcbn1cbmNvbnN0IGhyID0geyBjYXB0dXJlOiAhMCwgcGFzc2l2ZTogITEgfTtcbmZ1bmN0aW9uIHByKHQpIHtcbiAgdC5wcmV2ZW50RGVmYXVsdCgpLCB0LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xufVxuZnVuY3Rpb24ga2ModCkge1xuICB2YXIgbiA9IHQuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBlID0ganQodCkub24oXCJkcmFnc3RhcnQuZHJhZ1wiLCBwciwgaHIpO1xuICBcIm9uc2VsZWN0c3RhcnRcIiBpbiBuID8gZS5vbihcInNlbGVjdHN0YXJ0LmRyYWdcIiwgcHIsIGhyKSA6IChuLl9fbm9zZWxlY3QgPSBuLnN0eWxlLk1velVzZXJTZWxlY3QsIG4uc3R5bGUuTW96VXNlclNlbGVjdCA9IFwibm9uZVwiKTtcbn1cbmZ1bmN0aW9uIFJjKHQsIG4pIHtcbiAgdmFyIGUgPSB0LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgciA9IGp0KHQpLm9uKFwiZHJhZ3N0YXJ0LmRyYWdcIiwgbnVsbCk7XG4gIG4gJiYgKHIub24oXCJjbGljay5kcmFnXCIsIHByLCBociksIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgci5vbihcImNsaWNrLmRyYWdcIiwgbnVsbCk7XG4gIH0sIDApKSwgXCJvbnNlbGVjdHN0YXJ0XCIgaW4gZSA/IHIub24oXCJzZWxlY3RzdGFydC5kcmFnXCIsIG51bGwpIDogKGUuc3R5bGUuTW96VXNlclNlbGVjdCA9IGUuX19ub3NlbGVjdCwgZGVsZXRlIGUuX19ub3NlbGVjdCk7XG59XG52YXIgb24gPSAwLCBkbiA9IDAsIHNuID0gMCwgSG8gPSAxZTMsIFNlLCBtbiwgTWUgPSAwLCBXdCA9IDAsIEFlID0gMCwgQW4gPSB0eXBlb2YgcGVyZm9ybWFuY2UgPT0gXCJvYmplY3RcIiAmJiBwZXJmb3JtYW5jZS5ub3cgPyBwZXJmb3JtYW5jZSA6IERhdGUsIEtvID0gdHlwZW9mIHdpbmRvdyA9PSBcIm9iamVjdFwiICYmIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPyB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lLmJpbmQod2luZG93KSA6IGZ1bmN0aW9uKHQpIHtcbiAgc2V0VGltZW91dCh0LCAxNyk7XG59O1xuZnVuY3Rpb24gcXIoKSB7XG4gIHJldHVybiBXdCB8fCAoS28oQ2MpLCBXdCA9IEFuLm5vdygpICsgQWUpO1xufVxuZnVuY3Rpb24gQ2MoKSB7XG4gIFd0ID0gMDtcbn1cbmZ1bmN0aW9uIHhlKCkge1xuICB0aGlzLl9jYWxsID0gdGhpcy5fdGltZSA9IHRoaXMuX25leHQgPSBudWxsO1xufVxueGUucHJvdG90eXBlID0gUW8ucHJvdG90eXBlID0ge1xuICBjb25zdHJ1Y3RvcjogeGUsXG4gIHJlc3RhcnQ6IGZ1bmN0aW9uKHQsIG4sIGUpIHtcbiAgICBpZiAodHlwZW9mIHQgIT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiY2FsbGJhY2sgaXMgbm90IGEgZnVuY3Rpb25cIik7XG4gICAgZSA9IChlID09IG51bGwgPyBxcigpIDogK2UpICsgKG4gPT0gbnVsbCA/IDAgOiArbiksICF0aGlzLl9uZXh0ICYmIG1uICE9PSB0aGlzICYmIChtbiA/IG1uLl9uZXh0ID0gdGhpcyA6IFNlID0gdGhpcywgbW4gPSB0aGlzKSwgdGhpcy5fY2FsbCA9IHQsIHRoaXMuX3RpbWUgPSBlLCB2cigpO1xuICB9LFxuICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9jYWxsICYmICh0aGlzLl9jYWxsID0gbnVsbCwgdGhpcy5fdGltZSA9IDEgLyAwLCB2cigpKTtcbiAgfVxufTtcbmZ1bmN0aW9uIFFvKHQsIG4sIGUpIHtcbiAgdmFyIHIgPSBuZXcgeGUoKTtcbiAgcmV0dXJuIHIucmVzdGFydCh0LCBuLCBlKSwgcjtcbn1cbmZ1bmN0aW9uIHpjKCkge1xuICBxcigpLCArK29uO1xuICBmb3IgKHZhciB0ID0gU2UsIG47IHQ7IClcbiAgICAobiA9IFd0IC0gdC5fdGltZSkgPj0gMCAmJiB0Ll9jYWxsLmNhbGwodm9pZCAwLCBuKSwgdCA9IHQuX25leHQ7XG4gIC0tb247XG59XG5mdW5jdGlvbiBGaSgpIHtcbiAgV3QgPSAoTWUgPSBBbi5ub3coKSkgKyBBZSwgb24gPSBkbiA9IDA7XG4gIHRyeSB7XG4gICAgemMoKTtcbiAgfSBmaW5hbGx5IHtcbiAgICBvbiA9IDAsIExjKCksIFd0ID0gMDtcbiAgfVxufVxuZnVuY3Rpb24gT2MoKSB7XG4gIHZhciB0ID0gQW4ubm93KCksIG4gPSB0IC0gTWU7XG4gIG4gPiBIbyAmJiAoQWUgLT0gbiwgTWUgPSB0KTtcbn1cbmZ1bmN0aW9uIExjKCkge1xuICBmb3IgKHZhciB0LCBuID0gU2UsIGUsIHIgPSAxIC8gMDsgbjsgKVxuICAgIG4uX2NhbGwgPyAociA+IG4uX3RpbWUgJiYgKHIgPSBuLl90aW1lKSwgdCA9IG4sIG4gPSBuLl9uZXh0KSA6IChlID0gbi5fbmV4dCwgbi5fbmV4dCA9IG51bGwsIG4gPSB0ID8gdC5fbmV4dCA9IGUgOiBTZSA9IGUpO1xuICBtbiA9IHQsIHZyKHIpO1xufVxuZnVuY3Rpb24gdnIodCkge1xuICBpZiAoIW9uKSB7XG4gICAgZG4gJiYgKGRuID0gY2xlYXJUaW1lb3V0KGRuKSk7XG4gICAgdmFyIG4gPSB0IC0gV3Q7XG4gICAgbiA+IDI0ID8gKHQgPCAxIC8gMCAmJiAoZG4gPSBzZXRUaW1lb3V0KEZpLCB0IC0gQW4ubm93KCkgLSBBZSkpLCBzbiAmJiAoc24gPSBjbGVhckludGVydmFsKHNuKSkpIDogKHNuIHx8IChNZSA9IEFuLm5vdygpLCBzbiA9IHNldEludGVydmFsKE9jLCBIbykpLCBvbiA9IDEsIEtvKEZpKSk7XG4gIH1cbn1cbmZ1bmN0aW9uIElpKHQsIG4sIGUpIHtcbiAgdmFyIHIgPSBuZXcgeGUoKTtcbiAgcmV0dXJuIG4gPSBuID09IG51bGwgPyAwIDogK24sIHIucmVzdGFydCgoaSkgPT4ge1xuICAgIHIuc3RvcCgpLCB0KGkgKyBuKTtcbiAgfSwgbiwgZSksIHI7XG59XG52YXIgRmMgPSBicihcInN0YXJ0XCIsIFwiZW5kXCIsIFwiY2FuY2VsXCIsIFwiaW50ZXJydXB0XCIpLCBJYyA9IFtdLCBKbyA9IDAsIERpID0gMSwgZ3IgPSAyLCBXbiA9IDMsIGJpID0gNCwgZHIgPSA1LCBVbiA9IDY7XG5mdW5jdGlvbiBUZSh0LCBuLCBlLCByLCBpLCBvKSB7XG4gIHZhciB1ID0gdC5fX3RyYW5zaXRpb247XG4gIGlmICghdSkgdC5fX3RyYW5zaXRpb24gPSB7fTtcbiAgZWxzZSBpZiAoZSBpbiB1KSByZXR1cm47XG4gIERjKHQsIGUsIHtcbiAgICBuYW1lOiBuLFxuICAgIGluZGV4OiByLFxuICAgIC8vIEZvciBjb250ZXh0IGR1cmluZyBjYWxsYmFjay5cbiAgICBncm91cDogaSxcbiAgICAvLyBGb3IgY29udGV4dCBkdXJpbmcgY2FsbGJhY2suXG4gICAgb246IEZjLFxuICAgIHR3ZWVuOiBJYyxcbiAgICB0aW1lOiBvLnRpbWUsXG4gICAgZGVsYXk6IG8uZGVsYXksXG4gICAgZHVyYXRpb246IG8uZHVyYXRpb24sXG4gICAgZWFzZTogby5lYXNlLFxuICAgIHRpbWVyOiBudWxsLFxuICAgIHN0YXRlOiBKb1xuICB9KTtcbn1cbmZ1bmN0aW9uIGpyKHQsIG4pIHtcbiAgdmFyIGUgPSB4dCh0LCBuKTtcbiAgaWYgKGUuc3RhdGUgPiBKbykgdGhyb3cgbmV3IEVycm9yKFwidG9vIGxhdGU7IGFscmVhZHkgc2NoZWR1bGVkXCIpO1xuICByZXR1cm4gZTtcbn1cbmZ1bmN0aW9uIFR0KHQsIG4pIHtcbiAgdmFyIGUgPSB4dCh0LCBuKTtcbiAgaWYgKGUuc3RhdGUgPiBXbikgdGhyb3cgbmV3IEVycm9yKFwidG9vIGxhdGU7IGFscmVhZHkgcnVubmluZ1wiKTtcbiAgcmV0dXJuIGU7XG59XG5mdW5jdGlvbiB4dCh0LCBuKSB7XG4gIHZhciBlID0gdC5fX3RyYW5zaXRpb247XG4gIGlmICghZSB8fCAhKGUgPSBlW25dKSkgdGhyb3cgbmV3IEVycm9yKFwidHJhbnNpdGlvbiBub3QgZm91bmRcIik7XG4gIHJldHVybiBlO1xufVxuZnVuY3Rpb24gRGModCwgbiwgZSkge1xuICB2YXIgciA9IHQuX190cmFuc2l0aW9uLCBpO1xuICByW25dID0gZSwgZS50aW1lciA9IFFvKG8sIDAsIGUudGltZSk7XG4gIGZ1bmN0aW9uIG8obCkge1xuICAgIGUuc3RhdGUgPSBEaSwgZS50aW1lci5yZXN0YXJ0KHUsIGUuZGVsYXksIGUudGltZSksIGUuZGVsYXkgPD0gbCAmJiB1KGwgLSBlLmRlbGF5KTtcbiAgfVxuICBmdW5jdGlvbiB1KGwpIHtcbiAgICB2YXIgcywgZiwgaCwgcDtcbiAgICBpZiAoZS5zdGF0ZSAhPT0gRGkpIHJldHVybiBjKCk7XG4gICAgZm9yIChzIGluIHIpXG4gICAgICBpZiAocCA9IHJbc10sIHAubmFtZSA9PT0gZS5uYW1lKSB7XG4gICAgICAgIGlmIChwLnN0YXRlID09PSBXbikgcmV0dXJuIElpKHUpO1xuICAgICAgICBwLnN0YXRlID09PSBiaSA/IChwLnN0YXRlID0gVW4sIHAudGltZXIuc3RvcCgpLCBwLm9uLmNhbGwoXCJpbnRlcnJ1cHRcIiwgdCwgdC5fX2RhdGFfXywgcC5pbmRleCwgcC5ncm91cCksIGRlbGV0ZSByW3NdKSA6ICtzIDwgbiAmJiAocC5zdGF0ZSA9IFVuLCBwLnRpbWVyLnN0b3AoKSwgcC5vbi5jYWxsKFwiY2FuY2VsXCIsIHQsIHQuX19kYXRhX18sIHAuaW5kZXgsIHAuZ3JvdXApLCBkZWxldGUgcltzXSk7XG4gICAgICB9XG4gICAgaWYgKElpKGZ1bmN0aW9uKCkge1xuICAgICAgZS5zdGF0ZSA9PT0gV24gJiYgKGUuc3RhdGUgPSBiaSwgZS50aW1lci5yZXN0YXJ0KGEsIGUuZGVsYXksIGUudGltZSksIGEobCkpO1xuICAgIH0pLCBlLnN0YXRlID0gZ3IsIGUub24uY2FsbChcInN0YXJ0XCIsIHQsIHQuX19kYXRhX18sIGUuaW5kZXgsIGUuZ3JvdXApLCBlLnN0YXRlID09PSBncikge1xuICAgICAgZm9yIChlLnN0YXRlID0gV24sIGkgPSBuZXcgQXJyYXkoaCA9IGUudHdlZW4ubGVuZ3RoKSwgcyA9IDAsIGYgPSAtMTsgcyA8IGg7ICsrcylcbiAgICAgICAgKHAgPSBlLnR3ZWVuW3NdLnZhbHVlLmNhbGwodCwgdC5fX2RhdGFfXywgZS5pbmRleCwgZS5ncm91cCkpICYmIChpWysrZl0gPSBwKTtcbiAgICAgIGkubGVuZ3RoID0gZiArIDE7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGEobCkge1xuICAgIGZvciAodmFyIHMgPSBsIDwgZS5kdXJhdGlvbiA/IGUuZWFzZS5jYWxsKG51bGwsIGwgLyBlLmR1cmF0aW9uKSA6IChlLnRpbWVyLnJlc3RhcnQoYyksIGUuc3RhdGUgPSBkciwgMSksIGYgPSAtMSwgaCA9IGkubGVuZ3RoOyArK2YgPCBoOyApXG4gICAgICBpW2ZdLmNhbGwodCwgcyk7XG4gICAgZS5zdGF0ZSA9PT0gZHIgJiYgKGUub24uY2FsbChcImVuZFwiLCB0LCB0Ll9fZGF0YV9fLCBlLmluZGV4LCBlLmdyb3VwKSwgYygpKTtcbiAgfVxuICBmdW5jdGlvbiBjKCkge1xuICAgIGUuc3RhdGUgPSBVbiwgZS50aW1lci5zdG9wKCksIGRlbGV0ZSByW25dO1xuICAgIGZvciAodmFyIGwgaW4gcikgcmV0dXJuO1xuICAgIGRlbGV0ZSB0Ll9fdHJhbnNpdGlvbjtcbiAgfVxufVxuZnVuY3Rpb24gVm4odCwgbikge1xuICB2YXIgZSA9IHQuX190cmFuc2l0aW9uLCByLCBpLCBvID0gITAsIHU7XG4gIGlmIChlKSB7XG4gICAgbiA9IG4gPT0gbnVsbCA/IG51bGwgOiBuICsgXCJcIjtcbiAgICBmb3IgKHUgaW4gZSkge1xuICAgICAgaWYgKChyID0gZVt1XSkubmFtZSAhPT0gbikge1xuICAgICAgICBvID0gITE7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaSA9IHIuc3RhdGUgPiBnciAmJiByLnN0YXRlIDwgZHIsIHIuc3RhdGUgPSBVbiwgci50aW1lci5zdG9wKCksIHIub24uY2FsbChpID8gXCJpbnRlcnJ1cHRcIiA6IFwiY2FuY2VsXCIsIHQsIHQuX19kYXRhX18sIHIuaW5kZXgsIHIuZ3JvdXApLCBkZWxldGUgZVt1XTtcbiAgICB9XG4gICAgbyAmJiBkZWxldGUgdC5fX3RyYW5zaXRpb247XG4gIH1cbn1cbmZ1bmN0aW9uIGJjKHQpIHtcbiAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICBWbih0aGlzLCB0KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBxYyh0LCBuKSB7XG4gIHZhciBlLCByO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGkgPSBUdCh0aGlzLCB0KSwgbyA9IGkudHdlZW47XG4gICAgaWYgKG8gIT09IGUpIHtcbiAgICAgIHIgPSBlID0gbztcbiAgICAgIGZvciAodmFyIHUgPSAwLCBhID0gci5sZW5ndGg7IHUgPCBhOyArK3UpXG4gICAgICAgIGlmIChyW3VdLm5hbWUgPT09IG4pIHtcbiAgICAgICAgICByID0gci5zbGljZSgpLCByLnNwbGljZSh1LCAxKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBpLnR3ZWVuID0gcjtcbiAgfTtcbn1cbmZ1bmN0aW9uIGpjKHQsIG4sIGUpIHtcbiAgdmFyIHIsIGk7XG4gIGlmICh0eXBlb2YgZSAhPSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBFcnJvcigpO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIG8gPSBUdCh0aGlzLCB0KSwgdSA9IG8udHdlZW47XG4gICAgaWYgKHUgIT09IHIpIHtcbiAgICAgIGkgPSAociA9IHUpLnNsaWNlKCk7XG4gICAgICBmb3IgKHZhciBhID0geyBuYW1lOiBuLCB2YWx1ZTogZSB9LCBjID0gMCwgbCA9IGkubGVuZ3RoOyBjIDwgbDsgKytjKVxuICAgICAgICBpZiAoaVtjXS5uYW1lID09PSBuKSB7XG4gICAgICAgICAgaVtjXSA9IGE7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIGMgPT09IGwgJiYgaS5wdXNoKGEpO1xuICAgIH1cbiAgICBvLnR3ZWVuID0gaTtcbiAgfTtcbn1cbmZ1bmN0aW9uIFhjKHQsIG4pIHtcbiAgdmFyIGUgPSB0aGlzLl9pZDtcbiAgaWYgKHQgKz0gXCJcIiwgYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcbiAgICBmb3IgKHZhciByID0geHQodGhpcy5ub2RlKCksIGUpLnR3ZWVuLCBpID0gMCwgbyA9IHIubGVuZ3RoLCB1OyBpIDwgbzsgKytpKVxuICAgICAgaWYgKCh1ID0gcltpXSkubmFtZSA9PT0gdClcbiAgICAgICAgcmV0dXJuIHUudmFsdWU7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmV0dXJuIHRoaXMuZWFjaCgobiA9PSBudWxsID8gcWMgOiBqYykoZSwgdCwgbikpO1xufVxuZnVuY3Rpb24gWHIodCwgbiwgZSkge1xuICB2YXIgciA9IHQuX2lkO1xuICByZXR1cm4gdC5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIHZhciBpID0gVHQodGhpcywgcik7XG4gICAgKGkudmFsdWUgfHwgKGkudmFsdWUgPSB7fSkpW25dID0gZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9KSwgZnVuY3Rpb24oaSkge1xuICAgIHJldHVybiB4dChpLCByKS52YWx1ZVtuXTtcbiAgfTtcbn1cbmZ1bmN0aW9uIHR1KHQsIG4pIHtcbiAgdmFyIGU7XG4gIHJldHVybiAodHlwZW9mIG4gPT0gXCJudW1iZXJcIiA/IEd0IDogbiBpbnN0YW5jZW9mIEhyID8gVnIgOiAoZSA9IEhyKG4pKSA/IChuID0gZSwgVnIpIDogdnUpKHQsIG4pO1xufVxuZnVuY3Rpb24gR2ModCkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUodCk7XG4gIH07XG59XG5mdW5jdGlvbiBaYyh0KSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZU5TKHQuc3BhY2UsIHQubG9jYWwpO1xuICB9O1xufVxuZnVuY3Rpb24gQmModCwgbiwgZSkge1xuICB2YXIgciwgaSA9IGUgKyBcIlwiLCBvO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHUgPSB0aGlzLmdldEF0dHJpYnV0ZSh0KTtcbiAgICByZXR1cm4gdSA9PT0gaSA/IG51bGwgOiB1ID09PSByID8gbyA6IG8gPSBuKHIgPSB1LCBlKTtcbiAgfTtcbn1cbmZ1bmN0aW9uIFljKHQsIG4sIGUpIHtcbiAgdmFyIHIsIGkgPSBlICsgXCJcIiwgbztcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciB1ID0gdGhpcy5nZXRBdHRyaWJ1dGVOUyh0LnNwYWNlLCB0LmxvY2FsKTtcbiAgICByZXR1cm4gdSA9PT0gaSA/IG51bGwgOiB1ID09PSByID8gbyA6IG8gPSBuKHIgPSB1LCBlKTtcbiAgfTtcbn1cbmZ1bmN0aW9uIFdjKHQsIG4sIGUpIHtcbiAgdmFyIHIsIGksIG87XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgdSwgYSA9IGUodGhpcyksIGM7XG4gICAgcmV0dXJuIGEgPT0gbnVsbCA/IHZvaWQgdGhpcy5yZW1vdmVBdHRyaWJ1dGUodCkgOiAodSA9IHRoaXMuZ2V0QXR0cmlidXRlKHQpLCBjID0gYSArIFwiXCIsIHUgPT09IGMgPyBudWxsIDogdSA9PT0gciAmJiBjID09PSBpID8gbyA6IChpID0gYywgbyA9IG4ociA9IHUsIGEpKSk7XG4gIH07XG59XG5mdW5jdGlvbiBVYyh0LCBuLCBlKSB7XG4gIHZhciByLCBpLCBvO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHUsIGEgPSBlKHRoaXMpLCBjO1xuICAgIHJldHVybiBhID09IG51bGwgPyB2b2lkIHRoaXMucmVtb3ZlQXR0cmlidXRlTlModC5zcGFjZSwgdC5sb2NhbCkgOiAodSA9IHRoaXMuZ2V0QXR0cmlidXRlTlModC5zcGFjZSwgdC5sb2NhbCksIGMgPSBhICsgXCJcIiwgdSA9PT0gYyA/IG51bGwgOiB1ID09PSByICYmIGMgPT09IGkgPyBvIDogKGkgPSBjLCBvID0gbihyID0gdSwgYSkpKTtcbiAgfTtcbn1cbmZ1bmN0aW9uIFZjKHQsIG4pIHtcbiAgdmFyIGUgPSAkZSh0KSwgciA9IGUgPT09IFwidHJhbnNmb3JtXCIgPyB3dSA6IHR1O1xuICByZXR1cm4gdGhpcy5hdHRyVHdlZW4odCwgdHlwZW9mIG4gPT0gXCJmdW5jdGlvblwiID8gKGUubG9jYWwgPyBVYyA6IFdjKShlLCByLCBYcih0aGlzLCBcImF0dHIuXCIgKyB0LCBuKSkgOiBuID09IG51bGwgPyAoZS5sb2NhbCA/IFpjIDogR2MpKGUpIDogKGUubG9jYWwgPyBZYyA6IEJjKShlLCByLCBuKSk7XG59XG5mdW5jdGlvbiBIYyh0LCBuKSB7XG4gIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgdGhpcy5zZXRBdHRyaWJ1dGUodCwgbi5jYWxsKHRoaXMsIGUpKTtcbiAgfTtcbn1cbmZ1bmN0aW9uIEtjKHQsIG4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICB0aGlzLnNldEF0dHJpYnV0ZU5TKHQuc3BhY2UsIHQubG9jYWwsIG4uY2FsbCh0aGlzLCBlKSk7XG4gIH07XG59XG5mdW5jdGlvbiBRYyh0LCBuKSB7XG4gIHZhciBlLCByO1xuICBmdW5jdGlvbiBpKCkge1xuICAgIHZhciBvID0gbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHJldHVybiBvICE9PSByICYmIChlID0gKHIgPSBvKSAmJiBLYyh0LCBvKSksIGU7XG4gIH1cbiAgcmV0dXJuIGkuX3ZhbHVlID0gbiwgaTtcbn1cbmZ1bmN0aW9uIEpjKHQsIG4pIHtcbiAgdmFyIGUsIHI7XG4gIGZ1bmN0aW9uIGkoKSB7XG4gICAgdmFyIG8gPSBuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgcmV0dXJuIG8gIT09IHIgJiYgKGUgPSAociA9IG8pICYmIEhjKHQsIG8pKSwgZTtcbiAgfVxuICByZXR1cm4gaS5fdmFsdWUgPSBuLCBpO1xufVxuZnVuY3Rpb24gdGwodCwgbikge1xuICB2YXIgZSA9IFwiYXR0ci5cIiArIHQ7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikgcmV0dXJuIChlID0gdGhpcy50d2VlbihlKSkgJiYgZS5fdmFsdWU7XG4gIGlmIChuID09IG51bGwpIHJldHVybiB0aGlzLnR3ZWVuKGUsIG51bGwpO1xuICBpZiAodHlwZW9mIG4gIT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgdmFyIHIgPSAkZSh0KTtcbiAgcmV0dXJuIHRoaXMudHdlZW4oZSwgKHIubG9jYWwgPyBRYyA6IEpjKShyLCBuKSk7XG59XG5mdW5jdGlvbiBubCh0LCBuKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBqcih0aGlzLCB0KS5kZWxheSA9ICtuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59XG5mdW5jdGlvbiBlbCh0LCBuKSB7XG4gIHJldHVybiBuID0gK24sIGZ1bmN0aW9uKCkge1xuICAgIGpyKHRoaXMsIHQpLmRlbGF5ID0gbjtcbiAgfTtcbn1cbmZ1bmN0aW9uIHJsKHQpIHtcbiAgdmFyIG4gPSB0aGlzLl9pZDtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyB0aGlzLmVhY2goKHR5cGVvZiB0ID09IFwiZnVuY3Rpb25cIiA/IG5sIDogZWwpKG4sIHQpKSA6IHh0KHRoaXMubm9kZSgpLCBuKS5kZWxheTtcbn1cbmZ1bmN0aW9uIGlsKHQsIG4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIFR0KHRoaXMsIHQpLmR1cmF0aW9uID0gK24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn1cbmZ1bmN0aW9uIG9sKHQsIG4pIHtcbiAgcmV0dXJuIG4gPSArbiwgZnVuY3Rpb24oKSB7XG4gICAgVHQodGhpcywgdCkuZHVyYXRpb24gPSBuO1xuICB9O1xufVxuZnVuY3Rpb24gdWwodCkge1xuICB2YXIgbiA9IHRoaXMuX2lkO1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IHRoaXMuZWFjaCgodHlwZW9mIHQgPT0gXCJmdW5jdGlvblwiID8gaWwgOiBvbCkobiwgdCkpIDogeHQodGhpcy5ub2RlKCksIG4pLmR1cmF0aW9uO1xufVxuZnVuY3Rpb24gYWwodCwgbikge1xuICBpZiAodHlwZW9mIG4gIT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIFR0KHRoaXMsIHQpLmVhc2UgPSBuO1xuICB9O1xufVxuZnVuY3Rpb24gc2wodCkge1xuICB2YXIgbiA9IHRoaXMuX2lkO1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IHRoaXMuZWFjaChhbChuLCB0KSkgOiB4dCh0aGlzLm5vZGUoKSwgbikuZWFzZTtcbn1cbmZ1bmN0aW9uIGNsKHQsIG4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBlID0gbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIGlmICh0eXBlb2YgZSAhPSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBFcnJvcigpO1xuICAgIFR0KHRoaXMsIHQpLmVhc2UgPSBlO1xuICB9O1xufVxuZnVuY3Rpb24gbGwodCkge1xuICBpZiAodHlwZW9mIHQgIT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgcmV0dXJuIHRoaXMuZWFjaChjbCh0aGlzLl9pZCwgdCkpO1xufVxuZnVuY3Rpb24gZmwodCkge1xuICB0eXBlb2YgdCAhPSBcImZ1bmN0aW9uXCIgJiYgKHQgPSBxbyh0KSk7XG4gIGZvciAodmFyIG4gPSB0aGlzLl9ncm91cHMsIGUgPSBuLmxlbmd0aCwgciA9IG5ldyBBcnJheShlKSwgaSA9IDA7IGkgPCBlOyArK2kpXG4gICAgZm9yICh2YXIgbyA9IG5baV0sIHUgPSBvLmxlbmd0aCwgYSA9IHJbaV0gPSBbXSwgYywgbCA9IDA7IGwgPCB1OyArK2wpXG4gICAgICAoYyA9IG9bbF0pICYmIHQuY2FsbChjLCBjLl9fZGF0YV9fLCBsLCBvKSAmJiBhLnB1c2goYyk7XG4gIHJldHVybiBuZXcgRnQociwgdGhpcy5fcGFyZW50cywgdGhpcy5fbmFtZSwgdGhpcy5faWQpO1xufVxuZnVuY3Rpb24gaGwodCkge1xuICBpZiAodC5faWQgIT09IHRoaXMuX2lkKSB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgZm9yICh2YXIgbiA9IHRoaXMuX2dyb3VwcywgZSA9IHQuX2dyb3VwcywgciA9IG4ubGVuZ3RoLCBpID0gZS5sZW5ndGgsIG8gPSBNYXRoLm1pbihyLCBpKSwgdSA9IG5ldyBBcnJheShyKSwgYSA9IDA7IGEgPCBvOyArK2EpXG4gICAgZm9yICh2YXIgYyA9IG5bYV0sIGwgPSBlW2FdLCBzID0gYy5sZW5ndGgsIGYgPSB1W2FdID0gbmV3IEFycmF5KHMpLCBoLCBwID0gMDsgcCA8IHM7ICsrcClcbiAgICAgIChoID0gY1twXSB8fCBsW3BdKSAmJiAoZltwXSA9IGgpO1xuICBmb3IgKDsgYSA8IHI7ICsrYSlcbiAgICB1W2FdID0gblthXTtcbiAgcmV0dXJuIG5ldyBGdCh1LCB0aGlzLl9wYXJlbnRzLCB0aGlzLl9uYW1lLCB0aGlzLl9pZCk7XG59XG5mdW5jdGlvbiBwbCh0KSB7XG4gIHJldHVybiAodCArIFwiXCIpLnRyaW0oKS5zcGxpdCgvXnxcXHMrLykuZXZlcnkoZnVuY3Rpb24obikge1xuICAgIHZhciBlID0gbi5pbmRleE9mKFwiLlwiKTtcbiAgICByZXR1cm4gZSA+PSAwICYmIChuID0gbi5zbGljZSgwLCBlKSksICFuIHx8IG4gPT09IFwic3RhcnRcIjtcbiAgfSk7XG59XG5mdW5jdGlvbiB2bCh0LCBuLCBlKSB7XG4gIHZhciByLCBpLCBvID0gcGwobikgPyBqciA6IFR0O1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHUgPSBvKHRoaXMsIHQpLCBhID0gdS5vbjtcbiAgICBhICE9PSByICYmIChpID0gKHIgPSBhKS5jb3B5KCkpLm9uKG4sIGUpLCB1Lm9uID0gaTtcbiAgfTtcbn1cbmZ1bmN0aW9uIGdsKHQsIG4pIHtcbiAgdmFyIGUgPSB0aGlzLl9pZDtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPCAyID8geHQodGhpcy5ub2RlKCksIGUpLm9uLm9uKHQpIDogdGhpcy5lYWNoKHZsKGUsIHQsIG4pKTtcbn1cbmZ1bmN0aW9uIGRsKHQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBuID0gdGhpcy5wYXJlbnROb2RlO1xuICAgIGZvciAodmFyIGUgaW4gdGhpcy5fX3RyYW5zaXRpb24pIGlmICgrZSAhPT0gdCkgcmV0dXJuO1xuICAgIG4gJiYgbi5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgfTtcbn1cbmZ1bmN0aW9uIG1sKCkge1xuICByZXR1cm4gdGhpcy5vbihcImVuZC5yZW1vdmVcIiwgZGwodGhpcy5faWQpKTtcbn1cbmZ1bmN0aW9uIHlsKHQpIHtcbiAgdmFyIG4gPSB0aGlzLl9uYW1lLCBlID0gdGhpcy5faWQ7XG4gIHR5cGVvZiB0ICE9IFwiZnVuY3Rpb25cIiAmJiAodCA9IElyKHQpKTtcbiAgZm9yICh2YXIgciA9IHRoaXMuX2dyb3VwcywgaSA9IHIubGVuZ3RoLCBvID0gbmV3IEFycmF5KGkpLCB1ID0gMDsgdSA8IGk7ICsrdSlcbiAgICBmb3IgKHZhciBhID0gclt1XSwgYyA9IGEubGVuZ3RoLCBsID0gb1t1XSA9IG5ldyBBcnJheShjKSwgcywgZiwgaCA9IDA7IGggPCBjOyArK2gpXG4gICAgICAocyA9IGFbaF0pICYmIChmID0gdC5jYWxsKHMsIHMuX19kYXRhX18sIGgsIGEpKSAmJiAoXCJfX2RhdGFfX1wiIGluIHMgJiYgKGYuX19kYXRhX18gPSBzLl9fZGF0YV9fKSwgbFtoXSA9IGYsIFRlKGxbaF0sIG4sIGUsIGgsIGwsIHh0KHMsIGUpKSk7XG4gIHJldHVybiBuZXcgRnQobywgdGhpcy5fcGFyZW50cywgbiwgZSk7XG59XG5mdW5jdGlvbiB3bCh0KSB7XG4gIHZhciBuID0gdGhpcy5fbmFtZSwgZSA9IHRoaXMuX2lkO1xuICB0eXBlb2YgdCAhPSBcImZ1bmN0aW9uXCIgJiYgKHQgPSBibyh0KSk7XG4gIGZvciAodmFyIHIgPSB0aGlzLl9ncm91cHMsIGkgPSByLmxlbmd0aCwgbyA9IFtdLCB1ID0gW10sIGEgPSAwOyBhIDwgaTsgKythKVxuICAgIGZvciAodmFyIGMgPSByW2FdLCBsID0gYy5sZW5ndGgsIHMsIGYgPSAwOyBmIDwgbDsgKytmKVxuICAgICAgaWYgKHMgPSBjW2ZdKSB7XG4gICAgICAgIGZvciAodmFyIGggPSB0LmNhbGwocywgcy5fX2RhdGFfXywgZiwgYyksIHAsIHYgPSB4dChzLCBlKSwgRSA9IDAsIFMgPSBoLmxlbmd0aDsgRSA8IFM7ICsrRSlcbiAgICAgICAgICAocCA9IGhbRV0pICYmIFRlKHAsIG4sIGUsIEUsIGgsIHYpO1xuICAgICAgICBvLnB1c2goaCksIHUucHVzaChzKTtcbiAgICAgIH1cbiAgcmV0dXJuIG5ldyBGdChvLCB1LCBuLCBlKTtcbn1cbnZhciBfbCA9IHpuLnByb3RvdHlwZS5jb25zdHJ1Y3RvcjtcbmZ1bmN0aW9uIEVsKCkge1xuICByZXR1cm4gbmV3IF9sKHRoaXMuX2dyb3VwcywgdGhpcy5fcGFyZW50cyk7XG59XG5mdW5jdGlvbiBTbCh0LCBuKSB7XG4gIHZhciBlLCByLCBpO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIG8gPSBybih0aGlzLCB0KSwgdSA9ICh0aGlzLnN0eWxlLnJlbW92ZVByb3BlcnR5KHQpLCBybih0aGlzLCB0KSk7XG4gICAgcmV0dXJuIG8gPT09IHUgPyBudWxsIDogbyA9PT0gZSAmJiB1ID09PSByID8gaSA6IGkgPSBuKGUgPSBvLCByID0gdSk7XG4gIH07XG59XG5mdW5jdGlvbiBudSh0KSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnN0eWxlLnJlbW92ZVByb3BlcnR5KHQpO1xuICB9O1xufVxuZnVuY3Rpb24gTWwodCwgbiwgZSkge1xuICB2YXIgciwgaSA9IGUgKyBcIlwiLCBvO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHUgPSBybih0aGlzLCB0KTtcbiAgICByZXR1cm4gdSA9PT0gaSA/IG51bGwgOiB1ID09PSByID8gbyA6IG8gPSBuKHIgPSB1LCBlKTtcbiAgfTtcbn1cbmZ1bmN0aW9uIHhsKHQsIG4sIGUpIHtcbiAgdmFyIHIsIGksIG87XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgdSA9IHJuKHRoaXMsIHQpLCBhID0gZSh0aGlzKSwgYyA9IGEgKyBcIlwiO1xuICAgIHJldHVybiBhID09IG51bGwgJiYgKGMgPSBhID0gKHRoaXMuc3R5bGUucmVtb3ZlUHJvcGVydHkodCksIHJuKHRoaXMsIHQpKSksIHUgPT09IGMgPyBudWxsIDogdSA9PT0gciAmJiBjID09PSBpID8gbyA6IChpID0gYywgbyA9IG4ociA9IHUsIGEpKTtcbiAgfTtcbn1cbmZ1bmN0aW9uIFBsKHQsIG4pIHtcbiAgdmFyIGUsIHIsIGksIG8gPSBcInN0eWxlLlwiICsgbiwgdSA9IFwiZW5kLlwiICsgbywgYTtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBjID0gVHQodGhpcywgdCksIGwgPSBjLm9uLCBzID0gYy52YWx1ZVtvXSA9PSBudWxsID8gYSB8fCAoYSA9IG51KG4pKSA6IHZvaWQgMDtcbiAgICAobCAhPT0gZSB8fCBpICE9PSBzKSAmJiAociA9IChlID0gbCkuY29weSgpKS5vbih1LCBpID0gcyksIGMub24gPSByO1xuICB9O1xufVxuZnVuY3Rpb24gTmwodCwgbiwgZSkge1xuICB2YXIgciA9ICh0ICs9IFwiXCIpID09IFwidHJhbnNmb3JtXCIgPyB5dSA6IHR1O1xuICByZXR1cm4gbiA9PSBudWxsID8gdGhpcy5zdHlsZVR3ZWVuKHQsIFNsKHQsIHIpKS5vbihcImVuZC5zdHlsZS5cIiArIHQsIG51KHQpKSA6IHR5cGVvZiBuID09IFwiZnVuY3Rpb25cIiA/IHRoaXMuc3R5bGVUd2Vlbih0LCB4bCh0LCByLCBYcih0aGlzLCBcInN0eWxlLlwiICsgdCwgbikpKS5lYWNoKFBsKHRoaXMuX2lkLCB0KSkgOiB0aGlzLnN0eWxlVHdlZW4odCwgTWwodCwgciwgbiksIGUpLm9uKFwiZW5kLnN0eWxlLlwiICsgdCwgbnVsbCk7XG59XG5mdW5jdGlvbiAkbCh0LCBuLCBlKSB7XG4gIHJldHVybiBmdW5jdGlvbihyKSB7XG4gICAgdGhpcy5zdHlsZS5zZXRQcm9wZXJ0eSh0LCBuLmNhbGwodGhpcywgciksIGUpO1xuICB9O1xufVxuZnVuY3Rpb24gQWwodCwgbiwgZSkge1xuICB2YXIgciwgaTtcbiAgZnVuY3Rpb24gbygpIHtcbiAgICB2YXIgdSA9IG4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICByZXR1cm4gdSAhPT0gaSAmJiAociA9IChpID0gdSkgJiYgJGwodCwgdSwgZSkpLCByO1xuICB9XG4gIHJldHVybiBvLl92YWx1ZSA9IG4sIG87XG59XG5mdW5jdGlvbiBUbCh0LCBuLCBlKSB7XG4gIHZhciByID0gXCJzdHlsZS5cIiArICh0ICs9IFwiXCIpO1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHJldHVybiAociA9IHRoaXMudHdlZW4ocikpICYmIHIuX3ZhbHVlO1xuICBpZiAobiA9PSBudWxsKSByZXR1cm4gdGhpcy50d2VlbihyLCBudWxsKTtcbiAgaWYgKHR5cGVvZiBuICE9IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IEVycm9yKCk7XG4gIHJldHVybiB0aGlzLnR3ZWVuKHIsIEFsKHQsIG4sIGUgPz8gXCJcIikpO1xufVxuZnVuY3Rpb24ga2wodCkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy50ZXh0Q29udGVudCA9IHQ7XG4gIH07XG59XG5mdW5jdGlvbiBSbCh0KSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgbiA9IHQodGhpcyk7XG4gICAgdGhpcy50ZXh0Q29udGVudCA9IG4gPz8gXCJcIjtcbiAgfTtcbn1cbmZ1bmN0aW9uIENsKHQpIHtcbiAgcmV0dXJuIHRoaXMudHdlZW4oXCJ0ZXh0XCIsIHR5cGVvZiB0ID09IFwiZnVuY3Rpb25cIiA/IFJsKFhyKHRoaXMsIFwidGV4dFwiLCB0KSkgOiBrbCh0ID09IG51bGwgPyBcIlwiIDogdCArIFwiXCIpKTtcbn1cbmZ1bmN0aW9uIHpsKHQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG4pIHtcbiAgICB0aGlzLnRleHRDb250ZW50ID0gdC5jYWxsKHRoaXMsIG4pO1xuICB9O1xufVxuZnVuY3Rpb24gT2wodCkge1xuICB2YXIgbiwgZTtcbiAgZnVuY3Rpb24gcigpIHtcbiAgICB2YXIgaSA9IHQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICByZXR1cm4gaSAhPT0gZSAmJiAobiA9IChlID0gaSkgJiYgemwoaSkpLCBuO1xuICB9XG4gIHJldHVybiByLl92YWx1ZSA9IHQsIHI7XG59XG5mdW5jdGlvbiBMbCh0KSB7XG4gIHZhciBuID0gXCJ0ZXh0XCI7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMSkgcmV0dXJuIChuID0gdGhpcy50d2VlbihuKSkgJiYgbi5fdmFsdWU7XG4gIGlmICh0ID09IG51bGwpIHJldHVybiB0aGlzLnR3ZWVuKG4sIG51bGwpO1xuICBpZiAodHlwZW9mIHQgIT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgcmV0dXJuIHRoaXMudHdlZW4obiwgT2wodCkpO1xufVxuZnVuY3Rpb24gRmwoKSB7XG4gIGZvciAodmFyIHQgPSB0aGlzLl9uYW1lLCBuID0gdGhpcy5faWQsIGUgPSBldSgpLCByID0gdGhpcy5fZ3JvdXBzLCBpID0gci5sZW5ndGgsIG8gPSAwOyBvIDwgaTsgKytvKVxuICAgIGZvciAodmFyIHUgPSByW29dLCBhID0gdS5sZW5ndGgsIGMsIGwgPSAwOyBsIDwgYTsgKytsKVxuICAgICAgaWYgKGMgPSB1W2xdKSB7XG4gICAgICAgIHZhciBzID0geHQoYywgbik7XG4gICAgICAgIFRlKGMsIHQsIGUsIGwsIHUsIHtcbiAgICAgICAgICB0aW1lOiBzLnRpbWUgKyBzLmRlbGF5ICsgcy5kdXJhdGlvbixcbiAgICAgICAgICBkZWxheTogMCxcbiAgICAgICAgICBkdXJhdGlvbjogcy5kdXJhdGlvbixcbiAgICAgICAgICBlYXNlOiBzLmVhc2VcbiAgICAgICAgfSk7XG4gICAgICB9XG4gIHJldHVybiBuZXcgRnQociwgdGhpcy5fcGFyZW50cywgdCwgZSk7XG59XG5mdW5jdGlvbiBJbCgpIHtcbiAgdmFyIHQsIG4sIGUgPSB0aGlzLCByID0gZS5faWQsIGkgPSBlLnNpemUoKTtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKG8sIHUpIHtcbiAgICB2YXIgYSA9IHsgdmFsdWU6IHUgfSwgYyA9IHsgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgLS1pID09PSAwICYmIG8oKTtcbiAgICB9IH07XG4gICAgZS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGwgPSBUdCh0aGlzLCByKSwgcyA9IGwub247XG4gICAgICBzICE9PSB0ICYmIChuID0gKHQgPSBzKS5jb3B5KCksIG4uXy5jYW5jZWwucHVzaChhKSwgbi5fLmludGVycnVwdC5wdXNoKGEpLCBuLl8uZW5kLnB1c2goYykpLCBsLm9uID0gbjtcbiAgICB9KSwgaSA9PT0gMCAmJiBvKCk7XG4gIH0pO1xufVxudmFyIERsID0gMDtcbmZ1bmN0aW9uIEZ0KHQsIG4sIGUsIHIpIHtcbiAgdGhpcy5fZ3JvdXBzID0gdCwgdGhpcy5fcGFyZW50cyA9IG4sIHRoaXMuX25hbWUgPSBlLCB0aGlzLl9pZCA9IHI7XG59XG5mdW5jdGlvbiBldSgpIHtcbiAgcmV0dXJuICsrRGw7XG59XG52YXIgUnQgPSB6bi5wcm90b3R5cGU7XG5GdC5wcm90b3R5cGUgPSB7XG4gIGNvbnN0cnVjdG9yOiBGdCxcbiAgc2VsZWN0OiB5bCxcbiAgc2VsZWN0QWxsOiB3bCxcbiAgc2VsZWN0Q2hpbGQ6IFJ0LnNlbGVjdENoaWxkLFxuICBzZWxlY3RDaGlsZHJlbjogUnQuc2VsZWN0Q2hpbGRyZW4sXG4gIGZpbHRlcjogZmwsXG4gIG1lcmdlOiBobCxcbiAgc2VsZWN0aW9uOiBFbCxcbiAgdHJhbnNpdGlvbjogRmwsXG4gIGNhbGw6IFJ0LmNhbGwsXG4gIG5vZGVzOiBSdC5ub2RlcyxcbiAgbm9kZTogUnQubm9kZSxcbiAgc2l6ZTogUnQuc2l6ZSxcbiAgZW1wdHk6IFJ0LmVtcHR5LFxuICBlYWNoOiBSdC5lYWNoLFxuICBvbjogZ2wsXG4gIGF0dHI6IFZjLFxuICBhdHRyVHdlZW46IHRsLFxuICBzdHlsZTogTmwsXG4gIHN0eWxlVHdlZW46IFRsLFxuICB0ZXh0OiBDbCxcbiAgdGV4dFR3ZWVuOiBMbCxcbiAgcmVtb3ZlOiBtbCxcbiAgdHdlZW46IFhjLFxuICBkZWxheTogcmwsXG4gIGR1cmF0aW9uOiB1bCxcbiAgZWFzZTogc2wsXG4gIGVhc2VWYXJ5aW5nOiBsbCxcbiAgZW5kOiBJbCxcbiAgW1N5bWJvbC5pdGVyYXRvcl06IFJ0W1N5bWJvbC5pdGVyYXRvcl1cbn07XG5mdW5jdGlvbiBibCh0KSB7XG4gIHJldHVybiAoKHQgKj0gMikgPD0gMSA/IHQgKiB0ICogdCA6ICh0IC09IDIpICogdCAqIHQgKyAyKSAvIDI7XG59XG52YXIgcWwgPSB7XG4gIHRpbWU6IG51bGwsXG4gIC8vIFNldCBvbiB1c2UuXG4gIGRlbGF5OiAwLFxuICBkdXJhdGlvbjogMjUwLFxuICBlYXNlOiBibFxufTtcbmZ1bmN0aW9uIGpsKHQsIG4pIHtcbiAgZm9yICh2YXIgZTsgIShlID0gdC5fX3RyYW5zaXRpb24pIHx8ICEoZSA9IGVbbl0pOyApXG4gICAgaWYgKCEodCA9IHQucGFyZW50Tm9kZSkpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYHRyYW5zaXRpb24gJHtufSBub3QgZm91bmRgKTtcbiAgcmV0dXJuIGU7XG59XG5mdW5jdGlvbiBYbCh0KSB7XG4gIHZhciBuLCBlO1xuICB0IGluc3RhbmNlb2YgRnQgPyAobiA9IHQuX2lkLCB0ID0gdC5fbmFtZSkgOiAobiA9IGV1KCksIChlID0gcWwpLnRpbWUgPSBxcigpLCB0ID0gdCA9PSBudWxsID8gbnVsbCA6IHQgKyBcIlwiKTtcbiAgZm9yICh2YXIgciA9IHRoaXMuX2dyb3VwcywgaSA9IHIubGVuZ3RoLCBvID0gMDsgbyA8IGk7ICsrbylcbiAgICBmb3IgKHZhciB1ID0gcltvXSwgYSA9IHUubGVuZ3RoLCBjLCBsID0gMDsgbCA8IGE7ICsrbClcbiAgICAgIChjID0gdVtsXSkgJiYgVGUoYywgdCwgbiwgbCwgdSwgZSB8fCBqbChjLCBuKSk7XG4gIHJldHVybiBuZXcgRnQociwgdGhpcy5fcGFyZW50cywgdCwgbik7XG59XG56bi5wcm90b3R5cGUuaW50ZXJydXB0ID0gYmM7XG56bi5wcm90b3R5cGUudHJhbnNpdGlvbiA9IFhsO1xuY29uc3QgWG4gPSAodCkgPT4gKCkgPT4gdDtcbmZ1bmN0aW9uIEdsKHQsIHtcbiAgc291cmNlRXZlbnQ6IG4sXG4gIHRhcmdldDogZSxcbiAgdHJhbnNmb3JtOiByLFxuICBkaXNwYXRjaDogaVxufSkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgdHlwZTogeyB2YWx1ZTogdCwgZW51bWVyYWJsZTogITAsIGNvbmZpZ3VyYWJsZTogITAgfSxcbiAgICBzb3VyY2VFdmVudDogeyB2YWx1ZTogbiwgZW51bWVyYWJsZTogITAsIGNvbmZpZ3VyYWJsZTogITAgfSxcbiAgICB0YXJnZXQ6IHsgdmFsdWU6IGUsIGVudW1lcmFibGU6ICEwLCBjb25maWd1cmFibGU6ICEwIH0sXG4gICAgdHJhbnNmb3JtOiB7IHZhbHVlOiByLCBlbnVtZXJhYmxlOiAhMCwgY29uZmlndXJhYmxlOiAhMCB9LFxuICAgIF86IHsgdmFsdWU6IGkgfVxuICB9KTtcbn1cbmZ1bmN0aW9uIE90KHQsIG4sIGUpIHtcbiAgdGhpcy5rID0gdCwgdGhpcy54ID0gbiwgdGhpcy55ID0gZTtcbn1cbk90LnByb3RvdHlwZSA9IHtcbiAgY29uc3RydWN0b3I6IE90LFxuICBzY2FsZTogZnVuY3Rpb24odCkge1xuICAgIHJldHVybiB0ID09PSAxID8gdGhpcyA6IG5ldyBPdCh0aGlzLmsgKiB0LCB0aGlzLngsIHRoaXMueSk7XG4gIH0sXG4gIHRyYW5zbGF0ZTogZnVuY3Rpb24odCwgbikge1xuICAgIHJldHVybiB0ID09PSAwICYgbiA9PT0gMCA/IHRoaXMgOiBuZXcgT3QodGhpcy5rLCB0aGlzLnggKyB0aGlzLmsgKiB0LCB0aGlzLnkgKyB0aGlzLmsgKiBuKTtcbiAgfSxcbiAgYXBwbHk6IGZ1bmN0aW9uKHQpIHtcbiAgICByZXR1cm4gW3RbMF0gKiB0aGlzLmsgKyB0aGlzLngsIHRbMV0gKiB0aGlzLmsgKyB0aGlzLnldO1xuICB9LFxuICBhcHBseVg6IGZ1bmN0aW9uKHQpIHtcbiAgICByZXR1cm4gdCAqIHRoaXMuayArIHRoaXMueDtcbiAgfSxcbiAgYXBwbHlZOiBmdW5jdGlvbih0KSB7XG4gICAgcmV0dXJuIHQgKiB0aGlzLmsgKyB0aGlzLnk7XG4gIH0sXG4gIGludmVydDogZnVuY3Rpb24odCkge1xuICAgIHJldHVybiBbKHRbMF0gLSB0aGlzLngpIC8gdGhpcy5rLCAodFsxXSAtIHRoaXMueSkgLyB0aGlzLmtdO1xuICB9LFxuICBpbnZlcnRYOiBmdW5jdGlvbih0KSB7XG4gICAgcmV0dXJuICh0IC0gdGhpcy54KSAvIHRoaXMuaztcbiAgfSxcbiAgaW52ZXJ0WTogZnVuY3Rpb24odCkge1xuICAgIHJldHVybiAodCAtIHRoaXMueSkgLyB0aGlzLms7XG4gIH0sXG4gIHJlc2NhbGVYOiBmdW5jdGlvbih0KSB7XG4gICAgcmV0dXJuIHQuY29weSgpLmRvbWFpbih0LnJhbmdlKCkubWFwKHRoaXMuaW52ZXJ0WCwgdGhpcykubWFwKHQuaW52ZXJ0LCB0KSk7XG4gIH0sXG4gIHJlc2NhbGVZOiBmdW5jdGlvbih0KSB7XG4gICAgcmV0dXJuIHQuY29weSgpLmRvbWFpbih0LnJhbmdlKCkubWFwKHRoaXMuaW52ZXJ0WSwgdGhpcykubWFwKHQuaW52ZXJ0LCB0KSk7XG4gIH0sXG4gIHRvU3RyaW5nOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyB0aGlzLnggKyBcIixcIiArIHRoaXMueSArIFwiKSBzY2FsZShcIiArIHRoaXMuayArIFwiKVwiO1xuICB9XG59O1xudmFyIEdyID0gbmV3IE90KDEsIDAsIDApO1xuT3QucHJvdG90eXBlO1xuZnVuY3Rpb24gRGUodCkge1xuICB0LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xufVxuZnVuY3Rpb24gY24odCkge1xuICB0LnByZXZlbnREZWZhdWx0KCksIHQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG59XG5mdW5jdGlvbiBabCh0KSB7XG4gIHJldHVybiAoIXQuY3RybEtleSB8fCB0LnR5cGUgPT09IFwid2hlZWxcIikgJiYgIXQuYnV0dG9uO1xufVxuZnVuY3Rpb24gQmwoKSB7XG4gIHZhciB0ID0gdGhpcztcbiAgcmV0dXJuIHQgaW5zdGFuY2VvZiBTVkdFbGVtZW50ID8gKHQgPSB0Lm93bmVyU1ZHRWxlbWVudCB8fCB0LCB0Lmhhc0F0dHJpYnV0ZShcInZpZXdCb3hcIikgPyAodCA9IHQudmlld0JveC5iYXNlVmFsLCBbW3QueCwgdC55XSwgW3QueCArIHQud2lkdGgsIHQueSArIHQuaGVpZ2h0XV0pIDogW1swLCAwXSwgW3Qud2lkdGguYmFzZVZhbC52YWx1ZSwgdC5oZWlnaHQuYmFzZVZhbC52YWx1ZV1dKSA6IFtbMCwgMF0sIFt0LmNsaWVudFdpZHRoLCB0LmNsaWVudEhlaWdodF1dO1xufVxuZnVuY3Rpb24gcWkoKSB7XG4gIHJldHVybiB0aGlzLl9fem9vbSB8fCBHcjtcbn1cbmZ1bmN0aW9uIFlsKHQpIHtcbiAgcmV0dXJuIC10LmRlbHRhWSAqICh0LmRlbHRhTW9kZSA9PT0gMSA/IDAuMDUgOiB0LmRlbHRhTW9kZSA/IDEgOiAyZS0zKSAqICh0LmN0cmxLZXkgPyAxMCA6IDEpO1xufVxuZnVuY3Rpb24gV2woKSB7XG4gIHJldHVybiBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgfHwgXCJvbnRvdWNoc3RhcnRcIiBpbiB0aGlzO1xufVxuZnVuY3Rpb24gVWwodCwgbiwgZSkge1xuICB2YXIgciA9IHQuaW52ZXJ0WChuWzBdWzBdKSAtIGVbMF1bMF0sIGkgPSB0LmludmVydFgoblsxXVswXSkgLSBlWzFdWzBdLCBvID0gdC5pbnZlcnRZKG5bMF1bMV0pIC0gZVswXVsxXSwgdSA9IHQuaW52ZXJ0WShuWzFdWzFdKSAtIGVbMV1bMV07XG4gIHJldHVybiB0LnRyYW5zbGF0ZShcbiAgICBpID4gciA/IChyICsgaSkgLyAyIDogTWF0aC5taW4oMCwgcikgfHwgTWF0aC5tYXgoMCwgaSksXG4gICAgdSA+IG8gPyAobyArIHUpIC8gMiA6IE1hdGgubWluKDAsIG8pIHx8IE1hdGgubWF4KDAsIHUpXG4gICk7XG59XG5mdW5jdGlvbiBWbCgpIHtcbiAgdmFyIHQgPSBabCwgbiA9IEJsLCBlID0gVWwsIHIgPSBZbCwgaSA9IFdsLCBvID0gWzAsIDEgLyAwXSwgdSA9IFtbLTEgLyAwLCAtMSAvIDBdLCBbMSAvIDAsIDEgLyAwXV0sIGEgPSAyNTAsIGMgPSBNdSwgbCA9IGJyKFwic3RhcnRcIiwgXCJ6b29tXCIsIFwiZW5kXCIpLCBzLCBmLCBoLCBwID0gNTAwLCB2ID0gMTUwLCBFID0gMCwgUyA9IDEwO1xuICBmdW5jdGlvbiB5KGcpIHtcbiAgICBnLnByb3BlcnR5KFwiX196b29tXCIsIHFpKS5vbihcIndoZWVsLnpvb21cIiwgRiwgeyBwYXNzaXZlOiAhMSB9KS5vbihcIm1vdXNlZG93bi56b29tXCIsIEQpLm9uKFwiZGJsY2xpY2suem9vbVwiLCBiKS5maWx0ZXIoaSkub24oXCJ0b3VjaHN0YXJ0Lnpvb21cIiwgTCkub24oXCJ0b3VjaG1vdmUuem9vbVwiLCBHKS5vbihcInRvdWNoZW5kLnpvb20gdG91Y2hjYW5jZWwuem9vbVwiLCBCKS5zdHlsZShcIi13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvclwiLCBcInJnYmEoMCwwLDAsMClcIik7XG4gIH1cbiAgeS50cmFuc2Zvcm0gPSBmdW5jdGlvbihnLCBkLCB3LCAkKSB7XG4gICAgdmFyIGsgPSBnLnNlbGVjdGlvbiA/IGcuc2VsZWN0aW9uKCkgOiBnO1xuICAgIGsucHJvcGVydHkoXCJfX3pvb21cIiwgcWkpLCBnICE9PSBrID8geChnLCBkLCB3LCAkKSA6IGsuaW50ZXJydXB0KCkuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgIE4odGhpcywgYXJndW1lbnRzKS5ldmVudCgkKS5zdGFydCgpLnpvb20obnVsbCwgdHlwZW9mIGQgPT0gXCJmdW5jdGlvblwiID8gZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIDogZCkuZW5kKCk7XG4gICAgfSk7XG4gIH0sIHkuc2NhbGVCeSA9IGZ1bmN0aW9uKGcsIGQsIHcsICQpIHtcbiAgICB5LnNjYWxlVG8oZywgZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgayA9IHRoaXMuX196b29tLmssIFQgPSB0eXBlb2YgZCA9PSBcImZ1bmN0aW9uXCIgPyBkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgOiBkO1xuICAgICAgcmV0dXJuIGsgKiBUO1xuICAgIH0sIHcsICQpO1xuICB9LCB5LnNjYWxlVG8gPSBmdW5jdGlvbihnLCBkLCB3LCAkKSB7XG4gICAgeS50cmFuc2Zvcm0oZywgZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgayA9IG4uYXBwbHkodGhpcywgYXJndW1lbnRzKSwgVCA9IHRoaXMuX196b29tLCBJID0gdyA9PSBudWxsID8gXyhrKSA6IHR5cGVvZiB3ID09IFwiZnVuY3Rpb25cIiA/IHcuYXBwbHkodGhpcywgYXJndW1lbnRzKSA6IHcsIHEgPSBULmludmVydChJKSwgWiA9IHR5cGVvZiBkID09IFwiZnVuY3Rpb25cIiA/IGQuYXBwbHkodGhpcywgYXJndW1lbnRzKSA6IGQ7XG4gICAgICByZXR1cm4gZShtKE0oVCwgWiksIEksIHEpLCBrLCB1KTtcbiAgICB9LCB3LCAkKTtcbiAgfSwgeS50cmFuc2xhdGVCeSA9IGZ1bmN0aW9uKGcsIGQsIHcsICQpIHtcbiAgICB5LnRyYW5zZm9ybShnLCBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBlKHRoaXMuX196b29tLnRyYW5zbGF0ZShcbiAgICAgICAgdHlwZW9mIGQgPT0gXCJmdW5jdGlvblwiID8gZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIDogZCxcbiAgICAgICAgdHlwZW9mIHcgPT0gXCJmdW5jdGlvblwiID8gdy5hcHBseSh0aGlzLCBhcmd1bWVudHMpIDogd1xuICAgICAgKSwgbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpLCB1KTtcbiAgICB9LCBudWxsLCAkKTtcbiAgfSwgeS50cmFuc2xhdGVUbyA9IGZ1bmN0aW9uKGcsIGQsIHcsICQsIGspIHtcbiAgICB5LnRyYW5zZm9ybShnLCBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBUID0gbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpLCBJID0gdGhpcy5fX3pvb20sIHEgPSAkID09IG51bGwgPyBfKFQpIDogdHlwZW9mICQgPT0gXCJmdW5jdGlvblwiID8gJC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIDogJDtcbiAgICAgIHJldHVybiBlKEdyLnRyYW5zbGF0ZShxWzBdLCBxWzFdKS5zY2FsZShJLmspLnRyYW5zbGF0ZShcbiAgICAgICAgdHlwZW9mIGQgPT0gXCJmdW5jdGlvblwiID8gLWQuYXBwbHkodGhpcywgYXJndW1lbnRzKSA6IC1kLFxuICAgICAgICB0eXBlb2YgdyA9PSBcImZ1bmN0aW9uXCIgPyAtdy5hcHBseSh0aGlzLCBhcmd1bWVudHMpIDogLXdcbiAgICAgICksIFQsIHUpO1xuICAgIH0sICQsIGspO1xuICB9O1xuICBmdW5jdGlvbiBNKGcsIGQpIHtcbiAgICByZXR1cm4gZCA9IE1hdGgubWF4KG9bMF0sIE1hdGgubWluKG9bMV0sIGQpKSwgZCA9PT0gZy5rID8gZyA6IG5ldyBPdChkLCBnLngsIGcueSk7XG4gIH1cbiAgZnVuY3Rpb24gbShnLCBkLCB3KSB7XG4gICAgdmFyICQgPSBkWzBdIC0gd1swXSAqIGcuaywgayA9IGRbMV0gLSB3WzFdICogZy5rO1xuICAgIHJldHVybiAkID09PSBnLnggJiYgayA9PT0gZy55ID8gZyA6IG5ldyBPdChnLmssICQsIGspO1xuICB9XG4gIGZ1bmN0aW9uIF8oZykge1xuICAgIHJldHVybiBbKCtnWzBdWzBdICsgK2dbMV1bMF0pIC8gMiwgKCtnWzBdWzFdICsgK2dbMV1bMV0pIC8gMl07XG4gIH1cbiAgZnVuY3Rpb24geChnLCBkLCB3LCAkKSB7XG4gICAgZy5vbihcInN0YXJ0Lnpvb21cIiwgZnVuY3Rpb24oKSB7XG4gICAgICBOKHRoaXMsIGFyZ3VtZW50cykuZXZlbnQoJCkuc3RhcnQoKTtcbiAgICB9KS5vbihcImludGVycnVwdC56b29tIGVuZC56b29tXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgTih0aGlzLCBhcmd1bWVudHMpLmV2ZW50KCQpLmVuZCgpO1xuICAgIH0pLnR3ZWVuKFwiem9vbVwiLCBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBrID0gdGhpcywgVCA9IGFyZ3VtZW50cywgSSA9IE4oaywgVCkuZXZlbnQoJCksIHEgPSBuLmFwcGx5KGssIFQpLCBaID0gdyA9PSBudWxsID8gXyhxKSA6IHR5cGVvZiB3ID09IFwiZnVuY3Rpb25cIiA/IHcuYXBwbHkoaywgVCkgOiB3LCBVID0gTWF0aC5tYXgocVsxXVswXSAtIHFbMF1bMF0sIHFbMV1bMV0gLSBxWzBdWzFdKSwgWSA9IGsuX196b29tLCBWID0gdHlwZW9mIGQgPT0gXCJmdW5jdGlvblwiID8gZC5hcHBseShrLCBUKSA6IGQsIHB0ID0gYyhZLmludmVydChaKS5jb25jYXQoVSAvIFkuayksIFYuaW52ZXJ0KFopLmNvbmNhdChVIC8gVi5rKSk7XG4gICAgICByZXR1cm4gZnVuY3Rpb24odnQpIHtcbiAgICAgICAgaWYgKHZ0ID09PSAxKSB2dCA9IFY7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHZhciB5dCA9IHB0KHZ0KSwgdHQgPSBVIC8geXRbMl07XG4gICAgICAgICAgdnQgPSBuZXcgT3QodHQsIFpbMF0gLSB5dFswXSAqIHR0LCBaWzFdIC0geXRbMV0gKiB0dCk7XG4gICAgICAgIH1cbiAgICAgICAgSS56b29tKG51bGwsIHZ0KTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gTihnLCBkLCB3KSB7XG4gICAgcmV0dXJuICF3ICYmIGcuX196b29taW5nIHx8IG5ldyBDKGcsIGQpO1xuICB9XG4gIGZ1bmN0aW9uIEMoZywgZCkge1xuICAgIHRoaXMudGhhdCA9IGcsIHRoaXMuYXJncyA9IGQsIHRoaXMuYWN0aXZlID0gMCwgdGhpcy5zb3VyY2VFdmVudCA9IG51bGwsIHRoaXMuZXh0ZW50ID0gbi5hcHBseShnLCBkKSwgdGhpcy50YXBzID0gMDtcbiAgfVxuICBDLnByb3RvdHlwZSA9IHtcbiAgICBldmVudDogZnVuY3Rpb24oZykge1xuICAgICAgcmV0dXJuIGcgJiYgKHRoaXMuc291cmNlRXZlbnQgPSBnKSwgdGhpcztcbiAgICB9LFxuICAgIHN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiArK3RoaXMuYWN0aXZlID09PSAxICYmICh0aGlzLnRoYXQuX196b29taW5nID0gdGhpcywgdGhpcy5lbWl0KFwic3RhcnRcIikpLCB0aGlzO1xuICAgIH0sXG4gICAgem9vbTogZnVuY3Rpb24oZywgZCkge1xuICAgICAgcmV0dXJuIHRoaXMubW91c2UgJiYgZyAhPT0gXCJtb3VzZVwiICYmICh0aGlzLm1vdXNlWzFdID0gZC5pbnZlcnQodGhpcy5tb3VzZVswXSkpLCB0aGlzLnRvdWNoMCAmJiBnICE9PSBcInRvdWNoXCIgJiYgKHRoaXMudG91Y2gwWzFdID0gZC5pbnZlcnQodGhpcy50b3VjaDBbMF0pKSwgdGhpcy50b3VjaDEgJiYgZyAhPT0gXCJ0b3VjaFwiICYmICh0aGlzLnRvdWNoMVsxXSA9IGQuaW52ZXJ0KHRoaXMudG91Y2gxWzBdKSksIHRoaXMudGhhdC5fX3pvb20gPSBkLCB0aGlzLmVtaXQoXCJ6b29tXCIpLCB0aGlzO1xuICAgIH0sXG4gICAgZW5kOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAtLXRoaXMuYWN0aXZlID09PSAwICYmIChkZWxldGUgdGhpcy50aGF0Ll9fem9vbWluZywgdGhpcy5lbWl0KFwiZW5kXCIpKSwgdGhpcztcbiAgICB9LFxuICAgIGVtaXQ6IGZ1bmN0aW9uKGcpIHtcbiAgICAgIHZhciBkID0ganQodGhpcy50aGF0KS5kYXR1bSgpO1xuICAgICAgbC5jYWxsKFxuICAgICAgICBnLFxuICAgICAgICB0aGlzLnRoYXQsXG4gICAgICAgIG5ldyBHbChnLCB7XG4gICAgICAgICAgc291cmNlRXZlbnQ6IHRoaXMuc291cmNlRXZlbnQsXG4gICAgICAgICAgdGFyZ2V0OiB5LFxuICAgICAgICAgIHRyYW5zZm9ybTogdGhpcy50aGF0Ll9fem9vbSxcbiAgICAgICAgICBkaXNwYXRjaDogbFxuICAgICAgICB9KSxcbiAgICAgICAgZFxuICAgICAgKTtcbiAgICB9XG4gIH07XG4gIGZ1bmN0aW9uIEYoZywgLi4uZCkge1xuICAgIGlmICghdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSByZXR1cm47XG4gICAgdmFyIHcgPSBOKHRoaXMsIGQpLmV2ZW50KGcpLCAkID0gdGhpcy5fX3pvb20sIGsgPSBNYXRoLm1heChvWzBdLCBNYXRoLm1pbihvWzFdLCAkLmsgKiBNYXRoLnBvdygyLCByLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpKSksIFQgPSBYdChnKTtcbiAgICBpZiAody53aGVlbClcbiAgICAgICh3Lm1vdXNlWzBdWzBdICE9PSBUWzBdIHx8IHcubW91c2VbMF1bMV0gIT09IFRbMV0pICYmICh3Lm1vdXNlWzFdID0gJC5pbnZlcnQody5tb3VzZVswXSA9IFQpKSwgY2xlYXJUaW1lb3V0KHcud2hlZWwpO1xuICAgIGVsc2Uge1xuICAgICAgaWYgKCQuayA9PT0gaykgcmV0dXJuO1xuICAgICAgdy5tb3VzZSA9IFtULCAkLmludmVydChUKV0sIFZuKHRoaXMpLCB3LnN0YXJ0KCk7XG4gICAgfVxuICAgIGNuKGcpLCB3LndoZWVsID0gc2V0VGltZW91dChJLCB2KSwgdy56b29tKFwibW91c2VcIiwgZShtKE0oJCwgayksIHcubW91c2VbMF0sIHcubW91c2VbMV0pLCB3LmV4dGVudCwgdSkpO1xuICAgIGZ1bmN0aW9uIEkoKSB7XG4gICAgICB3LndoZWVsID0gbnVsbCwgdy5lbmQoKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gRChnLCAuLi5kKSB7XG4gICAgaWYgKGggfHwgIXQuYXBwbHkodGhpcywgYXJndW1lbnRzKSkgcmV0dXJuO1xuICAgIHZhciB3ID0gZy5jdXJyZW50VGFyZ2V0LCAkID0gTih0aGlzLCBkLCAhMCkuZXZlbnQoZyksIGsgPSBqdChnLnZpZXcpLm9uKFwibW91c2Vtb3ZlLnpvb21cIiwgWiwgITApLm9uKFwibW91c2V1cC56b29tXCIsIFUsICEwKSwgVCA9IFh0KGcsIHcpLCBJID0gZy5jbGllbnRYLCBxID0gZy5jbGllbnRZO1xuICAgIGtjKGcudmlldyksIERlKGcpLCAkLm1vdXNlID0gW1QsIHRoaXMuX196b29tLmludmVydChUKV0sIFZuKHRoaXMpLCAkLnN0YXJ0KCk7XG4gICAgZnVuY3Rpb24gWihZKSB7XG4gICAgICBpZiAoY24oWSksICEkLm1vdmVkKSB7XG4gICAgICAgIHZhciBWID0gWS5jbGllbnRYIC0gSSwgcHQgPSBZLmNsaWVudFkgLSBxO1xuICAgICAgICAkLm1vdmVkID0gViAqIFYgKyBwdCAqIHB0ID4gRTtcbiAgICAgIH1cbiAgICAgICQuZXZlbnQoWSkuem9vbShcIm1vdXNlXCIsIGUobSgkLnRoYXQuX196b29tLCAkLm1vdXNlWzBdID0gWHQoWSwgdyksICQubW91c2VbMV0pLCAkLmV4dGVudCwgdSkpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBVKFkpIHtcbiAgICAgIGsub24oXCJtb3VzZW1vdmUuem9vbSBtb3VzZXVwLnpvb21cIiwgbnVsbCksIFJjKFkudmlldywgJC5tb3ZlZCksIGNuKFkpLCAkLmV2ZW50KFkpLmVuZCgpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBiKGcsIC4uLmQpIHtcbiAgICBpZiAodC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSB7XG4gICAgICB2YXIgdyA9IHRoaXMuX196b29tLCAkID0gWHQoZy5jaGFuZ2VkVG91Y2hlcyA/IGcuY2hhbmdlZFRvdWNoZXNbMF0gOiBnLCB0aGlzKSwgayA9IHcuaW52ZXJ0KCQpLCBUID0gdy5rICogKGcuc2hpZnRLZXkgPyAwLjUgOiAyKSwgSSA9IGUobShNKHcsIFQpLCAkLCBrKSwgbi5hcHBseSh0aGlzLCBkKSwgdSk7XG4gICAgICBjbihnKSwgYSA+IDAgPyBqdCh0aGlzKS50cmFuc2l0aW9uKCkuZHVyYXRpb24oYSkuY2FsbCh4LCBJLCAkLCBnKSA6IGp0KHRoaXMpLmNhbGwoeS50cmFuc2Zvcm0sIEksICQsIGcpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBMKGcsIC4uLmQpIHtcbiAgICBpZiAodC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSB7XG4gICAgICB2YXIgdyA9IGcudG91Y2hlcywgJCA9IHcubGVuZ3RoLCBrID0gTih0aGlzLCBkLCBnLmNoYW5nZWRUb3VjaGVzLmxlbmd0aCA9PT0gJCkuZXZlbnQoZyksIFQsIEksIHEsIFo7XG4gICAgICBmb3IgKERlKGcpLCBJID0gMDsgSSA8ICQ7ICsrSSlcbiAgICAgICAgcSA9IHdbSV0sIFogPSBYdChxLCB0aGlzKSwgWiA9IFtaLCB0aGlzLl9fem9vbS5pbnZlcnQoWiksIHEuaWRlbnRpZmllcl0sIGsudG91Y2gwID8gIWsudG91Y2gxICYmIGsudG91Y2gwWzJdICE9PSBaWzJdICYmIChrLnRvdWNoMSA9IFosIGsudGFwcyA9IDApIDogKGsudG91Y2gwID0gWiwgVCA9ICEwLCBrLnRhcHMgPSAxICsgISFzKTtcbiAgICAgIHMgJiYgKHMgPSBjbGVhclRpbWVvdXQocykpLCBUICYmIChrLnRhcHMgPCAyICYmIChmID0gWlswXSwgcyA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHMgPSBudWxsO1xuICAgICAgfSwgcCkpLCBWbih0aGlzKSwgay5zdGFydCgpKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gRyhnLCAuLi5kKSB7XG4gICAgaWYgKHRoaXMuX196b29taW5nKSB7XG4gICAgICB2YXIgdyA9IE4odGhpcywgZCkuZXZlbnQoZyksICQgPSBnLmNoYW5nZWRUb3VjaGVzLCBrID0gJC5sZW5ndGgsIFQsIEksIHEsIFo7XG4gICAgICBmb3IgKGNuKGcpLCBUID0gMDsgVCA8IGs7ICsrVClcbiAgICAgICAgSSA9ICRbVF0sIHEgPSBYdChJLCB0aGlzKSwgdy50b3VjaDAgJiYgdy50b3VjaDBbMl0gPT09IEkuaWRlbnRpZmllciA/IHcudG91Y2gwWzBdID0gcSA6IHcudG91Y2gxICYmIHcudG91Y2gxWzJdID09PSBJLmlkZW50aWZpZXIgJiYgKHcudG91Y2gxWzBdID0gcSk7XG4gICAgICBpZiAoSSA9IHcudGhhdC5fX3pvb20sIHcudG91Y2gxKSB7XG4gICAgICAgIHZhciBVID0gdy50b3VjaDBbMF0sIFkgPSB3LnRvdWNoMFsxXSwgViA9IHcudG91Y2gxWzBdLCBwdCA9IHcudG91Y2gxWzFdLCB2dCA9ICh2dCA9IFZbMF0gLSBVWzBdKSAqIHZ0ICsgKHZ0ID0gVlsxXSAtIFVbMV0pICogdnQsIHl0ID0gKHl0ID0gcHRbMF0gLSBZWzBdKSAqIHl0ICsgKHl0ID0gcHRbMV0gLSBZWzFdKSAqIHl0O1xuICAgICAgICBJID0gTShJLCBNYXRoLnNxcnQodnQgLyB5dCkpLCBxID0gWyhVWzBdICsgVlswXSkgLyAyLCAoVVsxXSArIFZbMV0pIC8gMl0sIFogPSBbKFlbMF0gKyBwdFswXSkgLyAyLCAoWVsxXSArIHB0WzFdKSAvIDJdO1xuICAgICAgfSBlbHNlIGlmICh3LnRvdWNoMCkgcSA9IHcudG91Y2gwWzBdLCBaID0gdy50b3VjaDBbMV07XG4gICAgICBlbHNlIHJldHVybjtcbiAgICAgIHcuem9vbShcInRvdWNoXCIsIGUobShJLCBxLCBaKSwgdy5leHRlbnQsIHUpKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gQihnLCAuLi5kKSB7XG4gICAgaWYgKHRoaXMuX196b29taW5nKSB7XG4gICAgICB2YXIgdyA9IE4odGhpcywgZCkuZXZlbnQoZyksICQgPSBnLmNoYW5nZWRUb3VjaGVzLCBrID0gJC5sZW5ndGgsIFQsIEk7XG4gICAgICBmb3IgKERlKGcpLCBoICYmIGNsZWFyVGltZW91dChoKSwgaCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGggPSBudWxsO1xuICAgICAgfSwgcCksIFQgPSAwOyBUIDwgazsgKytUKVxuICAgICAgICBJID0gJFtUXSwgdy50b3VjaDAgJiYgdy50b3VjaDBbMl0gPT09IEkuaWRlbnRpZmllciA/IGRlbGV0ZSB3LnRvdWNoMCA6IHcudG91Y2gxICYmIHcudG91Y2gxWzJdID09PSBJLmlkZW50aWZpZXIgJiYgZGVsZXRlIHcudG91Y2gxO1xuICAgICAgaWYgKHcudG91Y2gxICYmICF3LnRvdWNoMCAmJiAody50b3VjaDAgPSB3LnRvdWNoMSwgZGVsZXRlIHcudG91Y2gxKSwgdy50b3VjaDApIHcudG91Y2gwWzFdID0gdGhpcy5fX3pvb20uaW52ZXJ0KHcudG91Y2gwWzBdKTtcbiAgICAgIGVsc2UgaWYgKHcuZW5kKCksIHcudGFwcyA9PT0gMiAmJiAoSSA9IFh0KEksIHRoaXMpLCBNYXRoLmh5cG90KGZbMF0gLSBJWzBdLCBmWzFdIC0gSVsxXSkgPCBTKSkge1xuICAgICAgICB2YXIgcSA9IGp0KHRoaXMpLm9uKFwiZGJsY2xpY2suem9vbVwiKTtcbiAgICAgICAgcSAmJiBxLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB5LndoZWVsRGVsdGEgPSBmdW5jdGlvbihnKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAociA9IHR5cGVvZiBnID09IFwiZnVuY3Rpb25cIiA/IGcgOiBYbigrZyksIHkpIDogcjtcbiAgfSwgeS5maWx0ZXIgPSBmdW5jdGlvbihnKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAodCA9IHR5cGVvZiBnID09IFwiZnVuY3Rpb25cIiA/IGcgOiBYbighIWcpLCB5KSA6IHQ7XG4gIH0sIHkudG91Y2hhYmxlID0gZnVuY3Rpb24oZykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGkgPSB0eXBlb2YgZyA9PSBcImZ1bmN0aW9uXCIgPyBnIDogWG4oISFnKSwgeSkgOiBpO1xuICB9LCB5LmV4dGVudCA9IGZ1bmN0aW9uKGcpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChuID0gdHlwZW9mIGcgPT0gXCJmdW5jdGlvblwiID8gZyA6IFhuKFtbK2dbMF1bMF0sICtnWzBdWzFdXSwgWytnWzFdWzBdLCArZ1sxXVsxXV1dKSwgeSkgOiBuO1xuICB9LCB5LnNjYWxlRXh0ZW50ID0gZnVuY3Rpb24oZykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKG9bMF0gPSArZ1swXSwgb1sxXSA9ICtnWzFdLCB5KSA6IFtvWzBdLCBvWzFdXTtcbiAgfSwgeS50cmFuc2xhdGVFeHRlbnQgPSBmdW5jdGlvbihnKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAodVswXVswXSA9ICtnWzBdWzBdLCB1WzFdWzBdID0gK2dbMV1bMF0sIHVbMF1bMV0gPSArZ1swXVsxXSwgdVsxXVsxXSA9ICtnWzFdWzFdLCB5KSA6IFtbdVswXVswXSwgdVswXVsxXV0sIFt1WzFdWzBdLCB1WzFdWzFdXV07XG4gIH0sIHkuY29uc3RyYWluID0gZnVuY3Rpb24oZykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGUgPSBnLCB5KSA6IGU7XG4gIH0sIHkuZHVyYXRpb24gPSBmdW5jdGlvbihnKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoYSA9ICtnLCB5KSA6IGE7XG4gIH0sIHkuaW50ZXJwb2xhdGUgPSBmdW5jdGlvbihnKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoYyA9IGcsIHkpIDogYztcbiAgfSwgeS5vbiA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBnID0gbC5vbi5hcHBseShsLCBhcmd1bWVudHMpO1xuICAgIHJldHVybiBnID09PSBsID8geSA6IGc7XG4gIH0sIHkuY2xpY2tEaXN0YW5jZSA9IGZ1bmN0aW9uKGcpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChFID0gKGcgPSArZykgKiBnLCB5KSA6IE1hdGguc3FydChFKTtcbiAgfSwgeS50YXBEaXN0YW5jZSA9IGZ1bmN0aW9uKGcpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChTID0gK2csIHkpIDogUztcbiAgfSwgeTtcbn1cbmZ1bmN0aW9uIEhsKHQsIG4pIHtcbiAgdmFyIGUgPSB0ID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCA8IFwidVwiICYmIHRbU3ltYm9sLml0ZXJhdG9yXSB8fCB0W1wiQEBpdGVyYXRvclwiXTtcbiAgaWYgKGUgIT0gbnVsbCkge1xuICAgIHZhciByLCBpLCBvLCB1LCBhID0gW10sIGMgPSAhMCwgbCA9ICExO1xuICAgIHRyeSB7XG4gICAgICBpZiAobyA9IChlID0gZS5jYWxsKHQpKS5uZXh0LCBuID09PSAwKSB7XG4gICAgICAgIGlmIChPYmplY3QoZSkgIT09IGUpIHJldHVybjtcbiAgICAgICAgYyA9ICExO1xuICAgICAgfSBlbHNlIGZvciAoOyAhKGMgPSAociA9IG8uY2FsbChlKSkuZG9uZSkgJiYgKGEucHVzaChyLnZhbHVlKSwgYS5sZW5ndGggIT09IG4pOyBjID0gITApIDtcbiAgICB9IGNhdGNoIChzKSB7XG4gICAgICBsID0gITAsIGkgPSBzO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIWMgJiYgZS5yZXR1cm4gIT0gbnVsbCAmJiAodSA9IGUucmV0dXJuKCksIE9iamVjdCh1KSAhPT0gdSkpIHJldHVybjtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChsKSB0aHJvdyBpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYTtcbiAgfVxufVxuZnVuY3Rpb24gamkodCwgbikge1xuICB2YXIgZSA9IE9iamVjdC5rZXlzKHQpO1xuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciByID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyh0KTtcbiAgICBuICYmIChyID0gci5maWx0ZXIoZnVuY3Rpb24oaSkge1xuICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodCwgaSkuZW51bWVyYWJsZTtcbiAgICB9KSksIGUucHVzaC5hcHBseShlLCByKTtcbiAgfVxuICByZXR1cm4gZTtcbn1cbmZ1bmN0aW9uIEt0KHQpIHtcbiAgZm9yICh2YXIgbiA9IDE7IG4gPCBhcmd1bWVudHMubGVuZ3RoOyBuKyspIHtcbiAgICB2YXIgZSA9IGFyZ3VtZW50c1tuXSAhPSBudWxsID8gYXJndW1lbnRzW25dIDoge307XG4gICAgbiAlIDIgPyBqaShPYmplY3QoZSksICEwKS5mb3JFYWNoKGZ1bmN0aW9uKHIpIHtcbiAgICAgIEtsKHQsIHIsIGVbcl0pO1xuICAgIH0pIDogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhlKSkgOiBqaShPYmplY3QoZSkpLmZvckVhY2goZnVuY3Rpb24ocikge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsIHIsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSwgcikpO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiB0O1xufVxuZnVuY3Rpb24gbXIodCkge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG4gIHJldHVybiBtciA9IHR5cGVvZiBTeW1ib2wgPT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uKG4pIHtcbiAgICByZXR1cm4gdHlwZW9mIG47XG4gIH0gOiBmdW5jdGlvbihuKSB7XG4gICAgcmV0dXJuIG4gJiYgdHlwZW9mIFN5bWJvbCA9PSBcImZ1bmN0aW9uXCIgJiYgbi5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG4gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG47XG4gIH0sIG1yKHQpO1xufVxuZnVuY3Rpb24gS2wodCwgbiwgZSkge1xuICByZXR1cm4gbiA9IHJmKG4pLCBuIGluIHQgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgbiwge1xuICAgIHZhbHVlOiBlLFxuICAgIGVudW1lcmFibGU6ICEwLFxuICAgIGNvbmZpZ3VyYWJsZTogITAsXG4gICAgd3JpdGFibGU6ICEwXG4gIH0pIDogdFtuXSA9IGUsIHQ7XG59XG5mdW5jdGlvbiBodCgpIHtcbiAgcmV0dXJuIGh0ID0gT2JqZWN0LmFzc2lnbiA/IE9iamVjdC5hc3NpZ24uYmluZCgpIDogZnVuY3Rpb24odCkge1xuICAgIGZvciAodmFyIG4gPSAxOyBuIDwgYXJndW1lbnRzLmxlbmd0aDsgbisrKSB7XG4gICAgICB2YXIgZSA9IGFyZ3VtZW50c1tuXTtcbiAgICAgIGZvciAodmFyIHIgaW4gZSlcbiAgICAgICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsIHIpICYmICh0W3JdID0gZVtyXSk7XG4gICAgfVxuICAgIHJldHVybiB0O1xuICB9LCBodC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuZnVuY3Rpb24gUWwodCwgbikge1xuICBpZiAodCA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciBlID0ge30sIHIgPSBPYmplY3Qua2V5cyh0KSwgaSwgbztcbiAgZm9yIChvID0gMDsgbyA8IHIubGVuZ3RoOyBvKyspXG4gICAgaSA9IHJbb10sICEobi5pbmRleE9mKGkpID49IDApICYmIChlW2ldID0gdFtpXSk7XG4gIHJldHVybiBlO1xufVxuZnVuY3Rpb24gRXQodCwgbikge1xuICBpZiAodCA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciBlID0gUWwodCwgbiksIHIsIGk7XG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIG8gPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHQpO1xuICAgIGZvciAoaSA9IDA7IGkgPCBvLmxlbmd0aDsgaSsrKVxuICAgICAgciA9IG9baV0sICEobi5pbmRleE9mKHIpID49IDApICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh0LCByKSAmJiAoZVtyXSA9IHRbcl0pO1xuICB9XG4gIHJldHVybiBlO1xufVxuZnVuY3Rpb24gcnQodCwgbikge1xuICByZXR1cm4gSmwodCkgfHwgSGwodCwgbikgfHwgdGYodCwgbikgfHwgbmYoKTtcbn1cbmZ1bmN0aW9uIEpsKHQpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodCkpIHJldHVybiB0O1xufVxuZnVuY3Rpb24gdGYodCwgbikge1xuICBpZiAodCkge1xuICAgIGlmICh0eXBlb2YgdCA9PSBcInN0cmluZ1wiKSByZXR1cm4gWGkodCwgbik7XG4gICAgdmFyIGUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodCkuc2xpY2UoOCwgLTEpO1xuICAgIGlmIChlID09PSBcIk9iamVjdFwiICYmIHQuY29uc3RydWN0b3IgJiYgKGUgPSB0LmNvbnN0cnVjdG9yLm5hbWUpLCBlID09PSBcIk1hcFwiIHx8IGUgPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKHQpO1xuICAgIGlmIChlID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KGUpKSByZXR1cm4gWGkodCwgbik7XG4gIH1cbn1cbmZ1bmN0aW9uIFhpKHQsIG4pIHtcbiAgKG4gPT0gbnVsbCB8fCBuID4gdC5sZW5ndGgpICYmIChuID0gdC5sZW5ndGgpO1xuICBmb3IgKHZhciBlID0gMCwgciA9IG5ldyBBcnJheShuKTsgZSA8IG47IGUrKykgcltlXSA9IHRbZV07XG4gIHJldHVybiByO1xufVxuZnVuY3Rpb24gbmYoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoYEludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuYCk7XG59XG5mdW5jdGlvbiBlZih0LCBuKSB7XG4gIGlmICh0eXBlb2YgdCAhPSBcIm9iamVjdFwiIHx8IHQgPT09IG51bGwpIHJldHVybiB0O1xuICB2YXIgZSA9IHRbU3ltYm9sLnRvUHJpbWl0aXZlXTtcbiAgaWYgKGUgIT09IHZvaWQgMCkge1xuICAgIHZhciByID0gZS5jYWxsKHQsIG4pO1xuICAgIGlmICh0eXBlb2YgciAhPSBcIm9iamVjdFwiKSByZXR1cm4gcjtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7XG4gIH1cbiAgcmV0dXJuIChuID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKSh0KTtcbn1cbmZ1bmN0aW9uIHJmKHQpIHtcbiAgdmFyIG4gPSBlZih0LCBcInN0cmluZ1wiKTtcbiAgcmV0dXJuIHR5cGVvZiBuID09IFwic3ltYm9sXCIgPyBuIDogU3RyaW5nKG4pO1xufVxudmFyIG9mID0gW1wid2lkdGhcIiwgXCJoZWlnaHRcIiwgXCJwcm9qZWN0aW9uXCIsIFwicHJvamVjdGlvbkNvbmZpZ1wiXSwgdWYgPSBrbywgYWYgPSBFdChxYSwgW1wiZ2VvUGF0aFwiXSksIGt0ID0gV2koKSwgc2YgPSBmdW5jdGlvbihuKSB7XG4gIHZhciBlID0gbi5wcm9qZWN0aW9uQ29uZmlnLCByID0gZSA9PT0gdm9pZCAwID8ge30gOiBlLCBpID0gbi5wcm9qZWN0aW9uLCBvID0gaSA9PT0gdm9pZCAwID8gXCJnZW9FcXVhbEVhcnRoXCIgOiBpLCB1ID0gbi53aWR0aCwgYSA9IHUgPT09IHZvaWQgMCA/IDgwMCA6IHUsIGMgPSBuLmhlaWdodCwgbCA9IGMgPT09IHZvaWQgMCA/IDYwMCA6IGMsIHMgPSB0eXBlb2YgbyA9PSBcImZ1bmN0aW9uXCI7XG4gIGlmIChzKSByZXR1cm4gbztcbiAgdmFyIGYgPSBhZltvXSgpLnRyYW5zbGF0ZShbYSAvIDIsIGwgLyAyXSksIGggPSBbZi5jZW50ZXIgPyBcImNlbnRlclwiIDogbnVsbCwgZi5yb3RhdGUgPyBcInJvdGF0ZVwiIDogbnVsbCwgZi5zY2FsZSA/IFwic2NhbGVcIiA6IG51bGwsIGYucGFyYWxsZWxzID8gXCJwYXJhbGxlbHNcIiA6IG51bGxdO1xuICByZXR1cm4gaC5mb3JFYWNoKGZ1bmN0aW9uKHApIHtcbiAgICBwICYmIChmID0gZltwXShyW3BdIHx8IGZbcF0oKSkpO1xuICB9KSwgZjtcbn0sIHJ1ID0gZnVuY3Rpb24obikge1xuICB2YXIgZSA9IG4ud2lkdGgsIHIgPSBuLmhlaWdodCwgaSA9IG4ucHJvamVjdGlvbiwgbyA9IG4ucHJvamVjdGlvbkNvbmZpZywgdSA9IEV0KG4sIG9mKSwgYSA9IG8uY2VudGVyIHx8IFtdLCBjID0gcnQoYSwgMiksIGwgPSBjWzBdLCBzID0gY1sxXSwgZiA9IG8ucm90YXRlIHx8IFtdLCBoID0gcnQoZiwgMyksIHAgPSBoWzBdLCB2ID0gaFsxXSwgRSA9IGhbMl0sIFMgPSBvLnBhcmFsbGVscyB8fCBbXSwgeSA9IHJ0KFMsIDIpLCBNID0geVswXSwgbSA9IHlbMV0sIF8gPSBvLnNjYWxlIHx8IG51bGwsIHggPSBIbihmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gc2Yoe1xuICAgICAgcHJvamVjdGlvbkNvbmZpZzoge1xuICAgICAgICBjZW50ZXI6IGwgfHwgbCA9PT0gMCB8fCBzIHx8IHMgPT09IDAgPyBbbCwgc10gOiBudWxsLFxuICAgICAgICByb3RhdGU6IHAgfHwgcCA9PT0gMCB8fCB2IHx8IHYgPT09IDAgPyBbcCwgdiwgRV0gOiBudWxsLFxuICAgICAgICBwYXJhbGxlbHM6IE0gfHwgTSA9PT0gMCB8fCBtIHx8IG0gPT09IDAgPyBbTSwgbV0gOiBudWxsLFxuICAgICAgICBzY2FsZTogX1xuICAgICAgfSxcbiAgICAgIHByb2plY3Rpb246IGksXG4gICAgICB3aWR0aDogZSxcbiAgICAgIGhlaWdodDogclxuICAgIH0pO1xuICB9LCBbZSwgciwgaSwgbCwgcywgcCwgdiwgRSwgTSwgbSwgX10pLCBOID0gZnUoeCwgW3hdKSwgQyA9IEhuKGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICB3aWR0aDogZSxcbiAgICAgIGhlaWdodDogcixcbiAgICAgIHByb2plY3Rpb246IE4sXG4gICAgICBwYXRoOiB1ZigpLnByb2plY3Rpb24oTilcbiAgICB9O1xuICB9LCBbZSwgciwgTl0pO1xuICByZXR1cm4gLyogQF9fUFVSRV9fICovIG50LmNyZWF0ZUVsZW1lbnQoa3QuUHJvdmlkZXIsIGh0KHtcbiAgICB2YWx1ZTogQ1xuICB9LCB1KSk7XG59O1xucnUucHJvcFR5cGVzID0ge1xuICB3aWR0aDogUC5udW1iZXIsXG4gIGhlaWdodDogUC5udW1iZXIsXG4gIHByb2plY3Rpb246IFAub25lT2ZUeXBlKFtQLnN0cmluZywgUC5mdW5jXSksXG4gIHByb2plY3Rpb25Db25maWc6IFAub2JqZWN0XG59O1xudmFyIGNmID0gW1wid2lkdGhcIiwgXCJoZWlnaHRcIiwgXCJwcm9qZWN0aW9uXCIsIFwicHJvamVjdGlvbkNvbmZpZ1wiLCBcImNsYXNzTmFtZVwiXSwgaXUgPSBJdChmdW5jdGlvbih0LCBuKSB7XG4gIHZhciBlID0gdC53aWR0aCwgciA9IGUgPT09IHZvaWQgMCA/IDgwMCA6IGUsIGkgPSB0LmhlaWdodCwgbyA9IGkgPT09IHZvaWQgMCA/IDYwMCA6IGksIHUgPSB0LnByb2plY3Rpb24sIGEgPSB1ID09PSB2b2lkIDAgPyBcImdlb0VxdWFsRWFydGhcIiA6IHUsIGMgPSB0LnByb2plY3Rpb25Db25maWcsIGwgPSBjID09PSB2b2lkIDAgPyB7fSA6IGMsIHMgPSB0LmNsYXNzTmFtZSwgZiA9IHMgPT09IHZvaWQgMCA/IFwiXCIgOiBzLCBoID0gRXQodCwgY2YpO1xuICByZXR1cm4gLyogQF9fUFVSRV9fICovIG50LmNyZWF0ZUVsZW1lbnQocnUsIHtcbiAgICB3aWR0aDogcixcbiAgICBoZWlnaHQ6IG8sXG4gICAgcHJvamVjdGlvbjogYSxcbiAgICBwcm9qZWN0aW9uQ29uZmlnOiBsXG4gIH0sIC8qIEBfX1BVUkVfXyAqLyBudC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIGh0KHtcbiAgICByZWY6IG4sXG4gICAgdmlld0JveDogXCIwIDAgXCIuY29uY2F0KHIsIFwiIFwiKS5jb25jYXQobyksXG4gICAgY2xhc3NOYW1lOiBcInJzbS1zdmcgXCIuY29uY2F0KGYpXG4gIH0sIGgpKSk7XG59KTtcbml1LmRpc3BsYXlOYW1lID0gXCJDb21wb3NhYmxlTWFwXCI7XG5pdS5wcm9wVHlwZXMgPSB7XG4gIHdpZHRoOiBQLm51bWJlcixcbiAgaGVpZ2h0OiBQLm51bWJlcixcbiAgcHJvamVjdGlvbjogUC5vbmVPZlR5cGUoW1Auc3RyaW5nLCBQLmZ1bmNdKSxcbiAgcHJvamVjdGlvbkNvbmZpZzogUC5vYmplY3QsXG4gIGNsYXNzTmFtZTogUC5zdHJpbmdcbn07XG5mdW5jdGlvbiBHaSh0KSB7XG4gIHJldHVybiBqdCh0KTtcbn1cbmZ1bmN0aW9uIFppKHQsIG4sIGUpIHtcbiAgdmFyIHIgPSAodCAqIGUuayAtIHQpIC8gMiwgaSA9IChuICogZS5rIC0gbikgLyAyO1xuICByZXR1cm4gW3QgLyAyIC0gKHIgKyBlLngpIC8gZS5rLCBuIC8gMiAtIChpICsgZS55KSAvIGUua107XG59XG5mdW5jdGlvbiBsZih0KSB7XG4gIHJldHVybiBmZXRjaCh0KS50aGVuKGZ1bmN0aW9uKG4pIHtcbiAgICBpZiAoIW4ub2spXG4gICAgICB0aHJvdyBFcnJvcihuLnN0YXR1c1RleHQpO1xuICAgIHJldHVybiBuLmpzb24oKTtcbiAgfSkuY2F0Y2goZnVuY3Rpb24obikge1xuICAgIGNvbnNvbGUubG9nKFwiVGhlcmUgd2FzIGEgcHJvYmxlbSB3aGVuIGZldGNoaW5nIHRoZSBkYXRhOiBcIiwgbik7XG4gIH0pO1xufVxuZnVuY3Rpb24gQmkodCwgbikge1xuICB2YXIgZSA9IHQudHlwZSA9PT0gXCJUb3BvbG9neVwiO1xuICBpZiAoIWUpXG4gICAgcmV0dXJuIG4gPyBuKHQuZmVhdHVyZXMgfHwgdCkgOiB0LmZlYXR1cmVzIHx8IHQ7XG4gIHZhciByID0gWmEodCwgdC5vYmplY3RzW09iamVjdC5rZXlzKHQub2JqZWN0cylbMF1dKS5mZWF0dXJlcztcbiAgcmV0dXJuIG4gPyBuKHIpIDogcjtcbn1cbmZ1bmN0aW9uIFlpKHQpIHtcbiAgdmFyIG4gPSB0LnR5cGUgPT09IFwiVG9wb2xvZ3lcIjtcbiAgaWYgKCFuKSByZXR1cm4gbnVsbDtcbiAgdmFyIGUgPSB6aSh0LCB0Lm9iamVjdHNbT2JqZWN0LmtleXModC5vYmplY3RzKVswXV0sIGZ1bmN0aW9uKGksIG8pIHtcbiAgICByZXR1cm4gaSA9PT0gbztcbiAgfSksIHIgPSB6aSh0LCB0Lm9iamVjdHNbT2JqZWN0LmtleXModC5vYmplY3RzKVswXV0sIGZ1bmN0aW9uKGksIG8pIHtcbiAgICByZXR1cm4gaSAhPT0gbztcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgb3V0bGluZTogZSxcbiAgICBib3JkZXJzOiByXG4gIH07XG59XG5mdW5jdGlvbiBmZih0LCBuLCBlKSB7XG4gIHJldHVybiB0ICYmIG4gPyB7XG4gICAgb3V0bGluZTogS3QoS3Qoe30sIHQpLCB7fSwge1xuICAgICAgcnNtS2V5OiBcIm91dGxpbmVcIixcbiAgICAgIHN2Z1BhdGg6IGUodClcbiAgICB9KSxcbiAgICBib3JkZXJzOiBLdChLdCh7fSwgbiksIHt9LCB7XG4gICAgICByc21LZXk6IFwiYm9yZGVyc1wiLFxuICAgICAgc3ZnUGF0aDogZShuKVxuICAgIH0pXG4gIH0gOiB7fTtcbn1cbmZ1bmN0aW9uIGhmKHQsIG4pIHtcbiAgcmV0dXJuIHQgPyB0Lm1hcChmdW5jdGlvbihlLCByKSB7XG4gICAgcmV0dXJuIEt0KEt0KHt9LCBlKSwge30sIHtcbiAgICAgIHJzbUtleTogXCJnZW8tXCIuY29uY2F0KHIpLFxuICAgICAgc3ZnUGF0aDogbihlKVxuICAgIH0pO1xuICB9KSA6IFtdO1xufVxuZnVuY3Rpb24gcGYoKSB7XG4gIHZhciB0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB2b2lkIDAgPyBhcmd1bWVudHNbMF0gOiAzMCwgbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdm9pZCAwID8gYXJndW1lbnRzWzFdIDogMzAsIGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHZvaWQgMCA/IGFyZ3VtZW50c1syXSA6IDAuNSwgciA9IEFycmF5LmlzQXJyYXkoZSkgPyBlIDogW2UsIGVdLCBpID0gdCAvIDIgKiByWzBdLCBvID0gbiAvIDIgKiByWzFdO1xuICByZXR1cm4gXCJNXCIuY29uY2F0KDAsIFwiLFwiLCAwLCBcIiBRXCIsIC10IC8gMiAtIGksIFwiLFwiKS5jb25jYXQoLW4gLyAyICsgbywgXCIgXCIpLmNvbmNhdCgtdCwgXCIsXCIpLmNvbmNhdCgtbik7XG59XG5mdW5jdGlvbiB2Zih0KSB7XG4gIHJldHVybiB0eXBlb2YgdCA9PSBcInN0cmluZ1wiO1xufVxuZnVuY3Rpb24gZ2YodCkge1xuICB2YXIgbiA9IHQuZ2VvZ3JhcGh5LCBlID0gdC5wYXJzZUdlb2dyYXBoaWVzLCByID0gRHQoa3QpLCBpID0gci5wYXRoLCBvID0gSnQoe30pLCB1ID0gcnQobywgMiksIGEgPSB1WzBdLCBjID0gdVsxXTtcbiAgYmUoZnVuY3Rpb24oKSB7XG4gICAgKHR5cGVvZiB3aW5kb3cgPiBcInVcIiA/IFwidW5kZWZpbmVkXCIgOiBtcih3aW5kb3cpKSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBuICYmICh2ZihuKSA/IGxmKG4pLnRoZW4oZnVuY3Rpb24ocCkge1xuICAgICAgcCAmJiBjKHtcbiAgICAgICAgZ2VvZ3JhcGhpZXM6IEJpKHAsIGUpLFxuICAgICAgICBtZXNoOiBZaShwKVxuICAgICAgfSk7XG4gICAgfSkgOiBjKHtcbiAgICAgIGdlb2dyYXBoaWVzOiBCaShuLCBlKSxcbiAgICAgIG1lc2g6IFlpKG4pXG4gICAgfSkpO1xuICB9LCBbbiwgZV0pO1xuICB2YXIgbCA9IEhuKGZ1bmN0aW9uKCkge1xuICAgIHZhciBwID0gYS5tZXNoIHx8IHt9LCB2ID0gZmYocC5vdXRsaW5lLCBwLmJvcmRlcnMsIGkpO1xuICAgIHJldHVybiB7XG4gICAgICBnZW9ncmFwaGllczogaGYoYS5nZW9ncmFwaGllcywgaSksXG4gICAgICBvdXRsaW5lOiB2Lm91dGxpbmUsXG4gICAgICBib3JkZXJzOiB2LmJvcmRlcnNcbiAgICB9O1xuICB9LCBbYSwgaV0pLCBzID0gbC5nZW9ncmFwaGllcywgZiA9IGwub3V0bGluZSwgaCA9IGwuYm9yZGVycztcbiAgcmV0dXJuIHtcbiAgICBnZW9ncmFwaGllczogcyxcbiAgICBvdXRsaW5lOiBmLFxuICAgIGJvcmRlcnM6IGhcbiAgfTtcbn1cbnZhciBkZiA9IFtcImdlb2dyYXBoeVwiLCBcImNoaWxkcmVuXCIsIFwicGFyc2VHZW9ncmFwaGllc1wiLCBcImNsYXNzTmFtZVwiXSwgb3UgPSBJdChmdW5jdGlvbih0LCBuKSB7XG4gIHZhciBlID0gdC5nZW9ncmFwaHksIHIgPSB0LmNoaWxkcmVuLCBpID0gdC5wYXJzZUdlb2dyYXBoaWVzLCBvID0gdC5jbGFzc05hbWUsIHUgPSBvID09PSB2b2lkIDAgPyBcIlwiIDogbywgYSA9IEV0KHQsIGRmKSwgYyA9IER0KGt0KSwgbCA9IGMucGF0aCwgcyA9IGMucHJvamVjdGlvbiwgZiA9IGdmKHtcbiAgICBnZW9ncmFwaHk6IGUsXG4gICAgcGFyc2VHZW9ncmFwaGllczogaVxuICB9KSwgaCA9IGYuZ2VvZ3JhcGhpZXMsIHAgPSBmLm91dGxpbmUsIHYgPSBmLmJvcmRlcnM7XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8gbnQuY3JlYXRlRWxlbWVudChcImdcIiwgaHQoe1xuICAgIHJlZjogbixcbiAgICBjbGFzc05hbWU6IFwicnNtLWdlb2dyYXBoaWVzIFwiLmNvbmNhdCh1KVxuICB9LCBhKSwgaCAmJiBoLmxlbmd0aCA+IDAgJiYgcih7XG4gICAgZ2VvZ3JhcGhpZXM6IGgsXG4gICAgb3V0bGluZTogcCxcbiAgICBib3JkZXJzOiB2LFxuICAgIHBhdGg6IGwsXG4gICAgcHJvamVjdGlvbjogc1xuICB9KSk7XG59KTtcbm91LmRpc3BsYXlOYW1lID0gXCJHZW9ncmFwaGllc1wiO1xub3UucHJvcFR5cGVzID0ge1xuICBnZW9ncmFwaHk6IFAub25lT2ZUeXBlKFtQLnN0cmluZywgUC5vYmplY3QsIFAuYXJyYXldKSxcbiAgY2hpbGRyZW46IFAuZnVuYyxcbiAgcGFyc2VHZW9ncmFwaGllczogUC5mdW5jLFxuICBjbGFzc05hbWU6IFAuc3RyaW5nXG59O1xudmFyIG1mID0gW1wiZ2VvZ3JhcGh5XCIsIFwib25Nb3VzZUVudGVyXCIsIFwib25Nb3VzZUxlYXZlXCIsIFwib25Nb3VzZURvd25cIiwgXCJvbk1vdXNlVXBcIiwgXCJvbkZvY3VzXCIsIFwib25CbHVyXCIsIFwic3R5bGVcIiwgXCJjbGFzc05hbWVcIl0sIFpyID0gSXQoZnVuY3Rpb24odCwgbikge1xuICB2YXIgZSA9IHQuZ2VvZ3JhcGh5LCByID0gdC5vbk1vdXNlRW50ZXIsIGkgPSB0Lm9uTW91c2VMZWF2ZSwgbyA9IHQub25Nb3VzZURvd24sIHUgPSB0Lm9uTW91c2VVcCwgYSA9IHQub25Gb2N1cywgYyA9IHQub25CbHVyLCBsID0gdC5zdHlsZSwgcyA9IGwgPT09IHZvaWQgMCA/IHt9IDogbCwgZiA9IHQuY2xhc3NOYW1lLCBoID0gZiA9PT0gdm9pZCAwID8gXCJcIiA6IGYsIHAgPSBFdCh0LCBtZiksIHYgPSBKdCghMSksIEUgPSBydCh2LCAyKSwgUyA9IEVbMF0sIHkgPSBFWzFdLCBNID0gSnQoITEpLCBtID0gcnQoTSwgMiksIF8gPSBtWzBdLCB4ID0gbVsxXTtcbiAgZnVuY3Rpb24gTihHKSB7XG4gICAgeCghMCksIHIgJiYgcihHKTtcbiAgfVxuICBmdW5jdGlvbiBDKEcpIHtcbiAgICB4KCExKSwgUyAmJiB5KCExKSwgaSAmJiBpKEcpO1xuICB9XG4gIGZ1bmN0aW9uIEYoRykge1xuICAgIHgoITApLCBhICYmIGEoRyk7XG4gIH1cbiAgZnVuY3Rpb24gRChHKSB7XG4gICAgeCghMSksIFMgJiYgeSghMSksIGMgJiYgYyhHKTtcbiAgfVxuICBmdW5jdGlvbiBiKEcpIHtcbiAgICB5KCEwKSwgbyAmJiBvKEcpO1xuICB9XG4gIGZ1bmN0aW9uIEwoRykge1xuICAgIHkoITEpLCB1ICYmIHUoRyk7XG4gIH1cbiAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBudC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCBodCh7XG4gICAgcmVmOiBuLFxuICAgIHRhYkluZGV4OiBcIjBcIixcbiAgICBjbGFzc05hbWU6IFwicnNtLWdlb2dyYXBoeSBcIi5jb25jYXQoaCksXG4gICAgZDogZS5zdmdQYXRoLFxuICAgIG9uTW91c2VFbnRlcjogTixcbiAgICBvbk1vdXNlTGVhdmU6IEMsXG4gICAgb25Gb2N1czogRixcbiAgICBvbkJsdXI6IEQsXG4gICAgb25Nb3VzZURvd246IGIsXG4gICAgb25Nb3VzZVVwOiBMLFxuICAgIHN0eWxlOiBzW1MgfHwgXyA/IFMgPyBcInByZXNzZWRcIiA6IFwiaG92ZXJcIiA6IFwiZGVmYXVsdFwiXVxuICB9LCBwKSk7XG59KTtcblpyLmRpc3BsYXlOYW1lID0gXCJHZW9ncmFwaHlcIjtcblpyLnByb3BUeXBlcyA9IHtcbiAgZ2VvZ3JhcGh5OiBQLm9iamVjdCxcbiAgb25Nb3VzZUVudGVyOiBQLmZ1bmMsXG4gIG9uTW91c2VMZWF2ZTogUC5mdW5jLFxuICBvbk1vdXNlRG93bjogUC5mdW5jLFxuICBvbk1vdXNlVXA6IFAuZnVuYyxcbiAgb25Gb2N1czogUC5mdW5jLFxuICBvbkJsdXI6IFAuZnVuYyxcbiAgc3R5bGU6IFAub2JqZWN0LFxuICBjbGFzc05hbWU6IFAuc3RyaW5nXG59O1xudmFyIFJmID0geXIoWnIpLCB5ZiA9IFtcImZpbGxcIiwgXCJzdHJva2VcIiwgXCJzdGVwXCIsIFwiY2xhc3NOYW1lXCJdLCBCciA9IEl0KGZ1bmN0aW9uKHQsIG4pIHtcbiAgdmFyIGUgPSB0LmZpbGwsIHIgPSBlID09PSB2b2lkIDAgPyBcInRyYW5zcGFyZW50XCIgOiBlLCBpID0gdC5zdHJva2UsIG8gPSBpID09PSB2b2lkIDAgPyBcImN1cnJlbnRjb2xvclwiIDogaSwgdSA9IHQuc3RlcCwgYSA9IHUgPT09IHZvaWQgMCA/IFsxMCwgMTBdIDogdSwgYyA9IHQuY2xhc3NOYW1lLCBsID0gYyA9PT0gdm9pZCAwID8gXCJcIiA6IGMsIHMgPSBFdCh0LCB5ZiksIGYgPSBEdChrdCksIGggPSBmLnBhdGg7XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8gbnQuY3JlYXRlRWxlbWVudChcInBhdGhcIiwgaHQoe1xuICAgIHJlZjogbixcbiAgICBkOiBoKFNyKCkuc3RlcChhKSgpKSxcbiAgICBmaWxsOiByLFxuICAgIHN0cm9rZTogbyxcbiAgICBjbGFzc05hbWU6IFwicnNtLWdyYXRpY3VsZSBcIi5jb25jYXQobClcbiAgfSwgcykpO1xufSk7XG5Cci5kaXNwbGF5TmFtZSA9IFwiR3JhdGljdWxlXCI7XG5Cci5wcm9wVHlwZXMgPSB7XG4gIGZpbGw6IFAuc3RyaW5nLFxuICBzdHJva2U6IFAuc3RyaW5nLFxuICBzdGVwOiBQLmFycmF5LFxuICBjbGFzc05hbWU6IFAuc3RyaW5nXG59O1xueXIoQnIpO1xudmFyIHdmID0gW1widmFsdWVcIl0sIF9mID0gV2koKSwgRWYgPSB7XG4gIHg6IDAsXG4gIHk6IDAsXG4gIGs6IDEsXG4gIHRyYW5zZm9ybVN0cmluZzogXCJ0cmFuc2xhdGUoMCAwKSBzY2FsZSgxKVwiXG59LCB1dSA9IGZ1bmN0aW9uKG4pIHtcbiAgdmFyIGUgPSBuLnZhbHVlLCByID0gZSA9PT0gdm9pZCAwID8gRWYgOiBlLCBpID0gRXQobiwgd2YpO1xuICByZXR1cm4gLyogQF9fUFVSRV9fICovIG50LmNyZWF0ZUVsZW1lbnQoX2YuUHJvdmlkZXIsIGh0KHtcbiAgICB2YWx1ZTogclxuICB9LCBpKSk7XG59O1xudXUucHJvcFR5cGVzID0ge1xuICB4OiBQLm51bWJlcixcbiAgeTogUC5udW1iZXIsXG4gIGs6IFAubnVtYmVyLFxuICB0cmFuc2Zvcm1TdHJpbmc6IFAuc3RyaW5nXG59O1xuZnVuY3Rpb24gU2YodCkge1xuICB2YXIgbiA9IHQuY2VudGVyLCBlID0gdC5maWx0ZXJab29tRXZlbnQsIHIgPSB0Lm9uTW92ZVN0YXJ0LCBpID0gdC5vbk1vdmVFbmQsIG8gPSB0Lm9uTW92ZSwgdSA9IHQudHJhbnNsYXRlRXh0ZW50LCBhID0gdSA9PT0gdm9pZCAwID8gW1stMSAvIDAsIC0xIC8gMF0sIFsxIC8gMCwgMSAvIDBdXSA6IHUsIGMgPSB0LnNjYWxlRXh0ZW50LCBsID0gYyA9PT0gdm9pZCAwID8gWzEsIDhdIDogYywgcyA9IHQuem9vbSwgZiA9IHMgPT09IHZvaWQgMCA/IDEgOiBzLCBoID0gRHQoa3QpLCBwID0gaC53aWR0aCwgdiA9IGguaGVpZ2h0LCBFID0gaC5wcm9qZWN0aW9uLCBTID0gcnQobiwgMiksIHkgPSBTWzBdLCBNID0gU1sxXSwgbSA9IEp0KHtcbiAgICB4OiAwLFxuICAgIHk6IDAsXG4gICAgazogMVxuICB9KSwgXyA9IHJ0KG0sIDIpLCB4ID0gX1swXSwgTiA9IF9bMV0sIEMgPSBPbih7XG4gICAgeDogMCxcbiAgICB5OiAwLFxuICAgIGs6IDFcbiAgfSksIEYgPSBPbigpLCBEID0gT24oKSwgYiA9IE9uKCExKSwgTCA9IHJ0KGEsIDIpLCBHID0gTFswXSwgQiA9IExbMV0sIGcgPSBydChHLCAyKSwgZCA9IGdbMF0sIHcgPSBnWzFdLCAkID0gcnQoQiwgMiksIGsgPSAkWzBdLCBUID0gJFsxXSwgSSA9IHJ0KGwsIDIpLCBxID0gSVswXSwgWiA9IElbMV07XG4gIHJldHVybiBiZShmdW5jdGlvbigpIHtcbiAgICB2YXIgVSA9IEdpKEYuY3VycmVudCk7XG4gICAgZnVuY3Rpb24gWSh0dCkge1xuICAgICAgIXIgfHwgYi5jdXJyZW50IHx8IHIoe1xuICAgICAgICBjb29yZGluYXRlczogRS5pbnZlcnQoWmkocCwgdiwgdHQudHJhbnNmb3JtKSksXG4gICAgICAgIHpvb206IHR0LnRyYW5zZm9ybS5rXG4gICAgICB9LCB0dCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIFYodHQpIHtcbiAgICAgIGlmICghYi5jdXJyZW50KSB7XG4gICAgICAgIHZhciBidCA9IHR0LnRyYW5zZm9ybSwgYW4gPSB0dC5zb3VyY2VFdmVudDtcbiAgICAgICAgTih7XG4gICAgICAgICAgeDogYnQueCxcbiAgICAgICAgICB5OiBidC55LFxuICAgICAgICAgIGs6IGJ0LmssXG4gICAgICAgICAgZHJhZ2dpbmc6IGFuXG4gICAgICAgIH0pLCBvICYmIG8oe1xuICAgICAgICAgIHg6IGJ0LngsXG4gICAgICAgICAgeTogYnQueSxcbiAgICAgICAgICB6b29tOiBidC5rLFxuICAgICAgICAgIGRyYWdnaW5nOiBhblxuICAgICAgICB9LCB0dCk7XG4gICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHB0KHR0KSB7XG4gICAgICBpZiAoYi5jdXJyZW50KSB7XG4gICAgICAgIGIuY3VycmVudCA9ICExO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgYnQgPSBFLmludmVydChaaShwLCB2LCB0dC50cmFuc2Zvcm0pKSwgYW4gPSBydChidCwgMiksIFdyID0gYW5bMF0sIFVyID0gYW5bMV07XG4gICAgICBDLmN1cnJlbnQgPSB7XG4gICAgICAgIHg6IFdyLFxuICAgICAgICB5OiBVcixcbiAgICAgICAgazogdHQudHJhbnNmb3JtLmtcbiAgICAgIH0sIGkgJiYgaSh7XG4gICAgICAgIGNvb3JkaW5hdGVzOiBbV3IsIFVyXSxcbiAgICAgICAgem9vbTogdHQudHJhbnNmb3JtLmtcbiAgICAgIH0sIHR0KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdnQodHQpIHtcbiAgICAgIHJldHVybiBlID8gZSh0dCkgOiB0dCA/ICF0dC5jdHJsS2V5ICYmICF0dC5idXR0b24gOiAhMTtcbiAgICB9XG4gICAgdmFyIHl0ID0gVmwoKS5maWx0ZXIodnQpLnNjYWxlRXh0ZW50KFtxLCBaXSkudHJhbnNsYXRlRXh0ZW50KFtbZCwgd10sIFtrLCBUXV0pLm9uKFwic3RhcnRcIiwgWSkub24oXCJ6b29tXCIsIFYpLm9uKFwiZW5kXCIsIHB0KTtcbiAgICBELmN1cnJlbnQgPSB5dCwgVS5jYWxsKHl0KTtcbiAgfSwgW3AsIHYsIGQsIHcsIGssIFQsIHEsIFosIEUsIHIsIG8sIGksIGVdKSwgYmUoZnVuY3Rpb24oKSB7XG4gICAgaWYgKCEoeSA9PT0gQy5jdXJyZW50LnggJiYgTSA9PT0gQy5jdXJyZW50LnkgJiYgZiA9PT0gQy5jdXJyZW50LmspKSB7XG4gICAgICB2YXIgVSA9IEUoW3ksIE1dKSwgWSA9IFVbMF0gKiBmLCBWID0gVVsxXSAqIGYsIHB0ID0gR2koRi5jdXJyZW50KTtcbiAgICAgIGIuY3VycmVudCA9ICEwLCBwdC5jYWxsKEQuY3VycmVudC50cmFuc2Zvcm0sIEdyLnRyYW5zbGF0ZShwIC8gMiAtIFksIHYgLyAyIC0gVikuc2NhbGUoZikpLCBOKHtcbiAgICAgICAgeDogcCAvIDIgLSBZLFxuICAgICAgICB5OiB2IC8gMiAtIFYsXG4gICAgICAgIGs6IGZcbiAgICAgIH0pLCBDLmN1cnJlbnQgPSB7XG4gICAgICAgIHg6IHksXG4gICAgICAgIHk6IE0sXG4gICAgICAgIGs6IGZcbiAgICAgIH07XG4gICAgfVxuICB9LCBbeSwgTSwgZiwgcCwgdiwgRV0pLCB7XG4gICAgbWFwUmVmOiBGLFxuICAgIHBvc2l0aW9uOiB4LFxuICAgIHRyYW5zZm9ybVN0cmluZzogXCJ0cmFuc2xhdGUoXCIuY29uY2F0KHgueCwgXCIgXCIpLmNvbmNhdCh4LnksIFwiKSBzY2FsZShcIikuY29uY2F0KHguaywgXCIpXCIpXG4gIH07XG59XG52YXIgTWYgPSBbXCJjZW50ZXJcIiwgXCJ6b29tXCIsIFwibWluWm9vbVwiLCBcIm1heFpvb21cIiwgXCJ0cmFuc2xhdGVFeHRlbnRcIiwgXCJmaWx0ZXJab29tRXZlbnRcIiwgXCJvbk1vdmVTdGFydFwiLCBcIm9uTW92ZVwiLCBcIm9uTW92ZUVuZFwiLCBcImNsYXNzTmFtZVwiXSwgYXUgPSBJdChmdW5jdGlvbih0LCBuKSB7XG4gIHZhciBlID0gdC5jZW50ZXIsIHIgPSBlID09PSB2b2lkIDAgPyBbMCwgMF0gOiBlLCBpID0gdC56b29tLCBvID0gaSA9PT0gdm9pZCAwID8gMSA6IGksIHUgPSB0Lm1pblpvb20sIGEgPSB1ID09PSB2b2lkIDAgPyAxIDogdSwgYyA9IHQubWF4Wm9vbSwgbCA9IGMgPT09IHZvaWQgMCA/IDggOiBjLCBzID0gdC50cmFuc2xhdGVFeHRlbnQsIGYgPSB0LmZpbHRlclpvb21FdmVudCwgaCA9IHQub25Nb3ZlU3RhcnQsIHAgPSB0Lm9uTW92ZSwgdiA9IHQub25Nb3ZlRW5kLCBFID0gdC5jbGFzc05hbWUsIFMgPSBFdCh0LCBNZiksIHkgPSBEdChrdCksIE0gPSB5LndpZHRoLCBtID0geS5oZWlnaHQsIF8gPSBTZih7XG4gICAgY2VudGVyOiByLFxuICAgIGZpbHRlclpvb21FdmVudDogZixcbiAgICBvbk1vdmVTdGFydDogaCxcbiAgICBvbk1vdmU6IHAsXG4gICAgb25Nb3ZlRW5kOiB2LFxuICAgIHNjYWxlRXh0ZW50OiBbYSwgbF0sXG4gICAgdHJhbnNsYXRlRXh0ZW50OiBzLFxuICAgIHpvb206IG9cbiAgfSksIHggPSBfLm1hcFJlZiwgTiA9IF8udHJhbnNmb3JtU3RyaW5nLCBDID0gXy5wb3NpdGlvbjtcbiAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBudC5jcmVhdGVFbGVtZW50KHV1LCB7XG4gICAgdmFsdWU6IHtcbiAgICAgIHg6IEMueCxcbiAgICAgIHk6IEMueSxcbiAgICAgIGs6IEMuayxcbiAgICAgIHRyYW5zZm9ybVN0cmluZzogTlxuICAgIH1cbiAgfSwgLyogQF9fUFVSRV9fICovIG50LmNyZWF0ZUVsZW1lbnQoXCJnXCIsIHtcbiAgICByZWY6IHhcbiAgfSwgLyogQF9fUFVSRV9fICovIG50LmNyZWF0ZUVsZW1lbnQoXCJyZWN0XCIsIHtcbiAgICB3aWR0aDogTSxcbiAgICBoZWlnaHQ6IG0sXG4gICAgZmlsbDogXCJ0cmFuc3BhcmVudFwiXG4gIH0pLCAvKiBAX19QVVJFX18gKi8gbnQuY3JlYXRlRWxlbWVudChcImdcIiwgaHQoe1xuICAgIHJlZjogbixcbiAgICB0cmFuc2Zvcm06IE4sXG4gICAgY2xhc3NOYW1lOiBcInJzbS16b29tYWJsZS1ncm91cCBcIi5jb25jYXQoRSlcbiAgfSwgUykpKSk7XG59KTtcbmF1LmRpc3BsYXlOYW1lID0gXCJab29tYWJsZUdyb3VwXCI7XG5hdS5wcm9wVHlwZXMgPSB7XG4gIGNlbnRlcjogUC5hcnJheSxcbiAgem9vbTogUC5udW1iZXIsXG4gIG1pblpvb206IFAubnVtYmVyLFxuICBtYXhab29tOiBQLm51bWJlcixcbiAgdHJhbnNsYXRlRXh0ZW50OiBQLmFycmF5T2YoUC5hcnJheSksXG4gIG9uTW92ZVN0YXJ0OiBQLmZ1bmMsXG4gIG9uTW92ZTogUC5mdW5jLFxuICBvbk1vdmVFbmQ6IFAuZnVuYyxcbiAgY2xhc3NOYW1lOiBQLnN0cmluZ1xufTtcbnZhciB4ZiA9IFtcImlkXCIsIFwiZmlsbFwiLCBcInN0cm9rZVwiLCBcInN0cm9rZVdpZHRoXCIsIFwiY2xhc3NOYW1lXCJdLCBZciA9IEl0KGZ1bmN0aW9uKHQsIG4pIHtcbiAgdmFyIGUgPSB0LmlkLCByID0gZSA9PT0gdm9pZCAwID8gXCJyc20tc3BoZXJlXCIgOiBlLCBpID0gdC5maWxsLCBvID0gaSA9PT0gdm9pZCAwID8gXCJ0cmFuc3BhcmVudFwiIDogaSwgdSA9IHQuc3Ryb2tlLCBhID0gdSA9PT0gdm9pZCAwID8gXCJjdXJyZW50Y29sb3JcIiA6IHUsIGMgPSB0LnN0cm9rZVdpZHRoLCBsID0gYyA9PT0gdm9pZCAwID8gMC41IDogYywgcyA9IHQuY2xhc3NOYW1lLCBmID0gcyA9PT0gdm9pZCAwID8gXCJcIiA6IHMsIGggPSBFdCh0LCB4ZiksIHAgPSBEdChrdCksIHYgPSBwLnBhdGgsIEUgPSBIbihmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdih7XG4gICAgICB0eXBlOiBcIlNwaGVyZVwiXG4gICAgfSk7XG4gIH0sIFt2XSk7XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8gbnQuY3JlYXRlRWxlbWVudChodSwgbnVsbCwgLyogQF9fUFVSRV9fICovIG50LmNyZWF0ZUVsZW1lbnQoXCJkZWZzXCIsIG51bGwsIC8qIEBfX1BVUkVfXyAqLyBudC5jcmVhdGVFbGVtZW50KFwiY2xpcFBhdGhcIiwge1xuICAgIGlkOiByXG4gIH0sIC8qIEBfX1BVUkVfXyAqLyBudC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogRVxuICB9KSkpLCAvKiBAX19QVVJFX18gKi8gbnQuY3JlYXRlRWxlbWVudChcInBhdGhcIiwgaHQoe1xuICAgIHJlZjogbixcbiAgICBkOiBFLFxuICAgIGZpbGw6IG8sXG4gICAgc3Ryb2tlOiBhLFxuICAgIHN0cm9rZVdpZHRoOiBsLFxuICAgIHN0eWxlOiB7XG4gICAgICBwb2ludGVyRXZlbnRzOiBcIm5vbmVcIlxuICAgIH0sXG4gICAgY2xhc3NOYW1lOiBcInJzbS1zcGhlcmUgXCIuY29uY2F0KGYpXG4gIH0sIGgpKSk7XG59KTtcbllyLmRpc3BsYXlOYW1lID0gXCJTcGhlcmVcIjtcbllyLnByb3BUeXBlcyA9IHtcbiAgaWQ6IFAuc3RyaW5nLFxuICBmaWxsOiBQLnN0cmluZyxcbiAgc3Ryb2tlOiBQLnN0cmluZyxcbiAgc3Ryb2tlV2lkdGg6IFAubnVtYmVyLFxuICBjbGFzc05hbWU6IFAuc3RyaW5nXG59O1xueXIoWXIpO1xudmFyIFBmID0gW1wiY29vcmRpbmF0ZXNcIiwgXCJjaGlsZHJlblwiLCBcIm9uTW91c2VFbnRlclwiLCBcIm9uTW91c2VMZWF2ZVwiLCBcIm9uTW91c2VEb3duXCIsIFwib25Nb3VzZVVwXCIsIFwib25Gb2N1c1wiLCBcIm9uQmx1clwiLCBcInN0eWxlXCIsIFwiY2xhc3NOYW1lXCJdLCBzdSA9IEl0KGZ1bmN0aW9uKHQsIG4pIHtcbiAgdmFyIGUgPSB0LmNvb3JkaW5hdGVzLCByID0gdC5jaGlsZHJlbiwgaSA9IHQub25Nb3VzZUVudGVyLCBvID0gdC5vbk1vdXNlTGVhdmUsIHUgPSB0Lm9uTW91c2VEb3duLCBhID0gdC5vbk1vdXNlVXAsIGMgPSB0Lm9uRm9jdXMsIGwgPSB0Lm9uQmx1ciwgcyA9IHQuc3R5bGUsIGYgPSBzID09PSB2b2lkIDAgPyB7fSA6IHMsIGggPSB0LmNsYXNzTmFtZSwgcCA9IGggPT09IHZvaWQgMCA/IFwiXCIgOiBoLCB2ID0gRXQodCwgUGYpLCBFID0gRHQoa3QpLCBTID0gRS5wcm9qZWN0aW9uLCB5ID0gSnQoITEpLCBNID0gcnQoeSwgMiksIG0gPSBNWzBdLCBfID0gTVsxXSwgeCA9IEp0KCExKSwgTiA9IHJ0KHgsIDIpLCBDID0gTlswXSwgRiA9IE5bMV0sIEQgPSBTKGUpLCBiID0gcnQoRCwgMiksIEwgPSBiWzBdLCBHID0gYlsxXTtcbiAgZnVuY3Rpb24gQihUKSB7XG4gICAgRighMCksIGkgJiYgaShUKTtcbiAgfVxuICBmdW5jdGlvbiBnKFQpIHtcbiAgICBGKCExKSwgbSAmJiBfKCExKSwgbyAmJiBvKFQpO1xuICB9XG4gIGZ1bmN0aW9uIGQoVCkge1xuICAgIEYoITApLCBjICYmIGMoVCk7XG4gIH1cbiAgZnVuY3Rpb24gdyhUKSB7XG4gICAgRighMSksIG0gJiYgXyghMSksIGwgJiYgbChUKTtcbiAgfVxuICBmdW5jdGlvbiAkKFQpIHtcbiAgICBfKCEwKSwgdSAmJiB1KFQpO1xuICB9XG4gIGZ1bmN0aW9uIGsoVCkge1xuICAgIF8oITEpLCBhICYmIGEoVCk7XG4gIH1cbiAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBudC5jcmVhdGVFbGVtZW50KFwiZ1wiLCBodCh7XG4gICAgcmVmOiBuLFxuICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoXCIuY29uY2F0KEwsIFwiLCBcIikuY29uY2F0KEcsIFwiKVwiKSxcbiAgICBjbGFzc05hbWU6IFwicnNtLW1hcmtlciBcIi5jb25jYXQocCksXG4gICAgb25Nb3VzZUVudGVyOiBCLFxuICAgIG9uTW91c2VMZWF2ZTogZyxcbiAgICBvbkZvY3VzOiBkLFxuICAgIG9uQmx1cjogdyxcbiAgICBvbk1vdXNlRG93bjogJCxcbiAgICBvbk1vdXNlVXA6IGssXG4gICAgc3R5bGU6IGZbbSB8fCBDID8gbSA/IFwicHJlc3NlZFwiIDogXCJob3ZlclwiIDogXCJkZWZhdWx0XCJdXG4gIH0sIHYpLCByKTtcbn0pO1xuc3UuZGlzcGxheU5hbWUgPSBcIk1hcmtlclwiO1xuc3UucHJvcFR5cGVzID0ge1xuICBjb29yZGluYXRlczogUC5hcnJheSxcbiAgY2hpbGRyZW46IFAub25lT2ZUeXBlKFtQLm5vZGUsIFAuYXJyYXlPZihQLm5vZGUpXSksXG4gIG9uTW91c2VFbnRlcjogUC5mdW5jLFxuICBvbk1vdXNlTGVhdmU6IFAuZnVuYyxcbiAgb25Nb3VzZURvd246IFAuZnVuYyxcbiAgb25Nb3VzZVVwOiBQLmZ1bmMsXG4gIG9uRm9jdXM6IFAuZnVuYyxcbiAgb25CbHVyOiBQLmZ1bmMsXG4gIHN0eWxlOiBQLm9iamVjdCxcbiAgY2xhc3NOYW1lOiBQLnN0cmluZ1xufTtcbnZhciBOZiA9IFtcImZyb21cIiwgXCJ0b1wiLCBcImNvb3JkaW5hdGVzXCIsIFwic3Ryb2tlXCIsIFwic3Ryb2tlV2lkdGhcIiwgXCJmaWxsXCIsIFwiY2xhc3NOYW1lXCJdLCBjdSA9IEl0KGZ1bmN0aW9uKHQsIG4pIHtcbiAgdmFyIGUgPSB0LmZyb20sIHIgPSBlID09PSB2b2lkIDAgPyBbMCwgMF0gOiBlLCBpID0gdC50bywgbyA9IGkgPT09IHZvaWQgMCA/IFswLCAwXSA6IGksIHUgPSB0LmNvb3JkaW5hdGVzLCBhID0gdC5zdHJva2UsIGMgPSBhID09PSB2b2lkIDAgPyBcImN1cnJlbnRjb2xvclwiIDogYSwgbCA9IHQuc3Ryb2tlV2lkdGgsIHMgPSBsID09PSB2b2lkIDAgPyAzIDogbCwgZiA9IHQuZmlsbCwgaCA9IGYgPT09IHZvaWQgMCA/IFwidHJhbnNwYXJlbnRcIiA6IGYsIHAgPSB0LmNsYXNzTmFtZSwgdiA9IHAgPT09IHZvaWQgMCA/IFwiXCIgOiBwLCBFID0gRXQodCwgTmYpLCBTID0gRHQoa3QpLCB5ID0gUy5wYXRoLCBNID0ge1xuICAgIHR5cGU6IFwiTGluZVN0cmluZ1wiLFxuICAgIGNvb3JkaW5hdGVzOiB1IHx8IFtyLCBvXVxuICB9O1xuICByZXR1cm4gLyogQF9fUFVSRV9fICovIG50LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIGh0KHtcbiAgICByZWY6IG4sXG4gICAgZDogeShNKSxcbiAgICBjbGFzc05hbWU6IFwicnNtLWxpbmUgXCIuY29uY2F0KHYpLFxuICAgIHN0cm9rZTogYyxcbiAgICBzdHJva2VXaWR0aDogcyxcbiAgICBmaWxsOiBoXG4gIH0sIEUpKTtcbn0pO1xuY3UuZGlzcGxheU5hbWUgPSBcIkxpbmVcIjtcbmN1LnByb3BUeXBlcyA9IHtcbiAgZnJvbTogUC5hcnJheSxcbiAgdG86IFAuYXJyYXksXG4gIGNvb3JkaW5hdGVzOiBQLmFycmF5LFxuICBzdHJva2U6IFAuc3RyaW5nLFxuICBzdHJva2VXaWR0aDogUC5udW1iZXIsXG4gIGZpbGw6IFAuc3RyaW5nLFxuICBjbGFzc05hbWU6IFAuc3RyaW5nXG59O1xudmFyICRmID0gW1wic3ViamVjdFwiLCBcImNoaWxkcmVuXCIsIFwiY29ubmVjdG9yUHJvcHNcIiwgXCJkeFwiLCBcImR5XCIsIFwiY3VydmVcIiwgXCJjbGFzc05hbWVcIl0sIGx1ID0gSXQoZnVuY3Rpb24odCwgbikge1xuICB2YXIgZSA9IHQuc3ViamVjdCwgciA9IHQuY2hpbGRyZW4sIGkgPSB0LmNvbm5lY3RvclByb3BzLCBvID0gdC5keCwgdSA9IG8gPT09IHZvaWQgMCA/IDMwIDogbywgYSA9IHQuZHksIGMgPSBhID09PSB2b2lkIDAgPyAzMCA6IGEsIGwgPSB0LmN1cnZlLCBzID0gbCA9PT0gdm9pZCAwID8gMCA6IGwsIGYgPSB0LmNsYXNzTmFtZSwgaCA9IGYgPT09IHZvaWQgMCA/IFwiXCIgOiBmLCBwID0gRXQodCwgJGYpLCB2ID0gRHQoa3QpLCBFID0gdi5wcm9qZWN0aW9uLCBTID0gRShlKSwgeSA9IHJ0KFMsIDIpLCBNID0geVswXSwgbSA9IHlbMV0sIF8gPSBwZih1LCBjLCBzKTtcbiAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBudC5jcmVhdGVFbGVtZW50KFwiZ1wiLCBodCh7XG4gICAgcmVmOiBuLFxuICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoXCIuY29uY2F0KE0gKyB1LCBcIiwgXCIpLmNvbmNhdChtICsgYywgXCIpXCIpLFxuICAgIGNsYXNzTmFtZTogXCJyc20tYW5ub3RhdGlvbiBcIi5jb25jYXQoaClcbiAgfSwgcCksIC8qIEBfX1BVUkVfXyAqLyBudC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCBodCh7XG4gICAgZDogXyxcbiAgICBmaWxsOiBcInRyYW5zcGFyZW50XCIsXG4gICAgc3Ryb2tlOiBcIiMwMDBcIlxuICB9LCBpKSksIHIpO1xufSk7XG5sdS5kaXNwbGF5TmFtZSA9IFwiQW5ub3RhdGlvblwiO1xubHUucHJvcFR5cGVzID0ge1xuICBzdWJqZWN0OiBQLmFycmF5LFxuICBjaGlsZHJlbjogUC5vbmVPZlR5cGUoW1Aubm9kZSwgUC5hcnJheU9mKFAubm9kZSldKSxcbiAgZHg6IFAubnVtYmVyLFxuICBkeTogUC5udW1iZXIsXG4gIGN1cnZlOiBQLm51bWJlcixcbiAgY29ubmVjdG9yUHJvcHM6IFAub2JqZWN0LFxuICBjbGFzc05hbWU6IFAuc3RyaW5nXG59O1xuZXhwb3J0IHtcbiAgbHUgYXMgQW5ub3RhdGlvbixcbiAgaXUgYXMgQ29tcG9zYWJsZU1hcCxcbiAgb3UgYXMgR2VvZ3JhcGhpZXMsXG4gIFJmIGFzIEdlb2dyYXBoeSxcbiAgY3UgYXMgTGluZSxcbiAga3QgYXMgTWFwQ29udGV4dCxcbiAgcnUgYXMgTWFwUHJvdmlkZXIsXG4gIHN1IGFzIE1hcmtlcixcbiAgX2YgYXMgWm9vbVBhbkNvbnRleHQsXG4gIHV1IGFzIFpvb21QYW5Qcm92aWRlcixcbiAgYXUgYXMgWm9vbWFibGVHcm91cCxcbiAgZ2YgYXMgdXNlR2VvZ3JhcGhpZXMsXG4gIFNmIGFzIHVzZVpvb21QYW5cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC1CQTFNR0ZBNC5qcy5tYXBcbiJdLCJuYW1lcyI6WyJ0IiwiR3QiLCJwdSIsIlYiLCJIciIsIlZyIiwidnUiLCJXaSIsIkhuIiwiZnUiLCJJdCIsIkR0IiwiSnQiLCJiZSIsInlyIiwiT24iLCJodSJdLCJtYXBwaW5ncyI6Ijs7O0FBR0EsTUFBTSxHQUFHO0FBQUEsRUFDUCxjQUFjO0FBQ1osU0FBSyxZQUFZLElBQUksYUFBYSxFQUFFLEdBQUcsS0FBSyxLQUFLO0FBQUEsRUFDbkQ7QUFBQSxFQUNBLElBQUksR0FBRztBQUNMLFVBQU0sSUFBSSxLQUFLO0FBQ2YsUUFBSSxJQUFJO0FBQ1IsYUFBUyxJQUFJLEdBQUcsSUFBSSxLQUFLLE1BQU0sSUFBSSxJQUFJLEtBQUs7QUFDMUMsWUFBTSxJQUFJLEVBQUUsQ0FBQyxHQUFHLElBQUksSUFBSSxHQUFHLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLEtB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SUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsRUFBRTtBQUNwRCxVQUFJLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxFQUFFLEtBQUssSUFBSSxDQUFDO0FBQzdKLFNBQUssSUFBSSxLQUFLLEdBQUcsSUFBSSxFQUFFLFNBQVMsR0FBRyxJQUFJLEdBQUcsSUFBSSxFQUFFLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxHQUFHLEVBQUU7QUFDbkUsVUFBSSxFQUFFLENBQUMsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsS0FBSyxNQUFNLElBQUksR0FBRyxJQUFJLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDO0FBQUEsRUFDbkU7QUFDQSxTQUFPLEtBQUssS0FBSyxNQUFNLE1BQU0sSUFBSSxLQUFLLE9BQU8sSUFBSSxJQUFJLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDbkc7QUFDQSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksS0FBSztBQUFBLEVBQ3ZFLFFBQVE7QUFBQSxFQUNSLE9BQU87QUFBQSxFQUNQLFdBQVc7QUFBQSxFQUNYLFNBQVM7QUFBQSxFQUNULGNBQWMsV0FBVztBQUN2QixPQUFHLFlBQVksSUFBSSxHQUFHLFVBQVU7QUFBQSxFQUNsQztBQUFBLEVBQ0EsWUFBWSxXQUFXO0FBQ3JCLE9BQUcsWUFBWSxJQUFJLEdBQUcsVUFBVTtBQUFBLEVBQ2xDO0FBQ0Y7QUFDQSxTQUFTLEdBQUdBLElBQUcsR0FBRztBQUNoQixFQUFBQSxNQUFLLEdBQUcsS0FBSztBQUNiLE1BQUksSUFBSSxFQUFFLENBQUM7QUFDWCxLQUFHLElBQUksRUFBRUEsRUFBQyxHQUFHLElBQUksRUFBRUEsRUFBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQzdCO0FBQ0EsU0FBUyxHQUFHQSxJQUFHLEdBQUcsR0FBRztBQUNuQixJQUFFLElBQUksT0FBT0EsS0FBSSxNQUFNLElBQUksT0FBTyxJQUFJLE1BQU0sSUFBSSxPQUFPLElBQUksTUFBTTtBQUNuRTtBQUNBLFNBQVMsS0FBSztBQUNaLEtBQUcsUUFBUTtBQUNiO0FBQ0EsU0FBUyxHQUFHQSxJQUFHLEdBQUc7QUFDaEIsRUFBQUEsTUFBSyxHQUFHLEtBQUs7QUFDYixNQUFJLElBQUksRUFBRSxDQUFDO0FBQ1gsT0FBSyxJQUFJLEVBQUVBLEVBQUMsR0FBRyxLQUFLLElBQUksRUFBRUEsRUFBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEdBQUcsR0FBRyxRQUFRLElBQUksR0FBRyxJQUFJLElBQUksRUFBRTtBQUN2RTtBQUNBLFNBQVMsR0FBR0EsSUFBRyxHQUFHO0FBQ2hCLEVBQUFBLE1BQUssR0FBRyxLQUFLO0FBQ2IsTUFBSSxJQUFJLEVBQUUsQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFQSxFQUFDLEdBQUcsSUFBSSxJQUFJLEVBQUVBLEVBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxHQUFHLElBQUksR0FBRyxJQUFJLElBQUksS0FBSyxJQUFJLEtBQUssS0FBSyxLQUFLLElBQUksS0FBSyxJQUFJLEtBQUssS0FBSyxLQUFLLElBQUksS0FBSyxJQUFJLEtBQUssS0FBSyxDQUFDLEdBQUcsS0FBSyxJQUFJLEtBQUssSUFBSSxLQUFLLENBQUM7QUFDMUssUUFBTSxHQUFHLE1BQU0sS0FBSyxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssTUFBTSxLQUFLLEtBQUssTUFBTSxLQUFLLE1BQU0sS0FBSyxLQUFLLEdBQUcsSUFBSSxJQUFJLEVBQUU7QUFDekc7QUFDQSxTQUFTLEtBQUs7QUFDWixLQUFHLFFBQVE7QUFDYjtBQUNBLFNBQVMsS0FBSztBQUNaLEtBQUcsUUFBUTtBQUNiO0FBQ0EsU0FBUyxLQUFLO0FBQ1osS0FBRyxJQUFJLEVBQUUsR0FBRyxHQUFHLFFBQVE7QUFDekI7QUFDQSxTQUFTLEdBQUdBLElBQUcsR0FBRztBQUNoQixPQUFLQSxJQUFHLEtBQUssR0FBR0EsTUFBSyxHQUFHLEtBQUssR0FBRyxHQUFHLFFBQVE7QUFDM0MsTUFBSSxJQUFJLEVBQUUsQ0FBQztBQUNYLE9BQUssSUFBSSxFQUFFQSxFQUFDLEdBQUcsS0FBSyxJQUFJLEVBQUVBLEVBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxHQUFHLEdBQUcsSUFBSSxJQUFJLEVBQUU7QUFDeEQ7QUFDQSxTQUFTLEdBQUdBLElBQUcsR0FBRztBQUNoQixFQUFBQSxNQUFLLEdBQUcsS0FBSztBQUNiLE1BQUksSUFBSSxFQUFFLENBQUMsR0FBRyxJQUFJLElBQUksRUFBRUEsRUFBQyxHQUFHLElBQUksSUFBSSxFQUFFQSxFQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsR0FBRyxJQUFJLEtBQUssSUFBSSxLQUFLLEdBQUcsSUFBSSxLQUFLLElBQUksS0FBSyxHQUFHLElBQUksS0FBSyxJQUFJLEtBQUssR0FBRyxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLElBQUk7QUFDN0osS0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsTUFBTSxHQUFHLE1B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QSxNQUdBLE9BQU8sV0FBVztBQUNoQixlQUFPLEtBQUssS0FBSyxNQUFNO0FBQUEsTUFDekI7QUFBQSxJQUNOO0FBQUEsRUFDRTtBQUNBLFdBQVMsRUFBRSxHQUFHLEdBQUcsR0FBRztBQUNsQixRQUFJLElBQUksR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLEdBQUcsSUFBSSxJQUFJLElBQUk7QUFDM0YsUUFBSSxDQUFDLEVBQUcsUUFBTyxDQUFDLEtBQUs7QUFDckIsUUFBSSxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxHQUFHLENBQUM7QUFDMUUsT0FBRyxHQUFHLENBQUM7QUFDUCxRQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUksSUFBSSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsSUFBSTtBQUNuRSxRQUFJLEVBQUUsSUFBSSxJQUFJO0FBQ1osVUFBSSxJQUFJLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUM7QUFDckMsVUFBSSxHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFHLFFBQU87QUFDcEMsVUFBSSxJQUFJLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxHQUFHO0FBQzVDLFVBQUksTUFBTSxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUk7QUFDNUIsVUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLEtBQUssSUFBSTtBQUM5QyxVQUFJLENBQUMsS0FBSyxJQUFJLE1BQU0sSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxLQUFLLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxJQUFJO0FBQzFKLFlBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQztBQUMxQixlQUFPLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQUEsTUFDNUI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNBLFdBQVMsRUFBRSxHQUFHLEdBQUc7QUFDZixRQUFJLElBQUksSUFBSUEsS0FBSSxJQUFJQSxJQUFHLElBQUk7QUFDM0IsV0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksSUFBSSxNQUFNLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksSUFBSSxNQUFNLEtBQUssSUFBSTtBQUFBLEVBQ25GO0FBQ0EsU0FBTyxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUNBLEVBQUMsSUFBSSxDQUFDLENBQUMsR0FBR0EsS0FBSSxDQUFDLENBQUM7QUFDOUM7QUFDQSxTQUFTLEdBQUdBLElBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO0FBQzVCLE1BQUksSUFBSUEsR0FBRSxDQUFDLEdBQUcsSUFBSUEsR0FBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLEdBQUc7QUFDaEYsTUFBSSxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsS0FBSyxJQUFJLElBQUk7QUFDN0IsUUFBSSxLQUFLLEdBQUcsSUFBSSxHQUFHO0FBQ2pCLFVBQUksSUFBSSxFQUFHO0FBQ1gsVUFBSSxNQUFNLElBQUk7QUFBQSxJQUNoQixXQUFXLElBQUksR0FBRztBQUNoQixVQUFJLElBQUksRUFBRztBQUNYLFVBQUksTUFBTSxJQUFJO0FBQUEsSUFDaEI7QUFDQSxRQUFJLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxLQUFLLElBQUksSUFBSTtBQUM3QixVQUFJLEtBQUssR0FBRyxJQUFJLEdBQUc7QUFDakIsWUFBSSxJQUFJLEVBQUc7QUFDWCxZQUFJLE1BQU0sSUFBSTtBQUFBLE1BQ2hCLFdBQVcsSUFBSSxHQUFHO0FBQ2hCLFlBQUksSUFBSSxFQUFHO0FBQ1gsWUFBSSxNQUFNLElBQUk7QUFBQSxNQUNoQjtBQUNBLFVBQUksSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLEtBQUssSUFBSSxJQUFJO0FBQzdCLFlBQUksS0FBSyxHQUFHLElBQUksR0FBRztBQUNqQixjQUFJLElBQUksRUFBRztBQUNYLGNBQUksTUFBTSxJQUFJO0FBQUEsUUFDaEIsV0FBVyxJQUFJLEdBQUc7QUFDaEIsY0FBSSxJQUFJLEVBQUc7QUFDWCxjQUFJLE1BQU0sSUFBSTtBQUFBLFFBQ2hCO0FBQ0EsWUFBSSxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsS0FBSyxJQUFJLElBQUk7QUFDN0IsY0FBSSxLQUFLLEdBQUcsSUFBSSxHQUFHO0FBQ2pCLGdCQUFJLElBQUksRUFBRztBQUNYLGdCQUFJLE1BQU0sSUFBSTtBQUFBLFVBQ2hCLFdBQVcsSUFBSSxHQUFHO0FBQ2hCLGdCQUFJLElBQUksRUFBRztBQUNYLGdCQUFJLE1BQU0sSUFBSTtBQUFBLFVBQ2hCO0FBQ0EsaUJBQU8sSUFBSSxNQUFNQSxHQUFFLENBQUMsSUFBSSxJQUFJLElBQUksR0FBR0EsR0FBRSxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxNQUFNLEVBQUUsQ0FBQyxJQUFJLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJO0FBQUEsUUFDdkc7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRjtBQUNBLElBQUksS0FBSyxLQUFLLEtBQUssQ0FBQztBQUNwQixTQUFTLEdBQUdBLElBQUcsR0FBRyxHQUFHLEdBQUc7QUFDdEIsV0FBUyxFQUFFLEdBQUcsR0FBRztBQUNmLFdBQU9BLE1BQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUs7QUFBQSxFQUM1QztBQUNBLFdBQVMsRUFBRSxHQUFHLEdBQUcsR0FBRyxHQUFHO0FBQ3JCLFFBQUksSUFBSSxHQUFHLElBQUk7QUFDZixRQUFJLEtBQUssU0FBUyxJQUFJLEVBQUUsR0FBRyxDQUFDLFFBQVEsSUFBSSxFQUFFLEdBQUcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJO0FBQ3BFO0FBQ0UsVUFBRSxNQUFNLE1BQU0sS0FBSyxNQUFNLElBQUlBLEtBQUksR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDO0FBQUEsY0FDM0MsS0FBSyxJQUFJLElBQUksS0FBSyxPQUFPO0FBQUE7QUFFakMsUUFBRSxNQUFNLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQUEsRUFDdEI7QUFDQSxXQUFTLEVBQUUsR0FBRyxHQUFHO0FBQ2YsV0FBTyxFQUFFLEVBQUUsQ0FBQyxJQUFJQSxFQUFDLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUk7QUFBQSxFQUMzSDtBQUNBLFdBQVMsRUFBRSxHQUFHLEdBQUc7QUFDZixXQUFPLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQztBQUFBLEVBQ25CO0FBQ0EsV0FBUyxFQUFFLEdBQUcsR0FBRztBQUNmLFFBQUksSUFBSSxFQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksRUFBRSxHQUFHLENBQUM7QUFDM0IsV0FBTyxNQUFNLElBQUksSUFBSSxJQUFJLE1BQU0sSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxNQUFNLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksTUFBTSxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUFBLEVBQzdHO0FBQ0EsU0FBTyxTQUFTLEdBQUc7QUFDakIsUUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFFLEdBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUk7QUFBQSxNQUN4RCxPQUFPO0FBQUEsTUFDUCxXQUFXO0FBQUEsTUFDWCxTQUFTO0FBQUEsTUFDVCxjQUFjO0FBQUEsTUFDZCxZQUFZO0FBQUEsSUFDbEI7QUFDSSxhQUFTLEVBQUUsR0FBRyxHQUFHO0FBQ2YsUUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLE1BQU0sR0FBRyxDQUFDO0FBQUEsSUFDekI7QUFDQSxhQUFTLElBQUk7QUFDWCxlQUFTLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxFQUFFLFFBQVEsSUFBSSxHQUFHLEVBQUU7QUFDNUMsaUJBQVMsSUFBSSxFQUFFLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxFQUFFLFFBQVEsSUFBSSxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxFQUFFLENBQUMsR0FBR0csS0FBSSxFQUFFLENBQUMsR0FBRyxJQUFJLEdBQUcsRUFBRTtBQUNuRixjQUFJLEdBQUcsSUFBSUEsSUFBRyxJQUFJLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLEdBQUdBLEtBQUksRUFBRSxDQUFDLEdBQUcsS0FBSyxJQUFJQSxLQUFJLE1BQU0sSUFBSSxNQUFNLElBQUksTUFBTUEsS0FBSSxNQUFNSCxLQUFJLE1BQU0sRUFBRSxJQUFJRyxNQUFLLE1BQU0sSUFBSSxNQUFNLElBQUksTUFBTUEsS0FBSSxNQUFNSCxLQUFJLE1BQU0sRUFBRTtBQUN0SyxhQUFPO0FBQUEsSUFDVDtBQUNBLGFBQVMsSUFBSTtBQUNYLFVBQUksR0FBRyxJQUFJLENBQUEsR0FBSSxJQUFJLENBQUEsR0FBSSxJQUFJO0FBQUEsSUFDN0I7QUFDQSxhQUFTLElBQUk7QUFDWCxVQUFJLElBQUksS0FBSyxJQUFJLEtBQUssR0FBRyxLQUFLLElBQUksR0FBRyxDQUFDLEdBQUc7QUFDekMsT0FBQyxLQUFLLE9BQU8sRUFBRSxhQUFZLEdBQUksTUFBTSxFQUFFLFVBQVMsR0FBSSxFQUFFLE1BQU0sTUFBTSxHQUFHLENBQUMsR0FBRyxFQUFFLFFBQU8sSUFBSyxLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsRUFBRSxXQUFVLElBQUssSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJO0FBQUEsSUFDcko7QUFDQSxhQUFTLElBQUk7QUFDWCxRQUFFLFFBQVEsR0FBRyxLQUFLLEVBQUUsS0FBSyxJQUFJLENBQUEsQ0FBRSxHQUFHLElBQUksTUFBSSxJQUFJLE9BQUksSUFBSSxJQUFJO0FBQUEsSUFDNUQ7QUFDQSxhQUFTLElBQUk7QUFDWCxZQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsS0FBSyxLQUFLLEVBQUUsT0FBTSxHQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsSUFBSSxFQUFFLFFBQVEsR0FBRyxLQUFLLEVBQUUsUUFBTztBQUFBLElBQ3ZGO0FBQ0EsYUFBUyxFQUFFLEdBQUcsR0FBRztBQUNmLFVBQUksSUFBSSxFQUFFLEdBQUcsQ0FBQztBQUNkLFVBQUksS0FBSyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHO0FBQ3ZCLFlBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksT0FBSSxNQUFNLEVBQUUsYUFBYSxFQUFFLE1BQU0sR0FBRyxDQUFDO0FBQUEsZUFDdkQsS0FBSyxFQUFHLEdBQUUsTUFBTSxHQUFHLENBQUM7QUFBQSxXQUN4QjtBQUNILFlBQUksSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLElBQUksSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxJQUFJLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDekosV0FBRyxHQUFHLEdBQUdBLElBQUcsR0FBRyxHQUFHLENBQUMsS0FBSyxNQUFNLEVBQUUsVUFBUyxHQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssRUFBRSxXQUFXLElBQUksU0FBTSxNQUFNLEVBQUUsVUFBUyxHQUFJLEVBQUUsTUFBTSxHQUFHLENBQUMsR0FBRyxJQUFJO0FBQUEsTUFDOUo7QUFDQSxVQUFJLEdBQUcsSUFBSSxHQUFHLElBQUk7QUFBQSxJQUNwQjtBQUNBLFdBQU87QUFBQSxFQUNUO0FBQ0Y7QUFDQSxTQUFTLEtBQUs7QUFDWixNQUFJQSxLQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksS0FBSyxJQUFJLEtBQUssR0FBRyxHQUFHO0FBQzFDLFNBQU8sSUFBSTtBQUFBLElBQ1QsUUFBUSxTQUFTLEdBQUc7QUFDbEIsYUFBTyxLQUFLLE1BQU0sSUFBSSxJQUFJLElBQUksR0FBR0EsSUFBRyxHQUFHLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQztBQUFBLElBQ3BEO0FBQUEsSUFDQSxRQUFRLFNBQVMsR0FBRztBQUNsQixhQUFPLFVBQVUsVUFBVUEsS0FBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLElBQUksTUFBTSxLQUFLLENBQUMsQ0FBQ0EsSUFBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUFBLElBQ3ZIO0FBQUEsRUFDSjtBQUNBO0FBQ0EsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLEtBQUs7QUFBQSxFQUN2QixRQUFRO0FBQUEsRUFDUixPQUFPO0FBQUEsRUFDUCxXQUFXO0FBQUEsRUFDWCxTQUFTO0FBQUEsRUFDVCxjQUFjO0FBQUEsRUFDZCxZQUFZO0FBQ2Q7QUFDQSxTQUFTLEtBQUs7QUFDWixLQUFHLFFBQVEsSUFBSSxHQUFHLFVBQVU7QUFDOUI7QUFDQSxTQUFTLEtBQUs7QUFDWixLQUFHLFFBQVEsR0FBRyxVQUFVO0FBQzFCO0FBQ0EsU0FBUyxHQUFHQSxJQUFHLEdBQUc7QUFDaEIsRUFBQUEsTUFBSyxHQUFHLEtBQUssR0FBRyxLQUFLQSxJQUFHLEtBQUssRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsR0FBRyxHQUFHLFFBQVE7QUFDM0Q7QUFDQSxTQUFTLEdBQUdBLElBQUcsR0FBRztBQUNoQixFQUFBQSxNQUFLLEdBQUcsS0FBSztBQUNiLE1BQUksSUFBSSxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRUEsS0FBSSxFQUFFLEdBQUcsSUFBSSxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxHQUFHLElBQUksSUFBSSxHQUFHLElBQUksS0FBSyxJQUFJLEtBQUssSUFBSSxHQUFHLElBQUksS0FBSyxJQUFJLEtBQUssSUFBSTtBQUNySCxLQUFHLElBQUksR0FBRyxHQUFHLElBQUksSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLQSxJQUFHLEtBQUssR0FBRyxLQUFLO0FBQ3pEO0FBQ0EsU0FBUyxHQUFHQSxJQUFHO0FBQ2IsU0FBTyxLQUFLLElBQUksR0FBRSxHQUFJLEdBQUdBLElBQUcsRUFBRSxHQUFHLENBQUM7QUFDcEM7QUFDQSxJQUFJLEtBQUssQ0FBQyxNQUFNLElBQUksR0FBRyxLQUFLLEVBQUUsTUFBTSxjQUFjLGFBQWEsR0FBRTtBQUNqRSxTQUFTLEdBQUdBLElBQUcsR0FBRztBQUNoQixTQUFPLEdBQUcsQ0FBQyxJQUFJQSxJQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxFQUFFO0FBQ3BDO0FBQ0EsSUFBSSxLQUFLO0FBQUEsRUFDUCxTQUFTLFNBQVNBLElBQUcsR0FBRztBQUN0QixXQUFPLEdBQUdBLEdBQUUsVUFBVSxDQUFDO0FBQUEsRUFDekI7QUFBQSxFQUNBLG1CQUFtQixTQUFTQSxJQUFHLEdBQUc7QUFDaEMsYUFBUyxJQUFJQSxHQUFFLFVBQVUsSUFBSSxJQUFJLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxJQUFLLEtBQUksR0FBRyxFQUFFLENBQUMsRUFBRSxVQUFVLENBQUMsRUFBRyxRQUFPO0FBQzNGLFdBQU87QUFBQSxFQUNUO0FBQ0YsR0FBRyxLQUFLO0FBQUEsRUFDTixRQUFRLFdBQVc7QUFDakIsV0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUNBLE9BQU8sU0FBU0EsSUFBRyxHQUFHO0FBQ3BCLFdBQU8sR0FBR0EsR0FBRSxhQUFhLENBQUM7QUFBQSxFQUM1QjtBQUFBLEVBQ0EsWUFBWSxTQUFTQSxJQUFHLEdBQUc7QUFDekIsYUFBUyxJQUFJQSxHQUFFLGFBQWEsSUFBSSxJQUFJLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxJQUFLLEtBQUksR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUcsUUFBTztBQUNyRixXQUFPO0FBQUEsRUFDVDtBQUFBLEVBQ0EsWUFBWSxTQUFTQSxJQUFHLEdBQUc7QUFDekIsV0FBTyxHQUFHQSxHQUFFLGFBQWEsQ0FBQztBQUFBLEVBQzVCO0FBQUEsRUFDQSxpQkFBaUIsU0FBU0EsSUFBRyxHQUFHO0FBQzlCLGFBQVMsSUFBSUEsR0FBRSxhQUFhLElBQUksSUFBSSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksSUFBSyxLQUFJLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFHLFFBQU87QUFDckYsV0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUNBLFNBQVMsU0FBU0EsSUFBRyxHQUFHO0FBQ3RCLFdBQU8sR0FBR0EsR0FBRSxhQUFhLENBQUM7QUFBQSxFQUM1QjtBQUFBLEVBQ0EsY0FBYyxTQUFTQSxJQUFHLEdBQUc7QUFDM0IsYUFBUyxJQUFJQSxHQUFFLGFBQWEsSUFBSSxJQUFJLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxJQUFLLEtBQUksR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUcsUUFBTztBQUNyRixXQUFPO0FBQUEsRUFDVDtBQUFBLEVBQ0Esb0JBQW9CLFNBQVNBLElBQUcsR0FBRztBQUNqQyxhQUFTLElBQUlBLEdBQUUsWUFBWSxJQUFJLElBQUksSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLElBQUssS0FBSSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRyxRQUFPO0FBQ3BGLFdBQU87QUFBQSxFQUNUO0FBQ0Y7QUFDQSxTQUFTLEdBQUdBLElBQUcsR0FBRztBQUNoQixTQUFPQSxNQUFLLEdBQUcsZUFBZUEsR0FBRSxJQUFJLElBQUksR0FBR0EsR0FBRSxJQUFJLEVBQUVBLElBQUcsQ0FBQyxJQUFJO0FBQzdEO0FBQ0EsU0FBUyxHQUFHQSxJQUFHLEdBQUc7QUFDaEIsU0FBTyxHQUFHQSxJQUFHLENBQUMsTUFBTTtBQUN0QjtBQUNBLFNBQVMsR0FBR0EsSUFBRyxHQUFHO0FBQ2hCLFdBQVMsR0FBRyxHQUFHLEdBQUcsSUFBSSxHQUFHLElBQUlBLEdBQUUsUUFBUSxJQUFJLEdBQUcsS0FBSztBQUNqRCxRQUFJLElBQUksR0FBR0EsR0FBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sS0FBSyxJQUFJLE1BQU0sSUFBSSxHQUFHQSxHQUFFLENBQUMsR0FBR0EsR0FBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxLQUFLLEtBQUssS0FBSyxNQUFNLElBQUksSUFBSSxNQUFNLElBQUksS0FBSyxLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsS0FBSyxLQUFLO0FBQ2pKLGFBQU87QUFDVCxRQUFJO0FBQUEsRUFDTjtBQUNBLFNBQU87QUFDVDtBQUNBLFNBQVMsR0FBR0EsSUFBRyxHQUFHO0FBQ2hCLFNBQU8sQ0FBQyxDQUFDLEdBQUdBLEdBQUUsSUFBSSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDOUI7QUFDQSxTQUFTLEdBQUdBLElBQUc7QUFDYixTQUFPQSxLQUFJQSxHQUFFLElBQUksRUFBRSxHQUFHQSxHQUFFLElBQUcsR0FBSUE7QUFDakM7QUFDQSxTQUFTLEdBQUdBLElBQUc7QUFDYixTQUFPLENBQUNBLEdBQUUsQ0FBQyxJQUFJLEdBQUdBLEdBQUUsQ0FBQyxJQUFJLENBQUM7QUFDNUI7QUFDQSxTQUFTLEdBQUdBLElBQUcsR0FBRztBQUNoQixVQUFRQSxNQUFLLEdBQUcsZUFBZUEsR0FBRSxJQUFJLElBQUksR0FBR0EsR0FBRSxJQUFJLElBQUksSUFBSUEsSUFBRyxDQUFDO0FBQ2hFO0FBQ0EsU0FBUyxHQUFHQSxJQUFHLEdBQUcsR0FBRztBQUNuQixNQUFJLElBQUksR0FBR0EsSUFBRyxJQUFJLEdBQUcsQ0FBQyxFQUFFLE9BQU8sQ0FBQztBQUNoQyxTQUFPLFNBQVMsR0FBRztBQUNqQixXQUFPLEVBQUUsSUFBSSxTQUFTLEdBQUc7QUFDdkIsYUFBTyxDQUFDLEdBQUcsQ0FBQztBQUFBLElBQ2QsQ0FBQztBQUFBLEVBQ0g7QUFDRjtBQUNBLFNBQVMsR0FBR0EsSUFBRyxHQUFHLEdBQUc7QUFDbkIsTUFBSSxJQUFJLEdBQUdBLElBQUcsSUFBSSxHQUFHLENBQUMsRUFBRSxPQUFPLENBQUM7QUFDaEMsU0FBTyxTQUFTLEdBQUc7QUFDakIsV0FBTyxFQUFFLElBQUksU0FBUyxHQUFHO0FBQ3ZCLGFBQU8sQ0FBQyxHQUFHLENBQUM7QUFBQSxJQUNkLENBQUM7QUFBQSxFQUNIO0FBQ0Y7QUFDQSxTQUFTLEtBQUs7QUFDWixNQUFJQSxJQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSTtBQUM1RSxXQUFTLElBQUk7QUFDWCxXQUFPLEVBQUUsTUFBTSxtQkFBbUIsYUFBYSxFQUFDLEVBQUU7QUFBQSxFQUNwRDtBQUNBLFdBQVMsSUFBSTtBQUNYLFdBQU8sR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsT0FBTyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLE9BQU8sR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUdBLElBQUcsQ0FBQyxFQUFFLE9BQU8sU0FBUyxHQUFHO0FBQzdILGFBQU8sRUFBRSxJQUFJLENBQUMsSUFBSTtBQUFBLElBQ3BCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLE9BQU8sR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsT0FBTyxTQUFTLEdBQUc7QUFDM0QsYUFBTyxFQUFFLElBQUksQ0FBQyxJQUFJO0FBQUEsSUFDcEIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQUEsRUFDWDtBQUNBLFNBQU8sRUFBRSxRQUFRLFdBQVc7QUFDMUIsV0FBTyxFQUFDLEVBQUcsSUFBSSxTQUFTLEdBQUc7QUFDekIsYUFBTyxFQUFFLE1BQU0sY0FBYyxhQUFhLEVBQUM7QUFBQSxJQUM3QyxDQUFDO0FBQUEsRUFDSCxHQUFHLEVBQUUsVUFBVSxXQUFXO0FBQ3hCLFdBQU87QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLGFBQWE7QUFBQSxRQUNYLEVBQUUsQ0FBQyxFQUFFO0FBQUEsVUFDSCxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUM7QUFBQSxVQUNaLEVBQUUsQ0FBQyxFQUFFLFFBQU8sRUFBRyxNQUFNLENBQUM7QUFBQSxVQUN0QixFQUFFLENBQUMsRUFBRSxRQUFPLEVBQUcsTUFBTSxDQUFDO0FBQUEsUUFDaEM7QUFBQSxNQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0UsR0FBRyxFQUFFLFNBQVMsU0FBUyxHQUFHO0FBQ3hCLFdBQU8sVUFBVSxTQUFTLEVBQUUsWUFBWSxDQUFDLEVBQUUsWUFBWSxDQUFDLElBQUksRUFBRSxZQUFXO0FBQUEsRUFDM0UsR0FBRyxFQUFFLGNBQWMsU0FBUyxHQUFHO0FBQzdCLFdBQU8sVUFBVSxVQUFVLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxNQUFNLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksTUFBTSxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQUEsRUFDdEwsR0FBRyxFQUFFLGNBQWMsU0FBUyxHQUFHO0FBQzdCLFdBQU8sVUFBVSxVQUFVLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUdBLEtBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUlBLE9BQU0sSUFBSSxHQUFHLElBQUlBLElBQUdBLEtBQUksSUFBSSxJQUFJLE1BQU0sSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQ0EsSUFBRyxDQUFDLENBQUM7QUFBQSxFQUN0TCxHQUFHLEVBQUUsT0FBTyxTQUFTLEdBQUc7QUFDdEIsV0FBTyxVQUFVLFNBQVMsRUFBRSxVQUFVLENBQUMsRUFBRSxVQUFVLENBQUMsSUFBSSxFQUFFLFVBQVM7QUFB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QUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxLQUFLLElBQUksS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssSUFBSSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLElBQUksS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNO0FBQ25OLElBQUFBLEdBQUUsTUFBTSxNQUFNLENBQUMsRUFBRSxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7QUFBQSxFQUNuQyxHQUFHLENBQUM7QUFDTjtBQUNBLFNBQVMsR0FBR0EsSUFBRyxHQUFHLEdBQUc7QUFDbkIsU0FBTyxHQUFHQSxJQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztBQUM3QjtBQUNBLFNBQVMsR0FBR0EsSUFBRyxHQUFHLEdBQUc7QUFDbkIsU0FBTyxHQUFHQSxJQUFHLFNBQVMsR0FBRztBQUN2QixRQUFJLElBQUksQ0FBQyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEtBQUssSUFBSSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDO0FBQy9GLElBQUFBLEdBQUUsTUFBTSxNQUFNLENBQUMsRUFBRSxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7QUFBQSxFQUNuQyxHQUFHLENBQUM7QUFDTjtBQUNBLFNBQVMsR0FBR0EsSUFBRyxHQUFHLEdBQUc7QUFDbkIsU0FBTyxHQUFHQSxJQUFHLFNBQVMsR0FBRztBQUN2QixRQUFJLElBQUksQ0FBQyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLElBQUksS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNO0FBQy9GLElBQUFBLEdBQUUsTUFBTSxNQUFNLENBQUMsRUFBRSxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7QUFBQSxFQUNuQyxHQUFHLENBQUM7QUFDTjtBQUNBLElBQUksS0FBSyxJQUFJLEtBQUssRUFBRSxLQUFLLENBQUM7QUFDMUIsU0FBUyxHQUFHQSxJQUFHLEdBQUc7QUFDaEIsU0FBTyxDQUFDLElBQUksR0FBR0EsSUFBRyxDQUFDLElBQUksR0FBR0EsRUFBQztBQUM3QjtBQUNBLFNBQVMsR0FBR0EsSUFBRztBQUNiLFNBQU8sR0FBRztBQUFBLElBQ1IsT0FBTyxTQUFTLEdBQUcsR0FBRztBQUNwQixVQUFJQSxHQUFFLEdBQUcsQ0FBQyxHQUFHLEtBQUssT0FBTyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQUEsSUFDM0M7QUFBQSxFQUNKLENBQUc7QUFDSDtBQUNBLFNBQVMsR0FBR0EsSUFBRyxHQUFHO0FBQ2hCLFdBQVMsRUFBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7QUFDbkQsUUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxJQUFJO0FBQzFDLFFBQUksSUFBSSxJQUFJLEtBQUssS0FBSztBQUNwQixVQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksS0FBSyxJQUFJLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSUEsR0FBRSxHQUFHLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLEdBQUcsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksSUFBSTtBQUN6TixPQUFDLElBQUksSUFBSSxJQUFJLEtBQUssR0FBRyxJQUFJLElBQUksSUFBSSxLQUFLLElBQUksR0FBRyxJQUFJLE9BQU8sSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksUUFBUSxFQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEtBQUssR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxFQUFFLE1BQU0sR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFBQSxJQUMxTTtBQUFBLEVBQ0Y7QUFDQSxTQUFPLFNBQVMsR0FBRztBQUNqQixRQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUk7QUFBQSxNQUMxQyxPQUFPO0FBQUEsTUFDUCxXQUFXO0FBQUEsTUFDWCxTQUFTO0FBQUEsTUFDVCxjQUFjLFdBQVc7QUFDdkIsVUFBRSxhQUFZLEdBQUksRUFBRSxZQUFZO0FBQUEsTUFDbEM7QUFBQSxNQUNBLFlBQVksV0FBVztBQUNyQixVQUFFLFdBQVUsR0FBSSxFQUFFLFlBQVk7QUFBQSxNQUNoQztBQUFBLElBQ047QUFDSSxhQUFTLEVBQUUsR0FBRyxHQUFHO0FBQ2YsVUFBSUEsR0FBRSxHQUFHLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7QUFBQSxJQUNqQztBQUNBLGFBQVMsSUFBSTtBQUNYLFVBQUksS0FBSyxFQUFFLFFBQVEsR0FBRyxFQUFFLFVBQVM7QUFBQSxJQUNuQztBQUNBLGFBQVMsRUFBRSxHQUFHLEdBQUc7QUFDZixVQUFJLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSUEsR0FBRSxHQUFHLENBQUM7QUFDOUIsUUFBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLEdBQUcsSUFBSSxHQUFHLElBQUksRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsTUFBTSxHQUFHLENBQUM7QUFBQSxJQUNuRztBQUNBLGFBQVMsSUFBSTtBQUNYLFFBQUUsUUFBUSxHQUFHLEVBQUUsUUFBTztBQUFBLElBQ3hCO0FBQ0EsYUFBUyxJQUFJO0FBQ1gsUUFBQyxHQUFJLEVBQUUsUUFBUSxHQUFHLEVBQUUsVUFBVTtBQUFBLElBQ2hDO0FBQ0EsYUFBUyxFQUFFLEdBQUcsR0FBRztBQUNmLFFBQUUsSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUUsUUFBUTtBQUFBLElBQzVEO0FBQ0EsYUFBUyxJQUFJO0FBQ1gsUUFBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLFVBQVUsR0FBRyxFQUFDO0FBQUEsSUFDaEU7QUFDQSxXQUFPO0FBQUEsRUFDVDtBQUNGO0FBQ0EsSUFBSSxLQUFLLEdBQUc7QUFBQSxFQUNWLE9BQU8sU0FBU0EsSUFBRyxHQUFHO0FBQ3BCLFNBQUssT0FBTyxNQUFNQSxLQUFJLEdBQUcsSUFBSSxDQUFDO0FBQUEsRUFDaEM7QUFDRixDQUFDO0FBQ0QsU0FBUyxHQUFHQSxJQUFHO0FBQ2IsU0FBTyxHQUFHO0FBQUEsSUFDUixPQUFPLFNBQVMsR0FBRyxHQUFHO0FBQ3BCLFVBQUksSUFBSUEsR0FBRSxHQUFHLENBQUM7QUFDZCxhQUFPLEtBQUssT0FBTyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQUEsSUFDckM7QUFBQSxFQUNKLENBQUc7QUFDSDtBQUNBLFNBQVMsR0FBR0EsSUFBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO0FBQ3pCLFdBQVMsRUFBRSxHQUFHLEdBQUc7QUFDZixXQUFPLEtBQUssR0FBRyxLQUFLLEdBQUcsQ0FBQyxJQUFJQSxLQUFJLEdBQUcsSUFBSUEsS0FBSSxDQUFDO0FBQUEsRUFDOUM7QUFDQSxTQUFPLEVBQUUsU0FBUyxTQUFTLEdBQUcsR0FBRztBQUMvQixXQUFPLEVBQUUsSUFBSSxLQUFLQSxLQUFJLElBQUksSUFBSSxLQUFLQSxLQUFJLENBQUM7QUFBQSxFQUMxQyxHQUFHO0FBQ0w7QUFDQSxTQUFTLEdBQUdBLElBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO0FBQzVCLE1BQUksQ0FBQyxFQUFHLFFBQU8sR0FBR0EsSUFBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQy9CLE1BQUksSUFBSSxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxHQUFHLElBQUksSUFBSUEsSUFBRyxJQUFJLElBQUlBLElBQUcsSUFBSSxJQUFJQSxJQUFHLElBQUksSUFBSUEsSUFBRyxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUtBLElBQUcsS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLQTtBQUNuSCxXQUFTLEVBQUUsR0FBRyxHQUFHO0FBQ2YsV0FBTyxLQUFLLEdBQUcsS0FBSyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQztBQUFBLEVBQzlEO0FBQ0EsU0FBTyxFQUFFLFNBQVMsU0FBUyxHQUFHLEdBQUc7QUFDL0IsV0FBTyxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO0FBQUEsRUFDMUQsR0FBRztBQUNMO0FBQ0EsU0FBUyxHQUFHQSxJQUFHO0FBQ2IsU0FBTyxHQUFHLFdBQVc7QUFDbkIsV0FBT0E7QUFBQSxFQUNULENBQUMsRUFBQztBQUNKO0FBQ0EsU0FBUyxHQUFHQSxJQUFHO0FBQ2IsTUFBSSxHQUFHLElBQUksS0FBSyxJQUFJLEtBQUssSUFBSSxLQUFLLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLE1BQU0sSUFBSSxJQUFJLElBQUksTUFBTSxHQUFHLEdBQUcsR0FBRyxJQUFJLElBQUksSUFBSSxLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUc7QUFDL0osV0FBUyxFQUFFLEdBQUc7QUFDWixXQUFPLEVBQUUsRUFBRSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDO0FBQUEsRUFDN0I7QUFDQSxXQUFTLEVBQUUsR0FBRztBQUNaLFdBQU8sSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDO0FBQUEsRUFDM0Q7QUFDQSxJQUFFLFNBQVMsU0FBUyxHQUFHO0FBQ3JCLFdBQU8sS0FBSyxNQUFNLElBQUksSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFBQSxFQUN4RCxHQUFHLEVBQUUsVUFBVSxTQUFTLEdBQUc7QUFDekIsV0FBTyxVQUFVLFVBQVUsSUFBSSxHQUFHLElBQUksUUFBUSxFQUFDLEtBQU07QUFBQSxFQUN2RCxHQUFHLEVBQUUsV0FBVyxTQUFTLEdBQUc7QUFDMUIsV0FBTyxVQUFVLFVBQVUsSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLElBQUksTUFBTSxFQUFDLEtBQU07QUFBQSxFQUNqRSxHQUFHLEVBQUUsWUFBWSxTQUFTLEdBQUc7QUFDM0IsV0FBTyxVQUFVLFVBQVUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksTUFBTSxLQUFLLEVBQUMsS0FBTSxJQUFJO0FBQUEsRUFDakYsR0FBRyxFQUFFLGFBQWEsU0FBUyxHQUFHO0FBQzVCLFdBQU8sVUFBVSxVQUFVLElBQUksS0FBSyxRQUFRLElBQUksSUFBSSxJQUFJLElBQUksTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUMsS0FBTSxLQUFLLE9BQU8sT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUFBLEVBQy9LLEdBQUcsRUFBRSxRQUFRLFNBQVMsR0FBRztBQUN2QixXQUFPLFVBQVUsVUFBVSxJQUFJLENBQUMsR0FBRyxFQUFDLEtBQU07QUFBQSxFQUM1QyxHQUFHLEVBQUUsWUFBWSxTQUFTLEdBQUc7QUFDM0IsV0FBTyxVQUFVLFVBQVUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFDLEtBQU0sQ0FBQyxHQUFHLENBQUM7QUFBQSxFQUMvRCxHQUFHLEVBQUUsU0FBUyxTQUFTLEdBQUc7QUFDeEIsV0FBTyxVQUFVLFVBQVUsSUFBSSxFQUFFLENBQUMsSUFBSSxNQUFNLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxNQUFNLEdBQUcsRUFBQyxLQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUFBLEVBQ3pGLEdBQUcsRUFBRSxTQUFTLFNBQVMsR0FBRztBQUN4QixXQUFPLFVBQVUsVUFBVSxJQUFJLEVBQUUsQ0FBQyxJQUFJLE1BQU0sR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLE1BQU0sR0FBRyxJQUFJLEVBQUUsU0FBUyxJQUFJLEVBQUUsQ0FBQyxJQUFJLE1BQU0sSUFBSSxHQUFHLEVBQUMsS0FBTSxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQUEsRUFDdkksR0FBRyxFQUFFLFFBQVEsU0FBUyxHQUFHO0FBQ3ZCLFdBQU8sVUFBVSxVQUFVLElBQUksSUFBSSxNQUFNLEdBQUcsT0FBTyxJQUFJO0FBQUEsRUFDekQsR0FBRyxFQUFFLFdBQVcsU0FBUyxHQUFHO0FBQzFCLFdBQU8sVUFBVSxVQUFVLElBQUksSUFBSSxLQUFLLEdBQUcsT0FBTyxJQUFJO0FBQUEsRUFDeEQsR0FBRyxFQUFFLFdBQVcsU0FBUyxHQUFHO0FBQzFCLFdBQU8sVUFBVSxVQUFVLElBQUksSUFBSSxLQUFLLEdBQUcsT0FBTyxJQUFJO0FBQUEsRUFDeEQsR0FBRyxFQUFFLFlBQVksU0FBUyxHQUFHO0FBQzNCLFdBQU8sVUFBVSxVQUFVLElBQUksR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsT0FBTyxHQUFHLENBQUM7QUFBQSxFQUM5RCxHQUFHLEVBQUUsWUFBWSxTQUFTLEdBQUcsR0FBRztBQUM5QixXQUFPLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFBQSxFQUNuQixHQUFHLEVBQUUsVUFBVSxTQUFTLEdBQUcsR0FBRztBQUM1QixXQUFPLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFBQSxFQUNuQixHQUFHLEVBQUUsV0FBVyxTQUFTLEdBQUcsR0FBRztBQUM3QixXQUFPLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFBQSxFQUNuQixHQUFHLEVBQUUsWUFBWSxTQUFTLEdBQUcsR0FBRztBQUM5QixXQUFPLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFBQSxFQUNuQjtBQUNBLFdBQVMsSUFBSTtBQUNYLFFBQUksSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEVBQUUsTUFBTSxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsR0FBRyxJQUFJLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDeEYsV0FBTyxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxHQUFHLENBQUMsR0FBRyxFQUFDO0FBQUEsRUFDckU7QUFDQSxXQUFTLElBQUk7QUFDWCxXQUFPLElBQUksSUFBSSxNQUFNO0FBQUEsRUFDdkI7QUFDQSxTQUFPLFdBQVc7QUFDaEIsV0FBTyxJQUFJQSxHQUFFLE1BQU0sTUFBTSxTQUFTLEdBQUcsRUFBRSxTQUFTLEVBQUUsVUFBVSxHQUFHLEVBQUM7QUFBQSxFQUNsRTtBQUNGO0FBQ0EsU0FBUyxHQUFHQSxJQUFHO0FBQ2IsTUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHQSxFQUFDLEdBQUcsSUFBSSxFQUFFLEdBQUcsQ0FBQztBQUMzQyxTQUFPLEVBQUUsWUFBWSxTQUFTLEdBQUc7QUFDL0IsV0FBTyxVQUFVLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQUEsRUFDekUsR0FBRztBQUNMO0FBQ0EsU0FBUyxHQUFHQSxJQUFHO0FBQ2IsTUFBSSxJQUFJLEVBQUVBLEVBQUM7QUFDWCxXQUFTLEVBQUUsR0FBRyxHQUFHO0FBQ2YsV0FBTyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDO0FBQUEsRUFDekI7QUFDQSxTQUFPLEVBQUUsU0FBUyxTQUFTLEdBQUcsR0FBRztBQUMvQixXQUFPLENBQUMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFBQSxFQUMxQixHQUFHO0FBQ0w7QUFDQSxTQUFTLEdBQUdBLElBQUcsR0FBRztBQUNoQixNQUFJLElBQUksRUFBRUEsRUFBQyxHQUFHLEtBQUssSUFBSSxFQUFFLENBQUMsS0FBSztBQUMvQixNQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUcsUUFBTyxHQUFHQSxFQUFDO0FBQ3pCLE1BQUksSUFBSSxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksSUFBSSxHQUFHLENBQUMsSUFBSTtBQUN6QyxXQUFTLEVBQUUsR0FBRyxHQUFHO0FBQ2YsUUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSTtBQUMvQixXQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztBQUFBLEVBQ3JDO0FBQ0EsU0FBTyxFQUFFLFNBQVMsU0FBUyxHQUFHLEdBQUc7QUFDL0IsUUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQztBQUNyQyxXQUFPLElBQUksSUFBSSxNQUFNLEtBQUssSUFBSSxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxJQUFJLE1BQU0sSUFBSSxFQUFFLENBQUM7QUFBQSxFQUNuRyxHQUFHO0FBQ0w7QUFDQSxTQUFTLEtBQUs7QUFDWixTQUFPLEdBQUcsRUFBRSxFQUFFLE1BQU0sT0FBTyxFQUFFLE9BQU8sQ0FBQyxHQUFHLE9BQU8sQ0FBQztBQUNsRDtBQUNBLFNBQVMsS0FBSztBQUNaLFNBQU8sR0FBRSxFQUFHLFVBQVUsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFLE1BQU0sSUFBSSxFQUFFLFVBQVUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxNQUFNLElBQUksQ0FBQztBQUMzRztBQUNBLFNBQVMsR0FBR0EsSUFBRztBQUNiLE1BQUksSUFBSUEsR0FBRTtBQUNWLFNBQU87QUFBQSxJQUNMLE9BQU8sU0FBUyxHQUFHLEdBQUc7QUFDcEIsZUFBUyxJQUFJLElBQUksRUFBRSxJQUFJLElBQUssQ0FBQUEsR0FBRSxDQUFDLEVBQUUsTUFBTSxHQUFHLENBQUM7QUFBQSxJQUM3QztBQUFBLElBQ0EsUUFBUSxXQUFXO0FBQ2pCLGVBQVMsSUFBSSxJQUFJLEVBQUUsSUFBSSxJQUFLLENBQUFBLEdBQUUsQ0FBQyxFQUFFLE9BQU07QUFBQSxJQUN6QztBQUFBLElBQ0EsV0FBVyxXQUFXO0FBQ3BCLGVBQVMsSUFBSSxJQUFJLEVBQUUsSUFBSSxJQUFLLENBQUFBLEdBQUUsQ0FBQyxFQUFFLFVBQVM7QUFBQSxJQUM1QztBQUFBLElBQ0EsU0FBUyxXQUFXO0FBQ2xCLGVBQVMsSUFBSSxJQUFJLEVBQUUsSUFBSSxJQUFLLENBQUFBLEdBQUUsQ0FBQyxFQUFFLFFBQU87QUFBQSxJQUMxQztBQUFBLElBQ0EsY0FBYyxXQUFXO0FBQ3ZCLGVBQVMsSUFBSSxJQUFJLEVBQUUsSUFBSSxJQUFLLENBQUFBLEdBQUUsQ0FBQyxFQUFFLGFBQVk7QUFBQSxJQUMvQztBQUFBLElBQ0EsWUFBWSxXQUFXO0FBQ3JCLGVBQVMsSUFBSSxJQUFJLEVBQUUsSUFBSSxJQUFLLENBQUFBLEdBQUUsQ0FBQyxFQUFFLFdBQVU7QUFBQSxJQUM3QztBQUFBLEVBQ0o7QUFDQTtBQUNBLFNBQVMsS0FBSztBQUNaLE1BQUlBLElBQUcsR0FBRyxJQUFJLEdBQUUsR0FBSSxHQUFHLElBQUksR0FBRSxFQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLEdBQUcsSUFBSSxHQUFFLEVBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksRUFBRSxPQUFPLFNBQVMsR0FBRyxHQUFHO0FBQzdMLFFBQUksQ0FBQyxHQUFHLENBQUM7QUFBQSxFQUNYLEVBQUM7QUFDRCxXQUFTLEVBQUUsR0FBRztBQUNaLFFBQUksSUFBSSxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQztBQUNyQixXQUFPLElBQUksTUFBTSxFQUFFLE1BQU0sR0FBRyxDQUFDLEdBQUcsTUFBTSxFQUFFLE1BQU0sR0FBRyxDQUFDLEdBQUcsT0FBTyxFQUFFLE1BQU0sR0FBRyxDQUFDLEdBQUc7QUFBQSxFQUM3RTtBQUNBLElBQUUsU0FBUyxTQUFTLEdBQUc7QUFDckIsUUFBSSxJQUFJLEVBQUUsU0FBUyxJQUFJLEVBQUUsVUFBUyxHQUFJLEtBQUssRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssR0FBRyxLQUFLLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLO0FBQ2pGLFlBQVEsS0FBSyxRQUFRLElBQUksU0FBUyxLQUFLLFVBQVUsSUFBSSxTQUFTLElBQUksS0FBSyxTQUFTLElBQUksU0FBUyxLQUFLLFVBQVUsSUFBSSxTQUFTLElBQUksR0FBRyxPQUFPLENBQUM7QUFBQSxFQUMxSSxHQUFHLEVBQUUsU0FBUyxTQUFTLEdBQUc7QUFDeEIsV0FBT0EsTUFBSyxNQUFNLElBQUlBLEtBQUlBLEtBQUksR0FBRyxDQUFDLEVBQUUsT0FBTyxJQUFJLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUFBLEVBQzlFLEdBQUcsRUFBRSxZQUFZLFNBQVMsR0FBRztBQUMzQixXQUFPLFVBQVUsVUFBVSxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFDLEtBQU0sRUFBRSxVQUFTO0FBQUEsRUFDL0YsR0FBRyxFQUFFLFFBQVEsU0FBUyxHQUFHO0FBQ3ZCLFdBQU8sVUFBVSxVQUFVLEVBQUUsTUFBTSxDQUFDLEdBQUcsRUFBRSxNQUFNLElBQUksSUFBSSxHQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUcsRUFBRSxVQUFVLEVBQUUsVUFBUyxDQUFFLEtBQUssRUFBRSxNQUFLO0FBQUEsRUFDN0csR0FBRyxFQUFFLFlBQVksU0FBUyxHQUFHO0FBQzNCLFFBQUksQ0FBQyxVQUFVLE9BQVEsUUFBTyxFQUFFLFVBQVM7QUFDekMsUUFBSSxJQUFJLEVBQUUsTUFBSyxHQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO0FBQ3RDLFdBQU8sSUFBSSxFQUFFLFVBQVUsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDLElBQUksUUFBUSxHQUFHLElBQUksUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLFFBQVEsR0FBRyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsR0FBRyxJQUFJLEVBQUUsVUFBVSxDQUFDLElBQUksUUFBUSxHQUFHLElBQUksUUFBUSxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxJQUFJLFFBQVEsSUFBSSxHQUFHLElBQUksT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksUUFBUSxJQUFJLEdBQUcsSUFBSSxRQUFRLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsR0FBRyxJQUFJLEVBQUUsVUFBVSxDQUFDLElBQUksUUFBUSxHQUFHLElBQUksUUFBUSxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxJQUFJLFFBQVEsSUFBSSxHQUFHLElBQUksUUFBUSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksUUFBUSxJQUFJLEdBQUcsSUFBSSxRQUFRLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsR0FBRyxFQUFDO0FBQUEsRUFDcGEsR0FBRyxFQUFFLFlBQVksU0FBUyxHQUFHLEdBQUc7QUFDOUIsV0FBTyxHQUFHLEdBQUcsR0FB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QztBQUFBLEVBQzNDLEdBQUcsRUFBRSxTQUFTLFNBQVMsR0FBRztBQUN4QixXQUFPLFVBQVUsVUFBVSxFQUFFLENBQUMsR0FBRyxFQUFDLEtBQU0sRUFBQztBQUFBLEVBQzNDLEdBQUcsRUFBRSxhQUFhLFNBQVMsR0FBRztBQUM1QixXQUFPLFVBQVUsVUFBVSxLQUFLLE9BQU8sSUFBSSxJQUFJLElBQUksSUFBSSxRQUFRLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksRUFBQyxLQUFNLEtBQUssT0FBTyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQUEsRUFDbks7QUFDQSxXQUFTLElBQUk7QUFDWCxRQUFJLElBQUksSUFBSSxFQUFDLEdBQUksSUFBSSxFQUFFLEdBQUcsRUFBRSxPQUFNLENBQUUsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNwRCxXQUFPLEVBQUUsS0FBSyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUlBLE9BQU0sS0FBSyxDQUFDLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLElBQUksRUFBRSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztB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QU0sTUFBTSxTQUFTLElBQUksQ0FBQztBQUFBLE1BQzlELEdBQVMsR0FBRyxDQUFDO0FBQUEsSUFDVCxHQUFHLEdBQUcsQ0FBQztBQUFBLEVBQ1Q7QUFDQSxXQUFTLEVBQUUsR0FBRyxHQUFHO0FBQ2YsV0FBTyxJQUFJLEtBQUssSUFBSSxFQUFFLENBQUMsR0FBRyxLQUFLLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxFQUFFLElBQUksSUFBSSxJQUFJLEdBQUcsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQUEsRUFDbEY7QUFDQSxXQUFTLEVBQUUsR0FBRyxHQUFHLEdBQUc7QUFDbEIsUUFBSSxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUU7QUFDL0MsV0FBTyxNQUFNLEVBQUUsS0FBSyxNQUFNLEVBQUUsSUFBSSxJQUFJLElBQUksR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDO0FBQUEsRUFDdEQ7QUFDQSxXQUFTLEVBQUUsR0FBRztBQUNaLFdBQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7QUFBQSxFQUM5RDtBQUNBLFdBQVMsRUFBRSxHQUFHLEdBQUcsR0FBRyxHQUFHO0FBQ3JCLE1BQUUsR0FBRyxjQUFjLFdBQVc7QUFDNUIsUUFBRSxNQUFNLFNBQVMsRUFBRSxNQUFNLENBQUMsRUFBRSxNQUFLO0FBQUEsSUFDbkMsQ0FBQyxFQUFFLEdBQUcsMkJBQTJCLFdBQVc7QUFDMUMsUUFBRSxNQUFNLFNBQVMsRUFBRSxNQUFNLENBQUMsRUFBRSxJQUFHO0FBQUEsSUFDakMsQ0FBQyxFQUFFLE1BQU0sUUFBUSxXQUFXO0FBQzFCLFVBQUksSUFBSSxNQUFNLElBQUksV0FB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
