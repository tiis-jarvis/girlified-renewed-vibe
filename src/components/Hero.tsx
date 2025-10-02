import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  return (
    <section className="relative bg-gradient-hero overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            <p className="text-primary font-semibold uppercase tracking-wide text-sm">
              On A Mission To Restore Women's Dignity and Increase Gender Equity While Reducing
              Plastics From Pads
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Girlified Sanitary Pads
            </h1>
            <p className="text-lg text-muted-foreground">
              Experience maximum comfort with eco-friendly sanitary pads made from banana fibers.
              Join us in creating a sustainable future while empowering women.
            </p>
            <Button
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105 text-lg px-8"
            >
              Shop Now
            </Button>
          </div>

          {/* Right Image */}
          <div className="relative animate-scale-in">
            <div className="relative rounded-3xl overflow-hidden border-4 border-primary/20 shadow-glow">
              <img
                src={heroImage}
                alt="Happy woman with Girlified sanitary pads"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
    </section>
  );
};
