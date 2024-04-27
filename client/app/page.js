import Hero from "./_components/hero";
import Orgnaization from "./_components/orgnaization";
import Subscribe from "./_components/subscribe";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24">
      <Hero />
      <Orgnaization />
      <Subscribe />
    </main>
  );
}
