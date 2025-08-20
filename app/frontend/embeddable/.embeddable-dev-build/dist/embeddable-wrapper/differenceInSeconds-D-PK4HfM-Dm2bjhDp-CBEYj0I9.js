import { l } from './format-TjzP8gQX-Cs7Vwno2-CeUXJh2P.js';

function c(n) {
  return (e) => {
    const t = (n ? Math[n] : Math.trunc)(e);
    return t === 0 ? 0 : t;
  };
}
function d(n, e) {
  return +l(n) - +l(e);
}
function o(n) {
  const e = l(n);
  return e.setHours(23, 59, 59, 999), e;
}
function a(n, e, r) {
  const t = d(n, e) / 1e3;
  return c(r == null ? void 0 : r.roundingMethod)(t);
}

export { a, c, d, o };
//# sourceMappingURL=differenceInSeconds-D-PK4HfM-Dm2bjhDp-CBEYj0I9.js.map
//# sourceMappingURL=differenceInSeconds-D-PK4HfM-Dm2bjhDp-CBEYj0I9.js.map
