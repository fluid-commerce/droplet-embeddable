import { v } from './Spinner-BeNoTciJ-DsMN3-m0-BGGztM1w.js';
import { d as defineComponent } from './index.esm-CVE60fla-BtsXn2z1.js';
import { O } from './index-BKNn0bB9-DCRB_cuI-Cdxm0dsa.js';
import './jsx-runtime-CjQXaSqQ-CjMA1-fF-CkV96GpT.js';
import './embeddable-component-BD9bezsm.js';
import './index-BV21PmyC.js';
import './common-Badpcggq-Batnw2Ed-CkZpixXy.js';
import './chartjs-adapter-date-fns.esm-vRFmo1LD-Cpw3-dRH-QkYakUVd.js';
import './format-TjzP8gQX-Cs7Vwno2-CeUXJh2P.js';
import './differenceInSeconds-D-PK4HfM-Dm2bjhDp-CBEYj0I9.js';
import './subYears-CyoGbgS0-DIOARaW6-mzW26xd4.js';
import './useTimeseries-CKhM5zgf-Dd4vgjj--FzCeDPUA.js';
import './formatDateTooltips-B_XOEw3--6C5OZZFh-DwNDIsvB.js';
import './getStackedChartData-DmWnIJXP-Ji_he_TH-CTtJMDP0.js';
import './Container-mop-J7T8-BpqPaGKG-DiR4tjay.js';
import './Title-n-I3Fdvw-CW-j1pzr-DoihF5tM.js';

const s = {
  name: "StackedAreaChart",
  label: "Stacked area chart (time-series)",
  classNames: ["inside-card"],
  category: "Charts: time-series",
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
      name: "segment",
      type: "dimension",
      label: "Segment",
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
        dataset: "ds",
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
      name: "displayAsPercentage",
      type: "boolean",
      label: "Display as Percentages",
      defaultValue: false,
      category: "Chart settings"
    },
    {
      name: "yAxisMin",
      type: "number",
      label: "Y-Axis minimum value",
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
}, d = defineComponent(O, s, {
  props: (e) => {
    var t;
    const a = [];
    return a.push({
      property: e.xAxis,
      direction: "desc"
    }), {
      ...e,
      results: v({
        from: e.ds,
        limit: e.limit || 500,
        orderBy: a,
        select: [
          {
            dimension: (t = e.xAxis) == null ? void 0 : t.name,
            granularity: e.granularity
          },
          e.segment,
          e.metric
        ]
      })
    };
  }
});

export { d as default, s as meta };
//# sourceMappingURL=StackedAreaChart-DCxrs_KT-CSslGf2K.js.map
//# sourceMappingURL=StackedAreaChart-DCxrs_KT-CSslGf2K.js.map
