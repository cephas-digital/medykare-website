import type React from "react";

interface WalletCardProps {
  balance: number;
  walletId?: string;
  onAddMoney?: () => void;
  className?: string;
}

const WalletCard: React.FC<WalletCardProps> = ({
  balance,
  walletId,
  onAddMoney,
  className = "",
}) => {
  return (
    <div className={`bg-blue-500 text-white p-6 rounded-lg ${className}`}>
      <p className="text-blue-100 text-sm mb-2 font-Outfit">
        Available Balance
      </p>
      <p className="text-3xl font-bold mb-4 font-Outfit">
        ${balance.toLocaleString()}
      </p>
      {walletId && (
        <p className="text-blue-100 text-sm mb-4 font-Outfit">
          Wallet ID: {walletId}
        </p>
      )}
      <button
        onClick={onAddMoney}
        className="bg-white text-blue-500 px-4 py-2 rounded-lg font-medium font-Outfit hover:bg-gray-50 transition-colors"
      >
        Add Money
      </button>
    </div>
  );
};

export default WalletCard;
