import React from "react";
import aboutimg from "../../assets/images/aboutimg.png";

const AboutSection = () => {
  return (
    <section className="pt-10 bg-gradient-to-b from-[#EEF2FF] to-[#FCFCFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-Outfit font-bold text-[#000000] mb-8">
            About US
          </h2>
        </div>

        {/* Image */}
        <div className="mb-12">
          <div className="relative max-w-4xl mx-auto">
            <img
              src={aboutimg}
              alt="Medical stethoscope with heart and healthy vegetables on wooden background"
              className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-t-3xl shadow-lg"
            />
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="text-lg text-[#000000] font-Outfit font-light leading-relaxed">
            Nec pellentesque porttitor consectetur at pretium urna. Id ultricies
            vel phasellus integer sed augue. Mattis nisl odio venenatis
            suspendisse. Dictum ornare non nibh condimentum quis. Tristique
            volutpat ut vel faucibus. Leo eu elit nulla odio eget massa amet
            velit. Bibendum auctor egestas tristique molestie. Ut eget risus
            ullamcorper placerat sagittis fringilla orci in. Elementum ac urna
            nulla pretium ut pellentesque aliquet molestie. Amet ut tempus sed
            tempor magnis. Lacus tellus lacinia ac sed eu elementum mauris.
            Sagittis mauris faucibus ut augue a a. Scelerisque nulla mi
            venenatis sapien nisl.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
