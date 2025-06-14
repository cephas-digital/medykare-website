import type React from "react";
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import DoctorDashboardLayout from "../../../components/doctor/doctor-dashboard-layout";
import { DoctorSearchInput } from "../../../components/ui/inputs";

interface PatientData {
  id: string;
  name: string;
  dateOfBirth: string;
  gender: "Male" | "Female" | "Other";
  status: "Active" | "Inactive";
}

const DoctorPatientsPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const patients: PatientData[] = [
    {
      id: "1",
      name: "Ethan Carter",
      dateOfBirth: "1985-03-15",
      gender: "Male",
      status: "Active",
    },
    {
      id: "2",
      name: "Olivia Bennett",
      dateOfBirth: "1992-07-22",
      gender: "Female",
      status: "Active",
    },
    {
      id: "3",
      name: "Noah Thompson",
      dateOfBirth: "1978-11-08",
      gender: "Male",
      status: "Inactive",
    },
    {
      id: "4",
      name: "Ava Rodriguez",
      dateOfBirth: "1989-05-19",
      gender: "Female",
      status: "Active",
    },
    {
      id: "5",
      name: "Liam Walker",
      dateOfBirth: "1965-09-03",
      gender: "Male",
      status: "Inactive",
    },
    {
      id: "6",
      name: "Liam Walker",
      dateOfBirth: "1965-09-03",
      gender: "Male",
      status: "Inactive",
    },
  ];

  const getFilteredPatients = () => {
    let filtered = patients;

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter((patient) =>
        patient.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply status filter
    if (statusFilter === "active") {
      filtered = filtered.filter((patient) => patient.status === "Active");
    } else if (statusFilter === "inactive") {
      filtered = filtered.filter((patient) => patient.status === "Inactive");
    }

    return filtered;
  };

  const filteredPatients = getFilteredPatients();

  const handleViewPatient = (patientId: string) => {
    navigate(`/doctor/patients/${patientId}`);
  };

  return (
    <DoctorDashboardLayout>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-[#0D171C] mb-2 font-Outfit">
            Patients
          </h1>
          <p className="text-[#4F7A96] font-Outfit font-normal text-sm">
            Manage all patients
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-[#0D171C] mb-4 font-Outfit">
            Patient Management
          </h2>

          {/* Search Bar using new DoctorSearchInput */}
          <DoctorSearchInput
            placeholder="Search patients"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          {/* Filter Dropdowns */}
          <div className="flex space-x-4 mb-6">
            <div className="relative">
              <select
                value={activeFilter}
                onChange={(e) => setActiveFilter(e.target.value)}
                className="appearance-none font-Outfit font-medium text-sm text-[#0D141C] bg-[#E8EDF2] rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-[#2D5BFF] focus:border-transparent"
              >
                <option value="all">All Patients</option>
                <option value="recent">Recent</option>
                <option value="scheduled">Scheduled</option>
              </select>
              <MdKeyboardArrowDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#0D141C] w-4 h-4 pointer-events-none" />
            </div>

            <div className="relative">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="appearance-none font-Outfit font-medium text-sm text-[#0D141C] bg-[#E8EDF2] rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-[#2D5BFF] focus:border-transparent"
              >
                <option value="all">Active</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
              <MdKeyboardArrowDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#0D141C] w-4 h-4 pointer-events-none" />
            </div>

            <div className="relative">
              <select className="appearance-none font-Outfit font-medium text-sm text-[#0D141C] bg-[#E8EDF2] rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-[#2D5BFF] focus:border-transparent">
                <option>Inactive</option>
                <option>Active</option>
              </select>
              <MdKeyboardArrowDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#0D141C] w-4 h-4 pointer-events-none" />
            </div>
          </div>

          {/* Patients Table */}
          <div className="rounded-lg border border-gray-200 overflow-hidden">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-[#0D141C] font-Outfit">
                    Name
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-[#0D141C] font-Outfit">
                    Date of Birth
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-[#0D141C] font-Outfit">
                    Gender
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-[#0D141C] font-Outfit">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-[#0D141C] font-Outfit">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {filteredPatients.map((patient) => (
                  <tr key={patient.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-[#0D141C] font-Outfit font-normal">
                      {patient.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-[#4F7396] font-normal font-Outfit">
                      {patient.dateOfBirth}
                    </td>
                    <td className="px-6 py-4 text-sm text-[#4F7396] font-normal font-Outfit">
                      {patient.gender}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex px-8 py-1 rounded-lg text-sm font-medium text-[#0D141C] font-Outfit ${
                          patient.status === "Active"
                            ? "bg-[#F0F9FF] text-[#0369A1]"
                            : "bg-[#F9FAFB] text-[#6B7280]"
                        }`}
                      >
                        {patient.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleViewPatient(patient.id)}
                        className="text-[#4F7396] font-bold text-sm font-Outfit hover:underline cursor-pointer"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredPatients.length === 0 && (
            <div className="text-center py-8 text-gray-500 font-Outfit">
              No patients found matching your search criteria.
            </div>
          )}
        </div>
      </div>
    </DoctorDashboardLayout>
  );
};

export default DoctorPatientsPage;
