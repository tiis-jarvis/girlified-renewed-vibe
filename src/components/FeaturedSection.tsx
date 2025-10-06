import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";
import featuredVideo from "@/assets/featured-video.jpg";

export const FeaturedSection = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-muted/50 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.1),transparent_50%)]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <Card className="max-w-5xl mx-auto border-2 border-primary/20 shadow-glow animate-fade-in bg-card/80 backdrop-blur-sm">
          <CardContent className="p-10 md:p-16">
            <div className="text-center space-y-8">
              <div className="inline-block mb-4">
                <span className="text-sm font-semibold text-primary bg-primary/10 px-6 py-2 rounded-full border border-primary/20">
                  Media Feature
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-foreground">
                We got <span className="bg-gradient-primary bg-clip-text text-transparent">featured!</span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Our work, featured by Deutsche Welle (DW), where our co-founder, William
                Oghenekevwe Emadago, discussed our core mission at the heart of Girlified.
              </p>

              {/* Video Thumbnail */}
              <div className="relative group cursor-pointer rounded-3xl overflow-hidden mt-10 shadow-xl">
                <img
                  src={featuredVideo}
                  alt="DW Feature Video"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent flex items-center justify-center group-hover:from-black/40 transition-all duration-500">
                  <div className="w-24 h-24 rounded-full bg-gradient-primary flex items-center justify-center group-hover:scale-125 transition-all duration-500 shadow-glow">
                    <Play className="w-12 h-12 text-white ml-2 transition-transform duration-300" fill="white" />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
