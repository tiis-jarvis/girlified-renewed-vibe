import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { FeaturedSection } from "@/components/FeaturedSection";
import { WhyChoose } from "@/components/WhyChoose";
import { JourneySection } from "@/components/JourneySection";
import { IssuesSection } from "@/components/IssuesSection";
import { ImpactStats } from "@/components/ImpactStats";
import { Testimonials } from "@/components/Testimonials";
import { Partners } from "@/components/Partners";
import { Newsletter } from "@/components/Newsletter";
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
        <IssuesSection />
        <ImpactStats />
        <Testimonials />
        <Partners />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
