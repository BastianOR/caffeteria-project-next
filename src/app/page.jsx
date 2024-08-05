import About from "@/components/landing-components/about/about";
import Hero from "@/components/landing-components/hero/hero";
import LandingBottom from "@/components/landing-components/landingbottom/landingbottom";
import Seducer from "@/components/landing-components/seducer/seducer";
/*import Hero from "../components/landing-components/hero/hero";*/

export default function LandingPage() {
  return (
    <div className="LandingPage">
      <Hero/>
      <About/>
      <Seducer/>
      <LandingBottom/>
    </div>
    
  );
}
