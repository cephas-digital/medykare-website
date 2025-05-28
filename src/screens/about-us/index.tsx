import {
  OurStorySection,
  OurVisionSection,
} from "../../components/layouts/about";
import AboutSection from "../../components/layouts/about-section";
import { AboutHero } from "../../components/layouts/heros";
import Navbar from "../../components/navbar";

const AboutUsPage = () => {
  return (
    <div className=" mt-20">
      <Navbar />
      <section>
        <AboutHero />
      </section>
      <section>
        <AboutSection />
      </section>
      <section>
        <OurVisionSection />
      </section>
      <section>
        <OurStorySection />
      </section>
    </div>
  );
};

export default AboutUsPage;
