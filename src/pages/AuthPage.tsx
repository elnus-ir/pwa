import { type FormEvent } from "react";
import { Link } from "react-router-dom";

type Props = {
  mode: "login" | "register";
};

export function AuthPage({ mode }: Props) {
  const isLogin = mode === "login";

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section className="section placeholder-page">
      <div className="container narrow auth-card">
        <h1>{isLogin ? "ورود" : "ثبت نام"}</h1>
        <p className="hero-lead">شماره موبایل خود را وارد کنید تا کد تأیید برای شما ارسال شود.</p>
        <form className="auth-form" onSubmit={onSubmit}>
          <label>
            شماره موبایل
            <input type="tel" inputMode="numeric" placeholder="۰۹xxxxxxxxx" autoComplete="tel" required />
          </label>
          <button type="submit" className="btn btn-primary">
            ادامه
          </button>
        </form>
        {isLogin ? (
          <p className="auth-switch">
            حساب ندارید؟ <Link to="/register">ثبت نام</Link>
          </p>
        ) : (
          <p className="auth-switch">
            قبلاً ثبت‌نام کرده‌اید؟ <Link to="/login">ورود</Link>
          </p>
        )}
      </div>
    </section>
  );
}
