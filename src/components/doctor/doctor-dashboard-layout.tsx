import type React from "react";
import { useState, useEffect } from "react";
import DoctorSidebar from "./doctor-sidebar";

interface DoctorDashboardLayoutProps {
  children: React.ReactNode;
}

const DoctorDashboardLayout: React.FC<DoctorDashboardLayoutProps> = ({
  children,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">
      <DoctorSidebar />
      <main
        className={`flex-1 ${
          isMobile ? "ml-0 pt-16" : "ml-64" // Fixed margin for sidebar on desktop
        }`}
      >
        <div className="relative">
          <div className="pt-0">{children}</div>
        </div>
      </main>
    </div>
  );
};

export default DoctorDashboardLayout;
