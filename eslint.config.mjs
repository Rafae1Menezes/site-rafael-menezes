import { FlatCompat } from "@eslint/eslintrc";
import prettierConfig from "eslint-config-prettier";
import prettier from "eslint-plugin-prettier";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    // Next.js rules (via compat para configs legadas)
    ...compat.extends("next/core-web-vitals", "next/typescript"),

    // Prettier como flat config nativo (evita referência circular)
    prettierConfig,
    {
        plugins: {
            prettier,
        },
        rules: {
            "prettier/prettier": "error",
            "no-console": "warn",
            quotes: ["error", "double"],
            "@typescript-eslint/no-unused-vars": "warn",
        },
    },

    // Ignores
    {
        ignores: ["node_modules/**", ".next/**", "out/**", "build/**", "next-env.d.ts"],
    },
];

export default eslintConfig;
