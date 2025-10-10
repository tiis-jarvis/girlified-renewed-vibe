import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";
import featuredVideo from "@/assets/featured-video.jpg";

export const FeaturedSection = () => {
  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Partnered with <span className="bg-gradient-primary bg-clip-text text-transparent">Swarovski Foundation</span>, Featured by <span className="bg-gradient-primary bg-clip-text text-transparent">BBC</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Desktop Image */}
          <div className="hidden md:block relative group cursor-pointer rounded-3xl overflow-hidden shadow-glow animate-scale-in">
            <img
              src={featuredVideo}
              alt="BBC Feature - Desktop"
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          </div>

          {/* Mobile Image */}
          <div className="md:hidden relative group cursor-pointer rounded-3xl overflow-hidden shadow-glow animate-scale-in">
            <img
              src={featuredVideo}
              alt="BBC Feature - Mobile"
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
