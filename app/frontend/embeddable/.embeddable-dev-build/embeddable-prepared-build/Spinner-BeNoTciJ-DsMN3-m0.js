import { j as j$1 } from "./jsx-runtime-CjQXaSqQ-CjMA1-fF.js";
import { u as useTheme } from "./index.esm-CVE60fla.js";
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
export {
  $e as $,
  A$1 as A,
  Oe as O,
  _e as _,
  ee$1 as e,
  h,
  ne as n,
  te$1 as t,
  v
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3Bpbm5lci1CZU5vVGNpSi1Ec01OMy1tMC5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL2NocmlzdG9waGVyY2FybHNvbi9mbHVpZC9kcm9wbGV0LWVtYmVkZGFibGUvYXBwL2Zyb250ZW5kL2VtYmVkZGFibGUvbm9kZV9tb2R1bGVzL0BlbWJlZGRhYmxlLmNvbS92YW5pbGxhLWNvbXBvbmVudHMvZGlzdC9pbmRleC5lc20tSkFoX0sxVkcuanMiLCIvVXNlcnMvY2hyaXN0b3BoZXJjYXJsc29uL2ZsdWlkL2Ryb3BsZXQtZW1iZWRkYWJsZS9hcHAvZnJvbnRlbmQvZW1iZWRkYWJsZS9ub2RlX21vZHVsZXMvQGVtYmVkZGFibGUuY29tL3ZhbmlsbGEtY29tcG9uZW50cy9kaXN0L1NwaW5uZXItQmVOb1RjaUouanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZiA9IFwiZW4tVVNcIiwgYyA9IChlLCB7IG1hcEZuOiBuID0gKHQpID0+IHQsIGZpbHRlckZuOiBvID0gQm9vbGVhbiB9KSA9PiB7XG4gIGlmICghZSlcbiAgICByZXR1cm47XG4gIGNvbnN0IHQgPSBlLmZpbHRlcihvKTtcbiAgaWYgKHQubGVuZ3RoICE9PSAwKVxuICAgIHJldHVybiB0Lm1hcChuKTtcbn0sIEUgPSAoZSkgPT4gZS5uYW1lLCBTID0gKGUpID0+ICEhKGUgJiYgZS5kaW1lbnNpb24gJiYgKGUuZ3JhbnVsYXJpdHkgfHwgZS5kYXRlUmFuZ2UpKSwgTSA9IChlLCBuLCBvLCB0KSA9PiB7XG4gIGNvbnN0IHIgPSBbXSwgcyA9IFtcbiAgICAuLi5bLi4ubywgLi4ubl0uZmlsdGVyKEJvb2xlYW4pLm1hcCgoaSkgPT4gaS5uYW1lKSxcbiAgICAuLi50LmZpbHRlcihCb29sZWFuKS5tYXAoKGkpID0+IGkuZGltZW5zaW9uKS5maWx0ZXIoQm9vbGVhbilcbiAgXTtcbiAgZm9yIChjb25zdCBpIG9mIGUpIHtcbiAgICBjb25zdCB7IG5hbWU6IGEgfSA9IGkucHJvcGVydHk7XG4gICAgcy5pbmNsdWRlcyhhKSB8fCByLnB1c2goYSk7XG4gIH1cbiAgcmV0dXJuIHI7XG59LCBtID0gKGUsIG4gPSB7fSkgPT4gKHtcbiAgX19lbWJlZGRhYmxlVHlwZTogXCJidWlsdC1pblwiLFxuICB0b1N0cmluZzogKCkgPT4gZSxcbiAgdHlwZUNvbmZpZzoge1xuICAgIGxhYmVsOiBlLFxuICAgIG9wdGlvbkxhYmVsOiAoKSA9PiBlLFxuICAgIC4uLm5cbiAgfVxufSksIEkgPSAoZSkgPT4ge1xuICBpZiAoIWUucHJvcGVydHkpXG4gICAgcmV0dXJuIFwiZmlsdGVyIHByb3BlcnR5IG11c3QgYmUgc2V0XCI7XG4gIGlmICghZS5vcGVyYXRvcilcbiAgICByZXR1cm4gXCJmaWx0ZXIgb3BlcmF0b3IgbXVzdCBiZSBzZXRcIjtcbn0sIE4gPSAoZSkgPT4ge1xuICBpZiAoZSA9PSBudWxsIHx8IHR5cGVvZiBlID09IFwic3RyaW5nXCIgfHwgdHlwZW9mIGUgPT0gXCJib29sZWFuXCIgfHwgdHlwZW9mIGUgPT0gXCJudW1iZXJcIiB8fCBlIGluc3RhbmNlb2YgRGF0ZSB8fCBBcnJheS5pc0FycmF5KGUpKVxuICAgIHJldHVybiBlO1xuICBpZiAoZSAhPSBudWxsICYmIGUucmVsYXRpdmVUaW1lU3RyaW5nKVxuICAgIHJldHVybiBlID09IG51bGwgPyB2b2lkIDAgOiBlLnJlbGF0aXZlVGltZVN0cmluZztcbiAgaWYgKE9iamVjdC5oYXNPd24oZSwgXCJkYXRlXCIpKVxuICAgIHJldHVybiBlID09IG51bGwgPyB2b2lkIDAgOiBlLmRhdGU7XG4gIGlmIChPYmplY3QuaGFzT3duKGUsIFwiZnJvbVwiKSB8fCBPYmplY3QuaGFzT3duKGUsIFwidG9cIikpIHtcbiAgICBjb25zdCBuID0gZTtcbiAgICByZXR1cm4gW24gPT0gbnVsbCA/IHZvaWQgMCA6IG4uZnJvbSwgbiA9PSBudWxsID8gdm9pZCAwIDogbi50b10uZmlsdGVyKEJvb2xlYW4pO1xuICB9XG59O1xuZnVuY3Rpb24geShlKSB7XG4gIGlmICghZSB8fCBlLmxlbmd0aCA9PT0gMClcbiAgICByZXR1cm4gW107XG4gIGNvbnN0IG4gPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuICByZXR1cm4gZS5maWx0ZXIoKG8pID0+IG4uaGFzKG8ubmFtZSkgPyAhMSA6IChuLmFkZChvLm5hbWUpLCAhMCkpO1xufVxuY29uc3QgYiA9IFwiZGltZW5zaW9uXCIsIFQgPSBcIm1lYXN1cmVcIiwgdSA9IChlKSA9PiBBcnJheS5pc0FycmF5KGUpID8gZS5mbGF0TWFwKHUpIDogW2VdLCBPID0gKGUpID0+IHtcbiAgdmFyIHQ7XG4gIGNvbnN0IG4gPSB7XG4gICAgZGltZW5zaW9uczogW10sXG4gICAgbWVhc3VyZXM6IFtdLFxuICAgIHRpbWVEaW1lbnNpb25zOiBbXVxuICB9O1xuICBpZiAoIWUpXG4gICAgcmV0dXJuIG47XG4gIGNvbnN0IG8gPSB1KGUpLmZpbHRlcihCb29sZWFuKTtcbiAgaWYgKCFvLmxlbmd0aClcbiAgICByZXR1cm4gbi5lcnJvciA9IFwic2VsZWN0IG11c3Qgbm90IGJlIGVtcHR5XCIsIG47XG4gIGZvciAoY29uc3QgciBvZiBvKSB7XG4gICAgaWYgKCEodHlwZW9mIHIgPT0gXCJvYmplY3RcIiAmJiAoeChyKSB8fCBEKHIpKSkpXG4gICAgICByZXR1cm4gbi5lcnJvciA9IFwic2VsZWN0IG11c3Qgb25seSBjb250YWluIERpbWVuc2lvbiwgTWVhc3VyZSBvciBUaW1lRGltZW5zaW9uIG9iamVjdHNcIiwgbjtcbiAgICBpZiAoRChyKSlcbiAgICAgIG4udGltZURpbWVuc2lvbnMucHVzaChyKTtcbiAgICBlbHNlIGlmIChoKHIpKSB7XG4gICAgICBjb25zdCBpID0gciwgYSA9ICh0ID0gaS5pbnB1dHMpID09IG51bGwgPyB2b2lkIDAgOiB0LmdyYW51bGFyaXR5O1xuICAgICAgaS5uYXRpdmVUeXBlID09PSBcInRpbWVcIiAmJiBhID8gbi50aW1lRGltZW5zaW9ucy5wdXNoKHtcbiAgICAgICAgZGltZW5zaW9uOiBpLm5hbWUsXG4gICAgICAgIGdyYW51bGFyaXR5OiBhLFxuICAgICAgICB0aXRsZTogaS50aXRsZVxuICAgICAgfSkgOiBuLmRpbWVuc2lvbnMucHVzaChpKTtcbiAgICB9IGVsc2UgaWYgKEEocikpXG4gICAgICBuLm1lYXN1cmVzLnB1c2gocik7XG4gICAgZWxzZSB7XG4gICAgICBjb25zdCBpID0gXCJfX3R5cGVfX1wiIGluIHIgPyByLl9fdHlwZV9fIDogdHlwZW9mIHI7XG4gICAgICByZXR1cm4gbi5lcnJvciA9IGBVbmtub3duIF9fdHlwZV9fIGluIHNlbGVjdDogJHtpfWAsIG47XG4gICAgfVxuICB9XG4gIHJldHVybiBuO1xufTtcbmZ1bmN0aW9uIEYoZSkge1xuICB2YXIgbiwgbztcbiAgcmV0dXJuICgobiA9IGUubWVhc3VyZXMpID09IG51bGwgPyB2b2lkIDAgOiBuLmxlbmd0aCkgPiAwICYmIGUubWVhc3VyZXMuc29tZSgodCkgPT4gKHQgPT0gbnVsbCA/IHZvaWQgMCA6IHQuX190eXBlX18pICE9PSBUKSA/IFwiVW5leHBlY3RlZCB0eXBlIHBhc3NlZCB0byBgbWVhc3VyZXNgIGluIGxvYWREYXRhIGZ1bmN0aW9uLiAgRXhwZWN0ZWQgYW4gYXJyYXkgb2YgdHlwZSBNZWFzdXJlLlwiIDogKChvID0gZS5kaW1lbnNpb25zKSA9PSBudWxsID8gdm9pZCAwIDogby5sZW5ndGgpID4gMCAmJiBlLmRpbWVuc2lvbnMuc29tZSgodCkgPT4gKHQgPT0gbnVsbCA/IHZvaWQgMCA6IHQuX190eXBlX18pICE9PSBiKSA/IFwiVW5leHBlY3RlZCB0eXBlIHBhc3NlZCB0byBgZGltZW5zaW9uc2AgaW4gbG9hZERhdGEgZnVuY3Rpb24uICBFeHBlY3RlZCBhbiBhcnJheSBvZiB0eXBlIERpbWVuc2lvbi5cIiA6IG51bGw7XG59XG5mdW5jdGlvbiBVKGUpIHtcbiAgY29uc3QgbiA9IHtcbiAgICBkaW1lbnNpb25zOiBbXSxcbiAgICBtZWFzdXJlczogW10sXG4gICAgdGltZURpbWVuc2lvbnM6IFtdLFxuICAgIHVzaW5nU2VsZWN0OiAhMVxuICB9O1xuICBpZiAoZS5zZWxlY3QpIHtcbiAgICBuLnVzaW5nU2VsZWN0ID0gITA7XG4gICAgY29uc3QgbyA9IE8oZS5zZWxlY3QpO1xuICAgIGlmIChvLmVycm9yKVxuICAgICAgcmV0dXJuIG4uZXJyb3IgPSBvLmVycm9yLCBuO1xuICAgIG4uZGltZW5zaW9ucyA9IG8uZGltZW5zaW9ucywgbi5tZWFzdXJlcyA9IG8ubWVhc3VyZXMsIG4udGltZURpbWVuc2lvbnMgPSBvLnRpbWVEaW1lbnNpb25zO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG8gPSBGKGUpO1xuICAgIGlmIChvKVxuICAgICAgcmV0dXJuIG4uZXJyb3IgPSBvLCBuO1xuICAgIG4uZGltZW5zaW9ucyA9IGMoZS5kaW1lbnNpb25zLCB7IG1hcEZuOiAodCkgPT4gdCB9KSA/PyBbXSwgbi5tZWFzdXJlcyA9IGMoZS5tZWFzdXJlcywgeyBtYXBGbjogKHQpID0+IHQgfSkgPz8gW10sIG4udGltZURpbWVuc2lvbnMgPSBjKGUudGltZURpbWVuc2lvbnMsIHsgZmlsdGVyRm46IEJvb2xlYW4gfSkgPz8gW107XG4gIH1cbiAgcmV0dXJuIG4uZGltZW5zaW9ucyA9IHkobi5kaW1lbnNpb25zKSwgbi5tZWFzdXJlcyA9IHkobi5tZWFzdXJlcyksIG47XG59XG5mdW5jdGlvbiBWKGUsIG4sIG8sIHQpIHtcbiAgY29uc3QgciA9IE0oZSA/PyBbXSwgbiwgbywgdCk7XG4gIHJldHVybiByLmxlbmd0aCA+IDAgPyBgQ2Fubm90IG9yZGVyIGJ5ICR7ci5qb2luKFwiLCBcIil9IGFzIG5vIHN1Y2ggJHtyLmxlbmd0aCA9PT0gMSA/IFwicHJvcGVydHlcIiA6IFwicHJvcGVydGllc1wifSBoYXMgYmVlbiBsb2FkZWQuYCA6IG51bGw7XG59XG5mdW5jdGlvbiB3KGUpIHtcbiAgaWYgKGUpIHtcbiAgICBjb25zdCBuID0gZS5tYXAoKG8sIHQpID0+ICh7XG4gICAgICBpbmRleDogdCxcbiAgICAgIG1lc3NhZ2U6IEkobylcbiAgICB9KSkuZmlsdGVyKChvKSA9PiAhIW8ubWVzc2FnZSk7XG4gICAgaWYgKG4ubGVuZ3RoKVxuICAgICAgcmV0dXJuIG4ubWFwKChvKSA9PiBgZmlsdGVyWyR7by5pbmRleH1dIGlzIG5vdCB2YWxpZDogJHtvLm1lc3NhZ2V9YCkuam9pbihgXG5gKTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cbmZ1bmN0aW9uIFIoZSwgbiwgbywgdCwgcikge1xuICB2YXIgcztcbiAgcmV0dXJuIHtcbiAgICBpbnB1dE5hbWU6IGUuZnJvbS5pbnB1dE5hbWUsXG4gICAgZGF0YXNldElkOiBlLmZyb20uZGF0YXNldElkLFxuICAgIGVtYmVkZGFibGVJZDogZS5mcm9tLmVtYmVkZGFibGVJZCxcbiAgICBkaW1lbnNpb25zOiBjKG4sIHsgbWFwRm46IEUgfSkgPz8gW10sXG4gICAgbWVhc3VyZXM6IGMobywgeyBtYXBGbjogRSB9KSA/PyBbXSxcbiAgICBvcmRlcjogcixcbiAgICB0aW1lRGltZW5zaW9uczogYyh0LCB7IGZpbHRlckZuOiBTIH0pID8/IFtdLFxuICAgIG9mZnNldDogZS5vZmZzZXQsXG4gICAgbGltaXQ6IGUubGltaXQsXG4gICAgdmFyaWFibGVWYWx1ZXM6IGUuZnJvbS52YXJpYWJsZVZhbHVlcyxcbiAgICBmaWx0ZXJzOiAocyA9IGUuZmlsdGVycykgPT0gbnVsbCA/IHZvaWQgMCA6IHMubWFwKChpKSA9PiAoe1xuICAgICAgbWVtYmVyOiBpLnByb3BlcnR5Lm5hbWUsXG4gICAgICBvcGVyYXRvcjogaS5vcGVyYXRvcixcbiAgICAgIHZhbHVlczogTihpLnZhbHVlKVxuICAgIH0pKVxuICB9O1xufVxuY29uc3QgJCA9IFwiZW1iZWRkYWJsZS1ldmVudDpsb2FkLWRhdGFcIiwgaiA9IChlLCBuLCBvLCB0KSA9PiB7XG4gIGlmICghbi5mcm9tKVxuICAgIHJldHVybiBcIk5vIGRhdGFzZXQgc2VsZWN0ZWRcIjtcbiAgaWYgKG4uc2VsZWN0ICYmIChuLmRpbWVuc2lvbnMgfHwgbi5tZWFzdXJlcyB8fCBuLnRpbWVEaW1lbnNpb25zKSlcbiAgICByZXR1cm4gXCJsb2FkRGF0YSBleHBlY3RzIHlvdSB0byB1c2UgZWl0aGVyIGRpbWVuc2lvbnMsIHRpbWVEaW1lbnNpb25zIGFuZCBtZWFzdXJlcywgb3Igc2VsZWN0LiBZb3UgY2Fubm90IHVzZSBib3RoIHRvZ2V0aGVyLlwiO1xuICBjb25zdCByID0gVShuKTtcbiAgaWYgKHIuZXJyb3IpXG4gICAgcmV0dXJuIHIuZXJyb3I7XG4gIGNvbnN0IHsgZGltZW5zaW9uczogcywgbWVhc3VyZXM6IGksIHRpbWVEaW1lbnNpb25zOiBhIH0gPSByO1xuICBpZiAoIShzLmxlbmd0aCB8fCBpLmxlbmd0aCB8fCBhLmxlbmd0aCkpXG4gICAgcmV0dXJuIFwiQXQgbGVhc3QgYSBkaW1lbnNpb24gb3IgYSBtZWFzdXJlIHNob3VsZCBiZSBzZWxlY3RlZC5cIjtcbiAgY29uc3QgbCA9IFYobi5vcmRlckJ5LCBzLCBpLCBhKTtcbiAgaWYgKGwpXG4gICAgcmV0dXJuIGw7XG4gIGNvbnN0IHAgPSB3KG4uZmlsdGVycyk7XG4gIGlmIChwKVxuICAgIHJldHVybiBwO1xuICBjb25zdCBCID0gYyhuLm9yZGVyQnksIHtcbiAgICBtYXBGbjogKF8pID0+IFtfLnByb3BlcnR5Lm5hbWUsIF8uZGlyZWN0aW9uXVxuICB9KSwgTCA9IFIobiwgcywgaSwgYSwgQik7XG4gIGUuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJCwge1xuICAgIGJ1YmJsZXM6ICEwLFxuICAgIGNvbXBvc2VkOiAhMCxcbiAgICBkZXRhaWw6IHtcbiAgICAgIHF1ZXJ5OiBMLFxuICAgICAgY29tcG9uZW50SWQ6IG8sXG4gICAgICBwcm9wZXJ0eU5hbWU6IHRcbiAgICB9XG4gIH0pKTtcbn0sIHYgPSAoZSkgPT4gKHtcbiAgcmVxdWVzdFBhcmFtczogZSxcbiAgZGF0YUxvYWRlcjogalxufSksIGggPSAoZSkgPT4gKGUgPT0gbnVsbCA/IHZvaWQgMCA6IGUuX190eXBlX18pID09PSBiLCBBID0gKGUpID0+IChlID09IG51bGwgPyB2b2lkIDAgOiBlLl9fdHlwZV9fKSA9PT0gVCwgRCA9IChlKSA9PiBcImRpbWVuc2lvblwiIGluIChlID8/IHt9KSAmJiAhKFwiX190eXBlX19cIiBpbiBlKSwgeCA9IChlKSA9PiBoKGUpIHx8IEEoZSksIGcgPSAoZSwgbikgPT4gKHtcbiAgb3BlcmF0aW9uOiBlLFxuICB2YWx1ZTogbiA/PyBudWxsLFxuICBfX2VtYmVkZGFibGVWYXJpYWJsZU1ldGE6ICEwXG59KSwgZWUgPSB7XG4gIG5vRmlsdGVyOiAoKSA9PiBnKFwiTk9fRklMVEVSXCIpLFxuICBvZjogKGUpID0+IGcoXCJWQUxVRVwiLCBlKVxufSwgSCA9ICgpID0+IGdsb2JhbFRoaXMuX19FTUJFRERBQkxFX0JVTkRMRV9IQVNIX18gPz8gbnVsbCwgbmUgPSAoZSwgbikgPT4ge1xuICBpZiAoWi5pbmNsdWRlcyhlKSlcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFR5cGUgJHtlfSBpcyBwYXJ0IG9mIHRoZSBuYXRpdmVUeXBlcyBhbmQgY2Fubm90IGJlIGRlZmluZWRgLCB7IGNhdXNlOiBcInNka1wiIH0pO1xuICBjb25zdCBvID0ge1xuICAgIF9fZW1iZWRkYWJsZVR5cGU6IFwiY3VzdG9tXCIsXG4gICAgdG9TdHJpbmc6ICgpID0+IGUsXG4gICAgdHlwZUNvbmZpZzogblxuICB9LCB0ID0gSCgpO1xuICBnbG9iYWxUaGlzLl9fRU1CRUREQUJMRV9fID0gZ2xvYmFsVGhpcy5fX0VNQkVEREFCTEVfXyB8fCB7fTtcbiAgY29uc3QgciA9IHQgPyBnbG9iYWxUaGlzLl9fRU1CRUREQUJMRV9fW3RdID0gZ2xvYmFsVGhpcy5fX0VNQkVEREFCTEVfX1t0XSB8fCB7fSA6IGdsb2JhbFRoaXMuX19FTUJFRERBQkxFX187XG4gIHJldHVybiByLnR5cGVzID0gci50eXBlcyB8fCB7fSwgci50eXBlcyA9IHtcbiAgICAuLi5yLnR5cGVzLFxuICAgIFtlXToge1xuICAgICAgbmFtZTogZSxcbiAgICAgIC4uLm5cbiAgICB9XG4gIH0sIG87XG59LCBZID0gXCJzdHJpbmdcIiwgayA9IFwibnVtYmVyXCIsIFAgPSBcImJvb2xlYW5cIiwgQyA9IFwidGltZVwiLCBHID0gXCJ0aW1lUmFuZ2VcIiwgeiA9IFwiZ3JhbnVsYXJpdHlcIiwgUSA9IFwiZGF0YXNldFwiLCBKID0gXCJtZWFzdXJlXCIsIEsgPSBcImRpbWVuc2lvblwiLCBXID0gXCJkaW1lbnNpb25Pck1lYXN1cmVcIiwgWCA9IFtcbiAgWSxcbiAgayxcbiAgUCxcbiAgQyxcbiAgRyxcbiAgelxuXSwgWiA9IFtcbiAgLi4uWCxcbiAgUSxcbiAgSixcbiAgSyxcbiAgV1xuXSwgcSA9ICgpID0+IGdsb2JhbFRoaXMuX19FTUJFRERBQkxFX0JVTkRMRV9IQVNIX18gPz8gbnVsbCwgdGUgPSAoZSwgbikgPT4ge1xuICB2YXIgciwgcywgaSwgYTtcbiAgY29uc3QgbyA9IHEoKTtcbiAgZ2xvYmFsVGhpcy5fX0VNQkVEREFCTEVfXyA/PyAoZ2xvYmFsVGhpcy5fX0VNQkVEREFCTEVfXyA9IHt9KTtcbiAgY29uc3QgdCA9IG8gPyAociA9IGdsb2JhbFRoaXMuX19FTUJFRERBQkxFX18pW29dID8/IChyW29dID0ge30pIDogZ2xvYmFsVGhpcy5fX0VNQkVEREFCTEVfXztcbiAgaWYgKHR5cGVvZiBlID09IFwic3RyaW5nXCIpXG4gICAgdC5uYXRpdmVUeXBlcyA9IHQubmF0aXZlVHlwZXMgfHwge30sIHQubmF0aXZlVHlwZXNbZV0gPSB0Lm5hdGl2ZVR5cGVzW2VdIHx8IHt9LCAocyA9IHQubmF0aXZlVHlwZXNbZV0pLm9wdGlvbnMgPz8gKHMub3B0aW9ucyA9IFtdKSwgdC5uYXRpdmVUeXBlc1tlXS5vcHRpb25zLnB1c2gobik7XG4gIGVsc2Uge1xuICAgIGNvbnN0IGQgPSBlLnRvU3RyaW5nKCk7XG4gICAgaWYgKCEoKGkgPSB0ID09IG51bGwgPyB2b2lkIDAgOiB0LnR5cGVzKSAhPSBudWxsICYmIGlbZF0pKVxuICAgICAgcmV0dXJuO1xuICAgIChhID0gdC50eXBlc1tkXSkub3B0aW9ucyA/PyAoYS5vcHRpb25zID0gW10pLCB0LnR5cGVzW2RdLm9wdGlvbnMucHVzaChuKTtcbiAgfVxufTtcbm0oXCJzdHJpbmdcIiwge1xuICB0cmFuc2Zvcm06IChlKSA9PiBlLFxuICBvcHRpb25MYWJlbDogKGUpID0+IEFycmF5LmlzQXJyYXkoZSkgPyBgWyR7ZS5tYXAoKG4pID0+IGBcIiR7bn1cImApLmpvaW4oXCIsXCIpfV1gIDogYFwiJHtlfVwiYFxufSk7XG5tKFwibnVtYmVyXCIsIHtcbiAgdHJhbnNmb3JtOiAoZSkgPT4gQXJyYXkuaXNBcnJheShlKSA/IGUgOiBlICYmIE51bWJlcihlKSxcbiAgb3B0aW9uTGFiZWw6IChlKSA9PiBBcnJheS5pc0FycmF5KGUpID8gYFske2Uuam9pbihcIixcIil9XWAgOiAoZSA9PSBudWxsID8gdm9pZCAwIDogZS50b0xvY2FsZVN0cmluZyhmKSkgPz8gXCJcIlxufSk7XG5tKFwiYm9vbGVhblwiLCB7XG4gIHRyYW5zZm9ybTogKGUpID0+IGUgPT09IFwidHJ1ZVwiIHx8IGUgPT09ICEwLFxuICBvcHRpb25MYWJlbDogKGUpID0+IGUgPyBcInRydWVcIiA6IFwiZmFsc2VcIlxufSk7XG5tKFwidGltZVwiLCB7XG4gIHRyYW5zZm9ybTogKGUpID0+IHtcbiAgICBjb25zdCBuID0gZSAhPSBudWxsICYmIGUuZGF0ZSA/IG5ldyBEYXRlKGUuZGF0ZSkgOiB2b2lkIDA7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGU6IG4gJiYgbi50b1N0cmluZygpICE9PSBcIkludmFsaWQgRGF0ZVwiID8gbiA6IHZvaWQgMCxcbiAgICAgIHJlbGF0aXZlVGltZVN0cmluZzogZSA9PSBudWxsID8gdm9pZCAwIDogZS5yZWxhdGl2ZVRpbWVTdHJpbmdcbiAgICB9O1xuICB9LFxuICBvcHRpb25MYWJlbDogKGUpID0+IHtcbiAgICB2YXIgbjtcbiAgICByZXR1cm4gZSA/IGUgIT0gbnVsbCAmJiBlLmRhdGUgPyAoKG4gPSBlLmRhdGUpID09IG51bGwgPyB2b2lkIDAgOiBuLnRvTG9jYWxlRGF0ZVN0cmluZyhmKSkgPz8gZS5kYXRlLnRvTG9jYWxlU3RyaW5nKCkgOiBlLnJlbGF0aXZlVGltZVN0cmluZyA6IFwiXCI7XG4gIH1cbn0pO1xubShcInRpbWVSYW5nZVwiLCB7XG4gIHRyYW5zZm9ybTogKGUpID0+IHtcbiAgICBpZiAoIWUpXG4gICAgICByZXR1cm47XG4gICAgY29uc3QgW24sIG9dID0gW2UgPT0gbnVsbCA/IHZvaWQgMCA6IGUuZnJvbSwgZSA9PSBudWxsID8gdm9pZCAwIDogZS50b10sIHQgPSBuZXcgRGF0ZShuKSwgciA9IG5ldyBEYXRlKG8pO1xuICAgIHJldHVybiB7XG4gICAgICBmcm9tOiB0LnRvU3RyaW5nKCkgIT09IFwiSW52YWxpZCBEYXRlXCIgPyB0IDogdm9pZCAwLFxuICAgICAgdG86IHIudG9TdHJpbmcoKSAhPT0gXCJJbnZhbGlkIERhdGVcIiA/IHIgOiB2b2lkIDAsXG4gICAgICByZWxhdGl2ZVRpbWVTdHJpbmc6IGUgPT0gbnVsbCA/IHZvaWQgMCA6IGUucmVsYXRpdmVUaW1lU3RyaW5nXG4gICAgfTtcbiAgfSxcbiAgb3B0aW9uTGFiZWw6IChlKSA9PiB7XG4gICAgdmFyIG4sIG8sIHQsIHI7XG4gICAgcmV0dXJuIGUgPyBlICE9IG51bGwgJiYgZS5mcm9tICYmIChlICE9IG51bGwgJiYgZS50bykgPyBgJHsoKG4gPSBlLmZyb20pID09IG51bGwgPyB2b2lkIDAgOiBuLnRvTG9jYWxlRGF0ZVN0cmluZyhmKSkgPz8gKChvID0gZS5mcm9tKSA9PSBudWxsID8gdm9pZCAwIDogby50b0xvY2FsZVN0cmluZygpKX0sJHsoKHQgPSBlLnRvKSA9PSBudWxsID8gdm9pZCAwIDogdC50b0xvY2FsZURhdGVTdHJpbmcoZikpID8/ICgociA9IGUudG8pID09IG51bGwgPyB2b2lkIDAgOiByLnRvTG9jYWxlU3RyaW5nKCkpfWAgOiBlID09IG51bGwgPyB2b2lkIDAgOiBlLnJlbGF0aXZlVGltZVN0cmluZyA6IFwiXCI7XG4gIH1cbn0pO1xubShcImdyYW51bGFyaXR5XCIsIHtcbiAgdHJhbnNmb3JtOiAoZSkgPT4gZSxcbiAgb3B0aW9uTGFiZWw6IChlKSA9PiBlXG59KTtcbm0oXCJkYXRhc2V0XCIpO1xubShcIm1lYXN1cmVcIik7XG5tKFwiZGltZW5zaW9uXCIpO1xubShcImRpbWVuc2lvbk9yTWVhc3VyZVwiKTtcbmV4cG9ydCB7XG4gIGVlIGFzIFYsXG4gIEEgYXMgYSxcbiAgdGUgYXMgYixcbiAgbmUgYXMgZCxcbiAgaCBhcyBpLFxuICB2IGFzIGxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5lc20tSkFoX0sxVkcuanMubWFwXG4iLCJpbXBvcnQgeyBqIGFzIGsgfSBmcm9tIFwiLi9qc3gtcnVudGltZS1DalFYYVNxUS5qc1wiO1xuaW1wb3J0IHsgdXNlVGhlbWUgYXMgbmUgfSBmcm9tIFwiQGVtYmVkZGFibGUuY29tL3JlYWN0XCI7XG5jb25zdCBVID0gXCItXCIsIHNlID0gKGUpID0+IHtcbiAgY29uc3QgciA9IGllKGUpLCB7XG4gICAgY29uZmxpY3RpbmdDbGFzc0dyb3VwczogdCxcbiAgICBjb25mbGljdGluZ0NsYXNzR3JvdXBNb2RpZmllcnM6IG9cbiAgfSA9IGU7XG4gIHJldHVybiB7XG4gICAgZ2V0Q2xhc3NHcm91cElkOiAoYSkgPT4ge1xuICAgICAgY29uc3QgcyA9IGEuc3BsaXQoVSk7XG4gICAgICByZXR1cm4gc1swXSA9PT0gXCJcIiAmJiBzLmxlbmd0aCAhPT0gMSAmJiBzLnNoaWZ0KCksIEQocywgcikgfHwgbGUoYSk7XG4gICAgfSxcbiAgICBnZXRDb25mbGljdGluZ0NsYXNzR3JvdXBJZHM6IChhLCBzKSA9PiB7XG4gICAgICBjb25zdCBiID0gdFthXSB8fCBbXTtcbiAgICAgIHJldHVybiBzICYmIG9bYV0gPyBbLi4uYiwgLi4ub1thXV0gOiBiO1xuICAgIH1cbiAgfTtcbn0sIEQgPSAoZSwgcikgPT4ge1xuICB2YXIgYTtcbiAgaWYgKGUubGVuZ3RoID09PSAwKVxuICAgIHJldHVybiByLmNsYXNzR3JvdXBJZDtcbiAgY29uc3QgdCA9IGVbMF0sIG8gPSByLm5leHRQYXJ0LmdldCh0KSwgbCA9IG8gPyBEKGUuc2xpY2UoMSksIG8pIDogdm9pZCAwO1xuICBpZiAobClcbiAgICByZXR1cm4gbDtcbiAgaWYgKHIudmFsaWRhdG9ycy5sZW5ndGggPT09IDApXG4gICAgcmV0dXJuO1xuICBjb25zdCBuID0gZS5qb2luKFUpO1xuICByZXR1cm4gKGEgPSByLnZhbGlkYXRvcnMuZmluZCgoe1xuICAgIHZhbGlkYXRvcjogc1xuICB9KSA9PiBzKG4pKSkgPT0gbnVsbCA/IHZvaWQgMCA6IGEuY2xhc3NHcm91cElkO1xufSwgUSA9IC9eXFxbKC4rKVxcXSQvLCBsZSA9IChlKSA9PiB7XG4gIGlmIChRLnRlc3QoZSkpIHtcbiAgICBjb25zdCByID0gUS5leGVjKGUpWzFdLCB0ID0gciA9PSBudWxsID8gdm9pZCAwIDogci5zdWJzdHJpbmcoMCwgci5pbmRleE9mKFwiOlwiKSk7XG4gICAgaWYgKHQpXG4gICAgICByZXR1cm4gXCJhcmJpdHJhcnkuLlwiICsgdDtcbiAgfVxufSwgaWUgPSAoZSkgPT4ge1xuICBjb25zdCB7XG4gICAgdGhlbWU6IHIsXG4gICAgcHJlZml4OiB0XG4gIH0gPSBlLCBvID0ge1xuICAgIG5leHRQYXJ0OiAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpLFxuICAgIHZhbGlkYXRvcnM6IFtdXG4gIH07XG4gIHJldHVybiBjZShPYmplY3QuZW50cmllcyhlLmNsYXNzR3JvdXBzKSwgdCkuZm9yRWFjaCgoW24sIGFdKSA9PiB7XG4gICAgTChhLCBvLCBuLCByKTtcbiAgfSksIG87XG59LCBMID0gKGUsIHIsIHQsIG8pID0+IHtcbiAgZS5mb3JFYWNoKChsKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBsID09IFwic3RyaW5nXCIpIHtcbiAgICAgIGNvbnN0IG4gPSBsID09PSBcIlwiID8gciA6IFkociwgbCk7XG4gICAgICBuLmNsYXNzR3JvdXBJZCA9IHQ7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0eXBlb2YgbCA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGlmIChhZShsKSkge1xuICAgICAgICBMKGwobyksIHIsIHQsIG8pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICByLnZhbGlkYXRvcnMucHVzaCh7XG4gICAgICAgIHZhbGlkYXRvcjogbCxcbiAgICAgICAgY2xhc3NHcm91cElkOiB0XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgT2JqZWN0LmVudHJpZXMobCkuZm9yRWFjaCgoW24sIGFdKSA9PiB7XG4gICAgICBMKGEsIFkociwgbiksIHQsIG8pO1xuICAgIH0pO1xuICB9KTtcbn0sIFkgPSAoZSwgcikgPT4ge1xuICBsZXQgdCA9IGU7XG4gIHJldHVybiByLnNwbGl0KFUpLmZvckVhY2goKG8pID0+IHtcbiAgICB0Lm5leHRQYXJ0LmhhcyhvKSB8fCB0Lm5leHRQYXJ0LnNldChvLCB7XG4gICAgICBuZXh0UGFydDogLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKSxcbiAgICAgIHZhbGlkYXRvcnM6IFtdXG4gICAgfSksIHQgPSB0Lm5leHRQYXJ0LmdldChvKTtcbiAgfSksIHQ7XG59LCBhZSA9IChlKSA9PiBlLmlzVGhlbWVHZXR0ZXIsIGNlID0gKGUsIHIpID0+IHIgPyBlLm1hcCgoW3QsIG9dKSA9PiB7XG4gIGNvbnN0IGwgPSBvLm1hcCgobikgPT4gdHlwZW9mIG4gPT0gXCJzdHJpbmdcIiA/IHIgKyBuIDogdHlwZW9mIG4gPT0gXCJvYmplY3RcIiA/IE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhuKS5tYXAoKFthLCBzXSkgPT4gW3IgKyBhLCBzXSkpIDogbik7XG4gIHJldHVybiBbdCwgbF07XG59KSA6IGUsIGRlID0gKGUpID0+IHtcbiAgaWYgKGUgPCAxKVxuICAgIHJldHVybiB7XG4gICAgICBnZXQ6ICgpID0+IHtcbiAgICAgIH0sXG4gICAgICBzZXQ6ICgpID0+IHtcbiAgICAgIH1cbiAgICB9O1xuICBsZXQgciA9IDAsIHQgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpLCBvID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbiAgY29uc3QgbCA9IChuLCBhKSA9PiB7XG4gICAgdC5zZXQobiwgYSksIHIrKywgciA+IGUgJiYgKHIgPSAwLCBvID0gdCwgdCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCkpO1xuICB9O1xuICByZXR1cm4ge1xuICAgIGdldChuKSB7XG4gICAgICBsZXQgYSA9IHQuZ2V0KG4pO1xuICAgICAgaWYgKGEgIT09IHZvaWQgMClcbiAgICAgICAgcmV0dXJuIGE7XG4gICAgICBpZiAoKGEgPSBvLmdldChuKSkgIT09IHZvaWQgMClcbiAgICAgICAgcmV0dXJuIGwobiwgYSksIGE7XG4gICAgfSxcbiAgICBzZXQobiwgYSkge1xuICAgICAgdC5oYXMobikgPyB0LnNldChuLCBhKSA6IGwobiwgYSk7XG4gICAgfVxuICB9O1xufSwgZWUgPSBcIiFcIiwgcGUgPSAoZSkgPT4ge1xuICBjb25zdCB7XG4gICAgc2VwYXJhdG9yOiByLFxuICAgIGV4cGVyaW1lbnRhbFBhcnNlQ2xhc3NOYW1lOiB0XG4gIH0gPSBlLCBvID0gci5sZW5ndGggPT09IDEsIGwgPSByWzBdLCBuID0gci5sZW5ndGgsIGEgPSAocykgPT4ge1xuICAgIGNvbnN0IGIgPSBbXTtcbiAgICBsZXQgeCA9IDAsIGQgPSAwLCBnO1xuICAgIGZvciAobGV0IG0gPSAwOyBtIDwgcy5sZW5ndGg7IG0rKykge1xuICAgICAgbGV0IHcgPSBzW21dO1xuICAgICAgaWYgKHggPT09IDApIHtcbiAgICAgICAgaWYgKHcgPT09IGwgJiYgKG8gfHwgcy5zbGljZShtLCBtICsgbikgPT09IHIpKSB7XG4gICAgICAgICAgYi5wdXNoKHMuc2xpY2UoZCwgbSkpLCBkID0gbSArIG47XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHcgPT09IFwiL1wiKSB7XG4gICAgICAgICAgZyA9IG07XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHcgPT09IFwiW1wiID8geCsrIDogdyA9PT0gXCJdXCIgJiYgeC0tO1xuICAgIH1cbiAgICBjb25zdCBjID0gYi5sZW5ndGggPT09IDAgPyBzIDogcy5zdWJzdHJpbmcoZCksIGggPSBjLnN0YXJ0c1dpdGgoZWUpLCB5ID0gaCA/IGMuc3Vic3RyaW5nKDEpIDogYywgZiA9IGcgJiYgZyA+IGQgPyBnIC0gZCA6IHZvaWQgMDtcbiAgICByZXR1cm4ge1xuICAgICAgbW9kaWZpZXJzOiBiLFxuICAgICAgaGFzSW1wb3J0YW50TW9kaWZpZXI6IGgsXG4gICAgICBiYXNlQ2xhc3NOYW1lOiB5LFxuICAgICAgbWF5YmVQb3N0Zml4TW9kaWZpZXJQb3NpdGlvbjogZlxuICAgIH07XG4gIH07XG4gIHJldHVybiB0ID8gKHMpID0+IHQoe1xuICAgIGNsYXNzTmFtZTogcyxcbiAgICBwYXJzZUNsYXNzTmFtZTogYVxuICB9KSA6IGE7XG59LCB1ZSA9IChlKSA9PiB7XG4gIGlmIChlLmxlbmd0aCA8PSAxKVxuICAgIHJldHVybiBlO1xuICBjb25zdCByID0gW107XG4gIGxldCB0ID0gW107XG4gIHJldHVybiBlLmZvckVhY2goKG8pID0+IHtcbiAgICBvWzBdID09PSBcIltcIiA/IChyLnB1c2goLi4udC5zb3J0KCksIG8pLCB0ID0gW10pIDogdC5wdXNoKG8pO1xuICB9KSwgci5wdXNoKC4uLnQuc29ydCgpKSwgcjtcbn0sIGJlID0gKGUpID0+ICh7XG4gIGNhY2hlOiBkZShlLmNhY2hlU2l6ZSksXG4gIHBhcnNlQ2xhc3NOYW1lOiBwZShlKSxcbiAgLi4uc2UoZSlcbn0pLCBnZSA9IC9cXHMrLywgZmUgPSAoZSwgcikgPT4ge1xuICBjb25zdCB7XG4gICAgcGFyc2VDbGFzc05hbWU6IHQsXG4gICAgZ2V0Q2xhc3NHcm91cElkOiBvLFxuICAgIGdldENvbmZsaWN0aW5nQ2xhc3NHcm91cElkczogbFxuICB9ID0gciwgbiA9IFtdLCBhID0gZS50cmltKCkuc3BsaXQoZ2UpO1xuICBsZXQgcyA9IFwiXCI7XG4gIGZvciAobGV0IGIgPSBhLmxlbmd0aCAtIDE7IGIgPj0gMDsgYiAtPSAxKSB7XG4gICAgY29uc3QgeCA9IGFbYl0sIHtcbiAgICAgIG1vZGlmaWVyczogZCxcbiAgICAgIGhhc0ltcG9ydGFudE1vZGlmaWVyOiBnLFxuICAgICAgYmFzZUNsYXNzTmFtZTogYyxcbiAgICAgIG1heWJlUG9zdGZpeE1vZGlmaWVyUG9zaXRpb246IGhcbiAgICB9ID0gdCh4KTtcbiAgICBsZXQgeSA9ICEhaCwgZiA9IG8oeSA/IGMuc3Vic3RyaW5nKDAsIGgpIDogYyk7XG4gICAgaWYgKCFmKSB7XG4gICAgICBpZiAoIXkpIHtcbiAgICAgICAgcyA9IHggKyAocy5sZW5ndGggPiAwID8gXCIgXCIgKyBzIDogcyk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKGYgPSBvKGMpLCAhZikge1xuICAgICAgICBzID0geCArIChzLmxlbmd0aCA+IDAgPyBcIiBcIiArIHMgOiBzKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICB5ID0gITE7XG4gICAgfVxuICAgIGNvbnN0IG0gPSB1ZShkKS5qb2luKFwiOlwiKSwgdyA9IGcgPyBtICsgZWUgOiBtLCB2ID0gdyArIGY7XG4gICAgaWYgKG4uaW5jbHVkZXModikpXG4gICAgICBjb250aW51ZTtcbiAgICBuLnB1c2godik7XG4gICAgY29uc3QgRyA9IGwoZiwgeSk7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBHLmxlbmd0aDsgKytqKSB7XG4gICAgICBjb25zdCBOID0gR1tqXTtcbiAgICAgIG4ucHVzaCh3ICsgTik7XG4gICAgfVxuICAgIHMgPSB4ICsgKHMubGVuZ3RoID4gMCA/IFwiIFwiICsgcyA6IHMpO1xuICB9XG4gIHJldHVybiBzO1xufTtcbmZ1bmN0aW9uIG1lKCkge1xuICBsZXQgZSA9IDAsIHIsIHQsIG8gPSBcIlwiO1xuICBmb3IgKDsgZSA8IGFyZ3VtZW50cy5sZW5ndGg7IClcbiAgICAociA9IGFyZ3VtZW50c1tlKytdKSAmJiAodCA9IHJlKHIpKSAmJiAobyAmJiAobyArPSBcIiBcIiksIG8gKz0gdCk7XG4gIHJldHVybiBvO1xufVxuY29uc3QgcmUgPSAoZSkgPT4ge1xuICBpZiAodHlwZW9mIGUgPT0gXCJzdHJpbmdcIilcbiAgICByZXR1cm4gZTtcbiAgbGV0IHIsIHQgPSBcIlwiO1xuICBmb3IgKGxldCBvID0gMDsgbyA8IGUubGVuZ3RoOyBvKyspXG4gICAgZVtvXSAmJiAociA9IHJlKGVbb10pKSAmJiAodCAmJiAodCArPSBcIiBcIiksIHQgKz0gcik7XG4gIHJldHVybiB0O1xufTtcbmZ1bmN0aW9uIGhlKGUsIC4uLnIpIHtcbiAgbGV0IHQsIG8sIGwsIG4gPSBhO1xuICBmdW5jdGlvbiBhKGIpIHtcbiAgICBjb25zdCB4ID0gci5yZWR1Y2UoKGQsIGcpID0+IGcoZCksIGUoKSk7XG4gICAgcmV0dXJuIHQgPSBiZSh4KSwgbyA9IHQuY2FjaGUuZ2V0LCBsID0gdC5jYWNoZS5zZXQsIG4gPSBzLCBzKGIpO1xuICB9XG4gIGZ1bmN0aW9uIHMoYikge1xuICAgIGNvbnN0IHggPSBvKGIpO1xuICAgIGlmICh4KVxuICAgICAgcmV0dXJuIHg7XG4gICAgY29uc3QgZCA9IGZlKGIsIHQpO1xuICAgIHJldHVybiBsKGIsIGQpLCBkO1xuICB9XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbihtZS5hcHBseShudWxsLCBhcmd1bWVudHMpKTtcbiAgfTtcbn1cbmNvbnN0IHAgPSAoZSkgPT4ge1xuICBjb25zdCByID0gKHQpID0+IHRbZV0gfHwgW107XG4gIHJldHVybiByLmlzVGhlbWVHZXR0ZXIgPSAhMCwgcjtcbn0sIHRlID0gL15cXFsoPzooW2Etei1dKyk6KT8oLispXFxdJC9pLCB4ZSA9IC9eXFxkK1xcL1xcZCskLywgeWUgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldChbXCJweFwiLCBcImZ1bGxcIiwgXCJzY3JlZW5cIl0pLCB3ZSA9IC9eKFxcZCsoXFwuXFxkKyk/KT8oeHN8c218bWR8bGd8eGwpJC8sIHZlID0gL1xcZCsoJXxweHxyP2VtfFtzZGxdP3YoW2h3aWJdfG1pbnxtYXgpfHB0fHBjfGlufGNtfG1tfGNhcHxjaHxleHxyP2xofGNxKHd8aHxpfGJ8bWlufG1heCkpfFxcYihjYWxjfG1pbnxtYXh8Y2xhbXApXFwoLitcXCl8XjAkLywgQ2UgPSAvXihyZ2JhP3xoc2xhP3xod2J8KG9rKT8obGFifGxjaCkpXFwoLitcXCkkLywga2UgPSAvXihpbnNldF8pPy0/KChcXGQrKT9cXC4/KFxcZCspW2Etel0rfDApXy0/KChcXGQrKT9cXC4/KFxcZCspW2Etel0rfDApLywgemUgPSAvXih1cmx8aW1hZ2V8aW1hZ2Utc2V0fGNyb3NzLWZhZGV8ZWxlbWVudHwocmVwZWF0aW5nLSk/KGxpbmVhcnxyYWRpYWx8Y29uaWMpLWdyYWRpZW50KVxcKC4rXFwpJC8sIHogPSAoZSkgPT4gTShlKSB8fCB5ZS5oYXMoZSkgfHwgeGUudGVzdChlKSwgQSA9IChlKSA9PiBSKGUsIFwibGVuZ3RoXCIsIEllKSwgTSA9IChlKSA9PiAhIWUgJiYgIU51bWJlci5pc05hTihOdW1iZXIoZSkpLCBXID0gKGUpID0+IFIoZSwgXCJudW1iZXJcIiwgTSksIEkgPSAoZSkgPT4gISFlICYmIE51bWJlci5pc0ludGVnZXIoTnVtYmVyKGUpKSwgQWUgPSAoZSkgPT4gZS5lbmRzV2l0aChcIiVcIikgJiYgTShlLnNsaWNlKDAsIC0xKSksIGkgPSAoZSkgPT4gdGUudGVzdChlKSwgUyA9IChlKSA9PiB3ZS50ZXN0KGUpLCBTZSA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KFtcImxlbmd0aFwiLCBcInNpemVcIiwgXCJwZXJjZW50YWdlXCJdKSwgamUgPSAoZSkgPT4gUihlLCBTZSwgb2UpLCBNZSA9IChlKSA9PiBSKGUsIFwicG9zaXRpb25cIiwgb2UpLCBSZSA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KFtcImltYWdlXCIsIFwidXJsXCJdKSwgR2UgPSAoZSkgPT4gUihlLCBSZSwgTmUpLCBQZSA9IChlKSA9PiBSKGUsIFwiXCIsIEVlKSwgRSA9ICgpID0+ICEwLCBSID0gKGUsIHIsIHQpID0+IHtcbiAgY29uc3QgbyA9IHRlLmV4ZWMoZSk7XG4gIHJldHVybiBvID8gb1sxXSA/IHR5cGVvZiByID09IFwic3RyaW5nXCIgPyBvWzFdID09PSByIDogci5oYXMob1sxXSkgOiB0KG9bMl0pIDogITE7XG59LCBJZSA9IChlKSA9PiAoXG4gIC8vIGBjb2xvckZ1bmN0aW9uUmVnZXhgIGNoZWNrIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIGNvbG9yIGZ1bmN0aW9ucyBjYW4gaGF2ZSBwZXJjZW50YWdlcyBpbiB0aGVtIHdoaWNoIHdoaWNoIHdvdWxkIGJlIGluY29ycmVjdGx5IGNsYXNzaWZpZWQgYXMgbGVuZ3Rocy5cbiAgLy8gRm9yIGV4YW1wbGUsIGBoc2woMCAwJSAwJSlgIHdvdWxkIGJlIGNsYXNzaWZpZWQgYXMgYSBsZW5ndGggd2l0aG91dCB0aGlzIGNoZWNrLlxuICAvLyBJIGNvdWxkIGFsc28gdXNlIGxvb2tiZWhpbmQgYXNzZXJ0aW9uIGluIGBsZW5ndGhVbml0UmVnZXhgIGJ1dCB0aGF0IGlzbid0IHN1cHBvcnRlZCB3aWRlbHkgZW5vdWdoLlxuICB2ZS50ZXN0KGUpICYmICFDZS50ZXN0KGUpXG4pLCBvZSA9ICgpID0+ICExLCBFZSA9IChlKSA9PiBrZS50ZXN0KGUpLCBOZSA9IChlKSA9PiB6ZS50ZXN0KGUpLCBUZSA9ICgpID0+IHtcbiAgY29uc3QgZSA9IHAoXCJjb2xvcnNcIiksIHIgPSBwKFwic3BhY2luZ1wiKSwgdCA9IHAoXCJibHVyXCIpLCBvID0gcChcImJyaWdodG5lc3NcIiksIGwgPSBwKFwiYm9yZGVyQ29sb3JcIiksIG4gPSBwKFwiYm9yZGVyUmFkaXVzXCIpLCBhID0gcChcImJvcmRlclNwYWNpbmdcIiksIHMgPSBwKFwiYm9yZGVyV2lkdGhcIiksIGIgPSBwKFwiY29udHJhc3RcIiksIHggPSBwKFwiZ3JheXNjYWxlXCIpLCBkID0gcChcImh1ZVJvdGF0ZVwiKSwgZyA9IHAoXCJpbnZlcnRcIiksIGMgPSBwKFwiZ2FwXCIpLCBoID0gcChcImdyYWRpZW50Q29sb3JTdG9wc1wiKSwgeSA9IHAoXCJncmFkaWVudENvbG9yU3RvcFBvc2l0aW9uc1wiKSwgZiA9IHAoXCJpbnNldFwiKSwgbSA9IHAoXCJtYXJnaW5cIiksIHcgPSBwKFwib3BhY2l0eVwiKSwgdiA9IHAoXCJwYWRkaW5nXCIpLCBHID0gcChcInNhdHVyYXRlXCIpLCBqID0gcChcInNjYWxlXCIpLCBOID0gcChcInNlcGlhXCIpLCBGID0gcChcInNrZXdcIiksIFogPSBwKFwic3BhY2VcIiksIHEgPSBwKFwidHJhbnNsYXRlXCIpLCBWID0gKCkgPT4gW1wiYXV0b1wiLCBcImNvbnRhaW5cIiwgXCJub25lXCJdLCBCID0gKCkgPT4gW1wiYXV0b1wiLCBcImhpZGRlblwiLCBcImNsaXBcIiwgXCJ2aXNpYmxlXCIsIFwic2Nyb2xsXCJdLCBPID0gKCkgPT4gW1wiYXV0b1wiLCBpLCByXSwgdSA9ICgpID0+IFtpLCByXSwgSiA9ICgpID0+IFtcIlwiLCB6LCBBXSwgVCA9ICgpID0+IFtcImF1dG9cIiwgTSwgaV0sIFggPSAoKSA9PiBbXCJib3R0b21cIiwgXCJjZW50ZXJcIiwgXCJsZWZ0XCIsIFwibGVmdC1ib3R0b21cIiwgXCJsZWZ0LXRvcFwiLCBcInJpZ2h0XCIsIFwicmlnaHQtYm90dG9tXCIsIFwicmlnaHQtdG9wXCIsIFwidG9wXCJdLCBfID0gKCkgPT4gW1wic29saWRcIiwgXCJkYXNoZWRcIiwgXCJkb3R0ZWRcIiwgXCJkb3VibGVcIiwgXCJub25lXCJdLCBIID0gKCkgPT4gW1wibm9ybWFsXCIsIFwibXVsdGlwbHlcIiwgXCJzY3JlZW5cIiwgXCJvdmVybGF5XCIsIFwiZGFya2VuXCIsIFwibGlnaHRlblwiLCBcImNvbG9yLWRvZGdlXCIsIFwiY29sb3ItYnVyblwiLCBcImhhcmQtbGlnaHRcIiwgXCJzb2Z0LWxpZ2h0XCIsIFwiZGlmZmVyZW5jZVwiLCBcImV4Y2x1c2lvblwiLCBcImh1ZVwiLCBcInNhdHVyYXRpb25cIiwgXCJjb2xvclwiLCBcImx1bWlub3NpdHlcIl0sICQgPSAoKSA9PiBbXCJzdGFydFwiLCBcImVuZFwiLCBcImNlbnRlclwiLCBcImJldHdlZW5cIiwgXCJhcm91bmRcIiwgXCJldmVubHlcIiwgXCJzdHJldGNoXCJdLCBQID0gKCkgPT4gW1wiXCIsIFwiMFwiLCBpXSwgSyA9ICgpID0+IFtcImF1dG9cIiwgXCJhdm9pZFwiLCBcImFsbFwiLCBcImF2b2lkLXBhZ2VcIiwgXCJwYWdlXCIsIFwibGVmdFwiLCBcInJpZ2h0XCIsIFwiY29sdW1uXCJdLCBDID0gKCkgPT4gW00sIGldO1xuICByZXR1cm4ge1xuICAgIGNhY2hlU2l6ZTogNTAwLFxuICAgIHNlcGFyYXRvcjogXCI6XCIsXG4gICAgdGhlbWU6IHtcbiAgICAgIGNvbG9yczogW0VdLFxuICAgICAgc3BhY2luZzogW3osIEFdLFxuICAgICAgYmx1cjogW1wibm9uZVwiLCBcIlwiLCBTLCBpXSxcbiAgICAgIGJyaWdodG5lc3M6IEMoKSxcbiAgICAgIGJvcmRlckNvbG9yOiBbZV0sXG4gICAgICBib3JkZXJSYWRpdXM6IFtcIm5vbmVcIiwgXCJcIiwgXCJmdWxsXCIsIFMsIGldLFxuICAgICAgYm9yZGVyU3BhY2luZzogdSgpLFxuICAgICAgYm9yZGVyV2lkdGg6IEooKSxcbiAgICAgIGNvbnRyYXN0OiBDKCksXG4gICAgICBncmF5c2NhbGU6IFAoKSxcbiAgICAgIGh1ZVJvdGF0ZTogQygpLFxuICAgICAgaW52ZXJ0OiBQKCksXG4gICAgICBnYXA6IHUoKSxcbiAgICAgIGdyYWRpZW50Q29sb3JTdG9wczogW2VdLFxuICAgICAgZ3JhZGllbnRDb2xvclN0b3BQb3NpdGlvbnM6IFtBZSwgQV0sXG4gICAgICBpbnNldDogTygpLFxuICAgICAgbWFyZ2luOiBPKCksXG4gICAgICBvcGFjaXR5OiBDKCksXG4gICAgICBwYWRkaW5nOiB1KCksXG4gICAgICBzYXR1cmF0ZTogQygpLFxuICAgICAgc2NhbGU6IEMoKSxcbiAgICAgIHNlcGlhOiBQKCksXG4gICAgICBza2V3OiBDKCksXG4gICAgICBzcGFjZTogdSgpLFxuICAgICAgdHJhbnNsYXRlOiB1KClcbiAgICB9LFxuICAgIGNsYXNzR3JvdXBzOiB7XG4gICAgICAvLyBMYXlvdXRcbiAgICAgIC8qKlxuICAgICAgICogQXNwZWN0IFJhdGlvXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvYXNwZWN0LXJhdGlvXG4gICAgICAgKi9cbiAgICAgIGFzcGVjdDogW3tcbiAgICAgICAgYXNwZWN0OiBbXCJhdXRvXCIsIFwic3F1YXJlXCIsIFwidmlkZW9cIiwgaV1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBDb250YWluZXJcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9jb250YWluZXJcbiAgICAgICAqL1xuICAgICAgY29udGFpbmVyOiBbXCJjb250YWluZXJcIl0sXG4gICAgICAvKipcbiAgICAgICAqIENvbHVtbnNcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9jb2x1bW5zXG4gICAgICAgKi9cbiAgICAgIGNvbHVtbnM6IFt7XG4gICAgICAgIGNvbHVtbnM6IFtTXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEJyZWFrIEFmdGVyXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvYnJlYWstYWZ0ZXJcbiAgICAgICAqL1xuICAgICAgXCJicmVhay1hZnRlclwiOiBbe1xuICAgICAgICBcImJyZWFrLWFmdGVyXCI6IEsoKVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEJyZWFrIEJlZm9yZVxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2JyZWFrLWJlZm9yZVxuICAgICAgICovXG4gICAgICBcImJyZWFrLWJlZm9yZVwiOiBbe1xuICAgICAgICBcImJyZWFrLWJlZm9yZVwiOiBLKClcbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBCcmVhayBJbnNpZGVcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9icmVhay1pbnNpZGVcbiAgICAgICAqL1xuICAgICAgXCJicmVhay1pbnNpZGVcIjogW3tcbiAgICAgICAgXCJicmVhay1pbnNpZGVcIjogW1wiYXV0b1wiLCBcImF2b2lkXCIsIFwiYXZvaWQtcGFnZVwiLCBcImF2b2lkLWNvbHVtblwiXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEJveCBEZWNvcmF0aW9uIEJyZWFrXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvYm94LWRlY29yYXRpb24tYnJlYWtcbiAgICAgICAqL1xuICAgICAgXCJib3gtZGVjb3JhdGlvblwiOiBbe1xuICAgICAgICBcImJveC1kZWNvcmF0aW9uXCI6IFtcInNsaWNlXCIsIFwiY2xvbmVcIl1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBCb3ggU2l6aW5nXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvYm94LXNpemluZ1xuICAgICAgICovXG4gICAgICBib3g6IFt7XG4gICAgICAgIGJveDogW1wiYm9yZGVyXCIsIFwiY29udGVudFwiXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIERpc3BsYXlcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9kaXNwbGF5XG4gICAgICAgKi9cbiAgICAgIGRpc3BsYXk6IFtcImJsb2NrXCIsIFwiaW5saW5lLWJsb2NrXCIsIFwiaW5saW5lXCIsIFwiZmxleFwiLCBcImlubGluZS1mbGV4XCIsIFwidGFibGVcIiwgXCJpbmxpbmUtdGFibGVcIiwgXCJ0YWJsZS1jYXB0aW9uXCIsIFwidGFibGUtY2VsbFwiLCBcInRhYmxlLWNvbHVtblwiLCBcInRhYmxlLWNvbHVtbi1ncm91cFwiLCBcInRhYmxlLWZvb3Rlci1ncm91cFwiLCBcInRhYmxlLWhlYWRlci1ncm91cFwiLCBcInRhYmxlLXJvdy1ncm91cFwiLCBcInRhYmxlLXJvd1wiLCBcImZsb3ctcm9vdFwiLCBcImdyaWRcIiwgXCJpbmxpbmUtZ3JpZFwiLCBcImNvbnRlbnRzXCIsIFwibGlzdC1pdGVtXCIsIFwiaGlkZGVuXCJdLFxuICAgICAgLyoqXG4gICAgICAgKiBGbG9hdHNcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9mbG9hdFxuICAgICAgICovXG4gICAgICBmbG9hdDogW3tcbiAgICAgICAgZmxvYXQ6IFtcInJpZ2h0XCIsIFwibGVmdFwiLCBcIm5vbmVcIiwgXCJzdGFydFwiLCBcImVuZFwiXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIENsZWFyXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvY2xlYXJcbiAgICAgICAqL1xuICAgICAgY2xlYXI6IFt7XG4gICAgICAgIGNsZWFyOiBbXCJsZWZ0XCIsIFwicmlnaHRcIiwgXCJib3RoXCIsIFwibm9uZVwiLCBcInN0YXJ0XCIsIFwiZW5kXCJdXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogSXNvbGF0aW9uXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvaXNvbGF0aW9uXG4gICAgICAgKi9cbiAgICAgIGlzb2xhdGlvbjogW1wiaXNvbGF0ZVwiLCBcImlzb2xhdGlvbi1hdXRvXCJdLFxuICAgICAgLyoqXG4gICAgICAgKiBPYmplY3QgRml0XG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3Mvb2JqZWN0LWZpdFxuICAgICAgICovXG4gICAgICBcIm9iamVjdC1maXRcIjogW3tcbiAgICAgICAgb2JqZWN0OiBbXCJjb250YWluXCIsIFwiY292ZXJcIiwgXCJmaWxsXCIsIFwibm9uZVwiLCBcInNjYWxlLWRvd25cIl1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBPYmplY3QgUG9zaXRpb25cbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9vYmplY3QtcG9zaXRpb25cbiAgICAgICAqL1xuICAgICAgXCJvYmplY3QtcG9zaXRpb25cIjogW3tcbiAgICAgICAgb2JqZWN0OiBbLi4uWCgpLCBpXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIE92ZXJmbG93XG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3Mvb3ZlcmZsb3dcbiAgICAgICAqL1xuICAgICAgb3ZlcmZsb3c6IFt7XG4gICAgICAgIG92ZXJmbG93OiBCKClcbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBPdmVyZmxvdyBYXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3Mvb3ZlcmZsb3dcbiAgICAgICAqL1xuICAgICAgXCJvdmVyZmxvdy14XCI6IFt7XG4gICAgICAgIFwib3ZlcmZsb3cteFwiOiBCKClcbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBPdmVyZmxvdyBZXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3Mvb3ZlcmZsb3dcbiAgICAgICAqL1xuICAgICAgXCJvdmVyZmxvdy15XCI6IFt7XG4gICAgICAgIFwib3ZlcmZsb3cteVwiOiBCKClcbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBPdmVyc2Nyb2xsIEJlaGF2aW9yXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3Mvb3ZlcnNjcm9sbC1iZWhhdmlvclxuICAgICAgICovXG4gICAgICBvdmVyc2Nyb2xsOiBbe1xuICAgICAgICBvdmVyc2Nyb2xsOiBWKClcbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBPdmVyc2Nyb2xsIEJlaGF2aW9yIFhcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9vdmVyc2Nyb2xsLWJlaGF2aW9yXG4gICAgICAgKi9cbiAgICAgIFwib3ZlcnNjcm9sbC14XCI6IFt7XG4gICAgICAgIFwib3ZlcnNjcm9sbC14XCI6IFYoKVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIE92ZXJzY3JvbGwgQmVoYXZpb3IgWVxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL292ZXJzY3JvbGwtYmVoYXZpb3JcbiAgICAgICAqL1xuICAgICAgXCJvdmVyc2Nyb2xsLXlcIjogW3tcbiAgICAgICAgXCJvdmVyc2Nyb2xsLXlcIjogVigpXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogUG9zaXRpb25cbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9wb3NpdGlvblxuICAgICAgICovXG4gICAgICBwb3NpdGlvbjogW1wic3RhdGljXCIsIFwiZml4ZWRcIiwgXCJhYnNvbHV0ZVwiLCBcInJlbGF0aXZlXCIsIFwic3RpY2t5XCJdLFxuICAgICAgLyoqXG4gICAgICAgKiBUb3AgLyBSaWdodCAvIEJvdHRvbSAvIExlZnRcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy90b3AtcmlnaHQtYm90dG9tLWxlZnRcbiAgICAgICAqL1xuICAgICAgaW5zZXQ6IFt7XG4gICAgICAgIGluc2V0OiBbZl1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBSaWdodCAvIExlZnRcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy90b3AtcmlnaHQtYm90dG9tLWxlZnRcbiAgICAgICAqL1xuICAgICAgXCJpbnNldC14XCI6IFt7XG4gICAgICAgIFwiaW5zZXQteFwiOiBbZl1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBUb3AgLyBCb3R0b21cbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy90b3AtcmlnaHQtYm90dG9tLWxlZnRcbiAgICAgICAqL1xuICAgICAgXCJpbnNldC15XCI6IFt7XG4gICAgICAgIFwiaW5zZXQteVwiOiBbZl1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBTdGFydFxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3RvcC1yaWdodC1ib3R0b20tbGVmdFxuICAgICAgICovXG4gICAgICBzdGFydDogW3tcbiAgICAgICAgc3RhcnQ6IFtmXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEVuZFxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3RvcC1yaWdodC1ib3R0b20tbGVmdFxuICAgICAgICovXG4gICAgICBlbmQ6IFt7XG4gICAgICAgIGVuZDogW2ZdXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogVG9wXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvdG9wLXJpZ2h0LWJvdHRvbS1sZWZ0XG4gICAgICAgKi9cbiAgICAgIHRvcDogW3tcbiAgICAgICAgdG9wOiBbZl1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBSaWdodFxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3RvcC1yaWdodC1ib3R0b20tbGVmdFxuICAgICAgICovXG4gICAgICByaWdodDogW3tcbiAgICAgICAgcmlnaHQ6IFtmXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEJvdHRvbVxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3RvcC1yaWdodC1ib3R0b20tbGVmdFxuICAgICAgICovXG4gICAgICBib3R0b206IFt7XG4gICAgICAgIGJvdHRvbTogW2ZdXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogTGVmdFxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3RvcC1yaWdodC1ib3R0b20tbGVmdFxuICAgICAgICovXG4gICAgICBsZWZ0OiBbe1xuICAgICAgICBsZWZ0OiBbZl1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBWaXNpYmlsaXR5XG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvdmlzaWJpbGl0eVxuICAgICAgICovXG4gICAgICB2aXNpYmlsaXR5OiBbXCJ2aXNpYmxlXCIsIFwiaW52aXNpYmxlXCIsIFwiY29sbGFwc2VcIl0sXG4gICAgICAvKipcbiAgICAgICAqIFotSW5kZXhcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy96LWluZGV4XG4gICAgICAgKi9cbiAgICAgIHo6IFt7XG4gICAgICAgIHo6IFtcImF1dG9cIiwgSSwgaV1cbiAgICAgIH1dLFxuICAgICAgLy8gRmxleGJveCBhbmQgR3JpZFxuICAgICAgLyoqXG4gICAgICAgKiBGbGV4IEJhc2lzXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvZmxleC1iYXNpc1xuICAgICAgICovXG4gICAgICBiYXNpczogW3tcbiAgICAgICAgYmFzaXM6IE8oKVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEZsZXggRGlyZWN0aW9uXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvZmxleC1kaXJlY3Rpb25cbiAgICAgICAqL1xuICAgICAgXCJmbGV4LWRpcmVjdGlvblwiOiBbe1xuICAgICAgICBmbGV4OiBbXCJyb3dcIiwgXCJyb3ctcmV2ZXJzZVwiLCBcImNvbFwiLCBcImNvbC1yZXZlcnNlXCJdXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogRmxleCBXcmFwXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvZmxleC13cmFwXG4gICAgICAgKi9cbiAgICAgIFwiZmxleC13cmFwXCI6IFt7XG4gICAgICAgIGZsZXg6IFtcIndyYXBcIiwgXCJ3cmFwLXJldmVyc2VcIiwgXCJub3dyYXBcIl1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBGbGV4XG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvZmxleFxuICAgICAgICovXG4gICAgICBmbGV4OiBbe1xuICAgICAgICBmbGV4OiBbXCIxXCIsIFwiYXV0b1wiLCBcImluaXRpYWxcIiwgXCJub25lXCIsIGldXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogRmxleCBHcm93XG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvZmxleC1ncm93XG4gICAgICAgKi9cbiAgICAgIGdyb3c6IFt7XG4gICAgICAgIGdyb3c6IFAoKVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEZsZXggU2hyaW5rXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvZmxleC1zaHJpbmtcbiAgICAgICAqL1xuICAgICAgc2hyaW5rOiBbe1xuICAgICAgICBzaHJpbms6IFAoKVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIE9yZGVyXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3Mvb3JkZXJcbiAgICAgICAqL1xuICAgICAgb3JkZXI6IFt7XG4gICAgICAgIG9yZGVyOiBbXCJmaXJzdFwiLCBcImxhc3RcIiwgXCJub25lXCIsIEksIGldXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogR3JpZCBUZW1wbGF0ZSBDb2x1bW5zXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zXG4gICAgICAgKi9cbiAgICAgIFwiZ3JpZC1jb2xzXCI6IFt7XG4gICAgICAgIFwiZ3JpZC1jb2xzXCI6IFtFXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEdyaWQgQ29sdW1uIFN0YXJ0IC8gRW5kXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvZ3JpZC1jb2x1bW5cbiAgICAgICAqL1xuICAgICAgXCJjb2wtc3RhcnQtZW5kXCI6IFt7XG4gICAgICAgIGNvbDogW1wiYXV0b1wiLCB7XG4gICAgICAgICAgc3BhbjogW1wiZnVsbFwiLCBJLCBpXVxuICAgICAgICB9LCBpXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEdyaWQgQ29sdW1uIFN0YXJ0XG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvZ3JpZC1jb2x1bW5cbiAgICAgICAqL1xuICAgICAgXCJjb2wtc3RhcnRcIjogW3tcbiAgICAgICAgXCJjb2wtc3RhcnRcIjogVCgpXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogR3JpZCBDb2x1bW4gRW5kXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvZ3JpZC1jb2x1bW5cbiAgICAgICAqL1xuICAgICAgXCJjb2wtZW5kXCI6IFt7XG4gICAgICAgIFwiY29sLWVuZFwiOiBUKClcbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBHcmlkIFRlbXBsYXRlIFJvd3NcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9ncmlkLXRlbXBsYXRlLXJvd3NcbiAgICAgICAqL1xuICAgICAgXCJncmlkLXJvd3NcIjogW3tcbiAgICAgICAgXCJncmlkLXJvd3NcIjogW0VdXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogR3JpZCBSb3cgU3RhcnQgLyBFbmRcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9ncmlkLXJvd1xuICAgICAgICovXG4gICAgICBcInJvdy1zdGFydC1lbmRcIjogW3tcbiAgICAgICAgcm93OiBbXCJhdXRvXCIsIHtcbiAgICAgICAgICBzcGFuOiBbSSwgaV1cbiAgICAgICAgfSwgaV1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBHcmlkIFJvdyBTdGFydFxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2dyaWQtcm93XG4gICAgICAgKi9cbiAgICAgIFwicm93LXN0YXJ0XCI6IFt7XG4gICAgICAgIFwicm93LXN0YXJ0XCI6IFQoKVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEdyaWQgUm93IEVuZFxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2dyaWQtcm93XG4gICAgICAgKi9cbiAgICAgIFwicm93LWVuZFwiOiBbe1xuICAgICAgICBcInJvdy1lbmRcIjogVCgpXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogR3JpZCBBdXRvIEZsb3dcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9ncmlkLWF1dG8tZmxvd1xuICAgICAgICovXG4gICAgICBcImdyaWQtZmxvd1wiOiBbe1xuICAgICAgICBcImdyaWQtZmxvd1wiOiBbXCJyb3dcIiwgXCJjb2xcIiwgXCJkZW5zZVwiLCBcInJvdy1kZW5zZVwiLCBcImNvbC1kZW5zZVwiXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEdyaWQgQXV0byBDb2x1bW5zXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvZ3JpZC1hdXRvLWNvbHVtbnNcbiAgICAgICAqL1xuICAgICAgXCJhdXRvLWNvbHNcIjogW3tcbiAgICAgICAgXCJhdXRvLWNvbHNcIjogW1wiYXV0b1wiLCBcIm1pblwiLCBcIm1heFwiLCBcImZyXCIsIGldXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogR3JpZCBBdXRvIFJvd3NcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9ncmlkLWF1dG8tcm93c1xuICAgICAgICovXG4gICAgICBcImF1dG8tcm93c1wiOiBbe1xuICAgICAgICBcImF1dG8tcm93c1wiOiBbXCJhdXRvXCIsIFwibWluXCIsIFwibWF4XCIsIFwiZnJcIiwgaV1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBHYXBcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9nYXBcbiAgICAgICAqL1xuICAgICAgZ2FwOiBbe1xuICAgICAgICBnYXA6IFtjXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEdhcCBYXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvZ2FwXG4gICAgICAgKi9cbiAgICAgIFwiZ2FwLXhcIjogW3tcbiAgICAgICAgXCJnYXAteFwiOiBbY11cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBHYXAgWVxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2dhcFxuICAgICAgICovXG4gICAgICBcImdhcC15XCI6IFt7XG4gICAgICAgIFwiZ2FwLXlcIjogW2NdXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogSnVzdGlmeSBDb250ZW50XG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvanVzdGlmeS1jb250ZW50XG4gICAgICAgKi9cbiAgICAgIFwianVzdGlmeS1jb250ZW50XCI6IFt7XG4gICAgICAgIGp1c3RpZnk6IFtcIm5vcm1hbFwiLCAuLi4kKCldXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogSnVzdGlmeSBJdGVtc1xuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2p1c3RpZnktaXRlbXNcbiAgICAgICAqL1xuICAgICAgXCJqdXN0aWZ5LWl0ZW1zXCI6IFt7XG4gICAgICAgIFwianVzdGlmeS1pdGVtc1wiOiBbXCJzdGFydFwiLCBcImVuZFwiLCBcImNlbnRlclwiLCBcInN0cmV0Y2hcIl1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBKdXN0aWZ5IFNlbGZcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9qdXN0aWZ5LXNlbGZcbiAgICAgICAqL1xuICAgICAgXCJqdXN0aWZ5LXNlbGZcIjogW3tcbiAgICAgICAgXCJqdXN0aWZ5LXNlbGZcIjogW1wiYXV0b1wiLCBcInN0YXJ0XCIsIFwiZW5kXCIsIFwiY2VudGVyXCIsIFwic3RyZXRjaFwiXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEFsaWduIENvbnRlbnRcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9hbGlnbi1jb250ZW50XG4gICAgICAgKi9cbiAgICAgIFwiYWxpZ24tY29udGVudFwiOiBbe1xuICAgICAgICBjb250ZW50OiBbXCJub3JtYWxcIiwgLi4uJCgpLCBcImJhc2VsaW5lXCJdXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogQWxpZ24gSXRlbXNcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9hbGlnbi1pdGVtc1xuICAgICAgICovXG4gICAgICBcImFsaWduLWl0ZW1zXCI6IFt7XG4gICAgICAgIGl0ZW1zOiBbXCJzdGFydFwiLCBcImVuZFwiLCBcImNlbnRlclwiLCBcImJhc2VsaW5lXCIsIFwic3RyZXRjaFwiXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEFsaWduIFNlbGZcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9hbGlnbi1zZWxmXG4gICAgICAgKi9cbiAgICAgIFwiYWxpZ24tc2VsZlwiOiBbe1xuICAgICAgICBzZWxmOiBbXCJhdXRvXCIsIFwic3RhcnRcIiwgXCJlbmRcIiwgXCJjZW50ZXJcIiwgXCJzdHJldGNoXCIsIFwiYmFzZWxpbmVcIl1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBQbGFjZSBDb250ZW50XG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvcGxhY2UtY29udGVudFxuICAgICAgICovXG4gICAgICBcInBsYWNlLWNvbnRlbnRcIjogW3tcbiAgICAgICAgXCJwbGFjZS1jb250ZW50XCI6IFsuLi4kKCksIFwiYmFzZWxpbmVcIl1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBQbGFjZSBJdGVtc1xuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3BsYWNlLWl0ZW1zXG4gICAgICAgKi9cbiAgICAgIFwicGxhY2UtaXRlbXNcIjogW3tcbiAgICAgICAgXCJwbGFjZS1pdGVtc1wiOiBbXCJzdGFydFwiLCBcImVuZFwiLCBcImNlbnRlclwiLCBcImJhc2VsaW5lXCIsIFwic3RyZXRjaFwiXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIFBsYWNlIFNlbGZcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9wbGFjZS1zZWxmXG4gICAgICAgKi9cbiAgICAgIFwicGxhY2Utc2VsZlwiOiBbe1xuICAgICAgICBcInBsYWNlLXNlbGZcIjogW1wiYXV0b1wiLCBcInN0YXJ0XCIsIFwiZW5kXCIsIFwiY2VudGVyXCIsIFwic3RyZXRjaFwiXVxuICAgICAgfV0sXG4gICAgICAvLyBTcGFjaW5nXG4gICAgICAvKipcbiAgICAgICAqIFBhZGRpbmdcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9wYWRkaW5nXG4gICAgICAgKi9cbiAgICAgIHA6IFt7XG4gICAgICAgIHA6IFt2XVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIFBhZGRpbmcgWFxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3BhZGRpbmdcbiAgICAgICAqL1xuICAgICAgcHg6IFt7XG4gICAgICAgIHB4OiBbdl1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBQYWRkaW5nIFlcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9wYWRkaW5nXG4gICAgICAgKi9cbiAgICAgIHB5OiBbe1xuICAgICAgICBweTogW3ZdXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogUGFkZGluZyBTdGFydFxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3BhZGRpbmdcbiAgICAgICAqL1xuICAgICAgcHM6IFt7XG4gICAgICAgIHBzOiBbdl1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBQYWRkaW5nIEVuZFxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3BhZGRpbmdcbiAgICAgICAqL1xuICAgICAgcGU6IFt7XG4gICAgICAgIHBlOiBbdl1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBQYWRkaW5nIFRvcFxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3BhZGRpbmdcbiAgICAgICAqL1xuICAgICAgcHQ6IFt7XG4gICAgICAgIHB0OiBbdl1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBQYWRkaW5nIFJpZ2h0XG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvcGFkZGluZ1xuICAgICAgICovXG4gICAgICBwcjogW3tcbiAgICAgICAgcHI6IFt2XVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIFBhZGRpbmcgQm90dG9tXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvcGFkZGluZ1xuICAgICAgICovXG4gICAgICBwYjogW3tcbiAgICAgICAgcGI6IFt2XVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIFBhZGRpbmcgTGVmdFxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3BhZGRpbmdcbiAgICAgICAqL1xuICAgICAgcGw6IFt7XG4gICAgICAgIHBsOiBbdl1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBNYXJnaW5cbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9tYXJnaW5cbiAgICAgICAqL1xuICAgICAgbTogW3tcbiAgICAgICAgbTogW21dXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogTWFyZ2luIFhcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9tYXJnaW5cbiAgICAgICAqL1xuICAgICAgbXg6IFt7XG4gICAgICAgIG14OiBbbV1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBNYXJnaW4gWVxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL21hcmdpblxuICAgICAgICovXG4gICAgICBteTogW3tcbiAgICAgICAgbXk6IFttXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIE1hcmdpbiBTdGFydFxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL21hcmdpblxuICAgICAgICovXG4gICAgICBtczogW3tcbiAgICAgICAgbXM6IFttXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIE1hcmdpbiBFbmRcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9tYXJnaW5cbiAgICAgICAqL1xuICAgICAgbWU6IFt7XG4gICAgICAgIG1lOiBbbV1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBNYXJnaW4gVG9wXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvbWFyZ2luXG4gICAgICAgKi9cbiAgICAgIG10OiBbe1xuICAgICAgICBtdDogW21dXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogTWFyZ2luIFJpZ2h0XG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvbWFyZ2luXG4gICAgICAgKi9cbiAgICAgIG1yOiBbe1xuICAgICAgICBtcjogW21dXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogTWFyZ2luIEJvdHRvbVxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL21hcmdpblxuICAgICAgICovXG4gICAgICBtYjogW3tcbiAgICAgICAgbWI6IFttXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIE1hcmdpbiBMZWZ0XG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvbWFyZ2luXG4gICAgICAgKi9cbiAgICAgIG1sOiBbe1xuICAgICAgICBtbDogW21dXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogU3BhY2UgQmV0d2VlbiBYXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3Mvc3BhY2VcbiAgICAgICAqL1xuICAgICAgXCJzcGFjZS14XCI6IFt7XG4gICAgICAgIFwic3BhY2UteFwiOiBbWl1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBTcGFjZSBCZXR3ZWVuIFggUmV2ZXJzZVxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3NwYWNlXG4gICAgICAgKi9cbiAgICAgIFwic3BhY2UteC1yZXZlcnNlXCI6IFtcInNwYWNlLXgtcmV2ZXJzZVwiXSxcbiAgICAgIC8qKlxuICAgICAgICogU3BhY2UgQmV0d2VlbiBZXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3Mvc3BhY2VcbiAgICAgICAqL1xuICAgICAgXCJzcGFjZS15XCI6IFt7XG4gICAgICAgIFwic3BhY2UteVwiOiBbWl1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBTcGFjZSBCZXR3ZWVuIFkgUmV2ZXJzZVxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3NwYWNlXG4gICAgICAgKi9cbiAgICAgIFwic3BhY2UteS1yZXZlcnNlXCI6IFtcInNwYWNlLXktcmV2ZXJzZVwiXSxcbiAgICAgIC8vIFNpemluZ1xuICAgICAgLyoqXG4gICAgICAgKiBXaWR0aFxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3dpZHRoXG4gICAgICAgKi9cbiAgICAgIHc6IFt7XG4gICAgICAgIHc6IFtcImF1dG9cIiwgXCJtaW5cIiwgXCJtYXhcIiwgXCJmaXRcIiwgXCJzdndcIiwgXCJsdndcIiwgXCJkdndcIiwgaSwgcl1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBNaW4tV2lkdGhcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9taW4td2lkdGhcbiAgICAgICAqL1xuICAgICAgXCJtaW4td1wiOiBbe1xuICAgICAgICBcIm1pbi13XCI6IFtpLCByLCBcIm1pblwiLCBcIm1heFwiLCBcImZpdFwiXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIE1heC1XaWR0aFxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL21heC13aWR0aFxuICAgICAgICovXG4gICAgICBcIm1heC13XCI6IFt7XG4gICAgICAgIFwibWF4LXdcIjogW2ksIHIsIFwibm9uZVwiLCBcImZ1bGxcIiwgXCJtaW5cIiwgXCJtYXhcIiwgXCJmaXRcIiwgXCJwcm9zZVwiLCB7XG4gICAgICAgICAgc2NyZWVuOiBbU11cbiAgICAgICAgfSwgU11cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBIZWlnaHRcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9oZWlnaHRcbiAgICAgICAqL1xuICAgICAgaDogW3tcbiAgICAgICAgaDogW2ksIHIsIFwiYXV0b1wiLCBcIm1pblwiLCBcIm1heFwiLCBcImZpdFwiLCBcInN2aFwiLCBcImx2aFwiLCBcImR2aFwiXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIE1pbi1IZWlnaHRcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9taW4taGVpZ2h0XG4gICAgICAgKi9cbiAgICAgIFwibWluLWhcIjogW3tcbiAgICAgICAgXCJtaW4taFwiOiBbaSwgciwgXCJtaW5cIiwgXCJtYXhcIiwgXCJmaXRcIiwgXCJzdmhcIiwgXCJsdmhcIiwgXCJkdmhcIl1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBNYXgtSGVpZ2h0XG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvbWF4LWhlaWdodFxuICAgICAgICovXG4gICAgICBcIm1heC1oXCI6IFt7XG4gICAgICAgIFwibWF4LWhcIjogW2ksIHIsIFwibWluXCIsIFwibWF4XCIsIFwiZml0XCIsIFwic3ZoXCIsIFwibHZoXCIsIFwiZHZoXCJdXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogU2l6ZVxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3NpemVcbiAgICAgICAqL1xuICAgICAgc2l6ZTogW3tcbiAgICAgICAgc2l6ZTogW2ksIHIsIFwiYXV0b1wiLCBcIm1pblwiLCBcIm1heFwiLCBcImZpdFwiXVxuICAgICAgfV0sXG4gICAgICAvLyBUeXBvZ3JhcGh5XG4gICAgICAvKipcbiAgICAgICAqIEZvbnQgU2l6ZVxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2ZvbnQtc2l6ZVxuICAgICAgICovXG4gICAgICBcImZvbnQtc2l6ZVwiOiBbe1xuICAgICAgICB0ZXh0OiBbXCJiYXNlXCIsIFMsIEFdXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogRm9udCBTbW9vdGhpbmdcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9mb250LXNtb290aGluZ1xuICAgICAgICovXG4gICAgICBcImZvbnQtc21vb3RoaW5nXCI6IFtcImFudGlhbGlhc2VkXCIsIFwic3VicGl4ZWwtYW50aWFsaWFzZWRcIl0sXG4gICAgICAvKipcbiAgICAgICAqIEZvbnQgU3R5bGVcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9mb250LXN0eWxlXG4gICAgICAgKi9cbiAgICAgIFwiZm9udC1zdHlsZVwiOiBbXCJpdGFsaWNcIiwgXCJub3QtaXRhbGljXCJdLFxuICAgICAgLyoqXG4gICAgICAgKiBGb250IFdlaWdodFxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2ZvbnQtd2VpZ2h0XG4gICAgICAgKi9cbiAgICAgIFwiZm9udC13ZWlnaHRcIjogW3tcbiAgICAgICAgZm9udDogW1widGhpblwiLCBcImV4dHJhbGlnaHRcIiwgXCJsaWdodFwiLCBcIm5vcm1hbFwiLCBcIm1lZGl1bVwiLCBcInNlbWlib2xkXCIsIFwiYm9sZFwiLCBcImV4dHJhYm9sZFwiLCBcImJsYWNrXCIsIFddXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogRm9udCBGYW1pbHlcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9mb250LWZhbWlseVxuICAgICAgICovXG4gICAgICBcImZvbnQtZmFtaWx5XCI6IFt7XG4gICAgICAgIGZvbnQ6IFtFXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEZvbnQgVmFyaWFudCBOdW1lcmljXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvZm9udC12YXJpYW50LW51bWVyaWNcbiAgICAgICAqL1xuICAgICAgXCJmdm4tbm9ybWFsXCI6IFtcIm5vcm1hbC1udW1zXCJdLFxuICAgICAgLyoqXG4gICAgICAgKiBGb250IFZhcmlhbnQgTnVtZXJpY1xuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2ZvbnQtdmFyaWFudC1udW1lcmljXG4gICAgICAgKi9cbiAgICAgIFwiZnZuLW9yZGluYWxcIjogW1wib3JkaW5hbFwiXSxcbiAgICAgIC8qKlxuICAgICAgICogRm9udCBWYXJpYW50IE51bWVyaWNcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9mb250LXZhcmlhbnQtbnVtZXJpY1xuICAgICAgICovXG4gICAgICBcImZ2bi1zbGFzaGVkLXplcm9cIjogW1wic2xhc2hlZC16ZXJvXCJdLFxuICAgICAgLyoqXG4gICAgICAgKiBGb250IFZhcmlhbnQgTnVtZXJpY1xuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2ZvbnQtdmFyaWFudC1udW1lcmljXG4gICAgICAgKi9cbiAgICAgIFwiZnZuLWZpZ3VyZVwiOiBbXCJsaW5pbmctbnVtc1wiLCBcIm9sZHN0eWxlLW51bXNcIl0sXG4gICAgICAvKipcbiAgICAgICAqIEZvbnQgVmFyaWFudCBOdW1lcmljXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvZm9udC12YXJpYW50LW51bWVyaWNcbiAgICAgICAqL1xuICAgICAgXCJmdm4tc3BhY2luZ1wiOiBbXCJwcm9wb3J0aW9uYWwtbnVtc1wiLCBcInRhYnVsYXItbnVtc1wiXSxcbiAgICAgIC8qKlxuICAgICAgICogRm9udCBWYXJpYW50IE51bWVyaWNcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9mb250LXZhcmlhbnQtbnVtZXJpY1xuICAgICAgICovXG4gICAgICBcImZ2bi1mcmFjdGlvblwiOiBbXCJkaWFnb25hbC1mcmFjdGlvbnNcIiwgXCJzdGFja2VkLWZyYWN0aW9uc1wiXSxcbiAgICAgIC8qKlxuICAgICAgICogTGV0dGVyIFNwYWNpbmdcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9sZXR0ZXItc3BhY2luZ1xuICAgICAgICovXG4gICAgICB0cmFja2luZzogW3tcbiAgICAgICAgdHJhY2tpbmc6IFtcInRpZ2h0ZXJcIiwgXCJ0aWdodFwiLCBcIm5vcm1hbFwiLCBcIndpZGVcIiwgXCJ3aWRlclwiLCBcIndpZGVzdFwiLCBpXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIExpbmUgQ2xhbXBcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9saW5lLWNsYW1wXG4gICAgICAgKi9cbiAgICAgIFwibGluZS1jbGFtcFwiOiBbe1xuICAgICAgICBcImxpbmUtY2xhbXBcIjogW1wibm9uZVwiLCBNLCBXXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIExpbmUgSGVpZ2h0XG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvbGluZS1oZWlnaHRcbiAgICAgICAqL1xuICAgICAgbGVhZGluZzogW3tcbiAgICAgICAgbGVhZGluZzogW1wibm9uZVwiLCBcInRpZ2h0XCIsIFwic251Z1wiLCBcIm5vcm1hbFwiLCBcInJlbGF4ZWRcIiwgXCJsb29zZVwiLCB6LCBpXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIExpc3QgU3R5bGUgSW1hZ2VcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9saXN0LXN0eWxlLWltYWdlXG4gICAgICAgKi9cbiAgICAgIFwibGlzdC1pbWFnZVwiOiBbe1xuICAgICAgICBcImxpc3QtaW1hZ2VcIjogW1wibm9uZVwiLCBpXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIExpc3QgU3R5bGUgVHlwZVxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2xpc3Qtc3R5bGUtdHlwZVxuICAgICAgICovXG4gICAgICBcImxpc3Qtc3R5bGUtdHlwZVwiOiBbe1xuICAgICAgICBsaXN0OiBbXCJub25lXCIsIFwiZGlzY1wiLCBcImRlY2ltYWxcIiwgaV1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBMaXN0IFN0eWxlIFBvc2l0aW9uXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvbGlzdC1zdHlsZS1wb3NpdGlvblxuICAgICAgICovXG4gICAgICBcImxpc3Qtc3R5bGUtcG9zaXRpb25cIjogW3tcbiAgICAgICAgbGlzdDogW1wiaW5zaWRlXCIsIFwib3V0c2lkZVwiXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIFBsYWNlaG9sZGVyIENvbG9yXG4gICAgICAgKiBAZGVwcmVjYXRlZCBzaW5jZSBUYWlsd2luZCBDU1MgdjMuMC4wXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvcGxhY2Vob2xkZXItY29sb3JcbiAgICAgICAqL1xuICAgICAgXCJwbGFjZWhvbGRlci1jb2xvclwiOiBbe1xuICAgICAgICBwbGFjZWhvbGRlcjogW2VdXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogUGxhY2Vob2xkZXIgT3BhY2l0eVxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3BsYWNlaG9sZGVyLW9wYWNpdHlcbiAgICAgICAqL1xuICAgICAgXCJwbGFjZWhvbGRlci1vcGFjaXR5XCI6IFt7XG4gICAgICAgIFwicGxhY2Vob2xkZXItb3BhY2l0eVwiOiBbd11cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBUZXh0IEFsaWdubWVudFxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3RleHQtYWxpZ25cbiAgICAgICAqL1xuICAgICAgXCJ0ZXh0LWFsaWdubWVudFwiOiBbe1xuICAgICAgICB0ZXh0OiBbXCJsZWZ0XCIsIFwiY2VudGVyXCIsIFwicmlnaHRcIiwgXCJqdXN0aWZ5XCIsIFwic3RhcnRcIiwgXCJlbmRcIl1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBUZXh0IENvbG9yXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvdGV4dC1jb2xvclxuICAgICAgICovXG4gICAgICBcInRleHQtY29sb3JcIjogW3tcbiAgICAgICAgdGV4dDogW2VdXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogVGV4dCBPcGFjaXR5XG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvdGV4dC1vcGFjaXR5XG4gICAgICAgKi9cbiAgICAgIFwidGV4dC1vcGFjaXR5XCI6IFt7XG4gICAgICAgIFwidGV4dC1vcGFjaXR5XCI6IFt3XVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIFRleHQgRGVjb3JhdGlvblxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3RleHQtZGVjb3JhdGlvblxuICAgICAgICovXG4gICAgICBcInRleHQtZGVjb3JhdGlvblwiOiBbXCJ1bmRlcmxpbmVcIiwgXCJvdmVybGluZVwiLCBcImxpbmUtdGhyb3VnaFwiLCBcIm5vLXVuZGVybGluZVwiXSxcbiAgICAgIC8qKlxuICAgICAgICogVGV4dCBEZWNvcmF0aW9uIFN0eWxlXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvdGV4dC1kZWNvcmF0aW9uLXN0eWxlXG4gICAgICAgKi9cbiAgICAgIFwidGV4dC1kZWNvcmF0aW9uLXN0eWxlXCI6IFt7XG4gICAgICAgIGRlY29yYXRpb246IFsuLi5fKCksIFwid2F2eVwiXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIFRleHQgRGVjb3JhdGlvbiBUaGlja25lc3NcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy90ZXh0LWRlY29yYXRpb24tdGhpY2tuZXNzXG4gICAgICAgKi9cbiAgICAgIFwidGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzc1wiOiBbe1xuICAgICAgICBkZWNvcmF0aW9uOiBbXCJhdXRvXCIsIFwiZnJvbS1mb250XCIsIHosIEFdXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogVGV4dCBVbmRlcmxpbmUgT2Zmc2V0XG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvdGV4dC11bmRlcmxpbmUtb2Zmc2V0XG4gICAgICAgKi9cbiAgICAgIFwidW5kZXJsaW5lLW9mZnNldFwiOiBbe1xuICAgICAgICBcInVuZGVybGluZS1vZmZzZXRcIjogW1wiYXV0b1wiLCB6LCBpXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIFRleHQgRGVjb3JhdGlvbiBDb2xvclxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3RleHQtZGVjb3JhdGlvbi1jb2xvclxuICAgICAgICovXG4gICAgICBcInRleHQtZGVjb3JhdGlvbi1jb2xvclwiOiBbe1xuICAgICAgICBkZWNvcmF0aW9uOiBbZV1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBUZXh0IFRyYW5zZm9ybVxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3RleHQtdHJhbnNmb3JtXG4gICAgICAgKi9cbiAgICAgIFwidGV4dC10cmFuc2Zvcm1cIjogW1widXBwZXJjYXNlXCIsIFwibG93ZXJjYXNlXCIsIFwiY2FwaXRhbGl6ZVwiLCBcIm5vcm1hbC1jYXNlXCJdLFxuICAgICAgLyoqXG4gICAgICAgKiBUZXh0IE92ZXJmbG93XG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvdGV4dC1vdmVyZmxvd1xuICAgICAgICovXG4gICAgICBcInRleHQtb3ZlcmZsb3dcIjogW1widHJ1bmNhdGVcIiwgXCJ0ZXh0LWVsbGlwc2lzXCIsIFwidGV4dC1jbGlwXCJdLFxuICAgICAgLyoqXG4gICAgICAgKiBUZXh0IFdyYXBcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy90ZXh0LXdyYXBcbiAgICAgICAqL1xuICAgICAgXCJ0ZXh0LXdyYXBcIjogW3tcbiAgICAgICAgdGV4dDogW1wid3JhcFwiLCBcIm5vd3JhcFwiLCBcImJhbGFuY2VcIiwgXCJwcmV0dHlcIl1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBUZXh0IEluZGVudFxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3RleHQtaW5kZW50XG4gICAgICAgKi9cbiAgICAgIGluZGVudDogW3tcbiAgICAgICAgaW5kZW50OiB1KClcbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBWZXJ0aWNhbCBBbGlnbm1lbnRcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy92ZXJ0aWNhbC1hbGlnblxuICAgICAgICovXG4gICAgICBcInZlcnRpY2FsLWFsaWduXCI6IFt7XG4gICAgICAgIGFsaWduOiBbXCJiYXNlbGluZVwiLCBcInRvcFwiLCBcIm1pZGRsZVwiLCBcImJvdHRvbVwiLCBcInRleHQtdG9wXCIsIFwidGV4dC1ib3R0b21cIiwgXCJzdWJcIiwgXCJzdXBlclwiLCBpXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIFdoaXRlc3BhY2VcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy93aGl0ZXNwYWNlXG4gICAgICAgKi9cbiAgICAgIHdoaXRlc3BhY2U6IFt7XG4gICAgICAgIHdoaXRlc3BhY2U6IFtcIm5vcm1hbFwiLCBcIm5vd3JhcFwiLCBcInByZVwiLCBcInByZS1saW5lXCIsIFwicHJlLXdyYXBcIiwgXCJicmVhay1zcGFjZXNcIl1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBXb3JkIEJyZWFrXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3Mvd29yZC1icmVha1xuICAgICAgICovXG4gICAgICBicmVhazogW3tcbiAgICAgICAgYnJlYWs6IFtcIm5vcm1hbFwiLCBcIndvcmRzXCIsIFwiYWxsXCIsIFwia2VlcFwiXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEh5cGhlbnNcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9oeXBoZW5zXG4gICAgICAgKi9cbiAgICAgIGh5cGhlbnM6IFt7XG4gICAgICAgIGh5cGhlbnM6IFtcIm5vbmVcIiwgXCJtYW51YWxcIiwgXCJhdXRvXCJdXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogQ29udGVudFxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2NvbnRlbnRcbiAgICAgICAqL1xuICAgICAgY29udGVudDogW3tcbiAgICAgICAgY29udGVudDogW1wibm9uZVwiLCBpXVxuICAgICAgfV0sXG4gICAgICAvLyBCYWNrZ3JvdW5kc1xuICAgICAgLyoqXG4gICAgICAgKiBCYWNrZ3JvdW5kIEF0dGFjaG1lbnRcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9iYWNrZ3JvdW5kLWF0dGFjaG1lbnRcbiAgICAgICAqL1xuICAgICAgXCJiZy1hdHRhY2htZW50XCI6IFt7XG4gICAgICAgIGJnOiBbXCJmaXhlZFwiLCBcImxvY2FsXCIsIFwic2Nyb2xsXCJdXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogQmFja2dyb3VuZCBDbGlwXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvYmFja2dyb3VuZC1jbGlwXG4gICAgICAgKi9cbiAgICAgIFwiYmctY2xpcFwiOiBbe1xuICAgICAgICBcImJnLWNsaXBcIjogW1wiYm9yZGVyXCIsIFwicGFkZGluZ1wiLCBcImNvbnRlbnRcIiwgXCJ0ZXh0XCJdXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogQmFja2dyb3VuZCBPcGFjaXR5XG4gICAgICAgKiBAZGVwcmVjYXRlZCBzaW5jZSBUYWlsd2luZCBDU1MgdjMuMC4wXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvYmFja2dyb3VuZC1vcGFjaXR5XG4gICAgICAgKi9cbiAgICAgIFwiYmctb3BhY2l0eVwiOiBbe1xuICAgICAgICBcImJnLW9wYWNpdHlcIjogW3ddXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogQmFja2dyb3VuZCBPcmlnaW5cbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9iYWNrZ3JvdW5kLW9yaWdpblxuICAgICAgICovXG4gICAgICBcImJnLW9yaWdpblwiOiBbe1xuICAgICAgICBcImJnLW9yaWdpblwiOiBbXCJib3JkZXJcIiwgXCJwYWRkaW5nXCIsIFwiY29udGVudFwiXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEJhY2tncm91bmQgUG9zaXRpb25cbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9iYWNrZ3JvdW5kLXBvc2l0aW9uXG4gICAgICAgKi9cbiAgICAgIFwiYmctcG9zaXRpb25cIjogW3tcbiAgICAgICAgYmc6IFsuLi5YKCksIE1lXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEJhY2tncm91bmQgUmVwZWF0XG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvYmFja2dyb3VuZC1yZXBlYXRcbiAgICAgICAqL1xuICAgICAgXCJiZy1yZXBlYXRcIjogW3tcbiAgICAgICAgYmc6IFtcIm5vLXJlcGVhdFwiLCB7XG4gICAgICAgICAgcmVwZWF0OiBbXCJcIiwgXCJ4XCIsIFwieVwiLCBcInJvdW5kXCIsIFwic3BhY2VcIl1cbiAgICAgICAgfV1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBCYWNrZ3JvdW5kIFNpemVcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9iYWNrZ3JvdW5kLXNpemVcbiAgICAgICAqL1xuICAgICAgXCJiZy1zaXplXCI6IFt7XG4gICAgICAgIGJnOiBbXCJhdXRvXCIsIFwiY292ZXJcIiwgXCJjb250YWluXCIsIGplXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEJhY2tncm91bmQgSW1hZ2VcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9iYWNrZ3JvdW5kLWltYWdlXG4gICAgICAgKi9cbiAgICAgIFwiYmctaW1hZ2VcIjogW3tcbiAgICAgICAgYmc6IFtcIm5vbmVcIiwge1xuICAgICAgICAgIFwiZ3JhZGllbnQtdG9cIjogW1widFwiLCBcInRyXCIsIFwiclwiLCBcImJyXCIsIFwiYlwiLCBcImJsXCIsIFwibFwiLCBcInRsXCJdXG4gICAgICAgIH0sIEdlXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEJhY2tncm91bmQgQ29sb3JcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9iYWNrZ3JvdW5kLWNvbG9yXG4gICAgICAgKi9cbiAgICAgIFwiYmctY29sb3JcIjogW3tcbiAgICAgICAgYmc6IFtlXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEdyYWRpZW50IENvbG9yIFN0b3BzIEZyb20gUG9zaXRpb25cbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9ncmFkaWVudC1jb2xvci1zdG9wc1xuICAgICAgICovXG4gICAgICBcImdyYWRpZW50LWZyb20tcG9zXCI6IFt7XG4gICAgICAgIGZyb206IFt5XVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEdyYWRpZW50IENvbG9yIFN0b3BzIFZpYSBQb3NpdGlvblxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2dyYWRpZW50LWNvbG9yLXN0b3BzXG4gICAgICAgKi9cbiAgICAgIFwiZ3JhZGllbnQtdmlhLXBvc1wiOiBbe1xuICAgICAgICB2aWE6IFt5XVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEdyYWRpZW50IENvbG9yIFN0b3BzIFRvIFBvc2l0aW9uXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvZ3JhZGllbnQtY29sb3Itc3RvcHNcbiAgICAgICAqL1xuICAgICAgXCJncmFkaWVudC10by1wb3NcIjogW3tcbiAgICAgICAgdG86IFt5XVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEdyYWRpZW50IENvbG9yIFN0b3BzIEZyb21cbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9ncmFkaWVudC1jb2xvci1zdG9wc1xuICAgICAgICovXG4gICAgICBcImdyYWRpZW50LWZyb21cIjogW3tcbiAgICAgICAgZnJvbTogW2hdXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogR3JhZGllbnQgQ29sb3IgU3RvcHMgVmlhXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvZ3JhZGllbnQtY29sb3Itc3RvcHNcbiAgICAgICAqL1xuICAgICAgXCJncmFkaWVudC12aWFcIjogW3tcbiAgICAgICAgdmlhOiBbaF1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBHcmFkaWVudCBDb2xvciBTdG9wcyBUb1xuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2dyYWRpZW50LWNvbG9yLXN0b3BzXG4gICAgICAgKi9cbiAgICAgIFwiZ3JhZGllbnQtdG9cIjogW3tcbiAgICAgICAgdG86IFtoXVxuICAgICAgfV0sXG4gICAgICAvLyBCb3JkZXJzXG4gICAgICAvKipcbiAgICAgICAqIEJvcmRlciBSYWRpdXNcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9ib3JkZXItcmFkaXVzXG4gICAgICAgKi9cbiAgICAgIHJvdW5kZWQ6IFt7XG4gICAgICAgIHJvdW5kZWQ6IFtuXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEJvcmRlciBSYWRpdXMgU3RhcnRcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9ib3JkZXItcmFkaXVzXG4gICAgICAgKi9cbiAgICAgIFwicm91bmRlZC1zXCI6IFt7XG4gICAgICAgIFwicm91bmRlZC1zXCI6IFtuXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEJvcmRlciBSYWRpdXMgRW5kXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvYm9yZGVyLXJhZGl1c1xuICAgICAgICovXG4gICAgICBcInJvdW5kZWQtZVwiOiBbe1xuICAgICAgICBcInJvdW5kZWQtZVwiOiBbbl1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBCb3JkZXIgUmFkaXVzIFRvcFxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2JvcmRlci1yYWRpdXNcbiAgICAgICAqL1xuICAgICAgXCJyb3VuZGVkLXRcIjogW3tcbiAgICAgICAgXCJyb3VuZGVkLXRcIjogW25dXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogQm9yZGVyIFJhZGl1cyBSaWdodFxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2JvcmRlci1yYWRpdXNcbiAgICAgICAqL1xuICAgICAgXCJyb3VuZGVkLXJcIjogW3tcbiAgICAgICAgXCJyb3VuZGVkLXJcIjogW25dXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogQm9yZGVyIFJhZGl1cyBCb3R0b21cbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9ib3JkZXItcmFkaXVzXG4gICAgICAgKi9cbiAgICAgIFwicm91bmRlZC1iXCI6IFt7XG4gICAgICAgIFwicm91bmRlZC1iXCI6IFtuXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEJvcmRlciBSYWRpdXMgTGVmdFxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2JvcmRlci1yYWRpdXNcbiAgICAgICAqL1xuICAgICAgXCJyb3VuZGVkLWxcIjogW3tcbiAgICAgICAgXCJyb3VuZGVkLWxcIjogW25dXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogQm9yZGVyIFJhZGl1cyBTdGFydCBTdGFydFxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2JvcmRlci1yYWRpdXNcbiAgICAgICAqL1xuICAgICAgXCJyb3VuZGVkLXNzXCI6IFt7XG4gICAgICAgIFwicm91bmRlZC1zc1wiOiBbbl1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBCb3JkZXIgUmFkaXVzIFN0YXJ0IEVuZFxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2JvcmRlci1yYWRpdXNcbiAgICAgICAqL1xuICAgICAgXCJyb3VuZGVkLXNlXCI6IFt7XG4gICAgICAgIFwicm91bmRlZC1zZVwiOiBbbl1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBCb3JkZXIgUmFkaXVzIEVuZCBFbmRcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9ib3JkZXItcmFkaXVzXG4gICAgICAgKi9cbiAgICAgIFwicm91bmRlZC1lZVwiOiBbe1xuICAgICAgICBcInJvdW5kZWQtZWVcIjogW25dXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogQm9yZGVyIFJhZGl1cyBFbmQgU3RhcnRcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9ib3JkZXItcmFkaXVzXG4gICAgICAgKi9cbiAgICAgIFwicm91bmRlZC1lc1wiOiBbe1xuICAgICAgICBcInJvdW5kZWQtZXNcIjogW25dXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogQm9yZGVyIFJhZGl1cyBUb3AgTGVmdFxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2JvcmRlci1yYWRpdXNcbiAgICAgICAqL1xuICAgICAgXCJyb3VuZGVkLXRsXCI6IFt7XG4gICAgICAgIFwicm91bmRlZC10bFwiOiBbbl1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBCb3JkZXIgUmFkaXVzIFRvcCBSaWdodFxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2JvcmRlci1yYWRpdXNcbiAgICAgICAqL1xuICAgICAgXCJyb3VuZGVkLXRyXCI6IFt7XG4gICAgICAgIFwicm91bmRlZC10clwiOiBbbl1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBCb3JkZXIgUmFkaXVzIEJvdHRvbSBSaWdodFxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2JvcmRlci1yYWRpdXNcbiAgICAgICAqL1xuICAgICAgXCJyb3VuZGVkLWJyXCI6IFt7XG4gICAgICAgIFwicm91bmRlZC1iclwiOiBbbl1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBCb3JkZXIgUmFkaXVzIEJvdHRvbSBMZWZ0XG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvYm9yZGVyLXJhZGl1c1xuICAgICAgICovXG4gICAgICBcInJvdW5kZWQtYmxcIjogW3tcbiAgICAgICAgXCJyb3VuZGVkLWJsXCI6IFtuXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEJvcmRlciBXaWR0aFxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2JvcmRlci13aWR0aFxuICAgICAgICovXG4gICAgICBcImJvcmRlci13XCI6IFt7XG4gICAgICAgIGJvcmRlcjogW3NdXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogQm9yZGVyIFdpZHRoIFhcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9ib3JkZXItd2lkdGhcbiAgICAgICAqL1xuICAgICAgXCJib3JkZXItdy14XCI6IFt7XG4gICAgICAgIFwiYm9yZGVyLXhcIjogW3NdXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogQm9yZGVyIFdpZHRoIFlcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9ib3JkZXItd2lkdGhcbiAgICAgICAqL1xuICAgICAgXCJib3JkZXItdy15XCI6IFt7XG4gICAgICAgIFwiYm9yZGVyLXlcIjogW3NdXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogQm9yZGVyIFdpZHRoIFN0YXJ0XG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvYm9yZGVyLXdpZHRoXG4gICAgICAgKi9cbiAgICAgIFwiYm9yZGVyLXctc1wiOiBbe1xuICAgICAgICBcImJvcmRlci1zXCI6IFtzXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEJvcmRlciBXaWR0aCBFbmRcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9ib3JkZXItd2lkdGhcbiAgICAgICAqL1xuICAgICAgXCJib3JkZXItdy1lXCI6IFt7XG4gICAgICAgIFwiYm9yZGVyLWVcIjogW3NdXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogQm9yZGVyIFdpZHRoIFRvcFxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2JvcmRlci13aWR0aFxuICAgICAgICovXG4gICAgICBcImJvcmRlci13LXRcIjogW3tcbiAgICAgICAgXCJib3JkZXItdFwiOiBbc11cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBCb3JkZXIgV2lkdGggUmlnaHRcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9ib3JkZXItd2lkdGhcbiAgICAgICAqL1xuICAgICAgXCJib3JkZXItdy1yXCI6IFt7XG4gICAgICAgIFwiYm9yZGVyLXJcIjogW3NdXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogQm9yZGVyIFdpZHRoIEJvdHRvbVxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2JvcmRlci13aWR0aFxuICAgICAgICovXG4gICAgICBcImJvcmRlci13LWJcIjogW3tcbiAgICAgICAgXCJib3JkZXItYlwiOiBbc11cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBCb3JkZXIgV2lkdGggTGVmdFxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2JvcmRlci13aWR0aFxuICAgICAgICovXG4gICAgICBcImJvcmRlci13LWxcIjogW3tcbiAgICAgICAgXCJib3JkZXItbFwiOiBbc11cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBCb3JkZXIgT3BhY2l0eVxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2JvcmRlci1vcGFjaXR5XG4gICAgICAgKi9cbiAgICAgIFwiYm9yZGVyLW9wYWNpdHlcIjogW3tcbiAgICAgICAgXCJib3JkZXItb3BhY2l0eVwiOiBbd11cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBCb3JkZXIgU3R5bGVcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9ib3JkZXItc3R5bGVcbiAgICAgICAqL1xuICAgICAgXCJib3JkZXItc3R5bGVcIjogW3tcbiAgICAgICAgYm9yZGVyOiBbLi4uXygpLCBcImhpZGRlblwiXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIERpdmlkZSBXaWR0aCBYXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvZGl2aWRlLXdpZHRoXG4gICAgICAgKi9cbiAgICAgIFwiZGl2aWRlLXhcIjogW3tcbiAgICAgICAgXCJkaXZpZGUteFwiOiBbc11cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBEaXZpZGUgV2lkdGggWCBSZXZlcnNlXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvZGl2aWRlLXdpZHRoXG4gICAgICAgKi9cbiAgICAgIFwiZGl2aWRlLXgtcmV2ZXJzZVwiOiBbXCJkaXZpZGUteC1yZXZlcnNlXCJdLFxuICAgICAgLyoqXG4gICAgICAgKiBEaXZpZGUgV2lkdGggWVxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2RpdmlkZS13aWR0aFxuICAgICAgICovXG4gICAgICBcImRpdmlkZS15XCI6IFt7XG4gICAgICAgIFwiZGl2aWRlLXlcIjogW3NdXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogRGl2aWRlIFdpZHRoIFkgUmV2ZXJzZVxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2RpdmlkZS13aWR0aFxuICAgICAgICovXG4gICAgICBcImRpdmlkZS15LXJldmVyc2VcIjogW1wiZGl2aWRlLXktcmV2ZXJzZVwiXSxcbiAgICAgIC8qKlxuICAgICAgICogRGl2aWRlIE9wYWNpdHlcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9kaXZpZGUtb3BhY2l0eVxuICAgICAgICovXG4gICAgICBcImRpdmlkZS1vcGFjaXR5XCI6IFt7XG4gICAgICAgIFwiZGl2aWRlLW9wYWNpdHlcIjogW3ddXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogRGl2aWRlIFN0eWxlXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvZGl2aWRlLXN0eWxlXG4gICAgICAgKi9cbiAgICAgIFwiZGl2aWRlLXN0eWxlXCI6IFt7XG4gICAgICAgIGRpdmlkZTogXygpXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogQm9yZGVyIENvbG9yXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvYm9yZGVyLWNvbG9yXG4gICAgICAgKi9cbiAgICAgIFwiYm9yZGVyLWNvbG9yXCI6IFt7XG4gICAgICAgIGJvcmRlcjogW2xdXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogQm9yZGVyIENvbG9yIFhcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9ib3JkZXItY29sb3JcbiAgICAgICAqL1xuICAgICAgXCJib3JkZXItY29sb3IteFwiOiBbe1xuICAgICAgICBcImJvcmRlci14XCI6IFtsXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEJvcmRlciBDb2xvciBZXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvYm9yZGVyLWNvbG9yXG4gICAgICAgKi9cbiAgICAgIFwiYm9yZGVyLWNvbG9yLXlcIjogW3tcbiAgICAgICAgXCJib3JkZXIteVwiOiBbbF1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBCb3JkZXIgQ29sb3IgU1xuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2JvcmRlci1jb2xvclxuICAgICAgICovXG4gICAgICBcImJvcmRlci1jb2xvci1zXCI6IFt7XG4gICAgICAgIFwiYm9yZGVyLXNcIjogW2xdXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogQm9yZGVyIENvbG9yIEVcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9ib3JkZXItY29sb3JcbiAgICAgICAqL1xuICAgICAgXCJib3JkZXItY29sb3ItZVwiOiBbe1xuICAgICAgICBcImJvcmRlci1lXCI6IFtsXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEJvcmRlciBDb2xvciBUb3BcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9ib3JkZXItY29sb3JcbiAgICAgICAqL1xuICAgICAgXCJib3JkZXItY29sb3ItdFwiOiBbe1xuICAgICAgICBcImJvcmRlci10XCI6IFtsXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEJvcmRlciBDb2xvciBSaWdodFxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2JvcmRlci1jb2xvclxuICAgICAgICovXG4gICAgICBcImJvcmRlci1jb2xvci1yXCI6IFt7XG4gICAgICAgIFwiYm9yZGVyLXJcIjogW2xdXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogQm9yZGVyIENvbG9yIEJvdHRvbVxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2JvcmRlci1jb2xvclxuICAgICAgICovXG4gICAgICBcImJvcmRlci1jb2xvci1iXCI6IFt7XG4gICAgICAgIFwiYm9yZGVyLWJcIjogW2xdXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogQm9yZGVyIENvbG9yIExlZnRcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9ib3JkZXItY29sb3JcbiAgICAgICAqL1xuICAgICAgXCJib3JkZXItY29sb3ItbFwiOiBbe1xuICAgICAgICBcImJvcmRlci1sXCI6IFtsXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIERpdmlkZSBDb2xvclxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2RpdmlkZS1jb2xvclxuICAgICAgICovXG4gICAgICBcImRpdmlkZS1jb2xvclwiOiBbe1xuICAgICAgICBkaXZpZGU6IFtsXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIE91dGxpbmUgU3R5bGVcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9vdXRsaW5lLXN0eWxlXG4gICAgICAgKi9cbiAgICAgIFwib3V0bGluZS1zdHlsZVwiOiBbe1xuICAgICAgICBvdXRsaW5lOiBbXCJcIiwgLi4uXygpXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIE91dGxpbmUgT2Zmc2V0XG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3Mvb3V0bGluZS1vZmZzZXRcbiAgICAgICAqL1xuICAgICAgXCJvdXRsaW5lLW9mZnNldFwiOiBbe1xuICAgICAgICBcIm91dGxpbmUtb2Zmc2V0XCI6IFt6LCBpXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIE91dGxpbmUgV2lkdGhcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9vdXRsaW5lLXdpZHRoXG4gICAgICAgKi9cbiAgICAgIFwib3V0bGluZS13XCI6IFt7XG4gICAgICAgIG91dGxpbmU6IFt6LCBBXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIE91dGxpbmUgQ29sb3JcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9vdXRsaW5lLWNvbG9yXG4gICAgICAgKi9cbiAgICAgIFwib3V0bGluZS1jb2xvclwiOiBbe1xuICAgICAgICBvdXRsaW5lOiBbZV1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBSaW5nIFdpZHRoXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvcmluZy13aWR0aFxuICAgICAgICovXG4gICAgICBcInJpbmctd1wiOiBbe1xuICAgICAgICByaW5nOiBKKClcbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBSaW5nIFdpZHRoIEluc2V0XG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvcmluZy13aWR0aFxuICAgICAgICovXG4gICAgICBcInJpbmctdy1pbnNldFwiOiBbXCJyaW5nLWluc2V0XCJdLFxuICAgICAgLyoqXG4gICAgICAgKiBSaW5nIENvbG9yXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvcmluZy1jb2xvclxuICAgICAgICovXG4gICAgICBcInJpbmctY29sb3JcIjogW3tcbiAgICAgICAgcmluZzogW2VdXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogUmluZyBPcGFjaXR5XG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvcmluZy1vcGFjaXR5XG4gICAgICAgKi9cbiAgICAgIFwicmluZy1vcGFjaXR5XCI6IFt7XG4gICAgICAgIFwicmluZy1vcGFjaXR5XCI6IFt3XVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIFJpbmcgT2Zmc2V0IFdpZHRoXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvcmluZy1vZmZzZXQtd2lkdGhcbiAgICAgICAqL1xuICAgICAgXCJyaW5nLW9mZnNldC13XCI6IFt7XG4gICAgICAgIFwicmluZy1vZmZzZXRcIjogW3osIEFdXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogUmluZyBPZmZzZXQgQ29sb3JcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9yaW5nLW9mZnNldC1jb2xvclxuICAgICAgICovXG4gICAgICBcInJpbmctb2Zmc2V0LWNvbG9yXCI6IFt7XG4gICAgICAgIFwicmluZy1vZmZzZXRcIjogW2VdXG4gICAgICB9XSxcbiAgICAgIC8vIEVmZmVjdHNcbiAgICAgIC8qKlxuICAgICAgICogQm94IFNoYWRvd1xuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2JveC1zaGFkb3dcbiAgICAgICAqL1xuICAgICAgc2hhZG93OiBbe1xuICAgICAgICBzaGFkb3c6IFtcIlwiLCBcImlubmVyXCIsIFwibm9uZVwiLCBTLCBQZV1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBCb3ggU2hhZG93IENvbG9yXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvYm94LXNoYWRvdy1jb2xvclxuICAgICAgICovXG4gICAgICBcInNoYWRvdy1jb2xvclwiOiBbe1xuICAgICAgICBzaGFkb3c6IFtFXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIE9wYWNpdHlcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9vcGFjaXR5XG4gICAgICAgKi9cbiAgICAgIG9wYWNpdHk6IFt7XG4gICAgICAgIG9wYWNpdHk6IFt3XVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIE1peCBCbGVuZCBNb2RlXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvbWl4LWJsZW5kLW1vZGVcbiAgICAgICAqL1xuICAgICAgXCJtaXgtYmxlbmRcIjogW3tcbiAgICAgICAgXCJtaXgtYmxlbmRcIjogWy4uLkgoKSwgXCJwbHVzLWxpZ2h0ZXJcIiwgXCJwbHVzLWRhcmtlclwiXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEJhY2tncm91bmQgQmxlbmQgTW9kZVxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2JhY2tncm91bmQtYmxlbmQtbW9kZVxuICAgICAgICovXG4gICAgICBcImJnLWJsZW5kXCI6IFt7XG4gICAgICAgIFwiYmctYmxlbmRcIjogSCgpXG4gICAgICB9XSxcbiAgICAgIC8vIEZpbHRlcnNcbiAgICAgIC8qKlxuICAgICAgICogRmlsdGVyXG4gICAgICAgKiBAZGVwcmVjYXRlZCBzaW5jZSBUYWlsd2luZCBDU1MgdjMuMC4wXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvZmlsdGVyXG4gICAgICAgKi9cbiAgICAgIGZpbHRlcjogW3tcbiAgICAgICAgZmlsdGVyOiBbXCJcIiwgXCJub25lXCJdXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogQmx1clxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2JsdXJcbiAgICAgICAqL1xuICAgICAgYmx1cjogW3tcbiAgICAgICAgYmx1cjogW3RdXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogQnJpZ2h0bmVzc1xuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2JyaWdodG5lc3NcbiAgICAgICAqL1xuICAgICAgYnJpZ2h0bmVzczogW3tcbiAgICAgICAgYnJpZ2h0bmVzczogW29dXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogQ29udHJhc3RcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9jb250cmFzdFxuICAgICAgICovXG4gICAgICBjb250cmFzdDogW3tcbiAgICAgICAgY29udHJhc3Q6IFtiXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIERyb3AgU2hhZG93XG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvZHJvcC1zaGFkb3dcbiAgICAgICAqL1xuICAgICAgXCJkcm9wLXNoYWRvd1wiOiBbe1xuICAgICAgICBcImRyb3Atc2hhZG93XCI6IFtcIlwiLCBcIm5vbmVcIiwgUywgaV1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBHcmF5c2NhbGVcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9ncmF5c2NhbGVcbiAgICAgICAqL1xuICAgICAgZ3JheXNjYWxlOiBbe1xuICAgICAgICBncmF5c2NhbGU6IFt4XVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEh1ZSBSb3RhdGVcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9odWUtcm90YXRlXG4gICAgICAgKi9cbiAgICAgIFwiaHVlLXJvdGF0ZVwiOiBbe1xuICAgICAgICBcImh1ZS1yb3RhdGVcIjogW2RdXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogSW52ZXJ0XG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvaW52ZXJ0XG4gICAgICAgKi9cbiAgICAgIGludmVydDogW3tcbiAgICAgICAgaW52ZXJ0OiBbZ11cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBTYXR1cmF0ZVxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3NhdHVyYXRlXG4gICAgICAgKi9cbiAgICAgIHNhdHVyYXRlOiBbe1xuICAgICAgICBzYXR1cmF0ZTogW0ddXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogU2VwaWFcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9zZXBpYVxuICAgICAgICovXG4gICAgICBzZXBpYTogW3tcbiAgICAgICAgc2VwaWE6IFtOXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEJhY2tkcm9wIEZpbHRlclxuICAgICAgICogQGRlcHJlY2F0ZWQgc2luY2UgVGFpbHdpbmQgQ1NTIHYzLjAuMFxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2JhY2tkcm9wLWZpbHRlclxuICAgICAgICovXG4gICAgICBcImJhY2tkcm9wLWZpbHRlclwiOiBbe1xuICAgICAgICBcImJhY2tkcm9wLWZpbHRlclwiOiBbXCJcIiwgXCJub25lXCJdXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogQmFja2Ryb3AgQmx1clxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2JhY2tkcm9wLWJsdXJcbiAgICAgICAqL1xuICAgICAgXCJiYWNrZHJvcC1ibHVyXCI6IFt7XG4gICAgICAgIFwiYmFja2Ryb3AtYmx1clwiOiBbdF1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBCYWNrZHJvcCBCcmlnaHRuZXNzXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvYmFja2Ryb3AtYnJpZ2h0bmVzc1xuICAgICAgICovXG4gICAgICBcImJhY2tkcm9wLWJyaWdodG5lc3NcIjogW3tcbiAgICAgICAgXCJiYWNrZHJvcC1icmlnaHRuZXNzXCI6IFtvXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEJhY2tkcm9wIENvbnRyYXN0XG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvYmFja2Ryb3AtY29udHJhc3RcbiAgICAgICAqL1xuICAgICAgXCJiYWNrZHJvcC1jb250cmFzdFwiOiBbe1xuICAgICAgICBcImJhY2tkcm9wLWNvbnRyYXN0XCI6IFtiXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEJhY2tkcm9wIEdyYXlzY2FsZVxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2JhY2tkcm9wLWdyYXlzY2FsZVxuICAgICAgICovXG4gICAgICBcImJhY2tkcm9wLWdyYXlzY2FsZVwiOiBbe1xuICAgICAgICBcImJhY2tkcm9wLWdyYXlzY2FsZVwiOiBbeF1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBCYWNrZHJvcCBIdWUgUm90YXRlXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvYmFja2Ryb3AtaHVlLXJvdGF0ZVxuICAgICAgICovXG4gICAgICBcImJhY2tkcm9wLWh1ZS1yb3RhdGVcIjogW3tcbiAgICAgICAgXCJiYWNrZHJvcC1odWUtcm90YXRlXCI6IFtkXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEJhY2tkcm9wIEludmVydFxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2JhY2tkcm9wLWludmVydFxuICAgICAgICovXG4gICAgICBcImJhY2tkcm9wLWludmVydFwiOiBbe1xuICAgICAgICBcImJhY2tkcm9wLWludmVydFwiOiBbZ11cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBCYWNrZHJvcCBPcGFjaXR5XG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvYmFja2Ryb3Atb3BhY2l0eVxuICAgICAgICovXG4gICAgICBcImJhY2tkcm9wLW9wYWNpdHlcIjogW3tcbiAgICAgICAgXCJiYWNrZHJvcC1vcGFjaXR5XCI6IFt3XVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEJhY2tkcm9wIFNhdHVyYXRlXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvYmFja2Ryb3Atc2F0dXJhdGVcbiAgICAgICAqL1xuICAgICAgXCJiYWNrZHJvcC1zYXR1cmF0ZVwiOiBbe1xuICAgICAgICBcImJhY2tkcm9wLXNhdHVyYXRlXCI6IFtHXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEJhY2tkcm9wIFNlcGlhXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvYmFja2Ryb3Atc2VwaWFcbiAgICAgICAqL1xuICAgICAgXCJiYWNrZHJvcC1zZXBpYVwiOiBbe1xuICAgICAgICBcImJhY2tkcm9wLXNlcGlhXCI6IFtOXVxuICAgICAgfV0sXG4gICAgICAvLyBUYWJsZXNcbiAgICAgIC8qKlxuICAgICAgICogQm9yZGVyIENvbGxhcHNlXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvYm9yZGVyLWNvbGxhcHNlXG4gICAgICAgKi9cbiAgICAgIFwiYm9yZGVyLWNvbGxhcHNlXCI6IFt7XG4gICAgICAgIGJvcmRlcjogW1wiY29sbGFwc2VcIiwgXCJzZXBhcmF0ZVwiXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEJvcmRlciBTcGFjaW5nXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvYm9yZGVyLXNwYWNpbmdcbiAgICAgICAqL1xuICAgICAgXCJib3JkZXItc3BhY2luZ1wiOiBbe1xuICAgICAgICBcImJvcmRlci1zcGFjaW5nXCI6IFthXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEJvcmRlciBTcGFjaW5nIFhcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9ib3JkZXItc3BhY2luZ1xuICAgICAgICovXG4gICAgICBcImJvcmRlci1zcGFjaW5nLXhcIjogW3tcbiAgICAgICAgXCJib3JkZXItc3BhY2luZy14XCI6IFthXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEJvcmRlciBTcGFjaW5nIFlcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9ib3JkZXItc3BhY2luZ1xuICAgICAgICovXG4gICAgICBcImJvcmRlci1zcGFjaW5nLXlcIjogW3tcbiAgICAgICAgXCJib3JkZXItc3BhY2luZy15XCI6IFthXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIFRhYmxlIExheW91dFxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3RhYmxlLWxheW91dFxuICAgICAgICovXG4gICAgICBcInRhYmxlLWxheW91dFwiOiBbe1xuICAgICAgICB0YWJsZTogW1wiYXV0b1wiLCBcImZpeGVkXCJdXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogQ2FwdGlvbiBTaWRlXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvY2FwdGlvbi1zaWRlXG4gICAgICAgKi9cbiAgICAgIGNhcHRpb246IFt7XG4gICAgICAgIGNhcHRpb246IFtcInRvcFwiLCBcImJvdHRvbVwiXVxuICAgICAgfV0sXG4gICAgICAvLyBUcmFuc2l0aW9ucyBhbmQgQW5pbWF0aW9uXG4gICAgICAvKipcbiAgICAgICAqIFRyYW5pc2l0aW9uIFByb3BlcnR5XG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvdHJhbnNpdGlvbi1wcm9wZXJ0eVxuICAgICAgICovXG4gICAgICB0cmFuc2l0aW9uOiBbe1xuICAgICAgICB0cmFuc2l0aW9uOiBbXCJub25lXCIsIFwiYWxsXCIsIFwiXCIsIFwiY29sb3JzXCIsIFwib3BhY2l0eVwiLCBcInNoYWRvd1wiLCBcInRyYW5zZm9ybVwiLCBpXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIFRyYW5zaXRpb24gRHVyYXRpb25cbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy90cmFuc2l0aW9uLWR1cmF0aW9uXG4gICAgICAgKi9cbiAgICAgIGR1cmF0aW9uOiBbe1xuICAgICAgICBkdXJhdGlvbjogQygpXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogVHJhbnNpdGlvbiBUaW1pbmcgRnVuY3Rpb25cbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy90cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvblxuICAgICAgICovXG4gICAgICBlYXNlOiBbe1xuICAgICAgICBlYXNlOiBbXCJsaW5lYXJcIiwgXCJpblwiLCBcIm91dFwiLCBcImluLW91dFwiLCBpXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIFRyYW5zaXRpb24gRGVsYXlcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy90cmFuc2l0aW9uLWRlbGF5XG4gICAgICAgKi9cbiAgICAgIGRlbGF5OiBbe1xuICAgICAgICBkZWxheTogQygpXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogQW5pbWF0aW9uXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvYW5pbWF0aW9uXG4gICAgICAgKi9cbiAgICAgIGFuaW1hdGU6IFt7XG4gICAgICAgIGFuaW1hdGU6IFtcIm5vbmVcIiwgXCJzcGluXCIsIFwicGluZ1wiLCBcInB1bHNlXCIsIFwiYm91bmNlXCIsIGldXG4gICAgICB9XSxcbiAgICAgIC8vIFRyYW5zZm9ybXNcbiAgICAgIC8qKlxuICAgICAgICogVHJhbnNmb3JtXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvdHJhbnNmb3JtXG4gICAgICAgKi9cbiAgICAgIHRyYW5zZm9ybTogW3tcbiAgICAgICAgdHJhbnNmb3JtOiBbXCJcIiwgXCJncHVcIiwgXCJub25lXCJdXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogU2NhbGVcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9zY2FsZVxuICAgICAgICovXG4gICAgICBzY2FsZTogW3tcbiAgICAgICAgc2NhbGU6IFtqXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIFNjYWxlIFhcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9zY2FsZVxuICAgICAgICovXG4gICAgICBcInNjYWxlLXhcIjogW3tcbiAgICAgICAgXCJzY2FsZS14XCI6IFtqXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIFNjYWxlIFlcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9zY2FsZVxuICAgICAgICovXG4gICAgICBcInNjYWxlLXlcIjogW3tcbiAgICAgICAgXCJzY2FsZS15XCI6IFtqXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIFJvdGF0ZVxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3JvdGF0ZVxuICAgICAgICovXG4gICAgICByb3RhdGU6IFt7XG4gICAgICAgIHJvdGF0ZTogW0ksIGldXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogVHJhbnNsYXRlIFhcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy90cmFuc2xhdGVcbiAgICAgICAqL1xuICAgICAgXCJ0cmFuc2xhdGUteFwiOiBbe1xuICAgICAgICBcInRyYW5zbGF0ZS14XCI6IFtxXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIFRyYW5zbGF0ZSBZXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvdHJhbnNsYXRlXG4gICAgICAgKi9cbiAgICAgIFwidHJhbnNsYXRlLXlcIjogW3tcbiAgICAgICAgXCJ0cmFuc2xhdGUteVwiOiBbcV1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBTa2V3IFhcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9za2V3XG4gICAgICAgKi9cbiAgICAgIFwic2tldy14XCI6IFt7XG4gICAgICAgIFwic2tldy14XCI6IFtGXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIFNrZXcgWVxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3NrZXdcbiAgICAgICAqL1xuICAgICAgXCJza2V3LXlcIjogW3tcbiAgICAgICAgXCJza2V3LXlcIjogW0ZdXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogVHJhbnNmb3JtIE9yaWdpblxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3RyYW5zZm9ybS1vcmlnaW5cbiAgICAgICAqL1xuICAgICAgXCJ0cmFuc2Zvcm0tb3JpZ2luXCI6IFt7XG4gICAgICAgIG9yaWdpbjogW1wiY2VudGVyXCIsIFwidG9wXCIsIFwidG9wLXJpZ2h0XCIsIFwicmlnaHRcIiwgXCJib3R0b20tcmlnaHRcIiwgXCJib3R0b21cIiwgXCJib3R0b20tbGVmdFwiLCBcImxlZnRcIiwgXCJ0b3AtbGVmdFwiLCBpXVxuICAgICAgfV0sXG4gICAgICAvLyBJbnRlcmFjdGl2aXR5XG4gICAgICAvKipcbiAgICAgICAqIEFjY2VudCBDb2xvclxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2FjY2VudC1jb2xvclxuICAgICAgICovXG4gICAgICBhY2NlbnQ6IFt7XG4gICAgICAgIGFjY2VudDogW1wiYXV0b1wiLCBlXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEFwcGVhcmFuY2VcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9hcHBlYXJhbmNlXG4gICAgICAgKi9cbiAgICAgIGFwcGVhcmFuY2U6IFt7XG4gICAgICAgIGFwcGVhcmFuY2U6IFtcIm5vbmVcIiwgXCJhdXRvXCJdXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogQ3Vyc29yXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvY3Vyc29yXG4gICAgICAgKi9cbiAgICAgIGN1cnNvcjogW3tcbiAgICAgICAgY3Vyc29yOiBbXCJhdXRvXCIsIFwiZGVmYXVsdFwiLCBcInBvaW50ZXJcIiwgXCJ3YWl0XCIsIFwidGV4dFwiLCBcIm1vdmVcIiwgXCJoZWxwXCIsIFwibm90LWFsbG93ZWRcIiwgXCJub25lXCIsIFwiY29udGV4dC1tZW51XCIsIFwicHJvZ3Jlc3NcIiwgXCJjZWxsXCIsIFwiY3Jvc3NoYWlyXCIsIFwidmVydGljYWwtdGV4dFwiLCBcImFsaWFzXCIsIFwiY29weVwiLCBcIm5vLWRyb3BcIiwgXCJncmFiXCIsIFwiZ3JhYmJpbmdcIiwgXCJhbGwtc2Nyb2xsXCIsIFwiY29sLXJlc2l6ZVwiLCBcInJvdy1yZXNpemVcIiwgXCJuLXJlc2l6ZVwiLCBcImUtcmVzaXplXCIsIFwicy1yZXNpemVcIiwgXCJ3LXJlc2l6ZVwiLCBcIm5lLXJlc2l6ZVwiLCBcIm53LXJlc2l6ZVwiLCBcInNlLXJlc2l6ZVwiLCBcInN3LXJlc2l6ZVwiLCBcImV3LXJlc2l6ZVwiLCBcIm5zLXJlc2l6ZVwiLCBcIm5lc3ctcmVzaXplXCIsIFwibndzZS1yZXNpemVcIiwgXCJ6b29tLWluXCIsIFwiem9vbS1vdXRcIiwgaV1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBDYXJldCBDb2xvclxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2p1c3QtaW4tdGltZS1tb2RlI2NhcmV0LWNvbG9yLXV0aWxpdGllc1xuICAgICAgICovXG4gICAgICBcImNhcmV0LWNvbG9yXCI6IFt7XG4gICAgICAgIGNhcmV0OiBbZV1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBQb2ludGVyIEV2ZW50c1xuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3BvaW50ZXItZXZlbnRzXG4gICAgICAgKi9cbiAgICAgIFwicG9pbnRlci1ldmVudHNcIjogW3tcbiAgICAgICAgXCJwb2ludGVyLWV2ZW50c1wiOiBbXCJub25lXCIsIFwiYXV0b1wiXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIFJlc2l6ZVxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3Jlc2l6ZVxuICAgICAgICovXG4gICAgICByZXNpemU6IFt7XG4gICAgICAgIHJlc2l6ZTogW1wibm9uZVwiLCBcInlcIiwgXCJ4XCIsIFwiXCJdXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogU2Nyb2xsIEJlaGF2aW9yXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3Mvc2Nyb2xsLWJlaGF2aW9yXG4gICAgICAgKi9cbiAgICAgIFwic2Nyb2xsLWJlaGF2aW9yXCI6IFt7XG4gICAgICAgIHNjcm9sbDogW1wiYXV0b1wiLCBcInNtb290aFwiXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIFNjcm9sbCBNYXJnaW5cbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9zY3JvbGwtbWFyZ2luXG4gICAgICAgKi9cbiAgICAgIFwic2Nyb2xsLW1cIjogW3tcbiAgICAgICAgXCJzY3JvbGwtbVwiOiB1KClcbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBTY3JvbGwgTWFyZ2luIFhcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9zY3JvbGwtbWFyZ2luXG4gICAgICAgKi9cbiAgICAgIFwic2Nyb2xsLW14XCI6IFt7XG4gICAgICAgIFwic2Nyb2xsLW14XCI6IHUoKVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIFNjcm9sbCBNYXJnaW4gWVxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3Njcm9sbC1tYXJnaW5cbiAgICAgICAqL1xuICAgICAgXCJzY3JvbGwtbXlcIjogW3tcbiAgICAgICAgXCJzY3JvbGwtbXlcIjogdSgpXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogU2Nyb2xsIE1hcmdpbiBTdGFydFxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3Njcm9sbC1tYXJnaW5cbiAgICAgICAqL1xuICAgICAgXCJzY3JvbGwtbXNcIjogW3tcbiAgICAgICAgXCJzY3JvbGwtbXNcIjogdSgpXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogU2Nyb2xsIE1hcmdpbiBFbmRcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9zY3JvbGwtbWFyZ2luXG4gICAgICAgKi9cbiAgICAgIFwic2Nyb2xsLW1lXCI6IFt7XG4gICAgICAgIFwic2Nyb2xsLW1lXCI6IHUoKVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIFNjcm9sbCBNYXJnaW4gVG9wXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3Mvc2Nyb2xsLW1hcmdpblxuICAgICAgICovXG4gICAgICBcInNjcm9sbC1tdFwiOiBbe1xuICAgICAgICBcInNjcm9sbC1tdFwiOiB1KClcbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBTY3JvbGwgTWFyZ2luIFJpZ2h0XG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3Mvc2Nyb2xsLW1hcmdpblxuICAgICAgICovXG4gICAgICBcInNjcm9sbC1tclwiOiBbe1xuICAgICAgICBcInNjcm9sbC1tclwiOiB1KClcbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBTY3JvbGwgTWFyZ2luIEJvdHRvbVxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3Njcm9sbC1tYXJnaW5cbiAgICAgICAqL1xuICAgICAgXCJzY3JvbGwtbWJcIjogW3tcbiAgICAgICAgXCJzY3JvbGwtbWJcIjogdSgpXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogU2Nyb2xsIE1hcmdpbiBMZWZ0XG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3Mvc2Nyb2xsLW1hcmdpblxuICAgICAgICovXG4gICAgICBcInNjcm9sbC1tbFwiOiBbe1xuICAgICAgICBcInNjcm9sbC1tbFwiOiB1KClcbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBTY3JvbGwgUGFkZGluZ1xuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3Njcm9sbC1wYWRkaW5nXG4gICAgICAgKi9cbiAgICAgIFwic2Nyb2xsLXBcIjogW3tcbiAgICAgICAgXCJzY3JvbGwtcFwiOiB1KClcbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBTY3JvbGwgUGFkZGluZyBYXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3Mvc2Nyb2xsLXBhZGRpbmdcbiAgICAgICAqL1xuICAgICAgXCJzY3JvbGwtcHhcIjogW3tcbiAgICAgICAgXCJzY3JvbGwtcHhcIjogdSgpXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogU2Nyb2xsIFBhZGRpbmcgWVxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3Njcm9sbC1wYWRkaW5nXG4gICAgICAgKi9cbiAgICAgIFwic2Nyb2xsLXB5XCI6IFt7XG4gICAgICAgIFwic2Nyb2xsLXB5XCI6IHUoKVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIFNjcm9sbCBQYWRkaW5nIFN0YXJ0XG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3Mvc2Nyb2xsLXBhZGRpbmdcbiAgICAgICAqL1xuICAgICAgXCJzY3JvbGwtcHNcIjogW3tcbiAgICAgICAgXCJzY3JvbGwtcHNcIjogdSgpXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogU2Nyb2xsIFBhZGRpbmcgRW5kXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3Mvc2Nyb2xsLXBhZGRpbmdcbiAgICAgICAqL1xuICAgICAgXCJzY3JvbGwtcGVcIjogW3tcbiAgICAgICAgXCJzY3JvbGwtcGVcIjogdSgpXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogU2Nyb2xsIFBhZGRpbmcgVG9wXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3Mvc2Nyb2xsLXBhZGRpbmdcbiAgICAgICAqL1xuICAgICAgXCJzY3JvbGwtcHRcIjogW3tcbiAgICAgICAgXCJzY3JvbGwtcHRcIjogdSgpXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogU2Nyb2xsIFBhZGRpbmcgUmlnaHRcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9zY3JvbGwtcGFkZGluZ1xuICAgICAgICovXG4gICAgICBcInNjcm9sbC1wclwiOiBbe1xuICAgICAgICBcInNjcm9sbC1wclwiOiB1KClcbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBTY3JvbGwgUGFkZGluZyBCb3R0b21cbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9zY3JvbGwtcGFkZGluZ1xuICAgICAgICovXG4gICAgICBcInNjcm9sbC1wYlwiOiBbe1xuICAgICAgICBcInNjcm9sbC1wYlwiOiB1KClcbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBTY3JvbGwgUGFkZGluZyBMZWZ0XG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3Mvc2Nyb2xsLXBhZGRpbmdcbiAgICAgICAqL1xuICAgICAgXCJzY3JvbGwtcGxcIjogW3tcbiAgICAgICAgXCJzY3JvbGwtcGxcIjogdSgpXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogU2Nyb2xsIFNuYXAgQWxpZ25cbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9zY3JvbGwtc25hcC1hbGlnblxuICAgICAgICovXG4gICAgICBcInNuYXAtYWxpZ25cIjogW3tcbiAgICAgICAgc25hcDogW1wic3RhcnRcIiwgXCJlbmRcIiwgXCJjZW50ZXJcIiwgXCJhbGlnbi1ub25lXCJdXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogU2Nyb2xsIFNuYXAgU3RvcFxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3Njcm9sbC1zbmFwLXN0b3BcbiAgICAgICAqL1xuICAgICAgXCJzbmFwLXN0b3BcIjogW3tcbiAgICAgICAgc25hcDogW1wibm9ybWFsXCIsIFwiYWx3YXlzXCJdXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogU2Nyb2xsIFNuYXAgVHlwZVxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3Njcm9sbC1zbmFwLXR5cGVcbiAgICAgICAqL1xuICAgICAgXCJzbmFwLXR5cGVcIjogW3tcbiAgICAgICAgc25hcDogW1wibm9uZVwiLCBcInhcIiwgXCJ5XCIsIFwiYm90aFwiXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIFNjcm9sbCBTbmFwIFR5cGUgU3RyaWN0bmVzc1xuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3Njcm9sbC1zbmFwLXR5cGVcbiAgICAgICAqL1xuICAgICAgXCJzbmFwLXN0cmljdG5lc3NcIjogW3tcbiAgICAgICAgc25hcDogW1wibWFuZGF0b3J5XCIsIFwicHJveGltaXR5XCJdXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogVG91Y2ggQWN0aW9uXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvdG91Y2gtYWN0aW9uXG4gICAgICAgKi9cbiAgICAgIHRvdWNoOiBbe1xuICAgICAgICB0b3VjaDogW1wiYXV0b1wiLCBcIm5vbmVcIiwgXCJtYW5pcHVsYXRpb25cIl1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBUb3VjaCBBY3Rpb24gWFxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3RvdWNoLWFjdGlvblxuICAgICAgICovXG4gICAgICBcInRvdWNoLXhcIjogW3tcbiAgICAgICAgXCJ0b3VjaC1wYW5cIjogW1wieFwiLCBcImxlZnRcIiwgXCJyaWdodFwiXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIFRvdWNoIEFjdGlvbiBZXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvdG91Y2gtYWN0aW9uXG4gICAgICAgKi9cbiAgICAgIFwidG91Y2gteVwiOiBbe1xuICAgICAgICBcInRvdWNoLXBhblwiOiBbXCJ5XCIsIFwidXBcIiwgXCJkb3duXCJdXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogVG91Y2ggQWN0aW9uIFBpbmNoIFpvb21cbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy90b3VjaC1hY3Rpb25cbiAgICAgICAqL1xuICAgICAgXCJ0b3VjaC1welwiOiBbXCJ0b3VjaC1waW5jaC16b29tXCJdLFxuICAgICAgLyoqXG4gICAgICAgKiBVc2VyIFNlbGVjdFxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3VzZXItc2VsZWN0XG4gICAgICAgKi9cbiAgICAgIHNlbGVjdDogW3tcbiAgICAgICAgc2VsZWN0OiBbXCJub25lXCIsIFwidGV4dFwiLCBcImFsbFwiLCBcImF1dG9cIl1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBXaWxsIENoYW5nZVxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3dpbGwtY2hhbmdlXG4gICAgICAgKi9cbiAgICAgIFwid2lsbC1jaGFuZ2VcIjogW3tcbiAgICAgICAgXCJ3aWxsLWNoYW5nZVwiOiBbXCJhdXRvXCIsIFwic2Nyb2xsXCIsIFwiY29udGVudHNcIiwgXCJ0cmFuc2Zvcm1cIiwgaV1cbiAgICAgIH1dLFxuICAgICAgLy8gU1ZHXG4gICAgICAvKipcbiAgICAgICAqIEZpbGxcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9maWxsXG4gICAgICAgKi9cbiAgICAgIGZpbGw6IFt7XG4gICAgICAgIGZpbGw6IFtlLCBcIm5vbmVcIl1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBTdHJva2UgV2lkdGhcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9zdHJva2Utd2lkdGhcbiAgICAgICAqL1xuICAgICAgXCJzdHJva2Utd1wiOiBbe1xuICAgICAgICBzdHJva2U6IFt6LCBBLCBXXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIFN0cm9rZVxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3N0cm9rZVxuICAgICAgICovXG4gICAgICBzdHJva2U6IFt7XG4gICAgICAgIHN0cm9rZTogW2UsIFwibm9uZVwiXVxuICAgICAgfV0sXG4gICAgICAvLyBBY2Nlc3NpYmlsaXR5XG4gICAgICAvKipcbiAgICAgICAqIFNjcmVlbiBSZWFkZXJzXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3Mvc2NyZWVuLXJlYWRlcnNcbiAgICAgICAqL1xuICAgICAgc3I6IFtcInNyLW9ubHlcIiwgXCJub3Qtc3Itb25seVwiXSxcbiAgICAgIC8qKlxuICAgICAgICogRm9yY2VkIENvbG9yIEFkanVzdFxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2ZvcmNlZC1jb2xvci1hZGp1c3RcbiAgICAgICAqL1xuICAgICAgXCJmb3JjZWQtY29sb3ItYWRqdXN0XCI6IFt7XG4gICAgICAgIFwiZm9yY2VkLWNvbG9yLWFkanVzdFwiOiBbXCJhdXRvXCIsIFwibm9uZVwiXVxuICAgICAgfV1cbiAgICB9LFxuICAgIGNvbmZsaWN0aW5nQ2xhc3NHcm91cHM6IHtcbiAgICAgIG92ZXJmbG93OiBbXCJvdmVyZmxvdy14XCIsIFwib3ZlcmZsb3cteVwiXSxcbiAgICAgIG92ZXJzY3JvbGw6IFtcIm92ZXJzY3JvbGwteFwiLCBcIm92ZXJzY3JvbGwteVwiXSxcbiAgICAgIGluc2V0OiBbXCJpbnNldC14XCIsIFwiaW5zZXQteVwiLCBcInN0YXJ0XCIsIFwiZW5kXCIsIFwidG9wXCIsIFwicmlnaHRcIiwgXCJib3R0b21cIiwgXCJsZWZ0XCJdLFxuICAgICAgXCJpbnNldC14XCI6IFtcInJpZ2h0XCIsIFwibGVmdFwiXSxcbiAgICAgIFwiaW5zZXQteVwiOiBbXCJ0b3BcIiwgXCJib3R0b21cIl0sXG4gICAgICBmbGV4OiBbXCJiYXNpc1wiLCBcImdyb3dcIiwgXCJzaHJpbmtcIl0sXG4gICAgICBnYXA6IFtcImdhcC14XCIsIFwiZ2FwLXlcIl0sXG4gICAgICBwOiBbXCJweFwiLCBcInB5XCIsIFwicHNcIiwgXCJwZVwiLCBcInB0XCIsIFwicHJcIiwgXCJwYlwiLCBcInBsXCJdLFxuICAgICAgcHg6IFtcInByXCIsIFwicGxcIl0sXG4gICAgICBweTogW1wicHRcIiwgXCJwYlwiXSxcbiAgICAgIG06IFtcIm14XCIsIFwibXlcIiwgXCJtc1wiLCBcIm1lXCIsIFwibXRcIiwgXCJtclwiLCBcIm1iXCIsIFwibWxcIl0sXG4gICAgICBteDogW1wibXJcIiwgXCJtbFwiXSxcbiAgICAgIG15OiBbXCJtdFwiLCBcIm1iXCJdLFxuICAgICAgc2l6ZTogW1wid1wiLCBcImhcIl0sXG4gICAgICBcImZvbnQtc2l6ZVwiOiBbXCJsZWFkaW5nXCJdLFxuICAgICAgXCJmdm4tbm9ybWFsXCI6IFtcImZ2bi1vcmRpbmFsXCIsIFwiZnZuLXNsYXNoZWQtemVyb1wiLCBcImZ2bi1maWd1cmVcIiwgXCJmdm4tc3BhY2luZ1wiLCBcImZ2bi1mcmFjdGlvblwiXSxcbiAgICAgIFwiZnZuLW9yZGluYWxcIjogW1wiZnZuLW5vcm1hbFwiXSxcbiAgICAgIFwiZnZuLXNsYXNoZWQtemVyb1wiOiBbXCJmdm4tbm9ybWFsXCJdLFxuICAgICAgXCJmdm4tZmlndXJlXCI6IFtcImZ2bi1ub3JtYWxcIl0sXG4gICAgICBcImZ2bi1zcGFjaW5nXCI6IFtcImZ2bi1ub3JtYWxcIl0sXG4gICAgICBcImZ2bi1mcmFjdGlvblwiOiBbXCJmdm4tbm9ybWFsXCJdLFxuICAgICAgXCJsaW5lLWNsYW1wXCI6IFtcImRpc3BsYXlcIiwgXCJvdmVyZmxvd1wiXSxcbiAgICAgIHJvdW5kZWQ6IFtcInJvdW5kZWQtc1wiLCBcInJvdW5kZWQtZVwiLCBcInJvdW5kZWQtdFwiLCBcInJvdW5kZWQtclwiLCBcInJvdW5kZWQtYlwiLCBcInJvdW5kZWQtbFwiLCBcInJvdW5kZWQtc3NcIiwgXCJyb3VuZGVkLXNlXCIsIFwicm91bmRlZC1lZVwiLCBcInJvdW5kZWQtZXNcIiwgXCJyb3VuZGVkLXRsXCIsIFwicm91bmRlZC10clwiLCBcInJvdW5kZWQtYnJcIiwgXCJyb3VuZGVkLWJsXCJdLFxuICAgICAgXCJyb3VuZGVkLXNcIjogW1wicm91bmRlZC1zc1wiLCBcInJvdW5kZWQtZXNcIl0sXG4gICAgICBcInJvdW5kZWQtZVwiOiBbXCJyb3VuZGVkLXNlXCIsIFwicm91bmRlZC1lZVwiXSxcbiAgICAgIFwicm91bmRlZC10XCI6IFtcInJvdW5kZWQtdGxcIiwgXCJyb3VuZGVkLXRyXCJdLFxuICAgICAgXCJyb3VuZGVkLXJcIjogW1wicm91bmRlZC10clwiLCBcInJvdW5kZWQtYnJcIl0sXG4gICAgICBcInJvdW5kZWQtYlwiOiBbXCJyb3VuZGVkLWJyXCIsIFwicm91bmRlZC1ibFwiXSxcbiAgICAgIFwicm91bmRlZC1sXCI6IFtcInJvdW5kZWQtdGxcIiwgXCJyb3VuZGVkLWJsXCJdLFxuICAgICAgXCJib3JkZXItc3BhY2luZ1wiOiBbXCJib3JkZXItc3BhY2luZy14XCIsIFwiYm9yZGVyLXNwYWNpbmcteVwiXSxcbiAgICAgIFwiYm9yZGVyLXdcIjogW1wiYm9yZGVyLXctc1wiLCBcImJvcmRlci13LWVcIiwgXCJib3JkZXItdy10XCIsIFwiYm9yZGVyLXctclwiLCBcImJvcmRlci13LWJcIiwgXCJib3JkZXItdy1sXCJdLFxuICAgICAgXCJib3JkZXItdy14XCI6IFtcImJvcmRlci13LXJcIiwgXCJib3JkZXItdy1sXCJdLFxuICAgICAgXCJib3JkZXItdy15XCI6IFtcImJvcmRlci13LXRcIiwgXCJib3JkZXItdy1iXCJdLFxuICAgICAgXCJib3JkZXItY29sb3JcIjogW1wiYm9yZGVyLWNvbG9yLXNcIiwgXCJib3JkZXItY29sb3ItZVwiLCBcImJvcmRlci1jb2xvci10XCIsIFwiYm9yZGVyLWNvbG9yLXJcIiwgXCJib3JkZXItY29sb3ItYlwiLCBcImJvcmRlci1jb2xvci1sXCJdLFxuICAgICAgXCJib3JkZXItY29sb3IteFwiOiBbXCJib3JkZXItY29sb3ItclwiLCBcImJvcmRlci1jb2xvci1sXCJdLFxuICAgICAgXCJib3JkZXItY29sb3IteVwiOiBbXCJib3JkZXItY29sb3ItdFwiLCBcImJvcmRlci1jb2xvci1iXCJdLFxuICAgICAgXCJzY3JvbGwtbVwiOiBbXCJzY3JvbGwtbXhcIiwgXCJzY3JvbGwtbXlcIiwgXCJzY3JvbGwtbXNcIiwgXCJzY3JvbGwtbWVcIiwgXCJzY3JvbGwtbXRcIiwgXCJzY3JvbGwtbXJcIiwgXCJzY3JvbGwtbWJcIiwgXCJzY3JvbGwtbWxcIl0sXG4gICAgICBcInNjcm9sbC1teFwiOiBbXCJzY3JvbGwtbXJcIiwgXCJzY3JvbGwtbWxcIl0sXG4gICAgICBcInNjcm9sbC1teVwiOiBbXCJzY3JvbGwtbXRcIiwgXCJzY3JvbGwtbWJcIl0sXG4gICAgICBcInNjcm9sbC1wXCI6IFtcInNjcm9sbC1weFwiLCBcInNjcm9sbC1weVwiLCBcInNjcm9sbC1wc1wiLCBcInNjcm9sbC1wZVwiLCBcInNjcm9sbC1wdFwiLCBcInNjcm9sbC1wclwiLCBcInNjcm9sbC1wYlwiLCBcInNjcm9sbC1wbFwiXSxcbiAgICAgIFwic2Nyb2xsLXB4XCI6IFtcInNjcm9sbC1wclwiLCBcInNjcm9sbC1wbFwiXSxcbiAgICAgIFwic2Nyb2xsLXB5XCI6IFtcInNjcm9sbC1wdFwiLCBcInNjcm9sbC1wYlwiXSxcbiAgICAgIHRvdWNoOiBbXCJ0b3VjaC14XCIsIFwidG91Y2gteVwiLCBcInRvdWNoLXB6XCJdLFxuICAgICAgXCJ0b3VjaC14XCI6IFtcInRvdWNoXCJdLFxuICAgICAgXCJ0b3VjaC15XCI6IFtcInRvdWNoXCJdLFxuICAgICAgXCJ0b3VjaC1welwiOiBbXCJ0b3VjaFwiXVxuICAgIH0sXG4gICAgY29uZmxpY3RpbmdDbGFzc0dyb3VwTW9kaWZpZXJzOiB7XG4gICAgICBcImZvbnQtc2l6ZVwiOiBbXCJsZWFkaW5nXCJdXG4gICAgfVxuICB9O1xufSwgX2UgPSAvKiBAX19QVVJFX18gKi8gaGUoVGUpLCBPZSA9IChlLCByLCB0LCBvLCBsKSA9PiB7XG4gIGlmIChsICYmIGwoITApLCAhcikge1xuICAgIGwgJiYgbCghMSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IG4gPSBvLnJlcGxhY2UoLyhbXmEtekEtWjAtOSBdKykvZ2ksIFwiLVwiKSwgYSA9ICgoKSA9PiB7XG4gICAgY29uc3QgZCA9IHt9LCBnID0gKGMpID0+IHtcbiAgICAgIFtcIm1lYXN1cmVcIiwgXCJkaW1lbnNpb25cIl0uaW5jbHVkZXMoYyA9PSBudWxsID8gdm9pZCAwIDogYy5fX3R5cGVfXykgJiYgKGRbYy5uYW1lXSA9IGMudGl0bGUpO1xuICAgIH07XG4gICAgZm9yIChjb25zdCBbYywgaF0gb2YgT2JqZWN0LmVudHJpZXMoZSkpXG4gICAgICBBcnJheS5pc0FycmF5KGgpID8gaC5mb3JFYWNoKGcpIDogZyhoKTtcbiAgICByZXR1cm4gZDtcbiAgfSkoKSwgcyA9IChkKSA9PiBkLm1hcChcbiAgICAoZykgPT4gZy5tYXAoU3RyaW5nKS5tYXAoKGMpID0+IGMucmVwbGFjZUFsbCgnXCInLCAnXCJcIicpKS5tYXAoKGMpID0+IGBcIiR7Y31cImApLmpvaW4oXCIsXCIpXG4gICAgLy8gY29tbWEtc2VwYXJhdGVkXG4gICkuam9pbihgXFxyXG5gKSwgYiA9IChkLCBnLCBjKSA9PiB7XG4gICAgY29uc3QgaCA9IG5ldyBCbG9iKFtkXSwgeyB0eXBlOiBjIH0pLCB5ID0gVVJMLmNyZWF0ZU9iamVjdFVSTChoKSwgZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGYuaHJlZiA9IHksIGYuc2V0QXR0cmlidXRlKFwiZG93bmxvYWRcIiwgZyksIGYuY2xpY2soKSwgbCAmJiBsKCExKTtcbiAgfSwgeCA9ICgpID0+IHtcbiAgICBjb25zdCBkID0gW10sIGcgPSBPYmplY3Qua2V5cyhyWzBdKTtcbiAgICByZXR1cm4gZC5wdXNoKGcubWFwKChjKSA9PiBhW2NdIHx8IGMpKSwgciA9PSBudWxsIHx8IHIubWFwKChjKSA9PiB7XG4gICAgICBjb25zdCBoID0gZy5tYXAoKHkpID0+IGNbeV0pO1xuICAgICAgZC5wdXNoKGgpO1xuICAgIH0pLCB0ID09IG51bGwgfHwgdC5tYXAoKGMpID0+IHtcbiAgICAgIGNvbnN0IGggPSBnLm1hcCgoeSkgPT4gY1t5XSk7XG4gICAgICBkLnB1c2goaCk7XG4gICAgfSksIHMoZCk7XG4gIH07XG4gIHJldHVybiBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBjb25zdCBkID0gKC8qIEBfX1BVUkVfXyAqLyBuZXcgRGF0ZSgpKS50b0lTT1N0cmluZygpO1xuICAgIGIoeCgpLCBgJHtufS0ke2R9LmNzdmAsIFwidGV4dC9jc3Y7Y2hhcnNldD11dGYtODtcIik7XG4gIH0sIDIwMCk7XG59O1xuZnVuY3Rpb24gJGUoeyBzaG93OiBlLCBjbGFzc05hbWU6IHIsIHNpemU6IHQgfSkge1xuICBjb25zdCBvID0gbmUoKTtcbiAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBrLmpzeHMoXG4gICAgXCJzdmdcIixcbiAgICB7XG4gICAgICBjbGFzc05hbWU6IF9lKFxuICAgICAgICBgYWJzb2x1dGUgcmlnaHQtMCB0b3AtMCB6LTEgcG9pbnRlci1ldmVudHMtbm9uZSBzcGlubmVyICR7ZSA/IFwib3BhY2l0eS0xMDBcIiA6IFwib3BhY2l0eS0wXCJ9YCxcbiAgICAgICAgclxuICAgICAgKSxcbiAgICAgIHdpZHRoOiB0IHx8IFwiMjRcIixcbiAgICAgIGhlaWdodDogdCB8fCBcIjI0XCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAyNCAyNFwiLFxuICAgICAgZmlsbDogXCJub25lXCIsXG4gICAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgLyogQF9fUFVSRV9fICovIGsuanN4KFwiZ1wiLCB7IGNsaXBQYXRoOiBcInVybCgjY2xpcDBfNDAwXzEwMjE1KVwiLCBjaGlsZHJlbjogLyogQF9fUFVSRV9fICovIGsuanN4KFwiZ1wiLCB7IGNsaXBQYXRoOiBcInVybCgjY2xpcDFfNDAwXzEwMjE1KVwiLCBjaGlsZHJlbjogLyogQF9fUFVSRV9fICovIGsuanN4KFxuICAgICAgICAgIFwicGF0aFwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGZpbGxSdWxlOiBcImV2ZW5vZGRcIixcbiAgICAgICAgICAgIGNsaXBSdWxlOiBcImV2ZW5vZGRcIixcbiAgICAgICAgICAgIGQ6IFwiTTEzLjQ0NzUgMi41NDM1N0MxMS43NjAzIDIuMjg2MjEgMTAuMDM1MSAyLjQ4MzI1IDguNDQ5NDQgMy4xMTQ0MUM2Ljg2Mzc5IDMuNzQ1NTcgNS40NzUwNiA0Ljc4ODAzIDQuNDI2MjkgNi4xMzQ0MUMzLjM3NzUzIDcuNDgwOCAyLjcwNjY0IDkuMDgyNDIgMi40ODI3NCAxMC43NzQzQzIuMjU4ODMgMTIuNDY2MiAyLjQ5MDAxIDE0LjE4NzIgMy4xNTI0NSAxNS43NjAxQzMuODE0OSAxNy4zMzI5IDQuODg0NjYgMTguNzAwNyA2LjI1MTU1IDE5LjcyMjZDNy42MTg0NCAyMC43NDQ1IDkuMjMzMDQgMjEuMzgzNSAxMC45MjkgMjEuNTczOUMxMS41ODc2IDIxLjY0NzggMTIuMDYxNiAyMi4yNDE2IDExLjk4NzcgMjIuOTAwMkMxMS45MTM4IDIzLjU1ODkgMTEuMzIgMjQuMDMyOCAxMC42NjE0IDIzLjk1ODlDOC41NDEzNSAyMy43MjEgNi41MjMxIDIyLjkyMjIgNC44MTQ0OSAyMS42NDQ4QzMuMTA1ODggMjAuMzY3NSAxLjc2ODY4IDE4LjY1NzcgMC45NDA2MjYgMTYuNjkxNkMwLjExMjU3MiAxNC43MjU2IC0wLjE3NjM5OCAxMi41NzQzIDAuMTAzNDggMTAuNDU5NUMwLjM4MzM1OSA4LjM0NDU4IDEuMjIxOTcgNi4zNDI1NSAyLjUzMjkzIDQuNjU5NTdDMy44NDM4OSAyLjk3NjU5IDUuNTc5OCAxLjY3MzUyIDcuNTYxODYgMC44ODQ1NjlDOS41NDM5MyAwLjA5NTYxNjYgMTEuNzAwNSAtMC4xNTA2ODkgMTMuODA5NCAwLjE3MTAyMUMxNS45MTgzIDAuNDkyNzMyIDE3LjkwMzMgMS4zNzA4MyAxOS41NiAyLjcxNDg2QzIxLjIxNjcgNC4wNTg5IDIyLjQ4NTIgNS44MjAyOCAyMy4yMzQ3IDcuODE3NThDMjMuNDY3NSA4LjQzODA3IDIzLjE1MzMgOS4xMjk4NCAyMi41MzI4IDkuMzYyN0MyMS45MTIzIDkuNTk1NTUgMjEuMjIwNiA5LjI4MTMxIDIwLjk4NzcgOC42NjA4MkMyMC4zODgxIDcuMDYyOTggMTkuMzczMyA1LjY1Mzg4IDE4LjA0OCA0LjU3ODY1QzE2LjcyMjYgMy41MDM0MiAxNS4xMzQ2IDIuODAwOTQgMTMuNDQ3NSAyLjU0MzU3WlwiLFxuICAgICAgICAgICAgZmlsbDogby5zdmcuZmlsbE5vcm1hbFxuICAgICAgICAgIH1cbiAgICAgICAgKSB9KSB9KSxcbiAgICAgICAgLyogQF9fUFVSRV9fICovIGsuanN4cyhcImRlZnNcIiwgeyBjaGlsZHJlbjogW1xuICAgICAgICAgIC8qIEBfX1BVUkVfXyAqLyBrLmpzeChcImNsaXBQYXRoXCIsIHsgaWQ6IFwiY2xpcDBfNDAwXzEwMjE1XCIsIGNoaWxkcmVuOiAvKiBAX19QVVJFX18gKi8gay5qc3goXCJyZWN0XCIsIHsgd2lkdGg6IFwiMjRcIiwgaGVpZ2h0OiBcIjI0XCIsIGZpbGw6IG8uc3ZnLmZpbGxCa2cgfSkgfSksXG4gICAgICAgICAgLyogQF9fUFVSRV9fICovIGsuanN4KFwiY2xpcFBhdGhcIiwgeyBpZDogXCJjbGlwMV80MDBfMTAyMTVcIiwgY2hpbGRyZW46IC8qIEBfX1BVUkVfXyAqLyBrLmpzeChcInJlY3RcIiwgeyB3aWR0aDogXCIyNFwiLCBoZWlnaHQ6IFwiMjRcIiwgZmlsbDogby5zdmcuZmlsbEJrZyB9KSB9KVxuICAgICAgICBdIH0pXG4gICAgICBdXG4gICAgfVxuICApO1xufVxuZXhwb3J0IHtcbiAgJGUgYXMgUyxcbiAgT2UgYXMgZCxcbiAgX2UgYXMgdFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVNwaW5uZXItQmVOb1RjaUouanMubWFwXG4iXSwibmFtZXMiOlsiRSIsIlMiLCJNIiwiaSIsIkkiLCJEIiwiQSIsIlUiLCJSIiwicCIsIkwiLCJlZSIsIlkiLCJ6IiwiUSIsIlciLCJ0ZSIsImIiLCJ4IiwiZyIsIm0iLCJ3IiwiYyIsImgiLCJ5IiwiZiIsInYiLCJHIiwiaiIsIk4iLCJGIiwiWiIsInEiLCJWIiwiTyIsInUiLCJKIiwiVCIsIlgiLCJIIiwiJCIsIlAiLCJLIiwiQyIsIm5lIiwiayJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFNLElBQUksU0FBUyxJQUFJLENBQUMsR0FBRyxFQUFFLE9BQU8sSUFBSSxDQUFDLE1BQU0sR0FBRyxVQUFVLElBQUksUUFBTyxNQUFPO0FBQzVFLE1BQUksQ0FBQztBQUNIO0FBQ0YsUUFBTSxJQUFJLEVBQUUsT0FBTyxDQUFDO0FBQ3BCLE1BQUksRUFBRSxXQUFXO0FBQ2YsV0FBTyxFQUFFLElBQUksQ0FBQztBQUNsQixHQUFHQSxNQUFJLENBQUMsTUFBTSxFQUFFLE1BQU1DLE1BQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSxhQUFhQyxNQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsTUFBTTtBQUMzRyxRQUFNLElBQUksQ0FBQSxHQUFJLElBQUk7QUFBQSxJQUNoQixHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFFLE9BQU8sT0FBTyxFQUFFLElBQUksQ0FBQ0MsT0FBTUEsR0FBRSxJQUFJO0FBQUEsSUFDakQsR0FBRyxFQUFFLE9BQU8sT0FBTyxFQUFFLElBQUksQ0FBQ0EsT0FBTUEsR0FBRSxTQUFTLEVBQUUsT0FBTyxPQUFPO0FBQUEsRUFDL0Q7QUFDRSxhQUFXQSxNQUFLLEdBQUc7QUFDakIsVUFBTSxFQUFFLE1BQU0sRUFBQyxJQUFLQSxHQUFFO0FBQ3RCLE1BQUUsU0FBUyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUM7QUFBQSxFQUMzQjtBQUNBLFNBQU87QUFDVCxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQSxPQUFRO0FBQUEsRUFDckIsa0JBQWtCO0FBQUEsRUFDbEIsVUFBVSxNQUFNO0FBQUEsRUFDaEIsWUFBWTtBQUFBLElBQ1YsT0FBTztBQUFBLElBQ1AsYUFBYSxN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USxTQUFTLE9BQU8sVUFBVSxTQUFTO0FBQUEsTUFDbEUsQ0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU1ELEdBQUcsQ0FBQztBQUFBLFFBQ0YsR0FBRyxDQUFDZCxFQUFDO0FBQUEsTUFDYixDQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtELElBQUksQ0FBQztBQUFBLFFBQ0gsSUFBSSxDQUFDQSxFQUFDO0FBQUEsTUFDZCxDQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtELElBQUksQ0FBQztBQUFBLFFBQ0gsSUFBSSxDQUFDQSxFQUFDO0FBQUEsTUFDZCxDQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtELElBQUksQ0FBQztBQUFBLFFBQ0gsSUFBSSxDQUFDQSxFQUFDO0FBQUEsTUFDZCxDQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtELElBQUksQ0FBQztBQUFBLFFBQ0gsSUFBSSxDQUFDQSxFQUFDO0FBQUEsTUFDZCxDQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtELElBQUksQ0FBQztBQUFBLFFBQ0gsSUFBSSxDQUFDQSxFQUFDO0FBQUEsTUFDZCxDQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtELElBQUksQ0FBQztBQUFBLFFBQ0gsSUFBSSxDQUFDQSxFQUFDO0FBQUEsTUFDZCxDQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtELElBQUksQ0FBQztBQUFBLFFBQ0gsSUFBSSxDQUFDQSxFQUFDO0FBQUEsTUFDZCxDQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtELElBQUksQ0FBQztBQUFBLFFBQ0gsSUFBSSxDQUFDQSxFQUFDO0FBQUEsTUFDZCxDQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtELEdBQUcsQ0FBQztBQUFBLFFBQ0YsR0FBRyxDQUFDTixFQUFDO0FBQUEsTUFDYixDQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtELElBQUksQ0FBQztBQUFBLFFBQ0gsSUFBSSxDQUFDQSxFQUFDO0FBQUEsTUFDZCxDQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtELElBQUksQ0FBQztBQUFBLFFBQ0gsSUFBSSxDQUFDQSxFQUFDO0FBQUEsTUFDZCxDQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtELElBQUksQ0FBQztBQUFBLFFBQ0gsSUFBSSxDQUFDQSxFQUFDO0FBQUEsTUFDZCxDQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtELElBQUksQ0FBQztBQUFBLFFBQ0gsSUFBSSxDQUFDQSxFQUFDO0FBQUEsTUFDZCxDQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtELElBQUksQ0FBQztBQUFBLFFBQ0gsSUFBSSxDQUFDQSxFQUFDO0FBQUEsTUFDZCxDQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtELElBQUksQ0FBQztBQUFBLFFBQ0gsSUFBSSxDQUFDQSxFQUFDO0FBQUEsTUFDZCxDQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtELElBQUksQ0FBQztBQUFBLFFBQ0gsSUFBSSxDQUFDQSxFQUFDO0FBQUEsTUFDZCxDQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtELElBQUksQ0FBQztBQUFBLFFBQ0gsSUFBSSxDQUFDQSxFQUFDO0FBQUEsTUFDZCxDQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtELFdBQVcsQ0FBQztBQUFBLFFBQ1YsV0FBVyxDQUFDVyxFQUFDO0FBQUEsTUFDckIsQ0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFLRCxtQkFBbUIsQ0FBQyxpQkFBaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BS3JDLFdBQVcsQ0FBQztBQUFBLFFBQ1YsV0FBVyxDQUFDQSxFQUFDO0FBQUEsTUFDckIsQ0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFLRCxtQkFBbUIsQ0FBQyxpQkFBaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFNckMsR0FBRyxDQUFDO0FBQUEsUUFDRixHQUFHLENBQUMsUUFBUSxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxHQUFHLENBQUM7QUFBQSxNQUNsRSxDQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtELFNBQVMsQ0FBQztBQUFBLFFBQ1IsU0FBUyxDQUFDLEdBQUcsR0FBRyxPQUFPLE9BQU8sS0FBSztBQUFBLE1BQzNDLENBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BS0QsU0FBUyxDQUFDO0FBQUEsUUFDUixTQUFTLENBQUMsR0FBRyxHQUFHLFFBQVEsUUFBUSxPQUFPLE9BQU8sT0FBTyxTQUFTO0FBQUEsVUFDNUQsUUFBUSxDQUFDLENBQUM7QUFBQSxRQUNwQixHQUFXLENBQUM7QUFBQSxNQUNaLENBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BS0QsR0FBRyxDQUFDO0FBQUEsUUFDRixHQUFHLENBQUMsR0FBRyxHQUFHLFFBQVEsT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLEtBQUs7QUFBQSxNQUNsRSxDQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtELFNBQVMsQ0FBQztBQUFBLFFBQ1IsU0FBUyxDQUFDLEdBQUcsR0FBRyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sS0FBSztBQUFBLE1BQ2hFLENBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BS0QsU0FBUyxDQUFDO0FBQUEsUUFDUixTQUFTLENBQUMsR0FBRyxHQUFHLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxLQUFLO0FBQUEsTUFDaEUsQ0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFLRCxNQUFNLENBQUM7QUFBQSxRQUNMLE1BQU0sQ0FBQyxHQUFHLEdBQUcsUUFBUSxPQUFPLE9BQU8sS0FBSztBQUFBLE1BQ2hELENBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFNRCxhQUFhLENBQUM7QUFBQSxRQUNaLE1BQU0sQ0FBQyxRQUFRLEdBQUcsQ0FBQztBQUFBLE1BQzNCLENBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BS0Qsa0JBQWtCLENBQUMsZUFBZSxzQkFBc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BS3hELGNBQWMsQ0FBQyxVQUFVLFlBQVk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BS3JDLGVBQWUsQ0FBQztBQUFBLFFBQ2QsTUFBTSxDQUFDLFFBQVEsY0FBYyxTQUFTLFVBQVUsVUFBVSxZQUFZLFFBQVEsYUFBYSxTQUFTLENBQUM7QUFBQSxNQUM3RyxDQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtELGVBQWUsQ0FBQztBQUFBLFFBQ2QsTUFBTSxDQUFDLENBQUM7QUFBQSxNQUNoQixDQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtELGNBQWMsQ0FBQyxhQUFhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUs1QixlQUFlLENBQUMsU0FBUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFLekIsb0JBQW9CLENBQUMsY0FBYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFLbkMsY0FBYyxDQUFDLGVBQWUsZUFBZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFLN0MsZUFBZSxDQUFDLHFCQUFxQixjQUFjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtuRCxnQkFBZ0IsQ0FBQyxzQkFBc0IsbUJBQW1CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUsxRCxVQUFVLENBQUM7QUFBQSxRQUNULFVBQVUsQ0FBQyxXQUFXLFNBQVMsVUFBVSxRQUFRLFNBQVMsVUFBVSxDQUFDO0FBQUEsTUFDN0UsQ0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFLRCxjQUFjLENBQUM7QUFBQSxRQUNiLGNBQWMsQ0FBQyxRQUFRLEdBQUcsQ0FBQztBQUFBLE1BQ25DLENBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BS0QsU0FBUyxDQUFDO0FBQUEsUUFDUixTQUFTLENBQUMsUUFBUSxTQUFTLFFBQVEsVUFBVSxXQUFXLFNBQVMsR0FBRyxDQUFDO0FBQUEsTUFDN0UsQ0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFLRCxjQUFjLENBQUM7QUFBQSxRQUNiLGNBQWMsQ0FBQyxRQUFRLENBQUM7QUFBQSxNQUNoQyxDQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtELG1CQUFtQixDQUFDO0FBQUEsUUFDbEIsTUFBTSxDQUFDLFFBQVEsUUFBUSxXQUFXLENBQUM7QUFBQSxNQUMzQyxDQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtELHVCQUF1QixDQUFDO0FBQUEsUUFDdEIsTUFBTSxDQUFDLFVBQVUsU0FBUztBQUFBLE1BQ2xDLENBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFNRCxxQkFBcUIsQ0FBQztBQUFBLFFBQ3BCLGFBQWEsQ0FBQyxDQUFDO0FBQUEsTUFDdkIsQ0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFLRCx1QkFBdUIsQ0FBQztBQUFBLFFBQ3RCLHVCQUF1QixDQUFDVixFQUFDO0FBQUEsTUFDakMsQ0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFLRCxrQkFBa0IsQ0FBQztBQUFBLFFBQ2pCLE1BQU0sQ0FBQyxRQUFRLFVBQVUsU0FBUyxXQUFXLFNBQVMsS0FBSztBQUFBLE1BQ25FLENBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BS0QsY0FBYyxDQUFDO0FBQUEsUUFDYixNQUFNLENBQUMsQ0FBQztBQUFBLE1BQ2hCLENBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BS0QsZ0JBQWdCLENBQUM7QUFBQSxRQUNmLGdCQUFnQixDQUFDQSxFQUFDO0FBQUEsTUFDMUIsQ0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFLRCxtQkFBbUIsQ0FBQyxhQUFhLFlBQVksZ0JBQWdCLGNBQWM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSzNFLHlCQUF5QixDQUFDO0FBQUEsUUFDeEIsWUFBWSxDQUFDLEdBQUcsRUFBQyxHQUFJLE1BQU07QUFBQSxNQUNuQyxDQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtELDZCQUE2QixDQUFDO0FBQUEsUUFDNUIsWUFBWSxDQUFDLFFBQVEsYUFBYSxHQUFHLENBQUM7QUFBQSxNQUM5QyxDQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtELG9CQUFvQixDQUFDO0FBQUEsUUFDbkIsb0JBQW9CLENBQUMsUUFBUSxHQUFHLENBQUM7QUFBQSxNQUN6QyxDQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtELHlCQUF5QixDQUFDO0FBQUEsUUFDeEIsWUFBWSxDQUFDLENBQUM7QUFBQSxNQUN0QixDQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtELGtCQUFrQixDQUFDLGFBQWEsYUFBYSxjQUFjLGFBQWE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BS3hFLGlCQUFpQixDQUFDLFlBQVksaUJBQWlCLFdBQVc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSzFELGFBQWEsQ0FBQztBQUFBLFFBQ1osTUFBTSxDQUFDLFFBQVEsVUFBVSxXQUFXLFFBQVE7QUFBQSxNQUNwRCxDQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtELFFBQVEsQ0FBQztBQUFBLFFBQ1AsUUFBUWMsR0FBQztBQUFBLE1BQ2pCLENBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BS0Qsa0JBQWtCLENBQUM7QUFBQSxRQUNqQixPQUFPLENBQUMsWUFBWSxPQUFPLFVBQVUsVUFBVSxZQUFZLGVBQWUsT0FBTyxTQUFTLENBQUM7QUFBQSxNQUNuRyxDQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtELFlBQVksQ0FBQztBQUFBLFFBQ1gsWUFBWSxDQUFDLFVBQVUsVUFBVSxPQUFPLFlBQVksWUFBWSxjQUFjO0FBQUEsTUFDdEYsQ0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFLRCxPQUFPLENBQUM7QUFBQSxRQUNOLE9BQU8sQ0FBQyxVQUFVLFNBQVMsT0FBTyxNQUFNO0FBQUEsTUFDaEQsQ0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFLRCxTQUFTLENBQUM7QUFBQSxRQUNSLFNBQVMsQ0FBQyxRQUFRLFVBQVUsTUFBTTtBQUFBLE1BQzFDLENBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BS0QsU0FBUyxDQUFDO0FBQUEsUUFDUixTQUFTLENBQUMsUUFBUSxDQUFDO0FBQUEsTUFDM0IsQ0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU1ELGlCQUFpQixDQUFDO0FBQUEsUUFDaEIsSUFBSSxDQUFDLFNBQVMsU0FBUyxRQUFRO0FBQUEsTUFDdkMsQ0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFLRCxXQUFXLENBQUM7QUFBQSxRQUNWLFdBQVcsQ0FBQyxVQUFVLFdBQVcsV0FBVyxNQUFNO0FBQUEsTUFDMUQsQ0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU1ELGNBQWMsQ0FBQztBQUFBLFFBQ2IsY0FBYyxDQUFDZCxFQUFDO0FBQUEsTUFDeEIsQ0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFLRCxhQUFhLENBQUM7QUFBQSxRQUNaLGFBQWEsQ0FBQyxVQUFVLFdBQVcsU0FBUztBQUFBLE1BQ3BELENBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BS0QsZUFBZSxDQUFDO0FBQUEsUUFDZCxJQUFJLENBQUMsR0FBR2lCLEdBQUMsR0FBSSxFQUFFO0FBQUEsTUFDdkIsQ0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFLRCxhQUFhLENBQUM7QUFBQSxRQUNaLElBQUksQ0FBQyxhQUFhO0FBQUEsVUFDaEIsUUFBUSxDQUFDLElBQUksS0FBSyxLQUFLLFNBQVMsT0FBTztBQUFBLFFBQ2pELENBQVM7QUFBQSxNQUNULENBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BS0QsV0FBVyxDQUFDO0FBQUEsUUFDVixJQUFJLENBQUMsUUFBUSxTQUFTLFdBQVcsRUFBRTtBQUFBLE1BQzNDLENBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BS0QsWUFBWSxDQUFDO0FBQUEsUUFDWCxJQUFJLENBQUMsUUFBUTtBQUFBLFVBQ1gsZUFBZSxDQUFDLEtBQUssTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLEtBQUssSUFBSTtBQUFBLFFBQ3BFLEdBQVcsRUFBRTtBQUFBLE1BQ2IsQ0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFLRCxZQUFZLENBQUM7QUFBQSxRQUNYLElBQUksQ0FBQyxDQUFDO0FBQUEsTUFDZCxDQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtELHFCQUFxQixDQUFDO0FBQUEsUUFDcEIsTUFBTSxDQUFDZCxFQUFDO0FBQUEsTUFDaEIsQ0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFLRCxvQkFBb0IsQ0FBQztBQUFBLFFBQ25CLEtBQUssQ0FBQ0EsRUFBQztBQUFBLE1BQ2YsQ0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFLRCxtQkFBbUIsQ0FBQztBQUFBLFFBQ2xCLElBQUksQ0FBQ0EsRUFBQztBQUFBLE1BQ2QsQ0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFLRCxpQkFBaUIsQ0FBQztBQUFBLFFBQ2hCLE1BQU0sQ0FBQ0QsRUFBQztBQUFBLE1BQ2hCLENBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BS0QsZ0JBQWdCLENBQUM7QUFBQSxRQUNmLEtBQUssQ0FBQ0EsRUFBQztBQUFBLE1BQ2YsQ0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFLRCxlQUFlLENBQUM7QUFBQSxRQUNkLElBQUksQ0FBQ0EsRUFBQztBQUFBLE1BQ2QsQ0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU1ELFNBQVMsQ0FBQztBQUFBLFFBQ1IsU0FBUyxDQUFDLENBQUM7QUFBQSxNQUNuQixDQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtELGFBQWEsQ0FBQztBQUFBLFFBQ1osYUFBYSxDQUFDLENBQUM7QUFBQSxNQUN2QixDQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtELGFBQWEsQ0FBQztBQUFBLFFBQ1osYUFBYSxDQUFDLENBQUM7QUFBQSxNQUN2QixDQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtELGFBQWEsQ0FBQztBQUFBLFFBQ1osYUFBYSxDQUFDLENBQUM7QUFBQSxNQUN2QixDQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtELGFBQWEsQ0FBQztBQUFBLFFBQ1osYUFBYSxDQUFDLENBQUM7QUFBQSxNQUN2QixDQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtELGFBQWEsQ0FBQztBQUFBLFFBQ1osYUFBYSxDQUFDLENBQUM7QUFBQSxNQUN2QixDQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtELGFBQWEsQ0FBQztBQUFBLFFBQ1osYUFBYSxDQUFDLENBQUM7QUFBQSxNQUN2QixDQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtELGNBQWMsQ0FBQztBQUFBLFFBQ2IsY0FBYyxDQUFDLENBQUM7QUFBQSxNQUN4QixDQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtELGNBQWMsQ0FBQztBQUFBLFFBQ2IsY0FBYyxDQUFDLENBQUM7QUFBQSxNQUN4QixDQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtELGNBQWMsQ0FBQztBQUFBLFFBQ2IsY0FBYyxDQUFDLENBQUM7QUFBQSxNQUN4QixDQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtELGNBQWMsQ0FBQztBQUFBLFFBQ2IsY0FBYyxDQUFDLENBQUM7QUFBQSxNQUN4QixDQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtELGNBQWMsQ0FBQztBQUFBLFFBQ2IsY0FBYyxDQUFDLENBQUM7QUFBQSxNQUN4QixDQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtELGNBQWMsQ0FBQztBQUFBLFFBQ2IsY0FBYyxDQUFDLENBQUM7QUFBQSxNQUN4QixDQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtELGNBQWMsQ0FBQztBQUFBLFFBQ2IsY0FBYyxDQUFDLENBQUM7QUFBQSxNQUN4QixDQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtELGNBQWMsQ0FBQztBQUFBLFFBQ2IsY0FBYyxDQUFDLENBQUM7QUFBQSxNQUN4QixDQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtELFlBQVksQ0FBQztBQUFBLFFBQ1gsUUFBUSxDQUFDLENBQUM7QUFBQSxNQUNsQixDQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtELGNBQWMsQ0FBQztBQUFBLFFBQ2IsWUFBWSxDQUFDLENBQUM7QUFBQSxNQUN0QixDQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtELGNBQWMsQ0FBQztBQUFBLFFBQ2IsWUFBWSxDQUFDLENBQUM7QUFBQSxNQUN0QixDQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtELGNBQWMsQ0FBQztBQUFBLFFBQ2IsWUFBWSxDQUFDLENBQUM7QUFBQSxNQUN0QixDQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtELGNBQWMsQ0FBQztBQUFBLFFBQ2IsWUFBWSxDQUFDLENBQUM7QUFBQSxNQUN0QixDQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtELGNBQWMsQ0FBQztBQUFBLFFBQ2IsWUFBWSxDQUFDLENBQUM7QUFBQSxNQUN0QixDQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtELGNBQWMsQ0FBQztBQUFBLFFBQ2IsWUFBWSxDQUFDLENBQUM7QUFBQSxNQUN0QixDQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtELGNBQWMsQ0FBQztBQUFBLFFBQ2IsWUFBWSxDQUFDLENBQUM7QUFBQSxNQUN0QixDQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtELGNBQWMsQ0FBQztBQUFBLFFBQ2IsWUFBWSxDQUFDLENBQUM7QUFBQSxN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Q1gsWUFBWUssR0FBQztBQUFBLE1BQ3JCLENBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BS0QsYUFBYSxDQUFDO0FBQUEsUUFDWixhQUFhQSxHQUFDO0FBQUEsTUFDdEIsQ0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFLRCxhQUFhLENBQUM7QUFBQSxRQUNaLGFBQWFBLEdBQUM7QUFBQSxNQUN0QixDQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtELGFBQWEsQ0FBQztBQUFBLFFBQ1osYUFBYUEsR0FBQztBQUFBLE1BQ3RCLENBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BS0QsYUFBYSxDQUFDO0FBQUEsUUFDWixhQUFhQSxHQUFDO0FBQUEsTUFDdEIsQ0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFLRCxhQUFhLENBQUM7QUFBQSxRQUNaLGFBQWFBLEdBQUM7QUFBQSxNQUN0QixDQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtELGFBQWEsQ0FBQztBQUFBLFFBQ1osYUFBYUEsR0FBQztBQUFBLE1BQ3RCLENBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BS0QsYUFBYSxDQUFDO0FBQUEsUUFDWixhQUFhQSxHQUFDO0FBQUEsTUFDdEIsQ0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFLRCxhQUFhLENBQUM7QUFBQSxRQUNaLGFBQWFBLEdBQUM7QUFBQSxNQUN0QixDQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtELFlBQVksQ0FBQztBQUFBLFFBQ1gsWUFBWUEsR0FBQztBQUFBLE1BQ3JCLENBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BS0QsYUFBYSxDQUFDO0FBQUEsUUFDWixhQUFhQSxHQUFDO0FBQUEsTUFDdEIsQ0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFLRCxhQUFhLENBQUM7QUFBQSxRQUNaLGFBQWFBLEdBQUM7QUFBQSxNQUN0QixDQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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
