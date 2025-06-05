import { IoMdNotificationsOutline } from "react-icons/io";
import { MdNotifications, MdSearch } from "react-icons/md";
import userimg from "../../assets/images/userimg.png";

const PatientHeader = () => {
  return (
    <div className="sticky top-0 z-10 bg-white pt-5 pb-4 px-6 ">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="md:text-2xl font-bold font-Outfit text-xl text-[#111827]">
            Welcome back, Sarah
          </h1>
          <p className="text-[#4B5563] font-Inter font-normal text-base">
            Here's an overview of your health dashboard
          </p>
        </div>
        <div className="lg:flex items-center gap-8 md:block hidden">
          <div className="relative">
            <MdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 font-Inter text-sm text-[#9CA3AF] placeholder:font-Inter font-normal placeholder:font-normal rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="relative">
            <IoMdNotificationsOutline className="text-2xl text-gray-600 cursor-pointer" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
          </div>
          <div className="flex items-center gap-2">
            <img
              src={userimg}
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            <span className=" text-base text-[#000000] font-Outfit font-bold">
              Sarah Adewunmi
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientHeader;
