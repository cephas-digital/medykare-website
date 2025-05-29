import { FaHandHoldingMedical, FaHome, FaStar } from "react-icons/fa";
import Button from "../ui/buttons";
import vissionimg from "../../assets/images/vissionimg.png";
// import storyone from "../../assets/images/storyone.png";
import avatone from "../../assets/images/avatone.png";
import zeroimg from "../../assets/images/zeroimg.png";

export const OurStorySection = () => {
  return (
    <section className="lg:px-16  md:px-10 px-5">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-4xl font-Outfit lg:text-3xl font-semibold text-[#031432] leading-tight">
              Our Story; From Zero To Hero
            </h2>

            <p className="text-[#6C87AE] text-base font-Outfit leading-relaxed">
              Eget sed aliquet proin in nibh felis urna pulvinar rhoncus. Lorem
              facilisis nisl venenatis risus ultrices proin nam. Duis hendrerit
              molestudda placerat ipsum. Semper luctus vitae nunc semper felis.
            </p>

            <Button variant="secondary" size="lg">
              Learn More
            </Button>
          </div>

          {/* Right Content - Circular Design */}

          <div className="relative flex justify-center">
            <div>
              <img src={zeroimg} alt="" />
            </div>
            {/* <div className="relative w-96 h-96">
          
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#4F7DF3] rounded-full flex items-center justify-center shadow-2xl">
                <FaHome className="text-white text-3xl" />
              </div>

             
              <div className="absolute inset-0 border-2 border-dashed border-gray-300 rounded-full"></div>
              <div className="absolute -inset-14 border-2 border-dashed border-gray-300 rounded-full"></div>

          
              <div className="absolute top-0 left-1/4 transform -translate-x-full -translate-y-1/2 w-28 h-28  rounded-full  overflow-hidden">
                <img
                  src={storyone}
                  alt="Medical professional"
                  className="w-full h-full object-cover"
                />
              </div>

    
              <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full shadow-xl overflow-hidden">
                <img
                  src="/placeholder.svg?height=64&width=64"
                  alt="Medical professional"
                  className="w-full h-full object-cover"
                />
              </div>

          
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-16 h-16 bg-white rounded-full shadow-xl overflow-hidden">
                <img
                  src="/placeholder.svg?height=64&width=64"
                  alt="Medical professional"
                  className="w-full h-full object-cover"
                />
              </div>

    
              <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full shadow-xl overflow-hidden">
                <img
                  src="/placeholder.svg?height=64&width=64"
                  alt="Medical professional"
                  className="w-full h-full object-cover"
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

// export const OurStorySection = () => {
//   return (
//     <section className=" lg:px-16 md:px-10 px-5">
//       <div className="container mx-auto px-6">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           {/* Left Content */}
//           <div className="space-y-8">
//             <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
//               Our Story; From Zero To Hero
//             </h2>

//             <p className="text-gray-600 text-lg leading-relaxed">
//               Eget sed aliquet proin in nibh felis urna pulvinar rhoncus. Lorem
//               facilisis nisl venenatis risus ultrices proin nam. Duis hendrerit
//               molestudda placerat ipsum. Semper luctus vitae nunc semper felis.
//             </p>

//             <Button size="lg">Learn More</Button>
//           </div>

//           {/* Right Content - Circular Design */}
//           <div className="relative flex justify-center">
//             <div className="relative w-96 h-96">
//               <img src="" alt="" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

export const OurVisionSection = () => {
  return (
    <section className="pt-20 lg:px-10 md:px-10 px-5 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Image */}
          <div className="relative">
            <div className="">
              <img
                src={vissionimg}
                alt="Medical professionals consulting"
                className="w-full object-cover"
              />

              {/* Quality Badge */}
              <div className="absolute bottom-24 right-6 bg-white rounded-2xl px-4 py-3 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-[#4F7DF3] rounded-full flex items-center justify-center">
                    <FaHandHoldingMedical className="text-white text-sm" />
                  </div>
                  <div>
                    <p className="text-base font-Outfit font-medium text-[#031432]">
                      Quality over Quantity
                    </p>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 text-xs" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-Outfit text-[#031432] font-semibold leading-tight">
              Our Vision
            </h2>

            <p className="text-[#6C87AE] font-Outfit text-base leading-relaxed">
              Id quis in augue quis duis. Ultrices orci dolor dolor odio
              adipiscing venenatis pharetra et pulvinar. Tristique luctus nec
              odio consequat tristique. Adipiscing est eget felis porttitor
              velit. Vitae turpis semper.
            </p>

            <Button variant="secondary" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export const OurWorksSpeaksSection = () => {
  const testimonials = [
    {
      id: 1,
      text: "Nisl morbi congue nisl lectus ut. Vitae urna dictum proin in ipsum in. Cursus augue ornare nibh tincidunt volutpat in. Dui auctor dignissim ut neque enim aliquam. Mauris fermentum at non in. Facilisi semper dui ut.",
      name: "Brenda Bernier",
      title: "Investor Response Strategist",
      image: avatone,
    },
    {
      id: 2,
      text: "Elementum feugiat vitae nam iaculis tristique. Risus cras tempor cursus enim nunc fames ornare posuere. Ultrices gravida consectetur amet nec pellentesque id. Venenatis vel risus nisl dui lacus augue purus.",
      name: "Virgil Koss",
      title: "National Branding Planner",
      image: avatone,
    },
    {
      id: 3,
      text: "Nunc leo pretium ut egestas nibh lacus nunc diam non. Bibendum varius sociis etiam orci sem amet libero erat. Egestas quam risus elit ac imperdiet odio dictum eget cursus. Molestie ultrices molestudda.",
      name: "Dixie Beier",
      title: "Product Applications Facilitator",
      image: avatone,
    },
    {
      id: 4,
      text: "Vivamus ultrices volutpat turpis justo ornare amet ac egestas. Fermentum in vitae eget vulputate duis scelerisque lorem. Turpis risus pretium gravida tellus donec consectetur. Ut proin in tempor odio amet.",
      name: "Jessie Bernier",
      title: "Senior Program Strategist",
      image: avatone,
    },
  ];

  return (
    <section className=" pt-40 pb-12 lg:px-16 md:px-10 px-5">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-3xl font-semibold text-[#031432] font-Outfit">
            Our Works Speaks
          </h2>
          <p className="text-[#6C87AE] font-Outfit text-lg max-w-3xl font-normal mx-auto leading-relaxed">
            At et integer rhoncus arcu cras donec. Tellus lectus amet mattis
            quis cras. Dui ut ac ut posuere ut. Tempor sagittis venenatis nam
            est donec accumsan. Accumsan et nisl nunc at eget nunc ut nunc.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="space-y-6">
              {/* Testimonial Text */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <p className="text-[#031432] font-Outfit font-light text-xl">
                  {testimonial.text}
                </p>

                {/* Author Info */}
                <div className="flex items-center space-x-4 mt-5">
                  <div className="w-12 h-12 rounded-full overflow-hidden shadow-md">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className=" text-[#3A8EF6] font-Outfit font-medium  text-xl">
                      {testimonial.name}
                    </h4>
                    <p className="text-[#6C87AE] font-Outfit font-normal text-base ">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
