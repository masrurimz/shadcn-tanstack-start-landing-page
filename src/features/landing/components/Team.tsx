import { Github, Linkedin, Twitter } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Alex Thompson",
      position: "CEO & Founder",
      image: "https://source.unsplash.com/random/300x300/?man,ceo",
      bio: "Visionary leader with 15+ years of experience in technology and business strategy.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Mia Rodriguez",
      position: "CTO",
      image: "https://source.unsplash.com/random/300x300/?woman,tech",
      bio: "Technical genius with a background in AI and distributed systems architecture.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "David Kim",
      position: "Head of Product",
      image: "https://source.unsplash.com/random/300x300/?man,product",
      bio: "Product strategist focused on creating intuitive and powerful user experiences.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Emma Parker",
      position: "Head of Marketing",
      image: "https://source.unsplash.com/random/300x300/?woman,marketing",
      bio: "Marketing expert with a passion for storytelling and brand development.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
  ];

  return (
    <section className="bg-muted/30 py-16 md:py-24" id="team">
      <div className="container px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Our Team</h2>
          <p className="text-muted-foreground mt-4 text-xl">
            Meet the experts behind our innovative platform
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-background relative overflow-hidden rounded-lg shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium">{member.name}</h3>
                <p className="text-muted-foreground mb-2 text-sm">{member.position}</p>
                <p className="text-muted-foreground mb-4">{member.bio}</p>
                <div className="flex gap-4">
                  <a
                    href={member.social.linkedin}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href={member.social.github}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
