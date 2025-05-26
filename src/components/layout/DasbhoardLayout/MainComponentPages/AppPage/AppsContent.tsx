import { Button } from "../../../../ui/button";

const AppsContent = () => {
  return (
    <div className="space-y-8">
      <div className="border rounded-md p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="public/lovable-uploads/11df88df-2c23-4766-8a21-0997f4f2c052.png"
              alt="Slack"
              className="w-10 h-10"
            />
            <div>
              <h3 className="font-semibold">Slack</h3>
              <p className="text-sm text-gray-600">
                Connect Slack to your Otter Workspace to easily invite contacts,
                share conversations, and get notifications.
              </p>
            </div>
          </div>
          <Button>Add</Button>
        </div>
      </div>

      <div className="border rounded-md p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="public/lovable-uploads/c63ba847-b239-4689-aabd-6e958b89b18a.png"
              alt="Salesforce"
              className="w-10 h-10"
            />
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-semibold">Salesforce</h3>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full font-medium">
                  Popular
                </span>
              </div>
              <p className="text-sm text-gray-600">
                Connect Salesforce to your Otter Workspace to automatically
                enrich your data in salesforce with Otter conversation insights
                to make better decisions.
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Contact Otter.ai sales team to{" "}
                <a href="#" className="text-blue-600">
                  schedule a demo
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border rounded-md p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="public/lovable-uploads/e714befc-87b9-4a56-97ec-290000c8c4bb.png"
              alt="HubSpot"
              className="w-10 h-10"
            />
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-semibold">HubSpot</h3>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full font-medium">
                  Popular
                </span>
              </div>
              <p className="text-sm text-gray-600">
                Connect HubSpot to your Otter Workspace to automatically enrich
                leads and prospects with insights from every call, boosting
                sales productivity.
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Contact Otter.ai sales team to{" "}
                <a href="#" className="text-blue-600">
                  schedule a demo
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border rounded-md p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="public/lovable-uploads/e7ef9615-d19d-41ef-9f7f-80a397d67523.png"
              alt="Zoom"
              className="w-10 h-10"
            />
            <div>
              <h3 className="font-semibold">Zoom</h3>
              <p className="text-sm text-gray-600">
                For Zoomers Pro, Business or Enterprise.{" "}
                <a href="#" className="text-blue-600">
                  Learn more
                </a>
              </p>
            </div>
          </div>
          <Button>Add</Button>
        </div>
      </div>

      <div className="border rounded-md p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="public/lovable-uploads/b33615fe-4e0d-4dda-84a8-02660ae9a068.png"
              alt="Dropbox"
              className="w-10 h-10"
            />
            <div>
              <h3 className="font-semibold">Dropbox</h3>
              <p className="text-sm text-gray-600">
                For Zoomers Pro, Business or Enterprise.
              </p>
            </div>
          </div>
          <Button className="bg-blue-600">Upgrade</Button>
        </div>
      </div>

      <div className="border rounded-md p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="public/lovable-uploads/778ba9a7-4f18-42d8-9cb1-08ed32226bf2.png"
              alt="Google"
              className="w-10 h-10"
            />
            <div>
              <h3 className="font-semibold">Google</h3>
              <p className="text-sm text-gray-600">Calendar & Contacts</p>
              <p className="text-sm text-gray-600">12.siddhartha91@gmail.com</p>
            </div>
          </div>
          <Button
            variant="outline"
            className="bg-white text-red-600 border-red-600 hover:bg-red-50"
          >
            Disconnect
          </Button>
        </div>
      </div>

      <div className="border rounded-md p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="public/lovable-uploads/ff58ec8e-3514-4cb9-9828-4f74854cf1a1.png"
              alt="Microsoft"
              className="w-10 h-10"
            />
            <div>
              <h3 className="font-semibold">Microsoft</h3>
              <p className="text-sm text-gray-600">Calendar & Contacts</p>
              <p className="text-sm text-gray-600 mt-1">
                Play video recorded by Teams within Otter.{" "}
                <a href="#" className="text-blue-600">
                  Schedule a demo
                </a>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full font-medium ml-2">
                  Enterprise
                </span>
              </p>
            </div>
          </div>
          <Button>Add</Button>
        </div>
      </div>
    </div>
  );
};

export default AppsContent;
