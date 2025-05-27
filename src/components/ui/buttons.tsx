import type React from "react";
import { useNavigate } from "react-router-dom";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  to?: string;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "category" | "more";
  size?: "sm" | "md" | "lg" | "xl";
  isActive?: boolean;
  disabled?: boolean;
}

const Button = ({
  children,
  onClick,
  to,
  className = "",
  variant = "primary",
  size = "md",
  isActive = false,
  disabled = false,
}: ButtonProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (disabled) return;
    if (to) {
      navigate(to);
    }
    if (onClick) {
      onClick();
    }
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "w-[204px] h-[69px] text-sm",
    lg: "px-8 py-4 text-base",
    xl: "px-10 py-5 text-lg",
  };

  const variantClasses = {
    primary:
      "bg-[#4F7DF3] hover:bg-[#3B6BF1] font-Outfit text-2xl font-semibold text-white font-medium rounded-md transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5",
    more: "bg-[#fff] hover:bg-[#4F7DF3] hover:text-[#fff] text-[#4F7DF3] font-Outfit text-2xl font-semibold font-medium rounded-md transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5",
    secondary:
      " border-2 border-[#4F7DF3] text-[#fff] hover:bg-[#fff] bg-[#4F7DF3] hover:text-[#4F7DF3] font-Outfit shadow-md font-medium rounded-full transition-all duration-200",
    outline:
      "bg-transparent border-2 border-[#4F7DF3] text-[#fff] hover:bg-[#fff] bg-[#4F7DF3] hover:text-[#4F7DF3] font-Outfit shadow-md font-medium rounded-full transition-all duration-200",
    category: `font-medium rounded-full transition-all duration-200 ${
      isActive
        ? "bg-[#4F7DF3] text-white shadow-lg"
        : "bg-gray-700 bg-opacity-50 text-gray-300 hover:bg-gray-600"
    }`,
  };

  const disabledClasses = disabled
    ? "opacity-50 cursor-not-allowed"
    : "cursor-pointer";

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={` ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

// import type React from "react";

// interface ButtonProps {
//   children: React.ReactNode;
//   onClick?: () => void;
//   className?: string;
//   variant?: "primary" | "secondary";
//   size?: "sm" | "md" | "lg";
// }

// export const PrimaryButton = ({
//   children,
//   onClick,
//   className = "",
//   size = "md",
// }: ButtonProps) => {
//   const sizeClasses = {
//     sm: "px-4 py-2 text-sm",
//     md: "px-6 py-3 text-sm",
//     lg: "px-8 py-4 text-base",
//   };

//   return (
//     <button
//       onClick={onClick}
//       className={`bg-[#4F7DF3] hover:bg-[#3B6BF1] text-white font-medium rounded-full transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${sizeClasses[size]} ${className}`}
//     >
//       {children}
//     </button>
//   );
// };

// export const SecondaryButton = ({
//   children,
//   onClick,
//   className = "",
//   size = "md",
// }: ButtonProps) => {
//   const sizeClasses = {
//     sm: "px-4 py-2 text-sm",
//     md: "px-6 py-3 text-sm",
//     lg: "px-8 py-4 text-base",
//   };

//   return (
//     <button
//       onClick={onClick}
//       className={`bg-white hover:bg-gray-50 text-gray-700 font-medium rounded-full border border-gray-200 transition-all duration-200 shadow-sm hover:shadow-md ${sizeClasses[size]} ${className}`}
//     >
//       {children}
//     </button>
//   );
// };

// export const CategoryButton = ({
//   children,
//   onClick,
//   className = "",
//   isActive = false,
// }: ButtonProps & { isActive?: boolean }) => {
//   return (
//     <button
//       onClick={onClick}
//       className={`px-6 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
//         isActive
//           ? "bg-[#4F7DF3] text-white shadow-lg"
//           : "bg-gray-700 text-gray-300 hover:bg-gray-600"
//       } ${className}`}
//     >
//       {children}
//     </button>
//   );
// };
