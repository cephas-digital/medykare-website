import type React from "react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdLogout, MdMenu, MdClose } from "react-icons/md";
import { DashboardLogo } from "./logo";
import sideimgone from "../../assets/images/sideimgone.png";
import sideimgtwo from "../../assets/images/sideimgtwo.png";
import sideimgthree from "../../assets/images/sideimgthree.png";
import sideimgfour from "../../assets/images/sideimgfour.png";
import sideiconfive from "../../assets/images/sideiconfive.png";
import sideiconsix from "../../assets/images/sideiconsix.png";
import sideiconseven from "../../assets/images/sideiconseven.png";
import sideiconeight from "../../assets/images/sideiconeight.png";
import sideiconnine from "../../assets/images/sideiconnine.png";

interface MenuItem {
  name: string;
  path: string;
  activeImage: string;
  inactiveImage: string;
}

const Sidebar: React.FC = () => {
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
      path: "/patient/dashboard",
      activeImage: sideimgtwo,
      inactiveImage: sideimgone,
    },
    {
      name: "Appointments",
      path: "/patient/appointments",
      activeImage: sideimgthree,
      inactiveImage: sideimgfour,
    },
    {
      name: "Lab Test",
      path: "/patient/lab-test",
      activeImage: sideiconfive,
      inactiveImage: sideiconfive,
    },
    {
      name: "Prescriptions",
      path: "/patient/e-prescriptions",
      activeImage: sideiconsix,
      inactiveImage: sideiconsix,
    },
    {
      name: "Medications",
      path: "/patient/order-medications",
      activeImage: sideiconseven,
      inactiveImage: sideiconseven,
    },
    {
      name: "Payment",
      path: "/patient/payment-methods",
      activeImage: sideiconeight,
      inactiveImage: sideiconeight,
    },
    {
      name: "Settings",
      path: "/patient/settings",
      activeImage: sideiconnine,
      inactiveImage: sideiconnine,
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
          className="fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-lg border"
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
        } w-64 bg-white shadow-lg border-r border-gray-200`}
      >
        <div className="p-6">
          {/* Logo/Brand - Always full on desktop, full on mobile */}
          <div className="flex items-center gap-3 mb-8">
            <div>
              <DashboardLogo />
            </div>
          </div>

          {/* Navigation Menu - Always full width */}
          <nav className="space-y-2">
            {menuItems.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMobileSidebar}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    active
                      ? "text-[#2D5BFF]"
                      : "text-[#1B1B1B] hover:bg-gray-50 hover:text-[#2D5BFF]"
                  }`}
                >
                  <img
                    src={active ? item.activeImage : item.inactiveImage}
                    alt={`${item.name} icon`}
                    className="w-5 h-5 flex-shrink-0"
                  />
                  <span
                    className={`font-Outfit font-normal text-sm ${
                      active ? "text-[#2D5BFF]" : "text-[#1B1B1B]"
                    }`}
                    style={{ color: active ? "#2D5BFF" : "#1B1B1B" }}
                  >
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Logout Button - Always full width */}
          <div className="absolute bottom-6 left-6 right-6">
            <button className="flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors w-full">
              <MdLogout className="text-xl flex-shrink-0" />
              <span className="font-medium">Log Out</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
