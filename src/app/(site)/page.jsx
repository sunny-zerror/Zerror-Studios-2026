import About from "@/components/home/About";
import Clients from "@/components/home/Clients";
import Hero from "@/components/home/Hero";
import OurWork from "@/components/home/OurWork";
import Services from "@/components/home/Services";
import TicketEffect from "@/components/home/TicketEffect";

export default function HomePage() {
  return (
    <> 
      <Hero />
      <About />
      <OurWork />
      <Services />
      <Clients />
      <TicketEffect/>
    </>
  );
}
