import { d as defineComponent } from "./index.esm-CVE60fla.js";
import { j } from "./jsx-runtime-CjQXaSqQ-CjMA1-fF.js";
import { m, r } from "./Title-n-I3Fdvw-CW-j1pzr.js";
const y = (t) => {
  const { title: n, body: r$1, titleFontSize: e, bodyFontSize: o } = t, s = {
    fontSize: e ? `${e}px` : void 0,
    lineHeight: e ? "1.2em" : void 0
  }, l = {
    fontSize: o ? `${o}px` : void 0,
    lineHeight: o ? "1.2em" : void 0
  };
  return /* @__PURE__ */ j.jsxs("div", { children: [
    /* @__PURE__ */ j.jsx(m, { title: n, style: s }),
    /* @__PURE__ */ j.jsx(r, { description: r$1, style: l })
  ] });
}, c = {
  name: "Text",
  label: "Text component",
  category: "Text",
  inputs: [
    {
      name: "title",
      type: "string",
      label: "Title",
      description: "The title text",
      category: "Configure chart"
    },
    {
      name: "body",
      type: "string",
      label: "Body",
      description: "The body text",
      category: "Configure chart"
    },
    {
      name: "titleFontSize",
      type: "number",
      label: "Title font size in pixels",
      category: "Formatting"
    },
    {
      name: "bodyFontSize",
      type: "number",
      label: "Body font size in pixels",
      category: "Formatting"
    }
  ]
}, g = defineComponent(y, c, {
  props: (t) => ({
    ...t
  })
});
export {
  g as default,
  c as meta
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGV4dC1EdGVWMzBJWi5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL2NocmlzdG9waGVyY2FybHNvbi9mbHVpZC9kcm9wbGV0LWVtYmVkZGFibGUvYXBwL2Zyb250ZW5kL2VtYmVkZGFibGUvbm9kZV9tb2R1bGVzL0BlbWJlZGRhYmxlLmNvbS92YW5pbGxhLWNvbXBvbmVudHMvZGlzdC9UZXh0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRlZmluZUNvbXBvbmVudCBhcyBhIH0gZnJvbSBcIkBlbWJlZGRhYmxlLmNvbS9yZWFjdFwiO1xuaW1wb3J0IHsgaiBhcyBpIH0gZnJvbSBcIi4vanN4LXJ1bnRpbWUtQ2pRWGFTcVEuanNcIjtcbmltcG9ydCB7IFQgYXMgbSwgRCBhcyBwIH0gZnJvbSBcIi4vVGl0bGUtbi1JM0ZkdncuanNcIjtcbmNvbnN0IHkgPSAodCkgPT4ge1xuICBjb25zdCB7IHRpdGxlOiBuLCBib2R5OiByLCB0aXRsZUZvbnRTaXplOiBlLCBib2R5Rm9udFNpemU6IG8gfSA9IHQsIHMgPSB7XG4gICAgZm9udFNpemU6IGUgPyBgJHtlfXB4YCA6IHZvaWQgMCxcbiAgICBsaW5lSGVpZ2h0OiBlID8gXCIxLjJlbVwiIDogdm9pZCAwXG4gIH0sIGwgPSB7XG4gICAgZm9udFNpemU6IG8gPyBgJHtvfXB4YCA6IHZvaWQgMCxcbiAgICBsaW5lSGVpZ2h0OiBvID8gXCIxLjJlbVwiIDogdm9pZCAwXG4gIH07XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8gaS5qc3hzKFwiZGl2XCIsIHsgY2hpbGRyZW46IFtcbiAgICAvKiBAX19QVVJFX18gKi8gaS5qc3gobSwgeyB0aXRsZTogbiwgc3R5bGU6IHMgfSksXG4gICAgLyogQF9fUFVSRV9fICovIGkuanN4KHAsIHsgZGVzY3JpcHRpb246IHIsIHN0eWxlOiBsIH0pXG4gIF0gfSk7XG59LCBjID0ge1xuICBuYW1lOiBcIlRleHRcIixcbiAgbGFiZWw6IFwiVGV4dCBjb21wb25lbnRcIixcbiAgY2F0ZWdvcnk6IFwiVGV4dFwiLFxuICBpbnB1dHM6IFtcbiAgICB7XG4gICAgICBuYW1lOiBcInRpdGxlXCIsXG4gICAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgICAgbGFiZWw6IFwiVGl0bGVcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlRoZSB0aXRsZSB0ZXh0XCIsXG4gICAgICBjYXRlZ29yeTogXCJDb25maWd1cmUgY2hhcnRcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJib2R5XCIsXG4gICAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgICAgbGFiZWw6IFwiQm9keVwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiVGhlIGJvZHkgdGV4dFwiLFxuICAgICAgY2F0ZWdvcnk6IFwiQ29uZmlndXJlIGNoYXJ0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwidGl0bGVGb250U2l6ZVwiLFxuICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgIGxhYmVsOiBcIlRpdGxlIGZvbnQgc2l6ZSBpbiBwaXhlbHNcIixcbiAgICAgIGNhdGVnb3J5OiBcIkZvcm1hdHRpbmdcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJib2R5Rm9udFNpemVcIixcbiAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICBsYWJlbDogXCJCb2R5IGZvbnQgc2l6ZSBpbiBwaXhlbHNcIixcbiAgICAgIGNhdGVnb3J5OiBcIkZvcm1hdHRpbmdcIlxuICAgIH1cbiAgXVxufSwgZyA9IGEoeSwgYywge1xuICBwcm9wczogKHQpID0+ICh7XG4gICAgLi4udFxuICB9KVxufSk7XG5leHBvcnQge1xuICBnIGFzIGRlZmF1bHQsXG4gIGMgYXMgbWV0YVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVRleHQuanMubWFwXG4iXSwibmFtZXMiOlsiciIsImkiLCJwIiwiYSJdLCJtYXBwaW5ncyI6Ijs7O0FBR0ssTUFBQyxJQUFJLENBQUMsTUFBTTtBQUNmLFFBQU0sRUFBRSxPQUFPLEdBQUcsTUFBTUEsS0FBRyxlQUFlLEdBQUcsY0FBYyxNQUFNLEdBQUcsSUFBSTtBQUFBLElBQ3RFLFVBQVUsSUFBSSxHQUFHLENBQUMsT0FBTztBQUFBLElBQ3pCLFlBQVksSUFBSSxVQUFVO0FBQUEsRUFDOUIsR0FBSyxJQUFJO0FBQUEsSUFDTCxVQUFVLElBQUksR0FBRyxDQUFDLE9BQU87QUFBQSxJQUN6QixZQUFZLElBQUksVUFBVTtBQUFBLEVBQzlCO0FBQ0UsU0FBdUJDLGtCQUFFLEtBQUssT0FBTyxFQUFFLFVBQVU7QUFBQSxJQUMvQkEsa0JBQUUsSUFBSSxHQUFHLEVBQUUsT0FBTyxHQUFHLE9BQU8sR0FBRztBQUFBLElBQy9CQSxrQkFBRSxJQUFJQyxHQUFHLEVBQUUsYUFBYUYsS0FBRyxPQUFPLEVBQUMsQ0FBRTtBQUFBLEVBQ3pELEdBQUs7QUFDTCxHQUFHLElBQUk7QUFBQSxFQUNMLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLFVBQVU7QUFBQSxFQUNWLFFBQVE7QUFBQSxJQUNOO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxhQUFhO0FBQUEsTUFDYixVQUFVO0FBQUEsSUFDaEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxhQUFhO0FBQUEsTUFDYixVQUFVO0FBQUEsSUFDaEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxVQUFVO0FBQUEsSUFDaEI7QUFBQSxJQUNJO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxVQUFVO0FBQUEsSUFDaEI7QUFBQSxFQUNBO0FBQ0EsR0FBRyxJQUFJRyxnQkFBRSxHQUFHLEdBQUc7QUFBQSxFQUNiLE9BQU8sQ0FBQyxPQUFPO0FBQUEsSUFDYixHQUFHO0FBQUEsRUFDUDtBQUNBLENBQUM7IiwieF9nb29nbGVfaWdub3JlTGlzdCI6WzBdfQ==
