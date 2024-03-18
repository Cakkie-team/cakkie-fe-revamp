import { Footer } from "../footer/Footer";
import {
  About,
  AboutIcing,
  Catalog,
  ContactUs,
  Hero,
  HowtoOrder,
  TopNav,
} from "./_components";

export default function Landing() {
  return (
    <div className="w-full flex flex-col items-center">
    <div className="md:w-[1600px] self-center">
      <TopNav />
      <Hero />
      <Catalog />
      <About />
      <AboutIcing />
      <HowtoOrder />
      <ContactUs />
      <Footer />
    </div>
    </div>
  );
}
