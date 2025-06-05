import type React from "react";
import { useState } from "react";
import DashboardLayout from "../../../components/layouts/dashboard-layout";
import PatientHeader from "../../../components/patient/header";
import BookAppointments from "../../../components/patient/appointments/book-appointments";
import ViewAppointments from "../../../components/patient/appointments/view-appointments";

type AppointmentView = "book" | "view";

const AppointmentsPage: React.FC = () => {
  const [activeView, setActiveView] = useState<AppointmentView>("book");

  return (
    <DashboardLayout>
      <PatientHeader />
      <div className="p-6 space-y-6">
        {/* Page Title */}
        <h1 className="text-lg font-semibold text-[#000000] font-Outfit ">
          {activeView === "book" ? "Book Appointments" : "View Appointments"}
        </h1>

        {/* Toggle Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
          <button
            onClick={() => setActiveView("book")}
            className={`p-6 rounded-lg text-left transition-all duration-200 ${
              activeView === "book"
                ? "bg-[#2563EB] text-white shadow-lg"
                : "bg-[#E5E7EB] text-[#000] hover:bg-gray-200"
            }`}
          >
            <h3 className=" font-normal mb-2 text-center font-Outfit text-xl ">
              Book New Consultation
            </h3>
            <p
              className={`text-base text-center font-Inter font-normal ${
                activeView === "book" ? "text-[#FFFFFFCC]" : "text-gray-500"
              }`}
            >
              Schedule an appointment with our specialists
            </p>
          </button>

          <button
            onClick={() => setActiveView("view")}
            className={`p-6 rounded-lg text-left transition-all duration-200 ${
              activeView === "view"
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            <h3 className="font-normal mb-2 text-center font-Outfit text-xl">
              View Appointments
            </h3>
            <p
              className={`text-base text-center font-Inter font-normal ${
                activeView === "view" ? "text-blue-100" : "text-gray-500"
              }`}
            >
              Check your upcoming consultations
            </p>
          </button>
        </div>

        {/* Content Area */}
        <div className="mt-8">
          {activeView === "book" ? <BookAppointments /> : <ViewAppointments />}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AppointmentsPage;

// import type React from "react";
// import { useState } from "react";
// import DashboardLayout from "../../../components/layouts/dashboard-layout";
// import PatientHeader from "../../../components/patient/header";
// import BookAppointments from "../../../components/patient/appointments/book-appointments";
// import ViewAppointments from "../../../components/patient/appointments/view-appointments";

// type AppointmentView = "book" | "view";

// const AppointmentsPage: React.FC = () => {
//   const [activeView, setActiveView] = useState<AppointmentView>("book");

//   return (
//     <DashboardLayout>
//       <PatientHeader />
//       <div className="p-6 space-y-6">
//         {/* Page Title */}
//         <h1 className="text-2xl font-bold text-gray-800">
//           {activeView === "book" ? "Book Appointments" : "View Appointments"}
//         </h1>

//         {/* Toggle Buttons */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
//           <button
//             onClick={() => setActiveView("book")}
//             className={`p-6 rounded-lg text-left transition-all duration-200 ${
//               activeView === "book"
//                 ? "bg-blue-600 text-white shadow-lg"
//                 : "bg-gray-100 text-gray-600 hover:bg-gray-200"
//             }`}
//           >
//             <h3 className="text-lg font-semibold mb-2">
//               Book New Consultation
//             </h3>
//             <p
//               className={`text-sm ${
//                 activeView === "book" ? "text-blue-100" : "text-gray-500"
//               }`}
//             >
//               Schedule an appointment with our specialists
//             </p>
//           </button>

//           <button
//             onClick={() => setActiveView("view")}
//             className={`p-6 rounded-lg text-left transition-all duration-200 ${
//               activeView === "view"
//                 ? "bg-blue-600 text-white shadow-lg"
//                 : "bg-gray-100 text-gray-600 hover:bg-gray-200"
//             }`}
//           >
//             <h3 className="text-lg font-semibold mb-2">View Appointments</h3>
//             <p
//               className={`text-sm ${
//                 activeView === "view" ? "text-blue-100" : "text-gray-500"
//               }`}
//             >
//               Check your upcoming consultations
//             </p>
//           </button>
//         </div>

//         {/* Content Area */}
//         <div className="mt-8">
//           {activeView === "book" ? <BookAppointments /> : <ViewAppointments />}
//         </div>
//       </div>
//     </DashboardLayout>
//   );
// };

// export default AppointmentsPage;
