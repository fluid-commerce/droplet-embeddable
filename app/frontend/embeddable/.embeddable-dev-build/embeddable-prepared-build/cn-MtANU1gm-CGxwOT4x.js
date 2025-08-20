import { _ as _e } from "./Spinner-BeNoTciJ-DsMN3-m0.js";
function i(r) {
  var o, n, t = "";
  if (typeof r == "string" || typeof r == "number") t += r;
  else if (typeof r == "object") if (Array.isArray(r)) {
    var f = r.length;
    for (o = 0; o < f; o++) r[o] && (n = i(r[o])) && (t && (t += " "), t += n);
  } else for (n in r) r[n] && (t && (t += " "), t += n);
  return t;
}
function e() {
  for (var r, o, n = 0, t = "", f = arguments.length; n < f; n++) (r = arguments[n]) && (o = i(r)) && (t && (t += " "), t += o);
  return t;
}
function u(...r) {
  return _e(e(r));
}
export {
  u
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY24tTXRBTlUxZ20tQ0d4d09UNHguanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaHJpc3RvcGhlcmNhcmxzb24vZmx1aWQvZHJvcGxldC1lbWJlZGRhYmxlL2FwcC9mcm9udGVuZC9lbWJlZGRhYmxlL25vZGVfbW9kdWxlcy9AZW1iZWRkYWJsZS5jb20vdmFuaWxsYS1jb21wb25lbnRzL2Rpc3QvY24tTXRBTlUxZ20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdCBhcyBhIH0gZnJvbSBcIi4vU3Bpbm5lci1CZU5vVGNpSi5qc1wiO1xuZnVuY3Rpb24gaShyKSB7XG4gIHZhciBvLCBuLCB0ID0gXCJcIjtcbiAgaWYgKHR5cGVvZiByID09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHIgPT0gXCJudW1iZXJcIikgdCArPSByO1xuICBlbHNlIGlmICh0eXBlb2YgciA9PSBcIm9iamVjdFwiKSBpZiAoQXJyYXkuaXNBcnJheShyKSkge1xuICAgIHZhciBmID0gci5sZW5ndGg7XG4gICAgZm9yIChvID0gMDsgbyA8IGY7IG8rKykgcltvXSAmJiAobiA9IGkocltvXSkpICYmICh0ICYmICh0ICs9IFwiIFwiKSwgdCArPSBuKTtcbiAgfSBlbHNlIGZvciAobiBpbiByKSByW25dICYmICh0ICYmICh0ICs9IFwiIFwiKSwgdCArPSBuKTtcbiAgcmV0dXJuIHQ7XG59XG5mdW5jdGlvbiBlKCkge1xuICBmb3IgKHZhciByLCBvLCBuID0gMCwgdCA9IFwiXCIsIGYgPSBhcmd1bWVudHMubGVuZ3RoOyBuIDwgZjsgbisrKSAociA9IGFyZ3VtZW50c1tuXSkgJiYgKG8gPSBpKHIpKSAmJiAodCAmJiAodCArPSBcIiBcIiksIHQgKz0gbyk7XG4gIHJldHVybiB0O1xufVxuZnVuY3Rpb24gdSguLi5yKSB7XG4gIHJldHVybiBhKGUocikpO1xufVxuZXhwb3J0IHtcbiAgdSBhcyBjXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y24tTXRBTlUxZ20uanMubWFwXG4iXSwibmFtZXMiOlsiYSJdLCJtYXBwaW5ncyI6IjtBQUNBLFNBQVMsRUFBRSxHQUFHO0FBQ1osTUFBSSxHQUFHLEdBQUcsSUFBSTtBQUNkLE1BQUksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFNBQVUsTUFBSztBQUFBLFdBQzlDLE9BQU8sS0FBSyxTQUFVLEtBQUksTUFBTSxRQUFRLENBQUMsR0FBRztBQUNuRCxRQUFJLElBQUksRUFBRTtBQUNWLFNBQUssSUFBSSxHQUFHLElBQUksR0FBRyxJQUFLLEdBQUUsQ0FBQyxNQUFNLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxPQUFPLE1BQU0sS0FBSyxNQUFNLEtBQUs7QUFBQSxFQUMxRSxNQUFPLE1BQUssS0FBSyxFQUFHLEdBQUUsQ0FBQyxNQUFNLE1BQU0sS0FBSyxNQUFNLEtBQUs7QUFDbkQsU0FBTztBQUNUO0FBQ0EsU0FBUyxJQUFJO0FBQ1gsV0FBUyxHQUFHLEdBQUcsSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLFVBQVUsUUFBUSxJQUFJLEdBQUcsSUFBSyxFQUFDLElBQUksVUFBVSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsT0FBTyxNQUFNLEtBQUssTUFBTSxLQUFLO0FBQzNILFNBQU87QUFDVDtBQUNBLFNBQVMsS0FBSyxHQUFHO0FBQ2YsU0FBT0EsR0FBRSxFQUFFLENBQUMsQ0FBQztBQUNmOyIsInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswXX0=
