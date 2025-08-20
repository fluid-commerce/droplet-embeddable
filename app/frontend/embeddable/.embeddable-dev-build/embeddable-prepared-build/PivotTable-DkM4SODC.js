import { h, A, v } from "./Spinner-BeNoTciJ-DsMN3-m0.js";
import { d as defineComponent, u as useTheme } from "./index.esm-CVE60fla.js";
import { n, o } from "./SortDirection.type.emb-Ddgerf5H-Cxcj1Pys.js";
import { j as j$1 } from "./jsx-runtime-CjQXaSqQ-CjMA1-fF.js";
import { P as Pg, N as Ng, X as Xg, W as Wg } from "./Container-mop-J7T8-BpqPaGKG.js";
import { r as reactExports } from "./embeddable-entry-point-DfzYO-OW.js";
import { u } from "./cn-MtANU1gm-CGxwOT4x.js";
import { c as ce } from "./format-TjzP8gQX-Cs7Vwno2.js";
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
    ), d = (p = e.metrics) == null ? void 0 : p.filter((s) => A(s)), y = a.filter(
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
export {
  Ze as default,
  Fe as meta
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGl2b3RUYWJsZS1Ea000U09EQy5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL2NocmlzdG9waGVyY2FybHNvbi9mbHVpZC9kcm9wbGV0LWVtYmVkZGFibGUvYXBwL2Zyb250ZW5kL2VtYmVkZGFibGUvbm9kZV9tb2R1bGVzL0BlbWJlZGRhYmxlLmNvbS92YW5pbGxhLWNvbXBvbmVudHMvZGlzdC9QaXZvdFRhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBDZSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBsZSA9IChlKSA9PiB7XG4gIHRocm93IFR5cGVFcnJvcihlKTtcbn07XG52YXIgTmUgPSAoZSwgdCwgbikgPT4gdCBpbiBlID8gQ2UoZSwgdCwgeyBlbnVtZXJhYmxlOiAhMCwgY29uZmlndXJhYmxlOiAhMCwgd3JpdGFibGU6ICEwLCB2YWx1ZTogbiB9KSA6IGVbdF0gPSBuO1xudmFyIFQgPSAoZSwgdCwgbikgPT4gTmUoZSwgdHlwZW9mIHQgIT0gXCJzeW1ib2xcIiA/IHQgKyBcIlwiIDogdCwgbiksIGllID0gKGUsIHQsIG4pID0+IHQuaGFzKGUpIHx8IGxlKFwiQ2Fubm90IFwiICsgbik7XG52YXIgYyA9IChlLCB0LCBuKSA9PiAoaWUoZSwgdCwgXCJyZWFkIGZyb20gcHJpdmF0ZSBmaWVsZFwiKSwgbiA/IG4uY2FsbChlKSA6IHQuZ2V0KGUpKSwgUiA9IChlLCB0LCBuKSA9PiB0LmhhcyhlKSA/IGxlKFwiQ2Fubm90IGFkZCB0aGUgc2FtZSBwcml2YXRlIG1lbWJlciBtb3JlIHRoYW4gb25jZVwiKSA6IHQgaW5zdGFuY2VvZiBXZWFrU2V0ID8gdC5hZGQoZSkgOiB0LnNldChlLCBuKSwgeCA9IChlLCB0LCBuLCByKSA9PiAoaWUoZSwgdCwgXCJ3cml0ZSB0byBwcml2YXRlIGZpZWxkXCIpLCByID8gci5jYWxsKGUsIG4pIDogdC5zZXQoZSwgbiksIG4pO1xuaW1wb3J0IHsgaSBhcyB0ZSwgYSBhcyB4ZSwgbCBhcyBvZSB9IGZyb20gXCIuL2luZGV4LmVzbS1KQWhfSzFWRy5qc1wiO1xuaW1wb3J0IHsgdXNlVGhlbWUgYXMgc2UsIGRlZmluZUNvbXBvbmVudCBhcyBTZSB9IGZyb20gXCJAZW1iZWRkYWJsZS5jb20vcmVhY3RcIjtcbmltcG9ydCB7IFMgYXMgaywgYSBhcyBjZSB9IGZyb20gXCIuL1NvcnREaXJlY3Rpb24udHlwZS5lbWItRGRnZXJmNUguanNcIjtcbmltcG9ydCB7IGogYXMgbSB9IGZyb20gXCIuL2pzeC1ydW50aW1lLUNqUVhhU3FRLmpzXCI7XG5pbXBvcnQgeyBTIGFzIHdlLCBlIGFzIEFlLCBhIGFzIGtlLCBDIGFzIHZlIH0gZnJvbSBcIi4vQ29udGFpbmVyLW1vcC1KN1Q4LmpzXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSBhcyBnZSwgdXNlTWVtbyBhcyBPIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjIGFzIFYgfSBmcm9tIFwiLi9jbi1NdEFOVTFnbS5qc1wiO1xuaW1wb3J0IHsgZiBhcyBwZSB9IGZyb20gXCIuL2Zvcm1hdC1UanpQOGdRWC5qc1wiO1xudmFyIGZlID0gLyogQF9fUFVSRV9fICovICgoZSkgPT4gKGUuTlVNRVJJQ19WQUxVRVNfT05MWSA9IFwiTnVtZXJpYyBWYWx1ZSBPbmx5XCIsIGUuVkFMVUVfQkFSUyA9IFwiVmFsdWUgQmFyc1wiLCBlLkhFQVRNQVAgPSBcIkhlYXQgTWFwXCIsIGUpKShmZSB8fCB7fSksIE4gPSAvKiBAX19QVVJFX18gKi8gKChlKSA9PiAoZS5ESU1FTlNJT04gPSBcImRpbWVuc2lvblwiLCBlLk1FQVNVUkUgPSBcIm1lYXN1cmVcIiwgZS5ST1dfSEVBREVSX0dST1VQID0gXCJyb3ctaGVhZGVyLWdyb3VwXCIsIGUuUk9XX0hFQURFUiA9IFwicm93LWhlYWRlclwiLCBlKSkoTiB8fCB7fSk7XG5mdW5jdGlvbiBiZSh7XG4gIGNvbHVtbnM6IGUsXG4gIGZvbnRTaXplOiB0ID0gXCIxNnB4XCIsXG4gIG1pbkNvbHVtbldpZHRoOiBuLFxuICBtaW5IZWFkZXJDb2x1bW5XaWR0aDogcixcbiAgZW5hYmxlU29ydGluZzogYSA9ICEwLFxuICBzb3J0Q3JpdGVyaWE6IG8sXG4gIG9uU29ydGluZ0NoYW5nZTogZFxufSkge1xuICBjb25zdCB5ID0gc2UoKTtcbiAgdCA9IHkuZm9udC5zaXplLCB5LmZvbnQuY29sb3JOb3JtYWw7XG4gIGNvbnN0IEQgPSAobCwgcCkgPT4ge1xuICAgIHZhciBTLCBNLCBXLCBGLCBlZSwgJDtcbiAgICBjb25zdCBpID0gbC50eXBlID09PSBOLlJPV19IRUFERVIgfHwgbC50eXBlID09PSBOLlJPV19IRUFERVJfR1JPVVAsIGggPSBsLnR5cGUgIT09IE4uRElNRU5TSU9OIHx8ICgoUyA9IGwuY2hpbGRyZW4pID09IG51bGwgPyB2b2lkIDAgOiBTLmZpbHRlcigoYikgPT4gYi50eXBlID09PSBOLk1FQVNVUkUpLmxlbmd0aCkgPT09IDEsIHMgPSBsLmdldExlYWZDb2x1bW5zKCksIHUgPSBpIHx8IHMuc29tZShcbiAgICAgIChiKSA9PiBiLnR5cGUgPT09IE4uUk9XX0hFQURFUiB8fCBiLnR5cGUgPT09IE4uUk9XX0hFQURFUl9HUk9VUFxuICAgICksIGYgPSBsLmRlcHRoID09PSAwIHx8IGwudHlwZSAhPT0gTi5NRUFTVVJFIHx8ICgoRiA9IChXID0gKE0gPSBsLnBhcmVudCkgPT0gbnVsbCA/IHZvaWQgMCA6IE0uY2hpbGRyZW4pID09IG51bGwgPyB2b2lkIDAgOiBXLmF0KC0xKSkgPT0gbnVsbCA/IHZvaWQgMCA6IEYua2V5KSA9PT0gbC5rZXksIEMgPSBhICYmIGwudHlwZSAhPT0gTi5ESU1FTlNJT04sIGcgPSAoZWUgPSBvID09IG51bGwgPyB2b2lkIDAgOiBvLmZpbmQoXG4gICAgICAoYikgPT4gYi5rZXkgPT09IGwua2V5XG4gICAgKSkgPT0gbnVsbCA/IHZvaWQgMCA6IGVlLmRpcmVjdGlvbjtcbiAgICByZXR1cm4gLyogQF9fUFVSRV9fICovIG0uanN4KFxuICAgICAgXCJ0aFwiLFxuICAgICAge1xuICAgICAgICBjb2xTcGFuOiBzLmxlbmd0aCxcbiAgICAgICAgY2xhc3NOYW1lOiBWKFwicC0yIGJvcmRlci15IGZpcnN0OmJvcmRlci1sXCIsIHtcbiAgICAgICAgICBcImJvcmRlci1iLTBcIjogKCQgPSBsLmNoaWxkcmVuKSA9PSBudWxsID8gdm9pZCAwIDogJC5sZW5ndGgsXG4gICAgICAgICAgXCJib3JkZXItclwiOiBmLFxuICAgICAgICAgIFwibGc6c3RpY2t5IGxnOmxlZnQtMCBsZzp6LTEwIGJnLVtjb2xvcjotLWVtYmVkZGFibGUtY29udHJvbHMtYmFja2dyb3VuZHMtY29sb3JzLXNvZnRdXCI6IHUsXG4gICAgICAgICAgXCJjdXJzb3ItcG9pbnRlclwiOiBDXG4gICAgICAgIH0pLFxuICAgICAgICBzdHlsZTogbiA/IHtcbiAgICAgICAgICBtaW5XaWR0aDogKGkgPyByIDogbikgPz8gXCJhdXRvXCJcbiAgICAgICAgfSA6IHt9LFxuICAgICAgICAuLi5DID8ge1xuICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgIGQgPT0gbnVsbCB8fCBkKFxuICAgICAgICAgICAgICBsLmtleSxcbiAgICAgICAgICAgICAgZyA9PT0gay5ERVNDRU5ESU5HID8gay5BU0NFTkRJTkcgOiBrLkRFU0NFTkRJTkdcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9IDogbnVsbCxcbiAgICAgICAgY2hpbGRyZW46IC8qIEBfX1BVUkVfXyAqLyBtLmpzeHMoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6IFYoXCJ0ZXh0LWNlbnRlclwiLCB7XG4gICAgICAgICAgICAgIFwidGV4dC1sZWZ0XCI6IGgsXG4gICAgICAgICAgICAgIFwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIGdhcC0yXCI6IENcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgLyogQF9fUFVSRV9fICovIG0uanN4KFwic3BhblwiLCB7IGNsYXNzTmFtZTogXCJ0ZXh0LVtjb2xvcjotLWVtYmVkZGFibGUtZm9udC1jb2xvck5vcm1hbH1dXCIsIHN0eWxlOiB7IGZvbnRTaXplOiB0IH0sIGNoaWxkcmVuOiBsLmxhYmVsIH0pLFxuICAgICAgICAgICAgICBDID8gLyogQF9fUFVSRV9fICovIG0uanN4KFxuICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogVihcInctM1wiLCB7XG4gICAgICAgICAgICAgICAgICAgIGludmlzaWJsZTogIWdcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IGcgPT09IGsuQVNDRU5ESU5HID8gLyogQF9fUFVSRV9fICovIG0uanN4KHdlLCB7IGZpbGw6IFwiY3VycmVudGNvbG9yXCIgfSkgOiAvKiBAX19QVVJFX18gKi8gbS5qc3goQWUsIHsgZmlsbDogXCJjdXJyZW50Y29sb3JcIiB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgKSA6IG51bGxcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgIH0sXG4gICAgICBgJHtwfS0ke2wua2V5fWBcbiAgICApO1xuICB9O1xuICByZXR1cm4gZS5sZW5ndGggPyAvKiBAX19QVVJFX18gKi8gbS5qc3hzKG0uRnJhZ21lbnQsIHsgY2hpbGRyZW46IFtcbiAgICAvKiBAX19QVVJFX18gKi8gbS5qc3goXCJ0clwiLCB7IGNoaWxkcmVuOiBlLm1hcChEKSB9KSxcbiAgICBlWzBdLmNoaWxkcmVuID8gLyogQF9fUFVSRV9fICovIG0uanN4KFxuICAgICAgYmUsXG4gICAgICB7XG4gICAgICAgIGNvbHVtbnM6IGUubWFwKChsKSA9PiAobCA9PSBudWxsID8gdm9pZCAwIDogbC5jaGlsZHJlbikgfHwgW10pLmZsYXQoKSxcbiAgICAgICAgb25Tb3J0aW5nQ2hhbmdlOiBkLFxuICAgICAgICBmb250U2l6ZTogdCxcbiAgICAgICAgbWluQ29sdW1uV2lkdGg6IG4sXG4gICAgICAgIG1pbkhlYWRlckNvbHVtbldpZHRoOiByLFxuICAgICAgICBlbmFibGVTb3J0aW5nOiBhLFxuICAgICAgICBzb3J0Q3JpdGVyaWE6IG9cbiAgICAgIH1cbiAgICApIDogbnVsbFxuICBdIH0pIDogbnVsbDtcbn1cbmZ1bmN0aW9uIFRlKHsgaXNIZWFkZXI6IGUsIGNsYXNzTmFtZTogdCwgY2hpbGRyZW46IG4gfSkge1xuICBjb25zdCByID0gZSA/IFwidGhcIiA6IFwidGRcIjtcbiAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBtLmpzeChcbiAgICByLFxuICAgIHtcbiAgICAgIGNsYXNzTmFtZTogVihcInB4LTIgcHktMS41IGZvbnQtbm9ybWFsIGZpcnN0OmJvcmRlci1sIGJnLWluaGVyaXRcIiwge1xuICAgICAgICBcImxnOnotMTAgbGc6c3RpY2t5IGxnOmxlZnQtMCB0ZXh0LWxlZnRcIjogZVxuICAgICAgfSwgdCksXG4gICAgICBjaGlsZHJlbjogblxuICAgIH1cbiAgKTtcbn1cbmNvbnN0IERlID0gKHsgY29sdW1uczogZSwgcm93OiB0LCByZW5kZXJDZWxsOiBuLCBsZXZlbDogciA9IDAsIGlzUm93R3JvdXBEZWZhdWx0RXhwYW5kZWQ6IGEgfSkgPT4ge1xuICB2YXIgcDtcbiAgY29uc3QgW28sIGRdID0gZ2UoYSA/PyAhMCksIHkgPSAoKSA9PiB7XG4gICAgZCgoaSkgPT4gIWkpO1xuICB9LCBEID0gKGksIGgpID0+IHtcbiAgICB2YXIgdSwgZiwgQywgZztcbiAgICBjb25zdCBzID0gaS50eXBlID09PSBOLlJPV19IRUFERVI7XG4gICAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBtLmpzeChcbiAgICAgIFRlLFxuICAgICAge1xuICAgICAgICBpc0hlYWRlcjogcyxcbiAgICAgICAgY2xhc3NOYW1lOiBWKFwiYm9yZGVyLWJcIiwge1xuICAgICAgICAgIFwiYm9yZGVyLXJcIjogIWkucGFyZW50IHx8ICgoQyA9IChmID0gKHUgPSBpLnBhcmVudCkgPT0gbnVsbCA/IHZvaWQgMCA6IHUuY2hpbGRyZW4pID09IG51bGwgPyB2b2lkIDAgOiBmLmF0KC0xKSkgPT0gbnVsbCA/IHZvaWQgMCA6IEMua2V5KSA9PT0gaS5rZXkgfHwgc1xuICAgICAgICB9KSxcbiAgICAgICAgY2hpbGRyZW46IC8qIEBfX1BVUkVfXyAqLyBtLmpzeHMoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6IFwiZmxleCBpdGVtcy1jZW50ZXJcIixcbiAgICAgICAgICAgIHN0eWxlOiB7IG1hcmdpbkxlZnQ6IHMgPyBgJHtyICogMzB9cHhgIDogMCB9LFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgKGcgPSB0LmNoaWxkcmVuKSAhPSBudWxsICYmIGcubGVuZ3RoICYmIHMgPyAvKiBAX19QVVJFX18gKi8gbS5qc3goXG4gICAgICAgICAgICAgICAga2UsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBWKFwidy00IGgtNCBtci0xIGN1cnNvci1wb2ludGVyIHRyYW5zZm9ybVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIFwiLXJvdGF0ZS05MFwiOiAhb1xuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrOiB5XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICApIDogbnVsbCxcbiAgICAgICAgICAgICAgKG4gPT0gbnVsbCA/IHZvaWQgMCA6IG4oaCwgaSkpIHx8IGhbaS5rZXldXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICApXG4gICAgICB9LFxuICAgICAgYCR7dC5pZH0tJHtpLmtleX1gXG4gICAgKTtcbiAgfSwgbCA9IChpLCBoKSA9PiBpLm1hcChcbiAgICAocykgPT4ge1xuICAgICAgdmFyIHU7XG4gICAgICByZXR1cm4gcy50eXBlID09PSBOLlJPV19IRUFERVJfR1JPVVAgJiYgKCh1ID0gcy5ncm91cCkgIT0gbnVsbCAmJiB1Lmxlbmd0aCkgPyBEKHMuZ3JvdXBbcl0sIGgpIDogRChzLCBoKTtcbiAgICB9XG4gICk7XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8gbS5qc3hzKG0uRnJhZ21lbnQsIHsgY2hpbGRyZW46IFtcbiAgICAvKiBAX19QVVJFX18gKi8gbS5qc3goXG4gICAgICBcInRyXCIsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogYFxuICAgICAgICBiZy1bY29sb3I6LS1lbWJlZGRhYmxlLWNvbnRyb2xzLWJhY2tncm91bmRzLWNvbG9ycy1zb2Z0XVxuICAgICAgICBob3ZlcjpiZy1bY29sb3I6LS1lbWJlZGRhYmxlLWNvbnRyb2xzLWJhY2tncm91bmRzLWNvbG9ycy1ub3JtYWxdYCxcbiAgICAgICAgY2hpbGRyZW46IGwoZSwgdC5kYXRhKVxuICAgICAgfVxuICAgICksXG4gICAgbyAmJiAoKHAgPSB0LmNoaWxkcmVuKSA9PSBudWxsID8gdm9pZCAwIDogcC5tYXAoKGkpID0+IC8qIEBfX1BVUkVfXyAqLyBtLmpzeChcbiAgICAgIERlLFxuICAgICAge1xuICAgICAgICBjb2x1bW5zOiBlLFxuICAgICAgICByb3c6IGksXG4gICAgICAgIHJlbmRlckNlbGw6IG4sXG4gICAgICAgIGxldmVsOiByICsgMVxuICAgICAgfSxcbiAgICAgIGkuaWRcbiAgICApKSlcbiAgXSB9KTtcbn0sIEllID0gXCItLT5cIiwgUmUgPSAoZSkgPT4gZSA9PSBudWxsID8gXCJcIiA6IGUudG9TdHJpbmcoKS5yZXBsYWNlQWxsKFwiIFwiLCBcIl9cIikudG9Mb3dlckNhc2UoKSwgYWUgPSAoZSkgPT4gW1xuICAuLi5lLm1hcCgodCkgPT4gUmUodCkpXG5dLmpvaW4oSWUpLCBFID0gW107XG5mb3IgKGxldCBlID0gMDsgZSA8IDI1NjsgKytlKVxuICBFLnB1c2goKGUgKyAyNTYpLnRvU3RyaW5nKDE2KS5zbGljZSgxKSk7XG5mdW5jdGlvbiBqZShlLCB0ID0gMCkge1xuICByZXR1cm4gKEVbZVt0ICsgMF1dICsgRVtlW3QgKyAxXV0gKyBFW2VbdCArIDJdXSArIEVbZVt0ICsgM11dICsgXCItXCIgKyBFW2VbdCArIDRdXSArIEVbZVt0ICsgNV1dICsgXCItXCIgKyBFW2VbdCArIDZdXSArIEVbZVt0ICsgN11dICsgXCItXCIgKyBFW2VbdCArIDhdXSArIEVbZVt0ICsgOV1dICsgXCItXCIgKyBFW2VbdCArIDEwXV0gKyBFW2VbdCArIDExXV0gKyBFW2VbdCArIDEyXV0gKyBFW2VbdCArIDEzXV0gKyBFW2VbdCArIDE0XV0gKyBFW2VbdCArIDE1XV0pLnRvTG93ZXJDYXNlKCk7XG59XG5sZXQgbmU7XG5jb25zdCBfZSA9IG5ldyBVaW50OEFycmF5KDE2KTtcbmZ1bmN0aW9uIFVlKCkge1xuICBpZiAoIW5lKSB7XG4gICAgaWYgKHR5cGVvZiBjcnlwdG8gPiBcInVcIiB8fCAhY3J5cHRvLmdldFJhbmRvbVZhbHVlcylcbiAgICAgIHRocm93IG5ldyBFcnJvcihcImNyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkXCIpO1xuICAgIG5lID0gY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0byk7XG4gIH1cbiAgcmV0dXJuIG5lKF9lKTtcbn1cbmNvbnN0IE9lID0gdHlwZW9mIGNyeXB0byA8IFwidVwiICYmIGNyeXB0by5yYW5kb21VVUlEICYmIGNyeXB0by5yYW5kb21VVUlELmJpbmQoY3J5cHRvKSwgdWUgPSB7IHJhbmRvbVVVSUQ6IE9lIH07XG5mdW5jdGlvbiBNZShlLCB0LCBuKSB7XG4gIHZhciBhO1xuICBpZiAodWUucmFuZG9tVVVJRCAmJiAhZSlcbiAgICByZXR1cm4gdWUucmFuZG9tVVVJRCgpO1xuICBlID0gZSB8fCB7fTtcbiAgY29uc3QgciA9IGUucmFuZG9tID8/ICgoYSA9IGUucm5nKSA9PSBudWxsID8gdm9pZCAwIDogYS5jYWxsKGUpKSA/PyBVZSgpO1xuICBpZiAoci5sZW5ndGggPCAxNilcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJSYW5kb20gYnl0ZXMgbGVuZ3RoIG11c3QgYmUgPj0gMTZcIik7XG4gIHJldHVybiByWzZdID0gcls2XSAmIDE1IHwgNjQsIHJbOF0gPSByWzhdICYgNjMgfCAxMjgsIGplKHIpO1xufVxudmFyIEssIEcsIEwsIFk7XG5jbGFzcyBkZSB7XG4gIGNvbnN0cnVjdG9yKHQsIG4gPSBbXSwgciA9IDApIHtcbiAgICBSKHRoaXMsIEspO1xuICAgIFIodGhpcywgRyk7XG4gICAgUih0aGlzLCBMKTtcbiAgICBSKHRoaXMsIFkpO1xuICAgIHgodGhpcywgSywgTWUoKSksIHgodGhpcywgRywgdCksIHgodGhpcywgTCwgbiksIHgodGhpcywgWSwgcik7XG4gIH1cbiAgZ2V0IGlkKCkge1xuICAgIHJldHVybiBjKHRoaXMsIEspO1xuICB9XG4gIGdldCBkYXRhKCkge1xuICAgIHJldHVybiBjKHRoaXMsIEcpO1xuICB9XG4gIHNldCBkYXRhKHQpIHtcbiAgICB4KHRoaXMsIEcsIHQpO1xuICB9XG4gIGdldCBjaGlsZHJlbigpIHtcbiAgICByZXR1cm4gYyh0aGlzLCBMKTtcbiAgfVxuICBzZXQgY2hpbGRyZW4odCkge1xuICAgIHgodGhpcywgTCwgdCk7XG4gIH1cbiAgZ2V0IGRlcHRoKCkge1xuICAgIHJldHVybiBjKHRoaXMsIFkpO1xuICB9XG4gIGdldExlYWZSb3dzKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuLmxlbmd0aCA/IHRoaXMuY2hpbGRyZW4ucmVkdWNlKCh0LCBuKSA9PiBbLi4udCwgLi4ubi5nZXRMZWFmUm93cygpXSwgW10pIDogW3RoaXNdO1xuICB9XG59XG5LID0gbmV3IFdlYWtNYXAoKSwgRyA9IG5ldyBXZWFrTWFwKCksIEwgPSBuZXcgV2Vha01hcCgpLCBZID0gbmV3IFdlYWtNYXAoKTtcbnZhciBILCBxLCBJLCBqLCBKLCBRLCBfLCBVLCBQLCByZSwgWCwgWjtcbmNsYXNzIFZlIHtcbiAgY29uc3RydWN0b3IodCwgbiwgciA9IFtdLCBhID0gW10sIG8gPSAhMCkge1xuICAgIFIodGhpcywgSCk7XG4gICAgUih0aGlzLCBxKTtcbiAgICBSKHRoaXMsIEkpO1xuICAgIFIodGhpcywgaik7XG4gICAgUih0aGlzLCBKKTtcbiAgICBSKHRoaXMsIFEpO1xuICAgIFIodGhpcywgXyk7XG4gICAgUih0aGlzLCBVLCB7fSk7XG4gICAgUih0aGlzLCBQLCAodCwgbikgPT4gbiA9PSBudWxsID8gdm9pZCAwIDogbi5tYXAoKHIpID0+IChjKHRoaXMsIFUpW3IubmFtZV0gfHwgKGModGhpcywgVSlbci5uYW1lXSA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCkpLCBjKHRoaXMsIFUpW3IubmFtZV0uYWRkKHRbci5uYW1lXSksIHRbci5uYW1lXSkpKTtcbiAgICBSKHRoaXMsIHJlLCAodCkgPT4gYyh0aGlzLCBxKS5yZWR1Y2UoKG4sIHIpID0+ICh7XG4gICAgICAuLi5uLFxuICAgICAgW2FlKFsuLi5jKHRoaXMsIFApLmNhbGwodGhpcywgdCwgYyh0aGlzLCBqKSksIHIubmFtZV0pXTogdFtyLm5hbWVdXG4gICAgfSksIHt9KSk7XG4gICAgUih0aGlzLCBYLCAodCwgbiwgcikgPT4ge1xuICAgICAgaWYgKCFuLmxlbmd0aCkge1xuICAgICAgICB0LmRhdGEgPSB7IC4uLnQuZGF0YSwgLi4uciB9O1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBhID0gUmUoblswXSk7XG4gICAgICB0LmNoaWxkcmVuLmhhcyhhKSB8fCB0LmNoaWxkcmVuLnNldChhLCB7XG4gICAgICAgIGRhdGE6IHt9LFxuICAgICAgICBjaGlsZHJlbjogLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKVxuICAgICAgfSksIGModGhpcywgWCkuY2FsbCh0aGlzLCB0LmNoaWxkcmVuLmdldChhKSwgbi5zbGljZSgxKSwgcik7XG4gICAgfSk7XG4gICAgUih0aGlzLCBaLCAodCwgbiA9IDApID0+IHtcbiAgICAgIGNvbnN0IHIgPSBbXTtcbiAgICAgIGlmIChjKHRoaXMsIEkpLmxlbmd0aClcbiAgICAgICAgZm9yIChjb25zdCBbLCBhXSBvZiB0LmNoaWxkcmVuKVxuICAgICAgICAgIHIucHVzaChuZXcgZGUoXG4gICAgICAgICAgICBhLmRhdGEsXG4gICAgICAgICAgICBjKHRoaXMsIFopLmNhbGwodGhpcywgYSwgbiArIDEpLFxuICAgICAgICAgICAgblxuICAgICAgICAgICkpO1xuICAgICAgZWxzZVxuICAgICAgICByLnB1c2gobmV3IGRlKHQuZGF0YSkpO1xuICAgICAgcmV0dXJuIHI7XG4gICAgfSk7XG4gICAgeCh0aGlzLCBILCB0KSwgeCh0aGlzLCBxLCBuKSwgeCh0aGlzLCBJLCByIHx8IFtdKSwgeCh0aGlzLCBqLCBhKSwgeCh0aGlzLCBRLCBvKSwgeCh0aGlzLCBKLCBjKHRoaXMsIEgpLnJlZHVjZSgoZCwgeSwgRCkgPT4ge1xuICAgICAgY29uc3QgbCA9IGModGhpcywgUSkgPyBjKHRoaXMsIEkpLnNsaWNlKDAsIEQgKyAxKSA6IGModGhpcywgSSk7XG4gICAgICByZXR1cm4geS5mb3JFYWNoKChwKSA9PiB7XG4gICAgICAgIGNvbnN0IGkgPSBjKHRoaXMsIFApLmNhbGwodGhpcywgcCwgbCksIGggPSB7XG4gICAgICAgICAgLi4uYyh0aGlzLCByZSkuY2FsbCh0aGlzLCBwKSxcbiAgICAgICAgICAuLi5sLnJlZHVjZSgocywgdSkgPT4gKHtcbiAgICAgICAgICAgIC4uLnMsXG4gICAgICAgICAgICBbdS5uYW1lXTogcFt1Lm5hbWVdXG4gICAgICAgICAgfSksIHt9KVxuICAgICAgICB9O1xuICAgICAgICBsLmxlbmd0aCAmJiBjKHRoaXMsIEkpLmxlbmd0aCA+IDEgJiYgKGhbXCJfX2dyb3VwLmtleVwiXSA9IHBbbC5hdCgtMSkubmFtZV0pLCBjKHRoaXMsIFgpLmNhbGwodGhpcywgZCwgaSwgaCk7XG4gICAgICB9KSwgZDtcbiAgICB9LCB7IGRhdGE6IHt9LCBjaGlsZHJlbjogLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSB9KSksICFjKHRoaXMsIEkpLmxlbmd0aCAmJiBjKHRoaXMsIGopLmxlbmd0aCAmJiBjKHRoaXMsIEgpLmZvckVhY2goKGQpID0+IHtcbiAgICAgIGQuZm9yRWFjaCgoeSkgPT4gYyh0aGlzLCBQKS5jYWxsKHRoaXMsIHksIGModGhpcywgaikpKTtcbiAgICB9KSwgeCh0aGlzLCBfLCBudWxsKTtcbiAgfVxuICBnZXQgcm93cygpIHtcbiAgICByZXR1cm4gYyh0aGlzLCBfKSB8fCB4KHRoaXMsIF8sIGModGhpcywgWikuY2FsbCh0aGlzLCBjKHRoaXMsIEopKSksIGModGhpcywgXyk7XG4gIH1cbiAgZ2V0Q29sdW1uRGltZW5zaW9uVmFsdWVzKHQpIHtcbiAgICByZXR1cm4gWy4uLmModGhpcywgVSlbdF1dO1xuICB9XG59XG5IID0gbmV3IFdlYWtNYXAoKSwgcSA9IG5ldyBXZWFrTWFwKCksIEkgPSBuZXcgV2Vha01hcCgpLCBqID0gbmV3IFdlYWtNYXAoKSwgSiA9IG5ldyBXZWFrTWFwKCksIFEgPSBuZXcgV2Vha01hcCgpLCBfID0gbmV3IFdlYWtNYXAoKSwgVSA9IG5ldyBXZWFrTWFwKCksIFAgPSBuZXcgV2Vha01hcCgpLCByZSA9IG5ldyBXZWFrTWFwKCksIFggPSBuZXcgV2Vha01hcCgpLCBaID0gbmV3IFdlYWtNYXAoKTtcbmNsYXNzIHoge1xuICAvKipcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7Q29sdW1uQ29uZmlnfSBjb25maWdcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZy5sYWJlbCAtIENvbHVtbiBsYWJlbCB0aGF0IHdpbGwgYmUgZGlzcGxheWVkIGluIHRoZSB0YWJsZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnLmtleSAtIENvbHVtbiBrZXkgdGhhdCBzZXJ2ZXMgYXMgYW4gYWNjZXNzb3IgZm9yIHRoZSB2YWx1ZSBhbmQgc2hvdWxkIGJlIHVuaXF1ZSBhbW9uZyBhbGwgY29sdW1uc1xuICAgKiBAcGFyYW0ge0NvbHVtblR5cGV9IGNvbmZpZy50eXBlIC0gQ29sdW1uIHR5cGVcbiAgICogQHBhcmFtIHtOYXRpdmVEYXRhVHlwZX0gY29uZmlnLmRhdGFUeXBlIC0gQ29sdW1uIGRhdGEgdHlwZSB0aGF0IHdpbGwgYmUgdXNlZCBmb3IgZm9ybWF0dGluZyBvZiB0aGUgdmFsdWVcbiAgICogQHBhcmFtIHtudW1iZXJ9IGNvbmZpZy5kZXB0aCAtIENvbHVtbiBkZXB0aCBpbiB0aGUgY29sdW1uIGhpZXJhcmNoeVxuICAgKiBAcGFyYW0ge0NvbHVtbltdfSBjb25maWcuY2hpbGRyZW4gLSBDb2x1bW4gY2hpbGRyZW4gdGhhdCBhcmUgbmVzdGVkIHVuZGVyIHRoaXMgY29sdW1uXG4gICAqIEBwYXJhbSB7Q29sdW1ufSBjb25maWcucGFyZW50IC0gUmVmZXJlbmNlIHRvIHBhcmVudCBjb2x1bW4gdGhhdCB0aGlzIGNvbHVtbiBpcyBuZXN0ZWQgdW5kZXJcbiAgICovXG4gIGNvbnN0cnVjdG9yKHtcbiAgICBsYWJlbDogdCxcbiAgICBrZXk6IG4sXG4gICAgdHlwZTogcixcbiAgICBkYXRhVHlwZTogYSxcbiAgICBkZXB0aDogbyA9IDAsXG4gICAgY2hpbGRyZW46IGQsXG4gICAgcGFyZW50OiB5LFxuICAgIGdyb3VwOiBEXG4gIH0pIHtcbiAgICAvKipcbiAgICAgKiBDb2x1bW4gbGFiZWwgdGhhdCB3aWxsIGJlIGRpc3BsYXllZCBpbiB0aGUgdGFibGVcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEByZXF1aXJlZFxuICAgICAqL1xuICAgIFQodGhpcywgXCJsYWJlbFwiKTtcbiAgICAvKipcbiAgICAgKiBDb2x1bW4ga2V5IHRoYXQgc2VydmVzIGFzIGFuIGFjY2Vzc29yIGZvciB0aGUgdmFsdWUgYW5kIHNob3VsZCBiZSB1bmlxdWUgYW1vbmcgYWxsIGNvbHVtbnNcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEByZXF1aXJlZFxuICAgICAqL1xuICAgIFQodGhpcywgXCJrZXlcIik7XG4gICAgLyoqXG4gICAgICogQ29sdW1uIHR5cGVcbiAgICAgKiBAdHlwZSB7Q29sdW1uVHlwZX1cbiAgICAgKiBAcmVxdWlyZWRcbiAgICAgKi9cbiAgICBUKHRoaXMsIFwidHlwZVwiKTtcbiAgICAvKipcbiAgICAgKiBDb2x1bW4gZGF0YSB0eXBlIHRoYXQgd2lsbCBiZSB1c2VkIGZvciBmb3JtYXR0aW5nIG9mIHRoZSB2YWx1ZVxuICAgICAqIEB0eXBlIHtOYXRpdmVEYXRhVHlwZSB8IG51bGx9XG4gICAgICogQHJlcXVpcmVkXG4gICAgICovXG4gICAgVCh0aGlzLCBcImRhdGFUeXBlXCIpO1xuICAgIC8qKlxuICAgICAqIENvbHVtbiBkZXB0aCBpbiB0aGUgY29sdW1uIGhpZXJhcmNoeVxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQG9wdGlvbmFsXG4gICAgICovXG4gICAgVCh0aGlzLCBcImRlcHRoXCIpO1xuICAgIC8qKlxuICAgICAqIENvbHVtbiBjaGlsZHJlbiB0aGF0IGFyZSBuZXN0ZWQgdW5kZXIgdGhpcyBjb2x1bW5cbiAgICAgKiBAdHlwZSB7Q29sdW1uW119XG4gICAgICogQG9wdGlvbmFsXG4gICAgICovXG4gICAgVCh0aGlzLCBcImNoaWxkcmVuXCIpO1xuICAgIC8qKlxuICAgICAqIFJlZmVyZW5jZSB0byBwYXJlbnQgY29sdW1uIHRoYXQgdGhpcyBjb2x1bW4gaXMgbmVzdGVkIHVuZGVyXG4gICAgICogQHR5cGUge0NvbHVtbn1cbiAgICAgKiBAb3B0aW9uYWxcbiAgICAgKi9cbiAgICBUKHRoaXMsIFwicGFyZW50XCIpO1xuICAgIC8qKlxuICAgICAqIFJlZmVyZW5jZSB0byBjb2x1bW5zIHRoYXQgY3JlYXRlIHNpbmdsZSBncm91cGVkIGNvbHVtbi5cbiAgICAgKiBUaGlzIGlzIHVzZWQgd2hlbiB0aGVyZSBhcmUgbXVsdGlwbGUgcm93IGRpbWVuc2lvbnMgYW5kIHZhbHVlcyBmcm9tIGFsbCBvZiB0aGVtIHNob3VsZCBiZSBkaXNwbGF5ZWQgaW4gYSBzaW5nbGUgY29sdW1uLlxuICAgICAqIEB0eXBlIHtDb2x1bW5bXX1cbiAgICAgKiBAb3B0aW9uYWxcbiAgICAgKi9cbiAgICBUKHRoaXMsIFwiZ3JvdXBcIik7XG4gICAgdGhpcy5sYWJlbCA9IHQsIHRoaXMua2V5ID0gbiwgdGhpcy50eXBlID0gciwgdGhpcy5kYXRhVHlwZSA9IGEgPz8gbnVsbCwgdGhpcy5kZXB0aCA9IG8sIHRoaXMucGFyZW50ID0geSA/PyBudWxsLCB0aGlzLmNoaWxkcmVuID0gZCA/PyBudWxsLCB0aGlzLmdyb3VwID0gRCA/PyBudWxsO1xuICB9XG4gIC8qKlxuICAgKiBBZGQgY2hpbGRyZW4gY29sdW1ucyB0byB0aGlzIGNvbHVtblxuICAgKiBAcGFyYW0ge0NvbHVtbltdfSBjaGlsZENvbHVtbnNcbiAgICogQHJldHVybnMge0NvbHVtbltdfSBhbGwgY2hpbGRyZW4gY29sdW1uc1xuICAgKiBAcHVibGljXG4gICAqL1xuICBhZGRDaGlsZHJlbih0KSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4gPSBbXG4gICAgICAuLi50aGlzLmNoaWxkcmVuIHx8IFtdLFxuICAgICAgLi4udFxuICAgIF0sIHRoaXMuY2hpbGRyZW47XG4gIH1cbiAgLyoqXG4gICAqIEdldCBhbGwgbGVhZiBjb2x1bW5zIHRoYXQgYXJlIG5lc3RlZCB1bmRlciB0aGlzIGNvbHVtblxuICAgKiBAcmV0dXJucyB7Q29sdW1uW119XG4gICAqIEBwdWJsaWNcbiAgICovXG4gIGdldExlYWZDb2x1bW5zKCkge1xuICAgIHZhciB0O1xuICAgIHJldHVybiAodCA9IHRoaXMuY2hpbGRyZW4pICE9IG51bGwgJiYgdC5sZW5ndGggPyB0aGlzLmNoaWxkcmVuLnJlZHVjZSgobiwgcikgPT4gWy4uLm4sIC4uLnIuZ2V0TGVhZkNvbHVtbnMoKV0sIFtdKSA6IFt0aGlzXTtcbiAgfVxufVxuY29uc3QgR2UgPSAoZSwgdCwgbiwgciwgYSA9IHt9KSA9PiB7XG4gIGNvbnN0IG8gPSBzZSgpO1xuICBmdW5jdGlvbiBkKGkgPSAhMSwgaCA9IG51bGwpIHtcbiAgICBjb25zdCBzID0gdC5tYXAoXG4gICAgICAodSkgPT4gbmV3IHooe1xuICAgICAgICBsYWJlbDogdS50aXRsZSxcbiAgICAgICAga2V5OiB1Lm5hbWUsXG4gICAgICAgIGRlcHRoOiBlLmxlbmd0aCxcbiAgICAgICAgdHlwZTogTi5ST1dfSEVBREVSLFxuICAgICAgICBkYXRhVHlwZTogdS5uYXRpdmVUeXBlLFxuICAgICAgICBwYXJlbnQ6IGhcbiAgICAgIH0pXG4gICAgKTtcbiAgICByZXR1cm4gaSA/IFtcbiAgICAgIG5ldyB6KHtcbiAgICAgICAgbGFiZWw6IHQubWFwKCh1KSA9PiB1LnRpdGxlKS5qb2luKFwiIOKGkiBcIiksXG4gICAgICAgIGtleTogXCJfX2dyb3VwLmtleVwiLFxuICAgICAgICBkZXB0aDogZS5sZW5ndGgsXG4gICAgICAgIHR5cGU6IE4uUk9XX0hFQURFUl9HUk9VUCxcbiAgICAgICAgZ3JvdXA6IHMsXG4gICAgICAgIHBhcmVudDogaFxuICAgICAgfSlcbiAgICBdIDogcztcbiAgfVxuICBmdW5jdGlvbiB5KGksIGggPSAwLCBzID0gbnVsbCkge1xuICAgIGlmICghaS5sZW5ndGgpXG4gICAgICByZXR1cm4gZChcbiAgICAgICAgYS5hZ2dyZWdhdGVSb3dEaW1lbnNpb25zICYmIHQubGVuZ3RoID4gMSxcbiAgICAgICAgc1xuICAgICAgKTtcbiAgICBjb25zdCBbdSwgLi4uZl0gPSBpLCBDID0gbmV3IHooe1xuICAgICAgbGFiZWw6IHUudGl0bGUsXG4gICAgICBrZXk6IHUubmFtZSxcbiAgICAgIGRlcHRoOiBoLFxuICAgICAgdHlwZTogTi5ESU1FTlNJT04sXG4gICAgICBkYXRhVHlwZTogdS5uYXRpdmVUeXBlLFxuICAgICAgcGFyZW50OiBzXG4gICAgfSksIGcgPSB5KGYsIGggKyAxLCBDKTtcbiAgICByZXR1cm4gQy5hZGRDaGlsZHJlbihnKSwgW0NdO1xuICB9XG4gIGZ1bmN0aW9uIEQoaSwgaCA9IDAsIHMgPSBudWxsLCB1ID0gW10pIHtcbiAgICBpZiAoIWkubGVuZ3RoKVxuICAgICAgcmV0dXJuIG4ubWFwKFxuICAgICAgICAoZykgPT4gbmV3IHooe1xuICAgICAgICAgIGxhYmVsOiBnLnRpdGxlLFxuICAgICAgICAgIGtleTogYWUoWy4uLnUsIGcubmFtZV0pLFxuICAgICAgICAgIGRlcHRoOiBoLFxuICAgICAgICAgIHR5cGU6IE4uTUVBU1VSRSxcbiAgICAgICAgICBkYXRhVHlwZTogZy5uYXRpdmVUeXBlLFxuICAgICAgICAgIHBhcmVudDogcyB8fCBudWxsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIGNvbnN0IFtmLCAuLi5DXSA9IGk7XG4gICAgcmV0dXJuIHJbZi5uYW1lXS5tYXAoKGcpID0+IHtcbiAgICAgIGNvbnN0IFMgPSBuZXcgeih7XG4gICAgICAgIGxhYmVsOiBwZShnLCB7XG4gICAgICAgICAgLy8gdHlwZTogY3VycmVudENvbHVtbkRpbWVuc2lvbi5uYXRpdmVUeXBlID09PSAndGltZScgPyAnZGF0ZScgOiBjdXJyZW50Q29sdW1uRGltZW5zaW9uLm5hdGl2ZVR5cGUgYXMgYW55LFxuICAgICAgICAgIC4uLmEuZ3JhbnVsYXJpdHkgJiYgZi5uYXRpdmVUeXBlID09PSBcInRpbWVcIiAmJiBnID8ge1xuICAgICAgICAgICAgZGF0ZUZvcm1hdDogby5kYXRlRm9ybWF0c1thLmdyYW51bGFyaXR5XVxuICAgICAgICAgIH0gOiB7fVxuICAgICAgICB9KSA/PyBcIi1cIixcbiAgICAgICAga2V5OiBhZShbLi4udSwgZ10pLFxuICAgICAgICBkZXB0aDogaCxcbiAgICAgICAgdHlwZTogTi5ESU1FTlNJT04sXG4gICAgICAgIGRhdGFUeXBlOiBmLm5hdGl2ZVR5cGUsXG4gICAgICAgIHBhcmVudDogc1xuICAgICAgfSksIE0gPSBEKEMsIGggKyAxLCBTLCBbXG4gICAgICAgIC4uLnUsXG4gICAgICAgIGdcbiAgICAgIF0pO1xuICAgICAgcmV0dXJuIFMuYWRkQ2hpbGRyZW4oTSksIFM7XG4gICAgfSk7XG4gIH1cbiAgY29uc3QgbCA9IE8oXG4gICAgKCkgPT4gW1xuICAgICAgLi4udC5sZW5ndGggPyB5KGUpIDogW10sXG4gICAgICAuLi5EKGUpXG4gICAgXSxcbiAgICBbXG4gICAgICBlLFxuICAgICAgdCxcbiAgICAgIG4sXG4gICAgICByLFxuICAgICAgYS5hZ2dyZWdhdGVSb3dEaW1lbnNpb25zXG4gICAgXVxuICApLCBwID0gTyhcbiAgICAoKSA9PiBsLm1hcCgoaSkgPT4gaS5nZXRMZWFmQ29sdW1ucygpKS5mbGF0KCksXG4gICAgW2xdXG4gICk7XG4gIHJldHVybiB7XG4gICAgY29sdW1uczogbCxcbiAgICBnZXRMZWFmQ29sdW1uczogKCkgPT4gcFxuICB9O1xufTtcbmZ1bmN0aW9uIGhlKGUsIHQpIHtcbiAgcmV0dXJuIHR5cGVvZiB0ID09IFwiZnVuY3Rpb25cIiA/IHQoZSkgOiBlW3RdO1xufVxuZnVuY3Rpb24gbWUoZSkge1xuICByZXR1cm4gIWlzTmFOKGUpO1xufVxuY29uc3QgTGUgPSAoZSkgPT4gKHQsIG4pID0+IHtcbiAgZm9yIChjb25zdCB7IGtleTogciwgZGlyZWN0aW9uOiBhIH0gb2YgZSkge1xuICAgIGNvbnN0IG8gPSBoZSh0LCByKSB8fCAwLCBkID0gaGUobiwgcikgfHwgMCwgeSA9IEVlKG8sIGQsIGEpO1xuICAgIGlmICh5ICE9PSAwKVxuICAgICAgcmV0dXJuIHk7XG4gIH1cbiAgcmV0dXJuIDA7XG59LCBFZSA9IChlLCB0LCBuKSA9PiB7XG4gIGlmIChtZShlKSAmJiBtZSh0KSkge1xuICAgIGNvbnN0IHIgPSBwYXJzZUludChlLCAxMCksIGEgPSBwYXJzZUludCh0LCAxMCk7XG4gICAgcmV0dXJuIChyIC0gYSkgKiAobiA9PT0gay5BU0NFTkRJTkcgPyAxIDogLTEpO1xuICB9IGVsc2UgcmV0dXJuIHR5cGVvZiBlID09IFwic3RyaW5nXCIgJiYgdHlwZW9mIHQgPT0gXCJzdHJpbmdcIiA/IGUubG9jYWxlQ29tcGFyZSh0LCB2b2lkIDAsIHtcbiAgICBzZW5zaXRpdml0eTogXCJiYXNlXCIsXG4gICAgbnVtZXJpYzogITBcbiAgfSkgKiAobiA9PT0gay5BU0NFTkRJTkcgPyAxIDogLTEpIDogdHlwZW9mIGUgPT0gXCJudW1iZXJcIiA/IC0xIDogMTtcbn0sIEhlID0gKGUsIHQsIG4gPSBbXSwgciA9IFtdLCBhID0ge30pID0+IHtcbiAgY29uc3QgbyA9IE8oKCkgPT4gbmV3IFZlKFxuICAgIGUsXG4gICAgdCxcbiAgICBuLFxuICAgIHIsXG4gICAgYS5hZ2dyZWdhdGVSb3dEaW1lbnNpb25zXG4gICksIFtlLCB0LCBuLCByLCBhLmFnZ3JlZ2F0ZVJvd0RpbWVuc2lvbnNdKSwgZCA9IE8oKCkgPT4gci5yZWR1Y2UoKGwsIHApID0+ICh7XG4gICAgLi4ubCxcbiAgICBbcC5uYW1lXTogby5nZXRDb2x1bW5EaW1lbnNpb25WYWx1ZXMocC5uYW1lKS5zb3J0KChpLCBoKSA9PiBFZShpLCBoLCBhLmRlZmF1bHRDb2x1bW5zU29ydCA/PyBrLkFTQ0VORElORykpXG4gIH0pLCB7fSksIFtyLCBvLCBhLmRlZmF1bHRDb2x1bW5zU29ydF0pLCB7IGNvbHVtbnM6IHksIGdldExlYWZDb2x1bW5zOiBEIH0gPSBHZShcbiAgICByLFxuICAgIG4sXG4gICAgdCxcbiAgICBkLFxuICAgIHtcbiAgICAgIGFnZ3JlZ2F0ZVJvd0RpbWVuc2lvbnM6IGEuYWdncmVnYXRlUm93RGltZW5zaW9ucyxcbiAgICAgIGdyYW51bGFyaXR5OiBhLmdyYW51bGFyaXR5XG4gICAgfVxuICApO1xuICByZXR1cm4ge1xuICAgIHJvd3M6IG8ucm93cyxcbiAgICBjb2x1bW5zOiB5LFxuICAgIGdldExlYWZDb2x1bW5zOiBEXG4gIH07XG59LCBQZSA9ICh7XG4gIGFnZ3JlZ2F0ZVJvd0RpbWVuc2lvbnM6IGUgPSAhMCxcbiAgY29sdW1uRGltZW5zaW9uczogdCxcbiAgY29sdW1uU29ydGluZ0VuYWJsZWQ6IG4gPSAhMCxcbiAgZGF0YTogcixcbiAgZGVmYXVsdENvbHVtbkRpbWVuc2lvblNvcnREaXJlY3Rpb246IGEsXG4gIGRlZmF1bHRSb3dEaW1lbnNpb25Tb3J0RGlyZWN0aW9uOiBvLFxuICBmb250U2l6ZTogZCA9IFwiMTRweFwiLFxuICBncmFudWxhcml0eTogeSxcbiAgaXNSb3dHcm91cERlZmF1bHRFeHBhbmRlZDogRCA9ICEwLFxuICBtZWFzdXJlczogbCxcbiAgbWluQ29sdW1uV2lkdGg6IHAsXG4gIG1pblJvd0RpbWVuc2lvbkNvbHVtbldpZHRoOiBpLFxuICBudWxsVmFsdWVDaGFyYWN0ZXI6IGggPSBcIlwiLFxuICByb3dEaW1lbnNpb25zOiBzXG59KSA9PiB7XG4gIGNvbnN0IHUgPSBzZSgpO1xuICBkID0gdS5mb250LnNpemU7XG4gIGNvbnN0IFtmLCBDXSA9IGdlKCgpID0+ICFzIHx8ICFvID8gW10gOiBbXG4gICAge1xuICAgICAga2V5OiBzLmxlbmd0aCA9PT0gMSA/IHNbMF0ubmFtZSA6IFwiX19ncm91cC5rZXlcIixcbiAgICAgIGRpcmVjdGlvbjogb1xuICAgIH1cbiAgXSksIHsgcm93czogZywgY29sdW1uczogUywgZ2V0TGVhZkNvbHVtbnM6IE0gfSA9IEhlKFxuICAgIHIsXG4gICAgbCxcbiAgICBzLFxuICAgIHQsXG4gICAge1xuICAgICAgYWdncmVnYXRlUm93RGltZW5zaW9uczogZSxcbiAgICAgIGRlZmF1bHRDb2x1bW5zU29ydDogYSxcbiAgICAgIGdyYW51bGFyaXR5OiB5XG4gICAgfVxuICApLCBXID0gKGIsIHcpID0+IHtcbiAgICBjb25zdCBBID0gWy4uLmJdO1xuICAgIHJldHVybiBBLnNvcnQoTGUodykpLCBBLmZvckVhY2goKHYpID0+IHtcbiAgICAgIHZhciBCO1xuICAgICAgKEIgPSB2LmNoaWxkcmVuKSAhPSBudWxsICYmIEIubGVuZ3RoICYmICh2LmNoaWxkcmVuID0gVyh2LmNoaWxkcmVuLCB3KSk7XG4gICAgfSksIEE7XG4gIH0sIEYgPSBPKCgpID0+IHtcbiAgICBjb25zdCBiID0gcGFyc2VJbnQoaCwgMTApO1xuICAgIHJldHVybiBmLm1hcCgodykgPT4gKHtcbiAgICAgIC4uLncsXG4gICAgICBrZXk6IChBKSA9PiBBLmRhdGFbdy5rZXldIHx8IChpc05hTihiKSA/IG51bGwgOiBiKVxuICAgIH0pKTtcbiAgfSwgW2ZdKSwgZWUgPSBPKCgpID0+IFcoZywgRiksIFtnLCBGXSksICQgPSBPKFxuICAgICgpID0+IChiKSA9PiBsLmZpbmQoKHcpID0+IHcudGl0bGUgPT09IGIpLFxuICAgIFtsXVxuICApO1xuICByZXR1cm4gLyogQF9fUFVSRV9fICovIG0uanN4cyhcInRhYmxlXCIsIHsgY2xhc3NOYW1lOiBcIm1pbi13LWZ1bGwgYm9yZGVyLXNlcGFyYXRlIGJvcmRlci1zcGFjaW5nLTAgdGFibGUtZml4ZWRcIiwgY2hpbGRyZW46IFtcbiAgICAvKiBAX19QVVJFX18gKi8gbS5qc3goXG4gICAgICBcInRoZWFkXCIsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogYFxuICAgICAgICBlbWJlZGRhYmxlLXRhYmxlLWhlYWRlclxuICAgICAgICBzdGlja3lcbiAgICAgICAgdG9wLTBcbiAgICAgICAgei0yMFxuICAgICAgICBiZy1bY29sb3I6LS1lbWJlZGRhYmxlLWNvbnRyb2xzLWJhY2tncm91bmRzLWNvbG9ycy1zb2Z0XVxuICAgICAgYCxcbiAgICAgICAgY2hpbGRyZW46IC8qIEBfX1BVUkVfXyAqLyBtLmpzeChcbiAgICAgICAgICBiZSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjb2x1bW5zOiBTLFxuICAgICAgICAgICAgbWluQ29sdW1uV2lkdGg6IGAke3B9cHhgLFxuICAgICAgICAgICAgbWluSGVhZGVyQ29sdW1uV2lkdGg6IGAke2l9cHhgLFxuICAgICAgICAgICAgZW5hYmxlU29ydGluZzogbixcbiAgICAgICAgICAgIHNvcnRDcml0ZXJpYTogZixcbiAgICAgICAgICAgIG9uU29ydGluZ0NoYW5nZTogKGIsIHcpID0+IHtcbiAgICAgICAgICAgICAgQyhbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiBiLFxuICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiB3XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmb250U2l6ZTogZFxuICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgfVxuICAgICksXG4gICAgLyogQF9fUFVSRV9fICovIG0uanN4KFwidGJvZHlcIiwgeyBjbGFzc05hbWU6IFwib3ZlcmZsb3cteS1hdXRvXCIsIGNoaWxkcmVuOiBlZS5tYXAoKGIpID0+IC8qIEBfX1BVUkVfXyAqLyBtLmpzeChcbiAgICAgIERlLFxuICAgICAge1xuICAgICAgICBjb2x1bW5zOiBNKCksXG4gICAgICAgIHJvdzogYixcbiAgICAgICAgaXNSb3dHcm91cERlZmF1bHRFeHBhbmRlZDogRCxcbiAgICAgICAgcmVuZGVyQ2VsbDogKHcsIEEpID0+IHtcbiAgICAgICAgICB2YXIgQjtcbiAgICAgICAgICBjb25zdCB2ID0gd1tBLmtleV07XG4gICAgICAgICAgcmV0dXJuIHR5cGVvZiB2ID09IFwiYm9vbGVhblwiID8gLyogQF9fUFVSRV9fICovIG0uanN4KFwic3BhblwiLCB7IHN0eWxlOiB7IGZvbnRTaXplOiBkIH0sIGNoaWxkcmVuOiB2ID8gXCJUcnVlXCIgOiBcIkZhbHNlXCIgfSkgOiAvKiBAX19QVVJFX18gKi8gbS5qc3goXCJzcGFuXCIsIHsgc3R5bGU6IHsgZm9udFNpemU6IGQgfSwgY2hpbGRyZW46IHYgPT0gbnVsbCA/IGggOiBwZSh2LCB7XG4gICAgICAgICAgICAvL2Zvcm1hdCBkYXRlIGNvbHVtbnNcbiAgICAgICAgICAgIC4uLnkgJiYgQS5kYXRhVHlwZSA9PT0gXCJ0aW1lXCIgPyB7XG4gICAgICAgICAgICAgIGRhdGVGb3JtYXQ6IHUuZGF0ZUZvcm1hdHNbeV1cbiAgICAgICAgICAgIH0gOiB7fSxcbiAgICAgICAgICAgIC8vZm9ybWF0IG1lYXN1cmVzXG4gICAgICAgICAgICAuLi4kKEEubGFiZWwpID8geyBtZXRhOiAoQiA9ICQoQS5sYWJlbCkpID09IG51bGwgPyB2b2lkIDAgOiBCLm1ldGEsIHR5cGU6IFwibnVtYmVyXCIgfSA6IHt9XG4gICAgICAgICAgfSkgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBiLmlkXG4gICAgKSkgfSlcbiAgXSB9KTtcbn0sIFdlID0gKHsgcm93VmFsdWVzOiBlLCBjb2x1bW5WYWx1ZXM6IHQsIG1ldHJpY3M6IG4sIC4uLnIgfSkgPT4ge1xuICBjb25zdCBhID0gW107XG4gIHJldHVybiBlICE9IG51bGwgJiYgZS5sZW5ndGggJiYgci5hZ2dyZWdhdGVSb3dEaW1lbnNpb25zID8gZSA9PSBudWxsIHx8IGUuZm9yRWFjaCgobywgZCkgPT4ge1xuICAgIHJbYHJlc3VsdHNEaW1lbnNpb24ke2R9YF0gJiYgYS5wdXNoKHJbYHJlc3VsdHNEaW1lbnNpb24ke2R9YF0pO1xuICB9KSA6IGEucHVzaChyLnJlc3VsdHNEaW1lbnNpb24wKSwgLyogQF9fUFVSRV9fICovIG0uanN4KFxuICAgIHZlLFxuICAgIHtcbiAgICAgIHRpdGxlOiByLnRpdGxlLFxuICAgICAgcmVzdWx0czogYSxcbiAgICAgIGRlc2NyaXB0aW9uOiByLmRlc2NyaXB0aW9uLFxuICAgICAgY2xhc3NOYW1lOiBcIm92ZXJmbG93LWF1dG9cIixcbiAgICAgIGNoaWxkcmVuOiBhLmV2ZXJ5KChvKSA9PiBvICYmICFvLmlzTG9hZGluZyAmJiAhby5lcnJvcikgJiYgLyogQF9fUFVSRV9fICovIG0uanN4KFxuICAgICAgICBQZSxcbiAgICAgICAge1xuICAgICAgICAgIC4uLnIsXG4gICAgICAgICAgZGF0YTogYS5tYXAoKG8pID0+IG8uZGF0YSksXG4gICAgICAgICAgY29sdW1uRGltZW5zaW9uczogdCxcbiAgICAgICAgICBkZWZhdWx0Q29sdW1uRGltZW5zaW9uU29ydERpcmVjdGlvbjogci5jb2x1bW5Tb3J0RGlyZWN0aW9uLFxuICAgICAgICAgIHJvd0RpbWVuc2lvbnM6IGUgPT0gbnVsbCA/IHZvaWQgMCA6IGUuZmlsdGVyKChvKSA9PiB0ZShvKSksXG4gICAgICAgICAgZGVmYXVsdFJvd0RpbWVuc2lvblNvcnREaXJlY3Rpb246IHIucm93U29ydERpcmVjdGlvbixcbiAgICAgICAgICBtZWFzdXJlczogbixcbiAgICAgICAgICBmb250U2l6ZTogci5mb250U2l6ZSA/IGAke3IuZm9udFNpemV9cHhgIDogdm9pZCAwXG4gICAgICAgIH1cbiAgICAgIClcbiAgICB9XG4gICk7XG59LCBGZSA9IHtcbiAgbmFtZTogXCJQaXZvdFRhYmxlXCIsXG4gIGxhYmVsOiBcIlBpdm90IHRhYmxlXCIsXG4gIGNsYXNzTmFtZXM6IFtcImluc2lkZS1jYXJkXCJdLFxuICBjYXRlZ29yeTogXCJDaGFydHM6IGVzc2VudGlhbHNcIixcbiAgaW5wdXRzOiBbXG4gICAge1xuICAgICAgbmFtZTogXCJkc1wiLFxuICAgICAgdHlwZTogXCJkYXRhc2V0XCIsXG4gICAgICBsYWJlbDogXCJEYXRhc2V0IHRvIGRpc3BsYXlcIixcbiAgICAgIGNhdGVnb3J5OiBcIkNoYXJ0IGRhdGFcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJtZXRyaWNzXCIsXG4gICAgICB0eXBlOiBcIm1lYXN1cmVcIixcbiAgICAgIGxhYmVsOiBcIk1ldHJpY3NcIixcbiAgICAgIGFycmF5OiAhMCxcbiAgICAgIGNvbmZpZzoge1xuICAgICAgICBkYXRhc2V0OiBcImRzXCJcbiAgICAgIH0sXG4gICAgICBjYXRlZ29yeTogXCJDaGFydCBkYXRhXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwicm93VmFsdWVzXCIsXG4gICAgICB0eXBlOiBcImRpbWVuc2lvblwiLFxuICAgICAgbGFiZWw6IFwiUm93IFZhbHVlc1wiLFxuICAgICAgYXJyYXk6ICEwLFxuICAgICAgY29uZmlnOiB7XG4gICAgICAgIGRhdGFzZXQ6IFwiZHNcIixcbiAgICAgICAgaGlkZUdyYW51bGFyaXR5OiAhMFxuICAgICAgfSxcbiAgICAgIGNhdGVnb3J5OiBcIkNoYXJ0IGRhdGFcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJjb2x1bW5WYWx1ZXNcIixcbiAgICAgIHR5cGU6IFwiZGltZW5zaW9uXCIsXG4gICAgICBsYWJlbDogXCJDb2x1bW4gVmFsdWVzXCIsXG4gICAgICBhcnJheTogITAsXG4gICAgICBjb25maWc6IHtcbiAgICAgICAgZGF0YXNldDogXCJkc1wiLFxuICAgICAgICBoaWRlR3JhbnVsYXJpdHk6ICEwXG4gICAgICB9LFxuICAgICAgY2F0ZWdvcnk6IFwiQ2hhcnQgZGF0YVwiXG4gICAgfSxcbiAgICAvLyBWYXJpYWJsZXMgdG8gY29uZmlndXJlXG4gICAge1xuICAgICAgbmFtZTogXCJncmFudWxhcml0eVwiLFxuICAgICAgdHlwZTogXCJncmFudWxhcml0eVwiLFxuICAgICAgbGFiZWw6IFwiR3JhbnVsYXJpdHkgKGZvciBkYXRlcylcIixcbiAgICAgIGRlZmF1bHRWYWx1ZTogXCJ3ZWVrXCIsXG4gICAgICBjYXRlZ29yeTogXCJWYXJpYWJsZXMgdG8gY29uZmlndXJlXCJcbiAgICB9LFxuICAgIC8vIFRhYmxlIHNldHRpbmdzXG4gICAge1xuICAgICAgbmFtZTogXCJ0aXRsZVwiLFxuICAgICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICAgIGxhYmVsOiBcIlRpdGxlXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJUaGUgdGl0bGUgZm9yIHRoZSBjaGFydFwiLFxuICAgICAgY2F0ZWdvcnk6IFwiQ2hhcnQgc2V0dGluZ3NcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJkZXNjcmlwdGlvblwiLFxuICAgICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICAgIGxhYmVsOiBcIkRlc2NyaXB0aW9uXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJUaGUgZGVzY3JpcHRpb24gZm9yIHRoZSBjaGFydFwiLFxuICAgICAgY2F0ZWdvcnk6IFwiQ2hhcnQgc2V0dGluZ3NcIlxuICAgIH0sXG4gICAgLy8ge1xuICAgIC8vICAgICBuYW1lOiAnbWVhc3VyZVZpc3VhbGl6YXRpb25Gb3JtYXQnLFxuICAgIC8vICAgICB0eXBlOiBNZWFzdXJlVmlzdWFsaXphdGlvbkZvcm1hdFR5cGUsXG4gICAgLy8gICAgIGxhYmVsOiAnTWV0cmljcyB2aXN1YWxpemF0aW9uIGZvcm1hdCcsXG4gICAgLy8gICAgIGRlZmF1bHRWYWx1ZTogeyB2YWx1ZTogTWVhc3VyZVZpc3VhbGl6YXRpb25Gb3JtYXQuTlVNRVJJQ19WQUxVRVNfT05MWSB9LFxuICAgIC8vICAgICBjYXRlZ29yeTogJ0NoYXJ0IHNldHRpbmdzJ1xuICAgIC8vIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJudWxsVmFsdWVDaGFyYWN0ZXJcIixcbiAgICAgIHR5cGU6IFwic3RyaW5nXCIsXG4gICAgICBsYWJlbDogXCJOdWxsIHZhbHVlIGNoYXJhY3RlclwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiQ2hhcmFjdGVyIHRoYXQgc2hvdWxkIGJlIGRpc3BsYXllZCBpZiB2YWx1ZSBkb2VzIG5vdCBleGlzdFwiLFxuICAgICAgZGVmYXVsdFZhbHVlOiBcIuKIhVwiLFxuICAgICAgY2F0ZWdvcnk6IFwiQ2hhcnQgc2V0dGluZ3NcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJpc1Jvd0dyb3VwRGVmYXVsdEV4cGFuZGVkXCIsXG4gICAgICB0eXBlOiBcImJvb2xlYW5cIixcbiAgICAgIGxhYmVsOiBcIlJvdyBncm91cCBleHBhbmRlZCBieSBkZWZhdWx0XCIsXG4gICAgICBkZWZhdWx0VmFsdWU6ICExLFxuICAgICAgY2F0ZWdvcnk6IFwiQ2hhcnQgc2V0dGluZ3NcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJjb2x1bW5Tb3J0aW5nRW5hYmxlZFwiLFxuICAgICAgdHlwZTogXCJib29sZWFuXCIsXG4gICAgICBsYWJlbDogXCJFbmFibGUgY29sdW1uIHNvcnRpbmdcIixcbiAgICAgIGRlZmF1bHRWYWx1ZTogITAsXG4gICAgICBjYXRlZ29yeTogXCJDaGFydCBzZXR0aW5nc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcInJvd1NvcnREaXJlY3Rpb25cIixcbiAgICAgIHR5cGU6IGNlLFxuICAgICAgZGVmYXVsdFZhbHVlOiB7IHZhbHVlOiBrLkFTQ0VORElORyB9LFxuICAgICAgbGFiZWw6IFwiRGVmYXVsdCBSb3cgU29ydCBEaXJlY3Rpb25cIixcbiAgICAgIGNhdGVnb3J5OiBcIkNoYXJ0IHNldHRpbmdzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiY29sdW1uU29ydERpcmVjdGlvblwiLFxuICAgICAgdHlwZTogY2UsXG4gICAgICBkZWZhdWx0VmFsdWU6IHsgdmFsdWU6IGsuQVNDRU5ESU5HIH0sXG4gICAgICBsYWJlbDogXCJEZWZhdWx0IENvbHVtbiBTb3J0IERpcmVjdGlvblwiLFxuICAgICAgY2F0ZWdvcnk6IFwiQ2hhcnQgc2V0dGluZ3NcIlxuICAgIH0sXG4gICAgLy8gVGFibGUgc3R5bGluZ1xuICAgIHtcbiAgICAgIG5hbWU6IFwibWluQ29sdW1uV2lkdGhcIixcbiAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICBsYWJlbDogXCJNaW5pbXVtIG1ldHJpYyBjb2x1bW4gd2lkdGggaW4gcGl4ZWxzXCIsXG4gICAgICBkZWZhdWx0VmFsdWU6IDE1MCxcbiAgICAgIGNhdGVnb3J5OiBcIkNoYXJ0IHN0eWxpbmdcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJtaW5Sb3dEaW1lbnNpb25Db2x1bW5XaWR0aFwiLFxuICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgIGxhYmVsOiBcIk1pbmltdW0gcm93IHZhbHVlIHdpZHRoIGluIHBpeGVsc1wiLFxuICAgICAgZGVmYXVsdFZhbHVlOiAyMDAsXG4gICAgICBjYXRlZ29yeTogXCJDaGFydCBzdHlsaW5nXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiZm9udFNpemVcIixcbiAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICBsYWJlbDogXCJGb250IHNpemUgaW4gcGl4ZWxzXCIsXG4gICAgICBjYXRlZ29yeTogXCJDaGFydCBzdHlsaW5nXCJcbiAgICB9XG4gIF1cbn0sIHllID0gITAsIFplID0gU2UoV2UsIEZlLCB7XG4gIHByb3BzOiAoZSwgW3RdKSA9PiB7XG4gICAgdmFyIHAsIGksIGg7XG4gICAgY29uc3QgbiA9IEFycmF5LmlzQXJyYXkoZS5yb3dWYWx1ZXMpID8gZS5yb3dWYWx1ZXMgOiBbZS5yb3dWYWx1ZXNdLCByID0gQXJyYXkuaXNBcnJheShlLmNvbHVtblZhbHVlcykgPyBlLmNvbHVtblZhbHVlcyA6IFtlLmNvbHVtblZhbHVlc10sIGEgPSAobiB8fCBbXSkuZmlsdGVyKFxuICAgICAgKHMpID0+IHRlKHMpXG4gICAgKSwgbyA9IChyIHx8IFtdKS5maWx0ZXIoXG4gICAgICAocykgPT4gdGUocylcbiAgICApLCBkID0gKHAgPSBlLm1ldHJpY3MpID09IG51bGwgPyB2b2lkIDAgOiBwLmZpbHRlcigocykgPT4geGUocykpLCB5ID0gYS5maWx0ZXIoXG4gICAgICAocykgPT4gcyAmJiB0ZShzKVxuICAgICksIEQgPSB5Lm1hcCgocykgPT4ge1xuICAgICAgdmFyIHU7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwcm9wZXJ0eTogcyxcbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIHZhbHVlIGlzIHNldCBieSBkZWZpbmVDb21wb25lbnQsIG1heSBuZWVkIHRvIGFkanVzdCB0eXBpbmcgaW4gdGhhdCBtb2R1bGVcbiAgICAgICAgZGlyZWN0aW9uOiAoKHUgPSBlLnJvd1NvcnREaXJlY3Rpb24pID09IG51bGwgPyB2b2lkIDAgOiB1LnZhbHVlKSA9PT0gay5BU0NFTkRJTkcgPyBcImFzY1wiIDogXCJkZXNjXCJcbiAgICAgIH07XG4gICAgfSksIGwgPSBhICE9IG51bGwgJiYgYS5sZW5ndGggJiYgeWUgPyBhLnJlZHVjZSgocywgdSwgZiwgQykgPT4ge1xuICAgICAgY29uc3QgZyA9IFtcbiAgICAgICAgLi4ueS5zbGljZSgwLCBmICsgMSksXG4gICAgICAgIC4uLm9cbiAgICAgIF07XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zLFxuICAgICAgICBbYHJlc3VsdHNEaW1lbnNpb24ke2Z9YF06IG9lKHtcbiAgICAgICAgICBmcm9tOiBlLmRzLFxuICAgICAgICAgIHNlbGVjdDogW1xuICAgICAgICAgICAgLi4uZy5maWx0ZXIoXG4gICAgICAgICAgICAgIChTKSA9PiBTLm5hdGl2ZVR5cGUgIT09IFwidGltZVwiXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgLi4uZy5maWx0ZXIoKFMpID0+IFMubmF0aXZlVHlwZSA9PT0gXCJ0aW1lXCIpLm1hcCgoUykgPT4gKHtcbiAgICAgICAgICAgICAgZGltZW5zaW9uOiBTLm5hbWUsXG4gICAgICAgICAgICAgIGdyYW51bGFyaXR5OiBlLmdyYW51bGFyaXR5XG4gICAgICAgICAgICB9KSksXG4gICAgICAgICAgICAuLi5kXG4gICAgICAgICAgXSxcbiAgICAgICAgICBvcmRlckJ5OiBELnNsaWNlKDAsIGYgKyAxKSxcbiAgICAgICAgICBsaW1pdDogMWU0XG4gICAgICAgIH0pXG4gICAgICB9O1xuICAgIH0sIHt9KSA6IHtcbiAgICAgIHJlc3VsdHNEaW1lbnNpb24wOiBvZSh7XG4gICAgICAgIGZyb206IGUuZHMsXG4gICAgICAgIHNlbGVjdDogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIC4uLlsuLi55IHx8IFtdLCAuLi5vXS5maWx0ZXIoKHMpID0+IHMubmF0aXZlVHlwZSA9PT0gXCJ0aW1lXCIpLm1hcCgocykgPT4gKHtcbiAgICAgICAgICAgICAgZGltZW5zaW9uOiBzLm5hbWUsXG4gICAgICAgICAgICAgIGdyYW51bGFyaXR5OiBlLmdyYW51bGFyaXR5XG4gICAgICAgICAgICB9KSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIC4uLmRcbiAgICAgICAgXSxcbiAgICAgICAgbGltaXQ6IDFlNFxuICAgICAgfSlcbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICAuLi5lLFxuICAgICAgcm93VmFsdWVzOiBuLFxuICAgICAgY29sdW1uVmFsdWVzOiBvLFxuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIHZhbHVlIGlzIHNldCBieSBkZWZpbmVDb21wb25lbnQsIG1heSBuZWVkIHRvIGFkanVzdCB0eXBpbmcgaW4gdGhhdCBtb2R1bGVcbiAgICAgIHJvd1NvcnREaXJlY3Rpb246IChpID0gZS5yb3dTb3J0RGlyZWN0aW9uKSA9PSBudWxsID8gdm9pZCAwIDogaS52YWx1ZSxcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSB2YWx1ZSBpcyBzZXQgYnkgZGVmaW5lQ29tcG9uZW50LCBtYXkgbmVlZCB0byBhZGp1c3QgdHlwaW5nIGluIHRoYXQgbW9kdWxlXG4gICAgICBjb2x1bW5Tb3J0RGlyZWN0aW9uOiAoaCA9IGUuY29sdW1uU29ydERpcmVjdGlvbikgPT0gbnVsbCA/IHZvaWQgMCA6IGgudmFsdWUsXG4gICAgICAvLyBtZWFzdXJlVmlzdWFsaXphdGlvbkZvcm1hdDogaW5wdXRzLm1lYXN1cmVWaXN1YWxpemF0aW9uRm9ybWF0Py52YWx1ZSwgLy8gRW5hYmxlIHRoaXMgYWZ0ZXIgQmFycyBtb2RlIHdpbGwgYmUgZml4ZWRcbiAgICAgIG1lYXN1cmVWaXN1YWxpemF0aW9uRm9ybWF0OiBmZS5OVU1FUklDX1ZBTFVFU19PTkxZLFxuICAgICAgYWdncmVnYXRlUm93RGltZW5zaW9uczogeWUsXG4gICAgICBmb250U2l6ZTogZS5mb250U2l6ZSxcbiAgICAgIC4uLmxcbiAgICB9O1xuICB9XG59KTtcbmV4cG9ydCB7XG4gIFplIGFzIGRlZmF1bHQsXG4gIEZlIGFzIG1ldGFcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1QaXZvdFRhYmxlLmpzLm1hcFxuIl0sIm5hbWVzIjpbIm4iLCJvIiwic2UiLCJoIiwidSIsIm0iLCJWIiwiayIsIndlIiwiQWUiLCJnZSIsImtlIiwidCIsInIiLCJhIiwi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S0FBSyxFQUFFLE9BQU8sQ0FBQyxHQUFHSCxJQUFHLEdBQUcsTUFBTTtBQUM3RCxZQUFNLElBQUk7QUFBQSxRQUNSLEdBQUcsRUFBRSxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQUEsUUFDbkIsR0FBR0g7QUFBQSxNQUNYO0FBQ00sYUFBTztBQUFBLFFBQ0wsR0FBRztBQUFBLFFBQ0gsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLEdBQUd1QixFQUFHO0FBQUEsVUFDM0IsTUFBTSxFQUFFO0FBQUEsVUFDUixRQUFRO0FBQUEsWUFDTixHQUFHLEVBQUU7QUFBQSxjQUNILENBQUMsTUFBTSxFQUFFLGVBQWU7QUFBQSxZQUN0QztBQUFBLFlBQ1ksR0FBRyxFQUFFLE9BQU8sQ0FBQyxNQUFNLEVBQUUsZUFBZSxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU87QUFBQSxjQUN0RCxXQUFXLEVBQUU7QUFBQSxjQUNiLGFBQWEsRUFBRTtBQUFBLFlBQzdCLEVBQWM7QUFBQSxZQUNGLEdBQUc7QUFBQSxVQUNmO0FBQUEsVUFDVSxTQUFTLEVBQUUsTUFBTSxHQUFHLElBQUksQ0FBQztBQUFBLFVBQ3pCLE9BQU87QUFBQSxRQUNqQixDQUFTO0FBQUEsTUFDVDtBQUFBLElBQ0ksR0FBRyxDQUFBLENBQUUsSUFBSTtBQUFBLE1BQ1AsbUJBQW1CQSxFQUFHO0FBQUEsUUFDcEIsTUFBTSxFQUFFO0FBQUEsUUFDUixRQUFRO0FBQUEsVUFDTjtBQUFBLFlBQ0UsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFBLEdBQUksR0FBR3ZCLEVBQUMsRUFBRSxPQUFPLENBQUMsTUFBTSxFQUFFLGVBQWUsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPO0FBQUEsY0FDdkUsV0FBVyxFQUFFO0FBQUEsY0FDYixhQUFhLEVBQUU7QUFBQSxZQUM3QixFQUFjO0FBQUEsVUFDZDtBQUFBLFVBQ1UsR0FBRztBQUFBLFFBQ2I7QUFBQSxRQUNRLE9BQU87QUFBQSxNQUNmLENBQU87QUFBQSxJQUNQO0FBQ0ksV0FBTztBQUFBLE1BQ0wsR0FBRztBQUFBLE1BQ0gsV0FBV0Q7QUFBQUEsTUFDWCxjQUFjQztBQUFBO0FBQUEsTUFFZCxtQkFBbUIsSUFBSSxFQUFFLHFCQUFxQixPQUFPLFNBQVMsRUFBRTtBQUFBO0FBQUEsTUFFaEUsc0JBQXNCRSxNQUFJLEVBQUUsd0JBQXdCLE9BQU8sU0FBU0EsSUFBRTtBQUFBO0FBQUEsTUFFdEUsNEJBQTRCLEdBQUc7QUFBQSxNQUMvQix3QkFBd0I7QUFBQSxNQUN4QixVQUFVLEVBQUU7QUFBQSxNQUNaLEdBQUc7QUFBQSxJQUNUO0FBQUEsRUFDRTtBQUNGLENBQUM7IiwieF9nb29nbGVfaWdub3JlTGlzdCI6WzBdfQ==
