import { ChevronDown } from "lucide-react";
import { Button } from "../../../../ui/button";
import { Switch } from "../../../../ui/switch";

const PlanContent = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Otter Plans</h2>
        <a href="#" className="text-blue-600 font-medium">
          Otter for Education
        </a>
      </div>

      <div className="flex justify-end items-center gap-2 mb-4">
        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
          Save up to 17%
        </span>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Billed Monthly</span>
          <Switch defaultChecked />
          <span className="text-sm font-medium">Billed Annually</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="border rounded-lg p-6 bg-gray-50">
          <div className="mb-6">
            <h3 className="text-center font-medium text-sm mb-2">
              Individuals
            </h3>
            <h2 className="text-xl font-bold">Basic</h2>
            <p className="text-sm text-gray-600">Your current plan</p>
          </div>

          <div className="mb-6">
            <p className="font-bold">269 mins left</p>
            <p className="text-sm text-gray-600">Minutes reset in 24 days</p>
          </div>

          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span className="text-sm">
                AI meeting assistant records, transcribes and summarizes in real
                time
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span className="text-sm">
                Otter AI Chat: Chat live with Otter and teammates
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span className="text-sm">Add teammates to your workspace</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span className="text-sm">
                Auto-join MS Teams and Google Meet to automatically write and
                share notes
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span className="text-sm">
                300 monthly transcription minutes, 30 minutes per conversation,
                3 imports. 5 audio or video files/storage per user
              </span>
            </li>
          </ul>
        </div>

        <div className="border rounded-lg p-6">
          <div className="mb-6">
            <h3 className="text-center font-medium text-sm mb-2">
              Individuals
            </h3>
            <h2 className="text-xl font-bold">Pro</h2>
            <p className="text-sm text-gray-600">
              For individuals and small teams who need more minutes and features
            </p>
          </div>

          <div className="mb-6">
            <p className="font-bold text-lg">
              $8.33 USD{" "}
              <span className="text-sm font-normal text-gray-600">
                /user/month
              </span>
            </p>
            <p className="text-sm text-gray-600">billed annually</p>
          </div>

          <Button className="w-full mb-6">Buy Now</Button>

          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span className="text-sm">Everything in Basic +</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span className="text-sm">
                Enhanced team features: shared custom vocabulary and templates,
                auto-forward notes to teammates
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span className="text-sm">
                Advanced search, export, and playback
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span className="text-sm">
                Daily monthly transcription minutes: 90 minutes per
                conversation, 10 imports
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span className="text-sm">
                Import and transcribe 10* audio or video files per month
              </span>
            </li>
          </ul>

          <div className="text-center">
            <a href="#" className="text-sm text-blue-600">
              Student & Teacher Discount
            </a>
            <span className="text-gray-400 mx-2">•</span>
            <a href="#" className="text-sm text-blue-600">
              Have a promo code?
            </a>
          </div>
        </div>

        <div className="border rounded-lg p-6 relative">
          <div className="absolute top-0 right-0 bg-yellow-400 text-xs font-medium px-3 py-1 rounded-bl-lg rounded-tr-lg">
            Best value
          </div>

          <div className="mb-6">
            <h3 className="text-center font-medium text-sm mb-2">
              Organizations & Teams
            </h3>
            <h2 className="text-xl font-bold">Business</h2>
            <p className="text-sm text-gray-600">
              For small teams and organizations that need to share & collaborate
            </p>
          </div>

          <div className="mb-6">
            <p className="font-bold text-lg">
              $20 USD{" "}
              <span className="text-sm font-normal text-gray-600">
                /user/month
              </span>
            </p>
            <p className="text-sm text-gray-600">billed annually</p>
          </div>

          <Button className="w-full mb-6">Buy Now</Button>

          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span className="text-sm">Everything in Pro +</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span className="text-sm">
                Admin features: usage analytics, prioritized support
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span className="text-sm">
                Joins up to 3 concurrent virtual meetings to automatically write
                notes
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span className="text-sm">
                6000 monthly transcription minutes, 4 hours per conversation
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span className="text-sm">
                Import and transcribe unlimited* audio or video files per month
              </span>
            </li>
          </ul>
        </div>

        <div className="border rounded-lg p-6">
          <div className="mb-6">
            <h3 className="text-center font-medium text-sm mb-2">
              Organizations & Teams
            </h3>
            <h2 className="text-xl font-bold">Enterprise</h2>
            <p className="text-sm text-gray-600">
              For large organizations that need additional security, control,
              and support
            </p>
          </div>

          <Button variant="outline" className="w-full mb-6">
            Contact Sales
          </Button>

          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span className="text-sm">Everything in Business +</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span className="text-sm">Single Sign-On (SSO)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span className="text-sm">Configurable web deployment</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span className="text-sm">Domain Capture</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span className="text-sm">Advanced Tax Sales</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span className="text-sm">
                Advanced security and compliance controls
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center">
        <Button variant="outline" className="flex mx-auto items-center gap-1">
          View full detail plan comparison
          <ChevronDown className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default PlanContent;
