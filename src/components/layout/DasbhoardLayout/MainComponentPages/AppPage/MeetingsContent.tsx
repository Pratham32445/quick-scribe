import { Switch } from "../../../../ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../ui/select";

const MeetingsContent = () => {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-1">Sharing</h2>
        <p className="text-sm text-blue-600 hover:underline cursor-pointer">
          Learn more about sharing settings
        </p>
      </div>

      <div className="grid gap-8">
        <div className="grid grid-cols-3 items-center">
          <div>
            <h3 className="font-semibold mb-1">
              Default audience for shared notes
            </h3>
            <p className="text-sm text-gray-600">
              When recording a calendar event, automatically share the notes
              with your chosen audience.
            </p>
          </div>
          <div className="col-span-2">
            <Select defaultValue="all-event-guests">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select audience" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-event-guests">
                  All event guests
                </SelectItem>
                <SelectItem value="no-one">No one</SelectItem>
                <SelectItem value="specific-people">Specific people</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-3 items-center">
          <div>
            <h3 className="font-semibold mb-1">Default permission level</h3>
            <p className="text-sm text-gray-600">
              Change the permission level for specific meetings in your{" "}
              <span className="text-blue-600">Home calendar</span>.
            </p>
          </div>
          <div className="col-span-2">
            <Select defaultValue="collaborator">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select permission" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="collaborator">Collaborator</SelectItem>
                <SelectItem value="viewer">Viewer</SelectItem>
                <SelectItem value="commenter">Commenter</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-3 items-center">
          <div>
            <h3 className="font-semibold mb-1">Allow Collaborators to share</h3>
            <p className="text-sm text-gray-600">
              Change this for specific meetings in the Share popup.{" "}
              <span className="text-blue-600">Learn more</span>
            </p>
          </div>
          <div className="col-span-2 flex justify-end">
            <Switch defaultChecked />
          </div>
        </div>

        <div className="grid grid-cols-3 items-start mt-4">
          <div>
            <h3 className="font-semibold mb-1">Otter Notetaker</h3>
            <p className="text-sm text-gray-600">
              Ready to join your Zoom, Google Meet, and Microsoft Teams to
              record and transcribe automatically. Appears in meetings as
              Siddhartha's Notetaker (Otter.ai)
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 items-center">
          <div>
            <h3 className="font-semibold mb-1">Default auto-join settings</h3>
            <p className="text-sm text-gray-600">
              Turn off auto-join for specific meetings in your{" "}
              <span className="text-blue-600">Home calendar</span>
            </p>
          </div>
          <div className="col-span-2">
            <Select defaultValue="video-link">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select setting" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="video-link">
                  Meetings with a video link
                </SelectItem>
                <SelectItem value="all-meetings">All meetings</SelectItem>
                <SelectItem value="none">None</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-3 items-start">
          <div>
            <h3 className="font-semibold mb-1">OtterPilot chat messages</h3>
            <p className="text-sm text-gray-600">
              OtterPilot sends helpful messages in the virtual in-meeting chat
              bubble to all attendees to make meetings more effective.{" "}
              <span className="text-blue-600">Learn more</span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 items-center">
          <div>
            <h3 className="font-semibold mb-1">
              Send live transcript and summary
            </h3>
            <p className="text-sm text-gray-600">
              Send a link to the live summary and transcript when the meeting
              begins, and takeaways and action items before the meeting ends.
            </p>
          </div>
          <div className="col-span-2 flex justify-end">
            <Switch defaultChecked />
          </div>
        </div>

        <div className="grid grid-cols-3 items-center">
          <div>
            <h3 className="font-semibold mb-1">Send Otter Chat Q&A</h3>
            <p className="text-sm text-gray-600">
              Send questions and AI-generated answers from Otter Chat.
            </p>
          </div>
          <div className="col-span-2 flex justify-end">
            <Switch defaultChecked />
          </div>
        </div>

        <div className="grid grid-cols-3 items-center">
          <div>
            <h3 className="font-semibold mb-1">Send pre-recording emails</h3>
            <p className="text-sm text-gray-600">
              For all meetings OtterPilot is scheduled to join, notify all
              calendar event guests in advance about OtterPilot recording the
              meeting
            </p>
          </div>
          <div className="col-span-2 flex justify-end">
            <Switch />
          </div>
        </div>

        <div className="grid grid-cols-3 items-center">
          <div>
            <h3 className="font-semibold mb-1">Auto-capture meeting screens</h3>
            <p className="text-sm text-gray-600">
              OtterPilot will automatically capture shared content from
              meetings.
            </p>
          </div>
          <div className="col-span-2 flex justify-end">
            <Switch defaultChecked />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetingsContent;
