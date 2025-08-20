import { v } from "./Spinner-BeNoTciJ-DsMN3-m0.js";
import { d as defineComponent, u as useTheme } from "./index.esm-CVE60fla.js";
import { j as j$1 } from "./jsx-runtime-CjQXaSqQ-CjMA1-fF.js";
import { M as Mt, Y as Yi, X as Xi, a as Me, S as St, P as Ph, I as Ih, w as wh, x as xh, F as Fd, $ as $d, j as jd, B as Bd } from "./common-Badpcggq-Batnw2Ed.js";
import "./chartjs-adapter-date-fns.esm-vRFmo1LD-Cpw3-dRH.js";
import { r as reactExports } from "./embeddable-entry-point-DfzYO-OW.js";
import { j } from "./useTimeseries-CKhM5zgf-Dd4vgjj-.js";
import { n as ne, c as ce } from "./format-TjzP8gQX-Cs7Vwno2.js";
import { i } from "./formatDateTooltips-B_XOEw3--6C5OZZFh.js";
import { n } from "./hexToRgb-04GwXQzV-CZRIg1xZ.js";
import { W as Wg } from "./Container-mop-J7T8-BpqPaGKG.js";
Mt.register(
  Yi,
  Xi,
  Me,
  St,
  Ph,
  Ih,
  wh,
  xh,
  Fd
);
const X = (a) => {
  const { results: d, title: m } = a, { fillGaps: u } = j(a, "desc"), l = useTheme();
  $d(l, "line");
  const e = {
    ...a,
    theme: l
  }, C = reactExports.useMemo(() => {
    var g;
    const { results: t, metrics: i2, applyFill: r, theme: s } = e, n$1 = (g = t == null ? void 0 : t.data) == null ? void 0 : g.reduce(u, []);
    let o = s.charts.colors;
    return s.charts.line.colors && (o = s.charts.line.colors), {
      datasets: (i2 == null ? void 0 : i2.map((y, c) => ({
        label: y.title,
        data: (n$1 == null ? void 0 : n$1.map((h) => {
          var b;
          return {
            y: parseFloat(h[y.name] || "0"),
            x: ne(h[((b = a.xAxis) == null ? void 0 : b.name) || ""])
          };
        })) || [],
        backgroundColor: r ? n(o[c % o.length], 0.2) : o[c % o.length],
        borderColor: o[c % o.length],
        pointRadius: 0,
        tension: s.charts.line.lineTension,
        pointHoverRadius: 3,
        fill: r,
        cubicInterpolationMode: s.charts.bar.cubicInterpolationMode
      }))) || []
    };
  }, [e, u]), A = reactExports.useMemo(
    () => ({
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
          min: e.yAxisMin,
          grace: "0%",
          // Add percent to add numbers on the y-axis above and below the max and min values
          grid: {
            display: false
          },
          title: {
            display: !!e.yAxisTitle,
            text: e.yAxisTitle
          },
          callback: function(t) {
            return ce(t.toString(), { type: "number" });
          },
          afterDataLimits: function(t) {
            jd(
              t,
              e.results,
              [...e.metrics],
              e.dps
            );
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
            displayFormats: l.dateFormats,
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
        datalabels: {
          align: "top",
          display: e.showLabels ? "auto" : false,
          backgroundColor: l.charts.line.labels.backgroundColor,
          borderRadius: l.charts.line.labels.borderRadius,
          color: l.charts.line.labels.color,
          font: {
            size: l.charts.line.labels.font.size,
            weight: l.charts.line.labels.font.weight
          },
          formatter: (t, i2) => {
            const r = i2.datasetIndex, s = e.metrics[r];
            return t ? ce(t.y, {
              type: "number",
              dps: e.dps,
              meta: s == null ? void 0 : s.meta
            }) : null;
          }
        },
        tooltip: {
          //https://www.chartjs.org/docs/latest/configuration/tooltip.html
          callbacks: {
            label: function(t) {
              const i2 = t.datasetIndex, r = e.metrics[i2];
              let s = t.dataset.label || "";
              return t.parsed.y !== null && (s += `: ${ce(`${t.parsed.y}`, {
                type: "number",
                dps: e.dps,
                meta: r == null ? void 0 : r.meta
              })}`), s;
            },
            title: (t) => i(t, e.granularity, l)
          }
        }
      }
    }),
    [e, l.dateFormats]
  );
  return /* @__PURE__ */ j$1.jsx(Wg, { ...e, className: "overflow-y-hidden", children: /* @__PURE__ */ j$1.jsx(Bd, { height: "100%", options: A, data: C }) });
}, $ = {
  name: "LineChart",
  label: "Line chart (time-series)",
  classNames: ["inside-card"],
  category: "Charts: time-series",
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
        supportedTypes: ["time"],
        hideGranularity: true
      },
      category: "Chart data"
    },
    {
      name: "metrics",
      type: "measure",
      array: true,
      label: "Metrics",
      config: {
        dataset: "ds"
      },
      category: "Chart data"
    },
    {
      name: "granularity",
      type: "granularity",
      label: "Granularity",
      defaultValue: "day",
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
      name: "showLabels",
      type: "boolean",
      label: "Show Labels",
      category: "Chart settings",
      defaultValue: false
    },
    {
      name: "applyFill",
      type: "boolean",
      label: "Color fill space under line",
      category: "Chart settings",
      defaultValue: false
    },
    {
      name: "yAxisMin",
      type: "number",
      label: "Y-Axis minimum value",
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
      name: "limit",
      type: "number",
      label: "Limit results",
      defaultValue: 100,
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
}, ae = defineComponent(X, $, {
  props: (a) => {
    var m;
    const d = [];
    return d.push({
      property: a.xAxis,
      direction: "desc"
    }), {
      ...a,
      results: v({
        from: a.ds,
        limit: a.limit || 500,
        orderBy: d,
        select: [
          {
            dimension: (m = a.xAxis) == null ? void 0 : m.name,
            granularity: a.granularity
          },
          a.metrics
        ]
      })
    };
  }
});
export {
  ae as default,
  $ as meta
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGluZUNoYXJ0LURRTG9CSDlDLmpzIiwic291cmNlcyI6WyIvVXNlcnMvY2hyaXN0b3BoZXJjYXJsc29uL2ZsdWlkL2Ryb3BsZXQtZW1iZWRkYWJsZS9hcHAvZnJvbnRlbmQvZW1iZWRkYWJsZS9ub2RlX21vZHVsZXMvQGVtYmVkZGFibGUuY29tL3ZhbmlsbGEtY29tcG9uZW50cy9kaXN0L0xpbmVDaGFydC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsIGFzIFQgfSBmcm9tIFwiLi9pbmRleC5lc20tSkFoX0sxVkcuanNcIjtcbmltcG9ydCB7IHVzZVRoZW1lIGFzIHcsIGRlZmluZUNvbXBvbmVudCBhcyBMIH0gZnJvbSBcIkBlbWJlZGRhYmxlLmNvbS9yZWFjdFwiO1xuaW1wb3J0IHsgaiBhcyBmIH0gZnJvbSBcIi4vanN4LXJ1bnRpbWUtQ2pRWGFTcVEuanNcIjtcbmltcG9ydCB7IEMgYXMgUywgYSBhcyBWLCBMIGFzIEQsIFAsIGIgYXMgRiwgcCBhcyBSLCBjIGFzIEksIGQgYXMgTSwgaSBhcyBrLCBlIGFzIHYsIHMgYXMgRSwgZyBhcyBHLCBoIGFzIE4gfSBmcm9tIFwiLi9jb21tb24tQmFkcGNnZ3EuanNcIjtcbmltcG9ydCBcIi4vY2hhcnRqcy1hZGFwdGVyLWRhdGUtZm5zLmVzbS12UkZtbzFMRC5qc1wiO1xuaW1wb3J0IHsgdXNlTWVtbyBhcyB4IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1IGFzIF8gfSBmcm9tIFwiLi91c2VUaW1lc2VyaWVzLUNLaE01emdmLmpzXCI7XG5pbXBvcnQgeyBwIGFzIHosIGYgYXMgcCB9IGZyb20gXCIuL2Zvcm1hdC1UanpQOGdRWC5qc1wiO1xuaW1wb3J0IHsgZiBhcyBZIH0gZnJvbSBcIi4vZm9ybWF0RGF0ZVRvb2x0aXBzLUJfWE9FdzMtLmpzXCI7XG5pbXBvcnQgeyBoIGFzIGogfSBmcm9tIFwiLi9oZXhUb1JnYi0wNEd3WFF6Vi5qc1wiO1xuaW1wb3J0IHsgQyBhcyBIIH0gZnJvbSBcIi4vQ29udGFpbmVyLW1vcC1KN1Q4LmpzXCI7XG5TLnJlZ2lzdGVyKFxuICBWLFxuICBELFxuICBQLFxuICBGLFxuICBSLFxuICBJLFxuICBNLFxuICBrLFxuICB2XG4pO1xuY29uc3QgWCA9IChhKSA9PiB7XG4gIGNvbnN0IHsgcmVzdWx0czogZCwgdGl0bGU6IG0gfSA9IGEsIHsgZmlsbEdhcHM6IHUgfSA9IF8oYSwgXCJkZXNjXCIpLCBsID0gdygpO1xuICBFKGwsIFwibGluZVwiKTtcbiAgY29uc3QgZSA9IHtcbiAgICAuLi5hLFxuICAgIHRoZW1lOiBsXG4gIH0sIEMgPSB4KCgpID0+IHtcbiAgICB2YXIgZztcbiAgICBjb25zdCB7IHJlc3VsdHM6IHQsIG1ldHJpY3M6IGksIGFwcGx5RmlsbDogciwgdGhlbWU6IHMgfSA9IGUsIG4gPSAoZyA9IHQgPT0gbnVsbCA/IHZvaWQgMCA6IHQuZGF0YSkgPT0gbnVsbCA/IHZvaWQgMCA6IGcucmVkdWNlKHUsIFtdKTtcbiAgICBsZXQgbyA9IHMuY2hhcnRzLmNvbG9ycztcbiAgICByZXR1cm4gcy5jaGFydHMubGluZS5jb2xvcnMgJiYgKG8gPSBzLmNoYXJ0cy5saW5lLmNvbG9ycyksIHtcbiAgICAgIGRhdGFzZXRzOiAoaSA9PSBudWxsID8gdm9pZCAwIDogaS5tYXAoKHksIGMpID0+ICh7XG4gICAgICAgIGxhYmVsOiB5LnRpdGxlLFxuICAgICAgICBkYXRhOiAobiA9PSBudWxsID8gdm9pZCAwIDogbi5tYXAoKGgpID0+IHtcbiAgICAgICAgICB2YXIgYjtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeTogcGFyc2VGbG9hdChoW3kubmFtZV0gfHwgXCIwXCIpLFxuICAgICAgICAgICAgeDogeihoWygoYiA9IGEueEF4aXMpID09IG51bGwgPyB2b2lkIDAgOiBiLm5hbWUpIHx8IFwiXCJdKVxuICAgICAgICAgIH07XG4gICAgICAgIH0pKSB8fCBbXSxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiByID8gaihvW2MgJSBvLmxlbmd0aF0sIDAuMikgOiBvW2MgJSBvLmxlbmd0aF0sXG4gICAgICAgIGJvcmRlckNvbG9yOiBvW2MgJSBvLmxlbmd0aF0sXG4gICAgICAgIHBvaW50UmFkaXVzOiAwLFxuICAgICAgICB0ZW5zaW9uOiBzLmNoYXJ0cy5saW5lLmxpbmVUZW5zaW9uLFxuICAgICAgICBwb2ludEhvdmVyUmFkaXVzOiAzLFxuICAgICAgICBmaWxsOiByLFxuICAgICAgICBjdWJpY0ludGVycG9sYXRpb25Nb2RlOiBzLmNoYXJ0cy5iYXIuY3ViaWNJbnRlcnBvbGF0aW9uTW9kZVxuICAgICAgfSkpKSB8fCBbXVxuICAgIH07XG4gIH0sIFtlLCB1XSksIEEgPSB4KFxuICAgICgpID0+ICh7XG4gICAgICByZXNwb25zaXZlOiAhMCxcbiAgICAgIG1haW50YWluQXNwZWN0UmF0aW86ICExLFxuICAgICAgaW50ZXJhY3Rpb246IHtcbiAgICAgICAgbW9kZTogXCJpbmRleFwiLFxuICAgICAgICBpbnRlcnNlY3Q6ICExXG4gICAgICB9LFxuICAgICAgbGF5b3V0OiB7XG4gICAgICAgIHBhZGRpbmc6IHtcbiAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICAgIHRvcDogZS5zaG93TGFiZWxzID8gMjAgOiAwLFxuICAgICAgICAgIC8vIEFkZGVkIHNvIHRoZSBoaWdoZXN0IGRhdGEgbGFiZWxzIGZpdHNcbiAgICAgICAgICBib3R0b206IDBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHNjYWxlczoge1xuICAgICAgICB5OiB7XG4gICAgICAgICAgbWluOiBlLnlBeGlzTWluLFxuICAgICAgICAgIGdyYWNlOiBcIjAlXCIsXG4gICAgICAgICAgLy8gQWRkIHBlcmNlbnQgdG8gYWRkIG51bWJlcnMgb24gdGhlIHktYXhpcyBhYm92ZSBhbmQgYmVsb3cgdGhlIG1heCBhbmQgbWluIHZhbHVlc1xuICAgICAgICAgIGdyaWQ6IHtcbiAgICAgICAgICAgIGRpc3BsYXk6ICExXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgZGlzcGxheTogISFlLnlBeGlzVGl0bGUsXG4gICAgICAgICAgICB0ZXh0OiBlLnlBeGlzVGl0bGVcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICByZXR1cm4gcCh0LnRvU3RyaW5nKCksIHsgdHlwZTogXCJudW1iZXJcIiB9KTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFmdGVyRGF0YUxpbWl0czogZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgRyhcbiAgICAgICAgICAgICAgdCxcbiAgICAgICAgICAgICAgZS5yZXN1bHRzLFxuICAgICAgICAgICAgICBbLi4uZS5tZXRyaWNzXSxcbiAgICAgICAgICAgICAgZS5kcHNcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB4OiB7XG4gICAgICAgICAgZ3JpZDoge1xuICAgICAgICAgICAgZGlzcGxheTogITFcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICBkaXNwbGF5OiAhIWUueEF4aXNUaXRsZSxcbiAgICAgICAgICAgIHRleHQ6IGUueEF4aXNUaXRsZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgdHlwZTogXCJ0aW1lXCIsXG4gICAgICAgICAgdGltZToge1xuICAgICAgICAgICAgcm91bmQ6IGUuZ3JhbnVsYXJpdHksXG4gICAgICAgICAgICBkaXNwbGF5Rm9ybWF0czogbC5kYXRlRm9ybWF0cyxcbiAgICAgICAgICAgIHVuaXQ6IGUuZ3JhbnVsYXJpdHlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBhbmltYXRpb246IHtcbiAgICAgICAgZHVyYXRpb246IDQwMCxcbiAgICAgICAgZWFzaW5nOiBcImxpbmVhclwiXG4gICAgICB9LFxuICAgICAgcGx1Z2luczoge1xuICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICBkaXNwbGF5OiBlLnNob3dMZWdlbmQsXG4gICAgICAgICAgcG9zaXRpb246IFwiYm90dG9tXCIsXG4gICAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICB1c2VQb2ludFN0eWxlOiAhMCxcbiAgICAgICAgICAgIGJveEhlaWdodDogOFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZGF0YWxhYmVsczoge1xuICAgICAgICAgIGFsaWduOiBcInRvcFwiLFxuICAgICAgICAgIGRpc3BsYXk6IGUuc2hvd0xhYmVscyA/IFwiYXV0b1wiIDogITEsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBsLmNoYXJ0cy5saW5lLmxhYmVscy5iYWNrZ3JvdW5kQ29sb3IsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBsLmNoYXJ0cy5saW5lLmxhYmVscy5ib3JkZXJSYWRpdXMsXG4gICAgICAgICAgY29sb3I6IGwuY2hhcnRzLmxpbmUubGFiZWxzLmNvbG9yLFxuICAgICAgICAgIGZvbnQ6IHtcbiAgICAgICAgICAgIHNpemU6IGwuY2hhcnRzLmxpbmUubGFiZWxzLmZvbnQuc2l6ZSxcbiAgICAgICAgICAgIHdlaWdodDogbC5jaGFydHMubGluZS5sYWJlbHMuZm9udC53ZWlnaHRcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZvcm1hdHRlcjogKHQsIGkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHIgPSBpLmRhdGFzZXRJbmRleCwgcyA9IGUubWV0cmljc1tyXTtcbiAgICAgICAgICAgIHJldHVybiB0ID8gcCh0LnksIHtcbiAgICAgICAgICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgICAgICAgICAgZHBzOiBlLmRwcyxcbiAgICAgICAgICAgICAgbWV0YTogcyA9PSBudWxsID8gdm9pZCAwIDogcy5tZXRhXG4gICAgICAgICAgICB9KSA6IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgLy9odHRwczovL3d3dy5jaGFydGpzLm9yZy9kb2NzL2xhdGVzdC9jb25maWd1cmF0aW9uL3Rvb2x0aXAuaHRtbFxuICAgICAgICAgIGNhbGxiYWNrczoge1xuICAgICAgICAgICAgbGFiZWw6IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgY29uc3QgaSA9IHQuZGF0YXNldEluZGV4LCByID0gZS5tZXRyaWNzW2ldO1xuICAgICAgICAgICAgICBsZXQgcyA9IHQuZGF0YXNldC5sYWJlbCB8fCBcIlwiO1xuICAgICAgICAgICAgICByZXR1cm4gdC5wYXJzZWQueSAhPT0gbnVsbCAmJiAocyArPSBgOiAke3AoYCR7dC5wYXJzZWQueX1gLCB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgICAgICAgICAgICBkcHM6IGUuZHBzLFxuICAgICAgICAgICAgICAgIG1ldGE6IHIgPT0gbnVsbCA/IHZvaWQgMCA6IHIubWV0YVxuICAgICAgICAgICAgICB9KX1gKSwgcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aXRsZTogKHQpID0+IFkodCwgZS5ncmFudWxhcml0eSwgbClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KSxcbiAgICBbZSwgbC5kYXRlRm9ybWF0c11cbiAgKTtcbiAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBmLmpzeChILCB7IC4uLmUsIGNsYXNzTmFtZTogXCJvdmVyZmxvdy15LWhpZGRlblwiLCBjaGlsZHJlbjogLyogQF9fUFVSRV9fICovIGYuanN4KE4sIHsgaGVpZ2h0OiBcIjEwMCVcIiwgb3B0aW9uczogQSwgZGF0YTogQyB9KSB9KTtcbn0sICQgPSB7XG4gIG5hbWU6IFwiTGluZUNoYXJ0XCIsXG4gIGxhYmVsOiBcIkxpbmUgY2hhcnQgKHRpbWUtc2VyaWVzKVwiLFxuICBjbGFzc05hbWVzOiBbXCJpbnNpZGUtY2FyZFwiXSxcbiAgY2F0ZWdvcnk6IFwiQ2hhcnRzOiB0aW1lLXNlcmllc1wiLFxuICBpbnB1dHM6IFtcbiAgICB7XG4gICAgICBuYW1lOiBcImRzXCIsXG4gICAgICB0eXBlOiBcImRhdGFzZXRcIixcbiAgICAgIGxhYmVsOiBcIkRhdGFzZXRcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkRhdGFzZXRcIixcbiAgICAgIGRlZmF1bHRWYWx1ZTogITEsXG4gICAgICBjYXRlZ29yeTogXCJDaGFydCBkYXRhXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwieEF4aXNcIixcbiAgICAgIHR5cGU6IFwiZGltZW5zaW9uXCIsXG4gICAgICBsYWJlbDogXCJYLUF4aXNcIixcbiAgICAgIGNvbmZpZzoge1xuICAgICAgICBkYXRhc2V0OiBcImRzXCIsXG4gICAgICAgIHN1cHBvcnRlZFR5cGVzOiBbXCJ0aW1lXCJdLFxuICAgICAgICBoaWRlR3JhbnVsYXJpdHk6ICEwXG4gICAgICB9LFxuICAgICAgY2F0ZWdvcnk6IFwiQ2hhcnQgZGF0YVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIm1ldHJpY3NcIixcbiAgICAgIHR5cGU6IFwibWVhc3VyZVwiLFxuICAgICAgYXJyYXk6ICEwLFxuICAgICAgbGFiZWw6IFwiTWV0cmljc1wiLFxuICAgICAgY29uZmlnOiB7XG4gICAgICAgIGRhdGFzZXQ6IFwiZHNcIlxuICAgICAgfSxcbiAgICAgIGNhdGVnb3J5OiBcIkNoYXJ0IGRhdGFcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJncmFudWxhcml0eVwiLFxuICAgICAgdHlwZTogXCJncmFudWxhcml0eVwiLFxuICAgICAgbGFiZWw6IFwiR3JhbnVsYXJpdHlcIixcbiAgICAgIGRlZmF1bHRWYWx1ZTogXCJkYXlcIixcbiAgICAgIGNhdGVnb3J5OiBcIlZhcmlhYmxlcyB0byBjb25maWd1cmVcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJ0aXRsZVwiLFxuICAgICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICAgIGxhYmVsOiBcIlRpdGxlXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJUaGUgdGl0bGUgZm9yIHRoZSBjaGFydFwiLFxuICAgICAgY2F0ZWdvcnk6IFwiQ2hhcnQgc2V0dGluZ3NcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJkZXNjcmlwdGlvblwiLFxuICAgICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICAgIGxhYmVsOiBcIkRlc2NyaXB0aW9uXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJUaGUgZGVzY3JpcHRpb24gZm9yIHRoZSBjaGFydFwiLFxuICAgICAgY2F0ZWdvcnk6IFwiQ2hhcnQgc2V0dGluZ3NcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJ4QXhpc1RpdGxlXCIsXG4gICAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgICAgbGFiZWw6IFwiWC1BeGlzIFRpdGxlXCIsXG4gICAgICBjYXRlZ29yeTogXCJDaGFydCBzZXR0aW5nc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcInlBeGlzVGl0bGVcIixcbiAgICAgIHR5cGU6IFwic3RyaW5nXCIsXG4gICAgICBsYWJlbDogXCJZLUF4aXMgVGl0bGVcIixcbiAgICAgIGNhdGVnb3J5OiBcIkNoYXJ0IHNldHRpbmdzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwic2hvd0xhYmVsc1wiLFxuICAgICAgdHlwZTogXCJib29sZWFuXCIsXG4gICAgICBsYWJlbDogXCJTaG93IExhYmVsc1wiLFxuICAgICAgY2F0ZWdvcnk6IFwiQ2hhcnQgc2V0dGluZ3NcIixcbiAgICAgIGRlZmF1bHRWYWx1ZTogITFcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiYXBwbHlGaWxsXCIsXG4gICAgICB0eXBlOiBcImJvb2xlYW5cIixcbiAgICAgIGxhYmVsOiBcIkNvbG9yIGZpbGwgc3BhY2UgdW5kZXIgbGluZVwiLFxuICAgICAgY2F0ZWdvcnk6IFwiQ2hhcnQgc2V0dGluZ3NcIixcbiAgICAgIGRlZmF1bHRWYWx1ZTogITFcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwieUF4aXNNaW5cIixcbiAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICBsYWJlbDogXCJZLUF4aXMgbWluaW11bSB2YWx1ZVwiLFxuICAgICAgY2F0ZWdvcnk6IFwiQ2hhcnQgc2V0dGluZ3NcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJzaG93TGVnZW5kXCIsXG4gICAgICB0eXBlOiBcImJvb2xlYW5cIixcbiAgICAgIGxhYmVsOiBcIlNob3cgTGVnZW5kXCIsXG4gICAgICBjYXRlZ29yeTogXCJDaGFydCBzZXR0aW5nc1wiLFxuICAgICAgZGVmYXVsdFZhbHVlOiAhMFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJsaW1pdFwiLFxuICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgIGxhYmVsOiBcIkxpbWl0IHJlc3VsdHNcIixcbiAgICAgIGRlZmF1bHRWYWx1ZTogMTAwLFxuICAgICAgY2F0ZWdvcnk6IFwiQ2hhcnQgc2V0dGluZ3NcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJkcHNcIixcbiAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICBsYWJlbDogXCJEZWNpbWFsIFBsYWNlc1wiLFxuICAgICAgY2F0ZWdvcnk6IFwiRm9ybWF0dGluZ1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcImVuYWJsZURvd25sb2FkQXNDU1ZcIixcbiAgICAgIHR5cGU6IFwiYm9vbGVhblwiLFxuICAgICAgbGFiZWw6IFwiU2hvdyBkb3dubG9hZCBhcyBDU1ZcIixcbiAgICAgIGNhdGVnb3J5OiBcIkV4cG9ydCBvcHRpb25zXCIsXG4gICAgICBkZWZhdWx0VmFsdWU6ICEwXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcImVuYWJsZURvd25sb2FkQXNQTkdcIixcbiAgICAgIHR5cGU6IFwiYm9vbGVhblwiLFxuICAgICAgbGFiZWw6IFwiU2hvdyBkb3dubG9hZCBhcyBQTkdcIixcbiAgICAgIGNhdGVnb3J5OiBcIkV4cG9ydCBvcHRpb25zXCIsXG4gICAgICBkZWZhdWx0VmFsdWU6ICEwXG4gICAgfVxuICBdXG59LCBhZSA9IEwoWCwgJCwge1xuICBwcm9wczogKGEpID0+IHtcbiAgICB2YXIgbTtcbiAgICBjb25zdCBkID0gW107XG4gICAgcmV0dXJuIGQucHVzaCh7XG4gICAgICBwcm9wZXJ0eTogYS54QXhpcyxcbiAgICAgIGRpcmVjdGlvbjogXCJkZXNjXCJcbiAgICB9KSwge1xuICAgICAgLi4uYSxcbiAgICAgIHJlc3VsdHM6IFQoe1xuICAgICAgICBmcm9tOiBhLmRzLFxuICAgICAgICBsaW1pdDogYS5saW1pdCB8fCA1MDAsXG4gICAgICAgIG9yZGVyQnk6IGQsXG4gICAgICAgIHNlbGVjdDogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGRpbWVuc2lvbjogKG0gPSBhLnhBeGlzKSA9PSBudWxsID8gdm9pZCAwIDogbS5uYW1lLFxuICAgICAgICAgICAgZ3JhbnVsYXJpdHk6IGEuZ3JhbnVsYXJpdHlcbiAgICAgICAgICB9LFxuICAgICAgICAgIGEubWV0cmljc1xuICAgICAgICBdXG4gICAgICB9KVxuICAgIH07XG4gIH1cbn0pO1xuZXhwb3J0IHtcbiAgYWUgYXMgZGVmYXVsdCxcbiAgJCBhcyBtZXRhXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9TGluZUNoYXJ0LmpzLm1hcFxuIl0sIm5hbWVzIjpbIlMiLCJWIiwiRCIsIlAiLCJGIiwiUiIsIkkiLCJNIiwiayIsInYiLCJfIiwidyIsIkUiLCJ4IiwiaSIsIm4iLCJ6IiwiaiIsInAiLCJHIiwiWSIsImYiLCJIIiwiTiIsIkwiLCJUIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVdBQSxHQUFFO0FBQUEsRUFDQUM7QUFBQUEsRUFDQUM7QUFBQUEsRUFDQUM7QUFBQUEsRUFDQUM7QUFBQUEsRUFDQUM7QUFBQUEsRUFDQUM7QUFBQUEsRUFDQUM7QUFBQUEsRUFDQUM7QUFBQUEsRUFDQUM7QUFDRjtBQUNLLE1BQUMsSUFBSSxDQUFDLE1BQU07QUFDZixRQUFNLEVBQUUsU0FBUyxHQUFHLE9BQU8sRUFB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Q04sTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsT0FBTztBQUFBLE1BQ1AsUUFBUTtBQUFBLFFBQ04sU0FBUztBQUFBLE1BQ2pCO0FBQUEsTUFDTSxVQUFVO0FBQUEsSUFDaEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxjQUFjO0FBQUEsTUFDZCxVQUFVO0FBQUEsSUFDaEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxhQUFhO0FBQUEsTUFDYixVQUFVO0FBQUEsSUFDaEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxhQUFhO0FBQUEsTUFDYixVQUFVO0FBQUEsSUFDaEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxVQUFVO0FBQUEsSUFDaEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxVQUFVO0FBQUEsSUFDaEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxVQUFVO0FBQUEsTUFDVixjQUFjO0FBQUEsSUFDcEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxVQUFVO0FBQUEsTUFDVixjQUFjO0FBQUEsSUFDcEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxVQUFVO0FBQUEsSUFDaEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxVQUFVO0FBQUEsTUFDVixjQUFjO0FBQUEsSUFDcEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxjQUFjO0FBQUEsTUFDZCxVQUFVO0FBQUEsSUFDaEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxVQUFVO0FBQUEsSUFDaEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxVQUFVO0FBQUEsTUFDVixjQUFjO0FBQUEsSUFDcEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxVQUFVO0FBQUEsTUFDVixjQUFjO0FBQUEsSUFDcEI7QUFBQSxFQUNBO0FBQ0EsR0FBRyxLQUFLQyxnQkFBRSxHQUFHLEdBQUc7QUFBQSxFQUNkLE9BQU8sQ0FBQyxNQUFNO0FBQ1osUUFBSTtBQUNKLFVBQU0sSUFBSSxDQUFBO0FBQ1YsV0FBTyxFQUFFLEtBQUs7QUFBQSxNQUNaLFVBQVUsRUFBRTtBQUFBLE1BQ1osV0FBVztBQUFBLElBQ2pCLENBQUssR0FBRztBQUFBLE1BQ0YsR0FBRztBQUFBLE1BQ0gsU0FBU0MsRUFBRTtBQUFBLFFBQ1QsTUFBTSxFQUFFO0FBQUEsUUFDUixPQUFPLEVBQUUsU0FBUztBQUFBLFFBQ2xCLFNBQVM7QUFBQSxRQUNULFFBQVE7QUFBQSxVQUNOO0FBQUEsWUFDRSxZQUFZLElBQUksRUFBRSxVQUFVLE9BQU8sU0FBUyxFQUFFO0FBQUEsWUFDOUMsYUFBYSxFQUFFO0FBQUEsVUFDM0I7QUFBQSxVQUNVLEVBQUU7QUFBQSxRQUNaO0FBQUEsTUFDQSxDQUFPO0FBQUEsSUFDUDtBQUFBLEVBQ0U7QUFDRixDQUFDOyIsInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswXX0=
