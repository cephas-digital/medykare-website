import type React from "react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import dbuser from "../../assets/images/dbuser.png";
import {
  MdMenu,
  MdClose,
  MdDashboard,
  MdPeople,
  MdCalendarToday,
  MdMedication,
  MdAttachMoney,
  MdNotifications,
  MdSettings,
  MdLogout,
} from "react-icons/md";
import { FaHouse } from "react-icons/fa6";
import { LuUsers } from "react-icons/lu";
import { PiPrescriptionBold } from "react-icons/pi";
import { PiCalendarLight } from "react-icons/pi";
import { LuDollarSign } from "react-icons/lu";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";

interface MenuItem {
  name: string;
  path: string;
  icon: React.ComponentType<{ className?: string }>;
}

const DoctorSidebar: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if screen is mobile
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(false); // Close mobile menu on desktop
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const menuItems: MenuItem[] = [
    {
      name: "Dashboard",
      path: "/doctor/dashboard",
      icon: FaHouse,
    },
    {
      name: "Patients",
      path: "/doctor/patients",
      icon: LuUsers,
    },
    {
      name: "Appointments",
      path: "/doctor/appointments",
      icon: PiCalendarLight,
    },
    {
      name: "Prescriptions",
      path: "/doctor/prescriptions",
      icon: PiPrescriptionBold,
    },
    {
      name: "Earnings",
      path: "/doctor/earnings",
      icon: LuDollarSign,
    },
    {
      name: "Notifications",
      path: "/doctor/notifications",
      icon: IoIosNotificationsOutline,
    },
    {
      name: "Settings",
      path: "/doctor/settings",
      icon: IoSettingsOutline,
    },
  ];

  const isActive = (path: string) => {
    return (
      location.pathname === path || location.pathname.startsWith(path + "/")
    );
  };

  const toggleMobileSidebar = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
  };

  const closeMobileSidebar = () => {
    if (isMobile) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Hamburger Menu Button - Only visible on mobile */}
      {isMobile && (
        <button
          onClick={toggleMobileSidebar}
          className="fixed top-4 left-4 z-50 p-2 bg-[#F7FAFC]  "
        >
          {isOpen ? (
            <MdClose className="text-xl" />
          ) : (
            <MdMenu className="text-xl" />
          )}
        </button>
      )}

      {/* Mobile Overlay - Only on mobile when sidebar is open */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={closeMobileSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`${
          isMobile
            ? `fixed left-0 top-0 h-full z-40 transition-transform duration-300 ${
                isOpen ? "translate-x-0" : "-translate-x-full"
              }`
            : "fixed left-0 top-0 h-full"
        } w-64 bg-[#F7FAFC]  `}
      >
        <div className="p-6 flex flex-col h-full">
          {/* Doctor Profile */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-[#F7FAFC] overflow-hidden">
              <img
                src={dbuser}
                alt="Doctor profile"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/placeholder.svg?height=40&width=40";
                }}
              />
            </div>
            <div>
              <h3 className="font-medium text-base text-[#000] font-Outfit">
                Dr. Alex Turner
              </h3>
              <p className="text-sm text-[#4F7A96] font-normal font-Outfit">
                General Practitioner
              </p>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="space-y-1 flex-1">
            {menuItems.map((item) => {
              const active = isActive(item.path);
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMobileSidebar}
                  className={`flex items-center gap-3 px-4 py-3  transition-colors ${
                    active
                      ? "bg-[#2D5BFF] text-white"
                      : "text-[#1B1B1B] hover:bg-gray-50"
                  }`}
                >
                  <IconComponent
                    className={`w-5 h-5 ${
                      active ? "text-white" : "text-[#1B1B1B]"
                    }`}
                  />
                  <span className="font-Outfit font-medium text-sm">
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Logout Button */}
          <div className="mt-auto pt-4">
            <button className="flex items-center gap-3 px-4 py-3 text-[#FF0A0A] hover:bg-red-50 rounded-lg transition-colors w-full">
              <MdLogout className="w-5 h-5" />
              <span className="font-Outfit font-normal text-sm">Log Out</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorSidebar;
