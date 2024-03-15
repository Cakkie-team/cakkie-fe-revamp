"use client";

import Image from "next/image";

export default function Cases() {
  return (
    <>
      <h2 className="text-desktop font-semibold sm:text-xl">
        Use Cases
      </h2>
      <Image
        src="/images/case.png"
        width={1000}
        height={600}
        className="w-full h-[250px] sm:h-[370px]"
        alt="case"
      />

      <ol className="flex flex-col w-full gap-y-4  items-start list-decimal">
        <li>
          <span className="font-semibold">
            Purchasing Cakes and Cake-related Items:
          </span>{" "}
          Users can use Icing tokens to buy cakes, baking ingredients, tools,
          and other cake-related items within the Cakkie marketplace.
        </li>
        <li>
          <span className="font-semibold">Tipping:</span> Show appreciation to
          fellow bakers by tipping them with Icing tokens for sharing their
          recipes, tutorials, or creative cake designs.
        </li>
        <li>
          <span className="font-semibold">Submitting Job Proposals:</span>{" "}
          Freelance bakers can submit job proposals and offer their services in
          exchange for Icing tokens.
        </li>
        <li>
          <span className="font-semibold">Contracting Cake Deliveries:</span>{" "}
          Users can use Icing tokens to contract cake deliveries for special
          occasions or events.
        </li>
      </ol>
    </>
  );
}

/**
 

 

 


 */
