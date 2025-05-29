import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        {/* Header */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">MedyKare</h3>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Contact Us
          </h2>
          <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We value your feedback, questions, and concerns at Nutritionist. Our
            dedicated team is here to assist you and provide the support you
            need on your nutritional journey. Please don't hesitate to reach out
            to us using any of the following contact methods
          </p>
        </div>

        {/* Contact Cards */}
        <div className="bg-[#2D3748] py-12">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* Email Card */}
              <div className="bg-[#374151] rounded-lg p-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-[#4F7DF3] rounded-lg flex items-center justify-center">
                    <FaEnvelope className="text-white text-xl" />
                  </div>
                </div>
                <p className="text-white font-medium">contact@medykare.com</p>
              </div>

              {/* Phone Card */}
              <div className="bg-[#374151] rounded-lg p-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-[#4F7DF3] rounded-lg flex items-center justify-center">
                    <FaPhone className="text-white text-xl" />
                  </div>
                </div>
                <p className="text-white font-medium">+91 00000 00000</p>
              </div>

              {/* Location Card */}
              <div className="bg-[#374151] rounded-lg p-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-[#4F7DF3] rounded-lg flex items-center justify-center">
                    <FaMapMarkerAlt className="text-white text-xl" />
                  </div>
                </div>
                <p className="text-white font-medium">
                  Some Where in the World
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
