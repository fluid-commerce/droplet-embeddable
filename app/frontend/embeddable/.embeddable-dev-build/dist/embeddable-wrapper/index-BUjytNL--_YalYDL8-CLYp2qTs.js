import { j } from './jsx-runtime-CjQXaSqQ-CjMA1-fF-CkV96GpT.js';
import { a as useEmbeddableState } from './index.esm-CVE60fla-BtsXn2z1.js';
import { r as reactExports } from './embeddable-component-BD9bezsm.js';
import { $ as $e, _ as _e } from './Spinner-BeNoTciJ-DsMN3-m0-BGGztM1w.js';
import { W as Wg, X as Xg, V as Vg } from './Container-mop-J7T8-BpqPaGKG-DiR4tjay.js';

let p;
const G = (o) => {
  const w = reactExports.useRef(null), [f, s] = reactExports.useState(false), [g, d] = reactExports.useState(false), [v, y] = reactExports.useState(""), [k, l] = reactExports.useState(false), [a, b] = reactExports.useState(o.defaultValue), [O, j$1] = useEmbeddableState({
    [o.searchProperty || "search"]: ""
  });
  reactExports.useEffect(() => {
    b(o.defaultValue);
  }, [o.defaultValue]), reactExports.useEffect(() => {
    let e = null;
    return g ? e && clearTimeout(e) : e = setTimeout(() => {
      s(false);
    }, 200), () => {
      e && clearTimeout(e);
    };
  }, [g]), reactExports.useLayoutEffect(() => {
    if (!k) return;
    const e = setTimeout(() => {
      s(false), l(false);
    }, 500);
    return () => clearTimeout(e);
  }, [k]);
  const h = reactExports.useCallback(
    (e) => {
      y(e), clearTimeout(p), p = window.setTimeout(() => {
        j$1((r) => ({ ...r, [o.searchProperty || "search"]: e }));
      }, 500);
    },
    [y, j$1, o.searchProperty]
  ), u = reactExports.useCallback(
    (e) => {
      h(""), b(e), o.onChange(e), clearTimeout(p);
    },
    [b, o, h]
  ), S = (e, r, x) => {
    (e.key === "Enter" || e.key === " ") && (e.preventDefault(), r(e), s(false), l(true)), e.key === "Escape" && (e.preventDefault(), s(false), l(true));
  }, i = reactExports.useMemo(
    () => {
      var e, r;
      return (r = (e = o.options) == null ? void 0 : e.data) == null ? void 0 : r.reduce((x, n, E) => {
        var D, N;
        return x.push(
          /* @__PURE__ */ j.jsxs(
            "div",
            {
              onClick: () => {
                var m;
                s(false), l(true), u(n[((m = o.property) == null ? void 0 : m.name) || ""] || "");
              },
              onKeyDown: (m) => S(m, () => {
                var C;
                return u(n[((C = o.property) == null ? void 0 : C.name) || ""] || "");
              }),
              className: `flex items-center min-h-[36px] px-3 py-2 hover:bg-black/5 cursor-pointer font-normal ${a === n[((D = o.property) == null ? void 0 : D.name) || ""] ? "bg-black/5" : ""} whitespace-nowrap overflow-hidden text-ellipsis`,
              tabIndex: 0,
              children: [
                n[((N = o.property) == null ? void 0 : N.name) || ""],
                n.note && /* @__PURE__ */ j.jsx("span", { className: "font-normal ml-auto pl-3 text-xs opacity-70", children: n.note })
              ]
            },
            E
          )
        ), x;
      }, []);
    },
    [o, a, u]
  );
  return /* @__PURE__ */ j.jsx(Wg, { title: o.title, children: /* @__PURE__ */ j.jsxs(
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
        o.className
      ),
      children: [
        /* @__PURE__ */ j.jsx(
          "input",
          {
            ref: w,
            value: v,
            name: "dropdown",
            placeholder: o.placeholder,
            onClick: (e) => {
              s(true), l(false);
            },
            onFocus: () => {
              s(true), l(false), d(true);
            },
            onBlur: () => {
              d(false);
            },
            onChange: (e) => h(e.target.value),
            className: `
            border-0
            cursor-pointer
            h-9
            leading-9
            outline-none
            px-3
            text-sm ${f || !a ? "" : "opacity-0"}
            w-full
            bg-[color:--embeddable-controls-backgrounds-colors-transparent]
            rounded-[--embeddable-controls-borders-radius]
          `
          }
        ),
        !!a && /* @__PURE__ */ j.jsx(
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
              text-sm ${f ? "hidden" : ""}
              top-1
              truncate
              w-[calc(100%-2.5rem)]
              whitespace-nowrap
              rounded-[--embeddable-controls-borders-radius]
            `,
            children: a
          }
        ),
        f && /* @__PURE__ */ j.jsxs(
          "div",
          {
            style: { minWidth: o.minDropdownWidth },
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
              border-[color:--embeddable-controls-borders-colors-normal]
              rounded-[--embeddable-controls-borders-radius]
            `,
            onMouseDown: (e) => {
              var r;
              e.preventDefault(), (r = w.current) == null || r.focus(), l(false);
            },
            onFocus: () => {
              d(true);
            },
            onBlur: () => {
              d(false);
            },
            tabIndex: 0,
            children: [
              i,
              (i == null ? void 0 : i.length) === 0 && !!v && /* @__PURE__ */ j.jsx("div", { className: "px-3 py-2 text-black/50 italic cursor-pointer", children: "No results" })
            ]
          }
        ),
        o.options.isLoading ? /* @__PURE__ */ j.jsx($e, { show: true, className: "absolute right-2 top-2 z-1 pointer-events-none" }) : /* @__PURE__ */ j.jsx(Xg, { className: "absolute right-2 top-2.5 z-1 pointer-events-none" }),
        !o.unclearable && !!a && /* @__PURE__ */ j.jsx(
          "div",
          {
            onClick: () => {
              u("");
            },
            className: "absolute right-10 top-0 h-10 flex items-center z-10 cursor-pointer",
            children: /* @__PURE__ */ j.jsx(Vg, {})
          }
        )
      ]
    }
  ) });
};

export { G };
//# sourceMappingURL=index-BUjytNL--_YalYDL8-CLYp2qTs.js.map
//# sourceMappingURL=index-BUjytNL--_YalYDL8-CLYp2qTs.js.map
