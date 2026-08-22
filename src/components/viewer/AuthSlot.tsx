import { Link } from "@tanstack/react-router";
import { UserButton } from "@/lib/auth/gates";
import { useCurrentUserState } from "@/lib/auth/use-current-user";

export function AuthSlot() {
  const { user, isPending } = useCurrentUserState();

  if (isPending) {
    return <div className="size-11 animate-pulse rounded-lg bg-fg/8" aria-hidden />;
  }

  if (user) {
    return (
      <div className="flex h-11 items-center rounded-lg border border-border bg-surface/80 px-2.5 backdrop-blur-md [&_button]:text-fg-muted [&_button]:hover:text-fg [&_img]:size-7 [&_span]:max-w-[8rem] [&_span]:truncate [&_span]:text-xs [&_span]:text-fg">
        <UserButton />
      </div>
    );
  }

  return (
    <Link
      to="/login"
      className="inline-flex h-11 items-center rounded-lg border border-border bg-surface/80 px-4 text-sm font-medium text-fg backdrop-blur-md transition-colors duration-(--motion-quick) hover:bg-fg/8"
    >
      Sign in
    </Link>
  );
}
