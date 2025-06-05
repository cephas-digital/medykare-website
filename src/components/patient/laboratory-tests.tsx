import type React from "react";
import labicon from "../../assets/images/labicon.png";

interface LabTest {
  id: string;
  testName: string;
  date: Date;
  status: "scheduled" | "results-ready" | "in-progress" | "cancelled";
}

interface LaboratoryTestsProps {
  tests?: LabTest[];
}

const formatTestDate = (date: Date): string => {
  return date.toLocaleDateString([], {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const getStatusColor = (status: string): string => {
  switch (status) {
    case "scheduled":
      return " text-[#2563EB]";
    case "results-ready":
      return " text-[#16A34A]";
    case "in-progress":
      return " text-yellow-600";
    case "cancelled":
      return " text-red-600";
    default:
      return "text-gray-600";
  }
};

const LaboratoryTests: React.FC<LaboratoryTestsProps> = ({ tests }) => {
  // Default laboratory tests data
  const defaultTests: LabTest[] = [
    {
      id: "1",
      testName: "Complete Blood Count",
      date: new Date("2025-03-20"),
      status: "scheduled",
    },
    {
      id: "2",
      testName: "Lipid Panel",
      date: new Date("2025-02-12"),
      status: "results-ready",
    },
  ];

  const displayTests = tests || defaultTests;

  return (
    <div className="bg-white p-6 ">
      <div className="flex items-center justify-between gap-2 mb-4">
        <h3 className="text-lg font-bold font-Outfit text-[#000000]">
          Laboratory Tests
        </h3>
        <img className=" w-6 h-6" src={labicon} alt="" />
      </div>
      <div className="space-y-4">
        {displayTests.map((test) => (
          <div key={test.id} className="flex justify-between items-center">
            <div>
              <p className="font-normal font-Outfit text-[#000000] text-base">
                {test.testName}
              </p>
              <p className="text-[#4B5563] font-Inter font-normal text-sm">
                {formatTestDate(test.date)}
              </p>
            </div>
            <span
              className={`px-2 py-1 font-Inter font-normal rounded text-sm capitalize ${getStatusColor(
                test.status
              )}`}
            >
              {test.status === "results-ready" ? "Results Ready" : test.status}
            </span>
          </div>
        ))}
        {/* <Button
          size="patient"
          disabled={false}
          onClick={() => console.log("Book New Test")}
          className="w-full bg-[#2D5BFF] text-white text-base rounded-lg font-Outfit font-normal hover:to-blue-800 "
        >
          Book New Test
        </Button> */}
        <button className="w-full bg-[#2D5BFF] text-white text-base py-2 rounded-lg font-Outfit font-normal hover:to-blue-800 ">
          Book New Test
        </button>
      </div>
    </div>
  );
};

export default LaboratoryTests;
