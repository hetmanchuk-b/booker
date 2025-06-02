import {siteConfig} from "@/config/site";
import {SignInGoogle} from "@/components/common/sign-in-google";

const SignUpPage = () => {
  return (
    <div className="w-full">
      <div className="mb-4 text-center space-y-2">
        <h1 className="text-2xl font-bold">Sign Up to {siteConfig.name}</h1>
      </div>
      <div className="flex flex-col gap-4 items-center justify-center">
        <SignInGoogle />
      </div>
    </div>
  );
};

export default SignUpPage;