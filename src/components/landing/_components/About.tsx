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
          Lörem ipsum krolig kase i dessa, teletes av pera. Tjejkött paravalens:
          eurofisat. Kronissade triderade teraplastisk teledirtad, tetrasm.
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
              description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut"
            />

            <DescriptionWidget
              Icon={QualityCakeIcon}
              title="Affordable Cakes"
              description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut"
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
              description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut"
            />

            <DescriptionWidget
              Icon={CustomerCareIcon}
              className="md:justify-start md:items-start md:text-start"
              title="Customer Care"
              description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut"
            />
          </div>
        </div>
      </div>
      <div className="container mt-10 w-full flex flex-col items-center  mx-auto">
        <h1 className="text-xl playfair font-semibold italic text-cakkie my-4 sm:text-3xl">
          One Simple Platform
        </h1>
        <p className="font-medium leading-6 w-full sm:max-w-[600px] text-center">
          Lörem ipsum krolig kase i dessa, teletes av pera. Tjejkött paravalens:
          eurofisat. Kronissade triderade teraplastisk teledirtad, tetrasm.
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
              description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut"
            />

            <DescriptionWidget
              Icon={SharedIcon}
              title="Content Sharing"
              description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut"
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
              description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut"
            />

            <DescriptionWidget
              Icon={SecureIcon}
              className="md:justify-start md:items-start md:text-start"
              title="Highly Secured"
              description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-[600px] w-full  flex flex-col items-center justify-center gap-y-3 sm:gap-y-6">
        <h1 className="text-3xl font-semibold text-cakkie">Join Other Cake Designers</h1>
        <p className="font-medium leading-6 w-full sm:w-[70%] text-center">
          Lörem ipsum krolig kase i dessa, teletes av pera. Tjejkött paravalens:
          eurofisat. Kronissade triderade teraplastisk teledirtad, tetrasm.
        </p>
        <div className="flex items-center gap-x-2 sm:gap-x-4">
        <Link href={"/"} className="">
            <Image
              src="/svg/googleplay.svg"
              width={300}
              height={200}
              alt="ggl"
              className="h-12 w-[100px] md:w-fit md:h-fit"
            />
          </Link>
          <Link href={"/"}>
            <Image
              src="/svg/apple.svg"
              width={300}
              height={200}
              alt="appl"
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
