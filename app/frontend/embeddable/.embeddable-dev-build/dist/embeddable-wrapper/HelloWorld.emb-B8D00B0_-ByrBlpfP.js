import { d as defineComponent } from './index.esm-CVE60fla-BtsXn2z1.js';
import { j as jsxRuntimeExports } from './embeddable-component-BD9bezsm.js';
import './index-BV21PmyC.js';

const Component = (props) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "basic-text-component", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: props.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: props.body })
  ] });
};
const meta = {
  name: "HelloWorld",
  label: "Hello World",
  defaultHeight: 100,
  defaultWidth: 400,
  category: "Examples",
  inputs: [
    {
      name: "title",
      type: "string",
      label: "Title",
      description: "The title for the chart"
    },
    {
      name: "body",
      type: "string",
      label: "Body",
      description: "The text content"
    }
  ]
};
const HelloWorld_emb = defineComponent(Component, meta, {
  props: (inputs) => {
    return {
      title: inputs.title,
      body: inputs.body
    };
  }
});

export { HelloWorld_emb as default, meta };
//# sourceMappingURL=HelloWorld.emb-B8D00B0_-ByrBlpfP.js.map
//# sourceMappingURL=HelloWorld.emb-B8D00B0_-ByrBlpfP.js.map
