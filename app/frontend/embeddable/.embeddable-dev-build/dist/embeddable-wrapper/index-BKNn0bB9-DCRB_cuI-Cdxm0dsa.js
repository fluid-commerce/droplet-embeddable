import { j as j$1 } from './jsx-runtime-CjQXaSqQ-CjMA1-fF-CkV96GpT.js';
import { M as Mt, Y as Yi, X as Xi, a as Me, S as St, P as Ph, I as Ih, w as wh, x as xh, F as Fd, L as Le, $ as $d, j as jd, B as Bd } from './common-Badpcggq-Batnw2Ed-CkZpixXy.js';
import './chartjs-adapter-date-fns.esm-vRFmo1LD-Cpw3-dRH-QkYakUVd.js';
import { r as reactExports } from './embeddable-component-BD9bezsm.js';
import { j } from './useTimeseries-CKhM5zgf-Dd4vgjj--FzCeDPUA.js';
import { c as ce } from './format-TjzP8gQX-Cs7Vwno2-CeUXJh2P.js';
import { i } from './formatDateTooltips-B_XOEw3--6C5OZZFh-DwNDIsvB.js';
import { q } from './getStackedChartData-DmWnIJXP-Ji_he_TH-CTtJMDP0.js';
import { W as Wg } from './Container-mop-J7T8-BpqPaGKG-DiR4tjay.js';
import { u as useTheme } from './index.esm-CVE60fla-BtsXn2z1.js';

Mt.register(
  Yi,
  Xi,
  Me,
  St,
  Ph,
  Ih,
  wh,
  xh,
  Fd,
  Le
);
const O = (i$1) => {
  const { isMultiDimensionLine: n = false } = i$1, s = useTheme();
  $d(s, "pie");
  const e = {
    ...i$1,
    theme: s
  }, { fillGaps: l } = j(e, "desc"), c = reactExports.useMemo(() => {
    var o, d;
    const t = (d = (o = e == null ? void 0 : e.results) == null ? void 0 : o.data) == null ? void 0 : d.reduce(l, []), a = {
      fill: !n,
      cubicInterpolationMode: s.charts.stackedArea.cubicInterpolationMode,
      pointRadius: 0,
      tension: s.charts.stackedArea.lineTension,
      pointHoverRadius: 3
    };
    return q(
      {
        ...e,
        results: {
          ...e.results,
          data: t
        }
      },
      a,
      { chartType: "stackedAreaChart" }
    );
  }, [e, l]), u = reactExports.useMemo(() => ({
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: "index",
      intersect: false
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: e.showLabels ? 20 : 0,
        // Added so the highest data labels fits
        bottom: 0
      }
    },
    scales: {
      y: {
        stacked: !n,
        min: e.yAxisMin,
        max: e.displayAsPercentage ? 100 : void 0,
        grace: "0%",
        // Add percent to add numbers on the y-axis above and below the max and min values
        grid: {
          display: false
        },
        ticks: {
          callback: function(t) {
            return e.displayAsPercentage ? `${t}%` : ce(t.toString(), { type: "number" });
          }
        },
        title: {
          display: !!e.yAxisTitle,
          text: e.yAxisTitle
        },
        afterDataLimits: function(t) {
          jd(t, e.results, [e.metric], e.dps);
        }
      },
      x: {
        grid: {
          display: false
        },
        title: {
          display: !!e.xAxisTitle,
          text: e.xAxisTitle
        },
        type: "time",
        time: {
          round: e.granularity,
          displayFormats: s.dateFormats,
          unit: e.granularity
        }
      }
    },
    animation: {
      duration: 400,
      easing: "linear"
    },
    plugins: {
      legend: {
        display: e.showLegend,
        position: "bottom",
        labels: {
          usePointStyle: true,
          boxHeight: 8
        }
      },
      tooltip: {
        //https://www.chartjs.org/docs/latest/configuration/tooltip.html
        callbacks: {
          label: function(t) {
            let a = t.dataset.label || "";
            return t.parsed.y !== null && (a += `: ${ce(`${t.parsed.y}`, {
              type: "number",
              dps: e.dps,
              meta: e.displayAsPercentage ? void 0 : e.metric.meta
            })}`, e.displayAsPercentage && (a += "%")), a;
          },
          title: (t) => i(t, e.granularity || "day", s)
        }
      },
      datalabels: {
        align: "top",
        display: e.showLabels ? "auto" : false,
        formatter: (t) => {
          let a = t ? ce(t, {
            type: "number",
            dps: e.dps,
            meta: e.displayAsPercentage ? void 0 : i$1.metric.meta
          }) : null;
          return e.displayAsPercentage && (a += "%"), a;
        }
      }
    }
  }), [e, s]);
  return /* @__PURE__ */ j$1.jsx(Wg, { ...e, className: "overflow-y-hidden", children: /* @__PURE__ */ j$1.jsx(Bd, { height: "100%", options: u, data: c }) });
};

export { O };
//# sourceMappingURL=index-BKNn0bB9-DCRB_cuI-Cdxm0dsa.js.map
//# sourceMappingURL=index-BKNn0bB9-DCRB_cuI-Cdxm0dsa.js.map
