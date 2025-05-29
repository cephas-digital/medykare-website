import React from "react";
import Navbar from "../../components/navbar";
import { ContactHero } from "../../components/layouts/heros";
import SecCtaSection from "../../components/layouts/SecCtaSection";
import ContactInfo from "../../components/layouts/contact/contact-info";
import ContactForm from "../../components/layouts/contact/contact-form";
import { StatsSection } from "../../components/layouts/center-sections/center-sections";
import Footer from "../../components/footer";

const ContactUs = () => {
  return (
    <div className=" mt-20">
      <Navbar />
      <section>
        <ContactHero />
      </section>
      <section>
        <ContactInfo />
      </section>
      <section>
        <ContactForm />
      </section>
      <section>
        <SecCtaSection />
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

export default ContactUs;
