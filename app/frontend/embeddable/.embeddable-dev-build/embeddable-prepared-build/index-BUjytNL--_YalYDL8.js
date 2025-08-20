import { j } from "./jsx-runtime-CjQXaSqQ-CjMA1-fF.js";
import { a as useEmbeddableState } from "./index.esm-CVE60fla.js";
import { r as reactExports } from "./embeddable-entry-point-DfzYO-OW.js";
import { $ as $e, _ as _e } from "./Spinner-BeNoTciJ-DsMN3-m0.js";
import { W as Wg, X as Xg, V as Vg } from "./Container-mop-J7T8-BpqPaGKG.js";
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
export {
  G
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgtQlVqeXROTC0tX1lhbFlETDguanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaHJpc3RvcGhlcmNhcmxzb24vZmx1aWQvZHJvcGxldC1lbWJlZGRhYmxlL2FwcC9mcm9udGVuZC9lbWJlZGRhYmxlL25vZGVfbW9kdWxlcy9AZW1iZWRkYWJsZS5jb20vdmFuaWxsYS1jb21wb25lbnRzL2Rpc3QvaW5kZXgtQlVqeXROTC0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaiBhcyB0IH0gZnJvbSBcIi4vanN4LXJ1bnRpbWUtQ2pRWGFTcVEuanNcIjtcbmltcG9ydCB7IHVzZUVtYmVkZGFibGVTdGF0ZSBhcyBGIH0gZnJvbSBcIkBlbWJlZGRhYmxlLmNvbS9yZWFjdFwiO1xuaW1wb3J0IHsgdXNlUmVmIGFzIHosIHVzZVN0YXRlIGFzIGMsIHVzZUVmZmVjdCBhcyBULCB1c2VMYXlvdXRFZmZlY3QgYXMgQiwgdXNlQ2FsbGJhY2sgYXMgSSwgdXNlTWVtbyBhcyBWIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB0IGFzIE0sIFMgYXMgUCB9IGZyb20gXCIuL1NwaW5uZXItQmVOb1RjaUouanNcIjtcbmltcG9ydCB7IEMgYXMgJCwgYSBhcyBLLCBiIGFzIEwgfSBmcm9tIFwiLi9Db250YWluZXItbW9wLUo3VDguanNcIjtcbmxldCBwO1xuY29uc3QgRyA9IChvKSA9PiB7XG4gIGNvbnN0IHcgPSB6KG51bGwpLCBbZiwgc10gPSBjKCExKSwgW2csIGRdID0gYyghMSksIFt2LCB5XSA9IGMoXCJcIiksIFtrLCBsXSA9IGMoITEpLCBbYSwgYl0gPSBjKG8uZGVmYXVsdFZhbHVlKSwgW08sIGpdID0gRih7XG4gICAgW28uc2VhcmNoUHJvcGVydHkgfHwgXCJzZWFyY2hcIl06IFwiXCJcbiAgfSk7XG4gIFQoKCkgPT4ge1xuICAgIGIoby5kZWZhdWx0VmFsdWUpO1xuICB9LCBbby5kZWZhdWx0VmFsdWVdKSwgVCgoKSA9PiB7XG4gICAgbGV0IGUgPSBudWxsO1xuICAgIHJldHVybiBnID8gZSAmJiBjbGVhclRpbWVvdXQoZSkgOiBlID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzKCExKTtcbiAgICB9LCAyMDApLCAoKSA9PiB7XG4gICAgICBlICYmIGNsZWFyVGltZW91dChlKTtcbiAgICB9O1xuICB9LCBbZ10pLCBCKCgpID0+IHtcbiAgICBpZiAoIWspIHJldHVybjtcbiAgICBjb25zdCBlID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzKCExKSwgbCghMSk7XG4gICAgfSwgNTAwKTtcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KGUpO1xuICB9LCBba10pO1xuICBjb25zdCBoID0gSShcbiAgICAoZSkgPT4ge1xuICAgICAgeShlKSwgY2xlYXJUaW1lb3V0KHApLCBwID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBqKChyKSA9PiAoeyAuLi5yLCBbby5zZWFyY2hQcm9wZXJ0eSB8fCBcInNlYXJjaFwiXTogZSB9KSk7XG4gICAgICB9LCA1MDApO1xuICAgIH0sXG4gICAgW3ksIGosIG8uc2VhcmNoUHJvcGVydHldXG4gICksIHUgPSBJKFxuICAgIChlKSA9PiB7XG4gICAgICBoKFwiXCIpLCBiKGUpLCBvLm9uQ2hhbmdlKGUpLCBjbGVhclRpbWVvdXQocCk7XG4gICAgfSxcbiAgICBbYiwgbywgaF1cbiAgKSwgUyA9IChlLCByLCB4KSA9PiB7XG4gICAgKGUua2V5ID09PSBcIkVudGVyXCIgfHwgZS5rZXkgPT09IFwiIFwiKSAmJiAoZS5wcmV2ZW50RGVmYXVsdCgpLCByKGUpLCBzKCExKSwgbCghMCkpLCBlLmtleSA9PT0gXCJFc2NhcGVcIiAmJiAoZS5wcmV2ZW50RGVmYXVsdCgpLCBzKCExKSwgbCghMCkpO1xuICB9LCBpID0gVihcbiAgICAoKSA9PiB7XG4gICAgICB2YXIgZSwgcjtcbiAgICAgIHJldHVybiAociA9IChlID0gby5vcHRpb25zKSA9PSBudWxsID8gdm9pZCAwIDogZS5kYXRhKSA9PSBudWxsID8gdm9pZCAwIDogci5yZWR1Y2UoKHgsIG4sIEUpID0+IHtcbiAgICAgICAgdmFyIEQsIE47XG4gICAgICAgIHJldHVybiB4LnB1c2goXG4gICAgICAgICAgLyogQF9fUFVSRV9fICovIHQuanN4cyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgbTtcbiAgICAgICAgICAgICAgICBzKCExKSwgbCghMCksIHUoblsoKG0gPSBvLnByb3BlcnR5KSA9PSBudWxsID8gdm9pZCAwIDogbS5uYW1lKSB8fCBcIlwiXSB8fCBcIlwiKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb25LZXlEb3duOiAobSkgPT4gUyhtLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIEM7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHUoblsoKEMgPSBvLnByb3BlcnR5KSA9PSBudWxsID8gdm9pZCAwIDogQy5uYW1lKSB8fCBcIlwiXSB8fCBcIlwiKTtcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogYGZsZXggaXRlbXMtY2VudGVyIG1pbi1oLVszNnB4XSBweC0zIHB5LTIgaG92ZXI6YmctYmxhY2svNSBjdXJzb3ItcG9pbnRlciBmb250LW5vcm1hbCAke2EgPT09IG5bKChEID0gby5wcm9wZXJ0eSkgPT0gbnVsbCA/IHZvaWQgMCA6IEQubmFtZSkgfHwgXCJcIl0gPyBcImJnLWJsYWNrLzVcIiA6IFwiXCJ9IHdoaXRlc3BhY2Utbm93cmFwIG92ZXJmbG93LWhpZGRlbiB0ZXh0LWVsbGlwc2lzYCxcbiAgICAgICAgICAgICAgdGFiSW5kZXg6IDAsXG4gICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgblsoKE4gPSBvLnByb3BlcnR5KSA9PSBudWxsID8gdm9pZCAwIDogTi5uYW1lKSB8fCBcIlwiXSxcbiAgICAgICAgICAgICAgICBuLm5vdGUgJiYgLyogQF9fUFVSRV9fICovIHQuanN4KFwic3BhblwiLCB7IGNsYXNzTmFtZTogXCJmb250LW5vcm1hbCBtbC1hdXRvIHBsLTMgdGV4dC14cyBvcGFjaXR5LTcwXCIsIGNoaWxkcmVuOiBuLm5vdGUgfSlcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIEVcbiAgICAgICAgICApXG4gICAgICAgICksIHg7XG4gICAgICB9LCBbXSk7XG4gICAgfSxcbiAgICBbbywgYSwgdV1cbiAgKTtcbiAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyB0LmpzeCgkLCB7IHRpdGxlOiBvLnRpdGxlLCBjaGlsZHJlbjogLyogQF9fUFVSRV9fICovIHQuanN4cyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIGNsYXNzTmFtZTogTShcbiAgICAgICAgYFxuICAgICAgICAgICAgYm9yZGVyXG4gICAgICAgICAgICBmbGV4XG4gICAgICAgICAgICBoLTEwXG4gICAgICAgICAgICBpdGVtcy1jZW50ZXJcbiAgICAgICAgICAgIG1pbi13LVs1MHB4XVxuICAgICAgICAgICAgcmVsYXRpdmVcbiAgICAgICAgICAgIHctZnVsbFxuICAgICAgICAgICAgYmctW2NvbG9yOi0tZW1iZWRkYWJsZS1jb250cm9scy1iYWNrZ3JvdW5kcy1jb2xvcnMtc29mdF1cbiAgICAgICAgICAgIGJvcmRlci1bY29sb3I6LS1lbWJlZGRhYmxlLWNvbnRyb2xzLWJvcmRlcnMtY29sb3JzLW5vcm1hbF1cbiAgICAgICAgICAgIHJvdW5kZWQtWy0tZW1iZWRkYWJsZS1jb250cm9scy1ib3JkZXJzLXJhZGl1c11cbiAgICAgICAgICBgLFxuICAgICAgICBvLmNsYXNzTmFtZVxuICAgICAgKSxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIC8qIEBfX1BVUkVfXyAqLyB0LmpzeChcbiAgICAgICAgICBcImlucHV0XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgcmVmOiB3LFxuICAgICAgICAgICAgdmFsdWU6IHYsXG4gICAgICAgICAgICBuYW1lOiBcImRyb3Bkb3duXCIsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogby5wbGFjZWhvbGRlcixcbiAgICAgICAgICAgIG9uQ2xpY2s6IChlKSA9PiB7XG4gICAgICAgICAgICAgIHMoITApLCBsKCExKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkZvY3VzOiAoKSA9PiB7XG4gICAgICAgICAgICAgIHMoITApLCBsKCExKSwgZCghMCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25CbHVyOiAoKSA9PiB7XG4gICAgICAgICAgICAgIGQoITEpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uQ2hhbmdlOiAoZSkgPT4gaChlLnRhcmdldC52YWx1ZSksXG4gICAgICAgICAgICBjbGFzc05hbWU6IGBcbiAgICAgICAgICAgIGJvcmRlci0wXG4gICAgICAgICAgICBjdXJzb3ItcG9pbnRlclxuICAgICAgICAgICAgaC05XG4gICAgICAgICAgICBsZWFkaW5nLTlcbiAgICAgICAgICAgIG91dGxpbmUtbm9uZVxuICAgICAgICAgICAgcHgtM1xuICAgICAgICAgICAgdGV4dC1zbSAke2YgfHwgIWEgPyBcIlwiIDogXCJvcGFjaXR5LTBcIn1cbiAgICAgICAgICAgIHctZnVsbFxuICAgICAgICAgICAgYmctW2NvbG9yOi0tZW1iZWRkYWJsZS1jb250cm9scy1iYWNrZ3JvdW5kcy1jb2xvcnMtdHJhbnNwYXJlbnRdXG4gICAgICAgICAgICByb3VuZGVkLVstLWVtYmVkZGFibGUtY29udHJvbHMtYm9yZGVycy1yYWRpdXNdXG4gICAgICAgICAgYFxuICAgICAgICAgIH1cbiAgICAgICAgKSxcbiAgICAgICAgISFhICYmIC8qIEBfX1BVUkVfXyAqLyB0LmpzeChcbiAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6IGBcbiAgICAgICAgICAgICAgYWJzb2x1dGVcbiAgICAgICAgICAgICAgYmxvY2tcbiAgICAgICAgICAgICAgaC04XG4gICAgICAgICAgICAgIGxlYWRpbmctOFxuICAgICAgICAgICAgICBsZWZ0LTNcbiAgICAgICAgICAgICAgb3ZlcmZsb3ctaGlkZGVuXG4gICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzLW5vbmVcbiAgICAgICAgICAgICAgdGV4dC1zbSAke2YgPyBcImhpZGRlblwiIDogXCJcIn1cbiAgICAgICAgICAgICAgdG9wLTFcbiAgICAgICAgICAgICAgdHJ1bmNhdGVcbiAgICAgICAgICAgICAgdy1bY2FsYygxMDAlLTIuNXJlbSldXG4gICAgICAgICAgICAgIHdoaXRlc3BhY2Utbm93cmFwXG4gICAgICAgICAgICAgIHJvdW5kZWQtWy0tZW1iZWRkYWJsZS1jb250cm9scy1ib3JkZXJzLXJhZGl1c11cbiAgICAgICAgICAgIGAsXG4gICAgICAgICAgICBjaGlsZHJlbjogYVxuICAgICAgICAgIH1cbiAgICAgICAgKSxcbiAgICAgICAgZiAmJiAvKiBAX19QVVJFX18gKi8gdC5qc3hzKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3R5bGU6IHsgbWluV2lkdGg6IG8ubWluRHJvcGRvd25XaWR0aCB9LFxuICAgICAgICAgICAgY2xhc3NOYW1lOiBgXG4gICAgICAgICAgICAgIGFic29sdXRlXG4gICAgICAgICAgICAgIGJvcmRlclxuICAgICAgICAgICAgICBmbGV4XG4gICAgICAgICAgICAgIGZsZXgtY29sXG4gICAgICAgICAgICAgIG1heC1oLVs0MDBweF1cbiAgICAgICAgICAgICAgb3ZlcmZsb3cteC1oaWRkZW5cbiAgICAgICAgICAgICAgb3ZlcmZsb3cteS1hdXRvXG4gICAgICAgICAgICAgIHRvcC0xMVxuICAgICAgICAgICAgICB3LWZ1bGxcbiAgICAgICAgICAgICAgei01MFxuICAgICAgICAgICAgICBiZy1bY29sb3I6LS1lbWJlZGRhYmxlLWNvbnRyb2xzLWJhY2tncm91bmRzLWNvbG9ycy1zb2Z0XVxuICAgICAgICAgICAgICBib3JkZXItW2NvbG9yOi0tZW1iZWRkYWJsZS1jb250cm9scy1ib3JkZXJzLWNvbG9ycy1ub3JtYWxdXG4gICAgICAgICAgICAgIHJvdW5kZWQtWy0tZW1iZWRkYWJsZS1jb250cm9scy1ib3JkZXJzLXJhZGl1c11cbiAgICAgICAgICAgIGAsXG4gICAgICAgICAgICBvbk1vdXNlRG93bjogKGUpID0+IHtcbiAgICAgICAgICAgICAgdmFyIHI7XG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKSwgKHIgPSB3LmN1cnJlbnQpID09IG51bGwgfHwgci5mb2N1cygpLCBsKCExKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkZvY3VzOiAoKSA9PiB7XG4gICAgICAgICAgICAgIGQoITApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uQmx1cjogKCkgPT4ge1xuICAgICAgICAgICAgICBkKCExKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0YWJJbmRleDogMCxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIGksXG4gICAgICAgICAgICAgIChpID09IG51bGwgPyB2b2lkIDAgOiBpLmxlbmd0aCkgPT09IDAgJiYgISF2ICYmIC8qIEBfX1BVUkVfXyAqLyB0LmpzeChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJweC0zIHB5LTIgdGV4dC1ibGFjay81MCBpdGFsaWMgY3Vyc29yLXBvaW50ZXJcIiwgY2hpbGRyZW46IFwiTm8gcmVzdWx0c1wiIH0pXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICApLFxuICAgICAgICBvLm9wdGlvbnMuaXNMb2FkaW5nID8gLyogQF9fUFVSRV9fICovIHQuanN4KFAsIHsgc2hvdzogITAsIGNsYXNzTmFtZTogXCJhYnNvbHV0ZSByaWdodC0yIHRvcC0yIHotMSBwb2ludGVyLWV2ZW50cy1ub25lXCIgfSkgOiAvKiBAX19QVVJFX18gKi8gdC5qc3goSywgeyBjbGFzc05hbWU6IFwiYWJzb2x1dGUgcmlnaHQtMiB0b3AtMi41IHotMSBwb2ludGVyLWV2ZW50cy1ub25lXCIgfSksXG4gICAgICAgICFvLnVuY2xlYXJhYmxlICYmICEhYSAmJiAvKiBAX19QVVJFX18gKi8gdC5qc3goXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgIHUoXCJcIik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xhc3NOYW1lOiBcImFic29sdXRlIHJpZ2h0LTEwIHRvcC0wIGgtMTAgZmxleCBpdGVtcy1jZW50ZXIgei0xMCBjdXJzb3ItcG9pbnRlclwiLFxuICAgICAgICAgICAgY2hpbGRyZW46IC8qIEBfX1BVUkVfXyAqLyB0LmpzeChMLCB7fSlcbiAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgIF1cbiAgICB9XG4gICkgfSk7XG59O1xuZXhwb3J0IHtcbiAgRyBhcyBEXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXgtQlVqeXROTC0uanMubWFwXG4iXSwibmFtZXMiOlsieiIsImMiLCJqIiwiRiIsIlQiLCJCIiwiSSIsIlYiLCJ0IiwiJCIsIk0iLCJQIiwiSyIsIkwiXSwibWFwcGluZ3MiOiI7Ozs7O0FBS0EsSUFBSTtBQUNDLE1BQUMsSUFBSSxDQUFDLE1BQU07QUFDZixRQUFNLElBQUlBLGFBQUFBLE9BQUUsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUlDLHNCQUFFLEtBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJQSxhQUFBQSxTQUFFLEtBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJQSxhQUFBQSxTQUFFLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJQSxzQkFBRSxLQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSUEsYUFBQUEsU0FBRSxFQUFFLFlBQVksR0FBRyxDQUFDLEdBQUdDLEdBQUMsSUFBSUMsbUJBQUU7QUFBQSxJ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
