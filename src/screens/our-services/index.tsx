import React from "react";
import Navbar from "../../components/navbar";
import { ServiceHero } from "../../components/layouts/heros";
import FeaturesSection from "../../components/layouts/features-section";
import OurServices from "../../components/layouts/our-services";
import CTASection from "../../components/layouts/cta-section";
import Footer from "../../components/footer";

const OurServicesPage = () => {
  return (
    <div className="mt-20 overflow-x-hidden">
      <Navbar />
      <section>
        <ServiceHero />
      </section>
      <section>
        <FeaturesSection />
      </section>
      <section>
        <OurServices />
      </section>
      <section>
        <CTASection />
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
};

export default OurServicesPage;
