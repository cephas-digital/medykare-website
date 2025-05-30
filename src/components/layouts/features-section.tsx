// import { FaHeartbeat, FaChartBar } from "react-icons/fa";

// const FeaturesSection = () => {
//   return (
//     <section className="py-16 bg-white lg:px-16 md:px-10 px-5">
//       <div className="max-w-7xl mx-auto">
//         {/* Main Container with Relative Positioning */}
//         <div className="relative min-h-[500px]">
//           {/* Features We Provide Heading - Top Left */}
//           <div className="absolute top-0 left-0">
//             <h2 className="text-[#4F7DF3] font-bold text-lg tracking-wider">
//               FEATURES WE PROVIDE
//             </h2>
//           </div>

//           {/* Calculating BMI - Bottom Left */}
//           <div className="absolute bottom-0 left-0 max-w-md">
//             <div className="space-y-6">
//               <div className="flex items-center gap-3">
//                 <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
//                   Calculating BMI
//                   <br />
//                   is easier
//                 </h3>
//                 <FaHeartbeat className="text-[#4F7DF3] text-3xl flex-shrink-0" />
//               </div>
//               <p className="text-gray-500 text-lg">
//                 We calculate your BMI index from data like age, height, weight.
//               </p>
//             </div>
//           </div>

//           {/* Food Recommendation - Top Right */}
//           <div className="absolute top-0 right-0 max-w-xs">
//             <div className="flex items-start gap-4">
//               <div className="flex-shrink-0">
//                 <img
//                   src="/placeholder.svg?height=48&width=48"
//                   alt="Food plate icon"
//                   className="w-12 h-12"
//                 />
//               </div>
//               <div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-3">
//                   Food Recommendation
//                 </h3>
//                 <p className="text-gray-500">
//                   We provide food recommendation according to your calorie
//                   requirements.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Interactive Chatbot - Middle Right */}
//           <div className="absolute top-1/2 right-0 transform -translate-y-1/2 max-w-xs">
//             <div className="flex items-start gap-4">
//               <div className="flex-shrink-0">
//                 <img
//                   src="/placeholder.svg?height=48&width=48"
//                   alt="Chatbot icon"
//                   className="w-12 h-12"
//                 />
//               </div>
//               <div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-3">
//                   Interactive Chatbot
//                 </h3>
//                 <p className="text-gray-500">
//                   Solve your queries by interacting with our bot.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Nutritional Value - Bottom Center */}
//           <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 max-w-xs">
//             <div className="flex items-start gap-4">
//               <div className="flex-shrink-0">
//                 <FaChartBar className="text-3xl text-blue-500" />
//               </div>
//               <div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-3">
//                   Nutritional Value
//                 </h3>
//                 <p className="text-gray-500">
//                   Get all the nutritional values of your preferred dish.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturesSection;

import { FaHeartbeat, FaChartBar } from "react-icons/fa";
import foodone from "../../assets/images/foodone.png";
import foodtwo from "../../assets/images/foodtwo.png";
import foodthree from "../../assets/images/foodthree.png";

import { PiHeartbeat } from "react-icons/pi";

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-white lg:px-16 md:px-10 px-5">
      <div className="container mx-auto px-6 pt-20">
        {/* Features We Provide Heading */}

        {/* Main Grid Layout */}
        <div className="grid grid-cols-12 gap-8 items-start relative ">
          {/* Left Side - BMI Calculator (Takes up more space) */}
          <div className="col-span-12 md:col-span-6 lg:col-span-5 ">
            <h2 className="text-[#3A8EF6] font-Outfit font-semibold text-xl mb-16 tracking-wider">
              FEATURES WE PROVIDE
            </h2>
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <h3
                  data-aos="flip-right"
                  data-aos-duration="1500"
                  className="text-4xl lg:text-5xl font-semibold text-[#000] font-Outfit leading-tight"
                >
                  Calculating BMI
                  <br />
                  <div className=" flex items-center gap-2 mt-1 ">
                    <p>is easier</p>
                    <PiHeartbeat className="text-[#4F7DF3] text-3xl mt-2 flex-shrink-0" />
                  </div>
                </h3>
              </div>
              <p className="text-[#8A8585] font-Outfit text-xl font-normal max-w-sm">
                We calculate your BMI index from data like age, height, weight.
              </p>
            </div>
          </div>

          {/* Right Side - Other Features */}
          <div className="col-span-12 md:col-span-6 lg:col-span-7 relative">
            <div className="space-y-12">
              {/* Food Recommendation */}
              <div
                data-aos="fade-down-left"
                data-aos-duration="1500"
                className=" items-start justify-between lg:w-[320px] lg:absolute top-[-80px] left-24"
              >
                <div className="flex-shrink-0">
                  <img
                    src={foodone}
                    alt="Food plate icon"
                    className="w-12 h-12"
                  />
                </div>
                <div className="flex-1 mt-8">
                  <h3 className="text-2xl font-Outfit  font-medium  text-gray-900 mb-3">
                    Food Recommendation
                  </h3>
                  <p className="text-[#8A8585] leading-snug font-Outfit text-xl font-light ">
                    We provide food recommendation according to your calorie
                    requirements.
                  </p>
                </div>
              </div>

              {/* Interactive Chatbot */}
              <div
                data-aos="fade-right"
                data-aos-duration="1500"
                className=" items-start justify-between lg:w-[270px] lg:absolute right-0"
              >
                <div className=" flex-shrink-0">
                  <img src={foodtwo} alt="Chatbot icon" className="w-12 h-12" />
                </div>
                <div className=" mt-8 flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Interactive Chatbot
                  </h3>
                  <p className="text-[#8A8585] leading-snug font-Outfit text-xl font-light">
                    Solve your queries by interacting with our bot.
                  </p>
                </div>
              </div>

              {/* Nutritional Value */}
              <div
                data-aos="fade-up-right"
                data-aos-duration="1500"
                className=" flex pt-32"
              >
                <div className=" items-start lg:w-[270px]  justify-between max-w-md">
                  <div className=" flex-shrink-0">
                    <img
                      src={foodthree}
                      alt="Chatbot icon"
                      className="w-12 h-12"
                    />
                  </div>
                  <div className="flex-1 mt-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Nutritional Value
                    </h3>
                    <p className="text-[#8A8585] leading-snug font-Outfit text-xl font-light">
                      Get all the nutritional values of your preferred dish.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
