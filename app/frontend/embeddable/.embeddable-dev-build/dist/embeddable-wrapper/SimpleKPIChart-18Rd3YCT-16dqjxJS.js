import { v } from './Spinner-BeNoTciJ-DsMN3-m0-BGGztM1w.js';
import { d as defineComponent } from './index.esm-CVE60fla-BtsXn2z1.js';
import { J } from './index-VjD1R8dk-Bm9w8E8M-DeQW__zM.js';
import './jsx-runtime-CjQXaSqQ-CjMA1-fF-CkV96GpT.js';
import './embeddable-component-BD9bezsm.js';
import './index-BV21PmyC.js';
import './format-TjzP8gQX-Cs7Vwno2-CeUXJh2P.js';
import './Container-mop-J7T8-BpqPaGKG-DiR4tjay.js';
import './Title-n-I3Fdvw-CW-j1pzr-DoihF5tM.js';

const o = {
  name: "SimpleKPIChart",
  label: "KPI number",
  defaultWidth: 200,
  defaultHeight: 150,
  classNames: ["inside-card"],
  category: "Charts: essentials",
  inputs: [
    {
      name: "ds",
      type: "dataset",
      label: "Dataset",
      description: "Dataset",
      defaultValue: false,
      category: "Chart data"
    },
    {
      name: "metric",
      type: "measure",
      label: "KPI",
      config: {
        dataset: "ds"
      },
      category: "Chart data"
    },
    {
      name: "title",
      type: "string",
      label: "Title",
      description: "The title for the chart",
      category: "Chart settings"
    },
    {
      name: "description",
      type: "string",
      label: "Description",
      description: "The description for the chart",
      category: "Chart settings"
    },
    {
      name: "prefix",
      type: "string",
      label: "Prefix",
      description: "Prefix",
      category: "Chart settings"
    },
    {
      name: "suffix",
      type: "string",
      label: "Suffix",
      description: "Suffix",
      category: "Chart settings"
    },
    {
      name: "dps",
      type: "number",
      label: "Decimal Places",
      category: "Formatting"
    },
    {
      name: "fontSize",
      type: "number",
      label: "Text size in pixels",
      defaultValue: 44,
      category: "Formatting"
    },
    {
      name: "enableDownloadAsCSV",
      type: "boolean",
      label: "Show download as CSV",
      category: "Export options",
      defaultValue: false
    },
    {
      name: "enableDownloadAsPNG",
      type: "boolean",
      label: "Show download as PNG",
      category: "Export options",
      defaultValue: false
    }
  ]
}, n = defineComponent(J, o, {
  props: (e) => ({
    ...e,
    results: v({
      from: e.ds,
      select: [e.metric]
    })
  })
});

export { n as default, o as meta };
//# sourceMappingURL=SimpleKPIChart-18Rd3YCT-16dqjxJS.js.map
//# sourceMappingURL=SimpleKPIChart-18Rd3YCT-16dqjxJS.js.map
