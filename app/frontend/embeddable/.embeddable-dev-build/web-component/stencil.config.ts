import { Config } from "@stencil/core";

export const config: Config = {
  namespace: "embeddable-wrapper",
  srcDir: "component",
  outputTargets: [
    {
      type: "dist",
    },
  ],
};
