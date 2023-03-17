import { FC } from 'react';
import 'app/styles/index.scss';
import { classNames } from '../../../lib';
import { Theme } from '../../../theme';

interface ThemeDecoratorProps {
  themeName: Theme
}

export const ThemeDecorator: FC<ThemeDecoratorProps> = (props) => {
    const { children, themeName } = props;

    return (
        <div className={ classNames('app', themeName) }>
            {children}
        </div>
    );
};