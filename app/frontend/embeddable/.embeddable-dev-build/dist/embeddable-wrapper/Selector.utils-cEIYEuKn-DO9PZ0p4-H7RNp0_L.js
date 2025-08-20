const l = (e, a) => !e || a.value.toLocaleLowerCase().includes(e.toLocaleLowerCase()) || a.label.toLocaleLowerCase().includes(e.toLocaleLowerCase()), n = (e) => e.map((a) => {
  var t;
  return {
    value: a.name,
    label: ((t = a.inputs) == null ? void 0 : t.overrideName) ?? a.title
  };
}), r = (e, a) => {
  var t;
  if (e)
    return ((t = a.find((o) => o.name === e.name)) == null ? void 0 : t.name) || void 0;
}, s = (e, a) => {
  if (e)
    return a.filter((t) => e.some((o) => o.name === t.name)).map((t) => t.name);
};

export { l, n, r, s };
//# sourceMappingURL=Selector.utils-cEIYEuKn-DO9PZ0p4-H7RNp0_L.js.map
//# sourceMappingURL=Selector.utils-cEIYEuKn-DO9PZ0p4-H7RNp0_L.js.map
