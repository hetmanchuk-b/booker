import {Sheet, SheetContent, SheetHeader, SheetTitle} from "@/components/ui/sheet";
import {ScrollArea} from "@/components/ui/scroll-area";
import Link from "next/link";

interface NavbarItem {
  href: string;
  children: React.ReactNode;
}

interface NavbarSidebarProps {
  items: NavbarItem[];
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export const NavbarSidebar = ({items, isOpen, onOpenChange}: NavbarSidebarProps) => {
  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent
        side='left'
        className="p-0 transition-none"
      >
        <SheetHeader className="p-4 border-b">
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <ScrollArea className="flex flex-col overflow-auto h-full pb-2">
          {items.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              onClick={() => onOpenChange(false)}
              className="bg-transparent rounded-none text-left p-4 text-black border-0 flex items-center text-base font-medium w-full"
            >
              {item.children}
            </Link>
          ))}

          <div className="border-t">
            {/*{session?.user ? (*/}
            {/*  <div className="flex flex-col justify-center gap-2 pt-2">*/}
            {/*    <p className="text-center">*/}
            {/*      Hello, <b className="font-semibold">{session.user.name}</b>*/}
            {/*    </p>*/}
            {/*    <Button*/}
            {/*      onClick={() => {*/}
            {/*        onOpenChange(false);*/}
            {/*        signOut();*/}
            {/*      }}*/}
            {/*      className="bg-transparent rounded-none text-left p-4 text-black border-0 flex items-center text-base font-medium w-full"*/}
            {/*    >*/}
            {/*      Log out*/}
            {/*    </Button>*/}
            {/*  </div>*/}
            {/*) : (*/}
            {/*  <Button*/}
            {/*    onClick={() => {*/}
            {/*      onOpenChange(false)*/}
            {/*      signIn('google')*/}
            {/*    }}*/}
            {/*    className="bg-transparent rounded-none text-left p-4 text-black border-0 flex items-center text-base font-medium w-full"*/}
            {/*  >*/}
            {/*    Log in*/}
            {/*  </Button>*/}
            {/*)}*/}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};