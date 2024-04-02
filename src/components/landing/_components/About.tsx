import {
  CreateStoreIcon,
  CustomerCareIcon,
  EarnIcon,
  HiredIcon,
  QualityCakeIcon,
  SecureIcon,
  SharedIcon,
  GooglePlay,
  Apple,
} from "@/constants/constant";
import Link from "next/link";
import { cn } from "@/lib";
import Image from "next/image";

export function About() {
  return (
    <div className="w-full bg-white px-4 py-8 sm:py-12 bg-[url('/images/buybg.png')]">
      <div className="container w-full flex flex-col items-center  mx-auto">
        <h1 className="text-xl playfair font-semibold italic text-cakkie my-4 sm:text-3xl">
          Buy & Sell Cakes
        </h1>
        <p className="font-medium leading-6 mb-2 w-full sm:max-w-[600px] text-center">
          Discover a bustling marketplace where cake enthusiasts and businesses alike can find the perfect sweet treat or showcase their baking talents.
        </p>

        <div className="w-full grid my-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center justify-center  xl:items-start h-full gap-4 md:gap-10 xl:gap-3">
          <div className="relative w-full mx-auto  col-span-full xl:hidden h-[550px]">
            <Image
              src="/images/exclusive.png"
              alt="exclusive"
              width={700}
              height={700}
              className="h-fit m-auto absolute  inset-0 w-fit"
            />
            <Image
              src="/images/iphone.png"
              alt="iphone"
              width={700}
              height={700}
              className="h-full m-auto absolute  inset-0 w-fit"
            />
          </div>

          <div className="flex w-full h-full flex-col items-center md:items-end gap-4 md:gap-10 xl:gap-0 justify-between">
            <DescriptionWidget
              Icon={QualityCakeIcon}
              title="Quality Cake Delivery"
              description="Enjoy hassle-free cake delivery with our trusted partners, ensuring your cakes arrive fresh and delectable, every time."
            />

            <DescriptionWidget
              Icon={QualityCakeIcon}
              title="Affordable Cakes"
              description="Indulge in luxury without breaking the bank with our wide selection of affordable cakes, catering to every budget and craving."
            />
          </div>

          <div className="relative hidden xl:block w-full h-[550px]">
            <Image
              src="/images/exclusive.png"
              alt="exclusive"
              width={700}
              height={700}
              className="h-fit m-auto absolute  inset-0 w-fit"
            />
            <Image
              src="/images/iphone.png"
              alt="iphone"
              width={700}
              height={700}
              className="h-full m-auto absolute  inset-0 w-fit"
            />
          </div>

          <div className="flex w-full h-full flex-col items-center md:items-start gap-4 md:gap-10 xl:gap-0 justify-between">
            <DescriptionWidget
              Icon={CreateStoreIcon}
              className="md:justify-start md:items-start md:text-start"
              title="Create your Store"
              description=" Show off your baking skills and turn your passion into profit by setting up your own online store on Cakkie."
            />

            <DescriptionWidget
              Icon={CustomerCareIcon}
              className="md:justify-start md:items-start md:text-start"
              title="Customer Care"
              description="Experience exceptional service with our dedicated customer care team, ready to assist you every step of the way."
            />
          </div>
        </div>
      </div>
      <div className="container mt-10 w-full flex flex-col items-center  mx-auto">
        <h1 className="text-xl playfair font-semibold italic text-cakkie my-4 sm:text-3xl">
          One Simple Platform
        </h1>
        <p className="font-medium leading-6 w-full sm:max-w-[600px] text-center">
          Everything you need, all in one place. From buying and selling cakes to connecting with fellow enthusiasts, Cakkie makes it easy.
        </p>

        <div className="w-full grid my-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center justify-center  xl:items-start h-full gap-4 md:gap-10 xl:gap-3">
          <div className="relative w-full mx-auto  col-span-full xl:hidden h-[550px]">
            <Image
              src="/images/exclusive.png"
              alt="exclusive"
              width={700}
              height={700}
              className="h-fit m-auto absolute  inset-0 w-fit"
            />
            <Image
              src="/images/iphone.png"
              alt="iphone"
              width={700}
              height={700}
              className="h-full m-auto absolute  inset-0 w-fit"
            />
          </div>
          <div className="flex w-full h-full flex-col items-center md:items-end gap-4 md:gap-10 xl:gap-0 justify-between">
            <DescriptionWidget
              Icon={HiredIcon}
              title="Get Hired"
              description="Explore exciting job opportunities in the baking industry through our dedicated job section, whether you're a seasoned pro or just starting out."
            />

            <DescriptionWidget
              Icon={SharedIcon}
              title="Content Sharing"
              description="Share your love for baking with the world through Cakkie's content sharing feature, inspiring and being inspired by others."
            />
          </div>

          <div className="relative w-full hidden xl:block h-[550px]">
            <Image
              src="/images/exclusive.png"
              alt="exclusive"
              width={700}
              height={700}
              className="h-fit m-auto absolute  inset-0 w-fit"
            />
            <Image
              src="/images/iphone.png"
              alt="iphone"
              width={700}
              height={700}
              className="h-full m-auto absolute  inset-0 w-fit"
            />
          </div>

          <div className="flex w-full h-full flex-col items-center md:items-start gap-4 md:gap-10 xl:gap-0 justify-between">
            <DescriptionWidget
              Icon={EarnIcon}
              className="md:justify-start md:items-start md:text-start"
              title="Earn More"
              description="Unlock your earning potential with Cakkie, offering endless opportunities to turn your passion into profit."
            />

            <DescriptionWidget
              Icon={SecureIcon}
              className="md:justify-start md:items-start md:text-start"
              title="Highly Secured"
              description="Rest easy knowing your transactions and interactions on Cakkie are highly secured, with robust privacy and security measures in place."
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-[600px] w-full  flex flex-col items-center justify-center gap-y-3 sm:gap-y-6">
        <h1 className="text-3xl font-semibold text-cakkie">Join Other Cake Designers</h1>
        <p className="font-medium leading-6 w-full sm:w-[70%] text-center">
          Connect and collaborate with fellow cake designers, sharing ideas and celebrating your love for baking together.
        </p>
        <div className="flex items-center gap-x-2 sm:gap-x-4">
          <Link href={"https://play.google.com/store/apps/details?id=com.cakkie&pcampaignid=web_share"} target="blank" className="">
            <Image
              src="/svg/googleplay.svg"
              width={300}
              height={200}
              alt="ggl"
              className="h-12 w-[100px] md:w-fit md:h-fit"
            />
          </Link>
        
        </div>
      </div>
    </div>
  );
}

function DescriptionWidget({
  Icon,
  title,
  description,
  className,
}: {
  Icon: () => React.JSX.Element;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col w-full justify-center items-center sm:w-[300px] md:justify-end md:items-end gap-y-3",
        className
      )}
    >
      <Icon />
      <h2 className="font-semibold text-base sm:text-xl">{title}</h2>
      <p
        className={cn(
          "text-center md:text-end flex flex-wrap md:justify-end md:items-end",
          className
        )}
      >
        {description}
      </p>
    </div>
  );
}
