import { Z as Zt } from './format-TjzP8gQX-Cs7Vwno2-CeUXJh2P.js';

function i(e, s, f) {
  const m = e.map((t) => {
    var o, r;
    return (r = (o = t == null ? void 0 : t.parsed) == null ? void 0 : o.x) == null ? void 0 : r.valueOf();
  }), a = [...new Set(m)];
  if (!(a.length === 1 && a[0] === void 0))
    return a.map((t) => Zt(new Date(t), f.dateFormats[s])).filter((t) => !!t);
}

export { i };
//# sourceMappingURL=formatDateTooltips-B_XOEw3--6C5OZZFh-DwNDIsvB.js.map
//# sourceMappingURL=formatDateTooltips-B_XOEw3--6C5OZZFh-DwNDIsvB.js.map
