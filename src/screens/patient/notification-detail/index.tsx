import type React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { MdClose } from "react-icons/md";
import PatientPageTitle from "../../../components/patient/patient-page-title";
import DashboardLayout from "../../../components/layouts/dashboard-layout";
import PatientHeader from "../../../components/patient/header";

const NotificationDetailPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const notificationId = searchParams.get("id");

  const notification = {
    id: notificationId,
    type: "appointment",
    title: "Appointment Reminder",
    timestamp: "Today at 2:00 PM",
    message:
      "Your appointment with Dr. Sarah Johnson is scheduled for today at 2:00 PM. Please arrive 15 minutes early for check-in.",
  };

  const handleClose = () => {
    navigate("/patient/notifications");
  };

  const handleOkay = () => {
    // Mark as read and navigate back
    navigate("/patient/notifications");
  };

  const handleMarkAsRead = () => {
    // Mark as read
    console.log("Marking notification as read");
    navigate("/patient/notifications");
  };

  return (
    <DashboardLayout>
      <PatientHeader />
      <div className="p-6 space-y-6">
        <PatientPageTitle breadcrumb="Notifications" title="" />

        <div className="max-w-2xl">
          {/* Notification Detail Card */}
          <div className="bg-white rounded-lg p-6 relative">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <MdClose className="w-5 h-5" />
            </button>

            {/* Notification Content */}
            <div className="pr-12">
              <h3 className="text-xl font-normal text-[#000] mb-2 font-Outfit">
                {notification.title}
              </h3>
              <p className="text-base text-[#4B5563] mb-6 font-Inter font-normal">
                {notification.timestamp}
              </p>

              <p className="text-base text-[#4B5563] leading-relaxed mb-8 font-Inter font-normal">
                {notification.message}
              </p>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <button
                  onClick={handleOkay}
                  className="flex-1 bg-[#2563EB] text-white py-3 px-6 rounded-lg font-normal text-base font-Outfit hover:bg-blue-600 transition-colors"
                >
                  Okay
                </button>
                <button
                  onClick={handleMarkAsRead}
                  className="flex-1  text-[#000] py-3 px-6 rounded-lg font-normal font-Outfit hover:bg-gray-200 transition-colors"
                >
                  Mark as Read
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default NotificationDetailPage;
