import { e as ee, n as ne, t as te } from "./Spinner-BeNoTciJ-DsMN3-m0.js";
import { d as defineComponent } from "./index.esm-CVE60fla.js";
import { s as se, N } from "./format-TjzP8gQX-Cs7Vwno2.js";
import { j } from "./jsx-runtime-CjQXaSqQ-CjMA1-fF.js";
import { W as Wg } from "./Container-mop-J7T8-BpqPaGKG.js";
import { Z as Zu } from "./DateRangeWithGranularity-z-oouMtt-DQHOvwPv.js";
import { o } from "./differenceInSeconds-D-PK4HfM-Dm2bjhDp.js";
const a = ne("timeComparison", {
  label: "Time Comparison",
  optionLabel: (e) => e
});
te(a, "No comparison");
te(a, "Previous period");
te(a, "Previous week");
te(a, "Previous month");
te(a, "Previous quarter");
te(a, "Previous year");
const g = (e) => /* @__PURE__ */ j.jsx(Wg, { ...e, children: /* @__PURE__ */ j.jsx(Zu, { ...e }) }), f = {
  name: "ComparisonFilter",
  label: "Comparison filter",
  defaultWidth: 920,
  defaultHeight: 50,
  classNames: ["on-top"],
  category: "Charts: time-series comparison",
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
      defaultValue: true
    },
    {
      name: "defaultComparison",
      type: a,
      label: "Default comparison option",
      defaultValue: "Previous period",
      category: "Settings"
    },
    {
      name: "defaultPeriod",
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
      name: "onChangePeriod",
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
      name: "onChangeComparison",
      label: "Change Comparison",
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
      name: "primary date range",
      type: "timeRange",
      inputs: ["defaultPeriod"],
      defaultValue: { relativeTimeString: "Last 30 days" },
      events: [{ name: "onChangePeriod", property: "value" }]
    },
    {
      name: "comparison date range",
      type: "timeRange",
      defaultValue: ee.noFilter(),
      events: [{ name: "onChangeComparison", property: "value" }]
    },
    {
      name: "granularity",
      type: "granularity",
      inputs: ["defaultGranularity"],
      defaultValue: "day",
      events: [{ name: "onChangeGranularity", property: "value" }]
    }
  ]
}, G = defineComponent(g, f, {
  /* The Inputs type is currently set to PICK properties from the "events" section of the meta object
   * and add them to the "inputs" var that we're spreading to props. There are two issues:
   * 1. It's not clear why we're adding events to "inputs" and if we need to spread both to
   *    the props object, it might be better to have two parameters for the props function.
   * 2. The Inputs type is not correctly PICKing all events - it only takes the first one. That’s
   *    the reason why it complains about onChangeComparison and onChangeGranularity, but not
   *    onChangePeriod
   * @ts-expect-error - to be fixed in @embeddable.com/react */
  props: (e) => e,
  events: {
    onChangePeriod: (e) => e ? { value: se({ ...e, from: N(e.from), to: o(e.to) }) } : { value: ee.noFilter() },
    onChangeComparison: (e) => e ? { value: se({ ...e, from: N(e.from), to: o(e.to) }) } : { value: ee.noFilter() },
    onChangeGranularity: (e) => ({ value: e || ee.noFilter() })
  }
});
export {
  G as default,
  f as meta
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tcGFyaXNvbkZpbHRlci1DeFZfRU90UC5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL2NocmlzdG9waGVyY2FybHNvbi9mbHVpZC9kcm9wbGV0LWVtYmVkZGFibGUvYXBwL2Zyb250ZW5kL2VtYmVkZGFibGUvbm9kZV9tb2R1bGVzL0BlbWJlZGRhYmxlLmNvbS92YW5pbGxhLWNvbXBvbmVudHMvZGlzdC9Db21wYXJpc29uRmlsdGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGQgYXMgdSwgYiBhcyByLCBWIGFzIHQgfSBmcm9tIFwiLi9pbmRleC5lc20tSkFoX0sxVkcuanNcIjtcbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCBhcyBzIH0gZnJvbSBcIkBlbWJlZGRhYmxlLmNvbS9yZWFjdFwiO1xuaW1wb3J0IHsgYiBhcyBuLCBzIGFzIG8gfSBmcm9tIFwiLi9mb3JtYXQtVGp6UDhnUVguanNcIjtcbmltcG9ydCB7IGogYXMgaSB9IGZyb20gXCIuL2pzeC1ydW50aW1lLUNqUVhhU3FRLmpzXCI7XG5pbXBvcnQgeyBDIGFzIHAgfSBmcm9tIFwiLi9Db250YWluZXItbW9wLUo3VDguanNcIjtcbmltcG9ydCB7IEQgYXMgeSB9IGZyb20gXCIuL0RhdGVSYW5nZVdpdGhHcmFudWxhcml0eS16LW9vdU10dC5qc1wiO1xuaW1wb3J0IHsgZSBhcyBsIH0gZnJvbSBcIi4vZGlmZmVyZW5jZUluU2Vjb25kcy1ELVBLNEhmTS5qc1wiO1xuY29uc3QgYSA9IHUoXCJ0aW1lQ29tcGFyaXNvblwiLCB7XG4gIGxhYmVsOiBcIlRpbWUgQ29tcGFyaXNvblwiLFxuICBvcHRpb25MYWJlbDogKGUpID0+IGVcbn0pO1xucihhLCBcIk5vIGNvbXBhcmlzb25cIik7XG5yKGEsIFwiUHJldmlvdXMgcGVyaW9kXCIpO1xucihhLCBcIlByZXZpb3VzIHdlZWtcIik7XG5yKGEsIFwiUHJldmlvdXMgbW9udGhcIik7XG5yKGEsIFwiUHJldmlvdXMgcXVhcnRlclwiKTtcbnIoYSwgXCJQcmV2aW91cyB5ZWFyXCIpO1xuY29uc3QgZyA9IChlKSA9PiAvKiBAX19QVVJFX18gKi8gaS5qc3gocCwgeyAuLi5lLCBjaGlsZHJlbjogLyogQF9fUFVSRV9fICovIGkuanN4KHksIHsgLi4uZSB9KSB9KSwgZiA9IHtcbiAgbmFtZTogXCJDb21wYXJpc29uRmlsdGVyXCIsXG4gIGxhYmVsOiBcIkNvbXBhcmlzb24gZmlsdGVyXCIsXG4gIGRlZmF1bHRXaWR0aDogOTIwLFxuICBkZWZhdWx0SGVpZ2h0OiA1MCxcbiAgY2xhc3NOYW1lczogW1wib24tdG9wXCJdLFxuICBjYXRlZ29yeTogXCJDaGFydHM6IHRpbWUtc2VyaWVzIGNvbXBhcmlzb25cIixcbiAgaW5wdXRzOiBbXG4gICAge1xuICAgICAgbmFtZTogXCJ0aXRsZVwiLFxuICAgICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICAgIGxhYmVsOiBcIlRpdGxlXCIsXG4gICAgICBjYXRlZ29yeTogXCJTZXR0aW5nc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcInNob3dHcmFudWxhcml0eVwiLFxuICAgICAgdHlwZTogXCJib29sZWFuXCIsXG4gICAgICBsYWJlbDogXCJTaG93IGdyYW51bGFyaXR5IHBpY2tlclwiLFxuICAgICAgY2F0ZWdvcnk6IFwiU2V0dGluZ3NcIixcbiAgICAgIGRlZmF1bHRWYWx1ZTogITBcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiZGVmYXVsdENvbXBhcmlzb25cIixcbiAgICAgIHR5cGU6IGEsXG4gICAgICBsYWJlbDogXCJEZWZhdWx0IGNvbXBhcmlzb24gb3B0aW9uXCIsXG4gICAgICBkZWZhdWx0VmFsdWU6IFwiUHJldmlvdXMgcGVyaW9kXCIsXG4gICAgICBjYXRlZ29yeTogXCJTZXR0aW5nc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcImRlZmF1bHRQZXJpb2RcIixcbiAgICAgIHR5cGU6IFwidGltZVJhbmdlXCIsXG4gICAgICBsYWJlbDogXCJQcmltYXJ5IGRhdGUgcmFuZ2VcIixcbiAgICAgIGNhdGVnb3J5OiBcIlByZS1jb25maWd1cmVkIHZhcmlhYmxlc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcImRlZmF1bHRHcmFudWxhcml0eVwiLFxuICAgICAgdHlwZTogXCJncmFudWxhcml0eVwiLFxuICAgICAgbGFiZWw6IFwiRGVmYXVsdCBncmFudWxhcml0eVwiLFxuICAgICAgY2F0ZWdvcnk6IFwiUHJlLWNvbmZpZ3VyZWQgdmFyaWFibGVzXCJcbiAgICB9XG4gIF0sXG4gIGV2ZW50czogW1xuICAgIHtcbiAgICAgIG5hbWU6IFwib25DaGFuZ2VQZXJpb2RcIixcbiAgICAgIGxhYmVsOiBcIkNoYW5nZSBQZXJpb2RcIixcbiAgICAgIHByb3BlcnRpZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwidmFsdWVcIixcbiAgICAgICAgICB0eXBlOiBcInRpbWVSYW5nZVwiLFxuICAgICAgICAgIGxhYmVsOiBcInZhbHVlXCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJvbkNoYW5nZUNvbXBhcmlzb25cIixcbiAgICAgIGxhYmVsOiBcIkNoYW5nZSBDb21wYXJpc29uXCIsXG4gICAgICBwcm9wZXJ0aWVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcInZhbHVlXCIsXG4gICAgICAgICAgdHlwZTogXCJ0aW1lUmFuZ2VcIixcbiAgICAgICAgICBsYWJlbDogXCJ2YWx1ZVwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwib25DaGFuZ2VHcmFudWxhcml0eVwiLFxuICAgICAgbGFiZWw6IFwiQ2hhbmdlIEdyYW51bGFyaXR5XCIsXG4gICAgICBwcm9wZXJ0aWVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcInZhbHVlXCIsXG4gICAgICAgICAgdHlwZTogXCJncmFudWxhcml0eVwiLFxuICAgICAgICAgIGxhYmVsOiBcInZhbHVlXCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXSxcbiAgdmFyaWFibGVzOiBbXG4gICAge1xuICAgICAgbmFtZTogXCJwcmltYXJ5IGRhdGUgcmFuZ2VcIixcbiAgICAgIHR5cGU6IFwidGltZVJhbmdlXCIsXG4gICAgICBpbnB1dHM6IFtcImRlZmF1bHRQZXJpb2RcIl0sXG4gICAgICBkZWZhdWx0VmFsdWU6IHsgcmVsYXRpdmVUaW1lU3RyaW5nOiBcIkxhc3QgMzAgZGF5c1wiIH0sXG4gICAgICBldmVudHM6IFt7IG5hbWU6IFwib25DaGFuZ2VQZXJpb2RcIiwgcHJvcGVydHk6IFwidmFsdWVcIiB9XVxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJjb21wYXJpc29uIGRhdGUgcmFuZ2VcIixcbiAgICAgIHR5cGU6IFwidGltZVJhbmdlXCIsXG4gICAgICBkZWZhdWx0VmFsdWU6IHQubm9GaWx0ZXIoKSxcbiAgICAgIGV2ZW50czogW3sgbmFtZTogXCJvbkNoYW5nZUNvbXBhcmlzb25cIiwgcHJvcGVydHk6IFwidmFsdWVcIiB9XVxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJncmFudWxhcml0eVwiLFxuICAgICAgdHlwZTogXCJncmFudWxhcml0eVwiLFxuICAgICAgaW5wdXRzOiBbXCJkZWZhdWx0R3JhbnVsYXJpdHlcIl0sXG4gICAgICBkZWZhdWx0VmFsdWU6IFwiZGF5XCIsXG4gICAgICBldmVudHM6IFt7IG5hbWU6IFwib25DaGFuZ2VHcmFudWxhcml0eVwiLCBwcm9wZXJ0eTogXCJ2YWx1ZVwiIH1dXG4gICAgfVxuICBdXG59LCBHID0gcyhnLCBmLCB7XG4gIC8qIFRoZSBJbnB1dHMgdHlwZSBpcyBjdXJyZW50bHkgc2V0IHRvIFBJQ0sgcHJvcGVydGllcyBmcm9tIHRoZSBcImV2ZW50c1wiIHNlY3Rpb24gb2YgdGhlIG1ldGEgb2JqZWN0XG4gICAqIGFuZCBhZGQgdGhlbSB0byB0aGUgXCJpbnB1dHNcIiB2YXIgdGhhdCB3ZSdyZSBzcHJlYWRpbmcgdG8gcHJvcHMuIFRoZXJlIGFyZSB0d28gaXNzdWVzOlxuICAgKiAxLiBJdCdzIG5vdCBjbGVhciB3aHkgd2UncmUgYWRkaW5nIGV2ZW50cyB0byBcImlucHV0c1wiIGFuZCBpZiB3ZSBuZWVkIHRvIHNwcmVhZCBib3RoIHRvXG4gICAqICAgIHRoZSBwcm9wcyBvYmplY3QsIGl0IG1pZ2h0IGJlIGJldHRlciB0byBoYXZlIHR3byBwYXJhbWV0ZXJzIGZvciB0aGUgcHJvcHMgZnVuY3Rpb24uXG4gICAqIDIuIFRoZSBJbnB1dHMgdHlwZSBpcyBub3QgY29ycmVjdGx5IFBJQ0tpbmcgYWxsIGV2ZW50cyAtIGl0IG9ubHkgdGFrZXMgdGhlIGZpcnN0IG9uZS4gVGhhdOKAmXNcbiAgICogICAgdGhlIHJlYXNvbiB3aHkgaXQgY29tcGxhaW5zIGFib3V0IG9uQ2hhbmdlQ29tcGFyaXNvbiBhbmQgb25DaGFuZ2VHcmFudWxhcml0eSwgYnV0IG5vdFxuICAgKiAgICBvbkNoYW5nZVBlcmlvZFxuICAgKiBAdHMtZXhwZWN0LWVycm9yIC0gdG8gYmUgZml4ZWQgaW4gQGVtYmVkZGFibGUuY29tL3JlYWN0ICovXG4gIHByb3BzOiAoZSkgPT4gZSxcbiAgZXZlbnRzOiB7XG4gICAgb25DaGFuZ2VQZXJpb2Q6IChlKSA9PiBlID8geyB2YWx1ZTogbih7IC4uLmUsIGZyb206IG8oZS5mcm9tKSwgdG86IGwoZS50bykgfSkgfSA6IHsgdmFsdWU6IHQubm9GaWx0ZXIoKSB9LFxuICAgIG9uQ2hhbmdlQ29tcGFyaXNvbjogKGUpID0+IGUgPyB7IHZhbHVlOiBuKHsgLi4uZSwgZnJvbTogbyhlLmZyb20pLCB0bzogbChlLnRvKSB9KSB9IDogeyB2YWx1ZTogdC5ub0ZpbHRlcigpIH0sXG4gICAgb25DaGFuZ2VHcmFudWxhcml0eTogKGUpID0+ICh7IHZhbHVlOiBlIHx8IHQubm9GaWx0ZXIoKSB9KVxuICB9XG59KTtcbmV4cG9ydCB7XG4gIEcgYXMgZGVmYXVsdCxcbiAgZiBhcyBtZXRhXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Q29tcGFyaXNvbkZpbHRlci5qcy5tYXBcbiJdLCJuYW1lcyI6WyJ1IiwiciIsImkiLCJwIiwieSIsInQiLCJzIiwibiIsIm8iLCJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBT0EsTUFBTSxJQUFJQSxHQUFFLGtCQUFrQjtBQUFBLEVBQzVCLE9BQU87QUFBQSxFQUNQLGFBQWEsQ0FBQyxNQUFNO0FBQ3RCLENBQUM7QUFDREMsR0FBRSxHQUFHLGVBQWU7QUFDcEJBLEdBQUUsR0FBRyxpQkFBaUI7QUFDdEJBLEdBQUUsR0FBRyxlQUFlO0FBQ3BCQSxHQUFFLEdBQUcsZ0JBQWdCO0FBQ3JCQSxHQUFFLEdBQUcsa0JBQWtCO0FBQ3ZCQSxHQUFFLEdBQUcsZUFBZTtBQUNmLE1BQUMsSUFBSSxDQUFDLE1BQXNCQyxrQkFBRSxJQUFJQyxJQUFHLEVBQUUsR0FBRyxHQUFHLFVBQTBCRCxrQkFBRSxJQUFJRSxJQUFHLEVBQUUsR0FBRyxFQUFDLENBQUUsRUFBQyxDQUFFLEdBQUcsSUFBSTtBQUFBLEVBQ3JHLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLGNBQWM7QUFBQSxFQUNkLGVBQWU7QUFBQSxFQUNmLFlBQVksQ0FBQyxRQUFRO0FBQUEsRUFDckIsVUFBVTtBQUFBLEVBQ1YsUUFBUTtBQUFBLElBQ047QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLFVBQVU7QUFBQSxJQUNoQjtBQUFBLElBQ0k7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLFVBQVU7QUFBQSxNQUNWLGNBQWM7QUFBQSxJQUNwQjtBQUFBLElBQ0k7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLGNBQWM7QUFBQSxNQUNkLFVBQVU7QUFBQSxJQUNoQjtBQUFBLElBQ0k7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLFVBQVU7QUFBQSxJ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
