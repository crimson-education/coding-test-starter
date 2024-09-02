import js from "@eslint/js";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";
import eslintJestPrettier from "eslint-plugin-jest";

export default [
  js.configs.recommended,
  eslintPluginPrettier,
  {
    files: ["*.test.mjs"],
    ...eslintJestPrettier.configs["flat/recommended"],
  },
];
