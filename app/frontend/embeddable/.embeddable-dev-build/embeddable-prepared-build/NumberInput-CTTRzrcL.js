import { e as ee } from "./Spinner-BeNoTciJ-DsMN3-m0.js";
import { d as defineComponent, u as useTheme } from "./index.esm-CVE60fla.js";
import { j } from "./jsx-runtime-CjQXaSqQ-CjMA1-fF.js";
import { r as reactExports } from "./embeddable-entry-point-DfzYO-OW.js";
import { W as Wg, V as Vg } from "./Container-mop-J7T8-BpqPaGKG.js";
const f = (e) => {
  const l = reactExports.useRef(null), [n, o] = reactExports.useState(`${e.value}`);
  let a = null;
  return useTheme(), reactExports.useEffect(() => {
    o(`${e.value}`);
  }, [e.value]), /* @__PURE__ */ j.jsx(Wg, { title: e.title, children: /* @__PURE__ */ j.jsxs(
    "div",
    {
      className: `
          border
          h-10
          pr-8
          relative
          w-full
          bg-[color:--embeddable-controls-backgrounds-colors-soft]
          border-[color:--embeddable-controls-borders-colors-normal]
          rounded-[--embeddable-controls-borders-radius]
        `,
      children: [
        /* @__PURE__ */ j.jsx(
          "input",
          {
            ref: l,
            type: "number",
            placeholder: e.placeholder,
            className: `
            border-0
            h-full
            leading-10
            outline-none
            px-3
            w-full
            bg-[color:--embeddable-controls-backgrounds-colors-transparent]
            rounded-[--embeddable-controls-borders-radius]
          `,
            onChange: (t) => {
              o(t.target.value), a && clearTimeout(a), a = window.setTimeout(() => {
                e.onChange(t.target.value);
              }, 1e3);
            },
            defaultValue: n
          }
        ),
        !!n && /* @__PURE__ */ j.jsx(
          "div",
          {
            onClick: () => {
              var t;
              o(""), e.onChange(""), l.current.value = "", (t = l.current) == null || t.focus();
            },
            className: "opacity-50 hover:opacity-100 absolute w-10 right-0 top-0 h-full cursor-pointer group flex items-center justify-center",
            children: /* @__PURE__ */ j.jsx(Vg, {})
          }
        )
      ]
    }
  ) });
}, g = {
  name: "NumberInput",
  label: "Number input",
  defaultWidth: 300,
  defaultHeight: 80,
  category: "Controls: inputs & dropdowns",
  inputs: [
    {
      name: "title",
      type: "string",
      label: "Title",
      description: "The title",
      category: "Settings"
    },
    {
      name: "value",
      type: "number",
      label: "Value",
      category: "Pre-configured variables"
    },
    {
      name: "placeholder",
      type: "string",
      label: "Placeholder",
      defaultValue: "E.g. 3",
      category: "Settings"
    }
  ],
  events: [
    {
      name: "onChange",
      label: "Change",
      properties: [
        {
          name: "value",
          type: "number"
        }
      ]
    }
  ],
  variables: [
    {
      name: "Number Value",
      type: "number",
      defaultValue: ee.noFilter(),
      inputs: ["value"],
      events: [{ name: "onChange", property: "value" }]
    }
  ]
}, V = defineComponent(f, g, {
  props: (e) => ({
    ...e
  }),
  events: {
    onChange: (e) => ({ value: typeof e != "number" && !e ? ee.noFilter() : parseFloat(`${e}`) })
  }
});
export {
  V as default,
  g as meta
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTnVtYmVySW5wdXQtQ1RUUnpyY0wuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaHJpc3RvcGhlcmNhcmxzb24vZmx1aWQvZHJvcGxldC1lbWJlZGRhYmxlL2FwcC9mcm9udGVuZC9lbWJlZGRhYmxlL25vZGVfbW9kdWxlcy9AZW1iZWRkYWJsZS5jb20vdmFuaWxsYS1jb21wb25lbnRzL2Rpc3QvTnVtYmVySW5wdXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgViBhcyB1IH0gZnJvbSBcIi4vaW5kZXguZXNtLUpBaF9LMVZHLmpzXCI7XG5pbXBvcnQgeyB1c2VUaGVtZSBhcyBzLCBkZWZpbmVDb21wb25lbnQgYXMgaSB9IGZyb20gXCJAZW1iZWRkYWJsZS5jb20vcmVhY3RcIjtcbmltcG9ydCB7IGogYXMgciB9IGZyb20gXCIuL2pzeC1ydW50aW1lLUNqUVhhU3FRLmpzXCI7XG5pbXBvcnQgeyB1c2VSZWYgYXMgYywgdXNlU3RhdGUgYXMgZCwgdXNlRWZmZWN0IGFzIG0gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEMgYXMgYiwgYiBhcyBwIH0gZnJvbSBcIi4vQ29udGFpbmVyLW1vcC1KN1Q4LmpzXCI7XG5jb25zdCBmID0gKGUpID0+IHtcbiAgY29uc3QgbCA9IGMobnVsbCksIFtuLCBvXSA9IGQoYCR7ZS52YWx1ZX1gKTtcbiAgbGV0IGEgPSBudWxsO1xuICByZXR1cm4gcygpLCBtKCgpID0+IHtcbiAgICBvKGAke2UudmFsdWV9YCk7XG4gIH0sIFtlLnZhbHVlXSksIC8qIEBfX1BVUkVfXyAqLyByLmpzeChiLCB7IHRpdGxlOiBlLnRpdGxlLCBjaGlsZHJlbjogLyogQF9fUFVSRV9fICovIHIuanN4cyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIGNsYXNzTmFtZTogYFxuICAgICAgICAgIGJvcmRlclxuICAgICAgICAgIGgtMTBcbiAgICAgICAgICBwci04XG4gICAgICAgICAgcmVsYXRpdmVcbiAgICAgICAgICB3LWZ1bGxcbiAgICAgICAgICBiZy1bY29sb3I6LS1lbWJlZGRhYmxlLWNvbnRyb2xzLWJhY2tncm91bmRzLWNvbG9ycy1zb2Z0XVxuICAgICAgICAgIGJvcmRlci1bY29sb3I6LS1lbWJlZGRhYmxlLWNvbnRyb2xzLWJvcmRlcnMtY29sb3JzLW5vcm1hbF1cbiAgICAgICAgICByb3VuZGVkLVstLWVtYmVkZGFibGUtY29udHJvbHMtYm9yZGVycy1yYWRpdXNdXG4gICAgICAgIGAsXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICAvKiBAX19QVVJFX18gKi8gci5qc3goXG4gICAgICAgICAgXCJpbnB1dFwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHJlZjogbCxcbiAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogZS5wbGFjZWhvbGRlcixcbiAgICAgICAgICAgIGNsYXNzTmFtZTogYFxuICAgICAgICAgICAgYm9yZGVyLTBcbiAgICAgICAgICAgIGgtZnVsbFxuICAgICAgICAgICAgbGVhZGluZy0xMFxuICAgICAgICAgICAgb3V0bGluZS1ub25lXG4gICAgICAgICAgICBweC0zXG4gICAgICAgICAgICB3LWZ1bGxcbiAgICAgICAgICAgIGJnLVtjb2xvcjotLWVtYmVkZGFibGUtY29udHJvbHMtYmFja2dyb3VuZHMtY29sb3JzLXRyYW5zcGFyZW50XVxuICAgICAgICAgICAgcm91bmRlZC1bLS1lbWJlZGRhYmxlLWNvbnRyb2xzLWJvcmRlcnMtcmFkaXVzXVxuICAgICAgICAgIGAsXG4gICAgICAgICAgICBvbkNoYW5nZTogKHQpID0+IHtcbiAgICAgICAgICAgICAgbyh0LnRhcmdldC52YWx1ZSksIGEgJiYgY2xlYXJUaW1lb3V0KGEpLCBhID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGUub25DaGFuZ2UodC50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICB9LCAxZTMpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogblxuICAgICAgICAgIH1cbiAgICAgICAgKSxcbiAgICAgICAgISFuICYmIC8qIEBfX1BVUkVfXyAqLyByLmpzeChcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgdmFyIHQ7XG4gICAgICAgICAgICAgIG8oXCJcIiksIGUub25DaGFuZ2UoXCJcIiksIGwuY3VycmVudC52YWx1ZSA9IFwiXCIsICh0ID0gbC5jdXJyZW50KSA9PSBudWxsIHx8IHQuZm9jdXMoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwib3BhY2l0eS01MCBob3ZlcjpvcGFjaXR5LTEwMCBhYnNvbHV0ZSB3LTEwIHJpZ2h0LTAgdG9wLTAgaC1mdWxsIGN1cnNvci1wb2ludGVyIGdyb3VwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCIsXG4gICAgICAgICAgICBjaGlsZHJlbjogLyogQF9fUFVSRV9fICovIHIuanN4KHAsIHt9KVxuICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgXVxuICAgIH1cbiAgKSB9KTtcbn0sIGcgPSB7XG4gIG5hbWU6IFwiTnVtYmVySW5wdXRcIixcbiAgbGFiZWw6IFwiTnVtYmVyIGlucHV0XCIsXG4gIGRlZmF1bHRXaWR0aDogMzAwLFxuICBkZWZhdWx0SGVpZ2h0OiA4MCxcbiAgY2F0ZWdvcnk6IFwiQ29udHJvbHM6IGlucHV0cyAmIGRyb3Bkb3duc1wiLFxuICBpbnB1dHM6IFtcbiAgICB7XG4gICAgICBuYW1lOiBcInRpdGxlXCIsXG4gICAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgICAgbGFiZWw6IFwiVGl0bGVcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlRoZSB0aXRsZVwiLFxuICAgICAgY2F0ZWdvcnk6IFwiU2V0dGluZ3NcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJ2YWx1ZVwiLFxuICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgIGxhYmVsOiBcIlZhbHVlXCIsXG4gICAgICBjYXRlZ29yeTogXCJQcmUtY29uZmlndXJlZCB2YXJpYWJsZXNcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJwbGFjZWhvbGRlclwiLFxuICAgICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICAgIGxhYmVsOiBcIlBsYWNlaG9sZGVyXCIsXG4gICAgICBkZWZhdWx0VmFsdWU6IFwiRS5nLiAzXCIsXG4gICAgICBjYXRlZ29yeTogXCJTZXR0aW5nc1wiXG4gICAgfVxuICBdLFxuICBldmVudHM6IFtcbiAgICB7XG4gICAgICBuYW1lOiBcIm9uQ2hhbmdlXCIsXG4gICAgICBsYWJlbDogXCJDaGFuZ2VcIixcbiAgICAgIHByb3BlcnRpZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwidmFsdWVcIixcbiAgICAgICAgICB0eXBlOiBcIm51bWJlclwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF0sXG4gIHZhcmlhYmxlczogW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiTnVtYmVyIFZhbHVlXCIsXG4gICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgZGVmYXVsdFZhbHVlOiB1Lm5vRmlsdGVyKCksXG4gICAgICBpbnB1dHM6IFtcInZhbHVlXCJdLFxuICAgICAgZXZlbnRzOiBbeyBuYW1lOiBcIm9uQ2hhbmdlXCIsIHByb3BlcnR5OiBcInZhbHVlXCIgfV1cbiAgICB9XG4gIF1cbn0sIFYgPSBpKGYsIGcsIHtcbiAgcHJvcHM6IChlKSA9PiAoe1xuICAgIC4uLmVcbiAgfSksXG4gIGV2ZW50czoge1xuICAgIG9uQ2hhbmdlOiAoZSkgPT4gKHsgdmFsdWU6IHR5cGVvZiBlICE9IFwibnVtYmVyXCIgJiYgIWUgPyB1Lm5vRmlsdGVyKCkgOiBwYXJzZUZsb2F0KGAke2V9YCkgfSlcbiAgfVxufSk7XG5leHBvcnQge1xuICBWIGFzIGRlZmF1bHQsXG4gIGcgYXMgbWV0YVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU51bWJlcklucHV0LmpzLm1hcFxuIl0sIm5hbWVzIjpbImMiLCJkIiwicyIsIm0iLCJyIiwiYiIsInAiLCJ1IiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFLSyxNQUFDLElBQUksQ0FBQyxNQUFNO0FBQ2YsUUFBTSxJQUFJQSxhQUFBQSxPQUFFLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJQyxhQUFBQSxTQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUU7QUFDMUMsTUFBSSxJQUFJO0FBQ1IsU0FBT0MsU0FBQyxHQUFJQyxhQUFBQSxVQUFFLE1BQU07QUFDbEIsTUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFO0FBQUEsRUFDaEIsR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQW1CQyxrQkFBRSxJQUFJQyxJQUFHLEVBQUUsT0FBTyxFQUFFLE9BQU8sVUFBMEJELGtCQUFFO0FBQUEsSUFDcEY7QUFBQSxJQUNBO0FBQUEsTUFDRSxXQUFXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFVWCxVQUFVO0FBQUEsUUFDUUEsa0JBQUU7QUFBQSxVQUNoQjtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE1BQU07QUFBQSxZQUNOLGFBQWEsRUFBRTtBQUFBLFlBQ2YsV0FBVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVVgsVUFBVSxDQUFDLE1BQU07QUFDZixnQkFBRSxFQUFFLE9BQU8sS0FBSyxHQUFHLEtBQUssYUFBYSxDQUFDLEdBQUcsSUFBSSxPQUFPLFdBQVcsTUFBTTtBQUNuRSxrQkFBRSxTQUFTLEVBQUUsT0FBTyxLQUFLO0FBQUEsY0FDM0IsR0FBRyxHQUFHO0FBQUEsWUFDUjtBQUFBLFlBQ0EsY0FBYztBQUFBLFVBQzFCO0FBQUEsUUFDQTtBQUFBLFFBQ1EsQ0FBQyxDQUFDLEtBQXFCQSxrQkFBRTtBQUFBLFVBQ3ZCO0FBQUEsVUFDQTtBQUFBLFlBQ0UsU0FBUyxNQUFNO0FBQ2Isa0JBQUk7QUFDSixnQkFBRSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLFFBQVEsUUFBUSxLQUFLLElBQUksRUFBRSxZQUFZLFFBQVEsRUFBRSxNQUFLO0FBQUEsWUFDakY7QUFBQSxZQUNBLFdBQVc7QUFBQSxZQUNYLFVBQTBCQSxrQkFBRSxJQUFJRSxJQUFHLENBQUEsQ0FBRTtBQUFBLFVBQ2pEO0FBQUEsUUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNBO0FBQUEsRUFDQSxHQUFLO0FBQ0wsR0FBRyxJQUFJO0FBQUEsRUFDTCxNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsRUFDUCxjQUFjO0FBQUEsRUFDZCxlQUFlO0FBQUEsRUFDZixVQUFVO0FBQUEsRUFDVixRQUFRO0FBQUEsSUFDTjtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsYUFBYTtBQUFBLE1BQ2IsVUFBVTtBQUFBLElBQ2hCO0FBQUEsSUFDSTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsVUFBVTtBQUFBLElBQ2hCO0FBQUEsSUFDSTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsY0FBYztBQUFBLE1BQ2QsVUFBVTtBQUFBLElBQ2hCO0FBQUEsRUFDQTtBQUFBLEVBQ0UsUUFBUTtBQUFBLElBQ047QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLFlBQVk7QUFBQSxRQUNWO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDaEI7QUFBQSxNQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNFLFdBQVc7QUFBQSxJQUNUO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixjQUFjQyxHQUFFLFNBQVE7QUFBQSxNQUN4QixRQUFRLENBQUMsT0FBTztBQUFBLE1BQ2hCLFFBQVEsQ0FBQyxFQUFFLE1BQU0sWUFBWSxVQUFVLFFBQU8sQ0FBRTtBQUFBLElBQ3REO0FBQUEsRUFDQTtBQUNBLEdBQUcsSUFBSUMsZ0JBQUUsR0FBRyxHQUFHO0FBQUEsRUFDYixPQUFPLENBQUMsT0FBTztBQUFBLElBQ2IsR0FBRztBQUFBLEVBQ1A7QUFBQSxFQUNFLFFBQVE7QUFBQSxJQUNOLFVBQVUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxPQUFPLEtBQUssWUFBWSxDQUFDLElBQUlELEdBQUUsU0FBUSxJQUFLLFdBQVcsR0FBRyxDQUFDLEVBQUUsRUFBQztBQUFBLEVBQzdGO0FBQ0EsQ0FBQzsiLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMF19
