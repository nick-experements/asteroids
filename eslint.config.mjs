import globals from "globals";
import pluginJs from "@eslint/js";


export default [
    {rules: {indent: ["error", 4]}},
    {files: ["**/*.js"], languageOptions: {sourceType: "script"}},
    {languageOptions: { globals: globals.browser }},
    pluginJs.configs.recommended,
    {languageOptions: { globals: {jquery: true, $: true}}}
];