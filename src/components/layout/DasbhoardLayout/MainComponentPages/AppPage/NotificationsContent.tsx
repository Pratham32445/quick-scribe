import { ChevronDown } from "lucide-react";

const NotificationsContent = () => {
  return (
    <div>
      <p className="text-gray-600 mb-8">
        Get notifications to find out what's going on when you're not on Otter.
        You can turn on/off each type of notifications anytime. For push
        notifications, you also need to enable notifications from Otter in the
        settings of your device and browser running Otter.
      </p>

      <div className="space-y-4">
        <div className="border rounded-md">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-4">
              <span className="bg-blue-100 rounded-full p-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="#2563EB"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 16V12"
                    stroke="#2563EB"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 8H12.01"
                    stroke="#2563EB"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div>
                <h3 className="font-semibold">My Conversations</h3>
                <p className="text-sm text-gray-600">
                  Conversation processed and ready
                </p>
              </div>
            </div>
            <ChevronDown className="h-5 w-5" />
          </div>
        </div>

        <div className="border rounded-md">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-4">
              <span className="bg-blue-100 rounded-full p-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12H20"
                    stroke="#2563EB"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 6H20"
                    stroke="#2563EB"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 18H20"
                    stroke="#2563EB"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div>
                <h3 className="font-semibold">Shared with Me</h3>
                <p className="text-sm text-gray-600">
                  Conversation shared with you
                </p>
              </div>
            </div>
            <ChevronDown className="h-5 w-5" />
          </div>
        </div>

        <div className="border rounded-md">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-4">
              <span className="bg-blue-100 rounded-full p-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                    stroke="#2563EB"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div>
                <h3 className="font-semibold">Live Notes Now</h3>
                <p className="text-sm text-gray-600">
                  Connect events when live meeting notes start
                </p>
              </div>
            </div>
            <ChevronDown className="h-5 w-5" />
          </div>
        </div>

        <div className="border rounded-md">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-4">
              <span className="bg-blue-100 rounded-full p-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 3V7"
                    stroke="#2563EB"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 3V7"
                    stroke="#2563EB"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 7H21V21H3V7Z"
                    stroke="#2563EB"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 11H17"
                    stroke="#2563EB"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 15H13"
                    stroke="#2563EB"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div>
                <h3 className="font-semibold">Highlights</h3>
                <p className="text-sm text-gray-600">
                  Highlights in a conversation
                </p>
              </div>
            </div>
            <ChevronDown className="h-5 w-5" />
          </div>
        </div>

        <div className="border rounded-md">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-4">
              <span className="bg-blue-100 rounded-full p-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H8"
                    stroke="#2563EB"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15 2H9C8.44772 2 8 2.44772 8 3V5C8 5.55228 8.44772 6 9 6H15C15.5523 6 16 5.55228 16 5V3C16 2.44772 15.5523 2 15 2Z"
                    stroke="#2563EB"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div>
                <h3 className="font-semibold">Meeting Summary</h3>
                <p className="text-sm text-gray-600">
                  Automated summary and action items for each calendar event you
                  record or that is shared with you
                </p>
              </div>
            </div>
            <ChevronDown className="h-5 w-5" />
          </div>
        </div>

        <div className="border rounded-md">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-4">
              <span className="bg-blue-100 rounded-full p-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
                    stroke="#2563EB"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div>
                <h3 className="font-semibold">Comments</h3>
                <p className="text-sm text-gray-600">
                  Comments and replies to a conversation
                </p>
              </div>
            </div>
            <ChevronDown className="h-5 w-5" />
          </div>
        </div>

        <div className="border rounded-md">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-4">
              <span className="bg-blue-100 rounded-full p-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
                    stroke="#2563EB"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 2V6"
                    stroke="#2563EB"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 2V6"
                    stroke="#2563EB"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 10H21"
                    stroke="#2563EB"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div>
                <h3 className="font-semibold">Calendar Events</h3>
                <p className="text-sm text-gray-600">
                  Upcoming calendar event to be recorded
                </p>
              </div>
            </div>
            <ChevronDown className="h-5 w-5" />
          </div>
        </div>

        <div className="border rounded-md">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-4">
              <span className="bg-blue-100 rounded-full p-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 12H18L15 21L9 3L6 12H2"
                    stroke="#2563EB"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div>
                <h3 className="font-semibold">Activity Stats</h3>
                <p className="text-sm text-gray-600">
                  Weekly usage stats and digest of your conversations
                </p>
              </div>
            </div>
            <ChevronDown className="h-5 w-5" />
          </div>
        </div>

        <div className="border rounded-md">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-4">
              <span className="bg-blue-100 rounded-full p-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="#2563EB"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13"
                    stroke="#2563EB"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 17H12.01"
                    stroke="#2563EB"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div>
                <h3 className="font-semibold">Product Tips</h3>
                <p className="text-sm text-gray-600">
                  Product updates and tips on getting more out of Otter
                </p>
              </div>
            </div>
            <ChevronDown className="h-5 w-5" />
          </div>
        </div>

        <div className="border rounded-md">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-4">
              <span className="bg-blue-100 rounded-full p-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.57831 8.50903 2.99871 7.05 2.99871C5.59096 2.99871 4.19169 3.57831 3.16 4.61C2.1283 5.64169 1.54871 7.04097 1.54871 8.5C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6054C22.3095 9.93789 22.4518 9.22248 22.4518 8.5C22.4518 7.77752 22.3095 7.0621 22.0329 6.39464C21.7563 5.72718 21.351 5.12075 20.84 4.61V4.61Z"
                    stroke="#2563EB"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div>
                <h3 className="font-semibold">Offers & Discounts</h3>
                <p className="text-sm text-gray-600">
                  News about special offers and discounts on Otter products
                </p>
              </div>
            </div>
            <ChevronDown className="h-5 w-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsContent;
