import { j } from './jsx-runtime-CjQXaSqQ-CjMA1-fF-CkV96GpT.js';
import { r as reactExports } from './embeddable-component-BD9bezsm.js';
import { _ as _e } from './Spinner-BeNoTciJ-DsMN3-m0-BGGztM1w.js';
import { h, o } from './CheckboxEmpty-DejAentL-B0WzSrSW-CPpzxNKa.js';
import { W as Wg, X as Xg, V as Vg } from './Container-mop-J7T8-BpqPaGKG-DiR4tjay.js';
import { l } from './Selector.utils-cEIYEuKn-DO9PZ0p4-H7RNp0_L.js';

const R = (r) => {
  const h$1 = reactExports.useRef(null), [d, a] = reactExports.useState(false), [x, o$1] = reactExports.useState(false), [u, b] = reactExports.useState(""), [p, n] = reactExports.useState(false), [l$1, v] = reactExports.useState(r.defaultValue);
  reactExports.useEffect(() => {
    v(r.defaultValue);
  }, [r.defaultValue]), reactExports.useEffect(() => {
    let e = null;
    return x ? e && clearTimeout(e) : e = setTimeout(() => {
      a(false);
    }, 200), () => {
      e && clearTimeout(e);
    };
  }, [x]), reactExports.useLayoutEffect(() => {
    if (!p) return;
    const e = setTimeout(() => {
      a(false), n(false);
    }, 500);
    return () => clearTimeout(e);
  }, [p]);
  const m = reactExports.useCallback(
    (e) => {
      b(e);
    },
    [b]
  ), i = reactExports.useCallback(
    (e) => {
      m("");
      let t = [];
      e !== "" && (t = l$1 || [], t != null && t.includes(e) ? t = t.filter((g) => g !== e) : t = [...t, e]), r.onChange(t), v(t);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [m, r, l$1]
  ), j$1 = (e, t, g) => {
    (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(e)), e.key === "Escape" && (e.preventDefault(), a(false), n(true));
  }, f = reactExports.useMemo(() => r.options.filter((e) => l(u, e)).map((e) => /* @__PURE__ */ j.jsxs(
    "div",
    {
      role: "button",
      onClick: () => {
        n(false), i(e.value);
      },
      onKeyDown: (t) => j$1(t, i(e.value)),
      onFocus: () => {
        o$1(true), a(true);
      },
      onBlur: () => {
        o$1(false);
      },
      className: `flex items-left items-center min-h-[36px] px-3 py-2 hover:bg-black/5 cursor-pointer font-normal ${l$1 != null && l$1.includes(e.value) ? "bg-black/5" : ""} truncate`,
      tabIndex: 0,
      children: [
        l$1 != null && l$1.includes(e.value) ? /* @__PURE__ */ j.jsx(h, {}) : /* @__PURE__ */ j.jsx(o, {}),
        /* @__PURE__ */ j.jsx("span", { className: "font-normal pl-1 truncate", title: e.label, children: e.label })
      ]
    },
    e.value
  )), [r, l$1, i, u]);
  return /* @__PURE__ */ j.jsx(Wg, { title: r.title, children: /* @__PURE__ */ j.jsxs(
    "div",
    {
      className: _e(
        "relative rounded-xl w-full min-w-[50px] h-10 border border-[#DADCE1] flex items-center",
        r.className
      ),
      children: [
        /* @__PURE__ */ j.jsx(
          "input",
          {
            ref: h$1,
            value: u,
            name: "dropdown",
            placeholder: r.placeholder,
            onClick: () => {
              a(true), n(false);
            },
            onFocus: () => {
              a(true), n(false), o$1(true);
            },
            onBlur: () => {
              o$1(false);
            },
            onChange: (e) => m(e.target.value),
            className: `outline-none bg-transparent leading-9 h-9 border-0 px-3 w-full cursor-pointer text-sm ${d || !l$1 ? "" : "opacity-0"}`
          }
        ),
        !!l$1 && /* @__PURE__ */ j.jsxs(
          "span",
          {
            className: `absolute w-[calc(100%-2rem)] whitespace-nowrap overflow-hidden truncate rounded-xl left-3 top-1 h-8 leading-8 block pointer-events-none text-sm ${d ? "hidden" : ""}`,
            children: [
              "Selected ",
              l$1.length,
              " ",
              l$1.length === 1 ? "option" : "options"
            ]
          }
        ),
        d && /* @__PURE__ */ j.jsxs(
          "div",
          {
            style: { minWidth: r.minDropdownWidth },
            className: "flex flex-col bg-white rounded-xl absolute top-11 z-50 border border-[#DADCE1] w-full overflow-y-auto overflow-x-hidden max-h-[400px]",
            onMouseDown: (e) => {
              var t;
              e.preventDefault(), (t = h$1.current) == null || t.focus(), n(false);
            },
            onFocus: () => {
              o$1(true);
            },
            onBlur: () => {
              o$1(false);
            },
            tabIndex: 0,
            children: [
              f,
              (f == null ? void 0 : f.length) === 0 && !!u && /* @__PURE__ */ j.jsx("div", { className: "px-3 py-2 text-black/50 italic cursor-pointer", children: "No results" })
            ]
          }
        ),
        /* @__PURE__ */ j.jsx(Xg, { className: "absolute right-2.5 top-2.5 z-1 pointer-events-none" }),
        !r.unclearable && !!l$1 && /* @__PURE__ */ j.jsx(
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

export { R };
//# sourceMappingURL=MultiSelector-B-FnhZ4g-DZ3NmSFU-BZYo2Q7C.js.map
//# sourceMappingURL=MultiSelector-B-FnhZ4g-DZ3NmSFU-BZYo2Q7C.js.map
