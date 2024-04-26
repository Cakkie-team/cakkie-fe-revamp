"use client";

import Image from "next/image";

export default function Vision() {
  return (
    <>
      <h2 className="text-desktop font-semibold sm:text-xl">
        Vision and Mision
      </h2>
      <Image
        src="/images/vision.png"
        width={2000}
        height={800}
        className="w-full h-[250px] sm:h-[370px] 2xl:h-[450px]"
        alt="whitepaper"
      />
      <div className="flex gap-y-3 flex-wrap w-full justify-start items-start">
        <p className="font-semibold">Vision: </p>
        <p className="text-justify leading-6">
        We envision a future where the Cakkie ecosystem thrives on the foundation of Icing, serving as a catalyst for growth, collaboration, and empowerment. By leveraging the efficiency and scalability of the Ton blockchain, we aim to establish Icing as the go-to token for users, offering unparalleled utility, security, and accessibility.
        </p>
      </div>
      <div className="flex gap-y-3 flex-wrap w-full justify-start items-start">
        <p className="font-semibold">Mision: </p>
        <p className="text-justify leading-6">
        To empower users within the Cakkie ecosystem by providing a versatile utility token, Icing, built on the Ton blockchain. Our mission is to facilitate seamless transactions, foster community engagement, and enhance user experiences through innovative solutions.
        </p>
      </div>
    </>
  );
}
