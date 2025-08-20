import { v } from "./Spinner-BeNoTciJ-DsMN3-m0.js";
import { d as defineComponent } from "./index.esm-CVE60fla.js";
import { J } from "./index-VjD1R8dk-Bm9w8E8M.js";
const s = {
  name: "KPIChart",
  label: "KPI number comparison",
  defaultWidth: 200,
  defaultHeight: 150,
  classNames: ["inside-card"],
  category: "Charts: time-series comparison",
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
      required: true,
      config: {
        dataset: "ds"
      },
      category: "Chart data"
    },
    {
      name: "timeProperty",
      type: "dimension",
      label: "Time Property",
      description: "Used by time filters",
      config: {
        dataset: "ds",
        supportedTypes: ["time"]
      },
      category: "Chart data"
    },
    {
      name: "timeFilter",
      type: "timeRange",
      label: "Primary date range",
      description: "Date range",
      category: "Variables to configure"
    },
    {
      name: "prevTimeFilter",
      type: "timeRange",
      label: "Comparison date range",
      description: "Date range",
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
      name: "showPrevPeriodLabel",
      type: "boolean",
      label: "Display comparison period label",
      defaultValue: true,
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
}, d = defineComponent(J, s, {
  props: (e) => {
    var t, a, r;
    return {
      ...e,
      results: v({
        from: e.ds,
        select: [e.metric],
        filters: (t = e.timeFilter) != null && t.from && e.timeProperty ? [
          {
            property: e.timeProperty,
            operator: "inDateRange",
            value: e.timeFilter
          }
        ] : void 0
      }),
      prevResults: e.timeProperty && v({
        from: e.ds,
        select: [e.metric],
        limit: (a = e.prevTimeFilter) != null && a.from ? void 0 : 1,
        filters: (r = e.prevTimeFilter) != null && r.from ? [
          {
            property: e.timeProperty,
            operator: "inDateRange",
            value: {
              from: e.prevTimeFilter.from,
              relativeTimeString: "",
              to: e.prevTimeFilter.to
            }
          }
        ] : void 0
      })
    };
  }
});
export {
  d as default,
  s as meta
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS1BJQ2hhcnQtRGgwcm4xYnQuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaHJpc3RvcGhlcmNhcmxzb24vZmx1aWQvZHJvcGxldC1lbWJlZGRhYmxlL2FwcC9mcm9udGVuZC9lbWJlZGRhYmxlL25vZGVfbW9kdWxlcy9AZW1iZWRkYWJsZS5jb20vdmFuaWxsYS1jb21wb25lbnRzL2Rpc3QvS1BJQ2hhcnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbCBhcyBvIH0gZnJvbSBcIi4vaW5kZXguZXNtLUpBaF9LMVZHLmpzXCI7XG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgYXMgaSB9IGZyb20gXCJAZW1iZWRkYWJsZS5jb20vcmVhY3RcIjtcbmltcG9ydCB7IEMgYXMgbCB9IGZyb20gXCIuL2luZGV4LVZqRDFSOGRrLmpzXCI7XG5jb25zdCBzID0ge1xuICBuYW1lOiBcIktQSUNoYXJ0XCIsXG4gIGxhYmVsOiBcIktQSSBudW1iZXIgY29tcGFyaXNvblwiLFxuICBkZWZhdWx0V2lkdGg6IDIwMCxcbiAgZGVmYXVsdEhlaWdodDogMTUwLFxuICBjbGFzc05hbWVzOiBbXCJpbnNpZGUtY2FyZFwiXSxcbiAgY2F0ZWdvcnk6IFwiQ2hhcnRzOiB0aW1lLXNlcmllcyBjb21wYXJpc29uXCIsXG4gIGlucHV0czogW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiZHNcIixcbiAgICAgIHR5cGU6IFwiZGF0YXNldFwiLFxuICAgICAgbGFiZWw6IFwiRGF0YXNldFwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiRGF0YXNldFwiLFxuICAgICAgZGVmYXVsdFZhbHVlOiAhMSxcbiAgICAgIGNhdGVnb3J5OiBcIkNoYXJ0IGRhdGFcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJtZXRyaWNcIixcbiAgICAgIHR5cGU6IFwibWVhc3VyZVwiLFxuICAgICAgbGFiZWw6IFwiS1BJXCIsXG4gICAgICByZXF1aXJlZDogITAsXG4gICAgICBjb25maWc6IHtcbiAgICAgICAgZGF0YXNldDogXCJkc1wiXG4gICAgICB9LFxuICAgICAgY2F0ZWdvcnk6IFwiQ2hhcnQgZGF0YVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcInRpbWVQcm9wZXJ0eVwiLFxuICAgICAgdHlwZTogXCJkaW1lbnNpb25cIixcbiAgICAgIGxhYmVsOiBcIlRpbWUgUHJvcGVydHlcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlVzZWQgYnkgdGltZSBmaWx0ZXJzXCIsXG4gICAgICBjb25maWc6IHtcbiAgICAgICAgZGF0YXNldDogXCJkc1wiLFxuICAgICAgICBzdXBwb3J0ZWRUeXBlczogW1widGltZVwiXVxuICAgICAgfSxcbiAgICAgIGNhdGVnb3J5OiBcIkNoYXJ0IGRhdGFcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJ0aW1lRmlsdGVyXCIsXG4gICAgICB0eXBlOiBcInRpbWVSYW5nZVwiLFxuICAgICAgbGFiZWw6IFwiUHJpbWFyeSBkYXRlIHJhbmdlXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJEYXRlIHJhbmdlXCIsXG4gICAgICBjYXRlZ29yeTogXCJWYXJpYWJsZXMgdG8gY29uZmlndXJlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwicHJldlRpbWVGaWx0ZXJcIixcbiAgICAgIHR5cGU6IFwidGltZVJhbmdlXCIsXG4gICAgICBsYWJlbDogXCJDb21wYXJpc29uIGRhdGUgcmFuZ2VcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkRhdGUgcmFuZ2VcIixcbiAgICAgIGNhdGVnb3J5OiBcIlZhcmlhYmxlcyB0byBjb25maWd1cmVcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJ0aXRsZVwiLFxuICAgICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICAgIGxhYmVsOiBcIlRpdGxlXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJUaGUgdGl0bGUgZm9yIHRoZSBjaGFydFwiLFxuICAgICAgY2F0ZWdvcnk6IFwiQ2hhcnQgc2V0dGluZ3NcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJkZXNjcmlwdGlvblwiLFxuICAgICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICAgIGxhYmVsOiBcIkRlc2NyaXB0aW9uXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJUaGUgZGVzY3JpcHRpb24gZm9yIHRoZSBjaGFydFwiLFxuICAgICAgY2F0ZWdvcnk6IFwiQ2hhcnQgc2V0dGluZ3NcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJzaG93UHJldlBlcmlvZExhYmVsXCIsXG4gICAgICB0eXBlOiBcImJvb2xlYW5cIixcbiAgICAgIGxhYmVsOiBcIkRpc3BsYXkgY29tcGFyaXNvbiBwZXJpb2QgbGFiZWxcIixcbiAgICAgIGRlZmF1bHRWYWx1ZTogITAsXG4gICAgICBjYXRlZ29yeTogXCJDaGFydCBzZXR0aW5nc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcInByZWZpeFwiLFxuICAgICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICAgIGxhYmVsOiBcIlByZWZpeFwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiUHJlZml4XCIsXG4gICAgICBjYXRlZ29yeTogXCJDaGFydCBzZXR0aW5nc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcInN1ZmZpeFwiLFxuICAgICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICAgIGxhYmVsOiBcIlN1ZmZpeFwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiU3VmZml4XCIsXG4gICAgICBjYXRlZ29yeTogXCJDaGFydCBzZXR0aW5nc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcImRwc1wiLFxuICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgIGxhYmVsOiBcIkRlY2ltYWwgUGxhY2VzXCIsXG4gICAgICBjYXRlZ29yeTogXCJGb3JtYXR0aW5nXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiZm9udFNpemVcIixcbiAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICBsYWJlbDogXCJUZXh0IHNpemUgaW4gcGl4ZWxzXCIsXG4gICAgICBkZWZhdWx0VmFsdWU6IDQ0LFxuICAgICAgY2F0ZWdvcnk6IFwiRm9ybWF0dGluZ1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcImVuYWJsZURvd25sb2FkQXNDU1ZcIixcbiAgICAgIHR5cGU6IFwiYm9vbGVhblwiLFxuICAgICAgbGFiZWw6IFwiU2hvdyBkb3dubG9hZCBhcyBDU1ZcIixcbiAgICAgIGNhdGVnb3J5OiBcIkV4cG9ydCBvcHRpb25zXCIsXG4gICAgICBkZWZhdWx0VmFsdWU6ICExXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcImVuYWJsZURvd25sb2FkQXNQTkdcIixcbiAgICAgIHR5cGU6IFwiYm9vbGVhblwiLFxuICAgICAgbGFiZWw6IFwiU2hvdyBkb3dubG9hZCBhcyBQTkdcIixcbiAgICAgIGNhdGVnb3J5OiBcIkV4cG9ydCBvcHRpb25zXCIsXG4gICAgICBkZWZhdWx0VmFsdWU6ICExXG4gICAgfVxuICBdXG59LCBkID0gaShsLCBzLCB7XG4gIHByb3BzOiAoZSkgPT4ge1xuICAgIHZhciB0LCBhLCByO1xuICAgIHJldHVybiB7XG4gICAgICAuLi5lLFxuICAgICAgcmVzdWx0czogbyh7XG4gICAgICAgIGZyb206IGUuZHMsXG4gICAgICAgIHNlbGVjdDogW2UubWV0cmljXSxcbiAgICAgICAgZmlsdGVyczogKHQgPSBlLnRpbWVGaWx0ZXIpICE9IG51bGwgJiYgdC5mcm9tICYmIGUudGltZVByb3BlcnR5ID8gW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHByb3BlcnR5OiBlLnRpbWVQcm9wZXJ0eSxcbiAgICAgICAgICAgIG9wZXJhdG9yOiBcImluRGF0ZVJhbmdlXCIsXG4gICAgICAgICAgICB2YWx1ZTogZS50aW1lRmlsdGVyXG4gICAgICAgICAgfVxuICAgICAgICBdIDogdm9pZCAwXG4gICAgICB9KSxcbiAgICAgIHByZXZSZXN1bHRzOiBlLnRpbWVQcm9wZXJ0eSAmJiBvKHtcbiAgICAgICAgZnJvbTogZS5kcyxcbiAgICAgICAgc2VsZWN0OiBbZS5tZXRyaWNdLFxuICAgICAgICBsaW1pdDogKGEgPSBlLnByZXZUaW1lRmlsdGVyKSAhPSBudWxsICYmIGEuZnJvbSA/IHZvaWQgMCA6IDEsXG4gICAgICAgIGZpbHRlcnM6IChyID0gZS5wcmV2VGltZUZpbHRlcikgIT0gbnVsbCAmJiByLmZyb20gPyBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgcHJvcGVydHk6IGUudGltZVByb3BlcnR5LFxuICAgICAgICAgICAgb3BlcmF0b3I6IFwiaW5EYXRlUmFuZ2VcIixcbiAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgIGZyb206IGUucHJldlRpbWVGaWx0ZXIuZnJvbSxcbiAgICAgICAgICAgICAgcmVsYXRpdmVUaW1lU3RyaW5nOiBcIlwiLFxuICAgICAgICAgICAgICB0bzogZS5wcmV2VGltZUZpbHRlci50b1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgXSA6IHZvaWQgMFxuICAgICAgfSlcbiAgICB9O1xuICB9XG59KTtcbmV4cG9ydCB7XG4gIGQgYXMgZGVmYXVsdCxcbiAgcyBhcyBtZXRhXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9S1BJQ2hhcnQuanMubWFwXG4iXSwibmFtZXMiOlsiaSIsImwiLCJvIl0sIm1hcHBpbmdzIjoiOzs7QUFHSyxNQUFDLElBQUk7QUFBQSxFQUNSLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLGNBQWM7QUFBQSxFQUNkLGVBQWU7QUFBQSxFQUNmLFlBQVksQ0FBQyxhQUFhO0FBQUEsRUFDMUIsVUFBVTtBQUFBLEVBQ1YsUUFBUTtBQUFBLElBQ047QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLGFBQWE7QUFBQSxNQUNiLGNBQWM7QUFBQSxNQUNkLFVBQVU7QUFBQSxJQUNoQjtBQUFBLElBQ0k7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLFVBQVU7QUFBQSxNQUNWLFFBQVE7QUFBQSxRQUNOLFNBQVM7QUFBQSxNQUNqQjtBQUFBLE1BQ00sVUFBVTtBQUFBLElBQ2hCO0FBQUEsSUFDSTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsYUFBYTtBQUFBLE1BQ2IsUUFBUTtBQUFBLFFBQ04sU0FBUztBQUFBLFFBQ1QsZ0JBQWdCLENBQUMsTUFBTTtBQUFBLE1BQy9CO0FBQUEsTUFDTSxVQUFVO0FBQUEsSUFDaEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxhQUFhO0FBQUEsTUFDYixVQUFVO0FBQUEsSUFDaEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxhQUFhO0FBQUEsTUFDYixVQUFVO0FBQUEsSUFDaEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxhQUFhO0FBQUEsTUFDYixVQUFVO0FBQUEsSUFDaEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxhQUFhO0FBQUEsTUFDYixVQUFVO0FBQUEsSUFDaEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxjQUFjO0FBQUEsTUFDZCxVQUFVO0FBQUEsSUFDaEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxhQUFhO0FBQUEsTUFDYixVQUFVO0FBQUEsSUFDaEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxhQUFhO0FBQUEsTUFDYixVQUFVO0FBQUEsSUFDaEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxVQUFVO0FBQUEsSUFDaEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxjQUFjO0FBQUEsTUFDZCxVQUFVO0FBQUEsSUFDaEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxVQUFVO0FBQUEsTUFDVixjQUFjO0FBQUEsSUFDcEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxVQUFVO0FBQUEsTUFDVixjQUFjO0FBQUEsSUFDcEI7QUFBQSxFQUNBO0FBQ0EsR0FBRyxJQUFJQSxnQkFBRUMsR0FBRyxHQUFHO0FBQUEsRUFDYixPQUFPLENBQUMsTUFBTTtBQUNaLFFBQUksR0FBRyxHQUFHO0FBQ1YsV0FBTztBQUFBLE1BQ0wsR0FBRztBQUFBLE1BQ0gsU0FBU0MsRUFBRTtBQUFBLFFBQ1QsTUFBTSxFQUFFO0FBQUEsUUFDUixRQUFRLENBQUMsRUFBRSxNQUFNO0FBQUEsUUFDakIsVUFBVSxJQUFJLEVBQUUsZUFBZSxRQUFRLEVBQUUsUUFBUSxFQUFFLGVBQWU7QUFBQSxVQUNoRTtBQUFBLFlBQ0UsVUFBVSxFQUFFO0FBQUEsWUFDWixVQUFVO0FBQUEsWUFDVixPQUFPLEVBQUU7QUFBQSxVQUNyQjtBQUFBLFFBQ0EsSUFBWTtBQUFBLE1BQ1osQ0FBTztBQUFBLE1BQ0QsYUFBYSxFQUFFLGdCQUFnQkEsRUFBRTtBQUFBLFFBQy9CLE1BQU0sRUFBRTtBQUFBLFFBQ1IsUUFBUSxDQUFDLEVBQUUsTUFBTTtBQUFBLFFBQ2pCLFFBQVEsSUFBSSxFQUFFLG1CQUFtQixRQUFRLEVBQUUsT0FBTyxTQUFTO0FBQUEsUUFDM0QsVUFBVSxJQUFJLEVBQUUsbUJBQW1CLFFBQVEsRUFBRSxPQUFPO0FBQUEsVUFDbEQ7QUFBQSxZQUNFLFVBQVUsRUFBRTtBQUFBLFlBQ1osVUFBVTtBQUFBLFlBQ1YsT0FBTztBQUFBLGNBQ0wsTUFBTSxFQUFFLGVBQWU7QUFBQSxjQUN2QixvQkFBb0I7QUFBQSxjQUNwQixJQUFJLEVBQUUsZUFBZTtBQUFBLFlBQ25DO0FBQUEsVUFDQTtBQUFBLFFBQ0EsSUFBWTtBQUFBLE1BQ1osQ0FBTztBQUFBLElBQ1A7QUFBQSxFQUNFO0FBQ0YsQ0FBQzsiLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMF19
