# Vendored anti-slop Oxlint plugin

Source: [dmmulroy/anti-slop](https://github.com/dmmulroy/anti-slop), commit `c44ef22ca116d0ba62a3ff663a0bd13a3f3fa40b` (2026-09-10, "Merge pull request #36 from K-Mistele/contrib/effect-tag-match-rules").

Copied from `skills/install-anti-slop/assets/anti-slop/` via the `install-anti-slop` skill (`skills-lock.json` hash `4031728fbe75bdcad6ee3208fd52b5d66e167b056fefee1fa9758e9a6cb9c0c8`). On install, `diff -r` against that path at the commit above showed the copied tree was byte-identical.

## Installed paths

- `tools/oxlint/anti-slop/index.ts` — generic plugin, registered in `.oxlintrc.json` as `anti-slop`
- `tools/oxlint/anti-slop/rules/`, `shared/` — rule implementations and helpers
- `tools/oxlint/anti-slop/effect/` — opt-in Effect plugin; copied but **not registered** (no direct `effect` dependency)
- `tools/oxlint/anti-slop/vendor/eslint-stylistic/` — vendored padding rule with its own `LICENSE` and `UPSTREAM.md`

Dependencies: `oxlint` and `@oxlint/plugins`, both pinned exactly at `1.83.0`. Upgrade them together.

## Intentional deviations

None in the plugin source. Repository-side choices:

- Configuration lives in `.oxlintrc.json`. All generic rules plus `oxc/no-accumulating-spread` are at `"error"`.
- The `lint` script changed from `next lint`, which Next.js 16 removed, to `oxlint`.
- `tsconfig.json` enables `allowImportingTsExtensions`. The plugin imports with `.ts` extensions and the root `**/*.ts` include picks it up. This is safe because `noEmit` is already `true`.
