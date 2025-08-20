import { v } from './Spinner-BeNoTciJ-DsMN3-m0-BGGztM1w.js';
import { d as defineComponent } from './index.esm-CVE60fla-BtsXn2z1.js';
import { J } from './index-VjD1R8dk-Bm9w8E8M-DeQW__zM.js';
import './jsx-runtime-CjQXaSqQ-CjMA1-fF-CkV96GpT.js';
import './embeddable-component-BD9bezsm.js';
import './index-BV21PmyC.js';
import './format-TjzP8gQX-Cs7Vwno2-CeUXJh2P.js';
import './Container-mop-J7T8-BpqPaGKG-DiR4tjay.js';
import './Title-n-I3Fdvw-CW-j1pzr-DoihF5tM.js';

const s = {
  name: "KPIChart",
  label: "KPI number comparison",
  defaultWidth: 200,
  defaultHeight: 150,
  classNames: ["inside-card"],
  category: "Charts: time-series comparison",
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
      required: true,
      config: {
        dataset: "ds"
      },
      category: "Chart data"
    },
    {
      name: "timeProperty",
      type: "dimension",
      label: "Time Property",
      description: "Used by time filters",
      config: {
        dataset: "ds",
        supportedTypes: ["time"]
      },
      category: "Chart data"
    },
    {
      name: "timeFilter",
      type: "timeRange",
      label: "Primary date range",
      description: "Date range",
      category: "Variables to configure"
    },
    {
      name: "prevTimeFilter",
      type: "timeRange",
      label: "Comparison date range",
      description: "Date range",
      category: "Variables to configure"
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
      name: "showPrevPeriodLabel",
      type: "boolean",
      label: "Display comparison period label",
      defaultValue: true,
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
}, d = defineComponent(J, s, {
  props: (e) => {
    var t, a, r;
    return {
      ...e,
      results: v({
        from: e.ds,
        select: [e.metric],
        filters: (t = e.timeFilter) != null && t.from && e.timeProperty ? [
          {
            property: e.timeProperty,
            operator: "inDateRange",
            value: e.timeFilter
          }
        ] : void 0
      }),
      prevResults: e.timeProperty && v({
        from: e.ds,
        select: [e.metric],
        limit: (a = e.prevTimeFilter) != null && a.from ? void 0 : 1,
        filters: (r = e.prevTimeFilter) != null && r.from ? [
          {
            property: e.timeProperty,
            operator: "inDateRange",
            value: {
              from: e.prevTimeFilter.from,
              relativeTimeString: "",
              to: e.prevTimeFilter.to
            }
          }
        ] : void 0
      })
    };
  }
});

export { d as default, s as meta };
//# sourceMappingURL=KPIChart-Dh0rn1bt-tt_uJ8rO.js.map
//# sourceMappingURL=KPIChart-Dh0rn1bt-tt_uJ8rO.js.map
