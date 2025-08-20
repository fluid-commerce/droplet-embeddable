import { v } from './Spinner-BeNoTciJ-DsMN3-m0-BGGztM1w.js';
import { d as defineComponent, u as useTheme } from './index.esm-CVE60fla-BtsXn2z1.js';
import { j as j$1 } from './jsx-runtime-CjQXaSqQ-CjMA1-fF-CkV96GpT.js';
import { W as Wg } from './Container-mop-J7T8-BpqPaGKG-DiR4tjay.js';
import { j } from './useTimeseries-CKhM5zgf-Dd4vgjj--FzCeDPUA.js';
import { M as Mt, Y as Yi, X as Xi, L as Le, a as Me, P as Ph, I as Ih, w as wh, x as xh, F as Fd, V as Vd, $ as $d, j as jd } from './common-Badpcggq-Batnw2Ed-CkZpixXy.js';
import './chartjs-adapter-date-fns.esm-vRFmo1LD-Cpw3-dRH-QkYakUVd.js';
import { c as ce } from './format-TjzP8gQX-Cs7Vwno2-CeUXJh2P.js';
import { n } from './hexToRgb-04GwXQzV-CZRIg1xZ-BDaDovJP.js';
import './embeddable-component-BD9bezsm.js';
import './index-BV21PmyC.js';
import './Title-n-I3Fdvw-CW-j1pzr-DoihF5tM.js';
import './subYears-CyoGbgS0-DIOARaW6-mzW26xd4.js';
import './differenceInSeconds-D-PK4HfM-Dm2bjhDp-CBEYj0I9.js';

const o = {
  brand: {
    primary: "#6778DE",
    secondary: "#FF997C"
  },
  charts: {
    colors: [
      "#6778DE",
      "#FF997C",
      "#9EA4F4",
      "#B8B8D1",
      "#FF6B6C",
      "#FFC145",
      "#9DC7FF",
      "#FF805B",
      "#CD9FFF",
      "#E6DEDE",
      "#FFA6A6",
      "#FFD98D"
    ],
    options: {
      toolTipEnabled: true,
      usePointStyle: true
    },
    fontWeights: {
      description: 400,
      kpiNumber: 700,
      pagination: 400,
      title: 700
    },
    textJustify: "start",
    /* Custom overrides for certain charts */
    bar: {
      borderRadius: 4,
      borderSkipped: "bottom",
      borderWidth: 0,
      cubicInterpolationMode: "default",
      font: {
        size: 12
      },
      labels: {
        total: {
          backgroundColor: "#ffffff",
          borderRadius: 8,
          color: "#888888",
          font: {
            size: 12,
            weight: "normal"
          }
        },
        value: {
          backgroundColor: "transparent",
          borderRadius: 8,
          color: "#888888",
          font: {
            size: 12,
            weight: "normal"
          }
        }
      },
      lineTension: 0.1
    },
    bubble: {
      font: {
        size: 12
      },
      labels: {
        backgroundColor: "#ffffff",
        borderRadius: 8,
        color: "#888888",
        font: {
          size: 12,
          weight: "normal"
        }
      }
    },
    kpi: {
      alignment: "center",
      font: {
        negativeColor: "#FF6B6C",
        size: 32
      }
    },
    line: {
      cubicInterpolationMode: "default",
      font: {
        size: 12
      },
      labels: {
        backgroundColor: "transparent",
        borderRadius: 8,
        color: "#888888",
        font: {
          size: 12,
          weight: "normal"
        }
      },
      lineTension: 0.1
    },
    pie: {
      borderColor: "#FFFFFF",
      borderWidth: 2,
      font: {
        size: 12
      },
      labels: {
        backgroundColor: "#ffffff",
        borderRadius: 8,
        color: "#888888",
        font: {
          size: 12,
          weight: "normal"
        }
      },
      weight: 5
    },
    scatter: {
      font: {
        size: 12
      },
      labels: {
        backgroundColor: "#ffffff",
        borderRadius: 8,
        color: "#888888",
        font: {
          size: 12,
          weight: "normal"
        }
      }
    },
    stackedArea: {
      cubicInterpolationMode: "default",
      font: {
        size: 12
      },
      labels: {
        backgroundColor: "#ffffff",
        borderRadius: 8,
        color: "#888888",
        font: {
          size: 12,
          weight: "normal"
        }
      },
      lineTension: 0.1
    }
    /* End custom chart overrides */
  },
  container: {
    backgroundColor: "transparent",
    border: "1px solid #ddd",
    borderRadius: "12px",
    boxShadow: "none",
    padding: "15px"
  },
  controls: {
    backgrounds: {
      colors: {
        heavy: "#D1D5DB",
        normal: "#F3F4F6",
        soft: "#FFFFFF",
        transparent: "transparent"
      }
    },
    buttons: {
      active: {
        background: "#FFFFFF",
        border: "#D1D5DB",
        fontColor: "#000"
      },
      hovered: {
        background: "#FFFFFF",
        border: "#A1A5AA",
        fontColor: "#000"
      },
      pressed: {
        background: "#F3F3F4",
        border: "#D1D5DB",
        fontColor: "#000"
      },
      fontSize: "14px",
      height: "50px",
      multiSelect: {
        active: {
          background: "#6778DE",
          border: "1px solid #5062c9",
          fontColor: "#FFFFFF"
        },
        inactive: {
          background: "#F3F4F6",
          border: "1px solid #ffffff",
          fontColor: "#333942"
        },
        margin: "0px 4px 4px 4px",
        maxWidth: "150px",
        padding: "4px 8px",
        radius: "9999px"
      },
      paddingY: "16px",
      paddingX: "32px",
      radius: "9999px"
    },
    borders: {
      colors: {
        normal: "#DADCE1",
        heavy: "D1D5DB"
      },
      padding: 8,
      radius: "12px"
    },
    datepicker: {
      backgrounds: {
        colors: {
          accent: "#f3f4f6",
          rangeEnd: "#7d899b",
          rangeEndDate: "#7d899b",
          rangeMiddle: "#f3f4f6",
          rangeStart: "#7d899b"
        }
      },
      font: {
        colors: {
          accent: "#7d899b",
          rangeEnd: "#ffffff",
          rangeMiddle: "#7d899b",
          rangeStart: "#ffffff",
          rangeStartDate: "#7d899b",
          today: "#111111"
        }
      },
      outsideOpacity: 0.4,
      radiuses: {
        button: "4px",
        buttonEnd: "0px 4px 4px 0px",
        buttonStart: "4px 0px 0px 4px",
        weekNumber: "4px"
      }
    },
    inputs: {
      colors: {
        hover: "#F3F4F6",
        selected: "#F3F4F6"
      }
    },
    skeletonBox: {
      animation: "shimmer 2s infinite",
      backgroundImage: `linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 0,
        rgba(255, 255, 255, 0.2) 20%,
        rgba(255, 255, 255, 0.5) 60%,
        rgba(255, 255, 255, 0)
      );`
    },
    tooltips: {
      radius: "4px"
    }
  },
  dateFormats: {
    year: "yyyy",
    quarter: "MMM yy",
    month: "MMM yy",
    day: "d MMM",
    week: "d MMM",
    hour: "eee HH:mm",
    minute: "eee HH:mm",
    second: "HH:mm:ss"
  },
  downloadMenu: {
    backgroundColor: "#FFFFFF",
    border: "0px solid #EEEEEE",
    borderRadius: "4px",
    boxShadow: "0 4px 6px -1px rgb(0,0,0,0.1), 0 2px 4px -2px rgb(0,0,0,0.1)",
    font: {
      color: "#BBBBBB",
      family: '-apple-system, "system-ui", "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      size: "14px",
      weight: 300
    },
    hover: {
      backgroundColor: "#FFFFFF",
      fontColor: "#888888",
      svgColor: "#888888"
    },
    paddingOuter: 0,
    paddingInner: ".5rem",
    svg: {
      width: "24px",
      height: "24px"
    }
  },
  font: {
    color: "#888888",
    colorNormal: "#333942",
    colorSoft: "#e3e3e3",
    description: {
      color: "#888888",
      size: "14px",
      family: '-apple-system, "system-ui", "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
    },
    family: '-apple-system, "system-ui", "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    size: "14px",
    weight: 400,
    title: {
      color: "#333942",
      size: "16px",
      family: '-apple-system, "system-ui", "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
    },
    urls: []
  },
  png: {
    backgroundColor: "#FFFFFF"
  },
  svg: {
    fillBkg: "#FFFFFF",
    fillNormal: "#474752",
    fillStrong: "#1D1E22",
    strokeSoft: "#474752",
    strokeNormal: "#959CA8",
    strokeStrong: "#101010"
  }
};
Mt.register(
  Yi,
  Xi,
  Le,
  Me,
  Ph,
  Ih,
  wh,
  xh,
  Fd
);
const M = (e) => {
  var o2;
  const t = useTheme();
  let n2 = t.charts.colors;
  t.charts.bubble.colors && (n2 = t.charts.bubble.colors);
  const { fillGaps: i } = j(e, "desc"), { results: a } = e, m = e.isTimeDimension ? (o2 = a == null ? void 0 : a.data) == null ? void 0 : o2.reduce(i, []) : a == null ? void 0 : a.data, r = {
    ...e,
    theme: t
  }, s = H(r, m, n2);
  return /* @__PURE__ */ j$1.jsx(Wg, { ...e, className: "overflow-y-hidden", children: /* @__PURE__ */ j$1.jsx(
    Vd,
    {
      height: "100%",
      options: I(r, m, s),
      data: s
    }
  ) });
};
function I(e, t, n2) {
  var o$1, y, d, g;
  let { theme: i } = e;
  i || (i = o), $d(i, "bubble");
  const a = n2.datasets[0].data, m = e.reverseXAxis ? e.isTimeDimension ? (o$1 = a[0]) == null ? void 0 : o$1.r : (y = a == null ? void 0 : a[a.length - 1]) == null ? void 0 : y.r : e.isTimeDimension ? (d = a[a.length - 1]) == null ? void 0 : d.r : (g = a == null ? void 0 : a[0]) == null ? void 0 : g.r, r = a.reduce((l, b) => (b == null ? void 0 : b.y) > (l == null ? void 0 : l.y) ? b : l, a[0]), s = (r == null ? void 0 : r.r) || 0;
  return {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 400,
      easing: "linear"
    },
    scales: {
      y: {
        min: e.yAxisMin,
        grid: {
          display: false
        },
        afterDataLimits: function(l) {
          jd(l, e.results, [e.yAxis], e.dps);
        },
        ticks: {
          padding: m
        },
        title: {
          display: !!e.yAxisTitle,
          text: e.yAxisTitle
        }
      },
      x: {
        reverse: e.reverseXAxis,
        type: e.isTimeDimension ? "time" : "category",
        time: {
          round: e.granularity,
          isoWeekday: true,
          displayFormats: i.dateFormats,
          unit: e.granularity
        },
        grid: {
          display: false
        },
        title: {
          display: !!e.xAxisTitle,
          text: e.xAxisTitle
        }
      }
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: s + (e.showLabels ? 30 : 0),
        bottom: 0
      }
    },
    plugins: {
      datalabels: {
        display: e.showLabels ? "auto" : false,
        anchor: "end",
        align: "end",
        backgroundColor: i.charts.bubble.labels.backgroundColor,
        borderRadius: i.charts.bubble.labels.borderRadius,
        color: i.charts.bubble.labels.color,
        font: {
          size: i.charts.bubble.labels.font.size,
          weight: i.charts.bubble.labels.font.weight
        },
        formatter: (l, { dataIndex: b }) => {
          const c = (t == null ? void 0 : t[b][e.bubbleSize.name]) || 0;
          return ce(c, {
            type: "number",
            dps: e.dps || 0,
            meta: e.bubbleSize.meta
          }) || null;
        }
      },
      tooltip: {
        //https://www.chartjs.org/docs/latest/configuration/tooltip.html
        callbacks: {
          label: function(l) {
            const b = l.dataset.label || "", c = l.raw, h = ce(`${c.y || ""}`, {
              type: "number",
              dps: e.dps,
              meta: e.yAxis.meta
            }), A = e.bubbleSize.title, C = (t == null ? void 0 : t[l.dataIndex][e.bubbleSize.name]) || 0, S = ce(C, {
              type: "number",
              dps: e.dps,
              meta: e.bubbleSize.meta
            });
            return [
              `${b}: ${h}`,
              `${A}: ${S}`
            ];
          }
        }
      },
      legend: {
        display: e.showLegend,
        position: "bottom",
        labels: {
          usePointStyle: true,
          boxHeight: 10
        }
      }
    }
  };
}
function H(e, t, n$1) {
  const i = (t == null ? void 0 : t.map((s) => {
    const o2 = s[e.bubbleSize.name];
    return o2 ? parseFloat(o2) : 0;
  })) || [], m = 30 / Math.max(...i), r = (t == null ? void 0 : t.map((s) => ({
    x: s[e.xAxis.name],
    y: parseFloat(s[e.yAxis.name]) || 0,
    r: (parseFloat(s[e.bubbleSize.name]) || 0) * m
  }))) || [];
  return {
    datasets: [
      {
        label: e.yAxis.title,
        data: r,
        backgroundColor: n(n$1[0], 0.8)
      }
    ]
  };
}
const J = {
  name: "BubbleChart",
  label: "Bubble chart",
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
      config: {
        dataset: "ds",
        hideGranularity: true
      },
      category: "Chart data"
    },
    {
      name: "yAxis",
      type: "measure",
      label: "Y-Axis",
      config: {
        dataset: "ds"
      },
      category: "Chart data"
    },
    {
      name: "bubbleSize",
      type: "measure",
      label: "Bubble Size",
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
      name: "granularity",
      type: "granularity",
      label: "Granularity",
      defaultValue: "week",
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
      name: "yAxisMin",
      type: "number",
      label: "Y-Axis minimum value",
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
}, te = defineComponent(M, J, {
  props: (e) => {
    var i;
    const t = [];
    t.push({
      property: e.xAxis,
      direction: "desc"
    });
    const n2 = e.xAxis.nativeType === "time";
    return {
      ...e,
      reverseXAxis: e.reverseXAxis,
      isTimeDimension: n2,
      results: n2 ? v({
        from: e.ds,
        orderBy: t,
        select: [
          { dimension: (i = e.xAxis) == null ? void 0 : i.name, granularity: e.granularity },
          e.yAxis,
          e.bubbleSize
        ],
        limit: e.limit || 50
      }) : v({
        from: e.ds,
        select: [e.xAxis, e.yAxis, e.bubbleSize],
        limit: e.limit || 50
      })
    };
  }
});

export { te as default, J as meta };
//# sourceMappingURL=BubbleChart-DcWoQigA-C7g7bRok.js.map
//# sourceMappingURL=BubbleChart-DcWoQigA-C7g7bRok.js.map
