const _ = "en-US", e = (t, n = {}) => ({
  __embeddableType: "built-in",
  toString: () => t,
  typeConfig: {
    label: t,
    optionLabel: () => t,
    ...n
  }
}), p = () => globalThis.__EMBEDDABLE_BUNDLE_HASH__ ?? null, c = (t, n) => {
  if (R.includes(t))
    throw new Error(`Type ${t} is part of the nativeTypes and cannot be defined`, { cause: "sdk" });
  const r = {
    __embeddableType: "custom",
    toString: () => t,
    typeConfig: n
  }, o = p();
  globalThis.__EMBEDDABLE__ = globalThis.__EMBEDDABLE__ || {};
  const i = o ? globalThis.__EMBEDDABLE__[o] = globalThis.__EMBEDDABLE__[o] || {} : globalThis.__EMBEDDABLE__;
  return i.types = i.types || {}, i.types = {
    ...i.types,
    [t]: {
      name: t,
      ...n
    }
  }, r;
}, S = "string", b = "number", f = "boolean", B = "time", y = "timeRange", N = "granularity", M = "dataset", I = "measure", h = "dimension", l = "dimensionOrMeasure", U = [
  S,
  b,
  f,
  B,
  y,
  N
], R = [
  ...U,
  M,
  I,
  h,
  l
], O = () => globalThis.__EMBEDDABLE_BUNDLE_HASH__ ?? null, s = (t, n) => {
  var i, d, m, A;
  const r = O();
  globalThis.__EMBEDDABLE__ ?? (globalThis.__EMBEDDABLE__ = {});
  const o = r ? (i = globalThis.__EMBEDDABLE__)[r] ?? (i[r] = {}) : globalThis.__EMBEDDABLE__;
  if (typeof t == "string")
    o.nativeTypes = o.nativeTypes || {}, o.nativeTypes[t] = o.nativeTypes[t] || {}, (d = o.nativeTypes[t]).options ?? (d.options = []), o.nativeTypes[t].options.push(n);
  else {
    const a = t.toString();
    if (!((m = o == null ? void 0 : o.types) != null && m[a]))
      return;
    (A = o.types[a]).options ?? (A.options = []), o.types[a].options.push(n);
  }
};
e("string", {
  transform: (t) => t,
  optionLabel: (t) => Array.isArray(t) ? `[${t.map((n) => `"${n}"`).join(",")}]` : `"${t}"`
});
e("number", {
  transform: (t) => Array.isArray(t) ? t : t && Number(t),
  optionLabel: (t) => Array.isArray(t) ? `[${t.join(",")}]` : (t == null ? void 0 : t.toLocaleString(_)) ?? ""
});
e("boolean", {
  transform: (t) => t === "true" || t === true,
  optionLabel: (t) => t ? "true" : "false"
});
e("time", {
  transform: (t) => {
    const n = t != null && t.date ? new Date(t.date) : void 0;
    return {
      date: n && n.toString() !== "Invalid Date" ? n : void 0,
      relativeTimeString: t == null ? void 0 : t.relativeTimeString
    };
  },
  optionLabel: (t) => {
    var n;
    return t ? t != null && t.date ? ((n = t.date) == null ? void 0 : n.toLocaleDateString(_)) ?? t.date.toLocaleString() : t.relativeTimeString : "";
  }
});
e("timeRange", {
  transform: (t) => {
    if (!t)
      return;
    const [n, r] = [t == null ? void 0 : t.from, t == null ? void 0 : t.to], o = new Date(n), i = new Date(r);
    return {
      from: o.toString() !== "Invalid Date" ? o : void 0,
      to: i.toString() !== "Invalid Date" ? i : void 0,
      relativeTimeString: t == null ? void 0 : t.relativeTimeString
    };
  },
  optionLabel: (t) => {
    var n, r, o, i;
    return t ? t != null && t.from && (t != null && t.to) ? `${((n = t.from) == null ? void 0 : n.toLocaleDateString(_)) ?? ((r = t.from) == null ? void 0 : r.toLocaleString())},${((o = t.to) == null ? void 0 : o.toLocaleDateString(_)) ?? ((i = t.to) == null ? void 0 : i.toLocaleString())}` : t == null ? void 0 : t.relativeTimeString : "";
  }
});
e("granularity", {
  transform: (t) => t,
  optionLabel: (t) => t
});
e("dataset");
e("measure");
e("dimension");
e("dimensionOrMeasure");
var D = /* @__PURE__ */ ((t) => (t.NUMERIC_VALUES_ONLY = "Numeric Value Only", t.VALUE_BARS = "Value Bars", t.HEATMAP = "Heat Map", t))(D || {});
const L = c("metricsVisualizationFormat", {
  label: "Metrics visualization format",
  optionLabel: (t) => t.value
});
s(L, { value: D.NUMERIC_VALUES_ONLY });
s(L, { value: D.VALUE_BARS });
var T = /* @__PURE__ */ ((t) => (t.ASCENDING = "Ascending", t.DESCENDING = "Descending", t))(T || {});
const g = c("sortDirection", {
  label: "Sort Direction",
  optionLabel: (t) => t
});
s(g, T.ASCENDING);
s(g, T.DESCENDING);
const E = c("timeComparison", {
  label: "Time Comparison",
  optionLabel: (t) => t
});
s(E, "No comparison");
s(E, "Previous period");
s(E, "Previous week");
s(E, "Previous month");
s(E, "Previous quarter");
s(E, "Previous year");
