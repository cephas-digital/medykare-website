import type React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdKeyboardArrowDown, MdSearch } from "react-icons/md";
import DoctorDashboardLayout from "../../../components/doctor/doctor-dashboard-layout";

interface PrescriptionData {
  id: string;
  patientName: string;
  date: string;
  medication: string;
  dosage: string;
  status: "Pending" | "Approved" | "Rejected";
}

const DoctorPrescriptionsPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [sortFilter, setSortFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [pendingFilter, setPendingFilter] = useState("pending");

  const prescriptions: PrescriptionData[] = [
    {
      id: "1",
      patientName: "Sophia Clark",
      date: "2024-07-26",
      medication: "Amoxicillin",
      dosage: "500mg",
      status: "Approved",
    },
    {
      id: "2",
      patientName: "Ethan Bennett",
      date: "2024-07-25",
      medication: "Ibuprofen",
      dosage: "200mg",
      status: "Pending",
    },
    {
      id: "3",
      patientName: "Olivia Carter",
      date: "2024-07-24",
      medication: "Paracetamol",
      dosage: "650mg",
      status: "Pending",
    },
    {
      id: "4",
      patientName: "Noah Davis",
      date: "2024-07-23",
      medication: "Aspirin",
      dosage: "325mg",
      status: "Pending",
    },
    {
      id: "5",
      patientName: "Ava Evans",
      date: "2024-07-22",
      medication: "Cephalexin",
      dosage: "250mg",
      status: "Pending",
    },
  ];

  const getFilteredPrescriptions = () => {
    let filtered = prescriptions;

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter((prescription) =>
        prescription.patientName
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      );
    }

    // Apply status filter
    if (statusFilter !== "all") {
      filtered = filtered.filter(
        (prescription) => prescription.status.toLowerCase() === statusFilter
      );
    }

    return filtered;
  };

  const filteredPrescriptions = getFilteredPrescriptions();

  const handleNewPrescription = () => {
    navigate("/doctor/prescriptions/new");
  };

  return (
    <DoctorDashboardLayout>
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-[#0D171C] mb-2 font-Outfit">
            Prescriptions
          </h1>
          <p className="text-[#4F7A96] font-Outfit font-normal text-sm">
            All about prescriptions
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <MdSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#9CA3AF] w-5 h-5" />
          <input
            type="text"
            placeholder="Search patients"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 text-[#4F7396] bg-[#F3F4F6] text-base font-normal border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2D5BFF] placeholder-[#9CA3AF] font-Outfit"
          />
        </div>

        {/* Filter Bar */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="relative">
            <select
              value={sortFilter}
              onChange={(e) => setSortFilter(e.target.value)}
              className="appearance-none font-Outfit font-medium text-sm text-[#374151] bg-[#F3F4F6] rounded-lg px-4 py-2.5 pr-8 border-0 focus:outline-none focus:ring-2 focus:ring-[#2D5BFF]"
            >
              <option value="all">Sorted</option>
              <option value="recent">Recent</option>
              <option value="oldest">Oldest</option>
            </select>
            <MdKeyboardArrowDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#374151] w-4 h-4 pointer-events-none" />
          </div>

          <div className="relative">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="appearance-none font-Outfit font-medium text-sm text-[#374151] bg-[#F3F4F6] rounded-lg px-4 py-2.5 pr-8 border-0 focus:outline-none focus:ring-2 focus:ring-[#2D5BFF]"
            >
              <option value="all">All</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
            </select>
            <MdKeyboardArrowDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#374151] w-4 h-4 pointer-events-none" />
          </div>

          <div className="relative">
            <select
              value={pendingFilter}
              onChange={(e) => setPendingFilter(e.target.value)}
              className="appearance-none font-Outfit font-medium text-sm text-[#374151] bg-[#F3F4F6] rounded-lg px-4 py-2.5 pr-8 border-0 focus:outline-none focus:ring-2 focus:ring-[#2D5BFF]"
            >
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
            </select>
            <MdKeyboardArrowDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#374151] w-4 h-4 pointer-events-none" />
          </div>

          <button
            onClick={handleNewPrescription}
            className="bg-[#4F46E5] text-white px-4 py-2.5 rounded-lg font-Outfit font-medium text-sm hover:bg-blue-600 transition-colors"
          >
            New prescription
          </button>
        </div>

        {/* Prescriptions Table */}
        <div className="bg-white rounded-xl border border-[#E5E7EB] overflow-hidden">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-[#E5E7EB]">
                <th className="px-6 py-4 text-left text-sm font-medium text-[#374151] font-Outfit">
                  Patient Name
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-[#374151] font-Outfit">
                  Date
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-[#374151] font-Outfit">
                  Medication
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-[#374151] font-Outfit">
                  Dosage
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-[#374151] font-Outfit">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {filteredPrescriptions.map((prescription, index) => (
                <tr
                  key={prescription.id}
                  className={`${
                    index !== filteredPrescriptions.length - 1
                      ? "border-b border-[#F3F4F6]"
                      : ""
                  } hover:bg-[#F9FAFB]`}
                >
                  <td className="px-6 py-4 text-sm text-[#111827] font-Outfit font-medium">
                    {prescription.patientName}
                  </td>
                  <td className="px-6 py-4 text-sm text-[#6B7280] font-normal font-Outfit">
                    {prescription.date}
                  </td>
                  <td className="px-6 py-4 text-sm text-[#6B7280] font-normal font-Outfit">
                    {prescription.medication}
                  </td>
                  <td className="px-6 py-4 text-sm text-[#6B7280] font-normal font-Outfit">
                    {prescription.dosage}
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex px-3 py-1 rounded-full text-sm font-medium bg-[#FEF3C7] text-[#92400E] font-Outfit">
                      {prescription.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredPrescriptions.length === 0 && (
          <div className="text-center py-8 text-gray-500 font-Outfit">
            No prescriptions found matching your search criteria.
          </div>
        )}
      </div>
    </DoctorDashboardLayout>
  );
};

export default DoctorPrescriptionsPage;
