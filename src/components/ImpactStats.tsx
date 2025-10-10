import { Droplet, Users, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const ImpactStats = () => {
  const stats = [
    {
      icon: Droplet,
      number: "500K+",
      label: "Women served monthly",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Users,
      number: "25K+",
      label: "People impacted daily",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: MapPin,
      number: "50+",
      label: "Communities reached",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-muted/20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="animate-fade-in">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop"
              alt="Women empowered"
              className="rounded-3xl shadow-glow w-full h-auto object-cover"
            />
          </div>
          {/* Second Image */}
          <div className="space-y-8 animate-scale-in"
            style={{ animationDelay: '0.2s' }}
          >
            <img
              src="https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&h=600&fit=crop"
              alt="Impact illustration"
              className="rounded-3xl shadow-glow w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="group border-0 shadow-lg hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-scale-in bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-10 text-center">
                <h3 className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-primary bg-clip-text text-transparent">
                  {stat.number}
                </h3>
                <p className="text-muted-foreground text-lg font-medium mb-6">
                  {stat.label}
                </p>
                <div className={`inline-flex p-3 rounded-full bg-gradient-to-br ${stat.color}`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
