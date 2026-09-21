import { useEffect, useState } from "react";
import { applyTheme, getPreferredTheme, persistTheme, type Theme } from "./theme";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() =>
    typeof document === "undefined" ? "light" : getPreferredTheme(),
  );

  useEffect(() => {
    applyTheme(theme);
    persistTheme(theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return { theme, toggleTheme };
}
