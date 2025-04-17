import { Check } from "lucide-react";
import { useState } from "react";
import { Button } from "~/components/ui/button";

const Pricing = () => {
  const [annual, setAnnual] = useState(true);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for individuals and small teams getting started.",
      monthlyPrice: 29,
      annualPrice: 290,
      features: [
        "Up to 5 users",
        "Basic analytics",
        "10GB storage",
        "Email support",
        "Standard integrations",
      ],
      cta: "Start Free Trial",
      highlighted: false,
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses with advanced needs.",
      monthlyPrice: 99,
      annualPrice: 990,
      features: [
        "Up to 20 users",
        "Advanced analytics",
        "50GB storage",
        "Priority support",
        "Advanced integrations",
        "Custom reporting",
        "API access",
      ],
      cta: "Start Free Trial",
      highlighted: true,
    },
    {
      name: "Enterprise",
      description:
        "Tailored solutions for large organizations with complex requirements.",
      monthlyPrice: 299,
      annualPrice: 2990,
      features: [
        "Unlimited users",
        "Enterprise analytics",
        "Unlimited storage",
        "Dedicated support",
        "Premium integrations",
        "Custom development",
        "SLA guarantees",
        "Security compliance",
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
  ];

  return (
    <section className="py-16 md:py-24" id="pricing">
      <div className="container px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="text-muted-foreground mt-4 text-xl">
            Choose the plan that's right for your business
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <span className={annual ? "text-muted-foreground" : "font-medium"}>
              Monthly
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              className="bg-primary relative inline-flex h-6 w-12 items-center rounded-full"
            >
              <span
                className={`${annual ? "translate-x-6" : "translate-x-1"} inline-block h-4 w-4 transform rounded-full bg-white transition`}
              />
            </button>
            <span className={annual ? "font-medium" : "text-muted-foreground"}>
              Annual{" "}
              <span className="rounded bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-lg p-8 shadow-sm transition-shadow hover:shadow-md ${plan.highlighted ? "border-primary bg-background border-2" : "bg-background/50 border"}`}
            >
              {plan.highlighted && (
                <div className="bg-primary text-primary-foreground absolute -top-4 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-medium">
                  Most Popular
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="text-muted-foreground mt-1">{plan.description}</p>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold">
                    ${annual ? plan.annualPrice / 12 : plan.monthlyPrice}
                  </span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                {annual && (
                  <p className="text-muted-foreground mt-1 text-sm">
                    Billed annually (${plan.annualPrice})
                  </p>
                )}
              </div>
              <ul className="mb-8 space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="text-primary h-4 w-4" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full ${plan.highlighted ? "" : "variant-outline"}`}
                variant={plan.highlighted ? "default" : "outline"}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
