import { d as defineComponent } from './index.esm-CVE60fla-BtsXn2z1.js';
import { j } from './jsx-runtime-CjQXaSqQ-CjMA1-fF-CkV96GpT.js';
import { m, r } from './Title-n-I3Fdvw-CW-j1pzr-DoihF5tM.js';
import './embeddable-component-BD9bezsm.js';
import './index-BV21PmyC.js';

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

export { g as default, c as meta };
//# sourceMappingURL=Text-DteV30IZ-DASIoyqz.js.map
//# sourceMappingURL=Text-DteV30IZ-DASIoyqz.js.map
