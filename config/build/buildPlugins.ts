import { ProgressPlugin, WebpackPluginInstance, DefinePlugin, HotModuleReplacementPlugin } from "webpack";
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from "./types";

export const buildPlugins = (options: BuildOptions): WebpackPluginInstance[] => {
  return [
    new ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: options.paths.html
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new DefinePlugin({
      IS_DEV: options.mode === 'development'
    }),
    new HotModuleReplacementPlugin()
  ]
}