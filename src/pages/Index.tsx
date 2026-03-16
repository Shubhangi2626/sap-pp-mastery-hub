import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBelt from "@/components/TrustBelt";
import WhyLearnSection from "@/components/WhyLearnSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import CurriculumSection from "@/components/CurriculumSection";
import TrainerSection from "@/components/TrainerSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TrustBelt />
      <WhyLearnSection />
      <WhyChooseSection />
      <CurriculumSection />
      <TrainerSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
