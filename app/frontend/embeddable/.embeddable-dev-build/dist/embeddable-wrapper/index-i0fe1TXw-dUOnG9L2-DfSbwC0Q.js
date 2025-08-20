import { j as j$1 } from './jsx-runtime-CjQXaSqQ-CjMA1-fF-CkV96GpT.js';
import { u as useTheme } from './index.esm-CVE60fla-BtsXn2z1.js';
import { r as reactExports } from './embeddable-component-BD9bezsm.js';
import { j } from './useTimeseries-CKhM5zgf-Dd4vgjj--FzCeDPUA.js';
import { W as Wg } from './Container-mop-J7T8-BpqPaGKG-DiR4tjay.js';
import { q } from './BarChart-Q0q_vPOX-CbLXSR23-UHJkTnBl.js';
import { c as ce } from './format-TjzP8gQX-Cs7Vwno2-CeUXJh2P.js';

const M = (a) => {
  const m = useTheme(), { fillGaps: r } = j(a, "desc"), { results: t, isTSBarChart: o } = a, A = reactExports.useMemo(() => {
    var x, s;
    if (!o) return t == null ? void 0 : t.data;
    const i = (x = t == null ? void 0 : t.data) == null ? void 0 : x.reduce(r, []);
    let n;
    return ((s = a.xAxis) == null ? void 0 : s.nativeType) === "time" && a.granularity && a.granularity in m.dateFormats && (n = m.dateFormats[a.granularity]), (i == null ? void 0 : i.map((e) => {
      var f, u;
      return {
        ...e,
        ...((f = a.xAxis) == null ? void 0 : f.name) && {
          [a.xAxis.name]: n ? ce(e == null ? void 0 : e[a.xAxis.name], {
            meta: (u = a.xAxis) == null ? void 0 : u.meta,
            dateFormat: n
          }) : e == null ? void 0 : e[a.xAxis.name]
        }
      };
    })) ?? [];
  }, [o, t == null ? void 0 : t.data, r, a.xAxis, a.granularity, m]), h = {
    ...a,
    theme: m,
    results: { ...a.results, data: A }
  };
  return /* @__PURE__ */ j$1.jsx(Wg, { ...a, className: "overflow-y-hidden", children: /* @__PURE__ */ j$1.jsx(q, { ...h }) });
};

export { M };
//# sourceMappingURL=index-i0fe1TXw-dUOnG9L2-DfSbwC0Q.js.map
//# sourceMappingURL=index-i0fe1TXw-dUOnG9L2-DfSbwC0Q.js.map
