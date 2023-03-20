import { ProgressPlugin, WebpackPluginInstance, DefinePlugin, HotModuleReplacementPlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types';

export const buildPlugins = (options: BuildOptions): WebpackPluginInstance[] => {
    const isDevelopment = options.mode === 'development';
    const plugins = [
        new ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: options.paths.html
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new DefinePlugin({
            IS_DEV: isDevelopment
        })
    ];

    if (isDevelopment) {
        plugins.push(
            new HotModuleReplacementPlugin(),
            new BundleAnalyzerPlugin({
                openAnalyzer: false
            })
        );
    }

    return plugins;
};