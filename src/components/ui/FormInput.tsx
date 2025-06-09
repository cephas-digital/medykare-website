import type React from "react";

interface FormInputProps {
  label: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  className = "",
}) => {
  return (
    <div className={className}>
      <label className="block text-sm text-[#4B5563] font-Inter font-normal mb-2">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="w-full p-3 placeholder:font-normal placeholder:text-base border-[#9CA3AF] font-Inter text-base font-normal rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 "
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormInput;
