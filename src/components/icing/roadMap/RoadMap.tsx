"use client";

import Image from "next/image";

export default function RoadMap() {
  return (
    <>
     <h2 className="text-desktop font-semibold sm:text-xl">
        RoadMap
      </h2>
      <Image
        src="/images/roadmap.png"
        width={2000}
        height={800}
        className="w-full h-[250px] sm:h-[370px] 2xl:h-[450px]"
        alt="whitepaper"
      />
      <div className="flex gap-y-3 mb-3 flex-wrap w-full justify-start items-start">
        <p className="font-semibold"> Pre-App Launch (Q1 2024):</p>
        <ol className="flex flex-col w-full gap-y-2 pl-10 items-start list-decimal">
          <li>
            Launch Cakkie mobile application to the community for initial
            engagement, point earning (convertible to Icing as airdrops), user
            farming, and testing.
          </li>
          <li>
            Gather feedback from the community to improve user experience and
            functionality.
          </li>
        </ol>
      </div>
      <div className="flex gap-y-3 mb-3 flex-wrap w-full justify-start items-start">
        <p className="font-semibold"> Token Presale and Launch (Q2 2024):</p>
        <ol className="flex flex-col w-full gap-y-2 pl-10 items-start list-decimal">
          <li>
            Conduct token presale to seed initial liquidity and community
            support.
          </li>
          <li>Launch Icing token on the Solana blockchain.</li>
          <li>
            Integrate Icing as the primary medium of exchange within the Cakkie
            platform.
          </li>
          <li>
            List Icing token on decentralized exchanges (DEXs) for broader
            accessibility.
          </li>
        </ol>
      </div>
      <div className="flex gap-y-3 mb-3 flex-wrap w-full justify-start items-start">
        <p className="font-semibold">Platform Expansion (Q3 2024):</p>
        <ol className="flex flex-col w-full gap-y-2 pl-10 items-start list-decimal">
          <li>
            Publicly launch Cakkie application, allowing users to access the
            platform and engage in social interactions, buying and selling
            cakes, and contracting cake-related jobs.
          </li>
          <li>
            Launch community engagement programs to increase user adoption and
            awareness.
          </li>
          <li>
            Forge strategic partnerships with baking supply companies, bakeries,
            and cake-related businesses to expand the use cases of Icing.
          </li>
        </ol>
      </div>
      <div className="flex gap-y-3 mb-3 flex-wrap w-full justify-start items-start">
        <p className="font-semibold">Enhancements and Scaling (Q4 2024):</p>
        <ol className="flex flex-col w-full gap-y-2 pl-10 items-start list-decimal">
          <li>
            Implement staking and governance features to incentivize token
            holders and empower the community.
          </li>
          <li>
            Introduce NFTs (Non-Fungible Tokens) for unique cake designs and
            collectibles, purchasable with Icing tokens.
          </li>

          <li>
            Develop mobile applications for seamless access to the platform.
          </li>
        </ol>
      </div>
    </>
  );
}
