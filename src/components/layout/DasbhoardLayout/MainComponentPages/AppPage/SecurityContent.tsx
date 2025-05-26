import { Button } from "../../../../ui/button";

const SecurityContent = () => {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          Two-factor Authentication
        </h2>
        <p className="text-gray-600 mb-4">
          Add an additional layer of security by requiring a verification code
          in addition to your password whenever you sign in.
        </p>

        <div className="flex items-center justify-between">
          <p className="font-medium text-red-600">
            Two-factor authentication is turned off.
          </p>
          <Button className="bg-blue-600">Set up</Button>
        </div>
      </div>
    </div>
  );
};

export default SecurityContent;
