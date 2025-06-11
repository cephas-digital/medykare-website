import type React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import PatientPageTitle from "../../../components/patient/patient-page-title";
import DashboardLayout from "../../../components/layouts/dashboard-layout";
import PatientHeader from "../../../components/patient/header";

interface Laboratory {
  id: number;
  name: string;
  address: string;
  distance: string;
  status: "Open" | "Closed";
}

const NearbyLaboratoriesPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const testId = searchParams.get("test");

  const laboratories: Laboratory[] = [
    {
      id: 1,
      name: "MedPlus Laboratory",
      address: "123 Healthcare Ave",
      distance: "0.5 km",
      status: "Open",
    },
    {
      id: 2,
      name: "MedPlus Laboratory",
      address: "123 Healthcare Ave",
      distance: "0.5 km",
      status: "Open",
    },
    {
      id: 3,
      name: "City Labstore",
      address: "456 Medical Street",
      distance: "1.2 km",
      status: "Open",
    },
    {
      id: 4,
      name: "City Labstore",
      address: "456 Medical Street",
      distance: "1.2 km",
      status: "Open",
    },
    {
      id: 5,
      name: "Health First Lab",
      address: "789 Wellness Road",
      distance: "2.0 km",
      status: "Closed",
    },
    {
      id: 6,
      name: "Health First Lab",
      address: "789 Wellness Road",
      distance: "2.0 km",
      status: "Closed",
    },
  ];

  const handleSelectLab = (labId: number) => {
    navigate(`/patient/lab-results?lab=${labId}&test=${testId}`);
  };

  return (
    <DashboardLayout>
      <PatientHeader />
      <div className="p-6 space-y-6">
        <PatientPageTitle breadcrumb="Laboratory Test" title="" />

        <div className="max-w-4xl">
          <h3 className="text-xl font-normal text-[#000] mb-8 font-Outfit">
            Nearby Laboratories
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {laboratories.map((lab) => (
              <div key={lab.id} className="bg-white rounded-lg p-6">
                <div className="mb-4">
                  <h4 className="font-bold text-base text-[#1E293B] mb-2 font-Outfit">
                    {lab.name}
                  </h4>
                  <p className="text-sm text-[#6B7280] font-Inter font-normal mb-1 ">
                    {lab.address}
                  </p>
                  <div className=" flex justify-between items-center">
                    <p className="text-sm text-[#6B7280] font-Inter font-normal mb-1">
                      {lab.distance}
                    </p>

                    <span
                      className={`inline-flex px-3 py-1 rounded-full text-sm font-normal font-Inter ${
                        lab.status === "Open"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {lab.status}
                    </span>
                  </div>
                </div>

                <div className=" justify-center flex">
                  <button
                    onClick={() => handleSelectLab(lab.id)}
                    disabled={lab.status === "Closed"}
                    className={` w-72 py-2 rounded-lg font-medium text-base font-Outfit transition-colors ${
                      lab.status === "Open"
                        ? "border border-[#2D5BFF] text-[#2D5BFF] hover:bg-blue-50"
                        : "border border-gray-300 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    Select
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

export default NearbyLaboratoriesPage;
