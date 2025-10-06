import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart, Users, Target, Eye, Award } from "lucide-react";
import heroImage from "@/assets/our-story-hero.jpg";
import passionImage from "@/assets/passion-section.jpg";
import team1 from "@/assets/testimonial-1.jpg";
import team2 from "@/assets/testimonial-2.jpg";

const OurStory = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="https://cdn.pixabay.com/video/2023/07/14/171416-844826682_large.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-background/90"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
              <div className="inline-block mb-6">
                <span className="text-sm font-semibold text-white bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">
                  Journey
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
                Our Story
              </h1>
              <p className="text-2xl md:text-3xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Creating sustainable solutions for menstrual health while protecting our planet
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
        </section>

        {/* Main Story Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 animate-fade-in">
                  <div className="space-y-4">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      The environmentally friendly Girlified sanitary pad decomposes fully in six months. 
                      Banana fiber, organic cotton, and cassava starch are the primary elements used to make our sanitary pads.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      As a result, we offer our clients and users a cost-effective, completely biodegradable, 
                      secure, cozy, and extremely absorbent product that does not become plastic trash and has 
                      the exclusive option to return packaging for cash backs. With the use of our sanitary pad, 
                      plastic pollution from sanitary pad use might be completely eliminated.
                    </p>
                  </div>
                </div>
                <div className="animate-scale-in">
                  <img 
                    src={heroImage} 
                    alt="Girlified team working together" 
                    className="rounded-2xl shadow-glow w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Built with Passion Section */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 animate-scale-in">
                  <img 
                    src={passionImage} 
                    alt="Natural materials used in Girlified products" 
                    className="rounded-2xl shadow-glow w-full h-auto"
                  />
                </div>
                <div className="order-1 md:order-2 space-y-6 animate-fade-in">
                  <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                    Built with Passion
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We are at a time where we have no option than solve our problems.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We pay attention to your wants and needs and understand your discomfort. 
                    We are here to make sure that the needs of people are central to everything 
                    we produce. We create things with you—not just for you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 animate-fade-in">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="space-y-4 animate-scale-in">
                <AccordionItem value="item-1" className="border rounded-lg px-6 border-primary/20">
                  <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                    What differentiates Girlified from other pad brands?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Girlified is an eco-friendly sanitary pad brand that uses banana fiber to replace 
                    the plastic layers of a conventional sanitary pad.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border rounded-lg px-6 border-primary/20">
                  <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                    Does Girlified feel different from other pads in terms of texture?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    We have modeled our pad to feel exactly and even better than conventional sanitary pads. 
                    The only amazing feeling you will get is that of not polluting the environment as much.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border rounded-lg px-6 border-primary/20">
                  <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                    Is Girlified a Nigerian brand?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes, Girlified is owned by Nigerians.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border rounded-lg px-6 border-primary/20">
                  <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                    How do I use a Girlified pad?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    You wear it the same way as a conventional pad. Peel from the wrapper and stick it in 
                    your underwear. Girlified gives you the choice of disposal whichever works best for you. 
                    Bin it or flush it – it is your choice.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border rounded-lg px-6 border-primary/20">
                  <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                    What sizes are available?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    We currently have one size of pad available: a winged regular-sized pad, that has 
                    medium-heavy absorbency. Soon we'll be expanding the range into long night pads and smaller liners.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center space-y-4 mb-16 animate-fade-in">
                <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                  Making it Possible
                </h2>
                <p className="text-xl text-muted-foreground">
                  Together with a team of innovators and market strategists, Girlified became possible.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-primary/20 hover:shadow-glow transition-all duration-300 animate-scale-in group">
                  <CardContent className="p-8">
                    <div className="space-y-4">
                      <img 
                        src={team1} 
                        alt="Nwagboso Prayer" 
                        className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-primary/20 group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="text-center">
                        <h3 className="text-2xl font-bold text-foreground">Nwagboso Prayer</h3>
                        <p className="text-primary font-semibold">Co-Founder, Girlified</p>
                      </div>
                      <p className="text-muted-foreground text-center">
                        As a girls and women advocate, I am very concerned about period poverty and the 
                        harmful impact plastics from sanitary pads have on our ecosystem and oceans. 
                        For that reason, we have manufactured Girlified to counter both plastic pollution 
                        and period poverty.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-primary/20 hover:shadow-glow transition-all duration-300 animate-scale-in group" style={{ animationDelay: "0.1s" }}>
                  <CardContent className="p-8">
                    <div className="space-y-4">
                      <img 
                        src={team2} 
                        alt="Oghenekevwe William" 
                        className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-primary/20 group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="text-center">
                        <h3 className="text-2xl font-bold text-foreground">Oghenekevwe William</h3>
                        <p className="text-primary font-semibold">Co-founder, Girlified</p>
                      </div>
                      <p className="text-muted-foreground text-center">
                        I am passionate about climate change and am an entrepreneur, who has put all my years 
                        of experience working with women and girls into developing eco-friendly sanitary pads. 
                        Girlified is rightly positioned to positively address the perennial issues of plastic 
                        pollution and period poverty.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto space-y-16">
              {/* Mission */}
              <Card className="border-primary/20 shadow-glow animate-fade-in">
                <CardContent className="p-8 md:p-12">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center">
                        <Target className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h2 className="text-3xl md:text-4xl font-bold text-foreground">Mission</h2>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        To empower women and girls through affordable and sustainable menstrual hygiene products, 
                        promoting their well-being, while simultaneously reducing plastic waste and pollution from 
                        disposable sanitary pads.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Vision */}
              <Card className="border-primary/20 shadow-glow animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <CardContent className="p-8 md:p-12">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center">
                        <Eye className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h2 className="text-3xl md:text-4xl font-bold text-foreground">Vision</h2>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        To become the leading sanitary pad brand in Africa that meets the most neglected hygiene 
                        needs of local women and girls while empowering them to reduce pollution and live their best lives.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Core Values */}
              <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Core Values</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="border-primary/20 hover:shadow-glow transition-all duration-300 hover:-translate-y-2 group">
                    <CardContent className="p-8 text-center space-y-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                        <Award className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">Dedication</h3>
                    </CardContent>
                  </Card>

                  <Card className="border-primary/20 hover:shadow-glow transition-all duration-300 hover:-translate-y-2 group">
                    <CardContent className="p-8 text-center space-y-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                        <Heart className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">Passion</h3>
                    </CardContent>
                  </Card>

                  <Card className="border-primary/20 hover:shadow-glow transition-all duration-300 hover:-translate-y-2 group">
                    <CardContent className="p-8 text-center space-y-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">Team Work</h3>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter with Quote */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="border-primary/20 shadow-glow animate-scale-in">
                <CardContent className="p-8 md:p-12 space-y-8">
                  <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                      Sign up to our newsletter!
                    </h2>
                    <blockquote className="text-lg italic text-muted-foreground border-l-4 border-primary pl-6 py-2">
                      "To all of you who choose to look the other way everyday because you seem more 
                      frightened of the changes that can prevent catastrophic climate change than the 
                      catastrophic climate change itself. Your silence is the worst of all"
                      <footer className="text-sm font-semibold text-primary mt-2">— Greta Thunberg</footer>
                    </blockquote>
                  </div>
                  <form className="flex flex-col sm:flex-row gap-4">
                    <Input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="flex-1"
                      required
                    />
                    <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105">
                      Subscribe
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OurStory;
