"use client";

import Image from "next/image";
import { Button } from "@/components";
import { useRouter } from "next/navigation";

export function AboutIcing() {
  const router = useRouter();
  return (
    <div className="w-full sm:px-10 flex flex-col lg:flex-row gap-5 justify-start items-start lg:items-center  px-4 py-8 sm:py-12 bg-[#FFF5D4]">
      <div className="w-full h-full relative max-w-lg xl:max-w-xl 2xl:max-w-2xl flex flex-col items-start justify-start gap-y-10">
        <Image
          src="/images/reo.png"
          alt="reo"
          className="absolute inset-y-0 h-full w-fit "
          width={700}
          height={700}
        />
        <h1 className="font-semibold relative z-30 text-xl leading-10 2xl:leading-[4rem] md:text-5xl 2xl:text-6xl">
          Earn and Spend with <span className="text-cakkie">Cakkie Icing</span>{" "}
          and also boost your connect with it
        </h1>
        <Button
          onClick={() => router.push("/whitepaper")}
          className="font-medium w-fit z-30 relative px-8 sm:px-12 text-[#FFF5DC] bg-cakkie rounded-md h-12 sm:h-14"
        >
          Learn More
        </Button>
      </div>

      <Image
        src="/images/chocolate.png"
        alt="chocolate"
        className="w-full h-full object-contain"
        width={800}
        height={800}
      />
    </div>
  );
}
