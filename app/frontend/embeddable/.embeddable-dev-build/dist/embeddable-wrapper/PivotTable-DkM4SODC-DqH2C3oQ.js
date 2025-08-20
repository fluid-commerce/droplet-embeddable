import { h, A as A$1, v } from './Spinner-BeNoTciJ-DsMN3-m0-BGGztM1w.js';
import { d as defineComponent, u as useTheme } from './index.esm-CVE60fla-BtsXn2z1.js';
import { n, o } from './SortDirection.type.emb-Ddgerf5H-Cxcj1Pys-CMHk9l9o.js';
import { j as j$1 } from './jsx-runtime-CjQXaSqQ-CjMA1-fF-CkV96GpT.js';
import { P as Pg, N as Ng, X as Xg, W as Wg } from './Container-mop-J7T8-BpqPaGKG-DiR4tjay.js';
import { r as reactExports } from './embeddable-component-BD9bezsm.js';
import { u } from './cn-MtANU1gm-CGxwOT4x-BEfrUPk-.js';
import { c as ce } from './format-TjzP8gQX-Cs7Vwno2-CeUXJh2P.js';
import './Title-n-I3Fdvw-CW-j1pzr-DoihF5tM.js';
import './index-BV21PmyC.js';

var Ce = Object.defineProperty;
var le = (e) => {
  throw TypeError(e);
};
var Ne = (e, t, n2) => t in e ? Ce(e, t, { enumerable: true, configurable: true, writable: true, value: n2 }) : e[t] = n2;
var T = (e, t, n2) => Ne(e, typeof t != "symbol" ? t + "" : t, n2), ie = (e, t, n2) => t.has(e) || le("Cannot " + n2);
var c = (e, t, n2) => (ie(e, t, "read from private field"), n2 ? n2.call(e) : t.get(e)), R = (e, t, n2) => t.has(e) ? le("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n2), x = (e, t, n2, r) => (ie(e, t, "write to private field"), r ? r.call(e, n2) : t.set(e, n2), n2);
var fe = /* @__PURE__ */ ((e) => (e.NUMERIC_VALUES_ONLY = "Numeric Value Only", e.VALUE_BARS = "Value Bars", e.HEATMAP = "Heat Map", e))(fe || {}), N = /* @__PURE__ */ ((e) => (e.DIMENSION = "dimension", e.MEASURE = "measure", e.ROW_HEADER_GROUP = "row-header-group", e.ROW_HEADER = "row-header", e))(N || {});
function be({
  columns: e,
  fontSize: t = "16px",
  minColumnWidth: n$1,
  minHeaderColumnWidth: r,
  enableSorting: a = true,
  sortCriteria: o2,
  onSortingChange: d
}) {
  const y = useTheme();
  t = y.font.size, y.font.colorNormal;
  const D = (l, p) => {
    var S, M, W, F, ee, $;
    const i = l.type === N.ROW_HEADER || l.type === N.ROW_HEADER_GROUP, h2 = l.type !== N.DIMENSION || ((S = l.children) == null ? void 0 : S.filter((b) => b.type === N.MEASURE).length) === 1, s = l.getLeafColumns(), u$1 = i || s.some(
      (b) => b.type === N.ROW_HEADER || b.type === N.ROW_HEADER_GROUP
    ), f = l.depth === 0 || l.type !== N.MEASURE || ((F = (W = (M = l.parent) == null ? void 0 : M.children) == null ? void 0 : W.at(-1)) == null ? void 0 : F.key) === l.key, C = a && l.type !== N.DIMENSION, g = (ee = o2 == null ? void 0 : o2.find(
      (b) => b.key === l.key
    )) == null ? void 0 : ee.direction;
    return /* @__PURE__ */ j$1.jsx(
      "th",
      {
        colSpan: s.length,
        className: u("p-2 border-y first:border-l", {
          "border-b-0": ($ = l.children) == null ? void 0 : $.length,
          "border-r": f,
          "lg:sticky lg:left-0 lg:z-10 bg-[color:--embeddable-controls-backgrounds-colors-soft]": u$1,
          "cursor-pointer": C
        }),
        style: n$1 ? {
          minWidth: (i ? r : n$1) ?? "auto"
        } : {},
        ...C ? {
          onClick: () => {
            d == null || d(
              l.key,
              g === n.DESCENDING ? n.ASCENDING : n.DESCENDING
            );
          }
        } : null,
        children: /* @__PURE__ */ j$1.jsxs(
          "div",
          {
            className: u("text-center", {
              "text-left": h2,
              "flex justify-between items-center gap-2": C
            }),
            children: [
              /* @__PURE__ */ j$1.jsx("span", { className: "text-[color:--embeddable-font-colorNormal}]", style: { fontSize: t }, children: l.label }),
              C ? /* @__PURE__ */ j$1.jsx(
                "span",
                {
                  className: u("w-3", {
                    invisible: !g
                  }),
                  children: g === n.ASCENDING ? /* @__PURE__ */ j$1.jsx(Pg, { fill: "currentcolor" }) : /* @__PURE__ */ j$1.jsx(Ng, { fill: "currentcolor" })
                }
              ) : null
            ]
          }
        )
      },
      `${p}-${l.key}`
    );
  };
  return e.length ? /* @__PURE__ */ j$1.jsxs(j$1.Fragment, { children: [
    /* @__PURE__ */ j$1.jsx("tr", { children: e.map(D) }),
    e[0].children ? /* @__PURE__ */ j$1.jsx(
      be,
      {
        columns: e.map((l) => (l == null ? void 0 : l.children) || []).flat(),
        onSortingChange: d,
        fontSize: t,
        minColumnWidth: n$1,
        minHeaderColumnWidth: r,
        enableSorting: a,
        sortCriteria: o2
      }
    ) : null
  ] }) : null;
}
function Te({ isHeader: e, className: t, children: n2 }) {
  const r = e ? "th" : "td";
  return /* @__PURE__ */ j$1.jsx(
    r,
    {
      className: u("px-2 py-1.5 font-normal first:border-l bg-inherit", {
        "lg:z-10 lg:sticky lg:left-0 text-left": e
      }, t),
      children: n2
    }
  );
}
const De = ({ columns: e, row: t, renderCell: n2, level: r = 0, isRowGroupDefaultExpanded: a }) => {
  var p;
  const [o2, d] = reactExports.useState(a ?? true), y = () => {
    d((i) => !i);
  }, D = (i, h2) => {
    var u$1, f, C, g;
    const s = i.type === N.ROW_HEADER;
    return /* @__PURE__ */ j$1.jsx(
      Te,
      {
        isHeader: s,
        className: u("border-b", {
          "border-r": !i.parent || ((C = (f = (u$1 = i.parent) == null ? void 0 : u$1.children) == null ? void 0 : f.at(-1)) == null ? void 0 : C.key) === i.key || s
        }),
        children: /* @__PURE__ */ j$1.jsxs(
          "div",
          {
            className: "flex items-center",
            style: { marginLeft: s ? `${r * 30}px` : 0 },
            children: [
              (g = t.children) != null && g.length && s ? /* @__PURE__ */ j$1.jsx(
                Xg,
                {
                  className: u("w-4 h-4 mr-1 cursor-pointer transform", {
                    "-rotate-90": !o2
                  }),
                  onClick: y
                }
              ) : null,
              (n2 == null ? void 0 : n2(h2, i)) || h2[i.key]
            ]
          }
        )
      },
      `${t.id}-${i.key}`
    );
  }, l = (i, h2) => i.map(
    (s) => {
      var u2;
      return s.type === N.ROW_HEADER_GROUP && ((u2 = s.group) != null && u2.length) ? D(s.group[r], h2) : D(s, h2);
    }
  );
  return /* @__PURE__ */ j$1.jsxs(j$1.Fragment, { children: [
    /* @__PURE__ */ j$1.jsx(
      "tr",
      {
        className: `
        bg-[color:--embeddable-controls-backgrounds-colors-soft]
        hover:bg-[color:--embeddable-controls-backgrounds-colors-normal]`,
        children: l(e, t.data)
      }
    ),
    o2 && ((p = t.children) == null ? void 0 : p.map((i) => /* @__PURE__ */ j$1.jsx(
      De,
      {
        columns: e,
        row: i,
        renderCell: n2,
        level: r + 1
      },
      i.id
    )))
  ] });
}, Ie = "-->", Re = (e) => e == null ? "" : e.toString().replaceAll(" ", "_").toLowerCase(), ae = (e) => [
  ...e.map((t) => Re(t))
].join(Ie), E = [];
for (let e = 0; e < 256; ++e)
  E.push((e + 256).toString(16).slice(1));
function je(e, t = 0) {
  return (E[e[t + 0]] + E[e[t + 1]] + E[e[t + 2]] + E[e[t + 3]] + "-" + E[e[t + 4]] + E[e[t + 5]] + "-" + E[e[t + 6]] + E[e[t + 7]] + "-" + E[e[t + 8]] + E[e[t + 9]] + "-" + E[e[t + 10]] + E[e[t + 11]] + E[e[t + 12]] + E[e[t + 13]] + E[e[t + 14]] + E[e[t + 15]]).toLowerCase();
}
let ne;
const _e = new Uint8Array(16);
function Ue() {
  if (!ne) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    ne = crypto.getRandomValues.bind(crypto);
  }
  return ne(_e);
}
const Oe = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), ue = { randomUUID: Oe };
function Me(e, t, n2) {
  var a;
  if (ue.randomUUID && !e)
    return ue.randomUUID();
  e = e || {};
  const r = e.random ?? ((a = e.rng) == null ? void 0 : a.call(e)) ?? Ue();
  if (r.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, je(r);
}
var K, G, L, Y;
class de {
  constructor(t, n2 = [], r = 0) {
    R(this, K);
    R(this, G);
    R(this, L);
    R(this, Y);
    x(this, K, Me()), x(this, G, t), x(this, L, n2), x(this, Y, r);
  }
  get id() {
    return c(this, K);
  }
  get data() {
    return c(this, G);
  }
  set data(t) {
    x(this, G, t);
  }
  get children() {
    return c(this, L);
  }
  set children(t) {
    x(this, L, t);
  }
  get depth() {
    return c(this, Y);
  }
  getLeafRows() {
    return this.children.length ? this.children.reduce((t, n2) => [...t, ...n2.getLeafRows()], []) : [this];
  }
}
K = /* @__PURE__ */ new WeakMap(), G = /* @__PURE__ */ new WeakMap(), L = /* @__PURE__ */ new WeakMap(), Y = /* @__PURE__ */ new WeakMap();
var H, q, I, j, J, Q, _, U, P, re, X, Z;
class Ve {
  constructor(t, n2, r = [], a = [], o2 = true) {
    R(this, H);
    R(this, q);
    R(this, I);
    R(this, j);
    R(this, J);
    R(this, Q);
    R(this, _);
    R(this, U, {});
    R(this, P, (t2, n3) => n3 == null ? void 0 : n3.map((r2) => (c(this, U)[r2.name] || (c(this, U)[r2.name] = /* @__PURE__ */ new Set()), c(this, U)[r2.name].add(t2[r2.name]), t2[r2.name])));
    R(this, re, (t2) => c(this, q).reduce((n3, r2) => ({
      ...n3,
      [ae([...c(this, P).call(this, t2, c(this, j)), r2.name])]: t2[r2.name]
    }), {}));
    R(this, X, (t2, n3, r2) => {
      if (!n3.length) {
        t2.data = { ...t2.data, ...r2 };
        return;
      }
      const a2 = Re(n3[0]);
      t2.children.has(a2) || t2.children.set(a2, {
        data: {},
        children: /* @__PURE__ */ new Map()
      }), c(this, X).call(this, t2.children.get(a2), n3.slice(1), r2);
    });
    R(this, Z, (t2, n3 = 0) => {
      const r2 = [];
      if (c(this, I).length)
        for (const [, a2] of t2.children)
          r2.push(new de(
            a2.data,
            c(this, Z).call(this, a2, n3 + 1),
            n3
          ));
      else
        r2.push(new de(t2.data));
      return r2;
    });
    x(this, H, t), x(this, q, n2), x(this, I, r || []), x(this, j, a), x(this, Q, o2), x(this, J, c(this, H).reduce((d, y, D) => {
      const l = c(this, Q) ? c(this, I).slice(0, D + 1) : c(this, I);
      return y.forEach((p) => {
        const i = c(this, P).call(this, p, l), h2 = {
          ...c(this, re).call(this, p),
          ...l.reduce((s, u2) => ({
            ...s,
            [u2.name]: p[u2.name]
          }), {})
        };
        l.length && c(this, I).length > 1 && (h2["__group.key"] = p[l.at(-1).name]), c(this, X).call(this, d, i, h2);
      }), d;
    }, { data: {}, children: /* @__PURE__ */ new Map() })), !c(this, I).length && c(this, j).length && c(this, H).forEach((d) => {
      d.forEach((y) => c(this, P).call(this, y, c(this, j)));
    }), x(this, _, null);
  }
  get rows() {
    return c(this, _) || x(this, _, c(this, Z).call(this, c(this, J))), c(this, _);
  }
  getColumnDimensionValues(t) {
    return [...c(this, U)[t]];
  }
}
H = /* @__PURE__ */ new WeakMap(), q = /* @__PURE__ */ new WeakMap(), I = /* @__PURE__ */ new WeakMap(), j = /* @__PURE__ */ new WeakMap(), J = /* @__PURE__ */ new WeakMap(), Q = /* @__PURE__ */ new WeakMap(), _ = /* @__PURE__ */ new WeakMap(), U = /* @__PURE__ */ new WeakMap(), P = /* @__PURE__ */ new WeakMap(), re = /* @__PURE__ */ new WeakMap(), X = /* @__PURE__ */ new WeakMap(), Z = /* @__PURE__ */ new WeakMap();
class z {
  /**
   * @constructor
   * @param {ColumnConfig} config
   *
   * @param {string} config.label - Column label that will be displayed in the table
   * @param {string} config.key - Column key that serves as an accessor for the value and should be unique among all columns
   * @param {ColumnType} config.type - Column type
   * @param {NativeDataType} config.dataType - Column data type that will be used for formatting of the value
   * @param {number} config.depth - Column depth in the column hierarchy
   * @param {Column[]} config.children - Column children that are nested under this column
   * @param {Column} config.parent - Reference to parent column that this column is nested under
   */
  constructor({
    label: t,
    key: n2,
    type: r,
    dataType: a,
    depth: o2 = 0,
    children: d,
    parent: y,
    group: D
  }) {
    T(this, "label");
    T(this, "key");
    T(this, "type");
    T(this, "dataType");
    T(this, "depth");
    T(this, "children");
    T(this, "parent");
    T(this, "group");
    this.label = t, this.key = n2, this.type = r, this.dataType = a ?? null, this.depth = o2, this.parent = y ?? null, this.children = d ?? null, this.group = D ?? null;
  }
  /**
   * Add children columns to this column
   * @param {Column[]} childColumns
   * @returns {Column[]} all children columns
   * @public
   */
  addChildren(t) {
    return this.children = [
      ...this.children || [],
      ...t
    ], this.children;
  }
  /**
   * Get all leaf columns that are nested under this column
   * @returns {Column[]}
   * @public
   */
  getLeafColumns() {
    var t;
    return (t = this.children) != null && t.length ? this.children.reduce((n2, r) => [...n2, ...r.getLeafColumns()], []) : [this];
  }
}
const Ge = (e, t, n2, r, a = {}) => {
  const o2 = useTheme();
  function d(i = false, h2 = null) {
    const s = t.map(
      (u2) => new z({
        label: u2.title,
        key: u2.name,
        depth: e.length,
        type: N.ROW_HEADER,
        dataType: u2.nativeType,
        parent: h2
      })
    );
    return i ? [
      new z({
        label: t.map((u2) => u2.title).join(" → "),
        key: "__group.key",
        depth: e.length,
        type: N.ROW_HEADER_GROUP,
        group: s,
        parent: h2
      })
    ] : s;
  }
  function y(i, h2 = 0, s = null) {
    if (!i.length)
      return d(
        a.aggregateRowDimensions && t.length > 1,
        s
      );
    const [u2, ...f] = i, C = new z({
      label: u2.title,
      key: u2.name,
      depth: h2,
      type: N.DIMENSION,
      dataType: u2.nativeType,
      parent: s
    }), g = y(f, h2 + 1, C);
    return C.addChildren(g), [C];
  }
  function D(i, h2 = 0, s = null, u2 = []) {
    if (!i.length)
      return n2.map(
        (g) => new z({
          label: g.title,
          key: ae([...u2, g.name]),
          depth: h2,
          type: N.MEASURE,
          dataType: g.nativeType,
          parent: s || null
        })
      );
    const [f, ...C] = i;
    return r[f.name].map((g) => {
      const S = new z({
        label: ce(g, {
          // type: currentColumnDimension.nativeType === 'time' ? 'date' : currentColumnDimension.nativeType as any,
          ...a.granularity && f.nativeType === "time" && g ? {
            dateFormat: o2.dateFormats[a.granularity]
          } : {}
        }) ?? "-",
        key: ae([...u2, g]),
        depth: h2,
        type: N.DIMENSION,
        dataType: f.nativeType,
        parent: s
      }), M = D(C, h2 + 1, S, [
        ...u2,
        g
      ]);
      return S.addChildren(M), S;
    });
  }
  const l = reactExports.useMemo(
    () => [
      ...t.length ? y(e) : [],
      ...D(e)
    ],
    [
      e,
      t,
      n2,
      r,
      a.aggregateRowDimensions
    ]
  ), p = reactExports.useMemo(
    () => l.map((i) => i.getLeafColumns()).flat(),
    [l]
  );
  return {
    columns: l,
    getLeafColumns: () => p
  };
};
function he(e, t) {
  return typeof t == "function" ? t(e) : e[t];
}
function me(e) {
  return !isNaN(e);
}
const Le = (e) => (t, n2) => {
  for (const { key: r, direction: a } of e) {
    const o2 = he(t, r) || 0, d = he(n2, r) || 0, y = Ee(o2, d, a);
    if (y !== 0)
      return y;
  }
  return 0;
}, Ee = (e, t, n$1) => {
  if (me(e) && me(t)) {
    const r = parseInt(e, 10), a = parseInt(t, 10);
    return (r - a) * (n$1 === n.ASCENDING ? 1 : -1);
  } else return typeof e == "string" && typeof t == "string" ? e.localeCompare(t, void 0, {
    sensitivity: "base",
    numeric: true
  }) * (n$1 === n.ASCENDING ? 1 : -1) : typeof e == "number" ? -1 : 1;
}, He = (e, t, n$1 = [], r = [], a = {}) => {
  const o2 = reactExports.useMemo(() => new Ve(
    e,
    t,
    n$1,
    r,
    a.aggregateRowDimensions
  ), [e, t, n$1, r, a.aggregateRowDimensions]), d = reactExports.useMemo(() => r.reduce((l, p) => ({
    ...l,
    [p.name]: o2.getColumnDimensionValues(p.name).sort((i, h2) => Ee(i, h2, a.defaultColumnsSort ?? n.ASCENDING))
  }), {}), [r, o2, a.defaultColumnsSort]), { columns: y, getLeafColumns: D } = Ge(
    r,
    n$1,
    t,
    d,
    {
      aggregateRowDimensions: a.aggregateRowDimensions,
      granularity: a.granularity
    }
  );
  return {
    rows: o2.rows,
    columns: y,
    getLeafColumns: D
  };
}, Pe = ({
  aggregateRowDimensions: e = true,
  columnDimensions: t,
  columnSortingEnabled: n2 = true,
  data: r,
  defaultColumnDimensionSortDirection: a,
  defaultRowDimensionSortDirection: o2,
  fontSize: d = "14px",
  granularity: y,
  isRowGroupDefaultExpanded: D = true,
  measures: l,
  minColumnWidth: p,
  minRowDimensionColumnWidth: i,
  nullValueCharacter: h2 = "",
  rowDimensions: s
}) => {
  const u2 = useTheme();
  d = u2.font.size;
  const [f, C] = reactExports.useState(() => !s || !o2 ? [] : [
    {
      key: s.length === 1 ? s[0].name : "__group.key",
      direction: o2
    }
  ]), { rows: g, columns: S, getLeafColumns: M } = He(
    r,
    l,
    s,
    t,
    {
      aggregateRowDimensions: e,
      defaultColumnsSort: a,
      granularity: y
    }
  ), W = (b, w) => {
    const A2 = [...b];
    return A2.sort(Le(w)), A2.forEach((v2) => {
      var B;
      (B = v2.children) != null && B.length && (v2.children = W(v2.children, w));
    }), A2;
  }, F = reactExports.useMemo(() => {
    const b = parseInt(h2, 10);
    return f.map((w) => ({
      ...w,
      key: (A2) => A2.data[w.key] || (isNaN(b) ? null : b)
    }));
  }, [f]), ee = reactExports.useMemo(() => W(g, F), [g, F]), $ = reactExports.useMemo(
    () => (b) => l.find((w) => w.title === b),
    [l]
  );
  return /* @__PURE__ */ j$1.jsxs("table", { className: "min-w-full border-separate border-spacing-0 table-fixed", children: [
    /* @__PURE__ */ j$1.jsx(
      "thead",
      {
        className: `
        embeddable-table-header
        sticky
        top-0
        z-20
        bg-[color:--embeddable-controls-backgrounds-colors-soft]
      `,
        children: /* @__PURE__ */ j$1.jsx(
          be,
          {
            columns: S,
            minColumnWidth: `${p}px`,
            minHeaderColumnWidth: `${i}px`,
            enableSorting: n2,
            sortCriteria: f,
            onSortingChange: (b, w) => {
              C([
                {
                  key: b,
                  direction: w
                }
              ]);
            },
            fontSize: d
          }
        )
      }
    ),
    /* @__PURE__ */ j$1.jsx("tbody", { className: "overflow-y-auto", children: ee.map((b) => /* @__PURE__ */ j$1.jsx(
      De,
      {
        columns: M(),
        row: b,
        isRowGroupDefaultExpanded: D,
        renderCell: (w, A2) => {
          var B;
          const v2 = w[A2.key];
          return typeof v2 == "boolean" ? /* @__PURE__ */ j$1.jsx("span", { style: { fontSize: d }, children: v2 ? "True" : "False" }) : /* @__PURE__ */ j$1.jsx("span", { style: { fontSize: d }, children: v2 == null ? h2 : ce(v2, {
            //format date columns
            ...y && A2.dataType === "time" ? {
              dateFormat: u2.dateFormats[y]
            } : {},
            //format measures
            ...$(A2.label) ? { meta: (B = $(A2.label)) == null ? void 0 : B.meta, type: "number" } : {}
          }) });
        }
      },
      b.id
    )) })
  ] });
}, We = ({ rowValues: e, columnValues: t, metrics: n2, ...r }) => {
  const a = [];
  return e != null && e.length && r.aggregateRowDimensions ? e == null || e.forEach((o2, d) => {
    r[`resultsDimension${d}`] && a.push(r[`resultsDimension${d}`]);
  }) : a.push(r.resultsDimension0), /* @__PURE__ */ j$1.jsx(
    Wg,
    {
      title: r.title,
      results: a,
      description: r.description,
      className: "overflow-auto",
      children: a.every((o2) => o2 && !o2.isLoading && !o2.error) && /* @__PURE__ */ j$1.jsx(
        Pe,
        {
          ...r,
          data: a.map((o2) => o2.data),
          columnDimensions: t,
          defaultColumnDimensionSortDirection: r.columnSortDirection,
          rowDimensions: e == null ? void 0 : e.filter((o2) => h(o2)),
          defaultRowDimensionSortDirection: r.rowSortDirection,
          measures: n2,
          fontSize: r.fontSize ? `${r.fontSize}px` : void 0
        }
      )
    }
  );
}, Fe = {
  name: "PivotTable",
  label: "Pivot table",
  classNames: ["inside-card"],
  category: "Charts: essentials",
  inputs: [
    {
      name: "ds",
      type: "dataset",
      label: "Dataset to display",
      category: "Chart data"
    },
    {
      name: "metrics",
      type: "measure",
      label: "Metrics",
      array: true,
      config: {
        dataset: "ds"
      },
      category: "Chart data"
    },
    {
      name: "rowValues",
      type: "dimension",
      label: "Row Values",
      array: true,
      config: {
        dataset: "ds",
        hideGranularity: true
      },
      category: "Chart data"
    },
    {
      name: "columnValues",
      type: "dimension",
      label: "Column Values",
      array: true,
      config: {
        dataset: "ds",
        hideGranularity: true
      },
      category: "Chart data"
    },
    // Variables to configure
    {
      name: "granularity",
      type: "granularity",
      label: "Granularity (for dates)",
      defaultValue: "week",
      category: "Variables to configure"
    },
    // Table settings
    {
      name: "title",
      type: "string",
      label: "Title",
      description: "The title for the chart",
      category: "Chart settings"
    },
    {
      name: "description",
      type: "string",
      label: "Description",
      description: "The description for the chart",
      category: "Chart settings"
    },
    // {
    //     name: 'measureVisualizationFormat',
    //     type: MeasureVisualizationFormatType,
    //     label: 'Metrics visualization format',
    //     defaultValue: { value: MeasureVisualizationFormat.NUMERIC_VALUES_ONLY },
    //     category: 'Chart settings'
    // },
    {
      name: "nullValueCharacter",
      type: "string",
      label: "Null value character",
      description: "Character that should be displayed if value does not exist",
      defaultValue: "∅",
      category: "Chart settings"
    },
    {
      name: "isRowGroupDefaultExpanded",
      type: "boolean",
      label: "Row group expanded by default",
      defaultValue: false,
      category: "Chart settings"
    },
    {
      name: "columnSortingEnabled",
      type: "boolean",
      label: "Enable column sorting",
      defaultValue: true,
      category: "Chart settings"
    },
    {
      name: "rowSortDirection",
      type: o,
      defaultValue: { value: n.ASCENDING },
      label: "Default Row Sort Direction",
      category: "Chart settings"
    },
    {
      name: "columnSortDirection",
      type: o,
      defaultValue: { value: n.ASCENDING },
      label: "Default Column Sort Direction",
      category: "Chart settings"
    },
    // Table styling
    {
      name: "minColumnWidth",
      type: "number",
      label: "Minimum metric column width in pixels",
      defaultValue: 150,
      category: "Chart styling"
    },
    {
      name: "minRowDimensionColumnWidth",
      type: "number",
      label: "Minimum row value width in pixels",
      defaultValue: 200,
      category: "Chart styling"
    },
    {
      name: "fontSize",
      type: "number",
      label: "Font size in pixels",
      category: "Chart styling"
    }
  ]
}, ye = true, Ze = defineComponent(We, Fe, {
  props: (e, [t]) => {
    var p, i, h$1;
    const n$1 = Array.isArray(e.rowValues) ? e.rowValues : [e.rowValues], r = Array.isArray(e.columnValues) ? e.columnValues : [e.columnValues], a = (n$1 || []).filter(
      (s) => h(s)
    ), o2 = (r || []).filter(
      (s) => h(s)
    ), d = (p = e.metrics) == null ? void 0 : p.filter((s) => A$1(s)), y = a.filter(
      (s) => s && h(s)
    ), D = y.map((s) => {
      var u2;
      return {
        property: s,
        // @ts-expect-error - value is set by defineComponent, may need to adjust typing in that module
        direction: ((u2 = e.rowSortDirection) == null ? void 0 : u2.value) === n.ASCENDING ? "asc" : "desc"
      };
    }), l = a != null && a.length && ye ? a.reduce((s, u2, f, C) => {
      const g = [
        ...y.slice(0, f + 1),
        ...o2
      ];
      return {
        ...s,
        [`resultsDimension${f}`]: v({
          from: e.ds,
          select: [
            ...g.filter(
              (S) => S.nativeType !== "time"
            ),
            ...g.filter((S) => S.nativeType === "time").map((S) => ({
              dimension: S.name,
              granularity: e.granularity
            })),
            ...d
          ],
          orderBy: D.slice(0, f + 1),
          limit: 1e4
        })
      };
    }, {}) : {
      resultsDimension0: v({
        from: e.ds,
        select: [
          {
            ...[...y || [], ...o2].filter((s) => s.nativeType === "time").map((s) => ({
              dimension: s.name,
              granularity: e.granularity
            }))
          },
          ...d
        ],
        limit: 1e4
      })
    };
    return {
      ...e,
      rowValues: n$1,
      columnValues: o2,
      // @ts-expect-error - value is set by defineComponent, may need to adjust typing in that module
      rowSortDirection: (i = e.rowSortDirection) == null ? void 0 : i.value,
      // @ts-expect-error - value is set by defineComponent, may need to adjust typing in that module
      columnSortDirection: (h$1 = e.columnSortDirection) == null ? void 0 : h$1.value,
      // measureVisualizationFormat: inputs.measureVisualizationFormat?.value, // Enable this after Bars mode will be fixed
      measureVisualizationFormat: fe.NUMERIC_VALUES_ONLY,
      aggregateRowDimensions: ye,
      fontSize: e.fontSize,
      ...l
    };
  }
});

export { Ze as default, Fe as meta };
//# sourceMappingURL=PivotTable-DkM4SODC-DqH2C3oQ.js.map
//# sourceMappingURL=PivotTable-DkM4SODC-DqH2C3oQ.js.map
