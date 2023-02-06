import { ProgressPlugin, WebpackPluginInstance } from "webpack";
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { BuildOptions } from "./types";

export const buildPlugins = (options: BuildOptions): WebpackPluginInstance[] => {
  return [
    new ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: options.paths.html
    })
  ]
}