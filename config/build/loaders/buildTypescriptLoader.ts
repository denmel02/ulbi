export const buildTypescriptLoader = () => {
    return {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };
};