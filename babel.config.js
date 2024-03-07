const path = require("path");

const plugins = [
  [
    "@babel/plugin-transform-react-jsx",
    { runtime: "automatic", importSource: path.resolve(__dirname, "core") },
  ],
  [
    "babel-plugin-module-resolver",
    {
      root: ["./src"],
      alias: {
        "jsx-runtime": path.resolve("src", "core/jsx-runtime.js"),
      },
    },
  ],
];

module.exports = {
  plugins,
};
