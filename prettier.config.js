/** @type {import("prettier").Config} */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindFunctions: ["cn", "clsx"],
  bracketSameLine: true,
};

module.exports = config;
