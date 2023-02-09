import { useContext } from "react";
import { Theme } from "../model"
import { ThemeContext } from "./ThemeContext";

interface UseThemeValue {
  theme: Theme;
  toggleTheme: () => void;
}

export const useTheme = (): UseThemeValue => {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleTheme = () => setTheme(theme === 'normal' ? 'dark' : 'normal');

  return { theme, toggleTheme }
}