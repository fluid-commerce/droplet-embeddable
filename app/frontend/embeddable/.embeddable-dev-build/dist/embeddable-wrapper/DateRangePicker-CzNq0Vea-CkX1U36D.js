import { e as ee$1 } from './Spinner-BeNoTciJ-DsMN3-m0-BGGztM1w.js';
import { d as defineComponent } from './index.esm-CVE60fla-BtsXn2z1.js';
import { s as se, g as N } from './format-TjzP8gQX-Cs7Vwno2-CeUXJh2P.js';
import { j } from './jsx-runtime-CjQXaSqQ-CjMA1-fF-CkV96GpT.js';
import { W as Wg } from './Container-mop-J7T8-BpqPaGKG-DiR4tjay.js';
import { Z as Zu } from './DateRangeWithGranularity-z-oouMtt-DQHOvwPv-CNXrvHu6.js';
import { o } from './differenceInSeconds-D-PK4HfM-Dm2bjhDp-CBEYj0I9.js';
import './embeddable-component-BD9bezsm.js';
import './index-BV21PmyC.js';
import './Title-n-I3Fdvw-CW-j1pzr-DoihF5tM.js';
import './index-BUjytNL--_YalYDL8-CLYp2qTs.js';
import './subYears-CyoGbgS0-DIOARaW6-mzW26xd4.js';

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
    onChange: (a) => a ? { value: se({ ...a, from: N(a.from), to: o(a.to) }) } : { value: ee$1.noFilter() },
    onChangeGranularity: (a) => ({ value: a || ee$1.noFilter() })
  }
});

export { c as default, g as meta };
//# sourceMappingURL=DateRangePicker-CzNq0Vea-CkX1U36D.js.map
//# sourceMappingURL=DateRangePicker-CzNq0Vea-CkX1U36D.js.map
