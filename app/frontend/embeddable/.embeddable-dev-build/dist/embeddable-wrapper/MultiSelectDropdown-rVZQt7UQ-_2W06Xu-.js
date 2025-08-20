import { e as ee$1, $ as $e, _ as _e, v } from './Spinner-BeNoTciJ-DsMN3-m0-BGGztM1w.js';
import { d as defineComponent, a as useEmbeddableState } from './index.esm-CVE60fla-BtsXn2z1.js';
import { j } from './jsx-runtime-CjQXaSqQ-CjMA1-fF-CkV96GpT.js';
import { r as reactExports } from './embeddable-component-BD9bezsm.js';
import { h, o } from './CheckboxEmpty-DejAentL-B0WzSrSW-CPpzxNKa.js';
import { W as Wg, X as Xg, V as Vg } from './Container-mop-J7T8-BpqPaGKG-DiR4tjay.js';
import './index-BV21PmyC.js';
import './Title-n-I3Fdvw-CW-j1pzr-DoihF5tM.js';

let x;
const q = (e) => {
  const s = reactExports.useRef(null), [d, l] = reactExports.useState(false), [m, n] = reactExports.useState(false), [v2, w] = reactExports.useState(""), [D, f] = reactExports.useState(false), [a, k] = reactExports.useState(e.defaultValue), [J, h$1] = useEmbeddableState({
    [e.searchProperty || "search"]: ""
  });
  reactExports.useEffect(() => {
    k(e.defaultValue);
  }, [e.defaultValue]), reactExports.useEffect(() => {
    let o2 = null;
    return m ? o2 && clearTimeout(o2) : o2 = setTimeout(() => {
      l(false);
    }, 200), () => {
      o2 && clearTimeout(o2);
    };
  }, [m]), reactExports.useLayoutEffect(() => {
    if (!D) return;
    const o2 = setTimeout(() => {
      l(false), f(false);
    }, 500);
    return () => clearTimeout(o2);
  }, [D]);
  const g = reactExports.useCallback(
    (o2) => {
      w(o2), clearTimeout(x), x = window.setTimeout(() => {
        h$1((r) => ({ ...r, [e.searchProperty || "search"]: o2 }));
      }, 500);
    },
    [w, h$1, e.searchProperty]
  ), p = reactExports.useCallback(
    (o2) => {
      g("");
      let r = [];
      o2 !== "" && (r = a || [], r != null && r.includes(o2) ? r = r.filter((c) => c !== o2) : r = [...r, o2]), e.onChange(r), k(r), h$1((c) => ({ ...c, [e.searchProperty || "search"]: "" })), clearTimeout(x);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [g, e, a]
  ), S = (o2, r, c) => {
    (o2.key === "Enter" || o2.key === " ") && (o2.preventDefault(), r(o2)), o2.key === "Escape" && (o2.preventDefault(), l(false), f(true));
  }, b = reactExports.useMemo(
    () => {
      var o$1, r;
      return (r = (o$1 = e.options) == null ? void 0 : o$1.data) == null ? void 0 : r.reduce((c, i, V) => {
        var C, j$1, B;
        return c.push(
          /* @__PURE__ */ j.jsxs(
            "div",
            {
              onClick: () => {
                var y;
                l(true), p(i[((y = e.property) == null ? void 0 : y.name) || ""] || "");
              },
              onKeyDown: (y) => S(y, () => {
                var N;
                return p(i[((N = e.property) == null ? void 0 : N.name) || ""] || "");
              }),
              onFocus: () => {
                n(true), l(true);
              },
              className: `flex items-center min-h-[36px] w-full px-3 py-2 hover:bg-black/5 cursor-pointer font-normal gap-1 ${a != null && a.includes(i[((C = e.property) == null ? void 0 : C.name) || ""]) ? "bg-black/5" : ""}`,
              tabIndex: 0,
              children: [
                a != null && a.includes(i[((j$1 = e.property) == null ? void 0 : j$1.name) || ""]) ? /* @__PURE__ */ j.jsx("div", { className: "w-[16px] h-[16px] inline-block", children: /* @__PURE__ */ j.jsx(h, {}) }) : /* @__PURE__ */ j.jsx("div", { className: "w-[16px] h-[16px] inline-block", children: /* @__PURE__ */ j.jsx(o, {}) }),
                /* @__PURE__ */ j.jsxs("div", { className: "block w-full truncate", children: [
                  i[((B = e.property) == null ? void 0 : B.name) || ""],
                  i.note && /* @__PURE__ */ j.jsx("span", { className: "font-normal ml-auto pl-3 text-xs opacity-70", children: i.note })
                ] })
              ]
            },
            V
          )
        ), c;
      }, []);
    },
    [e, a, p]
  );
  return /* @__PURE__ */ j.jsx(Wg, { title: e.title, children: /* @__PURE__ */ j.jsxs(
    "div",
    {
      className: _e(
        `
            border
            flex
            h-10
            items-center
            min-w-[50px]
            relative
            w-full
            bg-[color:--embeddable-controls-backgrounds-colors-soft]
            border-[color:--embeddable-controls-borders-colors-normal]
            rounded-[--embeddable-controls-borders-radius]
            `,
        e.className
      ),
      children: [
        /* @__PURE__ */ j.jsx(
          "input",
          {
            ref: s,
            value: v2,
            name: "dropdown",
            placeholder: e.placeholder,
            onClick: () => {
              l(true), f(false);
            },
            onFocus: () => {
              l(true), f(false), n(true);
            },
            onBlur: () => {
              n(false);
            },
            onChange: (o2) => g(o2.target.value),
            className: `
            border-0
            cursor-pointer
            h-9
            leading-9
            outline-none
            px-3
            text-sm ${d || !a ? "" : "opacity-0"}
            w-full
            rounded-[--embeddable-controls-borders-radius]
            bg-[color:--embeddable-controls-backgrounds-colors-transparent]
          `
          }
        ),
        !!a && /* @__PURE__ */ j.jsxs(
          "span",
          {
            className: `
              absolute
              block
              h-8
              leading-8
              left-3
              overflow-hidden
              pointer-events-none
              text-sm
              top-1
              truncate
              w-[calc(100%-2rem)]
              whitespace-nowrap
              bg-[color:--embeddable-controls-backgrounds-colors-soft]
              border-[color:--embeddable-controls-borders-colors-normal]
              rounded-[--embeddable-controls-borders-radius]
              ${d ? "hidden" : ""}
            `,
            children: [
              "Selected ",
              a.length,
              " ",
              a.length === 1 ? "option" : "options"
            ]
          }
        ),
        d && /* @__PURE__ */ j.jsxs(
          "div",
          {
            style: { minWidth: e.minDropdownWidth },
            className: `
              absolute
              border
              flex
              flex-col
              max-h-[400px]
              overflow-x-hidden
              overflow-y-auto
              top-11
              w-full
              z-50
              bg-[color:--embeddable-controls-backgrounds-colors-soft]
              rounded-[--embeddable-controls-borders-radius]
            `,
            onFocus: () => {
              n(true);
            },
            onBlur: () => {
              n(false);
            },
            tabIndex: 0,
            children: [
              b,
              (b == null ? void 0 : b.length) === 0 && !!v2 && /* @__PURE__ */ j.jsx("div", { className: "px-3 py-2 text-black/50 italic cursor-pointer", children: "No results" })
            ]
          }
        ),
        e.options.isLoading ? /* @__PURE__ */ j.jsx($e, { show: true, className: "absolute right-2 top-2 z-1 pointer-events-none" }) : /* @__PURE__ */ j.jsx(Xg, { className: "absolute right-2.5 top-2.5 z-1 pointer-events-none" }),
        !e.unclearable && !!a && /* @__PURE__ */ j.jsx(
          "div",
          {
            onClick: () => {
              p("");
            },
            className: "absolute right-10 top-0 h-10 flex items-center z-10 cursor-pointer",
            children: /* @__PURE__ */ j.jsx(Vg, {})
          }
        )
      ]
    }
  ) });
}, G = {
  name: "MultiSelectDropdown",
  label: "Multi-Select dropdown",
  defaultWidth: 300,
  defaultHeight: 80,
  classNames: ["on-top"],
  category: "Controls: inputs & dropdowns",
  inputs: [
    {
      name: "ds",
      type: "dataset",
      label: "Dataset",
      description: "Dataset",
      category: "Dropdown values"
    },
    {
      name: "property",
      type: "dimension",
      label: "Property",
      config: {
        dataset: "ds"
      },
      category: "Dropdown values"
    },
    {
      name: "sortBy",
      type: "dimensionOrMeasure",
      label: "Optional Sort By Additional Dimension or Measure",
      config: {
        dataset: "ds"
      },
      category: "Dropdown values"
    },
    {
      name: "sortByDirection",
      type: "string",
      label: "Sort By Direction (asc/desc)",
      defaultValue: "asc",
      category: "Dropdown values"
    },
    {
      name: "title",
      type: "string",
      label: "Title",
      category: "Settings"
    },
    {
      name: "defaultValue",
      type: "string",
      array: true,
      label: "Default value",
      category: "Pre-configured variables"
    },
    {
      name: "placeholder",
      type: "string",
      label: "Placeholder",
      defaultValue: "Select...",
      category: "Settings"
    },
    {
      name: "limit",
      type: "number",
      label: "Default number of options",
      defaultValue: 100,
      category: "Settings"
    }
  ],
  events: [
    {
      name: "onChange",
      label: "Change",
      properties: [
        {
          name: "value",
          type: "string",
          array: true
        }
      ]
    }
  ],
  variables: [
    {
      name: "dropdown choices",
      type: "string",
      defaultValue: ee$1.noFilter(),
      array: true,
      inputs: ["defaultValue"],
      events: [{ name: "onChange", property: "value" }]
    }
  ]
}, re = defineComponent(q, G, {
  props: (e, [s]) => {
    if (!e.ds)
      return {
        ...e,
        options: []
      };
    const d = [];
    let l = "asc";
    (e.sortByDirection === "desc" || e.sortByDirection === "asc") && (l = e.sortByDirection);
    const m = l;
    e.sortBy && d.push({
      property: e.sortBy,
      direction: m
    });
    const n = e.property ? [e.property] : [];
    return e.sortBy && e.sortBy !== e.property && n.push(e.sortBy), {
      ...e,
      options: v({
        from: e.ds,
        select: n,
        limit: e.limit || 1e3,
        orderBy: d,
        filters: s != null && s.search && e.property ? [
          {
            operator: "contains",
            property: e.property,
            value: s == null ? void 0 : s.search
          }
        ] : void 0
      })
    };
  },
  events: {
    onChange: (e) => ({
      value: e.length ? e : ee$1.noFilter()
    })
  }
});

export { re as default, G as meta };
//# sourceMappingURL=MultiSelectDropdown-rVZQt7UQ-_2W06Xu-.js.map
//# sourceMappingURL=MultiSelectDropdown-rVZQt7UQ-_2W06Xu-.js.map
