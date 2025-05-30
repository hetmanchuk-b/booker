"use client";

import {Inter} from "next/font/google";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useState} from "react";
import {cn} from "@/lib/utils";
import {Button, buttonVariants} from "@/components/ui/button";
import {NavbarSidebar} from "@/app/(home)/_components/navbar-sidebar";
import { Icons } from "@/components/common/icons";

const inter = Inter({
  subsets: ['latin'],
  weight: ['700']
});

interface NavbarItemProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

const NavbarItem = ({href, children, isActive}: NavbarItemProps) => {
  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({variant: 'outline'}),
        'bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent px-3.5 text-lg',
        isActive && 'bg-black text-white hover:bg-black hover:text-white'
      )}
    >
      {children}
    </Link>
  )
}

const navbarItems = [
  {href: "/", children: 'Home'},
  {href: "/about", children: 'About'},
  {href: "/features", children: 'Features'},
  {href: "/pricing", children: 'Pricing'},
  {href: "/contact", children: 'Contact'},
]

export const Navbar = () => {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <nav className="pl-6 h-20 flex border-b justify-between font-medium bg-white">
      <Link href='/' className="flex items-center">
        <span className={cn(inter.className, 'text-3xl md:text-5xl font-semibold tracking-tighter')}>BookIt</span>
      </Link>

      <NavbarSidebar
        items={navbarItems}
        isOpen={isSidebarOpen}
        onOpenChange={setIsSidebarOpen}
      />

      <div className="flex items-center gap-4 hidden lg:flex">
        {navbarItems.map((item) => (
          <NavbarItem
            href={item.href}
            key={item.href}
            isActive={pathname === item.href}
          >
            {item.children}
          </NavbarItem>
        ))}
      </div>

      <div className="hidden lg:flex">
        <Link
          href='/sign-in'
          className={cn(
            buttonVariants({variant: 'secondary'}),
            'border-l border-t-0 border-b-0 border-r-0 px-7 xl:px-12 h-full rounded-none bg-white hover:bg-emerald-400 transition-colors text-lg hover:text-white'
          )}
        >
          Sign In
        </Link>
        <Link
          href='/sign-up'
          className={cn(
            buttonVariants({variant: 'secondary'}),
            'border-l border-t-0 border-b-0 border-r-0 px-7 xl:px-12 h-full rounded-none bg-black text-white hover:bg-emerald-400 transition-colors text-lg'
          )}
        >
          Sign Up
        </Link>
      </div>

      <div className="flex lg:hidden items-center justify-center pr-6">
        <Button
          variant={'ghost'}
          className="size-12 border-transparent"
          onClick={() => setIsSidebarOpen(true)}
        >
          <Icons.menu className="size-10" />
          <span className="sr-only">Menu</span>
        </Button>
      </div>
    </nav>
  );
};