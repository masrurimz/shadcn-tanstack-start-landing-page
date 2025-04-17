import {
  BarChart,
  BarChartHorizontal,
  Calendar,
  Database,
  Globe,
  Lock,
  MessageSquare,
  Users,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <BarChart className="h-8 w-8" />,
      title: "Advanced Analytics",
      description:
        "Gain insights into your business with powerful data visualization tools.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Team Collaboration",
      description: "Work together seamlessly with real-time collaboration features.",
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Integrated Chat",
      description: "Communicate effectively with your team and clients in one place.",
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Smart Scheduling",
      description: "Optimize your time with AI-powered scheduling and reminders.",
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Cloud Storage",
      description: "Store and access your files securely from anywhere, anytime.",
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Advanced Security",
      description: "Protect your data with enterprise-grade security features.",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Accessibility",
      description: "Access your workspace from any device, anywhere in the world.",
    },
    {
      icon: <BarChartHorizontal className="h-8 w-8" />,
      title: "Performance Tracking",
      description: "Monitor and improve your business performance with detailed metrics.",
    },
  ];

  return (
    <section className="bg-muted/30 py-16 md:py-24" id="features">
      <div className="container px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Powerful Features
          </h2>
          <p className="text-muted-foreground mt-4 text-xl">
            Everything you need to manage and grow your business
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-background flex flex-col rounded-lg border p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="bg-primary/10 mb-4 inline-flex w-fit rounded-lg p-2">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-xl font-medium">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
