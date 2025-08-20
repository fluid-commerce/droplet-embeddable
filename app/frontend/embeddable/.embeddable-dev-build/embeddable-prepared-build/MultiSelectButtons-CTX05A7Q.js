import { e as ee } from "./Spinner-BeNoTciJ-DsMN3-m0.js";
import { d as defineComponent, u as useTheme } from "./index.esm-CVE60fla.js";
import { j } from "./jsx-runtime-CjQXaSqQ-CjMA1-fF.js";
import { r as reactExports } from "./embeddable-entry-point-DfzYO-OW.js";
import { W as Wg } from "./Container-mop-J7T8-BpqPaGKG.js";
const S = (n) => {
  const { title: c, values: s, onChange: u, defaultValue: d } = n, [o, m] = reactExports.useState(d || []), t = useTheme(), b = (e) => {
    const l = o.includes(e) ? o.filter((a) => a !== e) : [...o, e];
    m(l), u(l);
  };
  return /* @__PURE__ */ j.jsx(Wg, { title: c, children: /* @__PURE__ */ j.jsx("div", { className: "multiSelectContainer font-embeddable text-[font-size:--embeddable-font-size]", children: s == null ? void 0 : s.map((e, l) => {
    const a = o.includes(e) ? t.controls.buttons.multiSelect.active.background : t.controls.buttons.multiSelect.inactive.background, p = o.includes(e) ? t.controls.buttons.multiSelect.active.fontColor : t.controls.buttons.multiSelect.inactive.fontColor, f = o.includes(e) ? t.controls.buttons.multiSelect.active.border : t.controls.buttons.multiSelect.inactive.border, g = t.controls.buttons.radius;
    return /* @__PURE__ */ j.jsx(
      "div",
      {
        className: "multiselectItem text-[color:--embeddable-font-colorNormal]",
        style: { background: a, border: f, borderRadius: g },
        onClick: () => b(e),
        children: /* @__PURE__ */ j.jsx("div", { className: "multiSelectInner", style: { color: p }, children: e })
      },
      l
    );
  }) }) });
}, x = {
  name: "MultiSelectButtons",
  label: "Multiselect buttons",
  defaultWidth: 400,
  defaultHeight: 80,
  category: "Controls: inputs & dropdowns",
  inputs: [
    {
      name: "values",
      type: "string",
      array: true,
      label: "Values",
      category: "Button values"
    },
    {
      name: "title",
      type: "string",
      label: "Title",
      category: "Settings"
    },
    {
      name: "defaultValue",
      type: "string",
      array: true,
      label: "Default value",
      category: "Pre-configured variables"
    }
  ],
  events: [
    {
      name: "onChange",
      label: "Change",
      properties: [
        {
          name: "value",
          type: "string",
          array: true
        }
      ]
    }
  ],
  variables: [
    {
      name: "chosen value",
      type: "string",
      array: true,
      defaultValue: ee.noFilter(),
      inputs: ["defaultValue"],
      events: [{ name: "onChange", property: "value" }]
    }
  ]
}, M = defineComponent(S, x, {
  props: (n) => ({
    ...n
  }),
  events: {
    onChange: (n) => ({ value: n.length > 0 ? n : ee.noFilter() })
  }
});
export {
  M as default,
  x as meta
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXVsdGlTZWxlY3RCdXR0b25zLUNUWDA1QTdRLmpzIiwic291cmNlcyI6WyIvVXNlcnMvY2hyaXN0b3BoZXJjYXJsc29uL2ZsdWlkL2Ryb3BsZXQtZW1iZWRkYWJsZS9hcHAvZnJvbnRlbmQvZW1iZWRkYWJsZS9ub2RlX21vZHVsZXMvQGVtYmVkZGFibGUuY29tL3ZhbmlsbGEtY29tcG9uZW50cy9kaXN0L011bHRpU2VsZWN0QnV0dG9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWIGFzIGkgfSBmcm9tIFwiLi9pbmRleC5lc20tSkFoX0sxVkcuanNcIjtcbmltcG9ydCB7IHVzZVRoZW1lIGFzIGgsIGRlZmluZUNvbXBvbmVudCBhcyB5IH0gZnJvbSBcIkBlbWJlZGRhYmxlLmNvbS9yZWFjdFwiO1xuaW1wb3J0IHsgaiBhcyByIH0gZnJvbSBcIi4vanN4LXJ1bnRpbWUtQ2pRWGFTcVEuanNcIjtcbmltcG9ydCB7IHVzZVN0YXRlIGFzIEMgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEMgYXMgdiB9IGZyb20gXCIuL0NvbnRhaW5lci1tb3AtSjdUOC5qc1wiO1xuY29uc3QgUyA9IChuKSA9PiB7XG4gIGNvbnN0IHsgdGl0bGU6IGMsIHZhbHVlczogcywgb25DaGFuZ2U6IHUsIGRlZmF1bHRWYWx1ZTogZCB9ID0gbiwgW28sIG1dID0gQyhkIHx8IFtdKSwgdCA9IGgoKSwgYiA9IChlKSA9PiB7XG4gICAgY29uc3QgbCA9IG8uaW5jbHVkZXMoZSkgPyBvLmZpbHRlcigoYSkgPT4gYSAhPT0gZSkgOiBbLi4ubywgZV07XG4gICAgbShsKSwgdShsKTtcbiAgfTtcbiAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyByLmpzeCh2LCB7IHRpdGxlOiBjLCBjaGlsZHJlbjogLyogQF9fUFVSRV9fICovIHIuanN4KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcIm11bHRpU2VsZWN0Q29udGFpbmVyIGZvbnQtZW1iZWRkYWJsZSB0ZXh0LVtmb250LXNpemU6LS1lbWJlZGRhYmxlLWZvbnQtc2l6ZV1cIiwgY2hpbGRyZW46IHMgPT0gbnVsbCA/IHZvaWQgMCA6IHMubWFwKChlLCBsKSA9PiB7XG4gICAgY29uc3QgYSA9IG8uaW5jbHVkZXMoZSkgPyB0LmNvbnRyb2xzLmJ1dHRvbnMubXVsdGlTZWxlY3QuYWN0aXZlLmJhY2tncm91bmQgOiB0LmNvbnRyb2xzLmJ1dHRvbnMubXVsdGlTZWxlY3QuaW5hY3RpdmUuYmFja2dyb3VuZCwgcCA9IG8uaW5jbHVkZXMoZSkgPyB0LmNvbnRyb2xzLmJ1dHRvbnMubXVsdGlTZWxlY3QuYWN0aXZlLmZvbnRDb2xvciA6IHQuY29udHJvbHMuYnV0dG9ucy5tdWx0aVNlbGVjdC5pbmFjdGl2ZS5mb250Q29sb3IsIGYgPSBvLmluY2x1ZGVzKGUpID8gdC5jb250cm9scy5idXR0b25zLm11bHRpU2VsZWN0LmFjdGl2ZS5ib3JkZXIgOiB0LmNvbnRyb2xzLmJ1dHRvbnMubXVsdGlTZWxlY3QuaW5hY3RpdmUuYm9yZGVyLCBnID0gdC5jb250cm9scy5idXR0b25zLnJhZGl1cztcbiAgICByZXR1cm4gLyogQF9fUFVSRV9fICovIHIuanN4KFxuICAgICAgXCJkaXZcIixcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcIm11bHRpc2VsZWN0SXRlbSB0ZXh0LVtjb2xvcjotLWVtYmVkZGFibGUtZm9udC1jb2xvck5vcm1hbF1cIixcbiAgICAgICAgc3R5bGU6IHsgYmFja2dyb3VuZDogYSwgYm9yZGVyOiBmLCBib3JkZXJSYWRpdXM6IGcgfSxcbiAgICAgICAgb25DbGljazogKCkgPT4gYihlKSxcbiAgICAgICAgY2hpbGRyZW46IC8qIEBfX1BVUkVfXyAqLyByLmpzeChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJtdWx0aVNlbGVjdElubmVyXCIsIHN0eWxlOiB7IGNvbG9yOiBwIH0sIGNoaWxkcmVuOiBlIH0pXG4gICAgICB9LFxuICAgICAgbFxuICAgICk7XG4gIH0pIH0pIH0pO1xufSwgeCA9IHtcbiAgbmFtZTogXCJNdWx0aVNlbGVjdEJ1dHRvbnNcIixcbiAgbGFiZWw6IFwiTXVsdGlzZWxlY3QgYnV0dG9uc1wiLFxuICBkZWZhdWx0V2lkdGg6IDQwMCxcbiAgZGVmYXVsdEhlaWdodDogODAsXG4gIGNhdGVnb3J5OiBcIkNvbnRyb2xzOiBpbnB1dHMgJiBkcm9wZG93bnNcIixcbiAgaW5wdXRzOiBbXG4gICAge1xuICAgICAgbmFtZTogXCJ2YWx1ZXNcIixcbiAgICAgIHR5cGU6IFwic3RyaW5nXCIsXG4gICAgICBhcnJheTogITAsXG4gICAgICBsYWJlbDogXCJWYWx1ZXNcIixcbiAgICAgIGNhdGVnb3J5OiBcIkJ1dHRvbiB2YWx1ZXNcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJ0aXRsZVwiLFxuICAgICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICAgIGxhYmVsOiBcIlRpdGxlXCIsXG4gICAgICBjYXRlZ29yeTogXCJTZXR0aW5nc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcImRlZmF1bHRWYWx1ZVwiLFxuICAgICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICAgIGFycmF5OiAhMCxcbiAgICAgIGxhYmVsOiBcIkRlZmF1bHQgdmFsdWVcIixcbiAgICAgIGNhdGVnb3J5OiBcIlByZS1jb25maWd1cmVkIHZhcmlhYmxlc1wiXG4gICAgfVxuICBdLFxuICBldmVudHM6IFtcbiAgICB7XG4gICAgICBuYW1lOiBcIm9uQ2hhbmdlXCIsXG4gICAgICBsYWJlbDogXCJDaGFuZ2VcIixcbiAgICAgIHByb3BlcnRpZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwidmFsdWVcIixcbiAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgICAgICAgIGFycmF5OiAhMFxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdLFxuICB2YXJpYWJsZXM6IFtcbiAgICB7XG4gICAgICBuYW1lOiBcImNob3NlbiB2YWx1ZVwiLFxuICAgICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICAgIGFycmF5OiAhMCxcbiAgICAgIGRlZmF1bHRWYWx1ZTogaS5ub0ZpbHRlcigpLFxuICAgICAgaW5wdXRzOiBbXCJkZWZhdWx0VmFsdWVcIl0sXG4gICAgICBldmVudHM6IFt7IG5hbWU6IFwib25DaGFuZ2VcIiwgcHJvcGVydHk6IFwidmFsdWVcIiB9XVxuICAgIH1cbiAgXVxufSwgTSA9IHkoUywgeCwge1xuICBwcm9wczogKG4pID0+ICh7XG4gICAgLi4ublxuICB9KSxcbiAgZXZlbnRzOiB7XG4gICAgb25DaGFuZ2U6IChuKSA9PiAoeyB2YWx1ZTogbi5sZW5ndGggPiAwID8gbiA6IGkubm9GaWx0ZXIoKSB9KVxuICB9XG59KTtcbmV4cG9ydCB7XG4gIE0gYXMgZGVmYXVsdCxcbiAgeCBhcyBtZXRhXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9TXVsdGlTZWxlY3RCdXR0b25zLmpzLm1hcFxuIl0sIm5hbWVzIjpbIkMiLCJoIiwiciIsInYiLCJpIiwieSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFLSyxNQUFDLElBQUksQ0FBQyxNQUFNO0FBQ2YsUUFBTSxFQUFFLE9BQU8sR0FBRyxRQUFRLEdBQUcsVUFBVSxHQUFHLGNBQWMsRUFBQyxJQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSUEsc0JBQUUsS0FBSyxDQUFBLENBQUUsR0FBRyxJQUFJQyxTQUFDLEdBQUksSUFBSSxDQUFDLE1BQU07QUFDeEcsVUFBTSxJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsTUFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQzdELE1BQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUFBLEVBQ1g7QUFDQSxTQUF1QkMsa0JBQUUsSUFBSUMsSUFBRyxFQUFFLE9BQU8sR0FBRyxVQUEwQkQsa0JBQUUsSUFBSSxPQUFPLEVBQUUsV0FBVyxnRkFBZ0YsVUFBVSxLQUFLLE9BQU8sU0FBUyxFQUFFLElBQUksQ0FBQyxHQUFHLE1BQU07QUFDN04sVUFBTSxJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUksRUFBRSxTQUFTLFFBQVEsWUFBWSxPQUFPLGFBQWEsRUFBRSxTQUFTLFFBQVEsWUFBWSxTQUFTLFlBQVksSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJLEVBQUUsU0FBUyxRQUFRLFlBQVksT0FBTyxZQUFZLEVBQUUsU0FBUyxRQUFRLFlBQVksU0FBUyxXQUFXLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSSxFQUFFLFNBQVMsUUFBUSxZQUFZLE9BQU8sU0FBUyxFQUFFLFNBQVMsUUFBUSxZQUFZLFNBQVMsUUFBUSxJQUFJLEVBQUUsU0FBUyxRQUFRO0FBQ3BZLFdBQXVCQSxrQkFBRTtBQUFBLE1BQ3ZCO0FBQUEsTUFDQTtBQUFBLFFBQ0UsV0FBVztBQUFBLFFBQ1gsT0FBTyxFQUFFLFlBQVksR0FBRyxRQUFRLEdBQUcsY0FBYyxFQUFDO0FBQUEsUUFDbEQsU0FBUyxNQUFNLEVBQUUsQ0FBQztBQUFBLFFBQ2xCLFVBQTBCQSxrQkFBRSxJQUFJLE9BQU8sRUFBRSxXQUFXLG9CQUFvQixPQUFPLEVBQUUsT0FBTyxLQUFLLFVBQVUsRUFBQyxDQUFFO0FBQUEsTUFDbEg7QUFBQSxNQUNNO0FBQUEsSUFDTjtBQUFBLEVBQ0UsQ0FBQyxFQUFDLENBQUUsR0FBRztBQUNULEdBQUcsSUFBSTtBQUFBLEVBQ0wsTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLEVBQ1AsY0FBYztBQUFBLEVBQ2QsZUFBZTtBQUFBLEVBQ2YsVUFBVTtBQUFBLEVBQ1YsUUFBUTtBQUFBLElBQ047QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLFVBQVU7QUFBQSxJQUNoQjtBQUFBLElBQ0k7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLFVBQVU7QUFBQSxJQUNoQjtBQUFBLElBQ0k7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLFVBQVU7QUFBQSxJQUNoQjtBQUFBLEVBQ0E7QUFBQSxFQUNFLFFBQVE7QUFBQSxJQUNOO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxZQUFZO0FBQUEsUUFDVjtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFVBQ04sT0FBTztBQUFBLFFBQ2pCO0FBQUEsTUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDRSxXQUFXO0FBQUEsSUFDVDtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsY0FBY0UsR0FBRSxTQUFRO0FBQUEsTUFDeEIsUUFBUSxDQUFDLGNBQWM7QUFBQSxNQUN2QixRQUFRLENBQUMsRUFBRSxNQUFNLFlBQVksVUFBVSxRQUFPLENBQUU7QUFBQSxJQUN0RDtBQUFBLEVBQ0E7QUFDQSxHQUFHLElBQUlDLGdCQUFFLEdBQUcsR0FBRztBQUFBLEVBQ2IsT0FBTyxDQUFDLE9BQU87QUFBQSxJQUNiLEdBQUc7QUFBQSxFQUNQO0FBQUEsRUFDRSxRQUFRO0FBQUEsSUFDTixVQUFVLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxTQUFTLElBQUksSUFBSUQsR0FBRSxXQUFVO0FBQUEsRUFDOUQ7QUFDQSxDQUFDOyIsInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswXX0=
