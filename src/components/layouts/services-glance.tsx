import Button from "../ui/buttons";
import iconnine from "../../assets/images/iconnine.png";
import iconten from "../../assets/images/iconten.png";
import iconeleven from "../../assets/images/iconeleven.png";

const ServicesGlance = () => {
  const services = [
    {
      icon: iconnine,
      title: "Lab Diagnosis",
      description:
        "Egestas tellus facilisi ac facilisis arcu facilisis bibendum ultrices imperdiet. Morbi eleifend feugiat lacinia in. Metus sed adipiscing.",
      bgColor: "bg-purple-100",
    },
    {
      icon: iconten,
      title: "Medical Check Up",
      description:
        "Viverra eros neque bibendum in consectetur. At pharetra orci etiam nunc. Ut enim posuere nulla lacinia mauris risus porttitor.",
      bgColor: "bg-green-100",
    },
    {
      icon: iconeleven,
      title: "Professional Doctor",
      description:
        "Viverra sed cras amet sociis et imperdiet mauris ut. Quam cras senectus tincidunt ipsum quam commodo sed lectus ac.",
      bgColor: "bg-blue-100",
    },
  ];

  return (
    <section className="py-16 bg-white md:px-10 px-5 lg:px-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 mb-12">
          <div>
            <h2 className="text-3xl sm:text-3xl font-semibold font-Outfit text-[#031432] mb-4">
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
        <div className="grid grid-cols-1 mt-14 md:grid-cols-3 gap-8 ">
          {services.map((service, index) => (
            <div
              key={index}
              className=" shadow-md p-5 rounded-lg transition-transform transform hover:scale-105"
            >
              <div className="flex  mb-6">
                <div className="">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-12 h-12 object-contain"
                  />
                </div>
              </div>

              <h3 className="text-base lg:text-xl text-[#031432] text-left font-Outfit font-semibold mb-4">
                {service.title}
              </h3>
              <p className="text-[#6C87AE] font-Outfit text-left text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              <Button variant="secondary" size="lg">
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGlance;
