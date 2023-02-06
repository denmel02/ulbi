import { Configuration } from "webpack";
import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types";

export const buildWebpackConfig = (options: BuildOptions): Configuration => {
  const { mode, paths } = options;
  const isDevelopment = mode === 'development';

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.output,
      clean: true
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(),
    devtool:  isDevelopment && 'inline-source-map',
    devServer: isDevelopment ? buildDevServer(options) : undefined
  }
}