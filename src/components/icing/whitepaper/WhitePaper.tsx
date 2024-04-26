"use client";

import Image from "next/image";

export default function WhitePaper() {
  return (
    <>
     <h2 className="text-desktop  sm:text-xl">
        <span className="font-semibold">WhitePaper:</span> Icing - The sweet utility token on TON blockchain
      </h2>
      <Image
        src="/images/whitepaper.png"
        width={2000}
        height={800}
        className="w-full h-[250px] sm:h-[370px] 2xl:h-[450px]"
        alt="whitepaper"
      />
      <div className="flex gap-y-3 flex-wrap w-full justify-start items-start">
        <p className="font-semibold">Abstract</p>
        <p className="text-justify leading-6">
          Icing is a versatile utility token built on the Ton blockchain,
          specifically designed to cater to the needs of users within the Cakkie
          ecosystem. Cakkie, a mobile application tailored for bakers and cake
          enthusiasts, integrates Icing as its native token to enhance user
          engagement, incentivize participation, and facilitate seamless
          transactions within the platform. This whitepaper outlines the
          tokenomics, roadmap, and use cases of Icing, highlighting its role in
          fostering community growth and driving value within the Cakkie
          ecosystem.
        </p>
      </div>
    </>
  );
}
