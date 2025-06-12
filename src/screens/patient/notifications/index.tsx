import type React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { MdCalendarToday, MdScience, MdMedication } from "react-icons/md";
import PatientPageTitle from "../../../components/patient/patient-page-title";
import DashboardLayout from "../../../components/layouts/dashboard-layout";
import PatientHeader from "../../../components/patient/header";
import { ImLab } from "react-icons/im";
import { IoCalendarClearOutline } from "react-icons/io5";
import { GiMedicines } from "react-icons/gi";

interface Notification {
  id: string;
  type: "appointment" | "lab-result" | "medication";
  title: string;
  message: string;
  timestamp: string;
  isRead: boolean;
  actionText: string;
  actionType: "view-details" | "view-results" | "mark-taken";
}

const NotificationsPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("all");

  const notifications: Notification[] = [
    {
      id: "1",
      type: "appointment",
      title: "Upcoming Appointment",
      message:
        "Dr. Sarah Wilson - Cardiology Consultation tomorrow at 10:00 AM",
      timestamp: "2 hours ago",
      isRead: false,
      actionText: "View Details",
      actionType: "view-details",
    },
    {
      id: "2",
      type: "lab-result",
      title: "Lab Results Available",
      message: "Your blood test results are now available for review",
      timestamp: "4 hours ago",
      isRead: false,
      actionText: "View Results",
      actionType: "view-results",
    },
    {
      id: "3",
      type: "medication",
      title: "Medication Reminder",
      message: "Time to take your evening medication - Lisinopril 10mg",
      timestamp: "6 hours ago",
      isRead: false,
      actionText: "Mark as Taken",
      actionType: "mark-taken",
    },
    {
      id: "4",
      type: "lab-result",
      title: "Lab Results Available",
      message: "Your blood test results are now available for review",
      timestamp: "4 hours ago",
      isRead: true,
      actionText: "View Results",
      actionType: "view-results",
    },
    {
      id: "5",
      type: "medication",
      title: "Medication Reminder",
      message: "Time to take your evening medication - Lisinopril 10mg",
      timestamp: "6 hours ago",
      isRead: true,
      actionText: "Mark as Taken",
      actionType: "mark-taken",
    },
    {
      id: "6",
      type: "appointment",
      title: "Upcoming Appointment",
      message:
        "Dr. Sarah Wilson - Cardiology Consultation tomorrow at 10:00 AM",
      timestamp: "2 hours ago",
      isRead: true,
      actionText: "View Details",
      actionType: "view-details",
    },
    {
      id: "7",
      type: "lab-result",
      title: "Lab Results Available",
      message: "Your blood test results are now available for review",
      timestamp: "4 hours ago",
      isRead: true,
      actionText: "View Results",
      actionType: "view-results",
    },
  ];

  const filterTabs = [
    { id: "all", label: "All Notifications" },
    { id: "unread", label: "Unread" },
    { id: "appointment", label: "Appointments" },
    { id: "lab-result", label: "Lab Results" },
    { id: "medication", label: "Medications" },
  ];

  const getFilteredNotifications = () => {
    switch (activeFilter) {
      case "unread":
        return notifications.filter((n) => !n.isRead);
      case "appointment":
        return notifications.filter((n) => n.type === "appointment");
      case "lab-result":
        return notifications.filter((n) => n.type === "lab-result");
      case "medication":
        return notifications.filter((n) => n.type === "medication");
      default:
        return notifications;
    }
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "appointment":
        return IoCalendarClearOutline;
      case "lab-result":
        return ImLab;
      case "medication":
        return GiMedicines;
      default:
        return IoCalendarClearOutline;
    }
  };

  const handleNotificationClick = (notification: Notification) => {
    navigate(`/patient/notification-detail?id=${notification.id}`);
  };

  const handleActionClick = (
    e: React.MouseEvent,
    notification: Notification
  ) => {
    e.stopPropagation();

    switch (notification.actionType) {
      case "view-details":
        navigate(`/patient/appointments`);
        break;
      case "view-results":
        navigate(`/patient/lab-results`);
        break;
      case "mark-taken":
        console.log("Mark medication as taken");
        break;
    }
  };

  const filteredNotifications = getFilteredNotifications();

  return (
    <DashboardLayout>
      <PatientHeader />
      <div className="p-6 space-y-6">
        <PatientPageTitle breadcrumb="Notifications" title="" />

        <div className="max-w-4xl">
          <h2 className="text-2xl font-normal text-[#000] mb-8 font-Outfit">
            Notifications
          </h2>

        
          <div className="flex space-x-1 mb-8  p-1 rounded-lg w-fit">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-md text-sm font-normal font-Outfit transition-colors ${
                  activeFilter === tab.id
                    ? "bg-[#2563EB] text-white"
                    : "text-[#4B5563] hover:text-gray-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Notifications List */}
          <div className="space-y-4">
            {filteredNotifications.map((notification) => {
              const IconComponent = getNotificationIcon(notification.type);
              return (
                <div
                  key={notification.id}
                  onClick={() => handleNotificationClick(notification)}
                  className="flex items-start space-x-4 p-4 bg-white  rounded-lg hover:border-gray-300 cursor-pointer transition-colors"
                >
                  <div className="w-12 h-12 bg-[#EFF6FF] rounded-full flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-5 h-5 text-[#2563EB]" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-normal text-base text-[#111827] mb-1 font-Outfit">
                      {notification.title}
                    </h3>
                    <p className="text-base text-[#4B5563] font-Inter font-normal mb-2">
                      {notification.message}
                    </p>
                    <div className=" flex items-center justify-between">
                      <p className="text-sm text-[#6B7280] font-Inter font-normal">
                        {notification.timestamp}
                      </p>
                      <button
                        onClick={(e) => handleActionClick(e, notification)}
                        className="text-[#2563EB] text-sm font-normal font-Outfit hover:underline flex-shrink-0"
                      >
                        {notification.actionText}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredNotifications.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 font-Outfit">
                No notifications found for the selected filter.
              </p>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default NotificationsPage;
