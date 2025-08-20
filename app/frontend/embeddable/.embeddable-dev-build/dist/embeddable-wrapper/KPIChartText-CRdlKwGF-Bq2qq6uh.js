import { v } from './Spinner-BeNoTciJ-DsMN3-m0-BGGztM1w.js';
import { d as defineComponent } from './index.esm-CVE60fla-BtsXn2z1.js';
import { n as n$1, o } from './SortDirection.type.emb-Ddgerf5H-Cxcj1Pys-CMHk9l9o.js';
import { J } from './index-VjD1R8dk-Bm9w8E8M-DeQW__zM.js';
import './jsx-runtime-CjQXaSqQ-CjMA1-fF-CkV96GpT.js';
import './embeddable-component-BD9bezsm.js';
import './index-BV21PmyC.js';
import './format-TjzP8gQX-Cs7Vwno2-CeUXJh2P.js';
import './Container-mop-J7T8-BpqPaGKG-DiR4tjay.js';
import './Title-n-I3Fdvw-CW-j1pzr-DoihF5tM.js';

const n = {
  name: "KPIChartText",
  label: "KPI text",
  defaultWidth: 300,
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
      name: "dimension",
      type: "dimension",
      label: "Value to display",
      config: {
        dataset: "ds"
      },
      category: "Chart data"
    },
    {
      name: "metric",
      type: "measure",
      label: "Show top value by",
      config: {
        dataset: "ds"
      },
      category: "Chart data"
    },
    {
      name: "rowSortDirection",
      type: o,
      defaultValue: n$1.DESCENDING,
      label: "Sort direction",
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
      name: "displayMetric",
      type: "boolean",
      label: "Display metric",
      description: "Display the metric",
      defaultValue: true,
      category: "Chart settings"
    },
    {
      name: "fontSize",
      type: "number",
      label: "Text size in pixels",
      defaultValue: 32,
      category: "Formatting"
    },
    {
      name: "dps",
      type: "number",
      label: "Metric decimal places",
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
}, p = defineComponent(J, n, {
  props: (e) => {
    const t = e.rowSortDirection === "Ascending" ? "asc" : "desc";
    return {
      ...e,
      results: v({
        from: e.ds,
        select: [e.metric, e.dimension],
        orderBy: [
          {
            property: e.metric,
            direction: t
          }
        ],
        limit: 1
      })
    };
  }
});

export { p as default, n as meta };
//# sourceMappingURL=KPIChartText-CRdlKwGF-Bq2qq6uh.js.map
//# sourceMappingURL=KPIChartText-CRdlKwGF-Bq2qq6uh.js.map
