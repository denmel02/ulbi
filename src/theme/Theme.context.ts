import { createContext } from 'react';
import { Theme } from './Theme';

interface ThemeContextValue {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextValue>({});