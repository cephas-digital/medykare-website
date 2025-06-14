import type React from "react";
import { useState } from "react";
import { MdSearch, MdKeyboardArrowDown } from "react-icons/md";
import DoctorDashboardLayout from "../../../components/doctor/doctor-dashboard-layout";
import { useNavigate } from "react-router";

interface ScheduleAppointment {
  id: string;
  patient: string;
  time: string;
  type: string;
}

const DoctorSchedulePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("today");
  const navigate = useNavigate();

  const todayAppointments: ScheduleAppointment[] = [
    {
      id: "1",
      patient: "Sarah Johnson",
      time: "10:00 AM - 10:30 AM",
      type: "Consultation",
    },
    {
      id: "2",
      patient: "Michael Chen",
      time: "11:00 AM - 11:30 AM",
      type: "Follow-up",
    },
    {
      id: "3",
      patient: "Emily Davis",
      time: "12:00 PM - 12:30 PM",
      type: "Check-up",
    },
    {
      id: "4",
      patient: "David Lee",
      time: "1:00 PM - 1:30 PM",
      type: "Consultation",
    },
    {
      id: "5",
      patient: "Olivia Wilson",
      time: "2:00 PM - 2:30 PM",
      type: "Follow-up",
    },
  ];

  const upcomingAppointments: ScheduleAppointment[] = [
    {
      id: "6",
      patient: "James Wilson",
      time: "9:00 AM - 9:30 AM",
      type: "Check-up",
    },
    {
      id: "7",
      patient: "Emma Davis",
      time: "10:00 AM - 10:30 AM",
      type: "Consultation",
    },
  ];

  const pastAppointments: ScheduleAppointment[] = [
    {
      id: "8",
      patient: "Robert Brown",
      time: "2:00 PM - 2:30 PM",
      type: "Follow-up",
    },
    {
      id: "9",
      patient: "Lisa Anderson",
      time: "3:00 PM - 3:30 PM",
      type: "Check-up",
    },
  ];

  const getAppointments = () => {
    switch (activeTab) {
      case "upcoming":
        return upcomingAppointments;
      case "past":
        return pastAppointments;
      default:
        return todayAppointments;
    }
  };

  const filteredAppointments = getAppointments().filter((appointment) =>
    appointment.patient.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <DoctorDashboardLayout>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-[#000] mb-1 font-Outfit">
            All Schedules
          </h1>
          <p className="text-[#6B7280] font-Outfit font-normal text-sm">
            Manage all Schedules
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-[#000] font-Outfit mb-6">
            Schedule Management
          </h2>

          {/* Search Bar */}
          <div className="relative mb-6">
            <MdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search patients"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 text-[#4F7396] bg-[#E8EDF2] text-base font-normal border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D5BFF] focus:border-transparent font-Outfit"
            />
          </div>

          {/* Filter Dropdowns */}
          <div className="flex space-x-4 mb-8">
            <div className="relative">
              <select className="appearance-none font-Outfit font-medium text-sm text-[#0D141C] bg-[#E8EDF2] rounded-lg px-4 py-2 pr-8  focus:outline-none focus:ring-2 focus:ring-[#2D5BFF] focus:border-transparent">
                <option>All Patients</option>
                <option>Recent</option>
                <option>Scheduled</option>
              </select>
              <MdKeyboardArrowDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#0D141C] w-4 h-4 pointer-events-none" />
            </div>

            <div className="relative">
              <select className="appearance-none font-Outfit font-medium text-sm text-[#0D141C] bg-[#E8EDF2] rounded-lg px-4 py-2 pr-8  focus:outline-none focus:ring-2 focus:ring-[#2D5BFF] focus:border-transparent">
                <option>Active</option>
                <option>Inactive</option>
              </select>
              <MdKeyboardArrowDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#0D141C] w-4 h-4 pointer-events-none" />
            </div>

            <div className="relative">
              <select className="appearance-none font-Outfit font-medium text-sm text-[#0D141C] bg-[#E8EDF2] rounded-lg px-4 py-2 pr-8  focus:outline-none focus:ring-2 focus:ring-[#2D5BFF] focus:border-transparent">
                <option>Inactive</option>
                <option>Active</option>
              </select>
              <MdKeyboardArrowDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#0D141C] w-4 h-4 pointer-events-none" />
            </div>
          </div>

          {/* Schedule Section */}
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-[#000] font-Outfit">
              Schedule
            </h3>
            <span
              onClick={() => navigate("/doctor/appointments")}
              className="text-sm text-[#6B7280] bg-[#E8EDF2] px-4 py-2 rounded-lg font-Outfit"
            >
              Appointments
            </span>
          </div>

          {/* Schedule Tabs */}
          <div className="flex space-x-8 mb-8 border-b border-gray-200">
            <button
              onClick={() => setActiveTab("today")}
              className={`pb-3 text-sm font-Outfit transition-colors ${
                activeTab === "today"
                  ? "text-[#2D5BFF] border-b-2 border-[#2D5BFF] font-medium"
                  : "text-[#6B7280] hover:text-[#000]"
              }`}
            >
              Today
            </button>
            <button
              onClick={() => setActiveTab("upcoming")}
              className={`pb-3 text-sm font-Outfit transition-colors ${
                activeTab === "upcoming"
                  ? "text-[#2D5BFF] border-b-2 border-[#2D5BFF] font-medium"
                  : "text-[#6B7280] hover:text-[#000]"
              }`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setActiveTab("past")}
              className={`pb-3 text-sm font-Outfit transition-colors ${
                activeTab === "past"
                  ? "text-[#2D5BFF] border-b-2 border-[#2D5BFF] font-medium"
                  : "text-[#6B7280] hover:text-[#000]"
              }`}
            >
              Past
            </button>
          </div>

          {/* Appointments List */}
          <div className="space-y-6">
            {filteredAppointments.map((appointment) => (
              <div className=" flex items-center gap-4">
                <div>
                  <div className=" w-10 h-10"></div>
                </div>
                <div
                  key={appointment.id}
                  className="border-b border-gray-100 pb-4"
                >
                  <h4 className="text-lg font-bold text-[#000] font-Outfit mb-1">
                    {appointment.patient}
                  </h4>
                  <p className="text-sm text-[#6B7280] font-Outfit">
                    {appointment.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filteredAppointments.length === 0 && (
            <div className="text-center py-8 text-gray-500 font-Outfit">
              No appointments found for {activeTab}.
            </div>
          )}
        </div>
      </div>
    </DoctorDashboardLayout>
  );
};

export default DoctorSchedulePage;
