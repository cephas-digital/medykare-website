import type React from "react";
import { useState } from "react";
import { MdSend, MdEmojiEmotions, MdAdd } from "react-icons/md";
import PatientPageTitle from "../../../components/patient/patient-page-title";
import DashboardLayout from "../../../components/layouts/dashboard-layout";
import PatientHeader from "../../../components/patient/header";

interface ChatMessage {
  id: string;
  text: string;
  sender: "user" | "support";
  timestamp: string;
}

const LiveChatPage: React.FC = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      text: "Hello, I want to make enquiries about your medications",
      sender: "user",
      timestamp: "12:55 am",
    },
    {
      id: "2",
      text: "Hello Janet, thank you for reaching out",
      sender: "support",
      timestamp: "12:57 am",
    },
    {
      id: "3",
      text: "What do you need to know?",
      sender: "support",
      timestamp: "12:57 am",
    },
    {
      id: "4",
      text: "I want to know if your price is negotiable, i need about 2 bottles",
      sender: "user",
      timestamp: "",
    },
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage: ChatMessage = {
        id: Date.now().toString(),
        text: message,
        sender: "user",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages((prev) => [...prev, newMessage]);
      setMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <DashboardLayout>
      <PatientHeader />
      <div className="p-6 space-y-6">
        <PatientPageTitle breadcrumb="Account Settings" title="" />

        <div className="max-w-4xl">
          <h2 className="text-2xl font-normal text-[#000] mb-8 font-Outfit">
            Help & Support
          </h2>

          {/* Chat Header */}
          <div className="bg-white rounded-lg border border-gray-200 mb-6">
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-200 rounded-lg"></div>
                <div>
                  <h3 className="font-normal text-base text-[#000] font-Outfit">
                    Medications
                  </h3>
                  <p className="text-sm text-gray-600 font-Outfit">
                    ₦700,000.00
                  </p>
                  <p className="text-xs text-[#2D5BFF] font-Outfit">
                    12 related questions
                  </p>
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="p-6 space-y-6 min-h-96">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.sender === "user" ? "justify-start" : "justify-end"
                  }`}
                >
                  <div className="max-w-xs lg:max-w-md">
                    <div
                      className={`p-4 rounded-lg ${
                        msg.sender === "user"
                          ? "bg-[#2D5BFF] text-white"
                          : "bg-gray-100 text-[#000]"
                      }`}
                    >
                      <p className="font-Outfit">{msg.text}</p>
                    </div>
                    {msg.timestamp && (
                      <div
                        className={`flex items-center mt-2 ${
                          msg.sender === "user"
                            ? "justify-start"
                            : "justify-end"
                        }`}
                      >
                        <p className="text-xs text-gray-500 font-Outfit">
                          {msg.timestamp}
                        </p>
                        {msg.sender === "support" && (
                          <button className="ml-2 text-gray-400 hover:text-gray-600">
                            <svg
                              className="w-3 h-3"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                            </svg>
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Today Separator */}
              <div className="text-center">
                <span className="bg-white px-4 py-2 text-sm text-gray-500 font-Outfit">
                  Today
                </span>
              </div>
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex items-center space-x-3">
                <button className="p-2 text-gray-400 hover:text-gray-600">
                  <MdAdd className="w-5 h-5" />
                </button>
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Your message"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D5BFF] focus:border-transparent font-Outfit"
                  />
                </div>
                <button className="p-2 text-gray-400 hover:text-gray-600">
                  <MdEmojiEmotions className="w-5 h-5" />
                </button>
                <button
                  onClick={handleSendMessage}
                  className="p-2 bg-[#2D5BFF] text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <MdSend className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default LiveChatPage;
