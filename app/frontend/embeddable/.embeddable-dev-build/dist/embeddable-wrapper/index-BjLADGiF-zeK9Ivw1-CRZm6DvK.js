import { j as j$1 } from './jsx-runtime-CjQXaSqQ-CjMA1-fF-CkV96GpT.js';
import { M as Mt, Y as Yi, X as Xi, a as Me, k as ke, P as Ph, I as Ih, w as wh, x as xh, F as Fd, $ as $d, W as Wd } from './common-Badpcggq-Batnw2Ed-CkZpixXy.js';
import { j } from './useTimeseries-CKhM5zgf-Dd4vgjj--FzCeDPUA.js';
import { K } from './getBarChartOptions-B4IGPfRT-Q4fKI4Ki-DKQmduZK.js';
import { q as q$1 } from './getStackedChartData-DmWnIJXP-Ji_he_TH-CTtJMDP0.js';
import { W as Wg } from './Container-mop-J7T8-BpqPaGKG-DiR4tjay.js';
import { u as useTheme } from './index.esm-CVE60fla-BtsXn2z1.js';

Mt.register(
  Yi,
  Xi,
  Me,
  ke,
  Ph,
  Ih,
  wh,
  xh,
  Fd
);
const q = (t) => {
  var i;
  const n = useTheme();
  $d(n);
  const u = {
    barPercentage: 0.6,
    barThickness: "flex",
    maxBarThickness: 25,
    minBarLength: 0,
    borderRadius: 3
  }, { fillGaps: g } = j(t, "desc"), { results: r, isTSGroupedBarChart: d } = t, o = {
    ...t,
    results: d ? { ...t.results, data: (i = r == null ? void 0 : r.data) == null ? void 0 : i.reduce(g, []) } : t.results,
    theme: n
  };
  if (t.showTotals) {
    const e = {}, { data: a } = t.results, { metric: h, xAxis: f, segment: R } = t;
    a && a.length > 0 && (a == null || a.forEach((l) => {
      const s = l[f.name], m = parseFloat(l[h.name]);
      e[s] ? (e[s].total += m, e[s].lastSegment = null) : e[s] = {
        total: m,
        lastSegment: null
        // we'll fill this in later
      };
    }), o.totals = e);
  }
  return /* @__PURE__ */ j$1.jsx(Wg, { ...t, className: "overflow-y-hidden", children: /* @__PURE__ */ j$1.jsx(
    Wd,
    {
      height: "100%",
      options: K({ ...o, stacked: t.stackBars, theme: n }),
      data: q$1(o, u)
    }
  ) });
};

export { q };
//# sourceMappingURL=index-BjLADGiF-zeK9Ivw1-CRZm6DvK.js.map
//# sourceMappingURL=index-BjLADGiF-zeK9Ivw1-CRZm6DvK.js.map
