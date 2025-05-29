"use client";

import type React from "react";

import { useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { TextArea, TextInput } from "../../ui/inputs";
import Button from "../../ui/buttons";
// import { PrimaryButton } from "./buttons";
// import { TextInput, TextArea } from "./inputs";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Contact Form */}
          <div className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Full Name
                </label>
                <TextInput
                  placeholder="Enter your Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <TextInput
                  type="email"
                  placeholder="Enter your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Phone Number
                </label>
                <TextInput
                  type="tel"
                  placeholder="Enter your Number"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <TextArea
                  placeholder="Enter your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                />
                <p className="text-gray-400 text-sm mt-2">Max 250 Chars</p>
              </div>

              {/* Submit Button */}
              <Button className="w-full">Send Message</Button>
            </form>
          </div>

          {/* Right Side - Map and Social Links */}
          <div className="space-y-6">
            {/* Map */}
            <div className="w-full h-80 bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890123!2d-74.0059413!3d40.7127753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMjEuNCJX!5e0!3m2!1sen!2sus!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MedyKare Location"
              ></iframe>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-12 h-12 bg-[#4F7DF3] rounded-lg flex items-center justify-center hover:bg-[#3B6BF1] transition-colors"
              >
                <FaFacebookF className="text-white text-lg" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-[#4F7DF3] rounded-lg flex items-center justify-center hover:bg-[#3B6BF1] transition-colors"
              >
                <FaTwitter className="text-white text-lg" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-[#4F7DF3] rounded-lg flex items-center justify-center hover:bg-[#3B6BF1] transition-colors"
              >
                <FaLinkedinIn className="text-white text-lg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
