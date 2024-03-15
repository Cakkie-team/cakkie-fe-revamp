"use client";

import Image from "next/image";

export default function Vision() {
  return (
    <>
      <h2 className="sm:text-xl">
        <b>Vision and Mision</b>
      </h2>
      <Image
        src="/images/vision.png"
        width={1000}
        height={600}
        className="w-full h-[250px] sm:h-[370px]"
        alt="whitepaper"
      />
      <div className="flex gap-y-3 flex-wrap w-full justify-start items-start">
        <p className="font-semibold">Vision</p>
        <p className="text-justify leading-6">
          Icing is a versatile utility token built on the Solana blockchain,
          specifically designed to cater to the needs of users within the Cakkie
          ecosystem.
        </p>
      </div>
      <div className="flex gap-y-3 flex-wrap w-full justify-start items-start">
        <p className="font-semibold">Mision</p>
        <p className="text-justify leading-6">
          Icing is a versatile utility token built on the Solana blockchain,
          specifically designed to cater to the needs of users within the Cakkie
          ecosystem.
        </p>
      </div>
    </>
  );
}
