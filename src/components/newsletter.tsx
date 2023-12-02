import { Button, Input } from "@nextui-org/react";

export default function Newsletter() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold max-w-md text-center">
        Stay Updated With The Latest News
      </h1>
      <h3 className="text-sm mt-5">
        Subscribe to our newsletter for the latest updates, news, and promotions
      </h3>

      <div className="mt-5 flex gap-4">
        <Input placeholder="Enter your email" />
        <Button color="primary">Sign Up</Button>
      </div>
      <h3 className="text-xs mt-3">
        By clicking Sign Up, you confirm that you agree to our Terms and
        Conditions.
      </h3>
    </div>
  );
}
