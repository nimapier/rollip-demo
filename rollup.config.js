import babel from "rollup-plugin-babel";
import json from "@rollup/plugin-json";
import nodeResolve from "@rollup/plugin-node-resolve";
import myExample from "./rollup-plugin-my-example.js";
export default [
  {
    input: "src/main.js",
    output: {
      file: "dist/bundle.cjs.js",
      format: "cjs",
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
  },
  {
    input: "src/main.js",
    output: {
      file: "dist/bundle.es.js",
      format: "es",
      name: "bundleName",
    },
    plugins: [
      // babel({
      //   exclude: "node_modules",
      // }),
      json(),
      nodeResolve(),
    ],
    // external: ["lodash"],
  },
  {
    input: "virtual-module",
    output: {
      file: "dist/plugin.cjs.js",
      format: "iife",
      name: "bundleName",
    },
    plugins: [myExample()],
  },
];
