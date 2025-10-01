import { Card, CardContent } from "@/components/ui/card";
import journeyImage from "@/assets/journey-illustration.jpg";

export const JourneySection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-4 mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              The Journey From Banana Fibre To Sanitary Pad
            </h2>
          </div>

          <Card className="border-primary/20 shadow-glow animate-scale-in">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-8">
                <img
                  src={journeyImage}
                  alt="Journey from banana fiber to sanitary pad"
                  className="w-full h-auto rounded-xl"
                />
                <div className="space-y-4 text-center">
                  <p className="text-lg text-muted-foreground">
                    Plastic pollution is having a negative impact in our society today. We're
                    committed to creating sustainable alternatives that don't compromise on quality
                    or comfort.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Our innovative process transforms natural banana fibers into high-quality,
                    biodegradable sanitary pads that are gentle on your body and kind to the planet.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
