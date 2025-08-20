import { e as ee$1 } from './Spinner-BeNoTciJ-DsMN3-m0-BGGztM1w.js';
import { d as defineComponent, u as useTheme } from './index.esm-CVE60fla-BtsXn2z1.js';
import { j as j$1 } from './jsx-runtime-CjQXaSqQ-CjMA1-fF-CkV96GpT.js';
import { r as reactExports } from './embeddable-component-BD9bezsm.js';
import { W as Wg, V as Vg } from './Container-mop-J7T8-BpqPaGKG-DiR4tjay.js';
import './index-BV21PmyC.js';
import './Title-n-I3Fdvw-CW-j1pzr-DoihF5tM.js';

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
      defaultValue: ee$1.noFilter(),
      inputs: ["value"],
      events: [{ name: "onChange", property: "value" }]
    }
  ]
}, j = defineComponent(f, h, {
  props: (e) => ({
    ...e
  }),
  events: {
    onChange: (e) => ({ value: e || ee$1.noFilter() })
  }
});

export { j as default, h as meta };
//# sourceMappingURL=TextInput-VzSdMh7Y-DD_WeMKk.js.map
//# sourceMappingURL=TextInput-VzSdMh7Y-DD_WeMKk.js.map
