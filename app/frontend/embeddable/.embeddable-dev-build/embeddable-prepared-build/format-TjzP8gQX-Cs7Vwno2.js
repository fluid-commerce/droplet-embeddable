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
export {
  Bt as B,
  G,
  Ht as H,
  It as I,
  J,
  N,
  Qt as Q,
  R,
  T,
  V,
  X,
  Y,
  Zt as Z,
  Nt as a,
  Rt as b,
  ce as c,
  de as d,
  ee as e,
  Gt as f,
  et as g,
  ie as i,
  l,
  ne as n,
  oe as o,
  q,
  se as s,
  tt as t,
  ue as u,
  v,
  x,
  y,
  z
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LVRqelA4Z1FYLUNzN1Z3bm8yLmpzIiwic291cmNlcyI6WyIvVXNlcnMvY2hyaXN0b3BoZXJjYXJsc29uL2ZsdWlkL2Ryb3BsZXQtZW1iZWRkYWJsZS9hcHAvZnJvbnRlbmQvZW1iZWRkYWJsZS9ub2RlX21vZHVsZXMvQGVtYmVkZGFibGUuY29tL3ZhbmlsbGEtY29tcG9uZW50cy9kaXN0L2Zvcm1hdC1UanpQOGdRWC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBsKHQpIHtcbiAgY29uc3QgZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0KTtcbiAgcmV0dXJuIHQgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiB0ID09IFwib2JqZWN0XCIgJiYgZSA9PT0gXCJbb2JqZWN0IERhdGVdXCIgPyBuZXcgdC5jb25zdHJ1Y3RvcigrdCkgOiB0eXBlb2YgdCA9PSBcIm51bWJlclwiIHx8IGUgPT09IFwiW29iamVjdCBOdW1iZXJdXCIgfHwgdHlwZW9mIHQgPT0gXCJzdHJpbmdcIiB8fCBlID09PSBcIltvYmplY3QgU3RyaW5nXVwiID8gbmV3IERhdGUodCkgOiAvKiBAX19QVVJFX18gKi8gbmV3IERhdGUoTmFOKTtcbn1cbmZ1bmN0aW9uIHkodCwgZSkge1xuICByZXR1cm4gdCBpbnN0YW5jZW9mIERhdGUgPyBuZXcgdC5jb25zdHJ1Y3RvcihlKSA6IG5ldyBEYXRlKGUpO1xufVxuZnVuY3Rpb24gVih0LCBlKSB7XG4gIGNvbnN0IG4gPSArbCh0KTtcbiAgcmV0dXJuIHkodCwgbiArIGUpO1xufVxuY29uc3QgQSA9IDYwNDhlNSwgJCA9IDg2NGU1LCBKID0gNmU0LCBpZSA9IDM2ZTUsIG9lID0gMWUzO1xubGV0IFUgPSB7fTtcbmZ1bmN0aW9uIFQoKSB7XG4gIHJldHVybiBVO1xufVxuZnVuY3Rpb24geCh0LCBlKSB7XG4gIHZhciB1LCBjLCBkLCBoO1xuICBjb25zdCBuID0gVCgpLCByID0gKGUgPT0gbnVsbCA/IHZvaWQgMCA6IGUud2Vla1N0YXJ0c09uKSA/PyAoKGMgPSAodSA9IGUgPT0gbnVsbCA/IHZvaWQgMCA6IGUubG9jYWxlKSA9PSBudWxsID8gdm9pZCAwIDogdS5vcHRpb25zKSA9PSBudWxsID8gdm9pZCAwIDogYy53ZWVrU3RhcnRzT24pID8/IG4ud2Vla1N0YXJ0c09uID8/ICgoaCA9IChkID0gbi5sb2NhbGUpID09IG51bGwgPyB2b2lkIDAgOiBkLm9wdGlvbnMpID09IG51bGwgPyB2b2lkIDAgOiBoLndlZWtTdGFydHNPbikgPz8gMCwgYSA9IGwodCksIGkgPSBhLmdldERheSgpLCBzID0gKGkgPCByID8gNyA6IDApICsgaSAtIHI7XG4gIHJldHVybiBhLnNldERhdGUoYS5nZXREYXRlKCkgLSBzKSwgYS5zZXRIb3VycygwLCAwLCAwLCAwKSwgYTtcbn1cbmZ1bmN0aW9uIHYodCkge1xuICByZXR1cm4geCh0LCB7IHdlZWtTdGFydHNPbjogMSB9KTtcbn1cbmZ1bmN0aW9uIEIodCkge1xuICBjb25zdCBlID0gbCh0KSwgbiA9IGUuZ2V0RnVsbFllYXIoKSwgciA9IHkodCwgMCk7XG4gIHIuc2V0RnVsbFllYXIobiArIDEsIDAsIDQpLCByLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICBjb25zdCBhID0gdihyKSwgaSA9IHkodCwgMCk7XG4gIGkuc2V0RnVsbFllYXIobiwgMCwgNCksIGkuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIGNvbnN0IHMgPSB2KGkpO1xuICByZXR1cm4gZS5nZXRUaW1lKCkgPj0gYS5nZXRUaW1lKCkgPyBuICsgMSA6IGUuZ2V0VGltZSgpID49IHMuZ2V0VGltZSgpID8gbiA6IG4gLSAxO1xufVxuZnVuY3Rpb24gTih0KSB7XG4gIGNvbnN0IGUgPSBsKHQpO1xuICByZXR1cm4gZS5zZXRIb3VycygwLCAwLCAwLCAwKSwgZTtcbn1cbmZ1bmN0aW9uIHEodCkge1xuICBjb25zdCBlID0gbCh0KSwgbiA9IG5ldyBEYXRlKFxuICAgIERhdGUuVVRDKFxuICAgICAgZS5nZXRGdWxsWWVhcigpLFxuICAgICAgZS5nZXRNb250aCgpLFxuICAgICAgZS5nZXREYXRlKCksXG4gICAgICBlLmdldEhvdXJzKCksXG4gICAgICBlLmdldE1pbnV0ZXMoKSxcbiAgICAgIGUuZ2V0U2Vjb25kcygpLFxuICAgICAgZS5nZXRNaWxsaXNlY29uZHMoKVxuICAgIClcbiAgKTtcbiAgcmV0dXJuIG4uc2V0VVRDRnVsbFllYXIoZS5nZXRGdWxsWWVhcigpKSwgK3QgLSArbjtcbn1cbmZ1bmN0aW9uIHoodCwgZSkge1xuICBjb25zdCBuID0gTih0KSwgciA9IE4oZSksIGEgPSArbiAtIHEobiksIGkgPSArciAtIHEocik7XG4gIHJldHVybiBNYXRoLnJvdW5kKChhIC0gaSkgLyAkKTtcbn1cbmZ1bmN0aW9uIEsodCkge1xuICBjb25zdCBlID0gQih0KSwgbiA9IHkodCwgMCk7XG4gIHJldHVybiBuLnNldEZ1bGxZZWFyKGUsIDAsIDQpLCBuLnNldEhvdXJzKDAsIDAsIDAsIDApLCB2KG4pO1xufVxuZnVuY3Rpb24gWSh0LCBlKSB7XG4gIHJldHVybiBWKHQsIGUgKiBKKTtcbn1cbmZ1bmN0aW9uIFoodCkge1xuICByZXR1cm4gdCBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIHQgPT0gXCJvYmplY3RcIiAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodCkgPT09IFwiW29iamVjdCBEYXRlXVwiO1xufVxuZnVuY3Rpb24gdHQodCkge1xuICBpZiAoIVoodCkgJiYgdHlwZW9mIHQgIT0gXCJudW1iZXJcIilcbiAgICByZXR1cm4gITE7XG4gIGNvbnN0IGUgPSBsKHQpO1xuICByZXR1cm4gIWlzTmFOKE51bWJlcihlKSk7XG59XG5mdW5jdGlvbiBldCh0KSB7XG4gIGNvbnN0IGUgPSBsKHQpLCBuID0geSh0LCAwKTtcbiAgcmV0dXJuIG4uc2V0RnVsbFllYXIoZS5nZXRGdWxsWWVhcigpLCAwLCAxKSwgbi5zZXRIb3VycygwLCAwLCAwLCAwKSwgbjtcbn1cbmNvbnN0IG50ID0ge1xuICBsZXNzVGhhblhTZWNvbmRzOiB7XG4gICAgb25lOiBcImxlc3MgdGhhbiBhIHNlY29uZFwiLFxuICAgIG90aGVyOiBcImxlc3MgdGhhbiB7e2NvdW50fX0gc2Vjb25kc1wiXG4gIH0sXG4gIHhTZWNvbmRzOiB7XG4gICAgb25lOiBcIjEgc2Vjb25kXCIsXG4gICAgb3RoZXI6IFwie3tjb3VudH19IHNlY29uZHNcIlxuICB9LFxuICBoYWxmQU1pbnV0ZTogXCJoYWxmIGEgbWludXRlXCIsXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBvbmU6IFwibGVzcyB0aGFuIGEgbWludXRlXCIsXG4gICAgb3RoZXI6IFwibGVzcyB0aGFuIHt7Y291bnR9fSBtaW51dGVzXCJcbiAgfSxcbiAgeE1pbnV0ZXM6IHtcbiAgICBvbmU6IFwiMSBtaW51dGVcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0gbWludXRlc1wiXG4gIH0sXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiBcImFib3V0IDEgaG91clwiLFxuICAgIG90aGVyOiBcImFib3V0IHt7Y291bnR9fSBob3Vyc1wiXG4gIH0sXG4gIHhIb3Vyczoge1xuICAgIG9uZTogXCIxIGhvdXJcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0gaG91cnNcIlxuICB9LFxuICB4RGF5czoge1xuICAgIG9uZTogXCIxIGRheVwiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSBkYXlzXCJcbiAgfSxcbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6IFwiYWJvdXQgMSB3ZWVrXCIsXG4gICAgb3RoZXI6IFwiYWJvdXQge3tjb3VudH19IHdlZWtzXCJcbiAgfSxcbiAgeFdlZWtzOiB7XG4gICAgb25lOiBcIjEgd2Vla1wiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSB3ZWVrc1wiXG4gIH0sXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogXCJhYm91dCAxIG1vbnRoXCIsXG4gICAgb3RoZXI6IFwiYWJvdXQge3tjb3VudH19IG1vbnRoc1wiXG4gIH0sXG4gIHhNb250aHM6IHtcbiAgICBvbmU6IFwiMSBtb250aFwiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSBtb250aHNcIlxuICB9LFxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogXCJhYm91dCAxIHllYXJcIixcbiAgICBvdGhlcjogXCJhYm91dCB7e2NvdW50fX0geWVhcnNcIlxuICB9LFxuICB4WWVhcnM6IHtcbiAgICBvbmU6IFwiMSB5ZWFyXCIsXG4gICAgb3RoZXI6IFwie3tjb3VudH19IHllYXJzXCJcbiAgfSxcbiAgb3ZlclhZZWFyczoge1xuICAgIG9uZTogXCJvdmVyIDEgeWVhclwiLFxuICAgIG90aGVyOiBcIm92ZXIge3tjb3VudH19IHllYXJzXCJcbiAgfSxcbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiBcImFsbW9zdCAxIHllYXJcIixcbiAgICBvdGhlcjogXCJhbG1vc3Qge3tjb3VudH19IHllYXJzXCJcbiAgfVxufSwgcnQgPSAodCwgZSwgbikgPT4ge1xuICBsZXQgcjtcbiAgY29uc3QgYSA9IG50W3RdO1xuICByZXR1cm4gdHlwZW9mIGEgPT0gXCJzdHJpbmdcIiA/IHIgPSBhIDogZSA9PT0gMSA/IHIgPSBhLm9uZSA6IHIgPSBhLm90aGVyLnJlcGxhY2UoXCJ7e2NvdW50fX1cIiwgZS50b1N0cmluZygpKSwgbiAhPSBudWxsICYmIG4uYWRkU3VmZml4ID8gbi5jb21wYXJpc29uICYmIG4uY29tcGFyaXNvbiA+IDAgPyBcImluIFwiICsgciA6IHIgKyBcIiBhZ29cIiA6IHI7XG59O1xuZnVuY3Rpb24gUyh0KSB7XG4gIHJldHVybiAoZSA9IHt9KSA9PiB7XG4gICAgY29uc3QgbiA9IGUud2lkdGggPyBTdHJpbmcoZS53aWR0aCkgOiB0LmRlZmF1bHRXaWR0aDtcbiAgICByZXR1cm4gdC5mb3JtYXRzW25dIHx8IHQuZm9ybWF0c1t0LmRlZmF1bHRXaWR0aF07XG4gIH07XG59XG5jb25zdCBhdCA9IHtcbiAgZnVsbDogXCJFRUVFLCBNTU1NIGRvLCB5XCIsXG4gIGxvbmc6IFwiTU1NTSBkbywgeVwiLFxuICBtZWRpdW06IFwiTU1NIGQsIHlcIixcbiAgc2hvcnQ6IFwiTU0vZGQveXl5eVwiXG59LCBpdCA9IHtcbiAgZnVsbDogXCJoOm1tOnNzIGEgenp6elwiLFxuICBsb25nOiBcImg6bW06c3MgYSB6XCIsXG4gIG1lZGl1bTogXCJoOm1tOnNzIGFcIixcbiAgc2hvcnQ6IFwiaDptbSBhXCJcbn0sIG90ID0ge1xuICBmdWxsOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbG9uZzogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIG1lZGl1bTogXCJ7e2RhdGV9fSwge3t0aW1lfX1cIixcbiAgc2hvcnQ6IFwie3tkYXRlfX0sIHt7dGltZX19XCJcbn0sIHN0ID0ge1xuICBkYXRlOiBTKHtcbiAgICBmb3JtYXRzOiBhdCxcbiAgICBkZWZhdWx0V2lkdGg6IFwiZnVsbFwiXG4gIH0pLFxuICB0aW1lOiBTKHtcbiAgICBmb3JtYXRzOiBpdCxcbiAgICBkZWZhdWx0V2lkdGg6IFwiZnVsbFwiXG4gIH0pLFxuICBkYXRlVGltZTogUyh7XG4gICAgZm9ybWF0czogb3QsXG4gICAgZGVmYXVsdFdpZHRoOiBcImZ1bGxcIlxuICB9KVxufSwgdXQgPSB7XG4gIGxhc3RXZWVrOiBcIidsYXN0JyBlZWVlICdhdCcgcFwiLFxuICB5ZXN0ZXJkYXk6IFwiJ3llc3RlcmRheSBhdCcgcFwiLFxuICB0b2RheTogXCIndG9kYXkgYXQnIHBcIixcbiAgdG9tb3Jyb3c6IFwiJ3RvbW9ycm93IGF0JyBwXCIsXG4gIG5leHRXZWVrOiBcImVlZWUgJ2F0JyBwXCIsXG4gIG90aGVyOiBcIlBcIlxufSwgY3QgPSAodCwgZSwgbiwgcikgPT4gdXRbdF07XG5mdW5jdGlvbiBrKHQpIHtcbiAgcmV0dXJuIChlLCBuKSA9PiB7XG4gICAgY29uc3QgciA9IG4gIT0gbnVsbCAmJiBuLmNvbnRleHQgPyBTdHJpbmcobi5jb250ZXh0KSA6IFwic3RhbmRhbG9uZVwiO1xuICAgIGxldCBhO1xuICAgIGlmIChyID09PSBcImZvcm1hdHRpbmdcIiAmJiB0LmZvcm1hdHRpbmdWYWx1ZXMpIHtcbiAgICAgIGNvbnN0IHMgPSB0LmRlZmF1bHRGb3JtYXR0aW5nV2lkdGggfHwgdC5kZWZhdWx0V2lkdGgsIHUgPSBuICE9IG51bGwgJiYgbi53aWR0aCA/IFN0cmluZyhuLndpZHRoKSA6IHM7XG4gICAgICBhID0gdC5mb3JtYXR0aW5nVmFsdWVzW3VdIHx8IHQuZm9ybWF0dGluZ1ZhbHVlc1tzXTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcyA9IHQuZGVmYXVsdFdpZHRoLCB1ID0gbiAhPSBudWxsICYmIG4ud2lkdGggPyBTdHJpbmcobi53aWR0aCkgOiB0LmRlZmF1bHRXaWR0aDtcbiAgICAgIGEgPSB0LnZhbHVlc1t1XSB8fCB0LnZhbHVlc1tzXTtcbiAgICB9XG4gICAgY29uc3QgaSA9IHQuYXJndW1lbnRDYWxsYmFjayA/IHQuYXJndW1lbnRDYWxsYmFjayhlKSA6IGU7XG4gICAgcmV0dXJuIGFbaV07XG4gIH07XG59XG5jb25zdCBkdCA9IHtcbiAgbmFycm93OiBbXCJCXCIsIFwiQVwiXSxcbiAgYWJicmV2aWF0ZWQ6IFtcIkJDXCIsIFwiQURcIl0sXG4gIHdpZGU6IFtcIkJlZm9yZSBDaHJpc3RcIiwgXCJBbm5vIERvbWluaVwiXVxufSwgZnQgPSB7XG4gIG5hcnJvdzogW1wiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiXSxcbiAgYWJicmV2aWF0ZWQ6IFtcIlExXCIsIFwiUTJcIiwgXCJRM1wiLCBcIlE0XCJdLFxuICB3aWRlOiBbXCIxc3QgcXVhcnRlclwiLCBcIjJuZCBxdWFydGVyXCIsIFwiM3JkIHF1YXJ0ZXJcIiwgXCI0dGggcXVhcnRlclwiXVxufSwgaHQgPSB7XG4gIG5hcnJvdzogW1wiSlwiLCBcIkZcIiwgXCJNXCIsIFwiQVwiLCBcIk1cIiwgXCJKXCIsIFwiSlwiLCBcIkFcIiwgXCJTXCIsIFwiT1wiLCBcIk5cIiwgXCJEXCJdLFxuICBhYmJyZXZpYXRlZDogW1xuICAgIFwiSmFuXCIsXG4gICAgXCJGZWJcIixcbiAgICBcIk1hclwiLFxuICAgIFwiQXByXCIsXG4gICAgXCJNYXlcIixcbiAgICBcIkp1blwiLFxuICAgIFwiSnVsXCIsXG4gICAgXCJBdWdcIixcbiAgICBcIlNlcFwiLFxuICAgIFwiT2N0XCIsXG4gICAgXCJOb3ZcIixcbiAgICBcIkRlY1wiXG4gIF0sXG4gIHdpZGU6IFtcbiAgICBcIkphbnVhcnlcIixcbiAgICBcIkZlYnJ1YXJ5XCIsXG4gICAgXCJNYXJjaFwiLFxuICAgIFwiQXByaWxcIixcbiAgICBcIk1heVwiLFxuICAgIFwiSnVuZVwiLFxuICAgIFwiSnVseVwiLFxuICAgIFwiQXVndXN0XCIsXG4gICAgXCJTZXB0ZW1iZXJcIixcbiAgICBcIk9jdG9iZXJcIixcbiAgICBcIk5vdmVtYmVyXCIsXG4gICAgXCJEZWNlbWJlclwiXG4gIF1cbn0sIG10ID0ge1xuICBuYXJyb3c6IFtcIlNcIiwgXCJNXCIsIFwiVFwiLCBcIldcIiwgXCJUXCIsIFwiRlwiLCBcIlNcIl0sXG4gIHNob3J0OiBbXCJTdVwiLCBcIk1vXCIsIFwiVHVcIiwgXCJXZVwiLCBcIlRoXCIsIFwiRnJcIiwgXCJTYVwiXSxcbiAgYWJicmV2aWF0ZWQ6IFtcIlN1blwiLCBcIk1vblwiLCBcIlR1ZVwiLCBcIldlZFwiLCBcIlRodVwiLCBcIkZyaVwiLCBcIlNhdFwiXSxcbiAgd2lkZTogW1xuICAgIFwiU3VuZGF5XCIsXG4gICAgXCJNb25kYXlcIixcbiAgICBcIlR1ZXNkYXlcIixcbiAgICBcIldlZG5lc2RheVwiLFxuICAgIFwiVGh1cnNkYXlcIixcbiAgICBcIkZyaWRheVwiLFxuICAgIFwiU2F0dXJkYXlcIlxuICBdXG59LCBsdCA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06IFwiYVwiLFxuICAgIHBtOiBcInBcIixcbiAgICBtaWRuaWdodDogXCJtaVwiLFxuICAgIG5vb246IFwiblwiLFxuICAgIG1vcm5pbmc6IFwibW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJhZnRlcm5vb25cIixcbiAgICBldmVuaW5nOiBcImV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJuaWdodFwiXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06IFwiQU1cIixcbiAgICBwbTogXCJQTVwiLFxuICAgIG1pZG5pZ2h0OiBcIm1pZG5pZ2h0XCIsXG4gICAgbm9vbjogXCJub29uXCIsXG4gICAgbW9ybmluZzogXCJtb3JuaW5nXCIsXG4gICAgYWZ0ZXJub29uOiBcImFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiZXZlbmluZ1wiLFxuICAgIG5pZ2h0OiBcIm5pZ2h0XCJcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiBcImEubS5cIixcbiAgICBwbTogXCJwLm0uXCIsXG4gICAgbWlkbmlnaHQ6IFwibWlkbmlnaHRcIixcbiAgICBub29uOiBcIm5vb25cIixcbiAgICBtb3JuaW5nOiBcIm1vcm5pbmdcIixcbiAgICBhZnRlcm5vb246IFwiYWZ0ZXJub29uXCIsXG4gICAgZXZlbmluZzogXCJldmVuaW5nXCIsXG4gICAgbmlnaHQ6IFwibmlnaHRcIlxuICB9XG59LCBndCA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06IFwiYVwiLFxuICAgIHBtOiBcInBcIixcbiAgICBtaWRuaWdodDogXCJtaVwiLFxuICAgIG5vb246IFwiblwiLFxuICAgIG1vcm5pbmc6IFwiaW4gdGhlIG1vcm5pbmdcIixcbiAgICBhZnRlcm5vb246IFwiaW4gdGhlIGFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiaW4gdGhlIGV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJhdCBuaWdodFwiXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06IFwiQU1cIixcbiAgICBwbTogXCJQTVwiLFxuICAgIG1pZG5pZ2h0OiBcIm1pZG5pZ2h0XCIsXG4gICAgbm9vbjogXCJub29uXCIsXG4gICAgbW9ybmluZzogXCJpbiB0aGUgbW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJpbiB0aGUgYWZ0ZXJub29uXCIsXG4gICAgZXZlbmluZzogXCJpbiB0aGUgZXZlbmluZ1wiLFxuICAgIG5pZ2h0OiBcImF0IG5pZ2h0XCJcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiBcImEubS5cIixcbiAgICBwbTogXCJwLm0uXCIsXG4gICAgbWlkbmlnaHQ6IFwibWlkbmlnaHRcIixcbiAgICBub29uOiBcIm5vb25cIixcbiAgICBtb3JuaW5nOiBcImluIHRoZSBtb3JuaW5nXCIsXG4gICAgYWZ0ZXJub29uOiBcImluIHRoZSBhZnRlcm5vb25cIixcbiAgICBldmVuaW5nOiBcImluIHRoZSBldmVuaW5nXCIsXG4gICAgbmlnaHQ6IFwiYXQgbmlnaHRcIlxuICB9XG59LCB3dCA9ICh0LCBlKSA9PiB7XG4gIGNvbnN0IG4gPSBOdW1iZXIodCksIHIgPSBuICUgMTAwO1xuICBpZiAociA+IDIwIHx8IHIgPCAxMClcbiAgICBzd2l0Y2ggKHIgJSAxMCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gbiArIFwic3RcIjtcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIG4gKyBcIm5kXCI7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBuICsgXCJyZFwiO1xuICAgIH1cbiAgcmV0dXJuIG4gKyBcInRoXCI7XG59LCB5dCA9IHtcbiAgb3JkaW5hbE51bWJlcjogd3QsXG4gIGVyYTogayh7XG4gICAgdmFsdWVzOiBkdCxcbiAgICBkZWZhdWx0V2lkdGg6IFwid2lkZVwiXG4gIH0pLFxuICBxdWFydGVyOiBrKHtcbiAgICB2YWx1ZXM6IGZ0LFxuICAgIGRlZmF1bHRXaWR0aDogXCJ3aWRlXCIsXG4gICAgYXJndW1lbnRDYWxsYmFjazogKHQpID0+IHQgLSAxXG4gIH0pLFxuICBtb250aDogayh7XG4gICAgdmFsdWVzOiBodCxcbiAgICBkZWZhdWx0V2lkdGg6IFwid2lkZVwiXG4gIH0pLFxuICBkYXk6IGsoe1xuICAgIHZhbHVlczogbXQsXG4gICAgZGVmYXVsdFdpZHRoOiBcIndpZGVcIlxuICB9KSxcbiAgZGF5UGVyaW9kOiBrKHtcbiAgICB2YWx1ZXM6IGx0LFxuICAgIGRlZmF1bHRXaWR0aDogXCJ3aWRlXCIsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZ3QsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogXCJ3aWRlXCJcbiAgfSlcbn07XG5mdW5jdGlvbiBEKHQpIHtcbiAgcmV0dXJuIChlLCBuID0ge30pID0+IHtcbiAgICBjb25zdCByID0gbi53aWR0aCwgYSA9IHIgJiYgdC5tYXRjaFBhdHRlcm5zW3JdIHx8IHQubWF0Y2hQYXR0ZXJuc1t0LmRlZmF1bHRNYXRjaFdpZHRoXSwgaSA9IGUubWF0Y2goYSk7XG4gICAgaWYgKCFpKVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgcyA9IGlbMF0sIHUgPSByICYmIHQucGFyc2VQYXR0ZXJuc1tyXSB8fCB0LnBhcnNlUGF0dGVybnNbdC5kZWZhdWx0UGFyc2VXaWR0aF0sIGMgPSBBcnJheS5pc0FycmF5KHUpID8gT3QodSwgKGcpID0+IGcudGVzdChzKSkgOiAoXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAtLSBJIGNoYWxsYW5nZSB5b3UgdG8gZml4IHRoZSB0eXBlXG4gICAgICBidCh1LCAoZykgPT4gZy50ZXN0KHMpKVxuICAgICk7XG4gICAgbGV0IGQ7XG4gICAgZCA9IHQudmFsdWVDYWxsYmFjayA/IHQudmFsdWVDYWxsYmFjayhjKSA6IGMsIGQgPSBuLnZhbHVlQ2FsbGJhY2sgPyAoXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAtLSBJIGNoYWxsYW5nZSB5b3UgdG8gZml4IHRoZSB0eXBlXG4gICAgICBuLnZhbHVlQ2FsbGJhY2soZClcbiAgICApIDogZDtcbiAgICBjb25zdCBoID0gZS5zbGljZShzLmxlbmd0aCk7XG4gICAgcmV0dXJuIHsgdmFsdWU6IGQsIHJlc3Q6IGggfTtcbiAgfTtcbn1cbmZ1bmN0aW9uIGJ0KHQsIGUpIHtcbiAgZm9yIChjb25zdCBuIGluIHQpXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LCBuKSAmJiBlKHRbbl0pKVxuICAgICAgcmV0dXJuIG47XG59XG5mdW5jdGlvbiBPdCh0LCBlKSB7XG4gIGZvciAobGV0IG4gPSAwOyBuIDwgdC5sZW5ndGg7IG4rKylcbiAgICBpZiAoZSh0W25dKSlcbiAgICAgIHJldHVybiBuO1xufVxuZnVuY3Rpb24gTXQodCkge1xuICByZXR1cm4gKGUsIG4gPSB7fSkgPT4ge1xuICAgIGNvbnN0IHIgPSBlLm1hdGNoKHQubWF0Y2hQYXR0ZXJuKTtcbiAgICBpZiAoIXIpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IGEgPSByWzBdLCBpID0gZS5tYXRjaCh0LnBhcnNlUGF0dGVybik7XG4gICAgaWYgKCFpKSByZXR1cm4gbnVsbDtcbiAgICBsZXQgcyA9IHQudmFsdWVDYWxsYmFjayA/IHQudmFsdWVDYWxsYmFjayhpWzBdKSA6IGlbMF07XG4gICAgcyA9IG4udmFsdWVDYWxsYmFjayA/IG4udmFsdWVDYWxsYmFjayhzKSA6IHM7XG4gICAgY29uc3QgdSA9IGUuc2xpY2UoYS5sZW5ndGgpO1xuICAgIHJldHVybiB7IHZhbHVlOiBzLCByZXN0OiB1IH07XG4gIH07XG59XG5jb25zdCBQdCA9IC9eKFxcZCspKHRofHN0fG5kfHJkKT8vaSwga3QgPSAvXFxkKy9pLCBEdCA9IHtcbiAgbmFycm93OiAvXihifGEpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihiXFwuP1xccz9jXFwuP3xiXFwuP1xccz9jXFwuP1xccz9lXFwuP3xhXFwuP1xccz9kXFwuP3xjXFwuP1xccz9lXFwuPykvaSxcbiAgd2lkZTogL14oYmVmb3JlIGNocmlzdHxiZWZvcmUgY29tbW9uIGVyYXxhbm5vIGRvbWluaXxjb21tb24gZXJhKS9pXG59LCB4dCA9IHtcbiAgYW55OiBbL15iL2ksIC9eKGF8YykvaV1cbn0sIHZ0ID0ge1xuICBuYXJyb3c6IC9eWzEyMzRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXnFbMTIzNF0vaSxcbiAgd2lkZTogL15bMTIzNF0odGh8c3R8bmR8cmQpPyBxdWFydGVyL2lcbn0sIFR0ID0ge1xuICBhbnk6IFsvMS9pLCAvMi9pLCAvMy9pLCAvNC9pXVxufSwgV3QgPSB7XG4gIG5hcnJvdzogL15bamZtYXNvbmRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXihqYW58ZmVifG1hcnxhcHJ8bWF5fGp1bnxqdWx8YXVnfHNlcHxvY3R8bm92fGRlYykvaSxcbiAgd2lkZTogL14oamFudWFyeXxmZWJydWFyeXxtYXJjaHxhcHJpbHxtYXl8anVuZXxqdWx5fGF1Z3VzdHxzZXB0ZW1iZXJ8b2N0b2Jlcnxub3ZlbWJlcnxkZWNlbWJlcikvaVxufSwgU3QgPSB7XG4gIG5hcnJvdzogW1xuICAgIC9eai9pLFxuICAgIC9eZi9pLFxuICAgIC9ebS9pLFxuICAgIC9eYS9pLFxuICAgIC9ebS9pLFxuICAgIC9eai9pLFxuICAgIC9eai9pLFxuICAgIC9eYS9pLFxuICAgIC9ecy9pLFxuICAgIC9eby9pLFxuICAgIC9ebi9pLFxuICAgIC9eZC9pXG4gIF0sXG4gIGFueTogW1xuICAgIC9eamEvaSxcbiAgICAvXmYvaSxcbiAgICAvXm1hci9pLFxuICAgIC9eYXAvaSxcbiAgICAvXm1heS9pLFxuICAgIC9eanVuL2ksXG4gICAgL15qdWwvaSxcbiAgICAvXmF1L2ksXG4gICAgL15zL2ksXG4gICAgL15vL2ksXG4gICAgL15uL2ksXG4gICAgL15kL2lcbiAgXVxufSwgWXQgPSB7XG4gIG5hcnJvdzogL15bc210d2ZdL2ksXG4gIHNob3J0OiAvXihzdXxtb3x0dXx3ZXx0aHxmcnxzYSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKHN1bnxtb258dHVlfHdlZHx0aHV8ZnJpfHNhdCkvaSxcbiAgd2lkZTogL14oc3VuZGF5fG1vbmRheXx0dWVzZGF5fHdlZG5lc2RheXx0aHVyc2RheXxmcmlkYXl8c2F0dXJkYXkpL2lcbn0sIEZ0ID0ge1xuICBuYXJyb3c6IFsvXnMvaSwgL15tL2ksIC9edC9pLCAvXncvaSwgL150L2ksIC9eZi9pLCAvXnMvaV0sXG4gIGFueTogWy9ec3UvaSwgL15tL2ksIC9edHUvaSwgL153L2ksIC9edGgvaSwgL15mL2ksIC9ec2EvaV1cbn0sIHB0ID0ge1xuICBuYXJyb3c6IC9eKGF8cHxtaXxufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaSxcbiAgYW55OiAvXihbYXBdXFwuP1xccz9tXFwuP3xtaWRuaWdodHxub29ufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaVxufSwgRXQgPSB7XG4gIGFueToge1xuICAgIGFtOiAvXmEvaSxcbiAgICBwbTogL15wL2ksXG4gICAgbWlkbmlnaHQ6IC9ebWkvaSxcbiAgICBub29uOiAvXm5vL2ksXG4gICAgbW9ybmluZzogL21vcm5pbmcvaSxcbiAgICBhZnRlcm5vb246IC9hZnRlcm5vb24vaSxcbiAgICBldmVuaW5nOiAvZXZlbmluZy9pLFxuICAgIG5pZ2h0OiAvbmlnaHQvaVxuICB9XG59LCBDdCA9IHtcbiAgb3JkaW5hbE51bWJlcjogTXQoe1xuICAgIG1hdGNoUGF0dGVybjogUHQsXG4gICAgcGFyc2VQYXR0ZXJuOiBrdCxcbiAgICB2YWx1ZUNhbGxiYWNrOiAodCkgPT4gcGFyc2VJbnQodCwgMTApXG4gIH0pLFxuICBlcmE6IEQoe1xuICAgIG1hdGNoUGF0dGVybnM6IER0LFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiBcIndpZGVcIixcbiAgICBwYXJzZVBhdHRlcm5zOiB4dCxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogXCJhbnlcIlxuICB9KSxcbiAgcXVhcnRlcjogRCh7XG4gICAgbWF0Y2hQYXR0ZXJuczogdnQsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6IFwid2lkZVwiLFxuICAgIHBhcnNlUGF0dGVybnM6IFR0LFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiBcImFueVwiLFxuICAgIHZhbHVlQ2FsbGJhY2s6ICh0KSA9PiB0ICsgMVxuICB9KSxcbiAgbW9udGg6IEQoe1xuICAgIG1hdGNoUGF0dGVybnM6IFd0LFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiBcIndpZGVcIixcbiAgICBwYXJzZVBhdHRlcm5zOiBTdCxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogXCJhbnlcIlxuICB9KSxcbiAgZGF5OiBEKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBZdCxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogXCJ3aWRlXCIsXG4gICAgcGFyc2VQYXR0ZXJuczogRnQsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6IFwiYW55XCJcbiAgfSksXG4gIGRheVBlcmlvZDogRCh7XG4gICAgbWF0Y2hQYXR0ZXJuczogcHQsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6IFwiYW55XCIsXG4gICAgcGFyc2VQYXR0ZXJuczogRXQsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6IFwiYW55XCJcbiAgfSlcbn0sIE50ID0ge1xuICBjb2RlOiBcImVuLVVTXCIsXG4gIGZvcm1hdERpc3RhbmNlOiBydCxcbiAgZm9ybWF0TG9uZzogc3QsXG4gIGZvcm1hdFJlbGF0aXZlOiBjdCxcbiAgbG9jYWxpemU6IHl0LFxuICBtYXRjaDogQ3QsXG4gIG9wdGlvbnM6IHtcbiAgICB3ZWVrU3RhcnRzT246IDAsXG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiAxXG4gIH1cbn07XG5mdW5jdGlvbiBxdCh0KSB7XG4gIGNvbnN0IGUgPSBsKHQpO1xuICByZXR1cm4geihlLCBldChlKSkgKyAxO1xufVxuZnVuY3Rpb24gSHQodCkge1xuICBjb25zdCBlID0gbCh0KSwgbiA9ICt2KGUpIC0gK0soZSk7XG4gIHJldHVybiBNYXRoLnJvdW5kKG4gLyBBKSArIDE7XG59XG5mdW5jdGlvbiBHKHQsIGUpIHtcbiAgdmFyIGgsIGcsIE0sIFA7XG4gIGNvbnN0IG4gPSBsKHQpLCByID0gbi5nZXRGdWxsWWVhcigpLCBhID0gVCgpLCBpID0gKGUgPT0gbnVsbCA/IHZvaWQgMCA6IGUuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSA/PyAoKGcgPSAoaCA9IGUgPT0gbnVsbCA/IHZvaWQgMCA6IGUubG9jYWxlKSA9PSBudWxsID8gdm9pZCAwIDogaC5vcHRpb25zKSA9PSBudWxsID8gdm9pZCAwIDogZy5maXJzdFdlZWtDb250YWluc0RhdGUpID8/IGEuZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/ICgoUCA9IChNID0gYS5sb2NhbGUpID09IG51bGwgPyB2b2lkIDAgOiBNLm9wdGlvbnMpID09IG51bGwgPyB2b2lkIDAgOiBQLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgPz8gMSwgcyA9IHkodCwgMCk7XG4gIHMuc2V0RnVsbFllYXIociArIDEsIDAsIGkpLCBzLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICBjb25zdCB1ID0geChzLCBlKSwgYyA9IHkodCwgMCk7XG4gIGMuc2V0RnVsbFllYXIociwgMCwgaSksIGMuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIGNvbnN0IGQgPSB4KGMsIGUpO1xuICByZXR1cm4gbi5nZXRUaW1lKCkgPj0gdS5nZXRUaW1lKCkgPyByICsgMSA6IG4uZ2V0VGltZSgpID49IGQuZ2V0VGltZSgpID8gciA6IHIgLSAxO1xufVxuZnVuY3Rpb24gTHQodCwgZSkge1xuICB2YXIgdSwgYywgZCwgaDtcbiAgY29uc3QgbiA9IFQoKSwgciA9IChlID09IG51bGwgPyB2b2lkIDAgOiBlLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgPz8gKChjID0gKHUgPSBlID09IG51bGwgPyB2b2lkIDAgOiBlLmxvY2FsZSkgPT0gbnVsbCA/IHZvaWQgMCA6IHUub3B0aW9ucykgPT0gbnVsbCA/IHZvaWQgMCA6IGMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSA/PyBuLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/PyAoKGggPSAoZCA9IG4ubG9jYWxlKSA9PSBudWxsID8gdm9pZCAwIDogZC5vcHRpb25zKSA9PSBudWxsID8gdm9pZCAwIDogaC5maXJzdFdlZWtDb250YWluc0RhdGUpID8/IDEsIGEgPSBHKHQsIGUpLCBpID0geSh0LCAwKTtcbiAgcmV0dXJuIGkuc2V0RnVsbFllYXIoYSwgMCwgciksIGkuc2V0SG91cnMoMCwgMCwgMCwgMCksIHgoaSwgZSk7XG59XG5mdW5jdGlvbiBRdCh0LCBlKSB7XG4gIGNvbnN0IG4gPSBsKHQpLCByID0gK3gobiwgZSkgLSArTHQobiwgZSk7XG4gIHJldHVybiBNYXRoLnJvdW5kKHIgLyBBKSArIDE7XG59XG5mdW5jdGlvbiBvKHQsIGUpIHtcbiAgY29uc3QgbiA9IHQgPCAwID8gXCItXCIgOiBcIlwiLCByID0gTWF0aC5hYnModCkudG9TdHJpbmcoKS5wYWRTdGFydChlLCBcIjBcIik7XG4gIHJldHVybiBuICsgcjtcbn1cbmNvbnN0IHcgPSB7XG4gIC8vIFllYXJcbiAgeSh0LCBlKSB7XG4gICAgY29uc3QgbiA9IHQuZ2V0RnVsbFllYXIoKSwgciA9IG4gPiAwID8gbiA6IDEgLSBuO1xuICAgIHJldHVybiBvKGUgPT09IFwieXlcIiA/IHIgJSAxMDAgOiByLCBlLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1vbnRoXG4gIE0odCwgZSkge1xuICAgIGNvbnN0IG4gPSB0LmdldE1vbnRoKCk7XG4gICAgcmV0dXJuIGUgPT09IFwiTVwiID8gU3RyaW5nKG4gKyAxKSA6IG8obiArIDEsIDIpO1xuICB9LFxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQodCwgZSkge1xuICAgIHJldHVybiBvKHQuZ2V0RGF0ZSgpLCBlLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEFNIG9yIFBNXG4gIGEodCwgZSkge1xuICAgIGNvbnN0IG4gPSB0LmdldEhvdXJzKCkgLyAxMiA+PSAxID8gXCJwbVwiIDogXCJhbVwiO1xuICAgIHN3aXRjaCAoZSkge1xuICAgICAgY2FzZSBcImFcIjpcbiAgICAgIGNhc2UgXCJhYVwiOlxuICAgICAgICByZXR1cm4gbi50b1VwcGVyQ2FzZSgpO1xuICAgICAgY2FzZSBcImFhYVwiOlxuICAgICAgICByZXR1cm4gbjtcbiAgICAgIGNhc2UgXCJhYWFhYVwiOlxuICAgICAgICByZXR1cm4gblswXTtcbiAgICAgIGNhc2UgXCJhYWFhXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbiA9PT0gXCJhbVwiID8gXCJhLm0uXCIgOiBcInAubS5cIjtcbiAgICB9XG4gIH0sXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGgodCwgZSkge1xuICAgIHJldHVybiBvKHQuZ2V0SG91cnMoKSAlIDEyIHx8IDEyLCBlLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEgodCwgZSkge1xuICAgIHJldHVybiBvKHQuZ2V0SG91cnMoKSwgZS5sZW5ndGgpO1xuICB9LFxuICAvLyBNaW51dGVcbiAgbSh0LCBlKSB7XG4gICAgcmV0dXJuIG8odC5nZXRNaW51dGVzKCksIGUubGVuZ3RoKTtcbiAgfSxcbiAgLy8gU2Vjb25kXG4gIHModCwgZSkge1xuICAgIHJldHVybiBvKHQuZ2V0U2Vjb25kcygpLCBlLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTKHQsIGUpIHtcbiAgICBjb25zdCBuID0gZS5sZW5ndGgsIHIgPSB0LmdldE1pbGxpc2Vjb25kcygpLCBhID0gTWF0aC50cnVuYyhcbiAgICAgIHIgKiBNYXRoLnBvdygxMCwgbiAtIDMpXG4gICAgKTtcbiAgICByZXR1cm4gbyhhLCBlLmxlbmd0aCk7XG4gIH1cbn0sIE8gPSB7XG4gIG1pZG5pZ2h0OiBcIm1pZG5pZ2h0XCIsXG4gIG5vb246IFwibm9vblwiLFxuICBtb3JuaW5nOiBcIm1vcm5pbmdcIixcbiAgYWZ0ZXJub29uOiBcImFmdGVybm9vblwiLFxuICBldmVuaW5nOiBcImV2ZW5pbmdcIixcbiAgbmlnaHQ6IFwibmlnaHRcIlxufSwgSCA9IHtcbiAgLy8gRXJhXG4gIEc6IGZ1bmN0aW9uKHQsIGUsIG4pIHtcbiAgICBjb25zdCByID0gdC5nZXRGdWxsWWVhcigpID4gMCA/IDEgOiAwO1xuICAgIHN3aXRjaCAoZSkge1xuICAgICAgLy8gQUQsIEJDXG4gICAgICBjYXNlIFwiR1wiOlxuICAgICAgY2FzZSBcIkdHXCI6XG4gICAgICBjYXNlIFwiR0dHXCI6XG4gICAgICAgIHJldHVybiBuLmVyYShyLCB7IHdpZHRoOiBcImFiYnJldmlhdGVkXCIgfSk7XG4gICAgICAvLyBBLCBCXG4gICAgICBjYXNlIFwiR0dHR0dcIjpcbiAgICAgICAgcmV0dXJuIG4uZXJhKHIsIHsgd2lkdGg6IFwibmFycm93XCIgfSk7XG4gICAgICAvLyBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdFxuICAgICAgY2FzZSBcIkdHR0dcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBuLmVyYShyLCB7IHdpZHRoOiBcIndpZGVcIiB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFllYXJcbiAgeTogZnVuY3Rpb24odCwgZSwgbikge1xuICAgIGlmIChlID09PSBcInlvXCIpIHtcbiAgICAgIGNvbnN0IHIgPSB0LmdldEZ1bGxZZWFyKCksIGEgPSByID4gMCA/IHIgOiAxIC0gcjtcbiAgICAgIHJldHVybiBuLm9yZGluYWxOdW1iZXIoYSwgeyB1bml0OiBcInllYXJcIiB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHcueSh0LCBlKTtcbiAgfSxcbiAgLy8gTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhclxuICBZOiBmdW5jdGlvbih0LCBlLCBuLCByKSB7XG4gICAgY29uc3QgYSA9IEcodCwgciksIGkgPSBhID4gMCA/IGEgOiAxIC0gYTtcbiAgICBpZiAoZSA9PT0gXCJZWVwiKSB7XG4gICAgICBjb25zdCBzID0gaSAlIDEwMDtcbiAgICAgIHJldHVybiBvKHMsIDIpO1xuICAgIH1cbiAgICByZXR1cm4gZSA9PT0gXCJZb1wiID8gbi5vcmRpbmFsTnVtYmVyKGksIHsgdW5pdDogXCJ5ZWFyXCIgfSkgOiBvKGksIGUubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgUjogZnVuY3Rpb24odCwgZSkge1xuICAgIGNvbnN0IG4gPSBCKHQpO1xuICAgIHJldHVybiBvKG4sIGUubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRXh0ZW5kZWQgeWVhci4gVGhpcyBpcyBhIHNpbmdsZSBudW1iZXIgZGVzaWduYXRpbmcgdGhlIHllYXIgb2YgdGhpcyBjYWxlbmRhciBzeXN0ZW0uXG4gIC8vIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBsb2NhbGl6ZXJzIGFyZSBCLkMuIHllYXJzOlxuICAvLyB8IFllYXIgfCBgeWAgfCBgdWAgfFxuICAvLyB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICAvLyB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICAvLyB8IEJDIDEgfCAgIDEgfCAgIDAgfFxuICAvLyB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICAvLyBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXG4gIC8vIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZC5cbiAgdTogZnVuY3Rpb24odCwgZSkge1xuICAgIGNvbnN0IG4gPSB0LmdldEZ1bGxZZWFyKCk7XG4gICAgcmV0dXJuIG8obiwgZS5sZW5ndGgpO1xuICB9LFxuICAvLyBRdWFydGVyXG4gIFE6IGZ1bmN0aW9uKHQsIGUsIG4pIHtcbiAgICBjb25zdCByID0gTWF0aC5jZWlsKCh0LmdldE1vbnRoKCkgKyAxKSAvIDMpO1xuICAgIHN3aXRjaCAoZSkge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSBcIlFcIjpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG4gICAgICBjYXNlIFwiUVFcIjpcbiAgICAgICAgcmV0dXJuIG8ociwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcbiAgICAgIGNhc2UgXCJRb1wiOlxuICAgICAgICByZXR1cm4gbi5vcmRpbmFsTnVtYmVyKHIsIHsgdW5pdDogXCJxdWFydGVyXCIgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuICAgICAgY2FzZSBcIlFRUVwiOlxuICAgICAgICByZXR1cm4gbi5xdWFydGVyKHIsIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG4gICAgICBjYXNlIFwiUVFRUVFcIjpcbiAgICAgICAgcmV0dXJuIG4ucXVhcnRlcihyLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCJcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuICAgICAgY2FzZSBcIlFRUVFcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBuLnF1YXJ0ZXIociwge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIlxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIHF1YXJ0ZXJcbiAgcTogZnVuY3Rpb24odCwgZSwgbikge1xuICAgIGNvbnN0IHIgPSBNYXRoLmNlaWwoKHQuZ2V0TW9udGgoKSArIDEpIC8gMyk7XG4gICAgc3dpdGNoIChlKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlIFwicVwiOlxuICAgICAgICByZXR1cm4gU3RyaW5nKHIpO1xuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcbiAgICAgIGNhc2UgXCJxcVwiOlxuICAgICAgICByZXR1cm4gbyhyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuICAgICAgY2FzZSBcInFvXCI6XG4gICAgICAgIHJldHVybiBuLm9yZGluYWxOdW1iZXIociwgeyB1bml0OiBcInF1YXJ0ZXJcIiB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG4gICAgICBjYXNlIFwicXFxXCI6XG4gICAgICAgIHJldHVybiBuLnF1YXJ0ZXIociwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCJcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcbiAgICAgIGNhc2UgXCJxcXFxcVwiOlxuICAgICAgICByZXR1cm4gbi5xdWFydGVyKHIsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIlxuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG4gICAgICBjYXNlIFwicXFxcVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG4ucXVhcnRlcihyLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTW9udGhcbiAgTTogZnVuY3Rpb24odCwgZSwgbikge1xuICAgIGNvbnN0IHIgPSB0LmdldE1vbnRoKCk7XG4gICAgc3dpdGNoIChlKSB7XG4gICAgICBjYXNlIFwiTVwiOlxuICAgICAgY2FzZSBcIk1NXCI6XG4gICAgICAgIHJldHVybiB3Lk0odCwgZSk7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG4gICAgICBjYXNlIFwiTW9cIjpcbiAgICAgICAgcmV0dXJuIG4ub3JkaW5hbE51bWJlcihyICsgMSwgeyB1bml0OiBcIm1vbnRoXCIgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcbiAgICAgIGNhc2UgXCJNTU1cIjpcbiAgICAgICAgcmV0dXJuIG4ubW9udGgociwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCJcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcbiAgICAgIGNhc2UgXCJNTU1NTVwiOlxuICAgICAgICByZXR1cm4gbi5tb250aChyLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCJcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuICAgICAgY2FzZSBcIk1NTU1cIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBuLm1vbnRoKHIsIHsgd2lkdGg6IFwid2lkZVwiLCBjb250ZXh0OiBcImZvcm1hdHRpbmdcIiB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIG1vbnRoXG4gIEw6IGZ1bmN0aW9uKHQsIGUsIG4pIHtcbiAgICBjb25zdCByID0gdC5nZXRNb250aCgpO1xuICAgIHN3aXRjaCAoZSkge1xuICAgICAgLy8gMSwgMiwgLi4uLCAxMlxuICAgICAgY2FzZSBcIkxcIjpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhyICsgMSk7XG4gICAgICAvLyAwMSwgMDIsIC4uLiwgMTJcbiAgICAgIGNhc2UgXCJMTFwiOlxuICAgICAgICByZXR1cm4gbyhyICsgMSwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG4gICAgICBjYXNlIFwiTG9cIjpcbiAgICAgICAgcmV0dXJuIG4ub3JkaW5hbE51bWJlcihyICsgMSwgeyB1bml0OiBcIm1vbnRoXCIgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcbiAgICAgIGNhc2UgXCJMTExcIjpcbiAgICAgICAgcmV0dXJuIG4ubW9udGgociwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCJcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcbiAgICAgIGNhc2UgXCJMTExMTFwiOlxuICAgICAgICByZXR1cm4gbi5tb250aChyLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCJcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuICAgICAgY2FzZSBcIkxMTExcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBuLm1vbnRoKHIsIHsgd2lkdGg6IFwid2lkZVwiLCBjb250ZXh0OiBcInN0YW5kYWxvbmVcIiB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIExvY2FsIHdlZWsgb2YgeWVhclxuICB3OiBmdW5jdGlvbih0LCBlLCBuLCByKSB7XG4gICAgY29uc3QgYSA9IFF0KHQsIHIpO1xuICAgIHJldHVybiBlID09PSBcIndvXCIgPyBuLm9yZGluYWxOdW1iZXIoYSwgeyB1bml0OiBcIndlZWtcIiB9KSA6IG8oYSwgZS5sZW5ndGgpO1xuICB9LFxuICAvLyBJU08gd2VlayBvZiB5ZWFyXG4gIEk6IGZ1bmN0aW9uKHQsIGUsIG4pIHtcbiAgICBjb25zdCByID0gSHQodCk7XG4gICAgcmV0dXJuIGUgPT09IFwiSW9cIiA/IG4ub3JkaW5hbE51bWJlcihyLCB7IHVuaXQ6IFwid2Vla1wiIH0pIDogbyhyLCBlLmxlbmd0aCk7XG4gIH0sXG4gIC8vIERheSBvZiB0aGUgbW9udGhcbiAgZDogZnVuY3Rpb24odCwgZSwgbikge1xuICAgIHJldHVybiBlID09PSBcImRvXCIgPyBuLm9yZGluYWxOdW1iZXIodC5nZXREYXRlKCksIHsgdW5pdDogXCJkYXRlXCIgfSkgOiB3LmQodCwgZSk7XG4gIH0sXG4gIC8vIERheSBvZiB5ZWFyXG4gIEQ6IGZ1bmN0aW9uKHQsIGUsIG4pIHtcbiAgICBjb25zdCByID0gcXQodCk7XG4gICAgcmV0dXJuIGUgPT09IFwiRG9cIiA/IG4ub3JkaW5hbE51bWJlcihyLCB7IHVuaXQ6IFwiZGF5T2ZZZWFyXCIgfSkgOiBvKHIsIGUubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHdlZWtcbiAgRTogZnVuY3Rpb24odCwgZSwgbikge1xuICAgIGNvbnN0IHIgPSB0LmdldERheSgpO1xuICAgIHN3aXRjaCAoZSkge1xuICAgICAgLy8gVHVlXG4gICAgICBjYXNlIFwiRVwiOlxuICAgICAgY2FzZSBcIkVFXCI6XG4gICAgICBjYXNlIFwiRUVFXCI6XG4gICAgICAgIHJldHVybiBuLmRheShyLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIlxuICAgICAgICB9KTtcbiAgICAgIC8vIFRcbiAgICAgIGNhc2UgXCJFRUVFRVwiOlxuICAgICAgICByZXR1cm4gbi5kYXkociwge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcbiAgICAgIGNhc2UgXCJFRUVFRUVcIjpcbiAgICAgICAgcmV0dXJuIG4uZGF5KHIsIHtcbiAgICAgICAgICB3aWR0aDogXCJzaG9ydFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSBcIkVFRUVcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBuLmRheShyLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTG9jYWwgZGF5IG9mIHdlZWtcbiAgZTogZnVuY3Rpb24odCwgZSwgbiwgcikge1xuICAgIGNvbnN0IGEgPSB0LmdldERheSgpLCBpID0gKGEgLSByLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuICAgIHN3aXRjaCAoZSkge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChOdGggZGF5IG9mIHdlZWsgd2l0aCBjdXJyZW50IGxvY2FsZSBvciB3ZWVrU3RhcnRzT24pXG4gICAgICBjYXNlIFwiZVwiOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGkpO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuICAgICAgY2FzZSBcImVlXCI6XG4gICAgICAgIHJldHVybiBvKGksIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG4gICAgICBjYXNlIFwiZW9cIjpcbiAgICAgICAgcmV0dXJuIG4ub3JkaW5hbE51bWJlcihpLCB7IHVuaXQ6IFwiZGF5XCIgfSk7XG4gICAgICBjYXNlIFwiZWVlXCI6XG4gICAgICAgIHJldHVybiBuLmRheShhLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIlxuICAgICAgICB9KTtcbiAgICAgIC8vIFRcbiAgICAgIGNhc2UgXCJlZWVlZVwiOlxuICAgICAgICByZXR1cm4gbi5kYXkoYSwge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcbiAgICAgIGNhc2UgXCJlZWVlZWVcIjpcbiAgICAgICAgcmV0dXJuIG4uZGF5KGEsIHtcbiAgICAgICAgICB3aWR0aDogXCJzaG9ydFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSBcImVlZWVcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBuLmRheShhLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWtcbiAgYzogZnVuY3Rpb24odCwgZSwgbiwgcikge1xuICAgIGNvbnN0IGEgPSB0LmdldERheSgpLCBpID0gKGEgLSByLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuICAgIHN3aXRjaCAoZSkge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChzYW1lIGFzIGluIGBlYClcbiAgICAgIGNhc2UgXCJjXCI6XG4gICAgICAgIHJldHVybiBTdHJpbmcoaSk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG4gICAgICBjYXNlIFwiY2NcIjpcbiAgICAgICAgcmV0dXJuIG8oaSwgZS5sZW5ndGgpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG4gICAgICBjYXNlIFwiY29cIjpcbiAgICAgICAgcmV0dXJuIG4ub3JkaW5hbE51bWJlcihpLCB7IHVuaXQ6IFwiZGF5XCIgfSk7XG4gICAgICBjYXNlIFwiY2NjXCI6XG4gICAgICAgIHJldHVybiBuLmRheShhLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIlxuICAgICAgICB9KTtcbiAgICAgIC8vIFRcbiAgICAgIGNhc2UgXCJjY2NjY1wiOlxuICAgICAgICByZXR1cm4gbi5kYXkoYSwge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcbiAgICAgIGNhc2UgXCJjY2NjY2NcIjpcbiAgICAgICAgcmV0dXJuIG4uZGF5KGEsIHtcbiAgICAgICAgICB3aWR0aDogXCJzaG9ydFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSBcImNjY2NcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBuLmRheShhLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gSVNPIGRheSBvZiB3ZWVrXG4gIGk6IGZ1bmN0aW9uKHQsIGUsIG4pIHtcbiAgICBjb25zdCByID0gdC5nZXREYXkoKSwgYSA9IHIgPT09IDAgPyA3IDogcjtcbiAgICBzd2l0Y2ggKGUpIHtcbiAgICAgIC8vIDJcbiAgICAgIGNhc2UgXCJpXCI6XG4gICAgICAgIHJldHVybiBTdHJpbmcoYSk7XG4gICAgICAvLyAwMlxuICAgICAgY2FzZSBcImlpXCI6XG4gICAgICAgIHJldHVybiBvKGEsIGUubGVuZ3RoKTtcbiAgICAgIC8vIDJuZFxuICAgICAgY2FzZSBcImlvXCI6XG4gICAgICAgIHJldHVybiBuLm9yZGluYWxOdW1iZXIoYSwgeyB1bml0OiBcImRheVwiIH0pO1xuICAgICAgLy8gVHVlXG4gICAgICBjYXNlIFwiaWlpXCI6XG4gICAgICAgIHJldHVybiBuLmRheShyLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIlxuICAgICAgICB9KTtcbiAgICAgIC8vIFRcbiAgICAgIGNhc2UgXCJpaWlpaVwiOlxuICAgICAgICByZXR1cm4gbi5kYXkociwge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcbiAgICAgIGNhc2UgXCJpaWlpaWlcIjpcbiAgICAgICAgcmV0dXJuIG4uZGF5KHIsIHtcbiAgICAgICAgICB3aWR0aDogXCJzaG9ydFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSBcImlpaWlcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBuLmRheShyLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gQU0gb3IgUE1cbiAgYTogZnVuY3Rpb24odCwgZSwgbikge1xuICAgIGNvbnN0IGEgPSB0LmdldEhvdXJzKCkgLyAxMiA+PSAxID8gXCJwbVwiIDogXCJhbVwiO1xuICAgIHN3aXRjaCAoZSkge1xuICAgICAgY2FzZSBcImFcIjpcbiAgICAgIGNhc2UgXCJhYVwiOlxuICAgICAgICByZXR1cm4gbi5kYXlQZXJpb2QoYSwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCJcbiAgICAgICAgfSk7XG4gICAgICBjYXNlIFwiYWFhXCI6XG4gICAgICAgIHJldHVybiBuLmRheVBlcmlvZChhLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIlxuICAgICAgICB9KS50b0xvd2VyQ2FzZSgpO1xuICAgICAgY2FzZSBcImFhYWFhXCI6XG4gICAgICAgIHJldHVybiBuLmRheVBlcmlvZChhLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCJcbiAgICAgICAgfSk7XG4gICAgICBjYXNlIFwiYWFhYVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG4uZGF5UGVyaW9kKGEsIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCJcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBBTSwgUE0sIG1pZG5pZ2h0LCBub29uXG4gIGI6IGZ1bmN0aW9uKHQsIGUsIG4pIHtcbiAgICBjb25zdCByID0gdC5nZXRIb3VycygpO1xuICAgIGxldCBhO1xuICAgIHN3aXRjaCAociA9PT0gMTIgPyBhID0gTy5ub29uIDogciA9PT0gMCA/IGEgPSBPLm1pZG5pZ2h0IDogYSA9IHIgLyAxMiA+PSAxID8gXCJwbVwiIDogXCJhbVwiLCBlKSB7XG4gICAgICBjYXNlIFwiYlwiOlxuICAgICAgY2FzZSBcImJiXCI6XG4gICAgICAgIHJldHVybiBuLmRheVBlcmlvZChhLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIlxuICAgICAgICB9KTtcbiAgICAgIGNhc2UgXCJiYmJcIjpcbiAgICAgICAgcmV0dXJuIG4uZGF5UGVyaW9kKGEsIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiXG4gICAgICAgIH0pLnRvTG93ZXJDYXNlKCk7XG4gICAgICBjYXNlIFwiYmJiYmJcIjpcbiAgICAgICAgcmV0dXJuIG4uZGF5UGVyaW9kKGEsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIlxuICAgICAgICB9KTtcbiAgICAgIGNhc2UgXCJiYmJiXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbi5kYXlQZXJpb2QoYSwge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIlxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIGluIHRoZSBtb3JuaW5nLCBpbiB0aGUgYWZ0ZXJub29uLCBpbiB0aGUgZXZlbmluZywgYXQgbmlnaHRcbiAgQjogZnVuY3Rpb24odCwgZSwgbikge1xuICAgIGNvbnN0IHIgPSB0LmdldEhvdXJzKCk7XG4gICAgbGV0IGE7XG4gICAgc3dpdGNoIChyID49IDE3ID8gYSA9IE8uZXZlbmluZyA6IHIgPj0gMTIgPyBhID0gTy5hZnRlcm5vb24gOiByID49IDQgPyBhID0gTy5tb3JuaW5nIDogYSA9IE8ubmlnaHQsIGUpIHtcbiAgICAgIGNhc2UgXCJCXCI6XG4gICAgICBjYXNlIFwiQkJcIjpcbiAgICAgIGNhc2UgXCJCQkJcIjpcbiAgICAgICAgcmV0dXJuIG4uZGF5UGVyaW9kKGEsIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSBcIkJCQkJCXCI6XG4gICAgICAgIHJldHVybiBuLmRheVBlcmlvZChhLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCJcbiAgICAgICAgfSk7XG4gICAgICBjYXNlIFwiQkJCQlwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG4uZGF5UGVyaW9kKGEsIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCJcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBIb3VyIFsxLTEyXVxuICBoOiBmdW5jdGlvbih0LCBlLCBuKSB7XG4gICAgaWYgKGUgPT09IFwiaG9cIikge1xuICAgICAgbGV0IHIgPSB0LmdldEhvdXJzKCkgJSAxMjtcbiAgICAgIHJldHVybiByID09PSAwICYmIChyID0gMTIpLCBuLm9yZGluYWxOdW1iZXIociwgeyB1bml0OiBcImhvdXJcIiB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHcuaCh0LCBlKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0yM11cbiAgSDogZnVuY3Rpb24odCwgZSwgbikge1xuICAgIHJldHVybiBlID09PSBcIkhvXCIgPyBuLm9yZGluYWxOdW1iZXIodC5nZXRIb3VycygpLCB7IHVuaXQ6IFwiaG91clwiIH0pIDogdy5IKHQsIGUpO1xuICB9LFxuICAvLyBIb3VyIFswLTExXVxuICBLOiBmdW5jdGlvbih0LCBlLCBuKSB7XG4gICAgY29uc3QgciA9IHQuZ2V0SG91cnMoKSAlIDEyO1xuICAgIHJldHVybiBlID09PSBcIktvXCIgPyBuLm9yZGluYWxOdW1iZXIociwgeyB1bml0OiBcImhvdXJcIiB9KSA6IG8ociwgZS5sZW5ndGgpO1xuICB9LFxuICAvLyBIb3VyIFsxLTI0XVxuICBrOiBmdW5jdGlvbih0LCBlLCBuKSB7XG4gICAgbGV0IHIgPSB0LmdldEhvdXJzKCk7XG4gICAgcmV0dXJuIHIgPT09IDAgJiYgKHIgPSAyNCksIGUgPT09IFwia29cIiA/IG4ub3JkaW5hbE51bWJlcihyLCB7IHVuaXQ6IFwiaG91clwiIH0pIDogbyhyLCBlLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbnV0ZVxuICBtOiBmdW5jdGlvbih0LCBlLCBuKSB7XG4gICAgcmV0dXJuIGUgPT09IFwibW9cIiA/IG4ub3JkaW5hbE51bWJlcih0LmdldE1pbnV0ZXMoKSwgeyB1bml0OiBcIm1pbnV0ZVwiIH0pIDogdy5tKHQsIGUpO1xuICB9LFxuICAvLyBTZWNvbmRcbiAgczogZnVuY3Rpb24odCwgZSwgbikge1xuICAgIHJldHVybiBlID09PSBcInNvXCIgPyBuLm9yZGluYWxOdW1iZXIodC5nZXRTZWNvbmRzKCksIHsgdW5pdDogXCJzZWNvbmRcIiB9KSA6IHcucyh0LCBlKTtcbiAgfSxcbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXG4gIFM6IGZ1bmN0aW9uKHQsIGUpIHtcbiAgICByZXR1cm4gdy5TKHQsIGUpO1xuICB9LFxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYWx3YXlzIGAnWidgKVxuICBYOiBmdW5jdGlvbih0LCBlLCBuKSB7XG4gICAgY29uc3QgciA9IHQuZ2V0VGltZXpvbmVPZmZzZXQoKTtcbiAgICBpZiAociA9PT0gMClcbiAgICAgIHJldHVybiBcIlpcIjtcbiAgICBzd2l0Y2ggKGUpIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlIFwiWFwiOlxuICAgICAgICByZXR1cm4gUShyKTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYYFxuICAgICAgY2FzZSBcIlhYWFhcIjpcbiAgICAgIGNhc2UgXCJYWFwiOlxuICAgICAgICByZXR1cm4gYihyKTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYWGBcbiAgICAgIGNhc2UgXCJYWFhYWFwiOlxuICAgICAgY2FzZSBcIlhYWFwiOlxuICAgICAgLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gYihyLCBcIjpcIik7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYCcrMDA6MDAnYCBvciBlcXVpdmFsZW50KVxuICB4OiBmdW5jdGlvbih0LCBlLCBuKSB7XG4gICAgY29uc3QgciA9IHQuZ2V0VGltZXpvbmVPZmZzZXQoKTtcbiAgICBzd2l0Y2ggKGUpIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlIFwieFwiOlxuICAgICAgICByZXR1cm4gUShyKTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4YFxuICAgICAgY2FzZSBcInh4eHhcIjpcbiAgICAgIGNhc2UgXCJ4eFwiOlxuICAgICAgICByZXR1cm4gYihyKTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4eGBcbiAgICAgIGNhc2UgXCJ4eHh4eFwiOlxuICAgICAgY2FzZSBcInh4eFwiOlxuICAgICAgLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gYihyLCBcIjpcIik7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoR01UKVxuICBPOiBmdW5jdGlvbih0LCBlLCBuKSB7XG4gICAgY29uc3QgciA9IHQuZ2V0VGltZXpvbmVPZmZzZXQoKTtcbiAgICBzd2l0Y2ggKGUpIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlIFwiT1wiOlxuICAgICAgY2FzZSBcIk9PXCI6XG4gICAgICBjYXNlIFwiT09PXCI6XG4gICAgICAgIHJldHVybiBcIkdNVFwiICsgTChyLCBcIjpcIik7XG4gICAgICAvLyBMb25nXG4gICAgICBjYXNlIFwiT09PT1wiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIFwiR01UXCIgKyBiKHIsIFwiOlwiKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXRpb24pXG4gIHo6IGZ1bmN0aW9uKHQsIGUsIG4pIHtcbiAgICBjb25zdCByID0gdC5nZXRUaW1lem9uZU9mZnNldCgpO1xuICAgIHN3aXRjaCAoZSkge1xuICAgICAgLy8gU2hvcnRcbiAgICAgIGNhc2UgXCJ6XCI6XG4gICAgICBjYXNlIFwienpcIjpcbiAgICAgIGNhc2UgXCJ6enpcIjpcbiAgICAgICAgcmV0dXJuIFwiR01UXCIgKyBMKHIsIFwiOlwiKTtcbiAgICAgIC8vIExvbmdcbiAgICAgIGNhc2UgXCJ6enp6XCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gXCJHTVRcIiArIGIociwgXCI6XCIpO1xuICAgIH1cbiAgfSxcbiAgLy8gU2Vjb25kcyB0aW1lc3RhbXBcbiAgdDogZnVuY3Rpb24odCwgZSwgbikge1xuICAgIGNvbnN0IHIgPSBNYXRoLnRydW5jKHQuZ2V0VGltZSgpIC8gMWUzKTtcbiAgICByZXR1cm4gbyhyLCBlLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAgVDogZnVuY3Rpb24odCwgZSwgbikge1xuICAgIGNvbnN0IHIgPSB0LmdldFRpbWUoKTtcbiAgICByZXR1cm4gbyhyLCBlLmxlbmd0aCk7XG4gIH1cbn07XG5mdW5jdGlvbiBMKHQsIGUgPSBcIlwiKSB7XG4gIGNvbnN0IG4gPSB0ID4gMCA/IFwiLVwiIDogXCIrXCIsIHIgPSBNYXRoLmFicyh0KSwgYSA9IE1hdGgudHJ1bmMociAvIDYwKSwgaSA9IHIgJSA2MDtcbiAgcmV0dXJuIGkgPT09IDAgPyBuICsgU3RyaW5nKGEpIDogbiArIFN0cmluZyhhKSArIGUgKyBvKGksIDIpO1xufVxuZnVuY3Rpb24gUSh0LCBlKSB7XG4gIHJldHVybiB0ICUgNjAgPT09IDAgPyAodCA+IDAgPyBcIi1cIiA6IFwiK1wiKSArIG8oTWF0aC5hYnModCkgLyA2MCwgMikgOiBiKHQsIGUpO1xufVxuZnVuY3Rpb24gYih0LCBlID0gXCJcIikge1xuICBjb25zdCBuID0gdCA+IDAgPyBcIi1cIiA6IFwiK1wiLCByID0gTWF0aC5hYnModCksIGEgPSBvKE1hdGgudHJ1bmMociAvIDYwKSwgMiksIGkgPSBvKHIgJSA2MCwgMik7XG4gIHJldHVybiBuICsgYSArIGUgKyBpO1xufVxuY29uc3QgaiA9ICh0LCBlKSA9PiB7XG4gIHN3aXRjaCAodCkge1xuICAgIGNhc2UgXCJQXCI6XG4gICAgICByZXR1cm4gZS5kYXRlKHsgd2lkdGg6IFwic2hvcnRcIiB9KTtcbiAgICBjYXNlIFwiUFBcIjpcbiAgICAgIHJldHVybiBlLmRhdGUoeyB3aWR0aDogXCJtZWRpdW1cIiB9KTtcbiAgICBjYXNlIFwiUFBQXCI6XG4gICAgICByZXR1cm4gZS5kYXRlKHsgd2lkdGg6IFwibG9uZ1wiIH0pO1xuICAgIGNhc2UgXCJQUFBQXCI6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBlLmRhdGUoeyB3aWR0aDogXCJmdWxsXCIgfSk7XG4gIH1cbn0sIEkgPSAodCwgZSkgPT4ge1xuICBzd2l0Y2ggKHQpIHtcbiAgICBjYXNlIFwicFwiOlxuICAgICAgcmV0dXJuIGUudGltZSh7IHdpZHRoOiBcInNob3J0XCIgfSk7XG4gICAgY2FzZSBcInBwXCI6XG4gICAgICByZXR1cm4gZS50aW1lKHsgd2lkdGg6IFwibWVkaXVtXCIgfSk7XG4gICAgY2FzZSBcInBwcFwiOlxuICAgICAgcmV0dXJuIGUudGltZSh7IHdpZHRoOiBcImxvbmdcIiB9KTtcbiAgICBjYXNlIFwicHBwcFwiOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZS50aW1lKHsgd2lkdGg6IFwiZnVsbFwiIH0pO1xuICB9XG59LCBqdCA9ICh0LCBlKSA9PiB7XG4gIGNvbnN0IG4gPSB0Lm1hdGNoKC8oUCspKHArKT8vKSB8fCBbXSwgciA9IG5bMV0sIGEgPSBuWzJdO1xuICBpZiAoIWEpXG4gICAgcmV0dXJuIGoodCwgZSk7XG4gIGxldCBpO1xuICBzd2l0Y2ggKHIpIHtcbiAgICBjYXNlIFwiUFwiOlxuICAgICAgaSA9IGUuZGF0ZVRpbWUoeyB3aWR0aDogXCJzaG9ydFwiIH0pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIlBQXCI6XG4gICAgICBpID0gZS5kYXRlVGltZSh7IHdpZHRoOiBcIm1lZGl1bVwiIH0pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIlBQUFwiOlxuICAgICAgaSA9IGUuZGF0ZVRpbWUoeyB3aWR0aDogXCJsb25nXCIgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiUFBQUFwiOlxuICAgIGRlZmF1bHQ6XG4gICAgICBpID0gZS5kYXRlVGltZSh7IHdpZHRoOiBcImZ1bGxcIiB9KTtcbiAgICAgIGJyZWFrO1xuICB9XG4gIHJldHVybiBpLnJlcGxhY2UoXCJ7e2RhdGV9fVwiLCBqKHIsIGUpKS5yZXBsYWNlKFwie3t0aW1lfX1cIiwgSShhLCBlKSk7XG59LCBSdCA9IHtcbiAgcDogSSxcbiAgUDoganRcbn0sIFh0ID0gL15EKyQvLCBfdCA9IC9eWSskLywgQXQgPSBbXCJEXCIsIFwiRERcIiwgXCJZWVwiLCBcIllZWVlcIl07XG5mdW5jdGlvbiBCdCh0KSB7XG4gIHJldHVybiBYdC50ZXN0KHQpO1xufVxuZnVuY3Rpb24gR3QodCkge1xuICByZXR1cm4gX3QudGVzdCh0KTtcbn1cbmZ1bmN0aW9uIEl0KHQsIGUsIG4pIHtcbiAgY29uc3QgciA9IFZ0KHQsIGUsIG4pO1xuICBpZiAoY29uc29sZS53YXJuKHIpLCBBdC5pbmNsdWRlcyh0KSkgdGhyb3cgbmV3IFJhbmdlRXJyb3Iocik7XG59XG5mdW5jdGlvbiBWdCh0LCBlLCBuKSB7XG4gIGNvbnN0IHIgPSB0WzBdID09PSBcIllcIiA/IFwieWVhcnNcIiA6IFwiZGF5cyBvZiB0aGUgbW9udGhcIjtcbiAgcmV0dXJuIGBVc2UgXFxgJHt0LnRvTG93ZXJDYXNlKCl9XFxgIGluc3RlYWQgb2YgXFxgJHt0fVxcYCAoaW4gXFxgJHtlfVxcYCkgZm9yIGZvcm1hdHRpbmcgJHtyfSB0byB0aGUgaW5wdXQgXFxgJHtufVxcYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kYDtcbn1cbmNvbnN0ICR0ID0gL1t5WVFxTUx3SWREZWNpaEhLa21zXW98KFxcdylcXDEqfCcnfCcoJyd8W14nXSkrKCd8JCl8Li9nLCBKdCA9IC9QK3ArfFArfHArfCcnfCcoJyd8W14nXSkrKCd8JCl8Li9nLCBVdCA9IC9eJyhbXl0qPyknPyQvLCB6dCA9IC8nJy9nLCBLdCA9IC9bYS16QS1aXS87XG5mdW5jdGlvbiBadCh0LCBlLCBuKSB7XG4gIHZhciBoLCBnLCBNLCBQLCBGLCBwLCBFLCBDO1xuICBjb25zdCByID0gVCgpLCBhID0gKG4gPT0gbnVsbCA/IHZvaWQgMCA6IG4ubG9jYWxlKSA/PyByLmxvY2FsZSA/PyBOdCwgaSA9IChuID09IG51bGwgPyB2b2lkIDAgOiBuLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgPz8gKChnID0gKGggPSBuID09IG51bGwgPyB2b2lkIDAgOiBuLmxvY2FsZSkgPT0gbnVsbCA/IHZvaWQgMCA6IGgub3B0aW9ucykgPT0gbnVsbCA/IHZvaWQgMCA6IGcuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSA/PyByLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/PyAoKFAgPSAoTSA9IHIubG9jYWxlKSA9PSBudWxsID8gdm9pZCAwIDogTS5vcHRpb25zKSA9PSBudWxsID8gdm9pZCAwIDogUC5maXJzdFdlZWtDb250YWluc0RhdGUpID8/IDEsIHMgPSAobiA9PSBudWxsID8gdm9pZCAwIDogbi53ZWVrU3RhcnRzT24pID8/ICgocCA9IChGID0gbiA9PSBudWxsID8gdm9pZCAwIDogbi5sb2NhbGUpID09IG51bGwgPyB2b2lkIDAgOiBGLm9wdGlvbnMpID09IG51bGwgPyB2b2lkIDAgOiBwLndlZWtTdGFydHNPbikgPz8gci53ZWVrU3RhcnRzT24gPz8gKChDID0gKEUgPSByLmxvY2FsZSkgPT0gbnVsbCA/IHZvaWQgMCA6IEUub3B0aW9ucykgPT0gbnVsbCA/IHZvaWQgMCA6IEMud2Vla1N0YXJ0c09uKSA/PyAwLCB1ID0gbCh0KTtcbiAgaWYgKCF0dCh1KSlcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIkludmFsaWQgdGltZSB2YWx1ZVwiKTtcbiAgbGV0IGMgPSBlLm1hdGNoKEp0KS5tYXAoKG0pID0+IHtcbiAgICBjb25zdCBmID0gbVswXTtcbiAgICBpZiAoZiA9PT0gXCJwXCIgfHwgZiA9PT0gXCJQXCIpIHtcbiAgICAgIGNvbnN0IFcgPSBSdFtmXTtcbiAgICAgIHJldHVybiBXKG0sIGEuZm9ybWF0TG9uZyk7XG4gICAgfVxuICAgIHJldHVybiBtO1xuICB9KS5qb2luKFwiXCIpLm1hdGNoKCR0KS5tYXAoKG0pID0+IHtcbiAgICBpZiAobSA9PT0gXCInJ1wiKVxuICAgICAgcmV0dXJuIHsgaXNUb2tlbjogITEsIHZhbHVlOiBcIidcIiB9O1xuICAgIGNvbnN0IGYgPSBtWzBdO1xuICAgIGlmIChmID09PSBcIidcIilcbiAgICAgIHJldHVybiB7IGlzVG9rZW46ICExLCB2YWx1ZTogdGUobSkgfTtcbiAgICBpZiAoSFtmXSlcbiAgICAgIHJldHVybiB7IGlzVG9rZW46ICEwLCB2YWx1ZTogbSB9O1xuICAgIGlmIChmLm1hdGNoKEt0KSlcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFxuICAgICAgICBcIkZvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlciBgXCIgKyBmICsgXCJgXCJcbiAgICAgICk7XG4gICAgcmV0dXJuIHsgaXNUb2tlbjogITEsIHZhbHVlOiBtIH07XG4gIH0pO1xuICBhLmxvY2FsaXplLnByZXByb2Nlc3NvciAmJiAoYyA9IGEubG9jYWxpemUucHJlcHJvY2Vzc29yKHUsIGMpKTtcbiAgY29uc3QgZCA9IHtcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IGksXG4gICAgd2Vla1N0YXJ0c09uOiBzLFxuICAgIGxvY2FsZTogYVxuICB9O1xuICByZXR1cm4gYy5tYXAoKG0pID0+IHtcbiAgICBpZiAoIW0uaXNUb2tlbikgcmV0dXJuIG0udmFsdWU7XG4gICAgY29uc3QgZiA9IG0udmFsdWU7XG4gICAgKCEobiAhPSBudWxsICYmIG4udXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zKSAmJiBHdChmKSB8fCAhKG4gIT0gbnVsbCAmJiBuLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnMpICYmIEJ0KGYpKSAmJiBJdChmLCBlLCBTdHJpbmcodCkpO1xuICAgIGNvbnN0IFcgPSBIW2ZbMF1dO1xuICAgIHJldHVybiBXKHUsIGYsIGEubG9jYWxpemUsIGQpO1xuICB9KS5qb2luKFwiXCIpO1xufVxuZnVuY3Rpb24gdGUodCkge1xuICBjb25zdCBlID0gdC5tYXRjaChVdCk7XG4gIHJldHVybiBlID8gZVsxXS5yZXBsYWNlKHp0LCBcIidcIikgOiB0O1xufVxuZnVuY3Rpb24gZWUodCkge1xuICBjb25zdCBlID0gdC5tYXRjaChcbiAgICAvKFxcZHs0fSktKFxcZHsyfSktKFxcZHsyfSlbVCBdKFxcZHsyfSk6KFxcZHsyfSk6KFxcZHsyfSkoPzpcXC4oXFxkezAsN30pKT8oPzpafCguKShcXGR7Mn0pOj8oXFxkezJ9KT8pPy9cbiAgKTtcbiAgcmV0dXJuIGUgPyBuZXcgRGF0ZShcbiAgICBEYXRlLlVUQyhcbiAgICAgICtlWzFdLFxuICAgICAgK2VbMl0gLSAxLFxuICAgICAgK2VbM10sXG4gICAgICArZVs0XSAtICgrZVs5XSB8fCAwKSAqIChlWzhdID09IFwiLVwiID8gLTEgOiAxKSxcbiAgICAgICtlWzVdIC0gKCtlWzEwXSB8fCAwKSAqIChlWzhdID09IFwiLVwiID8gLTEgOiAxKSxcbiAgICAgICtlWzZdLFxuICAgICAgKygoZVs3XSB8fCBcIjBcIikgKyBcIjAwXCIpLnN1YnN0cmluZygwLCAzKVxuICAgIClcbiAgKSA6IC8qIEBfX1BVUkVfXyAqLyBuZXcgRGF0ZShOYU4pO1xufVxuZnVuY3Rpb24gUih0LCBlKSB7XG4gIHJldHVybiBZKHQsIC1lKTtcbn1cbmZ1bmN0aW9uIG5lKHQpIHtcbiAgY29uc3QgZSA9IGVlKHQpO1xuICByZXR1cm4gZS52YWx1ZU9mKCkgKyBlLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2ZTQ7XG59XG5mdW5jdGlvbiBzZSh0KSB7XG4gIHJldHVybiAhKHQgIT0gbnVsbCAmJiB0LnRvKSB8fCAhKHQgIT0gbnVsbCAmJiB0LmZyb20pID8gdCA6IHtcbiAgICAuLi50LFxuICAgIHRvOiBYKHQudG8pLFxuICAgIGZyb206IFgodC5mcm9tKVxuICB9O1xufVxuZnVuY3Rpb24gdWUodCkge1xuICByZXR1cm4gISh0ICE9IG51bGwgJiYgdC50bykgfHwgISh0ICE9IG51bGwgJiYgdC5mcm9tKSA/IHQgOiB7XG4gICAgLi4udCxcbiAgICB0bzogXyh0LnRvKSxcbiAgICBmcm9tOiBfKHQuZnJvbSlcbiAgfTtcbn1cbmZ1bmN0aW9uIFgodCkge1xuICBpZiAoIXQpXG4gICAgcmV0dXJuO1xuICBpZiAodCBpbnN0YW5jZW9mIERhdGUpXG4gICAgcmV0dXJuIFIodCwgdC5nZXRUaW1lem9uZU9mZnNldCgpKTtcbiAgY29uc3QgZSA9IG5ldyBEYXRlKHQpO1xuICBpZiAoZSlcbiAgICByZXR1cm4gUihlLCBlLmdldFRpbWV6b25lT2Zmc2V0KCkpO1xufVxuZnVuY3Rpb24gXyh0KSB7XG4gIGlmICghdClcbiAgICByZXR1cm47XG4gIGlmICh0IGluc3RhbmNlb2YgRGF0ZSlcbiAgICByZXR1cm4gWSh0LCB0LmdldFRpbWV6b25lT2Zmc2V0KCkpO1xuICBjb25zdCBlID0gbmV3IERhdGUodCk7XG4gIGlmIChlKVxuICAgIHJldHVybiBZKGUsIGUuZ2V0VGltZXpvbmVPZmZzZXQoKSk7XG59XG5mdW5jdGlvbiByZSh0KSB7XG4gIGNvbnN0IGUgPSB0ID09IG51bGwgfHwgdCA8IDA7XG4gIHJldHVybiBuZXcgSW50bC5OdW1iZXJGb3JtYXQodm9pZCAwLCB7XG4gICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiBlID8gMCA6IHQsXG4gICAgLy8gTWluaW11bSBudW1iZXIgb2YgZGlnaXRzIGFmdGVyIHRoZSBkZWNpbWFsXG4gICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiBlID8gMiA6IHRcbiAgICAvLyBNYXhpbXVtIG51bWJlciBvZiBkaWdpdHMgYWZ0ZXIgdGhlIGRlY2ltYWxcbiAgfSk7XG59XG5jb25zdCBhZSA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCk7XG5mdW5jdGlvbiBjZSh0ID0gXCJcIiwgZSA9IFwic3RyaW5nXCIpIHtcbiAgaWYgKHQgPT09IG51bGwpIHJldHVybiBudWxsO1xuICBjb25zdCB7IHR5cGU6IG4sIGRhdGVGb3JtYXQ6IHIsIG1ldGE6IGEsIHRydW5jYXRlOiBpLCBkcHM6IHMgfSA9IHR5cGVvZiBlID09IFwic3RyaW5nXCIgPyB7IHR5cGU6IGUgfSA6IGU7XG4gIGlmIChuID09PSBcIm51bWJlclwiKSByZXR1cm4gdShyZShzKS5mb3JtYXQocGFyc2VGbG9hdCh0KSkpO1xuICBpZiAobiA9PT0gXCJkYXRlXCIgJiYgdC5lbmRzV2l0aChcIlQwMDowMDowMC4wMDBcIikpXG4gICAgcmV0dXJuIHUoYWUuZm9ybWF0KG5ldyBEYXRlKHQpKSk7XG4gIGlmIChuID09PSBcImRhdGVcIikgcmV0dXJuIHUobmV3IERhdGUodCkudG9Mb2NhbGVTdHJpbmcoKSk7XG4gIGlmIChpKVxuICAgIHJldHVybiAodCA9PSBudWxsID8gdm9pZCAwIDogdC5sZW5ndGgpID4gaSA/IGAkeyhhID09IG51bGwgPyB2b2lkIDAgOiBhLnByZXRleHQpIHx8IFwiXCJ9JHt0LnN1YnN0cmluZygwLCBpKX0uLi5gIDogdSh0KTtcbiAgaWYgKHIgJiYgdCkgcmV0dXJuIHUoWnQobmUodCksIHIpKTtcbiAgcmV0dXJuIHQ7XG4gIGZ1bmN0aW9uIHUoYykge1xuICAgIHJldHVybiBgJHsoYSA9PSBudWxsID8gdm9pZCAwIDogYS5wcmV0ZXh0KSB8fCBcIlwifSR7Y30keyhhID09IG51bGwgPyB2b2lkIDAgOiBhLnBvc3R0ZXh0KSB8fCBcIlwifWA7XG4gIH1cbn1cbmNvbnN0IGRlID0gKHQpID0+IHtcbiAgaWYgKCF0KVxuICAgIHJldHVybiB7IGxpbmtUZXh0OiBudWxsLCBsaW5rVXJsOiBudWxsIH07XG4gIGNvbnN0IGUgPSAvXFxbKC4qKVxcXVxcKCguKilcXCkvLmV4ZWModCk7XG4gIHJldHVybiB7IGxpbmtUZXh0OiBlID09IG51bGwgPyB2b2lkIDAgOiBlWzFdLCBsaW5rVXJsOiBlbmNvZGVVUkkoKGUgPT0gbnVsbCA/IHZvaWQgMCA6IGVbMl0pIHx8IFwiXCIpIH07XG59O1xuZXhwb3J0IHtcbiAgR3QgYXMgQSxcbiAgSXQgYXMgQixcbiAgQnQgYXMgQyxcbiAgZXQgYXMgRCxcbiAgdHQgYXMgRSxcbiAgWCBhcyBGLFxuICBadCBhcyBhLFxuICBzZSBhcyBiLFxuICBsIGFzIGMsXG4gIGRlIGFzIGQsXG4gIFYgYXMgZSxcbiAgY2UgYXMgZixcbiAgWSBhcyBnLFxuICBlZSBhcyBoLFxuICBSIGFzIGksXG4gIHkgYXMgaixcbiAgeiBhcyBrLFxuICBKIGFzIGwsXG4gIGllIGFzIG0sXG4gIFQgYXMgbixcbiAgb2UgYXMgbyxcbiAgbmUgYXMgcCxcbiAgRyBhcyBxLFxuICB4IGFzIHIsXG4gIE4gYXMgcyxcbiAgdWUgYXMgdCxcbiAgdiBhcyB1LFxuICBRdCBhcyB2LFxuICBIdCBhcyB3LFxuICBxIGFzIHgsXG4gIE50IGFzIHksXG4gIFJ0IGFzIHpcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3JtYXQtVGp6UDhnUVguanMubWFwXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsU0FBUyxF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
