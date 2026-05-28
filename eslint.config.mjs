import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname
});

const eslintConfig = [
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "next-env.d.ts",
      "www.greptile.com/**",
      "referencecode/**",
      "_DataURI/**",
      "cdn.jsdelivr.net/**",
      "googleads.g.doubleclick.net/**",
      "tag.unifyintent.com/**",
      "widget.usepylon.com/**",
      "www.google*/**",
      "api.unifyintent.com/**",
      "app.athenahq.ai/**"
    ]
  },
  ...compat.extends("next/core-web-vitals", "next/typescript")
];

export default eslintConfig;
