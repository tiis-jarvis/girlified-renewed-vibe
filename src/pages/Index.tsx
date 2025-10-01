import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { FeaturedSection } from "@/components/FeaturedSection";
import { WhyChoose } from "@/components/WhyChoose";
import { JourneySection } from "@/components/JourneySection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <FeaturedSection />
        <WhyChoose />
        <JourneySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
