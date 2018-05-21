const path = require("path");

module.exports = {
  entry: "./src",
  mode: "production",
  output: {
    path: path.resolve(__dirname, "lib"),
    libraryTarget: "commonjs",
    filename: "index.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
