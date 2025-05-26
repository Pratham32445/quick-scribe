import { useState } from "react";
import { Link } from "react-router-dom";
import GeneralContent from "./GeneralContent";
import MeetingsContent from "./MeetingsContent";
import PlanContent from "./PlanContent";
import AppsContent from "./AppsContent";
import NotificationsContent from "./NotificationsContent";
import SecurityContent from "./SecurityContent";

const AppPage = () => {
  const [activeTab, setActiveTab] = useState("General");
  const tabs = [
    "General",
    "Meetings",
    "Plan",
    "Apps",
    "Notifications",
    "Security",
  ];

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      {/* Navigation Tabs */}
      <div className="flex justify-center border-b">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-6 py-3 font-medium ${
              activeTab === tab
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-gray-800"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="py-6">
        {activeTab === "General" && <GeneralContent/>}
        {activeTab === "Meetings" && <MeetingsContent/>}
        {activeTab === "Plan" && <PlanContent/>}
        {activeTab === "Apps" && <AppsContent/>}
        {activeTab === "Notifications" && <NotificationsContent/>}
        {activeTab === "Security" && <SecurityContent/>}
      </div>

      {/* Footer */}
      <div className="mt-8 text-center text-sm text-gray-500 pb-6">
        <div className="text-xs mb-2">
          Version 3.7.1.2 - e3dbcc6b08020c15a3c4fc3fe19ecbd37cdb
        </div>
        <div className="mb-2">
          By using Otter you agree to the{" "}
          <Link to="#" className="text-blue-600 hover:underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link to="#" className="text-blue-600 hover:underline">
            Privacy Policy
          </Link>
        </div>
        <div>
          <Link to="#" className="text-blue-600 hover:underline">
            Cookie Settings
          </Link>{" "}
          |{" "}
          <Link to="#" className="text-blue-600 hover:underline">
            Clear Cache
          </Link>
        </div>
      </div>
    </div>
  );
};


export default AppPage
