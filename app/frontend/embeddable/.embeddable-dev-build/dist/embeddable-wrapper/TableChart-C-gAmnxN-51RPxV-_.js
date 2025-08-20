import { O as Oe, v } from './Spinner-BeNoTciJ-DsMN3-m0-BGGztM1w.js';
import { d as defineComponent, u as useTheme, a as useEmbeddableState } from './index.esm-CVE60fla-BtsXn2z1.js';
import { o, n } from './SortDirection.type.emb-Ddgerf5H-Cxcj1Pys-CMHk9l9o.js';
import { j } from './jsx-runtime-CjQXaSqQ-CjMA1-fF-CkV96GpT.js';
import { r as reactExports } from './embeddable-component-BD9bezsm.js';
import { k as kg, _ as _g, P as Pg, N as Ng, W as Wg } from './Container-mop-J7T8-BpqPaGKG-DiR4tjay.js';
import { u } from './cn-MtANU1gm-CGxwOT4x-BEfrUPk-.js';
import { c as ce, d as de } from './format-TjzP8gQX-Cs7Vwno2-CeUXJh2P.js';
import './index-BV21PmyC.js';
import './Title-n-I3Fdvw-CW-j1pzr-DoihF5tM.js';

const Z = ({ currentPage: e, hasNextPage: t, onPageChange: a }) => /* @__PURE__ */ j.jsxs(
  "div",
  {
    className: `
        flex
        items-center
        justify-center
        left-0
        select-none
        sticky
        font-[--embeddable-charts-fontWeights-pagination]
        text-[color:--embeddable-font-colorNormal]
        text-[size:--embeddable-font-size]
      `,
    children: [
      /* @__PURE__ */ j.jsx(
        kg,
        {
          className: u(
            `
            border
            cursor-pointer
            flex
            h-8
            hover:bg-black/10
            items-center
            justify-center
            p-1
            w-8
            border-[color:--embeddable-controls-borders-colors-normal]
            rounded-[--embeddable-controls-borders-radius]
          `,
            {
              "opacity-50 pointer-events-none": e === 0
            }
          ),
          onClick: () => {
            a == null || a(e - 1);
          }
        }
      ),
      /* @__PURE__ */ j.jsxs("span", { className: "mx-4", children: [
        "Page ",
        e + 1
      ] }),
      /* @__PURE__ */ j.jsx(
        _g,
        {
          className: u(
            `
          border
          cursor-pointer
          flex
          h-8
          hover:bg-black/10
          items-center
          justify-center
          p-1
          w-8
          border-[color:--embeddable-controls-borders-colors-normal]
          rounded-[--embeddable-controls-borders-radius]
          
        `,
            {
              "opacity-50 pointer-events-none": !t
            }
          ),
          onClick: () => {
            a == null || a(e + 1);
          }
        }
      )
    ]
  }
), B = ({ columns: e, sortBy: t, sortDirection: a, onSortingChange: o2, minColumnWidth: f }) => (useTheme(), /* @__PURE__ */ j.jsx("thead", { className: "border-y border-[color:--embeddable-controls-boders-colors-primary]", children: /* @__PURE__ */ j.jsx("tr", { children: e == null ? void 0 : e.map((s) => {
  var h;
  const d = (t == null ? void 0 : t.name) === s.name, p = d ? a === n.ASCENDING ? n.DESCENDING : n.ASCENDING : n.ASCENDING;
  return /* @__PURE__ */ j.jsx(
    "th",
    {
      className: `
                cursor-pointer
                p-3
                select-none
                bg-[color:--embeddable-controls-backgrounds-colors-soft]
              `,
      style: f ? {
        minWidth: `${f}px`,
        maxWidth: `${f * 1.2}px`
      } : {},
      onClick: () => o2 == null ? void 0 : o2(s, p),
      children: /* @__PURE__ */ j.jsxs("div", { className: "flex items-center gap-1 hover:text-black", children: [
        /* @__PURE__ */ j.jsx("span", { className: "embeddable-table-header mr-1 truncate", children: ((h = s == null ? void 0 : s.inputs) == null ? void 0 : h.customColumnLabel) ?? s.title }),
        d ? /* @__PURE__ */ j.jsx("span", { className: "w-3", children: a === n.ASCENDING ? /* @__PURE__ */ j.jsx(Pg, { fill: "currentcolor" }) : /* @__PURE__ */ j.jsx(Ng, { fill: "currentcolor" }) }) : null
      ] })
    },
    s.name
  );
}) }) })), P = (e) => {
  var D, v2, V, A, R, z, k, E, T, W;
  const { columns: t, results: a, allResults: o2 } = e, [f, s] = reactExports.useState(false), [d, p] = reactExports.useState(0), [h, S] = reactExports.useState(false), g = useTheme(), [l, c] = useEmbeddableState({
    downloadAll: false,
    maxRowsFit: 0,
    page: 0,
    prevVariableValues: {},
    sort: e.defaultSort
  });
  reactExports.useEffect(() => {
    h || c((n2) => ({ ...n2, maxRowsFit: d }));
  }, [e.columns, d, c, h]), reactExports.useEffect(() => {
    if (f) {
      if (!o2 || !o2.data || o2.data.length === 0)
        return;
      Oe(e, o2 == null ? void 0 : o2.data, [], "downloaded-chart-data"), s(false), c((n2) => ({ ...n2, downloadAll: false }));
    }
  }, [o2, f, e, c]);
  const w = reactExports.useCallback(
    ({ height: n2 }) => {
      var b, m;
      let i = 0;
      const y = (n2 || 76) - 76, u2 = Math.floor(y / 44);
      d === u2 && u2 === i || ((m = (b = e.results) == null ? void 0 : b.data) == null ? void 0 : m.length) === 0 || p(i = u2);
    },
    [d, e.results]
  ), $ = reactExports.useCallback(() => {
    c((n2) => ({ ...n2, downloadAll: true })), s(true);
  }, [c]), L = reactExports.useCallback(
    (n2) => {
      var b;
      if (!l) return;
      const i = ((b = l.sort) == null ? void 0 : b.slice()) || [], y = { asc: "desc", desc: "asc" }, u2 = i.findIndex((m) => m.property.name === n2.name);
      if (u2 === 0)
        i[0] = { ...i[0], direction: y[i[0].direction] };
      else {
        const [m] = i.splice(u2, 1);
        i.unshift(m);
      }
      c((m) => ({ ...m, sort: i, page: 0 }));
    },
    [l, c]
  );
  return /* @__PURE__ */ j.jsxs(
    Wg,
    {
      ...e,
      childContainerClassName: "overflow-x-auto",
      className: "overflow-y-auto",
      downloadAllFunction: $,
      onResize: w,
      setResizeState: (n2) => S(n2),
      children: [
        /* @__PURE__ */ j.jsx("div", { style: { minWidth: `${(t == null ? void 0 : t.length) * (e.minColumnWidth ?? 100)}px` }, children: !!l && !((D = e.results) != null && D.isLoading && !((V = (v2 = e.results) == null ? void 0 : v2.data) != null && V.length)) && /* @__PURE__ */ j.jsxs(
          "table",
          {
            className: "overflow-visible w-full",
            style: { fontSize: e.fontSize ? `${e.fontSize}px` : g.font.size },
            children: [
              /* @__PURE__ */ j.jsx(
                B,
                {
                  columns: t,
                  sortBy: (R = (A = l == null ? void 0 : l.sort) == null ? void 0 : A[0]) == null ? void 0 : R.property,
                  sortDirection: ((k = (z = l == null ? void 0 : l.sort) == null ? void 0 : z[0]) == null ? void 0 : k.direction) === "asc" ? n.ASCENDING : n.DESCENDING,
                  onSortingChange: L,
                  minColumnWidth: e.minColumnWidth ? e.minColumnWidth : void 0
                }
              ),
              /* @__PURE__ */ j.jsx("tbody", { children: (E = a == null ? void 0 : a.data) == null ? void 0 : E.slice(0, d).map((n2, i) => /* @__PURE__ */ j.jsx("tr", { className: "hover:bg-gray-400/5", children: t.map((y, u2) => {
                const b = ee(n2[y.name], y);
                let m = "";
                return typeof b == "object" ? m = b.props.children : m = b, /* @__PURE__ */ j.jsx(
                  "td",
                  {
                    className: "text-dark p-3 truncate",
                    style: {
                      fontSize: e.fontSize ? `${e.fontSize}px` : g.font.size,
                      maxWidth: e.minColumnWidth ? `${e.minColumnWidth * 1.2}px` : "auto"
                    },
                    children: /* @__PURE__ */ j.jsx("span", { title: m, children: b })
                  },
                  u2
                );
              }) }, i)) })
            ]
          }
        ) }),
        /* @__PURE__ */ j.jsx(
          Z,
          {
            currentPage: (l == null ? void 0 : l.page) || 0,
            hasNextPage: e.limit && ((T = a == null ? void 0 : a.data) != null && T.length) ? ((W = a == null ? void 0 : a.data) == null ? void 0 : W.length) < e.limit : false,
            onPageChange: (n2) => {
              c((i) => ({ ...i, page: n2 }));
            }
          }
        )
      ]
    }
  );
};
function ee(e, t) {
  if (typeof e == "number" || t.nativeType === "number")
    return ce(`${e}`, { type: "number", meta: t == null ? void 0 : t.meta });
  if (typeof e == "boolean")
    return e ? "True" : "False";
  if (e && t.nativeType === "time") return ce(e, "date");
  const { linkText: a, linkUrl: o2 } = de(e);
  return a && o2 ? /* @__PURE__ */ j.jsx("a", { href: o2, target: "_blank", rel: "noopener noreferrer", children: a }) : ce(e);
}
const te = {
  name: "TableChart",
  label: "Table",
  defaultHeight: 300,
  defaultWidth: 900,
  classNames: ["inside-card"],
  category: "Charts: essentials",
  inputs: [
    {
      name: "ds",
      type: "dataset",
      label: "Dataset to display",
      description: "Dataset",
      defaultValue: false,
      category: "Chart data"
    },
    {
      name: "columns",
      type: "dimensionOrMeasure",
      label: "Columns",
      array: true,
      required: true,
      config: {
        dataset: "ds"
      },
      category: "Chart data",
      inputs: [
        {
          name: "customColumnLabel",
          type: "string",
          label: "Column Header",
          description: "Custom label to display instead of the default column header"
        }
      ]
    },
    // Chart settings
    {
      name: "title",
      type: "string",
      label: "Title",
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
      name: "maxPageRows",
      type: "number",
      label: "Max Page Rows",
      category: "Chart settings"
    },
    {
      name: "defaultSort",
      type: "dimensionOrMeasure",
      config: {
        dataset: "ds"
      },
      label: "Default Sort",
      category: "Chart settings"
    },
    {
      name: "defaultSortDirection",
      type: o,
      defaultValue: "Ascending",
      label: "Default Sort Direction",
      category: "Chart settings"
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
    // Table styling
    {
      name: "minColumnWidth",
      type: "number",
      label: "Minimum column width in pixels",
      defaultValue: 150,
      category: "Chart styling"
    },
    {
      name: "fontSize",
      type: "number",
      label: "Font size in pixels",
      category: "Chart styling"
    }
  ]
}, me = defineComponent(P, te, {
  props: (e, [t]) => {
    var S, g, l;
    const a = ((S = e == null ? void 0 : e.ds) == null ? void 0 : S.variableValues) || {}, o2 = (t == null ? void 0 : t.prevVariableValues) || {}, f = e.maxPageRows || t != null && t.maxRowsFit ? Math.min(e.maxPageRows || 1e3, Math.max(t == null ? void 0 : t.maxRowsFit, 1) || 1e3) : 0, s = (
      // @ts-expect-error - defaultSortDirection.value is added by defineComponent.
      ((g = e.defaultSortDirection) == null ? void 0 : g.value) === "Ascending" ? "asc" : "desc"
    ), d = ((l = e.columns) == null ? void 0 : l.filter((c) => {
      var w;
      return c.name !== ((w = e.defaultSort) == null ? void 0 : w.name);
    }).map((c) => ({
      property: c,
      direction: s
    }))) || [];
    e.defaultSort && d.unshift({
      property: e.defaultSort,
      direction: s
    }), t && JSON.stringify(a) !== JSON.stringify(o2) && (t.prevVariableValues = a, t.page = 0);
    const p = f < 1 ? { isLoading: true } : v({
      from: e.ds,
      select: e.columns,
      limit: f,
      offset: f * ((t == null ? void 0 : t.page) || 0),
      orderBy: (t == null ? void 0 : t.sort) || d
    }), h = v({
      from: e.ds,
      select: e.columns,
      limit: t != null && t.downloadAll ? 1e4 : 0,
      offset: 0,
      orderBy: (t == null ? void 0 : t.sort) || d
    });
    return {
      ...e,
      limit: f,
      defaultSort: d,
      results: p,
      allResults: h
    };
  }
});

export { me as default, te as meta };
//# sourceMappingURL=TableChart-C-gAmnxN-51RPxV-_.js.map
//# sourceMappingURL=TableChart-C-gAmnxN-51RPxV-_.js.map
