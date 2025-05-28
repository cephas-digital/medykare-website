import { FaFlask, FaHeartbeat, FaUserMd } from "react-icons/fa";
import Button from "../ui/buttons";

const ServicesGlance = () => {
  const services = [
    {
      icon: FaFlask,
      title: "Lab Diagnosis",
      description:
        "Egestas tellus facilisi ac facilisis arcu facilisis bibendum ultrices imperdiet. Morbi eleifend feugiat lacinia in. Metus sed adipiscing.",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      icon: FaHeartbeat,
      title: "Medical Check Up",
      description:
        "Viverra eros neque bibendum in consectetur. At pharetra orci etiam nunc. Ut enim posuere nulla lacinia mauris risus porttitor.",
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: FaUserMd,
      title: "Professional Doctor",
      description:
        "Viverra sed cras amet sociis et imperdiet mauris ut. Quam cras senectus tincidunt ipsum quam commodo sed lectus ac.",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
  ];

  return (
    <section className="py-16 bg-white md:px-10 px-5 lg:px-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold  font-Outfit text-gray-900 mb-4">
              Our Services at a Glance
            </h2>
          </div>
          <div>
            <p className="text-[#6C87AE] font-normal text-sm leading-relaxed">
              Risus tristique turpis est eleifend lorem. Amet enim nulla
              sagittis quis pellentesque ultrices eget elementum. Risus est
              justo quam eget rhoncus posuere.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 mt-10 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="text-center">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div
                    className={`w-20 h-20 ${service.bgColor} rounded-2xl flex items-center justify-center`}
                  >
                    <IconComponent
                      className={`text-3xl ${service.iconColor}`}
                    />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl lg:text-3xl text-[#031432] font-Outfit font-semibold mb-4">
                  {service.title}
                </h3>
                <p className="text-[#6C87AE] font-Outfit  text-left text-sm  leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Button */}
                <Button variant="secondary" size="lg">
                  Learn More
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGlance;
