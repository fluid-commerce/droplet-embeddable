import { M as Mt$1, b as Id, u as ul } from './common-Badpcggq-Batnw2Ed-CkZpixXy.js';
import { l, z, i as ie$1, J, T as T$1, y as y$1, o as oe$1, G, x, v, Q as Qt$1, H as Ht$1, q, N as Nt$1, a as Rt$1, b as Gt$1, I as It$1, B as Bt$1, f as et$1, g as N, Y as Y$1, V, Z as Zt$1, t as tt$1 } from './format-TjzP8gQX-Cs7Vwno2-CeUXJh2P.js';
import { d as d$1, c, o as o$1, a } from './differenceInSeconds-D-PK4HfM-Dm2bjhDp-CBEYj0I9.js';
import { i, d as d$2, f, a as a$1 } from './subYears-CyoGbgS0-DIOARaW6-mzW26xd4.js';
import { S, p as p$1, m } from './useTimeseries-CKhM5zgf-Dd4vgjj--FzCeDPUA.js';

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
//# sourceMappingURL=chartjs-adapter-date-fns.esm-vRFmo1LD-Cpw3-dRH-QkYakUVd.js.map
//# sourceMappingURL=chartjs-adapter-date-fns.esm-vRFmo1LD-Cpw3-dRH-QkYakUVd.js.map
