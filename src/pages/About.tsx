import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Newsletter } from "@/components/Newsletter";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Droplet, Recycle, Heart, Globe, TrendingUp } from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";
import productFeatures from "@/assets/product-features.jpg";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="https://cdn.pixabay.com/video/2019/09/07/26434-359349056_large.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-fade-in">
                <div className="inline-block">
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300 px-6 py-3 text-sm font-semibold">
                    About Girlified
                  </Badge>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  About <span className="bg-gradient-primary bg-clip-text text-transparent">Girlified</span> Sanitary Pad
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                  A revolutionary solution addressing period poverty and environmental sustainability through innovative, plant-based menstrual hygiene products.
                </p>
              </div>
              <div className="relative animate-fade-in hidden md:block" style={{ animationDelay: "200ms" }}>
                <div className="absolute -inset-4 bg-gradient-primary opacity-30 blur-3xl rounded-full animate-pulse" />
                <img
                  src={aboutHero}
                  alt="Girlified Sanitary Pads"
                  className="relative rounded-3xl shadow-glow w-full h-auto object-cover transition-all duration-500 hover:scale-105 border-4 border-primary/20"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="text-center space-y-4 animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Addressing Period Poverty and Menstrual Hygiene
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Globally, 2.3 billion people live without basic sanitation services, and among them are millions of women and girls who lack access to safe and affordable menstrual products. Period poverty affects an estimated 500 million menstruators worldwide, making it a critical issue, especially in Sub-Saharan Africa.
                </p>
              </div>

              <Card className="border-2 border-primary/20 shadow-glow transition-all duration-300 hover:-translate-y-2 animate-scale-in">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                      <Heart className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Our Impact in Nigeria</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        In Nigeria, 37% of women cannot afford menstrual products. This lack of access often means they are unable to attend school or carry out daily activities, perpetuating gender inequality and limiting opportunities for women and girls. Girlified was created to address this pressing social challenge by providing a cost-effective and sustainable solution to period poverty.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Product Features */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="order-2 md:order-1 animate-fade-in">
                <img
                  src={productFeatures}
                  alt="Banana fiber to eco-friendly pads"
                  className="rounded-2xl shadow-elegant w-full h-auto object-cover transition-all duration-500 hover:scale-105 hover:shadow-glow"
                />
              </div>
              <div className="order-1 md:order-2 space-y-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
                <h2 className="text-3xl md:text-4xl font-bold">
                  Why Choose Girlified?
                </h2>
                
                <div className="space-y-6">
                  <Card className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:scale-110 group-hover:bg-primary/30 transition-all duration-300">
                          <Droplet className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-2">Highly Absorbent</h3>
                          <p className="text-muted-foreground">
                            Upcycled banana fiber is three times more absorbent than traditional materials.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:scale-110 group-hover:bg-primary/30 transition-all duration-300">
                          <Leaf className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-2">Biodegradable</h3>
                          <p className="text-muted-foreground">
                            Unlike plastic-based SAP, which breaks down into harmful microplastics, our banana fibers and natural cotton decompose within six months.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:scale-110 group-hover:bg-primary/30 transition-all duration-300">
                          <Recycle className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-2">Eco-Friendly</h3>
                          <p className="text-muted-foreground">
                            Reducing plastic waste while providing safe and comfortable menstrual hygiene solutions.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Environmental Impact */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="text-center space-y-4 animate-fade-in">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                  Environmental Impact
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold">
                  Combating Plastic Pollution in Menstrual Products
                </h2>
              </div>

              <div className="space-y-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Conventional sanitary pads are made up of up to 90% plastic, significantly contributing to environmental pollution. According to the United Nations Environment Programme (UNEP), approximately 11 million tons of plastic waste enter our oceans annually.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A study by Natracare further reveals that a single 36 kg pack of sanitary pads contains the plastic equivalent of five plastic bags. The widespread use of plastic-based sanitary products worsens pollution, leading to long-term ecological damage.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-12">
                <Card className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-scale-in">
                  <CardContent className="p-8 text-center">
                    <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300">
                      <Globe className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">43%</h3>
                    <p className="text-muted-foreground">
                      of women and girls in Northern Nigeria lack access to affordable menstrual hygiene products
                    </p>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-scale-in" style={{ animationDelay: "100ms" }}>
                  <CardContent className="p-8 text-center">
                    <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300">
                      <Recycle className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">90%</h3>
                    <p className="text-muted-foreground">
                      of traditional sanitary napkins are made of plastic, harming marine life and ecosystems worldwide
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Sustainable Solution */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="text-center space-y-4 animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Introducing a Sustainable Solution
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Girlified is an innovative sanitary pad made from a research-backed combination of upcycled banana stem fiber and natural cotton, among other sustainable non-woven fabrics. These materials replace plastic-based Super Absorbent Polymers (SAP), which form the absorbent core of conventional sanitary napkins.
                </p>
              </div>

              <Card className="border-2 border-primary/20 shadow-glow transition-all duration-300 hover:-translate-y-2 animate-scale-in">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">Pioneering Innovation in Africa and Beyond</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Girlified is one of the pioneers in developing upcycled, plant-based fiber sanitary napkins, not only in Africa but globally. Our product seamlessly integrates cost-effectiveness, improved hygiene, and a drastic reduction in plastic usage.
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        Unlike conventional sanitary pads that rely heavily on SAP—a plastic-based material found in diapers and menstrual products—our pads replace SAP with upcycled banana stem fiber, offering an environmentally friendly and highly absorbent alternative.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold">
                Our Vision for the Future
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Our goal is to revolutionize menstrual hygiene by making sustainable sanitary pads accessible to millions of menstruators across Africa and beyond. By offering an eco-friendly and affordable alternative, we are not only improving menstrual health but also championing environmental sustainability.
                </p>
                <p className="text-xl font-semibold text-foreground">
                  At Girlified, we believe that no woman or girl should have to choose between their health and the environment.
                </p>
                <p>
                  Our work is paving the way for a future where menstrual hygiene is a right, not a privilege, and where sustainability is at the core of every solution.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Newsletter />
      </main>

      <Footer />
    </div>
  );
}
