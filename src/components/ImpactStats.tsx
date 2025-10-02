import { Factory, Recycle, Globe, Users } from "lucide-react";

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
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-primary/20 to-primary/10 p-8 rounded-lg hover:shadow-glow transition-all hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 rounded-full bg-primary/30 flex items-center justify-center flex-shrink-0">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-sm text-foreground/80 font-medium mb-2">{stat.label}</p>
                  {stat.description && (
                    <p className="text-sm text-muted-foreground">{stat.description}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
