const baseConfig = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
};

const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  latex: true,
});

module.exports = withNextra(baseConfig);
