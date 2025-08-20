import { d as defineComponent, V as Value } from './index.esm-CVE60fla-BtsXn2z1.js';
import { r as reactExports, j as jsxRuntimeExports } from './embeddable-component-BD9bezsm.js';
import './index-BV21PmyC.js';

const inputStyles = {
  border: "1px solid #ddd",
  borderRadius: "4px",
  boxSizing: "border-box",
  color: "#333",
  fontSize: "16px",
  padding: "8px",
  width: "100%"
};
const labelStyles = {
  color: "#333",
  display: "block",
  fontSize: "16px",
  fontWeight: 600,
  marginBottom: "4px",
  width: "100%"
};
const labelTopStyles = {
  boxSizing: "border-box"
};
let timeout = null;
const Component = (props) => {
  const { label, onChange } = props;
  const [value, setValue] = reactExports.useState("");
  const handleChange = (newValue) => {
    setValue(newValue);
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      onChange(newValue);
    }, 500);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { style: labelTopStyles, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: labelStyles, children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        style: inputStyles,
        type: "text",
        value,
        onChange: (e) => handleChange(e.target.value)
      }
    )
  ] }) });
};
const meta = {
  name: "ExampleTextInput",
  label: "Example Text Input",
  category: "Examples",
  defaultWidth: 320,
  defaultHeight: 80,
  inputs: [
    {
      name: "label",
      type: "string",
      label: "Label",
      description: "The text to show next to the textbox"
    }
  ],
  events: [
    {
      name: "onChange",
      label: "Change",
      properties: [
        {
          name: "value",
          type: "string"
        }
      ]
    }
  ]
};
const ExampleTextInput_emb = defineComponent(Component, meta, {
  props: (inputs) => {
    return {
      ...inputs
    };
  },
  events: {
    onChange: (value) => ({ value: value || Value.noFilter() })
  }
});

export { ExampleTextInput_emb as default, meta };
//# sourceMappingURL=ExampleTextInput.emb-U7eZiAw0-BThJnLP2.js.map
//# sourceMappingURL=ExampleTextInput.emb-U7eZiAw0-BThJnLP2.js.map
