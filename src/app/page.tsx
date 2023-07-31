
import { homepageConfig } from "@/config/home-page.config";
import { Hero } from "@/components/hero/hero";
import { Spacer } from "@/styles/elements";
import { About } from "@/components/about/about";
import { Services } from "@/components/services/services";

export default function Home() {
  return (
    <main>
      <Hero data={homepageConfig.hero}/>
      <Spacer $times={3}/>
      <About data={homepageConfig.about}/>
      <Spacer $times={5}/>
      <Services data={homepageConfig.services}/>
      <Spacer $times={10}/>
      <p>hello</p>
    </main>
  );
}
