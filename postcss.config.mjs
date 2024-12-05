/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
    "@csstools/postcss-oklab-function": { preserve: true },
    autoprefixer: {},
  },
};

export default config;
