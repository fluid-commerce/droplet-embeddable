import { c as ce } from './format-TjzP8gQX-Cs7Vwno2-CeUXJh2P.js';

function q(b, k, S) {
  var v, T, C;
  const {
    displayAsPercentage: E,
    granularity: h,
    maxSegments: p,
    metric: d,
    results: r,
    segment: o,
    showTotals: O,
    theme: l,
    totals: y,
    useCustomDateFormat: w,
    xAxis: a
  } = b, g = [...new Set((v = r == null ? void 0 : r.data) == null ? void 0 : v.map((t) => t[(a == null ? void 0 : a.name) || ""]))], i = V(), m = {}, I = (S == null ? void 0 : S.chartType) === "stackedAreaChart" ? 0 : null;
  g.forEach((t) => {
    const n = {};
    i.forEach((c) => n[c] = I), m[t] = n;
  }), (T = r == null ? void 0 : r.data) == null || T.forEach((t) => {
    const n = t[(o == null ? void 0 : o.name) || ""], c = t[(a == null ? void 0 : a.name) || ""], s = t[(d == null ? void 0 : d.name) || ""];
    i.includes(n) ? m[c][n] = parseFloat(s) : m[c].Other = (m[c].Other || 0) + parseFloat(s);
  });
  let F;
  return w && h ? F = l.dateFormats[h] : a.nativeType === "time" && (h && l.dateFormats[h] ? F = l.dateFormats[h] : (C = a == null ? void 0 : a.inputs) != null && C.granularity && l.dateFormats[a.inputs.granularity] && (F = l.dateFormats[a.inputs.granularity])), {
    labels: g.map((t) => ce(t, { meta: a == null ? void 0 : a.meta, dateFormat: F })),
    datasets: i.map((t, n) => ({
      ...k,
      backgroundColor: l.charts.colors[n % l.charts.colors.length],
      borderColor: l.charts.colors[n % l.charts.colors.length],
      label: t,
      // this is actually segment name, not label, but chart.js wants "label" here
      data: g.map((s) => {
        const u = m[s][t];
        return O && y && u !== null && (y[s].lastSegment = n), E && u !== null ? parseFloat(
          `${u * 100 / i.reduce((f, e) => m[s][e] === null ? f : m[s][e] + f, 0)}`
        ) : u;
      }),
      xAxisNames: g,
      totals: y
    }))
  };
  function V() {
    var u, f;
    const t = [
      ...new Set((u = r == null ? void 0 : r.data) == null ? void 0 : u.map((e) => e[(o == null ? void 0 : o.name) || ""] || "No value"))
    ];
    if (!p || t.length <= p || p < 1)
      return t;
    const n = {};
    (f = r == null ? void 0 : r.data) == null || f.forEach(
      (e) => n[e[(o == null ? void 0 : o.name) || ""]] = (n[e[(o == null ? void 0 : o.name) || ""]] || 0) + parseInt(e[(d == null ? void 0 : d.name) || ""])
    );
    const s = Object.keys(n).map((e) => ({
      name: e,
      value: n[e]
    })).sort((e, D) => D.value - e.value).slice(0, p).map((e) => e.name);
    return s.push("Other"), s;
  }
}

export { q };
//# sourceMappingURL=getStackedChartData-DmWnIJXP-Ji_he_TH-CTtJMDP0.js.map
//# sourceMappingURL=getStackedChartData-DmWnIJXP-Ji_he_TH-CTtJMDP0.js.map
