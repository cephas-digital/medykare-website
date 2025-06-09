import type React from "react";
import whiteicon from "../../../assets/images/white.png";
import blueicon from "../../../assets/images/blueicon.png";

interface PharmacyCardProps {
  id: number;
  name: string;
  distance: string;
  address: string;
  status: "open" | "closed";
  isSelected?: boolean;
  onSelect?: () => void;
}

const PharmacyCard: React.FC<PharmacyCardProps> = ({
  name,
  distance,
  address,
  status,
  isSelected = false,
  onSelect,
}) => {
  return (
    <div
      className={`flex items-center justify-between p-4  transition-all cursor-pointer ${
        isSelected
          ? "bg-[#2D5BFF] text-white shadow-md"
          : " hover:shadow-sm bg-white"
      }`}
      onClick={onSelect}
    >
      <div className="flex items-center gap-3">
        <div
          className={`w-10 h-10 rounded-lg flex items-center justify-center ${
            isSelected ? "" : ""
          }`}
        >
          <img
            src={isSelected ? whiteicon : blueicon}
            alt="Pharmacy icon"
            className="w-6 h-6"
            onError={(e) => {
              // Fallback to a simple pharmacy icon if images don't load
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
              target.nextElementSibling?.classList.remove("hidden");
            }}
          />
          <div
            className={`hidden  rounded ${
              isSelected ? "bg-white" : "bg-[#2D5BFF]"
            }`}
          />
        </div>
        <div>
          <p
            className={`font-medium font-Outfit ${
              isSelected ? "text-white" : "text-gray-900"
            }`}
          >
            {name}
          </p>
          <p
            className={`text-sm font-Outfit ${
              isSelected ? "text-white/80" : "text-gray-600"
            }`}
          >
            {distance}
          </p>
          <p
            className={`text-sm font-Outfit ${
              isSelected ? "text-white/80" : "text-gray-600"
            }`}
          >
            {address}
          </p>
        </div>
      </div>
      <button
        className={`px-4 py-2 rounded-lg text-sm font-medium font-Outfit transition-colors ${
          status === "open"
            ? isSelected
              ? "bg-white text-[#2D5BFF] hover:bg-gray-100"
              : "bg-green-100 text-green-700 hover:bg-green-200"
            : "bg-red-100 text-red-600 cursor-not-allowed"
        }`}
        disabled={status === "closed"}
        onClick={(e) => {
          e.stopPropagation();
          if (status === "open" && onSelect) {
            onSelect();
          }
        }}
      >
        {status === "open" ? "Open" : "Closed"}
      </button>
    </div>
  );
};

export default PharmacyCard;
