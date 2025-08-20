import { c as ce } from './format-TjzP8gQX-Cs7Vwno2-CeUXJh2P.js';
import { j as jd } from './common-Badpcggq-Batnw2Ed-CkZpixXy.js';

const X = (e, o, d, g) => {
  let u = 0, l = 0, b = 0;
  const p = 0;
  return d ? g ? (l = o ? 60 : 0, u = o ? 60 : 0) : b = o ? 20 : 0 : g ? (l = e ? 60 : 0, u = e ? 60 : 0) : b = e ? 20 : 0, { left: u, right: l, top: b, bottom: p };
};
function K({
  displayAsPercentage: e = false,
  displayHorizontally: o = false,
  dps: d = void 0,
  isGroupedBar: g,
  lineMetrics: u,
  metric: l,
  metrics: b,
  results: p,
  reverseXAxis: L = false,
  secondAxisTitle: N = "",
  segment: G,
  showLabels: $ = false,
  showLegend: V = false,
  showSecondYAxis: I = false,
  showTotals: C = false,
  stackBars: h,
  stackMetrics: v = false,
  stacked: x = false,
  theme: f,
  xAxis: q,
  xAxisTitle: R = "",
  yAxisTitle: S = ""
}) {
  return {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: o ? "y" : "x",
    layout: {
      padding: X($, C, x, o)
    },
    scales: {
      y: {
        stacked: x || v,
        grace: "0%",
        grid: {
          display: false
        },
        max: e && !o ? g ? h ? 100 : void 0 : 100 : void 0,
        afterDataLimits: function(t) {
          const a = [
            ...l !== void 0 ? [l] : [],
            ...b || [],
            ...u && !I ? u : []
          ];
          jd(t, p, a, d);
        },
        ticks: {
          //https://www.chartjs.org/docs/latest/axes/labelling.html
          callback: function(t) {
            return o ? this.getLabelForValue(parseFloat(`${t}`)) : e ? `${t}%` : ce(typeof t == "number" ? t.toString() : t, {
              type: "number"
            });
          }
        },
        title: {
          display: !!S,
          text: S
        }
      },
      y1: {
        //optional second y-axis for optional line metrics
        display: I,
        grace: "0%",
        grid: {
          display: false
        },
        position: "right",
        title: {
          display: !!N,
          text: N
        },
        afterDataLimits: function(t) {
          const a = [...u && I ? u : []];
          jd(t, p, a, d);
        }
      },
      x: {
        reverse: L && !o,
        stacked: x || v,
        grid: {
          display: false
        },
        max: e && o ? g ? h ? 100 : void 0 : 100 : void 0,
        ticks: {
          //https://www.chartjs.org/docs/latest/axes/labelling.html
          callback: function(t) {
            return o ? e ? `${t}%` : ce(typeof t == "number" ? t.toString() : t, {
              type: "number"
            }) : this.getLabelForValue(parseFloat(`${t}`));
          }
        },
        title: {
          display: !!R,
          text: R
        }
      }
    },
    animation: {
      duration: 400,
      easing: "linear"
    },
    plugins: {
      legend: {
        display: V,
        position: "bottom",
        labels: {
          usePointStyle: true,
          boxHeight: 8
        }
      },
      tooltip: {
        //https://www.chartjs.org/docs/latest/configuration/tooltip.html
        callbacks: {
          label: function(t) {
            let a = t.dataset.label || "";
            const s = t.datasetIndex, i = [...b || [], ...u || []], r = b ? i[s] : l;
            if (t.parsed && typeof t.parsed == "object") {
              const n = o ? "x" : "y";
              a += `: ${ce(`${t.parsed[n]}`, {
                type: "number",
                dps: d,
                meta: e || r == null ? void 0 : r.meta
              })}`, e && (a += "%");
            }
            return a;
          }
        }
      },
      datalabels: {
        labels: {
          total: {
            anchor: (t) => {
              var n, c;
              const a = t.dataset, s = a.totals;
              if (!s)
                return "end";
              const i = (n = a.xAxisNames) == null ? void 0 : n[t.dataIndex], r = (c = s[i || ""]) == null ? void 0 : c.total;
              return r && r < 0 ? "start" : "end";
            },
            align: (t) => {
              var n, c;
              const a = t.dataset, s = a.totals;
              if (!s)
                return o ? "right" : "top";
              const i = (n = a.xAxisNames) == null ? void 0 : n[t.dataIndex], r = (c = s[i || ""]) == null ? void 0 : c.total;
              return r && r < 0 ? o ? "left" : "bottom" : o ? "right" : "top";
            },
            display: C && h ? "true" : false,
            backgroundColor: f.charts.bar.labels.total.backgroundColor,
            borderRadius: f.charts.bar.labels.total.borderRadius,
            color: f.charts.bar.labels.total.color,
            font: {
              size: f.charts.bar.labels.total.font.size,
              weight: f.charts.bar.labels.total.font.weight
            },
            formatter: (t, a) => {
              const s = a.dataset, i = s.xAxisNames, r = s.totals;
              if (!r || !i)
                return "";
              const n = i[a.dataIndex];
              if (a.datasetIndex === r[n].lastSegment && t !== null) {
                const k = e ? "100" : r[n].total.toString();
                let D = ce(k, {
                  type: "number",
                  dps: d,
                  meta: e || l == null ? void 0 : l.meta
                });
                return e && (D += "%"), D;
              } else
                return "";
            }
          },
          value: {
            //https://chartjs-plugin-datalabels.netlify.app/guide/
            anchor: x || v ? "center" : "end",
            align: x || v ? "center" : "end",
            display: $ ? "auto" : false,
            backgroundColor: f.charts.bar.labels.value.backgroundColor,
            borderRadius: f.charts.bar.labels.value.borderRadius,
            color: f.charts.bar.labels.value.color,
            font: {
              size: f.charts.bar.labels.value.font.size,
              weight: f.charts.bar.labels.value.font.weight
            },
            formatter: (t, a) => {
              const s = a.datasetIndex, i = [...b || [], ...u || []], r = b ? i[s] : l;
              if (t === null) return null;
              let n = ce(t, {
                type: "number",
                dps: d,
                meta: e || r == null ? void 0 : r.meta
              });
              return e && (n += "%"), n;
            }
          }
        }
      }
    }
  };
}

export { K };
//# sourceMappingURL=getBarChartOptions-B4IGPfRT-Q4fKI4Ki-DKQmduZK.js.map
//# sourceMappingURL=getBarChartOptions-B4IGPfRT-Q4fKI4Ki-DKQmduZK.js.map
