import { e as ee$1 } from './Spinner-BeNoTciJ-DsMN3-m0-BGGztM1w.js';
import { d as defineComponent, u as useTheme } from './index.esm-CVE60fla-BtsXn2z1.js';
import { j } from './jsx-runtime-CjQXaSqQ-CjMA1-fF-CkV96GpT.js';
import { r as reactExports } from './embeddable-component-BD9bezsm.js';
import { W as Wg } from './Container-mop-J7T8-BpqPaGKG-DiR4tjay.js';
import './index-BV21PmyC.js';
import './Title-n-I3Fdvw-CW-j1pzr-DoihF5tM.js';

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
      defaultValue: ee$1.noFilter(),
      inputs: ["defaultValue"],
      events: [{ name: "onChange", property: "value" }]
    }
  ]
}, M = defineComponent(S, x, {
  props: (n) => ({
    ...n
  }),
  events: {
    onChange: (n) => ({ value: n.length > 0 ? n : ee$1.noFilter() })
  }
});

export { M as default, x as meta };
//# sourceMappingURL=MultiSelectButtons-CTX05A7Q-BYpk1uxU.js.map
//# sourceMappingURL=MultiSelectButtons-CTX05A7Q-BYpk1uxU.js.map
