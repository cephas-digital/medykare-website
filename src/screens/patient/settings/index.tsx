"use client";

import type React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MdPerson,
  MdNotifications,
  MdLock,
  MdLocalHospital,
  MdCreditCard,
  MdHelpOutline,
} from "react-icons/md";
import PatientPageTitle from "../../../components/patient/patient-page-title";
import FormInput from "../../../components/ui/FormInput";
import DashboardLayout from "../../../components/layouts/dashboard-layout";
import PatientHeader from "../../../components/patient/header";

interface SettingsMenuItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  route: string;
}

const SettingsPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const menuItems: SettingsMenuItem[] = [
    {
      id: "profile",
      label: "Profile",
      icon: MdPerson,
      route: "/patient/my-profile",
    },
    {
      id: "notifications",
      label: "Notifications",
      icon: MdNotifications,
      route: "/patient/notifications",
    },
    {
      id: "privacy",
      label: "Privacy",
      icon: MdLock,
      route: "/patient/privacy-settings",
    },
    {
      id: "health-records",
      label: "Health Records",
      icon: MdLocalHospital,
      route: "/patient/health-records",
    },
    {
      id: "payment-methods",
      label: "Payment Methods",
      icon: MdCreditCard,
      route: "/patient/payment-methods",
    },
    {
      id: "help-support",
      label: "Help & Support",
      icon: MdHelpOutline,
      route: "/patient/help-support",
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleMenuClick = (route: string) => {
    navigate(route);
  };

  return (
    <DashboardLayout>
      <PatientHeader />
      <div className="p-6 space-y-6">
        <PatientPageTitle breadcrumb="Account Settings" title="" />

        <div className="max-w-6xl">
          <h2 className="text-2xl font-normal text-[#000] mb-8 font-Outfit">
            Settings
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Profile & Menu */}
            <div className="space-y-6">
              {/* Profile Section */}
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="font-normal text-lg text-[#000] font-Outfit">
                  Sarah O. Adewunmi
                </h3>
                <p className="text-sm text-gray-600 font-Outfit">
                  sarah@example.com
                </p>
              </div>

              {/* Menu Items */}
              <div className="space-y-2">
                {menuItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleMenuClick(item.route)}
                      className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <IconComponent className="w-5 h-5 text-[#2D5BFF]" />
                      <span className="font-Outfit text-[#000]">
                        {item.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:col-span-2 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormInput
                  label=""
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="First Name"
                  className=" border rounded-lg"
                />
                <FormInput
                  label=""
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Last Name"
                  className=" border rounded-lg"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormInput
                  label=""
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  className=" border rounded-lg"
                />
                <FormInput
                  label=""
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone"
                  className=" border rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SettingsPage;
