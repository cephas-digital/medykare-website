import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NewLogo } from "./layouts/logo";
import Button from "./ui/buttons";

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Our Services", path: "/our-services" },
    { name: "Blog", path: "/our-blogs" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  const isActive = (path) => location.pathname === path;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white  fixed left-0 right-0 top-0 z-40  lg:py-4 md:py-5 py-5 lg:px-20 md:px-10 px-5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <NewLogo />

        <div className="hidden lg:flex items-center space-x-8 ">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="transition-colors font-Outfit text-base font-medium duration-200 hover:opacity-80"
              style={{
                color: isActive(item.path) ? "#000" : "#727272",
              }}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button className=" " variant="primary" size="md" to="/get-started">
            Get Started
          </Button>
        </div>

        <button
          onClick={toggleMobileMenu}
          className="lg:hidden text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition-colors duration-200"
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100 z-50">
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={closeMobileMenu}
                className="block font-medium transition-colors duration-200 py-2 hover:opacity-80"
                style={{
                  color: isActive(item.path) ? "#111827" : "#404040",
                }}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-100">
              <Button
                variant="primary"
                size="md"
                to="/get-started"
                onClick={closeMobileMenu}
                className="w-full"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

// import { Link, useLocation } from "react-router-dom";
// import { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { NewLogo } from "./layouts/logo";
// import Button from "./ui/buttons";

// const Navbar = () => {
//   const location = useLocation();
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const navItems = [
//     { name: "Home", path: "/" },
//     { name: "About Us", path: "/about" },
//     { name: "Our Services", path: "/services" },
//     { name: "Blog", path: "/blog" },
//     { name: "Contact Us", path: "/contact" },
//   ];

//   const isActive = (path) => location.pathname === path;

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const closeMobileMenu = () => {
//     setIsMobileMenuOpen(false);
//   };

//   return (
//     <nav className="bg-white shadow-sm border-b border-gray-100 py-4 relative lg:px-24 md:px-10 px-5">
//       <div className="max-w-7xl mx-auto flex items-center justify-between">
//         <NewLogo />

//         {/* Desktop Navigation */}
//         <div className="hidden lg:flex items-center space-x-8">
//           {navItems.map((item) => (
//             <Link
//               key={item.name}
//               to={item.path}
//               className={`font-medium transition-colors duration-200 ${
//                 isActive(item.path)
//                   ? "text-gray-900"
//                   : "text-gray-500 hover:text-gray-700"
//               }`}
//               style={{
//                 color: isActive(item.path) ? "#111827" : "#404040",
//               }}
//             >
//               {item.name}
//             </Link>
//           ))}
//         </div>

//         {/* Desktop Get Started Button */}
//         <div className="hidden lg:block">
//           <Button className=" " variant="primary" size="md" to="/get-started">
//             Get Started
//           </Button>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={toggleMobileMenu}
//           className="lg:hidden text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition-colors duration-200"
//         >
//           {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//         </button>
//       </div>

//       {/* Mobile Navigation Menu */}
//       {isMobileMenuOpen && (
//         <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100 z-50">
//           <div className="px-6 py-4 space-y-4">
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.path}
//                 onClick={closeMobileMenu}
//                 className={`block font-medium transition-colors duration-200 py-2 ${
//                   isActive(item.path)
//                     ? "text-gray-900"
//                     : "text-gray-500 hover:text-gray-700"
//                 }`}
//                 style={{
//                   color: isActive(item.path) ? "#111827" : "#404040",
//                 }}
//               >
//                 {item.name}
//               </Link>
//             ))}
//             <div className="pt-4 border-t border-gray-100">
//               <Button
//                 variant="primary"
//                 size="md"
//                 to="/get-started"
//                 onClick={closeMobileMenu}
//                 className="w-full"
//               >
//                 Get Started
//               </Button>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
