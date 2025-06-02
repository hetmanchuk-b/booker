import {AuthNavbar} from "@/app/(auth)/_components/auth-navbar";
import {Footer} from "@/app/(home)/_components/footer";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({children}: AuthLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <AuthNavbar />
      <main className="grow p-4 flex flex-col items-center justify-center bg-neutral-200">{children}</main>
      <Footer />
    </div>
  );
};

export default AuthLayout;