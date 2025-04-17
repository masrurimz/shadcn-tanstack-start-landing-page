import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "./ui/button";

interface ThemeToggleProps extends React.ComponentProps<typeof Button> {}

export default function ThemeToggle({ className, ...props }: ThemeToggleProps) {
  const toggleTheme = () => {
    if (
      document.documentElement.classList.contains("dark") ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }
  };

  console.log("[ThemeToggle]", props);

  return (
    <Button
      variant="outline"
      size="icon"
      type="button"
      onClick={toggleTheme}
      className={className}
      {...props}
    >
      <SunIcon className="transition-all scale-100 rotate-0 size-4 dark:scale-0 dark:-rotate-90" />
      <MoonIcon className="absolute transition-all scale-0 rotate-90 size-4 dark:scale-100 dark:rotate-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
