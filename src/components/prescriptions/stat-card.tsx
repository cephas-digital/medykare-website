import type React from "react";

interface StatCardProps {
  icon: React.ReactNode;
  value: string | number;
  label: string;
  bgColor: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, label, bgColor }) => {
  return (
    <div className="bg-white rounded-lg ">
      <div className={` flex items-center w-12 h-12  mb-4`}>{icon}</div>
      <div className="text-2xl font-bold text-[#000] font-Outfit mb-1">
        {value}
      </div>
      <div className=" font-normal text-[#6B7280] font-Inter text-base ">
        {label}
      </div>
    </div>
  );
};

export default StatCard;
