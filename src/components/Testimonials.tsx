import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "NENMAN",
      image: testimonial1,
      quote: "Girlified sticks better than other pads, its very healthy, very affordable, and it doesn't give me rashes, and is very affordable.",
    },
    {
      name: "MAUREEN",
      image: testimonial2,
      quote: "I love Girlified because its very long in length, it lasts longer than regular pads, and its very very comfortable.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Testimonials
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-3xl hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-scale-in group shadow-lg"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full object-cover shadow-md transition-transform duration-300 group-hover:scale-110"
                />
                <blockquote className="text-muted-foreground text-lg leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <p className="text-foreground font-bold tracking-wider text-sm uppercase">
                  - {testimonial.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
