import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Cpu, Database, FlaskConical } from "lucide-react";

export const WhyChoose = () => {
  const features = [
    {
      icon: Lightbulb,
      title: "INNOVATION",
      description: "Leveraging new technologies for sustainable menstrual hygiene solutions.",
    },
    {
      icon: Cpu,
      title: "TECHNOLOGY",
      description: "For efficient and eco-friendly product development.",
    },
    {
      icon: Database,
      title: "DATA DRIVEN",
      description: "An enterprise driven by valuable research and impact data.",
    },
    {
      icon: FlaskConical,
      title: "RESEARCH",
      description: "Driven by research-based approaches to women's health.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.05),transparent_50%)]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h3 className="text-lg font-semibold text-primary mb-4 tracking-wide">
            Why Choose Us |
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Girlified is driven by <span className="bg-gradient-primary bg-clip-text text-transparent">innovation</span> and centered on <span className="bg-gradient-primary bg-clip-text text-transparent">impact!</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group border-0 shadow-lg hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-scale-in bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 inline-flex p-4 rounded-2xl bg-primary/10">
                  <feature.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-4 text-foreground uppercase tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
