import type React from "react";
import { useState } from "react";
import DoctorDashboardLayout from "../../../components/doctor/doctor-dashboard-layout";

const DoctorSettingsPage: React.FC = () => {
  const [isOnline, setIsOnline] = useState(true);
  const [formData, setFormData] = useState({
    firstName: "Alex B.",
    lastName: "Turner",
    email: "alex@example.com",
    phone: "",
    openingTime: "",
    closingTime: "",
    emailAddress: "",
    password: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleToggleOnline = () => {
    setIsOnline(!isOnline);
  };

  return (
    <DoctorDashboardLayout>
      <div className="p-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-[#0D171C] mb-2 font-Outfit">
              My Account
            </h1>
            <p className="text-[#4F7A96] font-Outfit font-normal text-sm">
              Account settings
            </p>
          </div>

          {/* Profile Section */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center mb-4 overflow-hidden">
              <img
                src="/placeholder.svg?height=96&width=96"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-xl font-semibold text-[#0D171C] mb-1 font-Outfit">
              Alex B. Turner
            </h2>
            <p className="text-[#6B7280] font-Outfit text-sm">
              alex@example.com
            </p>
          </div>

          {/* Personal Information Form */}
          <div className="mb-8">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="First Name"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                className="w-full px-4 py-3 text-gray-700 bg-white rounded-lg border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 focus:border-transparent placeholder-[#9CA3AF] font-Outfit"
              />
              <input
                type="text"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                className="w-full px-4 py-3 text-gray-700 bg-white rounded-lg border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 focus:border-transparent placeholder-[#9CA3AF] font-Outfit"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="w-full px-4 py-3 text-gray-700 bg-white rounded-lg border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 focus:border-transparent placeholder-[#9CA3AF] font-Outfit"
              />
              <input
                type="tel"
                placeholder="Phone"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="w-full px-4 py-3 text-gray-700 bg-white rounded-lg border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 focus:border-transparent placeholder-[#9CA3AF] font-Outfit"
              />
            </div>
          </div>

          {/* Availability Status */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-[#0D171C] mb-6 font-Outfit">
              Availability Status
            </h3>

            {/* Online Status Toggle */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h4 className="text-base font-medium text-[#0D171C] mb-1 font-Outfit">
                  Online Status
                </h4>
                <p className="text-sm text-[#6B7280] font-Outfit">
                  Show doctor as available
                </p>
              </div>
              <button
                onClick={handleToggleOnline}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  isOnline ? "bg-blue-600" : "bg-gray-200"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isOnline ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            {/* Operating Hours */}
            <div>
              <h4 className="text-base font-medium text-[#0D171C] mb-4 font-Outfit">
                Operating Hours
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="time"
                  placeholder="Opening Time"
                  value={formData.openingTime}
                  onChange={(e) =>
                    handleInputChange("openingTime", e.target.value)
                  }
                  className="w-full px-4 py-3 text-gray-700 bg-white rounded-lg border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 focus:border-transparent placeholder-[#9CA3AF] font-Outfit"
                />
                <input
                  type="time"
                  placeholder="Closing Time"
                  value={formData.closingTime}
                  onChange={(e) =>
                    handleInputChange("closingTime", e.target.value)
                  }
                  className="w-full px-4 py-3 text-gray-700 bg-white rounded-lg border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 focus:border-transparent placeholder-[#9CA3AF] font-Outfit"
                />
              </div>
            </div>
          </div>

          {/* Account Settings */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-[#0D171C] mb-6 font-Outfit">
              Account Settings
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#374151] mb-2 font-Outfit">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.emailAddress}
                  onChange={(e) =>
                    handleInputChange("emailAddress", e.target.value)
                  }
                  className="w-full px-4 py-3 text-gray-700 bg-white rounded-lg border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 focus:border-transparent font-Outfit"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#374151] mb-2 font-Outfit">
                  Password
                </label>
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) =>
                    handleInputChange("password", e.target.value)
                  }
                  className="w-full px-4 py-3 text-gray-700 bg-white rounded-lg border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 focus:border-transparent font-Outfit"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DoctorDashboardLayout>
  );
};

export default DoctorSettingsPage;
