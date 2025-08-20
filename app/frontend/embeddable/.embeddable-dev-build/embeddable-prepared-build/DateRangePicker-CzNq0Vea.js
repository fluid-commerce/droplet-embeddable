import { e as ee } from "./Spinner-BeNoTciJ-DsMN3-m0.js";
import { d as defineComponent } from "./index.esm-CVE60fla.js";
import { s as se, N } from "./format-TjzP8gQX-Cs7Vwno2.js";
import { j } from "./jsx-runtime-CjQXaSqQ-CjMA1-fF.js";
import { W as Wg } from "./Container-mop-J7T8-BpqPaGKG.js";
import { Z as Zu } from "./DateRangeWithGranularity-z-oouMtt-DQHOvwPv.js";
import { o } from "./differenceInSeconds-D-PK4HfM-Dm2bjhDp.js";
const m = (a) => /* @__PURE__ */ j.jsx(Wg, { ...a, children: /* @__PURE__ */ j.jsx(
  Zu,
  {
    defaultPeriod: a.value,
    defaultGranularity: a.defaultGranularity,
    showGranularity: a.showGranularity,
    onChangePeriod: a.onChange,
    onChangeGranularity: a.onChangeGranularity,
    onChangeComparison: a.onChangeComparison
  }
) }), g = {
  name: "DateRangePicker",
  label: "Date range picker",
  defaultWidth: 300,
  defaultHeight: 50,
  classNames: ["on-top"],
  category: "Controls: inputs & dropdowns",
  inputs: [
    {
      name: "title",
      type: "string",
      label: "Title",
      category: "Settings"
    },
    {
      name: "showGranularity",
      type: "boolean",
      label: "Show granularity picker",
      category: "Settings",
      defaultValue: false
    },
    {
      name: "value",
      type: "timeRange",
      label: "Primary date range",
      category: "Pre-configured variables"
    },
    {
      name: "defaultGranularity",
      type: "granularity",
      label: "Default granularity",
      category: "Pre-configured variables"
    }
  ],
  events: [
    {
      name: "onChange",
      label: "Change Period",
      properties: [
        {
          name: "value",
          type: "timeRange",
          label: "value"
        }
      ]
    },
    {
      name: "onChangeGranularity",
      label: "Change Granularity",
      properties: [
        {
          name: "value",
          type: "granularity",
          label: "value"
        }
      ]
    }
  ],
  variables: [
    {
      name: "date range value",
      type: "timeRange",
      inputs: ["value"],
      defaultValue: { relativeTimeString: "Last 30 days" },
      events: [{ name: "onChange", property: "value" }]
    },
    {
      name: "granularity",
      type: "granularity",
      inputs: ["defaultGranularity"],
      defaultValue: "day",
      events: [{ name: "onChangeGranularity", property: "value" }]
    }
  ]
}, c = defineComponent(m, g, {
  /* @ts-expect-error - to be fixed in @embeddable.com/react */
  props: (a) => ({
    ...a
  }),
  events: {
    onChange: (a) => a ? { value: se({ ...a, from: N(a.from), to: o(a.to) }) } : { value: ee.noFilter() },
    onChangeGranularity: (a) => ({ value: a || ee.noFilter() })
  }
});
export {
  c as default,
  g as meta
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZVJhbmdlUGlja2VyLUN6TnEwVmVhLmpzIiwic291cmNlcyI6WyIvVXNlcnMvY2hyaXN0b3BoZXJjYXJsc29uL2ZsdWlkL2Ryb3BsZXQtZW1iZWRkYWJsZS9hcHAvZnJvbnRlbmQvZW1iZWRkYWJsZS9ub2RlX21vZHVsZXMvQGVtYmVkZGFibGUuY29tL3ZhbmlsbGEtY29tcG9uZW50cy9kaXN0L0RhdGVSYW5nZVBpY2tlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWIGFzIGUgfSBmcm9tIFwiLi9pbmRleC5lc20tSkFoX0sxVkcuanNcIjtcbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCBhcyBuIH0gZnJvbSBcIkBlbWJlZGRhYmxlLmNvbS9yZWFjdFwiO1xuaW1wb3J0IHsgYiBhcyByLCBzIGFzIGwgfSBmcm9tIFwiLi9mb3JtYXQtVGp6UDhnUVguanNcIjtcbmltcG9ydCB7IGogYXMgdCB9IGZyb20gXCIuL2pzeC1ydW50aW1lLUNqUVhhU3FRLmpzXCI7XG5pbXBvcnQgeyBDIGFzIGkgfSBmcm9tIFwiLi9Db250YWluZXItbW9wLUo3VDguanNcIjtcbmltcG9ydCB7IEQgYXMgbyB9IGZyb20gXCIuL0RhdGVSYW5nZVdpdGhHcmFudWxhcml0eS16LW9vdU10dC5qc1wiO1xuaW1wb3J0IHsgZSBhcyB1IH0gZnJvbSBcIi4vZGlmZmVyZW5jZUluU2Vjb25kcy1ELVBLNEhmTS5qc1wiO1xuY29uc3QgbSA9IChhKSA9PiAvKiBAX19QVVJFX18gKi8gdC5qc3goaSwgeyAuLi5hLCBjaGlsZHJlbjogLyogQF9fUFVSRV9fICovIHQuanN4KFxuICBvLFxuICB7XG4gICAgZGVmYXVsdFBlcmlvZDogYS52YWx1ZSxcbiAgICBkZWZhdWx0R3JhbnVsYXJpdHk6IGEuZGVmYXVsdEdyYW51bGFyaXR5LFxuICAgIHNob3dHcmFudWxhcml0eTogYS5zaG93R3JhbnVsYXJpdHksXG4gICAgb25DaGFuZ2VQZXJpb2Q6IGEub25DaGFuZ2UsXG4gICAgb25DaGFuZ2VHcmFudWxhcml0eTogYS5vbkNoYW5nZUdyYW51bGFyaXR5LFxuICAgIG9uQ2hhbmdlQ29tcGFyaXNvbjogYS5vbkNoYW5nZUNvbXBhcmlzb25cbiAgfVxuKSB9KSwgZyA9IHtcbiAgbmFtZTogXCJEYXRlUmFuZ2VQaWNrZXJcIixcbiAgbGFiZWw6IFwiRGF0ZSByYW5nZSBwaWNrZXJcIixcbiAgZGVmYXVsdFdpZHRoOiAzMDAsXG4gIGRlZmF1bHRIZWlnaHQ6IDUwLFxuICBjbGFzc05hbWVzOiBbXCJvbi10b3BcIl0sXG4gIGNhdGVnb3J5OiBcIkNvbnRyb2xzOiBpbnB1dHMgJiBkcm9wZG93bnNcIixcbiAgaW5wdXRzOiBbXG4gICAge1xuICAgICAgbmFtZTogXCJ0aXRsZVwiLFxuICAgICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICAgIGxhYmVsOiBcIlRpdGxlXCIsXG4gICAgICBjYXRlZ29yeTogXCJTZXR0aW5nc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcInNob3dHcmFudWxhcml0eVwiLFxuICAgICAgdHlwZTogXCJib29sZWFuXCIsXG4gICAgICBsYWJlbDogXCJTaG93IGdyYW51bGFyaXR5IHBpY2tlclwiLFxuICAgICAgY2F0ZWdvcnk6IFwiU2V0dGluZ3NcIixcbiAgICAgIGRlZmF1bHRWYWx1ZTogITFcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwidmFsdWVcIixcbiAgICAgIHR5cGU6IFwidGltZVJhbmdlXCIsXG4gICAgICBsYWJlbDogXCJQcmltYXJ5IGRhdGUgcmFuZ2VcIixcbiAgICAgIGNhdGVnb3J5OiBcIlByZS1jb25maWd1cmVkIHZhcmlhYmxlc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcImRlZmF1bHRHcmFudWxhcml0eVwiLFxuICAgICAgdHlwZTogXCJncmFudWxhcml0eVwiLFxuICAgICAgbGFiZWw6IFwiRGVmYXVsdCBncmFudWxhcml0eVwiLFxuICAgICAgY2F0ZWdvcnk6IFwiUHJlLWNvbmZpZ3VyZWQgdmFyaWFibGVzXCJcbiAgICB9XG4gIF0sXG4gIGV2ZW50czogW1xuICAgIHtcbiAgICAgIG5hbWU6IFwib25DaGFuZ2VcIixcbiAgICAgIGxhYmVsOiBcIkNoYW5nZSBQZXJpb2RcIixcbiAgICAgIHByb3BlcnRpZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwidmFsdWVcIixcbiAgICAgICAgICB0eXBlOiBcInRpbWVSYW5nZVwiLFxuICAgICAgICAgIGxhYmVsOiBcInZhbHVlXCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJvbkNoYW5nZUdyYW51bGFyaXR5XCIsXG4gICAgICBsYWJlbDogXCJDaGFuZ2UgR3JhbnVsYXJpdHlcIixcbiAgICAgIHByb3BlcnRpZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwidmFsdWVcIixcbiAgICAgICAgICB0eXBlOiBcImdyYW51bGFyaXR5XCIsXG4gICAgICAgICAgbGFiZWw6IFwidmFsdWVcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdLFxuICB2YXJpYWJsZXM6IFtcbiAgICB7XG4gICAgICBuYW1lOiBcImRhdGUgcmFuZ2UgdmFsdWVcIixcbiAgICAgIHR5cGU6IFwidGltZVJhbmdlXCIsXG4gICAgICBpbnB1dHM6IFtcInZhbHVlXCJdLFxuICAgICAgZGVmYXVsdFZhbHVlOiB7IHJlbGF0aXZlVGltZVN0cmluZzogXCJMYXN0IDMwIGRheXNcIiB9LFxuICAgICAgZXZlbnRzOiBbeyBuYW1lOiBcIm9uQ2hhbmdlXCIsIHByb3BlcnR5OiBcInZhbHVlXCIgfV1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiZ3JhbnVsYXJpdHlcIixcbiAgICAgIHR5cGU6IFwiZ3JhbnVsYXJpdHlcIixcbiAgICAgIGlucHV0czogW1wiZGVmYXVsdEdyYW51bGFyaXR5XCJdLFxuICAgICAgZGVmYXVsdFZhbHVlOiBcImRheVwiLFxuICAgICAgZXZlbnRzOiBbeyBuYW1lOiBcIm9uQ2hhbmdlR3JhbnVsYXJpdHlcIiwgcHJvcGVydHk6IFwidmFsdWVcIiB9XVxuICAgIH1cbiAgXVxufSwgYyA9IG4obSwgZywge1xuICAvKiBAdHMtZXhwZWN0LWVycm9yIC0gdG8gYmUgZml4ZWQgaW4gQGVtYmVkZGFibGUuY29tL3JlYWN0ICovXG4gIHByb3BzOiAoYSkgPT4gKHtcbiAgICAuLi5hXG4gIH0pLFxuICBldmVudHM6IHtcbiAgICBvbkNoYW5nZTogKGEpID0+IGEgPyB7IHZhbHVlOiByKHsgLi4uYSwgZnJvbTogbChhLmZyb20pLCB0bzogdShhLnRvKSB9KSB9IDogeyB2YWx1ZTogZS5ub0ZpbHRlcigpIH0sXG4gICAgb25DaGFuZ2VHcmFudWxhcml0eTogKGEpID0+ICh7IHZhbHVlOiBhIHx8IGUubm9GaWx0ZXIoKSB9KVxuICB9XG59KTtcbmV4cG9ydCB7XG4gIGMgYXMgZGVmYXVsdCxcbiAgZyBhcyBtZXRhXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RGF0ZVJhbmdlUGlja2VyLmpzLm1hcFxuIl0sIm5hbWVzIjpbInQiLCJpIiwibyIsIm4iLCJyIiwibCIsInUiLCJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBT0ssTUFBQyxJQUFJLENBQUMsTUFBc0JBLGtCQUFFLElBQUlDLElBQUcsRUFBRSxHQUFHLEdBQUcsVUFBMEJELGtCQUFFO0FBQUEsRUFDNUVFO0FBQUFBLEVBQ0E7QUFBQSxJQUNFLGVBQWUsRUFBRTtBQUFBLElBQ2pCLG9CQUFvQixFQUFFO0FBQUEsSUFDdEIsaUJBQWlCLEVBQUU7QUFBQSxJQUNuQixnQkFBZ0IsRUFBRTtBQUFBLElBQ2xCLHFCQUFxQixFQUFFO0FBQUEsSUFDdkIsb0JBQW9CLEVBQUU7QUFBQSxFQUMxQjtBQUNBLEVBQUMsQ0FBRSxHQUFHLElBQUk7QUFBQSxFQUNSLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLGNBQWM7QUFBQSxFQUNkLGVBQWU7QUFBQSxFQUNmLFlBQVksQ0FBQyxRQUFRO0FBQUEsRUFDckIsVUFBVTtBQUFBLEVBQ1YsUUFBUTtBQUFBLElBQ047QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLFVBQVU7QUFBQSxJQUNoQjtBQUFBLElBQ0k7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLFVBQVU7QUFBQSxNQUNWLGNBQWM7QUFBQSxJQUNwQjtBQUFBLElBQ0k7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLFVBQVU7QUFBQSxJQUNoQjtBQUFBLElBQ0k7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLFVBQVU7QUFBQSxJQUNoQjtBQUFBLEVBQ0E7QUFBQSxFQUNFLFFBQVE7QUFBQSxJQUNOO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxZQUFZO0FBQUEsUUFDVjtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFVBQ04sT0FBTztBQUFBLFFBQ2pCO0FBQUEsTUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxZQUFZO0FBQUEsUUFDVjtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFVBQ04sT0FBTztBQUFBLFFBQ2pCO0FBQUEsTUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDRSxXQUFXO0FBQUEsSUFDVDtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sUUFBUSxDQUFDLE9BQU87QUFBQSxNQUNoQixjQUFjLEVBQUUsb0JBQW9CLGVBQWM7QUFBQSxNQUNsRCxRQUFRLENBQUMsRUFBRSxNQUFNLFlBQVksVUFBVSxRQUFPLENBQUU7QUFBQSxJQUN0RDtBQUFBLElBQ0k7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFFBQVEsQ0FBQyxvQkFBb0I7QUFBQSxNQUM3QixjQUFjO0FBQUEsTUFDZCxRQUFRLENBQUMsRUFBRSxNQUFNLHVCQUF1QixVQUFVLFFBQU8sQ0FBRTtBQUFBLElBQ2pFO0FBQUEsRUFDQTtBQUNBLEdBQUcsSUFBSUMsZ0JBQUUsR0FBRyxHQUFHO0FBQUE7QUFBQSxFQUViLE9BQU8sQ0FBQyxPQUFPO0FBQUEsSUFDYixHQUFHO0FBQUEsRUFDUDtBQUFBLEVBQ0UsUUFBUTtBQUFBLElBQ04sVUFBVSxDQUFDLE1BQU0sSUFBSSxFQUFFLE9BQU9DLEdBQUUsRUFBRSxHQUFHLEdBQUcsTUFBTUMsRUFBRSxFQUFFLElBQUksR0FBRyxJQUFJQyxFQUFFLEVBQUUsRUFBRSxFQUFDLENBQUUsRUFBQyxJQUFLLEVBQUUsT0FBT0MsR0FBRSxXQUFVO0FBQUEsSUFDakcscUJBQXFCLENBQUMsT0FBTyxFQUFFLE9BQU8sS0FBS0EsR0FBRSxXQUFVO0FBQUEsRUFDM0Q7QUFDQSxDQUFDOyIsInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswXX0=
