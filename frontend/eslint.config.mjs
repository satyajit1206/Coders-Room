import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname, // Required for resolving relative ESLint configs
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"), // Use Next.js and TypeScript ESLint rules
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
];

export default eslintConfig;
