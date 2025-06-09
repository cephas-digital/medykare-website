import type React from "react";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import PatientPageTitle from "../../../components/patient/patient-page-title";
import DashboardLayout from "../../../components/layouts/dashboard-layout";
import PatientHeader from "../../../components/patient/header";
import PaymentSuccessModal from "../../../components/ui/PaymentSuccessModal";
import SuccessModal from "../../../components/ui/SuccessModal";

const WalletPaymentPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const medication = searchParams.get("medication");
  const amount = searchParams.get("amount") || "250.00";
  const [showPaymentSuccess, setShowPaymentSuccess] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleAddMoney = () => {
    navigate(`/patient/add-money?medication=${medication}&amount=${amount}`);
  };

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
            Wallet
          </h2>

          {/* Available Balance Card */}
          <div className=" bg-gradient-to-r from-[#2563EB] via-[#147BFA] to-[#147BFA] text-white p-6 rounded-lg mb-8">
            <h3 className="text-xl font-normal mb-2 font-Inter">
              Available Balance
            </h3>
            <div className="text-4xl font-normal mb-4 font-Outfit">
              $1,234.56
            </div>
            <button
              onClick={handleAddMoney}
              className="bg-white text-[#2D5BFF] px-5 py-2 rounded-lg text-base font-normal font-Inter hover:bg-gray-100 transition-colors"
            >
              Add Money
            </button>
          </div>

          {/* Payment Summary */}
          <div className=" mb-8 p-5">
            <h3 className="text-xl font-normal text-[#000] mb-4 font-Outfit">
              Payment Summary
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-[#000000] font-Inter text-base">
                  Subtotal
                </span>
                <span className="text-[#000000] font-Inter text-base">
                  $99.00
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#000000] font-Inter text-base">Tax</span>
                <span className="font-Outfit">$9.90</span>
              </div>
              <div className="flex justify-between pt-3">
                <span className="text-[#000000] font-Inter text-base">
                  Total
                </span>
                <span className="text-[#000000] font-Inter text-base">
                  $108.90
                </span>
              </div>
            </div>

            <button
              onClick={handlePayNow}
              className="w-full bg-[#2D5BFF] mt-3 text-white py-3 rounded-lg font-normal font-Inter hover:bg-blue-600 transition-colors"
            >
              Pay Now
            </button>
          </div>
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

export default WalletPaymentPage;

// import type React from "react";
// import { useNavigate, useSearchParams } from "react-router-dom";
// import PatientPageTitle from "../../../components/patient/patient-page-title";
// import DashboardLayout from "../../../components/layouts/dashboard-layout";
// import PatientHeader from "../../../components/patient/header";

// const WalletPaymentPage: React.FC = () => {
//   const navigate = useNavigate();
//   const [searchParams] = useSearchParams();
//   const medication = searchParams.get("medication");
//   const amount = searchParams.get("amount");

//   const handleAddMoney = () => {
//     navigate(`/patient/add-money?medication=${medication}&amount=${amount}`);
//   };

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
//             Wallet
//           </h2>

//           {/* Available Balance Card */}
//           <div className=" bg-gradient-to-r from-[#2563EB] via-[#147BFA] to-[#147BFA] text-white p-6 rounded-lg mb-8">
//             <h3 className="text-xl font-normal mb-2 font-Inter">
//               Available Balance
//             </h3>
//             <div className="text-4xl font-normal mb-4 font-Outfit">
//               $1,234.56
//             </div>
//             <button
//               onClick={handleAddMoney}
//               className="bg-white text-[#2D5BFF] px-5 py-2 rounded-lg text-base font-normal font-Inter hover:bg-gray-100 transition-colors"
//             >
//               Add Money
//             </button>
//           </div>

//           {/* Payment Summary */}
//           <div className=" mb-8 p-5">
//             <h3 className="text-xl font-normal text-[#000] mb-4 font-Outfit">
//               Payment Summary
//             </h3>
//             <div className="space-y-3">
//               <div className="flex justify-between">
//                 <span className="text-[#000000] font-Inter text-base">
//                   Subtotal
//                 </span>
//                 <span className="text-[#000000] font-Inter text-base">
//                   $99.00
//                 </span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="text-[#000000] font-Inter text-base">Tax</span>
//                 <span className="font-Outfit">$9.90</span>
//               </div>
//               <div className="flex justify-between pt-3">
//                 <span className="text-[#000000] font-Inter text-base">
//                   Total
//                 </span>
//                 <span className="text-[#000000] font-Inter text-base">
//                   $108.90
//                 </span>
//               </div>
//             </div>

//             <button
//               onClick={handlePayNow}
//               className="w-full bg-[#2D5BFF] mt-3 text-white py-3 rounded-lg font-normal font-Inter hover:bg-blue-600 transition-colors"
//             >
//               Pay Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </DashboardLayout>
//   );
// };

// export default WalletPaymentPage;
