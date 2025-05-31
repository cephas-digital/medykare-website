import React from "react";
import visaicon from "../../assets/images/visaicon.png";
import gpayicon from "../../assets/images/gpayimg.png";
import applepayicon from "../../assets/images/applepayicon.png";
import paypalicon from "../../assets/images/paypalicon.png";
import stripeicon from "../../assets/images/stripeicon.png";
import bitpayicon from "../../assets/images/bitpayicon.png";

const TrustedBy = () => {
  const companies = [
    {
      name: "VISA",
      image: visaicon,
      alt: "VISA payment logo",
    },
    {
      name: "G Pay",
      image: gpayicon,
      alt: "Google Pay logo",
    },
    {
      name: "Apple Pay",
      image: applepayicon,
      alt: "Apple Pay logo",
    },
    {
      name: "PayPal",
      image: paypalicon,
      alt: "PayPal logo",
    },
    {
      name: "Stripe",
      image: stripeicon,
      alt: "Stripe logo",
    },
    {
      name: "BitPay",
      image: bitpayicon,
      alt: "BitPay logo",
    },
  ];

  // Duplicate the array to create seamless infinite scroll
  const duplicatedCompanies = [...companies, ...companies, ...companies];

  return (
    <section className="py-12 bg-gradient-to-b from-[#EFF3FF] my-16 to-[#FAFBFF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-center text-xl md:text-2xl text-[#000000] font-Outfit font-normal mb-8">
          Trusted By
        </h2>

        <div className="relative">
          {/* Gradient overlays for smooth fade effect */}
          {/* <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent z-10"></div> */}

          {/* Scrolling container */}
          <div className="flex animate-marquee hover:pause-animation">
            {duplicatedCompanies.map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className="flex items-center justify-center min-w-[200px] px-8"
              >
                <div className="flex items-center gap-3 opacity-60 hover:opacity-80 transition-opacity">
                  <img
                    src={company.image || "/placeholder.svg"}
                    alt={company.alt}
                    className=" w-28 h-11  object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-33.333%);
            }
          }
          
          .animate-marquee {
            animation: marquee 10s linear infinite;
          }
          
          .pause-animation:hover {
            animation-play-state: paused;
          }
        `,
        }}
      />
    </section>
  );
};

export default TrustedBy;
