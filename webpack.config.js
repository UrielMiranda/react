const HtmlWebpackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebpackPlugin({
  template: "./src/index.html",
  filename:'./index.html'
})

module.exports = {
  entry:{
    app: "./src/index.js"
  },
  module:{
    rules:[{
      test:/\.js$/,
      exclude:/node_modules/,
      use:{
        loader: "babel-loader",
        options:{
          "presets": ["env", "react"]
        }
      }
    },{
      test: /\.css$/,
      use:["style-loader", "css-loader"]
    }
  ]
  },
  plugins:[htmlPlugin],
  output:{
    filename: "app.js"
  }
}