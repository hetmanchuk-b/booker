"use client"

import Link from "next/link";
import {cn} from "@/lib/utils";
import {Button, buttonVariants} from "@/components/ui/button";
import {usePathname} from "next/navigation";
import {useState} from "react";
import {Logo} from "@/components/common/logo";
import {NavbarSidebar} from "@/app/(home)/_components/navbar-sidebar";
import {Icons} from "@/components/common/icons";

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
];

export const Navigation = () => {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <Logo/>

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

      <div className="flex lg:hidden items-center justify-center pr-6">
        <Button
          variant={'ghost'}
          className="size-12 border-transparent"
          onClick={() => setIsSidebarOpen(true)}
        >
          <Icons.menu className="size-10"/>
          <span className="sr-only">Menu</span>
        </Button>
      </div>
    </>
  );
};