import type React from "react";
import { FaSearch } from "react-icons/fa";
import { MdSearch } from "react-icons/md";

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
    <div
      className={` relative bottom-0 lg:w-[800px] md:w-[800px] w-[300px]  ${className}`}
    >
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="lg:w-[800px] md:w-[800px] w-[300px] px-6 rounded-[40px] placeholder:text-[#525252CC] placeholder:font-Outfit lg:text-2xl md:text-2xl text-base lg:h-[98px] md:h-[98px] h-[78px] pr-16 text-gray-700 bg-white  border-0 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 placeholder-gray-400"
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

export const DoctorSearchInput = ({
  placeholder = "Search patients",
  value,
  onChange,
  className = "",
}: InputProps) => {
  return (
    <div className={`relative mb-6 ${className}`}>
      <MdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full pl-10 pr-4 py-3 text-[#4F7396] bg-[#E8EDF2] text-base font-normal border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D5BFF] focus:border-transparent font-Outfit"
      />
    </div>
  );
};
