import { v } from "./Spinner-BeNoTciJ-DsMN3-m0.js";
import { d as defineComponent } from "./index.esm-CVE60fla.js";
import { q } from "./index-BjLADGiF-zeK9Ivw1.js";
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
export {
  d as default,
  o as meta
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGltZVNlcmllc1N0YWNrZWRCYXJDaGFydC1xS0NXWVNMRi5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL2NocmlzdG9waGVyY2FybHNvbi9mbHVpZC9kcm9wbGV0LWVtYmVkZGFibGUvYXBwL2Zyb250ZW5kL2VtYmVkZGFibGUvbm9kZV9tb2R1bGVzL0BlbWJlZGRhYmxlLmNvbS92YW5pbGxhLWNvbXBvbmVudHMvZGlzdC9UaW1lU2VyaWVzU3RhY2tlZEJhckNoYXJ0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGwgYXMgdCB9IGZyb20gXCIuL2luZGV4LmVzbS1KQWhfSzFWRy5qc1wiO1xuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IGFzIHIgfSBmcm9tIFwiQGVtYmVkZGFibGUuY29tL3JlYWN0XCI7XG5pbXBvcnQgeyBDIGFzIGwgfSBmcm9tIFwiLi9pbmRleC1CakxBREdpRi5qc1wiO1xuY29uc3QgbyA9IHtcbiAgbmFtZTogXCJUaW1lU2VyaWVzU3RhY2tlZEJhckNoYXJ0XCIsXG4gIGxhYmVsOiBcIkdyb3VwZWQgYmFyIGNoYXJ0ICh0aW1lLXNlcmllcylcIixcbiAgY2F0ZWdvcnk6IFwiQ2hhcnRzOiB0aW1lLXNlcmllc1wiLFxuICBjbGFzc05hbWVzOiBbXCJpbnNpZGUtY2FyZFwiXSxcbiAgaW5wdXRzOiBbXG4gICAge1xuICAgICAgbmFtZTogXCJkc1wiLFxuICAgICAgdHlwZTogXCJkYXRhc2V0XCIsXG4gICAgICBsYWJlbDogXCJEYXRhc2V0IHRvIGRpc3BsYXlcIixcbiAgICAgIGNhdGVnb3J5OiBcIkNoYXJ0IGRhdGFcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJ4QXhpc1wiLFxuICAgICAgdHlwZTogXCJkaW1lbnNpb25cIixcbiAgICAgIGxhYmVsOiBcIlgtQXhpc1wiLFxuICAgICAgY29uZmlnOiB7XG4gICAgICAgIGRhdGFzZXQ6IFwiZHNcIixcbiAgICAgICAgc3VwcG9ydGVkVHlwZXM6IFtcInRpbWVcIl0sXG4gICAgICAgIGhpZGVHcmFudWxhcml0eTogITBcbiAgICAgIH0sXG4gICAgICBjYXRlZ29yeTogXCJDaGFydCBkYXRhXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiZ3JhbnVsYXJpdHlcIixcbiAgICAgIHR5cGU6IFwiZ3JhbnVsYXJpdHlcIixcbiAgICAgIGxhYmVsOiBcIkdyYW51bGFyaXR5XCIsXG4gICAgICBkZWZhdWx0VmFsdWU6IFwid2Vla1wiLFxuICAgICAgY2F0ZWdvcnk6IFwiVmFyaWFibGVzIHRvIGNvbmZpZ3VyZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcInNlZ21lbnRcIixcbiAgICAgIHR5cGU6IFwiZGltZW5zaW9uXCIsXG4gICAgICBsYWJlbDogXCJHcm91cGluZ1wiLFxuICAgICAgY29uZmlnOiB7XG4gICAgICAgIGRhdGFzZXQ6IFwiZHNcIixcbiAgICAgICAgaGlkZUdyYW51bGFyaXR5OiAhMFxuICAgICAgfSxcbiAgICAgIGNhdGVnb3J5OiBcIkNoYXJ0IGRhdGFcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJtZXRyaWNcIixcbiAgICAgIHR5cGU6IFwibWVhc3VyZVwiLFxuICAgICAgbGFiZWw6IFwiTWV0cmljXCIsXG4gICAgICBjb25maWc6IHtcbiAgICAgICAgZGF0YXNldDogXCJkc1wiXG4gICAgICB9LFxuICAgICAgY2F0ZWdvcnk6IFwiQ2hhcnQgZGF0YVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcInRpdGxlXCIsXG4gICAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgICAgbGFiZWw6IFwiVGl0bGVcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlRoZSB0aXRsZSBmb3IgdGhlIGNoYXJ0XCIsXG4gICAgICBjYXRlZ29yeTogXCJDaGFydCBzZXR0aW5nc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcImRlc2NyaXB0aW9uXCIsXG4gICAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgICAgbGFiZWw6IFwiRGVzY3JpcHRpb25cIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBkZXNjcmlwdGlvbiBmb3IgdGhlIGNoYXJ0XCIsXG4gICAgICBjYXRlZ29yeTogXCJDaGFydCBzZXR0aW5nc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcInN0YWNrQmFyc1wiLFxuICAgICAgdHlwZTogXCJib29sZWFuXCIsXG4gICAgICBsYWJlbDogXCJTdGFjayBiYXJzXCIsXG4gICAgICBkZWZhdWx0VmFsdWU6ICEwLFxuICAgICAgY2F0ZWdvcnk6IFwiQ2hhcnQgc2V0dGluZ3NcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJzaG93TGVnZW5kXCIsXG4gICAgICB0eXBlOiBcImJvb2xlYW5cIixcbiAgICAgIGxhYmVsOiBcIlNob3cgbGVnZW5kXCIsXG4gICAgICBkZWZhdWx0VmFsdWU6ICEwLFxuICAgICAgY2F0ZWdvcnk6IFwiQ2hhcnQgc2V0dGluZ3NcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJtYXhTZWdtZW50c1wiLFxuICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgIGxhYmVsOiBcIk1heCBMZWdlbmQgSXRlbXNcIixcbiAgICAgIGRlZmF1bHRWYWx1ZTogOCxcbiAgICAgIGNhdGVnb3J5OiBcIkNoYXJ0IHNldHRpbmdzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwic2hvd0xhYmVsc1wiLFxuICAgICAgdHlwZTogXCJib29sZWFuXCIsXG4gICAgICBsYWJlbDogXCJTaG93IExhYmVsc1wiLFxuICAgICAgZGVmYXVsdFZhbHVlOiAhMSxcbiAgICAgIGNhdGVnb3J5OiBcIkNoYXJ0IHNldHRpbmdzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwic2hvd1RvdGFsc1wiLFxuICAgICAgdHlwZTogXCJib29sZWFuXCIsXG4gICAgICBsYWJlbDogXCJTaG93IFRvdGFscyBBYm92ZSBTdGFja2VkIEJhcnNcIixcbiAgICAgIGRlZmF1bHRWYWx1ZTogITEsXG4gICAgICBjYXRlZ29yeTogXCJDaGFydCBzZXR0aW5nc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcImRpc3BsYXlIb3Jpem9udGFsbHlcIixcbiAgICAgIHR5cGU6IFwiYm9vbGVhblwiLFxuICAgICAgbGFiZWw6IFwiRGlzcGxheSBIb3Jpem9udGFsbHlcIixcbiAgICAgIGNhdGVnb3J5OiBcIkNoYXJ0IHNldHRpbmdzXCIsXG4gICAgICBkZWZhdWx0VmFsdWU6ICExXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcImRpc3BsYXlBc1BlcmNlbnRhZ2VcIixcbiAgICAgIHR5cGU6IFwiYm9vbGVhblwiLFxuICAgICAgbGFiZWw6IFwiRGlzcGxheSBhcyBQZXJjZW50YWdlc1wiLFxuICAgICAgZGVmYXVsdFZhbHVlOiAhMSxcbiAgICAgIGNhdGVnb3J5OiBcIkNoYXJ0IHNldHRpbmdzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiZHBzXCIsXG4gICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgbGFiZWw6IFwiRGVjaW1hbCBQbGFjZXNcIixcbiAgICAgIGNhdGVnb3J5OiBcIkZvcm1hdHRpbmdcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJlbmFibGVEb3dubG9hZEFzQ1NWXCIsXG4gICAgICB0eXBlOiBcImJvb2xlYW5cIixcbiAgICAgIGxhYmVsOiBcIlNob3cgZG93bmxvYWQgYXMgQ1NWXCIsXG4gICAgICBjYXRlZ29yeTogXCJFeHBvcnQgb3B0aW9uc1wiLFxuICAgICAgZGVmYXVsdFZhbHVlOiAhMFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJlbmFibGVEb3dubG9hZEFzUE5HXCIsXG4gICAgICB0eXBlOiBcImJvb2xlYW5cIixcbiAgICAgIGxhYmVsOiBcIlNob3cgZG93bmxvYWQgYXMgUE5HXCIsXG4gICAgICBjYXRlZ29yeTogXCJFeHBvcnQgb3B0aW9uc1wiLFxuICAgICAgZGVmYXVsdFZhbHVlOiAhMFxuICAgIH1cbiAgXVxufSwgZCA9IHIobCwgbywge1xuICBwcm9wczogKGUpID0+IHtcbiAgICB2YXIgYTtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uZSxcbiAgICAgIGlzR3JvdXBlZEJhcjogITAsXG4gICAgICBpc1RTR3JvdXBlZEJhckNoYXJ0OiAhMCxcbiAgICAgIHJldmVyc2VYQXhpczogITAsXG4gICAgICByZXN1bHRzOiB0KHtcbiAgICAgICAgZnJvbTogZS5kcyxcbiAgICAgICAgc2VsZWN0OiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgZGltZW5zaW9uOiAoYSA9IGUueEF4aXMpID09IG51bGwgPyB2b2lkIDAgOiBhLm5hbWUsXG4gICAgICAgICAgICBncmFudWxhcml0eTogZS5ncmFudWxhcml0eVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZS5zZWdtZW50LFxuICAgICAgICAgIGUubWV0cmljXG4gICAgICAgIF0sXG4gICAgICAgIG9yZGVyQnk6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwcm9wZXJ0eTogZS54QXhpcyxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogXCJkZXNjXCJcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0pXG4gICAgfTtcbiAgfVxufSk7XG5leHBvcnQge1xuICBkIGFzIGRlZmF1bHQsXG4gIG8gYXMgbWV0YVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVRpbWVTZXJpZXNTdGFja2VkQmFyQ2hhcnQuanMubWFwXG4iXSwibmFtZXMiOlsiciIsImwiLCJ0Il0sIm1hcHBpbmdzIjoiOzs7QUFHSyxNQUFDLElBQUk7QUFBQSxFQUNSLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLFVBQVU7QUFBQSxFQUNWLFlBQVksQ0FBQyxhQUFhO0FBQUEsRUFDMUIsUUFBUTtBQUFBLElBQ047QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLFVBQVU7QUFBQSxJQUNoQjtBQUFBLElBQ0k7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxRQUNOLFNBQVM7QUFBQSxRQUNULGdCQUFnQixDQUFDLE1BQU07QUFBQSxRQUN2QixpQkFBaUI7QUFBQSxNQUN6QjtBQUFBLE1BQ00sVUFBVTtBQUFBLElBQ2hCO0FBQUEsSUFDSTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsY0FBYztBQUFBLE1BQ2QsVUFBVTtBQUFBLElBQ2hCO0FBQUEsSUFDSTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsUUFBUTtBQUFBLFFBQ04sU0FBUztBQUFBLFFBQ1QsaUJBQWlCO0FBQUEsTUFDekI7QUFBQSxNQUNNLFVBQVU7QUFBQSxJQUNoQjtBQUFBLElBQ0k7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxRQUNOLFNBQVM7QUFBQSxNQUNqQjtBQUFBLE1BQ00sVUFBVTtBQUFBLElBQ2hCO0FBQUEsSUFDSTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsYUFBYTtBQUFBLE1BQ2IsVUFBVTtBQUFBLElBQ2hCO0FBQUEsSUFDSTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsYUFBYTtBQUFBLE1BQ2IsVUFBVTtBQUFBLElBQ2hCO0FBQUEsSUFDSTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsY0FBYztBQUFBLE1BQ2QsVUFBVTtBQUFBLElBQ2hCO0FBQUEsSUFDSTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsY0FBYztBQUFBLE1BQ2QsVUFBVTtBQUFBLElBQ2hCO0FBQUEsSUFDSTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsY0FBYztBQUFBLE1BQ2QsVUFBVTtBQUFBLElBQ2hCO0FBQUEsSUFDSTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsY0FBYztBQUFBLE1BQ2QsVUFBVTtBQUFBLElBQ2hCO0FBQUEsSUFDSTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsY0FBYztBQUFBLE1BQ2QsVUFBVTtBQUFBLElBQ2hCO0FBQUEsSUFDSTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsVUFBVTtBQUFBLE1BQ1YsY0FBYztBQUFBLElBQ3BCO0FBQUEsSUFDSTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsY0FBYztBQUFBLE1BQ2QsVUFBVTtBQUFBLElBQ2hCO0FBQUEsSUFDSTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsVUFBVTtBQUFBLElBQ2hCO0FBQUEsSUFDSTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsVUFBVTtBQUFBLE1BQ1YsY0FBYztBQUFBLElBQ3BCO0FBQUEsSUFDSTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsVUFBVTtBQUFBLE1BQ1YsY0FBYztBQUFBLElBQ3BCO0FBQUEsRUFDQTtBQUNBLEdBQUcsSUFBSUEsZ0JBQUVDLEdBQUcsR0FBRztBQUFBLEVBQ2IsT0FBTyxDQUFDLE1BQU07QUFDWixRQUFJO0FBQ0osV0FBTztBQUFBLE1BQ0wsR0FBRztBQUFBLE1BQ0gsY0FBYztBQUFBLE1BQ2QscUJBQXFCO0FBQUEsTUFDckIsY0FBYztBQUFBLE1BQ2QsU0FBU0MsRUFBRTtBQUFBLFFBQ1QsTUFBTSxFQUFFO0FBQUEsUUFDUixRQUFRO0FBQUEsVUFDTjtBQUFBLFlBQ0UsWUFBWSxJQUFJLEVBQUUsVUFBVSxPQUFPLFNBQVMsRUFBRTtBQUFBLFlBQzlDLGFBQWEsRUFBRTtBQUFBLFVBQzNCO0FBQUEsVUFDVSxFQUFFO0FBQUEsVUFDRixFQUFFO0FBQUEsUUFDWjtBQUFBLFFBQ1EsU0FBUztBQUFBLFVBQ1A7QUFBQSxZQUNFLFVBQVUsRUFBRTtBQUFBLFlBQ1osV0FBVztBQUFBLFVBQ3ZCO0FBQUEsUUFDQTtBQUFBLE1BQ0EsQ0FBTztBQUFBLElBQ1A7QUFBQSxFQUNFO0FBQ0YsQ0FBQzsiLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMF19
