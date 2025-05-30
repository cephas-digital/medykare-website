import Footer from "../../components/footer";
import {
  OurStorySection,
  OurVisionSection,
  OurWorksSpeaksSection,
} from "../../components/layouts/about";
import AboutSection from "../../components/layouts/about-section";
import { StatsSection } from "../../components/layouts/center-sections/center-sections";
import { AboutHero } from "../../components/layouts/heros";
import ServicesGlance from "../../components/layouts/services-glance";
import Navbar from "../../components/navbar";

const AboutUsPage = () => {
  return (
    <div className=" mt-20 overflow-x-hidden">
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
      <section>
        <OurWorksSpeaksSection />
      </section>
      <section>
        <ServicesGlance />
      </section>
      <section>
        <StatsSection />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default AboutUsPage;
