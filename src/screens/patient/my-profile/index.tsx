
import type React from "react";
import { useState } from "react";
import PatientPageTitle from "../../../components/patient/patient-page-title";
import FormInput from "../../../components/ui/FormInput";
import DashboardLayout from "../../../components/layouts/dashboard-layout";
import PatientHeader from "../../../components/patient/header";

const MyProfilePage: React.FC = () => {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "Sarah Adewunmi O",
    dateOfBirth: "15 March 1985",
    gender: "Female",
  });

  const [medicalInfo, setMedicalInfo] = useState({
    bloodType: "A+",
    allergies: "Penicillin",
    currentMedications: "Lisinopril, Metformin",
  });

  return (
    <DashboardLayout>
      <PatientHeader />
      <div className="p-6 space-y-6">
        <PatientPageTitle breadcrumb="Account Settings" title="" />

        <div className="max-w-6xl">
          <h2 className="text-3xl font-normal text-[#000] mb-8 font-Outfit">
            My Profile
          </h2>

          <div className=" flex items-center gap-4 mt-16 mb-10">
            <div className="w-24 h-24 bg-gray-200 rounded-full "></div>
            {/* Profile Header */}
            <div className="">
              <h3 className="text-2xl font-semibold text-[#000] mb-2 font-Outfit">
                Sarah O. Adewunmi
              </h3>
              <p className="text-base text-[#4B5563] font-normal font-Inter ">
                Member since January 2024
              </p>
              <p className="text-base text-[#4B5563] font-normal font-Inter">
                Patient ID: #123456
              </p>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ">
            {/* Personal Information */}
            <div>
              <h4 className="text-xl font-normal text-[#000] mb-6 font-Outfit">
                Personal Information
              </h4>
              <div className="space-y-6">
                <div className=" grid ">
                  <label
                    className=" font-Inter font-normal text-sm mb-1 text-[#4B5563]"
                    htmlFor=""
                  >
                    Full Name
                  </label>
                  <input
                    className=" border rounded-lg p-2"
                    value={personalInfo.fullName}
                    onChange={(e) =>
                      setPersonalInfo((prev) => ({
                        ...prev,
                        fullName: e.target.value,
                      }))
                    }
                    type="text"
                  />
                </div>

                <div className=" grid ">
                  <label
                    className=" font-Inter font-normal text-sm mb-1 text-[#4B5563]"
                    htmlFor=""
                  >
                    Date of Birth
                  </label>
                  <input
                    className=" border rounded-lg p-2"
                    value={personalInfo.dateOfBirth}
                    onChange={(e) =>
                      setPersonalInfo((prev) => ({
                        ...prev,
                        dateOfBirth: e.target.value,
                      }))
                    }
                    type="text"
                  />
                </div>

                <div className=" grid ">
                  <label
                    className=" font-Inter font-normal text-sm mb-1 text-[#4B5563]"
                    htmlFor=""
                  >
                    Gender
                  </label>
                  <input
                    className=" border rounded-lg p-2"
                    value={personalInfo.gender}
                    onChange={(e) =>
                      setPersonalInfo((prev) => ({
                        ...prev,
                        gender: e.target.value,
                      }))
                    }
                    type="text"
                  />
                </div>
              </div>
            </div>

            {/* Medical Information */}
            <div>
              <h4 className="text-xl font-normal text-[#000] mb-6 font-Outfit">
                Medical Information
              </h4>
              <div className="space-y-6">
                <div className=" grid ">
                  <label
                    className=" font-Inter font-normal text-sm mb-1 text-[#4B5563]"
                    htmlFor=""
                  >
                    Blood Type
                  </label>
                  <input
                    className=" border rounded-lg p-2"
                    value={medicalInfo.bloodType}
                    onChange={(e) =>
                      setMedicalInfo((prev) => ({
                        ...prev,
                        bloodType: e.target.value,
                      }))
                    }
                    type="text"
                  />
                </div>

                <div className=" grid ">
                  <label
                    className=" font-Inter font-normal text-sm mb-1 text-[#4B5563]"
                    htmlFor=""
                  >
                    Allergies
                  </label>
                  <input
                    className=" border rounded-lg p-2"
                    value={medicalInfo.allergies}
                    onChange={(e) =>
                      setMedicalInfo((prev) => ({
                        ...prev,
                        allergies: e.target.value,
                      }))
                    }
                    type="text"
                  />
                </div>

                <div className=" grid ">
                  <label
                    className=" font-Inter font-normal text-sm mb-1 text-[#4B5563]"
                    htmlFor=""
                  >
                    Current Medications
                  </label>
                  <input
                    className=" border rounded-lg p-2"
                    value={medicalInfo.currentMedications}
                    onChange={(e) =>
                      setMedicalInfo((prev) => ({
                        ...prev,
                        currentMedications: e.target.value,
                      }))
                    }
                    type="text"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MyProfilePage;
