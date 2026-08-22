# Progress

Studio log for Stargazer. Newest first.

## 2026-08-22

- Stripped the baked-in Grok live-preview OAuth secret from `src/lib/auth/preview.ts`. Auth now expects `GROK_AUTH_CLIENT_ID` / `GROK_AUTH_CLIENT_SECRET` from the environment.
- Removed the old Vercel build bundle that still contained that secret. Added `.vercel/` to `.gitignore`.
- GitHub repo is public: https://github.com/PatternWeave/stargazer
- README frames it as a web app on public data: CMA 1993.165 mesh/photos (CC0) and published Kulaksızlar archaeology.

## Next

- Keep this log current as the vitrine changes.
- Older commits still contain the preview secret in history. A history rewrite would be needed to purge that.
- Second Grok-export repo `lagoon-palm-crystal-hazel` is still empty.
