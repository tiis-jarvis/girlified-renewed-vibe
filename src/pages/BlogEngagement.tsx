import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Newsletter } from "@/components/Newsletter";
import { Card, CardContent } from "@/components/ui/card";
import { Users, MessageSquare, Heart, Target } from "lucide-react";
import blogEngagementHero from "@/assets/blog-engagement-hero.jpg";

const BlogEngagement = () => {
  const interviewers = [
    {
      name: "Nyipoji Kani",
      participants: 11,
      keyFindings: [
        "Pad material isn't thick enough to hold large amounts",
        "Peppering feeling and tiny rashes from certain pads",
        "Many use wrappers due to high prices, causing infections",
        "Preferred price: NGN 250-300 for 8 pieces",
        "Most unaware of plastic pollution in pads"
      ]
    },
    {
      name: "Mercy Kevin",
      participants: 15,
      keyFindings: [
        "Itches and discomfort from methylated pads",
        "90% prefer Always for longer length",
        "Suggested NGN 250-300 for 8 pieces or NGN 500 for 12",
        "Need for thicker, more absorbent pads",
        "Length is a critical factor"
      ]
    },
    {
      name: "Kyenret Daluwa",
      participants: 25,
      keyFindings: [
        "Some prefer children's diapers for better stickiness",
        "Drylove too short, Virony doesn't stick well",
        "Little awareness of plastic pollution",
        "Desire for cheaper, thicker, softer pads",
        "Need for increased absorption and size"
      ]
    },
    {
      name: "Mwanret Gar",
      participants: 17,
      keyFindings: [
        "Burning sensation after 2 hours with some brands",
        "Many can't afford pads monthly, use rags/tissues",
        "Younger teens use Joyland (NGN 150 for 3)",
        "Disposal methods: burning, burying, public dump",
        "Uncomfortable buying pads when males present"
      ]
    },
    {
      name: "Idoko Divine",
      participants: 14,
      keyFindings: [
        "Rashes, itching between thighs",
        "Specific odors develop within 30 mins",
        "Cotton scattering, sometimes enters vagina",
        "Price is a major barrier to access",
        "Prefer NDK, Always, and Trust brands"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section with Video Background */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://cdn.pixabay.com/video/2020/05/17/38944-420195654_large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-background/90"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 animate-fade-in">
              <span className="text-sm font-semibold text-white bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">
                September 17, 2022
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 animate-fade-in leading-tight" style={{ animationDelay: '0.1s' }}>
              Girlified Women and Girls Engagement
              <span className="block mt-2">Focus Group Discussion</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto animate-fade-in leading-relaxed" style={{ animationDelay: '0.2s' }}>
              A comprehensive study with 82 women and girls in Rankyeng Village, Jos South LGA, 
              Plateau State Nigeria, exploring menstrual health challenges and solutions.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Overview Section with Enhanced Stats */}
      <section className="py-24 bg-gradient-to-br from-muted/50 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.1),transparent_50%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div className="group text-center p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 hover:shadow-glow transition-all duration-500 animate-scale-in hover:-translate-y-2">
                <div className="flex justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <div className="p-4 rounded-full bg-gradient-primary">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-3">82</div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Participants</div>
              </div>
              <div className="group text-center p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 hover:shadow-glow transition-all duration-500 animate-scale-in hover:-translate-y-2" style={{ animationDelay: '0.1s' }}>
                <div className="flex justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <div className="p-4 rounded-full bg-gradient-primary">
                    <MessageSquare className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-3">5</div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Focus Groups</div>
              </div>
              <div className="group text-center p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 hover:shadow-glow transition-all duration-500 animate-scale-in hover:-translate-y-2" style={{ animationDelay: '0.2s' }}>
                <div className="flex justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <div className="p-4 rounded-full bg-gradient-primary">
                    <Target className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-3">12-48</div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Age Range</div>
              </div>
              <div className="group text-center p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 hover:shadow-glow transition-all duration-500 animate-scale-in hover:-translate-y-2" style={{ animationDelay: '0.3s' }}>
                <div className="flex justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <div className="p-4 rounded-full bg-gradient-primary">
                    <Heart className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-3">7</div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Team Members</div>
              </div>
            </div>
            
            <Card className="border-2 border-primary/20 shadow-xl bg-card/80 backdrop-blur-sm animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <CardContent className="p-10">
                <p className="text-lg leading-relaxed text-center">
                  As a step further towards getting more feedback on our product and engaging more women and girls, 
                  we conducted discussions with 82 women and girls between ages 12 and 48, all residents of Rankyeng Village. 
                  Rankyeng is a developing community where most families are into farming or small-scale trading, 
                  with most participants from low-income households.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Quote Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-center p-8 bg-gradient-primary rounded-2xl shadow-glow animate-fade-in">
              <p className="text-2xl md:text-3xl font-bold text-white mb-4">
                "Plastic pollution is a serious issue that requires quick climate action and you all 
                ladies seated here can join hands to make our fight against it a successful one"
              </p>
              <cite className="text-white/90 text-lg">— Oghenekevwe Emadago, Co-founder</cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Interviewer Reports */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Reports from Our <span className="text-primary">Five Interviewers</span>
            </h2>
            
            <div className="space-y-8">
              {interviewers.map((interviewer, index) => (
                <Card key={index} className="border-2 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                        <span className="text-white font-bold text-xl">{interviewer.participants}</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{interviewer.name}</h3>
                        <p className="text-muted-foreground">{interviewer.participants} Participants</p>
                      </div>
                    </div>
                    
                    <h4 className="font-semibold text-lg mb-4 text-primary">Key Findings:</h4>
                    <ul className="space-y-3">
                      {interviewer.keyFindings.map((finding, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-foreground/90">{finding}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20 shadow-xl bg-gradient-to-br from-card to-primary/5">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 text-center">
                  Our <span className="text-primary">Conclusions</span>
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg leading-relaxed mb-4">
                    From the whole session, we discovered that <strong>period poverty is indeed a problem</strong> for 
                    the comfort and menstrual hygiene of many women in our region. We can draw this conclusion since 
                    the Rankyeng community, among other communities, is not unique in its below-average income level.
                  </p>
                  <p className="text-lg leading-relaxed">
                    For this reason, we are developing <strong className="text-primary">Girlified</strong> to meet the needs 
                    of these women while giving them the unique opportunity to help save our oceans from plastics.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default BlogEngagement;