import type React from "react";
import { useState, useMemo } from "react";
import { MdSearch, MdStar } from "react-icons/md";
import doctorsimg from "../../../assets/images/doctorsimg.png";
import { IoMdVideocam } from "react-icons/io";

interface Doctor {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  experience: number;
  availability: "available" | "busy" | "offline";
}

const BookAppointments: React.FC = () => {
  const [selectedSpecialty, setSelectedSpecialty] =
    useState("General Physician");
  const [searchQuery, setSearchQuery] = useState("");

  const sidebarSpecialties = [
    "General Physician",
    "Dentist",
    "Cardiologist",
    "Dermatologist",
    "Pediatrician",
  ];

  const topSpecialties = [
    "General Physician",
    "Cardiologist",
    "Dermatologist",
    "Pediatrician",
    "Neurologist",
  ];

  const doctors: Doctor[] = [
    {
      id: "1",
      name: "Dr. John Smith",
      specialty: "Cardiologist",
      rating: 4.8,
      experience: 15,
      availability: "available",
    },
    {
      id: "2",
      name: "Dr. Emily Brown",
      specialty: "Dermatologist",
      rating: 4.9,
      experience: 12,
      availability: "available",
    },
    {
      id: "3",
      name: "Dr. Michael Chen",
      specialty: "General Physician",
      rating: 4.7,
      experience: 10,
      availability: "available",
    },
    {
      id: "4",
      name: "Dr. Sarah Johnson",
      specialty: "Pediatrician",
      rating: 4.9,
      experience: 8,
      availability: "available",
    },
    {
      id: "5",
      name: "Dr. Robert Wilson",
      specialty: "Neurologist",
      rating: 4.6,
      experience: 18,
      availability: "available",
    },
    {
      id: "6",
      name: "Dr. Lisa Davis",
      specialty: "Dentist",
      rating: 4.8,
      experience: 14,
      availability: "available",
    },
  ];

  // Filter doctors based on search query and selected specialty
  const filteredDoctors = useMemo(() => {
    return doctors.filter((doctor) => {
      const matchesSearch =
        searchQuery === "" ||
        doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesSpecialty =
        selectedSpecialty === "General Physician" ||
        doctor.specialty === selectedSpecialty;

      return matchesSearch && matchesSpecialty;
    });
  }, [searchQuery, selectedSpecialty, doctors]);

  return (
    <div className="flex gap-6">
      <div className=" w-40 flex-shrink-0 lg:block md:hidden hidden ">
        <h3 className="text-base font-Outfit font-normal text-[#111827] mb-4">
          Quick Filters
        </h3>
        <div className="space-y-2">
          {sidebarSpecialties.map((specialty) => (
            <button
              key={specialty}
              onClick={() => setSelectedSpecialty(specialty)}
              className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-colors font-Inter ${
                selectedSpecialty === specialty
                  ? " text-blue-600 font-normal font-Inter "
                  : "text-[#4B5563] hover:bg-gray-50"
              }`}
            >
              {specialty}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 space-y-6">
        {/* Search Bar and Filters */}
        <div className="flex items-center gap-4">
          <div className="relative flex-1">
            <MdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search doctors, specialties..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 text-base font-Inter font-light text-[#9CA3AF] placeholder:text-[#9CA3AF] placeholder:font-Inter  bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="px-4 py-3 font-Inter text-base text-[#4B5563] rounded-lg hover:bg-gray-50 ">
            Filters
          </button>
        </div>

        {/* Top Specialty Pills */}
        <div className="flex flex-wrap gap-2 ">
          {topSpecialties.map((specialty) => (
            <button
              key={specialty}
              onClick={() => setSelectedSpecialty(specialty)}
              className={`px-4 py-2 rounded-full text-base font-Inter font-normal transition-colors ${
                selectedSpecialty === specialty
                  ? "bg-blue-600 text-[#FFFFFF] text-base font-Inter font-normal"
                  : "bg-gray-100 text-[#4B5563] hover:bg-gray-200 text-base font-Inter font-normal"
              }`}
            >
              {specialty}
            </button>
          ))}
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredDoctors.map((doctor) => (
            <div key={doctor.id} className="bg-white rounded-lg p-6 shadow-sm">
              <div className="mb-4">
                <div className=" flex items-center gap-4">
                  <img className=" w-16 h-16" src={doctorsimg} alt="" />
                  <div>
                    <h4 className="text-[#1E293B] font-Outfit font-normal text-base truncate">
                      {doctor.name}
                    </h4>
                    <p className="text-[#6B7280] font-Inter font-normal text-base ">
                      {doctor.specialty}
                    </p>

                    <div className="flex items-center gap-1">
                      <MdStar className="text-[#2563EB] text-base" />
                      <span className="text-base font-Inter font-normal text-[#2563EB]">
                        {doctor.rating}
                      </span>
                    </div>
                  </div>
                </div>

                <div className=" flex items-center justify-between my-4">
                  <p className="text-[#6B7280] font-Inter font-normal text-base ">
                    {doctor.experience} years experience
                  </p>

                  <div className="flex items-center gap-2">
                    <IoMdVideocam size={16} className=" text-[#16A34A]" />
                    <span className=" text-[#16A34A] font-Inter font-normal text-base">
                      Available today
                    </span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-[#2563EB] text-white py-3 rounded-lg  font-Outfit font-normal text-base hover:bg-blue-700 transition-colors">
                Book Appointment
              </button>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredDoctors.length === 0 && (
          <div className="text-center py-12 ">
            <p className="text-gray-500 text-lg font-Outfit font-normal">
              No doctors found matching your criteria
            </p>
            <p className="text-gray-400 font-Outfit font-normal text-sm mt-2">
              Try adjusting your search or filters
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookAppointments;

// import type React from "react";
// import { useState } from "react";
// import { MdSearch, MdFilterList, MdStar } from "react-icons/md";

// interface Doctor {
//   id: string;
//   name: string;
//   specialty: string;
//   rating: number;
//   experience: number;
//   availability: "available" | "busy" | "offline";
//   image?: string;
// }

// const BookAppointments: React.FC = () => {
//   const [selectedSpecialty, setSelectedSpecialty] =
//     useState("General Physician");
//   const [searchQuery, setSearchQuery] = useState("");

//   const specialties = [
//     "General Physician",
//     "Cardiologist",
//     "Dermatologist",
//     "Pediatrician",
//     "Neurologist",
//     "Dentist",
//   ];

//   const doctors: Doctor[] = [
//     {
//       id: "1",
//       name: "Dr. John Smith",
//       specialty: "Cardiologist",
//       rating: 4.8,
//       experience: 15,
//       availability: "available",
//     },
//     {
//       id: "2",
//       name: "Dr. Emily Brown",
//       specialty: "Dermatologist",
//       rating: 4.9,
//       experience: 12,
//       availability: "available",
//     },
//     {
//       id: "3",
//       name: "Dr. Michael Chen",
//       specialty: "General Physician",
//       rating: 4.7,
//       experience: 10,
//       availability: "available",
//     },
//     {
//       id: "4",
//       name: "Dr. Sarah Johnson",
//       specialty: "Pediatrician",
//       rating: 4.9,
//       experience: 8,
//       availability: "available",
//     },
//   ];

//   const getAvailabilityColor = (availability: string) => {
//     switch (availability) {
//       case "available":
//         return "text-green-600";
//       case "busy":
//         return "text-yellow-600";
//       case "offline":
//         return "text-red-600";
//       default:
//         return "text-gray-600";
//     }
//   };

//   const getAvailabilityText = (availability: string) => {
//     switch (availability) {
//       case "available":
//         return "Available today";
//       case "busy":
//         return "Busy";
//       case "offline":
//         return "Offline";
//       default:
//         return "Unknown";
//     }
//   };

//   return (
//     <div className="space-y-6">
//       {/* Search Bar */}
//       <div className="flex items-center gap-4">
//         <div className="relative flex-1 max-w-md">
//           <MdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//           <input
//             type="text"
//             placeholder="Search doctors, specialties..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//         <button className="flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
//           <MdFilterList />
//           <span>Filters</span>
//         </button>
//       </div>

//       {/* Quick Filters */}
//       <div>
//         <h3 className="text-lg font-semibold mb-4">Quick Filters</h3>
//         <div className="flex flex-wrap gap-2">
//           {specialties.map((specialty) => (
//             <button
//               key={specialty}
//               onClick={() => setSelectedSpecialty(specialty)}
//               className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
//                 selectedSpecialty === specialty
//                   ? "bg-blue-600 text-white"
//                   : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//               }`}
//             >
//               {specialty}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Doctors Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {doctors.map((doctor) => (
//           <div
//             key={doctor.id}
//             className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow"
//           >
//             <div className="flex items-start justify-between mb-4">
//               <div>
//                 <h4 className="font-semibold text-lg">{doctor.name}</h4>
//                 <p className="text-gray-600">{doctor.specialty}</p>
//               </div>
//             </div>

//             <div className="flex items-center gap-1 mb-2">
//               <MdStar className="text-yellow-400 text-sm" />
//               <span className="text-sm font-medium">{doctor.rating}</span>
//             </div>

//             <p className="text-gray-600 text-sm mb-3">
//               {doctor.experience} years experience
//             </p>

//             <div className="flex items-center gap-2 mb-4">
//               <div
//                 className={`w-2 h-2 rounded-full ${
//                   doctor.availability === "available"
//                     ? "bg-green-500"
//                     : "bg-gray-400"
//                 }`}
//               />
//               <span
//                 className={`text-sm font-medium ${getAvailabilityColor(
//                   doctor.availability
//                 )}`}
//               >
//                 {getAvailabilityText(doctor.availability)}
//               </span>
//             </div>

//             <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
//               Book Appointment
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BookAppointments;
