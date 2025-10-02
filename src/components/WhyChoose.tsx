import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Leaf, Heart, Shield } from "lucide-react";

export const WhyChoose = () => {
  const features = [
    {
      icon: Heart,
      title: "Maximum Comfort",
      description: "Soft, breathable materials that keep you comfortable all day long",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description: "Made from sustainable banana fibers, reducing plastic waste",
    },
    {
      icon: Shield,
      title: "All-Day Protection",
      description: "Excellent length and absorbency for worry-free protection",
    },
    {
      icon: CheckCircle2,
      title: "Quality Assured",
      description: "Rigorously tested to meet the highest standards",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Why Choose Girlified?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Are you tired of being discomforted by your favorite sanitary pad brand? We've got you
            covered with an exciting and very comfortable sanitary pad that keeps you assured while
            giving you the unique feeling of saving our planet from plastic waste.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-primary/20 hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-scale-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-primary flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <feature.icon className="w-8 h-8 text-white transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <blockquote className="text-2xl font-semibold text-primary mb-6 italic">
            "Maximum comfort, excellent length, protects all day long."
          </blockquote>
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-glow"
          >
            Read More About Us
          </Button>
        </div>
      </div>
    </section>
  );
};
