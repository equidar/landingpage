
import MainLayout from "@/components/layout/MainLayout";
import HeroSection from "@/components/home/HeroSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import BenefitsSection from "@/components/home/BenefitsSection";
import WaitlistSection from "@/components/home/WaitlistSection";

const Index = () => {
  return (
    <MainLayout>
      <HeroSection />
      <HowItWorksSection />
      <BenefitsSection />
      <WaitlistSection />
    </MainLayout>
  );
};

export default Index;
