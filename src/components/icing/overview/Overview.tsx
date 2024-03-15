"use client";

import Image from "next/image";

export default function Overview() {
  return (
    <>
      <h2 className="sm:text-xl">
        <b>Token Overview</b>
      </h2>
      <Image
        src="/images/token.png"
        width={1000}
        height={600}
        className="w-full h-[250px] sm:h-[370px]"
        alt="whitepaper"
      />
      <div className="flex gap-y-3 flex-wrap w-full justify-start items-start">
        <p className="">
          {" "}
          Icing has a fixed total supply of 1 billion tokens. The distribution
          of tokens is as follows:
        </p>
        <ul className="flex flex-col w-full gap-y-2 pl-4 items-start list-disc">
          <li>Initial Token Sale (ITS): 40%</li>
          <li>Team and Advisors: 20%</li>
          <li>Reserve: 15%</li>
          <li>Community Development: 15%</li>
          <li>Marketing: 10%</li>
        </ul>
      </div>
    </>
  );
}
