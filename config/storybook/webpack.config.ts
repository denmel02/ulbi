import path from 'path';
import { Configuration, RuleSetRule } from 'webpack';
import { buildScssLoader, buildSvgLoader } from '../build';

module.exports = function({ config }: { config: Configuration}) {
    config.resolve.modules.push(path.resolve(__dirname, '..', '..', 'src'));

    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });

    config.module.rules.push(buildSvgLoader());
    config.module.rules.push(buildScssLoader(true));

    return config;
};