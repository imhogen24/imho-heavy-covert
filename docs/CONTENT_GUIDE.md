# IMHOGEN Website — Content Guide for Agents

## How to Use These Files

Each page has its own content file in `docs/`:

| File                         | Route                      | Status                         |
| ---------------------------- | -------------------------- | ------------------------------ |
| `homepage.md`                | `/`                        | In Progress                    |
| `academy.md`                 | `/academy`                 | Ready to Build                 |
| `rd-business-improvement.md` | `/rd-business-improvement` | Ready to Build (1 section TBD) |
| `tech-industrial-support.md` | `/tech-industrial-support` | Content Draft — needs review   |

## Section Block Format

Every section in each file follows this structure:

```
## [SECTION_SLUG] — Section Display Name

| Field | Value |
...metadata table...

### Headline
...

### Body
...

### CTA
...

### Media
...
```

## Metadata Fields

- **Status**: `draft` | `in-progress` | `completed` | `not-started`
- **Audience**: who this section speaks to
- **Objective**: `convert` | `inform` | `validate` | `navigate` | `filter`
- **CTA Type**: the interaction type
- **CTA Link**: exact route or form target
- **Layout Hint**: component/layout suggestion for the developer
- **Asset Status**: `to-produce` | `to-source` | `existing`

## Rules for Agents

1. Use copy verbatim unless explicitly marked `[PLACEHOLDER]` or `[TBD]`
2. CTA buttons must link to the exact path in **CTA Link** — do not invent routes
3. All form CTAs ultimately route to `/forms` or a named form section within it
4. Do not reorder sections within a page unless the section metadata says `flexible`
5. Media descriptions are briefs, not asset names — source or produce accordingly
6. Sections marked `not-started` may still be built; they just have no prior work to preserve
