import type React from "react";
import { FaCheck } from "react-icons/fa";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
}

const SuccessModal: React.FC<SuccessModalProps> = ({
  isOpen,
  onClose,
  title,
  message,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-sm w-full mx-4 text-center">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <FaCheck className="w-8 h-8 text-white" />
        </div>

        <h3 className="text-xl font-normal text-[#000] font-Outfit">{title}</h3>
        <p className=" font-Inter py-2 text-base font-normal text-[#4B5563]">
          {message}
        </p>

        <button
          onClick={onClose}
          className="w-full bg-[#2563EB] text-white py-3 font-Outfit text-base font-semibold rounded-lg  hover:bg-blue-600 transition-colors"
        >
          Okay
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
