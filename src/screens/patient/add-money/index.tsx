import type React from "react";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import PatientPageTitle from "../../../components/patient/patient-page-title";
import FormInput from "../../../components/ui/FormInput";
import DashboardLayout from "../../../components/layouts/dashboard-layout";
import PatientHeader from "../../../components/patient/header";
import SuccessModal from "../../../components/ui/SuccessModal";

const AddMoneyPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const medication = searchParams.get("medication");
  const amount = searchParams.get("amount");
  const [showSuccess, setShowSuccess] = useState(false);
  const [addAmount, setAddAmount] = useState("");

  const handleAddMoney = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
    navigate(
      `/patient/payment-methods?medication=${medication}&amount=${amount}`
    );
  };

  return (
    <DashboardLayout>
      <PatientHeader />
      <div className="p-6 space-y-6">
        <PatientPageTitle breadcrumb="Order Medications" title="" />

        <div className=" mx-auto">
          <h2 className="text-3xl font-normal text-[#000] mb-8 font-Outfit">
            Add Money
          </h2>

          <div className="max-w-md bg-[#F9FAFB] px-16 py-5 rounded-lg">
            <h3 className="text-base font-semibold text-[#000] mb-6 font-Outfit">
              Add Money
            </h3>

            <form onSubmit={handleAddMoney} className="space-y-6">
              <FormInput
                label="Amount"
                placeholder="Enter amount"
                value={addAmount}
                onChange={(e) => setAddAmount(e.target.value)}
              />

              <FormInput label="Amount" placeholder="Confirm amount" />

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
    </DashboardLayout>
  );
};

export default AddMoneyPage;
