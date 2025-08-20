import { v, h, A as A$1 } from './Spinner-BeNoTciJ-DsMN3-m0-BGGztM1w.js';
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

const d = {
  name: "BarChart",
  label: "Bar chart",
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
      name: "xAxis",
      type: "dimension",
      label: "X-Axis",
      required: true,
      config: {
        dataset: "ds"
      },
      category: "Chart data"
    },
    {
      name: "metrics",
      type: "measure",
      array: true,
      required: true,
      label: "Metrics",
      config: {
        dataset: "ds"
      },
      category: "Chart data"
    },
    {
      name: "sortBy",
      type: "dimensionOrMeasure",
      label: "Sort by (optional)",
      config: {
        dataset: "ds"
      },
      category: "Chart data"
    },
    {
      name: "limit",
      type: "number",
      label: "Limit results",
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
      name: "reverseXAxis",
      type: "boolean",
      label: "Reverse X Axis",
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
}, p = defineComponent(M, d, {
  props: (e, y, s) => {
    const a = [];
    e.sortBy ? a.push({
      property: e.sortBy,
      direction: e.sortBy.nativeType == "string" ? "asc" : "desc"
    }) : e.limit && a.push({
      property: e.metrics[0],
      direction: "desc"
    });
    const t = [e.xAxis], r = [...e.metrics, ...e.lineMetrics || []];
    return e.sortBy && h(e.sortBy) && !t.includes(e.sortBy) && t.push(e.sortBy), e.sortBy && A$1(e.sortBy) && !r.includes(e.sortBy) && r.push(e.sortBy), {
      ...e,
      clientContext: s,
      reverseXAxis: e.reverseXAxis,
      results: v({
        from: e.ds,
        select: [...t, ...r],
        orderBy: a,
        limit: e.limit || 50
      })
    };
  }
});

export { p as default, d as meta };
//# sourceMappingURL=BarChart-DZctNftw-Bs3Ivcbi.js.map
//# sourceMappingURL=BarChart-DZctNftw-Bs3Ivcbi.js.map
