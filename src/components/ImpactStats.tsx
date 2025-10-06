import { Factory, Recycle, Globe, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const ImpactStats = () => {
  const stats = [
    {
      icon: Factory,
      value: "143 kgCO2e",
      label: "Greenhouse Gases Emission Saved",
      description: "By purchasing our product and participating in our research since January 2022, you have helped us prevent this amount!",
    },
    {
      icon: Recycle,
      value: "170.8 kg",
      label: "Microplastics and Macroplastics Prevented from Oceans",
      description: "Conventional brands contain up to 90% plastics. These mostly...",
    },
    {
      icon: Globe,
      value: "11,089 Banana Stems upcycled",
      label: "Banana Stem Agro-waste prevented",
      description: "",
    },
    {
      icon: Users,
      value: "16,456 Local Women Empowered",
      label: "",
      description: "",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-primary/5 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,hsl(var(--primary)/0.15),transparent_50%)]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Impact</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Making a difference one pad at a time
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="group border-2 border-primary/20 bg-card/50 backdrop-blur-sm hover:shadow-glow transition-all duration-500 hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-10">
                <div className="flex items-start space-x-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <stat.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-3">
                      {stat.value}
                    </h3>
                    <p className="text-base text-foreground font-semibold mb-3">{stat.label}</p>
                    {stat.description && (
                      <p className="text-sm text-muted-foreground leading-relaxed">{stat.description}</p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
