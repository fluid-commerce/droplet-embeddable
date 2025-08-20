import { e as ee, $ as $e, _ as _e, v } from "./Spinner-BeNoTciJ-DsMN3-m0.js";
import { d as defineComponent, a as useEmbeddableState } from "./index.esm-CVE60fla.js";
import { j } from "./jsx-runtime-CjQXaSqQ-CjMA1-fF.js";
import { r as reactExports } from "./embeddable-entry-point-DfzYO-OW.js";
import { h, o } from "./CheckboxEmpty-DejAentL-B0WzSrSW.js";
import { W as Wg, X as Xg, V as Vg } from "./Container-mop-J7T8-BpqPaGKG.js";
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
      defaultValue: ee.noFilter(),
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
      value: e.length ? e : ee.noFilter()
    })
  }
});
export {
  re as default,
  G as meta
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXVsdGlTZWxlY3REcm9wZG93bi1yVlpRdDdVUS5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL2NocmlzdG9waGVyY2FybHNvbi9mbHVpZC9kcm9wbGV0LWVtYmVkZGFibGUvYXBwL2Zyb250ZW5kL2VtYmVkZGFibGUvbm9kZV9tb2R1bGVzL0BlbWJlZGRhYmxlLmNvbS92YW5pbGxhLWNvbXBvbmVudHMvZGlzdC9NdWx0aVNlbGVjdERyb3Bkb3duLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFYgYXMgUCwgbCBhcyBFIH0gZnJvbSBcIi4vaW5kZXguZXNtLUpBaF9LMVZHLmpzXCI7XG5pbXBvcnQgeyB1c2VFbWJlZGRhYmxlU3RhdGUgYXMgSSwgZGVmaW5lQ29tcG9uZW50IGFzIE0gfSBmcm9tIFwiQGVtYmVkZGFibGUuY29tL3JlYWN0XCI7XG5pbXBvcnQgeyBqIGFzIHQgfSBmcm9tIFwiLi9qc3gtcnVudGltZS1DalFYYVNxUS5qc1wiO1xuaW1wb3J0IHsgdXNlUmVmIGFzIHosIHVzZVN0YXRlIGFzIHUsIHVzZUVmZmVjdCBhcyBULCB1c2VMYXlvdXRFZmZlY3QgYXMgTywgdXNlQ2FsbGJhY2sgYXMgRiwgdXNlTWVtbyBhcyBXIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB0IGFzICQsIFMgYXMgSyB9IGZyb20gXCIuL1NwaW5uZXItQmVOb1RjaUouanNcIjtcbmltcG9ydCB7IEMgYXMgTCwgYSBhcyBSIH0gZnJvbSBcIi4vQ2hlY2tib3hFbXB0eS1EZWpBZW50TC5qc1wiO1xuaW1wb3J0IHsgQyBhcyBfLCBhIGFzIEEsIGIgYXMgSCB9IGZyb20gXCIuL0NvbnRhaW5lci1tb3AtSjdUOC5qc1wiO1xubGV0IHg7XG5jb25zdCBxID0gKGUpID0+IHtcbiAgY29uc3QgcyA9IHoobnVsbCksIFtkLCBsXSA9IHUoITEpLCBbbSwgbl0gPSB1KCExKSwgW3YsIHddID0gdShcIlwiKSwgW0QsIGZdID0gdSghMSksIFthLCBrXSA9IHUoZS5kZWZhdWx0VmFsdWUpLCBbSiwgaF0gPSBJKHtcbiAgICBbZS5zZWFyY2hQcm9wZXJ0eSB8fCBcInNlYXJjaFwiXTogXCJcIlxuICB9KTtcbiAgVCgoKSA9PiB7XG4gICAgayhlLmRlZmF1bHRWYWx1ZSk7XG4gIH0sIFtlLmRlZmF1bHRWYWx1ZV0pLCBUKCgpID0+IHtcbiAgICBsZXQgbyA9IG51bGw7XG4gICAgcmV0dXJuIG0gPyBvICYmIGNsZWFyVGltZW91dChvKSA6IG8gPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGwoITEpO1xuICAgIH0sIDIwMCksICgpID0+IHtcbiAgICAgIG8gJiYgY2xlYXJUaW1lb3V0KG8pO1xuICAgIH07XG4gIH0sIFttXSksIE8oKCkgPT4ge1xuICAgIGlmICghRCkgcmV0dXJuO1xuICAgIGNvbnN0IG8gPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGwoITEpLCBmKCExKTtcbiAgICB9LCA1MDApO1xuICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQobyk7XG4gIH0sIFtEXSk7XG4gIGNvbnN0IGcgPSBGKFxuICAgIChvKSA9PiB7XG4gICAgICB3KG8pLCBjbGVhclRpbWVvdXQoeCksIHggPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGgoKHIpID0+ICh7IC4uLnIsIFtlLnNlYXJjaFByb3BlcnR5IHx8IFwic2VhcmNoXCJdOiBvIH0pKTtcbiAgICAgIH0sIDUwMCk7XG4gICAgfSxcbiAgICBbdywgaCwgZS5zZWFyY2hQcm9wZXJ0eV1cbiAgKSwgcCA9IEYoXG4gICAgKG8pID0+IHtcbiAgICAgIGcoXCJcIik7XG4gICAgICBsZXQgciA9IFtdO1xuICAgICAgbyAhPT0gXCJcIiAmJiAociA9IGEgfHwgW10sIHIgIT0gbnVsbCAmJiByLmluY2x1ZGVzKG8pID8gciA9IHIuZmlsdGVyKChjKSA9PiBjICE9PSBvKSA6IHIgPSBbLi4uciwgb10pLCBlLm9uQ2hhbmdlKHIpLCBrKHIpLCBoKChjKSA9PiAoeyAuLi5jLCBbZS5zZWFyY2hQcm9wZXJ0eSB8fCBcInNlYXJjaFwiXTogXCJcIiB9KSksIGNsZWFyVGltZW91dCh4KTtcbiAgICB9LFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgICBbZywgZSwgYV1cbiAgKSwgUyA9IChvLCByLCBjKSA9PiB7XG4gICAgKG8ua2V5ID09PSBcIkVudGVyXCIgfHwgby5rZXkgPT09IFwiIFwiKSAmJiAoby5wcmV2ZW50RGVmYXVsdCgpLCByKG8pKSwgby5rZXkgPT09IFwiRXNjYXBlXCIgJiYgKG8ucHJldmVudERlZmF1bHQoKSwgbCghMSksIGYoITApKTtcbiAgfSwgYiA9IFcoXG4gICAgKCkgPT4ge1xuICAgICAgdmFyIG8sIHI7XG4gICAgICByZXR1cm4gKHIgPSAobyA9IGUub3B0aW9ucykgPT0gbnVsbCA/IHZvaWQgMCA6IG8uZGF0YSkgPT0gbnVsbCA/IHZvaWQgMCA6IHIucmVkdWNlKChjLCBpLCBWKSA9PiB7XG4gICAgICAgIHZhciBDLCBqLCBCO1xuICAgICAgICByZXR1cm4gYy5wdXNoKFxuICAgICAgICAgIC8qIEBfX1BVUkVfXyAqLyB0LmpzeHMoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIHk7XG4gICAgICAgICAgICAgICAgbCghMCksIHAoaVsoKHkgPSBlLnByb3BlcnR5KSA9PSBudWxsID8gdm9pZCAwIDogeS5uYW1lKSB8fCBcIlwiXSB8fCBcIlwiKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb25LZXlEb3duOiAoeSkgPT4gUyh5LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIE47XG4gICAgICAgICAgICAgICAgcmV0dXJuIHAoaVsoKE4gPSBlLnByb3BlcnR5KSA9PSBudWxsID8gdm9pZCAwIDogTi5uYW1lKSB8fCBcIlwiXSB8fCBcIlwiKTtcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIG9uRm9jdXM6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBuKCEwKSwgbCghMCk7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogYGZsZXggaXRlbXMtY2VudGVyIG1pbi1oLVszNnB4XSB3LWZ1bGwgcHgtMyBweS0yIGhvdmVyOmJnLWJsYWNrLzUgY3Vyc29yLXBvaW50ZXIgZm9udC1ub3JtYWwgZ2FwLTEgJHthICE9IG51bGwgJiYgYS5pbmNsdWRlcyhpWygoQyA9IGUucHJvcGVydHkpID09IG51bGwgPyB2b2lkIDAgOiBDLm5hbWUpIHx8IFwiXCJdKSA/IFwiYmctYmxhY2svNVwiIDogXCJcIn1gLFxuICAgICAgICAgICAgICB0YWJJbmRleDogMCxcbiAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICBhICE9IG51bGwgJiYgYS5pbmNsdWRlcyhpWygoaiA9IGUucHJvcGVydHkpID09IG51bGwgPyB2b2lkIDAgOiBqLm5hbWUpIHx8IFwiXCJdKSA/IC8qIEBfX1BVUkVfXyAqLyB0LmpzeChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJ3LVsxNnB4XSBoLVsxNnB4XSBpbmxpbmUtYmxvY2tcIiwgY2hpbGRyZW46IC8qIEBfX1BVUkVfXyAqLyB0LmpzeChMLCB7fSkgfSkgOiAvKiBAX19QVVJFX18gKi8gdC5qc3goXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwidy1bMTZweF0gaC1bMTZweF0gaW5saW5lLWJsb2NrXCIsIGNoaWxkcmVuOiAvKiBAX19QVVJFX18gKi8gdC5qc3goUiwge30pIH0pLFxuICAgICAgICAgICAgICAgIC8qIEBfX1BVUkVfXyAqLyB0LmpzeHMoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiYmxvY2sgdy1mdWxsIHRydW5jYXRlXCIsIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICBpWygoQiA9IGUucHJvcGVydHkpID09IG51bGwgPyB2b2lkIDAgOiBCLm5hbWUpIHx8IFwiXCJdLFxuICAgICAgICAgICAgICAgICAgaS5ub3RlICYmIC8qIEBfX1BVUkVfXyAqLyB0LmpzeChcInNwYW5cIiwgeyBjbGFzc05hbWU6IFwiZm9udC1ub3JtYWwgbWwtYXV0byBwbC0zIHRleHQteHMgb3BhY2l0eS03MFwiLCBjaGlsZHJlbjogaS5ub3RlIH0pXG4gICAgICAgICAgICAgICAgXSB9KVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgVlxuICAgICAgICAgIClcbiAgICAgICAgKSwgYztcbiAgICAgIH0sIFtdKTtcbiAgICB9LFxuICAgIFtlLCBhLCBwXVxuICApO1xuICByZXR1cm4gLyogQF9fUFVSRV9fICovIHQuanN4KF8sIHsgdGl0bGU6IGUudGl0bGUsIGNoaWxkcmVuOiAvKiBAX19QVVJFX18gKi8gdC5qc3hzKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiAkKFxuICAgICAgICBgXG4gICAgICAgICAgICBib3JkZXJcbiAgICAgICAgICAgIGZsZXhcbiAgICAgICAgICAgIGgtMTBcbiAgICAgICAgICAgIGl0ZW1zLWNlbnRlclxuICAgICAgICAgICAgbWluLXctWzUwcHhdXG4gICAgICAgICAgICByZWxhdGl2ZVxuICAgICAgICAgICAgdy1mdWxsXG4gICAgICAgICAgICBiZy1bY29sb3I6LS1lbWJlZGRhYmxlLWNvbnRyb2xzLWJhY2tncm91bmRzLWNvbG9ycy1zb2Z0XVxuICAgICAgICAgICAgYm9yZGVyLVtjb2xvcjotLWVtYmVkZGFibGUtY29udHJvbHMtYm9yZGVycy1jb2xvcnMtbm9ybWFsXVxuICAgICAgICAgICAgcm91bmRlZC1bLS1lbWJlZGRhYmxlLWNvbnRyb2xzLWJvcmRlcnMtcmFkaXVzXVxuICAgICAgICAgICAgYCxcbiAgICAgICAgZS5jbGFzc05hbWVcbiAgICAgICksXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICAvKiBAX19QVVJFX18gKi8gdC5qc3goXG4gICAgICAgICAgXCJpbnB1dFwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHJlZjogcyxcbiAgICAgICAgICAgIHZhbHVlOiB2LFxuICAgICAgICAgICAgbmFtZTogXCJkcm9wZG93blwiLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IGUucGxhY2Vob2xkZXIsXG4gICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgIGwoITApLCBmKCExKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkZvY3VzOiAoKSA9PiB7XG4gICAgICAgICAgICAgIGwoITApLCBmKCExKSwgbighMCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25CbHVyOiAoKSA9PiB7XG4gICAgICAgICAgICAgIG4oITEpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uQ2hhbmdlOiAobykgPT4gZyhvLnRhcmdldC52YWx1ZSksXG4gICAgICAgICAgICBjbGFzc05hbWU6IGBcbiAgICAgICAgICAgIGJvcmRlci0wXG4gICAgICAgICAgICBjdXJzb3ItcG9pbnRlclxuICAgICAgICAgICAgaC05XG4gICAgICAgICAgICBsZWFkaW5nLTlcbiAgICAgICAgICAgIG91dGxpbmUtbm9uZVxuICAgICAgICAgICAgcHgtM1xuICAgICAgICAgICAgdGV4dC1zbSAke2QgfHwgIWEgPyBcIlwiIDogXCJvcGFjaXR5LTBcIn1cbiAgICAgICAgICAgIHctZnVsbFxuICAgICAgICAgICAgcm91bmRlZC1bLS1lbWJlZGRhYmxlLWNvbnRyb2xzLWJvcmRlcnMtcmFkaXVzXVxuICAgICAgICAgICAgYmctW2NvbG9yOi0tZW1iZWRkYWJsZS1jb250cm9scy1iYWNrZ3JvdW5kcy1jb2xvcnMtdHJhbnNwYXJlbnRdXG4gICAgICAgICAgYFxuICAgICAgICAgIH1cbiAgICAgICAgKSxcbiAgICAgICAgISFhICYmIC8qIEBfX1BVUkVfXyAqLyB0LmpzeHMoXG4gICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBgXG4gICAgICAgICAgICAgIGFic29sdXRlXG4gICAgICAgICAgICAgIGJsb2NrXG4gICAgICAgICAgICAgIGgtOFxuICAgICAgICAgICAgICBsZWFkaW5nLThcbiAgICAgICAgICAgICAgbGVmdC0zXG4gICAgICAgICAgICAgIG92ZXJmbG93LWhpZGRlblxuICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50cy1ub25lXG4gICAgICAgICAgICAgIHRleHQtc21cbiAgICAgICAgICAgICAgdG9wLTFcbiAgICAgICAgICAgICAgdHJ1bmNhdGVcbiAgICAgICAgICAgICAgdy1bY2FsYygxMDAlLTJyZW0pXVxuICAgICAgICAgICAgICB3aGl0ZXNwYWNlLW5vd3JhcFxuICAgICAgICAgICAgICBiZy1bY29sb3I6LS1lbWJlZGRhYmxlLWNvbnRyb2xzLWJhY2tncm91bmRzLWNvbG9ycy1zb2Z0XVxuICAgICAgICAgICAgICBib3JkZXItW2NvbG9yOi0tZW1iZWRkYWJsZS1jb250cm9scy1ib3JkZXJzLWNvbG9ycy1ub3JtYWxdXG4gICAgICAgICAgICAgIHJvdW5kZWQtWy0tZW1iZWRkYWJsZS1jb250cm9scy1ib3JkZXJzLXJhZGl1c11cbiAgICAgICAgICAgICAgJHtkID8gXCJoaWRkZW5cIiA6IFwiXCJ9XG4gICAgICAgICAgICBgLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgXCJTZWxlY3RlZCBcIixcbiAgICAgICAgICAgICAgYS5sZW5ndGgsXG4gICAgICAgICAgICAgIFwiIFwiLFxuICAgICAgICAgICAgICBhLmxlbmd0aCA9PT0gMSA/IFwib3B0aW9uXCIgOiBcIm9wdGlvbnNcIlxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgKSxcbiAgICAgICAgZCAmJiAvKiBAX19QVVJFX18gKi8gdC5qc3hzKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3R5bGU6IHsgbWluV2lkdGg6IGUubWluRHJvcGRvd25XaWR0aCB9LFxuICAgICAgICAgICAgY2xhc3NOYW1lOiBgXG4gICAgICAgICAgICAgIGFic29sdXRlXG4gICAgICAgICAgICAgIGJvcmRlclxuICAgICAgICAgICAgICBmbGV4XG4gICAgICAgICAgICAgIGZsZXgtY29sXG4gICAgICAgICAgICAgIG1heC1oLVs0MDBweF1cbiAgICAgICAgICAgICAgb3ZlcmZsb3cteC1oaWRkZW5cbiAgICAgICAgICAgICAgb3ZlcmZsb3cteS1hdXRvXG4gICAgICAgICAgICAgIHRvcC0xMVxuICAgICAgICAgICAgICB3LWZ1bGxcbiAgICAgICAgICAgICAgei01MFxuICAgICAgICAgICAgICBiZy1bY29sb3I6LS1lbWJlZGRhYmxlLWNvbnRyb2xzLWJhY2tncm91bmRzLWNvbG9ycy1zb2Z0XVxuICAgICAgICAgICAgICByb3VuZGVkLVstLWVtYmVkZGFibGUtY29udHJvbHMtYm9yZGVycy1yYWRpdXNdXG4gICAgICAgICAgICBgLFxuICAgICAgICAgICAgb25Gb2N1czogKCkgPT4ge1xuICAgICAgICAgICAgICBuKCEwKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkJsdXI6ICgpID0+IHtcbiAgICAgICAgICAgICAgbighMSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGFiSW5kZXg6IDAsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICBiLFxuICAgICAgICAgICAgICAoYiA9PSBudWxsID8gdm9pZCAwIDogYi5sZW5ndGgpID09PSAwICYmICEhdiAmJiAvKiBAX19QVVJFX18gKi8gdC5qc3goXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwicHgtMyBweS0yIHRleHQtYmxhY2svNTAgaXRhbGljIGN1cnNvci1wb2ludGVyXCIsIGNoaWxkcmVuOiBcIk5vIHJlc3VsdHNcIiB9KVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgKSxcbiAgICAgICAgZS5vcHRpb25zLmlzTG9hZGluZyA/IC8qIEBfX1BVUkVfXyAqLyB0LmpzeChLLCB7IHNob3c6ICEwLCBjbGFzc05hbWU6IFwiYWJzb2x1dGUgcmlnaHQtMiB0b3AtMiB6LTEgcG9pbnRlci1ldmVudHMtbm9uZVwiIH0pIDogLyogQF9fUFVSRV9fICovIHQuanN4KEEsIHsgY2xhc3NOYW1lOiBcImFic29sdXRlIHJpZ2h0LTIuNSB0b3AtMi41IHotMSBwb2ludGVyLWV2ZW50cy1ub25lXCIgfSksXG4gICAgICAgICFlLnVuY2xlYXJhYmxlICYmICEhYSAmJiAvKiBAX19QVVJFX18gKi8gdC5qc3goXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgIHAoXCJcIik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xhc3NOYW1lOiBcImFic29sdXRlIHJpZ2h0LTEwIHRvcC0wIGgtMTAgZmxleCBpdGVtcy1jZW50ZXIgei0xMCBjdXJzb3ItcG9pbnRlclwiLFxuICAgICAgICAgICAgY2hpbGRyZW46IC8qIEBfX1BVUkVfXyAqLyB0LmpzeChILCB7fSlcbiAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgIF1cbiAgICB9XG4gICkgfSk7XG59LCBHID0ge1xuICBuYW1lOiBcIk11bHRpU2VsZWN0RHJvcGRvd25cIixcbiAgbGFiZWw6IFwiTXVsdGktU2VsZWN0IGRyb3Bkb3duXCIsXG4gIGRlZmF1bHRXaWR0aDogMzAwLFxuICBkZWZhdWx0SGVpZ2h0OiA4MCxcbiAgY2xhc3NOYW1lczogW1wib24tdG9wXCJdLFxuICBjYXRlZ29yeTogXCJDb250cm9sczogaW5wdXRzICYgZHJvcGRvd25zXCIsXG4gIGlucHV0czogW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiZHNcIixcbiAgICAgIHR5cGU6IFwiZGF0YXNldFwiLFxuICAgICAgbGFiZWw6IFwiRGF0YXNldFwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiRGF0YXNldFwiLFxuICAgICAgY2F0ZWdvcnk6IFwiRHJvcGRvd24gdmFsdWVzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwicHJvcGVydHlcIixcbiAgICAgIHR5cGU6IFwiZGltZW5zaW9uXCIsXG4gICAgICBsYWJlbDogXCJQcm9wZXJ0eVwiLFxuICAgICAgY29uZmlnOiB7XG4gICAgICAgIGRhdGFzZXQ6IFwiZHNcIlxuICAgICAgfSxcbiAgICAgIGNhdGVnb3J5OiBcIkRyb3Bkb3duIHZhbHVlc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcInNvcnRCeVwiLFxuICAgICAgdHlwZTogXCJkaW1lbnNpb25Pck1lYXN1cmVcIixcbiAgICAgIGxhYmVsOiBcIk9wdGlvbmFsIFNvcnQgQnkgQWRkaXRpb25hbCBEaW1lbnNpb24gb3IgTWVhc3VyZVwiLFxuICAgICAgY29uZmlnOiB7XG4gICAgICAgIGRhdGFzZXQ6IFwiZHNcIlxuICAgICAgfSxcbiAgICAgIGNhdGVnb3J5OiBcIkRyb3Bkb3duIHZhbHVlc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcInNvcnRCeURpcmVjdGlvblwiLFxuICAgICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICAgIGxhYmVsOiBcIlNvcnQgQnkgRGlyZWN0aW9uIChhc2MvZGVzYylcIixcbiAgICAgIGRlZmF1bHRWYWx1ZTogXCJhc2NcIixcbiAgICAgIGNhdGVnb3J5OiBcIkRyb3Bkb3duIHZhbHVlc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcInRpdGxlXCIsXG4gICAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgICAgbGFiZWw6IFwiVGl0bGVcIixcbiAgICAgIGNhdGVnb3J5OiBcIlNldHRpbmdzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiZGVmYXVsdFZhbHVlXCIsXG4gICAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgICAgYXJyYXk6ICEwLFxuICAgICAgbGFiZWw6IFwiRGVmYXVsdCB2YWx1ZVwiLFxuICAgICAgY2F0ZWdvcnk6IFwiUHJlLWNvbmZpZ3VyZWQgdmFyaWFibGVzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwicGxhY2Vob2xkZXJcIixcbiAgICAgIHR5cGU6IFwic3RyaW5nXCIsXG4gICAgICBsYWJlbDogXCJQbGFjZWhvbGRlclwiLFxuICAgICAgZGVmYXVsdFZhbHVlOiBcIlNlbGVjdC4uLlwiLFxuICAgICAgY2F0ZWdvcnk6IFwiU2V0dGluZ3NcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJsaW1pdFwiLFxuICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgIGxhYmVsOiBcIkRlZmF1bHQgbnVtYmVyIG9mIG9wdGlvbnNcIixcbiAgICAgIGRlZmF1bHRWYWx1ZTogMTAwLFxuICAgICAgY2F0ZWdvcnk6IFwiU2V0dGluZ3NcIlxuICAgIH1cbiAgXSxcbiAgZXZlbnRzOiBbXG4gICAge1xuICAgICAgbmFtZTogXCJvbkNoYW5nZVwiLFxuICAgICAgbGFiZWw6IFwiQ2hhbmdlXCIsXG4gICAgICBwcm9wZXJ0aWVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcInZhbHVlXCIsXG4gICAgICAgICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICAgICAgICBhcnJheTogITBcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXSxcbiAgdmFyaWFibGVzOiBbXG4gICAge1xuICAgICAgbmFtZTogXCJkcm9wZG93biBjaG9pY2VzXCIsXG4gICAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgICAgZGVmYXVsdFZhbHVlOiBQLm5vRmlsdGVyKCksXG4gICAgICBhcnJheTogITAsXG4gICAgICBpbnB1dHM6IFtcImRlZmF1bHRWYWx1ZVwiXSxcbiAgICAgIGV2ZW50czogW3sgbmFtZTogXCJvbkNoYW5nZVwiLCBwcm9wZXJ0eTogXCJ2YWx1ZVwiIH1dXG4gICAgfVxuICBdXG59LCByZSA9IE0ocSwgRywge1xuICBwcm9wczogKGUsIFtzXSkgPT4ge1xuICAgIGlmICghZS5kcylcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmUsXG4gICAgICAgIG9wdGlvbnM6IFtdXG4gICAgICB9O1xuICAgIGNvbnN0IGQgPSBbXTtcbiAgICBsZXQgbCA9IFwiYXNjXCI7XG4gICAgKGUuc29ydEJ5RGlyZWN0aW9uID09PSBcImRlc2NcIiB8fCBlLnNvcnRCeURpcmVjdGlvbiA9PT0gXCJhc2NcIikgJiYgKGwgPSBlLnNvcnRCeURpcmVjdGlvbik7XG4gICAgY29uc3QgbSA9IGw7XG4gICAgZS5zb3J0QnkgJiYgZC5wdXNoKHtcbiAgICAgIHByb3BlcnR5OiBlLnNvcnRCeSxcbiAgICAgIGRpcmVjdGlvbjogbVxuICAgIH0pO1xuICAgIGNvbnN0IG4gPSBlLnByb3BlcnR5ID8gW2UucHJvcGVydHldIDogW107XG4gICAgcmV0dXJuIGUuc29ydEJ5ICYmIGUuc29ydEJ5ICE9PSBlLnByb3BlcnR5ICYmIG4ucHVzaChlLnNvcnRCeSksIHtcbiAgICAgIC4uLmUsXG4gICAgICBvcHRpb25zOiBFKHtcbiAgICAgICAgZnJvbTogZS5kcyxcbiAgICAgICAgc2VsZWN0OiBuLFxuICAgICAgICBsaW1pdDogZS5saW1pdCB8fCAxZTMsXG4gICAgICAgIG9yZGVyQnk6IGQsXG4gICAgICAgIGZpbHRlcnM6IHMgIT0gbnVsbCAmJiBzLnNlYXJjaCAmJiBlLnByb3BlcnR5ID8gW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG9wZXJhdG9yOiBcImNvbnRhaW5zXCIsXG4gICAgICAgICAgICBwcm9wZXJ0eTogZS5wcm9wZXJ0eSxcbiAgICAgICAgICAgIHZhbHVlOiBzID09IG51bGwgPyB2b2lkIDAgOiBzLnNlYXJjaFxuICAgICAgICAgIH1cbiAgICAgICAgXSA6IHZvaWQgMFxuICAgICAgfSlcbiAgICB9O1xuICB9LFxuICBldmVudHM6IHtcbiAgICBvbkNoYW5nZTogKGUpID0+ICh7XG4gICAgICB2YWx1ZTogZS5sZW5ndGggPyBlIDogUC5ub0ZpbHRlcigpXG4gICAgfSlcbiAgfVxufSk7XG5leHBvcnQge1xuICByZSBhcyBkZWZhdWx0LFxuICBHIGFzIG1ldGFcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1NdWx0aVNlbGVjdERyb3Bkb3duLmpzLm1hcFxuIl0sIm5hbWVzIjpbInoiLCJ1IiwidiIsImgiLCJJIiwiVCIsIm8iLCJPIiwiRiIsIlciLCJqIiwidCIsIkwiLCJSIiwiXyIsIiQiLCJLIiwiQSIsIkgiLCJQIiwiTSIsIkUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQU9BLElBQUk7QUFDQyxNQUFDLElBQUksQ0FBQyxNQUFNO0FBQ2YsUUFBTSxJQUFJQSxhQUFBQSxPQUFFLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJQyxzQkFBRSxLQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSUEsYUFBQUEsU0FBRSxLQUFFLEdBQUcsQ0FBQ0MsSUFBRyxDQUFDLElBQUlELGFBQUFBLFNBQUUsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUlBLHNCQUFFLEtBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJQSxhQUFBQSxTQUFFLEVBQUUsWUFBWSxHQUFHLENBQUMsR0FBR0UsR0FBQyxJQUFJQyxtQkFBRTtBQUFBLElBQ3hILENBQUMsRUFBRSxrQkFBa0IsUUFBUSxHQUFHO0FBQUEsRUFDcEMsQ0FBRztBQUNEQyxlQUFBQSxVQUFFLE1BQU07QUFDTixNQUFFLEVBQUUsWUFBWTtBQUFBLEVBQ2xCLEdBQUcsQ0FBQyxFQUFFLFlBQVksQ0FBQyxHQUFHQSxhQUFBQSxVQUFFLE1BQU07QUFDNUIsUUFBSUMsS0FBSTtBQUNSLFdBQU8sSUFBSUEsTUFBSyxhQUFhQSxFQUFDLElBQUlBLEtBQUksV0FBVyxNQUFNO0FBQ3JELFFBQUUsS0FBRTtBQUFBLElBQ04sR0FBRyxHQUFHLEdBQUcsTUFBTTtBQUNiLE1BQUFBLE1BQUssYUFBYUEsRUFBQztBQUFBLElBQ3JCO0FBQUEsRUFDRixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUdDLGFBQUFBLGdCQUFFLE1BQU07QUFDZixRQUFJLENBQUMsRUFBRztBQUNSLFVBQU1ELEtBQUksV0FBVyxNQUFNO0FBQ3pC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
