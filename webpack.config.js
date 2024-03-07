const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./dist/index.js",
  mode: "production",
  output: {
    path: `${__dirname}/build`,
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
  resolve: {
    alias: {
      "jsx-runtime": path.resolve("core/jsx-runtime.js"),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
