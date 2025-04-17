import { ChevronsDown, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import ThemeToggle from "~/components/ThemeToggle";
import { Button } from "~/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "~/components/ui/navigation-menu";
import { Separator } from "~/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import GithubIcon from "./GithubIcon";

interface RouteProps {
  href: string;
  label: string;
}

interface FeatureProps {
  title: string;
  description: string;
}

const Navbar = () => {
  const [mode] = useState("dark");
  useEffect(() => {
    // Set initial dark mode
    const root = window.document.documentElement;
    root.classList.remove("light");
    root.classList.add("dark");
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const routeList: RouteProps[] = [
    { href: "#testimonials", label: "Testimonials" },
    { href: "#team", label: "Team" },
    { href: "#contact", label: "Contact" },
    { href: "#faq", label: "FAQ" },
  ];

  const featureList: FeatureProps[] = [
    {
      title: "Showcase Your Value",
      description: "Highlight how your product solves user problems.",
    },
    {
      title: "Build Trust",
      description: "Leverages social proof elements to establish trust and credibility.",
    },
    {
      title: "Capture Leads",
      description: "Make your lead capture form visually appealing and strategically.",
    },
  ];

  return (
    <header
      className={`${
        mode === "light"
          ? "shadow-[inset_0_0_5px_rgba(0,0,0,0.085)]"
          : "shadow-[inset_0_0_5px_rgba(255,255,255,0.141)]"
      } bg-card sticky top-5 z-40 mx-auto flex w-[90%] items-center justify-between rounded-2xl border p-2 shadow-md md:w-[70%] lg:w-[75%] lg:max-w-screen-xl`}
    >
      <a href="/" className="flex items-center text-lg font-bold">
        <ChevronsDown className="mr-2 w-9 h-9 text-white bg-gradient-to-tr rounded-lg border from-primary via-primary/70 to-primary" />
        ShadcnVue
      </a>

      {/* Mobile */}
      <div className="flex items-center lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu onClick={() => setIsOpen(true)} className="cursor-pointer" />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card"
          >
            <div>
              <SheetHeader className="mb-4 ml-4">
                <SheetTitle className="flex items-center">
                  <a href="/" className="flex items-center">
                    <ChevronsDown className="mr-2 w-9 h-9 text-white bg-gradient-to-tr rounded-lg border from-primary/70 via-primary to-primary/70" />
                    ShadcnVue
                  </a>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-2">
                {routeList.map((item) => (
                  <Button
                    key={item.label}
                    variant="ghost"
                    className="justify-start text-base"
                    asChild
                  >
                    <a href={item.href} onClick={() => setIsOpen(false)}>
                      {item.label}
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            <SheetFooter className="flex-col justify-start items-start sm:flex-col">
              <Separator className="mb-2" />
              <ThemeToggle />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop */}
      <NavigationMenu className="hidden lg:block">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-base bg-card">
              Features
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[600px] grid-cols-2 gap-5 p-4">
                <img
                  src="https://www.radix-vue.com/logo.svg"
                  alt="Beach"
                  className="object-cover w-full h-full rounded-md"
                />
                <ul className="flex flex-col gap-2">
                  {featureList.map((feature) => (
                    <li
                      key={feature.title}
                      className="p-3 text-sm rounded-md hover:bg-muted"
                    >
                      <p className="mb-1 font-semibold leading-none text-foreground">
                        {feature.title}
                      </p>
                      <p className="text-muted-foreground line-clamp-2">
                        {feature.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            {routeList.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                className="justify-start text-base"
                asChild
              >
                <NavigationMenuLink asChild>
                  <a href={item.href}>{item.label}</a>
                </NavigationMenuLink>
              </Button>
            ))}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden lg:flex">
        <ThemeToggle />

        <Button asChild size="sm" variant="ghost" aria-label="View on GitHub">
          <a
            aria-label="View on GitHub"
            href="https://github.com/leoMirandaa/shadcn-vue-landing-page.git"
            target="_blank"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
