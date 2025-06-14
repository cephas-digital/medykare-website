import type React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdSecurity } from "react-icons/md";
import DoctorDashboardLayout from "../../../components/doctor/doctor-dashboard-layout";
import FormInput from "../../../components/ui/FormInput";
import SuccessModal from "../../../components/ui/SuccessModal";

const AddCardPage: React.FC = () => {
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleAddCard = (e: React.FormEvent) => {
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
            Add Card
          </h2>
        </div>

        <div className="max-w-md bg-[#F9FAFB] px-16 py-5 rounded-lg">
          <h3 className="text-base font-semibold text-[#000] mb-6 font-Outfit">
            Add New Card
          </h3>

          <form onSubmit={handleAddCard} className="space-y-6">
            <FormInput
              label="Card Name"
              placeholder="Enter cardholder name"
              value={formData.cardName}
              onChange={(e) => handleInputChange("cardName", e.target.value)}
            />

            <FormInput
              label="Card Number"
              placeholder="0000 0000 0000 0000"
              value={formData.cardNumber}
              onChange={(e) => handleInputChange("cardNumber", e.target.value)}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormInput
                label="Expiry Date"
                placeholder="MM/YY"
                value={formData.expiryDate}
                onChange={(e) =>
                  handleInputChange("expiryDate", e.target.value)
                }
              />
              <FormInput
                label="CVV"
                placeholder="123"
                value={formData.cvv}
                onChange={(e) => handleInputChange("cvv", e.target.value)}
              />
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

      <SuccessModal
        isOpen={showSuccess}
        onClose={handleSuccessClose}
        title="Success!"
        message="Your card has been successfully added."
      />
    </DoctorDashboardLayout>
  );
};

export default AddCardPage;
