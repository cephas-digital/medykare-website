import type React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PatientPageTitle from "../../../components/patient/patient-page-title";
import DashboardLayout from "../../../components/layouts/dashboard-layout";
import PatientHeader from "../../../components/patient/header";
import SuccessModal from "../../../components/ui/SuccessModal";
import StatCard from "../../../components/prescriptions/stat-card";
import PrescriptionCard from "../../../components/prescriptions/prescription-card";
import icontwelve from "../../../assets/images/icontwelve.png";
import iconthirteen from "../../../assets/images/iconthirteen.png";
import iconfourteen from "../../../assets/images/iconfourteen.png";
import iconfifteen from "../../../assets/images/iconfifteen.png";

const EPrescriptionsPage: React.FC = () => {
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);

  const stats = [
    {
      icon: <img src={icontwelve} alt="Active Prescriptions" />,
      value: "3",
      label: "Active Prescriptions",
      bgColor: "bg-blue-500",
    },
    {
      icon: <img src={iconthirteen} alt="Pending Refills" />,
      value: "1",
      label: "Pending Refills",
      bgColor: "bg-yellow-500",
    },
    {
      icon: <img src={iconfourteen} alt="Next Medication" />,
      value: "2:00 PM",
      label: "Next Medication",
      bgColor: "bg-green-500",
    },
    {
      icon: <img src={iconfifteen} alt="Nearby Pharmacies" />,
      value: "5",
      label: "Nearby Pharmacies",
      bgColor: "bg-purple-500",
    },
  ];

  const recentPrescriptions = [
    {
      doctorName: "Dr. John Smith",
      date: "Jan 15, 2024",
      diagnosis: "Hypertension",
      medications: ["Amlodipine 5mg", "Lisinopril 10mg"],
      validFor: "3 months",
      status: "Active" as const,
    },
    {
      doctorName: "Dr. Emily Brown",
      date: "Jan 10, 2024",
      diagnosis: "Allergic Rhinitis",
      medications: ["Cetirizine 10mg", "Fluticasone Nasal Spray"],
      validFor: "1 month",
      status: "Active" as const,
    },
    {
      doctorName: "Dr. Michael Chen",
      date: "Jan 5, 2024",
      diagnosis: "Bacterial Infection",
      medications: ["Amoxicillin 500mg"],
      validFor: "7 days",
      status: "Completed" as const,
    },
  ];

  const handleNewPrescription = () => {
    navigate("/patient/new-prescription");
  };

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
        <div className="flex justify-between items-center mb-12">
          <div>
            <PatientPageTitle breadcrumb="E-Prescriptions" title="" />
          </div>

          <button
            onClick={handleNewPrescription}
            className="bg-[#2D5BFF] text-white w-[220px] h-11  py-2 rounded-lg font-Outfit font-bold text-base hover:bg-blue-600 transition-colors"
          >
            New Prescription
          </button>
        </div>

        <div className="max-w-7xl ">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>

          {/* Recent Prescriptions */}
          <div>
            <h3 className="text-xl font-bold text-[#000] mb-6 font-Outfit">
              Recent Prescriptions
            </h3>
            <div className=" w-full">
              {recentPrescriptions.map((prescription, index) => (
                <PrescriptionCard
                  key={index}
                  {...prescription}
                  onDownload={handleDownloadPDF}
                />
              ))}
            </div>
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

export default EPrescriptionsPage;
