import { e as ee } from "./Spinner-BeNoTciJ-DsMN3-m0.js";
import { d as defineComponent, u as useTheme } from "./index.esm-CVE60fla.js";
import { j as j$1 } from "./jsx-runtime-CjQXaSqQ-CjMA1-fF.js";
import { r as reactExports } from "./embeddable-entry-point-DfzYO-OW.js";
import { W as Wg, V as Vg } from "./Container-mop-J7T8-BpqPaGKG.js";
let n = null;
const f = (e) => {
  const a = reactExports.useRef(null), [r, o] = reactExports.useState(e.value);
  useTheme(), reactExports.useEffect(() => {
    o(e.value);
  }, [e.value]);
  const u = (t) => {
    o(t.target.value), n && clearTimeout(n), n = window.setTimeout(() => {
      e.onChange(t.target.value);
    }, 1e3);
  };
  return /* @__PURE__ */ j$1.jsx(Wg, { title: e.title, children: /* @__PURE__ */ j$1.jsxs(
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
        /* @__PURE__ */ j$1.jsx(
          "input",
          {
            ref: a,
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
            onChange: u,
            defaultValue: r
          }
        ),
        !!r && /* @__PURE__ */ j$1.jsx(
          "div",
          {
            onClick: () => {
              var t;
              o(""), e.onChange(""), a.current.value = "", (t = a.current) == null || t.focus();
            },
            className: "opacity-50 hover:opacity-100 absolute w-10 right-0 top-0 h-full cursor-pointer group flex items-center justify-center",
            children: /* @__PURE__ */ j$1.jsx(Vg, {})
          }
        )
      ]
    }
  ) });
}, h = {
  name: "TextInput",
  label: "Text input",
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
      type: "string",
      label: "Initial value",
      category: "Pre-configured variables"
    },
    {
      name: "placeholder",
      type: "string",
      label: "Placeholder",
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
          type: "string"
        }
      ]
    }
  ],
  variables: [
    {
      name: "Text Value",
      type: "string",
      defaultValue: ee.noFilter(),
      inputs: ["value"],
      events: [{ name: "onChange", property: "value" }]
    }
  ]
}, j = defineComponent(f, h, {
  props: (e) => ({
    ...e
  }),
  events: {
    onChange: (e) => ({ value: e || ee.noFilter() })
  }
});
export {
  j as default,
  h as meta
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGV4dElucHV0LVZ6U2RNaDdZLmpzIiwic291cmNlcyI6WyIvVXNlcnMvY2hyaXN0b3BoZXJjYXJsc29uL2ZsdWlkL2Ryb3BsZXQtZW1iZWRkYWJsZS9hcHAvZnJvbnRlbmQvZW1iZWRkYWJsZS9ub2RlX21vZHVsZXMvQGVtYmVkZGFibGUuY29tL3ZhbmlsbGEtY29tcG9uZW50cy9kaXN0L1RleHRJbnB1dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWIGFzIHMgfSBmcm9tIFwiLi9pbmRleC5lc20tSkFoX0sxVkcuanNcIjtcbmltcG9ydCB7IHVzZVRoZW1lIGFzIGksIGRlZmluZUNvbXBvbmVudCBhcyBjIH0gZnJvbSBcIkBlbWJlZGRhYmxlLmNvbS9yZWFjdFwiO1xuaW1wb3J0IHsgaiBhcyBsIH0gZnJvbSBcIi4vanN4LXJ1bnRpbWUtQ2pRWGFTcVEuanNcIjtcbmltcG9ydCB7IHVzZVJlZiBhcyBkLCB1c2VTdGF0ZSBhcyBtLCB1c2VFZmZlY3QgYXMgYiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQyBhcyBnLCBiIGFzIHAgfSBmcm9tIFwiLi9Db250YWluZXItbW9wLUo3VDguanNcIjtcbmxldCBuID0gbnVsbDtcbmNvbnN0IGYgPSAoZSkgPT4ge1xuICBjb25zdCBhID0gZChudWxsKSwgW3IsIG9dID0gbShlLnZhbHVlKTtcbiAgaSgpLCBiKCgpID0+IHtcbiAgICBvKGUudmFsdWUpO1xuICB9LCBbZS52YWx1ZV0pO1xuICBjb25zdCB1ID0gKHQpID0+IHtcbiAgICBvKHQudGFyZ2V0LnZhbHVlKSwgbiAmJiBjbGVhclRpbWVvdXQobiksIG4gPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBlLm9uQ2hhbmdlKHQudGFyZ2V0LnZhbHVlKTtcbiAgICB9LCAxZTMpO1xuICB9O1xuICByZXR1cm4gLyogQF9fUFVSRV9fICovIGwuanN4KGcsIHsgdGl0bGU6IGUudGl0bGUsIGNoaWxkcmVuOiAvKiBAX19QVVJFX18gKi8gbC5qc3hzKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiBgXG4gICAgICAgICAgYm9yZGVyXG4gICAgICAgICAgaC0xMFxuICAgICAgICAgIHByLThcbiAgICAgICAgICByZWxhdGl2ZVxuICAgICAgICAgIHctZnVsbFxuICAgICAgICAgIGJnLVtjb2xvcjotLWVtYmVkZGFibGUtY29udHJvbHMtYmFja2dyb3VuZHMtY29sb3JzLXNvZnRdXG4gICAgICAgICAgYm9yZGVyLVtjb2xvcjotLWVtYmVkZGFibGUtY29udHJvbHMtYm9yZGVycy1jb2xvcnMtbm9ybWFsXVxuICAgICAgICAgIHJvdW5kZWQtWy0tZW1iZWRkYWJsZS1jb250cm9scy1ib3JkZXJzLXJhZGl1c11cbiAgICAgICAgYCxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIC8qIEBfX1BVUkVfXyAqLyBsLmpzeChcbiAgICAgICAgICBcImlucHV0XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgcmVmOiBhLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IGUucGxhY2Vob2xkZXIsXG4gICAgICAgICAgICBjbGFzc05hbWU6IGBcbiAgICAgICAgICAgIGJvcmRlci0wXG4gICAgICAgICAgICBoLWZ1bGxcbiAgICAgICAgICAgIGxlYWRpbmctMTBcbiAgICAgICAgICAgIG91dGxpbmUtbm9uZVxuICAgICAgICAgICAgcHgtM1xuICAgICAgICAgICAgdy1mdWxsXG4gICAgICAgICAgICBiZy1bY29sb3I6LS1lbWJlZGRhYmxlLWNvbnRyb2xzLWJhY2tncm91bmRzLWNvbG9ycy10cmFuc3BhcmVudF1cbiAgICAgICAgICAgIHJvdW5kZWQtWy0tZW1iZWRkYWJsZS1jb250cm9scy1ib3JkZXJzLXJhZGl1c11cbiAgICAgICAgICBgLFxuICAgICAgICAgICAgb25DaGFuZ2U6IHUsXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IHJcbiAgICAgICAgICB9XG4gICAgICAgICksXG4gICAgICAgICEhciAmJiAvKiBAX19QVVJFX18gKi8gbC5qc3goXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgIHZhciB0O1xuICAgICAgICAgICAgICBvKFwiXCIpLCBlLm9uQ2hhbmdlKFwiXCIpLCBhLmN1cnJlbnQudmFsdWUgPSBcIlwiLCAodCA9IGEuY3VycmVudCkgPT0gbnVsbCB8fCB0LmZvY3VzKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xhc3NOYW1lOiBcIm9wYWNpdHktNTAgaG92ZXI6b3BhY2l0eS0xMDAgYWJzb2x1dGUgdy0xMCByaWdodC0wIHRvcC0wIGgtZnVsbCBjdXJzb3ItcG9pbnRlciBncm91cCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiLFxuICAgICAgICAgICAgY2hpbGRyZW46IC8qIEBfX1BVUkVfXyAqLyBsLmpzeChwLCB7fSlcbiAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgIF1cbiAgICB9XG4gICkgfSk7XG59LCBoID0ge1xuICBuYW1lOiBcIlRleHRJbnB1dFwiLFxuICBsYWJlbDogXCJUZXh0IGlucHV0XCIsXG4gIGRlZmF1bHRXaWR0aDogMzAwLFxuICBkZWZhdWx0SGVpZ2h0OiA4MCxcbiAgY2F0ZWdvcnk6IFwiQ29udHJvbHM6IGlucHV0cyAmIGRyb3Bkb3duc1wiLFxuICBpbnB1dHM6IFtcbiAgICB7XG4gICAgICBuYW1lOiBcInRpdGxlXCIsXG4gICAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgICAgbGFiZWw6IFwiVGl0bGVcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlRoZSB0aXRsZVwiLFxuICAgICAgY2F0ZWdvcnk6IFwiU2V0dGluZ3NcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJ2YWx1ZVwiLFxuICAgICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICAgIGxhYmVsOiBcIkluaXRpYWwgdmFsdWVcIixcbiAgICAgIGNhdGVnb3J5OiBcIlByZS1jb25maWd1cmVkIHZhcmlhYmxlc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcInBsYWNlaG9sZGVyXCIsXG4gICAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgICAgbGFiZWw6IFwiUGxhY2Vob2xkZXJcIixcbiAgICAgIGNhdGVnb3J5OiBcIlNldHRpbmdzXCJcbiAgICB9XG4gIF0sXG4gIGV2ZW50czogW1xuICAgIHtcbiAgICAgIG5hbWU6IFwib25DaGFuZ2VcIixcbiAgICAgIGxhYmVsOiBcIkNoYW5nZVwiLFxuICAgICAgcHJvcGVydGllczogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJ2YWx1ZVwiLFxuICAgICAgICAgIHR5cGU6IFwic3RyaW5nXCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXSxcbiAgdmFyaWFibGVzOiBbXG4gICAge1xuICAgICAgbmFtZTogXCJUZXh0IFZhbHVlXCIsXG4gICAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgICAgZGVmYXVsdFZhbHVlOiBzLm5vRmlsdGVyKCksXG4gICAgICBpbnB1dHM6IFtcInZhbHVlXCJdLFxuICAgICAgZXZlbnRzOiBbeyBuYW1lOiBcIm9uQ2hhbmdlXCIsIHByb3BlcnR5OiBcInZhbHVlXCIgfV1cbiAgICB9XG4gIF1cbn0sIGogPSBjKGYsIGgsIHtcbiAgcHJvcHM6IChlKSA9PiAoe1xuICAgIC4uLmVcbiAgfSksXG4gIGV2ZW50czoge1xuICAgIG9uQ2hhbmdlOiAoZSkgPT4gKHsgdmFsdWU6IGUgfHwgcy5ub0ZpbHRlcigpIH0pXG4gIH1cbn0pO1xuZXhwb3J0IHtcbiAgaiBhcyBkZWZhdWx0LFxuICBoIGFzIG1ldGFcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1UZXh0SW5wdXQuanMubWFwXG4iXSwibmFtZXMiOlsiZCIsIm0iLCJpIiwiYiIsImwiLCJnIiwicCIsInMiLCJjIl0sIm1hcHBpbmdzIjoiOzs7OztBQUtBLElBQUksSUFBSTtBQUNILE1BQUMsSUFBSSxDQUFDLE1BQU07QUFD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
