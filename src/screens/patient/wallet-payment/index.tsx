import type React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import PatientPageTitle from "../../../components/patient/patient-page-title";
import DashboardLayout from "../../../components/layouts/dashboard-layout";
import PatientHeader from "../../../components/patient/header";

const WalletPaymentPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const medication = searchParams.get("medication");
  const amount = searchParams.get("amount");

  const handleAddMoney = () => {
    navigate(`/patient/add-money?medication=${medication}&amount=${amount}`);
  };

  const handlePayNow = () => {
    navigate(
      `/patient/payment-success?medication=${medication}&amount=${amount}&transactionId=MEDY-2024-0123`
    );
  };

  return (
    <DashboardLayout>
      <PatientHeader />
      <div className="p-6 space-y-6">
        <PatientPageTitle breadcrumb="Order Medications" title="" />

        <div className="max-w-2xl">
          <h2 className="text-xl font-normal text-[#000] mb-8 font-Outfit">
            Wallet
          </h2>

          {/* Available Balance Card */}
          <div className="bg-[#2D5BFF] text-white p-6 rounded-lg mb-8">
            <h3 className="text-lg font-normal mb-2 font-Outfit">
              Available Balance
            </h3>
            <div className="text-3xl font-normal mb-4 font-Outfit">
              $1,234.56
            </div>
            <button
              onClick={handleAddMoney}
              className="bg-white text-[#2D5BFF] px-4 py-2 rounded-lg text-sm font-normal font-Inter hover:bg-gray-100 transition-colors"
            >
              Add Money
            </button>
          </div>

          {/* Payment Summary */}
          <div className="mb-8">
            <h3 className="text-lg font-normal text-[#000] mb-4 font-Outfit">
              Payment Summary
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="font-Outfit text-gray-600">Subtotal</span>
                <span className="font-Outfit">$99.00</span>
              </div>
              <div className="flex justify-between">
                <span className="font-Outfit text-gray-600">Tax</span>
                <span className="font-Outfit">$9.90</span>
              </div>
              <div className="flex justify-between border-t pt-3">
                <span className="font-Outfit font-medium">Total</span>
                <span className="font-Outfit font-medium">$108.90</span>
              </div>
            </div>
          </div>

          <button
            onClick={handlePayNow}
            className="w-full bg-[#2D5BFF] text-white py-3 rounded-lg font-normal font-Inter hover:bg-blue-600 transition-colors"
          >
            Pay Now
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default WalletPaymentPage;
