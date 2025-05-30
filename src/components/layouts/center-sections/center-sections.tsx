import { FaClock, FaUserMd, FaShieldAlt } from "react-icons/fa";

// Statistics Section Component
export const StatsSection = () => {
  const stats = [
    {
      number: "100,000+",
      label: "Patients Served",
    },
    {
      number: "95%",
      label: "Patient Satisfaction",
    },
    {
      number: "1,000+",
      label: "Licensed Doctors",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50 lg:px-16 md:px-10 px-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <h3
                data-aos="flip-right"
                data-aos-duration="1500"
                className="text-4xl sm:text-5xl lg:text-6xl font-Outfit font-bold text-[#4F7DF3] mb-2"
              >
                {stat.number}
              </h3>
              <p className="text-lg md:text-base font-normal text-[#4B5563] font-Outfit ">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Why Choose MedyKare Section Component
export const WhyChooseSection = () => {
  const features = [
    {
      icon: FaClock,
      title: "24/7 Care",
      description: "Access healthcare services anytime, anywhere",
    },
    {
      icon: FaUserMd,
      title: "Licensed Professionals",
      description: "Connect with experienced, board-certified doctors",
    },
    {
      icon: FaShieldAlt,
      title: "Secure Consultations",
      description: "HIPAA-compliant platform for your privacy",
    },
  ];

  return (
    <section className="lg:py-16 md:py-16 py-10 bg-white lg:px-16 md:px-10 px-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            data-aos="flip-right"
            data-aos-duration="1500"
            className="text-3xl md:text-4xl font-bold font-Outfit text-[#000000] mb-4"
          >
            Why Choose MedyKare
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-10 lg:gap-20">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                data-aos="fade-left"
                data-aos-duration="1500"
                key={index}
                className="text-center lg:w-[260px]"
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className=" flex items-center justify-center">
                    <IconComponent className="text-4xl text-[#3B82F6] " />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl text-[#000000] font-normal mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#4B5563] font-Outfit font-normal text-base leading-relaxed max-w-sm mx-auto">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Combined Export for easy importing
const CenterSections = {
  StatsSection,
  WhyChooseSection,
};

export default CenterSections;
