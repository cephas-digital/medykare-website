import type React from "react";

interface OrderItem {
  label: string;
  amount: number;
}

interface OrderSummaryProps {
  items: OrderItem[];
  total: number;
  onPlaceOrder?: () => void;
  className?: string;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
  items,
  total,
  onPlaceOrder,
  className = "",
}) => {
  return (
    <div className={`bg-gray-50 p-6 rounded-lg ${className}`}>
      <h3 className="text-lg font-semibold text-gray-900 mb-4 font-Outfit">
        Order Summary
      </h3>

      <div className="space-y-3 mb-4">
        {items.map((item, index) => (
          <div key={index} className="flex justify-between">
            <span className="text-gray-600 font-Outfit">{item.label}</span>
            <span className="font-medium font-Outfit">
              ${item.amount.toFixed(2)}
            </span>
          </div>
        ))}
        <div className="border-t pt-3">
          <div className="flex justify-between">
            <span className="font-semibold font-Outfit">Total</span>
            <span className="font-bold font-Outfit">${total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {onPlaceOrder && (
        <button
          onClick={onPlaceOrder}
          className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium font-Outfit hover:bg-blue-600 transition-colors"
        >
          Place Order
        </button>
      )}
    </div>
  );
};

export default OrderSummary;
