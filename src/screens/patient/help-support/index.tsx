import type React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MdSearch,
  MdHelpOutline,
  MdChat,
  MdEmail,
  MdPhone,
} from "react-icons/md";
import PatientPageTitle from "../../../components/patient/patient-page-title";
import DashboardLayout from "../../../components/layouts/dashboard-layout";
import PatientHeader from "../../../components/patient/header";
import { IoMdHelpCircle } from "react-icons/io";
import { IoIosChatbubbles } from "react-icons/io";
import { FaEnvelope } from "react-icons/fa";

const HelpSupportPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const supportOptions = [
    {
      id: "faqs",
      title: "FAQs",
      description: "Get help with your queries",
      icon: IoMdHelpCircle,
      action: () => console.log("Navigate to FAQs"),
    },
    {
      id: "live-chat",
      title: "Live Chat",
      description: "Get help with your queries",
      icon: IoIosChatbubbles,
      action: () => navigate("/patient/live-chat"),
    },
    {
      id: "email-support",
      title: "Email Support",
      description: "Get help with your queries",
      icon: FaEnvelope,
      action: () => console.log("Open email support"),
    },
  ];

  const contactMethods = [
    {
      id: "live-chat-contact",
      title: "Live Chat",
      subtitle: "Available 24/7",
      icon: IoIosChatbubbles,
    },
    {
      id: "email-contact",
      title: "Email",
      subtitle: "support@medykare.com",
      icon: FaEnvelope,
    },
    {
      id: "phone-contact",
      title: "Phone",
      subtitle: "1-800-MEDYKARE",
      icon: MdPhone,
    },
  ];

  return (
    <DashboardLayout>
      <PatientHeader />
      <div className="p-6 space-y-6">
        <PatientPageTitle breadcrumb="Account Settings" title="" />

        <div className="max-w-4xl">
          <h2 className="text-3xl font-normal text-[#000] mb-4 mt-8 font-Outfit">
            Help & Support
          </h2>

          {/* Search Bar */}
          <div className="relative mb-8">
            <MdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for help..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 font-Inter font-normal text-base placeholder:text-[#9CA3AF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D5BFF] focus:border-transparent "
            />
          </div>

          {/* Support Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {supportOptions.map((option) => {
              const IconComponent = option.icon;
              return (
                <div
                  key={option.id}
                  onClick={option.action}
                  className="text-center p-6  rounded-lg hover:border-[#2D5BFF] hover:bg-blue-50 cursor-pointer transition-all"
                >
                  <div className="w-12 h-12 bg-[#DBEAFE] rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-[#2563EB]" />
                  </div>
                  <h3 className="font-normal text-base text-[#000000] mb-2 font-Outfit">
                    {option.title}
                  </h3>
                  <p className="text-sm text-[#4B5563] font-Inter">
                    {option.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Frequently Asked Questions */}
          <div className="mb-12">
            <h3 className="text-lg font-normal text-[#000] mb-6 font-Outfit">
              Frequently Asked Questions
            </h3>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <p className="text-gray-600 font-Outfit text-base">
                No FAQs available at the moment.
              </p>
            </div>
            <p className="text-sm text-[#6B7280] font-normal font-Inter mt-4">
              Last updated: January 23, 2025
            </p>
          </div>

          {/* Contact Support */}
          <div>
            <h3 className="text-lg font-normal text-[#000] mb-2 font-Outfit">
              Contact Support
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactMethods.map((method) => {
                const IconComponent = method.icon;
                return (
                  <div key={method.id} className="text-center p-6">
                    <div className=" flex items-center justify-center mx-auto mb-2">
                      <IconComponent className="w-6 h-6 text-[#2563EB]" />
                    </div>
                    <h4 className="font-normal text-base text-[#000] mb-1 font-Outfit">
                      {method.title}
                    </h4>
                    <p className="text-sm text-[#4B5563] font-Inter font-normal">
                      {method.subtitle}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default HelpSupportPage;
