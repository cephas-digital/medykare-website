import iconone from "../../assets/images/iconone.png";
import icontwo from "../../assets/images/icontwo.png";
import iconthree from "../../assets/images/iconthree.png";
import iconfour from "../../assets/images/iconfour.png";
import iconfive from "../../assets/images/iconfive.png";
import iconsix from "../../assets/images/iconsix.png";
import iconseven from "../../assets/images/iconseven.png";
import iconeight from "../../assets/images/iconeight.png";

const OurServices = () => {
  const services = [
    {
      image: iconone,
      alt: "General Consultation Icon",
      title: "General Consultation",
      description: "Primary care for common health issues",
      link: "#",
      width: "w-10",
      height: "h-10",
    },
    {
      image: icontwo,
      alt: "Diagnosis Icon",
      title: "Diagnosis",
      description: "Professional counseling and therapy",
      link: "#",
      width: "w-10",
      height: "h-10",
    },
    {
      image: iconthree,
      alt: "Pediatrics Icon",
      title: "Pediatrics",
      description: "Specialized care for children",
      link: "#",
      width: "w-10",
      height: "h-10",
    },
    {
      image: iconfour,
      alt: "Chronic Care Icon",
      title: "Chronic Care",
      description: "Ongoing support for chronic conditions",
      link: "#",
      width: "w-12",
      height: "h-12",
    },
    {
      image: iconfive,
      alt: "Prescription Services Icon",
      title: "Prescription Services",
      description: "Get prescription & medications delivered to your door",
      link: "#",
      width: "w-11", // 44px
      height: "h-13", // 52px - custom if needed
    },
    {
      image: iconsix,
      alt: "Medical Records Icon",
      title: "Medical Records",
      description: "Access your medical history and test results anytime",
      link: "#",
      width: "w-12",
      height: "h-12",
    },
    {
      image: iconseven,
      alt: "General Medicine Icon",
      title: "General Medicine",
      description: "Comprehensive medical care for common health issues",
      link: "#",
      width: "w-12",
      height: "h-12",
    },
    {
      image: iconeight,
      alt: "Video Consultations Icon",
      title: "Video Consultations",
      description:
        "Connect with healthcare providers through secure video calls",
      link: "#",
      width: "w-12",
      height: "h-7",
    },
  ];

  return (
    <section className="py-16 bg-[#F9FAFB]  lg:px-20 md:px-10 px-5">
      <div className="mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            data-aos="flip-right"
            data-aos-duration="1500"
            className="text-3xl sm:text-4xl font-bold text-[#000000] font-Outfit mb-4"
          >
            Our Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Image Icon with Custom Dimensions */}
              <div className="mb-4 flex items-center justify-start">
                <img
                  src={service.image}
                  alt={service.alt}
                  className={`${service.width} ${service.height} object-contain`}
                  //   style={{
                  //     filter:
                  //       "brightness(0) saturate(100%) invert(42%) sepia(93%) saturate(1352%) hue-rotate(215deg) brightness(119%) contrast(119%)",
                  //   }}
                />
              </div>

              {/* Content */}
              <h3 className="text-lg font-normal font-Outfit text-[#000000] mb-3">
                {service.title}
              </h3>
              <p className="text-[#4B5563] font-Outfit font-normal text-sm mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Learn More Link */}
              <a
                href={service.link}
                className="text-[#4F7DF3] text-sm font-normal font-Outfit hover:text-[#3B6BF1] transition-colors duration-200 inline-flex items-center gap-1"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
