import { e as ee$1, n as ne, t as te$1 } from './Spinner-BeNoTciJ-DsMN3-m0-BGGztM1w.js';
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

const a = ne("timeComparison", {
  label: "Time Comparison",
  optionLabel: (e) => e
});
te$1(a, "No comparison");
te$1(a, "Previous period");
te$1(a, "Previous week");
te$1(a, "Previous month");
te$1(a, "Previous quarter");
te$1(a, "Previous year");
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
      defaultValue: ee$1.noFilter(),
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
    onChangePeriod: (e) => e ? { value: se({ ...e, from: N(e.from), to: o(e.to) }) } : { value: ee$1.noFilter() },
    onChangeComparison: (e) => e ? { value: se({ ...e, from: N(e.from), to: o(e.to) }) } : { value: ee$1.noFilter() },
    onChangeGranularity: (e) => ({ value: e || ee$1.noFilter() })
  }
});

export { G as default, f as meta };
//# sourceMappingURL=ComparisonFilter-CxV_EOtP-BQxt_qKu.js.map
//# sourceMappingURL=ComparisonFilter-CxV_EOtP-BQxt_qKu.js.map
