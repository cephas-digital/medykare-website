import type React from "react";

interface PatientPageTitleProps {
  breadcrumb?: string;
  title: string;
}

const PatientPageTitle: React.FC<PatientPageTitleProps> = ({
  breadcrumb,
  title,
}) => {
  return (
    <div className="mb-6">
      {breadcrumb && (
        <div className="flex items-center gap-2 mb-2">
          <span className="text-lg font-semibold text-[#000]">
            {breadcrumb}
          </span>
        </div>
      )}
      <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
    </div>
  );
};

export default PatientPageTitle;
