import { v } from './Spinner-BeNoTciJ-DsMN3-m0-BGGztM1w.js';
import { d as defineComponent, a as useEmbeddableState, u as useTheme } from './index.esm-CVE60fla-BtsXn2z1.js';
import { j } from './jsx-runtime-CjQXaSqQ-CjMA1-fF-CkV96GpT.js';
import { r as reactExports } from './embeddable-component-BD9bezsm.js';
import { W as Wg } from './Container-mop-J7T8-BpqPaGKG-DiR4tjay.js';
import { q } from './BarChart-Q0q_vPOX-CbLXSR23-UHJkTnBl.js';
import { c as ce } from './format-TjzP8gQX-Cs7Vwno2-CeUXJh2P.js';
import './index-BV21PmyC.js';
import './Title-n-I3Fdvw-CW-j1pzr-DoihF5tM.js';
import './common-Badpcggq-Batnw2Ed-CkZpixXy.js';
import './getBarChartOptions-B4IGPfRT-Q4fKI4Ki-DKQmduZK.js';

const T = (e) => {
  var u, f, g;
  const { results: n } = e, [r, l] = reactExports.useState(e.xAxis.name), [d, x] = useEmbeddableState({ dimension: null }), c = useTheme(), s = (u = e.xAxisOptions) != null && u.find((a) => e.xAxis.name === a.name) ? e.xAxisOptions : [...e.xAxisOptions || [], e.xAxis], b = (a) => {
    l(a);
    const i = s.find((C) => a === C.name) || null;
    x({ dimension: i });
  }, t = s.find((a) => r === a.name);
  let y;
  (t == null ? void 0 : t.nativeType) === "time" && e.granularity && e.granularity in c.dateFormats && (y = c.dateFormats[e.granularity]);
  const p = {
    ...e,
    theme: c,
    xAxis: t || e.xAxis
  }, m = ((f = n == null ? void 0 : n.data) == null ? void 0 : f.map((a) => ({
    ...a,
    ...(t == null ? void 0 : t.name) && {
      [t.name]: y ? ce(a == null ? void 0 : a[t.name], {
        meta: t == null ? void 0 : t.meta,
        dateFormat: y
      }) : a == null ? void 0 : a[t.name]
    }
  }))) ?? [];
  return /* @__PURE__ */ j.jsxs(Wg, { ...e, className: "overflow-y-hidden", children: [
    /* @__PURE__ */ j.jsx("div", { className: "flex h-[60px] w-full", children: /* @__PURE__ */ j.jsx("div", { children: /* @__PURE__ */ j.jsx(
      "select",
      {
        className: `
              border
              flex
              h-10
              items-center
              min-w-[50px]
              px-3
              relative
              w-full
              border-[color:--embeddable-controls-borders-colors-normal]
              rounded-[--embeddable-controls-borders-radius]
            `,
        value: r,
        onChange: (a) => b(a.target.value),
        children: s == null ? void 0 : s.map((a, i) => /* @__PURE__ */ j.jsx("option", { value: a.name, children: a.title }, i))
      }
    ) }) }),
    /* @__PURE__ */ j.jsx("div", { className: "flex grow overflow-hidden", children: n.isLoading || !t || !((g = m == null ? void 0 : m.filter((a, i) => i < 10)) != null && g.some((a) => a[t.name])) ? null : /* @__PURE__ */ j.jsx(q, { ...p, results: { ...n, data: m } }, r) })
  ] });
}, B = {
  name: "DynamicAxisBar",
  label: "Dynamic-axis bar chart",
  classNames: ["inside-card"],
  category: "Misc",
  inputs: [
    {
      name: "ds",
      type: "dataset",
      label: "Dataset to download from",
      category: "Chart data"
    },
    {
      name: "xAxis",
      type: "dimension",
      label: "Default X-axis",
      config: {
        dataset: "ds",
        hideGranularity: true
      },
      category: "Chart data"
    },
    {
      name: "xAxisOptions",
      type: "dimension",
      array: true,
      label: "X-axis options",
      config: {
        dataset: "ds",
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
      label: "Granularity (for dates)",
      defaultValue: "week",
      category: "Variables to configure"
    },
    {
      name: "title",
      type: "string",
      label: "Title",
      description: "The title for the button",
      category: "Chart settings"
    },
    {
      name: "description",
      type: "string",
      label: "Description",
      description: "The description for the button",
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
      name: "displayHorizontally",
      type: "boolean",
      label: "Display Horizontally",
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
      name: "dps",
      type: "number",
      label: "Decimal Places",
      category: "Formatting"
    },
    {
      name: "enableDownloadAsPNG",
      type: "boolean",
      label: "Show download as PNG",
      category: "Export options",
      defaultValue: true
    },
    {
      name: "enableDownloadAsCSV",
      type: "boolean",
      label: "Show download as CSV",
      category: "Export options",
      defaultValue: true
    }
  ]
}, S = defineComponent(T, B, {
  props: (e, [n]) => {
    var d;
    const r = (d = n == null ? void 0 : n.dimension) != null && d.title ? n.dimension : e.xAxis, l = r.nativeType === "time";
    return {
      ...e,
      reverseXAxis: e.reverseXAxis || l,
      results: l ? v({
        from: e.ds,
        select: [
          {
            dimension: r.name,
            granularity: e.granularity
          },
          e.metrics
        ],
        orderBy: [
          {
            property: r,
            direction: "desc"
          }
        ],
        limit: 100
      }) : v({
        from: e.ds,
        select: [r, e.metrics],
        orderBy: [
          {
            property: e.metrics[0],
            direction: "desc"
          }
        ],
        limit: 100
      })
    };
  }
});

export { S as default, B as meta };
//# sourceMappingURL=DynamicAxisBar-B4q-A_fz-DGYe0bhT.js.map
//# sourceMappingURL=DynamicAxisBar-B4q-A_fz-DGYe0bhT.js.map
