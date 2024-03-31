"use client";

import Image from "next/image";

export default function Tokenomics() {
  return (
    <>
     <h2 className="text-desktop font-semibold sm:text-xl">
        Tokenomics
      </h2>
      <Image
        src="/images/tokenomics.png"
        width={2000}
        height={800}
        className="w-full h-[250px] sm:h-[370px] 2xl:h-[450px]"
        alt="whitepaper"
      />
      <div className="flex gap-y-3 flex-wrap w-full justify-start items-start">
        <p className="font-semibold">Initial Distribution:</p>
        <ul className="flex flex-col w-full gap-y-2 pl-10 items-start list-disc">
          <li>25%: Community Airdrop and rewards</li>
          <li>5%: Seed Investment</li>
          <li>20%: Development Fund</li>
          <li>15%: Team and Advisors</li>
          <li>15%: Liquidity Pool</li>
          <li>10%: Marketing</li>
          <li>10%: Partnerships</li>
        </ul>
      </div>
      <div className="flex gap-y-3 flex-wrap w-full justify-start items-start">
        <p className="font-semibold">Staking Governance</p>
        <ul className="flex flex-col w-full gap-y-2 pl-10 items-start list-disc">
          <li>
            Users can stake ICING for rewards and participate in governance
            decisions.
          </li>
        </ul>
      </div>
      <div className="flex gap-y-3 flex-wrap w-full justify-start items-start">
        <p className="font-semibold">Burn Mechanism</p>
        <ul className="flex flex-col w-full gap-y-2 pl-10 items-start list-disc">
          <li>
            A percentage of transaction fees will be burned, reducing the total
            supply over time.
          </li>
        </ul>
      </div>
    </>
  );
}

