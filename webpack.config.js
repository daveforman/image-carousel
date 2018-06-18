const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const PurifyCSSPlugin = require("purifycss-webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const glob = require("glob");

let destinationFolder = "dev";

if (process.env.NODE_ENV === "production") {
  destinationFolder = "dist";
}

const config = {
  mode: process.env.NODE_ENV,
  entry: {
    app: ["./src/js/app.js", "./src/style/main.scss"]
  },
  output: {
    path: path.resolve(__dirname, destinationFolder),
    // the target directory for all output files

    filename: "scripts/[name].[chunkhash].js"
    // the filename template for entry chunks
  },
  module: {
    rules: [
      {
        test: /\.s[ca]ss$/,
        // use: ['style-loader', 'css-loader', 'sass-loader']
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "img/[name].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin([destinationFolder]),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].[contenthash].css"
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html")
    }),
    new PurifyCSSPlugin({
      // Give paths to parse for rules. These should be absolute!
      paths: glob.sync(path.join(__dirname, "src/*.html"))
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "dev"),
    compress: false,
    port: 9000
  }
};

module.exports = config;
