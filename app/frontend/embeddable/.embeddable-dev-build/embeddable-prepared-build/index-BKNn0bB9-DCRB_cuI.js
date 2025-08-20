import { j as j$1 } from "./jsx-runtime-CjQXaSqQ-CjMA1-fF.js";
import { M as Mt, Y as Yi, X as Xi, a as Me, S as St, P as Ph, I as Ih, w as wh, x as xh, F as Fd, L as Le, $ as $d, j as jd, B as Bd } from "./common-Badpcggq-Batnw2Ed.js";
import "./chartjs-adapter-date-fns.esm-vRFmo1LD-Cpw3-dRH.js";
import { r as reactExports } from "./embeddable-entry-point-DfzYO-OW.js";
import { j } from "./useTimeseries-CKhM5zgf-Dd4vgjj-.js";
import { c as ce } from "./format-TjzP8gQX-Cs7Vwno2.js";
import { i } from "./formatDateTooltips-B_XOEw3--6C5OZZFh.js";
import { q } from "./getStackedChartData-DmWnIJXP-Ji_he_TH.js";
import { W as Wg } from "./Container-mop-J7T8-BpqPaGKG.js";
import { u as useTheme } from "./index.esm-CVE60fla.js";
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
export {
  O
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgtQktObjBiQjktRENSQl9jdUkuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaHJpc3RvcGhlcmNhcmxzb24vZmx1aWQvZHJvcGxldC1lbWJlZGRhYmxlL2FwcC9mcm9udGVuZC9lbWJlZGRhYmxlL25vZGVfbW9kdWxlcy9AZW1iZWRkYWJsZS5jb20vdmFuaWxsYS1jb21wb25lbnRzL2Rpc3QvaW5kZXgtQktObjBiQjkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaiBhcyBwIH0gZnJvbSBcIi4vanN4LXJ1bnRpbWUtQ2pRWGFTcVEuanNcIjtcbmltcG9ydCB7IEMgYXMgZiwgYSBhcyBnLCBMIGFzIHksIFAgYXMgaCwgYiwgcCBhcyB4LCBjIGFzIEEsIGQgYXMgVCwgaSBhcyBDLCBlIGFzIEwsIFQgYXMgUywgcyBhcyBrLCBnIGFzIFAsIGggYXMgRCB9IGZyb20gXCIuL2NvbW1vbi1CYWRwY2dncS5qc1wiO1xuaW1wb3J0IFwiLi9jaGFydGpzLWFkYXB0ZXItZGF0ZS1mbnMuZXNtLXZSRm1vMUxELmpzXCI7XG5pbXBvcnQgeyB1c2VNZW1vIGFzIG0gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHUgYXMgTSB9IGZyb20gXCIuL3VzZVRpbWVzZXJpZXMtQ0toTTV6Z2YuanNcIjtcbmltcG9ydCB7IGYgYXMgciB9IGZyb20gXCIuL2Zvcm1hdC1UanpQOGdRWC5qc1wiO1xuaW1wb3J0IHsgZiBhcyB2IH0gZnJvbSBcIi4vZm9ybWF0RGF0ZVRvb2x0aXBzLUJfWE9FdzMtLmpzXCI7XG5pbXBvcnQgeyBnIGFzIGogfSBmcm9tIFwiLi9nZXRTdGFja2VkQ2hhcnREYXRhLURtV25JSlhQLmpzXCI7XG5pbXBvcnQgeyBDIGFzIHcgfSBmcm9tIFwiLi9Db250YWluZXItbW9wLUo3VDguanNcIjtcbmltcG9ydCB7IHVzZVRoZW1lIGFzIFIgfSBmcm9tIFwiQGVtYmVkZGFibGUuY29tL3JlYWN0XCI7XG5mLnJlZ2lzdGVyKFxuICBnLFxuICB5LFxuICBoLFxuICBiLFxuICB4LFxuICBBLFxuICBULFxuICBDLFxuICBMLFxuICBTXG4pO1xuY29uc3QgTyA9IChpKSA9PiB7XG4gIGNvbnN0IHsgaXNNdWx0aURpbWVuc2lvbkxpbmU6IG4gPSAhMSB9ID0gaSwgcyA9IFIoKTtcbiAgayhzLCBcInBpZVwiKTtcbiAgY29uc3QgZSA9IHtcbiAgICAuLi5pLFxuICAgIHRoZW1lOiBzXG4gIH0sIHsgZmlsbEdhcHM6IGwgfSA9IE0oZSwgXCJkZXNjXCIpLCBjID0gbSgoKSA9PiB7XG4gICAgdmFyIG8sIGQ7XG4gICAgY29uc3QgdCA9IChkID0gKG8gPSBlID09IG51bGwgPyB2b2lkIDAgOiBlLnJlc3VsdHMpID09IG51bGwgPyB2b2lkIDAgOiBvLmRhdGEpID09IG51bGwgPyB2b2lkIDAgOiBkLnJlZHVjZShsLCBbXSksIGEgPSB7XG4gICAgICBmaWxsOiAhbixcbiAgICAgIGN1YmljSW50ZXJwb2xhdGlvbk1vZGU6IHMuY2hhcnRzLnN0YWNrZWRBcmVhLmN1YmljSW50ZXJwb2xhdGlvbk1vZGUsXG4gICAgICBwb2ludFJhZGl1czogMCxcbiAgICAgIHRlbnNpb246IHMuY2hhcnRzLnN0YWNrZWRBcmVhLmxpbmVUZW5zaW9uLFxuICAgICAgcG9pbnRIb3ZlclJhZGl1czogM1xuICAgIH07XG4gICAgcmV0dXJuIGooXG4gICAgICB7XG4gICAgICAgIC4uLmUsXG4gICAgICAgIHJlc3VsdHM6IHtcbiAgICAgICAgICAuLi5lLnJlc3VsdHMsXG4gICAgICAgICAgZGF0YTogdFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgYSxcbiAgICAgIHsgY2hhcnRUeXBlOiBcInN0YWNrZWRBcmVhQ2hhcnRcIiB9XG4gICAgKTtcbiAgfSwgW2UsIGxdKSwgdSA9IG0oKCkgPT4gKHtcbiAgICByZXNwb25zaXZlOiAhMCxcbiAgICBtYWludGFpbkFzcGVjdFJhdGlvOiAhMSxcbiAgICBpbnRlcmFjdGlvbjoge1xuICAgICAgbW9kZTogXCJpbmRleFwiLFxuICAgICAgaW50ZXJzZWN0OiAhMVxuICAgIH0sXG4gICAgbGF5b3V0OiB7XG4gICAgICBwYWRkaW5nOiB7XG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICB0b3A6IGUuc2hvd0xhYmVscyA/IDIwIDogMCxcbiAgICAgICAgLy8gQWRkZWQgc28gdGhlIGhpZ2hlc3QgZGF0YSBsYWJlbHMgZml0c1xuICAgICAgICBib3R0b206IDBcbiAgICAgIH1cbiAgICB9LFxuICAgIHNjYWxlczoge1xuICAgICAgeToge1xuICAgICAgICBzdGFja2VkOiAhbixcbiAgICAgICAgbWluOiBlLnlBeGlzTWluLFxuICAgICAgICBtYXg6IGUuZGlzcGxheUFzUGVyY2VudGFnZSA/IDEwMCA6IHZvaWQgMCxcbiAgICAgICAgZ3JhY2U6IFwiMCVcIixcbiAgICAgICAgLy8gQWRkIHBlcmNlbnQgdG8gYWRkIG51bWJlcnMgb24gdGhlIHktYXhpcyBhYm92ZSBhbmQgYmVsb3cgdGhlIG1heCBhbmQgbWluIHZhbHVlc1xuICAgICAgICBncmlkOiB7XG4gICAgICAgICAgZGlzcGxheTogITFcbiAgICAgICAgfSxcbiAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgcmV0dXJuIGUuZGlzcGxheUFzUGVyY2VudGFnZSA/IGAke3R9JWAgOiByKHQudG9TdHJpbmcoKSwgeyB0eXBlOiBcIm51bWJlclwiIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICBkaXNwbGF5OiAhIWUueUF4aXNUaXRsZSxcbiAgICAgICAgICB0ZXh0OiBlLnlBeGlzVGl0bGVcbiAgICAgICAgfSxcbiAgICAgICAgYWZ0ZXJEYXRhTGltaXRzOiBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgUCh0LCBlLnJlc3VsdHMsIFtlLm1ldHJpY10sIGUuZHBzKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHg6IHtcbiAgICAgICAgZ3JpZDoge1xuICAgICAgICAgIGRpc3BsYXk6ICExXG4gICAgICAgIH0sXG4gICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgZGlzcGxheTogISFlLnhBeGlzVGl0bGUsXG4gICAgICAgICAgdGV4dDogZS54QXhpc1RpdGxlXG4gICAgICAgIH0sXG4gICAgICAgIHR5cGU6IFwidGltZVwiLFxuICAgICAgICB0aW1lOiB7XG4gICAgICAgICAgcm91bmQ6IGUuZ3JhbnVsYXJpdHksXG4gICAgICAgICAgZGlzcGxheUZvcm1hdHM6IHMuZGF0ZUZvcm1hdHMsXG4gICAgICAgICAgdW5pdDogZS5ncmFudWxhcml0eVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBhbmltYXRpb246IHtcbiAgICAgIGR1cmF0aW9uOiA0MDAsXG4gICAgICBlYXNpbmc6IFwibGluZWFyXCJcbiAgICB9LFxuICAgIHBsdWdpbnM6IHtcbiAgICAgIGxlZ2VuZDoge1xuICAgICAgICBkaXNwbGF5OiBlLnNob3dMZWdlbmQsXG4gICAgICAgIHBvc2l0aW9uOiBcImJvdHRvbVwiLFxuICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICB1c2VQb2ludFN0eWxlOiAhMCxcbiAgICAgICAgICBib3hIZWlnaHQ6IDhcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgLy9odHRwczovL3d3dy5jaGFydGpzLm9yZy9kb2NzL2xhdGVzdC9jb25maWd1cmF0aW9uL3Rvb2x0aXAuaHRtbFxuICAgICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgICBsYWJlbDogZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgbGV0IGEgPSB0LmRhdGFzZXQubGFiZWwgfHwgXCJcIjtcbiAgICAgICAgICAgIHJldHVybiB0LnBhcnNlZC55ICE9PSBudWxsICYmIChhICs9IGA6ICR7cihgJHt0LnBhcnNlZC55fWAsIHtcbiAgICAgICAgICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgICAgICAgICAgZHBzOiBlLmRwcyxcbiAgICAgICAgICAgICAgbWV0YTogZS5kaXNwbGF5QXNQZXJjZW50YWdlID8gdm9pZCAwIDogZS5tZXRyaWMubWV0YVxuICAgICAgICAgICAgfSl9YCwgZS5kaXNwbGF5QXNQZXJjZW50YWdlICYmIChhICs9IFwiJVwiKSksIGE7XG4gICAgICAgICAgfSxcbiAgICAgICAgICB0aXRsZTogKHQpID0+IHYodCwgZS5ncmFudWxhcml0eSB8fCBcImRheVwiLCBzKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZGF0YWxhYmVsczoge1xuICAgICAgICBhbGlnbjogXCJ0b3BcIixcbiAgICAgICAgZGlzcGxheTogZS5zaG93TGFiZWxzID8gXCJhdXRvXCIgOiAhMSxcbiAgICAgICAgZm9ybWF0dGVyOiAodCkgPT4ge1xuICAgICAgICAgIGxldCBhID0gdCA/IHIodCwge1xuICAgICAgICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgICAgICAgIGRwczogZS5kcHMsXG4gICAgICAgICAgICBtZXRhOiBlLmRpc3BsYXlBc1BlcmNlbnRhZ2UgPyB2b2lkIDAgOiBpLm1ldHJpYy5tZXRhXG4gICAgICAgICAgfSkgOiBudWxsO1xuICAgICAgICAgIHJldHVybiBlLmRpc3BsYXlBc1BlcmNlbnRhZ2UgJiYgKGEgKz0gXCIlXCIpLCBhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KSwgW2UsIHNdKTtcbiAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBwLmpzeCh3LCB7IC4uLmUsIGNsYXNzTmFtZTogXCJvdmVyZmxvdy15LWhpZGRlblwiLCBjaGlsZHJlbjogLyogQF9fUFVSRV9fICovIHAuanN4KEQsIHsgaGVpZ2h0OiBcIjEwMCVcIiwgb3B0aW9uczogdSwgZGF0YTogYyB9KSB9KTtcbn07XG5leHBvcnQge1xuICBPIGFzIENcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC1CS05uMGJCOS5qcy5tYXBcbiJdLCJuYW1lcyI6WyJmIiwiZyIsInkiLCJoIiwiYiIsIngiLCJBIiwiVCIsIkMiLCJMIiwiUyIsImkiLCJSIiwiayIsIk0iLCJtIiwiaiIsInIiLCJQIiwidiIsInAiLCJ3IiwiRCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQVVBQSxHQUFFO0FBQUEsRUFDQUM7QUFBQUEsRUFDQUM7QUFBQUEsRUFDQUM7QUFBQUEsRUFDQUM7QUFBQUEsRUFDQUM7QUFBQUEsRUFDQUM7QUFBQUEsRUFDQUM7QUFBQUEsRUFDQUM7QUFBQUEsRUFDQUM7QUFBQUEsRUFDQUM7QUFDRjtBQUNLLE1BQUMsSUFBSSxDQUFDQyxRQUFNO0FBQ2YsUUFBTSxFQUFFLHNCQUFzQixJQUFJLE1BQUUsSUFBS0EsS0FBRyxJQUFJQyxTQUFDO0FBQ2pEQyxLQUFFLEdBQUcsS0FBSztBQUNWLFFBQU0sSUFBSTtBQUFBLElBQ1IsR0FBR0Y7QUFBQUEsSUFDSCxPQUFPO0FBQUEsRUFDWCxHQUFLLEVBQUUsVUFBVSxFQUFDLElBQUtHLEVBQUUsR0FBRyxNQUFNLEdBQUcsSUFBSUMsYUFBQUEsUUFBRSxNQUFNO0FBQzdDLFFBQUksR0FBRztBQUNQLFVBQU0sS0FBSyxLQUFLLElBQUksS0FBSyxPQUFPLFNBQVMsRUFBRSxZQUFZLE9BQU8sU0FBUyxFQUFFLFNBQVMsT0FBTyxTQUFTLEVBQUUsT0FBTyxHQUFHLEVBQUUsR0FBRyxJQUFJO0FBQUEsTUFDckgsTUFBTSxDQUFDO0FBQUEsTUFDUCx3QkFBd0IsRUFBRSxPQUFPLFlBQVk7QUFBQSxNQUM3QyxhQUFhO0FBQUEsTUFDYixTQUFTLEVBQUUsT0FBTyxZQUFZO0FBQUEsTUFDOUIsa0JBQWtCO0FBQUEsSUFDeEI7QUFDSSxXQUFPQztBQUFBQSxNQUNMO0FBQUEsUUFDRSxHQUFHO0FBQUEsUUFDSCxTQUFTO0FBQUEsVUFDUCxHQUFHLEVBQUU7QUFBQSxVQUNMLE1BQU07QUFBQSxRQUNoQjtBQUFBLE1BQ0E7QUFBQSxNQUNNO0FBQUEsTUFDQSxFQUFFLFdBQVcsbUJBQWtCO0FBQUEsSUFDckM7QUFBQSxFQUNFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUlELGFBQUFBLFFBQUUsT0FBTztBQUFBLElBQ3ZCLFlBQVk7QUFBQSxJQUNaLHFCQUFxQjtBQUFBLElBQ3JCLGFBQWE7QUFBQSxNQUNYLE1BQU07QUFBQSxNQUNOLFdBQVc7QUFBQSxJQUNqQjtBQUFBLElBQ0ksUUFBUTtBQUFBLE1BQ04sU0FBUztBQUFBLFFBQ1AsTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFFBQ1AsS0FBSyxFQUFFLGFBQWEsS0FBSztBQUFBO0FBQUEsUUFFekIsUUFBUTtBQUFBLE1BQ2hCO0FBQUEsSUFDQTtBQUFBLElBQ0ksUUFBUTtBQUFBLE1BQ04sR0FBRztBQUFBLFFBQ0QsU0FBUyxDQUFDO0FBQUEsUUFDVixLQUFLLEVBQUU7QUFBQSxRQUNQLEtBQUssRUFBRSxzQkFBc0IsTUFBTTtBQUFBLFFBQ25DLE9BQU87QUFBQTtBQUFBLFFBRVAsTUFBTTtBQUFBLFVBQ0osU0FBUztBQUFBLFFBQ25CO0FBQUEsUUFDUSxPQUFPO0FBQUEsVUFDTCxVQUFVLFNBQVMsR0FBRztBQUNwQixtQkFBTyxFQUFFLHNCQUFzQixHQUFHLENBQUMsTUFBTUUsR0FBRSxFQUFFLFNBQVEsR0FBSSxFQUFFLE1BQU0sU0FBUSxDQUFFO0FBQUEsVUFDN0U7QUFBQSxRQUNWO0FBQUEsUUFDUSxPQUFPO0FBQUEsVUFDTCxTQUFTLENBQUMsQ0FBQyxFQUFFO0FBQUEsVUFDYixNQUFNLEVBQUU7QUFBQSxRQUNsQjtBQUFBLFFBQ1EsaUJBQWlCLFNBQVMsR0FBRztBQUMzQkMsYUFBRSxHQUFHLEVBQUUsU0FBUyxDQUFDLEVBQUUsTUFBTSxHQUFHLEVBQUUsR0FBRztBQUFBLFFBQ25DO0FBQUEsTUFDUjtBQUFBLE1BQ00sR0FBRztBQUFBLFFBQ0QsTUFBTTtBQUFBLFVBQ0osU0FBUztBQUFBLFFBQ25CO0FBQUEsUUFDUSxPQUFPO0FBQUEsVUFDTCxTQUFTLENBQUMsQ0FBQyxFQUFFO0FBQUEsVUFDYixNQUFNLEVBQUU7QUFBQSxRQUNsQjtBQUFBLFFBQ1EsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFVBQ0osT0FBTyxFQUFFO0FBQUEsVUFDVCxnQkFBZ0IsRUFBRTtBQUFBLFVBQ2xCLE1BQU0sRUFBRTtBQUFBLFFBQ2xCO0FBQUEsTUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNJLFdBQVc7QUFBQSxNQUNULFVBQVU7QUFBQSxNQUNWLFFBQVE7QUFBQSxJQUNkO0FBQUEsSUFDSSxTQUFTO0FBQUEsTUFDUCxRQUFRO0FBQUEsUUFDTixTQUFTLEVBQUU7QUFBQSxRQUNYLFVBQVU7QUFBQSxRQUNWLFFBQVE7QUFBQSxVQUNOLGVBQWU7QUFBQSxVQUNmLFdBQVc7QUFBQSxRQUNyQjtBQUFBLE1BQ0E7QUFBQSxNQUNNLFNBQVM7QUFBQTtBQUFBLFFBRVAsV0FBVztBQUFBLFVBQ1QsT0FBTyxTQUFTLEdBQUc7QUFDakIsZ0JBQUksSUFBSSxFQUFFLFFBQVEsU0FBUztBQUMzQixtQkFBTyxFQUFFLE9BQU8sTUFBTSxTQUFTLEtBQUssS0FBS0QsR0FBRSxHQUFHLEVBQUUsT0FBTyxDQUFDLElBQUk7QUFBQSxjQUMxRCxNQUFNO0FBQUEsY0FDTixLQUFLLEVBQUU7QUFBQSxjQUNQLE1BQU0sRUFBRSxzQkFBc0IsU0FBUyxFQUFFLE9BQU87QUFBQSxZQUM5RCxDQUFhLENBQUMsSUFBSSxFQUFFLHdCQUF3QixLQUFLLE9BQU87QUFBQSxVQUM5QztBQUFBLFVBQ0EsT0FBTyxDQUFDLE1BQU1FLEVBQUUsR0FBRyxFQUFFLGVBQWUsT0FBTyxDQUFDO0FBQUEsUUFDdEQ7QUFBQSxNQUNBO0FBQUEsTUFDTSxZQUFZO0FBQUEsUUFDVixPQUFPO0FBQUEsUUFDUCxTQUFTLEVBQUUsYUFBYSxTQUFTO0FBQUEsUUFDakMsV0FBVyxDQUFDLE1BQU07QUFDaEIsY0FBSSxJQUFJLElBQUlGLEdBQUUsR0FBRztBQUFBLFlBQ2YsTUFBTTtBQUFBLFlBQ04sS0FBSyxFQUFFO0FBQUEsWUFDUCxNQUFNLEVBQUUsc0JBQXNCLFNBQVNOLElBQUUsT0FBTztBQUFBLFVBQzVELENBQVcsSUFBSTtBQUNMLGlCQUFPLEVBQUUsd0JBQXdCLEtBQUssTUFBTTtBQUFBLFFBQzlDO0FBQUEsTUFDUjtBQUFBLElBQ0E7QUFBQSxFQUNBLElBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNWLFNBQXVCUyxvQkFBRSxJQUFJQyxJQUFHLEVBQUUsR0FBRyxHQUFHLFdBQVcscUJBQXFCLFVBQTBCRCxvQkFBRSxJQUFJRSxJQUFHLEVBQUUsUUFBUSxRQUFRLFNBQVMsR0FBRyxNQUFNLEVBQUMsQ0FBRSxHQUFHO0FBQ3ZKOyIsInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswXX0=
