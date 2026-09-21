import { Hero } from "../components/Hero";
import { PopularServices } from "../components/PopularServices";
import { Stats } from "../components/Stats";

export function HomePage() {
  return (
    <>
      <Hero />
      <PopularServices />
      <Stats />
    </>
  );
}
