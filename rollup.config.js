import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import fs from "fs";
import resolve from "rollup-plugin-node-resolve";

const plugins = {
  babel: babel({
    exclude: "node_modules/**",
    runtimeHelpers: true
  }),
  commonjs: commonjs(),
  resolve: resolve()
};

const dirs = {
  input: "src",
  output: "dist",
  compat: "compat"
};

const getCjsAndEsConfig = fileName => ({
  input: `${dirs.input}/${fileName}`,
  output: [
    {file: `${dirs.output}/${fileName}`, format: "es"},
    {file: `${dirs.compat}/cjs/${fileName}`, format: "cjs"}
  ],
  plugins: [plugins.babel]
});

const sources = fs.readdirSync("src");

export default [
  {
    input: `${dirs.input}/index.js`,
    output: {
      file: `${dirs.compat}/umd/index.js`,
      format: "umd"
    },
    name: "UtilsArray",
    plugins: [plugins.babel, plugins.resolve, plugins.commonjs]
  },
  ...sources.map(getCjsAndEsConfig)
];
