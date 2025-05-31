import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import cont from "../../../assets/images/cont.png";

const ContactInfo = () => {
  return (
    <section className="py-16 bg-white ">
      <div className="container mx-auto text-center">
        {/* Header */}
        <div className="mb-16 ">
          <div className="grid justify-center">
            <div
              data-aos="zoom-out"
              data-aos-duration="1500"
              className="mb-16 py-16 px-6 lg:w-[749px] lg:h-[300px] grid justify-center items-center relative overflow-hidden"
              style={{
                backgroundImage: `url(${cont})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {" "}
              <h3 className="text-2xl font-Outfit mt-16 font-bold text-gray-900 mb-4">
                MedyKare
              </h3>
            </div>
          </div>
          <h2
            data-aos="flip-right"
            data-aos-duration="1500"
            className="text-4xl lg:text-5xl font-Outfit font-semibold text-[#262626] mb-6"
          >
            Contact Us
          </h2>
          <p className="text-[#333333] font-light md:text-[17px] text-[15px] max-w-5xl mx-auto leading-relaxed lg:px-0 md:px-10 px-5">
            We value your feedback, questions, and concerns at Nutritionist. Our
            dedicated team is here to assist you and provide the support you
            need on your nutritional journey. Please don't hesitate to reach out
            to us using any of the following contact methods
          </p>
        </div>

        {/* Contact Cards */}
        <div className="bg-[#1B1A31] py-12">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* Email Card */}
              <div
                data-aos="fade-up"
                data-aos-duration="1500"
                className="bg-[#232E43] py-10 flex justify-center items-center  rounded-lg text-center"
              >
                <div className=" space-y-3">
                  <div className="flex justify-center ">
                    <div className=" flex items-center justify-center">
                      <FaEnvelope className="text-white text-xl" />
                    </div>
                  </div>
                  <p className="text-white font-medium font-Outfit md:text-[17px] text-[15px] ">
                    contact@medykare.com
                  </p>
                </div>
              </div>

              {/* Phone Card */}
              <div
                data-aos="fade-down"
                data-aos-duration="1500"
                className="bg-[#232E43] flex py-10 justify-center items-center  rounded-lg text-center"
              >
                <div className=" space-y-3">
                  <div className="flex justify-center ">
                    <div className=" flex items-center justify-center">
                      <FaPhone className="text-white text-xl" />
                    </div>
                  </div>
                  <p className="text-white font-medium font-Outfit md:text-[17px] text-[15px]">
                    +91 00000 00000
                  </p>
                </div>
              </div>

              {/* Location Card */}
              <div
                data-aos="fade-up"
                data-aos-duration="1500"
                className="bg-[#232E43] py-10 flex justify-center items-center  rounded-lg text-center"
              >
                <div className=" space-y-3">
                  <div className="flex justify-center ">
                    <div className="flex items-center justify-center">
                      <FaMapMarkerAlt className="text-white text-xl" />
                    </div>
                  </div>
                  <p className="text-white font-medium font-Outfit md:text-[17px] text-[15px]">
                    Some Where in the World
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
