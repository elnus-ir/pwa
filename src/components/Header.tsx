import { NavLink } from "react-router-dom";
import { useState } from "react";
import type { Theme } from "../hooks/theme";

const links = [
  { to: "/services", label: "خدمات" },
  { to: "/enterprise-services", label: "خدمات سازمانی" },
  { to: "/solutions", label: "راهکارهای سازمانی" },
  { to: "/faq", label: "سوالات متداول" },
  { to: "/contact", label: "تماس با ما" },
];

type Props = {
  theme: Theme;
  onToggleTheme: () => void;
};

export function Header({ theme, onToggleTheme }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          <img src="/logo.png" alt="" className="brand-mark" width={36} height={36} />
          <span className="brand-text">
            <strong>Elnus</strong>
            <small>إلنوس</small>
          </span>
        </NavLink>

        <nav className={`main-nav ${open ? "is-open" : ""}`} aria-label="منوی اصلی">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => (isActive ? "nav-link is-active" : "nav-link")}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="icon-btn"
            onClick={onToggleTheme}
            aria-label={theme === "dark" ? "فعال‌سازی قالب روشن" : "فعال‌سازی قالب تیره"}
          >
            {theme === "dark" ? (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.7" />
                <path
                  d="M12 3v2M12 19v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M3 12h2M19 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M17 14.5A7 7 0 0 1 9.5 7 6.5 6.5 0 1 0 17 14.5Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>

          <div className="auth-split">
            <NavLink to="/login" className="auth-btn" onClick={() => setOpen(false)}>
              ورود
            </NavLink>
            <span className="auth-sep" aria-hidden="true">
              |
            </span>
            <NavLink to="/register" className="auth-btn is-primary" onClick={() => setOpen(false)}>
              ثبت نام
            </NavLink>
          </div>

          <button
            type="button"
            className="icon-btn menu-toggle"
            aria-expanded={open}
            aria-label="باز کردن منو"
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              {open ? (
                <path d="M6 6l12 12M18 6 6 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
