import type React from "react";
import { useState } from "react";
import PatientPageTitle from "../../../components/patient/patient-page-title";
import DashboardLayout from "../../../components/layouts/dashboard-layout";
import PatientHeader from "../../../components/patient/header";

import SuccessModal from "../../../components/ui/SuccessModal";
import PrescriptionDetailCard from "../../../components/prescriptions/prescription-detail-card";

const YourPrescriptionsPage: React.FC = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const prescriptions = [
    {
      medicationName: "Amoxicillin",
      dosage: "500mg",
      frequency: "Frequency: 3 times daily",
      prescribedBy: "Prescribed by: Dr. John Smith",
      duration: "Duration: Jan 15, 2024 - Jan 22, 2024",
      status: "Active" as const,
    },
    {
      medicationName: "Lisinopril",
      dosage: "10mg",
      frequency: "Frequency: Once daily",
      prescribedBy: "Prescribed by: Dr. Emily Chen",
      duration: "Duration: Jan 10, 2024 - Feb 10, 2024",
      status: "Active" as const,
    },
    {
      medicationName: "Lisinopril",
      dosage: "10mg",
      frequency: "Frequency: Once daily",
      prescribedBy: "Prescribed by: Dr. Emily Chen",
      duration: "Duration: Jan 10, 2024 - Feb 10, 2024",
      status: "Active" as const,
    },
    {
      medicationName: "Metformin",
      dosage: "850mg",
      frequency: "Frequency: Twice daily",
      prescribedBy: "Prescribed by: Dr. Michael Brown",
      duration: "Duration: Jan 5, 2024 - Apr 5, 2024",
      status: "Active" as const,
    },
    {
      medicationName: "Metformin",
      dosage: "850mg",
      frequency: "Frequency: Twice daily",
      prescribedBy: "Prescribed by: Dr. Michael Brown",
      duration: "Duration: Jan 5, 2024 - Apr 5, 2024",
      status: "Active" as const,
    },
    {
      medicationName: "Omeprazole",
      dosage: "20mg",
      frequency: "Frequency: Once daily",
      prescribedBy: "Prescribed by: Dr. Sarah Johnson",
      duration: "Duration: Jan 1, 2024 - Jan 30, 2024",
      status: "Refill needed" as const,
    },
  ];

  const handleDownloadPDF = () => {
    setShowSuccess(true);
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
  };

  return (
    <DashboardLayout>
      <PatientHeader />
      <div className="p-6 space-y-6">
        <PatientPageTitle breadcrumb="Your Prescription" title="" />

        <div className="max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {prescriptions.map((prescription, index) => (
              <PrescriptionDetailCard
                key={index}
                {...prescription}
                onDownload={handleDownloadPDF}
              />
            ))}
          </div>
        </div>
      </div>

      <SuccessModal
        isOpen={showSuccess}
        onClose={handleSuccessClose}
        title="Success!"
        message="Prescription PDF downloaded successfully."
      />
    </DashboardLayout>
  );
};

export default YourPrescriptionsPage;
