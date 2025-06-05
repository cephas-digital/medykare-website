"use client";

import type React from "react";
import { useState, useEffect } from "react";
import Sidebar from "./sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
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
    <div className="flex min-h-screen bg-[#fff]">
      <Sidebar />
      <main
        className={`flex-1 ${
          isMobile
            ? "ml-0 pt-16" // No margin on mobile, add top padding for hamburger button
            : "ml-64" // Fixed margin for sidebar on desktop
        }`}
      >
        <div className="relative">
          <div className="pt-0">{children}</div>
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
