import type React from "react";
import { MdNotifications, MdSearch } from "react-icons/md";
import DashboardLayout from "../../../components/layouts/dashboard-layout";
import PatientHeader from "../../../components/patient/header";
import ProfileAndKyc from "../../../components/patient/profile-and-kyc";
import UpcomingAppointments from "../../../components/patient/upcoming-appointments";
import EPrescriptions from "../../../components/patient/e-prescriptions";
import MedicationOrders from "../../../components/patient/medication/medication-orders";
import LaboratoryTests from "../../../components/patient/laboratory-tests";
import RecentPayments from "../../../components/patient/recent-payments";

const Dashboard: React.FC = () => {
  return (
    <DashboardLayout>
      <PatientHeader />
      <div className="p-6 space-y-6">
        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Profile & KYC Status */}
          <ProfileAndKyc />

          {/* Upcoming Appointments */}
          <UpcomingAppointments />

          {/* E-Prescriptions */}
          <EPrescriptions />

          {/* Medication Orders */}
          <MedicationOrders />
          {/* Laboratory Tests */}
          <LaboratoryTests />

          {/* Recent Payments */}
          <RecentPayments />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
