import type React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdScience } from "react-icons/md";
import PatientPageTitle from "../../../components/patient/patient-page-title";
import DashboardLayout from "../../../components/layouts/dashboard-layout";
import PatientHeader from "../../../components/patient/header";
import { FaHouseChimney } from "react-icons/fa6";
import { FaClinicMedical } from "react-icons/fa";

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
      icon: MdScience,
    },
    {
      id: "diabetes-screening",
      name: "Diabetes Screening",
      price: "$49",
      icon: MdScience,
    },
    {
      id: "thyroid-profile",
      name: "Thyroid Profile",
      price: "$49",
      icon: MdScience,
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
      <div className="p-6 space-y-6">
        <PatientPageTitle breadcrumb="Laboratory Test" title="" />

        <div className="">
          <div className=" max-w-md">
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
                  <div className="flex flex-col items-center mb-4">
                    <div className="w-12 h-12 bg-[#2D5BFF] rounded-lg flex items-center justify-center mb-3">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-normal text-base text-[#000] mb-2 font-Outfit">
                      {test.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 font-Outfit">
                      Starting from {test.price}
                    </p>
                  </div>
                  <button
                    onClick={() => handleBookNow(test.id)}
                    className="w-full border border-[#2D5BFF] text-[#2D5BFF] py-2 rounded-lg font-normal font-Inter text-sm hover:bg-blue-50 transition-colors"
                  >
                    Book Now
                  </button>
                </div>
              );
            })}
          </div>

          {/* Recent Lab Results */}
          <div>
            <h3 className="text-xl font-normal text-[#000] mb-6 font-Outfit">
              Recent Lab Results
            </h3>
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="grid grid-cols-4 gap-4 p-4 bg-gray-50 text-sm font-normal text-gray-600 font-Outfit">
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
                    <span className="font-Outfit text-[#000]">
                      {result.testName}
                    </span>
                    <span className="font-Outfit text-gray-600">
                      {result.date}
                    </span>
                    <span
                      className={`inline-flex px-2 py-1 rounded-full text-xs font-normal font-Outfit ${getStatusColor(
                        result.status
                      )}`}
                    >
                      {result.status}
                    </span>
                    <button
                      onClick={() => handleViewResult(result.testName)}
                      className="text-[#2D5BFF] font-normal font-Outfit hover:underline text-left text-sm"
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
