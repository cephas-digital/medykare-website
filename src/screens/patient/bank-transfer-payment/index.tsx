"use client";

import type React from "react";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import PatientPageTitle from "../../../components/patient/patient-page-title";
import DashboardLayout from "../../../components/layouts/dashboard-layout";
import PatientHeader from "../../../components/patient/header";
import PaymentSuccessModal from "../../../components/ui/PaymentSuccessModal";
import SuccessModal from "../../../components/ui/SuccessModal";

const BankTransferPaymentPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const medication = searchParams.get("medication");
  const amount = searchParams.get("amount") || "250.00";
  const [showPaymentSuccess, setShowPaymentSuccess] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handlePayNow = () => {
    setShowPaymentSuccess(true);
  };

  const handleDownloadReceipt = () => {
    setShowPaymentSuccess(false);
    setShowSuccess(true);
  };

  const handlePaymentSuccessClose = () => {
    setShowPaymentSuccess(false);
    navigate("/patient/order-medications");
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
    navigate("/patient/order-medications");
  };

  return (
    <DashboardLayout>
      <PatientHeader />
      <div className="p-6 space-y-6">
        <PatientPageTitle breadcrumb="Order Medications" title="" />

        <div className="max-w-2xl">
          <h2 className="text-3xl font-normal text-[#000] mb-8 font-Outfit">
            Bank Transfer
          </h2>

          <div className="space-y-6 mb-8">
            {/* Bank Details */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-[#374151] font-Outfit font-normal mb-1">
                  Bank Name
                </p>
                <p className="font-semibold text-base text-[#000000] font-Outfit">
                  MedyKare Financial Services
                </p>
              </div>
              <div>
                <p className="text-sm text-[#374151] font-Outfit font-normal mb-1">
                  Account Number
                </p>
                <p className="font-semibold text-base text-[#000000] font-Outfit">
                  1234 5678 9012 3456
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-[#374151] font-Outfit font-normal mb-1">
                  Account Holder
                </p>
                <p className="font-semibold text-base text-[#000000] font-Outfit">
                  MedyKare Healthcare Ltd
                </p>
              </div>
              <div>
                <p className="text-sm text-[#374151] font-Outfit font-normal mb-1">
                  SWIFT/BIC
                </p>
                <p className="font-semibold text-base text-[#000000] font-Outfit">
                  MEDYXXXX
                </p>
              </div>
            </div>

            {/* Reference Number */}
            <div>
              <p className="text-sm text-[#374151] font-Outfit font-normal mb-1">
                Reference Number
              </p>
              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="font-semibold text-base text-[#000000] font-Outfit">
                  MEDY-2024-0123
                </p>
              </div>
            </div>

            {/* Amount */}
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-[#1E40AF] font-normal text-base font-Outfit">
                Amount to Transfer: $250.00
              </p>
            </div>
          </div>

          <button
            onClick={handlePayNow}
            className="w-full bg-[#2D5BFF] text-white py-3 rounded-lg font-normal font-Inter text-base hover:bg-blue-600 transition-colors"
          >
            Pay Now
          </button>
        </div>
      </div>

      <PaymentSuccessModal
        isOpen={showPaymentSuccess}
        onClose={handlePaymentSuccessClose}
        onDownloadReceipt={handleDownloadReceipt}
        amount={amount}
        transactionId="MEDY-2024-0123"
      />

      <SuccessModal
        isOpen={showSuccess}
        onClose={handleSuccessClose}
        title="Success!"
        message="Your action has been successfully scheduled."
      />
    </DashboardLayout>
  );
};

export default BankTransferPaymentPage;

// import type React from "react";
// import { useNavigate, useSearchParams } from "react-router-dom";
// import PatientPageTitle from "../../../components/patient/patient-page-title";
// import DashboardLayout from "../../../components/layouts/dashboard-layout";
// import PatientHeader from "../../../components/patient/header";

// const BankTransferPaymentPage: React.FC = () => {
//   const navigate = useNavigate();
//   const [searchParams] = useSearchParams();
//   const medication = searchParams.get("medication");
//   const amount = searchParams.get("amount");

//   const handlePayNow = () => {
//     navigate(
//       `/patient/payment-success?medication=${medication}&amount=${amount}&transactionId=MEDY-2024-0123`
//     );
//   };

//   return (
//     <DashboardLayout>
//       <PatientHeader />
//       <div className="p-6 space-y-6">
//         <PatientPageTitle breadcrumb="Order Medications" title="" />

//         <div className="max-w-2xl">
//           <h2 className="text-3xl font-normal text-[#000] mb-8 font-Outfit">
//             Bank Transfer
//           </h2>

//           <div className="space-y-6 mb-8">
//             {/* Bank Details */}
//             <div className="grid grid-cols-2 gap-6">
//               <div>
//                 <p className="text-sm text-[#374151] font-Outfit font-normal mb-1">
//                   Bank Name
//                 </p>
//                 <p className="font-semibold text-base text-[#000000] font-Outfit">
//                   MedyKare Financial Services
//                 </p>
//               </div>
//               <div>
//                 <p className="text-sm text-[#374151] font-Outfit font-normal mb-1">
//                   Account Number
//                 </p>
//                 <p className="font-semibold text-base text-[#000000] font-Outfit">
//                   1234 5678 9012 3456
//                 </p>
//               </div>
//             </div>

//             <div className="grid grid-cols-2 gap-6">
//               <div>
//                 <p className="text-sm text-[#374151] font-Outfit font-normal mb-1">
//                   Account Holder
//                 </p>
//                 <p className="font-semibold text-base text-[#000000] font-Outfit">
//                   MedyKare Healthcare Ltd
//                 </p>
//               </div>
//               <div>
//                 <p className="text-sm text-[#374151] font-Outfit font-normal mb-1">
//                   SWIFT/BIC
//                 </p>
//                 <p className="font-semibold text-base text-[#000000] font-Outfit">
//                   MEDYXXXX
//                 </p>
//               </div>
//             </div>

//             {/* Reference Number */}
//             <div>
//               <p className="text-sm text-[#374151] font-Outfit font-normal mb-1">
//                 Reference Number
//               </p>
//               <div className="bg-gray-100 p-3 rounded-lg">
//                 <p className="font-semibold text-base text-[#000000] font-Outfit">
//                   MEDY-2024-0123
//                 </p>
//               </div>
//             </div>

//             {/* Amount */}
//             <div className="bg-blue-50 p-4 rounded-lg">
//               <p className="text-[#1E40AF] font-normal text-base font-Outfit">
//                 Amount to Transfer: $250.00
//               </p>
//             </div>
//           </div>

//           <button
//             onClick={handlePayNow}
//             className="w-full bg-[#2D5BFF] text-white py-3 rounded-lg font-normal font-Inter text-base hover:bg-blue-600 transition-colors"
//           >
//             Pay Now
//           </button>
//         </div>
//       </div>
//     </DashboardLayout>
//   );
// };

// export default BankTransferPaymentPage;
