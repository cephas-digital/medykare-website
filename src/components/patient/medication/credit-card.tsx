import type React from "react";

interface CreditCardProps {
  holderName: string;
  cardNumber: string;
  cvv: string;
  expiryDate: string;
  className?: string;
}

const CreditCard: React.FC<CreditCardProps> = ({
  holderName,
  cardNumber,
  cvv,
  expiryDate,
  className = "",
}) => {
  return (
    <div className={`bg-blue-500 text-white p-6 rounded-lg ${className}`}>
      <p className="text-blue-100 text-sm mb-2 font-Outfit">{holderName}</p>
      <p className="text-2xl font-bold mb-4 tracking-wider font-Outfit">
        {cardNumber}
      </p>
      <div className="flex justify-between items-center">
        <span className="text-blue-100 font-Outfit">{cvv}</span>
        <span className="text-blue-100 font-Outfit">{expiryDate}</span>
      </div>
    </div>
  );
};

export default CreditCard;
