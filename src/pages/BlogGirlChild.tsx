import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Newsletter } from "@/components/Newsletter";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Leaf, BookOpen, Users } from "lucide-react";
import blogGirlChildHero from "@/assets/blog-girl-child-hero.jpg";

const BlogGirlChild = () => {
  const highlights = [
    {
      icon: BookOpen,
      title: "Menstrual Hygiene Education",
      description: "Interactive sessions on proper menstrual hygiene practices, debunking myths, and choosing the right sanitary products."
    },
    {
      icon: Leaf,
      title: "Environmental Awareness",
      description: "Education on tree planting, carbon emissions reduction, and adopting eco-friendly practices for a sustainable future."
    },
    {
      icon: Heart,
      title: "Eco-Friendly Pad Distribution",
      description: "Distributed sustainable sanitary pads to all 523 girls, ensuring access to safe, effective, and environmentally responsible products."
    },
    {
      icon: Users,
      title: "Empowerment for the Future",
      description: "Inspiring girls to become confident, informed, and eco-conscious leaders in their communities."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section with Animated Background */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://cdn.pixabay.com/video/2022/12/08/142523-779556056_large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/70 to-secondary/85"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 animate-fade-in">
              <Badge variant="secondary" className="text-sm font-semibold px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30">
                October 12, 2023
              </Badge>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 animate-fade-in leading-tight" style={{ animationDelay: '0.1s' }}>
              Empowering Girls on
              <span className="block mt-2">International Day of the Girl Child</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Our remarkable initiative that left 523 girls better informed, more confident, 
              and better equipped to embrace womanhood while nurturing a sustainable future.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Impact Stats */}
      <section className="py-24 bg-gradient-to-br from-background to-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.08),transparent_60%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="group border-2 border-primary/20 bg-card/60 backdrop-blur-sm hover:shadow-glow hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 text-center animate-scale-in overflow-hidden">
                <CardContent className="p-10 relative">
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                  <div className="text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform relative z-10">523</div>
                  <div className="text-lg font-semibold text-muted-foreground uppercase tracking-wide relative z-10">Girls Empowered</div>
                </CardContent>
              </Card>
              <Card className="group border-2 border-primary/20 bg-card/60 backdrop-blur-sm hover:shadow-glow hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 text-center animate-scale-in overflow-hidden" style={{ animationDelay: '0.1s' }}>
                <CardContent className="p-10 relative">
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                  <div className="text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform relative z-10">100%</div>
                  <div className="text-lg font-semibold text-muted-foreground uppercase tracking-wide relative z-10">Received Eco Pads</div>
                </CardContent>
              </Card>
              <Card className="group border-2 border-primary/20 bg-card/60 backdrop-blur-sm hover:shadow-glow hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 text-center animate-scale-in overflow-hidden" style={{ animationDelay: '0.2s' }}>
                <CardContent className="p-10 relative">
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                  <div className="text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform relative z-10">1</div>
                  <div className="text-lg font-semibold text-muted-foreground uppercase tracking-wide relative z-10">Day of Impact</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed text-center mb-12">
              As we celebrated the International Day of the Girl Child on October 11th, we took a significant 
              step towards empowering girls and nurturing a sustainable future. With our resolute commitment to 
              both menstrual hygiene and environmental sustainability, we organized an impactful event that left 
              523 girls better informed, more confident, and better equipped to embrace womanhood.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,hsl(var(--primary)/0.08),transparent_60%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
              Event <span className="text-primary">Highlights</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {highlights.map((highlight, index) => (
                <Card 
                  key={index} 
                  className="group border-2 border-primary/20 bg-card/80 backdrop-blur-sm hover:shadow-glow hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 animate-scale-in overflow-hidden" 
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-10 relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                    <div className="relative z-10">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:shadow-glow group-hover:scale-110 transition-all duration-300">
                        <highlight.icon className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{highlight.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{highlight.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Menstrual Hygiene Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20 shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <BookOpen className="w-8 h-8 text-primary" />
                  Menstrual Hygiene Education
                </h2>
                <p className="text-lg leading-relaxed mb-4">
                  The heart of our International Day of the Girl Child event was an interactive and enlightening 
                  session on menstrual hygiene and feminine health. We believe that every girl should have access 
                  to accurate information and the necessary resources to manage their menstrual health with confidence 
                  and dignity.
                </p>
                <p className="text-lg leading-relaxed">
                  Our team of experts addressed critical topics such as proper menstrual hygiene practices, debunking 
                  myths, and choosing the right sanitary products. It was an opportunity to have open and candid 
                  conversations, dispelling stigma, and ensuring that the girls left with the knowledge they need to 
                  take care of their well-being.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Environmental Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20 shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Leaf className="w-8 h-8 text-primary" />
                  Environmental Awareness
                </h2>
                <p className="text-lg leading-relaxed mb-4">
                  At Girlified, we understand that a brighter future for girls also involves safeguarding the environment. 
                  To address this, our event incorporated a dedicated session on environmental education and the importance 
                  of tree planting, championed by our co-founder, Emadago Oghenekevwe William, an environmental educator.
                </p>
                <p className="text-lg leading-relaxed">
                  We engaged the girls in an enlightening discussion about the significance of trees in reducing carbon 
                  emissions, improving air quality, and fostering a sustainable environment. We discussed the role they 
                  can play in nurturing the environment by planting trees, reducing waste, and adopting eco-friendly practices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Distribution Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 shadow-xl bg-gradient-to-br from-card to-primary/5">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Heart className="w-8 h-8 text-primary" />
                  Eco-Friendly Sanitary Pad Distribution
                </h2>
                <p className="text-lg leading-relaxed mb-4">
                  The highlight of our International Day of the Girl Child celebration was the distribution of our 
                  eco-friendly sanitary pads. Committed to our mission of providing affordable and sustainable menstrual 
                  solutions, we distributed our sanitary pads to all 523 girls in attendance.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  At Girlified, we are dedicated to providing a solution that supports girls during their menstruation 
                  while minimizing the environmental impact. Our sanitary pads are made with sustainable materials, 
                  minimizing waste and contributing to a healthier planet.
                </p>
                <p className="text-lg leading-relaxed">
                  We were overwhelmed with the enthusiasm and gratitude of the girls who received these pads, knowing 
                  that they now have a reliable and eco-friendly option for managing their menstrual health.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              A Brighter Future for Girls and the Environment
            </h2>
            <p className="text-xl leading-relaxed mb-8">
              Our International Day of the Girl Child event was not just a celebration but a powerful step towards 
              a brighter future. By empowering girls with knowledge about menstrual hygiene, feminine health, and 
              environmental sustainability, we hope to inspire them to become confident, informed, and eco-conscious 
              leaders in their communities.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              We extend our heartfelt gratitude to everyone who supported this event, from our partners and sponsors 
              to the dedicated volunteers who made it all possible. Together, we are making a difference in girls' 
              lives and our planet's well-being.
            </p>
            <p className="text-sm mt-8">
              Sponsored by O'Shaughnessy Ventures LLC • Supported by Naza Agape Foundation and 
              North American Association of Environmental Education
            </p>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default BlogGirlChild;