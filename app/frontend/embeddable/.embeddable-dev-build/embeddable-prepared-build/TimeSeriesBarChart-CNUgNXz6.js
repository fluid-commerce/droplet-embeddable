import { v } from "./Spinner-BeNoTciJ-DsMN3-m0.js";
import { d as defineComponent } from "./index.esm-CVE60fla.js";
import { M } from "./index-i0fe1TXw-dUOnG9L2.js";
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
export {
  d as default,
  s as meta
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGltZVNlcmllc0JhckNoYXJ0LUNOVWdOWHo2LmpzIiwic291cmNlcyI6WyIvVXNlcnMvY2hyaXN0b3BoZXJjYXJsc29uL2ZsdWlkL2Ryb3BsZXQtZW1iZWRkYWJsZS9hcHAvZnJvbnRlbmQvZW1iZWRkYWJsZS9ub2RlX21vZHVsZXMvQGVtYmVkZGFibGUuY29tL3ZhbmlsbGEtY29tcG9uZW50cy9kaXN0L1RpbWVTZXJpZXNCYXJDaGFydC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsIGFzIHQgfSBmcm9tIFwiLi9pbmRleC5lc20tSkFoX0sxVkcuanNcIjtcbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCBhcyByIH0gZnJvbSBcIkBlbWJlZGRhYmxlLmNvbS9yZWFjdFwiO1xuaW1wb3J0IHsgQyBhcyBsIH0gZnJvbSBcIi4vaW5kZXgtaTBmZTFUWHcuanNcIjtcbmNvbnN0IHMgPSB7XG4gIG5hbWU6IFwiVGltZVNlcmllc0JhckNoYXJ0XCIsXG4gIGxhYmVsOiBcIkJhciBjaGFydCAodGltZS1zZXJpZXMpXCIsXG4gIGNsYXNzTmFtZXM6IFtcImluc2lkZS1jYXJkXCJdLFxuICBjYXRlZ29yeTogXCJDaGFydHM6IHRpbWUtc2VyaWVzXCIsXG4gIGlucHV0czogW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiZHNcIixcbiAgICAgIHR5cGU6IFwiZGF0YXNldFwiLFxuICAgICAgbGFiZWw6IFwiRGF0YXNldFwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiRGF0YXNldFwiLFxuICAgICAgZGVmYXVsdFZhbHVlOiAhMSxcbiAgICAgIGNhdGVnb3J5OiBcIkNoYXJ0IGRhdGFcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJ4QXhpc1wiLFxuICAgICAgdHlwZTogXCJkaW1lbnNpb25cIixcbiAgICAgIGxhYmVsOiBcIlgtQXhpc1wiLFxuICAgICAgY29uZmlnOiB7XG4gICAgICAgIGRhdGFzZXQ6IFwiZHNcIixcbiAgICAgICAgc3VwcG9ydGVkVHlwZXM6IFtcInRpbWVcIl0sXG4gICAgICAgIGhpZGVHcmFudWxhcml0eTogITBcbiAgICAgIH0sXG4gICAgICBjYXRlZ29yeTogXCJDaGFydCBkYXRhXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwibWV0cmljc1wiLFxuICAgICAgdHlwZTogXCJtZWFzdXJlXCIsXG4gICAgICBhcnJheTogITAsXG4gICAgICBsYWJlbDogXCJNZXRyaWNzXCIsXG4gICAgICBjb25maWc6IHtcbiAgICAgICAgZGF0YXNldDogXCJkc1wiXG4gICAgICB9LFxuICAgICAgY2F0ZWdvcnk6IFwiQ2hhcnQgZGF0YVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcImxpbmVNZXRyaWNzXCIsXG4gICAgICB0eXBlOiBcIm1lYXN1cmVcIixcbiAgICAgIGFycmF5OiAhMCxcbiAgICAgIGxhYmVsOiBcIkFkZCBhIGxpbmUocylcIixcbiAgICAgIGNvbmZpZzoge1xuICAgICAgICBkYXRhc2V0OiBcImRzXCJcbiAgICAgIH0sXG4gICAgICBjYXRlZ29yeTogXCJPcHRpb25hbCBjaGFydCBkYXRhXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwic2hvd1NlY29uZFlBeGlzXCIsXG4gICAgICB0eXBlOiBcImJvb2xlYW5cIixcbiAgICAgIGxhYmVsOiBcIlNob3cgMm5kIGF4aXNcIixcbiAgICAgIGNhdGVnb3J5OiBcIk9wdGlvbmFsIGNoYXJ0IGRhdGFcIixcbiAgICAgIGRlZmF1bHRWYWx1ZTogITFcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwic2Vjb25kQXhpc1RpdGxlXCIsXG4gICAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgICAgbGFiZWw6IFwiMm5kIGF4aXMgdGl0bGVcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlRoZSB0aXRsZSBmb3IgdGhlIGNoYXJ0XCIsXG4gICAgICBjYXRlZ29yeTogXCJPcHRpb25hbCBjaGFydCBkYXRhXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiZ3JhbnVsYXJpdHlcIixcbiAgICAgIHR5cGU6IFwiZ3JhbnVsYXJpdHlcIixcbiAgICAgIGxhYmVsOiBcIkdyYW51bGFyaXR5XCIsXG4gICAgICBkZWZhdWx0VmFsdWU6IFwid2Vla1wiLFxuICAgICAgY2F0ZWdvcnk6IFwiVmFyaWFibGVzIHRvIGNvbmZpZ3VyZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcInRpdGxlXCIsXG4gICAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgICAgbGFiZWw6IFwiVGl0bGVcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlRoZSB0aXRsZSBmb3IgdGhlIGNoYXJ0XCIsXG4gICAgICBjYXRlZ29yeTogXCJDaGFydCBzZXR0aW5nc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcImRlc2NyaXB0aW9uXCIsXG4gICAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgICAgbGFiZWw6IFwiRGVzY3JpcHRpb25cIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBkZXNjcmlwdGlvbiBmb3IgdGhlIGNoYXJ0XCIsXG4gICAgICBjYXRlZ29yeTogXCJDaGFydCBzZXR0aW5nc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcInNob3dMZWdlbmRcIixcbiAgICAgIHR5cGU6IFwiYm9vbGVhblwiLFxuICAgICAgbGFiZWw6IFwiU2hvdyBMZWdlbmRcIixcbiAgICAgIGNhdGVnb3J5OiBcIkNoYXJ0IHNldHRpbmdzXCIsXG4gICAgICBkZWZhdWx0VmFsdWU6ICEwXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcInNob3dMYWJlbHNcIixcbiAgICAgIHR5cGU6IFwiYm9vbGVhblwiLFxuICAgICAgbGFiZWw6IFwiU2hvdyBMYWJlbHNcIixcbiAgICAgIGNhdGVnb3J5OiBcIkNoYXJ0IHNldHRpbmdzXCIsXG4gICAgICBkZWZhdWx0VmFsdWU6ICExXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcImRpc3BsYXlIb3Jpem9udGFsbHlcIixcbiAgICAgIHR5cGU6IFwiYm9vbGVhblwiLFxuICAgICAgbGFiZWw6IFwiRGlzcGxheSBIb3Jpem9udGFsbHlcIixcbiAgICAgIGNhdGVnb3J5OiBcIkNoYXJ0IHNldHRpbmdzXCIsXG4gICAgICBkZWZhdWx0VmFsdWU6ICExXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcInN0YWNrTWV0cmljc1wiLFxuICAgICAgdHlwZTogXCJib29sZWFuXCIsXG4gICAgICBsYWJlbDogXCJTdGFjayBNZXRyaWNzXCIsXG4gICAgICBjYXRlZ29yeTogXCJDaGFydCBzZXR0aW5nc1wiLFxuICAgICAgZGVmYXVsdFZhbHVlOiAhMVxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJ4QXhpc1RpdGxlXCIsXG4gICAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgICAgbGFiZWw6IFwiWC1BeGlzIFRpdGxlXCIsXG4gICAgICBjYXRlZ29yeTogXCJDaGFydCBzZXR0aW5nc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcInlBeGlzVGl0bGVcIixcbiAgICAgIHR5cGU6IFwic3RyaW5nXCIsXG4gICAgICBsYWJlbDogXCJZLUF4aXMgVGl0bGVcIixcbiAgICAgIGNhdGVnb3J5OiBcIkNoYXJ0IHNldHRpbmdzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiZHBzXCIsXG4gICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgbGFiZWw6IFwiRGVjaW1hbCBQbGFjZXNcIixcbiAgICAgIGNhdGVnb3J5OiBcIkZvcm1hdHRpbmdcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJsaW1pdFwiLFxuICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgIGxhYmVsOiBcIkxpbWl0IHJlc3VsdHNcIixcbiAgICAgIGRlZmF1bHRWYWx1ZTogMTAwLFxuICAgICAgY2F0ZWdvcnk6IFwiQ2hhcnQgc2V0dGluZ3NcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJlbmFibGVEb3dubG9hZEFzQ1NWXCIsXG4gICAgICB0eXBlOiBcImJvb2xlYW5cIixcbiAgICAgIGxhYmVsOiBcIlNob3cgZG93bmxvYWQgYXMgQ1NWXCIsXG4gICAgICBjYXRlZ29yeTogXCJFeHBvcnQgb3B0aW9uc1wiLFxuICAgICAgZGVmYXVsdFZhbHVlOiAhMFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJlbmFibGVEb3dubG9hZEFzUE5HXCIsXG4gICAgICB0eXBlOiBcImJvb2xlYW5cIixcbiAgICAgIGxhYmVsOiBcIlNob3cgZG93bmxvYWQgYXMgUE5HXCIsXG4gICAgICBjYXRlZ29yeTogXCJFeHBvcnQgb3B0aW9uc1wiLFxuICAgICAgZGVmYXVsdFZhbHVlOiAhMFxuICAgIH1cbiAgXVxufSwgZCA9IHIobCwgcywge1xuICBwcm9wczogKGUpID0+IHtcbiAgICB2YXIgYTtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uZSxcbiAgICAgIGlzVFNCYXJDaGFydDogITAsXG4gICAgICByZXZlcnNlWEF4aXM6ICEwLFxuICAgICAgcmVzdWx0czogdCh7XG4gICAgICAgIGZyb206IGUuZHMsXG4gICAgICAgIGxpbWl0OiBlLmxpbWl0IHx8IDUwMCxcbiAgICAgICAgc2VsZWN0OiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgZGltZW5zaW9uOiAoYSA9IGUueEF4aXMpID09IG51bGwgPyB2b2lkIDAgOiBhLm5hbWUsXG4gICAgICAgICAgICBncmFudWxhcml0eTogZS5ncmFudWxhcml0eVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZS5tZXRyaWNzLFxuICAgICAgICAgIGUubGluZU1ldHJpY3NcbiAgICAgICAgXSxcbiAgICAgICAgb3JkZXJCeTogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHByb3BlcnR5OiBlLnhBeGlzLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiBcImRlc2NcIlxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSlcbiAgICB9O1xuICB9XG59KTtcbmV4cG9ydCB7XG4gIGQgYXMgZGVmYXVsdCxcbiAgcyBhcyBtZXRhXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9VGltZVNlcmllc0JhckNoYXJ0LmpzLm1hcFxuIl0sIm5hbWVzIjpbInIiLCJsIiwidCJdLCJtYXBwaW5ncyI6Ijs7O0FBR0ssTUFBQyxJQUFJO0FBQUEsRUFDUixNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsRUFDUCxZQUFZLENBQUMsYUFBYTtBQUFBLEVBQzFCLFVBQVU7QUFBQSxFQUNWLFFBQVE7QUFBQSxJQUNOO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxhQUFhO0FBQUEsTUFDYixjQUFjO0FBQUEsTUFDZCxVQUFVO0FBQUEsSUFDaEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxRQUFRO0FBQUEsUUFDTixTQUFTO0FBQUEsUUFDVCxnQkFBZ0IsQ0FBQyxNQUFNO0FBQUEsUUFDdkIsaUJBQWlCO0FBQUEsTUFDekI7QUFBQSxNQUNNLFVBQVU7QUFBQSxJQUNoQjtBQUFBLElBQ0k7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxRQUNOLFNBQVM7QUFBQSxNQUNqQjtBQUFBLE1BQ00sVUFBVTtBQUFBLElBQ2hCO0FBQUEsSUFDSTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsT0FBTztBQUFBLE1BQ1AsUUFBUTtBQUFBLFFBQ04sU0FBUztBQUFBLE1BQ2pCO0FBQUEsTUFDTSxVQUFVO0FBQUEsSUFDaEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxVQUFVO0FBQUEsTUFDVixjQUFjO0FBQUEsSUFDcEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxhQUFhO0FBQUEsTUFDYixVQUFVO0FBQUEsSUFDaEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxjQUFjO0FBQUEsTUFDZCxVQUFVO0FBQUEsSUFDaEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxhQUFhO0FBQUEsTUFDYixVQUFVO0FBQUEsSUFDaEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxhQUFhO0FBQUEsTUFDYixVQUFVO0FBQUEsSUFDaEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxVQUFVO0FBQUEsTUFDVixjQUFjO0FBQUEsSUFDcEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxVQUFVO0FBQUEsTUFDVixjQUFjO0FBQUEsSUFDcEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxVQUFVO0FBQUEsTUFDVixjQUFjO0FBQUEsSUFDcEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxVQUFVO0FBQUEsTUFDVixjQUFjO0FBQUEsSUFDcEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxVQUFVO0FBQUEsSUFDaEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxVQUFVO0FBQUEsSUFDaEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxVQUFVO0FBQUEsSUFDaEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxjQUFjO0FBQUEsTUFDZCxVQUFVO0FBQUEsSUFDaEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxVQUFVO0FBQUEsTUFDVixjQUFjO0FBQUEsSUFDcEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxVQUFVO0FBQUEsTUFDVixjQUFjO0FBQUEsSUFDcEI7QUFBQSxFQUNBO0FBQ0EsR0FBRyxJQUFJQSxnQkFBRUMsR0FBRyxHQUFHO0FBQUEsRUFDYixPQUFPLENBQUMsTUFBTTtBQUNaLFFBQUk7QUFDSixXQUFPO0FBQUEsTUFDTCxHQUFHO0FBQUEsTUFDSCxjQUFjO0FBQUEsTUFDZCxjQUFjO0FBQUEsTUFDZCxTQUFTQyxFQUFFO0FBQUEsUUFDVCxNQUFNLEVBQUU7QUFBQSxRQUNSLE9BQU8sRUFBRSxTQUFTO0FBQUEsUUFDbEIsUUFBUTtBQUFBLFVBQ047QUFBQSxZQUNFLFlBQVksSUFBSSxFQUFFLFVBQVUsT0FBTyxTQUFTLEVBQUU7QUFBQSxZQUM5QyxhQUFhLEVBQUU7QUFBQSxVQUMzQjtBQUFBLFVBQ1UsRUFBRTtBQUFBLFVBQ0YsRUFBRTtBQUFBLFFBQ1o7QUFBQSxRQUNRLFNBQVM7QUFBQSxVQUNQO0FBQUEsWUFDRSxVQUFVLEVBQUU7QUFBQSxZQUNaLFdBQVc7QUFBQSxVQUN2QjtBQUFBLFFBQ0E7QUFBQSxNQUNBLENBQU87QUFBQSxJQUNQO0FBQUEsRUFDRTtBQUNGLENBQUM7IiwieF9nb29nbGVfaWdub3JlTGlzdCI6WzBdfQ==
