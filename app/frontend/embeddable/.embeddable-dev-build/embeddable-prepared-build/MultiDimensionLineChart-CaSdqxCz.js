import { v } from "./Spinner-BeNoTciJ-DsMN3-m0.js";
import { d as defineComponent } from "./index.esm-CVE60fla.js";
import { O } from "./index-BKNn0bB9-DCRB_cuI.js";
const n = {
  name: "MultiDimensionLineChart",
  label: "Grouped line chart (time-series)",
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
      name: "yAxisMin",
      type: "number",
      label: "Y-Axis minimum value",
      category: "Chart settings"
    },
    {
      name: "limit",
      type: "number",
      label: "Limit results",
      defaultValue: 100,
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
}, d = defineComponent(O, n, {
  props: (e) => {
    var t;
    const a = [];
    return a.push({
      property: e.xAxis,
      direction: "desc"
    }), {
      ...e,
      isMultiDimensionLine: true,
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
export {
  d as default,
  n as meta
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXVsdGlEaW1lbnNpb25MaW5lQ2hhcnQtQ2FTZHF4Q3ouanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaHJpc3RvcGhlcmNhcmxzb24vZmx1aWQvZHJvcGxldC1lbWJlZGRhYmxlL2FwcC9mcm9udGVuZC9lbWJlZGRhYmxlL25vZGVfbW9kdWxlcy9AZW1iZWRkYWJsZS5jb20vdmFuaWxsYS1jb21wb25lbnRzL2Rpc3QvTXVsdGlEaW1lbnNpb25MaW5lQ2hhcnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbCBhcyByIH0gZnJvbSBcIi4vaW5kZXguZXNtLUpBaF9LMVZHLmpzXCI7XG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgYXMgaSB9IGZyb20gXCJAZW1iZWRkYWJsZS5jb20vcmVhY3RcIjtcbmltcG9ydCB7IEMgYXMgbCB9IGZyb20gXCIuL2luZGV4LUJLTm4wYkI5LmpzXCI7XG5jb25zdCBuID0ge1xuICBuYW1lOiBcIk11bHRpRGltZW5zaW9uTGluZUNoYXJ0XCIsXG4gIGxhYmVsOiBcIkdyb3VwZWQgbGluZSBjaGFydCAodGltZS1zZXJpZXMpXCIsXG4gIGNsYXNzTmFtZXM6IFtcImluc2lkZS1jYXJkXCJdLFxuICBjYXRlZ29yeTogXCJDaGFydHM6IHRpbWUtc2VyaWVzXCIsXG4gIGlucHV0czogW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiZHNcIixcbiAgICAgIHR5cGU6IFwiZGF0YXNldFwiLFxuICAgICAgbGFiZWw6IFwiRGF0YXNldCB0byBkaXNwbGF5XCIsXG4gICAgICBjYXRlZ29yeTogXCJDaGFydCBkYXRhXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwieEF4aXNcIixcbiAgICAgIHR5cGU6IFwiZGltZW5zaW9uXCIsXG4gICAgICBsYWJlbDogXCJYLUF4aXNcIixcbiAgICAgIGNvbmZpZzoge1xuICAgICAgICBkYXRhc2V0OiBcImRzXCIsXG4gICAgICAgIHN1cHBvcnRlZFR5cGVzOiBbXCJ0aW1lXCJdLFxuICAgICAgICBoaWRlR3JhbnVsYXJpdHk6ICEwXG4gICAgICB9LFxuICAgICAgY2F0ZWdvcnk6IFwiQ2hhcnQgZGF0YVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcInNlZ21lbnRcIixcbiAgICAgIHR5cGU6IFwiZGltZW5zaW9uXCIsXG4gICAgICBsYWJlbDogXCJHcm91cGluZ1wiLFxuICAgICAgY29uZmlnOiB7XG4gICAgICAgIGRhdGFzZXQ6IFwiZHNcIixcbiAgICAgICAgaGlkZUdyYW51bGFyaXR5OiAhMFxuICAgICAgfSxcbiAgICAgIGNhdGVnb3J5OiBcIkNoYXJ0IGRhdGFcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJtZXRyaWNcIixcbiAgICAgIHR5cGU6IFwibWVhc3VyZVwiLFxuICAgICAgbGFiZWw6IFwiTWV0cmljXCIsXG4gICAgICBjb25maWc6IHtcbiAgICAgICAgZGF0YXNldDogXCJkc1wiLFxuICAgICAgICBoaWRlR3JhbnVsYXJpdHk6ICEwXG4gICAgICB9LFxuICAgICAgY2F0ZWdvcnk6IFwiQ2hhcnQgZGF0YVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcImdyYW51bGFyaXR5XCIsXG4gICAgICB0eXBlOiBcImdyYW51bGFyaXR5XCIsXG4gICAgICBsYWJlbDogXCJHcmFudWxhcml0eVwiLFxuICAgICAgZGVmYXVsdFZhbHVlOiBcIndlZWtcIixcbiAgICAgIGNhdGVnb3J5OiBcIlZhcmlhYmxlcyB0byBjb25maWd1cmVcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJ0aXRsZVwiLFxuICAgICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICAgIGxhYmVsOiBcIlRpdGxlXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJUaGUgdGl0bGUgZm9yIHRoZSBjaGFydFwiLFxuICAgICAgY2F0ZWdvcnk6IFwiQ2hhcnQgc2V0dGluZ3NcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJkZXNjcmlwdGlvblwiLFxuICAgICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICAgIGxhYmVsOiBcIkRlc2NyaXB0aW9uXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJUaGUgZGVzY3JpcHRpb24gZm9yIHRoZSBjaGFydFwiLFxuICAgICAgY2F0ZWdvcnk6IFwiQ2hhcnQgc2V0dGluZ3NcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJzaG93TGVnZW5kXCIsXG4gICAgICB0eXBlOiBcImJvb2xlYW5cIixcbiAgICAgIGxhYmVsOiBcIlNob3cgbGVnZW5kXCIsXG4gICAgICBkZWZhdWx0VmFsdWU6ICEwLFxuICAgICAgY2F0ZWdvcnk6IFwiQ2hhcnQgc2V0dGluZ3NcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJtYXhTZWdtZW50c1wiLFxuICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgIGxhYmVsOiBcIk1heCBMZWdlbmQgSXRlbXNcIixcbiAgICAgIGRlZmF1bHRWYWx1ZTogOCxcbiAgICAgIGNhdGVnb3J5OiBcIkNoYXJ0IHNldHRpbmdzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwic2hvd0xhYmVsc1wiLFxuICAgICAgdHlwZTogXCJib29sZWFuXCIsXG4gICAgICBsYWJlbDogXCJTaG93IExhYmVsc1wiLFxuICAgICAgZGVmYXVsdFZhbHVlOiAhMSxcbiAgICAgIGNhdGVnb3J5OiBcIkNoYXJ0IHNldHRpbmdzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwieUF4aXNNaW5cIixcbiAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICBsYWJlbDogXCJZLUF4aXMgbWluaW11bSB2YWx1ZVwiLFxuICAgICAgY2F0ZWdvcnk6IFwiQ2hhcnQgc2V0dGluZ3NcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJsaW1pdFwiLFxuICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgIGxhYmVsOiBcIkxpbWl0IHJlc3VsdHNcIixcbiAgICAgIGRlZmF1bHRWYWx1ZTogMTAwLFxuICAgICAgY2F0ZWdvcnk6IFwiQ2hhcnQgc2V0dGluZ3NcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJkcHNcIixcbiAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICBsYWJlbDogXCJEZWNpbWFsIFBsYWNlc1wiLFxuICAgICAgY2F0ZWdvcnk6IFwiRm9ybWF0dGluZ1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcImVuYWJsZURvd25sb2FkQXNDU1ZcIixcbiAgICAgIHR5cGU6IFwiYm9vbGVhblwiLFxuICAgICAgbGFiZWw6IFwiU2hvdyBkb3dubG9hZCBhcyBDU1ZcIixcbiAgICAgIGNhdGVnb3J5OiBcIkV4cG9ydCBvcHRpb25zXCIsXG4gICAgICBkZWZhdWx0VmFsdWU6ICEwXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcImVuYWJsZURvd25sb2FkQXNQTkdcIixcbiAgICAgIHR5cGU6IFwiYm9vbGVhblwiLFxuICAgICAgbGFiZWw6IFwiU2hvdyBkb3dubG9hZCBhcyBQTkdcIixcbiAgICAgIGNhdGVnb3J5OiBcIkV4cG9ydCBvcHRpb25zXCIsXG4gICAgICBkZWZhdWx0VmFsdWU6ICEwXG4gICAgfVxuICBdXG59LCBkID0gaShsLCBuLCB7XG4gIHByb3BzOiAoZSkgPT4ge1xuICAgIHZhciB0O1xuICAgIGNvbnN0IGEgPSBbXTtcbiAgICByZXR1cm4gYS5wdXNoKHtcbiAgICAgIHByb3BlcnR5OiBlLnhBeGlzLFxuICAgICAgZGlyZWN0aW9uOiBcImRlc2NcIlxuICAgIH0pLCB7XG4gICAgICAuLi5lLFxuICAgICAgaXNNdWx0aURpbWVuc2lvbkxpbmU6ICEwLFxuICAgICAgcmVzdWx0czogcih7XG4gICAgICAgIGZyb206IGUuZHMsXG4gICAgICAgIGxpbWl0OiBlLmxpbWl0IHx8IDUwMCxcbiAgICAgICAgb3JkZXJCeTogYSxcbiAgICAgICAgc2VsZWN0OiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgZGltZW5zaW9uOiAodCA9IGUueEF4aXMpID09IG51bGwgPyB2b2lkIDAgOiB0Lm5hbWUsXG4gICAgICAgICAgICBncmFudWxhcml0eTogZS5ncmFudWxhcml0eVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZS5zZWdtZW50LFxuICAgICAgICAgIGUubWV0cmljXG4gICAgICAgIF1cbiAgICAgIH0pXG4gICAgfTtcbiAgfVxufSk7XG5leHBvcnQge1xuICBkIGFzIGRlZmF1bHQsXG4gIG4gYXMgbWV0YVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU11bHRpRGltZW5zaW9uTGluZUNoYXJ0LmpzLm1hcFxuIl0sIm5hbWVzIjpbImkiLCJsIiwiciJdLCJtYXBwaW5ncyI6Ijs7O0FBR0ssTUFBQyxJQUFJO0FBQUEsRUFDUixNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsRUFDUCxZQUFZLENBQUMsYUFBYTtBQUFBLEVBQzFCLFVBQVU7QUFBQSxFQUNWLFFBQVE7QUFBQSxJQUNOO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxVQUFVO0FBQUEsSUFDaEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxRQUFRO0FBQUEsUUFDTixTQUFTO0FBQUEsUUFDVCxnQkFBZ0IsQ0FBQyxNQUFNO0FBQUEsUUFDdkIsaUJBQWlCO0FBQUEsTUFDekI7QUFBQSxNQUNNLFVBQVU7QUFBQSxJQUNoQjtBQUFBLElBQ0k7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxRQUNOLFNBQVM7QUFBQSxRQUNULGlCQUFpQjtBQUFBLE1BQ3pCO0FBQUEsTUFDTSxVQUFVO0FBQUEsSUFDaEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxRQUFRO0FBQUEsUUFDTixTQUFTO0FBQUEsUUFDVCxpQkFBaUI7QUFBQSxNQUN6QjtBQUFBLE1BQ00sVUFBVTtBQUFBLElBQ2hCO0FBQUEsSUFDSTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsY0FBYztBQUFBLE1BQ2QsVUFBVTtBQUFBLElBQ2hCO0FBQUEsSUFDSTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsYUFBYTtBQUFBLE1BQ2IsVUFBVTtBQUFBLElBQ2hCO0FBQUEsSUFDSTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsYUFBYTtBQUFBLE1BQ2IsVUFBVTtBQUFBLElBQ2hCO0FBQUEsSUFDSTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsY0FBYztBQUFBLE1BQ2QsVUFBVTtBQUFBLElBQ2hCO0FBQUEsSUFDSTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsY0FBYztBQUFBLE1BQ2QsVUFBVTtBQUFBLElBQ2hCO0FBQUEsSUFDSTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsY0FBYztBQUFBLE1BQ2QsVUFBVTtBQUFBLElBQ2hCO0FBQUEsSUFDSTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsVUFBVTtBQUFBLElBQ2hCO0FBQUEsSUFDSTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsY0FBYztBQUFBLE1BQ2QsVUFBVTtBQUFBLElBQ2hCO0FBQUEsSUFDSTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsVUFBVTtBQUFBLElBQ2hCO0FBQUEsSUFDSTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsVUFBVTtBQUFBLE1BQ1YsY0FBYztBQUFBLElBQ3BCO0FBQUEsSUFDSTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsVUFBVTtBQUFBLE1BQ1YsY0FBYztBQUFBLElBQ3BCO0FBQUEsRUFDQTtBQUNBLEdBQUcsSUFBSUEsZ0JBQUVDLEdBQUcsR0FBRztBQUFBLEVBQ2IsT0FBTyxDQUFDLE1BQU07QUFDWixRQUFJO0FBQ0osVUFBTSxJQUFJLENBQUE7QUFDVixXQUFPLEVBQUUsS0FBSztBQUFBLE1BQ1osVUFBVSxFQUFFO0FBQUEsTUFDWixXQUFXO0FBQUEsSUFDakIsQ0FBSyxHQUFHO0FBQUEsTUFDRixHQUFHO0FBQUEsTUFDSCxzQkFBc0I7QUFBQSxNQUN0QixTQUFTQyxFQUFFO0FBQUEsUUFDVCxNQUFNLEVBQUU7QUFBQSxRQUNSLE9BQU8sRUFBRSxTQUFTO0FBQUEsUUFDbEIsU0FBUztBQUFBLFFBQ1QsUUFBUTtBQUFBLFVBQ047QUFBQSxZQUNFLFlBQVksSUFBSSxFQUFFLFVBQVUsT0FBTyxTQUFTLEVBQUU7QUFBQSxZQUM5QyxhQUFhLEVBQUU7QUFBQSxVQUMzQjtBQUFBLFVBQ1UsRUFBRTtBQUFBLFVBQ0YsRUFBRTtBQUFBLFFBQ1o7QUFBQSxNQUNBLENBQU87QUFBQSxJQUNQO0FBQUEsRUFDRTtBQUNGLENBQUM7IiwieF9nb29nbGVfaWdub3JlTGlzdCI6WzBdfQ==
