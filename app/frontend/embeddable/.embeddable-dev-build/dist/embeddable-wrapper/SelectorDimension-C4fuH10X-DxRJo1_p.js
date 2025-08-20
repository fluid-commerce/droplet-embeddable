import { e as ee$1 } from './Spinner-BeNoTciJ-DsMN3-m0-BGGztM1w.js';
import { d as defineComponent } from './index.esm-CVE60fla-BtsXn2z1.js';
import { j } from './jsx-runtime-CjQXaSqQ-CjMA1-fF-CkV96GpT.js';
import { A } from './Selector-CCh6GRlF-DS-lUtiW-BFSAxxoF.js';
import { r, n } from './Selector.utils-cEIYEuKn-DO9PZ0p4-H7RNp0_L.js';
import './embeddable-component-BD9bezsm.js';
import './index-BV21PmyC.js';
import './Container-mop-J7T8-BpqPaGKG-DiR4tjay.js';
import './Title-n-I3Fdvw-CW-j1pzr-DoihF5tM.js';

const d = (e) => {
  const t = (a) => {
    const n2 = e.options.find((o) => o.name === a);
    e.onChange(n2);
  };
  return /* @__PURE__ */ j.jsx(
    A,
    {
      title: e.title,
      options: n(e.options),
      defaultValue: r(e.defaultValue, e.options),
      unclearable: !e.allowNoValue,
      onChange: t
    }
  );
}, c = {
  name: "SelectorDimension",
  label: "Dimensions single-select",
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
          type: "dimension"
        }
      ]
    }
  ],
  variables: [
    {
      name: "Dimension choice",
      type: "dimension",
      inputs: ["defaultValue"],
      events: [{ name: "onChange", property: "value" }]
    }
  ]
}, v = defineComponent(d, c, {
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

export { v as default, c as meta };
//# sourceMappingURL=SelectorDimension-C4fuH10X-DxRJo1_p.js.map
//# sourceMappingURL=SelectorDimension-C4fuH10X-DxRJo1_p.js.map
