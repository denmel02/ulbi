import { FC, useCallback, useMemo, useState } from 'react';
import { Theme, THEME_KEY } from '../model';
import { ThemeContext } from '../lib';

export const ThemeProvider: FC = (props) => {
    const { children } = props;
    const [theme, setTheme] = useState<Theme>(localStorage.getItem(THEME_KEY) as Theme || 'normal');
    const onSetTheme = useCallback((newTheme: Theme) => {
        setTheme(newTheme);
        localStorage.setItem(THEME_KEY, newTheme);
    }, []);
    const value = useMemo(() => ({ theme, setTheme: onSetTheme }), [theme, onSetTheme]);

    return (
        <ThemeContext.Provider value={ value }>
            { children }
        </ThemeContext.Provider>
    );
};