import type React from "react";
// import medicalicon from "../../assets/images/medicalicon.png";
import { useNavigate } from "react-router";

interface MedicationOrder {
  id: string;
  medicationName: string;
  dosage: string;
  status: "in-transit" | "delivered" | "processing" | "cancelled";
  expectedDate?: Date;
  deliveredDate?: Date;
}

interface MedicationOrdersProps {
  orders?: MedicationOrder[];
}

const formatOrderDate = (date: Date): string => {
  const today = new Date();
  const isToday = date.toDateString() === today.toDateString();

  if (isToday) return "Arriving Today";

  return date.toLocaleDateString([], {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const getStatusColor = (status: string): string => {
  switch (status) {
    case "in-transit":
      return "text-[#2563EB]";
    case "delivered":
      return " text-[#16A34A]";
    case "processing":
      return "text-yellow-600";
    case "cancelled":
      return " text-red-600";
    default:
      return " text-gray-600";
  }
};

const MedicationOrders: React.FC<MedicationOrdersProps> = ({ orders }) => {
  // Default medication orders data
  const defaultOrders: MedicationOrder[] = [
    {
      id: "1",
      medicationName: "Amoxicillin",
      dosage: "500mg",
      status: "in-transit",
      expectedDate: new Date(),
    },
    {
      id: "2",
      medicationName: "Lisinopril",
      dosage: "10mg",
      status: "delivered",
      deliveredDate: new Date("2025-02-14"),
    },
  ];

  const displayOrders = orders || defaultOrders;
  const navigate = useNavigate();

  return (
    <div className="bg-white p-6 ">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-Outfit font-bold text-lg text-[#000000]">
          Medication Orders
        </h3>
        {/* <img className=" w-6 h-6" src={medicalicon} alt="" /> */}
      </div>
      <div className="space-y-4">
        {displayOrders.map((order) => (
          <div key={order.id} className="flex justify-between items-center">
            <div>
              <p className="font-normal font-Outfit text-base text-[#000000]">
                {order.medicationName} {order.dosage}
              </p>
              <p className="text-[#4B5563] font-Inter font-normal text-sm">
                {order.status === "delivered" && order.deliveredDate
                  ? formatOrderDate(order.deliveredDate)
                  : order.expectedDate
                  ? formatOrderDate(order.expectedDate)
                  : "Date TBD"}
              </p>
            </div>
            <span
              className={`px-2 py-1 rounded-full text-sm capitalize ${getStatusColor(
                order.status
              )}`}
            >
              {order.status === "in-transit" ? "In Transit" : order.status}
            </span>
          </div>
        ))}
        <button
          onClick={() => navigate("/patient/order-medications")}
          className="w-full bg-[#24A148] font-Outfit font-normal text-base text-white py-2 rounded-lg"
        >
          Order Medicine
        </button>
      </div>
    </div>
  );
};

export default MedicationOrders;
