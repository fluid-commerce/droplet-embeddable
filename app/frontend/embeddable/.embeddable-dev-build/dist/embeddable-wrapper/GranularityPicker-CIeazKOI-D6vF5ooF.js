import { e as ee$1 } from './Spinner-BeNoTciJ-DsMN3-m0-BGGztM1w.js';
import { d as defineComponent } from './index.esm-CVE60fla-BtsXn2z1.js';
import { j } from './jsx-runtime-CjQXaSqQ-CjMA1-fF-CkV96GpT.js';
import { r as reactExports } from './embeddable-component-BD9bezsm.js';
import { W as Wg } from './Container-mop-J7T8-BpqPaGKG-DiR4tjay.js';
import { G } from './index-BUjytNL--_YalYDL8-CLYp2qTs.js';
import './index-BV21PmyC.js';
import './Title-n-I3Fdvw-CW-j1pzr-DoihF5tM.js';

const h = (e) => {
  const { title: t } = e, [V, u] = reactExports.useState(e.defaultValue), o = [
    "second",
    "minute",
    "hour",
    "day",
    "week",
    "month",
    "quarter",
    "year"
  ], i = {
    second: "last 1 minute",
    minute: "last 1 hour",
    hour: "last 24 hours",
    day: "last 30 days",
    week: "last 12 months",
    month: "last 24 months",
    quarter: "last 24 months",
    year: void 0
    //clears filter
  }, s = (a) => {
    const l = {
      value: a,
      dateRange: {
        to: void 0,
        from: void 0,
        relativeTimeString: i[a]
      }
    };
    e.onChange(l), u(a);
  }, d = () => {
    var l;
    const a = [];
    return (l = o.filter((r) => e[r])) == null || l.forEach((r) => a.push({ value: r })), {
      isLoading: false,
      data: a
    };
  }, m = {
    __type__: "dimension",
    name: "value",
    nativeType: "string",
    title: "Value"
  };
  return /* @__PURE__ */ j.jsx(Wg, { title: t, children: /* @__PURE__ */ j.jsx("div", { className: "flex items-center h-10 ", children: /* @__PURE__ */ j.jsx("div", { className: "grow basis-0 h-full", children: /* @__PURE__ */ j.jsx(
    G,
    {
      unclearable: true,
      minDropdownWidth: 320,
      defaultValue: e.defaultValue,
      options: d(),
      placeholder: "Granularity",
      property: m,
      onChange: (a) => s(a)
    }
  ) }) }) });
}, v = {
  name: "GranularityPicker",
  label: "Granularity Picker",
  defaultWidth: 200,
  defaultHeight: 80,
  classNames: ["on-top"],
  category: "Controls: inputs & dropdowns",
  inputs: [
    {
      name: "defaultValue",
      type: "granularity",
      label: "Default granularity",
      category: "Chart settings"
    },
    {
      name: "title",
      type: "string",
      label: "Title",
      defaultValue: "",
      category: "Chart settings"
    },
    ...[
      { value: "second", defaultValue: false },
      { value: "minute", defaultValue: false },
      { value: "hour", defaultValue: false },
      { value: "day", defaultValue: true },
      { value: "week", defaultValue: true },
      { value: "month", defaultValue: true },
      { value: "quarter", defaultValue: true },
      { value: "year", defaultValue: true }
    ].map((e) => ({
      name: e.value,
      type: "boolean",
      label: `Display ${e.value}`,
      defaultValue: e.defaultValue,
      category: "Granularity options"
    }))
  ],
  events: [
    {
      name: "onChange",
      label: "Change Granularity",
      properties: [
        {
          name: "value",
          type: "granularity"
        },
        {
          name: "dateRange",
          type: "timeRange"
        }
      ]
    }
  ],
  variables: [
    {
      name: "granularity",
      type: "granularity",
      defaultValue: "day",
      inputs: ["defaultValue"],
      events: [{ name: "onChange", property: "value" }]
    },
    {
      name: "date range",
      type: "timeRange",
      defaultValue: { relativeTimeString: "Last 30 days" },
      events: [{ name: "onChange", property: "dateRange" }]
    }
  ]
}, k = defineComponent(h, v, {
  props: (e) => ({
    ...e
  }),
  events: {
    onChange: ({ value: e, dateRange: t }) => t.relativeTimeString ? {
      value: e,
      dateRange: t
    } : {
      value: e,
      dateRange: ee$1.noFilter()
    }
  }
});

export { k as default, v as meta };
//# sourceMappingURL=GranularityPicker-CIeazKOI-D6vF5ooF.js.map
//# sourceMappingURL=GranularityPicker-CIeazKOI-D6vF5ooF.js.map
