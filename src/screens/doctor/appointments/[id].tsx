import type React from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import DoctorDashboardLayout from "../../../components/doctor/doctor-dashboard-layout";

interface AppointmentData {
  id: string;
  patientName: string;
  appointmentTitle: string;
  date: string;
  time: string;
  status: string;
}

const AppointmentDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState(new Date(2025, 5, 1)); // June 2025

  // Debug: Log the ID to see what we're getting
  console.log("Appointment ID from URL:", id);

  // Mock appointment data - in real app, fetch based on ID
  const appointmentData: Record<string, AppointmentData> = {
    "1": {
      id: "1",
      patientName: "Ethan Carter",
      appointmentTitle: "Ethan's Appointment",
      date: "2025-06-05",
      time: "10:00 AM - 10:30 AM",
      status: "Scheduled",
    },
    "2": {
      id: "2",
      patientName: "Olivia Bennett",
      appointmentTitle: "Olivia's Appointment",
      date: "2025-06-10",
      time: "2:00 PM - 2:30 PM",
      status: "Scheduled",
    },
    "3": {
      id: "3",
      patientName: "Noah Thompson",
      appointmentTitle: "Noah's Appointment",
      date: "2025-06-12",
      time: "11:00 AM - 11:30 AM",
      status: "Scheduled",
    },
    "4": {
      id: "4",
      patientName: "Ava Rodriguez",
      appointmentTitle: "Ava's Appointment",
      date: "2025-06-15",
      time: "3:00 PM - 3:30 PM",
      status: "Scheduled",
    },
    "5": {
      id: "5",
      patientName: "Liam Walker",
      appointmentTitle: "Liam's Appointment",
      date: "2025-06-18",
      time: "9:00 AM - 9:30 AM",
      status: "Scheduled",
    },
    "6": {
      id: "6",
      patientName: "Liam Walker",
      appointmentTitle: "Liam's Appointment",
      date: "2025-06-20",
      time: "4:00 PM - 4:30 PM",
      status: "Scheduled",
    },
  };

  // Default to first appointment if ID not found or undefined
  const appointment = appointmentData[id || "1"] || appointmentData["1"];

  // Always show the calendar - remove the "not found" check for now
  // if (!appointment) {
  //   return (
  //     <DoctorDashboardLayout>
  //       <div className="p-6">
  //         <div className="text-center py-8">
  //           <h2 className="text-xl font-bold text-[#0D171C] mb-4 font-Outfit">Appointment Not Found</h2>
  //           <button
  //             onClick={() => navigate("/doctor/appointments")}
  //             className="text-[#2D5BFF] font-medium font-Outfit hover:underline"
  //           >
  //             Back to Appointments
  //           </button>
  //         </div>
  //       </div>
  //     </DoctorDashboardLayout>
  //   )
  // }

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];

  const navigateMonth = (direction: "prev" | "next") => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      if (direction === "prev") {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="w-8 h-8"></div>);
    }

    // Days of the month
    const appointmentDate = new Date(appointment.date);
    const appointmentDay = appointmentDate.getDate();

    for (let day = 1; day <= daysInMonth; day++) {
      const isSelected = day === appointmentDay; // Highlight appointment day
      days.push(
        <div
          key={day}
          className={`w-8 h-8 flex items-center justify-center text-sm font-medium cursor-pointer rounded-full ${
            isSelected
              ? "bg-[#2D5BFF] text-white"
              : "text-[#0D171C] hover:bg-gray-100"
          }`}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  return (
    <DoctorDashboardLayout>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-[#0D171C] mb-2 font-Outfit">
            Appointments
          </h1>
          <p className="text-[#4F7A96] font-Outfit font-normal text-sm">
            Manage all appointments
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-[#0D171C] mb-6 font-Outfit">
            {appointment.appointmentTitle}
          </h2>

          <div className=" bg-white flex justify-center max-w-4xl  p-6 rounded-lg shadow-md">
            {/* Calendar */}
            <div className=" rounded-lg p-6 max-w-md">
              {/* Calendar Header */}
              <div className="flex items-center justify-between mb-6">
                <button
                  onClick={() => navigateMonth("prev")}
                  className="p-1 hover:bg-gray-100 rounded"
                >
                  <MdChevronLeft className="w-5 h-5 text-[#4F7A96]" />
                </button>
                <h3 className="text-sm font-semibold text-[#0D171C] font-Outfit">
                  {monthNames[currentDate.getMonth()]}{" "}
                  {currentDate.getFullYear()}
                </h3>
                <button
                  onClick={() => navigateMonth("next")}
                  className="p-1 hover:bg-gray-100 rounded"
                >
                  <MdChevronRight className="w-5 h-5 text-[#4F7A96]" />
                </button>
              </div>

              {/* Days of Week Header */}
              <div className="grid grid-cols-7 gap-1 mb-2">
                {daysOfWeek.map((day) => (
                  <div
                    key={day}
                    className="w-8 h-8 font-Inter font-medium text-[#0D141C] flex items-center justify-center text-sm "
                  >
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1 font-Inter font-medium text-[#0D141C]">
                {renderCalendar()}
              </div>
            </div>
          </div>

          {/* Appointment Details */}
          <div className="mt-8  rounded-lg p-6 max-w-md">
            <div className=" flex items-center gap-4">
              <div>
                <div className=" w-10 h-10"></div>
              </div>
              <div>
                <h3 className="font-medium text-base text-[#0D171C] mb-1 font-Outfit">
                  {appointment.patientName}
                </h3>
                <p className="text-[#4F7A96] font-normal text-base  font-Outfit">
                  {appointment.time}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DoctorDashboardLayout>
  );
};

export default AppointmentDetailPage;
