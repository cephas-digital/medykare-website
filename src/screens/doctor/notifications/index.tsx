import type React from "react";
import { useNavigate } from "react-router-dom";
import { MdCalendarToday } from "react-icons/md";
import DoctorDashboardLayout from "../../../components/doctor/doctor-dashboard-layout";

interface NotificationData {
  id: string;
  type: string;
  title: string;
  description: string;
  time: string;
}

const DoctorNotificationsPage: React.FC = () => {
  const navigate = useNavigate();

  const notifications: NotificationData[] = [
    {
      id: "1",
      type: "Upcoming Appointment",
      title: "Upcoming Appointment",
      description:
        "James Cooper (Patient)- Cardiology Consultation tomorrow at 10:00 AM",
      time: "2 hours ago",
    },
    {
      id: "2",
      type: "Upcoming Appointment",
      title: "Upcoming Appointment",
      description:
        "James Cooper (Patient)- Cardiology Consultation tomorrow at 10:00 AM",
      time: "2 hours ago",
    },
    {
      id: "3",
      type: "Upcoming Appointment",
      title: "Upcoming Appointment",
      description:
        "James Cooper (Patient)- Cardiology Consultation tomorrow at 10:00 AM",
      time: "2 hours ago",
    },
    {
      id: "4",
      type: "Upcoming Appointment",
      title: "Upcoming Appointment",
      description:
        "James Cooper (Patient)- Cardiology Consultation tomorrow at 10:00 AM",
      time: "2 hours ago",
    },
    {
      id: "5",
      type: "Upcoming Appointment",
      title: "Upcoming Appointment",
      description:
        "James Cooper (Patient)- Cardiology Consultation tomorrow at 10:00 AM",
      time: "2 hours ago",
    },
    {
      id: "6",
      type: "Upcoming Appointment",
      title: "Upcoming Appointment",
      description:
        "James Cooper (Patient)- Cardiology Consultation tomorrow at 10:00 AM",
      time: "2 hours ago",
    },
  ];

  const handleViewDetails = (notificationId: string) => {
    navigate(`/doctor/notifications/${notificationId}`);
  };

  return (
    <DoctorDashboardLayout>
      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-[#0D171C] mb-2 font-Outfit">
            Notifications
          </h1>
          <p className="text-[#4F46E5] font-Outfit font-normal text-sm">
            View notifications
          </p>
        </div>

        {/* Notifications List */}
        <div className="space-y-6">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className="flex items-start space-x-4 py-2"
            >
              {/* Calendar Icon */}
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-[#4F46E5] rounded-lg flex items-center justify-center">
                  <MdCalendarToday className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Notification Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-medium text-[#111827] mb-1 font-Outfit">
                  {notification.title}
                </h3>
                <p className="text-sm text-[#6B7280] mb-2 font-Outfit leading-relaxed">
                  {notification.description}
                </p>
                <p className="text-xs text-[#9CA3AF] font-Outfit">
                  {notification.time}
                </p>
              </div>

              {/* View Details Button */}
              <div className="flex-shrink-0">
                <button
                  onClick={() => handleViewDetails(notification.id)}
                  className="text-[#4F46E5] font-medium text-sm font-Outfit hover:underline"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {notifications.length === 0 && (
          <div className="text-center py-8 text-gray-500 font-Outfit">
            No notifications available.
          </div>
        )}
      </div>
    </DoctorDashboardLayout>
  );
};

export default DoctorNotificationsPage;
