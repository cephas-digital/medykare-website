import type React from "react";
import { FaRegClock } from "react-icons/fa";

interface Appointment {
  doctorName: string;
  specialty: string;
  dateTime: Date;
}

interface UpcomingAppointmentsProps {
  appointment?: Appointment;
}

const formatAppointmentTime = (date: Date): string => {
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  const isToday = date.toDateString() === today.toDateString();
  const isTomorrow = date.toDateString() === tomorrow.toDateString();

  const timeString = date.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  if (isToday) return `Today, ${timeString}`;
  if (isTomorrow) return `Tomorrow, ${timeString}`;

  return date.toLocaleDateString([], {
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
};

const UpcomingAppointments: React.FC<UpcomingAppointmentsProps> = ({
  appointment,
}) => {
  // Default appointment data
  const defaultAppointment: Appointment = {
    doctorName: "Dr. Michael Brown",
    specialty: "Cardiology Consultation",
    dateTime: new Date(new Date().setHours(14, 0, 0, 0)), // Today at 2:00 PM
  };

  const displayAppointment = appointment || defaultAppointment;

  return (
    <div className="bg-white p-6 ">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-Outfit font-bold">Upcoming Appointments</h3>
        <FaRegClock className="text-blue-500" />
      </div>
      <div className="">
        <div>
          <div className="bg-[#EFF6FF] px-4 pt-4 pb-2 rounded-lg  mb-4">
            <div className="flex items-center justify-between mb-2">
              <p className="font-normal font-Outfit text-base text-[#000000]">
                {displayAppointment.doctorName}
              </p>
              <p className="text-sm text-[#4B5563] font-Inter font-normal">
                {formatAppointmentTime(displayAppointment.dateTime)}
              </p>
            </div>
            <p className="text-sm text-[#4B5563] font-Inter font-normal">
              {displayAppointment.specialty}
            </p>

            <button className="text-[#2D5BFF] text-sm p-2 font-normal font-Inter">
              Join Video Call
            </button>
          </div>
        </div>

        <button className="w-full bg-[#2D5BFF] font-Outfit font-normal text-base text-white py-2 rounded-lg ">
          Book New Consultation
        </button>
      </div>
    </div>
  );
};

export default UpcomingAppointments;

// import type React from "react";
// import { FaRegClock } from "react-icons/fa";

// interface Appointment {
//   doctorName: string;
//   specialty: string;
//   dateTime: Date;
// }

// interface UpcomingAppointmentsProps {
//   appointment?: Appointment;
// }

// const formatAppointmentTime = (date: Date): string => {
//   const today = new Date();
//   const tomorrow = new Date();
//   tomorrow.setDate(today.getDate() + 1);

//   // Compare dates (ignore time)
//   const isToday = date.toDateString() === today.toDateString();
//   const isTomorrow = date.toDateString() === tomorrow.toDateString();

//   // Format time (e.g., 2:00 PM)
//   const timeString = date.toLocaleTimeString([], {
//     hour: "numeric",
//     minute: "2-digit",
//     hour12: true,
//   });

//   if (isToday) return `Today, ${timeString}`;
//   if (isTomorrow) return `Tomorrow, ${timeString}`;

//   // Format other dates (e.g., June 5, 2:00 PM)
//   return date.toLocaleDateString([], {
//     month: "long",
//     day: "numeric",
//     hour: "numeric",
//     minute: "2-digit",
//     hour12: true,
//   });
// };

// const UpcomingAppointments: React.FC<UpcomingAppointmentsProps> = ({
//   appointment,
// }) => {
//   return (
//     <div className="bg-white p-6">
//       <div className="flex items-center justify-between mb-4">
//         <h3 className="text-lg font-Outfit font-bold">Upcoming Appointments</h3>
//         <FaRegClock className="text-blue-500" />
//       </div>
//       <div className="space-y-4">
//         {appointment ? (
//           <div>
//             <p className="font-medium">{appointment.doctorName}</p>
//             <p className="text-gray-600">{appointment.specialty}</p>
//             <p className="text-sm text-gray-500">
//               {formatAppointmentTime(appointment.dateTime)}
//             </p>
//             <button className="text-blue-600 text-sm">Join Video Call</button>
//           </div>
//         ) : (
//           <p className="text-gray-500 text-sm">No upcoming appointments</p>
//         )}

//         <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium">
//           Book New Consultation
//         </button>
//       </div>
//     </div>
//   );
// };

// export default UpcomingAppointments;
