import { j } from './jsx-runtime-CjQXaSqQ-CjMA1-fF-CkV96GpT.js';
import { M as Mt, Y as Yi, X as Xi, a as Me, k as ke, S as St, P as Ph, I as Ih, w as wh, x as xh, F as Fd, O as Od, $ as $d } from './common-Badpcggq-Batnw2Ed-CkZpixXy.js';
import { c as ce } from './format-TjzP8gQX-Cs7Vwno2-CeUXJh2P.js';
import { K } from './getBarChartOptions-B4IGPfRT-Q4fKI4Ki-DKQmduZK.js';

Mt.register(
  Yi,
  Xi,
  Me,
  ke,
  St,
  Ph,
  Ih,
  wh,
  xh,
  Fd
);
function q({ ...l }) {
  return /* @__PURE__ */ j.jsx(
    Od,
    {
      type: "bar",
      height: "100%",
      options: K({ ...l, stacked: false }),
      data: J(l)
    }
  );
}
function J(l) {
  var b, g;
  const { results: t, xAxis: a, metrics: s, lineMetrics: c, showSecondYAxis: u, theme: e } = l, d = (b = a == null ? void 0 : a.inputs) == null ? void 0 : b.granularity, {
    charts: { colors: f },
    dateFormats: h
  } = e;
  $d(e);
  let r = f;
  e.charts.bar.colors && (r = e.charts.bar.colors);
  const C = (a == null ? void 0 : a.nativeType) === "time";
  let m;
  d && d in h && (m = h[d]);
  const y = [
    ...new Set(
      (g = t == null ? void 0 : t.data) == null ? void 0 : g.map((o) => {
        const n = o[a == null ? void 0 : a.name];
        return ce(n ?? "", {
          meta: a == null ? void 0 : a.meta,
          ...C ? { dateFormat: m } : {}
        });
      })
    )
  ], k = (s == null ? void 0 : s.map((o, n) => {
    var i;
    return {
      backgroundColor: r[n % r.length],
      barPercentage: 0.8,
      barThickness: "flex",
      borderRadius: e.charts.bar.borderRadius,
      borderSkipped: e.charts.bar.borderSkipped,
      borderWidth: e.charts.bar.borderWidth,
      data: ((i = t == null ? void 0 : t.data) == null ? void 0 : i.map((p) => parseFloat(p[o.name] || 0))) || [],
      label: o.title,
      maxBarThickness: 50,
      minBarLength: 0,
      order: 1
    };
  })) || [], B = (c == null ? void 0 : c.map((o, n) => {
    var i;
    return {
      backgroundColor: r[s.length + n % r.length],
      borderColor: r[s.length + n % r.length],
      cubicInterpolationMode: e.charts.bar.cubicInterpolationMode,
      data: ((i = t == null ? void 0 : t.data) == null ? void 0 : i.map((p) => parseFloat(p[o.name] || 0))) || [],
      label: o.title,
      order: 0,
      pointHoverRadius: 3,
      pointRadius: 2,
      tension: e.charts.bar.lineTension,
      type: "line",
      yAxisID: u ? "y1" : "y"
    };
  })) || [];
  return {
    labels: y,
    datasets: [...k, ...B]
  };
}

export { q };
//# sourceMappingURL=BarChart-Q0q_vPOX-CbLXSR23-UHJkTnBl.js.map
//# sourceMappingURL=BarChart-Q0q_vPOX-CbLXSR23-UHJkTnBl.js.map
