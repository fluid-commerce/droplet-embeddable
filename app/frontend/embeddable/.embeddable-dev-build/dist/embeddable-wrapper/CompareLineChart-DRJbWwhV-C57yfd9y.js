import { v } from './Spinner-BeNoTciJ-DsMN3-m0-BGGztM1w.js';
import { d as defineComponent, u as useTheme } from './index.esm-CVE60fla-BtsXn2z1.js';
import { j as j$1 } from './jsx-runtime-CjQXaSqQ-CjMA1-fF-CkV96GpT.js';
import { M as Mt, Y as Yi, X as Xi, a as Me, S as St, P as Ph, I as Ih, w as wh, x as xh, F as Fd, $ as $d, j as jd, B as Bd } from './common-Badpcggq-Batnw2Ed-CkZpixXy.js';
import './chartjs-adapter-date-fns.esm-vRFmo1LD-Cpw3-dRH-QkYakUVd.js';
import { r as reactExports } from './embeddable-component-BD9bezsm.js';
import { j } from './useTimeseries-CKhM5zgf-Dd4vgjj--FzCeDPUA.js';
import { n as ne, u as ue, c as ce } from './format-TjzP8gQX-Cs7Vwno2-CeUXJh2P.js';
import { i } from './formatDateTooltips-B_XOEw3--6C5OZZFh-DwNDIsvB.js';
import { n } from './hexToRgb-04GwXQzV-CZRIg1xZ-BDaDovJP.js';
import { W as Wg } from './Container-mop-J7T8-BpqPaGKG-DiR4tjay.js';
import './differenceInSeconds-D-PK4HfM-Dm2bjhDp-CBEYj0I9.js';
import './subYears-CyoGbgS0-DIOARaW6-mzW26xd4.js';
import './index-BV21PmyC.js';
import './Title-n-I3Fdvw-CW-j1pzr-DoihF5tM.js';

Mt.register(
  Yi,
  Xi,
  Me,
  St,
  Ph,
  Ih,
  wh,
  xh,
  Fd
);
const B = (a) => {
  const t = useTheme(), e = reactExports.useMemo(
    () => ({ ...a, theme: t, granularity: a.granularity || "day" }),
    [a, t]
  );
  $d(t, "line");
  const { fillGaps: c } = j(e, "desc"), D = reactExports.useMemo(() => {
    var u, r;
    const { results: s, prevResults: d, metrics: l, applyFill: n$1 } = e, p = (u = s == null ? void 0 : s.data) == null ? void 0 : u.reduce(c, []), g = (r = d == null ? void 0 : d.data) == null ? void 0 : r.reduce(c, []), y = (l == null ? void 0 : l.map((m, i2) => ({
      xAxisID: "period",
      label: m.title,
      data: (p == null ? void 0 : p.map((o) => {
        var h;
        return {
          y: parseFloat(o[m.name] || "0"),
          x: ne(o[((h = e.xAxis) == null ? void 0 : h.name) || ""])
        };
      })) || [],
      backgroundColor: n$1 ? n(t.charts.colors[i2 % t.charts.colors.length], 0.2) : t.charts.colors[i2 % t.charts.colors.length],
      borderColor: t.charts.colors[i2 % t.charts.colors.length],
      pointRadius: 0,
      tension: t.charts.line.lineTension,
      pointHoverRadius: 3,
      fill: n$1,
      cubicInterpolationMode: t.charts.line.cubicInterpolationMode
    }))) || [];
    return {
      datasets: [
        ...y,
        ...y.map((m, i2) => {
          const o = n(t.charts.colors[i2 % t.charts.colors.length], 0.5);
          return {
            cubicInterpolationMode: t.charts.bar.cubicInterpolationMode,
            showLine: !!e.prevTimeFilter,
            xAxisID: "comparison",
            label: `Previous ${l[i2].title}`,
            data: e.prevTimeFilter ? (g == null ? void 0 : g.map((A) => {
              var T;
              return {
                y: parseFloat(A[l[i2].name] || "0"),
                x: ne(A[((T = e.comparisonXAxis) == null ? void 0 : T.name) || e.xAxis.name || ""])
              };
            })) || [] : [],
            backgroundColor: n$1 ? n(t.charts.colors[i2 % t.charts.colors.length], 0.05) : o,
            borderColor: o,
            pointRadius: 0,
            tension: t.charts.line.lineTension,
            pointHoverRadius: 3,
            fill: n$1 && !!e.prevTimeFilter,
            segment: {
              borderDash: [10, 5]
            }
          };
        })
      ]
    };
  }, [e, c, t]), L = reactExports.useMemo(() => {
    var d, l, n2, p, g, y, b, u;
    const s = {
      period: ue(e.timeFilter),
      comparison: ue(e.prevTimeFilter)
    };
    return {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: "index",
        intersect: false
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: e.showLabels ? 20 : 0,
          // Added so the highest data labels fits
          bottom: 0
        }
      },
      scales: {
        y: {
          min: e.yAxisMin,
          grace: "0%",
          // Add percent to add numbers on the y-axis above and below the max and min values
          grid: {
            display: false
          },
          title: {
            display: !!e.yAxisTitle,
            text: e.yAxisTitle
          },
          callback: function(r) {
            return ce(r.toString(), { type: "number" });
          },
          afterDataLimits: function(r) {
            jd(r, e.results, [...e.metrics], e.dps);
          }
        },
        period: {
          min: (l = (d = s.period) == null ? void 0 : d.from) == null ? void 0 : l.toJSON(),
          max: (p = (n2 = s.period) == null ? void 0 : n2.to) == null ? void 0 : p.toJSON(),
          grid: {
            display: false
          },
          type: "time",
          time: {
            round: e.granularity,
            isoWeekday: true,
            displayFormats: t.dateFormats,
            unit: e.granularity
          },
          title: {
            display: !!e.xAxisTitle,
            text: e.xAxisTitle
          }
        },
        comparison: {
          min: (y = (g = s.comparison) == null ? void 0 : g.from) == null ? void 0 : y.toJSON(),
          max: (u = (b = s.comparison) == null ? void 0 : b.to) == null ? void 0 : u.toJSON(),
          display: !!e.comparisonXAxis,
          grid: {
            display: false
          },
          type: "time",
          time: {
            round: e.granularity,
            isoWeekday: true,
            displayFormats: t.dateFormats,
            unit: e.granularity
          },
          title: {
            display: !!e.comparisonXAxisTitle,
            text: e.comparisonXAxisTitle
          }
        }
      },
      animation: {
        duration: 400,
        easing: "linear"
      },
      plugins: {
        legend: {
          display: e.showLegend,
          position: "bottom",
          labels: {
            usePointStyle: true,
            boxHeight: 8
          }
        },
        tooltip: {
          callbacks: {
            title: (r) => i(r, e.granularity, t),
            label: function(r) {
              const m = r.datasetIndex % e.metrics.length, i2 = e.metrics[m];
              let o = r.dataset.label || "";
              return r.parsed.y !== null && (o += `: ${ce(`${r.parsed.y}`, {
                type: "number",
                dps: e.dps,
                meta: i2 == null ? void 0 : i2.meta
              })}`), o;
            }
          }
        },
        datalabels: {
          align: "top",
          display: e.showLabels ? "auto" : false,
          backgroundColor: t.charts.line.labels.backgroundColor,
          borderRadius: t.charts.line.labels.borderRadius,
          color: t.charts.line.labels.color,
          font: {
            size: t.charts.line.labels.font.size,
            weight: t.charts.line.labels.font.weight
          },
          formatter: (r, m) => {
            const i2 = m.datasetIndex % e.metrics.length, o = e.metrics[i2];
            return r ? ce(r.y, {
              type: "number",
              dps: e.dps,
              meta: o == null ? void 0 : o.meta
            }) : null;
          }
        }
      }
    };
  }, [e]);
  return /* @__PURE__ */ j$1.jsx(Wg, { ...e, className: "overflow-y-hidden", children: /* @__PURE__ */ j$1.jsx(Bd, { height: "100%", options: L, data: D }) });
}, W = {
  name: "CompareLineChart",
  label: "Line comparison (time-series)",
  classNames: ["inside-card"],
  category: "Charts: time-series comparison",
  inputs: [
    {
      name: "ds",
      type: "dataset",
      label: "Dataset",
      description: "Dataset",
      defaultValue: false,
      category: "Chart data"
    },
    {
      name: "xAxis",
      type: "dimension",
      label: "X-Axis",
      config: {
        dataset: "ds",
        supportedTypes: ["time"],
        hideGranularity: true
      },
      category: "Chart data"
    },
    {
      name: "comparisonXAxis",
      type: "dimension",
      label: "Comparison X-Axis (optional)",
      config: {
        dataset: "ds",
        supportedTypes: ["time"],
        hideGranularity: true
      },
      category: "Chart data"
    },
    {
      name: "metrics",
      type: "measure",
      array: true,
      label: "Metrics",
      config: {
        dataset: "ds"
      },
      category: "Chart data"
    },
    {
      name: "granularity",
      type: "granularity",
      label: "Granularity",
      defaultValue: "day",
      category: "Variables to configure"
    },
    {
      name: "timeFilter",
      type: "timeRange",
      label: "Primary date range",
      description: "Date range",
      category: "Variables to configure"
    },
    {
      name: "prevTimeFilter",
      type: "timeRange",
      label: "Comparison date range",
      description: "Date range",
      category: "Variables to configure"
    },
    {
      name: "title",
      type: "string",
      label: "Title",
      description: "The title for the chart",
      category: "Chart settings"
    },
    {
      name: "description",
      type: "string",
      label: "Description",
      description: "The description for the chart",
      category: "Chart settings"
    },
    {
      name: "xAxisTitle",
      type: "string",
      label: "X-Axis Title",
      category: "Chart settings"
    },
    {
      name: "comparisonXAxisTitle",
      type: "string",
      label: "Comparison X-Axis Title (optional)",
      description: "Title for the comparison X-Axis",
      category: "Chart settings",
      defaultValue: ""
    },
    {
      name: "yAxisTitle",
      type: "string",
      label: "Y-Axis Title",
      category: "Chart settings"
    },
    {
      name: "showLabels",
      type: "boolean",
      label: "Show Labels",
      category: "Chart settings",
      defaultValue: false
    },
    {
      name: "applyFill",
      type: "boolean",
      label: "Color fill space under line",
      category: "Chart settings",
      defaultValue: false
    },
    {
      name: "yAxisMin",
      type: "number",
      label: "Y-Axis minimum value",
      category: "Chart settings"
    },
    {
      name: "showLegend",
      type: "boolean",
      label: "Show Legend",
      category: "Chart settings",
      defaultValue: true
    },
    {
      name: "enableDownloadAsCSV",
      type: "boolean",
      label: "Show download as CSV",
      category: "Export options",
      defaultValue: true
    },
    {
      name: "enableDownloadAsPNG",
      type: "boolean",
      label: "Show download as PNG",
      category: "Export options",
      defaultValue: true
    },
    {
      name: "dps",
      type: "number",
      label: "Decimal Places",
      category: "Formatting"
    }
  ]
}, se = defineComponent(B, W, {
  props: (a) => {
    var e, c;
    const t = [];
    return t.push({
      property: a.xAxis,
      direction: "desc"
    }), {
      ...a,
      results: v({
        from: a.ds,
        limit: 500,
        orderBy: t,
        select: [
          {
            dimension: (e = a.xAxis) == null ? void 0 : e.name,
            granularity: a.granularity
          },
          a.metrics
        ],
        filters: a.timeFilter && a.xAxis ? [
          {
            property: a.xAxis,
            operator: "inDateRange",
            value: a.timeFilter
          }
        ] : void 0
      }),
      prevResults: v({
        from: a.ds,
        select: [
          {
            dimension: (c = a.xAxis) == null ? void 0 : c.name,
            granularity: a.granularity
          },
          a.metrics
        ],
        limit: a.prevTimeFilter ? 500 : 1,
        orderBy: t,
        filters: a.prevTimeFilter && a.xAxis ? [
          {
            property: a.xAxis,
            operator: "inDateRange",
            value: {
              from: a.prevTimeFilter.from,
              relativeTimeString: "",
              to: a.prevTimeFilter.to
            }
          }
        ] : void 0
      })
    };
  }
});

export { se as default, W as meta };
//# sourceMappingURL=CompareLineChart-DRJbWwhV-C57yfd9y.js.map
//# sourceMappingURL=CompareLineChart-DRJbWwhV-C57yfd9y.js.map
