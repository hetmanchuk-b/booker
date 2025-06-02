import {cn} from "@/lib/utils";
import {siteConfig} from "@/config/site";
import Link from "next/link";
import {Inter} from "next/font/google";
import {Logo} from "@/components/common/logo";

export const AuthNavbar = () => {
  return (
    <div className="px-6 h-20 flex border-b justify-between font-medium bg-white">
      <Logo />

    </div>
  );
};