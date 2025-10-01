import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";
import featuredVideo from "@/assets/featured-video.jpg";

export const FeaturedSection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto border-primary/20 shadow-glow animate-fade-in">
          <CardContent className="p-8 md:p-12">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                We got featured!
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our work, featured by Deutsche Welle (DW), where our co-founder, William
                Oghenekevwe Emadago, discussed our core mission at the heart of Girlified.
              </p>

              {/* Video Thumbnail */}
              <div className="relative group cursor-pointer rounded-2xl overflow-hidden mt-8">
                <img
                  src={featuredVideo}
                  alt="DW Feature Video"
                  className="w-full h-auto object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                  <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all">
                    <Play className="w-10 h-10 text-white ml-1" fill="white" />
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
