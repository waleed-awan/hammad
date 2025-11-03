import Footer from "@/components/footer";
import Testimonials from "@/components/testimonial";
import HeroSection from "@/components/hero";
import ServicesSection from "@/components/services";
import BookingForm from "@/components/form";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <BookingForm/>
      <ServicesSection />
      <Testimonials/>
      <Footer/>
    </div>
  );
}
