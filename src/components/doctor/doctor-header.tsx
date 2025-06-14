import type React from "react";
import { MdNotifications, MdSearch } from "react-icons/md";

const DoctorHeader: React.FC = () => {
  return (
    <header className="bg-white py-4 px-6 flex items-center justify-between border-b border-gray-200">
      <div className="flex items-center">
        <h1 className="text-xl font-normal text-[#000] font-Outfit">
          MedyKare
        </h1>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D5BFF] focus:border-transparent font-Outfit"
          />
          <MdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>

        <button className="p-2 relative">
          <MdNotifications className="w-6 h-6 text-gray-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
          <img
            src="/images/doctor-avatar.png"
            alt="Doctor profile"
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/placeholder.svg?height=32&width=32";
            }}
          />
        </div>
      </div>
    </header>
  );
};

export default DoctorHeader;
