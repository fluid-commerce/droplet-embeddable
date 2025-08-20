import { M as Mt$1, b as Id, u as ul } from "./common-Badpcggq-Batnw2Ed.js";
import { l, z, i as ie$1, J, T as T$1, y as y$1, o as oe$1, G, x, v, Q as Qt$1, H as Ht$1, q, a as Nt$1, b as Rt$1, f as Gt$1, I as It$1, B as Bt$1, g as et$1, N, Y as Y$1, V, Z as Zt$1, t as tt$1 } from "./format-TjzP8gQX-Cs7Vwno2.js";
import { d as d$1, c, o as o$1, a } from "./differenceInSeconds-D-PK4HfM-Dm2bjhDp.js";
import { i, d as d$2, f, a as a$1 } from "./subYears-CyoGbgS0-DIOARaW6.js";
import { S, p as p$1, m } from "./useTimeseries-CKhM5zgf-Dd4vgjj-.js";
var he = Object.defineProperty;
var ye = (s, n, e) => n in s ? he(s, n, { enumerable: true, configurable: true, writable: true, value: e }) : s[n] = e;
var o = (s, n, e) => ye(s, typeof n != "symbol" ? n + "" : n, e);
function Y(s, n) {
  const e = l(s), t = l(n), r = e.getTime() - t.getTime();
  return r < 0 ? -1 : r > 0 ? 1 : r;
}
function ve(s, n) {
  const e = l(s), t = l(n), r = e.getFullYear() - t.getFullYear(), a2 = e.getMonth() - t.getMonth();
  return r * 12 + a2;
}
function Ae(s, n) {
  const e = l(s), t = l(n);
  return e.getFullYear() - t.getFullYear();
}
function oe(s, n) {
  const e = l(s), t = l(n), r = re(e, t), a2 = Math.abs(z(e, t));
  e.setDate(e.getDate() - r * a2);
  const i2 = +(re(e, t) === -r), u = r * (a2 - i2);
  return u === 0 ? 0 : u;
}
function re(s, n) {
  const e = s.getFullYear() - n.getFullYear() || s.getMonth() - n.getMonth() || s.getDate() - n.getDate() || s.getHours() - n.getHours() || s.getMinutes() - n.getMinutes() || s.getSeconds() - n.getSeconds() || s.getMilliseconds() - n.getMilliseconds();
  return e < 0 ? -1 : e > 0 ? 1 : e;
}
function Be(s, n, e) {
  const t = d$1(s, n) / ie$1;
  return c(e == null ? void 0 : e.roundingMethod)(t);
}
function ze(s, n, e) {
  const t = d$1(s, n) / J;
  return c(e == null ? void 0 : e.roundingMethod)(t);
}
function ie(s) {
  const n = l(s), e = n.getMonth();
  return n.setFullYear(n.getFullYear(), e + 1, 0), n.setHours(23, 59, 59, 999), n;
}
function Ge(s) {
  const n = l(s);
  return +o$1(n) == +ie(n);
}
function ce(s, n) {
  const e = l(s), t = l(n), r = Y(e, t), a2 = Math.abs(
    ve(e, t)
  );
  let i2;
  if (a2 < 1)
    i2 = 0;
  else {
    e.getMonth() === 1 && e.getDate() > 27 && e.setDate(30), e.setMonth(e.getMonth() - r * a2);
    let u = Y(e, t) === -r;
    Ge(l(s)) && a2 === 1 && Y(s, t) === 1 && (u = false), i2 = r * (a2 - Number(u));
  }
  return i2 === 0 ? 0 : i2;
}
function Xe(s, n, e) {
  const t = ce(s, n) / 3;
  return c(e == null ? void 0 : e.roundingMethod)(t);
}
function Ue(s, n, e) {
  const t = oe(s, n) / 7;
  return c(e == null ? void 0 : e.roundingMethod)(t);
}
function Ze(s, n) {
  const e = l(s), t = l(n), r = Y(e, t), a2 = Math.abs(Ae(e, t));
  e.setFullYear(1584), t.setFullYear(1584);
  const i2 = Y(e, t) === -r, u = r * (a2 - +i2);
  return u === 0 ? 0 : u;
}
function $e(s) {
  const n = l(s);
  return n.setSeconds(0, 0), n;
}
function Ke(s) {
  const n = l(s), e = n.getMonth(), t = e - e % 3;
  return n.setMonth(t, 1), n.setHours(0, 0, 0, 0), n;
}
function Ve(s) {
  const n = l(s);
  return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
function je(s) {
  const n = l(s), e = n.getFullYear();
  return n.setFullYear(e + 1, 0, 0), n.setHours(23, 59, 59, 999), n;
}
function Je(s) {
  const n = l(s);
  return n.setMinutes(59, 59, 999), n;
}
function Se(s, n) {
  var u, f2;
  const e = T$1(), t = e.weekStartsOn ?? ((f2 = (u = e.locale) == null ? void 0 : u.options) == null ? void 0 : f2.weekStartsOn) ?? 0, r = l(s), a2 = r.getDay(), i2 = (a2 < t ? -7 : 0) + 6 - (a2 - t);
  return r.setDate(r.getDate() + i2), r.setHours(23, 59, 59, 999), r;
}
function et(s) {
  const n = l(s);
  return n.setSeconds(59, 999), n;
}
function tt(s) {
  const n = l(s), e = n.getMonth(), t = e - e % 3 + 3;
  return n.setMonth(t, 0), n.setHours(23, 59, 59, 999), n;
}
function rt(s) {
  const n = l(s);
  return n.setMilliseconds(999), n;
}
function nt() {
  return Object.assign({}, T$1());
}
function st(s) {
  let e = l(s).getDay();
  return e === 0 && (e = 7), e;
}
function at(s, n) {
  const e = n instanceof Date ? y$1(n, 0) : new n(0);
  return e.setFullYear(
    s.getFullYear(),
    s.getMonth(),
    s.getDate()
  ), e.setHours(
    s.getHours(),
    s.getMinutes(),
    s.getSeconds(),
    s.getMilliseconds()
  ), e;
}
const ot = 10;
class ue {
  constructor() {
    o(this, "subPriority", 0);
  }
  validate(n, e) {
    return true;
  }
}
class it extends ue {
  constructor(n, e, t, r, a2) {
    super(), this.value = n, this.validateValue = e, this.setValue = t, this.priority = r, a2 && (this.subPriority = a2);
  }
  validate(n, e) {
    return this.validateValue(n, this.value, e);
  }
  set(n, e, t) {
    return this.setValue(n, e, this.value, t);
  }
}
class ct extends ue {
  constructor() {
    super(...arguments);
    o(this, "priority", ot);
    o(this, "subPriority", -1);
  }
  set(e, t) {
    return t.timestampIsSet ? e : y$1(e, at(e, Date));
  }
}
class d {
  run(n, e, t, r) {
    const a2 = this.parse(n, e, t, r);
    return a2 ? {
      setter: new it(
        a2.value,
        this.validate,
        this.set,
        this.priority,
        this.subPriority
      ),
      rest: a2.rest
    } : null;
  }
  validate(n, e, t) {
    return true;
  }
}
class ut extends d {
  constructor() {
    super(...arguments);
    o(this, "priority", 140);
    o(this, "incompatibleTokens", ["R", "u", "t", "T"]);
  }
  parse(e, t, r) {
    switch (t) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return r.era(e, { width: "abbreviated" }) || r.era(e, { width: "narrow" });
      // A, B
      case "GGGGG":
        return r.era(e, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return r.era(e, { width: "wide" }) || r.era(e, { width: "abbreviated" }) || r.era(e, { width: "narrow" });
    }
  }
  set(e, t, r) {
    return t.era = r, e.setFullYear(r, 0, 1), e.setHours(0, 0, 0, 0), e;
  }
}
const b = {
  month: /^(1[0-2]|0?\d)/,
  // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/,
  // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/,
  // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/,
  // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/,
  // 0 to 12
  minute: /^[0-5]?\d/,
  // 0 to 59
  second: /^[0-5]?\d/,
  // 0 to 59
  singleDigit: /^\d/,
  // 0 to 9
  twoDigits: /^\d{1,2}/,
  // 0 to 99
  threeDigits: /^\d{1,3}/,
  // 0 to 999
  fourDigits: /^\d{1,4}/,
  // 0 to 9999
  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/,
  // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/,
  // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/
  // 0 to 9999, -0 to -9999
}, D = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
function p(s, n) {
  return s && {
    value: n(s.value),
    rest: s.rest
  };
}
function w(s, n) {
  const e = n.match(s);
  return e ? {
    value: parseInt(e[0], 10),
    rest: n.slice(e[0].length)
  } : null;
}
function T(s, n) {
  const e = n.match(s);
  if (!e)
    return null;
  if (e[0] === "Z")
    return {
      value: 0,
      rest: n.slice(1)
    };
  const t = e[1] === "+" ? 1 : -1, r = e[2] ? parseInt(e[2], 10) : 0, a2 = e[3] ? parseInt(e[3], 10) : 0, i2 = e[5] ? parseInt(e[5], 10) : 0;
  return {
    value: t * (r * ie$1 + a2 * J + i2 * oe$1),
    rest: n.slice(e[0].length)
  };
}
function le(s) {
  return w(b.anyDigitsSigned, s);
}
function y(s, n) {
  switch (s) {
    case 1:
      return w(b.singleDigit, n);
    case 2:
      return w(b.twoDigits, n);
    case 3:
      return w(b.threeDigits, n);
    case 4:
      return w(b.fourDigits, n);
    default:
      return w(new RegExp("^\\d{1," + s + "}"), n);
  }
}
function H(s, n) {
  switch (s) {
    case 1:
      return w(b.singleDigitSigned, n);
    case 2:
      return w(b.twoDigitsSigned, n);
    case 3:
      return w(b.threeDigitsSigned, n);
    case 4:
      return w(b.fourDigitsSigned, n);
    default:
      return w(new RegExp("^-?\\d{1," + s + "}"), n);
  }
}
function A(s) {
  switch (s) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    case "am":
    case "midnight":
    case "night":
    default:
      return 0;
  }
}
function de(s, n) {
  const e = n > 0, t = e ? n : 1 - n;
  let r;
  if (t <= 50)
    r = s || 100;
  else {
    const a2 = t + 50, i2 = Math.trunc(a2 / 100) * 100, u = s >= a2 % 100;
    r = s + i2 - (u ? 100 : 0);
  }
  return e ? r : 1 - r;
}
function fe(s) {
  return s % 400 === 0 || s % 4 === 0 && s % 100 !== 0;
}
class lt extends d {
  constructor() {
    super(...arguments);
    o(this, "priority", 130);
    o(this, "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(e, t, r) {
    const a2 = (i2) => ({
      year: i2,
      isTwoDigitYear: t === "yy"
    });
    switch (t) {
      case "y":
        return p(y(4, e), a2);
      case "yo":
        return p(
          r.ordinalNumber(e, {
            unit: "year"
          }),
          a2
        );
      default:
        return p(y(t.length, e), a2);
    }
  }
  validate(e, t) {
    return t.isTwoDigitYear || t.year > 0;
  }
  set(e, t, r) {
    const a2 = e.getFullYear();
    if (r.isTwoDigitYear) {
      const u = de(
        r.year,
        a2
      );
      return e.setFullYear(u, 0, 1), e.setHours(0, 0, 0, 0), e;
    }
    const i2 = !("era" in t) || t.era === 1 ? r.year : 1 - r.year;
    return e.setFullYear(i2, 0, 1), e.setHours(0, 0, 0, 0), e;
  }
}
class dt extends d {
  constructor() {
    super(...arguments);
    o(this, "priority", 130);
    o(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "Q",
      "q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "i",
      "t",
      "T"
    ]);
  }
  parse(e, t, r) {
    const a2 = (i2) => ({
      year: i2,
      isTwoDigitYear: t === "YY"
    });
    switch (t) {
      case "Y":
        return p(y(4, e), a2);
      case "Yo":
        return p(
          r.ordinalNumber(e, {
            unit: "year"
          }),
          a2
        );
      default:
        return p(y(t.length, e), a2);
    }
  }
  validate(e, t) {
    return t.isTwoDigitYear || t.year > 0;
  }
  set(e, t, r, a2) {
    const i2 = G(e, a2);
    if (r.isTwoDigitYear) {
      const f2 = de(
        r.year,
        i2
      );
      return e.setFullYear(
        f2,
        0,
        a2.firstWeekContainsDate
      ), e.setHours(0, 0, 0, 0), x(e, a2);
    }
    const u = !("era" in t) || t.era === 1 ? r.year : 1 - r.year;
    return e.setFullYear(u, 0, a2.firstWeekContainsDate), e.setHours(0, 0, 0, 0), x(e, a2);
  }
}
class ft extends d {
  constructor() {
    super(...arguments);
    o(this, "priority", 130);
    o(this, "incompatibleTokens", [
      "G",
      "y",
      "Y",
      "u",
      "Q",
      "q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(e, t) {
    return H(t === "R" ? 4 : t.length, e);
  }
  set(e, t, r) {
    const a2 = y$1(e, 0);
    return a2.setFullYear(r, 0, 4), a2.setHours(0, 0, 0, 0), v(a2);
  }
}
class wt extends d {
  constructor() {
    super(...arguments);
    o(this, "priority", 130);
    o(this, "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(e, t) {
    return H(t === "u" ? 4 : t.length, e);
  }
  set(e, t, r) {
    return e.setFullYear(r, 0, 1), e.setHours(0, 0, 0, 0), e;
  }
}
class ht extends d {
  constructor() {
    super(...arguments);
    o(this, "priority", 120);
    o(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(e, t, r) {
    switch (t) {
      // 1, 2, 3, 4
      case "Q":
      case "QQ":
        return y(t.length, e);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return r.ordinalNumber(e, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return r.quarter(e, {
          width: "abbreviated",
          context: "formatting"
        }) || r.quarter(e, {
          width: "narrow",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return r.quarter(e, {
          width: "narrow",
          context: "formatting"
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return r.quarter(e, {
          width: "wide",
          context: "formatting"
        }) || r.quarter(e, {
          width: "abbreviated",
          context: "formatting"
        }) || r.quarter(e, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  validate(e, t) {
    return t >= 1 && t <= 4;
  }
  set(e, t, r) {
    return e.setMonth((r - 1) * 3, 1), e.setHours(0, 0, 0, 0), e;
  }
}
class yt extends d {
  constructor() {
    super(...arguments);
    o(this, "priority", 120);
    o(this, "incompatibleTokens", [
      "Y",
      "R",
      "Q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(e, t, r) {
    switch (t) {
      // 1, 2, 3, 4
      case "q":
      case "qq":
        return y(t.length, e);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return r.ordinalNumber(e, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return r.quarter(e, {
          width: "abbreviated",
          context: "standalone"
        }) || r.quarter(e, {
          width: "narrow",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return r.quarter(e, {
          width: "narrow",
          context: "standalone"
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return r.quarter(e, {
          width: "wide",
          context: "standalone"
        }) || r.quarter(e, {
          width: "abbreviated",
          context: "standalone"
        }) || r.quarter(e, {
          width: "narrow",
          context: "standalone"
        });
    }
  }
  validate(e, t) {
    return t >= 1 && t <= 4;
  }
  set(e, t, r) {
    return e.setMonth((r - 1) * 3, 1), e.setHours(0, 0, 0, 0), e;
  }
}
class bt extends d {
  constructor() {
    super(...arguments);
    o(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "L",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
    o(this, "priority", 110);
  }
  parse(e, t, r) {
    const a2 = (i2) => i2 - 1;
    switch (t) {
      // 1, 2, ..., 12
      case "M":
        return p(
          w(b.month, e),
          a2
        );
      // 01, 02, ..., 12
      case "MM":
        return p(y(2, e), a2);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return p(
          r.ordinalNumber(e, {
            unit: "month"
          }),
          a2
        );
      // Jan, Feb, ..., Dec
      case "MMM":
        return r.month(e, {
          width: "abbreviated",
          context: "formatting"
        }) || r.month(e, { width: "narrow", context: "formatting" });
      // J, F, ..., D
      case "MMMMM":
        return r.month(e, {
          width: "narrow",
          context: "formatting"
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return r.month(e, { width: "wide", context: "formatting" }) || r.month(e, {
          width: "abbreviated",
          context: "formatting"
        }) || r.month(e, { width: "narrow", context: "formatting" });
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 11;
  }
  set(e, t, r) {
    return e.setMonth(r, 1), e.setHours(0, 0, 0, 0), e;
  }
}
class pt extends d {
  constructor() {
    super(...arguments);
    o(this, "priority", 110);
    o(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "M",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(e, t, r) {
    const a2 = (i2) => i2 - 1;
    switch (t) {
      // 1, 2, ..., 12
      case "L":
        return p(
          w(b.month, e),
          a2
        );
      // 01, 02, ..., 12
      case "LL":
        return p(y(2, e), a2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return p(
          r.ordinalNumber(e, {
            unit: "month"
          }),
          a2
        );
      // Jan, Feb, ..., Dec
      case "LLL":
        return r.month(e, {
          width: "abbreviated",
          context: "standalone"
        }) || r.month(e, { width: "narrow", context: "standalone" });
      // J, F, ..., D
      case "LLLLL":
        return r.month(e, {
          width: "narrow",
          context: "standalone"
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return r.month(e, { width: "wide", context: "standalone" }) || r.month(e, {
          width: "abbreviated",
          context: "standalone"
        }) || r.month(e, { width: "narrow", context: "standalone" });
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 11;
  }
  set(e, t, r) {
    return e.setMonth(r, 1), e.setHours(0, 0, 0, 0), e;
  }
}
function xt(s, n, e) {
  const t = l(s), r = Qt$1(t, e) - n;
  return t.setDate(t.getDate() - r * 7), t;
}
class gt extends d {
  constructor() {
    super(...arguments);
    o(this, "priority", 100);
    o(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "i",
      "t",
      "T"
    ]);
  }
  parse(e, t, r) {
    switch (t) {
      case "w":
        return w(b.week, e);
      case "wo":
        return r.ordinalNumber(e, { unit: "week" });
      default:
        return y(t.length, e);
    }
  }
  validate(e, t) {
    return t >= 1 && t <= 53;
  }
  set(e, t, r, a2) {
    return x(xt(e, r, a2), a2);
  }
}
function mt(s, n) {
  const e = l(s), t = Ht$1(e) - n;
  return e.setDate(e.getDate() - t * 7), e;
}
class Dt extends d {
  constructor() {
    super(...arguments);
    o(this, "priority", 100);
    o(this, "incompatibleTokens", [
      "y",
      "Y",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(e, t, r) {
    switch (t) {
      case "I":
        return w(b.week, e);
      case "Io":
        return r.ordinalNumber(e, { unit: "week" });
      default:
        return y(t.length, e);
    }
  }
  validate(e, t) {
    return t >= 1 && t <= 53;
  }
  set(e, t, r) {
    return v(mt(e, r));
  }
}
const Tt = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Mt = [
  31,
  29,
  31,
  30,
  31,
  30,
  31,
  31,
  30,
  31,
  30,
  31
];
class kt extends d {
  constructor() {
    super(...arguments);
    o(this, "priority", 90);
    o(this, "subPriority", 1);
    o(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(e, t, r) {
    switch (t) {
      case "d":
        return w(b.date, e);
      case "do":
        return r.ordinalNumber(e, { unit: "date" });
      default:
        return y(t.length, e);
    }
  }
  validate(e, t) {
    const r = e.getFullYear(), a2 = fe(r), i2 = e.getMonth();
    return a2 ? t >= 1 && t <= Mt[i2] : t >= 1 && t <= Tt[i2];
  }
  set(e, t, r) {
    return e.setDate(r), e.setHours(0, 0, 0, 0), e;
  }
}
class _t extends d {
  constructor() {
    super(...arguments);
    o(this, "priority", 90);
    o(this, "subpriority", 1);
    o(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "E",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(e, t, r) {
    switch (t) {
      case "D":
      case "DD":
        return w(b.dayOfYear, e);
      case "Do":
        return r.ordinalNumber(e, { unit: "date" });
      default:
        return y(t.length, e);
    }
  }
  validate(e, t) {
    const r = e.getFullYear();
    return fe(r) ? t >= 1 && t <= 366 : t >= 1 && t <= 365;
  }
  set(e, t, r) {
    return e.setMonth(0, r), e.setHours(0, 0, 0, 0), e;
  }
}
function B(s, n, e) {
  var k, N2, M, _;
  const t = T$1(), r = (e == null ? void 0 : e.weekStartsOn) ?? ((N2 = (k = e == null ? void 0 : e.locale) == null ? void 0 : k.options) == null ? void 0 : N2.weekStartsOn) ?? t.weekStartsOn ?? ((_ = (M = t.locale) == null ? void 0 : M.options) == null ? void 0 : _.weekStartsOn) ?? 0, a2 = l(s), i$1 = a2.getDay(), f2 = (n % 7 + 7) % 7, x2 = 7 - r, C = n < 0 || n > 6 ? n - (i$1 + x2) % 7 : (f2 + x2) % 7 - (i$1 + x2) % 7;
  return i(a2, C);
}
class Ot extends d {
  constructor() {
    super(...arguments);
    o(this, "priority", 90);
    o(this, "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]);
  }
  parse(e, t, r) {
    switch (t) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return r.day(e, {
          width: "abbreviated",
          context: "formatting"
        }) || r.day(e, { width: "short", context: "formatting" }) || r.day(e, { width: "narrow", context: "formatting" });
      // T
      case "EEEEE":
        return r.day(e, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return r.day(e, { width: "short", context: "formatting" }) || r.day(e, { width: "narrow", context: "formatting" });
      // Tuesday
      case "EEEE":
      default:
        return r.day(e, { width: "wide", context: "formatting" }) || r.day(e, {
          width: "abbreviated",
          context: "formatting"
        }) || r.day(e, { width: "short", context: "formatting" }) || r.day(e, { width: "narrow", context: "formatting" });
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 6;
  }
  set(e, t, r, a2) {
    return e = B(e, r, a2), e.setHours(0, 0, 0, 0), e;
  }
}
class Yt extends d {
  constructor() {
    super(...arguments);
    o(this, "priority", 90);
    o(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "E",
      "i",
      "c",
      "t",
      "T"
    ]);
  }
  parse(e, t, r, a2) {
    const i2 = (u) => {
      const f2 = Math.floor((u - 1) / 7) * 7;
      return (u + a2.weekStartsOn + 6) % 7 + f2;
    };
    switch (t) {
      // 3
      case "e":
      case "ee":
        return p(y(t.length, e), i2);
      // 3rd
      case "eo":
        return p(
          r.ordinalNumber(e, {
            unit: "day"
          }),
          i2
        );
      // Tue
      case "eee":
        return r.day(e, {
          width: "abbreviated",
          context: "formatting"
        }) || r.day(e, { width: "short", context: "formatting" }) || r.day(e, { width: "narrow", context: "formatting" });
      // T
      case "eeeee":
        return r.day(e, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return r.day(e, { width: "short", context: "formatting" }) || r.day(e, { width: "narrow", context: "formatting" });
      // Tuesday
      case "eeee":
      default:
        return r.day(e, { width: "wide", context: "formatting" }) || r.day(e, {
          width: "abbreviated",
          context: "formatting"
        }) || r.day(e, { width: "short", context: "formatting" }) || r.day(e, { width: "narrow", context: "formatting" });
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 6;
  }
  set(e, t, r, a2) {
    return e = B(e, r, a2), e.setHours(0, 0, 0, 0), e;
  }
}
class Pt extends d {
  constructor() {
    super(...arguments);
    o(this, "priority", 90);
    o(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "E",
      "i",
      "e",
      "t",
      "T"
    ]);
  }
  parse(e, t, r, a2) {
    const i2 = (u) => {
      const f2 = Math.floor((u - 1) / 7) * 7;
      return (u + a2.weekStartsOn + 6) % 7 + f2;
    };
    switch (t) {
      // 3
      case "c":
      case "cc":
        return p(y(t.length, e), i2);
      // 3rd
      case "co":
        return p(
          r.ordinalNumber(e, {
            unit: "day"
          }),
          i2
        );
      // Tue
      case "ccc":
        return r.day(e, {
          width: "abbreviated",
          context: "standalone"
        }) || r.day(e, { width: "short", context: "standalone" }) || r.day(e, { width: "narrow", context: "standalone" });
      // T
      case "ccccc":
        return r.day(e, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return r.day(e, { width: "short", context: "standalone" }) || r.day(e, { width: "narrow", context: "standalone" });
      // Tuesday
      case "cccc":
      default:
        return r.day(e, { width: "wide", context: "standalone" }) || r.day(e, {
          width: "abbreviated",
          context: "standalone"
        }) || r.day(e, { width: "short", context: "standalone" }) || r.day(e, { width: "narrow", context: "standalone" });
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 6;
  }
  set(e, t, r, a2) {
    return e = B(e, r, a2), e.setHours(0, 0, 0, 0), e;
  }
}
function Nt(s, n) {
  const e = l(s), t = st(e), r = n - t;
  return i(e, r);
}
class It extends d {
  constructor() {
    super(...arguments);
    o(this, "priority", 90);
    o(this, "incompatibleTokens", [
      "y",
      "Y",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "E",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(e, t, r) {
    const a2 = (i2) => i2 === 0 ? 7 : i2;
    switch (t) {
      // 2
      case "i":
      case "ii":
        return y(t.length, e);
      // 2nd
      case "io":
        return r.ordinalNumber(e, { unit: "day" });
      // Tue
      case "iii":
        return p(
          r.day(e, {
            width: "abbreviated",
            context: "formatting"
          }) || r.day(e, {
            width: "short",
            context: "formatting"
          }) || r.day(e, {
            width: "narrow",
            context: "formatting"
          }),
          a2
        );
      // T
      case "iiiii":
        return p(
          r.day(e, {
            width: "narrow",
            context: "formatting"
          }),
          a2
        );
      // Tu
      case "iiiiii":
        return p(
          r.day(e, {
            width: "short",
            context: "formatting"
          }) || r.day(e, {
            width: "narrow",
            context: "formatting"
          }),
          a2
        );
      // Tuesday
      case "iiii":
      default:
        return p(
          r.day(e, {
            width: "wide",
            context: "formatting"
          }) || r.day(e, {
            width: "abbreviated",
            context: "formatting"
          }) || r.day(e, {
            width: "short",
            context: "formatting"
          }) || r.day(e, {
            width: "narrow",
            context: "formatting"
          }),
          a2
        );
    }
  }
  validate(e, t) {
    return t >= 1 && t <= 7;
  }
  set(e, t, r) {
    return e = Nt(e, r), e.setHours(0, 0, 0, 0), e;
  }
}
class Ht extends d {
  constructor() {
    super(...arguments);
    o(this, "priority", 80);
    o(this, "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]);
  }
  parse(e, t, r) {
    switch (t) {
      case "a":
      case "aa":
      case "aaa":
        return r.dayPeriod(e, {
          width: "abbreviated",
          context: "formatting"
        }) || r.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaaa":
        return r.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return r.dayPeriod(e, {
          width: "wide",
          context: "formatting"
        }) || r.dayPeriod(e, {
          width: "abbreviated",
          context: "formatting"
        }) || r.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(e, t, r) {
    return e.setHours(A(r), 0, 0, 0), e;
  }
}
class qt extends d {
  constructor() {
    super(...arguments);
    o(this, "priority", 80);
    o(this, "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]);
  }
  parse(e, t, r) {
    switch (t) {
      case "b":
      case "bb":
      case "bbb":
        return r.dayPeriod(e, {
          width: "abbreviated",
          context: "formatting"
        }) || r.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbbb":
        return r.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return r.dayPeriod(e, {
          width: "wide",
          context: "formatting"
        }) || r.dayPeriod(e, {
          width: "abbreviated",
          context: "formatting"
        }) || r.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(e, t, r) {
    return e.setHours(A(r), 0, 0, 0), e;
  }
}
class Et extends d {
  constructor() {
    super(...arguments);
    o(this, "priority", 80);
    o(this, "incompatibleTokens", ["a", "b", "t", "T"]);
  }
  parse(e, t, r) {
    switch (t) {
      case "B":
      case "BB":
      case "BBB":
        return r.dayPeriod(e, {
          width: "abbreviated",
          context: "formatting"
        }) || r.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBBB":
        return r.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return r.dayPeriod(e, {
          width: "wide",
          context: "formatting"
        }) || r.dayPeriod(e, {
          width: "abbreviated",
          context: "formatting"
        }) || r.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(e, t, r) {
    return e.setHours(A(r), 0, 0, 0), e;
  }
}
class Lt extends d {
  constructor() {
    super(...arguments);
    o(this, "priority", 70);
    o(this, "incompatibleTokens", ["H", "K", "k", "t", "T"]);
  }
  parse(e, t, r) {
    switch (t) {
      case "h":
        return w(b.hour12h, e);
      case "ho":
        return r.ordinalNumber(e, { unit: "hour" });
      default:
        return y(t.length, e);
    }
  }
  validate(e, t) {
    return t >= 1 && t <= 12;
  }
  set(e, t, r) {
    const a2 = e.getHours() >= 12;
    return a2 && r < 12 ? e.setHours(r + 12, 0, 0, 0) : !a2 && r === 12 ? e.setHours(0, 0, 0, 0) : e.setHours(r, 0, 0, 0), e;
  }
}
class Ct extends d {
  constructor() {
    super(...arguments);
    o(this, "priority", 70);
    o(this, "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]);
  }
  parse(e, t, r) {
    switch (t) {
      case "H":
        return w(b.hour23h, e);
      case "Ho":
        return r.ordinalNumber(e, { unit: "hour" });
      default:
        return y(t.length, e);
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 23;
  }
  set(e, t, r) {
    return e.setHours(r, 0, 0, 0), e;
  }
}
class Ft extends d {
  constructor() {
    super(...arguments);
    o(this, "priority", 70);
    o(this, "incompatibleTokens", ["h", "H", "k", "t", "T"]);
  }
  parse(e, t, r) {
    switch (t) {
      case "K":
        return w(b.hour11h, e);
      case "Ko":
        return r.ordinalNumber(e, { unit: "hour" });
      default:
        return y(t.length, e);
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 11;
  }
  set(e, t, r) {
    return e.getHours() >= 12 && r < 12 ? e.setHours(r + 12, 0, 0, 0) : e.setHours(r, 0, 0, 0), e;
  }
}
class Qt extends d {
  constructor() {
    super(...arguments);
    o(this, "priority", 70);
    o(this, "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]);
  }
  parse(e, t, r) {
    switch (t) {
      case "k":
        return w(b.hour24h, e);
      case "ko":
        return r.ordinalNumber(e, { unit: "hour" });
      default:
        return y(t.length, e);
    }
  }
  validate(e, t) {
    return t >= 1 && t <= 24;
  }
  set(e, t, r) {
    const a2 = r <= 24 ? r % 24 : r;
    return e.setHours(a2, 0, 0, 0), e;
  }
}
class Rt extends d {
  constructor() {
    super(...arguments);
    o(this, "priority", 60);
    o(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(e, t, r) {
    switch (t) {
      case "m":
        return w(b.minute, e);
      case "mo":
        return r.ordinalNumber(e, { unit: "minute" });
      default:
        return y(t.length, e);
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 59;
  }
  set(e, t, r) {
    return e.setMinutes(r, 0, 0), e;
  }
}
class Wt extends d {
  constructor() {
    super(...arguments);
    o(this, "priority", 50);
    o(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(e, t, r) {
    switch (t) {
      case "s":
        return w(b.second, e);
      case "so":
        return r.ordinalNumber(e, { unit: "second" });
      default:
        return y(t.length, e);
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 59;
  }
  set(e, t, r) {
    return e.setSeconds(r, 0), e;
  }
}
class vt extends d {
  constructor() {
    super(...arguments);
    o(this, "priority", 30);
    o(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(e, t) {
    const r = (a2) => Math.trunc(a2 * Math.pow(10, -t.length + 3));
    return p(y(t.length, e), r);
  }
  set(e, t, r) {
    return e.setMilliseconds(r), e;
  }
}
class At extends d {
  constructor() {
    super(...arguments);
    o(this, "priority", 10);
    o(this, "incompatibleTokens", ["t", "T", "x"]);
  }
  parse(e, t) {
    switch (t) {
      case "X":
        return T(
          D.basicOptionalMinutes,
          e
        );
      case "XX":
        return T(D.basic, e);
      case "XXXX":
        return T(
          D.basicOptionalSeconds,
          e
        );
      case "XXXXX":
        return T(
          D.extendedOptionalSeconds,
          e
        );
      case "XXX":
      default:
        return T(D.extended, e);
    }
  }
  set(e, t, r) {
    return t.timestampIsSet ? e : y$1(
      e,
      e.getTime() - q(e) - r
    );
  }
}
class Bt extends d {
  constructor() {
    super(...arguments);
    o(this, "priority", 10);
    o(this, "incompatibleTokens", ["t", "T", "X"]);
  }
  parse(e, t) {
    switch (t) {
      case "x":
        return T(
          D.basicOptionalMinutes,
          e
        );
      case "xx":
        return T(D.basic, e);
      case "xxxx":
        return T(
          D.basicOptionalSeconds,
          e
        );
      case "xxxxx":
        return T(
          D.extendedOptionalSeconds,
          e
        );
      case "xxx":
      default:
        return T(D.extended, e);
    }
  }
  set(e, t, r) {
    return t.timestampIsSet ? e : y$1(
      e,
      e.getTime() - q(e) - r
    );
  }
}
class zt extends d {
  constructor() {
    super(...arguments);
    o(this, "priority", 40);
    o(this, "incompatibleTokens", "*");
  }
  parse(e) {
    return le(e);
  }
  set(e, t, r) {
    return [y$1(e, r * 1e3), { timestampIsSet: true }];
  }
}
class Gt extends d {
  constructor() {
    super(...arguments);
    o(this, "priority", 20);
    o(this, "incompatibleTokens", "*");
  }
  parse(e) {
    return le(e);
  }
  set(e, t, r) {
    return [y$1(e, r), { timestampIsSet: true }];
  }
}
const Xt = {
  G: new ut(),
  y: new lt(),
  Y: new dt(),
  R: new ft(),
  u: new wt(),
  Q: new ht(),
  q: new yt(),
  M: new bt(),
  L: new pt(),
  w: new gt(),
  I: new Dt(),
  d: new kt(),
  D: new _t(),
  E: new Ot(),
  e: new Yt(),
  c: new Pt(),
  i: new It(),
  a: new Ht(),
  b: new qt(),
  B: new Et(),
  h: new Lt(),
  H: new Ct(),
  K: new Ft(),
  k: new Qt(),
  m: new Rt(),
  s: new Wt(),
  S: new vt(),
  X: new At(),
  x: new Bt(),
  t: new zt(),
  T: new Gt()
}, Ut = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Zt = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, $t = /^'([^]*?)'?$/, Kt = /''/g, Vt = /\S/, jt = /[a-zA-Z]/;
function Jt(s, n, e, t) {
  var z2, G2, X, U, Z, $, K, V2;
  const r = nt(), a2 = (t == null ? void 0 : t.locale) ?? r.locale ?? Nt$1, i2 = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((G2 = (z2 = t == null ? void 0 : t.locale) == null ? void 0 : z2.options) == null ? void 0 : G2.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((U = (X = r.locale) == null ? void 0 : X.options) == null ? void 0 : U.firstWeekContainsDate) ?? 1, u = (t == null ? void 0 : t.weekStartsOn) ?? (($ = (Z = t == null ? void 0 : t.locale) == null ? void 0 : Z.options) == null ? void 0 : $.weekStartsOn) ?? r.weekStartsOn ?? ((V2 = (K = r.locale) == null ? void 0 : K.options) == null ? void 0 : V2.weekStartsOn) ?? 0;
  if (n === "")
    return s === "" ? l(e) : y$1(e, NaN);
  const f2 = {
    firstWeekContainsDate: i2,
    weekStartsOn: u,
    locale: a2
  }, x2 = [new ct()], C = n.match(Zt).map((l2) => {
    const h = l2[0];
    if (h in Rt$1) {
      const m2 = Rt$1[h];
      return m2(l2, a2.formatLong);
    }
    return l2;
  }).join("").match(Ut), k = [];
  for (let l2 of C) {
    !(t != null && t.useAdditionalWeekYearTokens) && Gt$1(l2) && It$1(l2, n, s), !(t != null && t.useAdditionalDayOfYearTokens) && Bt$1(l2) && It$1(l2, n, s);
    const h = l2[0], m2 = Xt[h];
    if (m2) {
      const { incompatibleTokens: j } = m2;
      if (Array.isArray(j)) {
        const J2 = k.find(
          (S2) => j.includes(S2.token) || S2.token === h
        );
        if (J2)
          throw new RangeError(
            `The format string mustn't contain \`${J2.fullToken}\` and \`${l2}\` at the same time`
          );
      } else if (m2.incompatibleTokens === "*" && k.length > 0)
        throw new RangeError(
          `The format string mustn't contain \`${l2}\` and any other token at the same time`
        );
      k.push({ token: h, fullToken: l2 });
      const F = m2.run(
        s,
        l2,
        a2.match,
        f2
      );
      if (!F)
        return y$1(e, NaN);
      x2.push(F.setter), s = F.rest;
    } else {
      if (h.match(jt))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" + h + "`"
        );
      if (l2 === "''" ? l2 = "'" : h === "'" && (l2 = St(l2)), s.indexOf(l2) === 0)
        s = s.slice(l2.length);
      else
        return y$1(e, NaN);
    }
  }
  if (s.length > 0 && Vt.test(s))
    return y$1(e, NaN);
  const N2 = x2.map((l2) => l2.priority).sort((l2, h) => h - l2).filter((l2, h, m2) => m2.indexOf(l2) === h).map(
    (l2) => x2.filter((h) => h.priority === l2).sort((h, m2) => m2.subPriority - h.subPriority)
  ).map((l2) => l2[0]);
  let M = l(e);
  if (isNaN(M.getTime()))
    return y$1(e, NaN);
  const _ = {};
  for (const l2 of N2) {
    if (!l2.validate(M, f2))
      return y$1(e, NaN);
    const h = l2.set(M, _, f2);
    Array.isArray(h) ? (M = h[0], Object.assign(_, h[1])) : M = h;
  }
  return y$1(e, M);
}
function St(s) {
  return s.match($t)[1].replace(Kt, "'");
}
function er(s) {
  const n = l(s);
  return n.setMinutes(0, 0, 0), n;
}
function tr(s) {
  const n = l(s);
  return n.setMilliseconds(0), n;
}
function rr(s, n) {
  const e = (n == null ? void 0 : n.additionalDigits) ?? 2, t = or(s);
  let r;
  if (t.date) {
    const f2 = ir(t.date, e);
    r = cr(f2.restDateString, f2.year);
  }
  if (!r || isNaN(r.getTime()))
    return /* @__PURE__ */ new Date(NaN);
  const a2 = r.getTime();
  let i2 = 0, u;
  if (t.time && (i2 = ur(t.time), isNaN(i2)))
    return /* @__PURE__ */ new Date(NaN);
  if (t.timezone) {
    if (u = lr(t.timezone), isNaN(u))
      return /* @__PURE__ */ new Date(NaN);
  } else {
    const f2 = new Date(a2 + i2), x2 = /* @__PURE__ */ new Date(0);
    return x2.setFullYear(
      f2.getUTCFullYear(),
      f2.getUTCMonth(),
      f2.getUTCDate()
    ), x2.setHours(
      f2.getUTCHours(),
      f2.getUTCMinutes(),
      f2.getUTCSeconds(),
      f2.getUTCMilliseconds()
    ), x2;
  }
  return new Date(a2 + i2 + u);
}
const I = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
}, nr = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/, sr = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/, ar = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function or(s) {
  const n = {}, e = s.split(I.dateTimeDelimiter);
  let t;
  if (e.length > 2)
    return n;
  if (/:/.test(e[0]) ? t = e[0] : (n.date = e[0], t = e[1], I.timeZoneDelimiter.test(n.date) && (n.date = s.split(I.timeZoneDelimiter)[0], t = s.substr(
    n.date.length,
    s.length
  ))), t) {
    const r = I.timezone.exec(t);
    r ? (n.time = t.replace(r[1], ""), n.timezone = r[1]) : n.time = t;
  }
  return n;
}
function ir(s, n) {
  const e = new RegExp(
    "^(?:(\\d{4}|[+-]\\d{" + (4 + n) + "})|(\\d{2}|[+-]\\d{" + (2 + n) + "})$)"
  ), t = s.match(e);
  if (!t) return { year: NaN, restDateString: "" };
  const r = t[1] ? parseInt(t[1]) : null, a2 = t[2] ? parseInt(t[2]) : null;
  return {
    year: a2 === null ? r : a2 * 100,
    restDateString: s.slice((t[1] || t[2]).length)
  };
}
function cr(s, n) {
  if (n === null) return /* @__PURE__ */ new Date(NaN);
  const e = s.match(nr);
  if (!e) return /* @__PURE__ */ new Date(NaN);
  const t = !!e[4], r = O(e[1]), a2 = O(e[2]) - 1, i2 = O(e[3]), u = O(e[4]), f2 = O(e[5]) - 1;
  if (t)
    return yr(n, u, f2) ? dr(n, u, f2) : /* @__PURE__ */ new Date(NaN);
  {
    const x2 = /* @__PURE__ */ new Date(0);
    return !wr(n, a2, i2) || !hr(n, r) ? /* @__PURE__ */ new Date(NaN) : (x2.setUTCFullYear(n, a2, Math.max(r, i2)), x2);
  }
}
function O(s) {
  return s ? parseInt(s) : 1;
}
function ur(s) {
  const n = s.match(sr);
  if (!n) return NaN;
  const e = Q(n[1]), t = Q(n[2]), r = Q(n[3]);
  return br(e, t, r) ? e * ie$1 + t * J + r * 1e3 : NaN;
}
function Q(s) {
  return s && parseFloat(s.replace(",", ".")) || 0;
}
function lr(s) {
  if (s === "Z") return 0;
  const n = s.match(ar);
  if (!n) return 0;
  const e = n[1] === "+" ? -1 : 1, t = parseInt(n[2]), r = n[3] && parseInt(n[3]) || 0;
  return pr(t, r) ? e * (t * ie$1 + r * J) : NaN;
}
function dr(s, n, e) {
  const t = /* @__PURE__ */ new Date(0);
  t.setUTCFullYear(s, 0, 4);
  const r = t.getUTCDay() || 7, a2 = (n - 1) * 7 + e + 1 - r;
  return t.setUTCDate(t.getUTCDate() + a2), t;
}
const fr = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function we(s) {
  return s % 400 === 0 || s % 4 === 0 && s % 100 !== 0;
}
function wr(s, n, e) {
  return n >= 0 && n <= 11 && e >= 1 && e <= (fr[n] || (we(s) ? 29 : 28));
}
function hr(s, n) {
  return n >= 1 && n <= (we(s) ? 366 : 365);
}
function yr(s, n, e) {
  return n >= 1 && n <= 53 && e >= 0 && e <= 6;
}
function br(s, n, e) {
  return s === 24 ? n === 0 && e === 0 : e >= 0 && e < 60 && n >= 0 && n < 60 && s >= 0 && s < 25;
}
function pr(s, n) {
  return n >= 0 && n <= 59;
}
Mt$1.register(...Id);
/*!
 * chartjs-adapter-date-fns v3.0.0
 * https://www.chartjs.org
 * (c) 2022 chartjs-adapter-date-fns Contributors
 * Released under the MIT license
 */
const xr = {
  datetime: "MMM d, yyyy, h:mm:ss aaaa",
  millisecond: "h:mm:ss.SSS aaaa",
  second: "h:mm:ss aaaa",
  minute: "h:mm aaaa",
  hour: "ha",
  day: "MMM d",
  week: "PP",
  month: "MMM yyyy",
  quarter: "qqq - yyyy",
  year: "yyyy"
};
ul._date.override({
  _id: "date-fns",
  // DEBUG
  formats: function() {
    return xr;
  },
  parse: function(s, n) {
    if (s === null || typeof s > "u")
      return null;
    const e = typeof s;
    return e === "number" || s instanceof Date ? s = l(s) : e === "string" && (typeof n == "string" ? s = Jt(s, n, /* @__PURE__ */ new Date(), this.options) : s = rr(s, this.options)), tt$1(s) ? s.getTime() : null;
  },
  format: function(s, n) {
    return Zt$1(s, n, this.options);
  },
  add: function(s, n, e) {
    switch (e) {
      case "millisecond":
        return V(s, n);
      case "second":
        return m(s, n);
      case "minute":
        return Y$1(s, n);
      case "hour":
        return p$1(s, n);
      case "day":
        return i(s, n);
      case "week":
        return S(s, n);
      case "month":
        return a$1(s, n);
      case "quarter":
        return f(s, n);
      case "year":
        return d$2(s, n);
      default:
        return s;
    }
  },
  diff: function(s, n, e) {
    switch (e) {
      case "millisecond":
        return d$1(s, n);
      case "second":
        return a(s, n);
      case "minute":
        return ze(s, n);
      case "hour":
        return Be(s, n);
      case "day":
        return oe(s, n);
      case "week":
        return Ue(s, n);
      case "month":
        return ce(s, n);
      case "quarter":
        return Xe(s, n);
      case "year":
        return Ze(s, n);
      default:
        return 0;
    }
  },
  startOf: function(s, n, e) {
    switch (n) {
      case "second":
        return tr(s);
      case "minute":
        return $e(s);
      case "hour":
        return er(s);
      case "day":
        return N(s);
      case "week":
        return x(s);
      case "isoWeek":
        return x(s, { weekStartsOn: +e });
      case "month":
        return Ve(s);
      case "quarter":
        return Ke(s);
      case "year":
        return et$1(s);
      default:
        return s;
    }
  },
  endOf: function(s, n) {
    switch (n) {
      case "second":
        return rt(s);
      case "minute":
        return et(s);
      case "hour":
        return Je(s);
      case "day":
        return o$1(s);
      case "week":
        return Se(s);
      case "month":
        return ie(s);
      case "quarter":
        return tt(s);
      case "year":
        return je(s);
      default:
        return s;
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnRqcy1hZGFwdGVyLWRhdGUtZm5zLmVzbS12UkZtbzFMRC1DcHczLWRSSC5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL2NocmlzdG9waGVyY2FybHNvbi9mbHVpZC9kcm9wbGV0LWVtYmVkZGFibGUvYXBwL2Zyb250ZW5kL2VtYmVkZGFibGUvbm9kZV9tb2R1bGVzL0BlbWJlZGRhYmxlLmNvbS92YW5pbGxhLWNvbXBvbmVudHMvZGlzdC9jaGFydGpzLWFkYXB0ZXItZGF0ZS1mbnMuZXNtLXZSRm1vMUxELmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBoZSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciB5ZSA9IChzLCBuLCBlKSA9PiBuIGluIHMgPyBoZShzLCBuLCB7IGVudW1lcmFibGU6ICEwLCBjb25maWd1cmFibGU6ICEwLCB3cml0YWJsZTogITAsIHZhbHVlOiBlIH0pIDogc1tuXSA9IGU7XG52YXIgbyA9IChzLCBuLCBlKSA9PiB5ZShzLCB0eXBlb2YgbiAhPSBcInN5bWJvbFwiID8gbiArIFwiXCIgOiBuLCBlKTtcbmltcG9ydCB7IEMgYXMgYmUsIHIgYXMgcGUsIG4gYXMgeGUgfSBmcm9tIFwiLi9jb21tb24tQmFkcGNnZ3EuanNcIjtcbmltcG9ydCB7IGMsIGsgYXMgZ2UsIG0gYXMgcSwgbCBhcyBFLCBuIGFzIFIsIGogYXMgZywgbyBhcyBtZSwgcSBhcyBEZSwgciBhcyBQLCB1IGFzIG5lLCB2IGFzIFRlLCB3IGFzIE1lLCB4IGFzIHNlLCB5IGFzIGtlLCB6IGFzIGVlLCBBIGFzIF9lLCBCIGFzIHRlLCBDIGFzIE9lLCBEIGFzIFllLCBzIGFzIFBlLCBnIGFzIE5lLCBlIGFzIEllLCBhIGFzIEhlLCBFIGFzIHFlIH0gZnJvbSBcIi4vZm9ybWF0LVRqelA4Z1FYLmpzXCI7XG5pbXBvcnQgeyBkIGFzIFcsIGcgYXMgTCwgZSBhcyBhZSwgYSBhcyBFZSB9IGZyb20gXCIuL2RpZmZlcmVuY2VJblNlY29uZHMtRC1QSzRIZk0uanNcIjtcbmltcG9ydCB7IGEgYXMgdiwgYiBhcyBMZSwgYyBhcyBDZSwgZCBhcyBGZSB9IGZyb20gXCIuL3N1YlllYXJzLUN5b0diZ1MwLmpzXCI7XG5pbXBvcnQgeyBhIGFzIFFlLCBiIGFzIFJlLCBjIGFzIFdlIH0gZnJvbSBcIi4vdXNlVGltZXNlcmllcy1DS2hNNXpnZi5qc1wiO1xuZnVuY3Rpb24gWShzLCBuKSB7XG4gIGNvbnN0IGUgPSBjKHMpLCB0ID0gYyhuKSwgciA9IGUuZ2V0VGltZSgpIC0gdC5nZXRUaW1lKCk7XG4gIHJldHVybiByIDwgMCA/IC0xIDogciA+IDAgPyAxIDogcjtcbn1cbmZ1bmN0aW9uIHZlKHMsIG4pIHtcbiAgY29uc3QgZSA9IGMocyksIHQgPSBjKG4pLCByID0gZS5nZXRGdWxsWWVhcigpIC0gdC5nZXRGdWxsWWVhcigpLCBhID0gZS5nZXRNb250aCgpIC0gdC5nZXRNb250aCgpO1xuICByZXR1cm4gciAqIDEyICsgYTtcbn1cbmZ1bmN0aW9uIEFlKHMsIG4pIHtcbiAgY29uc3QgZSA9IGMocyksIHQgPSBjKG4pO1xuICByZXR1cm4gZS5nZXRGdWxsWWVhcigpIC0gdC5nZXRGdWxsWWVhcigpO1xufVxuZnVuY3Rpb24gb2Uocywgbikge1xuICBjb25zdCBlID0gYyhzKSwgdCA9IGMobiksIHIgPSByZShlLCB0KSwgYSA9IE1hdGguYWJzKGdlKGUsIHQpKTtcbiAgZS5zZXREYXRlKGUuZ2V0RGF0ZSgpIC0gciAqIGEpO1xuICBjb25zdCBpID0gKyhyZShlLCB0KSA9PT0gLXIpLCB1ID0gciAqIChhIC0gaSk7XG4gIHJldHVybiB1ID09PSAwID8gMCA6IHU7XG59XG5mdW5jdGlvbiByZShzLCBuKSB7XG4gIGNvbnN0IGUgPSBzLmdldEZ1bGxZZWFyKCkgLSBuLmdldEZ1bGxZZWFyKCkgfHwgcy5nZXRNb250aCgpIC0gbi5nZXRNb250aCgpIHx8IHMuZ2V0RGF0ZSgpIC0gbi5nZXREYXRlKCkgfHwgcy5nZXRIb3VycygpIC0gbi5nZXRIb3VycygpIHx8IHMuZ2V0TWludXRlcygpIC0gbi5nZXRNaW51dGVzKCkgfHwgcy5nZXRTZWNvbmRzKCkgLSBuLmdldFNlY29uZHMoKSB8fCBzLmdldE1pbGxpc2Vjb25kcygpIC0gbi5nZXRNaWxsaXNlY29uZHMoKTtcbiAgcmV0dXJuIGUgPCAwID8gLTEgOiBlID4gMCA/IDEgOiBlO1xufVxuZnVuY3Rpb24gQmUocywgbiwgZSkge1xuICBjb25zdCB0ID0gVyhzLCBuKSAvIHE7XG4gIHJldHVybiBMKGUgPT0gbnVsbCA/IHZvaWQgMCA6IGUucm91bmRpbmdNZXRob2QpKHQpO1xufVxuZnVuY3Rpb24gemUocywgbiwgZSkge1xuICBjb25zdCB0ID0gVyhzLCBuKSAvIEU7XG4gIHJldHVybiBMKGUgPT0gbnVsbCA/IHZvaWQgMCA6IGUucm91bmRpbmdNZXRob2QpKHQpO1xufVxuZnVuY3Rpb24gaWUocykge1xuICBjb25zdCBuID0gYyhzKSwgZSA9IG4uZ2V0TW9udGgoKTtcbiAgcmV0dXJuIG4uc2V0RnVsbFllYXIobi5nZXRGdWxsWWVhcigpLCBlICsgMSwgMCksIG4uc2V0SG91cnMoMjMsIDU5LCA1OSwgOTk5KSwgbjtcbn1cbmZ1bmN0aW9uIEdlKHMpIHtcbiAgY29uc3QgbiA9IGMocyk7XG4gIHJldHVybiArYWUobikgPT0gK2llKG4pO1xufVxuZnVuY3Rpb24gY2Uocywgbikge1xuICBjb25zdCBlID0gYyhzKSwgdCA9IGMobiksIHIgPSBZKGUsIHQpLCBhID0gTWF0aC5hYnMoXG4gICAgdmUoZSwgdClcbiAgKTtcbiAgbGV0IGk7XG4gIGlmIChhIDwgMSlcbiAgICBpID0gMDtcbiAgZWxzZSB7XG4gICAgZS5nZXRNb250aCgpID09PSAxICYmIGUuZ2V0RGF0ZSgpID4gMjcgJiYgZS5zZXREYXRlKDMwKSwgZS5zZXRNb250aChlLmdldE1vbnRoKCkgLSByICogYSk7XG4gICAgbGV0IHUgPSBZKGUsIHQpID09PSAtcjtcbiAgICBHZShjKHMpKSAmJiBhID09PSAxICYmIFkocywgdCkgPT09IDEgJiYgKHUgPSAhMSksIGkgPSByICogKGEgLSBOdW1iZXIodSkpO1xuICB9XG4gIHJldHVybiBpID09PSAwID8gMCA6IGk7XG59XG5mdW5jdGlvbiBYZShzLCBuLCBlKSB7XG4gIGNvbnN0IHQgPSBjZShzLCBuKSAvIDM7XG4gIHJldHVybiBMKGUgPT0gbnVsbCA/IHZvaWQgMCA6IGUucm91bmRpbmdNZXRob2QpKHQpO1xufVxuZnVuY3Rpb24gVWUocywgbiwgZSkge1xuICBjb25zdCB0ID0gb2UocywgbikgLyA3O1xuICByZXR1cm4gTChlID09IG51bGwgPyB2b2lkIDAgOiBlLnJvdW5kaW5nTWV0aG9kKSh0KTtcbn1cbmZ1bmN0aW9uIFplKHMsIG4pIHtcbiAgY29uc3QgZSA9IGMocyksIHQgPSBjKG4pLCByID0gWShlLCB0KSwgYSA9IE1hdGguYWJzKEFlKGUsIHQpKTtcbiAgZS5zZXRGdWxsWWVhcigxNTg0KSwgdC5zZXRGdWxsWWVhcigxNTg0KTtcbiAgY29uc3QgaSA9IFkoZSwgdCkgPT09IC1yLCB1ID0gciAqIChhIC0gK2kpO1xuICByZXR1cm4gdSA9PT0gMCA/IDAgOiB1O1xufVxuZnVuY3Rpb24gJGUocykge1xuICBjb25zdCBuID0gYyhzKTtcbiAgcmV0dXJuIG4uc2V0U2Vjb25kcygwLCAwKSwgbjtcbn1cbmZ1bmN0aW9uIEtlKHMpIHtcbiAgY29uc3QgbiA9IGMocyksIGUgPSBuLmdldE1vbnRoKCksIHQgPSBlIC0gZSAlIDM7XG4gIHJldHVybiBuLnNldE1vbnRoKHQsIDEpLCBuLnNldEhvdXJzKDAsIDAsIDAsIDApLCBuO1xufVxuZnVuY3Rpb24gVmUocykge1xuICBjb25zdCBuID0gYyhzKTtcbiAgcmV0dXJuIG4uc2V0RGF0ZSgxKSwgbi5zZXRIb3VycygwLCAwLCAwLCAwKSwgbjtcbn1cbmZ1bmN0aW9uIGplKHMpIHtcbiAgY29uc3QgbiA9IGMocyksIGUgPSBuLmdldEZ1bGxZZWFyKCk7XG4gIHJldHVybiBuLnNldEZ1bGxZZWFyKGUgKyAxLCAwLCAwKSwgbi5zZXRIb3VycygyMywgNTksIDU5LCA5OTkpLCBuO1xufVxuZnVuY3Rpb24gSmUocykge1xuICBjb25zdCBuID0gYyhzKTtcbiAgcmV0dXJuIG4uc2V0TWludXRlcyg1OSwgNTksIDk5OSksIG47XG59XG5mdW5jdGlvbiBTZShzLCBuKSB7XG4gIHZhciB1LCBmO1xuICBjb25zdCBlID0gUigpLCB0ID0gZS53ZWVrU3RhcnRzT24gPz8gKChmID0gKHUgPSBlLmxvY2FsZSkgPT0gbnVsbCA/IHZvaWQgMCA6IHUub3B0aW9ucykgPT0gbnVsbCA/IHZvaWQgMCA6IGYud2Vla1N0YXJ0c09uKSA/PyAwLCByID0gYyhzKSwgYSA9IHIuZ2V0RGF5KCksIGkgPSAoYSA8IHQgPyAtNyA6IDApICsgNiAtIChhIC0gdCk7XG4gIHJldHVybiByLnNldERhdGUoci5nZXREYXRlKCkgKyBpKSwgci5zZXRIb3VycygyMywgNTksIDU5LCA5OTkpLCByO1xufVxuZnVuY3Rpb24gZXQocykge1xuICBjb25zdCBuID0gYyhzKTtcbiAgcmV0dXJuIG4uc2V0U2Vjb25kcyg1OSwgOTk5KSwgbjtcbn1cbmZ1bmN0aW9uIHR0KHMpIHtcbiAgY29uc3QgbiA9IGMocyksIGUgPSBuLmdldE1vbnRoKCksIHQgPSBlIC0gZSAlIDMgKyAzO1xuICByZXR1cm4gbi5zZXRNb250aCh0LCAwKSwgbi5zZXRIb3VycygyMywgNTksIDU5LCA5OTkpLCBuO1xufVxuZnVuY3Rpb24gcnQocykge1xuICBjb25zdCBuID0gYyhzKTtcbiAgcmV0dXJuIG4uc2V0TWlsbGlzZWNvbmRzKDk5OSksIG47XG59XG5mdW5jdGlvbiBudCgpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIFIoKSk7XG59XG5mdW5jdGlvbiBzdChzKSB7XG4gIGxldCBlID0gYyhzKS5nZXREYXkoKTtcbiAgcmV0dXJuIGUgPT09IDAgJiYgKGUgPSA3KSwgZTtcbn1cbmZ1bmN0aW9uIGF0KHMsIG4pIHtcbiAgY29uc3QgZSA9IG4gaW5zdGFuY2VvZiBEYXRlID8gZyhuLCAwKSA6IG5ldyBuKDApO1xuICByZXR1cm4gZS5zZXRGdWxsWWVhcihcbiAgICBzLmdldEZ1bGxZZWFyKCksXG4gICAgcy5nZXRNb250aCgpLFxuICAgIHMuZ2V0RGF0ZSgpXG4gICksIGUuc2V0SG91cnMoXG4gICAgcy5nZXRIb3VycygpLFxuICAgIHMuZ2V0TWludXRlcygpLFxuICAgIHMuZ2V0U2Vjb25kcygpLFxuICAgIHMuZ2V0TWlsbGlzZWNvbmRzKClcbiAgKSwgZTtcbn1cbmNvbnN0IG90ID0gMTA7XG5jbGFzcyB1ZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIG8odGhpcywgXCJzdWJQcmlvcml0eVwiLCAwKTtcbiAgfVxuICB2YWxpZGF0ZShuLCBlKSB7XG4gICAgcmV0dXJuICEwO1xuICB9XG59XG5jbGFzcyBpdCBleHRlbmRzIHVlIHtcbiAgY29uc3RydWN0b3IobiwgZSwgdCwgciwgYSkge1xuICAgIHN1cGVyKCksIHRoaXMudmFsdWUgPSBuLCB0aGlzLnZhbGlkYXRlVmFsdWUgPSBlLCB0aGlzLnNldFZhbHVlID0gdCwgdGhpcy5wcmlvcml0eSA9IHIsIGEgJiYgKHRoaXMuc3ViUHJpb3JpdHkgPSBhKTtcbiAgfVxuICB2YWxpZGF0ZShuLCBlKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsaWRhdGVWYWx1ZShuLCB0aGlzLnZhbHVlLCBlKTtcbiAgfVxuICBzZXQobiwgZSwgdCkge1xuICAgIHJldHVybiB0aGlzLnNldFZhbHVlKG4sIGUsIHRoaXMudmFsdWUsIHQpO1xuICB9XG59XG5jbGFzcyBjdCBleHRlbmRzIHVlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICBvKHRoaXMsIFwicHJpb3JpdHlcIiwgb3QpO1xuICAgIG8odGhpcywgXCJzdWJQcmlvcml0eVwiLCAtMSk7XG4gIH1cbiAgc2V0KGUsIHQpIHtcbiAgICByZXR1cm4gdC50aW1lc3RhbXBJc1NldCA/IGUgOiBnKGUsIGF0KGUsIERhdGUpKTtcbiAgfVxufVxuY2xhc3MgZCB7XG4gIHJ1bihuLCBlLCB0LCByKSB7XG4gICAgY29uc3QgYSA9IHRoaXMucGFyc2UobiwgZSwgdCwgcik7XG4gICAgcmV0dXJuIGEgPyB7XG4gICAgICBzZXR0ZXI6IG5ldyBpdChcbiAgICAgICAgYS52YWx1ZSxcbiAgICAgICAgdGhpcy52YWxpZGF0ZSxcbiAgICAgICAgdGhpcy5zZXQsXG4gICAgICAgIHRoaXMucHJpb3JpdHksXG4gICAgICAgIHRoaXMuc3ViUHJpb3JpdHlcbiAgICAgICksXG4gICAgICByZXN0OiBhLnJlc3RcbiAgICB9IDogbnVsbDtcbiAgfVxuICB2YWxpZGF0ZShuLCBlLCB0KSB7XG4gICAgcmV0dXJuICEwO1xuICB9XG59XG5jbGFzcyB1dCBleHRlbmRzIGQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgIG8odGhpcywgXCJwcmlvcml0eVwiLCAxNDApO1xuICAgIG8odGhpcywgXCJpbmNvbXBhdGlibGVUb2tlbnNcIiwgW1wiUlwiLCBcInVcIiwgXCJ0XCIsIFwiVFwiXSk7XG4gIH1cbiAgcGFyc2UoZSwgdCwgcikge1xuICAgIHN3aXRjaCAodCkge1xuICAgICAgLy8gQUQsIEJDXG4gICAgICBjYXNlIFwiR1wiOlxuICAgICAgY2FzZSBcIkdHXCI6XG4gICAgICBjYXNlIFwiR0dHXCI6XG4gICAgICAgIHJldHVybiByLmVyYShlLCB7IHdpZHRoOiBcImFiYnJldmlhdGVkXCIgfSkgfHwgci5lcmEoZSwgeyB3aWR0aDogXCJuYXJyb3dcIiB9KTtcbiAgICAgIC8vIEEsIEJcbiAgICAgIGNhc2UgXCJHR0dHR1wiOlxuICAgICAgICByZXR1cm4gci5lcmEoZSwgeyB3aWR0aDogXCJuYXJyb3dcIiB9KTtcbiAgICAgIC8vIEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0XG4gICAgICBjYXNlIFwiR0dHR1wiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHIuZXJhKGUsIHsgd2lkdGg6IFwid2lkZVwiIH0pIHx8IHIuZXJhKGUsIHsgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIiB9KSB8fCByLmVyYShlLCB7IHdpZHRoOiBcIm5hcnJvd1wiIH0pO1xuICAgIH1cbiAgfVxuICBzZXQoZSwgdCwgcikge1xuICAgIHJldHVybiB0LmVyYSA9IHIsIGUuc2V0RnVsbFllYXIociwgMCwgMSksIGUuc2V0SG91cnMoMCwgMCwgMCwgMCksIGU7XG4gIH1cbn1cbmNvbnN0IGIgPSB7XG4gIG1vbnRoOiAvXigxWzAtMl18MD9cXGQpLyxcbiAgLy8gMCB0byAxMlxuICBkYXRlOiAvXigzWzAtMV18WzAtMl0/XFxkKS8sXG4gIC8vIDAgdG8gMzFcbiAgZGF5T2ZZZWFyOiAvXigzNlswLTZdfDNbMC01XVxcZHxbMC0yXT9cXGQ/XFxkKS8sXG4gIC8vIDAgdG8gMzY2XG4gIHdlZWs6IC9eKDVbMC0zXXxbMC00XT9cXGQpLyxcbiAgLy8gMCB0byA1M1xuICBob3VyMjNoOiAvXigyWzAtM118WzAtMV0/XFxkKS8sXG4gIC8vIDAgdG8gMjNcbiAgaG91cjI0aDogL14oMlswLTRdfFswLTFdP1xcZCkvLFxuICAvLyAwIHRvIDI0XG4gIGhvdXIxMWg6IC9eKDFbMC0xXXwwP1xcZCkvLFxuICAvLyAwIHRvIDExXG4gIGhvdXIxMmg6IC9eKDFbMC0yXXwwP1xcZCkvLFxuICAvLyAwIHRvIDEyXG4gIG1pbnV0ZTogL15bMC01XT9cXGQvLFxuICAvLyAwIHRvIDU5XG4gIHNlY29uZDogL15bMC01XT9cXGQvLFxuICAvLyAwIHRvIDU5XG4gIHNpbmdsZURpZ2l0OiAvXlxcZC8sXG4gIC8vIDAgdG8gOVxuICB0d29EaWdpdHM6IC9eXFxkezEsMn0vLFxuICAvLyAwIHRvIDk5XG4gIHRocmVlRGlnaXRzOiAvXlxcZHsxLDN9LyxcbiAgLy8gMCB0byA5OTlcbiAgZm91ckRpZ2l0czogL15cXGR7MSw0fS8sXG4gIC8vIDAgdG8gOTk5OVxuICBhbnlEaWdpdHNTaWduZWQ6IC9eLT9cXGQrLyxcbiAgc2luZ2xlRGlnaXRTaWduZWQ6IC9eLT9cXGQvLFxuICAvLyAwIHRvIDksIC0wIHRvIC05XG4gIHR3b0RpZ2l0c1NpZ25lZDogL14tP1xcZHsxLDJ9LyxcbiAgLy8gMCB0byA5OSwgLTAgdG8gLTk5XG4gIHRocmVlRGlnaXRzU2lnbmVkOiAvXi0/XFxkezEsM30vLFxuICAvLyAwIHRvIDk5OSwgLTAgdG8gLTk5OVxuICBmb3VyRGlnaXRzU2lnbmVkOiAvXi0/XFxkezEsNH0vXG4gIC8vIDAgdG8gOTk5OSwgLTAgdG8gLTk5OTlcbn0sIEQgPSB7XG4gIGJhc2ljT3B0aW9uYWxNaW51dGVzOiAvXihbKy1dKShcXGR7Mn0pKFxcZHsyfSk/fFovLFxuICBiYXNpYzogL14oWystXSkoXFxkezJ9KShcXGR7Mn0pfFovLFxuICBiYXNpY09wdGlvbmFsU2Vjb25kczogL14oWystXSkoXFxkezJ9KShcXGR7Mn0pKChcXGR7Mn0pKT98Wi8sXG4gIGV4dGVuZGVkOiAvXihbKy1dKShcXGR7Mn0pOihcXGR7Mn0pfFovLFxuICBleHRlbmRlZE9wdGlvbmFsU2Vjb25kczogL14oWystXSkoXFxkezJ9KTooXFxkezJ9KSg6KFxcZHsyfSkpP3xaL1xufTtcbmZ1bmN0aW9uIHAocywgbikge1xuICByZXR1cm4gcyAmJiB7XG4gICAgdmFsdWU6IG4ocy52YWx1ZSksXG4gICAgcmVzdDogcy5yZXN0XG4gIH07XG59XG5mdW5jdGlvbiB3KHMsIG4pIHtcbiAgY29uc3QgZSA9IG4ubWF0Y2gocyk7XG4gIHJldHVybiBlID8ge1xuICAgIHZhbHVlOiBwYXJzZUludChlWzBdLCAxMCksXG4gICAgcmVzdDogbi5zbGljZShlWzBdLmxlbmd0aClcbiAgfSA6IG51bGw7XG59XG5mdW5jdGlvbiBUKHMsIG4pIHtcbiAgY29uc3QgZSA9IG4ubWF0Y2gocyk7XG4gIGlmICghZSlcbiAgICByZXR1cm4gbnVsbDtcbiAgaWYgKGVbMF0gPT09IFwiWlwiKVxuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogMCxcbiAgICAgIHJlc3Q6IG4uc2xpY2UoMSlcbiAgICB9O1xuICBjb25zdCB0ID0gZVsxXSA9PT0gXCIrXCIgPyAxIDogLTEsIHIgPSBlWzJdID8gcGFyc2VJbnQoZVsyXSwgMTApIDogMCwgYSA9IGVbM10gPyBwYXJzZUludChlWzNdLCAxMCkgOiAwLCBpID0gZVs1XSA/IHBhcnNlSW50KGVbNV0sIDEwKSA6IDA7XG4gIHJldHVybiB7XG4gICAgdmFsdWU6IHQgKiAociAqIHEgKyBhICogRSArIGkgKiBtZSksXG4gICAgcmVzdDogbi5zbGljZShlWzBdLmxlbmd0aClcbiAgfTtcbn1cbmZ1bmN0aW9uIGxlKHMpIHtcbiAgcmV0dXJuIHcoYi5hbnlEaWdpdHNTaWduZWQsIHMpO1xufVxuZnVuY3Rpb24geShzLCBuKSB7XG4gIHN3aXRjaCAocykge1xuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiB3KGIuc2luZ2xlRGlnaXQsIG4pO1xuICAgIGNhc2UgMjpcbiAgICAgIHJldHVybiB3KGIudHdvRGlnaXRzLCBuKTtcbiAgICBjYXNlIDM6XG4gICAgICByZXR1cm4gdyhiLnRocmVlRGlnaXRzLCBuKTtcbiAgICBjYXNlIDQ6XG4gICAgICByZXR1cm4gdyhiLmZvdXJEaWdpdHMsIG4pO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gdyhuZXcgUmVnRXhwKFwiXlxcXFxkezEsXCIgKyBzICsgXCJ9XCIpLCBuKTtcbiAgfVxufVxuZnVuY3Rpb24gSChzLCBuKSB7XG4gIHN3aXRjaCAocykge1xuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiB3KGIuc2luZ2xlRGlnaXRTaWduZWQsIG4pO1xuICAgIGNhc2UgMjpcbiAgICAgIHJldHVybiB3KGIudHdvRGlnaXRzU2lnbmVkLCBuKTtcbiAgICBjYXNlIDM6XG4gICAgICByZXR1cm4gdyhiLnRocmVlRGlnaXRzU2lnbmVkLCBuKTtcbiAgICBjYXNlIDQ6XG4gICAgICByZXR1cm4gdyhiLmZvdXJEaWdpdHNTaWduZWQsIG4pO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gdyhuZXcgUmVnRXhwKFwiXi0/XFxcXGR7MSxcIiArIHMgKyBcIn1cIiksIG4pO1xuICB9XG59XG5mdW5jdGlvbiBBKHMpIHtcbiAgc3dpdGNoIChzKSB7XG4gICAgY2FzZSBcIm1vcm5pbmdcIjpcbiAgICAgIHJldHVybiA0O1xuICAgIGNhc2UgXCJldmVuaW5nXCI6XG4gICAgICByZXR1cm4gMTc7XG4gICAgY2FzZSBcInBtXCI6XG4gICAgY2FzZSBcIm5vb25cIjpcbiAgICBjYXNlIFwiYWZ0ZXJub29uXCI6XG4gICAgICByZXR1cm4gMTI7XG4gICAgY2FzZSBcImFtXCI6XG4gICAgY2FzZSBcIm1pZG5pZ2h0XCI6XG4gICAgY2FzZSBcIm5pZ2h0XCI6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiAwO1xuICB9XG59XG5mdW5jdGlvbiBkZShzLCBuKSB7XG4gIGNvbnN0IGUgPSBuID4gMCwgdCA9IGUgPyBuIDogMSAtIG47XG4gIGxldCByO1xuICBpZiAodCA8PSA1MClcbiAgICByID0gcyB8fCAxMDA7XG4gIGVsc2Uge1xuICAgIGNvbnN0IGEgPSB0ICsgNTAsIGkgPSBNYXRoLnRydW5jKGEgLyAxMDApICogMTAwLCB1ID0gcyA+PSBhICUgMTAwO1xuICAgIHIgPSBzICsgaSAtICh1ID8gMTAwIDogMCk7XG4gIH1cbiAgcmV0dXJuIGUgPyByIDogMSAtIHI7XG59XG5mdW5jdGlvbiBmZShzKSB7XG4gIHJldHVybiBzICUgNDAwID09PSAwIHx8IHMgJSA0ID09PSAwICYmIHMgJSAxMDAgIT09IDA7XG59XG5jbGFzcyBsdCBleHRlbmRzIGQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgIG8odGhpcywgXCJwcmlvcml0eVwiLCAxMzApO1xuICAgIG8odGhpcywgXCJpbmNvbXBhdGlibGVUb2tlbnNcIiwgW1wiWVwiLCBcIlJcIiwgXCJ1XCIsIFwid1wiLCBcIklcIiwgXCJpXCIsIFwiZVwiLCBcImNcIiwgXCJ0XCIsIFwiVFwiXSk7XG4gIH1cbiAgcGFyc2UoZSwgdCwgcikge1xuICAgIGNvbnN0IGEgPSAoaSkgPT4gKHtcbiAgICAgIHllYXI6IGksXG4gICAgICBpc1R3b0RpZ2l0WWVhcjogdCA9PT0gXCJ5eVwiXG4gICAgfSk7XG4gICAgc3dpdGNoICh0KSB7XG4gICAgICBjYXNlIFwieVwiOlxuICAgICAgICByZXR1cm4gcCh5KDQsIGUpLCBhKTtcbiAgICAgIGNhc2UgXCJ5b1wiOlxuICAgICAgICByZXR1cm4gcChcbiAgICAgICAgICByLm9yZGluYWxOdW1iZXIoZSwge1xuICAgICAgICAgICAgdW5pdDogXCJ5ZWFyXCJcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBhXG4gICAgICAgICk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gcCh5KHQubGVuZ3RoLCBlKSwgYSk7XG4gICAgfVxuICB9XG4gIHZhbGlkYXRlKGUsIHQpIHtcbiAgICByZXR1cm4gdC5pc1R3b0RpZ2l0WWVhciB8fCB0LnllYXIgPiAwO1xuICB9XG4gIHNldChlLCB0LCByKSB7XG4gICAgY29uc3QgYSA9IGUuZ2V0RnVsbFllYXIoKTtcbiAgICBpZiAoci5pc1R3b0RpZ2l0WWVhcikge1xuICAgICAgY29uc3QgdSA9IGRlKFxuICAgICAgICByLnllYXIsXG4gICAgICAgIGFcbiAgICAgICk7XG4gICAgICByZXR1cm4gZS5zZXRGdWxsWWVhcih1LCAwLCAxKSwgZS5zZXRIb3VycygwLCAwLCAwLCAwKSwgZTtcbiAgICB9XG4gICAgY29uc3QgaSA9ICEoXCJlcmFcIiBpbiB0KSB8fCB0LmVyYSA9PT0gMSA/IHIueWVhciA6IDEgLSByLnllYXI7XG4gICAgcmV0dXJuIGUuc2V0RnVsbFllYXIoaSwgMCwgMSksIGUuc2V0SG91cnMoMCwgMCwgMCwgMCksIGU7XG4gIH1cbn1cbmNsYXNzIGR0IGV4dGVuZHMgZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgbyh0aGlzLCBcInByaW9yaXR5XCIsIDEzMCk7XG4gICAgbyh0aGlzLCBcImluY29tcGF0aWJsZVRva2Vuc1wiLCBbXG4gICAgICBcInlcIixcbiAgICAgIFwiUlwiLFxuICAgICAgXCJ1XCIsXG4gICAgICBcIlFcIixcbiAgICAgIFwicVwiLFxuICAgICAgXCJNXCIsXG4gICAgICBcIkxcIixcbiAgICAgIFwiSVwiLFxuICAgICAgXCJkXCIsXG4gICAgICBcIkRcIixcbiAgICAgIFwiaVwiLFxuICAgICAgXCJ0XCIsXG4gICAgICBcIlRcIlxuICAgIF0pO1xuICB9XG4gIHBhcnNlKGUsIHQsIHIpIHtcbiAgICBjb25zdCBhID0gKGkpID0+ICh7XG4gICAgICB5ZWFyOiBpLFxuICAgICAgaXNUd29EaWdpdFllYXI6IHQgPT09IFwiWVlcIlxuICAgIH0pO1xuICAgIHN3aXRjaCAodCkge1xuICAgICAgY2FzZSBcIllcIjpcbiAgICAgICAgcmV0dXJuIHAoeSg0LCBlKSwgYSk7XG4gICAgICBjYXNlIFwiWW9cIjpcbiAgICAgICAgcmV0dXJuIHAoXG4gICAgICAgICAgci5vcmRpbmFsTnVtYmVyKGUsIHtcbiAgICAgICAgICAgIHVuaXQ6IFwieWVhclwiXG4gICAgICAgICAgfSksXG4gICAgICAgICAgYVxuICAgICAgICApO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHAoeSh0Lmxlbmd0aCwgZSksIGEpO1xuICAgIH1cbiAgfVxuICB2YWxpZGF0ZShlLCB0KSB7XG4gICAgcmV0dXJuIHQuaXNUd29EaWdpdFllYXIgfHwgdC55ZWFyID4gMDtcbiAgfVxuICBzZXQoZSwgdCwgciwgYSkge1xuICAgIGNvbnN0IGkgPSBEZShlLCBhKTtcbiAgICBpZiAoci5pc1R3b0RpZ2l0WWVhcikge1xuICAgICAgY29uc3QgZiA9IGRlKFxuICAgICAgICByLnllYXIsXG4gICAgICAgIGlcbiAgICAgICk7XG4gICAgICByZXR1cm4gZS5zZXRGdWxsWWVhcihcbiAgICAgICAgZixcbiAgICAgICAgMCxcbiAgICAgICAgYS5maXJzdFdlZWtDb250YWluc0RhdGVcbiAgICAgICksIGUuc2V0SG91cnMoMCwgMCwgMCwgMCksIFAoZSwgYSk7XG4gICAgfVxuICAgIGNvbnN0IHUgPSAhKFwiZXJhXCIgaW4gdCkgfHwgdC5lcmEgPT09IDEgPyByLnllYXIgOiAxIC0gci55ZWFyO1xuICAgIHJldHVybiBlLnNldEZ1bGxZZWFyKHUsIDAsIGEuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSwgZS5zZXRIb3VycygwLCAwLCAwLCAwKSwgUChlLCBhKTtcbiAgfVxufVxuY2xhc3MgZnQgZXh0ZW5kcyBkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICBvKHRoaXMsIFwicHJpb3JpdHlcIiwgMTMwKTtcbiAgICBvKHRoaXMsIFwiaW5jb21wYXRpYmxlVG9rZW5zXCIsIFtcbiAgICAgIFwiR1wiLFxuICAgICAgXCJ5XCIsXG4gICAgICBcIllcIixcbiAgICAgIFwidVwiLFxuICAgICAgXCJRXCIsXG4gICAgICBcInFcIixcbiAgICAgIFwiTVwiLFxuICAgICAgXCJMXCIsXG4gICAgICBcIndcIixcbiAgICAgIFwiZFwiLFxuICAgICAgXCJEXCIsXG4gICAgICBcImVcIixcbiAgICAgIFwiY1wiLFxuICAgICAgXCJ0XCIsXG4gICAgICBcIlRcIlxuICAgIF0pO1xuICB9XG4gIHBhcnNlKGUsIHQpIHtcbiAgICByZXR1cm4gSCh0ID09PSBcIlJcIiA/IDQgOiB0Lmxlbmd0aCwgZSk7XG4gIH1cbiAgc2V0KGUsIHQsIHIpIHtcbiAgICBjb25zdCBhID0gZyhlLCAwKTtcbiAgICByZXR1cm4gYS5zZXRGdWxsWWVhcihyLCAwLCA0KSwgYS5zZXRIb3VycygwLCAwLCAwLCAwKSwgbmUoYSk7XG4gIH1cbn1cbmNsYXNzIHd0IGV4dGVuZHMgZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgbyh0aGlzLCBcInByaW9yaXR5XCIsIDEzMCk7XG4gICAgbyh0aGlzLCBcImluY29tcGF0aWJsZVRva2Vuc1wiLCBbXCJHXCIsIFwieVwiLCBcIllcIiwgXCJSXCIsIFwid1wiLCBcIklcIiwgXCJpXCIsIFwiZVwiLCBcImNcIiwgXCJ0XCIsIFwiVFwiXSk7XG4gIH1cbiAgcGFyc2UoZSwgdCkge1xuICAgIHJldHVybiBIKHQgPT09IFwidVwiID8gNCA6IHQubGVuZ3RoLCBlKTtcbiAgfVxuICBzZXQoZSwgdCwgcikge1xuICAgIHJldHVybiBlLnNldEZ1bGxZZWFyKHIsIDAsIDEpLCBlLnNldEhvdXJzKDAsIDAsIDAsIDApLCBlO1xuICB9XG59XG5jbGFzcyBodCBleHRlbmRzIGQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgIG8odGhpcywgXCJwcmlvcml0eVwiLCAxMjApO1xuICAgIG8odGhpcywgXCJpbmNvbXBhdGlibGVUb2tlbnNcIiwgW1xuICAgICAgXCJZXCIsXG4gICAgICBcIlJcIixcbiAgICAgIFwicVwiLFxuICAgICAgXCJNXCIsXG4gICAgICBcIkxcIixcbiAgICAgIFwid1wiLFxuICAgICAgXCJJXCIsXG4gICAgICBcImRcIixcbiAgICAgIFwiRFwiLFxuICAgICAgXCJpXCIsXG4gICAgICBcImVcIixcbiAgICAgIFwiY1wiLFxuICAgICAgXCJ0XCIsXG4gICAgICBcIlRcIlxuICAgIF0pO1xuICB9XG4gIHBhcnNlKGUsIHQsIHIpIHtcbiAgICBzd2l0Y2ggKHQpIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgXCJRXCI6XG4gICAgICBjYXNlIFwiUVFcIjpcbiAgICAgICAgcmV0dXJuIHkodC5sZW5ndGgsIGUpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG4gICAgICBjYXNlIFwiUW9cIjpcbiAgICAgICAgcmV0dXJuIHIub3JkaW5hbE51bWJlcihlLCB7IHVuaXQ6IFwicXVhcnRlclwiIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcbiAgICAgIGNhc2UgXCJRUVFcIjpcbiAgICAgICAgcmV0dXJuIHIucXVhcnRlcihlLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIlxuICAgICAgICB9KSB8fCByLnF1YXJ0ZXIoZSwge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG4gICAgICBjYXNlIFwiUVFRUVFcIjpcbiAgICAgICAgcmV0dXJuIHIucXVhcnRlcihlLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCJcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuICAgICAgY2FzZSBcIlFRUVFcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiByLnF1YXJ0ZXIoZSwge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIlxuICAgICAgICB9KSB8fCByLnF1YXJ0ZXIoZSwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCJcbiAgICAgICAgfSkgfHwgci5xdWFydGVyKGUsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIlxuICAgICAgICB9KTtcbiAgICB9XG4gIH1cbiAgdmFsaWRhdGUoZSwgdCkge1xuICAgIHJldHVybiB0ID49IDEgJiYgdCA8PSA0O1xuICB9XG4gIHNldChlLCB0LCByKSB7XG4gICAgcmV0dXJuIGUuc2V0TW9udGgoKHIgLSAxKSAqIDMsIDEpLCBlLnNldEhvdXJzKDAsIDAsIDAsIDApLCBlO1xuICB9XG59XG5jbGFzcyB5dCBleHRlbmRzIGQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgIG8odGhpcywgXCJwcmlvcml0eVwiLCAxMjApO1xuICAgIG8odGhpcywgXCJpbmNvbXBhdGlibGVUb2tlbnNcIiwgW1xuICAgICAgXCJZXCIsXG4gICAgICBcIlJcIixcbiAgICAgIFwiUVwiLFxuICAgICAgXCJNXCIsXG4gICAgICBcIkxcIixcbiAgICAgIFwid1wiLFxuICAgICAgXCJJXCIsXG4gICAgICBcImRcIixcbiAgICAgIFwiRFwiLFxuICAgICAgXCJpXCIsXG4gICAgICBcImVcIixcbiAgICAgIFwiY1wiLFxuICAgICAgXCJ0XCIsXG4gICAgICBcIlRcIlxuICAgIF0pO1xuICB9XG4gIHBhcnNlKGUsIHQsIHIpIHtcbiAgICBzd2l0Y2ggKHQpIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgXCJxXCI6XG4gICAgICBjYXNlIFwicXFcIjpcbiAgICAgICAgcmV0dXJuIHkodC5sZW5ndGgsIGUpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG4gICAgICBjYXNlIFwicW9cIjpcbiAgICAgICAgcmV0dXJuIHIub3JkaW5hbE51bWJlcihlLCB7IHVuaXQ6IFwicXVhcnRlclwiIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcbiAgICAgIGNhc2UgXCJxcXFcIjpcbiAgICAgICAgcmV0dXJuIHIucXVhcnRlcihlLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIlxuICAgICAgICB9KSB8fCByLnF1YXJ0ZXIoZSwge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG4gICAgICBjYXNlIFwicXFxcXFcIjpcbiAgICAgICAgcmV0dXJuIHIucXVhcnRlcihlLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCJcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuICAgICAgY2FzZSBcInFxcXFcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiByLnF1YXJ0ZXIoZSwge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIlxuICAgICAgICB9KSB8fCByLnF1YXJ0ZXIoZSwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCJcbiAgICAgICAgfSkgfHwgci5xdWFydGVyKGUsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIlxuICAgICAgICB9KTtcbiAgICB9XG4gIH1cbiAgdmFsaWRhdGUoZSwgdCkge1xuICAgIHJldHVybiB0ID49IDEgJiYgdCA8PSA0O1xuICB9XG4gIHNldChlLCB0LCByKSB7XG4gICAgcmV0dXJuIGUuc2V0TW9udGgoKHIgLSAxKSAqIDMsIDEpLCBlLnNldEhvdXJzKDAsIDAsIDAsIDApLCBlO1xuICB9XG59XG5jbGFzcyBidCBleHRlbmRzIGQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgIG8odGhpcywgXCJpbmNvbXBhdGlibGVUb2tlbnNcIiwgW1xuICAgICAgXCJZXCIsXG4gICAgICBcIlJcIixcbiAgICAgIFwicVwiLFxuICAgICAgXCJRXCIsXG4gICAgICBcIkxcIixcbiAgICAgIFwid1wiLFxuICAgICAgXCJJXCIsXG4gICAgICBcIkRcIixcbiAgICAgIFwiaVwiLFxuICAgICAgXCJlXCIsXG4gICAgICBcImNcIixcbiAgICAgIFwidFwiLFxuICAgICAgXCJUXCJcbiAgICBdKTtcbiAgICBvKHRoaXMsIFwicHJpb3JpdHlcIiwgMTEwKTtcbiAgfVxuICBwYXJzZShlLCB0LCByKSB7XG4gICAgY29uc3QgYSA9IChpKSA9PiBpIC0gMTtcbiAgICBzd2l0Y2ggKHQpIHtcbiAgICAgIC8vIDEsIDIsIC4uLiwgMTJcbiAgICAgIGNhc2UgXCJNXCI6XG4gICAgICAgIHJldHVybiBwKFxuICAgICAgICAgIHcoYi5tb250aCwgZSksXG4gICAgICAgICAgYVxuICAgICAgICApO1xuICAgICAgLy8gMDEsIDAyLCAuLi4sIDEyXG4gICAgICBjYXNlIFwiTU1cIjpcbiAgICAgICAgcmV0dXJuIHAoeSgyLCBlKSwgYSk7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG4gICAgICBjYXNlIFwiTW9cIjpcbiAgICAgICAgcmV0dXJuIHAoXG4gICAgICAgICAgci5vcmRpbmFsTnVtYmVyKGUsIHtcbiAgICAgICAgICAgIHVuaXQ6IFwibW9udGhcIlxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGFcbiAgICAgICAgKTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuICAgICAgY2FzZSBcIk1NTVwiOlxuICAgICAgICByZXR1cm4gci5tb250aChlLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIlxuICAgICAgICB9KSB8fCByLm1vbnRoKGUsIHsgd2lkdGg6IFwibmFycm93XCIsIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG4gICAgICBjYXNlIFwiTU1NTU1cIjpcbiAgICAgICAgcmV0dXJuIHIubW9udGgoZSwge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcbiAgICAgIGNhc2UgXCJNTU1NXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gci5tb250aChlLCB7IHdpZHRoOiBcIndpZGVcIiwgY29udGV4dDogXCJmb3JtYXR0aW5nXCIgfSkgfHwgci5tb250aChlLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIlxuICAgICAgICB9KSB8fCByLm1vbnRoKGUsIHsgd2lkdGg6IFwibmFycm93XCIsIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiIH0pO1xuICAgIH1cbiAgfVxuICB2YWxpZGF0ZShlLCB0KSB7XG4gICAgcmV0dXJuIHQgPj0gMCAmJiB0IDw9IDExO1xuICB9XG4gIHNldChlLCB0LCByKSB7XG4gICAgcmV0dXJuIGUuc2V0TW9udGgociwgMSksIGUuc2V0SG91cnMoMCwgMCwgMCwgMCksIGU7XG4gIH1cbn1cbmNsYXNzIHB0IGV4dGVuZHMgZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgbyh0aGlzLCBcInByaW9yaXR5XCIsIDExMCk7XG4gICAgbyh0aGlzLCBcImluY29tcGF0aWJsZVRva2Vuc1wiLCBbXG4gICAgICBcIllcIixcbiAgICAgIFwiUlwiLFxuICAgICAgXCJxXCIsXG4gICAgICBcIlFcIixcbiAgICAgIFwiTVwiLFxuICAgICAgXCJ3XCIsXG4gICAgICBcIklcIixcbiAgICAgIFwiRFwiLFxuICAgICAgXCJpXCIsXG4gICAgICBcImVcIixcbiAgICAgIFwiY1wiLFxuICAgICAgXCJ0XCIsXG4gICAgICBcIlRcIlxuICAgIF0pO1xuICB9XG4gIHBhcnNlKGUsIHQsIHIpIHtcbiAgICBjb25zdCBhID0gKGkpID0+IGkgLSAxO1xuICAgIHN3aXRjaCAodCkge1xuICAgICAgLy8gMSwgMiwgLi4uLCAxMlxuICAgICAgY2FzZSBcIkxcIjpcbiAgICAgICAgcmV0dXJuIHAoXG4gICAgICAgICAgdyhiLm1vbnRoLCBlKSxcbiAgICAgICAgICBhXG4gICAgICAgICk7XG4gICAgICAvLyAwMSwgMDIsIC4uLiwgMTJcbiAgICAgIGNhc2UgXCJMTFwiOlxuICAgICAgICByZXR1cm4gcCh5KDIsIGUpLCBhKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcbiAgICAgIGNhc2UgXCJMb1wiOlxuICAgICAgICByZXR1cm4gcChcbiAgICAgICAgICByLm9yZGluYWxOdW1iZXIoZSwge1xuICAgICAgICAgICAgdW5pdDogXCJtb250aFwiXG4gICAgICAgICAgfSksXG4gICAgICAgICAgYVxuICAgICAgICApO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG4gICAgICBjYXNlIFwiTExMXCI6XG4gICAgICAgIHJldHVybiByLm1vbnRoKGUsIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiXG4gICAgICAgIH0pIHx8IHIubW9udGgoZSwgeyB3aWR0aDogXCJuYXJyb3dcIiwgY29udGV4dDogXCJzdGFuZGFsb25lXCIgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcbiAgICAgIGNhc2UgXCJMTExMTFwiOlxuICAgICAgICByZXR1cm4gci5tb250aChlLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCJcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuICAgICAgY2FzZSBcIkxMTExcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiByLm1vbnRoKGUsIHsgd2lkdGg6IFwid2lkZVwiLCBjb250ZXh0OiBcInN0YW5kYWxvbmVcIiB9KSB8fCByLm1vbnRoKGUsIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiXG4gICAgICAgIH0pIHx8IHIubW9udGgoZSwgeyB3aWR0aDogXCJuYXJyb3dcIiwgY29udGV4dDogXCJzdGFuZGFsb25lXCIgfSk7XG4gICAgfVxuICB9XG4gIHZhbGlkYXRlKGUsIHQpIHtcbiAgICByZXR1cm4gdCA+PSAwICYmIHQgPD0gMTE7XG4gIH1cbiAgc2V0KGUsIHQsIHIpIHtcbiAgICByZXR1cm4gZS5zZXRNb250aChyLCAxKSwgZS5zZXRIb3VycygwLCAwLCAwLCAwKSwgZTtcbiAgfVxufVxuZnVuY3Rpb24geHQocywgbiwgZSkge1xuICBjb25zdCB0ID0gYyhzKSwgciA9IFRlKHQsIGUpIC0gbjtcbiAgcmV0dXJuIHQuc2V0RGF0ZSh0LmdldERhdGUoKSAtIHIgKiA3KSwgdDtcbn1cbmNsYXNzIGd0IGV4dGVuZHMgZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgbyh0aGlzLCBcInByaW9yaXR5XCIsIDEwMCk7XG4gICAgbyh0aGlzLCBcImluY29tcGF0aWJsZVRva2Vuc1wiLCBbXG4gICAgICBcInlcIixcbiAgICAgIFwiUlwiLFxuICAgICAgXCJ1XCIsXG4gICAgICBcInFcIixcbiAgICAgIFwiUVwiLFxuICAgICAgXCJNXCIsXG4gICAgICBcIkxcIixcbiAgICAgIFwiSVwiLFxuICAgICAgXCJkXCIsXG4gICAgICBcIkRcIixcbiAgICAgIFwiaVwiLFxuICAgICAgXCJ0XCIsXG4gICAgICBcIlRcIlxuICAgIF0pO1xuICB9XG4gIHBhcnNlKGUsIHQsIHIpIHtcbiAgICBzd2l0Y2ggKHQpIHtcbiAgICAgIGNhc2UgXCJ3XCI6XG4gICAgICAgIHJldHVybiB3KGIud2VlaywgZSk7XG4gICAgICBjYXNlIFwid29cIjpcbiAgICAgICAgcmV0dXJuIHIub3JkaW5hbE51bWJlcihlLCB7IHVuaXQ6IFwid2Vla1wiIH0pO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHkodC5sZW5ndGgsIGUpO1xuICAgIH1cbiAgfVxuICB2YWxpZGF0ZShlLCB0KSB7XG4gICAgcmV0dXJuIHQgPj0gMSAmJiB0IDw9IDUzO1xuICB9XG4gIHNldChlLCB0LCByLCBhKSB7XG4gICAgcmV0dXJuIFAoeHQoZSwgciwgYSksIGEpO1xuICB9XG59XG5mdW5jdGlvbiBtdChzLCBuKSB7XG4gIGNvbnN0IGUgPSBjKHMpLCB0ID0gTWUoZSkgLSBuO1xuICByZXR1cm4gZS5zZXREYXRlKGUuZ2V0RGF0ZSgpIC0gdCAqIDcpLCBlO1xufVxuY2xhc3MgRHQgZXh0ZW5kcyBkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICBvKHRoaXMsIFwicHJpb3JpdHlcIiwgMTAwKTtcbiAgICBvKHRoaXMsIFwiaW5jb21wYXRpYmxlVG9rZW5zXCIsIFtcbiAgICAgIFwieVwiLFxuICAgICAgXCJZXCIsXG4gICAgICBcInVcIixcbiAgICAgIFwicVwiLFxuICAgICAgXCJRXCIsXG4gICAgICBcIk1cIixcbiAgICAgIFwiTFwiLFxuICAgICAgXCJ3XCIsXG4gICAgICBcImRcIixcbiAgICAgIFwiRFwiLFxuICAgICAgXCJlXCIsXG4gICAgICBcImNcIixcbiAgICAgIFwidFwiLFxuICAgICAgXCJUXCJcbiAgICBdKTtcbiAgfVxuICBwYXJzZShlLCB0LCByKSB7XG4gICAgc3dpdGNoICh0KSB7XG4gICAgICBjYXNlIFwiSVwiOlxuICAgICAgICByZXR1cm4gdyhiLndlZWssIGUpO1xuICAgICAgY2FzZSBcIklvXCI6XG4gICAgICAgIHJldHVybiByLm9yZGluYWxOdW1iZXIoZSwgeyB1bml0OiBcIndlZWtcIiB9KTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB5KHQubGVuZ3RoLCBlKTtcbiAgICB9XG4gIH1cbiAgdmFsaWRhdGUoZSwgdCkge1xuICAgIHJldHVybiB0ID49IDEgJiYgdCA8PSA1MztcbiAgfVxuICBzZXQoZSwgdCwgcikge1xuICAgIHJldHVybiBuZShtdChlLCByKSk7XG4gIH1cbn1cbmNvbnN0IFR0ID0gWzMxLCAyOCwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzFdLCBNdCA9IFtcbiAgMzEsXG4gIDI5LFxuICAzMSxcbiAgMzAsXG4gIDMxLFxuICAzMCxcbiAgMzEsXG4gIDMxLFxuICAzMCxcbiAgMzEsXG4gIDMwLFxuICAzMVxuXTtcbmNsYXNzIGt0IGV4dGVuZHMgZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgbyh0aGlzLCBcInByaW9yaXR5XCIsIDkwKTtcbiAgICBvKHRoaXMsIFwic3ViUHJpb3JpdHlcIiwgMSk7XG4gICAgbyh0aGlzLCBcImluY29tcGF0aWJsZVRva2Vuc1wiLCBbXG4gICAgICBcIllcIixcbiAgICAgIFwiUlwiLFxuICAgICAgXCJxXCIsXG4gICAgICBcIlFcIixcbiAgICAgIFwid1wiLFxuICAgICAgXCJJXCIsXG4gICAgICBcIkRcIixcbiAgICAgIFwiaVwiLFxuICAgICAgXCJlXCIsXG4gICAgICBcImNcIixcbiAgICAgIFwidFwiLFxuICAgICAgXCJUXCJcbiAgICBdKTtcbiAgfVxuICBwYXJzZShlLCB0LCByKSB7XG4gICAgc3dpdGNoICh0KSB7XG4gICAgICBjYXNlIFwiZFwiOlxuICAgICAgICByZXR1cm4gdyhiLmRhdGUsIGUpO1xuICAgICAgY2FzZSBcImRvXCI6XG4gICAgICAgIHJldHVybiByLm9yZGluYWxOdW1iZXIoZSwgeyB1bml0OiBcImRhdGVcIiB9KTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB5KHQubGVuZ3RoLCBlKTtcbiAgICB9XG4gIH1cbiAgdmFsaWRhdGUoZSwgdCkge1xuICAgIGNvbnN0IHIgPSBlLmdldEZ1bGxZZWFyKCksIGEgPSBmZShyKSwgaSA9IGUuZ2V0TW9udGgoKTtcbiAgICByZXR1cm4gYSA/IHQgPj0gMSAmJiB0IDw9IE10W2ldIDogdCA+PSAxICYmIHQgPD0gVHRbaV07XG4gIH1cbiAgc2V0KGUsIHQsIHIpIHtcbiAgICByZXR1cm4gZS5zZXREYXRlKHIpLCBlLnNldEhvdXJzKDAsIDAsIDAsIDApLCBlO1xuICB9XG59XG5jbGFzcyBfdCBleHRlbmRzIGQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgIG8odGhpcywgXCJwcmlvcml0eVwiLCA5MCk7XG4gICAgbyh0aGlzLCBcInN1YnByaW9yaXR5XCIsIDEpO1xuICAgIG8odGhpcywgXCJpbmNvbXBhdGlibGVUb2tlbnNcIiwgW1xuICAgICAgXCJZXCIsXG4gICAgICBcIlJcIixcbiAgICAgIFwicVwiLFxuICAgICAgXCJRXCIsXG4gICAgICBcIk1cIixcbiAgICAgIFwiTFwiLFxuICAgICAgXCJ3XCIsXG4gICAgICBcIklcIixcbiAgICAgIFwiZFwiLFxuICAgICAgXCJFXCIsXG4gICAgICBcImlcIixcbiAgICAgIFwiZVwiLFxuICAgICAgXCJjXCIsXG4gICAgICBcInRcIixcbiAgICAgIFwiVFwiXG4gICAgXSk7XG4gIH1cbiAgcGFyc2UoZSwgdCwgcikge1xuICAgIHN3aXRjaCAodCkge1xuICAgICAgY2FzZSBcIkRcIjpcbiAgICAgIGNhc2UgXCJERFwiOlxuICAgICAgICByZXR1cm4gdyhiLmRheU9mWWVhciwgZSk7XG4gICAgICBjYXNlIFwiRG9cIjpcbiAgICAgICAgcmV0dXJuIHIub3JkaW5hbE51bWJlcihlLCB7IHVuaXQ6IFwiZGF0ZVwiIH0pO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHkodC5sZW5ndGgsIGUpO1xuICAgIH1cbiAgfVxuICB2YWxpZGF0ZShlLCB0KSB7XG4gICAgY29uc3QgciA9IGUuZ2V0RnVsbFllYXIoKTtcbiAgICByZXR1cm4gZmUocikgPyB0ID49IDEgJiYgdCA8PSAzNjYgOiB0ID49IDEgJiYgdCA8PSAzNjU7XG4gIH1cbiAgc2V0KGUsIHQsIHIpIHtcbiAgICByZXR1cm4gZS5zZXRNb250aCgwLCByKSwgZS5zZXRIb3VycygwLCAwLCAwLCAwKSwgZTtcbiAgfVxufVxuZnVuY3Rpb24gQihzLCBuLCBlKSB7XG4gIHZhciBrLCBOLCBNLCBfO1xuICBjb25zdCB0ID0gUigpLCByID0gKGUgPT0gbnVsbCA/IHZvaWQgMCA6IGUud2Vla1N0YXJ0c09uKSA/PyAoKE4gPSAoayA9IGUgPT0gbnVsbCA/IHZvaWQgMCA6IGUubG9jYWxlKSA9PSBudWxsID8gdm9pZCAwIDogay5vcHRpb25zKSA9PSBudWxsID8gdm9pZCAwIDogTi53ZWVrU3RhcnRzT24pID8/IHQud2Vla1N0YXJ0c09uID8/ICgoXyA9IChNID0gdC5sb2NhbGUpID09IG51bGwgPyB2b2lkIDAgOiBNLm9wdGlvbnMpID09IG51bGwgPyB2b2lkIDAgOiBfLndlZWtTdGFydHNPbikgPz8gMCwgYSA9IGMocyksIGkgPSBhLmdldERheSgpLCBmID0gKG4gJSA3ICsgNykgJSA3LCB4ID0gNyAtIHIsIEMgPSBuIDwgMCB8fCBuID4gNiA/IG4gLSAoaSArIHgpICUgNyA6IChmICsgeCkgJSA3IC0gKGkgKyB4KSAlIDc7XG4gIHJldHVybiB2KGEsIEMpO1xufVxuY2xhc3MgT3QgZXh0ZW5kcyBkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICBvKHRoaXMsIFwicHJpb3JpdHlcIiwgOTApO1xuICAgIG8odGhpcywgXCJpbmNvbXBhdGlibGVUb2tlbnNcIiwgW1wiRFwiLCBcImlcIiwgXCJlXCIsIFwiY1wiLCBcInRcIiwgXCJUXCJdKTtcbiAgfVxuICBwYXJzZShlLCB0LCByKSB7XG4gICAgc3dpdGNoICh0KSB7XG4gICAgICAvLyBUdWVcbiAgICAgIGNhc2UgXCJFXCI6XG4gICAgICBjYXNlIFwiRUVcIjpcbiAgICAgIGNhc2UgXCJFRUVcIjpcbiAgICAgICAgcmV0dXJuIHIuZGF5KGUsIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiXG4gICAgICAgIH0pIHx8IHIuZGF5KGUsIHsgd2lkdGg6IFwic2hvcnRcIiwgY29udGV4dDogXCJmb3JtYXR0aW5nXCIgfSkgfHwgci5kYXkoZSwgeyB3aWR0aDogXCJuYXJyb3dcIiwgY29udGV4dDogXCJmb3JtYXR0aW5nXCIgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlIFwiRUVFRUVcIjpcbiAgICAgICAgcmV0dXJuIHIuZGF5KGUsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIlxuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlIFwiRUVFRUVFXCI6XG4gICAgICAgIHJldHVybiByLmRheShlLCB7IHdpZHRoOiBcInNob3J0XCIsIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiIH0pIHx8IHIuZGF5KGUsIHsgd2lkdGg6IFwibmFycm93XCIsIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiIH0pO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSBcIkVFRUVcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiByLmRheShlLCB7IHdpZHRoOiBcIndpZGVcIiwgY29udGV4dDogXCJmb3JtYXR0aW5nXCIgfSkgfHwgci5kYXkoZSwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCJcbiAgICAgICAgfSkgfHwgci5kYXkoZSwgeyB3aWR0aDogXCJzaG9ydFwiLCBjb250ZXh0OiBcImZvcm1hdHRpbmdcIiB9KSB8fCByLmRheShlLCB7IHdpZHRoOiBcIm5hcnJvd1wiLCBjb250ZXh0OiBcImZvcm1hdHRpbmdcIiB9KTtcbiAgICB9XG4gIH1cbiAgdmFsaWRhdGUoZSwgdCkge1xuICAgIHJldHVybiB0ID49IDAgJiYgdCA8PSA2O1xuICB9XG4gIHNldChlLCB0LCByLCBhKSB7XG4gICAgcmV0dXJuIGUgPSBCKGUsIHIsIGEpLCBlLnNldEhvdXJzKDAsIDAsIDAsIDApLCBlO1xuICB9XG59XG5jbGFzcyBZdCBleHRlbmRzIGQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgIG8odGhpcywgXCJwcmlvcml0eVwiLCA5MCk7XG4gICAgbyh0aGlzLCBcImluY29tcGF0aWJsZVRva2Vuc1wiLCBbXG4gICAgICBcInlcIixcbiAgICAgIFwiUlwiLFxuICAgICAgXCJ1XCIsXG4gICAgICBcInFcIixcbiAgICAgIFwiUVwiLFxuICAgICAgXCJNXCIsXG4gICAgICBcIkxcIixcbiAgICAgIFwiSVwiLFxuICAgICAgXCJkXCIsXG4gICAgICBcIkRcIixcbiAgICAgIFwiRVwiLFxuICAgICAgXCJpXCIsXG4gICAgICBcImNcIixcbiAgICAgIFwidFwiLFxuICAgICAgXCJUXCJcbiAgICBdKTtcbiAgfVxuICBwYXJzZShlLCB0LCByLCBhKSB7XG4gICAgY29uc3QgaSA9ICh1KSA9PiB7XG4gICAgICBjb25zdCBmID0gTWF0aC5mbG9vcigodSAtIDEpIC8gNykgKiA3O1xuICAgICAgcmV0dXJuICh1ICsgYS53ZWVrU3RhcnRzT24gKyA2KSAlIDcgKyBmO1xuICAgIH07XG4gICAgc3dpdGNoICh0KSB7XG4gICAgICAvLyAzXG4gICAgICBjYXNlIFwiZVwiOlxuICAgICAgY2FzZSBcImVlXCI6XG4gICAgICAgIHJldHVybiBwKHkodC5sZW5ndGgsIGUpLCBpKTtcbiAgICAgIC8vIDNyZFxuICAgICAgY2FzZSBcImVvXCI6XG4gICAgICAgIHJldHVybiBwKFxuICAgICAgICAgIHIub3JkaW5hbE51bWJlcihlLCB7XG4gICAgICAgICAgICB1bml0OiBcImRheVwiXG4gICAgICAgICAgfSksXG4gICAgICAgICAgaVxuICAgICAgICApO1xuICAgICAgLy8gVHVlXG4gICAgICBjYXNlIFwiZWVlXCI6XG4gICAgICAgIHJldHVybiByLmRheShlLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIlxuICAgICAgICB9KSB8fCByLmRheShlLCB7IHdpZHRoOiBcInNob3J0XCIsIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiIH0pIHx8IHIuZGF5KGUsIHsgd2lkdGg6IFwibmFycm93XCIsIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiIH0pO1xuICAgICAgLy8gVFxuICAgICAgY2FzZSBcImVlZWVlXCI6XG4gICAgICAgIHJldHVybiByLmRheShlLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCJcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuICAgICAgY2FzZSBcImVlZWVlZVwiOlxuICAgICAgICByZXR1cm4gci5kYXkoZSwgeyB3aWR0aDogXCJzaG9ydFwiLCBjb250ZXh0OiBcImZvcm1hdHRpbmdcIiB9KSB8fCByLmRheShlLCB7IHdpZHRoOiBcIm5hcnJvd1wiLCBjb250ZXh0OiBcImZvcm1hdHRpbmdcIiB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcbiAgICAgIGNhc2UgXCJlZWVlXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gci5kYXkoZSwgeyB3aWR0aDogXCJ3aWRlXCIsIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiIH0pIHx8IHIuZGF5KGUsIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiXG4gICAgICAgIH0pIHx8IHIuZGF5KGUsIHsgd2lkdGg6IFwic2hvcnRcIiwgY29udGV4dDogXCJmb3JtYXR0aW5nXCIgfSkgfHwgci5kYXkoZSwgeyB3aWR0aDogXCJuYXJyb3dcIiwgY29udGV4dDogXCJmb3JtYXR0aW5nXCIgfSk7XG4gICAgfVxuICB9XG4gIHZhbGlkYXRlKGUsIHQpIHtcbiAgICByZXR1cm4gdCA+PSAwICYmIHQgPD0gNjtcbiAgfVxuICBzZXQoZSwgdCwgciwgYSkge1xuICAgIHJldHVybiBlID0gQihlLCByLCBhKSwgZS5zZXRIb3VycygwLCAwLCAwLCAwKSwgZTtcbiAgfVxufVxuY2xhc3MgUHQgZXh0ZW5kcyBkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICBvKHRoaXMsIFwicHJpb3JpdHlcIiwgOTApO1xuICAgIG8odGhpcywgXCJpbmNvbXBhdGlibGVUb2tlbnNcIiwgW1xuICAgICAgXCJ5XCIsXG4gICAgICBcIlJcIixcbiAgICAgIFwidVwiLFxuICAgICAgXCJxXCIsXG4gICAgICBcIlFcIixcbiAgICAgIFwiTVwiLFxuICAgICAgXCJMXCIsXG4gICAgICBcIklcIixcbiAgICAgIFwiZFwiLFxuICAgICAgXCJEXCIsXG4gICAgICBcIkVcIixcbiAgICAgIFwiaVwiLFxuICAgICAgXCJlXCIsXG4gICAgICBcInRcIixcbiAgICAgIFwiVFwiXG4gICAgXSk7XG4gIH1cbiAgcGFyc2UoZSwgdCwgciwgYSkge1xuICAgIGNvbnN0IGkgPSAodSkgPT4ge1xuICAgICAgY29uc3QgZiA9IE1hdGguZmxvb3IoKHUgLSAxKSAvIDcpICogNztcbiAgICAgIHJldHVybiAodSArIGEud2Vla1N0YXJ0c09uICsgNikgJSA3ICsgZjtcbiAgICB9O1xuICAgIHN3aXRjaCAodCkge1xuICAgICAgLy8gM1xuICAgICAgY2FzZSBcImNcIjpcbiAgICAgIGNhc2UgXCJjY1wiOlxuICAgICAgICByZXR1cm4gcCh5KHQubGVuZ3RoLCBlKSwgaSk7XG4gICAgICAvLyAzcmRcbiAgICAgIGNhc2UgXCJjb1wiOlxuICAgICAgICByZXR1cm4gcChcbiAgICAgICAgICByLm9yZGluYWxOdW1iZXIoZSwge1xuICAgICAgICAgICAgdW5pdDogXCJkYXlcIlxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGlcbiAgICAgICAgKTtcbiAgICAgIC8vIFR1ZVxuICAgICAgY2FzZSBcImNjY1wiOlxuICAgICAgICByZXR1cm4gci5kYXkoZSwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCJcbiAgICAgICAgfSkgfHwgci5kYXkoZSwgeyB3aWR0aDogXCJzaG9ydFwiLCBjb250ZXh0OiBcInN0YW5kYWxvbmVcIiB9KSB8fCByLmRheShlLCB7IHdpZHRoOiBcIm5hcnJvd1wiLCBjb250ZXh0OiBcInN0YW5kYWxvbmVcIiB9KTtcbiAgICAgIC8vIFRcbiAgICAgIGNhc2UgXCJjY2NjY1wiOlxuICAgICAgICByZXR1cm4gci5kYXkoZSwge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcbiAgICAgIGNhc2UgXCJjY2NjY2NcIjpcbiAgICAgICAgcmV0dXJuIHIuZGF5KGUsIHsgd2lkdGg6IFwic2hvcnRcIiwgY29udGV4dDogXCJzdGFuZGFsb25lXCIgfSkgfHwgci5kYXkoZSwgeyB3aWR0aDogXCJuYXJyb3dcIiwgY29udGV4dDogXCJzdGFuZGFsb25lXCIgfSk7XG4gICAgICAvLyBUdWVzZGF5XG4gICAgICBjYXNlIFwiY2NjY1wiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHIuZGF5KGUsIHsgd2lkdGg6IFwid2lkZVwiLCBjb250ZXh0OiBcInN0YW5kYWxvbmVcIiB9KSB8fCByLmRheShlLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIlxuICAgICAgICB9KSB8fCByLmRheShlLCB7IHdpZHRoOiBcInNob3J0XCIsIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiIH0pIHx8IHIuZGF5KGUsIHsgd2lkdGg6IFwibmFycm93XCIsIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiIH0pO1xuICAgIH1cbiAgfVxuICB2YWxpZGF0ZShlLCB0KSB7XG4gICAgcmV0dXJuIHQgPj0gMCAmJiB0IDw9IDY7XG4gIH1cbiAgc2V0KGUsIHQsIHIsIGEpIHtcbiAgICByZXR1cm4gZSA9IEIoZSwgciwgYSksIGUuc2V0SG91cnMoMCwgMCwgMCwgMCksIGU7XG4gIH1cbn1cbmZ1bmN0aW9uIE50KHMsIG4pIHtcbiAgY29uc3QgZSA9IGMocyksIHQgPSBzdChlKSwgciA9IG4gLSB0O1xuICByZXR1cm4gdihlLCByKTtcbn1cbmNsYXNzIEl0IGV4dGVuZHMgZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgbyh0aGlzLCBcInByaW9yaXR5XCIsIDkwKTtcbiAgICBvKHRoaXMsIFwiaW5jb21wYXRpYmxlVG9rZW5zXCIsIFtcbiAgICAgIFwieVwiLFxuICAgICAgXCJZXCIsXG4gICAgICBcInVcIixcbiAgICAgIFwicVwiLFxuICAgICAgXCJRXCIsXG4gICAgICBcIk1cIixcbiAgICAgIFwiTFwiLFxuICAgICAgXCJ3XCIsXG4gICAgICBcImRcIixcbiAgICAgIFwiRFwiLFxuICAgICAgXCJFXCIsXG4gICAgICBcImVcIixcbiAgICAgIFwiY1wiLFxuICAgICAgXCJ0XCIsXG4gICAgICBcIlRcIlxuICAgIF0pO1xuICB9XG4gIHBhcnNlKGUsIHQsIHIpIHtcbiAgICBjb25zdCBhID0gKGkpID0+IGkgPT09IDAgPyA3IDogaTtcbiAgICBzd2l0Y2ggKHQpIHtcbiAgICAgIC8vIDJcbiAgICAgIGNhc2UgXCJpXCI6XG4gICAgICBjYXNlIFwiaWlcIjpcbiAgICAgICAgcmV0dXJuIHkodC5sZW5ndGgsIGUpO1xuICAgICAgLy8gMm5kXG4gICAgICBjYXNlIFwiaW9cIjpcbiAgICAgICAgcmV0dXJuIHIub3JkaW5hbE51bWJlcihlLCB7IHVuaXQ6IFwiZGF5XCIgfSk7XG4gICAgICAvLyBUdWVcbiAgICAgIGNhc2UgXCJpaWlcIjpcbiAgICAgICAgcmV0dXJuIHAoXG4gICAgICAgICAgci5kYXkoZSwge1xuICAgICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiXG4gICAgICAgICAgfSkgfHwgci5kYXkoZSwge1xuICAgICAgICAgICAgd2lkdGg6IFwic2hvcnRcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiXG4gICAgICAgICAgfSkgfHwgci5kYXkoZSwge1xuICAgICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIlxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGFcbiAgICAgICAgKTtcbiAgICAgIC8vIFRcbiAgICAgIGNhc2UgXCJpaWlpaVwiOlxuICAgICAgICByZXR1cm4gcChcbiAgICAgICAgICByLmRheShlLCB7XG4gICAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiXG4gICAgICAgICAgfSksXG4gICAgICAgICAgYVxuICAgICAgICApO1xuICAgICAgLy8gVHVcbiAgICAgIGNhc2UgXCJpaWlpaWlcIjpcbiAgICAgICAgcmV0dXJuIHAoXG4gICAgICAgICAgci5kYXkoZSwge1xuICAgICAgICAgICAgd2lkdGg6IFwic2hvcnRcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiXG4gICAgICAgICAgfSkgfHwgci5kYXkoZSwge1xuICAgICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIlxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGFcbiAgICAgICAgKTtcbiAgICAgIC8vIFR1ZXNkYXlcbiAgICAgIGNhc2UgXCJpaWlpXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gcChcbiAgICAgICAgICByLmRheShlLCB7XG4gICAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIlxuICAgICAgICAgIH0pIHx8IHIuZGF5KGUsIHtcbiAgICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIlxuICAgICAgICAgIH0pIHx8IHIuZGF5KGUsIHtcbiAgICAgICAgICAgIHdpZHRoOiBcInNob3J0XCIsXG4gICAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIlxuICAgICAgICAgIH0pIHx8IHIuZGF5KGUsIHtcbiAgICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCJcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBhXG4gICAgICAgICk7XG4gICAgfVxuICB9XG4gIHZhbGlkYXRlKGUsIHQpIHtcbiAgICByZXR1cm4gdCA+PSAxICYmIHQgPD0gNztcbiAgfVxuICBzZXQoZSwgdCwgcikge1xuICAgIHJldHVybiBlID0gTnQoZSwgciksIGUuc2V0SG91cnMoMCwgMCwgMCwgMCksIGU7XG4gIH1cbn1cbmNsYXNzIEh0IGV4dGVuZHMgZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgbyh0aGlzLCBcInByaW9yaXR5XCIsIDgwKTtcbiAgICBvKHRoaXMsIFwiaW5jb21wYXRpYmxlVG9rZW5zXCIsIFtcImJcIiwgXCJCXCIsIFwiSFwiLCBcImtcIiwgXCJ0XCIsIFwiVFwiXSk7XG4gIH1cbiAgcGFyc2UoZSwgdCwgcikge1xuICAgIHN3aXRjaCAodCkge1xuICAgICAgY2FzZSBcImFcIjpcbiAgICAgIGNhc2UgXCJhYVwiOlxuICAgICAgY2FzZSBcImFhYVwiOlxuICAgICAgICByZXR1cm4gci5kYXlQZXJpb2QoZSwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCJcbiAgICAgICAgfSkgfHwgci5kYXlQZXJpb2QoZSwge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSBcImFhYWFhXCI6XG4gICAgICAgIHJldHVybiByLmRheVBlcmlvZChlLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCJcbiAgICAgICAgfSk7XG4gICAgICBjYXNlIFwiYWFhYVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHIuZGF5UGVyaW9kKGUsIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCJcbiAgICAgICAgfSkgfHwgci5kYXlQZXJpb2QoZSwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCJcbiAgICAgICAgfSkgfHwgci5kYXlQZXJpb2QoZSwge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBzZXQoZSwgdCwgcikge1xuICAgIHJldHVybiBlLnNldEhvdXJzKEEociksIDAsIDAsIDApLCBlO1xuICB9XG59XG5jbGFzcyBxdCBleHRlbmRzIGQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgIG8odGhpcywgXCJwcmlvcml0eVwiLCA4MCk7XG4gICAgbyh0aGlzLCBcImluY29tcGF0aWJsZVRva2Vuc1wiLCBbXCJhXCIsIFwiQlwiLCBcIkhcIiwgXCJrXCIsIFwidFwiLCBcIlRcIl0pO1xuICB9XG4gIHBhcnNlKGUsIHQsIHIpIHtcbiAgICBzd2l0Y2ggKHQpIHtcbiAgICAgIGNhc2UgXCJiXCI6XG4gICAgICBjYXNlIFwiYmJcIjpcbiAgICAgIGNhc2UgXCJiYmJcIjpcbiAgICAgICAgcmV0dXJuIHIuZGF5UGVyaW9kKGUsIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiXG4gICAgICAgIH0pIHx8IHIuZGF5UGVyaW9kKGUsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIlxuICAgICAgICB9KTtcbiAgICAgIGNhc2UgXCJiYmJiYlwiOlxuICAgICAgICByZXR1cm4gci5kYXlQZXJpb2QoZSwge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSBcImJiYmJcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiByLmRheVBlcmlvZChlLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiXG4gICAgICAgIH0pIHx8IHIuZGF5UGVyaW9kKGUsIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiXG4gICAgICAgIH0pIHx8IHIuZGF5UGVyaW9kKGUsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIlxuICAgICAgICB9KTtcbiAgICB9XG4gIH1cbiAgc2V0KGUsIHQsIHIpIHtcbiAgICByZXR1cm4gZS5zZXRIb3VycyhBKHIpLCAwLCAwLCAwKSwgZTtcbiAgfVxufVxuY2xhc3MgRXQgZXh0ZW5kcyBkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICBvKHRoaXMsIFwicHJpb3JpdHlcIiwgODApO1xuICAgIG8odGhpcywgXCJpbmNvbXBhdGlibGVUb2tlbnNcIiwgW1wiYVwiLCBcImJcIiwgXCJ0XCIsIFwiVFwiXSk7XG4gIH1cbiAgcGFyc2UoZSwgdCwgcikge1xuICAgIHN3aXRjaCAodCkge1xuICAgICAgY2FzZSBcIkJcIjpcbiAgICAgIGNhc2UgXCJCQlwiOlxuICAgICAgY2FzZSBcIkJCQlwiOlxuICAgICAgICByZXR1cm4gci5kYXlQZXJpb2QoZSwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCJcbiAgICAgICAgfSkgfHwgci5kYXlQZXJpb2QoZSwge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSBcIkJCQkJCXCI6XG4gICAgICAgIHJldHVybiByLmRheVBlcmlvZChlLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCJcbiAgICAgICAgfSk7XG4gICAgICBjYXNlIFwiQkJCQlwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHIuZGF5UGVyaW9kKGUsIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCJcbiAgICAgICAgfSkgfHwgci5kYXlQZXJpb2QoZSwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCJcbiAgICAgICAgfSkgfHwgci5kYXlQZXJpb2QoZSwge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBzZXQoZSwgdCwgcikge1xuICAgIHJldHVybiBlLnNldEhvdXJzKEEociksIDAsIDAsIDApLCBlO1xuICB9XG59XG5jbGFzcyBMdCBleHRlbmRzIGQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgIG8odGhpcywgXCJwcmlvcml0eVwiLCA3MCk7XG4gICAgbyh0aGlzLCBcImluY29tcGF0aWJsZVRva2Vuc1wiLCBbXCJIXCIsIFwiS1wiLCBcImtcIiwgXCJ0XCIsIFwiVFwiXSk7XG4gIH1cbiAgcGFyc2UoZSwgdCwgcikge1xuICAgIHN3aXRjaCAodCkge1xuICAgICAgY2FzZSBcImhcIjpcbiAgICAgICAgcmV0dXJuIHcoYi5ob3VyMTJoLCBlKTtcbiAgICAgIGNhc2UgXCJob1wiOlxuICAgICAgICByZXR1cm4gci5vcmRpbmFsTnVtYmVyKGUsIHsgdW5pdDogXCJob3VyXCIgfSk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4geSh0Lmxlbmd0aCwgZSk7XG4gICAgfVxuICB9XG4gIHZhbGlkYXRlKGUsIHQpIHtcbiAgICByZXR1cm4gdCA+PSAxICYmIHQgPD0gMTI7XG4gIH1cbiAgc2V0KGUsIHQsIHIpIHtcbiAgICBjb25zdCBhID0gZS5nZXRIb3VycygpID49IDEyO1xuICAgIHJldHVybiBhICYmIHIgPCAxMiA/IGUuc2V0SG91cnMociArIDEyLCAwLCAwLCAwKSA6ICFhICYmIHIgPT09IDEyID8gZS5zZXRIb3VycygwLCAwLCAwLCAwKSA6IGUuc2V0SG91cnMociwgMCwgMCwgMCksIGU7XG4gIH1cbn1cbmNsYXNzIEN0IGV4dGVuZHMgZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgbyh0aGlzLCBcInByaW9yaXR5XCIsIDcwKTtcbiAgICBvKHRoaXMsIFwiaW5jb21wYXRpYmxlVG9rZW5zXCIsIFtcImFcIiwgXCJiXCIsIFwiaFwiLCBcIktcIiwgXCJrXCIsIFwidFwiLCBcIlRcIl0pO1xuICB9XG4gIHBhcnNlKGUsIHQsIHIpIHtcbiAgICBzd2l0Y2ggKHQpIHtcbiAgICAgIGNhc2UgXCJIXCI6XG4gICAgICAgIHJldHVybiB3KGIuaG91cjIzaCwgZSk7XG4gICAgICBjYXNlIFwiSG9cIjpcbiAgICAgICAgcmV0dXJuIHIub3JkaW5hbE51bWJlcihlLCB7IHVuaXQ6IFwiaG91clwiIH0pO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHkodC5sZW5ndGgsIGUpO1xuICAgIH1cbiAgfVxuICB2YWxpZGF0ZShlLCB0KSB7XG4gICAgcmV0dXJuIHQgPj0gMCAmJiB0IDw9IDIzO1xuICB9XG4gIHNldChlLCB0LCByKSB7XG4gICAgcmV0dXJuIGUuc2V0SG91cnMociwgMCwgMCwgMCksIGU7XG4gIH1cbn1cbmNsYXNzIEZ0IGV4dGVuZHMgZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgbyh0aGlzLCBcInByaW9yaXR5XCIsIDcwKTtcbiAgICBvKHRoaXMsIFwiaW5jb21wYXRpYmxlVG9rZW5zXCIsIFtcImhcIiwgXCJIXCIsIFwia1wiLCBcInRcIiwgXCJUXCJdKTtcbiAgfVxuICBwYXJzZShlLCB0LCByKSB7XG4gICAgc3dpdGNoICh0KSB7XG4gICAgICBjYXNlIFwiS1wiOlxuICAgICAgICByZXR1cm4gdyhiLmhvdXIxMWgsIGUpO1xuICAgICAgY2FzZSBcIktvXCI6XG4gICAgICAgIHJldHVybiByLm9yZGluYWxOdW1iZXIoZSwgeyB1bml0OiBcImhvdXJcIiB9KTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB5KHQubGVuZ3RoLCBlKTtcbiAgICB9XG4gIH1cbiAgdmFsaWRhdGUoZSwgdCkge1xuICAgIHJldHVybiB0ID49IDAgJiYgdCA8PSAxMTtcbiAgfVxuICBzZXQoZSwgdCwgcikge1xuICAgIHJldHVybiBlLmdldEhvdXJzKCkgPj0gMTIgJiYgciA8IDEyID8gZS5zZXRIb3VycyhyICsgMTIsIDAsIDAsIDApIDogZS5zZXRIb3VycyhyLCAwLCAwLCAwKSwgZTtcbiAgfVxufVxuY2xhc3MgUXQgZXh0ZW5kcyBkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICBvKHRoaXMsIFwicHJpb3JpdHlcIiwgNzApO1xuICAgIG8odGhpcywgXCJpbmNvbXBhdGlibGVUb2tlbnNcIiwgW1wiYVwiLCBcImJcIiwgXCJoXCIsIFwiSFwiLCBcIktcIiwgXCJ0XCIsIFwiVFwiXSk7XG4gIH1cbiAgcGFyc2UoZSwgdCwgcikge1xuICAgIHN3aXRjaCAodCkge1xuICAgICAgY2FzZSBcImtcIjpcbiAgICAgICAgcmV0dXJuIHcoYi5ob3VyMjRoLCBlKTtcbiAgICAgIGNhc2UgXCJrb1wiOlxuICAgICAgICByZXR1cm4gci5vcmRpbmFsTnVtYmVyKGUsIHsgdW5pdDogXCJob3VyXCIgfSk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4geSh0Lmxlbmd0aCwgZSk7XG4gICAgfVxuICB9XG4gIHZhbGlkYXRlKGUsIHQpIHtcbiAgICByZXR1cm4gdCA+PSAxICYmIHQgPD0gMjQ7XG4gIH1cbiAgc2V0KGUsIHQsIHIpIHtcbiAgICBjb25zdCBhID0gciA8PSAyNCA/IHIgJSAyNCA6IHI7XG4gICAgcmV0dXJuIGUuc2V0SG91cnMoYSwgMCwgMCwgMCksIGU7XG4gIH1cbn1cbmNsYXNzIFJ0IGV4dGVuZHMgZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgbyh0aGlzLCBcInByaW9yaXR5XCIsIDYwKTtcbiAgICBvKHRoaXMsIFwiaW5jb21wYXRpYmxlVG9rZW5zXCIsIFtcInRcIiwgXCJUXCJdKTtcbiAgfVxuICBwYXJzZShlLCB0LCByKSB7XG4gICAgc3dpdGNoICh0KSB7XG4gICAgICBjYXNlIFwibVwiOlxuICAgICAgICByZXR1cm4gdyhiLm1pbnV0ZSwgZSk7XG4gICAgICBjYXNlIFwibW9cIjpcbiAgICAgICAgcmV0dXJuIHIub3JkaW5hbE51bWJlcihlLCB7IHVuaXQ6IFwibWludXRlXCIgfSk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4geSh0Lmxlbmd0aCwgZSk7XG4gICAgfVxuICB9XG4gIHZhbGlkYXRlKGUsIHQpIHtcbiAgICByZXR1cm4gdCA+PSAwICYmIHQgPD0gNTk7XG4gIH1cbiAgc2V0KGUsIHQsIHIpIHtcbiAgICByZXR1cm4gZS5zZXRNaW51dGVzKHIsIDAsIDApLCBlO1xuICB9XG59XG5jbGFzcyBXdCBleHRlbmRzIGQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgIG8odGhpcywgXCJwcmlvcml0eVwiLCA1MCk7XG4gICAgbyh0aGlzLCBcImluY29tcGF0aWJsZVRva2Vuc1wiLCBbXCJ0XCIsIFwiVFwiXSk7XG4gIH1cbiAgcGFyc2UoZSwgdCwgcikge1xuICAgIHN3aXRjaCAodCkge1xuICAgICAgY2FzZSBcInNcIjpcbiAgICAgICAgcmV0dXJuIHcoYi5zZWNvbmQsIGUpO1xuICAgICAgY2FzZSBcInNvXCI6XG4gICAgICAgIHJldHVybiByLm9yZGluYWxOdW1iZXIoZSwgeyB1bml0OiBcInNlY29uZFwiIH0pO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHkodC5sZW5ndGgsIGUpO1xuICAgIH1cbiAgfVxuICB2YWxpZGF0ZShlLCB0KSB7XG4gICAgcmV0dXJuIHQgPj0gMCAmJiB0IDw9IDU5O1xuICB9XG4gIHNldChlLCB0LCByKSB7XG4gICAgcmV0dXJuIGUuc2V0U2Vjb25kcyhyLCAwKSwgZTtcbiAgfVxufVxuY2xhc3MgdnQgZXh0ZW5kcyBkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICBvKHRoaXMsIFwicHJpb3JpdHlcIiwgMzApO1xuICAgIG8odGhpcywgXCJpbmNvbXBhdGlibGVUb2tlbnNcIiwgW1widFwiLCBcIlRcIl0pO1xuICB9XG4gIHBhcnNlKGUsIHQpIHtcbiAgICBjb25zdCByID0gKGEpID0+IE1hdGgudHJ1bmMoYSAqIE1hdGgucG93KDEwLCAtdC5sZW5ndGggKyAzKSk7XG4gICAgcmV0dXJuIHAoeSh0Lmxlbmd0aCwgZSksIHIpO1xuICB9XG4gIHNldChlLCB0LCByKSB7XG4gICAgcmV0dXJuIGUuc2V0TWlsbGlzZWNvbmRzKHIpLCBlO1xuICB9XG59XG5jbGFzcyBBdCBleHRlbmRzIGQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgIG8odGhpcywgXCJwcmlvcml0eVwiLCAxMCk7XG4gICAgbyh0aGlzLCBcImluY29tcGF0aWJsZVRva2Vuc1wiLCBbXCJ0XCIsIFwiVFwiLCBcInhcIl0pO1xuICB9XG4gIHBhcnNlKGUsIHQpIHtcbiAgICBzd2l0Y2ggKHQpIHtcbiAgICAgIGNhc2UgXCJYXCI6XG4gICAgICAgIHJldHVybiBUKFxuICAgICAgICAgIEQuYmFzaWNPcHRpb25hbE1pbnV0ZXMsXG4gICAgICAgICAgZVxuICAgICAgICApO1xuICAgICAgY2FzZSBcIlhYXCI6XG4gICAgICAgIHJldHVybiBUKEQuYmFzaWMsIGUpO1xuICAgICAgY2FzZSBcIlhYWFhcIjpcbiAgICAgICAgcmV0dXJuIFQoXG4gICAgICAgICAgRC5iYXNpY09wdGlvbmFsU2Vjb25kcyxcbiAgICAgICAgICBlXG4gICAgICAgICk7XG4gICAgICBjYXNlIFwiWFhYWFhcIjpcbiAgICAgICAgcmV0dXJuIFQoXG4gICAgICAgICAgRC5leHRlbmRlZE9wdGlvbmFsU2Vjb25kcyxcbiAgICAgICAgICBlXG4gICAgICAgICk7XG4gICAgICBjYXNlIFwiWFhYXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gVChELmV4dGVuZGVkLCBlKTtcbiAgICB9XG4gIH1cbiAgc2V0KGUsIHQsIHIpIHtcbiAgICByZXR1cm4gdC50aW1lc3RhbXBJc1NldCA/IGUgOiBnKFxuICAgICAgZSxcbiAgICAgIGUuZ2V0VGltZSgpIC0gc2UoZSkgLSByXG4gICAgKTtcbiAgfVxufVxuY2xhc3MgQnQgZXh0ZW5kcyBkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICBvKHRoaXMsIFwicHJpb3JpdHlcIiwgMTApO1xuICAgIG8odGhpcywgXCJpbmNvbXBhdGlibGVUb2tlbnNcIiwgW1widFwiLCBcIlRcIiwgXCJYXCJdKTtcbiAgfVxuICBwYXJzZShlLCB0KSB7XG4gICAgc3dpdGNoICh0KSB7XG4gICAgICBjYXNlIFwieFwiOlxuICAgICAgICByZXR1cm4gVChcbiAgICAgICAgICBELmJhc2ljT3B0aW9uYWxNaW51dGVzLFxuICAgICAgICAgIGVcbiAgICAgICAgKTtcbiAgICAgIGNhc2UgXCJ4eFwiOlxuICAgICAgICByZXR1cm4gVChELmJhc2ljLCBlKTtcbiAgICAgIGNhc2UgXCJ4eHh4XCI6XG4gICAgICAgIHJldHVybiBUKFxuICAgICAgICAgIEQuYmFzaWNPcHRpb25hbFNlY29uZHMsXG4gICAgICAgICAgZVxuICAgICAgICApO1xuICAgICAgY2FzZSBcInh4eHh4XCI6XG4gICAgICAgIHJldHVybiBUKFxuICAgICAgICAgIEQuZXh0ZW5kZWRPcHRpb25hbFNlY29uZHMsXG4gICAgICAgICAgZVxuICAgICAgICApO1xuICAgICAgY2FzZSBcInh4eFwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIFQoRC5leHRlbmRlZCwgZSk7XG4gICAgfVxuICB9XG4gIHNldChlLCB0LCByKSB7XG4gICAgcmV0dXJuIHQudGltZXN0YW1wSXNTZXQgPyBlIDogZyhcbiAgICAgIGUsXG4gICAgICBlLmdldFRpbWUoKSAtIHNlKGUpIC0gclxuICAgICk7XG4gIH1cbn1cbmNsYXNzIHp0IGV4dGVuZHMgZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgbyh0aGlzLCBcInByaW9yaXR5XCIsIDQwKTtcbiAgICBvKHRoaXMsIFwiaW5jb21wYXRpYmxlVG9rZW5zXCIsIFwiKlwiKTtcbiAgfVxuICBwYXJzZShlKSB7XG4gICAgcmV0dXJuIGxlKGUpO1xuICB9XG4gIHNldChlLCB0LCByKSB7XG4gICAgcmV0dXJuIFtnKGUsIHIgKiAxZTMpLCB7IHRpbWVzdGFtcElzU2V0OiAhMCB9XTtcbiAgfVxufVxuY2xhc3MgR3QgZXh0ZW5kcyBkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICBvKHRoaXMsIFwicHJpb3JpdHlcIiwgMjApO1xuICAgIG8odGhpcywgXCJpbmNvbXBhdGlibGVUb2tlbnNcIiwgXCIqXCIpO1xuICB9XG4gIHBhcnNlKGUpIHtcbiAgICByZXR1cm4gbGUoZSk7XG4gIH1cbiAgc2V0KGUsIHQsIHIpIHtcbiAgICByZXR1cm4gW2coZSwgciksIHsgdGltZXN0YW1wSXNTZXQ6ICEwIH1dO1xuICB9XG59XG5jb25zdCBYdCA9IHtcbiAgRzogbmV3IHV0KCksXG4gIHk6IG5ldyBsdCgpLFxuICBZOiBuZXcgZHQoKSxcbiAgUjogbmV3IGZ0KCksXG4gIHU6IG5ldyB3dCgpLFxuICBROiBuZXcgaHQoKSxcbiAgcTogbmV3IHl0KCksXG4gIE06IG5ldyBidCgpLFxuICBMOiBuZXcgcHQoKSxcbiAgdzogbmV3IGd0KCksXG4gIEk6IG5ldyBEdCgpLFxuICBkOiBuZXcga3QoKSxcbiAgRDogbmV3IF90KCksXG4gIEU6IG5ldyBPdCgpLFxuICBlOiBuZXcgWXQoKSxcbiAgYzogbmV3IFB0KCksXG4gIGk6IG5ldyBJdCgpLFxuICBhOiBuZXcgSHQoKSxcbiAgYjogbmV3IHF0KCksXG4gIEI6IG5ldyBFdCgpLFxuICBoOiBuZXcgTHQoKSxcbiAgSDogbmV3IEN0KCksXG4gIEs6IG5ldyBGdCgpLFxuICBrOiBuZXcgUXQoKSxcbiAgbTogbmV3IFJ0KCksXG4gIHM6IG5ldyBXdCgpLFxuICBTOiBuZXcgdnQoKSxcbiAgWDogbmV3IEF0KCksXG4gIHg6IG5ldyBCdCgpLFxuICB0OiBuZXcgenQoKSxcbiAgVDogbmV3IEd0KClcbn0sIFV0ID0gL1t5WVFxTUx3SWREZWNpaEhLa21zXW98KFxcdylcXDEqfCcnfCcoJyd8W14nXSkrKCd8JCl8Li9nLCBadCA9IC9QK3ArfFArfHArfCcnfCcoJyd8W14nXSkrKCd8JCl8Li9nLCAkdCA9IC9eJyhbXl0qPyknPyQvLCBLdCA9IC8nJy9nLCBWdCA9IC9cXFMvLCBqdCA9IC9bYS16QS1aXS87XG5mdW5jdGlvbiBKdChzLCBuLCBlLCB0KSB7XG4gIHZhciB6LCBHLCBYLCBVLCBaLCAkLCBLLCBWO1xuICBjb25zdCByID0gbnQoKSwgYSA9ICh0ID09IG51bGwgPyB2b2lkIDAgOiB0LmxvY2FsZSkgPz8gci5sb2NhbGUgPz8ga2UsIGkgPSAodCA9PSBudWxsID8gdm9pZCAwIDogdC5maXJzdFdlZWtDb250YWluc0RhdGUpID8/ICgoRyA9ICh6ID0gdCA9PSBudWxsID8gdm9pZCAwIDogdC5sb2NhbGUpID09IG51bGwgPyB2b2lkIDAgOiB6Lm9wdGlvbnMpID09IG51bGwgPyB2b2lkIDAgOiBHLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgPz8gci5maXJzdFdlZWtDb250YWluc0RhdGUgPz8gKChVID0gKFggPSByLmxvY2FsZSkgPT0gbnVsbCA/IHZvaWQgMCA6IFgub3B0aW9ucykgPT0gbnVsbCA/IHZvaWQgMCA6IFUuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSA/PyAxLCB1ID0gKHQgPT0gbnVsbCA/IHZvaWQgMCA6IHQud2Vla1N0YXJ0c09uKSA/PyAoKCQgPSAoWiA9IHQgPT0gbnVsbCA/IHZvaWQgMCA6IHQubG9jYWxlKSA9PSBudWxsID8gdm9pZCAwIDogWi5vcHRpb25zKSA9PSBudWxsID8gdm9pZCAwIDogJC53ZWVrU3RhcnRzT24pID8/IHIud2Vla1N0YXJ0c09uID8/ICgoViA9IChLID0gci5sb2NhbGUpID09IG51bGwgPyB2b2lkIDAgOiBLLm9wdGlvbnMpID09IG51bGwgPyB2b2lkIDAgOiBWLndlZWtTdGFydHNPbikgPz8gMDtcbiAgaWYgKG4gPT09IFwiXCIpXG4gICAgcmV0dXJuIHMgPT09IFwiXCIgPyBjKGUpIDogZyhlLCBOYU4pO1xuICBjb25zdCBmID0ge1xuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogaSxcbiAgICB3ZWVrU3RhcnRzT246IHUsXG4gICAgbG9jYWxlOiBhXG4gIH0sIHggPSBbbmV3IGN0KCldLCBDID0gbi5tYXRjaChadCkubWFwKChsKSA9PiB7XG4gICAgY29uc3QgaCA9IGxbMF07XG4gICAgaWYgKGggaW4gZWUpIHtcbiAgICAgIGNvbnN0IG0gPSBlZVtoXTtcbiAgICAgIHJldHVybiBtKGwsIGEuZm9ybWF0TG9uZyk7XG4gICAgfVxuICAgIHJldHVybiBsO1xuICB9KS5qb2luKFwiXCIpLm1hdGNoKFV0KSwgayA9IFtdO1xuICBmb3IgKGxldCBsIG9mIEMpIHtcbiAgICAhKHQgIT0gbnVsbCAmJiB0LnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2VucykgJiYgX2UobCkgJiYgdGUobCwgbiwgcyksICEodCAhPSBudWxsICYmIHQudXNlQWRkaXRpb25hbERheU9mWWVhclRva2VucykgJiYgT2UobCkgJiYgdGUobCwgbiwgcyk7XG4gICAgY29uc3QgaCA9IGxbMF0sIG0gPSBYdFtoXTtcbiAgICBpZiAobSkge1xuICAgICAgY29uc3QgeyBpbmNvbXBhdGlibGVUb2tlbnM6IGogfSA9IG07XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShqKSkge1xuICAgICAgICBjb25zdCBKID0gay5maW5kKFxuICAgICAgICAgIChTKSA9PiBqLmluY2x1ZGVzKFMudG9rZW4pIHx8IFMudG9rZW4gPT09IGhcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKEopXG4gICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGZvcm1hdCBzdHJpbmcgbXVzdG4ndCBjb250YWluIFxcYCR7Si5mdWxsVG9rZW59XFxgIGFuZCBcXGAke2x9XFxgIGF0IHRoZSBzYW1lIHRpbWVgXG4gICAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAobS5pbmNvbXBhdGlibGVUb2tlbnMgPT09IFwiKlwiICYmIGsubGVuZ3RoID4gMClcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXG4gICAgICAgICAgYFRoZSBmb3JtYXQgc3RyaW5nIG11c3RuJ3QgY29udGFpbiBcXGAke2x9XFxgIGFuZCBhbnkgb3RoZXIgdG9rZW4gYXQgdGhlIHNhbWUgdGltZWBcbiAgICAgICAgKTtcbiAgICAgIGsucHVzaCh7IHRva2VuOiBoLCBmdWxsVG9rZW46IGwgfSk7XG4gICAgICBjb25zdCBGID0gbS5ydW4oXG4gICAgICAgIHMsXG4gICAgICAgIGwsXG4gICAgICAgIGEubWF0Y2gsXG4gICAgICAgIGZcbiAgICAgICk7XG4gICAgICBpZiAoIUYpXG4gICAgICAgIHJldHVybiBnKGUsIE5hTik7XG4gICAgICB4LnB1c2goRi5zZXR0ZXIpLCBzID0gRi5yZXN0O1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaC5tYXRjaChqdCkpXG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFxuICAgICAgICAgIFwiRm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyIGBcIiArIGggKyBcImBcIlxuICAgICAgICApO1xuICAgICAgaWYgKGwgPT09IFwiJydcIiA/IGwgPSBcIidcIiA6IGggPT09IFwiJ1wiICYmIChsID0gU3QobCkpLCBzLmluZGV4T2YobCkgPT09IDApXG4gICAgICAgIHMgPSBzLnNsaWNlKGwubGVuZ3RoKTtcbiAgICAgIGVsc2VcbiAgICAgICAgcmV0dXJuIGcoZSwgTmFOKTtcbiAgICB9XG4gIH1cbiAgaWYgKHMubGVuZ3RoID4gMCAmJiBWdC50ZXN0KHMpKVxuICAgIHJldHVybiBnKGUsIE5hTik7XG4gIGNvbnN0IE4gPSB4Lm1hcCgobCkgPT4gbC5wcmlvcml0eSkuc29ydCgobCwgaCkgPT4gaCAtIGwpLmZpbHRlcigobCwgaCwgbSkgPT4gbS5pbmRleE9mKGwpID09PSBoKS5tYXAoXG4gICAgKGwpID0+IHguZmlsdGVyKChoKSA9PiBoLnByaW9yaXR5ID09PSBsKS5zb3J0KChoLCBtKSA9PiBtLnN1YlByaW9yaXR5IC0gaC5zdWJQcmlvcml0eSlcbiAgKS5tYXAoKGwpID0+IGxbMF0pO1xuICBsZXQgTSA9IGMoZSk7XG4gIGlmIChpc05hTihNLmdldFRpbWUoKSkpXG4gICAgcmV0dXJuIGcoZSwgTmFOKTtcbiAgY29uc3QgXyA9IHt9O1xuICBmb3IgKGNvbnN0IGwgb2YgTikge1xuICAgIGlmICghbC52YWxpZGF0ZShNLCBmKSlcbiAgICAgIHJldHVybiBnKGUsIE5hTik7XG4gICAgY29uc3QgaCA9IGwuc2V0KE0sIF8sIGYpO1xuICAgIEFycmF5LmlzQXJyYXkoaCkgPyAoTSA9IGhbMF0sIE9iamVjdC5hc3NpZ24oXywgaFsxXSkpIDogTSA9IGg7XG4gIH1cbiAgcmV0dXJuIGcoZSwgTSk7XG59XG5mdW5jdGlvbiBTdChzKSB7XG4gIHJldHVybiBzLm1hdGNoKCR0KVsxXS5yZXBsYWNlKEt0LCBcIidcIik7XG59XG5mdW5jdGlvbiBlcihzKSB7XG4gIGNvbnN0IG4gPSBjKHMpO1xuICByZXR1cm4gbi5zZXRNaW51dGVzKDAsIDAsIDApLCBuO1xufVxuZnVuY3Rpb24gdHIocykge1xuICBjb25zdCBuID0gYyhzKTtcbiAgcmV0dXJuIG4uc2V0TWlsbGlzZWNvbmRzKDApLCBuO1xufVxuZnVuY3Rpb24gcnIocywgbikge1xuICBjb25zdCBlID0gKG4gPT0gbnVsbCA/IHZvaWQgMCA6IG4uYWRkaXRpb25hbERpZ2l0cykgPz8gMiwgdCA9IG9yKHMpO1xuICBsZXQgcjtcbiAgaWYgKHQuZGF0ZSkge1xuICAgIGNvbnN0IGYgPSBpcih0LmRhdGUsIGUpO1xuICAgIHIgPSBjcihmLnJlc3REYXRlU3RyaW5nLCBmLnllYXIpO1xuICB9XG4gIGlmICghciB8fCBpc05hTihyLmdldFRpbWUoKSkpXG4gICAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBuZXcgRGF0ZShOYU4pO1xuICBjb25zdCBhID0gci5nZXRUaW1lKCk7XG4gIGxldCBpID0gMCwgdTtcbiAgaWYgKHQudGltZSAmJiAoaSA9IHVyKHQudGltZSksIGlzTmFOKGkpKSlcbiAgICByZXR1cm4gLyogQF9fUFVSRV9fICovIG5ldyBEYXRlKE5hTik7XG4gIGlmICh0LnRpbWV6b25lKSB7XG4gICAgaWYgKHUgPSBscih0LnRpbWV6b25lKSwgaXNOYU4odSkpXG4gICAgICByZXR1cm4gLyogQF9fUFVSRV9fICovIG5ldyBEYXRlKE5hTik7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgZiA9IG5ldyBEYXRlKGEgKyBpKSwgeCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgRGF0ZSgwKTtcbiAgICByZXR1cm4geC5zZXRGdWxsWWVhcihcbiAgICAgIGYuZ2V0VVRDRnVsbFllYXIoKSxcbiAgICAgIGYuZ2V0VVRDTW9udGgoKSxcbiAgICAgIGYuZ2V0VVRDRGF0ZSgpXG4gICAgKSwgeC5zZXRIb3VycyhcbiAgICAgIGYuZ2V0VVRDSG91cnMoKSxcbiAgICAgIGYuZ2V0VVRDTWludXRlcygpLFxuICAgICAgZi5nZXRVVENTZWNvbmRzKCksXG4gICAgICBmLmdldFVUQ01pbGxpc2Vjb25kcygpXG4gICAgKSwgeDtcbiAgfVxuICByZXR1cm4gbmV3IERhdGUoYSArIGkgKyB1KTtcbn1cbmNvbnN0IEkgPSB7XG4gIGRhdGVUaW1lRGVsaW1pdGVyOiAvW1QgXS8sXG4gIHRpbWVab25lRGVsaW1pdGVyOiAvW1ogXS9pLFxuICB0aW1lem9uZTogLyhbWistXS4qKSQvXG59LCBuciA9IC9eLT8oPzooXFxkezN9KXwoXFxkezJ9KSg/Oi0/KFxcZHsyfSkpP3xXKFxcZHsyfSkoPzotPyhcXGR7MX0pKT98KSQvLCBzciA9IC9eKFxcZHsyfSg/OlsuLF1cXGQqKT8pKD86Oj8oXFxkezJ9KD86Wy4sXVxcZCopPykpPyg/Ojo/KFxcZHsyfSg/OlsuLF1cXGQqKT8pKT8kLywgYXIgPSAvXihbKy1dKShcXGR7Mn0pKD86Oj8oXFxkezJ9KSk/JC87XG5mdW5jdGlvbiBvcihzKSB7XG4gIGNvbnN0IG4gPSB7fSwgZSA9IHMuc3BsaXQoSS5kYXRlVGltZURlbGltaXRlcik7XG4gIGxldCB0O1xuICBpZiAoZS5sZW5ndGggPiAyKVxuICAgIHJldHVybiBuO1xuICBpZiAoLzovLnRlc3QoZVswXSkgPyB0ID0gZVswXSA6IChuLmRhdGUgPSBlWzBdLCB0ID0gZVsxXSwgSS50aW1lWm9uZURlbGltaXRlci50ZXN0KG4uZGF0ZSkgJiYgKG4uZGF0ZSA9IHMuc3BsaXQoSS50aW1lWm9uZURlbGltaXRlcilbMF0sIHQgPSBzLnN1YnN0cihcbiAgICBuLmRhdGUubGVuZ3RoLFxuICAgIHMubGVuZ3RoXG4gICkpKSwgdCkge1xuICAgIGNvbnN0IHIgPSBJLnRpbWV6b25lLmV4ZWModCk7XG4gICAgciA/IChuLnRpbWUgPSB0LnJlcGxhY2UoclsxXSwgXCJcIiksIG4udGltZXpvbmUgPSByWzFdKSA6IG4udGltZSA9IHQ7XG4gIH1cbiAgcmV0dXJuIG47XG59XG5mdW5jdGlvbiBpcihzLCBuKSB7XG4gIGNvbnN0IGUgPSBuZXcgUmVnRXhwKFxuICAgIFwiXig/OihcXFxcZHs0fXxbKy1dXFxcXGR7XCIgKyAoNCArIG4pICsgXCJ9KXwoXFxcXGR7Mn18WystXVxcXFxke1wiICsgKDIgKyBuKSArIFwifSkkKVwiXG4gICksIHQgPSBzLm1hdGNoKGUpO1xuICBpZiAoIXQpIHJldHVybiB7IHllYXI6IE5hTiwgcmVzdERhdGVTdHJpbmc6IFwiXCIgfTtcbiAgY29uc3QgciA9IHRbMV0gPyBwYXJzZUludCh0WzFdKSA6IG51bGwsIGEgPSB0WzJdID8gcGFyc2VJbnQodFsyXSkgOiBudWxsO1xuICByZXR1cm4ge1xuICAgIHllYXI6IGEgPT09IG51bGwgPyByIDogYSAqIDEwMCxcbiAgICByZXN0RGF0ZVN0cmluZzogcy5zbGljZSgodFsxXSB8fCB0WzJdKS5sZW5ndGgpXG4gIH07XG59XG5mdW5jdGlvbiBjcihzLCBuKSB7XG4gIGlmIChuID09PSBudWxsKSByZXR1cm4gLyogQF9fUFVSRV9fICovIG5ldyBEYXRlKE5hTik7XG4gIGNvbnN0IGUgPSBzLm1hdGNoKG5yKTtcbiAgaWYgKCFlKSByZXR1cm4gLyogQF9fUFVSRV9fICovIG5ldyBEYXRlKE5hTik7XG4gIGNvbnN0IHQgPSAhIWVbNF0sIHIgPSBPKGVbMV0pLCBhID0gTyhlWzJdKSAtIDEsIGkgPSBPKGVbM10pLCB1ID0gTyhlWzRdKSwgZiA9IE8oZVs1XSkgLSAxO1xuICBpZiAodClcbiAgICByZXR1cm4geXIobiwgdSwgZikgPyBkcihuLCB1LCBmKSA6IC8qIEBfX1BVUkVfXyAqLyBuZXcgRGF0ZShOYU4pO1xuICB7XG4gICAgY29uc3QgeCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgRGF0ZSgwKTtcbiAgICByZXR1cm4gIXdyKG4sIGEsIGkpIHx8ICFocihuLCByKSA/IC8qIEBfX1BVUkVfXyAqLyBuZXcgRGF0ZShOYU4pIDogKHguc2V0VVRDRnVsbFllYXIobiwgYSwgTWF0aC5tYXgociwgaSkpLCB4KTtcbiAgfVxufVxuZnVuY3Rpb24gTyhzKSB7XG4gIHJldHVybiBzID8gcGFyc2VJbnQocykgOiAxO1xufVxuZnVuY3Rpb24gdXIocykge1xuICBjb25zdCBuID0gcy5tYXRjaChzcik7XG4gIGlmICghbikgcmV0dXJuIE5hTjtcbiAgY29uc3QgZSA9IFEoblsxXSksIHQgPSBRKG5bMl0pLCByID0gUShuWzNdKTtcbiAgcmV0dXJuIGJyKGUsIHQsIHIpID8gZSAqIHEgKyB0ICogRSArIHIgKiAxZTMgOiBOYU47XG59XG5mdW5jdGlvbiBRKHMpIHtcbiAgcmV0dXJuIHMgJiYgcGFyc2VGbG9hdChzLnJlcGxhY2UoXCIsXCIsIFwiLlwiKSkgfHwgMDtcbn1cbmZ1bmN0aW9uIGxyKHMpIHtcbiAgaWYgKHMgPT09IFwiWlwiKSByZXR1cm4gMDtcbiAgY29uc3QgbiA9IHMubWF0Y2goYXIpO1xuICBpZiAoIW4pIHJldHVybiAwO1xuICBjb25zdCBlID0gblsxXSA9PT0gXCIrXCIgPyAtMSA6IDEsIHQgPSBwYXJzZUludChuWzJdKSwgciA9IG5bM10gJiYgcGFyc2VJbnQoblszXSkgfHwgMDtcbiAgcmV0dXJuIHByKHQsIHIpID8gZSAqICh0ICogcSArIHIgKiBFKSA6IE5hTjtcbn1cbmZ1bmN0aW9uIGRyKHMsIG4sIGUpIHtcbiAgY29uc3QgdCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgRGF0ZSgwKTtcbiAgdC5zZXRVVENGdWxsWWVhcihzLCAwLCA0KTtcbiAgY29uc3QgciA9IHQuZ2V0VVRDRGF5KCkgfHwgNywgYSA9IChuIC0gMSkgKiA3ICsgZSArIDEgLSByO1xuICByZXR1cm4gdC5zZXRVVENEYXRlKHQuZ2V0VVRDRGF0ZSgpICsgYSksIHQ7XG59XG5jb25zdCBmciA9IFszMSwgbnVsbCwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzFdO1xuZnVuY3Rpb24gd2Uocykge1xuICByZXR1cm4gcyAlIDQwMCA9PT0gMCB8fCBzICUgNCA9PT0gMCAmJiBzICUgMTAwICE9PSAwO1xufVxuZnVuY3Rpb24gd3IocywgbiwgZSkge1xuICByZXR1cm4gbiA+PSAwICYmIG4gPD0gMTEgJiYgZSA+PSAxICYmIGUgPD0gKGZyW25dIHx8ICh3ZShzKSA/IDI5IDogMjgpKTtcbn1cbmZ1bmN0aW9uIGhyKHMsIG4pIHtcbiAgcmV0dXJuIG4gPj0gMSAmJiBuIDw9ICh3ZShzKSA/IDM2NiA6IDM2NSk7XG59XG5mdW5jdGlvbiB5cihzLCBuLCBlKSB7XG4gIHJldHVybiBuID49IDEgJiYgbiA8PSA1MyAmJiBlID49IDAgJiYgZSA8PSA2O1xufVxuZnVuY3Rpb24gYnIocywgbiwgZSkge1xuICByZXR1cm4gcyA9PT0gMjQgPyBuID09PSAwICYmIGUgPT09IDAgOiBlID49IDAgJiYgZSA8IDYwICYmIG4gPj0gMCAmJiBuIDwgNjAgJiYgcyA+PSAwICYmIHMgPCAyNTtcbn1cbmZ1bmN0aW9uIHByKHMsIG4pIHtcbiAgcmV0dXJuIG4gPj0gMCAmJiBuIDw9IDU5O1xufVxuYmUucmVnaXN0ZXIoLi4ucGUpO1xuLyohXG4gKiBjaGFydGpzLWFkYXB0ZXItZGF0ZS1mbnMgdjMuMC4wXG4gKiBodHRwczovL3d3dy5jaGFydGpzLm9yZ1xuICogKGMpIDIwMjIgY2hhcnRqcy1hZGFwdGVyLWRhdGUtZm5zIENvbnRyaWJ1dG9yc1xuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKi9cbmNvbnN0IHhyID0ge1xuICBkYXRldGltZTogXCJNTU0gZCwgeXl5eSwgaDptbTpzcyBhYWFhXCIsXG4gIG1pbGxpc2Vjb25kOiBcImg6bW06c3MuU1NTIGFhYWFcIixcbiAgc2Vjb25kOiBcImg6bW06c3MgYWFhYVwiLFxuICBtaW51dGU6IFwiaDptbSBhYWFhXCIsXG4gIGhvdXI6IFwiaGFcIixcbiAgZGF5OiBcIk1NTSBkXCIsXG4gIHdlZWs6IFwiUFBcIixcbiAgbW9udGg6IFwiTU1NIHl5eXlcIixcbiAgcXVhcnRlcjogXCJxcXEgLSB5eXl5XCIsXG4gIHllYXI6IFwieXl5eVwiXG59O1xueGUuX2RhdGUub3ZlcnJpZGUoe1xuICBfaWQ6IFwiZGF0ZS1mbnNcIixcbiAgLy8gREVCVUdcbiAgZm9ybWF0czogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHhyO1xuICB9LFxuICBwYXJzZTogZnVuY3Rpb24ocywgbikge1xuICAgIGlmIChzID09PSBudWxsIHx8IHR5cGVvZiBzID4gXCJ1XCIpXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICBjb25zdCBlID0gdHlwZW9mIHM7XG4gICAgcmV0dXJuIGUgPT09IFwibnVtYmVyXCIgfHwgcyBpbnN0YW5jZW9mIERhdGUgPyBzID0gYyhzKSA6IGUgPT09IFwic3RyaW5nXCIgJiYgKHR5cGVvZiBuID09IFwic3RyaW5nXCIgPyBzID0gSnQocywgbiwgLyogQF9fUFVSRV9fICovIG5ldyBEYXRlKCksIHRoaXMub3B0aW9ucykgOiBzID0gcnIocywgdGhpcy5vcHRpb25zKSksIHFlKHMpID8gcy5nZXRUaW1lKCkgOiBudWxsO1xuICB9LFxuICBmb3JtYXQ6IGZ1bmN0aW9uKHMsIG4pIHtcbiAgICByZXR1cm4gSGUocywgbiwgdGhpcy5vcHRpb25zKTtcbiAgfSxcbiAgYWRkOiBmdW5jdGlvbihzLCBuLCBlKSB7XG4gICAgc3dpdGNoIChlKSB7XG4gICAgICBjYXNlIFwibWlsbGlzZWNvbmRcIjpcbiAgICAgICAgcmV0dXJuIEllKHMsIG4pO1xuICAgICAgY2FzZSBcInNlY29uZFwiOlxuICAgICAgICByZXR1cm4gV2Uocywgbik7XG4gICAgICBjYXNlIFwibWludXRlXCI6XG4gICAgICAgIHJldHVybiBOZShzLCBuKTtcbiAgICAgIGNhc2UgXCJob3VyXCI6XG4gICAgICAgIHJldHVybiBSZShzLCBuKTtcbiAgICAgIGNhc2UgXCJkYXlcIjpcbiAgICAgICAgcmV0dXJuIHYocywgbik7XG4gICAgICBjYXNlIFwid2Vla1wiOlxuICAgICAgICByZXR1cm4gUWUocywgbik7XG4gICAgICBjYXNlIFwibW9udGhcIjpcbiAgICAgICAgcmV0dXJuIEZlKHMsIG4pO1xuICAgICAgY2FzZSBcInF1YXJ0ZXJcIjpcbiAgICAgICAgcmV0dXJuIENlKHMsIG4pO1xuICAgICAgY2FzZSBcInllYXJcIjpcbiAgICAgICAgcmV0dXJuIExlKHMsIG4pO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHM7XG4gICAgfVxuICB9LFxuICBkaWZmOiBmdW5jdGlvbihzLCBuLCBlKSB7XG4gICAgc3dpdGNoIChlKSB7XG4gICAgICBjYXNlIFwibWlsbGlzZWNvbmRcIjpcbiAgICAgICAgcmV0dXJuIFcocywgbik7XG4gICAgICBjYXNlIFwic2Vjb25kXCI6XG4gICAgICAgIHJldHVybiBFZShzLCBuKTtcbiAgICAgIGNhc2UgXCJtaW51dGVcIjpcbiAgICAgICAgcmV0dXJuIHplKHMsIG4pO1xuICAgICAgY2FzZSBcImhvdXJcIjpcbiAgICAgICAgcmV0dXJuIEJlKHMsIG4pO1xuICAgICAgY2FzZSBcImRheVwiOlxuICAgICAgICByZXR1cm4gb2Uocywgbik7XG4gICAgICBjYXNlIFwid2Vla1wiOlxuICAgICAgICByZXR1cm4gVWUocywgbik7XG4gICAgICBjYXNlIFwibW9udGhcIjpcbiAgICAgICAgcmV0dXJuIGNlKHMsIG4pO1xuICAgICAgY2FzZSBcInF1YXJ0ZXJcIjpcbiAgICAgICAgcmV0dXJuIFhlKHMsIG4pO1xuICAgICAgY2FzZSBcInllYXJcIjpcbiAgICAgICAgcmV0dXJuIFplKHMsIG4pO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICB9LFxuICBzdGFydE9mOiBmdW5jdGlvbihzLCBuLCBlKSB7XG4gICAgc3dpdGNoIChuKSB7XG4gICAgICBjYXNlIFwic2Vjb25kXCI6XG4gICAgICAgIHJldHVybiB0cihzKTtcbiAgICAgIGNhc2UgXCJtaW51dGVcIjpcbiAgICAgICAgcmV0dXJuICRlKHMpO1xuICAgICAgY2FzZSBcImhvdXJcIjpcbiAgICAgICAgcmV0dXJuIGVyKHMpO1xuICAgICAgY2FzZSBcImRheVwiOlxuICAgICAgICByZXR1cm4gUGUocyk7XG4gICAgICBjYXNlIFwid2Vla1wiOlxuICAgICAgICByZXR1cm4gUChzKTtcbiAgICAgIGNhc2UgXCJpc29XZWVrXCI6XG4gICAgICAgIHJldHVybiBQKHMsIHsgd2Vla1N0YXJ0c09uOiArZSB9KTtcbiAgICAgIGNhc2UgXCJtb250aFwiOlxuICAgICAgICByZXR1cm4gVmUocyk7XG4gICAgICBjYXNlIFwicXVhcnRlclwiOlxuICAgICAgICByZXR1cm4gS2Uocyk7XG4gICAgICBjYXNlIFwieWVhclwiOlxuICAgICAgICByZXR1cm4gWWUocyk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gcztcbiAgICB9XG4gIH0sXG4gIGVuZE9mOiBmdW5jdGlvbihzLCBuKSB7XG4gICAgc3dpdGNoIChuKSB7XG4gICAgICBjYXNlIFwic2Vjb25kXCI6XG4gICAgICAgIHJldHVybiBydChzKTtcbiAgICAgIGNhc2UgXCJtaW51dGVcIjpcbiAgICAgICAgcmV0dXJuIGV0KHMpO1xuICAgICAgY2FzZSBcImhvdXJcIjpcbiAgICAgICAgcmV0dXJuIEplKHMpO1xuICAgICAgY2FzZSBcImRheVwiOlxuICAgICAgICByZXR1cm4gYWUocyk7XG4gICAgICBjYXNlIFwid2Vla1wiOlxuICAgICAgICByZXR1cm4gU2Uocyk7XG4gICAgICBjYXNlIFwibW9udGhcIjpcbiAgICAgICAgcmV0dXJuIGllKHMpO1xuICAgICAgY2FzZSBcInF1YXJ0ZXJcIjpcbiAgICAgICAgcmV0dXJuIHR0KHMpO1xuICAgICAgY2FzZSBcInllYXJcIjpcbiAgICAgICAgcmV0dXJuIGplKHMpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHM7XG4gICAgfVxuICB9XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNoYXJ0anMtYWRhcHRlci1kYXRlLWZucy5lc20tdlJGbW8xTEQuanMubWFwXG4iXSwibmFtZXMiOlsiYyIsImEiLCJnZSIsImkiLCJXIiwicSIsIkwiLCJFIiwiYWUiLCJmIiwiUiIsImciLCJtZSIsIkRlIiwiUCIsIm5lIiwiVGUiLCJNZSIsIk4iLCJ4IiwidiIsInNlIiwieiIsIkciLCJWIiwia2UiLCJsIiwiZWUiLCJtIiwiX2UiLCJ0ZSIsIk9lIiwiSiIsIlMiLCJiZSIsInBlIiwieGUiLCJxZSIsIkhlIiwiSWUiLCJXZSIsIk5lIiwiUmUiLCJRZSIsIkZlIiwiQ2UiLCJMZSIsIkVlIiwiUGUiLCJZZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFJLEtBQUssT0FBTztBQUNoQixJQUFJLEtBQUssQ0FBQyxHQUFHLEdBQUcsTUFBTSxLQUFLLElBQUksR0FBRyxHQUFHLEdBQUcsRUFBRSxZQUFZLE1BQUksY0FBYyxNQUFJLFVBQVUsTUFBSSxPQUFPLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSTtBQUMvRyxJQUFJLElBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxHQUFHLEdBQUcsT0FBTyxLQUFLLFdBQVcsSUFBSSxLQUFLLEdBQUcsQ0FBQztBQU0vRCxTQUFTLEVBQUUsR0FBRyxHQUFHO0FBQ2YsUUFBTSxJQUFJQSxFQUFFLENBQUMsR0FBRyxJQUFJQSxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsUUFBTyxJQUFLLEVBQUUsUUFBTztBQUNy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
