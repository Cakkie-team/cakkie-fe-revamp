"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { WaitListModal } from "./WaitListModal";

export function Hero() {
  const [isShowModal, setShowModal] = useState(false);

  function onClose() {
    setShowModal((prev) => !prev);
  }
  return (
    <>
      <div className="w-full bg-[url('/images/hero.webp')] bg-cover relative h-72 sm:h-[550px] 2xl:h-[680px]">
        <div className="w-full sm:w-[80vw] h-full items-start justify-center px-4 sm:px-8 text-gray-100  flex flex-col gap-y-4 sm:gap-y-6">
          <div className="w-full flex flex-col items-start justify-start">
            <h1 className="font-bold hero animate-pulse italic playfair text-4xl md:text-7xl 2xl:text-8xl">
              Welcome to Cakkie
            </h1>
            <h3 className="font-semibold playfair italic text-xl sm:text-3xl md:text-4xl">
              Unleash the Sweet Sensation
            </h3>
          </div>
          <p className="flex flex-wrap items-start font-medium max-w-lg  text-[#FFF5DC] text-sm sm:text-base md:text-lg">
            Step into a realm where cake enthusiasts and businesses converge,
            indulging in the exquisite world of cakes and confectionery
            craftsmanship.
          </p>
          <div className="flex items-center gap-x-2">
          <Link href={"https://play.google.com/store/apps/details?id=com.cakkie&pcampaignid=web_share"} target="blank" className="">
            <Image
              src="/svg/googleplay.svg"
              width={300}
              height={200}
              alt="ggl"
              className="h-12 w-[100px] md:w-fit md:h-fit"
            />
          </Link>
          <Link href={"/"}>
            <Image
              src="/svg/apple.svg"
              width={300}
              height={200}
              alt="appl"
              className="h-12 w-[100px] md:w-fit md:h-fit"
            />
          </Link>
          </div>
        </div>
      </div>
      {isShowModal && <WaitListModal close={onClose} />}
    </>
  );
}
