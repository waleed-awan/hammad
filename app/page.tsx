import Footer from "@/components/footer";
import Testimonials from "@/components/testimonial";
import HeroSection from "@/components/hero";
import ServicesSection from "@/components/services";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <Testimonials/>
      <Footer/>
    </div>
  );
}
