"use client";

import Image from "next/image";

export default function Security() {
  return (
    <>
      <h2 className="sm:text-xl">
        <b>Introduction</b>
      </h2>
      <Image
        src="/images/security.png"
        width={1000}
        height={600}
        className="w-full h-[250px] sm:h-[370px]"
        alt="whitepaper"
      />
      <div className="flex gap-y-3 flex-wrap w-full justify-start items-start">
        <p className="text-justify leading-6">
          The Icing (ICING) cryptocurrency is designed to empower the vibrant
          Cakkie community—a social media platform dedicated to bakers and cake
          enthusiasts. By leveraging the Solana Blockchain, ICING serves as a
          versatile utility token, facilitating seamless transactions, tipping,
          and job proposals within the ecosystem.
        </p>
      </div>
    </>
  );
}
