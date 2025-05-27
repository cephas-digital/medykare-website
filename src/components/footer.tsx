import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { NewLogo } from "./layouts/logo";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Find a Doctor", href: "/doctors" },
    { name: "Book Appointment", href: "/appointment" },
  ];

  const services = [
    { name: "General Consultation", href: "/services/general" },
    { name: "Mental Health", href: "/services/mental-health" },
    { name: "Pediatrics", href: "/services/pediatrics" },
    { name: "Chronic Care", href: "/services/chronic-care" },
  ];

  const socialLinks = [
    { icon: FaFacebook, href: "#", label: "Facebook" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaLinkedin, href: "#", label: "LinkedIn" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-gray-900 text-white lg:px-20 md:px-10 px-5">
      <div className=" py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <NewLogo />
            <p className="text-gray-400 mt-4 mb-6">
              Making healthcare accessible to everyone, everywhere.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#4F7DF3] transition-colors duration-200"
                  >
                    <IconComponent className="text-lg" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaPhone className="text-[#4F7DF3]" />
                <span className="text-gray-400">+1 (888) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-[#4F7DF3]" />
                <span className="text-gray-400">contact@medykare.com</span>
              </div>
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#4F7DF3] mt-1" />
                <span className="text-gray-400">
                  123 Health Street, Medical City, MC 12345
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">© 2025 MedyKare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
