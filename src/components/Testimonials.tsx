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
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-muted/30 p-8 rounded-lg hover:shadow-glow transition-all hover:-translate-y-1 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-lg object-cover shadow-md"
                />
                <blockquote className="text-primary text-lg font-medium italic">
                  "{testimonial.quote}"
                </blockquote>
                <p className="text-foreground font-semibold tracking-wider text-sm">
                  {testimonial.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
