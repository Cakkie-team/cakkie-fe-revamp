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
    <div>
      <TopNav />
      <Hero />
      <Catalog />
      <About />
      <AboutIcing />
      <HowtoOrder />
      <ContactUs />
      <Footer />
    </div>
  );
}
