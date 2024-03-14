import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const socialLinks = [
    { link: "/", image: "/svg/instagram.svg" },
    { link: "/", image: "/svg/facebook.svg" },
    { link: "/", image: "/svg/linkedIn.svg" },
    { link: "/", image: "/svg/twitter.svg" },
  ];
  return (
    <footer className="w-full ">
      <div className="w-full text-[#FFF5DC] bg-cakkie grid grid-cols-1 py-4 px-4 md:px-8 lg:px-10 sm:py-6 md:grid-cols-3">
        <h1 className="font-semibold text-[#FFF5DC] text-7xl playfair hero italic">
          Cakkie
        </h1>

        <div className="flex flex-col items-start gap-y-2 justify-start">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-and-condition">Terms and Conditions</Link>
        </div>

        <div className="w-full flex flex-col gap-y-1 items-end justify-end">
          <p>Contact us</p>
          <div className="flex items-center gap-x-4 sm:gap-x-6">
            {socialLinks.map(({ link, image }) => (
              <Link key={image} href={link}>
                <Image
                  src={image}
                  alt="social"
                  className=" h-10- w-10 "
                  width={100}
                  height={100}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full  bg-[#FFF5D4] text-cakkie flex items-center justify-between py-4 px-4 md:px-8 lg:px-10">
        <div className="flex items-center gap-x-2">
          Copyright{" "}
          <span className="font-semibold">{new Date().getFullYear()}</span>
        </div>

        <p className="font-medium">All rights reserved</p>
      </div>
    </footer>
  );
}
