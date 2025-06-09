import type React from "react";
import { MdDownload } from "react-icons/md";

interface PrescriptionCardProps {
  doctorName: string;
  date: string;
  diagnosis: string;
  medications: string[];
  validFor: string;
  status: "Active" | "Completed";
  onDownload: () => void;
}

const PrescriptionCard: React.FC<PrescriptionCardProps> = ({
  doctorName,
  date,
  diagnosis,
  medications,
  validFor,
  status,
  onDownload,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg  hover:shadow-sm transition-shadow mb-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-semibold text-[#000] font-Outfit text-base mb-1">
            {doctorName}
          </h3>
          <p className="text-sm text-gray-500 font-Outfit">{date}</p>
        </div>
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            status === "Active"
              ? "bg-green-100 text-green-700"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          {status}
        </span>
      </div>

      <div className="mb-4">
        <p className="text-sm text-gray-600 font-Outfit mb-3">
          Diagnosis: {diagnosis}
        </p>
        <ul className="space-y-1 mb-4">
          {medications.map((medication, index) => (
            <li key={index} className="text-sm text-[#000] font-Outfit">
              • {medication}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-500 font-Outfit">
          Valid for: {validFor}
        </p>
        <button
          onClick={onDownload}
          className="flex items-center space-x-1 text-[#2D5BFF] hover:text-blue-700 transition-colors"
        >
          <MdDownload className="w-4 h-4" />
          <span className="text-sm font-Outfit">Download PDF</span>
        </button>
      </div>
    </div>
  );
};

export default PrescriptionCard;
