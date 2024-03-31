import Image from "next/image";
import { Button } from "@/components";

export function HowtoOrder() {
  return (
    <div 
    id="order" 
    className="w-full sm:px-10 bg-[url('/svg/pinkbg.png')] bg-cover relative flex flex-col gap-5 lg:flex-row justify-start items-start lg:items-center px-4 py-8 sm:py-12 bg-white">
      <Image
        src="/images/pic.png"
        alt="pic"
        className="h-[40%] w-[40%]  object-contain"
        width={800}
        height={800}
      />
     <div className="w-full h-full relative max-w-3xl xl:max-w-3xl 2xl:max-w-4xl flex flex-col items-start justify-start gap-y-6">
  <h1 className="font-semibold text-3xl text-cakkie">How to Order</h1>
  <p className="leading-7">
    Ordering with Cakkie is as easy as pie (or should we say cake)! Follow these simple steps to sweet satisfaction and let us take care of the rest.
  </p>
  <ol className="pl-6 space-y-3">
    <li className=" items-start grid grid-cols-16">
      <span className="h-6 w-6 bg-cakkie text-white rounded-full flex items-center justify-center">1</span>
      <span className="col-span-15">Browse the Marketplace: Explore our vibrant marketplace filled with mouthwatering cakes and confectionery delights. Whether you're searching for a birthday cake, wedding centerpiece, or a sweet treat just because, Cakkie has something for everyone.</span>
    </li>
    <li className=" items-start grid grid-cols-16">
      <span className=" h-6 w-6 bg-cakkie text-white rounded-full flex items-center justify-center ">2</span>
      <span className="col-span-15">Find Your Perfect Cake: Narrow down your search by filtering options such as flavor, size, dietary preferences, and more. With a wide variety of cakes to choose from, you're sure to find the perfect match for your taste buds.</span>
    </li>
    <li className="grid grid-cols-16 items-start">
      <span className=" h-6 w-6 bg-cakkie text-white rounded-full flex items-center justify-center">3</span>
      <span className="col-span-15">Add to Cart: Once you've found the cake of your dreams, simply add it to your cart and proceed to checkout. Don't forget to double-check your order details to ensure everything is just right.</span>
    </li>
    <li className="grid grid-cols-16 items-start">
      <span className=" h-6 w-6 bg-cakkie text-white rounded-full flex items-center justify-center">4</span>
      <span className="col-span-15">Secure Payment: Complete your purchase with ease using our secure payment gateway. We accept a variety of payment methods to accommodate your preferences, ensuring a smooth and hassle-free transaction.</span>
    </li>
    <li className="grid grid-cols-16 items-start">
      <span className=" h-6 w-6 bg-cakkie text-white rounded-full flex items-center justify-center">5</span>
      <span className="col-span-15">Delivery Options: Choose your preferred delivery option to receive your cake at your doorstep. Whether you opt for standard delivery or expedited shipping, we'll ensure your cake arrives fresh and on time.</span>
    </li>
    <li className="grid grid-cols-16 items-start">
      <span className=" h-6 w-6 bg-cakkie text-white rounded-full flex items-center justify-center">6</span>
      <span className="col-span-15">Track Your Order: Sit back, relax, and track your order every step of the way. With real-time updates, you'll know exactly when your cake is out for delivery and when it's arrived safely at your door.</span>
    </li>
    <li className="grid grid-cols-16 items-start">
      <span className=" h-6 w-6 bg-cakkie text-white rounded-full flex items-center justify-center ">7</span>
      <span className="col-span-15">Indulge and Enjoy: Once your cake arrives, it's time to indulge and enjoy! Whether you're celebrating a special occasion or simply treating yourself, savor every delicious bite of your Cakkie cake.</span>
    </li>
  </ol>
  <Button className="ml-6 font-medium z-30 px-8 sm:px-12 relative text-[#FFF5DC] bg-cakkie rounded-md h-12 sm:h-14">
    Learn More
  </Button>
</div>
      <Image
        src="/images/smallcake.png"
        alt="small-cake"
        width={80}
        height={80}
        className="w-fit h-fit absolute object-contain right-3 bottom-0"
      />
    </div>
  );
}
