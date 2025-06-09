import type React from "react";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { MdSecurity } from "react-icons/md";
import PatientPageTitle from "../../../components/patient/patient-page-title";
import FormInput from "../../../components/ui/FormInput";
import DashboardLayout from "../../../components/layouts/dashboard-layout";
import PatientHeader from "../../../components/patient/header";
import SuccessModal from "../../../components/ui/SuccessModal";

const AddCardPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const medication = searchParams.get("medication");
  const amount = searchParams.get("amount");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleAddCard = (e: React.FormEvent) => {
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

        <div className="mx-auto">
          <h2 className="text-3xl font-normal text-[#000] mb-8 font-Outfit">
            Payment
          </h2>

          <div className="max-w-md bg-[#F9FAFB] px-16 py-5 rounded-lg">
            <h3 className="text-base font-semibold text-[#000] mb-6 font-Outfit">
              Add New Card
            </h3>

            <form onSubmit={handleAddCard} className="space-y-6">
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
                type="submit"
                className="w-full bg-[#2D5BFF] text-white py-3 rounded-lg font-Outfit font-normal text-base hover:bg-blue-600 transition-colors"
              >
                Add Card
              </button>

              <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                <MdSecurity className="w-4 h-4" />
                <span className="font-Outfit font-normal text-sm text-[#6B7280]">
                  Secure payment powered by Stripe
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>

      <SuccessModal
        isOpen={showSuccess}
        onClose={handleSuccessClose}
        title="Success!"
        message="Your card has been successfully added."
      />
    </DashboardLayout>
  );
};

export default AddCardPage;
