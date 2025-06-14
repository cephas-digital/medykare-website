"use client";

import type React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DoctorDashboardLayout from "../../../components/doctor/doctor-dashboard-layout";
import { TextInput } from "../../../components/ui/inputs";
import SuccessModal from "../../../components/ui/SuccessModal";

const WithdrawMoneyPage: React.FC = () => {
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);
  const [addMoneyAmount, setAddMoneyAmount] = useState("");
  const [confirmAmount, setConfirmAmount] = useState("");

  const handleAddMoney = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
    navigate("/doctor/earnings");
  };

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
            Add Money
          </h2>

          <div className="max-w-md bg-[#F9FAFB] px-16 py-8 rounded-lg">
            <h3 className="text-base font-semibold text-[#000] mb-6 font-Outfit">
              Add Money
            </h3>

            <form onSubmit={handleAddMoney} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[#374151] mb-2 font-Outfit">
                  Amount
                </label>
                <TextInput
                  placeholder="Enter amount"
                  value={addMoneyAmount}
                  onChange={(e) => setAddMoneyAmount(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#374151] mb-2 font-Outfit">
                  Confirm Amount
                </label>
                <TextInput
                  placeholder="Confirm amount"
                  value={confirmAmount}
                  onChange={(e) => setConfirmAmount(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#2D5BFF] text-white py-3 rounded-lg font-Outfit font-normal text-base hover:bg-blue-600 transition-colors"
              >
                Add Money
              </button>
            </form>
          </div>
        </div>
      </div>

      <SuccessModal
        isOpen={showSuccess}
        onClose={handleSuccessClose}
        title="Success!"
        message="Money has been successfully added to your wallet."
      />
    </DoctorDashboardLayout>
  );
};

export default WithdrawMoneyPage;
