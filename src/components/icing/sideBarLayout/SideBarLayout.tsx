"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib";
import { pageNavigation } from "@/utils/utils";
import Image from "next/image";
import { Button } from "@/components";
import { CgMenuLeft } from "react-icons/cg";
import { IoIosArrowRoundBack } from "react-icons/io";
import { navLinks } from "@/constants/constant";

export const Container = ({ children }: { children: React.ReactNode }) => {
  const [isNav, setNav] = useState(false);
  const pathname = usePathname();

  const navigation = useMemo(() => {
    return pageNavigation(pathname);
  }, [pathname]);

  function onClose() {
    setNav((nav) => !nav);
  }

  return (
    <>
      <div
        className={`w-full  right-0 sm:right-[16px] z-50 fixed bg-white border-b border-gray-200  flex justify-between items-center `}
      >
        <div className="px-4 justify-between   w-full flex items-center">
          <div className="flex items-center gap-x-2">
            <div className="w-fit sm:w-[150px] lg:w-[250px] py-1 flex items-center justify-center">
              <Image
                src="/images/icing.png"
                alt="icing"
                width={300}
                height={300}
                className="w-[100px]  h-[60px] object-contain"
              />
            </div>
           
          </div>
          <Button
              type="button"
              onClick={onClose}
              className="block xl:hidden  h-10  border rounded-md bg-none"
            >
              <CgMenuLeft className="text-xl  sm:text-[22px] text-zinc-600" />
            </Button>
        </div>
      </div>

      <div
        className={cn(
          "xl:w-[calc(100%-250px)]  min-[1280px]:float-right px-2 sm:px-6 pt-[5rem] pb-14 sm:pt-24 "
        )}
      >
        <div className="flex flex-col items-start justify-start gap-y-2 sm:gap-y-3">
          {children}

          <div
            className={cn(
              "w-full grid grid-cols-1 mt-6 sm:mt-10 sm:grid-cols-2 gap-4",
              navigation?.length === 1 && "sm:grid-cols-1"
            )}
          >
            {navigation.map(({ name, link, page }, index) => (
              <Link
                href={link ? link : "/"}
                key={index}
                className={cn(
                  "w-full bg-[#EEEEEE] rounded-lg p-6 flex items-center justify-between",
                  page !== "Next" && "flex-row-reverse"
                )}
              >
                <div
                  className={cn(
                    "flex flex-col items-start justify-start",
                    page !== "Next" && "justify-end items-end"
                  )}
                >
                  <p className="text-[10px] capitalize sm:text-xs">{page}</p>
                  <p className="font-semibold capitalize text-cakkie">{name}</p>
                </div>
                <IoIosArrowRoundBack
                  size={23}
                  className={cn(
                    "text-cakkie ",
                    page === "Next" && "rotate-180"
                  )}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <SideNavs isNav={isNav} close={onClose} />
    </>
  );
};

function SideNavs({ close, isNav }: { close: () => void; isNav: boolean }) {
  const pathname = usePathname();

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        close();
      }}
      className={cn(
        `fixed z-[70] bottom-0 top-0  sm:top-[4.6rem] pl-2 bg-white left-0 h-full sm:h-[92vh] modal swipeInLeft`,
        isNav
          ? "w-full bg-white/50  min-[1280px]:w-[250px]"
          : "max-[1280px]:hidden w-[250px] "
      )}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="  flex flex-col  border-r bg-white relative overflow-y-auto items-center h-full w-[250px] cursor-pointer   text-mobile"
      >
        <div className=" bg-white p-3 h-fit mt-2 w-full">
          <div className="flex   flex-col mb-10 items-center w-full justify-center">
            <ul className="flex flex-col gap-y-1 items-start justify-start w-full">
              {navLinks.map(({ link, name }) => {
                return (
                  <li key={name} className="w-full">
                    <Link
                      href={link}
                      className={cn(
                        "px-3 py-2 flex  rounded-md  items-center  w-full",
                        pathname === String(link) &&
                          "font-medium text-cakkie bg-gray-200"
                      )}
                    >
                      <span>{name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="absolute bottom-10 px-4 flex inset-x-0 w-full items-center justify-center">
          <Link
            href={"/"}
            className="w-full bg-[#EEEEEE] rounded-lg p-4 flex items-center justify-between"
          >
            <div className="flex flex-col items-start justify-start">
              <p className="text-[10px] capitalize sm:text-xs">Visit</p>
              <p className="font-semibold capitalize text-cakkie">Cakkie</p>
            </div>
            <IoIosArrowRoundBack size={23} className="text-cakkie rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  );
}
