import { e as ee$1 } from './Spinner-BeNoTciJ-DsMN3-m0-BGGztM1w.js';
import { d as defineComponent, u as useTheme } from './index.esm-CVE60fla-BtsXn2z1.js';
import { j } from './jsx-runtime-CjQXaSqQ-CjMA1-fF-CkV96GpT.js';
import { r as reactExports } from './embeddable-component-BD9bezsm.js';
import { W as Wg, V as Vg } from './Container-mop-J7T8-BpqPaGKG-DiR4tjay.js';
import './index-BV21PmyC.js';
import './Title-n-I3Fdvw-CW-j1pzr-DoihF5tM.js';

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
      defaultValue: ee$1.noFilter(),
      inputs: ["value"],
      events: [{ name: "onChange", property: "value" }]
    }
  ]
}, V = defineComponent(f, g, {
  props: (e) => ({
    ...e
  }),
  events: {
    onChange: (e) => ({ value: typeof e != "number" && !e ? ee$1.noFilter() : parseFloat(`${e}`) })
  }
});

export { V as default, g as meta };
//# sourceMappingURL=NumberInput-CTTRzrcL-D1ve0czF.js.map
//# sourceMappingURL=NumberInput-CTTRzrcL-D1ve0czF.js.map
