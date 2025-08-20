import { v } from "./Spinner-BeNoTciJ-DsMN3-m0.js";
import { d as defineComponent } from "./index.esm-CVE60fla.js";
import { q } from "./index-BjLADGiF-zeK9Ivw1.js";
const s = {
  name: "StackedBarChart",
  label: "Grouped bar chart",
  classNames: ["inside-card"],
  category: "Charts: essentials",
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
        dataset: "ds"
      },
      category: "Chart data"
    },
    {
      name: "segment",
      type: "dimension",
      label: "Grouping",
      config: {
        dataset: "ds"
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
      name: "sortBy",
      type: "dimensionOrMeasure",
      label: "Sort by (optional)",
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
      defaultValue: false,
      category: "Chart settings"
    },
    {
      name: "reverseXAxis",
      type: "boolean",
      label: "Reverse X Axis",
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
}, d = defineComponent(q, s, {
  props: (e) => {
    const a = [];
    return e.sortBy && a.push({
      property: e.sortBy,
      direction: e.sortBy.nativeType == "string" ? "asc" : "desc"
    }), {
      ...e,
      isGroupedBar: true,
      results: v({
        from: e.ds,
        select: [e.xAxis, e.segment, e.metric],
        orderBy: a
      })
    };
  }
});
export {
  d as default,
  s as meta
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhY2tlZEJhckNoYXJ0LUNuSUV2SWo1LmpzIiwic291cmNlcyI6WyIvVXNlcnMvY2hyaXN0b3BoZXJjYXJsc29uL2ZsdWlkL2Ryb3BsZXQtZW1iZWRkYWJsZS9hcHAvZnJvbnRlbmQvZW1iZWRkYWJsZS9ub2RlX21vZHVsZXMvQGVtYmVkZGFibGUuY29tL3ZhbmlsbGEtY29tcG9uZW50cy9kaXN0L1N0YWNrZWRCYXJDaGFydC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsIGFzIHQgfSBmcm9tIFwiLi9pbmRleC5lc20tSkFoX0sxVkcuanNcIjtcbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCBhcyBvIH0gZnJvbSBcIkBlbWJlZGRhYmxlLmNvbS9yZWFjdFwiO1xuaW1wb3J0IHsgQyBhcyByIH0gZnJvbSBcIi4vaW5kZXgtQmpMQURHaUYuanNcIjtcbmNvbnN0IHMgPSB7XG4gIG5hbWU6IFwiU3RhY2tlZEJhckNoYXJ0XCIsXG4gIGxhYmVsOiBcIkdyb3VwZWQgYmFyIGNoYXJ0XCIsXG4gIGNsYXNzTmFtZXM6IFtcImluc2lkZS1jYXJkXCJdLFxuICBjYXRlZ29yeTogXCJDaGFydHM6IGVzc2VudGlhbHNcIixcbiAgaW5wdXRzOiBbXG4gICAge1xuICAgICAgbmFtZTogXCJkc1wiLFxuICAgICAgdHlwZTogXCJkYXRhc2V0XCIsXG4gICAgICBsYWJlbDogXCJEYXRhc2V0IHRvIGRpc3BsYXlcIixcbiAgICAgIGNhdGVnb3J5OiBcIkNoYXJ0IGRhdGFcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJ4QXhpc1wiLFxuICAgICAgdHlwZTogXCJkaW1lbnNpb25cIixcbiAgICAgIGxhYmVsOiBcIlgtQXhpc1wiLFxuICAgICAgY29uZmlnOiB7XG4gICAgICAgIGRhdGFzZXQ6IFwiZHNcIlxuICAgICAgfSxcbiAgICAgIGNhdGVnb3J5OiBcIkNoYXJ0IGRhdGFcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJzZWdtZW50XCIsXG4gICAgICB0eXBlOiBcImRpbWVuc2lvblwiLFxuICAgICAgbGFiZWw6IFwiR3JvdXBpbmdcIixcbiAgICAgIGNvbmZpZzoge1xuICAgICAgICBkYXRhc2V0OiBcImRzXCJcbiAgICAgIH0sXG4gICAgICBjYXRlZ29yeTogXCJDaGFydCBkYXRhXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwibWV0cmljXCIsXG4gICAgICB0eXBlOiBcIm1lYXN1cmVcIixcbiAgICAgIGxhYmVsOiBcIk1ldHJpY1wiLFxuICAgICAgY29uZmlnOiB7XG4gICAgICAgIGRhdGFzZXQ6IFwiZHNcIlxuICAgICAgfSxcbiAgICAgIGNhdGVnb3J5OiBcIkNoYXJ0IGRhdGFcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJzb3J0QnlcIixcbiAgICAgIHR5cGU6IFwiZGltZW5zaW9uT3JNZWFzdXJlXCIsXG4gICAgICBsYWJlbDogXCJTb3J0IGJ5IChvcHRpb25hbClcIixcbiAgICAgIGNvbmZpZzoge1xuICAgICAgICBkYXRhc2V0OiBcImRzXCJcbiAgICAgIH0sXG4gICAgICBjYXRlZ29yeTogXCJDaGFydCBkYXRhXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwidGl0bGVcIixcbiAgICAgIHR5cGU6IFwic3RyaW5nXCIsXG4gICAgICBsYWJlbDogXCJUaXRsZVwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiVGhlIHRpdGxlIGZvciB0aGUgY2hhcnRcIixcbiAgICAgIGNhdGVnb3J5OiBcIkNoYXJ0IHNldHRpbmdzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiZGVzY3JpcHRpb25cIixcbiAgICAgIHR5cGU6IFwic3RyaW5nXCIsXG4gICAgICBsYWJlbDogXCJEZXNjcmlwdGlvblwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiVGhlIGRlc2NyaXB0aW9uIGZvciB0aGUgY2hhcnRcIixcbiAgICAgIGNhdGVnb3J5OiBcIkNoYXJ0IHNldHRpbmdzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwic3RhY2tCYXJzXCIsXG4gICAgICB0eXBlOiBcImJvb2xlYW5cIixcbiAgICAgIGxhYmVsOiBcIlN0YWNrIGJhcnNcIixcbiAgICAgIGRlZmF1bHRWYWx1ZTogITAsXG4gICAgICBjYXRlZ29yeTogXCJDaGFydCBzZXR0aW5nc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcInNob3dMZWdlbmRcIixcbiAgICAgIHR5cGU6IFwiYm9vbGVhblwiLFxuICAgICAgbGFiZWw6IFwiU2hvdyBsZWdlbmRcIixcbiAgICAgIGRlZmF1bHRWYWx1ZTogITAsXG4gICAgICBjYXRlZ29yeTogXCJDaGFydCBzZXR0aW5nc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIm1heFNlZ21lbnRzXCIsXG4gICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgbGFiZWw6IFwiTWF4IExlZ2VuZCBJdGVtc1wiLFxuICAgICAgZGVmYXVsdFZhbHVlOiA4LFxuICAgICAgY2F0ZWdvcnk6IFwiQ2hhcnQgc2V0dGluZ3NcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJzaG93TGFiZWxzXCIsXG4gICAgICB0eXBlOiBcImJvb2xlYW5cIixcbiAgICAgIGxhYmVsOiBcIlNob3cgTGFiZWxzXCIsXG4gICAgICBkZWZhdWx0VmFsdWU6ICExLFxuICAgICAgY2F0ZWdvcnk6IFwiQ2hhcnQgc2V0dGluZ3NcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJzaG93VG90YWxzXCIsXG4gICAgICB0eXBlOiBcImJvb2xlYW5cIixcbiAgICAgIGxhYmVsOiBcIlNob3cgVG90YWxzIEFib3ZlIFN0YWNrZWQgQmFyc1wiLFxuICAgICAgZGVmYXVsdFZhbHVlOiAhMSxcbiAgICAgIGNhdGVnb3J5OiBcIkNoYXJ0IHNldHRpbmdzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiZGlzcGxheUhvcml6b250YWxseVwiLFxuICAgICAgdHlwZTogXCJib29sZWFuXCIsXG4gICAgICBsYWJlbDogXCJEaXNwbGF5IEhvcml6b250YWxseVwiLFxuICAgICAgZGVmYXVsdFZhbHVlOiAhMSxcbiAgICAgIGNhdGVnb3J5OiBcIkNoYXJ0IHNldHRpbmdzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwicmV2ZXJzZVhBeGlzXCIsXG4gICAgICB0eXBlOiBcImJvb2xlYW5cIixcbiAgICAgIGxhYmVsOiBcIlJldmVyc2UgWCBBeGlzXCIsXG4gICAgICBjYXRlZ29yeTogXCJDaGFydCBzZXR0aW5nc1wiLFxuICAgICAgZGVmYXVsdFZhbHVlOiAhMVxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJkaXNwbGF5QXNQZXJjZW50YWdlXCIsXG4gICAgICB0eXBlOiBcImJvb2xlYW5cIixcbiAgICAgIGxhYmVsOiBcIkRpc3BsYXkgYXMgUGVyY2VudGFnZXNcIixcbiAgICAgIGRlZmF1bHRWYWx1ZTogITEsXG4gICAgICBjYXRlZ29yeTogXCJDaGFydCBzZXR0aW5nc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcImRwc1wiLFxuICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgIGxhYmVsOiBcIkRlY2ltYWwgUGxhY2VzXCIsXG4gICAgICBjYXRlZ29yeTogXCJGb3JtYXR0aW5nXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiZW5hYmxlRG93bmxvYWRBc0NTVlwiLFxuICAgICAgdHlwZTogXCJib29sZWFuXCIsXG4gICAgICBsYWJlbDogXCJTaG93IGRvd25sb2FkIGFzIENTVlwiLFxuICAgICAgY2F0ZWdvcnk6IFwiRXhwb3J0IG9wdGlvbnNcIixcbiAgICAgIGRlZmF1bHRWYWx1ZTogITBcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiZW5hYmxlRG93bmxvYWRBc1BOR1wiLFxuICAgICAgdHlwZTogXCJib29sZWFuXCIsXG4gICAgICBsYWJlbDogXCJTaG93IGRvd25sb2FkIGFzIFBOR1wiLFxuICAgICAgY2F0ZWdvcnk6IFwiRXhwb3J0IG9wdGlvbnNcIixcbiAgICAgIGRlZmF1bHRWYWx1ZTogITBcbiAgICB9XG4gIF1cbn0sIGQgPSBvKHIsIHMsIHtcbiAgcHJvcHM6IChlKSA9PiB7XG4gICAgY29uc3QgYSA9IFtdO1xuICAgIHJldHVybiBlLnNvcnRCeSAmJiBhLnB1c2goe1xuICAgICAgcHJvcGVydHk6IGUuc29ydEJ5LFxuICAgICAgZGlyZWN0aW9uOiBlLnNvcnRCeS5uYXRpdmVUeXBlID09IFwic3RyaW5nXCIgPyBcImFzY1wiIDogXCJkZXNjXCJcbiAgICB9KSwge1xuICAgICAgLi4uZSxcbiAgICAgIGlzR3JvdXBlZEJhcjogITAsXG4gICAgICByZXN1bHRzOiB0KHtcbiAgICAgICAgZnJvbTogZS5kcyxcbiAgICAgICAgc2VsZWN0OiBbZS54QXhpcywgZS5zZWdtZW50LCBlLm1ldHJpY10sXG4gICAgICAgIG9yZGVyQnk6IGFcbiAgICAgIH0pXG4gICAgfTtcbiAgfVxufSk7XG5leHBvcnQge1xuICBkIGFzIGRlZmF1bHQsXG4gIHMgYXMgbWV0YVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVN0YWNrZWRCYXJDaGFydC5qcy5tYXBcbiJdLCJuYW1lcyI6WyJvIiwiciIsInQiXSwibWFwcGluZ3MiOiI7OztBQUdLLE1BQUMsSUFBSTtBQUFBLEVBQ1IsTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLEVBQ1AsWUFBWSxDQUFDLGFBQWE7QUFBQSxFQUMxQixVQUFVO0FBQUEsRUFDVixRQUFRO0FBQUEsSUFDTjtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsVUFBVTtBQUFBLElBQ2hCO0FBQUEsSUFDSTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsUUFBUTtBQUFBLFFBQ04sU0FBUztBQUFBLE1BQ2pCO0FBQUEsTUFDTSxVQUFVO0FBQUEsSUFDaEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxRQUFRO0FBQUEsUUFDTixTQUFTO0FBQUEsTUFDakI7QUFBQSxNQUNNLFVBQVU7QUFBQSxJQUNoQjtBQUFBLElBQ0k7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxRQUNOLFNBQVM7QUFBQSxNQUNqQjtBQUFBLE1BQ00sVUFBVTtBQUFBLElBQ2hCO0FBQUEsSUFDSTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsUUFBUTtBQUFBLFFBQ04sU0FBUztBQUFBLE1BQ2pCO0FBQUEsTUFDTSxVQUFVO0FBQUEsSUFDaEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxhQUFhO0FBQUEsTUFDYixVQUFVO0FBQUEsSUFDaEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxhQUFhO0FBQUEsTUFDYixVQUFVO0FBQUEsSUFDaEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxjQUFjO0FBQUEsTUFDZCxVQUFVO0FBQUEsSUFDaEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxjQUFjO0FBQUEsTUFDZCxVQUFVO0FBQUEsSUFDaEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxjQUFjO0FBQUEsTUFDZCxVQUFVO0FBQUEsSUFDaEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxjQUFjO0FBQUEsTUFDZCxVQUFVO0FBQUEsSUFDaEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxjQUFjO0FBQUEsTUFDZCxVQUFVO0FBQUEsSUFDaEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxjQUFjO0FBQUEsTUFDZCxVQUFVO0FBQUEsSUFDaEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxVQUFVO0FBQUEsTUFDVixjQUFjO0FBQUEsSUFDcEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxjQUFjO0FBQUEsTUFDZCxVQUFVO0FBQUEsSUFDaEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxVQUFVO0FBQUEsSUFDaEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxVQUFVO0FBQUEsTUFDVixjQUFjO0FBQUEsSUFDcEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxVQUFVO0FBQUEsTUFDVixjQUFjO0FBQUEsSUFDcEI7QUFBQSxFQUNBO0FBQ0EsR0FBRyxJQUFJQSxnQkFBRUMsR0FBRyxHQUFHO0FBQUEsRUFDYixPQUFPLENBQUMsTUFBTTtBQUNaLFVBQU0sSUFBSSxDQUFBO0FBQ1YsV0FBTyxFQUFFLFVBQVUsRUFBRSxLQUFLO0FBQUEsTUFDeEIsVUFBVSxFQUFFO0FBQUEsTUFDWixXQUFXLEVBQUUsT0FBTyxjQUFjLFdBQVcsUUFBUTtBQUFBLElBQzNELENBQUssR0FBRztBQUFBLE1BQ0YsR0FBRztBQUFBLE1BQ0gsY0FBYztBQUFBLE1BQ2QsU0FBU0MsRUFBRTtBQUFBLFFBQ1QsTUFBTSxFQUFFO0FBQUEsUUFDUixRQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU07QUFBQSxRQUNyQyxTQUFTO0FBQUEsTUFDakIsQ0FBTztBQUFBLElBQ1A7QUFBQSxFQUNFO0FBQ0YsQ0FBQzsiLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMF19
