import type React from "react";
import { useSearchParams } from "react-router-dom";
import { MdAssignment, MdShowChart, MdDownload } from "react-icons/md";
import PatientPageTitle from "../../../components/patient/patient-page-title";
import DashboardLayout from "../../../components/layouts/dashboard-layout";
import PatientHeader from "../../../components/patient/header";
import iconnineteen from "../../../assets/images/iconnineteen.png";

interface LabResult {
  name: string;
  date: string;
  status: "Normal" | "Review Required" | "Abnormal";
}

const LabResultsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const testName = searchParams.get("test");

  const labResults: LabResult[] = [
    {
      name: "Complete Blood Count",
      date: "Nov 30, 2023",
      status: "Normal",
    },
    {
      name: "Thyroid Function",
      date: "Nov 25, 2023",
      status: "Review Required",
    },
  ];

  const glucoseData = [
    { month: "Jan", value: 100 },
    { month: "Feb", value: 85 },
    { month: "Mar", value: 90 },
    { month: "Apr", value: 82 },
    { month: "May", value: 88 },
    { month: "Jun", value: 85 },
  ];

  const handleDownload = (resultName: string) => {
    console.log(`Downloading ${resultName}`);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Normal":
        return "bg-green-100 text-green-700";
      case "Review Required":
        return "bg-yellow-100 text-yellow-700";
      case "Abnormal":
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

        <div className="max-w-xl">
          {/* New Results Notification */}
          <div className="bg-white rounded-lg p-6 mb-8">
            <div className="flex items-start justify-between">
              <div className="items-start ">
                <div>
                  <img className=" w-10 h-10" src={iconnineteen} alt="" />
                </div>
                <div>
                  <h3 className="font-light text-xl text-[#000000] mb-2 font-Outfit">
                    Lab Results is Ready!
                  </h3>
                  <p className="text-base text-[#6B7280] font-Inter  font-semibold ">
                    View your test results below
                  </p>
                </div>
              </div>
              <div className="text-right">
                <span className="inline-flex font-Outfit font-normal text-sm px-3 py-1 bg-green-100 text-[#4CAF50] rounded-full  mb-3">
                  2 new results
                </span>
              </div>
            </div>
          </div>
          <div className=" flex justify-between items-center p-6">
            <p className="text-sm text-[#6B7280] font-Outfit">Last updated</p>
            <p className="text-base text-[#000] font-Outfit">Today, 2:30 PM</p>
          </div>

          {/* Lab Results Chart */}
          <div className="bg-white rounded-lg p-6 mb-8">
            <div className="flex items-center mb-8">
              <MdShowChart className="w-6 h-6 text-[#2D5BFF] mr-3" />
              <h3 className="font-normal text-lg text-[#000] font-Outfit">
                Lab Results
              </h3>
            </div>

            <div>
              <h4 className="font-normal text-base text-[#000] mb-6 font-Outfit">
                Glucose Levels (mg/dL)
              </h4>
              <div className="relative">
                <svg className="w-full h-80" viewBox="0 0 700 320">
                  {/* Grid lines - Horizontal */}
                  <defs>
                    <pattern
                      id="horizontalGrid"
                      width="100%"
                      height="64"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M 0 64 L 700 64"
                        fill="none"
                        stroke="#E5E7EB"
                        strokeWidth="1"
                        strokeDasharray="2,2"
                      />
                    </pattern>
                    <pattern
                      id="verticalGrid"
                      width="116.67"
                      height="100%"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M 116.67 0 L 116.67 320"
                        fill="none"
                        stroke="#E5E7EB"
                        strokeWidth="1"
                        strokeDasharray="2,2"
                      />
                    </pattern>
                  </defs>

                  {/* Background grid */}
                  <rect
                    width="100%"
                    height="100%"
                    fill="url(#horizontalGrid)"
                  />
                  <rect width="100%" height="100%" fill="url(#verticalGrid)" />

                  {/* Y-axis labels */}
                  <text
                    x="30"
                    y="40"
                    className="text-sm fill-gray-600 font-Outfit"
                    textAnchor="middle"
                  >
                    100
                  </text>
                  <text
                    x="30"
                    y="104"
                    className="text-sm fill-gray-600 font-Outfit"
                    textAnchor="middle"
                  >
                    75
                  </text>
                  <text
                    x="30"
                    y="168"
                    className="text-sm fill-gray-600 font-Outfit"
                    textAnchor="middle"
                  >
                    50
                  </text>
                  <text
                    x="30"
                    y="232"
                    className="text-sm fill-gray-600 font-Outfit"
                    textAnchor="middle"
                  >
                    25
                  </text>
                  <text
                    x="30"
                    y="296"
                    className="text-sm fill-gray-600 font-Outfit"
                    textAnchor="middle"
                  >
                    0
                  </text>

                  {/* Chart line */}
                  <polyline
                    fill="none"
                    stroke="#2D5BFF"
                    strokeWidth="3"
                    points="80,36 197,104 314,76 431,108 548,92 665,104"
                  />

                  {/* Data points */}
                  <circle cx="80" cy="36" r="5" fill="#2D5BFF" />
                  <circle cx="197" cy="104" r="5" fill="#2D5BFF" />
                  <circle cx="314" cy="76" r="5" fill="#2D5BFF" />
                  <circle cx="431" cy="108" r="5" fill="#2D5BFF" />
                  <circle cx="548" cy="92" r="5" fill="#2D5BFF" />
                  <circle cx="665" cy="104" r="5" fill="#2D5BFF" />

                  {/* X-axis labels */}
                  <text
                    x="80"
                    y="315"
                    className="text-sm fill-gray-600 font-Outfit"
                    textAnchor="middle"
                  >
                    Jan
                  </text>
                  <text
                    x="197"
                    y="315"
                    className="text-sm fill-gray-600 font-Outfit"
                    textAnchor="middle"
                  >
                    Feb
                  </text>
                  <text
                    x="314"
                    y="315"
                    className="text-sm fill-gray-600 font-Outfit"
                    textAnchor="middle"
                  >
                    Mar
                  </text>
                  <text
                    x="431"
                    y="315"
                    className="text-sm fill-gray-600 font-Outfit"
                    textAnchor="middle"
                  >
                    Apr
                  </text>
                  <text
                    x="548"
                    y="315"
                    className="text-sm fill-gray-600 font-Outfit"
                    textAnchor="middle"
                  >
                    May
                  </text>
                  <text
                    x="665"
                    y="315"
                    className="text-sm fill-gray-600 font-Outfit"
                    textAnchor="middle"
                  >
                    Jun
                  </text>
                </svg>
              </div>
            </div>
          </div>

          {/* Individual Test Results */}
          <div className="space-y-6">
            {labResults.map((result, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-4"
              >
                <div>
                  <h4 className="font-normal text-base text-[#000] mb-1 font-Outfit">
                    {result.name}
                  </h4>
                  <p className="text-sm text-[#6B7280] font-Outfit">
                    {result.date}
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <span
                    className={`inline-flex px-3 py-1 rounded-full text-sm font-normal font-Outfit ${getStatusColor(
                      result.status
                    )}`}
                  >
                    {result.status}
                  </span>
                  <button
                    onClick={() => handleDownload(result.name)}
                    className="p-2 text-[#2D5BFF] hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    <MdDownload className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default LabResultsPage;
