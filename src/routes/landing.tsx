import { createFileRoute } from "@tanstack/react-router";
import Benefits from "../features/landing/components/Benefits";
import Community from "../features/landing/components/Community";
import Contact from "../features/landing/components/Contact";
import FAQ from "../features/landing/components/FAQ";
import Features from "../features/landing/components/Features";
import Footer from "../features/landing/components/Footer";
import Hero from "../features/landing/components/Hero";
import HowItWorks from "../features/landing/components/HowItWorks";
import Navbar from "../features/landing/components/Navbar";
import Pricing from "../features/landing/components/Pricing";
import Services from "../features/landing/components/Services";
import Sponsors from "../features/landing/components/Sponsors";
import Team from "../features/landing/components/Team";
import Testimonials from "../features/landing/components/Testimonials";

export const Route = createFileRoute("/landing")({
  component: RouteComponent,
  loader: async ({ context }) => {
    return { user: context.user };
  },
});

function RouteComponent() {
  const { user } = Route.useLoaderData();

  return (
    <>
      <Navbar user={user ?? undefined} />
      <Hero />
      <Sponsors />
      <Benefits />
      <Features />
      <Services />
      <HowItWorks />
      <Testimonials />
      <Team />
      <Community />
      <Pricing />
      <Contact />
      <FAQ />
      <Footer />
    </>
  );
}
