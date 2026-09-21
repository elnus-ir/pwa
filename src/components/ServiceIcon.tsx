import type { Service } from "../data/content";

const paths: Record<Service["icon"], string> = {
  car: "M5 13h14l-1.2-4.2A2 2 0 0 0 15.9 7H8.1a2 2 0 0 0-1.9 1.8L5 13Zm-1 0-1 3v2h2v-1h14v1h2v-2l-1-3M7.5 16.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm9 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z",
  plate: "M4 8h16a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2Zm2 4h4M12 12h2",
  card: "M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8Zm0 3h18M6 15h4",
  iban: "M4 7h16v10H4V7Zm2 3h8M6 14h5",
  check: "M7 3h10l1 4H6L7 3Zm-1 4h12v14H6V7Zm4 5 2 2 4-5",
  passport: "M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm-4 6c.6-1.6 2.1-2.5 4-2.5s3.4.9 4 2.5",
  id: "M12 12a3 3 0 1 0-3-3 3 3 0 0 0 3 3Zm-7 8c.8-3 3.6-5 7-5s6.2 2 7 5",
  sana: "M12 3 4 7v5c0 5 3.4 8.8 8 10 4.6-1.2 8-5 8-10V7l-8-4Z",
  post: "M3 8l9-4 9 4v10H3V8Zm0 0 9 5 9-5",
  edu: "M3 10l9-5 9 5-9 5-9-5Zm4 6v3c2 1.5 4 2 5 2s3-.5 5-2v-3",
  postal: "M4 6h16v12H4V6Zm4 4h8M8 14h5",
  bounced: "M7 4h10v16H7V4Zm3 4h4M10 12h4M10 16h3",
};

export function ServiceIcon({ name }: { name: Service["icon"] }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="service-icon">
      <path
        d={paths[name]}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
