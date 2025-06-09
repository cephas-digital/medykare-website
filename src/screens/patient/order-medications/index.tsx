import type React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PatientPageTitle from "../../../components/patient/patient-page-title";
import FormInput from "../../../components/ui/FormInput";
import PharmacyCard from "../../../components/patient/medication/pharmacy-card";
import DashboardLayout from "../../../components/layouts/dashboard-layout";
import PatientHeader from "../../../components/patient/header";

interface Pharmacy {
  id: number;
  name: string;
  distance: string;
  address: string;
  status: "open" | "closed";
  medications: Medication[];
}

interface Medication {
  name: string;
  prescribedBy: string;
  refillsRemaining: number;
}

const OrderMedicationsPage: React.FC = () => {
  const [selectedPharmacyId, setSelectedPharmacyId] = useState<number>(1);
  const navigate = useNavigate();

  const pharmacies: Pharmacy[] = [
    {
      id: 1,
      name: "MedPlus Store",
      distance: "0.5 miles",
      address: "123 Healthcare St",
      status: "open",
      medications: [
        {
          name: "Lisinopril - 10mg",
          prescribedBy: "Dr. Sarah Wilson",
          refillsRemaining: 2,
        },
        {
          name: "Metformin - 500mg",
          prescribedBy: "Dr. Michael Chen",
          refillsRemaining: 2,
        },
      ],
    },
    {
      id: 2,
      name: "City Drugstore",
      distance: "1.2 miles",
      address: "456 Medical Ave",
      status: "open",
      medications: [
        {
          name: "Aspirin - 81mg",
          prescribedBy: "Dr. Sarah Wilson",
          refillsRemaining: 3,
        },
      ],
    },
    {
      id: 3,
      name: "City Drugstore",
      distance: "1.2 miles",
      address: "456 Medical Ave",
      status: "closed",
      medications: [],
    },
    {
      id: 4,
      name: "City Drugstore",
      distance: "1.2 miles",
      address: "456 Medical Ave",
      status: "open",
      medications: [
        {
          name: "Vitamin D3 - 1000IU",
          prescribedBy: "Dr. Michael Chen",
          refillsRemaining: 1,
        },
      ],
    },
  ];

  const selectedPharmacy = pharmacies.find((p) => p.id === selectedPharmacyId);
  const availableMedications = selectedPharmacy?.medications || [];

  // Function to handle buy now button click
  const handleBuyNow = (medication: Medication) => {
    navigate(
      `/patient/make-payment?medication=${encodeURIComponent(
        medication.name
      )}&amount=250.00`
    );
  };

  return (
    <DashboardLayout>
      <PatientHeader />

      <div className="p-6 space-y-6">
        <PatientPageTitle breadcrumb="Order Medications" title="" />
        <div className="w-full lg:flex md:grid grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Nearby Pharmacies */}
          <div className="lg:w-[35%] bg-[#F9FAFB] p-5">
            <h3 className="text-base font-normal text-[#111827] mb-4 font-Outfit">
              Nearby Pharmacies
            </h3>
            <div className="space-y-3">
              {pharmacies.map((pharmacy) => (
                <PharmacyCard
                  key={pharmacy.id}
                  {...pharmacy}
                  isSelected={selectedPharmacyId === pharmacy.id}
                  onSelect={() => setSelectedPharmacyId(pharmacy.id)}
                />
              ))}
            </div>
          </div>

          {/* Right Column - Available Medications */}
          <div>
            <h3 className="text-base font-normal text-[#111827] mb-4 font-Outfit">
              All Available Medications
            </h3>
            <div className="space-y-4 mb-8">
              {availableMedications.length > 0 ? (
                availableMedications.map((medication, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-lg bg-white"
                  >
                    <div>
                      <p className="text-[#000] font-normal text-base font-Outfit">
                        {medication.name}
                      </p>
                      <p className="text-sm text-[#4B5563] font-normal font-Outfit">
                        Prescribed by {medication.prescribedBy}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-[#4B5563] mb-2 font-Inter font-normal">
                        {medication.refillsRemaining} refills remaining
                      </p>
                      <button
                        className="bg-[#2D5BFF] font-Inter font-normal text-sm text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                        onClick={() => handleBuyNow(medication)}
                      >
                        Buy now
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-gray-500 font-Outfit">
                  {selectedPharmacy?.status === "closed"
                    ? "This pharmacy is currently closed"
                    : "No medications available at this pharmacy"}
                </div>
              )}
            </div>

            {/* Delivery Address */}
            <div className="mt-10">
              <h4 className="text-xl font-normal text-[#000] mb-4 font-Outfit">
                Delivery Address
              </h4>
              <div className="space-y-4">
                <FormInput
                  label="Street Address"
                  placeholder="Enter your street address"
                />
                <div className="grid grid-cols-2 gap-4">
                  <FormInput label="City" placeholder="Enter city" />
                  <FormInput label="ZIP Code" placeholder="Enter ZIP code" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default OrderMedicationsPage;

// import type React from "react";
// import { useState } from "react";
// import PatientPageTitle from "../../../components/patient/patient-page-title";
// import FormInput from "../../../components/ui/FormInput";
// import PharmacyCard from "../../../components/patient/medication/pharmacy-card";
// import DashboardLayout from "../../../components/layouts/dashboard-layout";
// import PatientHeader from "../../../components/patient/header";

// interface Pharmacy {
//   id: number;
//   name: string;
//   distance: string;
//   address: string;
//   status: "open" | "closed";
//   medications: Medication[];
// }

// interface Medication {
//   name: string;
//   prescribedBy: string;
//   refillsRemaining: number;
// }

// const OrderMedicationsPage: React.FC = () => {
//   const [selectedPharmacyId, setSelectedPharmacyId] = useState<number>(1);

//   const pharmacies: Pharmacy[] = [
//     {
//       id: 1,
//       name: "MedPlus Store",
//       distance: "0.5 miles",
//       address: "123 Healthcare St",
//       status: "open",
//       medications: [
//         {
//           name: "Lisinopril - 10mg",
//           prescribedBy: "Dr. Sarah Wilson",
//           refillsRemaining: 2,
//         },
//         {
//           name: "Metformin - 500mg",
//           prescribedBy: "Dr. Michael Chen",
//           refillsRemaining: 2,
//         },
//       ],
//     },
//     {
//       id: 2,
//       name: "City Drugstore",
//       distance: "1.2 miles",
//       address: "456 Medical Ave",
//       status: "open",
//       medications: [
//         {
//           name: "Aspirin - 81mg",
//           prescribedBy: "Dr. Sarah Wilson",
//           refillsRemaining: 3,
//         },
//       ],
//     },
//     {
//       id: 3,
//       name: "City Drugstore",
//       distance: "1.2 miles",
//       address: "456 Medical Ave",
//       status: "closed",
//       medications: [],
//     },
//     {
//       id: 4,
//       name: "City Drugstore",
//       distance: "1.2 miles",
//       address: "456 Medical Ave",
//       status: "open",
//       medications: [
//         {
//           name: "Vitamin D3 - 1000IU",
//           prescribedBy: "Dr. Michael Chen",
//           refillsRemaining: 1,
//         },
//       ],
//     },
//   ];

//   const selectedPharmacy = pharmacies.find((p) => p.id === selectedPharmacyId);
//   const availableMedications = selectedPharmacy?.medications || [];

//   return (
//     <DashboardLayout>
//       <PatientHeader />

//       <div className="p-6 space-y-6">
//         <PatientPageTitle breadcrumb="Order Medications" title="" />
//         <div className=" w-full lg:flex md:grid grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* Left Column - Nearby Pharmacies */}
//           <div className="  lg:w-[35%]">
//             <h3 className="text-base font-normal text-[#111827] mb-4 font-Outfit">
//               Nearby Pharmacies
//             </h3>
//             <div className="space-y-3 ">
//               {pharmacies.map((pharmacy) => (
//                 <PharmacyCard
//                   key={pharmacy.id}
//                   {...pharmacy}
//                   isSelected={selectedPharmacyId === pharmacy.id}
//                   onSelect={() => setSelectedPharmacyId(pharmacy.id)}
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Right Column - Available Medications */}
//           <div>
//             <h3 className="text-base font-normal text-[#111827] mb-4 font-Outfit">
//               All Available Medications
//             </h3>
//             <div className="space-y-4 mb-8">
//               {availableMedications.length > 0 ? (
//                 availableMedications.map((medication, index) => (
//                   <div
//                     key={index}
//                     className="flex items-center justify-between p-4 rounded-lg bg-white"
//                   >
//                     <div>
//                       <p className=" text-[#000] font-normal text-base font-Outfit">
//                         {medication.name}
//                       </p>
//                       <p className="text-sm text-[#4B5563] font-normal font-Outfit">
//                         Prescribed by {medication.prescribedBy}
//                       </p>
//                     </div>
//                     <div>
//                       <p className="text-sm text-[#4B5563] mb-2 font-Inter font-normal">
//                         {medication.refillsRemaining} refills remaining
//                       </p>

//                       <button className="bg-[#2D5BFF] font-Inter font-normal text-sm text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
//                         Buy now
//                       </button>
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <div className="text-center py-8 text-gray-500 font-Outfit">
//                   {selectedPharmacy?.status === "closed"
//                     ? "This pharmacy is currently closed"
//                     : "No medications available at this pharmacy"}
//                 </div>
//               )}
//             </div>

//             {/* Delivery Address */}
//             <div className=" mt-10">
//               <h4 className=" text-xl font-normal text-[#000] mb-4 font-Outfit">
//                 Delivery Address
//               </h4>
//               <div className="space-y-4">
//                 <FormInput
//                   label="Street Address"
//                   placeholder="Enter your street address"
//                 />
//                 <div className="grid grid-cols-2 gap-4">
//                   <FormInput label="City" placeholder="Enter city" />
//                   <FormInput label="ZIP Code" placeholder="Enter ZIP code" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </DashboardLayout>
//   );
// };

// export default OrderMedicationsPage;
