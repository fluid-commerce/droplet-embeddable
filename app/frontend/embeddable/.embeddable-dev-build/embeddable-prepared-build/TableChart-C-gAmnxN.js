import { O as Oe, v } from "./Spinner-BeNoTciJ-DsMN3-m0.js";
import { d as defineComponent, u as useTheme, a as useEmbeddableState } from "./index.esm-CVE60fla.js";
import { o, n } from "./SortDirection.type.emb-Ddgerf5H-Cxcj1Pys.js";
import { j } from "./jsx-runtime-CjQXaSqQ-CjMA1-fF.js";
import { r as reactExports } from "./embeddable-entry-point-DfzYO-OW.js";
import { k as kg, _ as _g, P as Pg, N as Ng, W as Wg } from "./Container-mop-J7T8-BpqPaGKG.js";
import { u } from "./cn-MtANU1gm-CGxwOT4x.js";
import { c as ce, d as de } from "./format-TjzP8gQX-Cs7Vwno2.js";
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
export {
  me as default,
  te as meta
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFibGVDaGFydC1DLWdBbW54Ti5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL2NocmlzdG9waGVyY2FybHNvbi9mbHVpZC9kcm9wbGV0LWVtYmVkZGFibGUvYXBwL2Zyb250ZW5kL2VtYmVkZGFibGUvbm9kZV9tb2R1bGVzL0BlbWJlZGRhYmxlLmNvbS92YW5pbGxhLWNvbXBvbmVudHMvZGlzdC9UYWJsZUNoYXJ0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGwgYXMgTSB9IGZyb20gXCIuL2luZGV4LmVzbS1KQWhfSzFWRy5qc1wiO1xuaW1wb3J0IHsgdXNlVGhlbWUgYXMgSSwgdXNlRW1iZWRkYWJsZVN0YXRlIGFzIE8sIGRlZmluZUNvbXBvbmVudCBhcyBIIH0gZnJvbSBcIkBlbWJlZGRhYmxlLmNvbS9yZWFjdFwiO1xuaW1wb3J0IHsgUyBhcyB4LCBhIGFzIEogfSBmcm9tIFwiLi9Tb3J0RGlyZWN0aW9uLnR5cGUuZW1iLURkZ2VyZjVILmpzXCI7XG5pbXBvcnQgeyBqIGFzIHIgfSBmcm9tIFwiLi9qc3gtcnVudGltZS1DalFYYVNxUS5qc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgYXMgTiwgdXNlRWZmZWN0IGFzIEYsIHVzZUNhbGxiYWNrIGFzIEMgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGMgYXMgVSwgZCBhcyBfLCBTIGFzIHEsIGUgYXMgSywgQyBhcyBRIH0gZnJvbSBcIi4vQ29udGFpbmVyLW1vcC1KN1Q4LmpzXCI7XG5pbXBvcnQgeyBjIGFzIEcgfSBmcm9tIFwiLi9jbi1NdEFOVTFnbS5qc1wiO1xuaW1wb3J0IHsgZCBhcyBYIH0gZnJvbSBcIi4vU3Bpbm5lci1CZU5vVGNpSi5qc1wiO1xuaW1wb3J0IHsgZiBhcyBqLCBkIGFzIFkgfSBmcm9tIFwiLi9mb3JtYXQtVGp6UDhnUVguanNcIjtcbmNvbnN0IFogPSAoeyBjdXJyZW50UGFnZTogZSwgaGFzTmV4dFBhZ2U6IHQsIG9uUGFnZUNoYW5nZTogYSB9KSA9PiAvKiBAX19QVVJFX18gKi8gci5qc3hzKFxuICBcImRpdlwiLFxuICB7XG4gICAgY2xhc3NOYW1lOiBgXG4gICAgICAgIGZsZXhcbiAgICAgICAgaXRlbXMtY2VudGVyXG4gICAgICAgIGp1c3RpZnktY2VudGVyXG4gICAgICAgIGxlZnQtMFxuICAgICAgICBzZWxlY3Qtbm9uZVxuICAgICAgICBzdGlja3lcbiAgICAgICAgZm9udC1bLS1lbWJlZGRhYmxlLWNoYXJ0cy1mb250V2VpZ2h0cy1wYWdpbmF0aW9uXVxuICAgICAgICB0ZXh0LVtjb2xvcjotLWVtYmVkZGFibGUtZm9udC1jb2xvck5vcm1hbF1cbiAgICAgICAgdGV4dC1bc2l6ZTotLWVtYmVkZGFibGUtZm9udC1zaXplXVxuICAgICAgYCxcbiAgICBjaGlsZHJlbjogW1xuICAgICAgLyogQF9fUFVSRV9fICovIHIuanN4KFxuICAgICAgICBVLFxuICAgICAgICB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBHKFxuICAgICAgICAgICAgYFxuICAgICAgICAgICAgYm9yZGVyXG4gICAgICAgICAgICBjdXJzb3ItcG9pbnRlclxuICAgICAgICAgICAgZmxleFxuICAgICAgICAgICAgaC04XG4gICAgICAgICAgICBob3ZlcjpiZy1ibGFjay8xMFxuICAgICAgICAgICAgaXRlbXMtY2VudGVyXG4gICAgICAgICAgICBqdXN0aWZ5LWNlbnRlclxuICAgICAgICAgICAgcC0xXG4gICAgICAgICAgICB3LThcbiAgICAgICAgICAgIGJvcmRlci1bY29sb3I6LS1lbWJlZGRhYmxlLWNvbnRyb2xzLWJvcmRlcnMtY29sb3JzLW5vcm1hbF1cbiAgICAgICAgICAgIHJvdW5kZWQtWy0tZW1iZWRkYWJsZS1jb250cm9scy1ib3JkZXJzLXJhZGl1c11cbiAgICAgICAgICBgLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm9wYWNpdHktNTAgcG9pbnRlci1ldmVudHMtbm9uZVwiOiBlID09PSAwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgKSxcbiAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICBhID09IG51bGwgfHwgYShlIC0gMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApLFxuICAgICAgLyogQF9fUFVSRV9fICovIHIuanN4cyhcInNwYW5cIiwgeyBjbGFzc05hbWU6IFwibXgtNFwiLCBjaGlsZHJlbjogW1xuICAgICAgICBcIlBhZ2UgXCIsXG4gICAgICAgIGUgKyAxXG4gICAgICBdIH0pLFxuICAgICAgLyogQF9fUFVSRV9fICovIHIuanN4KFxuICAgICAgICBfLFxuICAgICAgICB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBHKFxuICAgICAgICAgICAgYFxuICAgICAgICAgIGJvcmRlclxuICAgICAgICAgIGN1cnNvci1wb2ludGVyXG4gICAgICAgICAgZmxleFxuICAgICAgICAgIGgtOFxuICAgICAgICAgIGhvdmVyOmJnLWJsYWNrLzEwXG4gICAgICAgICAgaXRlbXMtY2VudGVyXG4gICAgICAgICAganVzdGlmeS1jZW50ZXJcbiAgICAgICAgICBwLTFcbiAgICAgICAgICB3LThcbiAgICAgICAgICBib3JkZXItW2NvbG9yOi0tZW1iZWRkYWJsZS1jb250cm9scy1ib3JkZXJzLWNvbG9ycy1ub3JtYWxdXG4gICAgICAgICAgcm91bmRlZC1bLS1lbWJlZGRhYmxlLWNvbnRyb2xzLWJvcmRlcnMtcmFkaXVzXVxuICAgICAgICAgIFxuICAgICAgICBgLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcIm9wYWNpdHktNTAgcG9pbnRlci1ldmVudHMtbm9uZVwiOiAhdFxuICAgICAgICAgICAgfVxuICAgICAgICAgICksXG4gICAgICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgYSA9PSBudWxsIHx8IGEoZSArIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKVxuICAgIF1cbiAgfVxuKSwgQiA9ICh7IGNvbHVtbnM6IGUsIHNvcnRCeTogdCwgc29ydERpcmVjdGlvbjogYSwgb25Tb3J0aW5nQ2hhbmdlOiBvLCBtaW5Db2x1bW5XaWR0aDogZiB9KSA9PiAoSSgpLCAvKiBAX19QVVJFX18gKi8gci5qc3goXCJ0aGVhZFwiLCB7IGNsYXNzTmFtZTogXCJib3JkZXIteSBib3JkZXItW2NvbG9yOi0tZW1iZWRkYWJsZS1jb250cm9scy1ib2RlcnMtY29sb3JzLXByaW1hcnldXCIsIGNoaWxkcmVuOiAvKiBAX19QVVJFX18gKi8gci5qc3goXCJ0clwiLCB7IGNoaWxkcmVuOiBlID09IG51bGwgPyB2b2lkIDAgOiBlLm1hcCgocykgPT4ge1xuICB2YXIgaDtcbiAgY29uc3QgZCA9ICh0ID09IG51bGwgPyB2b2lkIDAgOiB0Lm5hbWUpID09PSBzLm5hbWUsIHAgPSBkID8gYSA9PT0geC5BU0NFTkRJTkcgPyB4LkRFU0NFTkRJTkcgOiB4LkFTQ0VORElORyA6IHguQVNDRU5ESU5HO1xuICByZXR1cm4gLyogQF9fUFVSRV9fICovIHIuanN4KFxuICAgIFwidGhcIixcbiAgICB7XG4gICAgICBjbGFzc05hbWU6IGBcbiAgICAgICAgICAgICAgICBjdXJzb3ItcG9pbnRlclxuICAgICAgICAgICAgICAgIHAtM1xuICAgICAgICAgICAgICAgIHNlbGVjdC1ub25lXG4gICAgICAgICAgICAgICAgYmctW2NvbG9yOi0tZW1iZWRkYWJsZS1jb250cm9scy1iYWNrZ3JvdW5kcy1jb2xvcnMtc29mdF1cbiAgICAgICAgICAgICAgYCxcbiAgICAgIHN0eWxlOiBmID8ge1xuICAgICAgICBtaW5XaWR0aDogYCR7Zn1weGAsXG4gICAgICAgIG1heFdpZHRoOiBgJHtmICogMS4yfXB4YFxuICAgICAgfSA6IHt9LFxuICAgICAgb25DbGljazogKCkgPT4gbyA9PSBudWxsID8gdm9pZCAwIDogbyhzLCBwKSxcbiAgICAgIGNoaWxkcmVuOiAvKiBAX19QVVJFX18gKi8gci5qc3hzKFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImZsZXggaXRlbXMtY2VudGVyIGdhcC0xIGhvdmVyOnRleHQtYmxhY2tcIiwgY2hpbGRyZW46IFtcbiAgICAgICAgLyogQF9fUFVSRV9fICovIHIuanN4KFwic3BhblwiLCB7IGNsYXNzTmFtZTogXCJlbWJlZGRhYmxlLXRhYmxlLWhlYWRlciBtci0xIHRydW5jYXRlXCIsIGNoaWxkcmVuOiAoKGggPSBzID09IG51bGwgPyB2b2lkIDAgOiBzLmlucHV0cykgPT0gbnVsbCA/IHZvaWQgMCA6IGguY3VzdG9tQ29sdW1uTGFiZWwpID8/IHMudGl0bGUgfSksXG4gICAgICAgIGQgPyAvKiBAX19QVVJFX18gKi8gci5qc3goXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBcInctM1wiLCBjaGlsZHJlbjogYSA9PT0geC5BU0NFTkRJTkcgPyAvKiBAX19QVVJFX18gKi8gci5qc3gocSwgeyBmaWxsOiBcImN1cnJlbnRjb2xvclwiIH0pIDogLyogQF9fUFVSRV9fICovIHIuanN4KEssIHsgZmlsbDogXCJjdXJyZW50Y29sb3JcIiB9KSB9KSA6IG51bGxcbiAgICAgIF0gfSlcbiAgICB9LFxuICAgIHMubmFtZVxuICApO1xufSkgfSkgfSkpLCBQID0gKGUpID0+IHtcbiAgdmFyIEQsIHYsIFYsIEEsIFIsIHosIGssIEUsIFQsIFc7XG4gIGNvbnN0IHsgY29sdW1uczogdCwgcmVzdWx0czogYSwgYWxsUmVzdWx0czogbyB9ID0gZSwgW2YsIHNdID0gTighMSksIFtkLCBwXSA9IE4oMCksIFtoLCBTXSA9IE4oITEpLCBnID0gSSgpLCBbbCwgY10gPSBPKHtcbiAgICBkb3dubG9hZEFsbDogITEsXG4gICAgbWF4Um93c0ZpdDogMCxcbiAgICBwYWdlOiAwLFxuICAgIHByZXZWYXJpYWJsZVZhbHVlczoge30sXG4gICAgc29ydDogZS5kZWZhdWx0U29ydFxuICB9KTtcbiAgRigoKSA9PiB7XG4gICAgaCB8fCBjKChuKSA9PiAoeyAuLi5uLCBtYXhSb3dzRml0OiBkIH0pKTtcbiAgfSwgW2UuY29sdW1ucywgZCwgYywgaF0pLCBGKCgpID0+IHtcbiAgICBpZiAoZikge1xuICAgICAgaWYgKCFvIHx8ICFvLmRhdGEgfHwgby5kYXRhLmxlbmd0aCA9PT0gMClcbiAgICAgICAgcmV0dXJuO1xuICAgICAgWChlLCBvID09IG51bGwgPyB2b2lkIDAgOiBvLmRhdGEsIFtdLCBcImRvd25sb2FkZWQtY2hhcnQtZGF0YVwiKSwgcyghMSksIGMoKG4pID0+ICh7IC4uLm4sIGRvd25sb2FkQWxsOiAhMSB9KSk7XG4gICAgfVxuICB9LCBbbywgZiwgZSwgY10pO1xuICBjb25zdCB3ID0gQyhcbiAgICAoeyBoZWlnaHQ6IG4gfSkgPT4ge1xuICAgICAgdmFyIGIsIG07XG4gICAgICBsZXQgaSA9IDA7XG4gICAgICBjb25zdCB5ID0gKG4gfHwgNzYpIC0gNzYsIHUgPSBNYXRoLmZsb29yKHkgLyA0NCk7XG4gICAgICBkID09PSB1ICYmIHUgPT09IGkgfHwgKChtID0gKGIgPSBlLnJlc3VsdHMpID09IG51bGwgPyB2b2lkIDAgOiBiLmRhdGEpID09IG51bGwgPyB2b2lkIDAgOiBtLmxlbmd0aCkgPT09IDAgfHwgcChpID0gdSk7XG4gICAgfSxcbiAgICBbZCwgZS5yZXN1bHRzXVxuICApLCAkID0gQygoKSA9PiB7XG4gICAgYygobikgPT4gKHsgLi4ubiwgZG93bmxvYWRBbGw6ICEwIH0pKSwgcyghMCk7XG4gIH0sIFtjXSksIEwgPSBDKFxuICAgIChuKSA9PiB7XG4gICAgICB2YXIgYjtcbiAgICAgIGlmICghbCkgcmV0dXJuO1xuICAgICAgY29uc3QgaSA9ICgoYiA9IGwuc29ydCkgPT0gbnVsbCA/IHZvaWQgMCA6IGIuc2xpY2UoKSkgfHwgW10sIHkgPSB7IGFzYzogXCJkZXNjXCIsIGRlc2M6IFwiYXNjXCIgfSwgdSA9IGkuZmluZEluZGV4KChtKSA9PiBtLnByb3BlcnR5Lm5hbWUgPT09IG4ubmFtZSk7XG4gICAgICBpZiAodSA9PT0gMClcbiAgICAgICAgaVswXSA9IHsgLi4uaVswXSwgZGlyZWN0aW9uOiB5W2lbMF0uZGlyZWN0aW9uXSB9O1xuICAgICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IFttXSA9IGkuc3BsaWNlKHUsIDEpO1xuICAgICAgICBpLnVuc2hpZnQobSk7XG4gICAgICB9XG4gICAgICBjKChtKSA9PiAoeyAuLi5tLCBzb3J0OiBpLCBwYWdlOiAwIH0pKTtcbiAgICB9LFxuICAgIFtsLCBjXVxuICApO1xuICByZXR1cm4gLyogQF9fUFVSRV9fICovIHIuanN4cyhcbiAgICBRLFxuICAgIHtcbiAgICAgIC4uLmUsXG4gICAgICBjaGlsZENvbnRhaW5lckNsYXNzTmFtZTogXCJvdmVyZmxvdy14LWF1dG9cIixcbiAgICAgIGNsYXNzTmFtZTogXCJvdmVyZmxvdy15LWF1dG9cIixcbiAgICAgIGRvd25sb2FkQWxsRnVuY3Rpb246ICQsXG4gICAgICBvblJlc2l6ZTogdyxcbiAgICAgIHNldFJlc2l6ZVN0YXRlOiAobikgPT4gUyhuKSxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIC8qIEBfX1BVUkVfXyAqLyByLmpzeChcImRpdlwiLCB7IHN0eWxlOiB7IG1pbldpZHRoOiBgJHsodCA9PSBudWxsID8gdm9pZCAwIDogdC5sZW5ndGgpICogKGUubWluQ29sdW1uV2lkdGggPz8gMTAwKX1weGAgfSwgY2hpbGRyZW46ICEhbCAmJiAhKChEID0gZS5yZXN1bHRzKSAhPSBudWxsICYmIEQuaXNMb2FkaW5nICYmICEoKFYgPSAodiA9IGUucmVzdWx0cykgPT0gbnVsbCA/IHZvaWQgMCA6IHYuZGF0YSkgIT0gbnVsbCAmJiBWLmxlbmd0aCkpICYmIC8qIEBfX1BVUkVfXyAqLyByLmpzeHMoXG4gICAgICAgICAgXCJ0YWJsZVwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJvdmVyZmxvdy12aXNpYmxlIHctZnVsbFwiLFxuICAgICAgICAgICAgc3R5bGU6IHsgZm9udFNpemU6IGUuZm9udFNpemUgPyBgJHtlLmZvbnRTaXplfXB4YCA6IGcuZm9udC5zaXplIH0sXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAvKiBAX19QVVJFX18gKi8gci5qc3goXG4gICAgICAgICAgICAgICAgQixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBjb2x1bW5zOiB0LFxuICAgICAgICAgICAgICAgICAgc29ydEJ5OiAoUiA9IChBID0gbCA9PSBudWxsID8gdm9pZCAwIDogbC5zb3J0KSA9PSBudWxsID8gdm9pZCAwIDogQVswXSkgPT0gbnVsbCA/IHZvaWQgMCA6IFIucHJvcGVydHksXG4gICAgICAgICAgICAgICAgICBzb3J0RGlyZWN0aW9uOiAoKGsgPSAoeiA9IGwgPT0gbnVsbCA/IHZvaWQgMCA6IGwuc29ydCkgPT0gbnVsbCA/IHZvaWQgMCA6IHpbMF0pID09IG51bGwgPyB2b2lkIDAgOiBrLmRpcmVjdGlvbikgPT09IFwiYXNjXCIgPyB4LkFTQ0VORElORyA6IHguREVTQ0VORElORyxcbiAgICAgICAgICAgICAgICAgIG9uU29ydGluZ0NoYW5nZTogTCxcbiAgICAgICAgICAgICAgICAgIG1pbkNvbHVtbldpZHRoOiBlLm1pbkNvbHVtbldpZHRoID8gZS5taW5Db2x1bW5XaWR0aCA6IHZvaWQgMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgLyogQF9fUFVSRV9fICovIHIuanN4KFwidGJvZHlcIiwgeyBjaGlsZHJlbjogKEUgPSBhID09IG51bGwgPyB2b2lkIDAgOiBhLmRhdGEpID09IG51bGwgPyB2b2lkIDAgOiBFLnNsaWNlKDAsIGQpLm1hcCgobiwgaSkgPT4gLyogQF9fUFVSRV9fICovIHIuanN4KFwidHJcIiwgeyBjbGFzc05hbWU6IFwiaG92ZXI6YmctZ3JheS00MDAvNVwiLCBjaGlsZHJlbjogdC5tYXAoKHksIHUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBiID0gZWUoblt5Lm5hbWVdLCB5KTtcbiAgICAgICAgICAgICAgICBsZXQgbSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBiID09IFwib2JqZWN0XCIgPyBtID0gYi5wcm9wcy5jaGlsZHJlbiA6IG0gPSBiLCAvKiBAX19QVVJFX18gKi8gci5qc3goXG4gICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJ0ZXh0LWRhcmsgcC0zIHRydW5jYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IGUuZm9udFNpemUgPyBgJHtlLmZvbnRTaXplfXB4YCA6IGcuZm9udC5zaXplLFxuICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiBlLm1pbkNvbHVtbldpZHRoID8gYCR7ZS5taW5Db2x1bW5XaWR0aCAqIDEuMn1weGAgOiBcImF1dG9cIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogLyogQF9fUFVSRV9fICovIHIuanN4KFwic3BhblwiLCB7IHRpdGxlOiBtLCBjaGlsZHJlbjogYiB9KVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHVcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KSB9LCBpKSkgfSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgICkgfSksXG4gICAgICAgIC8qIEBfX1BVUkVfXyAqLyByLmpzeChcbiAgICAgICAgICBaLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlOiAobCA9PSBudWxsID8gdm9pZCAwIDogbC5wYWdlKSB8fCAwLFxuICAgICAgICAgICAgaGFzTmV4dFBhZ2U6IGUubGltaXQgJiYgKChUID0gYSA9PSBudWxsID8gdm9pZCAwIDogYS5kYXRhKSAhPSBudWxsICYmIFQubGVuZ3RoKSA/ICgoVyA9IGEgPT0gbnVsbCA/IHZvaWQgMCA6IGEuZGF0YSkgPT0gbnVsbCA/IHZvaWQgMCA6IFcubGVuZ3RoKSA8IGUubGltaXQgOiAhMSxcbiAgICAgICAgICAgIG9uUGFnZUNoYW5nZTogKG4pID0+IHtcbiAgICAgICAgICAgICAgYygoaSkgPT4gKHsgLi4uaSwgcGFnZTogbiB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICApXG4gICAgICBdXG4gICAgfVxuICApO1xufTtcbmZ1bmN0aW9uIGVlKGUsIHQpIHtcbiAgaWYgKHR5cGVvZiBlID09IFwibnVtYmVyXCIgfHwgdC5uYXRpdmVUeXBlID09PSBcIm51bWJlclwiKVxuICAgIHJldHVybiBqKGAke2V9YCwgeyB0eXBlOiBcIm51bWJlclwiLCBtZXRhOiB0ID09IG51bGwgPyB2b2lkIDAgOiB0Lm1ldGEgfSk7XG4gIGlmICh0eXBlb2YgZSA9PSBcImJvb2xlYW5cIilcbiAgICByZXR1cm4gZSA/IFwiVHJ1ZVwiIDogXCJGYWxzZVwiO1xuICBpZiAoZSAmJiB0Lm5hdGl2ZVR5cGUgPT09IFwidGltZVwiKSByZXR1cm4gaihlLCBcImRhdGVcIik7XG4gIGNvbnN0IHsgbGlua1RleHQ6IGEsIGxpbmtVcmw6IG8gfSA9IFkoZSk7XG4gIHJldHVybiBhICYmIG8gPyAvKiBAX19QVVJFX18gKi8gci5qc3goXCJhXCIsIHsgaHJlZjogbywgdGFyZ2V0OiBcIl9ibGFua1wiLCByZWw6IFwibm9vcGVuZXIgbm9yZWZlcnJlclwiLCBjaGlsZHJlbjogYSB9KSA6IGooZSk7XG59XG5jb25zdCB0ZSA9IHtcbiAgbmFtZTogXCJUYWJsZUNoYXJ0XCIsXG4gIGxhYmVsOiBcIlRhYmxlXCIsXG4gIGRlZmF1bHRIZWlnaHQ6IDMwMCxcbiAgZGVmYXVsdFdpZHRoOiA5MDAsXG4gIGNsYXNzTmFtZXM6IFtcImluc2lkZS1jYXJkXCJdLFxuICBjYXRlZ29yeTogXCJDaGFydHM6IGVzc2VudGlhbHNcIixcbiAgaW5wdXRzOiBbXG4gICAge1xuICAgICAgbmFtZTogXCJkc1wiLFxuICAgICAgdHlwZTogXCJkYXRhc2V0XCIsXG4gICAgICBsYWJlbDogXCJEYXRhc2V0IHRvIGRpc3BsYXlcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkRhdGFzZXRcIixcbiAgICAgIGRlZmF1bHRWYWx1ZTogITEsXG4gICAgICBjYXRlZ29yeTogXCJDaGFydCBkYXRhXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiY29sdW1uc1wiLFxuICAgICAgdHlwZTogXCJkaW1lbnNpb25Pck1lYXN1cmVcIixcbiAgICAgIGxhYmVsOiBcIkNvbHVtbnNcIixcbiAgICAgIGFycmF5OiAhMCxcbiAgICAgIHJlcXVpcmVkOiAhMCxcbiAgICAgIGNvbmZpZzoge1xuICAgICAgICBkYXRhc2V0OiBcImRzXCJcbiAgICAgIH0sXG4gICAgICBjYXRlZ29yeTogXCJDaGFydCBkYXRhXCIsXG4gICAgICBpbnB1dHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwiY3VzdG9tQ29sdW1uTGFiZWxcIixcbiAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgICAgICAgIGxhYmVsOiBcIkNvbHVtbiBIZWFkZXJcIixcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJDdXN0b20gbGFiZWwgdG8gZGlzcGxheSBpbnN0ZWFkIG9mIHRoZSBkZWZhdWx0IGNvbHVtbiBoZWFkZXJcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICAvLyBDaGFydCBzZXR0aW5nc1xuICAgIHtcbiAgICAgIG5hbWU6IFwidGl0bGVcIixcbiAgICAgIHR5cGU6IFwic3RyaW5nXCIsXG4gICAgICBsYWJlbDogXCJUaXRsZVwiLFxuICAgICAgY2F0ZWdvcnk6IFwiQ2hhcnQgc2V0dGluZ3NcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJkZXNjcmlwdGlvblwiLFxuICAgICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICAgIGxhYmVsOiBcIkRlc2NyaXB0aW9uXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJUaGUgZGVzY3JpcHRpb24gZm9yIHRoZSBjaGFydFwiLFxuICAgICAgY2F0ZWdvcnk6IFwiQ2hhcnQgc2V0dGluZ3NcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJtYXhQYWdlUm93c1wiLFxuICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgIGxhYmVsOiBcIk1heCBQYWdlIFJvd3NcIixcbiAgICAgIGNhdGVnb3J5OiBcIkNoYXJ0IHNldHRpbmdzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiZGVmYXVsdFNvcnRcIixcbiAgICAgIHR5cGU6IFwiZGltZW5zaW9uT3JNZWFzdXJlXCIsXG4gICAgICBjb25maWc6IHtcbiAgICAgICAgZGF0YXNldDogXCJkc1wiXG4gICAgICB9LFxuICAgICAgbGFiZWw6IFwiRGVmYXVsdCBTb3J0XCIsXG4gICAgICBjYXRlZ29yeTogXCJDaGFydCBzZXR0aW5nc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcImRlZmF1bHRTb3J0RGlyZWN0aW9uXCIsXG4gICAgICB0eXBlOiBKLFxuICAgICAgZGVmYXVsdFZhbHVlOiBcIkFzY2VuZGluZ1wiLFxuICAgICAgbGFiZWw6IFwiRGVmYXVsdCBTb3J0IERpcmVjdGlvblwiLFxuICAgICAgY2F0ZWdvcnk6IFwiQ2hhcnQgc2V0dGluZ3NcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJlbmFibGVEb3dubG9hZEFzQ1NWXCIsXG4gICAgICB0eXBlOiBcImJvb2xlYW5cIixcbiAgICAgIGxhYmVsOiBcIlNob3cgZG93bmxvYWQgYXMgQ1NWXCIsXG4gICAgICBjYXRlZ29yeTogXCJFeHBvcnQgb3B0aW9uc1wiLFxuICAgICAgZGVmYXVsdFZhbHVlOiAhMFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJlbmFibGVEb3dubG9hZEFzUE5HXCIsXG4gICAgICB0eXBlOiBcImJvb2xlYW5cIixcbiAgICAgIGxhYmVsOiBcIlNob3cgZG93bmxvYWQgYXMgUE5HXCIsXG4gICAgICBjYXRlZ29yeTogXCJFeHBvcnQgb3B0aW9uc1wiLFxuICAgICAgZGVmYXVsdFZhbHVlOiAhMFxuICAgIH0sXG4gICAgLy8gVGFibGUgc3R5bGluZ1xuICAgIHtcbiAgICAgIG5hbWU6IFwibWluQ29sdW1uV2lkdGhcIixcbiAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICBsYWJlbDogXCJNaW5pbXVtIGNvbHVtbiB3aWR0aCBpbiBwaXhlbHNcIixcbiAgICAgIGRlZmF1bHRWYWx1ZTogMTUwLFxuICAgICAgY2F0ZWdvcnk6IFwiQ2hhcnQgc3R5bGluZ1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcImZvbnRTaXplXCIsXG4gICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgbGFiZWw6IFwiRm9udCBzaXplIGluIHBpeGVsc1wiLFxuICAgICAgY2F0ZWdvcnk6IFwiQ2hhcnQgc3R5bGluZ1wiXG4gICAgfVxuICBdXG59LCBtZSA9IEgoUCwgdGUsIHtcbiAgcHJvcHM6IChlLCBbdF0pID0+IHtcbiAgICB2YXIgUywgZywgbDtcbiAgICBjb25zdCBhID0gKChTID0gZSA9PSBudWxsID8gdm9pZCAwIDogZS5kcykgPT0gbnVsbCA/IHZvaWQgMCA6IFMudmFyaWFibGVWYWx1ZXMpIHx8IHt9LCBvID0gKHQgPT0gbnVsbCA/IHZvaWQgMCA6IHQucHJldlZhcmlhYmxlVmFsdWVzKSB8fCB7fSwgZiA9IGUubWF4UGFnZVJvd3MgfHwgdCAhPSBudWxsICYmIHQubWF4Um93c0ZpdCA/IE1hdGgubWluKGUubWF4UGFnZVJvd3MgfHwgMWUzLCBNYXRoLm1heCh0ID09IG51bGwgPyB2b2lkIDAgOiB0Lm1heFJvd3NGaXQsIDEpIHx8IDFlMykgOiAwLCBzID0gKFxuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIGRlZmF1bHRTb3J0RGlyZWN0aW9uLnZhbHVlIGlzIGFkZGVkIGJ5IGRlZmluZUNvbXBvbmVudC5cbiAgICAgICgoZyA9IGUuZGVmYXVsdFNvcnREaXJlY3Rpb24pID09IG51bGwgPyB2b2lkIDAgOiBnLnZhbHVlKSA9PT0gXCJBc2NlbmRpbmdcIiA/IFwiYXNjXCIgOiBcImRlc2NcIlxuICAgICksIGQgPSAoKGwgPSBlLmNvbHVtbnMpID09IG51bGwgPyB2b2lkIDAgOiBsLmZpbHRlcigoYykgPT4ge1xuICAgICAgdmFyIHc7XG4gICAgICByZXR1cm4gYy5uYW1lICE9PSAoKHcgPSBlLmRlZmF1bHRTb3J0KSA9PSBudWxsID8gdm9pZCAwIDogdy5uYW1lKTtcbiAgICB9KS5tYXAoKGMpID0+ICh7XG4gICAgICBwcm9wZXJ0eTogYyxcbiAgICAgIGRpcmVjdGlvbjogc1xuICAgIH0pKSkgfHwgW107XG4gICAgZS5kZWZhdWx0U29ydCAmJiBkLnVuc2hpZnQoe1xuICAgICAgcHJvcGVydHk6IGUuZGVmYXVsdFNvcnQsXG4gICAgICBkaXJlY3Rpb246IHNcbiAgICB9KSwgdCAmJiBKU09OLnN0cmluZ2lmeShhKSAhPT0gSlNPTi5zdHJpbmdpZnkobykgJiYgKHQucHJldlZhcmlhYmxlVmFsdWVzID0gYSwgdC5wYWdlID0gMCk7XG4gICAgY29uc3QgcCA9IGYgPCAxID8geyBpc0xvYWRpbmc6ICEwIH0gOiBNKHtcbiAgICAgIGZyb206IGUuZHMsXG4gICAgICBzZWxlY3Q6IGUuY29sdW1ucyxcbiAgICAgIGxpbWl0OiBmLFxuICAgICAgb2Zmc2V0OiBmICogKCh0ID09IG51bGwgPyB2b2lkIDAgOiB0LnBhZ2UpIHx8IDApLFxuICAgICAgb3JkZXJCeTogKHQgPT0gbnVsbCA/IHZvaWQgMCA6IHQuc29ydCkgfHwgZFxuICAgIH0pLCBoID0gTSh7XG4gICAgICBmcm9tOiBlLmRzLFxuICAgICAgc2VsZWN0OiBlLmNvbHVtbnMsXG4gICAgICBsaW1pdDogdCAhPSBudWxsICYmIHQuZG93bmxvYWRBbGwgPyAxZTQgOiAwLFxuICAgICAgb2Zmc2V0OiAwLFxuICAgICAgb3JkZXJCeTogKHQgPT0gbnVsbCA/IHZvaWQgMCA6IHQuc29ydCkgfHwgZFxuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICAuLi5lLFxuICAgICAgbGltaXQ6IGYsXG4gICAgICBkZWZhdWx0U29ydDogZCxcbiAgICAgIHJlc3VsdHM6IHAsXG4gICAgICBhbGxSZXN1bHRzOiBoXG4gICAgfTtcbiAgfVxufSk7XG5leHBvcnQge1xuICBtZSBhcyBkZWZhdWx0LFxuICB0ZSBhcyBtZXRhXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9VGFibGVDaGFydC5qcy5tYXBcbiJdLCJuYW1lcyI6WyJyIiwiVSIsIkciLCJfIiwibyIsIkkiLCJ4IiwicSIsIksiLCJ2IiwiTiIsIk8iLCJGIiwibiIsIlgiLCJDIiwidSIsIlEiLCJqIiwiWSIsIkoiLCJIIiwiTSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFTQSxNQUFNLElBQUksQ0FBQyxFQUFFLGFBQWEsR0FBRyxhQUFhLEdBQUcsY0FBYyxRQUF3QkEsa0JBQUU7QUFBQSxFQUNuRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLFdBQVc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBV1gsVUFBVTtBQUFBLE1BQ1FBLGtCQUFFO0FBQUEsUUFDaEJDO0FBQUFBLFFBQ0E7QUFBQSxVQUNFLFdBQVdDO0FBQUFBLFlBQ1Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWFBO0FBQUEsY0FDRSxrQ0FBa0MsTUFBTTtBQUFBLFlBQ3REO0FBQUEsVUFDQTtBQUFBLFVBQ1UsU0FBUyxNQUFNO0FBQ2IsaUJBQUssUUFBUSxFQUFFLElBQUksQ0FBQztBQUFBLFVBQ3RCO0FBQUEsUUFDVjtBQUFBLE1BQ0E7QUFBQSxNQUNzQkYsa0JBQUUsS0FBSyxRQUFRLEVBQUUsV0FBVyxRQUFRLFVBQVU7QUFBQSxRQUM1RDtBQUFBLFFBQ0EsSUFBSTtBQUFBLE1BQ1osR0FBUztBQUFBLE1BQ2FBLGtCQUFFO0FBQUEsUUFDaEJHO0FBQUFBLFFBQ0E7QUFBQSxVQUNFLFdBQVdEO0FBQUFBLFlBQ1Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBY0E7QUFBQSxj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
