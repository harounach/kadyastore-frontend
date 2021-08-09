const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./public",
    publicPath: "/assets/",
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public/assets"),
    clean: true,
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
