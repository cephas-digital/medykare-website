import type React from "react";
import PatientPageTitle from "../../../components/patient/patient-page-title";
import DashboardLayout from "../../../components/layouts/dashboard-layout";
import PatientHeader from "../../../components/patient/header";

const PrivacySettingsPage: React.FC = () => {
  const privacySections = [
    {
      number: "1.",
      title: "Data Collection",
      content:
        "We collect information that you provide directly to us, including but not limited to: personal information, payment details, and medical history.",
    },
    {
      number: "2.",
      title: "Usage of Information",
      content:
        "Your information helps us provide and improve our services, communicate with you, and ensure the security of your account.",
    },
    {
      number: "3.",
      title: "Security Measures",
      content:
        "We implement appropriate technical and organizational measures to protect your personal data.",
    },
    {
      number: "4.",
      title: "User Rights",
      content:
        "You have the right to access, correct, or delete your personal information at any time.",
    },
  ];

  return (
    <DashboardLayout>
      <PatientHeader />
      <div className="p-6 space-y-6">
        <PatientPageTitle breadcrumb="Account Settings" title="" />

        <div className="max-w-3xl pt-3">
          <h2 className="text-3xl font-normal text-[#000] mb-8 font-Outfit">
            Privacy Settings
          </h2>

          <div className="space-y-8">
            {privacySections.map((section, index) => (
              <div key={index}>
                <h3 className="text-lg font-normal text-[#000] mb-4 font-Outfit">
                  {section.number} {section.title}
                </h3>
                <p className="text-base text-[#4B5563] font-Inter font-normal leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <button className="text-[#2D5BFF] font-Inter font-bold text-sm hover:underline mb-4">
              Update now
            </button>
            <p className="text-sm text-[#6B7280] font-Inter font-normal">
              Last updated: January 23, 2025
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PrivacySettingsPage;
