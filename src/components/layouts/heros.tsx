import { FaHeart, FaHeartbeat } from "react-icons/fa";

import homebg from "../../assets/images/homebg.png";
import aboutbg from "../../assets/images/aboutbg.png";
import heroCollage from "../../assets/images/herocollage.png";
import aboutPharmacy from "../../assets/images/aboutimage.png";
import Button from "../ui/buttons";
import { SearchInput, SecSearchInput } from "../ui/inputs";
import hearticon from "../../assets/images/hearticon.png";
import servicehero from "../../assets/images/servicehero.png";
import contacthero from "../../assets/images/contacthero.png";
import contimg from "../../assets/images/contimg.png";
import { useState } from "react";
import "animate.css";

const HealthMattersTag = () => (
  <div className="inline-flex items-center gap-2 bg-[#B4B4B4] border border-[#FFFFFF40] font-Outfit text-2xl font-light bg-opacity-50 text-white px-4 py-2 rounded-full mb-6">
    <span className="text-sm font-Outfit font-light lg:text-2xl md:text-2xl ">
      Health Matters
    </span>
    {/* <FaHeartbeat className="text-blue-400 text-sm" /> */}
    <img className=" w-10 h-6" src={hearticon} alt="" />
  </div>
);

export const HomeHero = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat relative lg:px-16 md:px-10 px-5 mt-20"
      style={{ backgroundImage: `url(${homebg})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 flex items-center min-h-screen">
        <div className="grid grid-cols-1 lg:flex gap-8 lg:gap-5 items-center lg:justify-between w-full">
          {/* Left Content */}
          <div className="text-left">
            <HealthMattersTag />
            <h1 className="animate__animated animate__shakeX   text-6xl md:text-6xl lg:text-5xl font-bold  text-white font-Outfit mb-10 leading-tight">
              Healthcare at Your Fingertips
            </h1>
            <p className=" lg:text-xl md:text-xl text-base font-extralight text-gray-200 mb-10 font-Outfit max-w-lg mx-auto lg:mx-0">
              Connect with licensed medical professionals 24/7 from the comfort
              of your home
            </p>
            <Button
              variant="primary"
              size="lg"
              to="/contact-us"
              className="animate__animated animate__pulse"
            >
              Book Appointment Now
            </Button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md lg:max-w-lg">
              <img
                src={heroCollage}
                alt="Healthcare professionals and medical services"
                className="animate__animated animate__shakeX lg:w-[400px] lg:h-[430px] w-full  h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AboutHero = () => {
  return (
    <div
      className="min-h-[80vh] bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${aboutbg})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative z-10 max-w-7xl mx-auto lg:px-24 md:px-10 px-5 lg:py-28 md:py-10 py-12 flex items-center min-h-[80vh]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          {/* Left Content */}
          <div className="text-left">
            <HealthMattersTag />
            <h1 className="animate__animated animate__shakeX text-6xl md:text-6xl lg:text-5xl lg:mt-0 md:mt-4 mt-5 font-Outfit font-bold text-white mb-10 leading-tight">
              Learn <br />
              About US
            </h1>
            <p className="text-xl font-Outfit font-extralight sm:text-lg text-gray-200 mb-10 max-w-lg mx-auto lg:mx-0">
              Tempor ut aliquet faucibus lacus lectus turpis. Neque risus
              bibendum ut ac quis dapibus.
            </p>
            <Button variant="primary" size="lg" to="/contact-us">
              Book Appointment Now
            </Button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md lg:max-w-lg">
              <img
                src={aboutPharmacy}
                alt="Healthcare professionals in pharmacy setting"
                className="animate__animated animate__shakeX w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ServiceHero = () => {
  return (
    <div className="min-h-[70vh] bg-gradient-to-br from-gray-900 lg:pb-16 md:pb-16 pb-20 via-blue-900 to-gray-800 relative overflow-hidden lg:px-16 md:px-10 px-5">
      {/* Background ellipse shadows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500 rounded-full opacity-10 blur-3xl"></div>

      <div className=" z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 flex items-center min-h-[70vh]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          {/* Left Content */}
          <div className="text-left relative h-full ">
            <HealthMattersTag />
            <h1 className="animate__animated animate__shakeX text-6xl md:text-6xl lg:text-5xl font-Outfit font-bold text-white mb-6 leading-tight">
              <span className=" text-[#1678F2] font-Outfit leading-relaxed font-bold">
                One Step Solution
              </span>
              <br />
              For All Your Dietary
              <p className=" mt-3">Needs.</p>
            </h1>
            <p className=" md:text-xl text-base text-[#fff] font-Outfit font-extralight mb-8 max-w-lg mx-auto lg:mx-0">
              Tempor ut aliquet faucibus lacus lectus turpis.
              <br />
              Neque risus bibendum ut ac quis dapibus.
            </p>
            <div className=" absolute lg:left-[85px] lg:hidden md:block block ">
              <SecSearchInput className="" placeholder="Search your product" />
            </div>
          </div>

          {/* Right Image - Circular medical images */}
          <div className="flex justify-center lg:justify-end lg:mt-0 md:mt-20 mt-32">
            <div className="relative w-full max-w-md">
              {/* Main circular images positioned */}

              <div>
                <img
                  className="animate__animated animate__shakeX"
                  src={servicehero}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" absolute bottom-16 lg:left-[85px] lg:block md:hidden hidden ">
        <SecSearchInput className="" placeholder="Search your product" />
      </div>
    </div>
  );
};

export const ContactHero = () => {
  return (
    <div className="min-h-[60vh] lg:px-16 md:px-10 px-5 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 relative overflow-hidden">
      {/* Background ellipse shadows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500 rounded-full opacity-10 blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-12 pt-20 sm:py-20 flex items-center min-h-[60vh]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          {/* Left Content */}
          <div className="text-left">
            <HealthMattersTag />
            <h1 className="animate__animated animate__shakeX text-6xl md:text-6xl mt-8 lg:text-5xl font-Outfit font-bold text-white mb-6 leading-relaxed">
              Reach Out To
              <p className=" mt-2">Us Today!</p>
            </h1>
            <p className="md:text-xl text-base text-[#fff] font-Outfit font-extralight mb-8 max-w-lg mx-auto lg:mx-0">
              Tempor ut aliquet faucibus lacus lectus turpis.
              <br />
              Neque risus bibendum ut ac quis dapibus.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md lg:max-w-lg">
              <img
                src={contimg}
                alt="Doctor on phone consultation"
                className="animate__animated animate__shakeX w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// export const BlogHero = ({ className = "" }) => {
//   const [activeCategory, setActiveCategory] = useState("All");

//   const categories = [
//     "All",
//     "Weight Loss Tips",
//     "Healthy Eating",
//     "Fitness and Exercise",
//     "Mindset and Motivation",
//     "Recipes and Meal Planning",
//   ];

//   return (
//     <section
//       className={`relative min-h-[80vh] bg-gradient-to-br from-[#2D3748] via-[#1A202C] to-[#171923] overflow-hidden ${className}`}
//     >
//       {/* Background Shadow Ellipse */}
//       <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl" />
//       <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-purple-500 rounded-full opacity-10 blur-3xl" />

//       <div className="relative z-10 container mx-auto px-6 py-20">
//         <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
//           {/* Left Content */}
//           <div className="space-y-8">
//             {/* Badge */}
//             <div className="inline-flex items-center space-x-2 bg-gray-700 bg-opacity-80 px-4 py-2 rounded-full">
//               <span className="text-white text-sm font-medium">
//                 Health Matters
//               </span>
//               <FaHeart className="text-blue-400 text-sm" />
//             </div>

//             {/* Heading */}
//             <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
//               <span className="text-[#4F7DF3]">One Step Solution</span>
//               <br />
//               <span className="text-white">For All Your Dietary Needs.</span>
//             </h1>

//             {/* Description */}
//             <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
//               Tempor ut aliquet faucibus lacus lectus turpis. Neque risus
//               bibendum ut ac quis dapibus.
//             </p>
//           </div>

//           {/* Right Content - Circular Medical Images */}
//           <div className="relative flex justify-center">
//             <div className="relative w-80 h-80">
//               {/* Main circle */}
//               <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full shadow-xl overflow-hidden">
//                 <img
//                   src="/placeholder.svg?height=128&width=128"
//                   alt="Medical professional"
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               {/* Secondary circles */}
//               <div className="absolute bottom-16 left-0 w-28 h-28 bg-white rounded-full shadow-xl overflow-hidden">
//                 <img
//                   src="/placeholder.svg?height=112&width=112"
//                   alt="Medical workspace"
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               <div className="absolute bottom-0 right-8 w-24 h-24 bg-white rounded-full shadow-xl overflow-hidden">
//                 <img
//                   src="/placeholder.svg?height=96&width=96"
//                   alt="Healthcare"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Blog categories */}
//         <div className="flex flex-wrap py-5 gap-3 bg-gradient-to-br from-[#1E315E] via-[#1E315E] to-[#111827] lg:px-12 md:px-8 px-4 sm:gap-4 justify-center lg:justify-start">
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setActiveCategory(category)}
//               className={`px-6 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
//                 activeCategory === category
//                   ? "bg-[#4F7DF3] text-white shadow-lg"
//                   : "bg-gray-700 text-gray-300 hover:bg-gray-600"
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

export const BlogHero = ({ className = "" }) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Weight Loss Tips",
    "Healthy Eating",
    "Fitness and Exercise",
    "Mindset and Motivation",
    "Recipes and Meal Planning",
  ];

  return (
    <div className=" ">
      <div className=" lg:px-16 md:px-10 px-5 min-h-[70vh] bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 relative overflow-hidden">
        {/* Background ellipse shadows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500 rounded-full opacity-10 blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:pt-16 md:pt-16 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
            {/* Left Content */}
            <div className="text-left">
              <HealthMattersTag />
              <h1 className="animate__animated animate__shakeX text-6xl md:text-6xl lg:text-5xl font-Outfit font-bold text-white mb-6 leading-tight">
                <span className="text-[#1678F2] font-Outfit leading-relaxed font-bold">
                  One Step Solution
                </span>
                <br />
                For All Your Dietary
                <p className=" mt-3">Needs.</p>
              </h1>
              <p className=" md:text-xl text-base text-[#fff] font-Outfit font-extralight mb-8 max-w-lg mx-auto lg:mx-0">
                Tempor ut aliquet faucibus lacus lectus turpis.
                <br />
                Neque risus bibendum ut ac quis dapibus.
              </p>
            </div>

            {/* Right Image - Circular medical images */}
            <div className="flex justify-center lg:justify-end">
              <div>
                <img
                  className="animate__animated animate__shakeX lg:w-[451px] lg:h-[461px]"
                  src={contacthero}
                  alt=""
                />
              </div>
              {/* <div className="relative w-full max-w-md">
              <div className="grid grid-cols-2 gap-4">
                <div className="w-32 h-32 sm:w-40 sm:h-40 bg-white rounded-full overflow-hidden shadow-xl">
                  <img
                    src="/placeholder.svg?height=160&width=160"
                    alt="Medical professional"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-24 h-24 sm:w-32 sm:h-32 bg-white rounded-full overflow-hidden shadow-xl mt-8">
                  <img
                    src="/placeholder.svg?height=128&width=128"
                    alt="Healthcare service"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-28 h-28 sm:w-36 sm:h-36 bg-white rounded-full overflow-hidden shadow-xl -mt-4">
                  <img
                    src="/placeholder.svg?height=144&width=144"
                    alt="Medical consultation"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Blog categories */}
      <div className="flex flex-wrap py-5 gap-3 bg-gradient-to-br from-[#1E315E] via-[#1E315E] to-[#111827] lg:px-12 md:px-8 px-4 sm:gap-4 justify-between lg:justify-start">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
              activeCategory === category
                ? "bg-[#2C2E54] font-Outfit md:text-base text-sm text-white shadow-lg"
                : "font-Outfit md:text-base text-sm text-[#E6E6E6] font-semibold"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

// import { FaHeart } from "react-icons/fa";

// import Button from "../ui/buttons";
// import { SearchInput } from "../ui/inputs";
// import homebg from "../../assets/images/homebg.png";
// import aboutbg from "../../assets/images/aboutbg.png";

// const HealthMattersTag = () => (
//   <div className="inline-flex items-center gap-2 bg-gray-700 bg-opacity-50 text-white px-4 py-2 rounded-full mb-6">
//     <span className="text-sm font-medium">Health Matters</span>
//     <FaHeart className="text-blue-400 text-sm" />
//   </div>
// );

// export const HomeHero = () => {
//   return (
//     <div
//       className="min-h-screen bg-cover bg-center bg-no-repeat relative"
//       style={{ backgroundImage: `url(${homebg})` }}
//     >
//       <div className="absolute inset-0 "></div>
//       <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex items-center min-h-screen">
//         <div className="w-full lg:w-1/2">
//           <HealthMattersTag />
//           <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
//             Healthcare at Your Fingertips
//           </h1>
//           <p className="text-lg text-gray-200 mb-8 max-w-lg">
//             Connect with licensed medical professionals 24/7 from the comfort of
//             your home
//           </p>
//           <Button variant="primary" size="lg" to="/appointment">
//             Book Appointment Now
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export const AboutHero = () => {
//   return (
//     <div
//       className="min-h-[60vh] bg-cover bg-center bg-no-repeat relative"
//       style={{ backgroundImage: `url(${aboutbg})` }}
//     >
//       <div className="absolute inset-0 bg-black bg-opacity-40"></div>
//       <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex items-center min-h-[60vh]">
//         <div className="w-full lg:w-1/2">
//           <HealthMattersTag />
//           <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
//             Learn About US
//           </h1>
//           <p className="text-lg text-gray-200 mb-8 max-w-lg">
//             Tempor ut aliquet faucibus lacus lectus turpis. Neque risus bibendum
//             ut ac quis dapibus.
//           </p>
//           <Button variant="primary" size="lg" to="/appointment">
//             Book Appointment Now
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export const ServiceHero = () => {
//   return (
//     <div className="min-h-[70vh] bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 relative overflow-hidden">
//       {/* Background ellipse shadows */}
//       <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
//       <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500 rounded-full opacity-10 blur-3xl"></div>

//       <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex items-center min-h-[70vh]">
//         <div className="w-full lg:w-1/2">
//           <HealthMattersTag />
//           <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
//             <span className="text-blue-400">One Step Solution</span>
//             <br />
//             For All Your Dietary Needs.
//           </h1>
//           <p className="text-lg text-gray-200 mb-8 max-w-lg">
//             Tempor ut aliquet faucibus lacus lectus turpis.
//             <br />
//             Neque risus bibendum ut ac quis dapibus.
//           </p>
//           <div className="mt-8">
//             <SearchInput placeholder="Search your product" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export const ContactHero = () => {
//   return (
//     <div className="min-h-[60vh] bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 relative overflow-hidden">
//       {/* Background ellipse shadows */}
//       <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
//       <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500 rounded-full opacity-10 blur-3xl"></div>

//       <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex items-center min-h-[60vh]">
//         <div className="w-full lg:w-1/2">
//           <HealthMattersTag />
//           <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
//             Reach Out To Us Today!
//           </h1>
//           <p className="text-lg text-gray-200 mb-8 max-w-lg">
//             Tempor ut aliquet faucibus lacus lectus turpis.
//             <br />
//             Neque risus bibendum ut ac quis dapibus.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export const BlogHero = () => {
//   const categories = [
//     { name: "All", active: true },
//     { name: "Weight Loss Tips", active: false },
//     { name: "Healthy Eating", active: false },
//     { name: "Fitness and Exercise", active: false },
//     { name: "Mindset and Motivation", active: false },
//     { name: "Recipes and Meal Planning", active: false },
//   ];

//   return (
//     <div className="min-h-[70vh] bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 relative overflow-hidden">
//       {/* Background ellipse shadows */}
//       <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
//       <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500 rounded-full opacity-10 blur-3xl"></div>

//       <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
//         <div className="w-full lg:w-1/2 mb-12">
//           <HealthMattersTag />
//           <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
//             <span className="text-blue-400">One Step Solution</span>
//             <br />
//             For All Your Dietary Needs.
//           </h1>
//           <p className="text-lg text-gray-200 mb-8 max-w-lg">
//             Tempor ut aliquet faucibus lacus lectus turpis.
//             <br />
//             Neque risus bibendum ut ac quis dapibus.
//           </p>
//         </div>

//         {/* Blog categories */}
//         <div className="flex flex-wrap gap-4">
//           {categories.map((category) => (
//             <Button
//               key={category.name}
//               variant="category"
//               size="sm"
//               isActive={category.active}
//             >
//               {category.name}
//             </Button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
