import babel from "rollup-plugin-babel";
import json from "@rollup/plugin-json";
import nodeResolve from "@rollup/plugin-node-resolve";
export default {
  input: "src/main.js",
  output: {
    file: "dist/bundle.cjs.js",
    format: "iife",
    name: "bundleName",
  },
  plugins: [
    babel({
      exclude: "node_modules",
    }),
    json(),
    nodeResolve(),
  ],
  // external: ["lodash"],
};
