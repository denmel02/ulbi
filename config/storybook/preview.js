import { addDecorator } from '@storybook/react';
import { withThemes } from 'storybook-addon-themes/react';
import { RouterDecorator, ThemeDecorator } from '../../src/shared/config/storybook';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    backgrounds: {
        disable: true,
    },
    options: {
        storySort: {
            order: [ 'pages', 'widgets', 'shared' ]
        }
    },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    themes: {
        default: 'normal',
        clearable: false,
        Decorator: ThemeDecorator,
        list: [
            { name: 'normal' },
            { name: 'dark' }
        ]
    }
};

addDecorator(withThemes);
addDecorator(RouterDecorator);