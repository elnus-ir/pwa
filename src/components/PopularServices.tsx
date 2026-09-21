import { Link } from "react-router-dom";
import { popularServices } from "../data/content";
import { ServiceIcon } from "./ServiceIcon";

export function PopularServices() {
  return (
    <section className="section services-section" id="popular-services">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">دسترسی سریع</p>
            <h2>خدمات پرکاربرد</h2>
          </div>
          <Link to="/services" className="text-link">
            مشاهده همه خدمات
          </Link>
        </div>
        <div className="service-grid">
          {popularServices.map((service) => (
            <Link key={service.id} to={service.href} className="service-card">
              <span className="service-icon-wrap">
                <ServiceIcon name={service.icon} />
              </span>
              <span>{service.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
