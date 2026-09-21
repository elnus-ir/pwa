export type Theme = "light" | "dark";

const STORAGE_KEY = "elnus-theme";

export function getPreferredTheme(): Theme {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) {
    meta.setAttribute("content", theme === "dark" ? "#070b14" : "#f6f7f9");
  }
}

export function persistTheme(theme: Theme) {
  localStorage.setItem(STORAGE_KEY, theme);
}
