import { Link } from "@tanstack/react-router";
import { AuthSlot } from "@/components/viewer/AuthSlot";
import { cn } from "@/lib/cn";

type Props = {
  active?: "vitrine" | "workshop";
};

export function EssayHeader({ active = "workshop" }: Props) {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/88 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-6">
        <Link
          to="/"
          className="font-display text-xl tracking-[-0.03em] text-fg italic sm:text-2xl"
        >
          The Stargazer
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2">
          <Link
            to="/"
            aria-current={active === "vitrine" ? "page" : undefined}
            className={cn(
              "inline-flex h-11 items-center px-2.5 text-xs font-medium tracking-[0.16em] uppercase transition-colors duration-150 sm:px-3",
              active === "vitrine" ? "text-fg" : "text-fg-muted hover:text-fg",
            )}
          >
            Vitrine
          </Link>
          <Link
            to="/workshop"
            aria-current={active === "workshop" ? "page" : undefined}
            className={cn(
              "inline-flex h-11 items-center px-2.5 text-xs font-medium tracking-[0.16em] uppercase transition-colors duration-150 sm:px-3",
              active === "workshop" ? "text-fg" : "text-fg-muted hover:text-fg",
            )}
          >
            Workshop
          </Link>
          <AuthSlot />
        </nav>
      </div>
    </header>
  );
}
