import type React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PatientPageTitle from "../../../components/patient/patient-page-title";
import DashboardLayout from "../../../components/layouts/dashboard-layout";
import PatientHeader from "../../../components/patient/header";
import SuccessModal from "../../../components/ui/SuccessModal";

const NewPrescriptionPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [customSymptoms, setCustomSymptoms] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const commonSymptoms = [
    "Headache",
    "Fever",
    "Cough",
    "Sore Throat",
    "Nausea",
    "Fatigue",
    "Dizziness",
    "Chest Pain",
    "Shortness of Breath",
    "Abdominal Pain",
  ];

  const handleSymptomToggle = (symptom: string) => {
    setSelectedSymptoms((prev) =>
      prev.includes(symptom)
        ? prev.filter((s) => s !== symptom)
        : [...prev, symptom]
    );
  };

  const handleGeneratePrescriptions = () => {
    setShowSuccess(true);
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
    navigate("/patient/your-prescriptions");
  };

  return (
    <DashboardLayout>
      <PatientHeader />
      <div className="p-6 space-y-6">
        <PatientPageTitle breadcrumb="E-Prescriptions" title="" />

        <div className="max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:flex gap-8 w-full">
            <div className=" bg-[#F9FAFB] rounded-lg lg:w-[40%] p-5">
              <h3 className="text-base font-bold text-[#000] mb-6 font-Outfit">
                Common Symptoms
              </h3>
              <div className="space-y-2">
                {commonSymptoms.map((symptom, index) => (
                  <div
                    key={index}
                    onClick={() => handleSymptomToggle(symptom)}
                    className={`px-4 h-[44px] flex items-center rounded-lg cursor-pointer transition-all ${
                      selectedSymptoms.includes(symptom)
                        ? "border-[#2D5BFF] bg-blue-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <span className="font-Inter font-normal text-base text-[#4B5563]">
                      {symptom}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Custom Symptoms */}
            <div className="lg:w-[60%]">
              <textarea
                value={customSymptoms}
                onChange={(e) => setCustomSymptoms(e.target.value)}
                placeholder=" Write symptoms..."
                className="w-full h-96 p-4 border border-[#F9FAFB] bg-[#F9FAFB] rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#2D5BFF] focus:border-transparent font-Inter font-normal text-base"
              />
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <button
              onClick={handleGeneratePrescriptions}
              className="bg-[#2D5BFF] text-white w-96 py-3 font-Outfit font-bold text-base hover:bg-blue-600 transition-colors"
            >
              Generate Prescriptions
            </button>
          </div>
        </div>
      </div>

      <SuccessModal
        isOpen={showSuccess}
        onClose={handleSuccessClose}
        title="Success!"
        message="Prescription has been generated successfully."
      />
    </DashboardLayout>
  );
};

export default NewPrescriptionPage;
