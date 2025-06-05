import type React from "react";
import { MdAccessTime, MdVideoCall, MdLocationOn } from "react-icons/md";

interface Appointment {
  id: string;
  doctorName: string;
  dateTime: Date;
  type: "video" | "in-person";
  status: "confirmed" | "pending" | "cancelled";
  specialty?: string;
}

const ViewAppointments: React.FC = () => {
  const appointments: Appointment[] = [
    {
      id: "1",
      doctorName: "Dr. John Smith",
      dateTime: new Date(new Date().setHours(14, 0, 0, 0)), // Today 2:00 PM
      type: "video",
      status: "confirmed",
      specialty: "Cardiologist",
    },
    {
      id: "2",
      doctorName: "Dr. Emily Brown",
      dateTime: new Date(
        new Date().getTime() + 24 * 60 * 60 * 1000 + 10.5 * 60 * 60 * 1000
      ), // Tomorrow 10:30 AM
      type: "in-person",
      status: "pending",
      specialty: "Dermatologist",
    },
    {
      id: "3",
      doctorName: "Dr. John Smith",
      dateTime: new Date(new Date().setHours(14, 0, 0, 0)), // Today 2:00 PM
      type: "video",
      status: "confirmed",
      specialty: "Cardiologist",
    },
    {
      id: "4",
      doctorName: "Dr. Emily Brown",
      dateTime: new Date(
        new Date().getTime() + 24 * 60 * 60 * 1000 + 10.5 * 60 * 60 * 1000
      ), // Tomorrow 10:30 AM
      type: "in-person",
      status: "pending",
      specialty: "Dermatologist",
    },
    {
      id: "5",
      doctorName: "Dr. John Smith",
      dateTime: new Date(new Date().setHours(14, 0, 0, 0)), // Today 2:00 PM
      type: "video",
      status: "confirmed",
      specialty: "Cardiologist",
    },
  ];

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
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  const getStatusColor = (status: string): string => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-700";
      case "pending":
        return "bg-yellow-100 text-yellow-700";
      case "cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getStatusText = (status: string): string => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  return (
    <div className="space-y-4">
      {appointments.map((appointment) => (
        <div
          key={appointment.id}
          className="bg-white rounded-lg p-6 shadow-sm border"
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h4 className="font-semibold text-lg mb-1">
                {appointment.doctorName}
              </h4>

              <div className="flex items-center gap-2 text-gray-600 mb-2">
                <MdAccessTime className="text-sm" />
                <span className="text-sm">
                  {formatAppointmentTime(appointment.dateTime)}
                </span>
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  {appointment.type === "video" ? (
                    <MdVideoCall className="text-blue-500" />
                  ) : (
                    <MdLocationOn className="text-green-500" />
                  )}
                  <span>
                    {appointment.type === "video"
                      ? "Video Consultation"
                      : "In-person Visit"}
                  </span>
                </div>
              </div>
            </div>

            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                appointment.status
              )}`}
            >
              {getStatusText(appointment.status)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ViewAppointments;

// import type React from "react"
// import { MdAccessTime, MdVideoCall, MdLocationOn } from "react-icons/md"

// interface Appointment {
//   id: string
//   doctorName: string
//   dateTime: Date
//   type: "video" | "in-person"
//   status: "confirmed" | "pending" | "cancelled"
//   specialty?: string
// }

// const ViewAppointments: React.FC = () => {
//   const appointments: Appointment[] = [
//     {
//       id: "1",
//       doctorName: "Dr. John Smith",
//       dateTime: new Date(new Date().setHours(14, 0, 0, 0)), // Today 2:00 PM
//       type: "video",
//       status: "confirmed",
//       specialty: "Cardiologist",
//     },
//     {
//       id: "2",
//       doctorName: "Dr. Emily Brown",
//       dateTime: new Date(new Date().getTime() + 24 * 60 * 60 * 1000 + 10.5 * 60 * 60 * 1000), // Tomorrow 10:30 AM
//       type: "in-person",
//       status: "pending",
//       specialty: "Dermatologist",
//     },
//     {
//       id: "3",
//       doctorName: "Dr. John Smith",
//       dateTime: new Date(new Date().setHours(14, 0, 0, 0)), // Today 2:00 PM
//       type: "video",
//       status: "confirmed",
//       specialty: "Cardiologist",
//     },
//     {
//       id: "4",
//       doctorName: "Dr. Emily Brown",
//       dateTime: new Date(new Date().getTime() + 24 * 60 * 60 * 1000 + 10.5 * 60 * 60 * 1000), // Tomorrow 10:30 AM
//       type: "in-person",
//       status: "pending",
//       specialty: "Dermatologist",
//     },
//     {
//       id: "5",
//       doctorName: "Dr. John Smith",
//       dateTime: new Date(new Date().setHours(14, 0, 0, 0)), // Today 2:00 PM
//       type: "video",
//       status: "confirmed",
//       specialty: "Cardiologist",
//     },
//   ]

//   const formatAppointmentTime = (date: Date): string => {
//     const today = new Date()
//     const tomorrow = new Date()
//     tomorrow.setDate(today.getDate() + 1)

//     const isToday = date.toDateString() === today.toDateString()
//     const isTomorrow = date.toDateString() === tomorrow.toDateString()

//     const timeString = date.toLocaleTimeString([], {
//       hour: "numeric",
//       minute: "2-digit",
//       hour12: true,
//     })

//     if (isToday) return `Today, ${timeString}`
//     if (isTomorrow) return `Tomorrow, ${timeString}`

//     return date.toLocaleDateString([], {
//       month: "short",
//       day: "numeric",
//       hour: "numeric",
//       minute: "2-digit",
//       hour12: true,
//     })
//   }

//   const getStatusColor = (status: string): string => {
//     switch (status) {
//       case "confirmed":
//         return "bg-green-100 text-green-700"
//       case "pending":
//         return "bg-yellow-100 text-yellow-700"
//       case "cancelled":
//         return "bg-red-100 text-red-700"
//       default:
//         return "bg-gray-100 text-gray-700"
//     }
//   }

//   const getStatusText = (status: string): string => {
//     return status.charAt(0).toUpperCase() + status.slice(1)
//   }

//   return (
//     <div className="space-y-4">
//       {appointments.map((appointment) => (
//         <div key={appointment.id} className="bg-white rounded-lg p-6 shadow-sm border">
//           <div className="flex items-start justify-between">
//             <div className="flex-1">
//               <h4 className="font-semibold text-lg mb-1">{appointment.doctorName}</h4>

//               <div className="flex items-center gap-2 text-gray-600 mb-2">
//                 <MdAccessTime className="text-sm" />
//                 <span className="text-sm">{formatAppointmentTime(appointment.dateTime)}</span>
//               </div>

//               <div className="flex items-center gap-4 text-sm text-gray-600">
//                 <div className="flex items-center gap-1">
//                   {appointment.type === "video" ? (
//                     <MdVideoCall className="text-blue-500" />
//                   ) : (
//                     <MdLocationOn className="text-green-500" />
//                   )}
//                   <span>{appointment.type === "video" ? "Video Consultation" : "In-person Visit"}</span>
//                 </div>
//               </div>
//             </div>

//             <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(appointment.status)}`}>
//               {getStatusText(appointment.status)}
//             </span>
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default ViewAppointments
