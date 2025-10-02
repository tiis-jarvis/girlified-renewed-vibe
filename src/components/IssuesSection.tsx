import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import periodPoverty from "@/assets/period-poverty.jpg";
import oceanPlastic from "@/assets/ocean-plastic.jpg";
import sanitaryWaste from "@/assets/sanitary-waste.jpg";

export const IssuesSection = () => {
  const issues = [
    {
      title: "Period poverty",
      image: periodPoverty,
      description: "Globally, 2.3 billion people live without basic sanitation services; among these people are women and girls who lack access to safe and affordable sanitary products. Period poverty affects an estimated 500 million girls and women worldwide. And this is more acute in Sub-Saharan Africa, where we come from. In Nigeria, for example, 37% of menstruators cannot afford menstrual products, and, in many cases, this means that they cannot go to school or carry out their daily activities.",
    },
    {
      title: "Plastic Wastes in Oceans",
      image: oceanPlastic,
      description: "An estimated 8 million tonnes of plastic enters our oceans every year. There are 5.25 trillion pieces of plastic waste estimated to be in our oceans. 269,000 tonnes float, 4 billion microfibers per km² dwell below the surface.",
    },
    {
      title: "Sanitary Pads Waste",
      image: sanitaryWaste,
      description: "90% of conventional pads are made of plastics. The average person uses and throws away 200kg of menstrual products in their lifetime. These sanitary pads takes an estimated time of up to 500 years to degrade.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {issues.map((issue, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-glow transition-all hover:-translate-y-1 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={issue.image}
                  alt={issue.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-foreground">{issue.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{issue.description}</p>
                <Button
                  variant="link"
                  className="text-primary p-0 h-auto font-semibold group"
                >
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
