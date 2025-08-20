import { r as reactExports } from './embeddable-component-BD9bezsm.js';
import { i, d, f, a, N as N$1, M, D, g } from './subYears-CyoGbgS0-DIOARaW6-mzW26xd4.js';
import { V, i as ie, Y as Y$1, R, e as ee } from './format-TjzP8gQX-Cs7Vwno2-CeUXJh2P.js';

function p(a2, s) {
  return V(a2, s * ie);
}
function m(a2, s) {
  return V(a2, s * 1e3);
}
function S(a2, s) {
  const n = s * 7;
  return i(a2, n);
}
function W(a2, s) {
  return p(a2, -s);
}
function Y(a2, s) {
  return m(a2, -s);
}
function C(a2, s) {
  return S(a2, -s);
}
const G = {
  second: m,
  minute: Y$1,
  hour: p,
  day: i,
  week: S,
  month: a,
  quarter: f,
  year: d
}, J = {
  second: Y,
  minute: R,
  hour: W,
  day: g,
  week: C,
  month: D,
  quarter: M,
  year: N$1
}, N = {
  second: 1,
  minute: 60,
  hour: 3600,
  day: 86400,
  week: 604800,
  month: 2629800,
  // Roughly 30.44 days
  quarter: 7889400,
  // Roughly 91.31 days
  year: 31557600
  // Based on a typical Gregorian year
}, j = (a2, s = "asc") => {
  const { xAxis: n, granularity: u } = a2, f2 = reactExports.useCallback(
    (e, t) => {
      const l = e[e.length - 1], r = t[(n == null ? void 0 : n.name) || ""];
      if (r == null)
        return e;
      if (!l)
        return [...e, t];
      const o = l[(n == null ? void 0 : n.name) || ""];
      if (!o)
        return [...e, t];
      const b = s === "asc" ? G[u || "day"](ee(o), 1) : J[u || "day"](ee(o), 1), d2 = ee(r).getTime(), i2 = b.getTime();
      return (s === "asc" ? d2 <= i2 : d2 >= i2) || Math.abs(i2 - d2) < N[u || "day"] * 1e3 ? [...e, t] : (e.push({
        [(n == null ? void 0 : n.name) || ""]: b.toISOString().split("Z")[0]
        // Format to ISO string without timezone
      }), f2(e, t));
    },
    [n, u, s]
    // Dependencies for useCallback
  );
  return { fillGaps: f2 };
};

export { S, j, m, p };
//# sourceMappingURL=useTimeseries-CKhM5zgf-Dd4vgjj--FzCeDPUA.js.map
//# sourceMappingURL=useTimeseries-CKhM5zgf-Dd4vgjj--FzCeDPUA.js.map
