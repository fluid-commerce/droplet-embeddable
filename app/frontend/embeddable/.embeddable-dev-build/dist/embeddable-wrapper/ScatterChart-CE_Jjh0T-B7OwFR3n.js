import { v } from './Spinner-BeNoTciJ-DsMN3-m0-BGGztM1w.js';
import { d as defineComponent, u as useTheme } from './index.esm-CVE60fla-BtsXn2z1.js';
import { j as j$1 } from './jsx-runtime-CjQXaSqQ-CjMA1-fF-CkV96GpT.js';
import { W as Wg } from './Container-mop-J7T8-BpqPaGKG-DiR4tjay.js';
import { j } from './useTimeseries-CKhM5zgf-Dd4vgjj--FzCeDPUA.js';
import { M as Mt, Y as Yi, X as Xi, L as Le, a as Me, P as Ph, I as Ih, w as wh, x as xh, F as Fd, $ as $d, H as Hd, j as jd } from './common-Badpcggq-Batnw2Ed-CkZpixXy.js';
import './chartjs-adapter-date-fns.esm-vRFmo1LD-Cpw3-dRH-QkYakUVd.js';
import { c as ce } from './format-TjzP8gQX-Cs7Vwno2-CeUXJh2P.js';
import { n } from './hexToRgb-04GwXQzV-CZRIg1xZ-BDaDovJP.js';
import './embeddable-component-BD9bezsm.js';
import './index-BV21PmyC.js';
import './Title-n-I3Fdvw-CW-j1pzr-DoihF5tM.js';
import './subYears-CyoGbgS0-DIOARaW6-mzW26xd4.js';
import './differenceInSeconds-D-PK4HfM-Dm2bjhDp-CBEYj0I9.js';

Mt.register(
  Yi,
  Xi,
  Le,
  Me,
  Ph,
  Ih,
  wh,
  xh,
  Fd
);
const P = (e) => {
  var n2;
  const i = useTheme();
  $d(i, "scatter");
  const t = {
    ...e,
    theme: i
  }, { fillGaps: a } = j(t, "desc"), { results: s } = t, l = t.isTimeDimension ? (n2 = s == null ? void 0 : s.data) == null ? void 0 : n2.reduce(a, []) : s == null ? void 0 : s.data, r = k(t, l);
  return /* @__PURE__ */ j$1.jsx(Wg, { ...t, className: "overflow-y-hidden", children: /* @__PURE__ */ j$1.jsx(Hd, { height: "100%", options: X(t, r), data: r }) });
};
function X(e, i) {
  const { theme: t } = e;
  return i.datasets, {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 400,
      easing: "linear"
    },
    scales: {
      y: {
        min: e.yAxisMin,
        grid: {
          display: false
        },
        afterDataLimits: function(a) {
          jd(a, e.results, [...e.metrics], e.dps);
        },
        title: {
          display: !!e.yAxisTitle,
          text: e.yAxisTitle
        }
      },
      x: {
        reverse: e.reverseXAxis,
        type: e.isTimeDimension ? "time" : "category",
        time: {
          round: e.granularity,
          isoWeekday: true,
          displayFormats: t.dateFormats,
          unit: e.granularity
        },
        grid: {
          display: false
        },
        title: {
          display: !!e.xAxisTitle,
          text: e.xAxisTitle
        }
      }
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: e.showLabels ? 30 : 0,
        bottom: 0
      }
    },
    plugins: {
      datalabels: {
        display: e.showLabels ? "auto" : false,
        anchor: "end",
        align: "end",
        backgroundColor: t.charts.scatter.labels.backgroundColor,
        borderRadius: t.charts.scatter.labels.borderRadius,
        color: t.charts.scatter.labels.color,
        font: {
          size: t.charts.scatter.labels.font.size,
          weight: t.charts.scatter.labels.font.weight
        },
        formatter: (a, s) => {
          const l = s.datasetIndex, r = e.metrics[l];
          return a ? ce(a.y, {
            type: "number",
            dps: e.dps,
            meta: r == null ? void 0 : r.meta
          }) : null;
        }
      },
      tooltip: {
        //https://www.chartjs.org/docs/latest/configuration/tooltip.html
        callbacks: {
          label: function(a) {
            let s = a.dataset.label || "";
            const l = a.datasetIndex, r = e.metrics[l];
            return a.parsed.y !== null && (s += `: ${ce(`${a.parsed.y}`, {
              type: "number",
              dps: e.dps,
              meta: r == null ? void 0 : r.meta
            })}`), s;
          }
        }
      },
      legend: {
        display: e.showLegend,
        position: "bottom",
        labels: {
          usePointStyle: true,
          boxHeight: 10
        }
      }
    }
  };
}
function k(e, i) {
  const { theme: t } = e;
  return {
    datasets: e.metrics.map((a, s) => ({
      label: a.title,
      data: (i == null ? void 0 : i.map((l) => ({
        x: l[e.xAxis.name],
        y: parseFloat(l[a.name]) || 0
      }))) || [],
      backgroundColor: n(t.charts.colors[s], 0.8)
    }))
  };
}
const G = {
  name: "ScatterChart",
  label: "Scatter chart",
  classNames: ["inside-card"],
  category: "Charts: essentials",
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
        hideGranularity: true
      },
      category: "Chart data"
    },
    {
      name: "metrics",
      type: "measure",
      label: "Metrics",
      array: true,
      config: {
        dataset: "ds",
        hideGranularity: true
      },
      category: "Chart data"
    },
    {
      name: "limit",
      type: "number",
      label: "Limit results",
      category: "Chart data"
    },
    {
      name: "granularity",
      type: "granularity",
      label: "Granularity",
      defaultValue: "week",
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
      name: "showLegend",
      type: "boolean",
      label: "Show Legend",
      category: "Chart settings",
      defaultValue: true
    },
    {
      name: "showLabels",
      type: "boolean",
      label: "Show Labels",
      category: "Chart settings",
      defaultValue: false
    },
    {
      name: "reverseXAxis",
      type: "boolean",
      label: "Reverse X Axis",
      category: "Chart settings",
      defaultValue: false
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
      name: "yAxisMin",
      type: "number",
      label: "Y-Axis minimum value",
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
}, Y = defineComponent(P, G, {
  props: (e) => {
    var a;
    const i = [];
    i.push({
      property: e.xAxis,
      direction: "desc"
    });
    const t = e.xAxis.nativeType === "time";
    return {
      ...e,
      reverseXAxis: e.reverseXAxis,
      isTimeDimension: t,
      results: t ? v({
        from: e.ds,
        orderBy: i,
        select: [
          { dimension: (a = e.xAxis) == null ? void 0 : a.name, granularity: e.granularity },
          e.metrics
        ],
        limit: e.limit || 50
      }) : v({
        from: e.ds,
        select: [e.xAxis, e.metrics],
        limit: e.limit || 50
      })
    };
  }
});

export { Y as default, G as meta };
//# sourceMappingURL=ScatterChart-CE_Jjh0T-B7OwFR3n.js.map
//# sourceMappingURL=ScatterChart-CE_Jjh0T-B7OwFR3n.js.map
