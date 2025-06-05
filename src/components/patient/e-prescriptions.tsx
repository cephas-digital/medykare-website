import type React from "react";
import prescriptionsimg from "../../assets/images/prescriptionsimg.png";

interface Prescription {
  id: string;
  date: Date;
  doctorName: string;
  status: "new" | "filled" | "expired";
}

interface EPrescriptionsProps {
  prescriptions?: Prescription[];
}

const formatPrescriptionDate = (date: Date): string => {
  return date.toLocaleDateString([], {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const getStatusColor = (status: string): string => {
  switch (status) {
    case "new":
      return "bg-[#DBEAFE] text-[#1D4ED8]";
    case "filled":
      return "bg-[#DCFCE7] text-[#15803D]";
    case "expired":
      return "bg-red-100 text-red-600";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

const EPrescriptions: React.FC<EPrescriptionsProps> = ({ prescriptions }) => {
  // Default prescriptions data
  const defaultPrescriptions: Prescription[] = [
    {
      id: "1",
      date: new Date("2025-02-15"),
      doctorName: "Dr. Sarah Lee",
      status: "new",
    },
    {
      id: "2",
      date: new Date("2025-04-10"),
      doctorName: "Dr. John Smith",
      status: "filled",
    },
  ];

  const displayPrescriptions = prescriptions || defaultPrescriptions;

  return (
    <div className="bg-white p-6 ">
      <div className="flex items-center justify-between mb-4">
        <h3 className=" font-Outfit font-bold text-lg text-[#000000]">
          E-Prescriptions
        </h3>
        <img className=" w-6 h-6" src={prescriptionsimg} alt="" />
      </div>
      <div className="space-y-4">
        {displayPrescriptions.map((prescription) => (
          <div
            key={prescription.id}
            className="flex justify-between items-center"
          >
            <div>
              <p className="font-normal font-Outfit text-base text-[#000000]">
                {formatPrescriptionDate(prescription.date)}
              </p>
              <p className="text-[#4B5563] font-Inter font-normal text-sm">
                {prescription.doctorName}
              </p>
            </div>
            <span
              className={`px-2 py-1 rounded-full font-Inter font-normal text-sm capitalize ${getStatusColor(
                prescription.status
              )}`}
            >
              {prescription.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EPrescriptions;
