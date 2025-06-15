"use client";

import type React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdSearch } from "react-icons/md";
import DoctorDashboardLayout from "../../../components/doctor/doctor-dashboard-layout";
import SuccessModal from "../../../components/ui/SuccessModal";

const NewPrescriptionPage: React.FC = () => {
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState("Ethan Harper");
  const [prescriptionData, setPrescriptionData] = useState({
    prescriptionDetails: "",
    drugName: "",
    dosage: "",
    frequency: "",
    duration: "",
    additionalNotes: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setPrescriptionData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmitPrescription = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
    navigate("/doctor/prescriptions");
  };

  return (
    <DoctorDashboardLayout>
      <div className="p-6">
        <div className="max-w-2xl">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-[#0D171C] mb-2 font-Outfit">
              Prescriptions
            </h1>
            <p className="text-[#4F7A96] font-Outfit font-normal text-sm">
              All about prescriptions
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative mb-8">
            <MdSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#9CA3AF] w-5 h-5" />
            <input
              type="text"
              placeholder="Search patients"
              className="w-full pl-12 pr-4 py-4 text-[#4F7396] bg-[#F3F4F6] text-base font-normal border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2D5BFF] placeholder-[#9CA3AF] font-Outfit"
            />
          </div>

          {/* Create E-Prescription Section */}
          <div className="mb-6">
            <h2 className="text-xl font-bold text-[#0D171C] mb-4 font-Outfit">
              Create E-Prescription
            </h2>
            <p className="text-[#6B7280] font-Outfit font-normal text-sm mb-8">
              Patient: Ethan Harper
            </p>

            <form onSubmit={handleSubmitPrescription} className="space-y-6">
              {/* Prescription Details */}
              <div>
                <h3 className="text-lg font-semibold text-[#0D171C] mb-4 font-Outfit">
                  Prescription Details
                </h3>
                <textarea
                  placeholder=""
                  value={prescriptionData.prescriptionDetails}
                  onChange={(e) =>
                    handleInputChange("prescriptionDetails", e.target.value)
                  }
                  className="w-full h-32 px-4 py-3 text-gray-700 bg-[#F9FAFB] rounded-lg border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 focus:border-transparent placeholder-gray-400 resize-none font-Outfit"
                />
              </div>

              {/* Drug Information - Single Column Layout */}
              <div className="space-y-4">
                <input
                  placeholder="Drug Name"
                  value={prescriptionData.drugName}
                  onChange={(e) =>
                    handleInputChange("drugName", e.target.value)
                  }
                  className="w-full px-4 py-3 text-gray-700 bg-[#F9FAFB] rounded-lg border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 focus:border-transparent placeholder-[#9CA3AF] font-Outfit"
                />
                <input
                  placeholder="Dosage"
                  value={prescriptionData.dosage}
                  onChange={(e) => handleInputChange("dosage", e.target.value)}
                  className="w-full px-4 py-3 text-gray-700 bg-[#F9FAFB] rounded-lg border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 focus:border-transparent placeholder-[#9CA3AF] font-Outfit"
                />
                <input
                  placeholder="Frequency"
                  value={prescriptionData.frequency}
                  onChange={(e) =>
                    handleInputChange("frequency", e.target.value)
                  }
                  className="w-full px-4 py-3 text-gray-700 bg-[#F9FAFB] rounded-lg border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 focus:border-transparent placeholder-[#9CA3AF] font-Outfit"
                />
                <input
                  placeholder="Duration"
                  value={prescriptionData.duration}
                  onChange={(e) =>
                    handleInputChange("duration", e.target.value)
                  }
                  className="w-full px-4 py-3 text-gray-700 bg-[#F9FAFB] rounded-lg border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 focus:border-transparent placeholder-[#9CA3AF] font-Outfit"
                />
              </div>

              {/* Additional Notes */}
              <textarea
                placeholder="Additional notes"
                value={prescriptionData.additionalNotes}
                onChange={(e) =>
                  handleInputChange("additionalNotes", e.target.value)
                }
                className="w-full h-24 px-4 py-3 text-gray-700 bg-[#F9FAFB] rounded-lg border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 focus:border-transparent placeholder-[#9CA3AF] resize-none font-Outfit"
              />

              {/* Drug Interaction Alerts */}
              <div className="mb-8">
                <h4 className="text-base font-semibold text-[#0D171C] mb-2 font-Outfit">
                  Drug Interaction Alerts
                </h4>
                <p className="text-sm text-[#6B7280] font-Outfit">
                  No known drug interactions detected.
                </p>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-[#93C5FD] text-[#1E40AF] px-6 py-2.5 rounded-lg font-Outfit font-medium text-sm hover:bg-[#DBEAFE] transition-colors"
                >
                  Submit Prescription
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <SuccessModal
        isOpen={showSuccess}
        onClose={handleSuccessClose}
        title="Success!"
        message="Prescription has been submitted successfully."
      />
    </DoctorDashboardLayout>
  );
};

export default NewPrescriptionPage;
