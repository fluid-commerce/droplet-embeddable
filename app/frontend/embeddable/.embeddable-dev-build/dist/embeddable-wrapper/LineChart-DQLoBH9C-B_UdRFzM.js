import { v } from './Spinner-BeNoTciJ-DsMN3-m0-BGGztM1w.js';
import { d as defineComponent, u as useTheme } from './index.esm-CVE60fla-BtsXn2z1.js';
import { j as j$1 } from './jsx-runtime-CjQXaSqQ-CjMA1-fF-CkV96GpT.js';
import { M as Mt, Y as Yi, X as Xi, a as Me, S as St, P as Ph, I as Ih, w as wh, x as xh, F as Fd, $ as $d, j as jd, B as Bd } from './common-Badpcggq-Batnw2Ed-CkZpixXy.js';
import './chartjs-adapter-date-fns.esm-vRFmo1LD-Cpw3-dRH-QkYakUVd.js';
import { r as reactExports } from './embeddable-component-BD9bezsm.js';
import { j } from './useTimeseries-CKhM5zgf-Dd4vgjj--FzCeDPUA.js';
import { n as ne, c as ce } from './format-TjzP8gQX-Cs7Vwno2-CeUXJh2P.js';
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
const X = (a) => {
  const { results: d, title: m } = a, { fillGaps: u } = j(a, "desc"), l = useTheme();
  $d(l, "line");
  const e = {
    ...a,
    theme: l
  }, C = reactExports.useMemo(() => {
    var g;
    const { results: t, metrics: i2, applyFill: r, theme: s } = e, n$1 = (g = t == null ? void 0 : t.data) == null ? void 0 : g.reduce(u, []);
    let o = s.charts.colors;
    return s.charts.line.colors && (o = s.charts.line.colors), {
      datasets: (i2 == null ? void 0 : i2.map((y, c) => ({
        label: y.title,
        data: (n$1 == null ? void 0 : n$1.map((h) => {
          var b;
          return {
            y: parseFloat(h[y.name] || "0"),
            x: ne(h[((b = a.xAxis) == null ? void 0 : b.name) || ""])
          };
        })) || [],
        backgroundColor: r ? n(o[c % o.length], 0.2) : o[c % o.length],
        borderColor: o[c % o.length],
        pointRadius: 0,
        tension: s.charts.line.lineTension,
        pointHoverRadius: 3,
        fill: r,
        cubicInterpolationMode: s.charts.bar.cubicInterpolationMode
      }))) || []
    };
  }, [e, u]), A = reactExports.useMemo(
    () => ({
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
          callback: function(t) {
            return ce(t.toString(), { type: "number" });
          },
          afterDataLimits: function(t) {
            jd(
              t,
              e.results,
              [...e.metrics],
              e.dps
            );
          }
        },
        x: {
          grid: {
            display: false
          },
          title: {
            display: !!e.xAxisTitle,
            text: e.xAxisTitle
          },
          type: "time",
          time: {
            round: e.granularity,
            displayFormats: l.dateFormats,
            unit: e.granularity
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
        datalabels: {
          align: "top",
          display: e.showLabels ? "auto" : false,
          backgroundColor: l.charts.line.labels.backgroundColor,
          borderRadius: l.charts.line.labels.borderRadius,
          color: l.charts.line.labels.color,
          font: {
            size: l.charts.line.labels.font.size,
            weight: l.charts.line.labels.font.weight
          },
          formatter: (t, i2) => {
            const r = i2.datasetIndex, s = e.metrics[r];
            return t ? ce(t.y, {
              type: "number",
              dps: e.dps,
              meta: s == null ? void 0 : s.meta
            }) : null;
          }
        },
        tooltip: {
          //https://www.chartjs.org/docs/latest/configuration/tooltip.html
          callbacks: {
            label: function(t) {
              const i2 = t.datasetIndex, r = e.metrics[i2];
              let s = t.dataset.label || "";
              return t.parsed.y !== null && (s += `: ${ce(`${t.parsed.y}`, {
                type: "number",
                dps: e.dps,
                meta: r == null ? void 0 : r.meta
              })}`), s;
            },
            title: (t) => i(t, e.granularity, l)
          }
        }
      }
    }),
    [e, l.dateFormats]
  );
  return /* @__PURE__ */ j$1.jsx(Wg, { ...e, className: "overflow-y-hidden", children: /* @__PURE__ */ j$1.jsx(Bd, { height: "100%", options: A, data: C }) });
}, $ = {
  name: "LineChart",
  label: "Line chart (time-series)",
  classNames: ["inside-card"],
  category: "Charts: time-series",
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
      name: "limit",
      type: "number",
      label: "Limit results",
      defaultValue: 100,
      category: "Chart settings"
    },
    {
      name: "dps",
      type: "number",
      label: "Decimal Places",
      category: "Formatting"
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
    }
  ]
}, ae = defineComponent(X, $, {
  props: (a) => {
    var m;
    const d = [];
    return d.push({
      property: a.xAxis,
      direction: "desc"
    }), {
      ...a,
      results: v({
        from: a.ds,
        limit: a.limit || 500,
        orderBy: d,
        select: [
          {
            dimension: (m = a.xAxis) == null ? void 0 : m.name,
            granularity: a.granularity
          },
          a.metrics
        ]
      })
    };
  }
});

export { ae as default, $ as meta };
//# sourceMappingURL=LineChart-DQLoBH9C-B_UdRFzM.js.map
//# sourceMappingURL=LineChart-DQLoBH9C-B_UdRFzM.js.map
