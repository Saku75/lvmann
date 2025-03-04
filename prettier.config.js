/** @type {import('prettier').Config} */
const config = {
  plugins: [
    "prettier-plugin-svelte",
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
  overrides: [{ files: "*.svelte", options: { parser: "svelte" } }],

  tailwindFunctions: ["clsx", "twMerge", "cn"],

  importOrder: [
    "^@lvmann/(.*)$",
    "^\\$app/(.*)$",
    "^\\$env/(.*)$",
    "^\\$lib/(.*)$",
    "^\\$routes/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
};

export default config;
