import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "The platform has completely transformed our workflow. We've seen a 40% increase in productivity within just two months.",
      author: "Sarah Johnson",
      position: "CTO, TechCorp",
      image: "https://source.unsplash.com/random/100x100/?woman",
    },
    {
      quote:
        "Implementation was seamless and the support team was exceptional. This has been the best business decision we made all year.",
      author: "Michael Chen",
      position: "Operations Director, Innovate Inc",
      image: "https://source.unsplash.com/random/100x100/?man",
    },
    {
      quote:
        "The analytics features alone have saved us thousands in consulting fees. The insights we've gained are invaluable.",
      author: "Amanda Rodriguez",
      position: "Marketing Manager, Growth Co",
      image: "https://source.unsplash.com/random/100x100/?person",
    },
  ];

  return (
    <section className="py-16 md:py-24" id="testimonials">
      <div className="container px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground mt-4 text-xl">
            Hear from businesses that have transformed with our platform
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background relative rounded-lg border p-6 shadow-sm"
            >
              <Quote className="text-primary/40 absolute top-6 right-6 h-8 w-8" />
              <p className="mb-8 text-balance italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium">{testimonial.author}</h3>
                  <p className="text-muted-foreground text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
