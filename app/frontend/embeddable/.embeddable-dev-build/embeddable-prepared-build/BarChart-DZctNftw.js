import { v, h, A } from "./Spinner-BeNoTciJ-DsMN3-m0.js";
import { d as defineComponent } from "./index.esm-CVE60fla.js";
import { M } from "./index-i0fe1TXw-dUOnG9L2.js";
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
    return e.sortBy && h(e.sortBy) && !t.includes(e.sortBy) && t.push(e.sortBy), e.sortBy && A(e.sortBy) && !r.includes(e.sortBy) && r.push(e.sortBy), {
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
export {
  p as default,
  d as meta
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFyQ2hhcnQtRFpjdE5mdHcuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaHJpc3RvcGhlcmNhcmxzb24vZmx1aWQvZHJvcGxldC1lbWJlZGRhYmxlL2FwcC9mcm9udGVuZC9lbWJlZGRhYmxlL25vZGVfbW9kdWxlcy9AZW1iZWRkYWJsZS5jb20vdmFuaWxsYS1jb21wb25lbnRzL2Rpc3QvQmFyQ2hhcnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaSBhcyBvLCBhIGFzIGwsIGwgYXMgaSB9IGZyb20gXCIuL2luZGV4LmVzbS1KQWhfSzFWRy5qc1wiO1xuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IGFzIG4gfSBmcm9tIFwiQGVtYmVkZGFibGUuY29tL3JlYWN0XCI7XG5pbXBvcnQgeyBDIGFzIGMgfSBmcm9tIFwiLi9pbmRleC1pMGZlMVRYdy5qc1wiO1xuY29uc3QgZCA9IHtcbiAgbmFtZTogXCJCYXJDaGFydFwiLFxuICBsYWJlbDogXCJCYXIgY2hhcnRcIixcbiAgY2xhc3NOYW1lczogW1wiaW5zaWRlLWNhcmRcIl0sXG4gIGNhdGVnb3J5OiBcIkNoYXJ0czogZXNzZW50aWFsc1wiLFxuICBpbnB1dHM6IFtcbiAgICB7XG4gICAgICBuYW1lOiBcImRzXCIsXG4gICAgICB0eXBlOiBcImRhdGFzZXRcIixcbiAgICAgIGxhYmVsOiBcIkRhdGFzZXRcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkRhdGFzZXRcIixcbiAgICAgIGRlZmF1bHRWYWx1ZTogITEsXG4gICAgICBjYXRlZ29yeTogXCJDaGFydCBkYXRhXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwieEF4aXNcIixcbiAgICAgIHR5cGU6IFwiZGltZW5zaW9uXCIsXG4gICAgICBsYWJlbDogXCJYLUF4aXNcIixcbiAgICAgIHJlcXVpcmVkOiAhMCxcbiAgICAgIGNvbmZpZzoge1xuICAgICAgICBkYXRhc2V0OiBcImRzXCJcbiAgICAgIH0sXG4gICAgICBjYXRlZ29yeTogXCJDaGFydCBkYXRhXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwibWV0cmljc1wiLFxuICAgICAgdHlwZTogXCJtZWFzdXJlXCIsXG4gICAgICBhcnJheTogITAsXG4gICAgICByZXF1aXJlZDogITAsXG4gICAgICBsYWJlbDogXCJNZXRyaWNzXCIsXG4gICAgICBjb25maWc6IHtcbiAgICAgICAgZGF0YXNldDogXCJkc1wiXG4gICAgICB9LFxuICAgICAgY2F0ZWdvcnk6IFwiQ2hhcnQgZGF0YVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcInNvcnRCeVwiLFxuICAgICAgdHlwZTogXCJkaW1lbnNpb25Pck1lYXN1cmVcIixcbiAgICAgIGxhYmVsOiBcIlNvcnQgYnkgKG9wdGlvbmFsKVwiLFxuICAgICAgY29uZmlnOiB7XG4gICAgICAgIGRhdGFzZXQ6IFwiZHNcIlxuICAgICAgfSxcbiAgICAgIGNhdGVnb3J5OiBcIkNoYXJ0IGRhdGFcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJsaW1pdFwiLFxuICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgIGxhYmVsOiBcIkxpbWl0IHJlc3VsdHNcIixcbiAgICAgIGNhdGVnb3J5OiBcIkNoYXJ0IGRhdGFcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJsaW5lTWV0cmljc1wiLFxuICAgICAgdHlwZTogXCJtZWFzdXJlXCIsXG4gICAgICBhcnJheTogITAsXG4gICAgICBsYWJlbDogXCJBZGQgYSBsaW5lKHMpXCIsXG4gICAgICBjb25maWc6IHtcbiAgICAgICAgZGF0YXNldDogXCJkc1wiXG4gICAgICB9LFxuICAgICAgY2F0ZWdvcnk6IFwiT3B0aW9uYWwgY2hhcnQgZGF0YVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcInNob3dTZWNvbmRZQXhpc1wiLFxuICAgICAgdHlwZTogXCJib29sZWFuXCIsXG4gICAgICBsYWJlbDogXCJTaG93IDJuZCBheGlzXCIsXG4gICAgICBjYXRlZ29yeTogXCJPcHRpb25hbCBjaGFydCBkYXRhXCIsXG4gICAgICBkZWZhdWx0VmFsdWU6ICExXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcInNlY29uZEF4aXNUaXRsZVwiLFxuICAgICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICAgIGxhYmVsOiBcIjJuZCBheGlzIHRpdGxlXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJUaGUgdGl0bGUgZm9yIHRoZSBjaGFydFwiLFxuICAgICAgY2F0ZWdvcnk6IFwiT3B0aW9uYWwgY2hhcnQgZGF0YVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcInRpdGxlXCIsXG4gICAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgICAgbGFiZWw6IFwiVGl0bGVcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlRoZSB0aXRsZSBmb3IgdGhlIGNoYXJ0XCIsXG4gICAgICBjYXRlZ29yeTogXCJDaGFydCBzZXR0aW5nc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcImRlc2NyaXB0aW9uXCIsXG4gICAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgICAgbGFiZWw6IFwiRGVzY3JpcHRpb25cIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBkZXNjcmlwdGlvbiBmb3IgdGhlIGNoYXJ0XCIsXG4gICAgICBjYXRlZ29yeTogXCJDaGFydCBzZXR0aW5nc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcInNob3dMZWdlbmRcIixcbiAgICAgIHR5cGU6IFwiYm9vbGVhblwiLFxuICAgICAgbGFiZWw6IFwiU2hvdyBMZWdlbmRcIixcbiAgICAgIGNhdGVnb3J5OiBcIkNoYXJ0IHNldHRpbmdzXCIsXG4gICAgICBkZWZhdWx0VmFsdWU6ICEwXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcInNob3dMYWJlbHNcIixcbiAgICAgIHR5cGU6IFwiYm9vbGVhblwiLFxuICAgICAgbGFiZWw6IFwiU2hvdyBMYWJlbHNcIixcbiAgICAgIGNhdGVnb3J5OiBcIkNoYXJ0IHNldHRpbmdzXCIsXG4gICAgICBkZWZhdWx0VmFsdWU6ICExXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcImRpc3BsYXlIb3Jpem9udGFsbHlcIixcbiAgICAgIHR5cGU6IFwiYm9vbGVhblwiLFxuICAgICAgbGFiZWw6IFwiRGlzcGxheSBIb3Jpem9udGFsbHlcIixcbiAgICAgIGNhdGVnb3J5OiBcIkNoYXJ0IHNldHRpbmdzXCIsXG4gICAgICBkZWZhdWx0VmFsdWU6ICExXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcInN0YWNrTWV0cmljc1wiLFxuICAgICAgdHlwZTogXCJib29sZWFuXCIsXG4gICAgICBsYWJlbDogXCJTdGFjayBNZXRyaWNzXCIsXG4gICAgICBjYXRlZ29yeTogXCJDaGFydCBzZXR0aW5nc1wiLFxuICAgICAgZGVmYXVsdFZhbHVlOiAhMVxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJyZXZlcnNlWEF4aXNcIixcbiAgICAgIHR5cGU6IFwiYm9vbGVhblwiLFxuICAgICAgbGFiZWw6IFwiUmV2ZXJzZSBYIEF4aXNcIixcbiAgICAgIGNhdGVnb3J5OiBcIkNoYXJ0IHNldHRpbmdzXCIsXG4gICAgICBkZWZhdWx0VmFsdWU6ICExXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcInhBeGlzVGl0bGVcIixcbiAgICAgIHR5cGU6IFwic3RyaW5nXCIsXG4gICAgICBsYWJlbDogXCJYLUF4aXMgVGl0bGVcIixcbiAgICAgIGNhdGVnb3J5OiBcIkNoYXJ0IHNldHRpbmdzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwieUF4aXNUaXRsZVwiLFxuICAgICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICAgIGxhYmVsOiBcIlktQXhpcyBUaXRsZVwiLFxuICAgICAgY2F0ZWdvcnk6IFwiQ2hhcnQgc2V0dGluZ3NcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJkcHNcIixcbiAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICBsYWJlbDogXCJEZWNpbWFsIFBsYWNlc1wiLFxuICAgICAgY2F0ZWdvcnk6IFwiRm9ybWF0dGluZ1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcImVuYWJsZURvd25sb2FkQXNDU1ZcIixcbiAgICAgIHR5cGU6IFwiYm9vbGVhblwiLFxuICAgICAgbGFiZWw6IFwiU2hvdyBkb3dubG9hZCBhcyBDU1ZcIixcbiAgICAgIGNhdGVnb3J5OiBcIkV4cG9ydCBvcHRpb25zXCIsXG4gICAgICBkZWZhdWx0VmFsdWU6ICEwXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcImVuYWJsZURvd25sb2FkQXNQTkdcIixcbiAgICAgIHR5cGU6IFwiYm9vbGVhblwiLFxuICAgICAgbGFiZWw6IFwiU2hvdyBkb3dubG9hZCBhcyBQTkdcIixcbiAgICAgIGNhdGVnb3J5OiBcIkV4cG9ydCBvcHRpb25zXCIsXG4gICAgICBkZWZhdWx0VmFsdWU6ICEwXG4gICAgfVxuICBdXG59LCBwID0gbihjLCBkLCB7XG4gIHByb3BzOiAoZSwgeSwgcykgPT4ge1xuICAgIGNvbnN0IGEgPSBbXTtcbiAgICBlLnNvcnRCeSA/IGEucHVzaCh7XG4gICAgICBwcm9wZXJ0eTogZS5zb3J0QnksXG4gICAgICBkaXJlY3Rpb246IGUuc29ydEJ5Lm5hdGl2ZVR5cGUgPT0gXCJzdHJpbmdcIiA/IFwiYXNjXCIgOiBcImRlc2NcIlxuICAgIH0pIDogZS5saW1pdCAmJiBhLnB1c2goe1xuICAgICAgcHJvcGVydHk6IGUubWV0cmljc1swXSxcbiAgICAgIGRpcmVjdGlvbjogXCJkZXNjXCJcbiAgICB9KTtcbiAgICBjb25zdCB0ID0gW2UueEF4aXNdLCByID0gWy4uLmUubWV0cmljcywgLi4uZS5saW5lTWV0cmljcyB8fCBbXV07XG4gICAgcmV0dXJuIGUuc29ydEJ5ICYmIG8oZS5zb3J0QnkpICYmICF0LmluY2x1ZGVzKGUuc29ydEJ5KSAmJiB0LnB1c2goZS5zb3J0QnkpLCBlLnNvcnRCeSAmJiBsKGUuc29ydEJ5KSAmJiAhci5pbmNsdWRlcyhlLnNvcnRCeSkgJiYgci5wdXNoKGUuc29ydEJ5KSwge1xuICAgICAgLi4uZSxcbiAgICAgIGNsaWVudENvbnRleHQ6IHMsXG4gICAgICByZXZlcnNlWEF4aXM6IGUucmV2ZXJzZVhBeGlzLFxuICAgICAgcmVzdWx0czogaSh7XG4gICAgICAgIGZyb206IGUuZHMsXG4gICAgICAgIHNlbGVjdDogWy4uLnQsIC4uLnJdLFxuICAgICAgICBvcmRlckJ5OiBhLFxuICAgICAgICBsaW1pdDogZS5saW1pdCB8fCA1MFxuICAgICAgfSlcbiAgICB9O1xuICB9XG59KTtcbmV4cG9ydCB7XG4gIHAgYXMgZGVmYXVsdCxcbiAgZCBhcyBtZXRhXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QmFyQ2hhcnQuanMubWFwXG4iXSwibmFtZXMiOlsibiIsImMiLCJvIiwibCIsImkiXSwibWFwcGluZ3MiOiI7OztBQUdLLE1BQUMsSUFBSTtBQUFBLEVBQ1IsTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLEVBQ1AsWUFBWSxDQUFDLGFBQWE7QUFBQSxFQUMxQixVQUFVO0FBQUEsRUFDVixRQUFRO0FBQUEsSUFDTjtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsYUFBYTtBQUFBLE1BQ2IsY0FBYztBQUFBLE1BQ2QsVUFBVTtBQUFBLElBQ2hCO0FBQUEsSUFDSTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsVUFBVTtBQUFBLE1BQ1YsUUFBUTtBQUFBLFFBQ04sU0FBUztBQUFBLE1BQ2pCO0FBQUEsTUFDTSxVQUFVO0FBQUEsSUFDaEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxVQUFVO0FBQUEsTUFDVixPQUFPO0FBQUEsTUFDUCxRQUFRO0FBQUEsUUFDTixTQUFTO0FBQUEsTUFDakI7QUFBQSxNQUNNLFVBQVU7QUFBQSxJQUNoQjtBQUFBLElBQ0k7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxRQUNOLFNBQVM7QUFBQSxNQUNqQjtBQUFBLE1BQ00sVUFBVTtBQUFBLElBQ2hCO0FBQUEsSUFDSTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsVUFBVTtBQUFBLElBQ2hCO0FBQUEsSUFDSTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsT0FBTztBQUFBLE1BQ1AsUUFBUTtBQUFBLFFBQ04sU0FBUztBQUFBLE1BQ2pCO0FBQUEsTUFDTSxVQUFVO0FBQUEsSUFDaEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxVQUFVO0FBQUEsTUFDVixjQUFjO0FBQUEsSUFDcEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxhQUFhO0FBQUEsTUFDYixVQUFVO0FBQUEsSUFDaEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxhQUFhO0FBQUEsTUFDYixVQUFVO0FBQUEsSUFDaEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxhQUFhO0FBQUEsTUFDYixVQUFVO0FBQUEsSUFDaEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxVQUFVO0FBQUEsTUFDVixjQUFjO0FBQUEsSUFDcEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxVQUFVO0FBQUEsTUFDVixjQUFjO0FBQUEsSUFDcEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxVQUFVO0FBQUEsTUFDVixjQUFjO0FBQUEsSUFDcEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxVQUFVO0FBQUEsTUFDVixjQUFjO0FBQUEsSUFDcEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxVQUFVO0FBQUEsTUFDVixjQUFjO0FBQUEsSUFDcEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxVQUFVO0FBQUEsSUFDaEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxVQUFVO0FBQUEsSUFDaEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxVQUFVO0FBQUEsSUFDaEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxVQUFVO0FBQUEsTUFDVixjQUFjO0FBQUEsSUFDcEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxVQUFVO0FBQUEsTUFDVixjQUFjO0FBQUEsSUFDcEI7QUFBQSxFQUNBO0FBQ0EsR0FBRyxJQUFJQSxnQkFBRUMsR0FBRyxHQUFHO0FBQUEsRUFDYixPQUFPLENBQUMsR0FBRyxHQUFHLE1BQU07QUFDbEIsVUFBTSxJQUFJLENBQUE7QUFDVixNQUFFLFNBQVMsRUFBRSxLQUFLO0FBQUEsTUFDaEIsVUFBVSxFQUFFO0FBQUEsTUFDWixXQUFXLEVBQUUsT0FBTyxjQUFjLFdBQVcsUUFBUTtBQUFBLElBQzNELENBQUssSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLO0FBQUEsTUFDckIsVUFBVSxFQUFFLFFBQVEsQ0FBQztBQUFBLE1BQ3JCLFdBQVc7QUFBQSxJQUNqQixDQUFLO0FBQ0QsVUFBTSxJQUFJLENBQUMsRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxTQUFTLEdBQUcsRUFBRSxlQUFlLENBQUEsQ0FBRTtBQUM5RCxXQUFPLEVBQUUsVUFBVUMsRUFBRSxFQUFFLE1BQU0sS0FBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLE1BQU0sS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEdBQUcsRUFBRSxVQUFVQyxFQUFFLEVBQUUsTUFBTSxLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsTUFBTSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sR0FBRztBQUFBLE1BQ2pKLEdBQUc7QUFBQSxNQUNILGVBQWU7QUFBQSxNQUNmLGNBQWMsRUFBRTtBQUFBLE1BQ2hCLFNBQVNDLEVBQUU7QUFBQSxRQUNULE1BQU0sRUFBRTtBQUFBLFFBQ1IsUUFBUSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFBQSxRQUNuQixTQUFTO0FBQUEsUUFDVCxPQUFPLEVBQUUsU0FBUztBQUFBLE1BQzFCLENBQU87QUFBQSxJQUNQO0FBQUEsRUFDRTtBQUNGLENBQUM7IiwieF9nb29nbGVfaWdub3JlTGlzdCI6WzBdfQ==
