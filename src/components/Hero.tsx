import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://cdn.pixabay.com/video/2021/08/19/85599-593192726_large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="text-sm font-semibold text-primary bg-primary/10 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/30 uppercase tracking-wide">
                On A Mission To Restore Women's Dignity
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              Girlified <span className="bg-gradient-primary bg-clip-text text-transparent">Sanitary Pads</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Experience maximum comfort with eco-friendly sanitary pads made from banana fibers.
              Join us in creating a sustainable future while empowering women.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105 text-lg px-10 py-6"
              >
                Shop Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 text-lg px-10 py-6"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-scale-in hidden md:block">
            <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-3xl rounded-full animate-pulse"></div>
            <div className="relative rounded-3xl overflow-hidden border-4 border-primary/20 shadow-glow">
              <img
                src={heroImage}
                alt="Happy woman with Girlified sanitary pads"
                className="w-full h-auto object-cover transition-all duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-52 h-52 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
    </section>
  );
};
