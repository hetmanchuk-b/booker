import {signIn, signOut} from "@/auth";
import {Button} from "@/components/ui/button";
import {Icons} from "@/components/common/icons";

export const SignIn = (
  {provider, ...rest}: {provider?: string} & React.ComponentPropsWithRef<typeof Button>
) => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn(provider);
      }}
    >
      <Button
        type="submit"
        variant='secondary'
        className="px-7 xl:px-12 rounded-none bg-white hover:bg-emerald-400 transition-colors text-lg hover:text-white"
        {...rest}
      >
        Sign In With Google <Icons.google/>
      </Button>
    </form>
  )
}

export const SignOut = (
  props: React.ComponentPropsWithRef<typeof Button>
) => {
  return (
    <form
      action={async () => {
        "use server"
        await signOut()
      }}
    >
      <Button type="submit" variant='ghost' {...props}>Sign Out</Button>
    </form>
  )
}