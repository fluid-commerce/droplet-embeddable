import { j } from './jsx-runtime-CjQXaSqQ-CjMA1-fF-CkV96GpT.js';
import { r as reactExports } from './embeddable-component-BD9bezsm.js';
import { _ as _e } from './Spinner-BeNoTciJ-DsMN3-m0-BGGztM1w.js';
import { W as Wg, X as Xg, V as Vg } from './Container-mop-J7T8-BpqPaGKG-DiR4tjay.js';
import { l } from './Selector.utils-cEIYEuKn-DO9PZ0p4-H7RNp0_L.js';

const A = (t) => {
  var g;
  const x = reactExports.useRef(null), [d, a] = reactExports.useState(false), [b, u] = reactExports.useState(false), [c, v] = reactExports.useState(""), [p, r] = reactExports.useState(false), [s, m] = reactExports.useState(t.defaultValue), w = (g = t.options.find(
    (e) => e.value === s
  )) == null ? void 0 : g.label;
  reactExports.useEffect(() => {
    m(t.defaultValue);
  }, [t.defaultValue]), reactExports.useEffect(() => {
    let e = null;
    return b ? e && clearTimeout(e) : e = setTimeout(() => {
      a(false);
    }, 200), () => {
      e && clearTimeout(e);
    };
  }, [b]), reactExports.useLayoutEffect(() => {
    if (!p) return;
    const e = setTimeout(() => {
      a(false), r(false);
    }, 500);
    return () => clearTimeout(e);
  }, [p]);
  const h = reactExports.useCallback(
    (e) => {
      v(e);
    },
    [v]
  ), i = reactExports.useCallback(
    (e) => {
      h(""), m(e), t.onChange(e);
    },
    [m, t, h]
  ), j$1 = (e, o, V) => {
    (e.key === "Enter" || e.key === " ") && (e.preventDefault(), o(e), a(false), r(true)), e.key === "Escape" && (e.preventDefault(), a(false), r(true));
  }, f = reactExports.useMemo(() => t.options.filter((e) => l(c, e)).map((e) => /* @__PURE__ */ j.jsx(
    "div",
    {
      role: "button",
      onClick: () => {
        a(false), r(true), i(e.value);
      },
      onKeyDown: (o) => {
        j$1(
          o,
          () => {
            i(e.value);
          }
        );
      },
      className: `flex items-center min-h-[36px] px-3 py-2 hover:bg-black/5 cursor-pointer font-normal ${s === e.value ? "bg-black/5" : ""} whitespace-nowrap overflow-hidden text-ellipsis`,
      tabIndex: 0,
      children: e.label
    },
    e.value
  )), [t.options, s, i, c]);
  return /* @__PURE__ */ j.jsx(Wg, { title: t.title, children: /* @__PURE__ */ j.jsxs(
    "div",
    {
      className: _e(
        "relative rounded-xl w-full min-w-[50px] h-10 border border-[#DADCE1] flex items-center",
        t.className
      ),
      children: [
        /* @__PURE__ */ j.jsx(
          "input",
          {
            ref: x,
            value: c,
            name: "dropdown",
            placeholder: t.placeholder,
            onClick: () => {
              a(true), r(false);
            },
            onFocus: () => {
              a(true), r(false), u(true);
            },
            onBlur: () => {
              u(false);
            },
            onChange: (e) => h(e.target.value),
            className: `outline-none bg-transparent leading-9 h-9 border-0 px-3 w-full cursor-pointer text-sm ${d || !s ? "" : "opacity-0"}`
          }
        ),
        w && /* @__PURE__ */ j.jsx(
          "span",
          {
            className: `absolute w-[calc(100%-2.5rem)] whitespace-nowrap overflow-hidden truncate rounded-xl left-3 top-1 h-8 leading-8 block pointer-events-none text-sm ${d ? "hidden" : ""}`,
            children: w
          }
        ),
        d && /* @__PURE__ */ j.jsxs(
          "div",
          {
            style: { minWidth: t.minDropdownWidth },
            className: "flex flex-col bg-white rounded-xl absolute top-11 z-50 border border-[#DADCE1] w-full overflow-y-auto overflow-x-hidden max-h-[400px]",
            onMouseDown: (e) => {
              var o;
              e.preventDefault(), (o = x.current) == null || o.focus(), r(false);
            },
            onFocus: () => {
              u(true);
            },
            onBlur: () => {
              u(false);
            },
            tabIndex: 0,
            children: [
              f,
              (f == null ? void 0 : f.length) === 0 && !!c && /* @__PURE__ */ j.jsx("div", { className: "px-3 py-2 text-black/50 italic cursor-pointer", children: "No results" })
            ]
          }
        ),
        /* @__PURE__ */ j.jsx(Xg, { className: "absolute right-2 top-2.5 z-1 pointer-events-none" }),
        !t.unclearable && !!s && /* @__PURE__ */ j.jsx(
          "div",
          {
            onClick: () => {
              i("");
            },
            className: "absolute right-10 top-0 h-10 flex items-center z-10 cursor-pointer",
            children: /* @__PURE__ */ j.jsx(Vg, {})
          }
        )
      ]
    }
  ) });
};

export { A };
//# sourceMappingURL=Selector-CCh6GRlF-DS-lUtiW-BFSAxxoF.js.map
//# sourceMappingURL=Selector-CCh6GRlF-DS-lUtiW-BFSAxxoF.js.map
