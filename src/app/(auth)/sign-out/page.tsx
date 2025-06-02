import {SignOut} from "@/components/common/auth-components";
import {siteConfig} from "@/config/site";

const SignOutPage = () => {
  return (
    <div className="w-full">
      <div className="mb-4 text-center space-y-2">
        <h1 className="text-2xl font-bold">Sign Out from {siteConfig.name}</h1>
      </div>
      <div className="flex flex-col gap-4 items-center justify-center">
        <SignOut/>
      </div>
    </div>
  );
};

export default SignOutPage;