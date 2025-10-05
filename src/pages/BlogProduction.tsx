import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Newsletter } from "@/components/Newsletter";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Factory, TrendingUp, Leaf, Globe, Award, Target } from "lucide-react";

const BlogProduction = () => {
  const achievements = [
    {
      icon: Factory,
      stat: "30,000",
      label: "Pads Per Day",
      description: "Our new machine's daily production capacity"
    },
    {
      icon: TrendingUp,
      stat: "50x",
      label: "Output Increase",
      description: "Exponential scale from our current production"
    },
    {
      icon: Leaf,
      stat: "1,000+",
      label: "Tons of Plastic",
      description: "To be eliminated by end of 2025"
    },
    {
      icon: Globe,
      stat: "500M",
      label: "Women Affected",
      description: "By period poverty worldwide"
    }
  ];

  const milestones = [
    {
      title: "The OSV Fellowship",
      description: "After Oghenekevwe was granted the OSV fellowship in June 2023, we set out to find implementing partners who could build our designed machine."
    },
    {
      title: "Finding Partners in China",
      description: "After an extensive search, we connected with machine manufacturers in China who could bring our vision to life."
    },
    {
      title: "7 Weeks in China",
      description: "Oghenekevwe spent over 7 weeks working with Chinese contractors to customize our high-output automated sanitary napkin machine."
    },
    {
      title: "Machine Completion",
      description: "Successfully implemented our designs and brought the machine to life, capable of producing 30,000 sanitary napkins daily."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-block mb-4">
              <Badge variant="secondary" className="text-sm font-semibold px-4 py-2">
                Major Milestone
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              10 Million Sanitary Napkins
              <span className="block text-primary mt-2">Every Year Now Achievable</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Through innovation, dedication, and strategic partnerships, we've achieved a 50x increase 
              in production capacity—a game-changing milestone in our fight against period poverty.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-primary">Our Mission</h2>
                <p className="text-lg leading-relaxed mb-4">
                  Our goal as a company and as individuals is to put an end to <strong>period poverty</strong> that 
                  is affecting over 500 million women and girls around the world—a threat to their dignity and health. 
                  This problem is even worse in underdeveloped regions like Sub-Saharan Africa where we are based and 
                  is contributing to gender inequality.
                </p>
                <p className="text-lg leading-relaxed">
                  Through the support of the Government of Canada under the Afri-plastics Challenge, we were able to 
                  convert what was purely a research-based project at the University of Jos, Nigeria and under Naza 
                  Agape Foundation, to a full product that is changing the lives of women and girls in Africa today.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievement Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Key <span className="text-primary">Achievements</span>
            </h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="border-2 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                      <achievement.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">{achievement.stat}</div>
                    <div className="text-sm font-semibold mb-2">{achievement.label}</div>
                    <div className="text-xs text-muted-foreground">{achievement.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              The Journey to <span className="text-primary">10 Million</span>
            </h2>
            
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <Card key={index} className="border-2 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20 shadow-xl bg-gradient-to-br from-card to-primary/5">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Target className="w-8 h-8 text-primary" />
                  Environmental Impact
                </h2>
                <p className="text-lg leading-relaxed mb-4">
                  Girlified now has a machine capable of producing <strong className="text-primary">30,000 sanitary 
                  napkins every single day</strong>. Yes, you read that well. This is an exponential boost to the 
                  current state of our business and overall impact on local women and girls, their hygiene and overall 
                  well-being.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  As an environmentally conscious organisation, it is also a huge plus for the environment as our product 
                  incorporates <strong>biodegradable materials like banana stem fibre and natural cotton</strong> as a 
                  replacement to plastic-based materials used in conventional products.
                </p>
                <p className="text-lg leading-relaxed">
                  With these steps, we will be eliminating over <strong className="text-primary">1000 tons of plastic 
                  from sanitary napkins by the end of 2025</strong>.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Award className="w-8 h-8 text-primary" />
                  Ongoing Research & Future Goals
                </h2>
                <p className="text-lg leading-relaxed mb-4">
                  Our <strong>"fibre to fluff"</strong> research on banana pseudo-stems is currently ongoing and we 
                  will be making a publication on it before the year runs out.
                </p>
                <p className="text-lg leading-relaxed">
                  Our end goal is not just to end in making sanitary napkins but to use <strong className="text-primary">
                  banana stem fibre as a replacement for unsustainable and plastic-based materials</strong> in diapers, 
                  clothes and other non-woven products.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Us in This Journey
            </h2>
            <p className="text-xl leading-relaxed mb-8">
              Together, we can eradicate period poverty and reduce plastic pollution. 
              Be part of the movement that's changing lives and protecting our planet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-all duration-300 hover:scale-105">
                Learn More
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300">
                Get Involved
              </button>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default BlogProduction;