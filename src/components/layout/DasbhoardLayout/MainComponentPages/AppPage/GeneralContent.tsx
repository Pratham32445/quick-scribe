import { ChevronRight, Info } from "lucide-react";
import { Avatar } from "../../../../ui/avatar";
import { Separator } from "../../../../ui/separator";
import { Button } from "../../../../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../ui/select";
const GeneralContent = () => {
  return (
    <div>
      {/* Profile Section */}
      <div className="bg-white rounded-md shadow-sm border p-6 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Profile</h2>
          <Button variant="outline" size="sm">
            Edit
          </Button>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex flex-col items-center">
            <Avatar className="h-20 w-20">
              <img src="https://github.com/shadcn.png" alt="Profile" />
            </Avatar>
            <span className="mt-2 font-semibold">Siddhartha Nandan</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 flex-1">
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p>12.siddhartha91@gmail.com</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Password</p>
              <p>••••••••••</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Department</p>
              <p>IT</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Role</p>
              <p className="text-blue-600">Individual Contributor</p>
            </div>
          </div>
        </div>
      </div>

      {/* Language Section */}
      <div className="border rounded-md mb-4">
        <div className="grid grid-cols-3 p-4 items-center">
          <div>
            <h3 className="font-semibold">Language</h3>
          </div>
          <div className="col-span-2 flex items-center">
            <span className="text-sm mr-2">
              Default language for your conversations
            </span>
            <Info className="h-4 w-4 text-gray-400" />
            <div className="ml-auto">
              <Select defaultValue="English (US)">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="English (US)">English (US)</SelectItem>
                  <SelectItem value="English (UK)">English (UK)</SelectItem>
                  <SelectItem value="Spanish">Spanish</SelectItem>
                  <SelectItem value="French">French</SelectItem>
                  <SelectItem value="German">German</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <Separator />

        <div className="grid grid-cols-3 p-4 items-center">
          <div>
            <h3 className="font-semibold">Manage vocabulary</h3>
          </div>
          <div className="col-span-2 flex items-center">
            <span className="text-sm">
              Names of people, and custom vocabulary
            </span>
            <ChevronRight className="w-5 h-5 ml-auto" />
          </div>
        </div>
        <Separator />

        <div className="grid grid-cols-3 p-4 items-center">
          <div>
            <h3 className="font-semibold">Refer & earn</h3>
          </div>
          <div className="col-span-2 flex items-center">
            <span className="text-sm">
              Gain 1 month Pro Lite™ to your friends by inviting them to Otter
            </span>
            <ChevronRight className="w-5 h-5 ml-auto" />
          </div>
        </div>
        <Separator />

        <div className="grid grid-cols-3 p-4 items-center">
          <div>
            <h3 className="font-semibold">Tutorials</h3>
          </div>
          <div className="col-span-2 flex items-center">
            <span className="text-sm">
              Learn more about how to use Otter like a Pro
            </span>
            <ChevronRight className="w-5 h-5 ml-auto" />
          </div>
        </div>
        <Separator />

        <div className="grid grid-cols-3 p-4 items-center">
          <div>
            <h3 className="font-semibold">Help Center</h3>
          </div>
          <div className="col-span-2 flex items-center">
            <span className="text-sm">Frequently asked questions</span>
            <ChevronRight className="w-5 h-5 ml-auto" />
          </div>
        </div>
        <Separator />

        <div className="grid grid-cols-3 p-4 items-center">
          <div>
            <h3 className="font-semibold">Delete account</h3>
          </div>
          <div className="col-span-2 flex items-center">
            <span className="text-sm">
              Delete your account and all account data
            </span>
            <ChevronRight className="w-5 h-5 ml-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralContent;
