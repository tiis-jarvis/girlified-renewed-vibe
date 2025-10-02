import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <section className="py-20 md:py-28 bg-gradient-to-r from-primary/80 to-primary/60 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Sign up to our newsletter!
          </h2>
          
          <blockquote className="text-white/90 text-base md:text-lg italic leading-relaxed">
            "To all of you who choose to look the other way everyday because you seem more frightened of the 
            changes that can prevent catastrophic climate change than the catastrophic climate change itself. 
            Your silence is the worst of all"
            <br />
            <span className="text-sm">– Greta Thunberg</span>
          </blockquote>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto mt-8">
            <Input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white text-foreground h-12 px-6 rounded-lg"
              required
            />
            <Button
              type="submit"
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-bold px-8 rounded-lg"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
