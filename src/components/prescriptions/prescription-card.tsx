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
          <h3 className="font-bold text-[#1E293B] font-Outfit text-base mb-1">
            {doctorName}
          </h3>
          <p className="text-sm text-[#6B7280] font-Inter font-normal">
            {date}
          </p>
        </div>
        <span
          className={`px-3 py-1 rounded-full font-Inter font-normal text-base ${
            status === "Active"
              ? "bg-[#DCFCE7] text-[#16A34A] pb-4"
              : "bg-[#F3F4F6] text-[#4B5563] pb-4"
          }`}
        >
          {status}
        </span>
      </div>

      <div className="mb-4">
        <p className="text-base text-[#6B7280] font-Inter font-normal mb-3">
          Diagnosis: {diagnosis}
        </p>
        <ul className="space-y-1 mb-4">
          {medications.map((medication, index) => (
            <li
              key={index}
              className="text-base text-[#1E293B] font-Inter font-normal"
            >
              • {medication}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-between items-center">
        <p className="text-sm text-[#6B7280] font-Inter font-normal">
          Valid for: {validFor}
        </p>
        <button
          onClick={onDownload}
          className="flex items-center space-x-1 text-[#2563EB] hover:text-blue-700 transition-colors"
        >
          <MdDownload className="w-4 h-4" />
          <span className="text-sm font-Inter font-normal text-[#2563EB]">
            Download PDF
          </span>
        </button>
      </div>
    </div>
  );
};

export default PrescriptionCard;
