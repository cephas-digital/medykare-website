import type React from "react";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import DashboardLayout from "../../../components/layouts/dashboard-layout";
import PatientHeader from "../../../components/patient/header";
import PatientPageTitle from "../../../components/patient/patient-page-title";

const PaymentMethodsPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const medication = searchParams.get("medication");
  const amount = searchParams.get("amount");
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState("credit-card");

  const transactions = [
    {
      type: "Wallet Payment",
      purchase: "Amoxillin 100g/02",
      date: "Jun 24, 2025",
    },
    {
      type: "Wallet Payment",
      purchase: "Amoxillin 100g/02",
      date: "Jun 24, 2025",
    },
    {
      type: "Wallet Payment",
      purchase: "Amoxillin 100g/02",
      date: "Jun 24, 2025",
    },
    {
      type: "Wallet Payment",
      purchase: "Amoxillin 100g/02",
      date: "Jun 24, 2025",
    },
    {
      type: "Wallet Payment",
      purchase: "Amoxillin 100g/02",
      date: "Jun 24, 2025",
    },
    {
      type: "Wallet Payment",
      purchase: "Amoxillin 100g/02",
      date: "Jun 24, 2025",
    },
    {
      type: "Wallet Payment",
      purchase: "Amoxillin 100g/02",
      date: "Jun 24, 2025",
    },
  ];

  const handlePayment = () => {
    // Simulate payment processing
    navigate(
      `/patient/payment-success?medication=${medication}&amount=${amount}&transactionId=MEDY-2024-0123`
    );
  };

  return (
    <DashboardLayout>
      <PatientHeader />
      <div className="p-6 space-y-6">
        <PatientPageTitle breadcrumb="Payment" title="" />

        <div className="max-w-6xl">
          <h2 className="text-xl font-normal text-[#000] mb-8 font-Outfit">
            Payment Methods
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Wallet & Payment Methods */}
            <div className="space-y-6">
              {/* Available Balance Card */}
              <div className="bg-[#2D5BFF] text-white p-6 rounded-lg">
                <h3 className="text-lg font-normal mb-2 font-Outfit">
                  Available Balance
                </h3>
                <div className="text-3xl font-normal mb-4 font-Outfit">
                  $1,234.56
                </div>
                <div className="text-sm opacity-90 mb-4 font-Outfit">
                  Wallet ID: 0000011122
                </div>
                <button
                  onClick={() =>
                    navigate(
                      `/patient/add-money?medication=${medication}&amount=${amount}`
                    )
                  }
                  className="bg-white text-[#2D5BFF] px-4 py-2 rounded-lg text-sm font-normal font-Inter hover:bg-gray-100 transition-colors"
                >
                  Add Money
                </button>
              </div>

              {/* Payment Method Selection */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <input
                    type="radio"
                    id="credit-card"
                    name="payment-method"
                    value="credit-card"
                    checked={selectedPaymentMethod === "credit-card"}
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

                <button
                  onClick={() =>
                    navigate(
                      `/patient/add-card?medication=${medication}&amount=${amount}`
                    )
                  }
                  className="text-[#2D5BFF] font-normal font-Outfit hover:underline"
                >
                  Add New Card
                </button>
              </div>

              <button
                onClick={handlePayment}
                className="w-full bg-[#2D5BFF] text-white py-3 rounded-lg font-normal font-Inter hover:bg-blue-600 transition-colors"
              >
                Pay ${amount}
              </button>
            </div>

            {/* Right Column - Credit Card & Transactions */}
            <div className="space-y-6">
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

              {/* Transaction History */}
              <div>
                <div className="grid grid-cols-4 gap-4 text-sm font-normal text-gray-600 mb-4 font-Outfit">
                  <span>Type</span>
                  <span>Purchase for</span>
                  <span>Transaction date</span>
                  <span>Actions</span>
                </div>
                <div className="space-y-3">
                  {transactions.map((transaction, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-4 gap-4 text-sm py-2 border-b border-gray-100"
                    >
                      <span className="font-Outfit">{transaction.type}</span>
                      <span className="font-Outfit">
                        {transaction.purchase}
                      </span>
                      <span className="font-Outfit">{transaction.date}</span>
                      <button className="text-[#2D5BFF] font-normal font-Outfit hover:underline text-left">
                        View
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PaymentMethodsPage;
