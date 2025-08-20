import { e as ee$1 } from './Spinner-BeNoTciJ-DsMN3-m0-BGGztM1w.js';
import { d as defineComponent } from './index.esm-CVE60fla-BtsXn2z1.js';
import { j } from './jsx-runtime-CjQXaSqQ-CjMA1-fF-CkV96GpT.js';
import { R } from './MultiSelector-B-FnhZ4g-DZ3NmSFU-BZYo2Q7C.js';
import { s, n } from './Selector.utils-cEIYEuKn-DO9PZ0p4-H7RNp0_L.js';
import './embeddable-component-BD9bezsm.js';
import './index-BV21PmyC.js';
import './CheckboxEmpty-DejAentL-B0WzSrSW-CPpzxNKa.js';
import './Container-mop-J7T8-BpqPaGKG-DiR4tjay.js';
import './Title-n-I3Fdvw-CW-j1pzr-DoihF5tM.js';

const d = (e) => {
  const t = (a) => {
    const n2 = e.options.filter((o) => a.includes(o.name));
    e.onChange(n2);
  };
  return /* @__PURE__ */ j.jsx(
    R,
    {
      title: e.title,
      options: n(e.options),
      defaultValue: s(e.defaultValue, e.options),
      unclearable: !e.allowNoValue,
      onChange: t
    }
  );
}, c = {
  name: "MultiSelectorDimension",
  label: "Dimensions multi-select",
  defaultWidth: 300,
  defaultHeight: 80,
  classNames: ["on-top"],
  category: "Controls: measures and dimensions",
  inputs: [
    {
      name: "ds",
      type: "dataset",
      label: "Dataset",
      description: "Dataset",
      category: "Dropdown values"
    },
    {
      name: "options",
      array: true,
      type: "dimension",
      label: "Choices",
      config: {
        dataset: "ds"
      },
      category: "Dropdown values",
      inputs: [
        {
          name: "overrideName",
          type: "string",
          label: "Override name",
          description: "Overrides the default name shown"
        }
      ]
    },
    {
      name: "defaultValue",
      type: "dimension",
      array: true,
      label: "Default value",
      category: "Pre-configured variables",
      config: {
        dataset: "ds"
      }
    },
    {
      name: "title",
      type: "string",
      label: "Title",
      category: "Settings"
    },
    {
      name: "allowNoValue",
      type: "boolean",
      label: "Allow no value",
      category: "Settings",
      defaultValue: false
    }
  ],
  events: [
    {
      name: "onChange",
      label: "Change",
      properties: [
        {
          name: "value",
          type: "dimension",
          array: true
        }
      ]
    }
  ],
  variables: [
    {
      name: "Dimension multi choice",
      type: "dimension",
      array: true,
      inputs: ["defaultValue"],
      events: [{ name: "onChange", property: "value" }]
    }
  ]
}, b = defineComponent(d, c, {
  props: (e, [t]) => e.ds ? {
    ...e,
    options: e.options || []
  } : {
    ...e,
    options: []
  },
  events: {
    onChange: (e) => ({
      value: e || ee$1.noFilter()
    })
  }
});

export { b as default, c as meta };
//# sourceMappingURL=MultiSelectorDimension-9fyOPSqc-DQtJuv-l.js.map
//# sourceMappingURL=MultiSelectorDimension-9fyOPSqc-DQtJuv-l.js.map
