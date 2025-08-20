import { e as ee$1, v } from './Spinner-BeNoTciJ-DsMN3-m0-BGGztM1w.js';
import { d as defineComponent, u as useTheme } from './index.esm-CVE60fla-BtsXn2z1.js';
import { j } from './jsx-runtime-CjQXaSqQ-CjMA1-fF-CkV96GpT.js';
import { M as Mt, F as Fd, Y as Yi, X as Xi, a as Me, S as St, q as qt, P as Ph, I as Ih, w as wh, $ as $d, z as zd, N as Nd } from './common-Badpcggq-Batnw2Ed-CkZpixXy.js';
import { r as reactExports } from './embeddable-component-BD9bezsm.js';
import { c as ce } from './format-TjzP8gQX-Cs7Vwno2-CeUXJh2P.js';
import { W as Wg } from './Container-mop-J7T8-BpqPaGKG-DiR4tjay.js';
import './index-BV21PmyC.js';
import './Title-n-I3Fdvw-CW-j1pzr-DoihF5tM.js';

Mt.register(
  Fd,
  Yi,
  Xi,
  Me,
  St,
  qt,
  Ph,
  Ih,
  wh
);
const W = (e) => {
  const { results: a, title: t, enableDownloadAsCSV: r, maxSegments: i, metric: g, slice: n, onClick: o, granularity: b } = e, l = useTheme(), c = reactExports.useMemo(() => {
    var p;
    let m;
    return (n == null ? void 0 : n.nativeType) === "time" && b && b in l.dateFormats && (m = l.dateFormats[b]), ((p = a == null ? void 0 : a.data) == null ? void 0 : p.map((s) => ({
      ...s,
      ...(n == null ? void 0 : n.name) && {
        [n.name]: m ? ce(s == null ? void 0 : s[n.name], {
          meta: n == null ? void 0 : n.meta,
          dateFormat: m
        }) : s == null ? void 0 : s[n.name]
      }
    }))) ?? [];
  }, [a == null ? void 0 : a.data, n, b, l.dateFormats]);
  $d(l, "pie");
  let h = l.charts.colors;
  l.charts.pie.colors && (h = l.charts.pie.colors);
  const f = {
    ...e,
    theme: l,
    results: { ...a, data: c }
  }, [y, d] = reactExports.useState(null), u = reactExports.useRef(null), S = (m) => {
    if (!m.length || m[0].index === y) {
      o({ slice: null, metric: null }), d(null);
      return;
    }
    const { datasetIndex: p, index: s } = m[0];
    i && s + 1 >= i || (d(s), o({
      slice: c == null ? void 0 : c[s][n.name],
      metric: c == null ? void 0 : c[s][g.name]
    }));
  }, k = (m) => {
    const { current: p } = u;
    p && S(zd(p, m));
  };
  return /* @__PURE__ */ j.jsx(Wg, { ...e, className: "overflow-y-hidden", children: /* @__PURE__ */ j.jsx(
    Nd,
    {
      height: "100%",
      options: H(f, l),
      data: B(f, h),
      ref: u,
      onClick: k
    }
  ) });
};
function H(e, a) {
  return {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 400,
      easing: "linear"
    },
    cutout: "45%",
    plugins: {
      datalabels: {
        // Great resource: https://quickchart.io/documentation/chart-js/custom-pie-doughnut-chart-labels/
        backgroundColor: a.charts.pie.labels.backgroundColor,
        borderRadius: a.charts.pie.labels.borderRadius,
        color: a.charts.pie.labels.color,
        display: e.showLabels ? "auto" : false,
        font: {
          size: a.charts.pie.labels.font.size,
          weight: a.charts.pie.labels.font.weight
        },
        formatter: (t) => {
          const r = t ? ce(t, {
            type: "number",
            dps: e.dps,
            meta: e.displayAsPercentage ? void 0 : e.metric.meta
          }) : null;
          return e.displayAsPercentage ? `${r}%` : r;
        }
      },
      tooltip: {
        //https://www.chartjs.org/docs/latest/configuration/tooltip.html
        callbacks: {
          label: function(t) {
            let r = t.dataset.label || "";
            return typeof t.dataset.label == "boolean" && (r = t.dataset.label ? "True" : "False"), t.parsed !== null && (r += `: ${ce(`${t.parsed || ""}`, {
              type: "number",
              dps: e.dps,
              meta: e.displayAsPercentage ? void 0 : e.metric.meta
            })}`), r = e.displayAsPercentage ? `${r}%` : r, r;
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
function J(e, a, t, r) {
  if (!r || !t || !a) return e;
  const i = [...e || []].sort((n, o) => parseInt(o[t.name]) - parseInt(n[t.name])).slice(0, r - 1), g = e == null ? void 0 : e.slice(r - 1).reduce((n, o) => n + parseInt(o[t.name]), 0);
  return i.push({ [a.name]: "Other", [t.name]: g }), i;
}
function B(e, a) {
  var y;
  const { maxSegments: t, results: r, metric: i, slice: g, displayAsPercentage: n, theme: o } = e, l = t && t < (((y = r == null ? void 0 : r.data) == null ? void 0 : y.length) || 0) ? J(r.data || [], g, i, t) : r.data, c = l == null ? void 0 : l.map((d) => d[g.name]), h = n ? l == null ? void 0 : l.reduce((d, u) => d + parseFloat(u[i.name]), 0) : null, f = l == null ? void 0 : l.map((d) => {
    const u = parseFloat(d[i.name]);
    return n && h ? u * 100 / h : u;
  });
  return {
    labels: c,
    datasets: [
      {
        data: f,
        backgroundColor: a,
        borderColor: o.charts.pie.borderColor,
        borderWidth: o.charts.pie.borderWidth,
        weight: o.charts.pie.weight
      }
    ]
  };
}
const K = {
  name: "PieChart",
  label: "Pie chart",
  classNames: ["inside-card"],
  category: "Charts: essentials",
  inputs: [
    {
      name: "ds",
      type: "dataset",
      label: "Dataset to display",
      category: "Chart data"
    },
    {
      name: "slice",
      type: "dimension",
      label: "Slice",
      required: true,
      config: {
        dataset: "ds"
      },
      category: "Chart data"
    },
    {
      name: "metric",
      type: "measure",
      label: "Metric",
      required: true,
      config: {
        dataset: "ds"
      },
      category: "Chart data"
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
      label: "Turn on the legend",
      defaultValue: true,
      category: "Chart settings"
    },
    {
      name: "maxSegments",
      type: "number",
      label: "Max Legend items",
      defaultValue: 8,
      category: "Chart settings"
    },
    {
      name: "showLabels",
      type: "boolean",
      label: "Show Labels",
      defaultValue: false,
      category: "Chart settings"
    },
    {
      name: "displayAsPercentage",
      type: "boolean",
      label: "Display as Percentages",
      defaultValue: false,
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
  ],
  events: [
    {
      name: "onClick",
      label: "Click",
      properties: [
        {
          name: "slice",
          type: "string"
        },
        {
          name: "metric",
          type: "number"
        }
      ]
    }
  ]
}, ae = defineComponent(W, K, {
  props: (e) => {
    var a, t;
    return {
      ...e,
      granularity: (t = (a = e.slice) == null ? void 0 : a.inputs) == null ? void 0 : t.granularity,
      results: v({
        from: e.ds,
        select: [e.slice, e.metric]
      })
    };
  },
  events: {
    onClick: (e) => ({
      slice: e.slice || ee$1.noFilter(),
      metric: e.metric || ee$1.noFilter()
    })
  }
});

export { ae as default, K as meta };
//# sourceMappingURL=PieChart-DLV5F34y-2kKBYEYD.js.map
//# sourceMappingURL=PieChart-DLV5F34y-2kKBYEYD.js.map
