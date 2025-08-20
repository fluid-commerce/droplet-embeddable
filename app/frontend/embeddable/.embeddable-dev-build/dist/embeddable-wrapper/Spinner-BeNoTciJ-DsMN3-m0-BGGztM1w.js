import { j as j$1 } from './jsx-runtime-CjQXaSqQ-CjMA1-fF-CkV96GpT.js';
import { u as useTheme } from './index.esm-CVE60fla-BtsXn2z1.js';

const f = "en-US", c = (e, { mapFn: n = (t) => t, filterFn: o = Boolean }) => {
  if (!e)
    return;
  const t = e.filter(o);
  if (t.length !== 0)
    return t.map(n);
}, E$1 = (e) => e.name, S$1 = (e) => !!(e && e.dimension && (e.granularity || e.dateRange)), M$1 = (e, n, o, t) => {
  const r = [], s = [
    ...[...o, ...n].filter(Boolean).map((i2) => i2.name),
    ...t.filter(Boolean).map((i2) => i2.dimension).filter(Boolean)
  ];
  for (const i2 of e) {
    const { name: a } = i2.property;
    s.includes(a) || r.push(a);
  }
  return r;
}, m = (e, n = {}) => ({
  __embeddableType: "built-in",
  toString: () => e,
  typeConfig: {
    label: e,
    optionLabel: () => e,
    ...n
  }
}), I$1 = (e) => {
  if (!e.property)
    return "filter property must be set";
  if (!e.operator)
    return "filter operator must be set";
}, N = (e) => {
  if (e == null || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || e instanceof Date || Array.isArray(e))
    return e;
  if (e != null && e.relativeTimeString)
    return e == null ? void 0 : e.relativeTimeString;
  if (Object.hasOwn(e, "date"))
    return e == null ? void 0 : e.date;
  if (Object.hasOwn(e, "from") || Object.hasOwn(e, "to")) {
    const n = e;
    return [n == null ? void 0 : n.from, n == null ? void 0 : n.to].filter(Boolean);
  }
};
function y(e) {
  if (!e || e.length === 0)
    return [];
  const n = /* @__PURE__ */ new Set();
  return e.filter((o) => n.has(o.name) ? false : (n.add(o.name), true));
}
const b = "dimension", T = "measure", u = (e) => Array.isArray(e) ? e.flatMap(u) : [e], O = (e) => {
  var t;
  const n = {
    dimensions: [],
    measures: [],
    timeDimensions: []
  };
  if (!e)
    return n;
  const o = u(e).filter(Boolean);
  if (!o.length)
    return n.error = "select must not be empty", n;
  for (const r of o) {
    if (!(typeof r == "object" && (x(r) || D$1(r))))
      return n.error = "select must only contain Dimension, Measure or TimeDimension objects", n;
    if (D$1(r))
      n.timeDimensions.push(r);
    else if (h(r)) {
      const i2 = r, a = (t = i2.inputs) == null ? void 0 : t.granularity;
      i2.nativeType === "time" && a ? n.timeDimensions.push({
        dimension: i2.name,
        granularity: a,
        title: i2.title
      }) : n.dimensions.push(i2);
    } else if (A$1(r))
      n.measures.push(r);
    else {
      const i2 = "__type__" in r ? r.__type__ : typeof r;
      return n.error = `Unknown __type__ in select: ${i2}`, n;
    }
  }
  return n;
};
function F(e) {
  var n, o;
  return ((n = e.measures) == null ? void 0 : n.length) > 0 && e.measures.some((t) => (t == null ? void 0 : t.__type__) !== T) ? "Unexpected type passed to `measures` in loadData function.  Expected an array of type Measure." : ((o = e.dimensions) == null ? void 0 : o.length) > 0 && e.dimensions.some((t) => (t == null ? void 0 : t.__type__) !== b) ? "Unexpected type passed to `dimensions` in loadData function.  Expected an array of type Dimension." : null;
}
function U$1(e) {
  const n = {
    dimensions: [],
    measures: [],
    timeDimensions: [],
    usingSelect: false
  };
  if (e.select) {
    n.usingSelect = true;
    const o = O(e.select);
    if (o.error)
      return n.error = o.error, n;
    n.dimensions = o.dimensions, n.measures = o.measures, n.timeDimensions = o.timeDimensions;
  } else {
    const o = F(e);
    if (o)
      return n.error = o, n;
    n.dimensions = c(e.dimensions, { mapFn: (t) => t }) ?? [], n.measures = c(e.measures, { mapFn: (t) => t }) ?? [], n.timeDimensions = c(e.timeDimensions, { filterFn: Boolean }) ?? [];
  }
  return n.dimensions = y(n.dimensions), n.measures = y(n.measures), n;
}
function V(e, n, o, t) {
  const r = M$1(e ?? [], n, o, t);
  return r.length > 0 ? `Cannot order by ${r.join(", ")} as no such ${r.length === 1 ? "property" : "properties"} has been loaded.` : null;
}
function w(e) {
  if (e) {
    const n = e.map((o, t) => ({
      index: t,
      message: I$1(o)
    })).filter((o) => !!o.message);
    if (n.length)
      return n.map((o) => `filter[${o.index}] is not valid: ${o.message}`).join(`
`);
  }
  return null;
}
function R$1(e, n, o, t, r) {
  var s;
  return {
    inputName: e.from.inputName,
    datasetId: e.from.datasetId,
    embeddableId: e.from.embeddableId,
    dimensions: c(n, { mapFn: E$1 }) ?? [],
    measures: c(o, { mapFn: E$1 }) ?? [],
    order: r,
    timeDimensions: c(t, { filterFn: S$1 }) ?? [],
    offset: e.offset,
    limit: e.limit,
    variableValues: e.from.variableValues,
    filters: (s = e.filters) == null ? void 0 : s.map((i2) => ({
      member: i2.property.name,
      operator: i2.operator,
      values: N(i2.value)
    }))
  };
}
const $ = "embeddable-event:load-data", j = (e, n, o, t) => {
  if (!n.from)
    return "No dataset selected";
  if (n.select && (n.dimensions || n.measures || n.timeDimensions))
    return "loadData expects you to use either dimensions, timeDimensions and measures, or select. You cannot use both together.";
  const r = U$1(n);
  if (r.error)
    return r.error;
  const { dimensions: s, measures: i2, timeDimensions: a } = r;
  if (!(s.length || i2.length || a.length))
    return "At least a dimension or a measure should be selected.";
  const l = V(n.orderBy, s, i2, a);
  if (l)
    return l;
  const p2 = w(n.filters);
  if (p2)
    return p2;
  const B = c(n.orderBy, {
    mapFn: (_) => [_.property.name, _.direction]
  }), L2 = R$1(n, s, i2, a, B);
  e.dispatchEvent(new CustomEvent($, {
    bubbles: true,
    composed: true,
    detail: {
      query: L2,
      componentId: o,
      propertyName: t
    }
  }));
}, v = (e) => ({
  requestParams: e,
  dataLoader: j
}), h = (e) => (e == null ? void 0 : e.__type__) === b, A$1 = (e) => (e == null ? void 0 : e.__type__) === T, D$1 = (e) => "dimension" in (e ?? {}) && !("__type__" in e), x = (e) => h(e) || A$1(e), g = (e, n) => ({
  operation: e,
  value: n ?? null,
  __embeddableVariableMeta: true
}), ee$1 = {
  noFilter: () => g("NO_FILTER"),
  of: (e) => g("VALUE", e)
}, H = () => globalThis.__EMBEDDABLE_BUNDLE_HASH__ ?? null, ne = (e, n) => {
  if (Z.includes(e))
    throw new Error(`Type ${e} is part of the nativeTypes and cannot be defined`, { cause: "sdk" });
  const o = {
    __embeddableType: "custom",
    toString: () => e,
    typeConfig: n
  }, t = H();
  globalThis.__EMBEDDABLE__ = globalThis.__EMBEDDABLE__ || {};
  const r = t ? globalThis.__EMBEDDABLE__[t] = globalThis.__EMBEDDABLE__[t] || {} : globalThis.__EMBEDDABLE__;
  return r.types = r.types || {}, r.types = {
    ...r.types,
    [e]: {
      name: e,
      ...n
    }
  }, o;
}, Y$1 = "string", k = "number", P = "boolean", C = "time", G = "timeRange", z$1 = "granularity", Q$1 = "dataset", J = "measure", K = "dimension", W$1 = "dimensionOrMeasure", X = [
  Y$1,
  k,
  P,
  C,
  G,
  z$1
], Z = [
  ...X,
  Q$1,
  J,
  K,
  W$1
], q = () => globalThis.__EMBEDDABLE_BUNDLE_HASH__ ?? null, te$1 = (e, n) => {
  var r, s, i2, a;
  const o = q();
  globalThis.__EMBEDDABLE__ ?? (globalThis.__EMBEDDABLE__ = {});
  const t = o ? (r = globalThis.__EMBEDDABLE__)[o] ?? (r[o] = {}) : globalThis.__EMBEDDABLE__;
  if (typeof e == "string")
    t.nativeTypes = t.nativeTypes || {}, t.nativeTypes[e] = t.nativeTypes[e] || {}, (s = t.nativeTypes[e]).options ?? (s.options = []), t.nativeTypes[e].options.push(n);
  else {
    const d = e.toString();
    if (!((i2 = t == null ? void 0 : t.types) != null && i2[d]))
      return;
    (a = t.types[d]).options ?? (a.options = []), t.types[d].options.push(n);
  }
};
m("string", {
  transform: (e) => e,
  optionLabel: (e) => Array.isArray(e) ? `[${e.map((n) => `"${n}"`).join(",")}]` : `"${e}"`
});
m("number", {
  transform: (e) => Array.isArray(e) ? e : e && Number(e),
  optionLabel: (e) => Array.isArray(e) ? `[${e.join(",")}]` : (e == null ? void 0 : e.toLocaleString(f)) ?? ""
});
m("boolean", {
  transform: (e) => e === "true" || e === true,
  optionLabel: (e) => e ? "true" : "false"
});
m("time", {
  transform: (e) => {
    const n = e != null && e.date ? new Date(e.date) : void 0;
    return {
      date: n && n.toString() !== "Invalid Date" ? n : void 0,
      relativeTimeString: e == null ? void 0 : e.relativeTimeString
    };
  },
  optionLabel: (e) => {
    var n;
    return e ? e != null && e.date ? ((n = e.date) == null ? void 0 : n.toLocaleDateString(f)) ?? e.date.toLocaleString() : e.relativeTimeString : "";
  }
});
m("timeRange", {
  transform: (e) => {
    if (!e)
      return;
    const [n, o] = [e == null ? void 0 : e.from, e == null ? void 0 : e.to], t = new Date(n), r = new Date(o);
    return {
      from: t.toString() !== "Invalid Date" ? t : void 0,
      to: r.toString() !== "Invalid Date" ? r : void 0,
      relativeTimeString: e == null ? void 0 : e.relativeTimeString
    };
  },
  optionLabel: (e) => {
    var n, o, t, r;
    return e ? e != null && e.from && (e != null && e.to) ? `${((n = e.from) == null ? void 0 : n.toLocaleDateString(f)) ?? ((o = e.from) == null ? void 0 : o.toLocaleString())},${((t = e.to) == null ? void 0 : t.toLocaleDateString(f)) ?? ((r = e.to) == null ? void 0 : r.toLocaleString())}` : e == null ? void 0 : e.relativeTimeString : "";
  }
});
m("granularity", {
  transform: (e) => e,
  optionLabel: (e) => e
});
m("dataset");
m("measure");
m("dimension");
m("dimensionOrMeasure");
const U = "-", se = (e) => {
  const r = ie(e), {
    conflictingClassGroups: t,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (a) => {
      const s = a.split(U);
      return s[0] === "" && s.length !== 1 && s.shift(), D(s, r) || le(a);
    },
    getConflictingClassGroupIds: (a, s) => {
      const b2 = t[a] || [];
      return s && o[a] ? [...b2, ...o[a]] : b2;
    }
  };
}, D = (e, r) => {
  var a;
  if (e.length === 0)
    return r.classGroupId;
  const t = e[0], o = r.nextPart.get(t), l = o ? D(e.slice(1), o) : void 0;
  if (l)
    return l;
  if (r.validators.length === 0)
    return;
  const n = e.join(U);
  return (a = r.validators.find(({
    validator: s
  }) => s(n))) == null ? void 0 : a.classGroupId;
}, Q = /^\[(.+)\]$/, le = (e) => {
  if (Q.test(e)) {
    const r = Q.exec(e)[1], t = r == null ? void 0 : r.substring(0, r.indexOf(":"));
    if (t)
      return "arbitrary.." + t;
  }
}, ie = (e) => {
  const {
    theme: r,
    prefix: t
  } = e, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return ce(Object.entries(e.classGroups), t).forEach(([n, a]) => {
    L(a, o, n, r);
  }), o;
}, L = (e, r, t, o) => {
  e.forEach((l) => {
    if (typeof l == "string") {
      const n = l === "" ? r : Y(r, l);
      n.classGroupId = t;
      return;
    }
    if (typeof l == "function") {
      if (ae(l)) {
        L(l(o), r, t, o);
        return;
      }
      r.validators.push({
        validator: l,
        classGroupId: t
      });
      return;
    }
    Object.entries(l).forEach(([n, a]) => {
      L(a, Y(r, n), t, o);
    });
  });
}, Y = (e, r) => {
  let t = e;
  return r.split(U).forEach((o) => {
    t.nextPart.has(o) || t.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), t = t.nextPart.get(o);
  }), t;
}, ae = (e) => e.isThemeGetter, ce = (e, r) => r ? e.map(([t, o]) => {
  const l = o.map((n) => typeof n == "string" ? r + n : typeof n == "object" ? Object.fromEntries(Object.entries(n).map(([a, s]) => [r + a, s])) : n);
  return [t, l];
}) : e, de = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let r = 0, t = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  const l = (n, a) => {
    t.set(n, a), r++, r > e && (r = 0, o = t, t = /* @__PURE__ */ new Map());
  };
  return {
    get(n) {
      let a = t.get(n);
      if (a !== void 0)
        return a;
      if ((a = o.get(n)) !== void 0)
        return l(n, a), a;
    },
    set(n, a) {
      t.has(n) ? t.set(n, a) : l(n, a);
    }
  };
}, ee = "!", pe = (e) => {
  const {
    separator: r,
    experimentalParseClassName: t
  } = e, o = r.length === 1, l = r[0], n = r.length, a = (s) => {
    const b2 = [];
    let x2 = 0, d = 0, g2;
    for (let m2 = 0; m2 < s.length; m2++) {
      let w2 = s[m2];
      if (x2 === 0) {
        if (w2 === l && (o || s.slice(m2, m2 + n) === r)) {
          b2.push(s.slice(d, m2)), d = m2 + n;
          continue;
        }
        if (w2 === "/") {
          g2 = m2;
          continue;
        }
      }
      w2 === "[" ? x2++ : w2 === "]" && x2--;
    }
    const c2 = b2.length === 0 ? s : s.substring(d), h2 = c2.startsWith(ee), y2 = h2 ? c2.substring(1) : c2, f2 = g2 && g2 > d ? g2 - d : void 0;
    return {
      modifiers: b2,
      hasImportantModifier: h2,
      baseClassName: y2,
      maybePostfixModifierPosition: f2
    };
  };
  return t ? (s) => t({
    className: s,
    parseClassName: a
  }) : a;
}, ue = (e) => {
  if (e.length <= 1)
    return e;
  const r = [];
  let t = [];
  return e.forEach((o) => {
    o[0] === "[" ? (r.push(...t.sort(), o), t = []) : t.push(o);
  }), r.push(...t.sort()), r;
}, be = (e) => ({
  cache: de(e.cacheSize),
  parseClassName: pe(e),
  ...se(e)
}), ge = /\s+/, fe = (e, r) => {
  const {
    parseClassName: t,
    getClassGroupId: o,
    getConflictingClassGroupIds: l
  } = r, n = [], a = e.trim().split(ge);
  let s = "";
  for (let b2 = a.length - 1; b2 >= 0; b2 -= 1) {
    const x2 = a[b2], {
      modifiers: d,
      hasImportantModifier: g2,
      baseClassName: c2,
      maybePostfixModifierPosition: h2
    } = t(x2);
    let y2 = !!h2, f2 = o(y2 ? c2.substring(0, h2) : c2);
    if (!f2) {
      if (!y2) {
        s = x2 + (s.length > 0 ? " " + s : s);
        continue;
      }
      if (f2 = o(c2), !f2) {
        s = x2 + (s.length > 0 ? " " + s : s);
        continue;
      }
      y2 = false;
    }
    const m2 = ue(d).join(":"), w2 = g2 ? m2 + ee : m2, v2 = w2 + f2;
    if (n.includes(v2))
      continue;
    n.push(v2);
    const G2 = l(f2, y2);
    for (let j2 = 0; j2 < G2.length; ++j2) {
      const N2 = G2[j2];
      n.push(w2 + N2);
    }
    s = x2 + (s.length > 0 ? " " + s : s);
  }
  return s;
};
function me() {
  let e = 0, r, t, o = "";
  for (; e < arguments.length; )
    (r = arguments[e++]) && (t = re(r)) && (o && (o += " "), o += t);
  return o;
}
const re = (e) => {
  if (typeof e == "string")
    return e;
  let r, t = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (r = re(e[o])) && (t && (t += " "), t += r);
  return t;
};
function he(e, ...r) {
  let t, o, l, n = a;
  function a(b2) {
    const x2 = r.reduce((d, g2) => g2(d), e());
    return t = be(x2), o = t.cache.get, l = t.cache.set, n = s, s(b2);
  }
  function s(b2) {
    const x2 = o(b2);
    if (x2)
      return x2;
    const d = fe(b2, t);
    return l(b2, d), d;
  }
  return function() {
    return n(me.apply(null, arguments));
  };
}
const p = (e) => {
  const r = (t) => t[e] || [];
  return r.isThemeGetter = true, r;
}, te = /^\[(?:([a-z-]+):)?(.+)\]$/i, xe = /^\d+\/\d+$/, ye = /* @__PURE__ */ new Set(["px", "full", "screen"]), we = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ve = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Ce = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, ke = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, ze = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, z = (e) => M(e) || ye.has(e) || xe.test(e), A = (e) => R(e, "length", Ie), M = (e) => !!e && !Number.isNaN(Number(e)), W = (e) => R(e, "number", M), I = (e) => !!e && Number.isInteger(Number(e)), Ae = (e) => e.endsWith("%") && M(e.slice(0, -1)), i = (e) => te.test(e), S = (e) => we.test(e), Se = /* @__PURE__ */ new Set(["length", "size", "percentage"]), je = (e) => R(e, Se, oe), Me = (e) => R(e, "position", oe), Re = /* @__PURE__ */ new Set(["image", "url"]), Ge = (e) => R(e, Re, Ne), Pe = (e) => R(e, "", Ee), E = () => true, R = (e, r, t) => {
  const o = te.exec(e);
  return o ? o[1] ? typeof r == "string" ? o[1] === r : r.has(o[1]) : t(o[2]) : false;
}, Ie = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  ve.test(e) && !Ce.test(e)
), oe = () => false, Ee = (e) => ke.test(e), Ne = (e) => ze.test(e), Te = () => {
  const e = p("colors"), r = p("spacing"), t = p("blur"), o = p("brightness"), l = p("borderColor"), n = p("borderRadius"), a = p("borderSpacing"), s = p("borderWidth"), b2 = p("contrast"), x2 = p("grayscale"), d = p("hueRotate"), g2 = p("invert"), c2 = p("gap"), h2 = p("gradientColorStops"), y2 = p("gradientColorStopPositions"), f2 = p("inset"), m2 = p("margin"), w2 = p("opacity"), v2 = p("padding"), G2 = p("saturate"), j2 = p("scale"), N2 = p("sepia"), F2 = p("skew"), Z2 = p("space"), q2 = p("translate"), V2 = () => ["auto", "contain", "none"], B = () => ["auto", "hidden", "clip", "visible", "scroll"], O2 = () => ["auto", i, r], u2 = () => [i, r], J2 = () => ["", z, A], T2 = () => ["auto", M, i], X2 = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], _ = () => ["solid", "dashed", "dotted", "double", "none"], H2 = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], $2 = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], P2 = () => ["", "0", i], K2 = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], C2 = () => [M, i];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [E],
      spacing: [z, A],
      blur: ["none", "", S, i],
      brightness: C2(),
      borderColor: [e],
      borderRadius: ["none", "", "full", S, i],
      borderSpacing: u2(),
      borderWidth: J2(),
      contrast: C2(),
      grayscale: P2(),
      hueRotate: C2(),
      invert: P2(),
      gap: u2(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Ae, A],
      inset: O2(),
      margin: O2(),
      opacity: C2(),
      padding: u2(),
      saturate: C2(),
      scale: C2(),
      sepia: P2(),
      skew: C2(),
      space: u2(),
      translate: u2()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", i]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [S]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": K2()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": K2()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...X2(), i]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: B()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": B()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": B()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: V2()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": V2()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": V2()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [f2]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [f2]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [f2]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [f2]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [f2]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [f2]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [f2]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [f2]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [f2]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", I, i]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: O2()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", i]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: P2()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: P2()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", I, i]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [E]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", I, i]
        }, i]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": T2()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": T2()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [E]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [I, i]
        }, i]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": T2()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": T2()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", i]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", i]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [c2]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [c2]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [c2]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...$2()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...$2(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...$2(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [v2]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [v2]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [v2]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [v2]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [v2]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [v2]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [v2]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [v2]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [v2]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [m2]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [m2]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [m2]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [m2]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [m2]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [m2]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [m2]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [m2]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [m2]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [Z2]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [Z2]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", i, r]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [i, r, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [i, r, "none", "full", "min", "max", "fit", "prose", {
          screen: [S]
        }, S]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [i, r, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [i, r, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [i, r, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [i, r, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", S, A]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", W]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [E]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", i]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", M, W]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", z, i]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", i]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", i]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [w2]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [w2]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [..._(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", z, A]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", z, i]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: u2()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", i]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", i]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [w2]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...X2(), Me]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", je]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Ge]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [y2]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [y2]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [y2]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [h2]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [h2]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [h2]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [n]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [n]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [n]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [n]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [n]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [n]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [n]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [n]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [n]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [n]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [n]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [n]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [n]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [n]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [n]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [s]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [s]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [s]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [s]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [s]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [s]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [s]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [s]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [s]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [w2]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [..._(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [s]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [s]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [w2]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: _()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [l]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [l]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [l]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [l]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [l]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [l]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [l]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [l]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [l]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [l]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ..._()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [z, i]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [z, A]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: J2()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [w2]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [z, A]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", S, Pe]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [E]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [w2]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...H2(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": H2()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [t]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [o]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [b2]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", S, i]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [x2]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [d]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [g2]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [G2]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [N2]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [t]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [o]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [b2]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [x2]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [d]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [g2]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [w2]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [G2]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [N2]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [a]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [a]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [a]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", i]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: C2()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", i]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: C2()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", i]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [j2]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [j2]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [j2]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [I, i]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [q2]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [q2]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [F2]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [F2]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", i]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", i]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": u2()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": u2()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": u2()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": u2()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": u2()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": u2()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": u2()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": u2()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": u2()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": u2()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": u2()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": u2()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": u2()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": u2()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": u2()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": u2()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": u2()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": u2()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", i]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [z, A, W]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}, _e = /* @__PURE__ */ he(Te), Oe = (e, r, t, o, l) => {
  if (l && l(true), !r) {
    l && l(false);
    return;
  }
  const n = o.replace(/([^a-zA-Z0-9 ]+)/gi, "-"), a = (() => {
    const d = {}, g2 = (c2) => {
      ["measure", "dimension"].includes(c2 == null ? void 0 : c2.__type__) && (d[c2.name] = c2.title);
    };
    for (const [c2, h2] of Object.entries(e))
      Array.isArray(h2) ? h2.forEach(g2) : g2(h2);
    return d;
  })(), s = (d) => d.map(
    (g2) => g2.map(String).map((c2) => c2.replaceAll('"', '""')).map((c2) => `"${c2}"`).join(",")
    // comma-separated
  ).join(`\r
`), b2 = (d, g2, c2) => {
    const h2 = new Blob([d], { type: c2 }), y2 = URL.createObjectURL(h2), f2 = document.createElement("a");
    f2.href = y2, f2.setAttribute("download", g2), f2.click(), l && l(false);
  }, x2 = () => {
    const d = [], g2 = Object.keys(r[0]);
    return d.push(g2.map((c2) => a[c2] || c2)), r == null || r.map((c2) => {
      const h2 = g2.map((y2) => c2[y2]);
      d.push(h2);
    }), t == null || t.map((c2) => {
      const h2 = g2.map((y2) => c2[y2]);
      d.push(h2);
    }), s(d);
  };
  return setTimeout(() => {
    const d = (/* @__PURE__ */ new Date()).toISOString();
    b2(x2(), `${n}-${d}.csv`, "text/csv;charset=utf-8;");
  }, 200);
};
function $e({ show: e, className: r, size: t }) {
  const o = useTheme();
  return /* @__PURE__ */ j$1.jsxs(
    "svg",
    {
      className: _e(
        `absolute right-0 top-0 z-1 pointer-events-none spinner ${e ? "opacity-100" : "opacity-0"}`,
        r
      ),
      width: t || "24",
      height: t || "24",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ j$1.jsx("g", { clipPath: "url(#clip0_400_10215)", children: /* @__PURE__ */ j$1.jsx("g", { clipPath: "url(#clip1_400_10215)", children: /* @__PURE__ */ j$1.jsx(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M13.4475 2.54357C11.7603 2.28621 10.0351 2.48325 8.44944 3.11441C6.86379 3.74557 5.47506 4.78803 4.42629 6.13441C3.37753 7.4808 2.70664 9.08242 2.48274 10.7743C2.25883 12.4662 2.49001 14.1872 3.15245 15.7601C3.8149 17.3329 4.88466 18.7007 6.25155 19.7226C7.61844 20.7445 9.23304 21.3835 10.929 21.5739C11.5876 21.6478 12.0616 22.2416 11.9877 22.9002C11.9138 23.5589 11.32 24.0328 10.6614 23.9589C8.54135 23.721 6.5231 22.9222 4.81449 21.6448C3.10588 20.3675 1.76868 18.6577 0.940626 16.6916C0.112572 14.7256 -0.176398 12.5743 0.10348 10.4595C0.383359 8.34458 1.22197 6.34255 2.53293 4.65957C3.84389 2.97659 5.5798 1.67352 7.56186 0.884569C9.54393 0.0956166 11.7005 -0.150689 13.8094 0.171021C15.9183 0.492732 17.9033 1.37083 19.56 2.71486C21.2167 4.0589 22.4852 5.82028 23.2347 7.81758C23.4675 8.43807 23.1533 9.12984 22.5328 9.3627C21.9123 9.59555 21.2206 9.28131 20.9877 8.66082C20.3881 7.06298 19.3733 5.65388 18.048 4.57865C16.7226 3.50342 15.1346 2.80094 13.4475 2.54357Z",
            fill: o.svg.fillNormal
          }
        ) }) }),
        /* @__PURE__ */ j$1.jsxs("defs", { children: [
          /* @__PURE__ */ j$1.jsx("clipPath", { id: "clip0_400_10215", children: /* @__PURE__ */ j$1.jsx("rect", { width: "24", height: "24", fill: o.svg.fillBkg }) }),
          /* @__PURE__ */ j$1.jsx("clipPath", { id: "clip1_400_10215", children: /* @__PURE__ */ j$1.jsx("rect", { width: "24", height: "24", fill: o.svg.fillBkg }) })
        ] })
      ]
    }
  );
}

export { $e as $, A$1 as A, Oe as O, _e as _, ee$1 as e, h, ne as n, te$1 as t, v };
//# sourceMappingURL=Spinner-BeNoTciJ-DsMN3-m0-BGGztM1w.js.map

//# sourceMappingURL=Spinner-BeNoTciJ-DsMN3-m0-BGGztM1w.js.map