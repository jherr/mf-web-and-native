import * as path from "node:path";
import { defineConfig } from "@rspack/cli";
import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";

import { mfConfig } from "./module-federation.config";

export default defineConfig({
  context: __dirname,
  entry: {
    main: "./src/index.ts",
  },
  resolve: {
    extensions: ["...", ".ts", ".tsx", ".jsx"],
  },

  target: "node",

  output: {
    // You need to set a unique value that is not equal to other applications
    uniqueName: "my_remote",
    // publicPath must be configured if using manifest
    publicPath: "http://localhost:3000/",
  },

  module: {
    rules: [
      {
        test: /\.(jsx?|tsx?)$/,
        use: [
          {
            loader: "builtin:swc-loader",
            options: {},
          },
        ],
      },
    ],
  },
  plugins: [new ModuleFederationPlugin(mfConfig)].filter(Boolean),
});
