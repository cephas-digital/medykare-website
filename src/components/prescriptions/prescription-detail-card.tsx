import type React from "react";
import { MdDownload } from "react-icons/md";

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
    <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-sm transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-semibold text-[#000] font-Outfit text-lg">
            {medicationName}
          </h3>
          <p className="text-base text-gray-600 font-Outfit">{dosage}</p>
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
        <p className="text-sm text-gray-600 font-Outfit">{frequency}</p>
        <p className="text-sm text-gray-600 font-Outfit">{prescribedBy}</p>
        <p className="text-sm text-gray-600 font-Outfit">{duration}</p>
      </div>

      <button
        onClick={onDownload}
        className="flex items-center justify-center w-full text-[#2D5BFF] hover:text-blue-700 transition-colors"
      >
        <MdDownload className="w-5 h-5" />
      </button>
    </div>
  );
};

export default PrescriptionDetailCard;
