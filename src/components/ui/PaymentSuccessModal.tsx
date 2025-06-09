import type React from "react";
import { FaCheck } from "react-icons/fa";

interface PaymentSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownloadReceipt: () => void;
  amount: string;
  transactionId: string;
}

const PaymentSuccessModal: React.FC<PaymentSuccessModalProps> = ({
  isOpen,
  onClose,
  onDownloadReceipt,
  amount,
  transactionId,
}) => {
  if (!isOpen) return null;

  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-xl w-full mx-4 text-center">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <FaCheck className="w-8 h-8 text-white" />
        </div>

        <h3 className="text-2xl font-bold text-[#000] mb-8 font-Outfit">
          Payment Successful
        </h3>

        <div className="space-y-4 text-left mb-8">
          <div className="flex justify-between">
            <span className="text-[#4B5563] font-Inter font-normal text-base">
              Amount Paid
            </span>
            <span className="font-Outfit text-base font-semibold text-[#000]">
              ${amount}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#4B5563] font-Inter font-normal text-base">
              Transaction ID
            </span>
            <span className="font-Outfit text-base font-semibold text-[#000]">
              {transactionId}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#4B5563] font-Inter font-normal text-base">
              Date & Time
            </span>
            <span className="font-Outfit text-base font-semibold text-[#000]">
              May 23, 2025 15:30
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <button
            onClick={onDownloadReceipt}
            className="w-full bg-[#2563EB] font-Outfit font-normal text-base text-[#FFFFFF] py-3 rounded-lg  hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2"
          >
            <span>Download Receipt</span>
          </button>

          <button
            onClick={onClose}
            className="w-full bg-transparent text-[#000] py-3 rounded-lg font-Outfit font-semibold text-base hover:bg-gray-100 transition-colors"
          >
            Okay
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessModal;
