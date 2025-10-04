import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Heart, Shield, Leaf, Brain, Bell, Database, Lock } from "lucide-react";
import smartPadHero from "@/assets/smart-pad-hero.jpg";
import smartFeatures from "@/assets/smart-features.jpg";

const Products = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Advanced machine learning algorithms analyze your menstrual health data in real-time"
    },
    {
      icon: Shield,
      title: "Medical-Grade Detection",
      description: "Science-backed technology validated alongside leading researchers"
    },
    {
      icon: Bell,
      title: "Early Warning System",
      description: "Get notified about potential health concerns before they become serious"
    },
    {
      icon: Lock,
      title: "Privacy First",
      description: "Your health data is encrypted and completely private"
    },
    {
      icon: Leaf,
      title: "100% Eco-Friendly",
      description: "Biodegradable materials that protect both you and the planet"
    },
    {
      icon: Database,
      title: "Comprehensive Reports",
      description: "Detailed insights you can share with your healthcare provider"
    }
  ];

  const conditions = [
    {
      title: "Endometriosis",
      description: "Non-invasive screening through inflammatory markers and genetic material analysis",
      benefits: "Easier alternative to laparoscopy procedures",
      color: "bg-pink-500/10 border-pink-500/20"
    },
    {
      title: "Endometrial & Cervical Cancer",
      description: "Early detection through DNA mutations and tumor-derived biomarkers",
      benefits: "Potentially catch cancer-specific patterns early",
      color: "bg-purple-500/10 border-purple-500/20"
    },
    {
      title: "PCOS & Hormonal Imbalances",
      description: "Hormone profiles and immune markers help characterize inflammation",
      benefits: "Better understanding of your hormonal health",
      color: "bg-blue-500/10 border-blue-500/20"
    }
  ];

  const advantages = [
    "Non-invasive, pain-free, and accessible",
    "Specific to the reproductive tract",
    "Better reflects localized uterine conditions",
    "Continuous monitoring during your cycle",
    "Results you can understand and act on",
    "Shareable reports for your doctor"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={smartPadHero} 
            alt="Girlified Smart Pad" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <Badge className="mb-4 bg-gradient-primary text-white border-0">Revolutionary Technology</Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Introducing Girlified Smart Pads
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 leading-relaxed">
              Your period is more than a cycle — it's a window into your health
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Over 50% of female fertility issues and gynecological cancers can be prevented if caught early. 
              The Girlified Smart Pad transforms menstrual fluid into actionable insights through a non-invasive, 
              comfortable, and discreet method.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow text-lg px-8">
                Pre-Order Now
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-2">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Science-Backed Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4">Scientifically Validated</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-foreground">Science-</span>
              <span className="bg-gradient-primary bg-clip-text text-transparent">BACKED</span>
            </h2>
            <h3 className="text-3xl font-semibold text-primary mb-6">Human-Centered</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="animate-fade-in">
              <img 
                src={smartFeatures} 
                alt="Smart Features" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
            
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-3xl font-bold mb-4">Why Menstrual Blood <span className="text-primary">STANDS OUT</span></h3>
              <p className="text-muted-foreground leading-relaxed">
                Menstrual blood isn't just blood, it's a complex mixture of:
              </p>
              <ul className="space-y-3">
                {[
                  "Venous blood",
                  "Endometrial cells (from the uterine lining)",
                  "Cervical and vaginal secretions",
                  "Immune cells",
                  "Molecular biomarkers (proteins, DNA, RNA, metabolites)"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground leading-relaxed pt-4">
                This makes it a rich source of localized biological data about the female reproductive system. 
                We're developing our platform alongside leading researchers, ensuring scientific rigor while 
                respecting real-world variability in flow, cycle phases, and biomarker profiles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Smart Features for <span className="text-primary">Your Health</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Cutting-edge technology meets comfort and privacy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Can It Detect */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              🧬 What Can Menstrual Blood <span className="text-primary">Help Detect?</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {conditions.map((condition, index) => (
              <Card key={index} className={`border-2 ${condition.color} hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in`}>
                <CardHeader>
                  <CardTitle className="text-2xl">{condition.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{condition.description}</p>
                  <div className="pt-4 border-t">
                    <p className="font-semibold text-primary flex items-start gap-2">
                      <Heart className="w-5 h-5 mt-1 flex-shrink-0" />
                      {condition.benefits}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center animate-fade-in">
              Advantages Over Traditional <span className="text-primary">Blood Samples</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-all duration-300 animate-fade-in">
                  <div className="w-6 h-6 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-lg">{advantage}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-pink-500/10 to-purple-500/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your <span className="text-primary">Menstrual Health?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join the revolution in women's health. Pre-order your Girlified Smart Pad today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow text-lg px-8">
                Pre-Order Now
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-2">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
