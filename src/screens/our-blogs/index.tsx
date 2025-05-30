import React from "react";
import Navbar from "../../components/navbar";
import { BlogHero } from "../../components/layouts/heros";
import BlogSection from "../../components/layouts/blog/blog-section";
import { StatsSection } from "../../components/layouts/center-sections/center-sections";
import Footer from "../../components/footer";

const OurBlogs = () => {
  return (
    <div className=" mt-20 overflow-x-hidden">
      <Navbar />
      <section>
        <BlogHero />
      </section>
      <section>
        <BlogSection showAll={true} />
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

export default OurBlogs;
