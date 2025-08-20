import { l, y } from './format-TjzP8gQX-Cs7Vwno2-CeUXJh2P.js';

function i(n, t) {
  const e = l(n);
  return isNaN(t) ? y(n, NaN) : (t && e.setDate(e.getDate() + t), e);
}
function a(n, t) {
  const e = l(n);
  if (isNaN(t)) return y(n, NaN);
  if (!t)
    return e;
  const u = e.getDate(), r = y(n, e.getTime());
  r.setMonth(e.getMonth() + t + 1, 0);
  const c = r.getDate();
  return u >= c ? r : (e.setFullYear(
    r.getFullYear(),
    r.getMonth(),
    u
  ), e);
}
function f(n, t) {
  const e = t * 3;
  return a(n, e);
}
function d(n, t) {
  return a(n, t * 12);
}
function g(n, t) {
  return i(n, -t);
}
function D(n, t) {
  return a(n, -t);
}
function M(n, t) {
  return f(n, -t);
}
function N(n, t) {
  return d(n, -t);
}

export { D, M, N, a, d, f, g, i };
//# sourceMappingURL=subYears-CyoGbgS0-DIOARaW6-mzW26xd4.js.map
//# sourceMappingURL=subYears-CyoGbgS0-DIOARaW6-mzW26xd4.js.map
