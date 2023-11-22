var HtmlWebpackPlugin = require("./i3NodeModules/html-webpack-plugin");
const MiniCssExtractPlugin = require("./i3NodeModules/mini-css-extract-plugin");
const WebpackShellPluginNext = require("./i3NodeModules/webpack-shell-plugin-next");
const { styles } = require("./i3NodeModules/@ckeditor/ckeditor5-dev-utils");
const TerserPlugin = require("terser-webpack-plugin");
//const ESLintPlugin = require('eslint-webpack-plugin')
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require("path");
var glob = require("./i3NodeModules/glob/glob");
var webpack = require("webpack");

const jsFilePaths = require("./Entry.js");
const cssEntry = `./src/Contents/css/[name].css`;
var filePaths = glob.sync(jsFilePaths);

var entries = {};
var pluginChunks = [];
filePaths.map((filePath, index) => {
  var fileName = path.basename(filePath, ".jsx");
  pluginChunks.push(fileName);
  entries[fileName] = filePath;
});

htmlWebpackPlugins = pluginChunks.map((chunk) => {
  return new HtmlWebpackPlugin({
    chunks: [chunk],
    filename: chunk + ".html",
    cache: false,
  });
});

const { CleanWebpackPlugin } = require("./i3NodeModules/clean-webpack-plugin");
module.exports = (env, options) => {
  let productmode = options.mode === "production"; // dev có thể sửa mode ở dòng này nếu muốn
  let devtool = false;
  // devtool = 'source-map';
  return {
    devtool: productmode ? false : devtool,
    entry: entries,
    // target: 'node',
    output: {
      filename: "./Scripts/[name].js",
      path: path.resolve(process.cwd(), "dist"),
    },
    resolve: {
      modules: [
        path.resolve("./i3NodeModules"),
        path.resolve("./node_modules"),
        path.resolve("./i3Src"),
        path.resolve("./src/themeStyles"),
      ],
      extensions: ["*", ".jsx", ".js"],
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: {
            and: [/node_modules/],
            not: ["/i3NodeModules/@ckeditor/"],
          },
          loader: "./i3NodeModules/babel-loader",
          options: {
            presets: [
              "./i3NodeModules/@babel/preset-env",
              "./i3NodeModules/@babel/preset-react",
            ],
            plugins: [
              "./i3NodeModules/@babel/plugin-proposal-class-properties",
            ],
          },
        },
        {
          test: /ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/,
          use: ["./i3NodeModules/raw-loader"],
        },
        {
          test: /ckeditor5-[^/\\]+[/\\]theme[/\\].+\.css$/,
          use: [
            {
              loader: "style-loader",
              options: {
                injectType: "singletonStyleTag",
                attributes: {
                  "data-cke": true,
                },
              },
            },
            "./i3NodeModules/css-loader",
            {
              loader: "./i3NodeModules/postcss-loader",
              options: {
                postcssOptions: styles.getPostCssConfig({
                  themeImporter: {
                    themePath: require.resolve(
                      "./i3NodeModules/@ckeditor/ckeditor5-theme-lark"
                    ),
                  },
                  minify: true,
                }),
              },
            },
          ],
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            "./i3NodeModules/css-loader",
            {
              loader: "./i3NodeModules/resolve-url-loader",
            },
            {
              loader: "./i3NodeModules/sass-loader",
              options: {
                sourceMap: true,
              },
            },
          ],
          exclude: [/ckeditor5-[^/\\]+[/\\]theme[/\\].+\.css$/],
        },
        {
          test: /\.(png|jpg|gif|jpeg|eot|ttf|woff)$/,
          use: ["file-loader"],
          exclude: [
            /\.(js|mjs|jsx|ts|tsx)$/,
            /\.html$/,
            /\.json$/,
            /ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/,
            /ckeditor5-[^/\\]+[/\\]theme[/\\].+\.css$/,
          ],
          // generator: {
          //     filename: 'static/media/[name].[contenthash:8].[ext]'
          // }
        },
        {
          test: /\.svg$/,
          loader: "./i3NodeModules/svg-inline-loader",
          exclude: [/ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/],
        },
      ],
    },
    optimization: productmode
      ? {
          splitChunks: {
            chunks: "all",
          },
          minimize: true,
          minimizer: [
            new TerserPlugin({
              terserOptions: {
                keep_classnames: true,
                keep_fnames: true,
              },
            }),
          ],
        }
      : {},
    plugins: [
      //new ESLintPlugin(),
      new CleanWebpackPlugin({
        output: {
          path: path.resolve(process.cwd(), "dist"),
        },
      }),
      ...htmlWebpackPlugins,
      new MiniCssExtractPlugin({
        filename: cssEntry,
      }),
      //   new BundleAnalyzerPlugin(),
      new WebpackShellPluginNext({
        onAfterDone: {
          scripts: ["copydist.bat"],
          blocking: false,
          parallel: true,
        },
      }),
      new webpack.IgnorePlugin({
        resourceRegExp: /^\.\/locale$/,
        contextRegExp: /moment$/,
      }),
    ],
  };
};
