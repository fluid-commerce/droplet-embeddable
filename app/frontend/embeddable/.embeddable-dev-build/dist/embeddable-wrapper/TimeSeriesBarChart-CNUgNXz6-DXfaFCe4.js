import { v } from './Spinner-BeNoTciJ-DsMN3-m0-BGGztM1w.js';
import { d as defineComponent } from './index.esm-CVE60fla-BtsXn2z1.js';
import { M } from './index-i0fe1TXw-dUOnG9L2-DfSbwC0Q.js';
import './jsx-runtime-CjQXaSqQ-CjMA1-fF-CkV96GpT.js';
import './embeddable-component-BD9bezsm.js';
import './index-BV21PmyC.js';
import './useTimeseries-CKhM5zgf-Dd4vgjj--FzCeDPUA.js';
import './subYears-CyoGbgS0-DIOARaW6-mzW26xd4.js';
import './format-TjzP8gQX-Cs7Vwno2-CeUXJh2P.js';
import './Container-mop-J7T8-BpqPaGKG-DiR4tjay.js';
import './Title-n-I3Fdvw-CW-j1pzr-DoihF5tM.js';
import './BarChart-Q0q_vPOX-CbLXSR23-UHJkTnBl.js';
import './common-Badpcggq-Batnw2Ed-CkZpixXy.js';
import './getBarChartOptions-B4IGPfRT-Q4fKI4Ki-DKQmduZK.js';

const s = {
  name: "TimeSeriesBarChart",
  label: "Bar chart (time-series)",
  classNames: ["inside-card"],
  category: "Charts: time-series",
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
      name: "xAxis",
      type: "dimension",
      label: "X-Axis",
      config: {
        dataset: "ds",
        supportedTypes: ["time"],
        hideGranularity: true
      },
      category: "Chart data"
    },
    {
      name: "metrics",
      type: "measure",
      array: true,
      label: "Metrics",
      config: {
        dataset: "ds"
      },
      category: "Chart data"
    },
    {
      name: "lineMetrics",
      type: "measure",
      array: true,
      label: "Add a line(s)",
      config: {
        dataset: "ds"
      },
      category: "Optional chart data"
    },
    {
      name: "showSecondYAxis",
      type: "boolean",
      label: "Show 2nd axis",
      category: "Optional chart data",
      defaultValue: false
    },
    {
      name: "secondAxisTitle",
      type: "string",
      label: "2nd axis title",
      description: "The title for the chart",
      category: "Optional chart data"
    },
    {
      name: "granularity",
      type: "granularity",
      label: "Granularity",
      defaultValue: "week",
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
      name: "showLegend",
      type: "boolean",
      label: "Show Legend",
      category: "Chart settings",
      defaultValue: true
    },
    {
      name: "showLabels",
      type: "boolean",
      label: "Show Labels",
      category: "Chart settings",
      defaultValue: false
    },
    {
      name: "displayHorizontally",
      type: "boolean",
      label: "Display Horizontally",
      category: "Chart settings",
      defaultValue: false
    },
    {
      name: "stackMetrics",
      type: "boolean",
      label: "Stack Metrics",
      category: "Chart settings",
      defaultValue: false
    },
    {
      name: "xAxisTitle",
      type: "string",
      label: "X-Axis Title",
      category: "Chart settings"
    },
    {
      name: "yAxisTitle",
      type: "string",
      label: "Y-Axis Title",
      category: "Chart settings"
    },
    {
      name: "dps",
      type: "number",
      label: "Decimal Places",
      category: "Formatting"
    },
    {
      name: "limit",
      type: "number",
      label: "Limit results",
      defaultValue: 100,
      category: "Chart settings"
    },
    {
      name: "enableDownloadAsCSV",
      type: "boolean",
      label: "Show download as CSV",
      category: "Export options",
      defaultValue: true
    },
    {
      name: "enableDownloadAsPNG",
      type: "boolean",
      label: "Show download as PNG",
      category: "Export options",
      defaultValue: true
    }
  ]
}, d = defineComponent(M, s, {
  props: (e) => {
    var a;
    return {
      ...e,
      isTSBarChart: true,
      reverseXAxis: true,
      results: v({
        from: e.ds,
        limit: e.limit || 500,
        select: [
          {
            dimension: (a = e.xAxis) == null ? void 0 : a.name,
            granularity: e.granularity
          },
          e.metrics,
          e.lineMetrics
        ],
        orderBy: [
          {
            property: e.xAxis,
            direction: "desc"
          }
        ]
      })
    };
  }
});

export { d as default, s as meta };
//# sourceMappingURL=TimeSeriesBarChart-CNUgNXz6-DXfaFCe4.js.map
//# sourceMappingURL=TimeSeriesBarChart-CNUgNXz6-DXfaFCe4.js.map
