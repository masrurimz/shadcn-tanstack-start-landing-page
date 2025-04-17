import { Button } from "~/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "Business Consultation",
      description:
        "Expert advice on strategy, operations, and growth opportunities for your business.",
      image: "https://source.unsplash.com/random/800x600/?business",
    },
    {
      title: "Digital Transformation",
      description:
        "Comprehensive solutions to modernize and digitize your business processes.",
      image: "https://source.unsplash.com/random/800x600/?technology",
    },
    {
      title: "Customer Experience",
      description: "Strategies and tools to enhance customer satisfaction and loyalty.",
      image: "https://source.unsplash.com/random/800x600/?customer",
    },
  ];

  return (
    <section className="py-16 md:py-24" id="services">
      <div className="container px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Our Services</h2>
          <p className="text-muted-foreground mt-4 text-xl">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-background relative overflow-hidden rounded-lg border shadow-sm transition-all hover:shadow-md"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-medium">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <Button variant="outline" size="sm">
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
