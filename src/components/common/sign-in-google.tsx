import {Button} from "@/components/ui/button";
import {signIn} from "@/auth";
import { Icons } from "./icons";

export const SignInGoogle = () => {
  const handleSignOut = async () => {
    "use server";
    await signIn('google', {redirectTo: '/'});
  }
  return (
    <form
      action={handleSignOut}
    >
      <Button
        type="submit"
        variant='secondary'
        className="px-7 xl:px-12 rounded-none bg-white hover:bg-emerald-400 transition-colors text-lg hover:text-white"
      >
        Sign In With Google <Icons.google />
      </Button>
    </form>
  );
};