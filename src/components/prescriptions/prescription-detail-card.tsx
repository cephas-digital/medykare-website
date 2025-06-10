import type React from "react";
import { FaDownload } from "react-icons/fa";

interface PrescriptionDetailCardProps {
  medicationName: string;
  dosage: string;
  frequency: string;
  prescribedBy: string;
  duration: string;
  status: "Active" | "Refill needed";
  onDownload: () => void;
}

const PrescriptionDetailCard: React.FC<PrescriptionDetailCardProps> = ({
  medicationName,
  dosage,
  frequency,
  prescribedBy,
  duration,
  status,
  onDownload,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg hover:shadow-sm transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-bold text-[#000] font-Outfit text-base">
            {medicationName}
          </h3>
          <p className=" text-[#4B5563] font-Inter font-normal text-sm">
            {dosage}
          </p>
        </div>
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            status === "Active"
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {status}
        </span>
      </div>

      <div className="space-y-2 mb-4">
        <p className="text-[#4B5563] font-Inter font-normal text-sm">
          {frequency}
        </p>
        <p className="text-[#4B5563] font-Inter font-normal text-sm">
          {prescribedBy}
        </p>
        <p className="text-[#4B5563] font-Inter font-normal text-sm">
          {duration}
        </p>
      </div>

      <button
        onClick={onDownload}
        className="flex items-center  w-full text-[#2D5BFF] hover:text-blue-700 transition-colors"
      >
        <FaDownload className="w-5 h-5" />
      </button>
    </div>
  );
};

export default PrescriptionDetailCard;
