import { e as ee$1, v } from './Spinner-BeNoTciJ-DsMN3-m0-BGGztM1w.js';
import { d as defineComponent } from './index.esm-CVE60fla-BtsXn2z1.js';
import { n, o } from './SortDirection.type.emb-Ddgerf5H-Cxcj1Pys-CMHk9l9o.js';
import { G } from './index-BUjytNL--_YalYDL8-CLYp2qTs.js';
import './jsx-runtime-CjQXaSqQ-CjMA1-fF-CkV96GpT.js';
import './embeddable-component-BD9bezsm.js';
import './index-BV21PmyC.js';
import './Container-mop-J7T8-BpqPaGKG-DiR4tjay.js';
import './Title-n-I3Fdvw-CW-j1pzr-DoihF5tM.js';

const c = {
  name: "Dropdown",
  label: "Dropdown",
  defaultWidth: 300,
  defaultHeight: 80,
  classNames: ["on-top"],
  category: "Controls: inputs & dropdowns",
  inputs: [
    {
      name: "ds",
      type: "dataset",
      label: "Dataset",
      description: "Dataset",
      category: "Dropdown values"
    },
    {
      name: "property",
      type: "dimension",
      label: "Property",
      config: {
        dataset: "ds"
      },
      category: "Dropdown values"
    },
    {
      name: "sortBy",
      type: "dimensionOrMeasure",
      label: "Optional Sort By Additional Dimension or Measure",
      config: {
        dataset: "ds"
      },
      category: "Dropdown values"
    },
    {
      name: "sortDirection",
      type: o,
      defaultValue: n.DESCENDING,
      label: "Sort direction",
      category: "Chart data"
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
      label: "Default value",
      category: "Pre-configured variables"
    },
    {
      name: "placeholder",
      type: "string",
      label: "Placeholder",
      category: "Settings"
    },
    {
      name: "limit",
      type: "number",
      label: "Default number of options",
      defaultValue: 100,
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
      name: "dropdown choice",
      type: "string",
      defaultValue: ee$1.noFilter(),
      inputs: ["defaultValue"],
      events: [{ name: "onChange", property: "value" }]
    }
  ]
}, u = defineComponent(G, c, {
  props: (e, [o2]) => {
    if (!e.ds)
      return {
        ...e,
        options: []
      };
    const n2 = e.sortDirection === "Ascending" ? "asc" : "desc", r = [];
    e.sortBy && r.push({
      property: e.sortBy,
      direction: n2
    });
    const t = e.property ? [e.property] : [];
    return e.sortBy && t.push(e.sortBy), {
      ...e,
      options: v({
        from: e.ds,
        select: t,
        limit: e.limit || 1e3,
        orderBy: r,
        filters: o2 != null && o2.search && e.property ? [
          {
            operator: "contains",
            property: e.property,
            value: o2 == null ? void 0 : o2.search
          }
        ] : void 0
      })
    };
  },
  events: {
    onChange: (e) => ({
      value: e || ee$1.noFilter()
    })
  }
});

export { u as default, c as meta };
//# sourceMappingURL=Dropdown-HMGnFuQC-DJY9Rjue.js.map
//# sourceMappingURL=Dropdown-HMGnFuQC-DJY9Rjue.js.map
