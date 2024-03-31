"use client";

import { Button } from "@/components";
import { cn } from "@/lib";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { MdClose } from "react-icons/md";

export function TopNav() {
  const pathname = usePathname();
  const [isMobileSideBar, setMobileSideBar] = useState(false);

  function onClose() {
    setMobileSideBar((prev) => !prev);
  }

  const links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "How to Order",
      link: "#order",
    },
    {
      name: "Contact Us",
      link: "#contact-us",
    },
  ];
  return (
    <>
      <header className="w-full flex py-3 px-3 z-[100] backdrop-blur sticky top-0 inset-x-0 sm:px-6 items-center justify-between ">
        <Link href="/">
          <Image
            src="./svg/logo.svg"
            alt="logo"
            width={200}
            height={200}
            className="w-fit h-fit"
          />
        </Link>

        <nav className="hidden sm:flex items-center gap-x-4">
          {links.map(({ name, link }) => (
            <div>
              <Link
                className={cn("", pathname === link && "font-semibold")}
                href={link}
              >
                {name}
              </Link>
            </div>
          ))}
        </nav>
        <Button
          onClick={onClose}
          className="block sm:hidden w-fit h-fit text-cakkie px-0"
        >
          <CgMenuRight className="text-2xl" />
        </Button>
      </header>
      {isMobileSideBar && (
        <MobileSideNav links={links} pathname={pathname} close={onClose} />
      )}
    </>
  );
}

function MobileSideNav({
  links,
  close,
  pathname,
}: {
  links: { name: string; link: string }[];
  pathname: string;
  close: () => void;
}) {
  return (
    <div
      role="button"
      onClick={close}
      className="w-full h-full fixed inset-0 backdrop-blur z-[300]"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="absolute modal swipeIn top-0 right-0 w-[200px] h-fit gap-y-3 bg-[#FFF5D4] py-6 flex flex-col items-start justify-start "
      >
        <Button
          onClick={close}
          className="w-fit self-end h-fit px-0 mx-3 text-cakkie"
        >
          <MdClose size={24} />
        </Button>
        {links.map(({ name, link }) => (
          <div className="w-full">
            <Link
              onClick={close}
              className={cn(
                "w-full px-3 text-cakkie py-2 ",
                pathname === link && "font-semibold"
              )}
              href={link}
            >
              {name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
