"use client";

import type React from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DoctorDashboardLayout from "../../../components/doctor/doctor-dashboard-layout";
import SuccessModal from "../../../components/ui/SuccessModal";

interface PrescriptionRequestData {
  id: string;
  patientName: string;
  dateOfRequest: string;
  symptomsReported: string;
  medicationRequested: string;
  dosage: string;
  frequency: string;
  duration: string;
}

const PrescriptionDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);

  // Mock prescription request data
  const prescriptionData: Record<string, PrescriptionRequestData> = {
    "1": {
      id: "1",
      patientName: "Emily Harper",
      dateOfRequest: "2025-03-15",
      symptomsReported:
        "Persistent cough, sore throat, and mild fever for the past three days.",
      medicationRequested: "Antibiotics",
      dosage: "500mg",
      frequency: "Twice daily",
      duration: "7 days",
    },
    "2": {
      id: "2",
      patientName: "Ethan Bennett",
      dateOfRequest: "2024-07-25",
      symptomsReported: "Headache and fever for two days.",
      medicationRequested: "Pain relievers",
      dosage: "200mg",
      frequency: "Three times daily",
      duration: "5 days",
    },
  };

  const prescription = prescriptionData[id || "1"] || prescriptionData["1"];

  const handleApprove = () => {
    setShowSuccess(true);
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
    navigate("/doctor/prescriptions");
  };

  return (
    <DoctorDashboardLayout>
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-[#0D171C] mb-2 font-Outfit">
            Prescriptions
          </h1>
          <p className="text-[#4F7A96] font-Outfit font-normal text-sm">
            All about prescriptions
          </p>
        </div>

        {/* Request Details */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-[#0D171C] mb-4 font-Outfit">
            Request Details
          </h2>
          <p className="text-[#6B7280] font-Outfit font-normal text-sm mb-12">
            Patient: {prescription.patientName}
          </p>

          <div className="space-y-8">
            {/* Patient Info and Date */}
            <div className="grid grid-cols-2 gap-16">
              <div>
                <h4 className="text-sm font-medium text-[#6B7280] mb-2 font-Outfit">
                  Patient Name
                </h4>
                <p className="text-base font-normal text-[#111827] font-Outfit">
                  {prescription.patientName}
                </p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-[#6B7280] mb-2 font-Outfit">
                  Date of Request
                </h4>
                <p className="text-base font-normal text-[#111827] font-Outfit">
                  {prescription.dateOfRequest}
                </p>
              </div>
            </div>

            {/* Symptoms and Medication */}
            <div className="grid grid-cols-2 gap-16">
              <div>
                <h4 className="text-sm font-medium text-[#6B7280] mb-2 font-Outfit">
                  Symptoms Reported
                </h4>
                <p className="text-base font-normal text-[#111827] font-Outfit leading-relaxed">
                  {prescription.symptomsReported}
                </p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-[#6B7280] mb-2 font-Outfit">
                  Medication Requested
                </h4>
                <p className="text-base font-normal text-[#111827] font-Outfit">
                  {prescription.medicationRequested}
                </p>
              </div>
            </div>

            {/* Dosage and Frequency */}
            <div className="grid grid-cols-2 gap-16">
              <div>
                <h4 className="text-sm font-medium text-[#6B7280] mb-2 font-Outfit">
                  Dosage
                </h4>
                <p className="text-base font-normal text-[#111827] font-Outfit">
                  {prescription.dosage}
                </p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-[#6B7280] mb-2 font-Outfit">
                  Frequency
                </h4>
                <p className="text-base font-normal text-[#111827] font-Outfit">
                  {prescription.frequency}
                </p>
              </div>
            </div>

            {/* Duration */}
            <div className="mb-16">
              <h4 className="text-sm font-medium text-[#6B7280] mb-2 font-Outfit">
                Duration
              </h4>
              <p className="text-base font-normal text-[#111827] font-Outfit">
                {prescription.duration}
              </p>
            </div>

            {/* Approve Button */}
            <div className="flex justify-end">
              <button
                onClick={handleApprove}
                className="bg-[#4F46E5] text-white px-8 py-3 rounded-lg font-Outfit font-medium text-base hover:bg-blue-600 transition-colors"
              >
                Approve
              </button>
            </div>
          </div>
        </div>
      </div>

      <SuccessModal
        isOpen={showSuccess}
        onClose={handleSuccessClose}
        title="Success!"
        message="Prescription has been approved successfully."
      />
    </DoctorDashboardLayout>
  );
};

export default PrescriptionDetailPage;
