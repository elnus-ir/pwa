import { Link } from "react-router-dom";

type Props = {
  title: string;
  description: string;
};

export function PlaceholderPage({ title, description }: Props) {
  return (
    <section className="section placeholder-page">
      <div className="container narrow">
        <h1>{title}</h1>
        <p className="hero-lead">{description}</p>
        <Link to="/" className="btn btn-primary">
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </section>
  );
}
