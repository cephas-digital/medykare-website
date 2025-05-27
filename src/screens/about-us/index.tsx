import { AboutHero } from "../../components/layouts/heros";
import Navbar from "../../components/navbar";

const AboutUsPage = () => {
  return (
    <div className=" mt-20">
      <Navbar />
      <section>
        <AboutHero />
      </section>
    </div>
  );
};

export default AboutUsPage;
