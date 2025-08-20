import { v } from './Spinner-BeNoTciJ-DsMN3-m0-BGGztM1w.js';
import { d as defineComponent } from './index.esm-CVE60fla-BtsXn2z1.js';
import { q } from './index-BjLADGiF-zeK9Ivw1-CRZm6DvK.js';
import './jsx-runtime-CjQXaSqQ-CjMA1-fF-CkV96GpT.js';
import './embeddable-component-BD9bezsm.js';
import './index-BV21PmyC.js';
import './common-Badpcggq-Batnw2Ed-CkZpixXy.js';
import './useTimeseries-CKhM5zgf-Dd4vgjj--FzCeDPUA.js';
import './subYears-CyoGbgS0-DIOARaW6-mzW26xd4.js';
import './format-TjzP8gQX-Cs7Vwno2-CeUXJh2P.js';
import './getBarChartOptions-B4IGPfRT-Q4fKI4Ki-DKQmduZK.js';
import './getStackedChartData-DmWnIJXP-Ji_he_TH-CTtJMDP0.js';
import './Container-mop-J7T8-BpqPaGKG-DiR4tjay.js';
import './Title-n-I3Fdvw-CW-j1pzr-DoihF5tM.js';

const o = {
  name: "TimeSeriesStackedBarChart",
  label: "Grouped bar chart (time-series)",
  category: "Charts: time-series",
  classNames: ["inside-card"],
  inputs: [
    {
      name: "ds",
      type: "dataset",
      label: "Dataset to display",
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
      name: "granularity",
      type: "granularity",
      label: "Granularity",
      defaultValue: "week",
      category: "Variables to configure"
    },
    {
      name: "segment",
      type: "dimension",
      label: "Grouping",
      config: {
        dataset: "ds",
        hideGranularity: true
      },
      category: "Chart data"
    },
    {
      name: "metric",
      type: "measure",
      label: "Metric",
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
      name: "stackBars",
      type: "boolean",
      label: "Stack bars",
      defaultValue: true,
      category: "Chart settings"
    },
    {
      name: "showLegend",
      type: "boolean",
      label: "Show legend",
      defaultValue: true,
      category: "Chart settings"
    },
    {
      name: "maxSegments",
      type: "number",
      label: "Max Legend Items",
      defaultValue: 8,
      category: "Chart settings"
    },
    {
      name: "showLabels",
      type: "boolean",
      label: "Show Labels",
      defaultValue: false,
      category: "Chart settings"
    },
    {
      name: "showTotals",
      type: "boolean",
      label: "Show Totals Above Stacked Bars",
      defaultValue: false,
      category: "Chart settings"
    },
    {
      name: "displayHorizontally",
      type: "boolean",
      label: "Display Horizontally",
      category: "Chart settings",
      defaultValue: false
    },
    {
      name: "displayAsPercentage",
      type: "boolean",
      label: "Display as Percentages",
      defaultValue: false,
      category: "Chart settings"
    },
    {
      name: "dps",
      type: "number",
      label: "Decimal Places",
      category: "Formatting"
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
}, d = defineComponent(q, o, {
  props: (e) => {
    var a;
    return {
      ...e,
      isGroupedBar: true,
      isTSGroupedBarChart: true,
      reverseXAxis: true,
      results: v({
        from: e.ds,
        select: [
          {
            dimension: (a = e.xAxis) == null ? void 0 : a.name,
            granularity: e.granularity
          },
          e.segment,
          e.metric
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

export { d as default, o as meta };
//# sourceMappingURL=TimeSeriesStackedBarChart-qKCWYSLF-ClYRu4iZ.js.map
//# sourceMappingURL=TimeSeriesStackedBarChart-qKCWYSLF-ClYRu4iZ.js.map
