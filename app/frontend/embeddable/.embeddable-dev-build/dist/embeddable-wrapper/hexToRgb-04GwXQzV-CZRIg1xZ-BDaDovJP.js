function n(t, a) {
  const e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
  return e ? `rgba(${parseInt(e[1], 16)}, ${parseInt(e[2], 16)}, ${parseInt(
    e[3],
    16
  )}, ${a || 1})` : "";
}

export { n };
//# sourceMappingURL=hexToRgb-04GwXQzV-CZRIg1xZ-BDaDovJP.js.map
//# sourceMappingURL=hexToRgb-04GwXQzV-CZRIg1xZ-BDaDovJP.js.map
