import type React from "react";
import { FaSearch } from "react-icons/fa";

interface InputProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  type?: string;
}

export const SearchInput = ({
  placeholder = "Search your product",
  value,
  onChange,
  className = "",
}: InputProps) => {
  return (
    <div className={`relative max-w-2xl  mx-auto ${className}`}>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-6 py-4 pr-16 text-gray-700 bg-white rounded-full border-0 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 placeholder-gray-400"
      />
      <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#4F7DF3] hover:bg-[#3B6BF1] text-white p-3 rounded-full transition-colors duration-200">
        <FaSearch className="text-sm" />
      </button>
    </div>
  );
};
export const SecSearchInput = ({
  placeholder = "Search your product",
  value,
  onChange,
  className = "",
}: InputProps) => {
  return (
    <div className={` absolute bottom-0  ${className}`}>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="lg:w-[800px] px-6 rounded-[40px] placeholder:text-[#525252CC] placeholder:font-Outfit text-2xl h-[98px] pr-16 text-gray-700 bg-white  border-0 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 placeholder-gray-400"
      />
      <button className="absolute  right-5 top-1/2 transform -translate-y-1/2 bg-[#4F7DF3] hover:bg-[#3B6BF1] text-white p-3 rounded-full transition-colors duration-200">
        <FaSearch className="text-sm" />
      </button>
    </div>
  );
};

export const TextInput = ({
  placeholder,
  value,
  onChange,
  className = "",
  type = "text",
}: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full px-4 py-3 text-gray-700 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 focus:border-transparent placeholder-gray-400 ${className}`}
    />
  );
};

export const TextArea = ({
  placeholder,
  value,
  onChange,
  className = "",
}: InputProps) => {
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange as any}
      rows={4}
      className={`w-full px-4 py-3 text-gray-700 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 focus:border-transparent placeholder-gray-400 resize-vertical ${className}`}
    />
  );
};
