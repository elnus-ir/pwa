const stats = [
  { value: "+۱۰", label: "هزار کاربر فعال" },
  { value: "+۱ میلیون", label: "خدمات موفق در ماه" },
  { value: "+۵", label: "مشتریان سازمانی" },
];

export function Stats() {
  return (
    <section className="section stats-section">
      <div className="container stats-grid">
        {stats.map((item) => (
          <article key={item.label} className="stat-card">
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
