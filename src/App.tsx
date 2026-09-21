import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { PlaceholderPage } from "./pages/PlaceholderPage";
import { AuthPage } from "./pages/AuthPage";
import { useTheme } from "./hooks/useTheme";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <BrowserRouter>
      <div className="app-shell">
        <Header theme={theme} onToggleTheme={toggleTheme} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/services"
              element={
                <PlaceholderPage
                  title="خدمات"
                  description="فهرست کامل خدمات دیجیتال به‌زودی در این بخش تکمیل می‌شود."
                />
              }
            />
            <Route
              path="/enterprise-services"
              element={
                <PlaceholderPage
                  title="خدمات سازمانی"
                  description="خدمات ویژه سازمان‌ها و کسب‌وکارها در مرحله بعد اضافه خواهد شد."
                />
              }
            />
            <Route
              path="/solutions"
              element={
                <PlaceholderPage
                  title="راهکارهای سازمانی"
                  description="پلتفرم إلنوس برای ساخت، مدیریت و ارائه سرویس‌های سازمانی."
                />
              }
            />
            <Route
              path="/faq"
              element={
                <PlaceholderPage
                  title="سوالات متداول"
                  description="پاسخ پرسش‌های رایج کاربران در بخش بعدی اضافه می‌شود."
                />
              }
            />
            <Route
              path="/contact"
              element={
                <PlaceholderPage
                  title="تماس با ما"
                  description="راه‌های ارتباط با تیم إلنوس در ادامه تکمیل خواهد شد."
                />
              }
            />
            <Route path="/login" element={<AuthPage mode="login" />} />
            <Route path="/register" element={<AuthPage mode="register" />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
