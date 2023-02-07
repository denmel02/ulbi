import { FC, useCallback, useMemo, useState } from "react";
import { Theme } from "./Theme";
import { THEME_KEY } from "./Theme.const";
import { ThemeContext } from "./Theme.context";

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
}