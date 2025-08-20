import { $ as $e, O as Oe, v as v$1 } from './Spinner-BeNoTciJ-DsMN3-m0-BGGztM1w.js';
import { d as defineComponent, u as useTheme, a as useEmbeddableState } from './index.esm-CVE60fla-BtsXn2z1.js';
import { j } from './jsx-runtime-CjQXaSqQ-CjMA1-fF-CkV96GpT.js';
import { r as reactExports } from './embeddable-component-BD9bezsm.js';
import './index-BV21PmyC.js';

function x({ buttonLabel: o, showSpinner: e, disabled: a, onClick: n, icon: s }) {
  return /* @__PURE__ */ j.jsxs(
    "button",
    {
      disabled: a,
      className: `
        border
        disabled:cursor-not-allowed
        disabled:opacity-[0.6]
        flex
        gap-[8px]
        items-center
        justify-center
        bg-[color:--embeddable-controls-buttons-active-background]
        border-[color:--embeddable-controls-buttons-active-border]
        h-[--embeddable-controls-buttons-height]
        hover:bg-[color:--embeddable-controls-buttons-hovered-background]
        hover:border-[color:--embeddable-controls-buttons-hovered-border]
        hover:text-[color:--embeddable-controls-buttons-hovered-fontColor]
        pressed:bg-[color:--embeddable-controls-buttons-colors-pressed]
        pressed:border-[color:--embeddable-controls-buttons-pressed-border]
        pressed:text-[color:--embeddable-controls-buttons-pressed-fontColor]
        px-[--embeddable-controls-buttons-paddingX]
        py-[--embeddable-controls-buttons-paddingY]
        rounded-[--embeddable-controls-buttons-radius] 
        text-[color:--embeddable-controls-buttons-active-fontColor]
        text-[font-size:--embeddable-font-size]
      `,
      onClick: n,
      type: "button",
      children: [
        e ? /* @__PURE__ */ j.jsx($e, { show: true, className: "relative", size: "20" }) : s,
        o
      ]
    }
  );
}
const y = (o) => {
  const { results: e, buttonLabel: a } = o, n = useTheme(), [s, r] = useEmbeddableState({ downloading: false }), [d, l] = reactExports.useState(false), [i, c] = reactExports.useState([]);
  reactExports.useEffect(() => {
    if (d) {
      if (!e || !e.data || JSON.stringify(e == null ? void 0 : e.data) === JSON.stringify(i))
        return;
      Oe(
        o,
        e == null ? void 0 : e.data,
        e == null ? void 0 : e.prevData,
        "downloaded-chart-data",
        l
      ), c((e == null ? void 0 : e.data) || []), l(false), r({ downloading: false });
    }
  }, [d, e, o, r, i]);
  const m = /* @__PURE__ */ j.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", children: [
    /* @__PURE__ */ j.jsx("g", { clipPath: "url(#clip0_271_1583)", children: /* @__PURE__ */ j.jsx(
      "path",
      {
        d: "M18.6381 16.3934C19.642 16.0066 20.5242 15.5087 21.2192 14.8964C22.0401 14.1733 22.562 13.1801 22.6861 12.105C22.8102 11.0299 22.5278 9.94756 21.8927 9.06283C21.2574 8.1781 20.3133 7.55246 19.2392 7.30435C19.1649 7.28263 19.0986 7.24058 19.048 7.18313C18.9974 7.12569 18.9647 7.05525 18.9536 6.98011C18.8207 5.55336 18.1931 4.21437 17.1752 3.18641C16.1573 2.15846 14.8107 1.50368 13.36 1.33129C11.9093 1.15889 10.4421 1.47929 9.20317 2.23905C7.96425 2.99882 7.02844 4.15202 6.5518 5.50636C6.52028 5.56951 6.47096 5.62248 6.40969 5.65905C6.34842 5.69561 6.27777 5.71421 6.20606 5.71269C5.51514 5.75817 4.8401 5.93662 4.21953 6.23786C3.59894 6.53909 3.04496 6.95722 2.58921 7.46837C1.66876 8.50066 1.2043 9.84916 1.29799 11.2172C1.39168 12.5852 2.03586 13.8607 3.08879 14.7631C3.64641 15.241 4.32746 15.6568 5.09728 16.0085M5.96024 5.71713C7.99888 5.71713 9.82211 7.06087 10.3973 8.2885M12.0004 13.4472V22.6658M8.48186 19.6122C9.55106 20.9781 10.2793 21.6138 11.3646 22.445C11.7486 22.7392 12.2524 22.7392 12.6364 22.445C13.7217 21.6138 14.4499 20.9781 15.5191 19.6122",
        stroke: n.svg.strokeNormal,
        strokeWidth: "1.71429",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ) }),
    /* @__PURE__ */ j.jsx("defs", { children: /* @__PURE__ */ j.jsx("clipPath", { id: "clip0_271_1583", children: /* @__PURE__ */ j.jsx("rect", { width: "24", height: "24", fill: "white" }) }) })
  ] });
  return /* @__PURE__ */ j.jsx(
    x,
    {
      buttonLabel: a,
      showSpinner: d,
      disabled: (e == null ? void 0 : e.isLoading) || d,
      onClick: () => {
        r({ downloading: true }), l(true);
      },
      icon: m
    }
  );
}, v = {
  name: "DownloadButton",
  label: "Download Button",
  defaultWidth: 200,
  defaultHeight: 100,
  category: "Download options",
  inputs: [
    {
      name: "ds",
      type: "dataset",
      label: "Dataset to download from",
      category: "Data"
    },
    {
      name: "columns",
      type: "dimensionOrMeasure",
      array: true,
      required: true,
      label: "Columns to include in download",
      config: {
        dataset: "ds"
      },
      category: "Data"
    },
    {
      name: "title",
      type: "string",
      label: "Title",
      description: "The title for the button",
      category: "Settings"
    },
    {
      name: "description",
      type: "string",
      label: "Description",
      description: "The description for the button",
      category: "Settings"
    },
    {
      name: "buttonLabel",
      type: "string",
      label: "Button label",
      description: "The text to show on the button",
      defaultValue: "Download",
      category: "Settings"
    },
    {
      name: "maxRows",
      type: "number",
      label: "Maximum number of rows to download",
      defaultValue: 100,
      category: "Settings"
    }
  ]
}, B = defineComponent(y, v, {
  props: (o, [e]) => {
    const a = (e == null ? void 0 : e.downloading) === true;
    let n = {
      isLoading: false
    };
    return a ? (n = v$1({
      from: o.ds,
      select: o.columns,
      limit: o.maxRows || void 0
    }), {
      ...o,
      results: n
    }) : {
      ...o
    };
  }
});

export { B as default, v as meta };
//# sourceMappingURL=DownloadButton-Diq7dV2i-D_qvMQkC.js.map
//# sourceMappingURL=DownloadButton-Diq7dV2i-D_qvMQkC.js.map
