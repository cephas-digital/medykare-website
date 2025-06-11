
import type React from "react";
import PatientPageTitle from "../../../components/patient/patient-page-title";
import DashboardLayout from "../../../components/layouts/dashboard-layout";
import PatientHeader from "../../../components/patient/header";

interface Visit {
  type: string;
  doctor: string;
  date: string;
}

interface VitalSign {
  label: string;
  value: string;
}

interface Immunization {
  name: string;
  date: string;
}

const HealthRecordsPage: React.FC = () => {
  const recentVisits: Visit[] = [
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
  ];

  const vitalSigns: VitalSign[] = [
    { label: "Blood Pressure", value: "120/80 mmHg" },
    { label: "Heart Rate", value: "72 bpm" },
    { label: "Temperature", value: "98.6°F" },
    { label: "Weight", value: "150 lbs" },
  ];

  const immunizations: Immunization[] = [
    { name: "Flu Shot", date: "Oct 2023" },
    { name: "COVID-19 Booster", date: "Aug 2023" },
  ];

  const additionalVisits: Visit[] = [
    {
      type: "Follow-up",
      doctor: "Dr. Smith",
      date: "Nov 15, 2023",
    },
    {
      type: "Follow-up",
      doctor: "Dr. Smith",
      date: "Nov 15, 2023",
    },
    {
      type: "Follow-up",
      doctor: "Dr. Smith",
      date: "Nov 15, 2023",
    },
    {
      type: "Follow-up",
      doctor: "Dr. Smith",
      date: "Nov 15, 2023",
    },
    {
      type: "Follow-up",
      doctor: "Dr. Smith",
      date: "Nov 15, 2023",
    },
  ];

  return (
    <DashboardLayout>
      <PatientHeader />
      <div className="p-6 space-y-6">
        <PatientPageTitle breadcrumb="Account Settings" title="" />

        <div className="max-w-6xl">
          <h2 className="text-2xl font-normal text-[#000] mb-8 font-Outfit">
            Health Records
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Recent Visits */}
              <div>
                <h3 className="text-lg font-normal text-[#000] mb-6 font-Outfit">
                  Recent Visits
                </h3>
                <div className="space-y-4">
                  {recentVisits.map((visit, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-start"
                    >
                      <div>
                        <p className="font-normal text-base text-[#000] font-Outfit">
                          {visit.type}
                        </p>
                        <p className="text-sm text-gray-600 font-Outfit">
                          {visit.doctor}
                        </p>
                      </div>
                      <p className="text-sm text-gray-600 font-Outfit">
                        {visit.date}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Vital Signs */}
              <div>
                <h3 className="text-lg font-normal text-[#000] mb-6 font-Outfit">
                  Vital Signs
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {vitalSigns.map((vital, index) => (
                    <div key={index}>
                      <p className="text-sm text-gray-600 font-Outfit mb-1">
                        {vital.label}
                      </p>
                      <p className="font-normal text-base text-[#000] font-Outfit">
                        {vital.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Immunizations */}
              <div>
                <h3 className="text-lg font-normal text-[#000] mb-6 font-Outfit">
                  Immunizations
                </h3>
                <div className="space-y-4">
                  {immunizations.map((immunization, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <p className="font-normal text-base text-[#000] font-Outfit">
                        {immunization.name}
                      </p>
                      <p className="text-sm text-gray-600 font-Outfit">
                        {immunization.date}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div>
              <h3 className="text-lg font-normal text-[#000] mb-6 font-Outfit">
                Recent Visits
              </h3>
              <div className="space-y-4">
                {[...recentVisits, ...additionalVisits].map((visit, index) => (
                  <div key={index} className="flex justify-between items-start">
                    <div>
                      <p className="font-normal text-base text-[#000] font-Outfit">
                        {visit.type}
                      </p>
                      <p className="text-sm text-gray-600 font-Outfit">
                        {visit.doctor}
                      </p>
                    </div>
                    <p className="text-sm text-gray-600 font-Outfit">
                      {visit.date}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default HealthRecordsPage;
