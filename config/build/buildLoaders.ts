import { RuleSetRule } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types';

export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {
    const isDevelopment = options.mode === 'development';
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };
    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resourcePath: string) => resourcePath.includes('.module.'),
                        localIdentName: isDevelopment ? '[path][name]__[local]' : '[hash:base64:8]'
                    }
                }
            },
            'sass-loader',
        ],
    };
    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: 'file-loader',
    };
    const svgLoader = {
        test: /\.svg$/,
        use: '@svgr/webpack',
    };

    return [
        svgLoader,
        fileLoader,
        typescriptLoader,
        scssLoader
    ];
};