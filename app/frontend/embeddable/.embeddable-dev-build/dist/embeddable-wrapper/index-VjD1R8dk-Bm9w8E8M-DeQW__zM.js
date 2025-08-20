import { j } from './jsx-runtime-CjQXaSqQ-CjMA1-fF-CkV96GpT.js';
import { r as reactExports } from './embeddable-component-BD9bezsm.js';
import { c as ce } from './format-TjzP8gQX-Cs7Vwno2-CeUXJh2P.js';
import { D as Dg, W as Wg } from './Container-mop-J7T8-BpqPaGKG-DiR4tjay.js';
import { u as useTheme } from './index.esm-CVE60fla-BtsXn2z1.js';

const J = (i) => {
  var p, g, j$1, $, b, v, w, y;
  const {
    results: t,
    prevResults: l,
    prevTimeFilter: a,
    metric: n,
    displayMetric: M,
    dimension: s,
    dps: c,
    prefix: I,
    suffix: L,
    showPrevPeriodLabel: W
  } = i, o = useTheme(), { n: F, percentage: r } = reactExports.useMemo(() => {
    var u, C, S, z, k;
    if (s || !(n != null && n.name) || !((u = t == null ? void 0 : t.data) != null && u.length))
      return { percentage: null, n: null };
    const N = parseFloat(((S = (C = t == null ? void 0 : t.data) == null ? void 0 : C[0]) == null ? void 0 : S[n.name]) || 0), d = parseFloat(((k = (z = l == null ? void 0 : l.data) == null ? void 0 : z[0]) == null ? void 0 : k[n.name]) || 0);
    return {
      percentage: d || d === 0 ? Math.round(N / d * 100) - 100 : null,
      n: ce(N.toString(), {
        type: "number",
        meta: n == null ? void 0 : n.meta,
        dps: c
      })
    };
  }, [t, l, n, c, s]), m = i.fontSize || o.charts.kpi.font.size, h = Math.max(m / 3, parseInt(o.font.size.replace("px", ""), 10)), x = o.font.colorNormal, P = o.charts.kpi.font.negativeColor;
  return t != null && t.error ? /* @__PURE__ */ j.jsxs("div", { className: "h-full flex items-center justify-center font-embeddable text-sm", children: [
    /* @__PURE__ */ j.jsx(Dg, {}),
    /* @__PURE__ */ j.jsx("div", { className: "whitespace-pre-wrap p-4 max-w-sm text-xs", children: t == null ? void 0 : t.error })
  ] }) : /* @__PURE__ */ j.jsx(Wg, { ...i, className: "overflow-y-hidden", children: /* @__PURE__ */ j.jsx(
    "div",
    {
      className: `
          flex
          flex-col
          font-embeddable
          h-full
          items-${((p = o.charts.kpi) == null ? void 0 : p.alignment) || "center"}
          justify-center
          leading-tight
          relative
          text-${((g = o.charts.kpi) == null ? void 0 : g.alignment) || "center"}
          font-[--embeddable-charts-fontWeights-kpiNumber]
        `,
      children: s ? /* @__PURE__ */ j.jsxs(j.Fragment, { children: [
        /* @__PURE__ */ j.jsx(
          "div",
          {
            className: "text-[color:--embeddable-font-colorNormal]",
            style: { fontSize: `${m}px` },
            children: /* @__PURE__ */ j.jsx("p", { children: ($ = (j$1 = t == null ? void 0 : t.data) == null ? void 0 : j$1[0]) == null ? void 0 : $[s.name] })
          }
        ),
        M && n && /* @__PURE__ */ j.jsx(
          "p",
          {
            className: "font-normal",
            style: {
              fontSize: `${h}px`,
              color: x
            },
            children: `${n.title}: ${ce(`${(v = (b = t == null ? void 0 : t.data) == null ? void 0 : b[0]) == null ? void 0 : v[n.name]}`, {
              type: "number",
              dps: c,
              meta: n == null ? void 0 : n.meta
            })}
                `
          }
        )
      ] }) : /* @__PURE__ */ j.jsxs(j.Fragment, { children: [
        /* @__PURE__ */ j.jsx(
          "div",
          {
            className: "text-[color:--embeddable-font-colorNormal]",
            style: { fontSize: `${m}px` },
            children: /* @__PURE__ */ j.jsx("p", { children: `${I || ""}${F || 0}${L || ""}` })
          }
        ),
        (a == null ? void 0 : a.to) && /* @__PURE__ */ j.jsxs(
          "div",
          {
            className: `
                  flex
                  flex-wrap
                  font-normal
                  items-${((w = o.charts.kpi) == null ? void 0 : w.alignment) || "center"}
                  justify-center
                  text-${((y = o.charts.kpi) == null ? void 0 : y.alignment) || "center"}
                `,
            style: {
              color: r && r < 0 ? P : x,
              fontSize: `${h}px`
            },
            children: [
              /* @__PURE__ */ j.jsx(
                V,
                {
                  className: `${r && r < 0 ? "rotate-180" : ""} h-[20px] w-[9px] min-w-[9px] mr-1.5`
                }
              ),
              /* @__PURE__ */ j.jsx("span", { children: r === 1 / 0 ? "∞" : `${ce(`${Math.abs(r || 0)}`, { type: "number", dps: c })}%` }),
              W && (a == null ? void 0 : a.relativeTimeString) && a.relativeTimeString.length > 0 && /* @__PURE__ */ j.jsxs("span", { style: { color: x }, children: [
                " ",
                `vs ${a.relativeTimeString}`
              ] })
            ]
          }
        )
      ] })
    }
  ) });
}, V = ({ className: i }) => /* @__PURE__ */ j.jsx(
  "svg",
  {
    className: i || "",
    width: "16",
    height: "14",
    viewBox: "0 0 16 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ j.jsx(
      "path",
      {
        d: "M7.14028 0.753268C7.5422 0.0998221 8.4578 0.099822 8.85972 0.753268L15.8366 12.0964C16.2727 12.8054 15.7846 13.7369 14.9769 13.7369H1.02308C0.215416 13.7369 -0.272737 12.8054 0.163359 12.0964L7.14028 0.753268Z",
        fill: "currentcolor"
      }
    )
  }
);

export { J };
//# sourceMappingURL=index-VjD1R8dk-Bm9w8E8M-DeQW__zM.js.map
//# sourceMappingURL=index-VjD1R8dk-Bm9w8E8M-DeQW__zM.js.map
