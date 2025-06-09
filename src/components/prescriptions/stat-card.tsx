import type React from "react";

interface StatCardProps {
  icon: React.ReactNode;
  value: string | number;
  label: string;
  bgColor: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, label, bgColor }) => {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <div className={` flex items-center w-12 h-12  mb-4`}>{icon}</div>
      <div className="text-2xl font-semibold text-[#000] font-Outfit mb-1">
        {value}
      </div>
      <div className="text-sm text-gray-600 font-Outfit">{label}</div>
    </div>
  );
};

export default StatCard;
