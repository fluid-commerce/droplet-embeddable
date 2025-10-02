const q = {
  brand: {
    primary: "#6778DE",
    secondary: "#FF997C"
  },
  charts: {
    colors: [
      "#6778DE",
      "#FF997C",
      "#9EA4F4",
      "#B8B8D1",
      "#FF6B6C",
      "#FFC145",
      "#9DC7FF",
      "#FF805B",
      "#CD9FFF",
      "#E6DEDE",
      "#FFA6A6",
      "#FFD98D"
    ],
    options: {
      toolTipEnabled: !0,
      usePointStyle: !0
    },
    fontWeights: {
      description: 400,
      kpiNumber: 700,
      pagination: 400,
      title: 700
    },
    textJustify: "start",
    /* Custom overrides for certain charts */
    bar: {
      borderRadius: 4,
      borderSkipped: "bottom",
      borderWidth: 0,
      cubicInterpolationMode: "default",
      font: {
        size: 12
      },
      labels: {
        total: {
          backgroundColor: "#ffffff",
          borderRadius: 8,
          color: "#888888",
          font: {
            size: 12,
            weight: "normal"
          }
        },
        value: {
          backgroundColor: "transparent",
          borderRadius: 8,
          color: "#888888",
          font: {
            size: 12,
            weight: "normal"
          }
        }
      },
      lineTension: 0.1
    },
    bubble: {
      font: {
        size: 12
      },
      labels: {
        backgroundColor: "#ffffff",
        borderRadius: 8,
        color: "#888888",
        font: {
          size: 12,
          weight: "normal"
        }
      }
    },
    kpi: {
      alignment: "center",
      font: {
        negativeColor: "#FF6B6C",
        size: 32
      }
    },
    line: {
      cubicInterpolationMode: "default",
      font: {
        size: 12
      },
      labels: {
        backgroundColor: "transparent",
        borderRadius: 8,
        color: "#888888",
        font: {
          size: 12,
          weight: "normal"
        }
      },
      lineTension: 0.1
    },
    pie: {
      borderColor: "#FFFFFF",
      borderWidth: 2,
      font: {
        size: 12
      },
      labels: {
        backgroundColor: "#ffffff",
        borderRadius: 8,
        color: "#888888",
        font: {
          size: 12,
          weight: "normal"
        }
      },
      weight: 5
    },
    scatter: {
      font: {
        size: 12
      },
      labels: {
        backgroundColor: "#ffffff",
        borderRadius: 8,
        color: "#888888",
        font: {
          size: 12,
          weight: "normal"
        }
      }
    },
    stackedArea: {
      cubicInterpolationMode: "default",
      font: {
        size: 12
      },
      labels: {
        backgroundColor: "#ffffff",
        borderRadius: 8,
        color: "#888888",
        font: {
          size: 12,
          weight: "normal"
        }
      },
      lineTension: 0.1
    }
    /* End custom chart overrides */
  },
  container: {
    backgroundColor: "transparent",
    border: "1px solid #ddd",
    borderRadius: "12px",
    boxShadow: "none",
    padding: "15px"
  },
  controls: {
    backgrounds: {
      colors: {
        heavy: "#D1D5DB",
        normal: "#F3F4F6",
        soft: "#FFFFFF",
        transparent: "transparent"
      }
    },
    buttons: {
      active: {
        background: "#FFFFFF",
        border: "#D1D5DB",
        fontColor: "#000"
      },
      hovered: {
        background: "#FFFFFF",
        border: "#A1A5AA",
        fontColor: "#000"
      },
      pressed: {
        background: "#F3F3F4",
        border: "#D1D5DB",
        fontColor: "#000"
      },
      fontSize: "14px",
      height: "50px",
      multiSelect: {
        active: {
          background: "#6778DE",
          border: "1px solid #5062c9",
          fontColor: "#FFFFFF"
        },
        inactive: {
          background: "#F3F4F6",
          border: "1px solid #ffffff",
          fontColor: "#333942"
        },
        margin: "0px 4px 4px 4px",
        maxWidth: "150px",
        padding: "4px 8px",
        radius: "9999px"
      },
      paddingY: "16px",
      paddingX: "32px",
      radius: "9999px"
    },
    borders: {
      colors: {
        normal: "#DADCE1",
        heavy: "D1D5DB"
      },
      padding: 8,
      radius: "12px"
    },
    datepicker: {
      backgrounds: {
        colors: {
          accent: "#f3f4f6",
          rangeEnd: "#7d899b",
          rangeEndDate: "#7d899b",
          rangeMiddle: "#f3f4f6",
          rangeStart: "#7d899b"
        }
      },
      font: {
        colors: {
          accent: "#7d899b",
          rangeEnd: "#ffffff",
          rangeMiddle: "#7d899b",
          rangeStart: "#ffffff",
          rangeStartDate: "#7d899b",
          today: "#111111"
        }
      },
      outsideOpacity: 0.4,
      radiuses: {
        button: "4px",
        buttonEnd: "0px 4px 4px 0px",
        buttonStart: "4px 0px 0px 4px",
        weekNumber: "4px"
      }
    },
    inputs: {
      colors: {
        hover: "#F3F4F6",
        selected: "#F3F4F6"
      }
    },
    skeletonBox: {
      animation: "shimmer 2s infinite",
      backgroundImage: `linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 0,
        rgba(255, 255, 255, 0.2) 20%,
        rgba(255, 255, 255, 0.5) 60%,
        rgba(255, 255, 255, 0)
      );`
    },
    tooltips: {
      radius: "4px"
    }
  },
  dateFormats: {
    year: "yyyy",
    quarter: "MMM yy",
    month: "MMM yy",
    day: "d MMM",
    week: "d MMM",
    hour: "eee HH:mm",
    minute: "eee HH:mm",
    second: "HH:mm:ss"
  },
  downloadMenu: {
    backgroundColor: "#FFFFFF",
    border: "0px solid #EEEEEE",
    borderRadius: "4px",
    boxShadow: "0 4px 6px -1px rgb(0,0,0,0.1), 0 2px 4px -2px rgb(0,0,0,0.1)",
    font: {
      color: "#BBBBBB",
      family: '-apple-system, "system-ui", "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      size: "14px",
      weight: 300
    },
    hover: {
      backgroundColor: "#FFFFFF",
      fontColor: "#888888",
      svgColor: "#888888"
    },
    paddingOuter: 0,
    paddingInner: ".5rem",
    svg: {
      width: "24px",
      height: "24px"
    }
  },
  font: {
    color: "#888888",
    colorNormal: "#333942",
    colorSoft: "#e3e3e3",
    description: {
      color: "#888888",
      size: "14px",
      family: '-apple-system, "system-ui", "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
    },
    family: '-apple-system, "system-ui", "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    size: "14px",
    weight: 400,
    title: {
      color: "#333942",
      size: "16px",
      family: '-apple-system, "system-ui", "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
    },
    urls: []
  },
  png: {
    backgroundColor: "#FFFFFF"
  },
  svg: {
    fillBkg: "#FFFFFF",
    fillNormal: "#474752",
    fillStrong: "#1D1E22",
    strokeSoft: "#474752",
    strokeNormal: "#959CA8",
    strokeStrong: "#101010"
  }
}, R = (e, r) => q;
/*!
 * mergician
 * v2.0.2
 * https://jhildenbiddle.github.io/mergician/
 * (c) 2022-2024 John Hildenbiddle
 * MIT license
 */
function z(...e) {
  const r = {};
  return e.forEach((i) => {
    i.forEach((t) => {
      r[t] = t in r ? ++r[t] : 1;
    });
  }), r;
}
function J(...e) {
  return e.reduce(
    (r, i) => r.filter(Set.prototype.has, new Set(i))
  );
}
function X(...e) {
  const r = z(...e);
  return Object.keys(r).filter((i) => r[i] > 1);
}
function Y(...e) {
  const r = z(...e);
  return Object.keys(r).filter((i) => r[i] < e.length);
}
function Q(...e) {
  const r = z(...e);
  return Object.keys(r).filter((i) => r[i] === 1);
}
function Z(e, r = !1) {
  const i = Object.getOwnPropertyNames(e);
  if (r)
    for (const t in e)
      !i.includes(t) && i.push(t);
  return i;
}
function U(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
function V(e) {
  if (!U(e))
    return !1;
  const r = ["writable", "enumerable", "configurable"].some(
    (y) => y in e
  ), i = ["get", "set"].some((y) => typeof e[y] == "function"), t = ["get", "set"].every((y) => y in e);
  let f = "value" in e && r || i && (t || r);
  if (f) {
    const y = [
      "configurable",
      "get",
      "set",
      "enumerable",
      "value",
      "writable"
    ];
    f = Object.keys(e).some((E) => !(E in y));
  }
  return f;
}
/**
 * @typedef {Object} MergicianOptions
 * @property {string[]} [onlyKeys] - Exclusive array of keys to be merged
 * (others are skipped)
 * @property {string[]} [skipKeys] - Array of keys to skip (others are
 * merged)
 * @property {boolean} [onlyCommonKeys=false] - Merge only keys found
 * in multiple objects (ignore single occurrence keys)
 * @property {boolean} [onlyUniversalKeys=false] - Merge only keys
 * found in all objects
 * @property {boolean} [skipCommonKeys=false] - Skip keys found in
 * multiple objects (merge only single occurrence keys)
 * @property {boolean} [skipUniversalKeys=false] - Skip keys found in
 * all objects (merge only common keys)
 * @property {boolean} [invokeGetters=false] - Invoke "getter" methods
 * and merge returned values
 * @property {boolean} [skipSetters=false] - Skip "setter" methods
 * during merge
 * @property {boolean} [appendArrays=false] - Merge array values at
 * the end of existing arrays
 * @property {boolean} [prependArrays=false] - Merge array values at
 * the beginning of existing arrays
 * @property {boolean} [dedupArrays=false] - Remove duplicate array
 * values in new merged object
 * @property {boolean|function} [sortArrays=false] - Sort array values
 * in new merged object
 * @property {boolean} [hoistEnumerable=false] - Merge enumerable
 * prototype properties as direct properties of merged object
 * @property {boolean} [hoistProto=false] - Merge custom prototype
 * properties as direct properties of merged object
 * @property {boolean} [skipProto=false] - Skip merging of custom
 * prototype properties
 * @property {filterCallback} [filter] - Callback used to conditionally merge
 * or skip a property. Return a "truthy" value to merge or a "falsy" value to
 * skip. Return no value to proceed according to other option values.
 * @property {beforeEachCallback} [beforeEach] - Callback used for
 * inspecting/modifying properties before merge. Return value is used as value
 * to merge.
 * @property {afterEachCallback} [afterEach] - Callback used for
 * inspecting/modifying properties after merge. Return value is used as merged
 * value.
 * @property {onCircularCallback} [onCircular] - Callback used for handling
 * circular object references during merge
 * @preserve
 */
/**
 * @callback filterCallback
 * @param {callbackData} callbackData
 * @preserve
 */
/**
 * @callback beforeEachCallback
 * @param {callbackData} callbackData
 * @preserve
 */
/**
 * @callback afterEachCallback
 * @param {afterEachCallbackData} callbackData
 * @preserve
 */
/**
 * @callback onCircularCallback
 * @param {callbackData} callbackData
 * @preserve
 */
/**
 * @typedef {Object} callbackData
 * @property {number} depth - Nesting level of the key being processed
 * @property {string} key - Object key being processed
 * @property {object} srcObj - Object containing the source value
 * @property {any} srcVal - Source object’s property value
 * @property {object} targetObj - New merged object
 * @property {any} targetVal - New merged object’s current property value
 * @preserve
 */
/**
 * @typedef {Object} afterEachCallbackData
 * @property {number} depth - Nesting level of the key being processed
 * @property {string} key - Object key being processed
 * @property {any} mergeVal - New merged value
 * @property {object} srcObj - Object containing the source value
 * @property {object} targetObj - New merged object
 * @preserve
 */
var K = {
  // Keys
  onlyKeys: [],
  skipKeys: [],
  onlyCommonKeys: !1,
  onlyUniversalKeys: !1,
  skipCommonKeys: !1,
  skipUniversalKeys: !1,
  // Values
  invokeGetters: !1,
  skipSetters: !1,
  // Arrays
  appendArrays: !1,
  prependArrays: !1,
  dedupArrays: !1,
  sortArrays: !1,
  // Prototype
  hoistEnumerable: !1,
  hoistProto: !1,
  skipProto: !1,
  // Callbacks
  filter: Function.prototype,
  beforeEach: Function.prototype,
  afterEach: Function.prototype,
  onCircular: Function.prototype
};
/**
 * @description Deep (recursive) object merging with support for descriptor
 * values, accessor functions, custom prototypes, and advanced options for
 * customizing the merge process.
 *
 * @example
 * // Custom merge options
 * const mergedObj = mergician({
 *   // Options
 * })(obj1, obj2, obj3);
 *
 * // Custom merge function
 * const customMerge = mergician({
 *   // Options
 * });
 * const customMergeObj = customMerge(obj1, obj2, obj3);
 *
 * @overload
 * @param {MergicianOptions} options
 * @returns {function} New merge function with options set as defaults
 * @preserve
 */
/**
 * @description Deep (recursive) object merging with support for descriptor
 * values, accessor functions, custom prototypes, and advanced options for
 * customizing the merge process.
 *
 * @example
 * // Clone with default options
 * const clonedObj = mergician({}, obj1);
 *
 * // Merge with default options
 * const mergedObj = mergician(obj1, obj2, obj3);
 *
 * @overload
 * @param {...object} objects
 * @returns {object} New merged object
 * @preserve
 */
/**
 * @description Deep (recursive) object merging with support for descriptor
 * values, accessor functions, custom prototypes, and advanced options for
 * customizing the merge process.
 *
 * @example
 * // Clone with default options
 * const clonedObj = mergician({}, obj1);
 *
 * // Merge with default options
 * const mergedObj = mergician(obj1, obj2, obj3);
 *
 * @example
 * // Custom merge options
 * const mergedObj = mergician({
 *   // Options
 * })(obj1, obj2, obj3);
 *
 * // Custom merge function
 * const customMerge = mergician({
 *   // Options
 * });
 * const customMergeObj = customMerge(obj1, obj2, obj3);
 *
 * @param {MergicianOptions} optionsOrObject
 * @param {...object} [objects]
 * @returns {function|object} New merge function with options set as defaults
 * (single argument) or new merged object (multiple arguments)
 * @preserve
 */
function H(e, ...r) {
  const i = arguments.length === 1 ? arguments[0] : {}, t = { ...K, ...i }, f = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), E = typeof t.sortArrays == "function" ? t.sortArrays : void 0, O = /* @__PURE__ */ new WeakMap();
  let F = 0;
  function S(c) {
    return Z(c, t.hoistEnumerable);
  }
  function k(...c) {
    let g;
    c.length > 1 && (t.onlyCommonKeys ? g = X(
      ...c.map((n) => S(n))
    ) : t.onlyUniversalKeys ? g = J(...c.map((n) => S(n))) : t.skipCommonKeys ? g = Q(
      ...c.map((n) => S(n))
    ) : t.skipUniversalKeys && (g = Y(...c.map((n) => S(n))))), !g && t.onlyKeys.length && (g = t.onlyKeys), g && g !== t.onlyKeys && t.onlyKeys.length && (g = g.filter(
      (n) => t.onlyKeys.includes(n)
    ));
    const x = c.reduce((n, a) => {
      O.set(a, n);
      let u = g || S(a);
      t.skipKeys.length && (u = u.filter((b) => t.skipKeys.indexOf(b) === -1));
      for (let b = 0; b < u.length; b++) {
        const s = u[b], m = n[s], l = {
          configurable: !0,
          enumerable: !0
        };
        if (!(s in a))
          continue;
        let A = !1, o = a[s];
        const h = Object.getOwnPropertyDescriptor(a, s);
        if (h && typeof h.set == "function" && typeof h.get != "function") {
          t.skipSetters || Object.defineProperty(n, s, h);
          continue;
        }
        if (t.filter !== K.filter) {
          const d = t.filter({
            depth: F,
            key: s,
            srcObj: a,
            srcVal: o,
            targetObj: n,
            targetVal: m
          });
          if (d !== void 0 && !d)
            continue;
        }
        if (t.beforeEach !== K.beforeEach) {
          const d = t.beforeEach({
            depth: F,
            key: s,
            srcObj: a,
            srcVal: o,
            targetObj: n,
            targetVal: m
          });
          d !== void 0 && (A = !0, o = d);
        }
        if (typeof o == "object" && o !== null && O.has(a[s])) {
          const d = t.onCircular({
            depth: F,
            key: s,
            srcObj: a,
            srcVal: a[s],
            targetObj: n,
            targetVal: m
          });
          if (d === void 0) {
            o = O.get(a[s]), n[s] = o;
            continue;
          }
          A = !0, o = d;
        }
        if (Array.isArray(o)) {
          if (o = [...o], Array.isArray(m) && (t.appendArrays ? o = [...m, ...o] : t.prependArrays && (o = [...o, ...m])), t.dedupArrays)
            if (t.afterEach !== K.afterEach)
              o = [...new Set(o)];
            else {
              const d = f.get(n);
              d && !d.includes(s) ? d.push(s) : f.set(n, [s]);
            }
          if (t.sortArrays)
            if (t.afterEach !== K.afterEach)
              o = o.sort(E);
            else {
              const d = y.get(n);
              d && !d.includes(s) ? d.push(s) : y.set(n, [s]);
            }
        } else o instanceof Date ? o = new Date(o) : U(o) && (!A || !V(o)) && (F++, U(m) ? o = k(m, o) : o = k(o), F--);
        if (t.afterEach !== K.afterEach) {
          const d = t.afterEach({
            depth: F,
            key: s,
            mergeVal: o,
            srcObj: a,
            targetObj: n
          });
          d !== void 0 && (A = !0, o = d);
        }
        if (A) {
          const d = V(o) ? o : {
            configurable: !0,
            enumerable: !0,
            value: o,
            writable: !0
          };
          Object.defineProperty(n, s, d);
          continue;
        }
        if (h) {
          const { configurable: d, enumerable: p, get: L, set: j, writable: M } = h;
          Object.assign(l, {
            configurable: d,
            enumerable: p
          }), typeof L == "function" && (t.invokeGetters ? l.value = o : l.get = L), !t.skipSetters && typeof j == "function" && !Object.hasOwnProperty.call(l, "value") && (l.set = j), !l.get && !l.set && (l.writable = !!M);
        }
        !l.get && !l.set && !("value" in l) && (l.value = o, l.writable = h && "writable" in h ? h.writable : !0), Object.defineProperty(n, s, l);
      }
      return n;
    }, {});
    for (const [n, a] of f.entries())
      for (const u of a) {
        const b = Object.getOwnPropertyDescriptor(n, u), { configurable: s, enumerable: m, writable: l } = b;
        Object.defineProperty(n, u, {
          configurable: s,
          enumerable: m,
          value: [...new Set(n[u])],
          writable: l !== void 0 ? l : !0
        });
      }
    for (const [n, a] of y.entries())
      for (const u of a)
        n[u].sort(E);
    let C = x;
    if (!t.skipProto) {
      const n = c.reduce((a, u) => {
        const b = Object.getPrototypeOf(u);
        return b && b !== Object.prototype && a.push(b), a;
      }, []);
      if (n.length) {
        const a = k(...n);
        t.hoistProto ? C = k(a, x) : C = Object.create(
          a,
          Object.getOwnPropertyDescriptors(x)
        );
      }
    }
    return C;
  }
  return arguments.length === 1 ? function(...c) {
    return arguments.length === 1 ? H({ ...t, ...c[0] }) : k(...c);
  } : k(...arguments);
}
const v = "en-US", w = (e, r = {}) => ({
  __embeddableType: "built-in",
  toString: () => e,
  typeConfig: {
    label: e,
    optionLabel: () => e,
    ...r
  }
});
w("string", {
  transform: (e) => e,
  optionLabel: (e) => Array.isArray(e) ? `[${e.map((r) => `"${r}"`).join(",")}]` : `"${e}"`
});
w("number", {
  transform: (e) => Array.isArray(e) ? e : e && Number(e),
  optionLabel: (e) => Array.isArray(e) ? `[${e.join(",")}]` : (e == null ? void 0 : e.toLocaleString(v)) ?? ""
});
w("boolean", {
  transform: (e) => e === "true" || e === !0,
  optionLabel: (e) => e ? "true" : "false"
});
w("time", {
  transform: (e) => {
    const r = e != null && e.date ? new Date(e.date) : void 0;
    return {
      date: r && r.toString() !== "Invalid Date" ? r : void 0,
      relativeTimeString: e == null ? void 0 : e.relativeTimeString
    };
  },
  optionLabel: (e) => {
    var r;
    return e ? e != null && e.date ? ((r = e.date) == null ? void 0 : r.toLocaleDateString(v)) ?? e.date.toLocaleString() : e.relativeTimeString : "";
  }
});
w("timeRange", {
  transform: (e) => {
    if (!e)
      return;
    const [r, i] = [e == null ? void 0 : e.from, e == null ? void 0 : e.to], t = new Date(r), f = new Date(i);
    return {
      from: t.toString() !== "Invalid Date" ? t : void 0,
      to: f.toString() !== "Invalid Date" ? f : void 0,
      relativeTimeString: e == null ? void 0 : e.relativeTimeString
    };
  },
  optionLabel: (e) => {
    var r, i, t, f;
    return e ? e != null && e.from && e != null && e.to ? `${((r = e.from) == null ? void 0 : r.toLocaleDateString(v)) ?? ((i = e.from) == null ? void 0 : i.toLocaleString())},${((t = e.to) == null ? void 0 : t.toLocaleDateString(v)) ?? ((f = e.to) == null ? void 0 : f.toLocaleString())}` : e == null ? void 0 : e.relativeTimeString : "";
  }
});
w("granularity", {
  transform: (e) => e,
  optionLabel: (e) => e
});
w("dataset");
w("measure");
w("dimension");
w("dimensionOrMeasure");
const ee = (e, r) => H(e, r), te = [];
function re(e) {
  let r = {};
  for (const i of te)
    if (typeof i == "function") {
      const t = i(e, r);
      r = ee(r, t);
    }
  return typeof R == "function" ? R() : r;
}
/*!
 * mergician
 * v2.0.2
 * https://jhildenbiddle.github.io/mergician/
 * (c) 2022-2024 John Hildenbiddle
 * MIT license
 */
function B(...e) {
  const r = {};
  return e.forEach((i) => {
    i.forEach((t) => {
      r[t] = t in r ? ++r[t] : 1;
    });
  }), r;
}
function oe(...e) {
  return e.reduce(
    (r, i) => r.filter(Set.prototype.has, new Set(i))
  );
}
function ne(...e) {
  const r = B(...e);
  return Object.keys(r).filter((i) => r[i] > 1);
}
function ie(...e) {
  const r = B(...e);
  return Object.keys(r).filter((i) => r[i] < e.length);
}
function se(...e) {
  const r = B(...e);
  return Object.keys(r).filter((i) => r[i] === 1);
}
function ae(e, r = !1) {
  const i = Object.getOwnPropertyNames(e);
  if (r)
    for (const t in e)
      !i.includes(t) && i.push(t);
  return i;
}
function T(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
function N(e) {
  if (!T(e))
    return !1;
  const r = ["writable", "enumerable", "configurable"].some(
    (y) => y in e
  ), i = ["get", "set"].some((y) => typeof e[y] == "function"), t = ["get", "set"].every((y) => y in e);
  let f = "value" in e && r || i && (t || r);
  if (f) {
    const y = [
      "configurable",
      "get",
      "set",
      "enumerable",
      "value",
      "writable"
    ];
    f = Object.keys(e).some((E) => !(E in y));
  }
  return f;
}
/**
 * @typedef {Object} MergicianOptions
 * @property {string[]} [onlyKeys] - Exclusive array of keys to be merged
 * (others are skipped)
 * @property {string[]} [skipKeys] - Array of keys to skip (others are
 * merged)
 * @property {boolean} [onlyCommonKeys=false] - Merge only keys found
 * in multiple objects (ignore single occurrence keys)
 * @property {boolean} [onlyUniversalKeys=false] - Merge only keys
 * found in all objects
 * @property {boolean} [skipCommonKeys=false] - Skip keys found in
 * multiple objects (merge only single occurrence keys)
 * @property {boolean} [skipUniversalKeys=false] - Skip keys found in
 * all objects (merge only common keys)
 * @property {boolean} [invokeGetters=false] - Invoke "getter" methods
 * and merge returned values
 * @property {boolean} [skipSetters=false] - Skip "setter" methods
 * during merge
 * @property {boolean} [appendArrays=false] - Merge array values at
 * the end of existing arrays
 * @property {boolean} [prependArrays=false] - Merge array values at
 * the beginning of existing arrays
 * @property {boolean} [dedupArrays=false] - Remove duplicate array
 * values in new merged object
 * @property {boolean|function} [sortArrays=false] - Sort array values
 * in new merged object
 * @property {boolean} [hoistEnumerable=false] - Merge enumerable
 * prototype properties as direct properties of merged object
 * @property {boolean} [hoistProto=false] - Merge custom prototype
 * properties as direct properties of merged object
 * @property {boolean} [skipProto=false] - Skip merging of custom
 * prototype properties
 * @property {filterCallback} [filter] - Callback used to conditionally merge
 * or skip a property. Return a "truthy" value to merge or a "falsy" value to
 * skip. Return no value to proceed according to other option values.
 * @property {beforeEachCallback} [beforeEach] - Callback used for
 * inspecting/modifying properties before merge. Return value is used as value
 * to merge.
 * @property {afterEachCallback} [afterEach] - Callback used for
 * inspecting/modifying properties after merge. Return value is used as merged
 * value.
 * @property {onCircularCallback} [onCircular] - Callback used for handling
 * circular object references during merge
 * @preserve
 */
/**
 * @callback filterCallback
 * @param {callbackData} callbackData
 * @preserve
 */
/**
 * @callback beforeEachCallback
 * @param {callbackData} callbackData
 * @preserve
 */
/**
 * @callback afterEachCallback
 * @param {afterEachCallbackData} callbackData
 * @preserve
 */
/**
 * @callback onCircularCallback
 * @param {callbackData} callbackData
 * @preserve
 */
/**
 * @typedef {Object} callbackData
 * @property {number} depth - Nesting level of the key being processed
 * @property {string} key - Object key being processed
 * @property {object} srcObj - Object containing the source value
 * @property {any} srcVal - Source object’s property value
 * @property {object} targetObj - New merged object
 * @property {any} targetVal - New merged object’s current property value
 * @preserve
 */
/**
 * @typedef {Object} afterEachCallbackData
 * @property {number} depth - Nesting level of the key being processed
 * @property {string} key - Object key being processed
 * @property {any} mergeVal - New merged value
 * @property {object} srcObj - Object containing the source value
 * @property {object} targetObj - New merged object
 * @preserve
 */
var P = {
  // Keys
  onlyKeys: [],
  skipKeys: [],
  onlyCommonKeys: !1,
  onlyUniversalKeys: !1,
  skipCommonKeys: !1,
  skipUniversalKeys: !1,
  // Values
  invokeGetters: !1,
  skipSetters: !1,
  // Arrays
  appendArrays: !1,
  prependArrays: !1,
  dedupArrays: !1,
  sortArrays: !1,
  // Prototype
  hoistEnumerable: !1,
  hoistProto: !1,
  skipProto: !1,
  // Callbacks
  filter: Function.prototype,
  beforeEach: Function.prototype,
  afterEach: Function.prototype,
  onCircular: Function.prototype
};
/**
 * @description Deep (recursive) object merging with support for descriptor
 * values, accessor functions, custom prototypes, and advanced options for
 * customizing the merge process.
 *
 * @example
 * // Custom merge options
 * const mergedObj = mergician({
 *   // Options
 * })(obj1, obj2, obj3);
 *
 * // Custom merge function
 * const customMerge = mergician({
 *   // Options
 * });
 * const customMergeObj = customMerge(obj1, obj2, obj3);
 *
 * @overload
 * @param {MergicianOptions} options
 * @returns {function} New merge function with options set as defaults
 * @preserve
 */
/**
 * @description Deep (recursive) object merging with support for descriptor
 * values, accessor functions, custom prototypes, and advanced options for
 * customizing the merge process.
 *
 * @example
 * // Clone with default options
 * const clonedObj = mergician({}, obj1);
 *
 * // Merge with default options
 * const mergedObj = mergician(obj1, obj2, obj3);
 *
 * @overload
 * @param {...object} objects
 * @returns {object} New merged object
 * @preserve
 */
/**
 * @description Deep (recursive) object merging with support for descriptor
 * values, accessor functions, custom prototypes, and advanced options for
 * customizing the merge process.
 *
 * @example
 * // Clone with default options
 * const clonedObj = mergician({}, obj1);
 *
 * // Merge with default options
 * const mergedObj = mergician(obj1, obj2, obj3);
 *
 * @example
 * // Custom merge options
 * const mergedObj = mergician({
 *   // Options
 * })(obj1, obj2, obj3);
 *
 * // Custom merge function
 * const customMerge = mergician({
 *   // Options
 * });
 * const customMergeObj = customMerge(obj1, obj2, obj3);
 *
 * @param {MergicianOptions} optionsOrObject
 * @param {...object} [objects]
 * @returns {function|object} New merge function with options set as defaults
 * (single argument) or new merged object (multiple arguments)
 * @preserve
 */
function W(e, ...r) {
  const i = arguments.length === 1 ? arguments[0] : {}, t = { ...P, ...i }, f = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), E = typeof t.sortArrays == "function" ? t.sortArrays : void 0, O = /* @__PURE__ */ new WeakMap();
  let F = 0;
  function S(c) {
    return ae(c, t.hoistEnumerable);
  }
  function k(...c) {
    let g;
    c.length > 1 && (t.onlyCommonKeys ? g = ne(
      ...c.map((n) => S(n))
    ) : t.onlyUniversalKeys ? g = oe(...c.map((n) => S(n))) : t.skipCommonKeys ? g = se(
      ...c.map((n) => S(n))
    ) : t.skipUniversalKeys && (g = ie(...c.map((n) => S(n))))), !g && t.onlyKeys.length && (g = t.onlyKeys), g && g !== t.onlyKeys && t.onlyKeys.length && (g = g.filter(
      (n) => t.onlyKeys.includes(n)
    ));
    const x = c.reduce((n, a) => {
      O.set(a, n);
      let u = g || S(a);
      t.skipKeys.length && (u = u.filter((b) => t.skipKeys.indexOf(b) === -1));
      for (let b = 0; b < u.length; b++) {
        const s = u[b], m = n[s], l = {
          configurable: !0,
          enumerable: !0
        };
        if (!(s in a))
          continue;
        let A = !1, o = a[s];
        const h = Object.getOwnPropertyDescriptor(a, s);
        if (h && typeof h.set == "function" && typeof h.get != "function") {
          t.skipSetters || Object.defineProperty(n, s, h);
          continue;
        }
        if (t.filter !== P.filter) {
          const p = t.filter({
            depth: F,
            key: s,
            srcObj: a,
            srcVal: o,
            targetObj: n,
            targetVal: m
          });
          if (p !== void 0 && !p)
            continue;
        }
        if (t.beforeEach !== P.beforeEach) {
          const p = t.beforeEach({
            depth: F,
            key: s,
            srcObj: a,
            srcVal: o,
            targetObj: n,
            targetVal: m
          });
          p !== void 0 && (A = !0, o = p);
        }
        if (typeof o == "object" && o !== null && O.has(a[s])) {
          const p = t.onCircular({
            depth: F,
            key: s,
            srcObj: a,
            srcVal: a[s],
            targetObj: n,
            targetVal: m
          });
          if (p === void 0) {
            o = O.get(a[s]), n[s] = o;
            continue;
          }
          A = !0, o = p;
        }
        if (Array.isArray(o)) {
          if (o = [...o], Array.isArray(m) && (t.appendArrays ? o = [...m, ...o] : t.prependArrays && (o = [...o, ...m])), t.dedupArrays)
            if (t.afterEach !== P.afterEach)
              o = [...new Set(o)];
            else {
              const p = f.get(n);
              p && !p.includes(s) ? p.push(s) : f.set(n, [s]);
            }
          if (t.sortArrays)
            if (t.afterEach !== P.afterEach)
              o = o.sort(E);
            else {
              const p = y.get(n);
              p && !p.includes(s) ? p.push(s) : y.set(n, [s]);
            }
        } else o instanceof Date ? o = new Date(o) : T(o) && (!A || !N(o)) && (F++, T(m) ? o = k(m, o) : o = k(o), F--);
        if (t.afterEach !== P.afterEach) {
          const p = t.afterEach({
            depth: F,
            key: s,
            mergeVal: o,
            srcObj: a,
            targetObj: n
          });
          p !== void 0 && (A = !0, o = p);
        }
        if (A) {
          const p = N(o) ? o : {
            configurable: !0,
            enumerable: !0,
            value: o,
            writable: !0
          };
          Object.defineProperty(n, s, p);
          continue;
        }
        if (h) {
          const { configurable: p, enumerable: L, get: j, set: M, writable: G } = h;
          Object.assign(l, {
            configurable: p,
            enumerable: L
          }), typeof j == "function" && (t.invokeGetters ? l.value = o : l.get = j), !t.skipSetters && typeof M == "function" && !Object.hasOwnProperty.call(l, "value") && (l.set = M), !l.get && !l.set && (l.writable = !!G);
        }
        !l.get && !l.set && !("value" in l) && (l.value = o, l.writable = h && "writable" in h ? h.writable : !0), Object.defineProperty(n, s, l);
      }
      return n;
    }, {});
    for (const [n, a] of f.entries())
      for (const u of a) {
        const b = Object.getOwnPropertyDescriptor(n, u), { configurable: s, enumerable: m, writable: l } = b;
        Object.defineProperty(n, u, {
          configurable: s,
          enumerable: m,
          value: [...new Set(n[u])],
          writable: l !== void 0 ? l : !0
        });
      }
    for (const [n, a] of y.entries())
      for (const u of a)
        n[u].sort(E);
    let C = x;
    if (!t.skipProto) {
      const n = c.reduce((a, u) => {
        const b = Object.getPrototypeOf(u);
        return b && b !== Object.prototype && a.push(b), a;
      }, []);
      if (n.length) {
        const a = k(...n);
        t.hoistProto ? C = k(a, x) : C = Object.create(
          a,
          Object.getOwnPropertyDescriptors(x)
        );
      }
    }
    return C;
  }
  return arguments.length === 1 ? function(...c) {
    return arguments.length === 1 ? W({ ...t, ...c[0] }) : k(...c);
  } : k(...arguments);
}
const I = "en-US", D = (e, r = {}) => ({
  __embeddableType: "built-in",
  toString: () => e,
  typeConfig: {
    label: e,
    optionLabel: () => e,
    ...r
  }
});
D("string", {
  transform: (e) => e,
  optionLabel: (e) => Array.isArray(e) ? `[${e.map((r) => `"${r}"`).join(",")}]` : `"${e}"`
});
D("number", {
  transform: (e) => Array.isArray(e) ? e : e && Number(e),
  optionLabel: (e) => Array.isArray(e) ? `[${e.join(",")}]` : (e == null ? void 0 : e.toLocaleString(I)) ?? ""
});
D("boolean", {
  transform: (e) => e === "true" || e === !0,
  optionLabel: (e) => e ? "true" : "false"
});
D("time", {
  transform: (e) => {
    const r = e != null && e.date ? new Date(e.date) : void 0;
    return {
      date: r && r.toString() !== "Invalid Date" ? r : void 0,
      relativeTimeString: e == null ? void 0 : e.relativeTimeString
    };
  },
  optionLabel: (e) => {
    var r;
    return e ? e != null && e.date ? ((r = e.date) == null ? void 0 : r.toLocaleDateString(I)) ?? e.date.toLocaleString() : e.relativeTimeString : "";
  }
});
D("timeRange", {
  transform: (e) => {
    if (!e)
      return;
    const [r, i] = [e == null ? void 0 : e.from, e == null ? void 0 : e.to], t = new Date(r), f = new Date(i);
    return {
      from: t.toString() !== "Invalid Date" ? t : void 0,
      to: f.toString() !== "Invalid Date" ? f : void 0,
      relativeTimeString: e == null ? void 0 : e.relativeTimeString
    };
  },
  optionLabel: (e) => {
    var r, i, t, f;
    return e ? e != null && e.from && (e != null && e.to) ? `${((r = e.from) == null ? void 0 : r.toLocaleDateString(I)) ?? ((i = e.from) == null ? void 0 : i.toLocaleString())},${((t = e.to) == null ? void 0 : t.toLocaleDateString(I)) ?? ((f = e.to) == null ? void 0 : f.toLocaleString())}` : e == null ? void 0 : e.relativeTimeString : "";
  }
});
D("granularity", {
  transform: (e) => e,
  optionLabel: (e) => e
});
D("dataset");
D("measure");
D("dimension");
D("dimensionOrMeasure");
const _ = (e, r) => W(e, r), $ = (e, r) => (e == null ? void 0 : e.theme) === "default" ? r : _(r, {
  brand: {
    primary: "#008348",
    secondary: "#BA9653"
  },
  charts: {
    colors: [
      "#c7522a",
      "#e5c185",
      "#f0daa5",
      "#fbf2c4",
      "#b8cdab",
      "#74a892",
      "#008585",
      "#004343"
    ],
    /* Custom overrides for certain charts */
    bar: {
      borderRadius: 10,
      borderWidth: 0,
      colors: [
        "#555d8e",
        "#566f94",
        "#56819b",
        "#5494a1",
        "#62a4a7",
        "#7db2ac",
        "#97c0b0",
        "#b1ceb5"
      ],
      font: {
        size: 12
      }
    },
    pie: {
      colors: [
        "#ffa600",
        "#ff8531",
        "#ff6361",
        "#de5a79",
        "#bc5090",
        "#8a508f",
        "#58508d",
        "#003f5c"
      ]
    }
    /* End custom chart overrides */
  },
  font: {
    family: "Noto Serif"
  }
}), le = [
  re
];
function fe(e) {
  let r = {};
  for (const i of le)
    if (typeof i == "function") {
      const t = i(e, r);
      r = _(r, t);
    }
  return typeof $ == "function" ? $(e, r) : r;
}
export {
  fe as default
};
