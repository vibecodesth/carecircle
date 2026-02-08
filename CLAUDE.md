# CLAUDE.md — CareCircle

## Project
**CareCircle** — Coordinate Family Care, Together. Siblings coordinate schedules, medications, and expenses for aging parents.

## Claude Code + Codex Guidelines

### Model & Collaboration Strategy
- Use **Opus** for system-level planning, cross-module refactors, and ambiguous/problem-finding tasks
- Use **Sonnet** for well-scoped, local changes and straightforward implementations
- Treat **Codex** as primary code-generation engine; Claude focuses on planning, coordination, review
- Pipeline: Opus plan → Sonnet tasks → Codex implement → Review & polish

### Session & Token Discipline
- Clear session history before unrelated tasks; treat each task as fresh context
- Keep CLAUDE.md concise; push detailed specs into `docs/`
- Prefer minimal context window for small diffs

### Tools & Skills
- Use `.claude/ralph/` for PRD-driven autonomous development
- Use `.claude/superpowers/` for planning, TDD, subagent-driven development
- Prefer project tools over manual work
- Parallelize: Sonnet agents for subtasks, Codex for implementation, Opus for design review

### Review & Quality
- Multi-AI review: Sonnet quick pass → Opus deep pass → Codex different-brain review
- Focus on: security (HIPAA-aware), type safety, edge cases
- Small, meaningful commits at logical stopping points

## Project Structure
```
app/            – Next.js App Router pages
app/api/        – API routes
components/     – React components
lib/            – Utility functions
types/          – TypeScript types
public/         – Static assets
docs/           – Specs, flows, API docs
```

## Package Manager
npm (default Next.js). Do NOT use yarn or pnpm unless migrated.

## Common Commands
```bash
npm run dev     # Start dev server
npm run build   # Production build
npm run lint    # ESLint
npx tsc --noEmit # Type check
```

## Tech Stack
- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS

## Product Context
- Target: Adult siblings caring for aging parents
- Core insight: Care burden falls on one person not because others don't care, but because there's no coordination system
- Zero-to-One: Sibling care coordination, not health updates broadcasting
- Key features: Care schedule, medication tracking + confirmation, medical timeline, expense splitting, emergency alerts
- Pricing: Free (basic) | Pro $10/mo per family
- IMPORTANT: This is an emotionally sensitive domain. Copy must be empathetic, not salesy.
- COMPLIANCE: Be HIPAA-aware in all data handling decisions
