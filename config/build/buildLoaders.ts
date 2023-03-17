import { RuleSetRule } from 'webpack';
import { BuildOptions } from './types';
import { buildFileLoader, buildScssLoader, buildSvgLoader, buildTypescriptLoader } from './loaders';

export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {
    const isDevelopment = options.mode === 'development';

    return [
        buildSvgLoader(),
        buildFileLoader(),
        buildTypescriptLoader(),
        buildScssLoader(isDevelopment)
    ];
};