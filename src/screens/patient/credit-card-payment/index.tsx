import type React from "react";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { MdSecurity } from "react-icons/md";
import PatientPageTitle from "../../../components/patient/patient-page-title";
import FormInput from "../../../components/ui/FormInput";
import DashboardLayout from "../../../components/layouts/dashboard-layout";
import PatientHeader from "../../../components/patient/header";

const CreditCardPaymentPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const medication = searchParams.get("medication");
  const amount = searchParams.get("amount");
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState("existing-card");

  const handleAddCard = () => {
    navigate(`/patient/add-card?medication=${medication}&amount=${amount}`);
  };

  const handlePlaceOrder = () => {
    navigate(
      `/patient/payment-success?medication=${medication}&amount=${amount}&transactionId=MEDY-2024-0123`
    );
  };

  return (
    <DashboardLayout>
      <PatientHeader />
      <div className="p-6 space-y-6">
        <PatientPageTitle breadcrumb="Order Medications" title="" />

        <div className="max-w-6xl">
          <h2 className="text-xl font-normal text-[#000] mb-8 font-Outfit">
            Credit/Debit Card
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Payment Section */}
            <div className="space-y-6">
              <h3 className="text-lg font-normal text-[#000] font-Outfit">
                Payment
              </h3>

              {/* Credit Card Display */}
              <div className="bg-[#2D5BFF] text-white p-6 rounded-lg">
                <div className="text-lg font-normal mb-4 font-Outfit">
                  DEBS ADEOYE
                </div>
                <div className="text-xl font-mono mb-4">
                  0000 1111 2222 3333
                </div>
                <div className="flex justify-between text-sm">
                  <span>333</span>
                  <span>01/28</span>
                </div>
              </div>

              {/* Add New Card Form */}
              <div>
                <h4 className="text-base font-normal text-[#000] mb-4 font-Outfit">
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
                    className="w-full bg-[#2D5BFF] text-white py-3 rounded-lg font-normal font-Inter hover:bg-blue-600 transition-colors"
                  >
                    Add Card
                  </button>
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                    <MdSecurity className="w-4 h-4" />
                    <span className="font-Outfit">
                      Secure payment powered by Stripe
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Order Summary */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-normal text-[#000] mb-4 font-Outfit">
                  Order Summary
                </h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="font-Outfit text-gray-600">Subtotal</span>
                    <span className="font-Outfit">$45.99</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-Outfit text-gray-600">Delivery</span>
                    <span className="font-Outfit">$5.00</span>
                  </div>
                  <div className="flex justify-between border-t pt-3">
                    <span className="font-Outfit font-medium">Total</span>
                    <span className="font-Outfit font-medium">$50.99</span>
                  </div>
                </div>

                <button
                  onClick={handlePlaceOrder}
                  className="w-full bg-[#2D5BFF] text-white py-3 rounded-lg font-normal font-Inter hover:bg-blue-600 transition-colors mb-6"
                >
                  Place Order
                </button>
              </div>

              {/* Payment Method Selection */}
              <div>
                <h4 className="text-base font-normal text-[#000] mb-4 font-Outfit">
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
                    <span className="font-Outfit">
                      Credit Card ending in 3333
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CreditCardPaymentPage;
