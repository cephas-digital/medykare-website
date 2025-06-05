import type React from "react";
import checkicon from "../../assets/images/checkicon.png";

interface KycStatus {
  phoneVerification: number;
  emailVerification: number;
  documentsUpload: number;
  biometricVerification: number;
}

interface ProfileAndKycProps {
  kycStatus?: KycStatus;
}

const ProfileAndKyc: React.FC<ProfileAndKycProps> = ({ kycStatus }) => {
  // Default KYC status data
  const defaultKycStatus: KycStatus = {
    phoneVerification: 100,
    emailVerification: 100,
    documentsUpload: 75,
    biometricVerification: 50,
  };

  const displayKycStatus = kycStatus || defaultKycStatus;

  const getOverallStatus = (status: KycStatus): boolean => {
    const values = Object.values(status);
    return values.every((value) => value === 100);
  };

  const isComplete = getOverallStatus(displayKycStatus);

  return (
    <div className="bg-white p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Profile & KYC Status</h3>
        <div
          className={`w-6 h-6 ${
            isComplete ? "bg-green-100" : "bg-yellow-100"
          } rounded-full flex items-center justify-center`}
        >
          <span
            className={`${
              isComplete ? "text-green-600" : "text-yellow-600"
            } text-sm`}
          >
            {isComplete ? (
              <img src={checkicon} alt="Completed" className="w-6 h-6" />
            ) : (
              <span className="text-yellow-600 text-sm">⚠</span>
            )}
          </span>
        </div>
      </div>
      <div className="space-y-5">
        <div className="flex justify-between items-center">
          <span className="text-[#4B5563] font-Inter font-normal text-base">
            Phone Verification
          </span>
          <span className="font-normal font-Outfit text-base text-[#000000]">
            {displayKycStatus.phoneVerification}%
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[#4B5563] font-Inter font-normal text-base">
            Email Verification
          </span>
          <span className="font-normal font-Outfit text-base text-[#000000]">
            {displayKycStatus.emailVerification}%
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[#4B5563] font-Inter font-normal text-base">
            Documents Upload
          </span>
          <span className="font-normal font-Outfit text-base text-[#000000]">
            {displayKycStatus.documentsUpload}%
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[#4B5563] font-Inter font-normal text-base">
            Biometric Verification
          </span>
          <span className="font-normal font-Outfit text-base text-[#000000]">
            {displayKycStatus.biometricVerification}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileAndKyc;

// import React from "react";
// import checkicon from "../../assets/images/checkicon.png";

// const ProfileAndKyc = () => {
//   return (
//     <div className="bg-white  p-6 ">
//       <div className="flex items-center justify-between mb-4">
//         <h3 className="text-lg font-bold font-Outfit">Profile & KYC Status</h3>
//         <img className=" w-6 h-6" src={checkicon} alt="" />
//       </div>
//       <div className="space-y-4">
//         <div className="flex justify-between items-center">
//           <span className="text-[#4B5563] font-Inter font-normal text-base">
//             Phone Verification
//           </span>
//           <span className="font-normal font-Outfit text-base text-[#000000]">
//             100%
//           </span>
//         </div>
//         <div className="flex justify-between items-center">
//           <span className="text-[#4B5563] font-Inter font-normal text-base">
//             Email Verification
//           </span>
//           <span className="font-normal font-Outfit text-base text-[#000000]">
//             100%
//           </span>
//         </div>
//         <div className="flex justify-between items-center">
//           <span className="text-[#4B5563] font-Inter font-normal text-base">
//             Documents Upload
//           </span>
//           <span className="font-normal font-Outfit text-base text-[#000000]">
//             75%
//           </span>
//         </div>
//         <div className="flex justify-between items-center">
//           <span className="text-[#4B5563] font-Inter font-normal text-base">
//             Biometric Verification
//           </span>
//           <span className="font-normal font-Outfit text-base text-[#000000]">
//             50%
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileAndKyc;
