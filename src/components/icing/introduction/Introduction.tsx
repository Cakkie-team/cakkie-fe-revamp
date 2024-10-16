"use client";

import Image from "next/image";

export default function Introduction() {
  return (
    <>
     <h2 className="text-desktop font-semibold sm:text-xl">
        Introduction
      </h2>
      <Image
        src="/images/intro.png"
        width={2000}
        height={800}
        className="w-full h-[250px] sm:h-[370px] 2xl:h-[450px]"
        alt="whitepaper"
      />
      <div className="flex gap-y-3 flex-wrap w-full justify-start items-start">
        <p className="text-justify leading-6">
          Cakkie, the leading social media platform for bakers and cake
          enthusiasts, has introduced Icing as its native utility token to
          enhance user experience and foster community engagement. Icing is a
          digital asset built on the TON blockchain, providing users with
          fast, secure, and cost-effective transactions. This whitepaper
          presents the tokenomics, roadmap, and use cases of Icing, showcasing
          its integral role in powering the Cakkie platform.
        </p>
      </div>
    </>
  );
}
