import { v } from "./Spinner-BeNoTciJ-DsMN3-m0.js";
import { d as defineComponent } from "./index.esm-CVE60fla.js";
import { n as n$1, o } from "./SortDirection.type.emb-Ddgerf5H-Cxcj1Pys.js";
import { J } from "./index-VjD1R8dk-Bm9w8E8M.js";
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
export {
  p as default,
  n as meta
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS1BJQ2hhcnRUZXh0LUNSZGxLd0dGLmpzIiwic291cmNlcyI6WyIvVXNlcnMvY2hyaXN0b3BoZXJjYXJsc29uL2ZsdWlkL2Ryb3BsZXQtZW1iZWRkYWJsZS9hcHAvZnJvbnRlbmQvZW1iZWRkYWJsZS9ub2RlX21vZHVsZXMvQGVtYmVkZGFibGUuY29tL3ZhbmlsbGEtY29tcG9uZW50cy9kaXN0L0tQSUNoYXJ0VGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsIGFzIGEgfSBmcm9tIFwiLi9pbmRleC5lc20tSkFoX0sxVkcuanNcIjtcbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCBhcyBvIH0gZnJvbSBcIkBlbWJlZGRhYmxlLmNvbS9yZWFjdFwiO1xuaW1wb3J0IHsgUyBhcyByLCBhIGFzIGkgfSBmcm9tIFwiLi9Tb3J0RGlyZWN0aW9uLnR5cGUuZW1iLURkZ2VyZjVILmpzXCI7XG5pbXBvcnQgeyBDIGFzIGwgfSBmcm9tIFwiLi9pbmRleC1WakQxUjhkay5qc1wiO1xuY29uc3QgbiA9IHtcbiAgbmFtZTogXCJLUElDaGFydFRleHRcIixcbiAgbGFiZWw6IFwiS1BJIHRleHRcIixcbiAgZGVmYXVsdFdpZHRoOiAzMDAsXG4gIGRlZmF1bHRIZWlnaHQ6IDE1MCxcbiAgY2xhc3NOYW1lczogW1wiaW5zaWRlLWNhcmRcIl0sXG4gIGNhdGVnb3J5OiBcIkNoYXJ0czogZXNzZW50aWFsc1wiLFxuICBpbnB1dHM6IFtcbiAgICB7XG4gICAgICBuYW1lOiBcImRzXCIsXG4gICAgICB0eXBlOiBcImRhdGFzZXRcIixcbiAgICAgIGxhYmVsOiBcIkRhdGFzZXRcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkRhdGFzZXRcIixcbiAgICAgIGRlZmF1bHRWYWx1ZTogITEsXG4gICAgICBjYXRlZ29yeTogXCJDaGFydCBkYXRhXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiZGltZW5zaW9uXCIsXG4gICAgICB0eXBlOiBcImRpbWVuc2lvblwiLFxuICAgICAgbGFiZWw6IFwiVmFsdWUgdG8gZGlzcGxheVwiLFxuICAgICAgY29uZmlnOiB7XG4gICAgICAgIGRhdGFzZXQ6IFwiZHNcIlxuICAgICAgfSxcbiAgICAgIGNhdGVnb3J5OiBcIkNoYXJ0IGRhdGFcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJtZXRyaWNcIixcbiAgICAgIHR5cGU6IFwibWVhc3VyZVwiLFxuICAgICAgbGFiZWw6IFwiU2hvdyB0b3AgdmFsdWUgYnlcIixcbiAgICAgIGNvbmZpZzoge1xuICAgICAgICBkYXRhc2V0OiBcImRzXCJcbiAgICAgIH0sXG4gICAgICBjYXRlZ29yeTogXCJDaGFydCBkYXRhXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwicm93U29ydERpcmVjdGlvblwiLFxuICAgICAgdHlwZTogaSxcbiAgICAgIGRlZmF1bHRWYWx1ZTogci5ERVNDRU5ESU5HLFxuICAgICAgbGFiZWw6IFwiU29ydCBkaXJlY3Rpb25cIixcbiAgICAgIGNhdGVnb3J5OiBcIkNoYXJ0IGRhdGFcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJ0aXRsZVwiLFxuICAgICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICAgIGxhYmVsOiBcIlRpdGxlXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJUaGUgdGl0bGUgZm9yIHRoZSBjaGFydFwiLFxuICAgICAgY2F0ZWdvcnk6IFwiQ2hhcnQgc2V0dGluZ3NcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJkZXNjcmlwdGlvblwiLFxuICAgICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICAgIGxhYmVsOiBcIkRlc2NyaXB0aW9uXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJUaGUgZGVzY3JpcHRpb24gZm9yIHRoZSBjaGFydFwiLFxuICAgICAgY2F0ZWdvcnk6IFwiQ2hhcnQgc2V0dGluZ3NcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJkaXNwbGF5TWV0cmljXCIsXG4gICAgICB0eXBlOiBcImJvb2xlYW5cIixcbiAgICAgIGxhYmVsOiBcIkRpc3BsYXkgbWV0cmljXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJEaXNwbGF5IHRoZSBtZXRyaWNcIixcbiAgICAgIGRlZmF1bHRWYWx1ZTogITAsXG4gICAgICBjYXRlZ29yeTogXCJDaGFydCBzZXR0aW5nc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcImZvbnRTaXplXCIsXG4gICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgbGFiZWw6IFwiVGV4dCBzaXplIGluIHBpeGVsc1wiLFxuICAgICAgZGVmYXVsdFZhbHVlOiAzMixcbiAgICAgIGNhdGVnb3J5OiBcIkZvcm1hdHRpbmdcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJkcHNcIixcbiAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICBsYWJlbDogXCJNZXRyaWMgZGVjaW1hbCBwbGFjZXNcIixcbiAgICAgIGNhdGVnb3J5OiBcIkZvcm1hdHRpbmdcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJlbmFibGVEb3dubG9hZEFzQ1NWXCIsXG4gICAgICB0eXBlOiBcImJvb2xlYW5cIixcbiAgICAgIGxhYmVsOiBcIlNob3cgZG93bmxvYWQgYXMgQ1NWXCIsXG4gICAgICBjYXRlZ29yeTogXCJFeHBvcnQgb3B0aW9uc1wiLFxuICAgICAgZGVmYXVsdFZhbHVlOiAhMVxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJlbmFibGVEb3dubG9hZEFzUE5HXCIsXG4gICAgICB0eXBlOiBcImJvb2xlYW5cIixcbiAgICAgIGxhYmVsOiBcIlNob3cgZG93bmxvYWQgYXMgUE5HXCIsXG4gICAgICBjYXRlZ29yeTogXCJFeHBvcnQgb3B0aW9uc1wiLFxuICAgICAgZGVmYXVsdFZhbHVlOiAhMVxuICAgIH1cbiAgXVxufSwgcCA9IG8obCwgbiwge1xuICBwcm9wczogKGUpID0+IHtcbiAgICBjb25zdCB0ID0gZS5yb3dTb3J0RGlyZWN0aW9uID09PSBcIkFzY2VuZGluZ1wiID8gXCJhc2NcIiA6IFwiZGVzY1wiO1xuICAgIHJldHVybiB7XG4gICAgICAuLi5lLFxuICAgICAgcmVzdWx0czogYSh7XG4gICAgICAgIGZyb206IGUuZHMsXG4gICAgICAgIHNlbGVjdDogW2UubWV0cmljLCBlLmRpbWVuc2lvbl0sXG4gICAgICAgIG9yZGVyQnk6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwcm9wZXJ0eTogZS5tZXRyaWMsXG4gICAgICAgICAgICBkaXJlY3Rpb246IHRcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIGxpbWl0OiAxXG4gICAgICB9KVxuICAgIH07XG4gIH1cbn0pO1xuZXhwb3J0IHtcbiAgcCBhcyBkZWZhdWx0LFxuICBuIGFzIG1ldGFcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1LUElDaGFydFRleHQuanMubWFwXG4iXSwibmFtZXMiOlsiaSIsInIiLCJvIiwibCIsImEiXSwibWFwcGluZ3MiOiI7Ozs7QUFJSyxNQUFDLElBQUk7QUFBQSxFQUNSLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLGNBQWM7QUFBQSxFQUNkLGVBQWU7QUFBQSxFQUNmLFlBQVksQ0FBQyxhQUFhO0FBQUEsRUFDMUIsVUFBVTtBQUFBLEVBQ1YsUUFBUTtBQUFBLElBQ047QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLGFBQWE7QUFBQSxNQUNiLGNBQWM7QUFBQSxNQUNkLFVBQVU7QUFBQSxJQUNoQjtBQUFBLElBQ0k7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxRQUNOLFNBQVM7QUFBQSxNQUNqQjtBQUFBLE1BQ00sVUFBVTtBQUFBLElBQ2hCO0FBQUEsSUFDSTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsUUFBUTtBQUFBLFFBQ04sU0FBUztBQUFBLE1BQ2pCO0FBQUEsTUFDTSxVQUFVO0FBQUEsSUFDaEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNQTtBQUFBQSxNQUNOLGNBQWNDLElBQUU7QUFBQSxNQUNoQixPQUFPO0FBQUEsTUFDUCxVQUFVO0FBQUEsSUFDaEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxhQUFhO0FBQUEsTUFDYixVQUFVO0FBQUEsSUFDaEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxhQUFhO0FBQUEsTUFDYixVQUFVO0FBQUEsSUFDaEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxhQUFhO0FBQUEsTUFDYixjQUFjO0FBQUEsTUFDZCxVQUFVO0FBQUEsSUFDaEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxjQUFjO0FBQUEsTUFDZCxVQUFVO0FBQUEsSUFDaEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxVQUFVO0FBQUEsSUFDaEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxVQUFVO0FBQUEsTUFDVixjQUFjO0FBQUEsSUFDcEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxVQUFVO0FBQUEsTUFDVixjQUFjO0FBQUEsSUFDcEI7QUFBQSxFQUNBO0FBQ0EsR0FBRyxJQUFJQyxnQkFBRUMsR0FBRyxHQUFHO0FBQUEsRUFDYixPQUFPLENBQUMsTUFBTTtBQUNaLFVBQU0sSUFBSSxFQUFFLHFCQUFxQixjQUFjLFFBQVE7QUFDdkQsV0FBTztBQUFBLE1BQ0wsR0FBRztBQUFBLE1BQ0gsU0FBU0MsRUFBRTtBQUFBLFFBQ1QsTUFBTSxFQUFFO0FBQUEsUUFDUixRQUFRLENBQUMsRUFBRSxRQUFRLEVBQUUsU0FBUztBQUFBLFFBQzlCLFNBQVM7QUFBQSxVQUNQO0FBQUEsWUFDRSxVQUFVLEVBQUU7QUFBQSxZQUNaLFdBQVc7QUFBQSxVQUN2QjtBQUFBLFFBQ0E7QUFBQSxRQUNRLE9BQU87QUFBQSxNQUNmLENBQU87QUFBQSxJQUNQO0FBQUEsRUFDRTtBQUNGLENBQUM7IiwieF9nb29nbGVfaWdub3JlTGlzdCI6WzBdfQ==
