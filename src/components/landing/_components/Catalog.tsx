"use client";

import { cn } from "@/lib";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components";

export function Catalog() {
  const [active, setActive] = useState(1);
  const catalogs = [
    { id: 1, name: "Popular" },
    { id: 2, name: "Special Cakes" },
    { id: 3, name: "Anniversary Cakes" },
    { id: 4, name: "Birthday Cakes" },
    { id: 5, name: "Wedding Cakes" },
    { id: 6, name: "Celebration Cakes" },
  ];
  return (
    <div className="w-full hidden bg-[#FFF5D4] py-8 sm:py-12 bg-[url('/svg/cake.svg')]">
      <div className="container w-full  mx-auto">
        <h2 className="font-semibold text-cakkie my-4 text-center text-xl sm:text-2xl">
          Catalog
        </h2>
        <div className="flex items-center justify-center gap-x-4 sm:gap-x-8">
          {catalogs.map(({ id, name }) => (
            <button
              onClick={() => setActive(id)}
              className={cn(
                "font-medium",
                active === id && "font-semibold text-cakkie"
              )}
              key={id}
            >
              {name}
            </button>
          ))}
        </div>
        <div className="w-full flex mt-4 sm:mt-8 flex-col">
          <div className="w-full grid grid-cols-2 gap-6 sm:grid-cols-3 xl:grid-cols-4">
            {[1, 2, 3, 4].map((_) => (
              <div
                key={_}
                className="w-full flex flex-col gap-y-2 items-start justify-start"
              >
                <Image
                  src="/images/stepcake.png"
                  alt="cake"
                  width={500}
                  height={500}
                  className="rounded-md w-full h-44 sm:h-60"
                />
                <p className="text-xs sm:text-mobile">Brown Cake</p>

                <div className="space-y-1">
                  <p className="font-semibold text-cakkie">NGN 3,000</p>
                  <p className="text-xs sm:text-mobile text-cakkie line-through">
                    NGN 2,000
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Button className="text-[#FFF5DC] w-[120px] bg-cakkie self-end mt-4 font-medium">
            See All
          </Button>
        </div>
      </div>
    </div>
  );
}
