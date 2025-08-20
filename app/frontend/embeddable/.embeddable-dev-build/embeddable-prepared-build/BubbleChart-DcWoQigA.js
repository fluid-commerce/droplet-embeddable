import { v } from "./Spinner-BeNoTciJ-DsMN3-m0.js";
import { d as defineComponent, u as useTheme } from "./index.esm-CVE60fla.js";
import { j as j$1 } from "./jsx-runtime-CjQXaSqQ-CjMA1-fF.js";
import { W as Wg } from "./Container-mop-J7T8-BpqPaGKG.js";
import { j } from "./useTimeseries-CKhM5zgf-Dd4vgjj-.js";
import { M as Mt, Y as Yi, X as Xi, L as Le, a as Me, P as Ph, I as Ih, w as wh, x as xh, F as Fd, V as Vd, $ as $d, j as jd } from "./common-Badpcggq-Batnw2Ed.js";
import "./chartjs-adapter-date-fns.esm-vRFmo1LD-Cpw3-dRH.js";
import { c as ce } from "./format-TjzP8gQX-Cs7Vwno2.js";
import { n } from "./hexToRgb-04GwXQzV-CZRIg1xZ.js";
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
export {
  te as default,
  J as meta
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnViYmxlQ2hhcnQtRGNXb1FpZ0EuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaHJpc3RvcGhlcmNhcmxzb24vZmx1aWQvZHJvcGxldC1lbWJlZGRhYmxlL2FwcC9mcm9udGVuZC9lbWJlZGRhYmxlL25vZGVfbW9kdWxlcy9AZW1iZWRkYWJsZS5jb20vdmFuaWxsYS1jb21wb25lbnRzL2Rpc3QvZGVmYXVsdHRoZW1lLUJCYTBXX2hHLmpzIiwiL1VzZXJzL2NocmlzdG9waGVyY2FybHNvbi9mbHVpZC9kcm9wbGV0LWVtYmVkZGFibGUvYXBwL2Zyb250ZW5kL2VtYmVkZGFibGUvbm9kZV9tb2R1bGVzL0BlbWJlZGRhYmxlLmNvbS92YW5pbGxhLWNvbXBvbmVudHMvZGlzdC9CdWJibGVDaGFydC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBvID0ge1xuICBicmFuZDoge1xuICAgIHByaW1hcnk6IFwiIzY3NzhERVwiLFxuICAgIHNlY29uZGFyeTogXCIjRkY5OTdDXCJcbiAgfSxcbiAgY2hhcnRzOiB7XG4gICAgY29sb3JzOiBbXG4gICAgICBcIiM2Nzc4REVcIixcbiAgICAgIFwiI0ZGOTk3Q1wiLFxuICAgICAgXCIjOUVBNEY0XCIsXG4gICAgICBcIiNCOEI4RDFcIixcbiAgICAgIFwiI0ZGNkI2Q1wiLFxuICAgICAgXCIjRkZDMTQ1XCIsXG4gICAgICBcIiM5REM3RkZcIixcbiAgICAgIFwiI0ZGODA1QlwiLFxuICAgICAgXCIjQ0Q5RkZGXCIsXG4gICAgICBcIiNFNkRFREVcIixcbiAgICAgIFwiI0ZGQTZBNlwiLFxuICAgICAgXCIjRkZEOThEXCJcbiAgICBdLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIHRvb2xUaXBFbmFibGVkOiAhMCxcbiAgICAgIHVzZVBvaW50U3R5bGU6ICEwXG4gICAgfSxcbiAgICBmb250V2VpZ2h0czoge1xuICAgICAgZGVzY3JpcHRpb246IDQwMCxcbiAgICAgIGtwaU51bWJlcjogNzAwLFxuICAgICAgcGFnaW5hdGlvbjogNDAwLFxuICAgICAgdGl0bGU6IDcwMFxuICAgIH0sXG4gICAgdGV4dEp1c3RpZnk6IFwic3RhcnRcIixcbiAgICAvKiBDdXN0b20gb3ZlcnJpZGVzIGZvciBjZXJ0YWluIGNoYXJ0cyAqL1xuICAgIGJhcjoge1xuICAgICAgYm9yZGVyUmFkaXVzOiA0LFxuICAgICAgYm9yZGVyU2tpcHBlZDogXCJib3R0b21cIixcbiAgICAgIGJvcmRlcldpZHRoOiAwLFxuICAgICAgY3ViaWNJbnRlcnBvbGF0aW9uTW9kZTogXCJkZWZhdWx0XCIsXG4gICAgICBmb250OiB7XG4gICAgICAgIHNpemU6IDEyXG4gICAgICB9LFxuICAgICAgbGFiZWxzOiB7XG4gICAgICAgIHRvdGFsOiB7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZmZmZcIixcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IDgsXG4gICAgICAgICAgY29sb3I6IFwiIzg4ODg4OFwiLFxuICAgICAgICAgIGZvbnQ6IHtcbiAgICAgICAgICAgIHNpemU6IDEyLFxuICAgICAgICAgICAgd2VpZ2h0OiBcIm5vcm1hbFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgICAgIGJvcmRlclJhZGl1czogOCxcbiAgICAgICAgICBjb2xvcjogXCIjODg4ODg4XCIsXG4gICAgICAgICAgZm9udDoge1xuICAgICAgICAgICAgc2l6ZTogMTIsXG4gICAgICAgICAgICB3ZWlnaHQ6IFwibm9ybWFsXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBsaW5lVGVuc2lvbjogMC4xXG4gICAgfSxcbiAgICBidWJibGU6IHtcbiAgICAgIGZvbnQ6IHtcbiAgICAgICAgc2l6ZTogMTJcbiAgICAgIH0sXG4gICAgICBsYWJlbHM6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZmZmZcIixcbiAgICAgICAgYm9yZGVyUmFkaXVzOiA4LFxuICAgICAgICBjb2xvcjogXCIjODg4ODg4XCIsXG4gICAgICAgIGZvbnQ6IHtcbiAgICAgICAgICBzaXplOiAxMixcbiAgICAgICAgICB3ZWlnaHQ6IFwibm9ybWFsXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAga3BpOiB7XG4gICAgICBhbGlnbm1lbnQ6IFwiY2VudGVyXCIsXG4gICAgICBmb250OiB7XG4gICAgICAgIG5lZ2F0aXZlQ29sb3I6IFwiI0ZGNkI2Q1wiLFxuICAgICAgICBzaXplOiAzMlxuICAgICAgfVxuICAgIH0sXG4gICAgbGluZToge1xuICAgICAgY3ViaWNJbnRlcnBvbGF0aW9uTW9kZTogXCJkZWZhdWx0XCIsXG4gICAgICBmb250OiB7XG4gICAgICAgIHNpemU6IDEyXG4gICAgICB9LFxuICAgICAgbGFiZWxzOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgICBib3JkZXJSYWRpdXM6IDgsXG4gICAgICAgIGNvbG9yOiBcIiM4ODg4ODhcIixcbiAgICAgICAgZm9udDoge1xuICAgICAgICAgIHNpemU6IDEyLFxuICAgICAgICAgIHdlaWdodDogXCJub3JtYWxcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgbGluZVRlbnNpb246IDAuMVxuICAgIH0sXG4gICAgcGllOiB7XG4gICAgICBib3JkZXJDb2xvcjogXCIjRkZGRkZGXCIsXG4gICAgICBib3JkZXJXaWR0aDogMixcbiAgICAgIGZvbnQ6IHtcbiAgICAgICAgc2l6ZTogMTJcbiAgICAgIH0sXG4gICAgICBsYWJlbHM6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZmZmZcIixcbiAgICAgICAgYm9yZGVyUmFkaXVzOiA4LFxuICAgICAgICBjb2xvcjogXCIjODg4ODg4XCIsXG4gICAgICAgIGZvbnQ6IHtcbiAgICAgICAgICBzaXplOiAxMixcbiAgICAgICAgICB3ZWlnaHQ6IFwibm9ybWFsXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHdlaWdodDogNVxuICAgIH0sXG4gICAgc2NhdHRlcjoge1xuICAgICAgZm9udDoge1xuICAgICAgICBzaXplOiAxMlxuICAgICAgfSxcbiAgICAgIGxhYmVsczoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZmZmZlwiLFxuICAgICAgICBib3JkZXJSYWRpdXM6IDgsXG4gICAgICAgIGNvbG9yOiBcIiM4ODg4ODhcIixcbiAgICAgICAgZm9udDoge1xuICAgICAgICAgIHNpemU6IDEyLFxuICAgICAgICAgIHdlaWdodDogXCJub3JtYWxcIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBzdGFja2VkQXJlYToge1xuICAgICAgY3ViaWNJbnRlcnBvbGF0aW9uTW9kZTogXCJkZWZhdWx0XCIsXG4gICAgICBmb250OiB7XG4gICAgICAgIHNpemU6IDEyXG4gICAgICB9LFxuICAgICAgbGFiZWxzOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmZmZmZmXCIsXG4gICAgICAgIGJvcmRlclJhZGl1czogOCxcbiAgICAgICAgY29sb3I6IFwiIzg4ODg4OFwiLFxuICAgICAgICBmb250OiB7XG4gICAgICAgICAgc2l6ZTogMTIsXG4gICAgICAgICAgd2VpZ2h0OiBcIm5vcm1hbFwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBsaW5lVGVuc2lvbjogMC4xXG4gICAgfVxuICAgIC8qIEVuZCBjdXN0b20gY2hhcnQgb3ZlcnJpZGVzICovXG4gIH0sXG4gIGNvbnRhaW5lcjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgIGJvcmRlcjogXCIxcHggc29saWQgI2RkZFwiLFxuICAgIGJvcmRlclJhZGl1czogXCIxMnB4XCIsXG4gICAgYm94U2hhZG93OiBcIm5vbmVcIixcbiAgICBwYWRkaW5nOiBcIjE1cHhcIlxuICB9LFxuICBjb250cm9sczoge1xuICAgIGJhY2tncm91bmRzOiB7XG4gICAgICBjb2xvcnM6IHtcbiAgICAgICAgaGVhdnk6IFwiI0QxRDVEQlwiLFxuICAgICAgICBub3JtYWw6IFwiI0YzRjRGNlwiLFxuICAgICAgICBzb2Z0OiBcIiNGRkZGRkZcIixcbiAgICAgICAgdHJhbnNwYXJlbnQ6IFwidHJhbnNwYXJlbnRcIlxuICAgICAgfVxuICAgIH0sXG4gICAgYnV0dG9uczoge1xuICAgICAgYWN0aXZlOiB7XG4gICAgICAgIGJhY2tncm91bmQ6IFwiI0ZGRkZGRlwiLFxuICAgICAgICBib3JkZXI6IFwiI0QxRDVEQlwiLFxuICAgICAgICBmb250Q29sb3I6IFwiIzAwMFwiXG4gICAgICB9LFxuICAgICAgaG92ZXJlZDoge1xuICAgICAgICBiYWNrZ3JvdW5kOiBcIiNGRkZGRkZcIixcbiAgICAgICAgYm9yZGVyOiBcIiNBMUE1QUFcIixcbiAgICAgICAgZm9udENvbG9yOiBcIiMwMDBcIlxuICAgICAgfSxcbiAgICAgIHByZXNzZWQ6IHtcbiAgICAgICAgYmFja2dyb3VuZDogXCIjRjNGM0Y0XCIsXG4gICAgICAgIGJvcmRlcjogXCIjRDFENURCXCIsXG4gICAgICAgIGZvbnRDb2xvcjogXCIjMDAwXCJcbiAgICAgIH0sXG4gICAgICBmb250U2l6ZTogXCIxNHB4XCIsXG4gICAgICBoZWlnaHQ6IFwiNTBweFwiLFxuICAgICAgbXVsdGlTZWxlY3Q6IHtcbiAgICAgICAgYWN0aXZlOiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogXCIjNjc3OERFXCIsXG4gICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjNTA2MmM5XCIsXG4gICAgICAgICAgZm9udENvbG9yOiBcIiNGRkZGRkZcIlxuICAgICAgICB9LFxuICAgICAgICBpbmFjdGl2ZToge1xuICAgICAgICAgIGJhY2tncm91bmQ6IFwiI0YzRjRGNlwiLFxuICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgI2ZmZmZmZlwiLFxuICAgICAgICAgIGZvbnRDb2xvcjogXCIjMzMzOTQyXCJcbiAgICAgICAgfSxcbiAgICAgICAgbWFyZ2luOiBcIjBweCA0cHggNHB4IDRweFwiLFxuICAgICAgICBtYXhXaWR0aDogXCIxNTBweFwiLFxuICAgICAgICBwYWRkaW5nOiBcIjRweCA4cHhcIixcbiAgICAgICAgcmFkaXVzOiBcIjk5OTlweFwiXG4gICAgICB9LFxuICAgICAgcGFkZGluZ1k6IFwiMTZweFwiLFxuICAgICAgcGFkZGluZ1g6IFwiMzJweFwiLFxuICAgICAgcmFkaXVzOiBcIjk5OTlweFwiXG4gICAgfSxcbiAgICBib3JkZXJzOiB7XG4gICAgICBjb2xvcnM6IHtcbiAgICAgICAgbm9ybWFsOiBcIiNEQURDRTFcIixcbiAgICAgICAgaGVhdnk6IFwiRDFENURCXCJcbiAgICAgIH0sXG4gICAgICBwYWRkaW5nOiA4LFxuICAgICAgcmFkaXVzOiBcIjEycHhcIlxuICAgIH0sXG4gICAgZGF0ZXBpY2tlcjoge1xuICAgICAgYmFja2dyb3VuZHM6IHtcbiAgICAgICAgY29sb3JzOiB7XG4gICAgICAgICAgYWNjZW50OiBcIiNmM2Y0ZjZcIixcbiAgICAgICAgICByYW5nZUVuZDogXCIjN2Q4OTliXCIsXG4gICAgICAgICAgcmFuZ2VFbmREYXRlOiBcIiM3ZDg5OWJcIixcbiAgICAgICAgICByYW5nZU1pZGRsZTogXCIjZjNmNGY2XCIsXG4gICAgICAgICAgcmFuZ2VTdGFydDogXCIjN2Q4OTliXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGZvbnQ6IHtcbiAgICAgICAgY29sb3JzOiB7XG4gICAgICAgICAgYWNjZW50OiBcIiM3ZDg5OWJcIixcbiAgICAgICAgICByYW5nZUVuZDogXCIjZmZmZmZmXCIsXG4gICAgICAgICAgcmFuZ2VNaWRkbGU6IFwiIzdkODk5YlwiLFxuICAgICAgICAgIHJhbmdlU3RhcnQ6IFwiI2ZmZmZmZlwiLFxuICAgICAgICAgIHJhbmdlU3RhcnREYXRlOiBcIiM3ZDg5OWJcIixcbiAgICAgICAgICB0b2RheTogXCIjMTExMTExXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG91dHNpZGVPcGFjaXR5OiAwLjQsXG4gICAgICByYWRpdXNlczoge1xuICAgICAgICBidXR0b246IFwiNHB4XCIsXG4gICAgICAgIGJ1dHRvbkVuZDogXCIwcHggNHB4IDRweCAwcHhcIixcbiAgICAgICAgYnV0dG9uU3RhcnQ6IFwiNHB4IDBweCAwcHggNHB4XCIsXG4gICAgICAgIHdlZWtOdW1iZXI6IFwiNHB4XCJcbiAgICAgIH1cbiAgICB9LFxuICAgIGlucHV0czoge1xuICAgICAgY29sb3JzOiB7XG4gICAgICAgIGhvdmVyOiBcIiNGM0Y0RjZcIixcbiAgICAgICAgc2VsZWN0ZWQ6IFwiI0YzRjRGNlwiXG4gICAgICB9XG4gICAgfSxcbiAgICBza2VsZXRvbkJveDoge1xuICAgICAgYW5pbWF0aW9uOiBcInNoaW1tZXIgMnMgaW5maW5pdGVcIixcbiAgICAgIGJhY2tncm91bmRJbWFnZTogYGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgOTBkZWcsXG4gICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMCxcbiAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDIwJSxcbiAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIDYwJSxcbiAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKVxuICAgICAgKTtgXG4gICAgfSxcbiAgICB0b29sdGlwczoge1xuICAgICAgcmFkaXVzOiBcIjRweFwiXG4gICAgfVxuICB9LFxuICBkYXRlRm9ybWF0czoge1xuICAgIHllYXI6IFwieXl5eVwiLFxuICAgIHF1YXJ0ZXI6IFwiTU1NIHl5XCIsXG4gICAgbW9udGg6IFwiTU1NIHl5XCIsXG4gICAgZGF5OiBcImQgTU1NXCIsXG4gICAgd2VlazogXCJkIE1NTVwiLFxuICAgIGhvdXI6IFwiZWVlIEhIOm1tXCIsXG4gICAgbWludXRlOiBcImVlZSBISDptbVwiLFxuICAgIHNlY29uZDogXCJISDptbTpzc1wiXG4gIH0sXG4gIGRvd25sb2FkTWVudToge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCIjRkZGRkZGXCIsXG4gICAgYm9yZGVyOiBcIjBweCBzb2xpZCAjRUVFRUVFXCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjRweFwiLFxuICAgIGJveFNoYWRvdzogXCIwIDRweCA2cHggLTFweCByZ2IoMCwwLDAsMC4xKSwgMCAycHggNHB4IC0ycHggcmdiKDAsMCwwLDAuMSlcIixcbiAgICBmb250OiB7XG4gICAgICBjb2xvcjogXCIjQkJCQkJCXCIsXG4gICAgICBmYW1pbHk6ICctYXBwbGUtc3lzdGVtLCBcInN5c3RlbS11aVwiLCBcIlNlZ29lIFVJXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCInLFxuICAgICAgc2l6ZTogXCIxNHB4XCIsXG4gICAgICB3ZWlnaHQ6IDMwMFxuICAgIH0sXG4gICAgaG92ZXI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjRkZGRkZGXCIsXG4gICAgICBmb250Q29sb3I6IFwiIzg4ODg4OFwiLFxuICAgICAgc3ZnQ29sb3I6IFwiIzg4ODg4OFwiXG4gICAgfSxcbiAgICBwYWRkaW5nT3V0ZXI6IDAsXG4gICAgcGFkZGluZ0lubmVyOiBcIi41cmVtXCIsXG4gICAgc3ZnOiB7XG4gICAgICB3aWR0aDogXCIyNHB4XCIsXG4gICAgICBoZWlnaHQ6IFwiMjRweFwiXG4gICAgfVxuICB9LFxuICBmb250OiB7XG4gICAgY29sb3I6IFwiIzg4ODg4OFwiLFxuICAgIGNvbG9yTm9ybWFsOiBcIiMzMzM5NDJcIixcbiAgICBjb2xvclNvZnQ6IFwiI2UzZTNlM1wiLFxuICAgIGRlc2NyaXB0aW9uOiB7XG4gICAgICBjb2xvcjogXCIjODg4ODg4XCIsXG4gICAgICBzaXplOiBcIjE0cHhcIixcbiAgICAgIGZhbWlseTogJy1hcHBsZS1zeXN0ZW0sIFwic3lzdGVtLXVpXCIsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIidcbiAgICB9LFxuICAgIGZhbWlseTogJy1hcHBsZS1zeXN0ZW0sIFwic3lzdGVtLXVpXCIsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIicsXG4gICAgc2l6ZTogXCIxNHB4XCIsXG4gICAgd2VpZ2h0OiA0MDAsXG4gICAgdGl0bGU6IHtcbiAgICAgIGNvbG9yOiBcIiMzMzM5NDJcIixcbiAgICAgIHNpemU6IFwiMTZweFwiLFxuICAgICAgZmFtaWx5OiAnLWFwcGxlLXN5c3RlbSwgXCJzeXN0ZW0tdWlcIiwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiJ1xuICAgIH0sXG4gICAgdXJsczogW11cbiAgfSxcbiAgcG5nOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNGRkZGRkZcIlxuICB9LFxuICBzdmc6IHtcbiAgICBmaWxsQmtnOiBcIiNGRkZGRkZcIixcbiAgICBmaWxsTm9ybWFsOiBcIiM0NzQ3NTJcIixcbiAgICBmaWxsU3Ryb25nOiBcIiMxRDFFMjJcIixcbiAgICBzdHJva2VTb2Z0OiBcIiM0NzQ3NTJcIixcbiAgICBzdHJva2VOb3JtYWw6IFwiIzk1OUNBOFwiLFxuICAgIHN0cm9rZVN0cm9uZzogXCIjMTAxMDEwXCJcbiAgfVxufTtcbmV4cG9ydCB7XG4gIG8gYXMgZFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlZmF1bHR0aGVtZS1CQmEwV19oRy5qcy5tYXBcbiIsImltcG9ydCB7IGwgYXMgeCB9IGZyb20gXCIuL2luZGV4LmVzbS1KQWhfSzFWRy5qc1wiO1xuaW1wb3J0IHsgdXNlVGhlbWUgYXMgVCwgZGVmaW5lQ29tcG9uZW50IGFzIHcgfSBmcm9tIFwiQGVtYmVkZGFibGUuY29tL3JlYWN0XCI7XG5pbXBvcnQgeyBqIGFzIGYgfSBmcm9tIFwiLi9qc3gtcnVudGltZS1DalFYYVNxUS5qc1wiO1xuaW1wb3J0IHsgQyBhcyB6IH0gZnJvbSBcIi4vQ29udGFpbmVyLW1vcC1KN1Q4LmpzXCI7XG5pbXBvcnQgeyB1IGFzIFYgfSBmcm9tIFwiLi91c2VUaW1lc2VyaWVzLUNLaE01emdmLmpzXCI7XG5pbXBvcnQgeyBDIGFzIHYsIGEgYXMgTCwgTCBhcyBSLCBUIGFzIGssIFAgYXMgRiwgcCBhcyBQLCBjIGFzIFgsIGQgYXMgQiwgaSBhcyBHLCBlIGFzIF8sIGsgYXMgJCwgcyBhcyBqLCBnIGFzIEUgfSBmcm9tIFwiLi9jb21tb24tQmFkcGNnZ3EuanNcIjtcbmltcG9ydCBcIi4vY2hhcnRqcy1hZGFwdGVyLWRhdGUtZm5zLmVzbS12UkZtbzFMRC5qc1wiO1xuaW1wb3J0IHsgZiBhcyB1IH0gZnJvbSBcIi4vZm9ybWF0LVRqelA4Z1FYLmpzXCI7XG5pbXBvcnQgeyBoIGFzIE4gfSBmcm9tIFwiLi9oZXhUb1JnYi0wNEd3WFF6Vi5qc1wiO1xuaW1wb3J0IHsgZCBhcyBZIH0gZnJvbSBcIi4vZGVmYXVsdHRoZW1lLUJCYTBXX2hHLmpzXCI7XG52LnJlZ2lzdGVyKFxuICBMLFxuICBSLFxuICBrLFxuICBGLFxuICBQLFxuICBYLFxuICBCLFxuICBHLFxuICBfXG4pO1xuY29uc3QgTSA9IChlKSA9PiB7XG4gIHZhciBvO1xuICBjb25zdCB0ID0gVCgpO1xuICBsZXQgbiA9IHQuY2hhcnRzLmNvbG9ycztcbiAgdC5jaGFydHMuYnViYmxlLmNvbG9ycyAmJiAobiA9IHQuY2hhcnRzLmJ1YmJsZS5jb2xvcnMpO1xuICBjb25zdCB7IGZpbGxHYXBzOiBpIH0gPSBWKGUsIFwiZGVzY1wiKSwgeyByZXN1bHRzOiBhIH0gPSBlLCBtID0gZS5pc1RpbWVEaW1lbnNpb24gPyAobyA9IGEgPT0gbnVsbCA/IHZvaWQgMCA6IGEuZGF0YSkgPT0gbnVsbCA/IHZvaWQgMCA6IG8ucmVkdWNlKGksIFtdKSA6IGEgPT0gbnVsbCA/IHZvaWQgMCA6IGEuZGF0YSwgciA9IHtcbiAgICAuLi5lLFxuICAgIHRoZW1lOiB0XG4gIH0sIHMgPSBIKHIsIG0sIG4pO1xuICByZXR1cm4gLyogQF9fUFVSRV9fICovIGYuanN4KHosIHsgLi4uZSwgY2xhc3NOYW1lOiBcIm92ZXJmbG93LXktaGlkZGVuXCIsIGNoaWxkcmVuOiAvKiBAX19QVVJFX18gKi8gZi5qc3goXG4gICAgJCxcbiAgICB7XG4gICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgb3B0aW9uczogSShyLCBtLCBzKSxcbiAgICAgIGRhdGE6IHNcbiAgICB9XG4gICkgfSk7XG59O1xuZnVuY3Rpb24gSShlLCB0LCBuKSB7XG4gIHZhciBvLCB5LCBkLCBnO1xuICBsZXQgeyB0aGVtZTogaSB9ID0gZTtcbiAgaSB8fCAoaSA9IFkpLCBqKGksIFwiYnViYmxlXCIpO1xuICBjb25zdCBhID0gbi5kYXRhc2V0c1swXS5kYXRhLCBtID0gZS5yZXZlcnNlWEF4aXMgPyBlLmlzVGltZURpbWVuc2lvbiA/IChvID0gYVswXSkgPT0gbnVsbCA/IHZvaWQgMCA6IG8uciA6ICh5ID0gYSA9PSBudWxsID8gdm9pZCAwIDogYVthLmxlbmd0aCAtIDFdKSA9PSBudWxsID8gdm9pZCAwIDogeS5yIDogZS5pc1RpbWVEaW1lbnNpb24gPyAoZCA9IGFbYS5sZW5ndGggLSAxXSkgPT0gbnVsbCA/IHZvaWQgMCA6IGQuciA6IChnID0gYSA9PSBudWxsID8gdm9pZCAwIDogYVswXSkgPT0gbnVsbCA/IHZvaWQgMCA6IGcuciwgciA9IGEucmVkdWNlKChsLCBiKSA9PiAoYiA9PSBudWxsID8gdm9pZCAwIDogYi55KSA+IChsID09IG51bGwgPyB2b2lkIDAgOiBsLnkpID8gYiA6IGwsIGFbMF0pLCBzID0gKHIgPT0gbnVsbCA/IHZvaWQgMCA6IHIucikgfHwgMDtcbiAgcmV0dXJuIHtcbiAgICByZXNwb25zaXZlOiAhMCxcbiAgICBtYWludGFpbkFzcGVjdFJhdGlvOiAhMSxcbiAgICBhbmltYXRpb246IHtcbiAgICAgIGR1cmF0aW9uOiA0MDAsXG4gICAgICBlYXNpbmc6IFwibGluZWFyXCJcbiAgICB9LFxuICAgIHNjYWxlczoge1xuICAgICAgeToge1xuICAgICAgICBtaW46IGUueUF4aXNNaW4sXG4gICAgICAgIGdyaWQ6IHtcbiAgICAgICAgICBkaXNwbGF5OiAhMVxuICAgICAgICB9LFxuICAgICAgICBhZnRlckRhdGFMaW1pdHM6IGZ1bmN0aW9uKGwpIHtcbiAgICAgICAgICBFKGwsIGUucmVzdWx0cywgW2UueUF4aXNdLCBlLmRwcyk7XG4gICAgICAgIH0sXG4gICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgcGFkZGluZzogbVxuICAgICAgICB9LFxuICAgICAgICB0aXRsZToge1xuICAgICAgICAgIGRpc3BsYXk6ICEhZS55QXhpc1RpdGxlLFxuICAgICAgICAgIHRleHQ6IGUueUF4aXNUaXRsZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgeDoge1xuICAgICAgICByZXZlcnNlOiBlLnJldmVyc2VYQXhpcyxcbiAgICAgICAgdHlwZTogZS5pc1RpbWVEaW1lbnNpb24gPyBcInRpbWVcIiA6IFwiY2F0ZWdvcnlcIixcbiAgICAgICAgdGltZToge1xuICAgICAgICAgIHJvdW5kOiBlLmdyYW51bGFyaXR5LFxuICAgICAgICAgIGlzb1dlZWtkYXk6ICEwLFxuICAgICAgICAgIGRpc3BsYXlGb3JtYXRzOiBpLmRhdGVGb3JtYXRzLFxuICAgICAgICAgIHVuaXQ6IGUuZ3JhbnVsYXJpdHlcbiAgICAgICAgfSxcbiAgICAgICAgZ3JpZDoge1xuICAgICAgICAgIGRpc3BsYXk6ICExXG4gICAgICAgIH0sXG4gICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgZGlzcGxheTogISFlLnhBeGlzVGl0bGUsXG4gICAgICAgICAgdGV4dDogZS54QXhpc1RpdGxlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGxheW91dDoge1xuICAgICAgcGFkZGluZzoge1xuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICByaWdodDogMCxcbiAgICAgICAgdG9wOiBzICsgKGUuc2hvd0xhYmVscyA/IDMwIDogMCksXG4gICAgICAgIGJvdHRvbTogMFxuICAgICAgfVxuICAgIH0sXG4gICAgcGx1Z2luczoge1xuICAgICAgZGF0YWxhYmVsczoge1xuICAgICAgICBkaXNwbGF5OiBlLnNob3dMYWJlbHMgPyBcImF1dG9cIiA6ICExLFxuICAgICAgICBhbmNob3I6IFwiZW5kXCIsXG4gICAgICAgIGFsaWduOiBcImVuZFwiLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGkuY2hhcnRzLmJ1YmJsZS5sYWJlbHMuYmFja2dyb3VuZENvbG9yLFxuICAgICAgICBib3JkZXJSYWRpdXM6IGkuY2hhcnRzLmJ1YmJsZS5sYWJlbHMuYm9yZGVyUmFkaXVzLFxuICAgICAgICBjb2xvcjogaS5jaGFydHMuYnViYmxlLmxhYmVscy5jb2xvcixcbiAgICAgICAgZm9udDoge1xuICAgICAgICAgIHNpemU6IGkuY2hhcnRzLmJ1YmJsZS5sYWJlbHMuZm9udC5zaXplLFxuICAgICAgICAgIHdlaWdodDogaS5jaGFydHMuYnViYmxlLmxhYmVscy5mb250LndlaWdodFxuICAgICAgICB9LFxuICAgICAgICBmb3JtYXR0ZXI6IChsLCB7IGRhdGFJbmRleDogYiB9KSA9PiB7XG4gICAgICAgICAgY29uc3QgYyA9ICh0ID09IG51bGwgPyB2b2lkIDAgOiB0W2JdW2UuYnViYmxlU2l6ZS5uYW1lXSkgfHwgMDtcbiAgICAgICAgICByZXR1cm4gdShjLCB7XG4gICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgZHBzOiBlLmRwcyB8fCAwLFxuICAgICAgICAgICAgbWV0YTogZS5idWJibGVTaXplLm1ldGFcbiAgICAgICAgICB9KSB8fCBudWxsO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgdG9vbHRpcDoge1xuICAgICAgICAvL2h0dHBzOi8vd3d3LmNoYXJ0anMub3JnL2RvY3MvbGF0ZXN0L2NvbmZpZ3VyYXRpb24vdG9vbHRpcC5odG1sXG4gICAgICAgIGNhbGxiYWNrczoge1xuICAgICAgICAgIGxhYmVsOiBmdW5jdGlvbihsKSB7XG4gICAgICAgICAgICBjb25zdCBiID0gbC5kYXRhc2V0LmxhYmVsIHx8IFwiXCIsIGMgPSBsLnJhdywgaCA9IHUoYCR7Yy55IHx8IFwiXCJ9YCwge1xuICAgICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgICBkcHM6IGUuZHBzLFxuICAgICAgICAgICAgICBtZXRhOiBlLnlBeGlzLm1ldGFcbiAgICAgICAgICAgIH0pLCBBID0gZS5idWJibGVTaXplLnRpdGxlLCBDID0gKHQgPT0gbnVsbCA/IHZvaWQgMCA6IHRbbC5kYXRhSW5kZXhdW2UuYnViYmxlU2l6ZS5uYW1lXSkgfHwgMCwgUyA9IHUoQywge1xuICAgICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgICBkcHM6IGUuZHBzLFxuICAgICAgICAgICAgICBtZXRhOiBlLmJ1YmJsZVNpemUubWV0YVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICBgJHtifTogJHtofWAsXG4gICAgICAgICAgICAgIGAke0F9OiAke1N9YFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBsZWdlbmQ6IHtcbiAgICAgICAgZGlzcGxheTogZS5zaG93TGVnZW5kLFxuICAgICAgICBwb3NpdGlvbjogXCJib3R0b21cIixcbiAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgdXNlUG9pbnRTdHlsZTogITAsXG4gICAgICAgICAgYm94SGVpZ2h0OiAxMFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuZnVuY3Rpb24gSChlLCB0LCBuKSB7XG4gIGNvbnN0IGkgPSAodCA9PSBudWxsID8gdm9pZCAwIDogdC5tYXAoKHMpID0+IHtcbiAgICBjb25zdCBvID0gc1tlLmJ1YmJsZVNpemUubmFtZV07XG4gICAgcmV0dXJuIG8gPyBwYXJzZUZsb2F0KG8pIDogMDtcbiAgfSkpIHx8IFtdLCBtID0gMzAgLyBNYXRoLm1heCguLi5pKSwgciA9ICh0ID09IG51bGwgPyB2b2lkIDAgOiB0Lm1hcCgocykgPT4gKHtcbiAgICB4OiBzW2UueEF4aXMubmFtZV0sXG4gICAgeTogcGFyc2VGbG9hdChzW2UueUF4aXMubmFtZV0pIHx8IDAsXG4gICAgcjogKHBhcnNlRmxvYXQoc1tlLmJ1YmJsZVNpemUubmFtZV0pIHx8IDApICogbVxuICB9KSkpIHx8IFtdO1xuICByZXR1cm4ge1xuICAgIGRhdGFzZXRzOiBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBlLnlBeGlzLnRpdGxlLFxuICAgICAgICBkYXRhOiByLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IE4oblswXSwgMC44KVxuICAgICAgfVxuICAgIF1cbiAgfTtcbn1cbmNvbnN0IEogPSB7XG4gIG5hbWU6IFwiQnViYmxlQ2hhcnRcIixcbiAgbGFiZWw6IFwiQnViYmxlIGNoYXJ0XCIsXG4gIGNsYXNzTmFtZXM6IFtcImluc2lkZS1jYXJkXCJdLFxuICBjYXRlZ29yeTogXCJDaGFydHM6IGVzc2VudGlhbHNcIixcbiAgaW5wdXRzOiBbXG4gICAge1xuICAgICAgbmFtZTogXCJkc1wiLFxuICAgICAgdHlwZTogXCJkYXRhc2V0XCIsXG4gICAgICBsYWJlbDogXCJEYXRhc2V0XCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJEYXRhc2V0XCIsXG4gICAgICBkZWZhdWx0VmFsdWU6ICExLFxuICAgICAgY2F0ZWdvcnk6IFwiQ2hhcnQgZGF0YVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcInhBeGlzXCIsXG4gICAgICB0eXBlOiBcImRpbWVuc2lvblwiLFxuICAgICAgbGFiZWw6IFwiWC1BeGlzXCIsXG4gICAgICBjb25maWc6IHtcbiAgICAgICAgZGF0YXNldDogXCJkc1wiLFxuICAgICAgICBoaWRlR3JhbnVsYXJpdHk6ICEwXG4gICAgICB9LFxuICAgICAgY2F0ZWdvcnk6IFwiQ2hhcnQgZGF0YVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcInlBeGlzXCIsXG4gICAgICB0eXBlOiBcIm1lYXN1cmVcIixcbiAgICAgIGxhYmVsOiBcIlktQXhpc1wiLFxuICAgICAgY29uZmlnOiB7XG4gICAgICAgIGRhdGFzZXQ6IFwiZHNcIlxuICAgICAgfSxcbiAgICAgIGNhdGVnb3J5OiBcIkNoYXJ0IGRhdGFcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJidWJibGVTaXplXCIsXG4gICAgICB0eXBlOiBcIm1lYXN1cmVcIixcbiAgICAgIGxhYmVsOiBcIkJ1YmJsZSBTaXplXCIsXG4gICAgICBjb25maWc6IHtcbiAgICAgICAgZGF0YXNldDogXCJkc1wiXG4gICAgICB9LFxuICAgICAgY2F0ZWdvcnk6IFwiQ2hhcnQgZGF0YVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcImxpbWl0XCIsXG4gICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgbGFiZWw6IFwiTGltaXQgcmVzdWx0c1wiLFxuICAgICAgY2F0ZWdvcnk6IFwiQ2hhcnQgZGF0YVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcImdyYW51bGFyaXR5XCIsXG4gICAgICB0eXBlOiBcImdyYW51bGFyaXR5XCIsXG4gICAgICBsYWJlbDogXCJHcmFudWxhcml0eVwiLFxuICAgICAgZGVmYXVsdFZhbHVlOiBcIndlZWtcIixcbiAgICAgIGNhdGVnb3J5OiBcIlZhcmlhYmxlcyB0byBjb25maWd1cmVcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJ0aXRsZVwiLFxuICAgICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICAgIGxhYmVsOiBcIlRpdGxlXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJUaGUgdGl0bGUgZm9yIHRoZSBjaGFydFwiLFxuICAgICAgY2F0ZWdvcnk6IFwiQ2hhcnQgc2V0dGluZ3NcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJkZXNjcmlwdGlvblwiLFxuICAgICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICAgIGxhYmVsOiBcIkRlc2NyaXB0aW9uXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJUaGUgZGVzY3JpcHRpb24gZm9yIHRoZSBjaGFydFwiLFxuICAgICAgY2F0ZWdvcnk6IFwiQ2hhcnQgc2V0dGluZ3NcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJzaG93TGVnZW5kXCIsXG4gICAgICB0eXBlOiBcImJvb2xlYW5cIixcbiAgICAgIGxhYmVsOiBcIlNob3cgTGVnZW5kXCIsXG4gICAgICBjYXRlZ29yeTogXCJDaGFydCBzZXR0aW5nc1wiLFxuICAgICAgZGVmYXVsdFZhbHVlOiAhMFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJzaG93TGFiZWxzXCIsXG4gICAgICB0eXBlOiBcImJvb2xlYW5cIixcbiAgICAgIGxhYmVsOiBcIlNob3cgTGFiZWxzXCIsXG4gICAgICBjYXRlZ29yeTogXCJDaGFydCBzZXR0aW5nc1wiLFxuICAgICAgZGVmYXVsdFZhbHVlOiAhMVxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJyZXZlcnNlWEF4aXNcIixcbiAgICAgIHR5cGU6IFwiYm9vbGVhblwiLFxuICAgICAgbGFiZWw6IFwiUmV2ZXJzZSBYIEF4aXNcIixcbiAgICAgIGNhdGVnb3J5OiBcIkNoYXJ0IHNldHRpbmdzXCIsXG4gICAgICBkZWZhdWx0VmFsdWU6ICExXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcInhBeGlzVGl0bGVcIixcbiAgICAgIHR5cGU6IFwic3RyaW5nXCIsXG4gICAgICBsYWJlbDogXCJYLUF4aXMgVGl0bGVcIixcbiAgICAgIGNhdGVnb3J5OiBcIkNoYXJ0IHNldHRpbmdzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwieUF4aXNUaXRsZVwiLFxuICAgICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICAgIGxhYmVsOiBcIlktQXhpcyBUaXRsZVwiLFxuICAgICAgY2F0ZWdvcnk6IFwiQ2hhcnQgc2V0dGluZ3NcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJ5QXhpc01pblwiLFxuICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgIGxhYmVsOiBcIlktQXhpcyBtaW5pbXVtIHZhbHVlXCIsXG4gICAgICBjYXRlZ29yeTogXCJDaGFydCBzZXR0aW5nc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcImRwc1wiLFxuICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgIGxhYmVsOiBcIkRlY2ltYWwgUGxhY2VzXCIsXG4gICAgICBjYXRlZ29yeTogXCJGb3JtYXR0aW5nXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiZW5hYmxlRG93bmxvYWRBc0NTVlwiLFxuICAgICAgdHlwZTogXCJib29sZWFuXCIsXG4gICAgICBsYWJlbDogXCJTaG93IGRvd25sb2FkIGFzIENTVlwiLFxuICAgICAgY2F0ZWdvcnk6IFwiRXhwb3J0IG9wdGlvbnNcIixcbiAgICAgIGRlZmF1bHRWYWx1ZTogITBcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiZW5hYmxlRG93bmxvYWRBc1BOR1wiLFxuICAgICAgdHlwZTogXCJib29sZWFuXCIsXG4gICAgICBsYWJlbDogXCJTaG93IGRvd25sb2FkIGFzIFBOR1wiLFxuICAgICAgY2F0ZWdvcnk6IFwiRXhwb3J0IG9wdGlvbnNcIixcbiAgICAgIGRlZmF1bHRWYWx1ZTogITBcbiAgICB9XG4gIF1cbn0sIHRlID0gdyhNLCBKLCB7XG4gIHByb3BzOiAoZSkgPT4ge1xuICAgIHZhciBpO1xuICAgIGNvbnN0IHQgPSBbXTtcbiAgICB0LnB1c2goe1xuICAgICAgcHJvcGVydHk6IGUueEF4aXMsXG4gICAgICBkaXJlY3Rpb246IFwiZGVzY1wiXG4gICAgfSk7XG4gICAgY29uc3QgbiA9IGUueEF4aXMubmF0aXZlVHlwZSA9PT0gXCJ0aW1lXCI7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmUsXG4gICAgICByZXZlcnNlWEF4aXM6IGUucmV2ZXJzZVhBeGlzLFxuICAgICAgaXNUaW1lRGltZW5zaW9uOiBuLFxuICAgICAgcmVzdWx0czogbiA/IHgoe1xuICAgICAgICBmcm9tOiBlLmRzLFxuICAgICAgICBvcmRlckJ5OiB0LFxuICAgICAgICBzZWxlY3Q6IFtcbiAgICAgICAgICB7IGRpbWVuc2lvbjogKGkgPSBlLnhBeGlzKSA9PSBudWxsID8gdm9pZCAwIDogaS5uYW1lLCBncmFudWxhcml0eTogZS5ncmFudWxhcml0eSB9LFxuICAgICAgICAgIGUueUF4aXMsXG4gICAgICAgICAgZS5idWJibGVTaXplXG4gICAgICAgIF0sXG4gICAgICAgIGxpbWl0OiBlLmxpbWl0IHx8IDUwXG4gICAgICB9KSA6IHgoe1xuICAgICAgICBmcm9tOiBlLmRzLFxuICAgICAgICBzZWxlY3Q6IFtlLnhBeGlzLCBlLnlBeGlzLCBlLmJ1YmJsZVNpemVdLFxuICAgICAgICBsaW1pdDogZS5saW1pdCB8fCA1MFxuICAgICAgfSlcbiAgICB9O1xuICB9XG59KTtcbmV4cG9ydCB7XG4gIHRlIGFzIGRlZmF1bHQsXG4gIEogYXMgbWV0YVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUJ1YmJsZUNoYXJ0LmpzLm1hcFxuIl0sIm5hbWVzIjpbInYiLCJMIiwiUiIsImsiLCJGIiwiUCIsIlgiLCJCIiwiRyIsIl8iLCJvIiwiVCIsIm4iLCJWIiwiZiIsInoiLCIkIiwiWSIsImoiLCJFIiwidSIsIk4iLCJ3IiwieCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsTUFBTSxJQUFJO0FBQUEsRUFDUixPQUFPO0FBQUEsSUFDTCxTQUFTO0FBQUEsSUFDVCxXQUFXO0FBQUEsRUFDZjtBQUFBLEVBQ0UsUUFBUTtBQUFBLElBQ04sUUFBUTtBQUFBLE1BQ047QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ047QUFBQSxJQUNJLFNBQVM7QUFBQSxNQUNQLGdCQUFnQjtBQUFBLE1BQ2hCLGVBQWU7QUFBQSxJQUNyQjtBQUFBLElBQ0ksYUFBYTtBQUFBLE1BQ1gsYUFBYTtBQUFBLE1BQ2IsV0FBVztBQUFBLE1BQ1gsWUFBWTtBQUFBLE1BQ1osT0FBTztBQUFBLElBQ2I7QUFBQSxJQUNJLGFBQWE7QUFBQTtBQUFBLElBRWIsS0FBSztBQUFBLE1BQ0gsY0FBYztBQUFBLE1BQ2QsZUFBZTtBQUFBLE1BQ2YsYUFBYTtBQUFBLE1BQ2Isd0JBQXdCO0FBQUEsTUFDeEIsTUFBTTtBQUFBLFFBQ0osTUFBTTtBQUFBLE1BQ2Q7QUFBQSxNQUNNLFFBQVE7QUFBQSxRQUNOLE9BQU87QUFBQSxVQUNMLGlCQUFpQjtBQUFBLFVBQ2pCLGNBQWM7QUFBQSxVQUNkLE9BQU87QUFBQSxVQUNQLE1BQU07QUFBQSxZQUNKLE1BQU07QUFBQSxZQUNOLFFBQVE7QUFBQSxVQUNwQjtBQUFBLFFBQ0E7QUFBQSxRQUNRLE9BQU87QUFBQSxVQUNMLGlCQUFpQjtBQUFBLFVBQ2pCLGNBQWM7QUFBQSxVQUNkLE9BQU87QUFBQSxVQUNQLE1BQU07QUFBQSxZQUNKLE1BQU07QUFBQSxZQUNOLFFBQVE7QUFBQSxVQUNwQjtBQUFBLFFBQ0E7QUFBQSxNQUNBO0FBQUEsTUFDTSxhQUFhO0FBQUEsSUFDbkI7QUFBQSxJQUNJLFFBQVE7QUFBQSxNQUNOLE1BQU07QUFBQSxRQUNKLE1BQU07QUFBQSxNQUNkO0FBQUEsTUFDTSxRQUFRO0FBQUEsUUFDTixpQkFBaUI7QUFBQSxRQUNqQixjQUFjO0FBQUEsUUFDZCxPQUFPO0FBQUEsUUFDUCxNQUFNO0FBQUEsVUFDSixNQUFNO0FBQUEsVUFDTixRQUFRO0FBQUEsUUFDbEI7QUFBQSxNQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0ksS0FBSztBQUFBLE1BQ0gsV0FBVztBQUFBLE1BQ1gsTUFBTTtBQUFBLFFBQ0osZUFBZTtBQUFBLFFBQ2YsTUFBTTtBQUFBLE1BQ2Q7QUFBQSxJQUNBO0FBQUEsSUFDSSxNQUFNO0FBQUEsTUFDSix3QkFBd0I7QUFBQSxNQUN4QixNQUFNO0FBQUEsUUFDSixNQUFNO0FBQUEsTUFDZDtBQUFBLE1BQ00sUUFBUTtBQUFBLFFBQ04saUJBQWlCO0FBQUEsUUFDakIsY0FBYztBQUFBLFFBQ2QsT0FBTztBQUFBLFFBQ1AsTUFBTTtBQUFBLFVBQ0osTUFBTTtBQUFBLFVBQ04sUUFBUTtBQUFBLFFBQ2xCO0FBQUEsTUFDQTtBQUFBLE1BQ00sYUFBYTtBQUFBLElBQ25CO0FBQUEsSUFDSSxLQUFLO0FBQUEsTUFDSCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsTUFDYixNQUFNO0FBQUEsUUFDSixNQUFNO0FBQUEsTUFDZDtBQUFBLE1BQ00sUUFBUTtBQUFBLFFBQ04saUJBQWlCO0FBQUEsUUFDakIsY0FBYztBQUFBLFFBQ2QsT0FBTztBQUFBLFFBQ1AsTUFBTTtBQUFBLFVBQ0osTUFBTTtBQUFBLFVBQ04sUUFBUTtBQUFBLFFBQ2xCO0FBQUEsTUFDQTtBQUFBLE1BQ00sUUFBUTtBQUFBLElBQ2Q7QUFBQSxJQUNJLFNBQVM7QUFBQSxNQUNQLE1BQU07QUFBQSxRQUNKLE1BQU07QUFBQSxNQUNkO0FBQUEsTUFDTSxRQUFRO0FBQUEsUUFDTixpQkFBaUI7QUFBQSxRQUNqQixjQUFjO0FBQUEsUUFDZCxPQUFPO0FBQUEsUUFDUCxNQUFNO0FBQUEsVUFDSixNQUFNO0FBQUEsVUFDTixRQUFRO0FBQUEsUUFDbEI7QUFBQSxNQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0ksYUFBYTtBQUFBLE1BQ1gsd0JBQXdCO0FBQUEsTUFDeEIsTUFBTTtBQUFBLFFBQ0osTUFBTTtBQUFBLE1BQ2Q7QUFBQSxNQUNNLFFBQVE7QUFBQSxRQUNOLGlCQUFpQjtBQUFBLFFBQ2pCLGNBQWM7QUFBQSxRQUNkLE9BQU87QUFBQSxRQUNQLE1BQU07QUFBQSxVQUNKLE1BQU07QUFBQSxVQUNOLFFBQVE7QUFBQSxRQUNsQjtBQUFBLE1BQ0E7QUFBQSxNQUNNLGFBQWE7QUFBQSxJQUNuQjtBQUFBO0FBQUEsRUFFQTtBQUFBLEVBQ0UsV0FBVztBQUFBLElBQ1QsaUJBQWlCO0FBQUEsSUFDakIsUUFBUTtBQUFBLElBQ1IsY0FBYztBQUFBLElBQ2QsV0FBVztBQUFBLElBQ1gsU0FBUztBQUFBLEVBQ2I7QUFBQSxFQUNFLFVBQVU7QUFBQSxJQUNSLGFBQWE7QUFBQSxNQUNYLFFBQVE7QUFBQSxRQUNOLE9BQU87QUFBQSxRQUNQLFFBQVE7QUFBQSxRQUNSLE1BQU07QUFBQSxRQUNOLGFBQWE7QUFBQSxNQUNyQjtBQUFBLElBQ0E7QUFBQSxJQUNJLFNBQVM7QUFBQSxNQUNQLFFBQVE7QUFBQSxRQUNOLFlBQVk7QUFBQSxRQUNaLFFBQVE7QUFBQSxRQUNSLFdBQVc7QUFBQSxNQUNuQjtBQUFBLE1BQ00sU0FBUztBQUFBLFFBQ1AsWUFBWTtBQUFBLFFBQ1osUUFBUTtBQUFBLFFBQ1IsV0FBVztBQUFBLE1BQ25CO0FBQUEsTUFDTSxTQUFTO0FBQUEsUUFDUCxZQUFZO0FBQUEsUUFDWixRQUFRO0FBQUEsUUFDUixXQUFXO0FBQUEsTUFDbkI7QUFBQSxNQUNNLFVBQVU7QUFBQSxNQUNWLFFBQVE7QUFBQSxNQUNSLGFBQWE7QUFBQSxRQUNYLFFBQVE7QUFBQSxVQUNOLFlBQVk7QUFBQSxVQUNaLFFBQVE7QUFBQSxVQUNSLFdBQVc7QUFBQSxRQUNyQjtBQUFBLFFBQ1EsVUFBVTtBQUFBLFVBQ1IsWUFBWTtBQUFBLFVBQ1osUUFBUTtBQUFBLFVBQ1IsV0FBVztBQUFBLFFBQ3JCO0FBQUEsUUFDUSxRQUFRO0FBQUEsUUFDUixVQUFVO0FBQUEsUUFDVixTQUFTO0FBQUEsUUFDVCxRQUFRO0FBQUEsTUFDaEI7QUFBQSxNQUNNLFVBQVU7QUFBQSxNQUNWLFVBQVU7QUFBQSxNQUNWLFFBQVE7QUFBQSxJQUNkO0FBQUEsSUFDSSxTQUFTO0FBQUEsTUFDUCxRQUFRO0FBQUEsUUFDTixRQUFRO0FBQUEsUUFDUixPQUFPO0FBQUEsTUFDZjtBQUFBLE1BQ00sU0FBUztBQUFBLE1BQ1QsUUFBUTtBQUFBLElBQ2Q7QUFBQSxJQUNJLFlBQVk7QUFBQSxNQUNWLGFBQWE7QUFBQSxRQUNYLFFBQVE7QUFBQSxVQUNOLFFBQVE7QUFBQSxVQUNSLFVBQVU7QUFBQSxVQUNWLGNBQWM7QUFBQSxVQUNkLGFBQWE7QUFBQSxVQUNiLFlBQVk7QUFBQSxRQUN0QjtBQUFBLE1BQ0E7QUFBQSxNQUNNLE1BQU07QUFBQSxRQUNKLFFBQVE7QUFBQSxVQUNOLFFBQVE7QUFBQSxVQUNSLFVBQVU7QUFBQSxVQUNWLGFBQWE7QUFBQSxVQUNiLFlBQVk7QUFBQSxVQUNaLGdCQUFnQjtBQUFBLFVBQ2hCLE9BQU87QUFBQSxRQUNqQjtBQUFBLE1BQ0E7QUFBQSxNQUNNLGdCQUFnQjtBQUFBLE1BQ2hCLFVBQVU7QUFBQSxRQUNSLFFBQVE7QUFBQSxRQUNSLFdBQVc7QUFBQSxRQUNYLGFBQWE7QUFBQSxRQUNiLFlBQVk7QUFBQSxNQUNwQjtBQUFBLElBQ0E7QUFBQSxJQUNJLFFBQVE7QUFBQSxNQUNOLFFBQVE7QUFBQSxRQUNOLE9BQU87QUFBQSxRQUNQLFVBQVU7QUFBQSxNQUNsQjtBQUFBLElBQ0E7QUFBQSxJQUNJLGFBQWE7QUFBQSxNQUNYLFdBQVc7QUFBQSxNQUNYLGlCQUFpQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBT3ZCO0FBQUEsSUFDSSxVQUFVO0FBQUEsTUFDUixRQUFRO0FBQUEsSUFDZDtBQUFBLEVBQ0E7QUFBQSxFQUNFLGFBQWE7QUFBQSxJQUNYLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULE9BQU87QUFBQSxJQUNQLEtBQUs7QUFBQSxJQUNMLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxFQUNaO0FBQUEsRUFDRSxjQUFjO0FBQUEsSUFDWixpQkFBaUI7QUFBQSxJQUNqQixRQUFRO0FBQUEsSUFDUixjQUFjO0FBQUEsSUFDZCxXQUFXO0FBQUEsSUFDWCxNQUFNO0FBQUEsTUFDSixPQUFPO0FBQUEsTUFDUCxRQUFRO0FBQUEsTUFDUixNQUFNO0FBQUEsTUFDTixRQUFRO0FBQUEsSUFDZDtBQUFBLElBQ0ksT0FBTztBQUFBLE1BQ0wsaUJBQWlCO0FBQUEsTUFDakIsV0FBVztBQUFBLE1BQ1gsVUFBVTtBQUFBLElBQ2hCO0FBQUEsSUFDSSxjQUFjO0FBQUEsSUFDZCxjQUFjO0FBQUEsSUFDZCxLQUFLO0FBQUEsTUFDSCxPQUFPO0FBQUEsTUFDUCxRQUFRO0FBQUEsSUFDZDtBQUFBLEVBQ0E7QUFBQSxFQUNFLE1BQU07QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLGFBQWE7QUFBQSxJQUNiLFdBQVc7QUFBQSxJQUNYLGFBQWE7QUFBQSxNQUNYLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxJQUNkO0FBQUEsSUFDSSxRQUFRO0FBQUEsSUFDUixNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixPQUFPO0FBQUEsTUFDTCxPQUFPO0FBQUEsTUFDUCxNQUFNO0FBQUEsTUFDTixRQUFRO0FBQUEsSUFDZDtBQUFBLElBQ0ksTUFBTSxDQUFBO0FBQUEsRUFDVjtBQUFBLEVBQ0UsS0FBSztBQUFBLElBQ0gsaUJBQWlCO0FBQUEsRUFDckI7QUFBQSxFQUNFLEtBQUs7QUFBQSxJQUNILFNBQVM7QUFBQSxJQUNULFlBQVk7QUFBQSxJQUNaLFlBQVk7QUFBQSxJQUNaLFlBQVk7QUFBQSxJQUNaLGNBQWM7QUFBQSxJQUNkLGNBQWM7QUFBQSxFQUNsQjtBQUNBO0FDdlRBQSxHQUFFO0FBQUEsRUFDQUM7QUFBQUEsRUFDQUM7QUFBQUEsRUFDQUM7QUFBQUEsRUFDQUM7QUFBQUEsRUFDQUM7QUFBQUEsRUFDQUM7QUFBQUEsRUFDQUM7QUFBQUEsRUFDQUM7QUFBQUEsRUFDQUM7QUFDRjtBQUNBLE1BQU0sSUFBSSxDQUFDLE1BQU07QUFDZixNQUFJQztBQUNKLFFBQU0sSUFBSUMsU0FBQztBQUNYLE1BQUlDLEtBQUksRUFBRSxPQUFPO0FBQ2pCLElBQUUsT0FBTyxPQUFPLFdBQVdBLEtBQUksRUFBRSxPQUFPLE9BQU87QUFDL0MsUUFBTSxFQUFFLFVBQVUsRUFBQyxJQUFLQyxFQUFFLEdBQUcsTUFBTSxHQUFHLEVBQUUsU0FBUyxFQUFDLElBQUssR0FBRyxJQUFJLEVBQUUsbUJBQW1CSCxLQUFJLEtBQUssT0FBTyxTQUFTLEVBQUUsU0FBUyxPQUFPLFNBQVNBLEdBQUUsT0FBTyxHQUFHLENBQUEsQ0FBRSxJQUFJLEtBQUssT0FBTyxTQUFTLEVBQUUsTUFBTSxJQUFJO0FBQUEsSUFDeEwsR0FBRztBQUFBLElBQ0gsT0FBTztBQUFBLEVBQ1gsR0FBSyxJQUFJLEVBQUUsR0FBRyxHQUFHRSxFQUFDO0FBQ2hCLFNBQXVCRSxvQkFBRSxJQUFJQyxJQUFHLEVBQUUsR0FBRyxHQUFHLFdBQVcscUJBQXFCLFVBQTBCRCxvQkFBRTtBQUFBLElBQ2xHRTtBQUFBQSxJQUNBO0FBQUEsTUFDRSxRQUFRO0FBQUEsTUFDUixTQUFTLEVBQUUsR0FBRyxHQUFHLENBQUM7QUFBQSxNQUNsQixNQUFNO0FBQUEsSUFDWjtBQUFBLEVBQ0EsR0FBSztBQUNMO0FBQ0EsU0FBUyxFQUFFLEdBQUcsR0FBR0osSUFBRztBQUNsQixNQUFJRixLQUFHLEdBQUcsR0FBRztBQUNiLE1BQUksRUFBRSxPQUFPLEVBQUMsSUFBSztBQUNuQixRQUFNLElBQUlPLElBQUlDLEdBQUUsR0FBRyxRQUFRO0FBQzNCLFFBQU0sSUFBSU4sR0FBRSxTQUFTLENBQUMsRUFBRSxNQUFNLElBQUksRUFBRSxlQUFlLEVBQUUsbUJBQW1CRixNQUFJLEVBQUUsQ0FBQyxNQUFNLE9BQU8sU0FBU0EsSUFBRSxLQUFLLElBQUksS0FBSyxPQUFPLFNBQVMsRUFBRSxFQUFFLFNBQVMsQ0FBQyxNQUFNLE9BQU8sU0FBUyxFQUFFLElBQUksRUFBRSxtQkFBbUIsSUFBSSxFQUFFLEVBQUUsU0FBUyxDQUFDLE1BQU0sT0FBTyxTQUFTLEVBQUUsS0FBSyxJQUFJLEtBQUssT0FBTyxTQUFTLEVBQUUsQ0FBQyxNQUFNLE9BQU8sU0FBUyxFQUFFLEdBQUcsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLE9BQU8sS0FBSyxPQUFPLFNBQVMsRUFBRSxNQUFNLEtBQUssT0FBTyxTQUFTLEVBQUUsS0FBSyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLEtBQUssT0FBTyxTQUFTLEVBQUUsTUFBTTtBQUMzYSxTQUFPO0FBQUEsSUFDTCxZQUFZO0FBQUEsSUFDWixxQkFBcUI7QUFBQSxJQUNyQixXQUFXO0FBQUEsTUFDVCxVQUFVO0FBQUEsTUFDVixRQUFRO0FBQUEsSUFDZDtBQUFBLElBQ0ksUUFBUTtBQUFBLE1BQ04sR0FBRztBQUFBLFFBQ0QsS0FBSyxFQUFFO0FBQUEsUUFDUCxNQUFNO0FBQUEsVUFDSixTQUFTO0FBQUEsUUFDbkI7QUFBQSxRQUNRLGlCQUFpQixTQUFTLEdBQUc7QUFDM0JTLGFBQUUsR0FBRyxFQUFFLFNBQVMsQ0FBQyxFQUFFLEtBQUssR0FBRyxFQUFFLEdBQUc7QUFBQSxRQUNsQztBQUFBLFFBQ0EsT0FBTztBQUFBLFVBQ0wsU0FBUztBQUFBLFFBQ25CO0FBQUEsUUFDUSxPQUFPO0FBQUEsVUFDTCxTQUFTLENBQUMsQ0FBQyxFQUFFO0FBQUEsVUFDYixNQUFNLEVBQUU7QUFBQSxRQUNsQjtBQUFBLE1BQ0E7QUFBQSxNQUNNLEdBQUc7QUFBQSxRQUNELFNBQVMsRUFBRTtBQUFBLFFBQ1gsTUFBTSxFQUFFLGtCQUFrQixTQUFTO0FBQUEsUUFDbkMsTUFBTTtBQUFBLFVBQ0osT0FBTyxFQUFFO0FBQUEsVUFDVCxZQUFZO0FBQUEsVUFDWixnQkFBZ0IsRUFBRTtBQUFBLFVBQ2xCLE1BQU0sRUFBRTtBQUFBLFFBQ2xCO0FBQUEsUUFDUSxNQUFNO0FBQUEsVUFDSixTQUFTO0FBQUEsUUFDbkI7QUFBQSxRQUNRLE9BQU87QUFBQSxVQUNMLFNBQVMsQ0FBQyxDQUFDLEVBQUU7QUFBQSxVQUNiLE1BQU0sRUFBRTtBQUFBLFFBQ2xCO0FBQUEsTUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNJLFFBQVE7QUFBQSxNQUNOLFNBQVM7QUFBQSxRQUNQLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxRQUNQLEtBQUssS0FBSyxFQUFFLGFBQWEsS0FBSztBQUFBLFFBQzlCLFFBQVE7QUFBQSxNQUNoQjtBQUFBLElBQ0E7QUFBQSxJQUNJLFNBQVM7QUFBQSxNQUNQLFlBQVk7QUFBQSxRQUNWLFNBQVMsRUFBRSxhQUFhLFNBQVM7QUFBQSxRQUNqQyxRQUFRO0FBQUEsUUFDUixPQUFPO0FBQUEsUUFDUCxpQkFBaUIsRUFBRSxPQUFPLE9BQU8sT0FBTztBQUFBLFFBQ3hDLGNBQWMsRUFBRSxPQUFPLE9BQU8sT0FBTztBQUFBLFFBQ3JDLE9BQU8sRUFBRSxPQUFPLE9BQU8sT0FBTztBQUFBLFFBQzlCLE1BQU07QUFBQSxVQUNKLE1BQU0sRUFBRSxPQUFPLE9BQU8sT0FBTyxLQUFLO0FBQUEsVUFDbEMsUUFBUSxFQUFFLE9BQU8sT0FBTyxPQUFPLEtBQUs7QUFBQSxRQUM5QztBQUFBLFFBQ1EsV0FBVyxDQUFDLEdBQUcsRUFBRSxXQUFXLEVBQUMsTUFBTztBQUNsQyxnQkFBTSxLQUFLLEtBQUssT0FBTyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsV0FBVyxJQUFJLE1BQU07QUFDNUQsaUJBQU9DLEdBQUUsR0FBRztBQUFBLFlBQ1YsTUFBTTtBQUFBLFlBQ04sS0FBSyxFQUFFLE9BQU87QUFBQSxZQUNkLE1BQU0sRUFBRSxXQUFXO0FBQUEsVUFDL0IsQ0FBVyxLQUFLO0FBQUEsUUFDUjtBQUFBLE1BQ1I7QUFBQSxNQUNNLFNBQVM7QUFBQTtBQUFBLFFBRVAsV0FBVztBQUFBLFVBQ1QsT0FBTyxTQUFTLEdBQUc7QUFDakIsa0JBQU0sSUFBSSxFQUFFLFFBQVEsU0FBUyxJQUFJLElBQUksRUFBRSxLQUFLLElBQUlBLEdBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJO0FBQUEsY0FDaEUsTUFBTTtBQUFBLGNBQ04sS0FBSyxFQUFFO0FBQUEsY0FDUCxNQUFNLEVBQUUsTUFBTTtBQUFBLFlBQzVCLENBQWEsR0FBRyxJQUFJLEVBQUUsV0FBVyxPQUFPLEtBQUssS0FBSyxPQUFPLFNBQVMsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLFdBQVcsSUFBSSxNQUFNLEdBQUcsSUFBSUEsR0FBRSxHQUFHO0FBQUEsY0FDdEcsTUFBTTtBQUFBLGNBQ04sS0FBSyxFQUFFO0FBQUEsY0FDUCxNQUFNLEVBQUUsV0FBVztBQUFBLFlBQ2pDLENBQWE7QUFDRCxtQkFBTztBQUFBLGNBQ0wsR0FBRyxDQUFDLEtBQUssQ0FBQztBQUFBLGNBQ1YsR0FBRyxDQUFDLEtBQUssQ0FBQztBQUFBLFlBQ3hCO0FBQUEsVUFDVTtBQUFBLFFBQ1Y7QUFBQSxNQUNBO0FBQUEsTUFDTSxRQUFRO0FBQUEsUUFDTixTQUFTLEVBQUU7QUFBQSxRQUNYLFVBQVU7QUFBQSxRQUNWLFFBQVE7QUFBQSxVQUNOLGVBQWU7QUFBQSxVQUNmLFdBQVc7QUFBQSxRQUNyQjtBQUFBLE1BQ0E7QUFBQSxJQUNBO0FBQUEsRUFDQTtBQUNBO0FBQ0EsU0FBUyxFQUFFLEdBQUcsR0FBR1IsS0FBRztBQUNsQixRQUFNLEtBQUssS0FBSyxPQUFPLFNBQVMsRUFBRSxJQUFJLENBQUMsTUFBTTtBQUMzQyxVQUFNRixLQUFJLEVBQUUsRUFBRSxXQUFXLElBQUk7QUFDN0IsV0FBT0EsS0FBSSxXQUFXQSxFQUFDLElBQUk7QUFBQSxFQUM3QixDQUFDLE1BQU0sQ0FBQSxHQUFJLElBQUksS0FBSyxLQUFLLElBQUksR0FBRyxDQUFDLEdBQUcsS0FBSyxLQUFLLE9BQU8sU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPO0FBQUEsSUFDMUUsR0FBRyxFQUFFLEVBQUUsTUFBTSxJQUFJO0FBQUEsSUFDakIsR0FBRyxXQUFXLEVBQUUsRUFBRSxNQUFNLElBQUksQ0FBQyxLQUFLO0FBQUEsSUFDbEMsSUFBSSxXQUFXLEVBQUUsRUFBRSxXQUFXLElBQUksQ0FBQyxLQUFLLEtBQUs7QUFBQSxFQUNqRCxFQUFJLE1BQU0sQ0FBQTtBQUNSLFNBQU87QUFBQSxJQUNMLFVBQVU7QUFBQSxNQUNSO0FBQUEsUUFDRSxPQUFPLEVBQUUsTUFBTTtBQUFBLFFBQ2YsTUFBTTtBQUFBLFFBQ04saUJBQWlCVyxFQUFFVCxJQUFFLENBQUMsR0FBRyxHQUFHO0FBQUEsTUFDcEM7QUFBQSxJQUNBO0FBQUEsRUFDQTtBQUNBO0FBQ0ssTUFBQyxJQUFJO0FBQUEsRUFDUixNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsRUFDUCxZQUFZLENBQUMsYUFBYTtBQUFBLEVBQzFCLFVBQVU7QUFBQSxFQUNWLFFBQVE7QUFBQSxJQUNOO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxhQUFhO0FBQUEsTUFDYixjQUFjO0FBQUEsTUFDZCxVQUFVO0FBQUEsSUFDaEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxRQUFRO0FBQUEsUUFDTixTQUFTO0FBQUEsUUFDVCxpQkFBaUI7QUFBQSxNQUN6QjtBQUFBLE1BQ00sVUFBVTtBQUFBLElBQ2hCO0FBQUEsSUFDSTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsUUFBUTtBQUFBLFFBQ04sU0FBUztBQUFBLE1BQ2pCO0FBQUEsTUFDTSxVQUFVO0FBQUEsSUFDaEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxRQUFRO0FBQUEsUUFDTixTQUFTO0FBQUEsTUFDakI7QUFBQSxNQUNNLFVBQVU7QUFBQSxJQUNoQjtBQUFBLElBQ0k7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLFVBQVU7QUFBQSxJQUNoQjtBQUFBLElBQ0k7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLGNBQWM7QUFBQSxNQUNkLFVBQVU7QUFBQSxJQUNoQjtBQUFBLElBQ0k7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLGFBQWE7QUFBQSxNQUNiLFVBQVU7QUFBQSxJQUNoQjtBQUFBLElBQ0k7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLGFBQWE7QUFBQSxNQUNiLFVBQVU7QUFBQSxJQUNoQjtBQUFBLElBQ0k7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLFVBQVU7QUFBQSxNQUNWLGNBQWM7QUFBQSxJQUNwQjtBQUFBLElBQ0k7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLFVBQVU7QUFBQSxNQUNWLGNBQWM7QUFBQSxJQUNwQjtBQUFBLElBQ0k7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLFVBQVU7QUFBQSxNQUNWLGNBQWM7QUFBQSxJQUNwQjtBQUFBLElBQ0k7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLFVBQVU7QUFBQSxJQUNoQjtBQUFBLElBQ0k7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLFVBQVU7QUFBQSxJQUNoQjtBQUFBLElBQ0k7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLFVBQVU7QUFBQSxJQUNoQjtBQUFBLElBQ0k7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLFVBQVU7QUFBQSxJQUNoQjtBQUFBLElBQ0k7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLFVBQVU7QUFBQSxNQUNWLGNBQWM7QUFBQSxJQUNwQjtBQUFBLElBQ0k7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLFVBQVU7QUFBQSxNQUNWLGNBQWM7QUFBQSxJQUNwQjtBQUFBLEVBQ0E7QUFDQSxHQUFHLEtBQUtVLGdCQUFFLEdBQUcsR0FBRztBQUFBLEVBQ2QsT0FBTyxDQUFDLE1BQU07QUFDWixRQUFJO0FBQ0osVUFBTSxJQUFJLENBQUE7QUFDVixNQUFFLEtBQUs7QUFBQSxNQUNMLFVBQVUsRUFBRTtBQUFBLE1BQ1osV0FBVztBQUFBLElBQ2pCLENBQUs7QUFDRCxVQUFNVixLQUFJLEVBQUUsTUFBTSxlQUFlO0FBQ2pDLFdBQU87QUFBQSxNQUNMLEdBQUc7QUFBQSxNQUNILGNBQWMsRUFBRTtBQUFBLE1BQ2hCLGlCQUFpQkE7QUFBQSxNQUNqQixTQUFTQSxLQUFJVyxFQUFFO0FBQUEsUUFDYixNQUFNLEVBQUU7QUFBQSxRQUNSLFNBQVM7QUFBQSxRQUNULFFBQVE7QUFBQSxVQUNOLEVBQUUsWUFBWSxJQUFJLEVBQUUsVUFBVSxPQUFPLFNBQVMsRUFBRSxNQUFNLGFBQWEsRUFBRSxZQUFXO0FBQUEsVUFDaEYsRUFBRTtBQUFBLFVBQ0YsRUFBRTtBQUFBLFFBQ1o7QUFBQSxRQUNRLE9BQU8sRUFBRSxTQUFTO0FBQUEsTUFDMUIsQ0FBTyxJQUFJQSxFQUFFO0FBQUEsUUFDTCxNQUFNLEVBQUU7QUFBQSxRQUNSLFFBQVEsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsVUFBVTtBQUFBLFFBQ3ZDLE9BQU8sRUFBRSxTQUFTO0FBQUEsTUFDMUIsQ0FBTztBQUFBLElBQ1A7QUFBQSxFQUNFO0FBQ0YsQ0FBQzsiLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMCwxXX0=
