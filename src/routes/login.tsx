import { createFileRoute, Link } from "@tanstack/react-router";
import { GROK_PROVIDERS, authEnabled, signIn } from "@/lib/auth/client";
import { artwork } from "@/lib/artwork";

export const Route = createFileRoute("/login")({ component: Login });

function Login() {
  return (
    <main className="grid min-h-dvh bg-bg text-fg lg:grid-cols-2">
      <section className="relative h-48 overflow-hidden lg:hidden">
        <img
          src={artwork.images.threeQuarter}
          alt=""
          className="h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bg" />
      </section>

      <section className="relative hidden overflow-hidden lg:block">
        <img
          src={artwork.images.threeQuarter}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg/20 to-bg" />
        <p className="absolute bottom-8 left-8 font-display text-3xl italic text-fg">
          {artwork.shortTitle}
        </p>
      </section>

      <section className="flex flex-col justify-center px-6 py-16 sm:px-12">
        <Link
          to="/"
          className="mb-10 text-xs tracking-[0.2em] text-fg-subtle uppercase transition-colors hover:text-fg"
        >
          Back to the vitrine
        </Link>
        <h1 className="font-display text-4xl italic tracking-[-0.03em]">Sign in</h1>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-fg-muted">
          Use your Google or X account. The sculpture remains public either way —
          sign-in is only for your session.
        </p>

        <div className="mt-8 w-full max-w-sm space-y-3">
          {authEnabled ? (
            GROK_PROVIDERS.map((p) => (
              <button
                key={p.providerId}
                type="button"
                onClick={() => signIn(p.providerId, { callbackURL: "/" })}
                className="flex h-12 w-full items-center justify-center rounded-lg border border-border bg-surface text-sm font-medium text-fg transition-colors duration-(--motion-quick) hover:bg-fg/8"
              >
                Continue with {p.label}
              </button>
            ))
          ) : (
            <p className="text-sm text-fg-subtle">Sign-in is disabled.</p>
          )}
        </div>
      </section>
    </main>
  );
}
