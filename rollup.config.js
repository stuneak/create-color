import pkg from "./package.json";
import babel from "rollup-plugin-babel";
import { uglify } from "rollup-plugin-uglify";

export default {
  input: pkg.module,
  output: {
    file: pkg.main,
    format: "cjs"
  },
  plugins: [babel(), uglify()]
};
