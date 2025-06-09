import type React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  MdAccountBalanceWallet,
  MdCreditCard,
  MdLocationOn,
} from "react-icons/md";
import DashboardLayout from "../../../components/layouts/dashboard-layout";
import PatientHeader from "../../../components/patient/header";
import PatientPageTitle from "../../../components/patient/patient-page-title";

const MakePaymentPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const medication = searchParams.get("medication");
  const amount = searchParams.get("amount");

  const paymentMethods = [
    {
      id: "wallet",
      name: "Wallet",
      icon: MdAccountBalanceWallet,
      route: "/patient/wallet-payment",
    },
    {
      id: "credit-card",
      name: "Credit Card",
      icon: MdCreditCard,
      route: "/patient/credit-card-payment",
    },
    {
      id: "bank-transfer",
      name: "Bank Transfer",
      icon: MdLocationOn,
      route: "/patient/bank-transfer-payment",
    },
  ];

  const handlePaymentMethodSelect = (route: string) => {
    navigate(`${route}?medication=${medication}&amount=${amount}`);
  };

  return (
    <DashboardLayout>
      <PatientHeader />
      <div className="p-6 space-y-6">
        <PatientPageTitle breadcrumb="Order Medications" title="" />

        <div className="max-w-4xl">
          <h2 className="text-xl font-normal text-[#000] mb-8 font-Outfit">
            Make Payment
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {paymentMethods.map((method) => {
              const IconComponent = method.icon;
              return (
                <div
                  key={method.id}
                  onClick={() => handlePaymentMethodSelect(method.route)}
                  className="flex items-center pl-4 gap-3 rounded-lg hover:border-[#2D5BFF] hover:scale-105 hover:duration-300 ease-in cursor-pointer transition-all group"
                >
                  <div className="flex items-center justify-center transition-colors">
                    <IconComponent className="w-8 h-8 text-[#2563EB]" />
                  </div>
                  <span className="font-normal text-[#111827] font-Outfit text-base">
                    {method.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MakePaymentPage;
