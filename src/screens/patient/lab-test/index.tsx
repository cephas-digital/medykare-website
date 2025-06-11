import type React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import PatientPageTitle from "../../../components/patient/patient-page-title";
import DashboardLayout from "../../../components/layouts/dashboard-layout";
import PatientHeader from "../../../components/patient/header";
import { FaHouseChimney } from "react-icons/fa6";
import { FaClinicMedical } from "react-icons/fa";
import { RiMicroscopeFill } from "react-icons/ri";

interface Test {
  id: string;
  name: string;
  price: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface LabResult {
  testName: string;
  date: string;
  status: "Completed" | "Pending" | "Review Required";
}

const LabTestPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCollection, setSelectedCollection] = useState<
    "home" | "center"
  >("home");

  const tests: Test[] = [
    {
      id: "complete-blood-count",
      name: "Complete Blood Count",
      price: "$49",
      icon: RiMicroscopeFill,
    },
    {
      id: "diabetes-screening",
      name: "Diabetes Screening",
      price: "$49",
      icon: RiMicroscopeFill,
    },
    {
      id: "thyroid-profile",
      name: "Thyroid Profile",
      price: "$49",
      icon: RiMicroscopeFill,
    },
  ];

  const recentResults: LabResult[] = [
    {
      testName: "Complete Blood Count",
      date: "Jan 15, 2024",
      status: "Completed",
    },
    {
      testName: "Lipid Panel",
      date: "Jan 10, 2024",
      status: "Completed",
    },
    {
      testName: "Thyroid Function",
      date: "Jan 5, 2024",
      status: "Completed",
    },
  ];

  const handleBookTest = () => {
    navigate("/patient/nearby-laboratories");
  };

  const handleBookNow = (testId: string) => {
    navigate(`/patient/nearby-laboratories?test=${testId}`);
  };

  const handleViewResult = (testName: string) => {
    navigate(`/patient/lab-results?test=${encodeURIComponent(testName)}`);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-700";
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Review Required":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <DashboardLayout>
      <PatientHeader />
      <div className="p-6 ">
        <PatientPageTitle breadcrumb="Laboratory Test" title="" />

        <div className="">
          <div className=" max-w-md mb-16">
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div
                onClick={() => setSelectedCollection("home")}
                className={`p-6 rounded-lg border-2 cursor-pointer transition-all ${
                  selectedCollection === "home"
                    ? "border-[#2D5BFF] bg-blue-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="flex flex-col items-center text-center">
                  <FaHouseChimney
                    className={`w-8 h-8 mb-3 ${
                      selectedCollection === "home"
                        ? "text-[#2D5BFF]"
                        : "text-gray-600"
                    }`}
                  />
                  <h3 className="font-medium text-base text-[#000] mb-1 font-Outfit">
                    Home Collection
                  </h3>
                  <p className="text-sm text-[#4B5563] font-normal font-Inter">
                    From $29
                  </p>
                </div>
              </div>

              <div
                onClick={() => setSelectedCollection("center")}
                className={`p-6 rounded-lg border-2 cursor-pointer transition-all ${
                  selectedCollection === "center"
                    ? "border-[#2D5BFF] bg-blue-50"
                    : "border-[#E5E7EB] hover:border-gray-300"
                }`}
              >
                <div className="flex flex-col items-center text-center">
                  <FaClinicMedical
                    className={`w-8 h-8 mb-3 ${
                      selectedCollection === "center"
                        ? "text-[#2D5BFF]"
                        : "text-gray-600"
                    }`}
                  />
                  <h3 className="font-medium text-base text-[#000] mb-1 font-Outfit">
                    Visit Center
                  </h3>
                  <p className="text-sm text-[#4B5563] font-normal font-Inter">
                    From $19
                  </p>
                </div>
              </div>
            </div>
            {/* Book Test Button */}
            <button
              onClick={handleBookTest}
              className="w-full bg-[#2D5BFF] text-white py-3 font-Outfit font-bold text-base rounded-lg hover:bg-blue-600 transition-colors mb-8"
            >
              Book Test
            </button>
          </div>

          {/* Available Tests */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {tests.map((test) => {
              const IconComponent = test.icon;
              return (
                <div key={test.id} className="">
                  <div className="flex flex-col  mb-4">
                    <div className="w-12 h-12 flex items-center mb-3">
                      <IconComponent className="w-10 h-10 text-[#2563EB]" />
                    </div>
                    <h3 className="font-semibold text-base text-[#111827] mb-2 font-Outfit">
                      {test.name}
                    </h3>
                    <p className="text-base text-[#4B5563] font-Inter font-normal mb-4 ">
                      Starting from {test.price}
                    </p>
                  </div>
                  <button
                    onClick={() => handleBookNow(test.id)}
                    className="w-full border border-[#2563EB] font-Outfit font-normal text-base text-[#2D5BFF] py-2 rounded-lg  hover:bg-blue-50 transition-colors"
                  >
                    Book Now
                  </button>
                </div>
              );
            })}
          </div>

          {/* Recent Lab Results */}
          <div className="">
            <h3 className="text-base font-normal text-[#000] mb-6 font-Outfit">
              Recent Lab Results
            </h3>
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="grid grid-cols-4 gap-4 p-4  text-base font-normal text-[#4B5563] font-Outfit">
                <span>Test Name</span>
                <span>Date</span>
                <span>Status</span>
                <span>Actions</span>
              </div>
              <div className="divide-y divide-gray-100">
                {recentResults.map((result, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-4 gap-4 p-4 items-center"
                  >
                    <span className="font-Inter font-normal text-base text-[#000]">
                      {result.testName}
                    </span>
                    <span className="font-Inter font-normal text-base text-[#4B5563]">
                      {result.date}
                    </span>
                    <span
                      className={`inline-flex px-2 py-1 w-24 text-center rounded-full font-Inter font-normal text-sm ${getStatusColor(
                        result.status
                      )}`}
                    >
                      {result.status}
                    </span>
                    <button
                      onClick={() => handleViewResult(result.testName)}
                      className="text-[#16A34A] font-normal font-Inter hover:underline text-left text-sm"
                    >
                      View result
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default LabTestPage;
