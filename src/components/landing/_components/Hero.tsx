"use client";

import { Button } from "@/components";
import { useState } from "react";
import { WaitListModal } from "./WaitListModal";

export function Hero() {
  const [isShowModal, setShowModal] = useState(false);

  function onClose() {
    setShowModal((prev) => !prev);
  }
  return (
    <>
      <div className="w-full bg-[url('/images/hero.webp')] relative h-72 sm:h-[550px] ">
        <div className="w-full sm:w-[80vh] h-full items-start justify-center px-4 sm:px-8 text-gray-100  flex flex-col gap-y-4 sm:gap-y-6">
          <div className="w-full flex flex-col items-start justify-start">
            <h1 className="font-bold hero animate-pulse italic playfair text-4xl sm:text-6xl md:text-8xl">
              Welcome to Cakkie
            </h1>
            <h3 className="font-semibold playfair italic text-xl sm:text-3xl md:text-4xl">
              Unleash the Sweet Sensation
            </h3>
          </div>
          <p className="w-full flex flex-wrap items-start font-medium  text-[#FFF5DC] text-sm sm:text-base md:text-lg">
            Step into a realm where cake enthusiasts and businesses converge,
            indulging in the exquisite world of cakes and confectionery
            craftsmanship.
          </p>
          <Button
            onClick={onClose}
            className="text-[#FFF5DC] px-10 font-medium h-12 sm:h-14 bg-cakkie"
          >
            Join the Waitlist
          </Button>
        </div>
      </div>
      {isShowModal && <WaitListModal close={onClose} />}
    </>
  );
}
