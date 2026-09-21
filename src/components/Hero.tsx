import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { heroSlides } from "../data/content";

export function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <section className="hero" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-inner">
        <div className="hero-slider" aria-live="polite">
          {heroSlides.map((slide, i) => (
            <h1 key={slide} className={`hero-title ${i === index ? "is-active" : ""}`}>
              {slide}
            </h1>
          ))}
        </div>
        <p className="hero-lead">
          دسترسی سریع، امن و آنلاین به خدمات بانکی، خودرویی، دولتی و حقوقی — بدون مراجعه حضوری.
        </p>
        <div className="hero-cta">
          <Link to="/services" className="btn btn-primary">
            مشاهده خدمات
          </Link>
          <Link to="/solutions" className="btn btn-ghost">
            راهکارهای سازمانی
          </Link>
        </div>
        <div className="hero-dots" role="tablist" aria-label="اسلایدهای عنوان">
          {heroSlides.map((slide, i) => (
            <button
              key={slide}
              type="button"
              role="tab"
              aria-selected={i === index}
              className={i === index ? "dot is-active" : "dot"}
              onClick={() => setIndex(i)}
            >
              <span className="sr-only">{slide}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
