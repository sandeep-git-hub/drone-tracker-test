const fs = require("fs");
const path = require("path");

module.exports = () => {
  const api = path.join(__dirname, 'src');
  return [
    {
      mode: "production",
      context: path.resolve(__dirname),
      output: {
        path: path.join(__dirname, "dist"),
        filename: "index.js",
        libraryTarget: "commonjs2",
      },
      module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env"],
                plugins: ["@babel/transform-runtime", "source-map-support"],
              },
            },
          },
        ],
      },
      resolve: {
        extensions: [".js"],
      },
      optimization: {
        minimize: false,
        namedModules: true,
      },
      devtool: "nosources-source-map",
      target: "node",
    },
  ];
};
