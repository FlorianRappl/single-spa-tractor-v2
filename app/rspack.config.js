const rspack = require("@rspack/core");
const path = require("path");

const checkoutBase = process.env.BASE_URL
  ? `${process.env.BASE_URL}checkout`
  : "http://localhost:6002";
const decideBase = process.env.BASE_URL
  ? `${process.env.BASE_URL}decide`
  : "http://localhost:6003";
const exploreBase = process.env.BASE_URL
  ? `${process.env.BASE_URL}explore`
  : "http://localhost:6001";

module.exports = {
  output: {
    uniqueName: "app",
    publicPath: "auto",
  },
  devServer: {
    port: 1234,
  },
  module: {
    rules: [
      {
        test: /\.jpg$/,
        type: "asset",
      },
      {
        test: /\.png$/,
        type: "asset",
      },
      {
        test: /\.jsx$/,
        use: {
          loader: "builtin:swc-loader",
          options: {
            jsc: {
              parser: {
                syntax: "ecmascript",
                jsx: true,
              },
            },
          },
        },
        type: "javascript/auto",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new rspack.HtmlRspackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
      templateParameters: {
        exploreBase,
        checkoutBase,
        decideBase,
      },
    }),
  ],
};
