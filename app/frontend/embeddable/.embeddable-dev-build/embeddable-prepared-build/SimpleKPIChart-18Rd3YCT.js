import { v } from "./Spinner-BeNoTciJ-DsMN3-m0.js";
import { d as defineComponent } from "./index.esm-CVE60fla.js";
import { J } from "./index-VjD1R8dk-Bm9w8E8M.js";
const o = {
  name: "SimpleKPIChart",
  label: "KPI number",
  defaultWidth: 200,
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
      name: "metric",
      type: "measure",
      label: "KPI",
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
      name: "prefix",
      type: "string",
      label: "Prefix",
      description: "Prefix",
      category: "Chart settings"
    },
    {
      name: "suffix",
      type: "string",
      label: "Suffix",
      description: "Suffix",
      category: "Chart settings"
    },
    {
      name: "dps",
      type: "number",
      label: "Decimal Places",
      category: "Formatting"
    },
    {
      name: "fontSize",
      type: "number",
      label: "Text size in pixels",
      defaultValue: 44,
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
}, n = defineComponent(J, o, {
  props: (e) => ({
    ...e,
    results: v({
      from: e.ds,
      select: [e.metric]
    })
  })
});
export {
  n as default,
  o as meta
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2ltcGxlS1BJQ2hhcnQtMThSZDNZQ1QuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaHJpc3RvcGhlcmNhcmxzb24vZmx1aWQvZHJvcGxldC1lbWJlZGRhYmxlL2FwcC9mcm9udGVuZC9lbWJlZGRhYmxlL25vZGVfbW9kdWxlcy9AZW1iZWRkYWJsZS5jb20vdmFuaWxsYS1jb21wb25lbnRzL2Rpc3QvU2ltcGxlS1BJQ2hhcnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbCBhcyB0IH0gZnJvbSBcIi4vaW5kZXguZXNtLUpBaF9LMVZHLmpzXCI7XG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgYXMgYSB9IGZyb20gXCJAZW1iZWRkYWJsZS5jb20vcmVhY3RcIjtcbmltcG9ydCB7IEMgYXMgciB9IGZyb20gXCIuL2luZGV4LVZqRDFSOGRrLmpzXCI7XG5jb25zdCBvID0ge1xuICBuYW1lOiBcIlNpbXBsZUtQSUNoYXJ0XCIsXG4gIGxhYmVsOiBcIktQSSBudW1iZXJcIixcbiAgZGVmYXVsdFdpZHRoOiAyMDAsXG4gIGRlZmF1bHRIZWlnaHQ6IDE1MCxcbiAgY2xhc3NOYW1lczogW1wiaW5zaWRlLWNhcmRcIl0sXG4gIGNhdGVnb3J5OiBcIkNoYXJ0czogZXNzZW50aWFsc1wiLFxuICBpbnB1dHM6IFtcbiAgICB7XG4gICAgICBuYW1lOiBcImRzXCIsXG4gICAgICB0eXBlOiBcImRhdGFzZXRcIixcbiAgICAgIGxhYmVsOiBcIkRhdGFzZXRcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkRhdGFzZXRcIixcbiAgICAgIGRlZmF1bHRWYWx1ZTogITEsXG4gICAgICBjYXRlZ29yeTogXCJDaGFydCBkYXRhXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwibWV0cmljXCIsXG4gICAgICB0eXBlOiBcIm1lYXN1cmVcIixcbiAgICAgIGxhYmVsOiBcIktQSVwiLFxuICAgICAgY29uZmlnOiB7XG4gICAgICAgIGRhdGFzZXQ6IFwiZHNcIlxuICAgICAgfSxcbiAgICAgIGNhdGVnb3J5OiBcIkNoYXJ0IGRhdGFcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJ0aXRsZVwiLFxuICAgICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICAgIGxhYmVsOiBcIlRpdGxlXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJUaGUgdGl0bGUgZm9yIHRoZSBjaGFydFwiLFxuICAgICAgY2F0ZWdvcnk6IFwiQ2hhcnQgc2V0dGluZ3NcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJkZXNjcmlwdGlvblwiLFxuICAgICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICAgIGxhYmVsOiBcIkRlc2NyaXB0aW9uXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJUaGUgZGVzY3JpcHRpb24gZm9yIHRoZSBjaGFydFwiLFxuICAgICAgY2F0ZWdvcnk6IFwiQ2hhcnQgc2V0dGluZ3NcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJwcmVmaXhcIixcbiAgICAgIHR5cGU6IFwic3RyaW5nXCIsXG4gICAgICBsYWJlbDogXCJQcmVmaXhcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlByZWZpeFwiLFxuICAgICAgY2F0ZWdvcnk6IFwiQ2hhcnQgc2V0dGluZ3NcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJzdWZmaXhcIixcbiAgICAgIHR5cGU6IFwic3RyaW5nXCIsXG4gICAgICBsYWJlbDogXCJTdWZmaXhcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlN1ZmZpeFwiLFxuICAgICAgY2F0ZWdvcnk6IFwiQ2hhcnQgc2V0dGluZ3NcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJkcHNcIixcbiAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICBsYWJlbDogXCJEZWNpbWFsIFBsYWNlc1wiLFxuICAgICAgY2F0ZWdvcnk6IFwiRm9ybWF0dGluZ1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcImZvbnRTaXplXCIsXG4gICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgbGFiZWw6IFwiVGV4dCBzaXplIGluIHBpeGVsc1wiLFxuICAgICAgZGVmYXVsdFZhbHVlOiA0NCxcbiAgICAgIGNhdGVnb3J5OiBcIkZvcm1hdHRpbmdcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJlbmFibGVEb3dubG9hZEFzQ1NWXCIsXG4gICAgICB0eXBlOiBcImJvb2xlYW5cIixcbiAgICAgIGxhYmVsOiBcIlNob3cgZG93bmxvYWQgYXMgQ1NWXCIsXG4gICAgICBjYXRlZ29yeTogXCJFeHBvcnQgb3B0aW9uc1wiLFxuICAgICAgZGVmYXVsdFZhbHVlOiAhMVxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJlbmFibGVEb3dubG9hZEFzUE5HXCIsXG4gICAgICB0eXBlOiBcImJvb2xlYW5cIixcbiAgICAgIGxhYmVsOiBcIlNob3cgZG93bmxvYWQgYXMgUE5HXCIsXG4gICAgICBjYXRlZ29yeTogXCJFeHBvcnQgb3B0aW9uc1wiLFxuICAgICAgZGVmYXVsdFZhbHVlOiAhMVxuICAgIH1cbiAgXVxufSwgbiA9IGEociwgbywge1xuICBwcm9wczogKGUpID0+ICh7XG4gICAgLi4uZSxcbiAgICByZXN1bHRzOiB0KHtcbiAgICAgIGZyb206IGUuZHMsXG4gICAgICBzZWxlY3Q6IFtlLm1ldHJpY11cbiAgICB9KVxuICB9KVxufSk7XG5leHBvcnQge1xuICBuIGFzIGRlZmF1bHQsXG4gIG8gYXMgbWV0YVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVNpbXBsZUtQSUNoYXJ0LmpzLm1hcFxuIl0sIm5hbWVzIjpbImEiLCJyIiwidCJdLCJtYXBwaW5ncyI6Ijs7O0FBR0ssTUFBQyxJQUFJO0FBQUEsRUFDUixNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsRUFDUCxjQUFjO0FBQUEsRUFDZCxlQUFlO0FBQUEsRUFDZixZQUFZLENBQUMsYUFBYTtBQUFBLEVBQzFCLFVBQVU7QUFBQSxFQUNWLFFBQVE7QUFBQSxJQUNOO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxhQUFhO0FBQUEsTUFDYixjQUFjO0FBQUEsTUFDZCxVQUFVO0FBQUEsSUFDaEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxRQUFRO0FBQUEsUUFDTixTQUFTO0FBQUEsTUFDakI7QUFBQSxNQUNNLFVBQVU7QUFBQSxJQUNoQjtBQUFBLElBQ0k7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLGFBQWE7QUFBQSxNQUNiLFVBQVU7QUFBQSxJQUNoQjtBQUFBLElBQ0k7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLGFBQWE7QUFBQSxNQUNiLFVBQVU7QUFBQSxJQUNoQjtBQUFBLElBQ0k7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLGFBQWE7QUFBQSxNQUNiLFVBQVU7QUFBQSxJQUNoQjtBQUFBLElBQ0k7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLGFBQWE7QUFBQSxNQUNiLFVBQVU7QUFBQSxJQUNoQjtBQUFBLElBQ0k7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLFVBQVU7QUFBQSxJQUNoQjtBQUFBLElBQ0k7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLGNBQWM7QUFBQSxNQUNkLFVBQVU7QUFBQSxJQUNoQjtBQUFBLElBQ0k7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLFVBQVU7QUFBQSxNQUNWLGNBQWM7QUFBQSxJQUNwQjtBQUFBLElBQ0k7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLFVBQVU7QUFBQSxNQUNWLGNBQWM7QUFBQSxJQUNwQjtBQUFBLEVBQ0E7QUFDQSxHQUFHLElBQUlBLGdCQUFFQyxHQUFHLEdBQUc7QUFBQSxFQUNiLE9BQU8sQ0FBQyxPQUFPO0FBQUEsSUFDYixHQUFHO0FBQUEsSUFDSCxTQUFTQyxFQUFFO0FBQUEsTUFDVCxNQUFNLEVBQUU7QUFBQSxNQUNSLFFBQVEsQ0FBQyxFQUFFLE1BQU07QUFBQSxJQUN2QixDQUFLO0FBQUEsRUFDTDtBQUNBLENBQUM7IiwieF9nb29nbGVfaWdub3JlTGlzdCI6WzBdfQ==
