
import { homepageConfig } from "@/config/home-page.config";
import { Hero } from "@/components/hero/hero";

export default function Home() {
  return (
    <main>
      <Hero data={homepageConfig.hero}/>
      <div>hello</div>
    </main>
  );
}
