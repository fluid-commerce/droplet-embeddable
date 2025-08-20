function l(t) {
  const e = Object.prototype.toString.call(t);
  return t instanceof Date || typeof t == "object" && e === "[object Date]" ? new t.constructor(+t) : typeof t == "number" || e === "[object Number]" || typeof t == "string" || e === "[object String]" ? new Date(t) : /* @__PURE__ */ new Date(NaN);
}
function y(t, e) {
  return t instanceof Date ? new t.constructor(e) : new Date(e);
}
function V(t, e) {
  const n = +l(t);
  return y(t, n + e);
}
const A = 6048e5, $ = 864e5, J = 6e4, ie = 36e5, oe = 1e3;
let U = {};
function T() {
  return U;
}
function x(t, e) {
  var u, c, d, h;
  const n = T(), r = (e == null ? void 0 : e.weekStartsOn) ?? ((c = (u = e == null ? void 0 : e.locale) == null ? void 0 : u.options) == null ? void 0 : c.weekStartsOn) ?? n.weekStartsOn ?? ((h = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : h.weekStartsOn) ?? 0, a = l(t), i = a.getDay(), s = (i < r ? 7 : 0) + i - r;
  return a.setDate(a.getDate() - s), a.setHours(0, 0, 0, 0), a;
}
function v(t) {
  return x(t, { weekStartsOn: 1 });
}
function B(t) {
  const e = l(t), n = e.getFullYear(), r = y(t, 0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const a = v(r), i = y(t, 0);
  i.setFullYear(n, 0, 4), i.setHours(0, 0, 0, 0);
  const s = v(i);
  return e.getTime() >= a.getTime() ? n + 1 : e.getTime() >= s.getTime() ? n : n - 1;
}
function N(t) {
  const e = l(t);
  return e.setHours(0, 0, 0, 0), e;
}
function q(t) {
  const e = l(t), n = new Date(
    Date.UTC(
      e.getFullYear(),
      e.getMonth(),
      e.getDate(),
      e.getHours(),
      e.getMinutes(),
      e.getSeconds(),
      e.getMilliseconds()
    )
  );
  return n.setUTCFullYear(e.getFullYear()), +t - +n;
}
function z(t, e) {
  const n = N(t), r = N(e), a = +n - q(n), i = +r - q(r);
  return Math.round((a - i) / $);
}
function K(t) {
  const e = B(t), n = y(t, 0);
  return n.setFullYear(e, 0, 4), n.setHours(0, 0, 0, 0), v(n);
}
function Y(t, e) {
  return V(t, e * J);
}
function Z(t) {
  return t instanceof Date || typeof t == "object" && Object.prototype.toString.call(t) === "[object Date]";
}
function tt(t) {
  if (!Z(t) && typeof t != "number")
    return false;
  const e = l(t);
  return !isNaN(Number(e));
}
function et(t) {
  const e = l(t), n = y(t, 0);
  return n.setFullYear(e.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
const nt = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, rt = (t, e, n) => {
  let r;
  const a = nt[t];
  return typeof a == "string" ? r = a : e === 1 ? r = a.one : r = a.other.replace("{{count}}", e.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function S(t) {
  return (e = {}) => {
    const n = e.width ? String(e.width) : t.defaultWidth;
    return t.formats[n] || t.formats[t.defaultWidth];
  };
}
const at = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, it = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, ot = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, st = {
  date: S({
    formats: at,
    defaultWidth: "full"
  }),
  time: S({
    formats: it,
    defaultWidth: "full"
  }),
  dateTime: S({
    formats: ot,
    defaultWidth: "full"
  })
}, ut = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, ct = (t, e, n, r) => ut[t];
function k(t) {
  return (e, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let a;
    if (r === "formatting" && t.formattingValues) {
      const s = t.defaultFormattingWidth || t.defaultWidth, u = n != null && n.width ? String(n.width) : s;
      a = t.formattingValues[u] || t.formattingValues[s];
    } else {
      const s = t.defaultWidth, u = n != null && n.width ? String(n.width) : t.defaultWidth;
      a = t.values[u] || t.values[s];
    }
    const i = t.argumentCallback ? t.argumentCallback(e) : e;
    return a[i];
  };
}
const dt = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, ft = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, ht = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, mt = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, lt = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, gt = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, wt = (t, e) => {
  const n = Number(t), r = n % 100;
  if (r > 20 || r < 10)
    switch (r % 10) {
      case 1:
        return n + "st";
      case 2:
        return n + "nd";
      case 3:
        return n + "rd";
    }
  return n + "th";
}, yt = {
  ordinalNumber: wt,
  era: k({
    values: dt,
    defaultWidth: "wide"
  }),
  quarter: k({
    values: ft,
    defaultWidth: "wide",
    argumentCallback: (t) => t - 1
  }),
  month: k({
    values: ht,
    defaultWidth: "wide"
  }),
  day: k({
    values: mt,
    defaultWidth: "wide"
  }),
  dayPeriod: k({
    values: lt,
    defaultWidth: "wide",
    formattingValues: gt,
    defaultFormattingWidth: "wide"
  })
};
function D(t) {
  return (e, n = {}) => {
    const r = n.width, a = r && t.matchPatterns[r] || t.matchPatterns[t.defaultMatchWidth], i = e.match(a);
    if (!i)
      return null;
    const s = i[0], u = r && t.parsePatterns[r] || t.parsePatterns[t.defaultParseWidth], c = Array.isArray(u) ? Ot(u, (g) => g.test(s)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      bt(u, (g) => g.test(s))
    );
    let d;
    d = t.valueCallback ? t.valueCallback(c) : c, d = n.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      n.valueCallback(d)
    ) : d;
    const h = e.slice(s.length);
    return { value: d, rest: h };
  };
}
function bt(t, e) {
  for (const n in t)
    if (Object.prototype.hasOwnProperty.call(t, n) && e(t[n]))
      return n;
}
function Ot(t, e) {
  for (let n = 0; n < t.length; n++)
    if (e(t[n]))
      return n;
}
function Mt(t) {
  return (e, n = {}) => {
    const r = e.match(t.matchPattern);
    if (!r) return null;
    const a = r[0], i = e.match(t.parsePattern);
    if (!i) return null;
    let s = t.valueCallback ? t.valueCallback(i[0]) : i[0];
    s = n.valueCallback ? n.valueCallback(s) : s;
    const u = e.slice(a.length);
    return { value: s, rest: u };
  };
}
const Pt = /^(\d+)(th|st|nd|rd)?/i, kt = /\d+/i, Dt = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, xt = {
  any: [/^b/i, /^(a|c)/i]
}, vt = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Tt = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Wt = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, St = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, Yt = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Ft = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, pt = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Et = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, Ct = {
  ordinalNumber: Mt({
    matchPattern: Pt,
    parsePattern: kt,
    valueCallback: (t) => parseInt(t, 10)
  }),
  era: D({
    matchPatterns: Dt,
    defaultMatchWidth: "wide",
    parsePatterns: xt,
    defaultParseWidth: "any"
  }),
  quarter: D({
    matchPatterns: vt,
    defaultMatchWidth: "wide",
    parsePatterns: Tt,
    defaultParseWidth: "any",
    valueCallback: (t) => t + 1
  }),
  month: D({
    matchPatterns: Wt,
    defaultMatchWidth: "wide",
    parsePatterns: St,
    defaultParseWidth: "any"
  }),
  day: D({
    matchPatterns: Yt,
    defaultMatchWidth: "wide",
    parsePatterns: Ft,
    defaultParseWidth: "any"
  }),
  dayPeriod: D({
    matchPatterns: pt,
    defaultMatchWidth: "any",
    parsePatterns: Et,
    defaultParseWidth: "any"
  })
}, Nt = {
  code: "en-US",
  formatDistance: rt,
  formatLong: st,
  formatRelative: ct,
  localize: yt,
  match: Ct,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function qt(t) {
  const e = l(t);
  return z(e, et(e)) + 1;
}
function Ht(t) {
  const e = l(t), n = +v(e) - +K(e);
  return Math.round(n / A) + 1;
}
function G(t, e) {
  var h, g, M, P;
  const n = l(t), r = n.getFullYear(), a = T(), i = (e == null ? void 0 : e.firstWeekContainsDate) ?? ((g = (h = e == null ? void 0 : e.locale) == null ? void 0 : h.options) == null ? void 0 : g.firstWeekContainsDate) ?? a.firstWeekContainsDate ?? ((P = (M = a.locale) == null ? void 0 : M.options) == null ? void 0 : P.firstWeekContainsDate) ?? 1, s = y(t, 0);
  s.setFullYear(r + 1, 0, i), s.setHours(0, 0, 0, 0);
  const u = x(s, e), c = y(t, 0);
  c.setFullYear(r, 0, i), c.setHours(0, 0, 0, 0);
  const d = x(c, e);
  return n.getTime() >= u.getTime() ? r + 1 : n.getTime() >= d.getTime() ? r : r - 1;
}
function Lt(t, e) {
  var u, c, d, h;
  const n = T(), r = (e == null ? void 0 : e.firstWeekContainsDate) ?? ((c = (u = e == null ? void 0 : e.locale) == null ? void 0 : u.options) == null ? void 0 : c.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((h = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : h.firstWeekContainsDate) ?? 1, a = G(t, e), i = y(t, 0);
  return i.setFullYear(a, 0, r), i.setHours(0, 0, 0, 0), x(i, e);
}
function Qt(t, e) {
  const n = l(t), r = +x(n, e) - +Lt(n, e);
  return Math.round(r / A) + 1;
}
function o(t, e) {
  const n = t < 0 ? "-" : "", r = Math.abs(t).toString().padStart(e, "0");
  return n + r;
}
const w = {
  // Year
  y(t, e) {
    const n = t.getFullYear(), r = n > 0 ? n : 1 - n;
    return o(e === "yy" ? r % 100 : r, e.length);
  },
  // Month
  M(t, e) {
    const n = t.getMonth();
    return e === "M" ? String(n + 1) : o(n + 1, 2);
  },
  // Day of the month
  d(t, e) {
    return o(t.getDate(), e.length);
  },
  // AM or PM
  a(t, e) {
    const n = t.getHours() / 12 >= 1 ? "pm" : "am";
    switch (e) {
      case "a":
      case "aa":
        return n.toUpperCase();
      case "aaa":
        return n;
      case "aaaaa":
        return n[0];
      case "aaaa":
      default:
        return n === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(t, e) {
    return o(t.getHours() % 12 || 12, e.length);
  },
  // Hour [0-23]
  H(t, e) {
    return o(t.getHours(), e.length);
  },
  // Minute
  m(t, e) {
    return o(t.getMinutes(), e.length);
  },
  // Second
  s(t, e) {
    return o(t.getSeconds(), e.length);
  },
  // Fraction of second
  S(t, e) {
    const n = e.length, r = t.getMilliseconds(), a = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return o(a, e.length);
  }
}, O = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, H = {
  // Era
  G: function(t, e, n) {
    const r = t.getFullYear() > 0 ? 1 : 0;
    switch (e) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return n.era(r, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return n.era(r, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return n.era(r, { width: "wide" });
    }
  },
  // Year
  y: function(t, e, n) {
    if (e === "yo") {
      const r = t.getFullYear(), a = r > 0 ? r : 1 - r;
      return n.ordinalNumber(a, { unit: "year" });
    }
    return w.y(t, e);
  },
  // Local week-numbering year
  Y: function(t, e, n, r) {
    const a = G(t, r), i = a > 0 ? a : 1 - a;
    if (e === "YY") {
      const s = i % 100;
      return o(s, 2);
    }
    return e === "Yo" ? n.ordinalNumber(i, { unit: "year" }) : o(i, e.length);
  },
  // ISO week-numbering year
  R: function(t, e) {
    const n = B(t);
    return o(n, e.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(t, e) {
    const n = t.getFullYear();
    return o(n, e.length);
  },
  // Quarter
  Q: function(t, e, n) {
    const r = Math.ceil((t.getMonth() + 1) / 3);
    switch (e) {
      // 1, 2, 3, 4
      case "Q":
        return String(r);
      // 01, 02, 03, 04
      case "QQ":
        return o(r, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return n.quarter(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return n.quarter(r, {
          width: "narrow",
          context: "formatting"
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(t, e, n) {
    const r = Math.ceil((t.getMonth() + 1) / 3);
    switch (e) {
      // 1, 2, 3, 4
      case "q":
        return String(r);
      // 01, 02, 03, 04
      case "qq":
        return o(r, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return n.quarter(r, {
          width: "abbreviated",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return n.quarter(r, {
          width: "narrow",
          context: "standalone"
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(t, e, n) {
    const r = t.getMonth();
    switch (e) {
      case "M":
      case "MM":
        return w.M(t, e);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return n.month(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // J, F, ..., D
      case "MMMMM":
        return n.month(r, {
          width: "narrow",
          context: "formatting"
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return n.month(r, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(t, e, n) {
    const r = t.getMonth();
    switch (e) {
      // 1, 2, ..., 12
      case "L":
        return String(r + 1);
      // 01, 02, ..., 12
      case "LL":
        return o(r + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return n.month(r, {
          width: "abbreviated",
          context: "standalone"
        });
      // J, F, ..., D
      case "LLLLL":
        return n.month(r, {
          width: "narrow",
          context: "standalone"
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return n.month(r, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(t, e, n, r) {
    const a = Qt(t, r);
    return e === "wo" ? n.ordinalNumber(a, { unit: "week" }) : o(a, e.length);
  },
  // ISO week of year
  I: function(t, e, n) {
    const r = Ht(t);
    return e === "Io" ? n.ordinalNumber(r, { unit: "week" }) : o(r, e.length);
  },
  // Day of the month
  d: function(t, e, n) {
    return e === "do" ? n.ordinalNumber(t.getDate(), { unit: "date" }) : w.d(t, e);
  },
  // Day of year
  D: function(t, e, n) {
    const r = qt(t);
    return e === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : o(r, e.length);
  },
  // Day of week
  E: function(t, e, n) {
    const r = t.getDay();
    switch (e) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "EEEEE":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "EEEE":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(t, e, n, r) {
    const a = t.getDay(), i = (a - r.weekStartsOn + 8) % 7 || 7;
    switch (e) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(i);
      // Padded numerical value
      case "ee":
        return o(i, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return n.ordinalNumber(i, { unit: "day" });
      case "eee":
        return n.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "eeeee":
        return n.day(a, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return n.day(a, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "eeee":
      default:
        return n.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(t, e, n, r) {
    const a = t.getDay(), i = (a - r.weekStartsOn + 8) % 7 || 7;
    switch (e) {
      // Numerical value (same as in `e`)
      case "c":
        return String(i);
      // Padded numerical value
      case "cc":
        return o(i, e.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return n.ordinalNumber(i, { unit: "day" });
      case "ccc":
        return n.day(a, {
          width: "abbreviated",
          context: "standalone"
        });
      // T
      case "ccccc":
        return n.day(a, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return n.day(a, {
          width: "short",
          context: "standalone"
        });
      // Tuesday
      case "cccc":
      default:
        return n.day(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(t, e, n) {
    const r = t.getDay(), a = r === 0 ? 7 : r;
    switch (e) {
      // 2
      case "i":
        return String(a);
      // 02
      case "ii":
        return o(a, e.length);
      // 2nd
      case "io":
        return n.ordinalNumber(a, { unit: "day" });
      // Tue
      case "iii":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "iiiii":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "iiiiii":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "iiii":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(t, e, n) {
    const a = t.getHours() / 12 >= 1 ? "pm" : "am";
    switch (e) {
      case "a":
      case "aa":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return n.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(t, e, n) {
    const r = t.getHours();
    let a;
    switch (r === 12 ? a = O.noon : r === 0 ? a = O.midnight : a = r / 12 >= 1 ? "pm" : "am", e) {
      case "b":
      case "bb":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return n.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(t, e, n) {
    const r = t.getHours();
    let a;
    switch (r >= 17 ? a = O.evening : r >= 12 ? a = O.afternoon : r >= 4 ? a = O.morning : a = O.night, e) {
      case "B":
      case "BB":
      case "BBB":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return n.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(t, e, n) {
    if (e === "ho") {
      let r = t.getHours() % 12;
      return r === 0 && (r = 12), n.ordinalNumber(r, { unit: "hour" });
    }
    return w.h(t, e);
  },
  // Hour [0-23]
  H: function(t, e, n) {
    return e === "Ho" ? n.ordinalNumber(t.getHours(), { unit: "hour" }) : w.H(t, e);
  },
  // Hour [0-11]
  K: function(t, e, n) {
    const r = t.getHours() % 12;
    return e === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : o(r, e.length);
  },
  // Hour [1-24]
  k: function(t, e, n) {
    let r = t.getHours();
    return r === 0 && (r = 24), e === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : o(r, e.length);
  },
  // Minute
  m: function(t, e, n) {
    return e === "mo" ? n.ordinalNumber(t.getMinutes(), { unit: "minute" }) : w.m(t, e);
  },
  // Second
  s: function(t, e, n) {
    return e === "so" ? n.ordinalNumber(t.getSeconds(), { unit: "second" }) : w.s(t, e);
  },
  // Fraction of second
  S: function(t, e) {
    return w.S(t, e);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(t, e, n) {
    const r = t.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (e) {
      // Hours and optional minutes
      case "X":
        return Q(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return b(r);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return b(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(t, e, n) {
    const r = t.getTimezoneOffset();
    switch (e) {
      // Hours and optional minutes
      case "x":
        return Q(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return b(r);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return b(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(t, e, n) {
    const r = t.getTimezoneOffset();
    switch (e) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + L(r, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + b(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(t, e, n) {
    const r = t.getTimezoneOffset();
    switch (e) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + L(r, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + b(r, ":");
    }
  },
  // Seconds timestamp
  t: function(t, e, n) {
    const r = Math.trunc(t.getTime() / 1e3);
    return o(r, e.length);
  },
  // Milliseconds timestamp
  T: function(t, e, n) {
    const r = t.getTime();
    return o(r, e.length);
  }
};
function L(t, e = "") {
  const n = t > 0 ? "-" : "+", r = Math.abs(t), a = Math.trunc(r / 60), i = r % 60;
  return i === 0 ? n + String(a) : n + String(a) + e + o(i, 2);
}
function Q(t, e) {
  return t % 60 === 0 ? (t > 0 ? "-" : "+") + o(Math.abs(t) / 60, 2) : b(t, e);
}
function b(t, e = "") {
  const n = t > 0 ? "-" : "+", r = Math.abs(t), a = o(Math.trunc(r / 60), 2), i = o(r % 60, 2);
  return n + a + e + i;
}
const j = (t, e) => {
  switch (t) {
    case "P":
      return e.date({ width: "short" });
    case "PP":
      return e.date({ width: "medium" });
    case "PPP":
      return e.date({ width: "long" });
    case "PPPP":
    default:
      return e.date({ width: "full" });
  }
}, I = (t, e) => {
  switch (t) {
    case "p":
      return e.time({ width: "short" });
    case "pp":
      return e.time({ width: "medium" });
    case "ppp":
      return e.time({ width: "long" });
    case "pppp":
    default:
      return e.time({ width: "full" });
  }
}, jt = (t, e) => {
  const n = t.match(/(P+)(p+)?/) || [], r = n[1], a = n[2];
  if (!a)
    return j(t, e);
  let i;
  switch (r) {
    case "P":
      i = e.dateTime({ width: "short" });
      break;
    case "PP":
      i = e.dateTime({ width: "medium" });
      break;
    case "PPP":
      i = e.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      i = e.dateTime({ width: "full" });
      break;
  }
  return i.replace("{{date}}", j(r, e)).replace("{{time}}", I(a, e));
}, Rt = {
  p: I,
  P: jt
}, Xt = /^D+$/, _t = /^Y+$/, At = ["D", "DD", "YY", "YYYY"];
function Bt(t) {
  return Xt.test(t);
}
function Gt(t) {
  return _t.test(t);
}
function It(t, e, n) {
  const r = Vt(t, e, n);
  if (console.warn(r), At.includes(t)) throw new RangeError(r);
}
function Vt(t, e, n) {
  const r = t[0] === "Y" ? "years" : "days of the month";
  return `Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const $t = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Jt = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Ut = /^'([^]*?)'?$/, zt = /''/g, Kt = /[a-zA-Z]/;
function Zt(t, e, n) {
  var h, g, M, P, F, p, E, C;
  const r = T(), a = (n == null ? void 0 : n.locale) ?? r.locale ?? Nt, i = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((g = (h = n == null ? void 0 : n.locale) == null ? void 0 : h.options) == null ? void 0 : g.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((P = (M = r.locale) == null ? void 0 : M.options) == null ? void 0 : P.firstWeekContainsDate) ?? 1, s = (n == null ? void 0 : n.weekStartsOn) ?? ((p = (F = n == null ? void 0 : n.locale) == null ? void 0 : F.options) == null ? void 0 : p.weekStartsOn) ?? r.weekStartsOn ?? ((C = (E = r.locale) == null ? void 0 : E.options) == null ? void 0 : C.weekStartsOn) ?? 0, u = l(t);
  if (!tt(u))
    throw new RangeError("Invalid time value");
  let c = e.match(Jt).map((m) => {
    const f = m[0];
    if (f === "p" || f === "P") {
      const W = Rt[f];
      return W(m, a.formatLong);
    }
    return m;
  }).join("").match($t).map((m) => {
    if (m === "''")
      return { isToken: false, value: "'" };
    const f = m[0];
    if (f === "'")
      return { isToken: false, value: te(m) };
    if (H[f])
      return { isToken: true, value: m };
    if (f.match(Kt))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + f + "`"
      );
    return { isToken: false, value: m };
  });
  a.localize.preprocessor && (c = a.localize.preprocessor(u, c));
  const d = {
    firstWeekContainsDate: i,
    weekStartsOn: s,
    locale: a
  };
  return c.map((m) => {
    if (!m.isToken) return m.value;
    const f = m.value;
    (!(n != null && n.useAdditionalWeekYearTokens) && Gt(f) || !(n != null && n.useAdditionalDayOfYearTokens) && Bt(f)) && It(f, e, String(t));
    const W = H[f[0]];
    return W(u, f, a.localize, d);
  }).join("");
}
function te(t) {
  const e = t.match(Ut);
  return e ? e[1].replace(zt, "'") : t;
}
function ee(t) {
  const e = t.match(
    /(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2}):(\d{2})(?:\.(\d{0,7}))?(?:Z|(.)(\d{2}):?(\d{2})?)?/
  );
  return e ? new Date(
    Date.UTC(
      +e[1],
      +e[2] - 1,
      +e[3],
      +e[4] - (+e[9] || 0) * (e[8] == "-" ? -1 : 1),
      +e[5] - (+e[10] || 0) * (e[8] == "-" ? -1 : 1),
      +e[6],
      +((e[7] || "0") + "00").substring(0, 3)
    )
  ) : /* @__PURE__ */ new Date(NaN);
}
function R(t, e) {
  return Y(t, -e);
}
function ne(t) {
  const e = ee(t);
  return e.valueOf() + e.getTimezoneOffset() * 6e4;
}
function se(t) {
  return !(t != null && t.to) || !(t != null && t.from) ? t : {
    ...t,
    to: X(t.to),
    from: X(t.from)
  };
}
function ue(t) {
  return !(t != null && t.to) || !(t != null && t.from) ? t : {
    ...t,
    to: _(t.to),
    from: _(t.from)
  };
}
function X(t) {
  if (!t)
    return;
  if (t instanceof Date)
    return R(t, t.getTimezoneOffset());
  const e = new Date(t);
  if (e)
    return R(e, e.getTimezoneOffset());
}
function _(t) {
  if (!t)
    return;
  if (t instanceof Date)
    return Y(t, t.getTimezoneOffset());
  const e = new Date(t);
  if (e)
    return Y(e, e.getTimezoneOffset());
}
function re(t) {
  const e = t == null || t < 0;
  return new Intl.NumberFormat(void 0, {
    minimumFractionDigits: e ? 0 : t,
    // Minimum number of digits after the decimal
    maximumFractionDigits: e ? 2 : t
    // Maximum number of digits after the decimal
  });
}
const ae = new Intl.DateTimeFormat();
function ce(t = "", e = "string") {
  if (t === null) return null;
  const { type: n, dateFormat: r, meta: a, truncate: i, dps: s } = typeof e == "string" ? { type: e } : e;
  if (n === "number") return u(re(s).format(parseFloat(t)));
  if (n === "date" && t.endsWith("T00:00:00.000"))
    return u(ae.format(new Date(t)));
  if (n === "date") return u(new Date(t).toLocaleString());
  if (i)
    return (t == null ? void 0 : t.length) > i ? `${(a == null ? void 0 : a.pretext) || ""}${t.substring(0, i)}...` : u(t);
  if (r && t) return u(Zt(ne(t), r));
  return t;
  function u(c) {
    return `${(a == null ? void 0 : a.pretext) || ""}${c}${(a == null ? void 0 : a.posttext) || ""}`;
  }
}
const de = (t) => {
  if (!t)
    return { linkText: null, linkUrl: null };
  const e = /\[(.*)\]\((.*)\)/.exec(t);
  return { linkText: e == null ? void 0 : e[1], linkUrl: encodeURI((e == null ? void 0 : e[2]) || "") };
};

export { Bt as B, G, Ht as H, It as I, J, Nt as N, Qt as Q, R, T, V, X, Y, Zt as Z, Rt as a, Gt as b, ce as c, de as d, ee as e, et as f, N as g, ie as i, l, ne as n, oe as o, q, se as s, tt as t, ue as u, v, x, y, z };
//# sourceMappingURL=format-TjzP8gQX-Cs7Vwno2-CeUXJh2P.js.map
//# sourceMappingURL=format-TjzP8gQX-Cs7Vwno2-CeUXJh2P.js.map
