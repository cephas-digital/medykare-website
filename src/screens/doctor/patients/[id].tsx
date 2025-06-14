import type React from "react";
import { useParams, useNavigate } from "react-router-dom";
import DoctorDashboardLayout from "../../../components/doctor/doctor-dashboard-layout";

interface PatientProfileData {
  id: string;
  fullName: string;
  memberSince: string;
  patientId: string;
  dateOfBirth: string;
  gender: string;
  bloodType: string;
  allergies: string;
  currentMedications: string;
  recentVisits: Array<{
    type: string;
    doctor: string;
    date: string;
  }>;
  vitalSigns: {
    bloodPressure: string;
    heartRate: string;
  };
}

const PatientProfilePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Debug: Log the ID to see what we're getting
  console.log("Patient ID from URL:", id);

  // Mock patient data for all patients
  const patientData: Record<string, PatientProfileData> = {
    "1": {
      id: "1",
      fullName: "Ethan A. Carter",
      memberSince: "January 2025",
      patientId: "#1234568",
      dateOfBirth: "1985-03-15",
      gender: "Male",
      bloodType: "O+",
      allergies: "Penicillin",
      currentMedications: "Lisinopril, Metformin",
      recentVisits: [
        {
          type: "Annual Physical",
          doctor: "Dr. Johnson",
          date: "Dec 5, 2023",
        },
        {
          type: "Follow-up",
          doctor: "Dr. Smith",
          date: "Nov 15, 2023",
        },
      ],
      vitalSigns: {
        bloodPressure: "120/80 mmHg",
        heartRate: "72 bpm",
      },
    },
    "2": {
      id: "2",
      fullName: "Olivia Bennett",
      memberSince: "February 2025",
      patientId: "#1234569",
      dateOfBirth: "1992-07-22",
      gender: "Female",
      bloodType: "A+",
      allergies: "None",
      currentMedications: "Birth Control",
      recentVisits: [
        {
          type: "Annual Physical",
          doctor: "Dr. Johnson",
          date: "Dec 10, 2023",
        },
        {
          type: "Consultation",
          doctor: "Dr. Smith",
          date: "Nov 20, 2023",
        },
      ],
      vitalSigns: {
        bloodPressure: "110/70 mmHg",
        heartRate: "68 bpm",
      },
    },
    "3": {
      id: "3",
      fullName: "Noah Thompson",
      memberSince: "March 2025",
      patientId: "#1234570",
      dateOfBirth: "1978-11-08",
      gender: "Male",
      bloodType: "B+",
      allergies: "Shellfish",
      currentMedications: "None",
      recentVisits: [
        {
          type: "Check-up",
          doctor: "Dr. Johnson",
          date: "Dec 15, 2023",
        },
      ],
      vitalSigns: {
        bloodPressure: "130/85 mmHg",
        heartRate: "75 bpm",
      },
    },
    "4": {
      id: "4",
      fullName: "Ava Rodriguez",
      memberSince: "April 2025",
      patientId: "#1234571",
      dateOfBirth: "1989-05-19",
      gender: "Female",
      bloodType: "AB+",
      allergies: "Latex",
      currentMedications: "Vitamins",
      recentVisits: [
        {
          type: "Annual Physical",
          doctor: "Dr. Johnson",
          date: "Dec 20, 2023",
        },
      ],
      vitalSigns: {
        bloodPressure: "115/75 mmHg",
        heartRate: "70 bpm",
      },
    },
    "5": {
      id: "5",
      fullName: "Liam Walker",
      memberSince: "May 2025",
      patientId: "#1234572",
      dateOfBirth: "1965-09-03",
      gender: "Male",
      bloodType: "O-",
      allergies: "Aspirin",
      currentMedications: "Blood Pressure Medication",
      recentVisits: [
        {
          type: "Follow-up",
          doctor: "Dr. Johnson",
          date: "Dec 25, 2023",
        },
      ],
      vitalSigns: {
        bloodPressure: "140/90 mmHg",
        heartRate: "80 bpm",
      },
    },
    "6": {
      id: "6",
      fullName: "Liam Walker Jr.",
      memberSince: "June 2025",
      patientId: "#1234573",
      dateOfBirth: "1965-09-03",
      gender: "Male",
      bloodType: "O-",
      allergies: "None",
      currentMedications: "Multivitamins",
      recentVisits: [
        {
          type: "Consultation",
          doctor: "Dr. Johnson",
          date: "Dec 30, 2023",
        },
      ],
      vitalSigns: {
        bloodPressure: "125/80 mmHg",
        heartRate: "73 bpm",
      },
    },
  };

  // Get the specific patient or default to patient 1
  const patient = patientData[id || "1"] || patientData["1"];

  // Always show the profile - remove the "not found" check for now
  // if (!patient) {
  //   return (
  //     <DoctorDashboardLayout>
  //       <div className="p-6">
  //         <div className="text-center py-8">
  //           <h2 className="text-xl font-bold text-[#0D171C] mb-4 font-Outfit">Patient Not Found</h2>
  //           <button
  //             onClick={() => navigate("/doctor/patients")}
  //             className="text-[#2D5BFF] font-medium font-Outfit hover:underline"
  //           >
  //             Back to Patients
  //           </button>
  //         </div>
  //       </div>
  //     </DoctorDashboardLayout>
  //   )
  // }

  // Get the first name for the profile title
  const firstName = patient.fullName.split(" ")[0];

  return (
    <DoctorDashboardLayout>
      <div className="p-6 bg-[#F8FAFC] min-h-screen">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-[#0D171C] mb-2 font-Outfit">
            Patients
          </h1>
          <p className="text-[#4F7A96] font-Outfit font-normal text-sm">
            Manage all appointments
          </p>
        </div>

        {/* Patient Profile Title */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#0D171C] font-Outfit">
            {firstName}'s Profile
          </h2>
        </div>

        {/* Patient Header Info */}
        <div className=" flex items-center gap-4 rounded-lg p-6 mb-8  ">
          <div>
            <div className=" w-10 h-10 rounded-full"></div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-[#000] mb-2 font-Outfit">
              {patient.fullName}
            </h3>
            <p className="text-[#4B5563] font-Inter font-normal text-base mb-1">
              Member since {patient.memberSince}
            </p>
            <p className="text-[#4B5563] font-Inter font-normal text-base">
              Patient ID: {patient.patientId}
            </p>
          </div>
        </div>

        {/* Personal and Medical Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Personal Information */}
          <div className="  ">
            <h4 className="text-xl font-normal text-[#000] mb-6 font-Outfit">
              Personal Information
            </h4>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-normal text-[#4B5563] mb-2 font-Inter">
                  Full Name
                </label>
                <input
                  type="text"
                  value={patient.fullName}
                  readOnly
                  className="w-full px-4 py-3  border border-[#D1D5DB] rounded-lg font-Inter font-normal text-[#0D171C] text-base"
                />
              </div>

              <div>
                <label className="block text-sm font-normal text-[#4B5563] mb-2 font-Inter">
                  Date of Birth
                </label>
                <input
                  type="text"
                  value={patient.dateOfBirth}
                  readOnly
                  className="w-full px-4 py-3  border border-[#D1D5DB] rounded-lg font-Inter font-normal text-[#0D171C] text-base"
                />
              </div>

              <div>
                <label className="block text-sm font-normal text-[#4B5563] mb-2 font-Inter">
                  Gender
                </label>
                <input
                  type="text"
                  value={patient.gender}
                  readOnly
                  className="w-full px-4 py-3  border border-[#D1D5DB] rounded-lg font-Inter font-normal text-[#0D171C] text-base"
                />
              </div>
            </div>
          </div>

          {/* Medical Information */}
          <div className=" ">
            <h4 className="text-xl font-normal text-[#000] mb-6 font-Outfit">
              Medical Information
            </h4>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-normal text-[#4B5563] mb-2 font-Inter">
                  Blood Type
                </label>
                <input
                  type="text"
                  value={patient.bloodType}
                  readOnly
                  className="w-full px-4 py-3  border border-[#D1D5DB] rounded-lg font-Inter font-normal text-[#0D171C] text-base"
                />
              </div>

              <div>
                <label className="block text-sm font-normal text-[#4B5563] mb-2 font-Inter">
                  Allergies
                </label>
                <input
                  type="text"
                  value={patient.allergies}
                  readOnly
                  className="w-full px-4 py-3  border border-[#D1D5DB] rounded-lg font-Inter font-normal text-[#0D171C] text-base"
                />
              </div>

              <div>
                <label className="block text-sm font-normal text-[#4B5563] mb-2 font-Inter">
                  Current Medications
                </label>
                <input
                  type="text"
                  value={patient.currentMedications}
                  readOnly
                  className="w-full px-4 py-3  border border-[#D1D5DB] rounded-lg font-Inter font-normal text-[#0D171C] text-base"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Health Records */}
        <div className="  ">
          <h4 className="text-3xl font-normal text-[#000] mb-6 font-Outfit">
            Health Records
          </h4>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Visits */}
            <div>
              <h5 className="text-sm font-normal text-[#374151] mb-4 font-Outfit">
                Recent Visits
              </h5>
              <div className="space-y-4">
                {patient.recentVisits.map((visit, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0"
                  >
                    <div>
                      <p className="font-normal text-base text-[#111827] font-Outfit">
                        {visit.type}
                      </p>
                      <p className="text-sm text-[#4B5563] font-normal font-Outfit">
                        {visit.doctor}
                      </p>
                    </div>
                    <p className="text-sm text-[#4B5563] font-normal font-Outfit">
                      {visit.date}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Vital Signs */}
            <div>
              <h5 className="text-sm font-normal text-[#374151] mb-4 font-Outfit">
                Vital Signs
              </h5>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[#4B5563] font-Inter font-normal text-sm">
                    Blood Pressure
                  </span>
                  <span className="text-[#111827] font-Outfit font-normal text-base">
                    {patient.vitalSigns.bloodPressure}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#4B5563] font-Inter font-normal text-sm">
                    Heart Rate
                  </span>
                  <span className="text-[#111827] font-Outfit font-normal text-base">
                    {patient.vitalSigns.heartRate}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DoctorDashboardLayout>
  );
};

export default PatientProfilePage;
