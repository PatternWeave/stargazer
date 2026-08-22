import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as require_jsx_runtime, a as Canvas, c as Mesh, d as MeshStandardMaterial, f as SRGBColorSpace, h as create, i as useProgress, l as MeshBasicMaterial, m as Vector3, n as OrbitControls, o as useThree, p as Vector2, r as useGLTF, s as Box3, t as ContactShadows, u as MeshPhysicalMaterial } from "../_libs/@react-three/drei+[...].mjs";
import { a as RotateCw, c as Keyboard, i as ScanSearch, l as Info, o as RotateCcw, r as SunMedium, s as Moon, t as X, u as Download } from "../_libs/lucide-react.mjs";
import { a as signOut, n as authClient, o as viewModes, r as lightPresets, t as artwork } from "./client-D0mZu6iw.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CrLJiXdH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var prefersReducedMotion = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
var useViewerStore = create((set) => ({
	viewMode: "textured",
	lightPreset: "gallery",
	autoRotate: !prefersReducedMotion(),
	infoOpen: false,
	helpOpen: false,
	fitNonce: 0,
	setViewMode: (viewMode) => set({ viewMode }),
	setLightPreset: (lightPreset) => set({ lightPreset }),
	setAutoRotate: (autoRotate) => set({ autoRotate }),
	toggleAutoRotate: () => set((s) => ({ autoRotate: !s.autoRotate })),
	setInfoOpen: (infoOpen) => set({ infoOpen }),
	toggleInfo: () => set((s) => ({ infoOpen: !s.infoOpen })),
	setHelpOpen: (helpOpen) => set({ helpOpen }),
	requestFit: () => set((s) => ({ fitNonce: s.fitNonce + 1 }))
}));
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-40 active:scale-[0.98]", {
	variants: {
		variant: {
			primary: "bg-fg text-bg hover:bg-fg/90",
			ghost: "text-fg-muted hover:bg-fg/8 hover:text-fg",
			outline: "border border-border bg-transparent text-fg hover:bg-fg/6",
			subtle: "bg-fg/8 text-fg hover:bg-fg/12"
		},
		size: {
			sm: "h-9 rounded-md px-3 text-xs tracking-wide",
			md: "h-11 rounded-lg px-4 text-sm",
			icon: "size-11 rounded-lg"
		}
	},
	defaultVariants: {
		variant: "ghost",
		size: "md"
	}
});
function Button({ className, variant, size, asChild = false, type = "button", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		type: asChild ? void 0 : type,
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
var rows = [
	["Drag", "Orbit"],
	["Scroll / pinch", "Zoom"],
	["Right-drag / two-finger", "Pan"],
	["1 – 4", "Surface / Form / Mesh / X-ray"],
	["G / N / S", "Gallery / Night / Study light"],
	["R", "Reset camera"],
	["Space", "Toggle auto-rotate"],
	["I", "Object record"],
	["?", "This list"]
];
function HelpDialog() {
	const open = useViewerStore((s) => s.helpOpen);
	const setHelpOpen = useViewerStore((s) => s.setHelpOpen);
	if (!open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "absolute inset-0 z-30 grid place-items-center bg-bg/55 p-4 backdrop-blur-sm",
		role: "presentation",
		onClick: () => setHelpOpen(false),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			role: "dialog",
			"aria-labelledby": "help-title",
			className: "w-full max-w-md rounded-xl border border-border bg-surface p-5 shadow-[0_24px_80px_-32px_rgba(0,0,0,0.8)]",
			onClick: (e) => e.stopPropagation(),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "help-title",
					className: "font-display text-2xl italic tracking-[-0.03em]",
					children: "Looking"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "icon",
					"aria-label": "Close",
					onClick: () => setHelpOpen(false),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
				className: "mt-4 divide-y divide-border",
				children: rows.map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-baseline justify-between gap-4 py-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "font-mono text-[0.7rem] tracking-wide text-fg-muted",
						children: k
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "text-sm text-fg",
						children: v
					})]
				}, k))
			})]
		})
	});
}
/**
* Current user + loading state. Same behavior in live preview and when deployed:
*   - Auth enabled (default) -> the real signed-in user; `user` is `null` while
*                            the session resolves (`isPending: true`) and when
*                            signed out (`isPending: false`). Session comes from
*                            Better Auth `useSession()` → `/api/auth/get-session`
*                            (cookie when deployed; bearer in live preview).
*   - Auth disabled (`VITE_AUTH_ENABLED=false`) -> `DEV_USER`, never pending.
*
* Protect a route by waiting out `isPending` before acting on `user` —
* redirecting on `user: null` alone bounces signed-in visitors to sign-in on
* every hard reload:
*
*   import { RedirectToSignIn } from "@/lib/auth/gates";
*   const { user, isPending } = useCurrentUserState();
*   if (isPending) return null;              // still resolving — don't redirect yet
*   if (!user) return <RedirectToSignIn />;  // definitely signed out
*
* `authEnabled` is a module-level constant fixed at load, so the guarded hook
* call keeps a stable hook order across every render of a given component.
*/
function useCurrentUserState() {
	const { data, isPending } = authClient.useSession();
	const user = data?.user;
	return {
		user: user ? {
			id: user.id,
			displayName: user.name ?? null,
			primaryEmail: user.email ?? null,
			profileImageUrl: user.image ?? null,
			isDevFallback: false
		} : null,
		isPending
	};
}
/**
* Convenience view of `useCurrentUserState().user` for display (e.g.
* `user?.displayName ?? "Guest"`). NOTE: `null` means *loading OR signed out* —
* for redirects/guards use `useCurrentUserState()` and check `isPending`.
*/
function useCurrentUser() {
	return useCurrentUserState().user;
}
/**
* Minimal signed-in identity chip + sign-out. Restyle freely (see the
* `design-ui` skill). Sign-out is only shown when auth is enabled (the
* disabled-auth dev user has nothing to sign out of).
*/
function UserButton() {
	const user = useCurrentUser();
	if (!user) return null;
	const label = user.displayName ?? user.primaryEmail ?? "Account";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2",
		children: [
			user.profileImageUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: user.profileImageUrl,
				alt: "",
				className: "h-8 w-8 rounded-full object-cover"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid h-8 w-8 place-items-center rounded-full bg-black/10 text-sm font-medium dark:bg-white/20",
				children: label.charAt(0).toUpperCase()
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-sm font-medium",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => void signOut(),
				className: "cursor-pointer text-sm underline-offset-4 opacity-70 hover:underline",
				children: "Sign out"
			})
		]
	});
}
function AuthSlot() {
	const { user, isPending } = useCurrentUserState();
	if (isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "size-11 animate-pulse rounded-lg bg-fg/8",
		"aria-hidden": true
	});
	if (user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex h-11 items-center rounded-lg border border-border bg-surface/80 px-2.5 backdrop-blur-md [&_button]:text-fg-muted [&_button]:hover:text-fg [&_img]:size-7 [&_span]:max-w-[8rem] [&_span]:truncate [&_span]:text-xs [&_span]:text-fg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserButton, {})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/login",
		className: "inline-flex h-11 items-center rounded-lg border border-border bg-surface/80 px-4 text-sm font-medium text-fg backdrop-blur-md transition-colors duration-(--motion-quick) hover:bg-fg/8",
		children: "Sign in"
	});
}
function Hud() {
	const viewMode = useViewerStore((s) => s.viewMode);
	const lightPreset = useViewerStore((s) => s.lightPreset);
	const autoRotate = useViewerStore((s) => s.autoRotate);
	const infoOpen = useViewerStore((s) => s.infoOpen);
	const setViewMode = useViewerStore((s) => s.setViewMode);
	const setLightPreset = useViewerStore((s) => s.setLightPreset);
	const toggleAutoRotate = useViewerStore((s) => s.toggleAutoRotate);
	const toggleInfo = useViewerStore((s) => s.toggleInfo);
	const setHelpOpen = useViewerStore((s) => s.setHelpOpen);
	const requestFit = useViewerStore((s) => s.requestFit);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-none absolute inset-0 z-10 flex flex-col justify-between p-4 sm:p-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "flex items-start justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-auto max-w-[16rem] sm:max-w-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-sans text-[0.625rem] font-medium tracking-[0.22em] text-fg-subtle uppercase",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sm:hidden",
							children: artwork.accession
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "hidden sm:inline",
							children: ["Cleveland Museum of Art · ", artwork.accession]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-1 font-display text-[1.85rem] leading-none tracking-[-0.03em] text-fg italic sm:text-[2.35rem]",
						children: artwork.shortTitle
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 hidden text-sm text-fg-muted sm:block",
						children: [
							artwork.culture,
							" · ",
							artwork.date
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-auto flex items-center gap-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthSlot, {})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-stretch gap-3 sm:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-auto mx-auto flex max-w-full flex-wrap items-center justify-center gap-1 rounded-xl border border-border bg-surface/85 p-1.5 shadow-[0_12px_40px_-20px_rgba(0,0,0,0.7)] backdrop-blur-md",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Segment, {
						ariaLabel: "Surface mode",
						items: viewModes.map((m) => ({
							id: m.id,
							label: m.label,
							title: m.hint
						})),
						value: viewMode,
						onChange: (id) => setViewMode(id)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Divider, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Segment, {
						ariaLabel: "Lighting",
						items: lightPresets.map((m) => ({
							id: m.id,
							label: m.label,
							title: m.hint,
							icon: m.id === "gallery" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SunMedium, { className: "size-3.5" }) : m.id === "night" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "size-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScanSearch, { className: "size-3.5" })
						})),
						value: lightPreset,
						onChange: (id) => setLightPreset(id)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Divider, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
						label: autoRotate ? "Stop rotation" : "Auto-rotate",
						pressed: autoRotate,
						onClick: toggleAutoRotate,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCw, { className: cn("size-4", autoRotate && "animate-spin [animation-duration:6s]") })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
						label: "Reset view",
						onClick: requestFit,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
						label: "Object details",
						pressed: infoOpen,
						onClick: toggleInfo,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "size-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden sm:inline-flex",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
							label: "Keyboard shortcuts",
							onClick: () => setHelpOpen(true),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Keyboard, { className: "size-4" })
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: artwork.modelPath,
						download: artwork.downloadName,
						className: "inline-flex size-11 items-center justify-center rounded-lg text-fg-muted transition-colors duration-150 hover:bg-fg/8 hover:text-fg",
						"aria-label": "Download GLB mesh",
						title: "Download GLB mesh",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" })
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "pointer-events-none text-center font-sans text-[0.65rem] tracking-[0.16em] text-fg-subtle uppercase",
				children: [
					"Drag to orbit · Scroll to zoom · ",
					artwork.measurements.split("(")[0].trim(),
					" ·",
					" ",
					artwork.mesh.triangles.toLocaleString(),
					" triangles"
				]
			})]
		})]
	});
}
function Divider() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "mx-0.5 hidden h-7 w-px bg-border sm:block",
		"aria-hidden": true
	});
}
function Segment({ items, value, onChange, ariaLabel }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "radiogroup",
		"aria-label": ariaLabel,
		className: "flex items-center gap-0.5",
		children: items.map((item) => {
			const active = item.id === value;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				role: "radio",
				"aria-checked": active,
				title: item.title,
				onClick: () => onChange(item.id),
				className: cn("inline-flex h-10 min-w-10 items-center justify-center gap-1.5 rounded-md px-2 text-[0.7rem] font-medium tracking-wide transition-colors duration-150 sm:px-3 sm:text-xs", active ? "bg-fg text-bg" : "text-fg-muted hover:bg-fg/8 hover:text-fg"),
				children: [item.icon, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.label })]
			}, item.id);
		})
	});
}
function IconBtn({ children, label, onClick, pressed }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		variant: "ghost",
		size: "icon",
		"aria-label": label,
		"aria-pressed": pressed,
		title: label,
		onClick,
		className: cn(pressed && "bg-fg/10 text-fg"),
		children
	});
}
function InfoPanel() {
	const open = useViewerStore((s) => s.infoOpen);
	const setInfoOpen = useViewerStore((s) => s.setInfoOpen);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		"aria-label": "Dismiss object record",
		className: `absolute inset-0 z-20 bg-bg/40 backdrop-blur-[2px] transition-opacity duration-200 ${open ? "opacity-100" : "pointer-events-none opacity-0"}`,
		onClick: () => setInfoOpen(false)
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: `absolute inset-y-0 right-0 z-30 flex w-full max-w-md flex-col border-l border-border bg-surface/95 shadow-[-24px_0_60px_-30px_rgba(0,0,0,0.65)] backdrop-blur-xl transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`,
		"aria-hidden": !open,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between border-b border-border px-5 py-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[0.65rem] font-medium tracking-[0.2em] text-fg-subtle uppercase",
				children: "Object record"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				size: "icon",
				"aria-label": "Close details",
				onClick: () => setInfoOpen(false),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex-1 overflow-y-auto px-5 py-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[0.65rem] tracking-[0.18em] text-fg-subtle uppercase",
					children: artwork.accession
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-3xl leading-tight tracking-[-0.03em] text-fg italic",
					children: artwork.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-sm text-fg-muted",
					children: [
						artwork.culture,
						" (",
						artwork.cultureRange,
						")"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-6 grid grid-cols-[7.5rem_1fr] gap-x-3 gap-y-2.5 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: "Date",
							value: artwork.date
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: "Material",
							value: artwork.technique
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: "Dimensions",
							value: artwork.measurements
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: "Weight",
							value: artwork.weight
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: "Location",
							value: artwork.location
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: "Credit",
							value: artwork.creditLine
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-[0.95rem] leading-relaxed text-fg",
					children: artwork.description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
					className: "mt-6 overflow-hidden rounded-xl border border-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: artwork.images.threeQuarter,
						alt: "Three-quarter view of The Stargazer marble figurine",
						className: "aspect-[4/5] w-full object-cover object-top"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-[0.65rem] font-medium tracking-[0.18em] text-fg-subtle uppercase",
						children: "Did you know"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-fg-muted",
						children: artwork.didYouKnow
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-[0.65rem] font-medium tracking-[0.18em] text-fg-subtle uppercase",
						children: "Mesh"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm leading-relaxed text-fg-muted",
						children: [
							artwork.mesh.method,
							". ",
							artwork.mesh.vertices.toLocaleString(),
							" vertices,",
							" ",
							artwork.mesh.triangles.toLocaleString(),
							" triangles, with photogrammetry color, roughness, and normal maps. Source file served from this gallery as a GLB."
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-[0.65rem] font-medium tracking-[0.18em] text-fg-subtle uppercase",
						children: "Provenance"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-2 space-y-1.5 text-sm text-fg-muted",
						children: artwork.provenance.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: line }, line))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-6 border-t border-border pt-5 text-xs leading-relaxed text-fg-subtle",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [artwork.license, ". Credit is not required. Photographs and 3D model published by the Cleveland Museum of Art Open Access initiative."] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: artwork.sourceUrl,
								className: "text-fg-muted underline-offset-4 hover:text-fg hover:underline",
								target: "_blank",
								rel: "noreferrer",
								children: "Collection record"
							}),
							" · ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: artwork.sketchfabUrl,
								className: "text-fg-muted underline-offset-4 hover:text-fg hover:underline",
								target: "_blank",
								rel: "noreferrer",
								children: "Sketchfab source"
							}),
							" · ",
							"DOI ",
							artwork.zenodoDoi
						]
					})]
				})
			]
		})]
	})] });
}
function Row({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
		className: "text-fg-subtle",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
		className: "text-fg",
		children: value
	})] });
}
function LoadGate() {
	const { active, progress } = useProgress();
	if (!active && progress === 100) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "absolute inset-0 z-20 grid place-items-center bg-bg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-3xl italic tracking-[-0.03em] text-fg",
					children: artwork.shortTitle
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-xs tracking-[0.2em] text-fg-subtle uppercase",
					children: [
						"Loading mesh ",
						Math.round(progress),
						"%"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto mt-5 h-px w-40 overflow-hidden bg-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-full bg-fg transition-[width] duration-150",
						style: { width: `${Math.max(progress, 8)}%` }
					})
				})
			]
		})
	});
}
function SceneLights({ preset }) {
	const mapSize = (0, import_react.useMemo)(() => new Vector2(2048, 2048), []);
	if (preset === "night") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("color", {
			attach: "background",
			args: ["#07080c"]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("fog", {
			attach: "fog",
			args: [
				"#07080c",
				7,
				20
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hemisphereLight", { args: [
			"#8b97b0",
			"#0a0c12",
			.42
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ambientLight", {
			intensity: .12,
			color: "#a8b4c8"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
			position: [
				.4,
				4.8,
				1.5
			],
			intensity: 2.6,
			color: "#e7edf8",
			castShadow: true,
			"shadow-mapSize": mapSize,
			"shadow-bias": -2e-4,
			"shadow-camera-near": .5,
			"shadow-camera-far": 12,
			"shadow-camera-left": -2.2,
			"shadow-camera-right": 2.2,
			"shadow-camera-top": 2.2,
			"shadow-camera-bottom": -2.2
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
			position: [
				-2.2,
				1.2,
				-1.4
			],
			intensity: .45,
			color: "#8ea0c4"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("spotLight", {
			position: [
				.05,
				3.6,
				.35
			],
			angle: .28,
			penumbra: .9,
			intensity: 2.1,
			color: "#f2f6ff"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Starfield, {})
	] });
	if (preset === "study") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("color", {
			attach: "background",
			args: ["#161410"]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hemisphereLight", { args: [
			"#efe8dc",
			"#3a342e",
			.7
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ambientLight", {
			intensity: .48,
			color: "#f3eee6"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
			position: [
				2.2,
				3.4,
				2.5
			],
			intensity: 1.7,
			color: "#fff8ee",
			castShadow: true,
			"shadow-mapSize": mapSize,
			"shadow-bias": -2e-4,
			"shadow-camera-near": .5,
			"shadow-camera-far": 12,
			"shadow-camera-left": -2.2,
			"shadow-camera-right": 2.2,
			"shadow-camera-top": 2.2,
			"shadow-camera-bottom": -2.2
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
			position: [
				-2.5,
				2.4,
				1.5
			],
			intensity: 1.05,
			color: "#e6eef6"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
			position: [
				.2,
				1.8,
				-2.6
			],
			intensity: .7,
			color: "#f4eadc"
		})
	] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("color", {
			attach: "background",
			args: ["#0c0b0a"]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("fog", {
			attach: "fog",
			args: [
				"#0c0b0a",
				8,
				18
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hemisphereLight", { args: [
			"#d8d0c6",
			"#2c2620",
			.55
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ambientLight", {
			intensity: .22,
			color: "#f2e8d8"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
			position: [
				2.5,
				3.8,
				2.4
			],
			intensity: 3.1,
			color: "#fff4e6",
			castShadow: true,
			"shadow-mapSize": mapSize,
			"shadow-bias": -2e-4,
			"shadow-radius": 2.5,
			"shadow-camera-near": .5,
			"shadow-camera-far": 12,
			"shadow-camera-left": -2.2,
			"shadow-camera-right": 2.2,
			"shadow-camera-top": 2.2,
			"shadow-camera-bottom": -2.2
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
			position: [
				-2.6,
				1.6,
				1.6
			],
			intensity: .85,
			color: "#c5d0e0"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
			position: [
				.2,
				2.6,
				-2.4
			],
			intensity: 1.35,
			color: "#ffe7c8"
		})
	] });
}
function Starfield() {
	const positions = (0, import_react.useMemo)(() => {
		const count = 700;
		const p = new Float32Array(count * 3);
		for (let i = 0; i < count; i++) {
			const r = 9 + Math.random() * 10;
			const theta = Math.random() * Math.PI * 2;
			const phi = Math.acos(2 * Math.random() - 1);
			p[i * 3] = r * Math.sin(phi) * Math.cos(theta);
			p[i * 3 + 1] = Math.abs(r * Math.cos(phi)) * .72 + 1.2;
			p[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
		}
		return p;
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("points", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("bufferGeometry", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("bufferAttribute", {
		attach: "attributes-position",
		args: [positions, 3]
	}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointsMaterial", {
		size: .028,
		color: "#e4eaf4",
		sizeAttenuation: true,
		transparent: true,
		opacity: .82,
		depthWrite: false
	})] });
}
useGLTF.preload(artwork.modelPath);
var TARGET_HEIGHT = 1.72;
function StargazerModel({ mode }) {
	const { scene } = useGLTF(artwork.modelPath);
	const wrap = (0, import_react.useRef)(null);
	const mats = (0, import_react.useMemo)(() => {
		return {
			clay: new MeshStandardMaterial({
				color: "#eadccb",
				roughness: .58,
				metalness: .02
			}),
			wire: new MeshBasicMaterial({
				color: "#ddd4c8",
				wireframe: true,
				transparent: true,
				opacity: .88
			}),
			xray: new MeshPhysicalMaterial({
				color: "#e4d8c8",
				transmission: .86,
				thickness: .55,
				roughness: .16,
				metalness: 0,
				ior: 1.48,
				transparent: true,
				opacity: .58,
				depthWrite: false,
				side: 2,
				attenuationColor: "#d2c0a8",
				attenuationDistance: .4
			})
		};
	}, []);
	(0, import_react.useLayoutEffect)(() => {
		return () => {
			mats.clay.dispose();
			mats.wire.dispose();
			mats.xray.dispose();
		};
	}, [mats]);
	(0, import_react.useLayoutEffect)(() => {
		scene.traverse((obj) => {
			if (!(obj instanceof Mesh)) return;
			obj.castShadow = true;
			obj.receiveShadow = true;
			if (!obj.userData.origMat) {
				obj.userData.origMat = obj.material;
				const originals = Array.isArray(obj.material) ? obj.material : [obj.material];
				for (const m of originals) {
					if (!m || !(m instanceof MeshStandardMaterial)) continue;
					if (m.map) {
						m.map.anisotropy = 8;
						m.map.colorSpace = SRGBColorSpace;
						m.emissiveMap = m.map;
						m.emissive.set("#ffffff");
						m.emissiveIntensity = .28;
					}
					if (m.normalMap) m.normalMap.anisotropy = 8;
					if (m.roughnessMap) m.roughnessMap.anisotropy = 8;
					m.roughness = Math.min(m.roughness ?? 1, .72);
					m.metalness = 0;
					m.envMapIntensity = .45;
					m.needsUpdate = true;
				}
			}
		});
	}, [scene]);
	(0, import_react.useLayoutEffect)(() => {
		scene.traverse((obj) => {
			if (!(obj instanceof Mesh)) return;
			const orig = obj.userData.origMat;
			if (mode === "textured") obj.material = orig;
			else if (mode === "clay") obj.material = mats.clay;
			else if (mode === "wire") obj.material = mats.wire;
			else obj.material = mats.xray;
		});
	}, [
		scene,
		mode,
		mats
	]);
	(0, import_react.useLayoutEffect)(() => {
		const g = wrap.current;
		if (!g) return;
		g.position.set(0, 0, 0);
		g.rotation.set(0, 0, 0);
		g.scale.set(1, 1, 1);
		g.updateWorldMatrix(true, true);
		const box = new Box3().setFromObject(g);
		if (box.isEmpty()) return;
		const size = box.getSize(new Vector3());
		const center = box.getCenter(new Vector3());
		const s = TARGET_HEIGHT / Math.max(size.y, 1e-4);
		g.scale.setScalar(s);
		g.position.set(-center.x * s, -box.min.y * s, -center.z * s);
	}, [scene]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", {
		ref: wrap,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("primitive", { object: scene })
	});
}
var HOME = {
	position: [
		-2.68,
		.42,
		-1.11
	],
	target: [
		0,
		.76,
		0
	]
};
function ViewerCanvas() {
	const viewMode = useViewerStore((s) => s.viewMode);
	const lightPreset = useViewerStore((s) => s.lightPreset);
	const autoRotate = useViewerStore((s) => s.autoRotate);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Canvas, {
		className: "h-full w-full touch-none",
		shadows: true,
		dpr: [1, 2],
		gl: {
			antialias: true,
			alpha: false,
			powerPreference: "high-performance"
		},
		camera: {
			position: HOME.position,
			fov: 28,
			near: .05,
			far: 40
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SceneLights, { preset: lightPreset }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Suspense, {
				fallback: null,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StargazerModel, { mode: viewMode }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactShadows, {
					position: [
						0,
						0,
						0
					],
					opacity: lightPreset === "night" ? .28 : .4,
					scale: 2.2,
					blur: 2.8,
					far: 1.3,
					color: "#000000"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrbitControls, {
				makeDefault: true,
				enableDamping: true,
				dampingFactor: .08,
				autoRotate,
				autoRotateSpeed: .35,
				minDistance: .7,
				maxDistance: 5,
				minPolarAngle: .2,
				maxPolarAngle: Math.PI * .5,
				target: HOME.target
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FitController, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WarmTone, {})
		]
	});
}
function FitController() {
	const fitNonce = useViewerStore((s) => s.fitNonce);
	const camera = useThree((s) => s.camera);
	const controls = useThree((s) => s.controls);
	(0, import_react.useEffect)(() => {
		camera.position.set(...HOME.position);
		if (controls) {
			controls.target.set(...HOME.target);
			controls.update();
		}
	}, [
		fitNonce,
		camera,
		controls
	]);
	return null;
}
function WarmTone() {
	const gl = useThree((s) => s.gl);
	(0, import_react.useEffect)(() => {
		gl.toneMappingExposure = 1.42;
	}, [gl]);
	return null;
}
function Viewer() {
	const [mounted, setMounted] = (0, import_react.useState)(false);
	const setViewMode = useViewerStore((s) => s.setViewMode);
	const setLightPreset = useViewerStore((s) => s.setLightPreset);
	const toggleAutoRotate = useViewerStore((s) => s.toggleAutoRotate);
	const toggleInfo = useViewerStore((s) => s.toggleInfo);
	const setHelpOpen = useViewerStore((s) => s.setHelpOpen);
	const helpOpen = useViewerStore((s) => s.helpOpen);
	const infoOpen = useViewerStore((s) => s.infoOpen);
	const requestFit = useViewerStore((s) => s.requestFit);
	(0, import_react.useEffect)(() => {
		setMounted(true);
	}, []);
	(0, import_react.useEffect)(() => {
		function onKey(e) {
			const tag = e.target?.tagName;
			if (tag === "INPUT" || tag === "TEXTAREA") return;
			if (e.key === "Escape") {
				if (helpOpen) setHelpOpen(false);
				else if (infoOpen) useViewerStore.getState().setInfoOpen(false);
				return;
			}
			if (e.key === "?" || e.shiftKey && e.key === "/") {
				e.preventDefault();
				setHelpOpen(!helpOpen);
				return;
			}
			switch (e.key.toLowerCase()) {
				case "1":
					setViewMode("textured");
					break;
				case "2":
					setViewMode("clay");
					break;
				case "3":
					setViewMode("wire");
					break;
				case "4":
					setViewMode("xray");
					break;
				case "g":
					setLightPreset("gallery");
					break;
				case "n":
					setLightPreset("night");
					break;
				case "s":
					setLightPreset("study");
					break;
				case "r":
					requestFit();
					break;
				case " ":
					e.preventDefault();
					toggleAutoRotate();
					break;
				case "i": toggleInfo();
			}
		}
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [
		helpOpen,
		infoOpen,
		requestFit,
		setHelpOpen,
		setLightPreset,
		setViewMode,
		toggleAutoRotate,
		toggleInfo
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-dvh w-full overflow-hidden bg-bg text-fg",
		children: [
			mounted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ViewerCanvas, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-bg" }),
			mounted && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadGate, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hud, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoPanel, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HelpDialog, {})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Viewer, {});
}
//#endregion
export { Home as component };
