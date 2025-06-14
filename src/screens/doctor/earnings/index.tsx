"use client";

import type React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DoctorDashboardLayout from "../../../components/doctor/doctor-dashboard-layout";

const DoctorEarningsPage: React.FC = () => {
  const navigate = useNavigate();
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
  ];

  return (
    <DoctorDashboardLayout>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-[#0D171C] mb-2 font-Outfit">
            My Earnings
          </h1>
          <p className="text-[#4F7A96] font-Outfit font-normal text-sm">
            Manage your earnings
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-[#0D171C] mb-6 font-Outfit">
            Earnings/Wallet
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Left Column - Available Balance */}
            <div className="bg-[#2D5BFF] text-white p-6 rounded-lg">
              <h3 className="text-lg font-normal mb-2 font-Outfit">
                Available Balance
              </h3>
              <div className="text-3xl font-normal mb-4 font-Outfit">
                $1,234.56
              </div>
              <div className="text-sm opacity-90 mb-10 font-Outfit">
                Wallet ID: 0000011122
              </div>
              <button
                onClick={() => navigate("/doctor/earnings/add-money")}
                className="bg-white text-[#2D5BFF] px-4 py-2 rounded-lg text-sm font-normal font-Outfit hover:bg-gray-100 transition-colors"
              >
                Add Money
              </button>
            </div>

            {/* Right Column - Credit Card */}
            <div className="space-y-6">
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
                    <span className="font-Outfit text-base font-normal text-[#000]">
                      Credit Card ending in 3333
                    </span>
                  </div>
                </div>

                <div className="justify-center items-center flex">
                  <button
                    onClick={() => navigate("/doctor/earnings/add-card")}
                    className="text-[#2D5BFF] font-bold font-Outfit text-base hover:underline"
                  >
                    Add New Card
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Transaction History */}
          <div>
            <div className="grid grid-cols-4 gap-4 text-sm font-medium text-[#4F7A96] mb-4 font-Outfit">
              <span>Type</span>
              <span>Purchase for</span>
              <span>Transaction date</span>
              <span>Actions</span>
            </div>
            <div className="space-y-3">
              {transactions.map((transaction, index) => (
                <div
                  key={index}
                  className="grid grid-cols-4 gap-4 text-sm py-3 border-b border-gray-100"
                >
                  <span className="font-Outfit text-[#0D171C]">
                    {transaction.type}
                  </span>
                  <span className="font-Outfit text-[#0D171C]">
                    {transaction.purchase}
                  </span>
                  <span className="font-Outfit text-[#4F7A96]">
                    {transaction.date}
                  </span>
                  <button className="text-[#2D5BFF] font-bold font-Outfit hover:underline text-left">
                    View
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DoctorDashboardLayout>
  );
};

export default DoctorEarningsPage;
