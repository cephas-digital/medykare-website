"use client";

import type React from "react";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { MdSecurity } from "react-icons/md";
import PatientPageTitle from "../../../components/patient/patient-page-title";
import FormInput from "../../../components/ui/FormInput";
import DashboardLayout from "../../../components/layouts/dashboard-layout";
import PatientHeader from "../../../components/patient/header";
import PaymentSuccessModal from "../../../components/ui/PaymentSuccessModal";
import SuccessModal from "../../../components/ui/SuccessModal";

const CreditCardPaymentPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const medication = searchParams.get("medication");
  const amount = searchParams.get("amount") || "250.00";
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState("existing-card");
  const [showPaymentSuccess, setShowPaymentSuccess] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleAddCard = () => {
    setShowSuccess(true);
  };

  const handlePlaceOrder = () => {
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
    if (!showPaymentSuccess) {
      // If coming from Add Card, stay on the same page
      return;
    }
    navigate("/patient/order-medications");
  };

  return (
    <DashboardLayout>
      <PatientHeader />
      <div className="p-6 space-y-6">
        <PatientPageTitle breadcrumb="Order Medications" title="" />

        <div className="max-w-6xl">
          <h2 className="text-4xl font-normal text-[#000] mb-8 font-Outfit">
            Credit/Debit Card
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Payment Section */}
            <div className="space-y-6">
              <h3 className="text-3xl font-normal text-[#111827] font-Outfit">
                Payment
              </h3>

              {/* Credit Card Display */}
              <div className=" bg-gradient-to-b  from-[#2D5BFF] via-[#1B3799] to-[#1B3799] text-white p-6 rounded-lg">
                <div className="text-xl font-normal mb-4 font-Inter">
                  DEBS ADEOYE
                </div>
                <div className="text-4xl font-Outfit mb-4">
                  0000 1111 2222 3333
                </div>
                <div className="flex justify-between text-base font-Outfit font-normal">
                  <span>333</span>
                  <span>01/28</span>
                </div>
              </div>

              {/* Add New Card Form */}
              <div>
                <h4 className="text-base font-bold text-[#111827] mb-4 font-Outfit">
                  Add New Card
                </h4>
                <div className="space-y-4">
                  <FormInput
                    label="Card Name"
                    placeholder="Enter cardholder name"
                  />
                  <FormInput
                    label="Card Number"
                    placeholder="0000 0000 0000 0000"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <FormInput label="Expiry Date" placeholder="MM/YY" />
                    <FormInput label="CVV" placeholder="123" />
                  </div>
                  <button
                    onClick={handleAddCard}
                    className="w-full bg-[#2563EB] text-white py-3 rounded-lg  font-Outfit font-normal text-base hover:bg-blue-600 transition-colors"
                  >
                    Add Card
                  </button>
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                    <MdSecurity className="w-4 h-4" />
                    <span className="font-Inter font-normal text-sm text-[#6B7280]">
                      Secure payment powered by Stripe
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Order Summary */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-normal text-[#000] mb-4 font-Outfit">
                  Order Summary
                </h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-[#4B5563] font-Inter font-normal text-base">
                      Subtotal
                    </span>
                    <span className="font-Outfit font-normal text-base text-[#000000]">
                      $45.99
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#4B5563] font-Inter font-normal text-base">
                      Delivery
                    </span>
                    <span className="font-Outfit font-normal text-base text-[#000000]">
                      $5.00
                    </span>
                  </div>
                  <div className="flex justify-between border-t pt-3">
                    <span className="font-Outfit font-normal text-base text-[#000000]">
                      Total
                    </span>
                    <span className="font-Outfit font-normal text-base text-[#000000]">
                      $50.99
                    </span>
                  </div>
                </div>

                <button
                  onClick={handlePlaceOrder}
                  className="w-full bg-[#2D5BFF] text-white font-Outfit font-bold text-base b-[#2D5BFF] py-3 rounded-lg hover:bg-blue-600 transition-colors mb-6"
                >
                  Place Order
                </button>
              </div>

              {/* Payment Method Selection */}
              <div>
                <h4 className="text-xl font-normal text-[#000] mb-4 font-Outfit">
                  Payment Method
                </h4>
                <div className="flex items-center space-x-3">
                  <input
                    type="radio"
                    id="existing-card"
                    name="payment-method"
                    value="existing-card"
                    checked={selectedPaymentMethod === "existing-card"}
                    onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                    className="w-4 h-4 text-[#2D5BFF]"
                  />
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-5 bg-gray-300 rounded"></div>
                    <span className="font-Outfit font-normal text-base text-[#000]">
                      Credit Card ending in 3333
                    </span>
                  </div>
                </div>
              </div>
            </div>
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

export default CreditCardPaymentPage;

// import type React from "react";
// import { useState } from "react";
// import { useNavigate, useSearchParams } from "react-router-dom";
// import { MdSecurity } from "react-icons/md";
// import PatientPageTitle from "../../../components/patient/patient-page-title";
// import FormInput from "../../../components/ui/FormInput";
// import DashboardLayout from "../../../components/layouts/dashboard-layout";
// import PatientHeader from "../../../components/patient/header";

// const CreditCardPaymentPage: React.FC = () => {
//   const navigate = useNavigate();
//   const [searchParams] = useSearchParams();
//   const medication = searchParams.get("medication");
//   const amount = searchParams.get("amount");
//   const [selectedPaymentMethod, setSelectedPaymentMethod] =
//     useState("existing-card");

//   const handleAddCard = () => {
//     navigate(`/patient/add-card?medication=${medication}&amount=${amount}`);
//   };

//   const handlePlaceOrder = () => {
//     navigate(
//       `/patient/payment-success?medication=${medication}&amount=${amount}&transactionId=MEDY-2024-0123`
//     );
//   };

//   return (
//     <DashboardLayout>
//       <PatientHeader />
//       <div className="p-6 space-y-6">
//         <PatientPageTitle breadcrumb="Order Medications" title="" />

//         <div className="max-w-6xl">
//           <h2 className="text-4xl font-normal text-[#000] mb-8 font-Outfit">
//             Credit/Debit Card
//           </h2>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//             {/* Left Column - Payment Section */}
//             <div className="space-y-6">
//               <h3 className="text-3xl font-normal text-[#111827] font-Outfit">
//                 Payment
//               </h3>

//               {/* Credit Card Display */}
//               <div className=" bg-gradient-to-b  from-[#2D5BFF] via-[#1B3799] to-[#1B3799] text-white p-6 rounded-lg">
//                 <div className="text-xl font-normal mb-4 font-Inter">
//                   DEBS ADEOYE
//                 </div>
//                 <div className="text-4xl font-Outfit mb-4">
//                   0000 1111 2222 3333
//                 </div>
//                 <div className="flex justify-between text-base font-Outfit font-normal">
//                   <span>333</span>
//                   <span>01/28</span>
//                 </div>
//               </div>

//               {/* Add New Card Form */}
//               <div>
//                 <h4 className="text-base font-bold text-[#111827] mb-4 font-Outfit">
//                   Add New Card
//                 </h4>
//                 <div className="space-y-4">
//                   <FormInput
//                     label="Card Name"
//                     placeholder="Enter cardholder name"
//                   />
//                   <FormInput
//                     label="Card Number"
//                     placeholder="0000 0000 0000 0000"
//                   />
//                   <div className="grid grid-cols-2 gap-4">
//                     <FormInput label="Expiry Date" placeholder="MM/YY" />
//                     <FormInput label="CVV" placeholder="123" />
//                   </div>
//                   <button
//                     onClick={handleAddCard}
//                     className="w-full bg-[#2563EB] text-white py-3 rounded-lg  font-Outfit font-normal text-base hover:bg-blue-600 transition-colors"
//                   >
//                     Add Card
//                   </button>
//                   <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
//                     <MdSecurity className="w-4 h-4" />
//                     <span className="font-Inter font-normal text-sm text-[#6B7280]">
//                       Secure payment powered by Stripe
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Right Column - Order Summary */}
//             <div className="space-y-6">
//               <div>
//                 <h3 className="text-xl font-normal text-[#000] mb-4 font-Outfit">
//                   Order Summary
//                 </h3>
//                 <div className="space-y-3 mb-6">
//                   <div className="flex justify-between">
//                     <span className="text-[#4B5563] font-Inter font-normal text-base">
//                       Subtotal
//                     </span>
//                     <span className="font-Outfit font-normal text-base text-[#000000]">
//                       $45.99
//                     </span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-[#4B5563] font-Inter font-normal text-base">
//                       Delivery
//                     </span>
//                     <span className="font-Outfit font-normal text-base text-[#000000]">
//                       $5.00
//                     </span>
//                   </div>
//                   <div className="flex justify-between border-t pt-3">
//                     <span className="font-Outfit font-normal text-base text-[#000000]">
//                       Total
//                     </span>
//                     <span className="font-Outfit font-normal text-base text-[#000000]">
//                       $50.99
//                     </span>
//                   </div>
//                 </div>

//                 <button
//                   onClick={handlePlaceOrder}
//                   className="w-full bg-[#2D5BFF] text-white font-Outfit font-bold text-base b-[#2D5BFF] py-3 rounded-lg hover:bg-blue-600 transition-colors mb-6"
//                 >
//                   Place Order
//                 </button>
//               </div>

//               {/* Payment Method Selection */}
//               <div>
//                 <h4 className="text-xl font-normal text-[#000] mb-4 font-Outfit">
//                   Payment Method
//                 </h4>
//                 <div className="flex items-center space-x-3">
//                   <input
//                     type="radio"
//                     id="existing-card"
//                     name="payment-method"
//                     value="existing-card"
//                     checked={selectedPaymentMethod === "existing-card"}
//                     onChange={(e) => setSelectedPaymentMethod(e.target.value)}
//                     className="w-4 h-4 text-[#2D5BFF]"
//                   />
//                   <div className="flex items-center space-x-3">
//                     <div className="w-8 h-5 bg-gray-300 rounded"></div>
//                     <span className="font-Outfit font-normal text-base text-[#000]">
//                       Credit Card ending in 3333
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </DashboardLayout>
//   );
// };

// export default CreditCardPaymentPage;
