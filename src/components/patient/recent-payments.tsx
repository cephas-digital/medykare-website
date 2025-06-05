import type React from "react";
import paymenticon from "../../assets/images/paymenticon.png";

interface Payment {
  id: string;
  description: string;
  amount: number;
  date: Date;
  type: "debit" | "credit";
}

interface WalletData {
  balance: number;
  currency: string;
}

interface RecentPaymentsProps {
  walletData?: WalletData;
  payments?: Payment[];
}

const formatPaymentDate = (date: Date): string => {
  return date.toLocaleDateString([], {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const formatAmount = (
  amount: number,
  type: "debit" | "credit",
  currency = "$"
): string => {
  const prefix = type === "debit" ? "-" : "+";
  return `${prefix}${currency}${amount.toFixed(2)}`;
};

const RecentPayments: React.FC<RecentPaymentsProps> = ({
  walletData,
  payments,
}) => {
  // Default wallet and payments data
  const defaultWalletData: WalletData = {
    balance: 245.0,
    currency: "$",
  };

  const defaultPayments: Payment[] = [
    {
      id: "1",
      description: "Consultation - Dr. Brown",
      amount: 75.0,
      date: new Date("2025-05-15"),
      type: "debit",
    },
    {
      id: "2",
      description: "Lab Test - CBC",
      amount: 45.0,
      date: new Date("2025-05-12"),
      type: "debit",
    },
  ];

  const displayWalletData = walletData || defaultWalletData;
  const displayPayments = payments || defaultPayments;

  return (
    <div className="bg-white p-6 ">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-normal font-Outfit text-[#000000]">
          Recent Payments
        </h3>
        <img className=" w-6 h-6" src={paymenticon} alt="" />
      </div>
      <div className="space-y-4">
        <div className=" bg-[#FFF7ED] p-4 rounded-md">
          <p className="text-[#4B5563] font-Inter font-normal text-sm">
            Wallet Balance
          </p>
          <p className="text-2xl font-normal font-Outfit text-[#000000]">
            {displayWalletData.currency}
            {displayWalletData.balance.toFixed(2)}
          </p>
        </div>
        <div className="space-y-2">
          {displayPayments.map((payment) => (
            <div key={payment.id} className="flex justify-between items-center">
              <div>
                <p className="font-normal font-Outfit text-base text-[#000000]">
                  {payment.description}
                </p>
                <p className="text-[#4B5563] font-Inter font-normal text-sm">
                  {formatPaymentDate(payment.date)}
                </p>
              </div>
              <span
                className={`font-normal font-Inter  text-sm ${
                  payment.type === "debit" ? "text-red-600" : "text-green-600"
                }`}
              >
                {formatAmount(
                  payment.amount,
                  payment.type,
                  displayWalletData.currency
                )}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentPayments;
