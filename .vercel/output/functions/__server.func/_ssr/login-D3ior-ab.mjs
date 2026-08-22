import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as require_jsx_runtime } from "../_libs/@react-three/drei+[...].mjs";
import { n as GROK_PROVIDERS } from "./router-DNLsGiNs.mjs";
import { i as signIn, t as artwork } from "./client-D0mZu6iw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-D3ior-ab.js
var import_jsx_runtime = require_jsx_runtime();
function Login() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "grid min-h-dvh bg-bg text-fg lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative hidden overflow-hidden lg:block",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: artwork.images.threeQuarter,
					alt: "",
					className: "absolute inset-0 h-full w-full object-cover object-center"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-bg/20 to-bg" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "absolute bottom-8 left-8 font-display text-3xl italic text-fg",
					children: artwork.shortTitle
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "flex flex-col justify-center px-6 py-16 sm:px-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "mb-10 text-xs tracking-[0.2em] text-fg-subtle uppercase transition-colors hover:text-fg",
					children: "Back to the vitrine"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-4xl italic tracking-[-0.03em]",
					children: "Sign in"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-sm text-sm leading-relaxed text-fg-muted",
					children: "Use your Google or X account. The sculpture remains public either way — sign-in is only for your session."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 w-full max-w-sm space-y-3",
					children: GROK_PROVIDERS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => signIn(p.providerId, { callbackURL: "/" }),
						className: "flex h-12 w-full items-center justify-center rounded-lg border border-border bg-surface text-sm font-medium text-fg transition-colors duration-(--motion-quick) hover:bg-fg/8",
						children: ["Continue with ", p.label]
					}, p.providerId))
				})
			]
		})]
	});
}
//#endregion
export { Login as component };
