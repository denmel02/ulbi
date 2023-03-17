import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildScssLoader = (isDevelopment: boolean) => {
    return {
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
};