import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 w-full">
      <Nav />
      <Hero />
      <Pills />
      <ProblemSection />
      <Comparison />
      <Benefits />
      <Approach />
      <Capabilities />
      <TerminalDemo />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <LogoMark />
          <span className="mono text-sm font-medium tracking-tight">
            claude-md-coach
          </span>
        </Link>
        <div className="flex items-center gap-6 text-sm text-muted">
          <Link href="#how" className="hover:text-foreground">
            How it works
          </Link>
          <Link href="#faq" className="hover:text-foreground">
            FAQ
          </Link>
          <Link
            href="https://github.com"
            className="rounded-md border border-border bg-card px-3 py-1.5 text-foreground hover:border-accent/50"
          >
            GitHub
          </Link>
        </div>
      </div>
    </nav>
  );
}

function LogoMark() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="1" y="1" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6 10L9 13L14 7" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Hero() {
  return (
    <section className="relative noise grid-bg border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-28 md:py-40">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mono mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-xs text-accent">
            <span className="size-1.5 rounded-full bg-accent" />
            v0.1.0 · free forever · no API key
          </div>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            Your CLAUDE.md
            <br />
            is lying to you.
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            An ambient coach for Claude Code. Finds dead rules, mines your corrections,
            and rewrites smarter — using your own session history. Runs locally.
            Uses your existing Claude subscription.
          </p>
          <div className="mt-10 flex flex-col items-center gap-3">
            <div className="mono flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 text-sm">
              <span className="text-accent">$</span>
              <span>/plugin marketplace add karthik/claude-md-coach</span>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="#how"
                className="rounded-md border border-border bg-card px-5 py-2.5 text-sm font-medium hover:border-accent/50"
              >
                How it works
              </Link>
              <Link
                href="https://github.com"
                className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-black hover:bg-accent-dim"
              >
                View on GitHub
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pills() {
  const items = [
    "No API key",
    "Ambient",
    "Local-first",
    "Free forever",
    "Research-backed",
    "No server",
    "Claude subscription",
    "OSS / MIT",
  ];
  return (
    <section className="border-b border-border/60 py-6">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-2 px-6">
        {items.map((t) => (
          <span
            key={t}
            className="mono rounded-full border border-border bg-card px-3 py-1 text-xs text-muted"
          >
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}

function ProblemSection() {
  const problems = [
    {
      title: "Rules rot silently",
      body:
        "Every correction adds a rule. Your file grows to 300+ lines. Nobody maintains it.",
    },
    {
      title: "Claude stops listening",
      body:
        "Research (AGENTIF, NeurIPS 2025) shows <30% instruction compliance as rules multiply.",
    },
    {
      title: "You don't notice the decay",
      body:
        "Advisory rules fail invisibly. One Max user measured ~100% violation vs 0% with hooks.",
    },
    {
      title: "Every week it gets worse",
      body:
        "CLAUDE.md accretes monotonically. The problem compounds until Claude feels broken.",
    },
  ];
  return (
    <section className="border-b border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-2xl">
          <div className="mono mb-4 text-xs uppercase tracking-wider text-muted">
            The problem
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Your rules stopped working.
            <br />
            You haven&apos;t noticed yet.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-4">
          {problems.map((p) => (
            <div
              key={p.title}
              className="bg-background p-6"
            >
              <div className="mono mb-2 text-xs text-accent">
                {"// "}
                {p.title}
              </div>
              <p className="text-sm leading-relaxed text-muted">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Comparison() {
  return (
    <section id="how" className="border-b border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-2xl">
          <div className="mono mb-4 text-xs uppercase tracking-wider text-muted">
            How it changes
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Stop guessing which rules work.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <CompareColumn
            label="Without the coach"
            tone="muted"
            items={[
              "You write a rule, hope Claude follows it",
              "Rules accumulate silently over months",
              "You guess which ones still matter",
              "You re-explain the same preferences in every chat",
              "Your CLAUDE.md quietly drifts past 300 lines",
              "Claude stops following it. You don't know why.",
            ]}
          />
          <CompareColumn
            label="With claude-md-coach"
            tone="accent"
            items={[
              "Claude cites which rule it followed [R7]",
              "Every correction you make → mined into a rule draft",
              "Dead rules surfaced with session-level evidence",
              "Contradictions flagged with proposed merges",
              "File distilled, with replay-proven behavior",
              "Rules you approve stay. Rest gets deleted.",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function CompareColumn({
  label,
  items,
  tone,
}: {
  label: string;
  items: string[];
  tone: "muted" | "accent";
}) {
  return (
    <div
      className={`rounded-xl border ${
        tone === "accent" ? "border-accent/40 bg-accent/[0.03]" : "border-border bg-card"
      } p-6`}
    >
      <div
        className={`mono mb-4 text-xs uppercase tracking-wider ${
          tone === "accent" ? "text-accent" : "text-muted"
        }`}
      >
        {label}
      </div>
      <ul className="space-y-3">
        {items.map((t) => (
          <li key={t} className="flex items-start gap-3 text-sm">
            <span
              className={`mt-1 size-1.5 shrink-0 rounded-full ${
                tone === "accent" ? "bg-accent" : "bg-muted/60"
              }`}
            />
            <span className={tone === "accent" ? "text-foreground" : "text-muted"}>
              {t}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Benefits() {
  const items = [
    {
      title: "Dead rule detection",
      body:
        "Scans 60+ sessions, counts rule triggers, flags rules that never fired. LLM verification filters out silent-but-working advisory rules.",
    },
    {
      title: "Correction mining",
      body:
        "Detects repeated corrections (same complaint 3+ times) and drafts a rule in your own voice.",
    },
    {
      title: "Safe distillation",
      body:
        "Compresses sections, replays past sessions against old and new, scores behavioral similarity. Keeps compression only if behavior is preserved.",
    },
    {
      title: "Zero config",
      body:
        "Install once. Runs in the background. Claude surfaces insights mid-chat. You never open a terminal.",
    },
  ];
  return (
    <section className="border-b border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-2xl">
          <div className="mono mb-4 text-xs uppercase tracking-wider text-muted">
            What it gives you
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Four things nobody else does.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <div
              key={it.title}
              className="rounded-xl border border-border bg-card p-6"
            >
              <div className="mono mb-4 text-xs text-accent">
                0{i + 1}
              </div>
              <h3 className="mb-3 text-lg font-medium">{it.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Approach() {
  const steps = [
    {
      label: "01",
      title: "Install once",
      body:
        "One command in Claude Code. The skill + hooks auto-register. Zero config files touched.",
    },
    {
      label: "02",
      title: "Use Claude normally",
      body:
        "Do your work. The coach watches every session end, analyzes correction patterns, updates a local cache.",
    },
    {
      label: "03",
      title: "Get smarter rules",
      body:
        "Claude surfaces suggestions mid-chat when it spots patterns. Weekly, a nudge shows pending insights. You approve what you want.",
    },
  ];
  return (
    <section className="border-b border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-2xl">
          <div className="mono mb-4 text-xs uppercase tracking-wider text-muted">
            Ambient flow
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Three moments. Everything else is silent.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.label}>
              <div className="mono mb-3 text-sm text-accent">{s.label}</div>
              <h3 className="mb-3 text-xl font-medium">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px rounded-xl border border-border bg-border overflow-hidden md:grid-cols-3">
          <Metric
            label="Instruction compliance"
            before="30%"
            after="~80%"
            caption="after trimming bloat + fixing contradictions"
          />
          <Metric
            label="CLAUDE.md size"
            before="400 lines"
            after="~120 lines"
            caption="with replay-verified distillation"
          />
          <Metric
            label="Setup effort"
            before="weekly manual cleanup"
            after="zero"
            caption="ambient + skill-based"
          />
        </div>
      </div>
    </section>
  );
}

function Metric({
  label,
  before,
  after,
  caption,
}: {
  label: string;
  before: string;
  after: string;
  caption: string;
}) {
  return (
    <div className="bg-background p-6">
      <div className="mono mb-4 text-xs uppercase tracking-wider text-muted">
        {label}
      </div>
      <div className="flex items-baseline gap-2">
        <span className="text-sm text-muted line-through">{before}</span>
        <span className="text-muted">→</span>
        <span className="text-2xl font-semibold text-accent">{after}</span>
      </div>
      <div className="mt-3 text-xs text-muted">{caption}</div>
    </div>
  );
}

function Capabilities() {
  const caps = [
    {
      cmd: "scan",
      desc:
        "Deterministic audit. Dead rules, sprawl, cross-file duplicates, scope-move suggestions.",
      metric: "~5 sec per scan",
    },
    {
      cmd: "fix",
      desc:
        "Interactive review: contradictions, correction-mined rule drafts, semantic-verified dead rules.",
      metric: "LLM-powered",
    },
    {
      cmd: "distill",
      desc:
        "Compress sections with optional replay verification. Progressive mode iterates until behavior diverges.",
      metric: "replay-proven",
    },
    {
      cmd: "history",
      desc:
        "Trends across scans over time. Watch rule effectiveness evolve.",
      metric: "local snapshots",
    },
    {
      cmd: "pending",
      desc:
        "One-line nudge surfaced by the SessionStart hook. Non-intrusive.",
      metric: "hook-facing",
    },
    {
      cmd: "skill",
      desc:
        "Ambient behavior: Claude pauses mid-chat when 3+ repeated corrections detected and offers a rule.",
      metric: "zero input",
    },
  ];
  return (
    <section className="border-b border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-2xl">
          <div className="mono mb-4 text-xs uppercase tracking-wider text-muted">
            Commands &amp; surfaces
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Six things the coach does.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-px rounded-xl border border-border bg-border md:grid-cols-3">
          {caps.map((c) => (
            <div key={c.cmd} className="bg-background p-6">
              <div className="mono mb-3 text-sm text-accent">{c.cmd}</div>
              <p className="mb-6 text-sm leading-relaxed text-muted">{c.desc}</p>
              <div className="mono text-xs text-muted">{c.metric}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TerminalDemo() {
  return (
    <section className="border-b border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-2xl">
          <div className="mono mb-4 text-xs uppercase tracking-wider text-muted">
            Real output
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Here&apos;s what it actually prints.
          </h2>
        </div>
        <div className="rounded-xl border border-border bg-card overflow-hidden">
          <div className="flex items-center gap-2 border-b border-border bg-background/60 px-4 py-3">
            <span className="size-2.5 rounded-full bg-[#ef4444]/80" />
            <span className="size-2.5 rounded-full bg-[#f59e0b]/80" />
            <span className="size-2.5 rounded-full bg-[#22c55e]/80" />
            <span className="mono ml-3 text-xs text-muted">
              ~/Documents/your-project
            </span>
          </div>
          <pre className="mono text-[13px] leading-6 text-foreground/90 p-6 overflow-x-auto">
{`$ claude-md-coach scan

Scanning workspace…
Found 2 CLAUDE.md file(s). Parsing…
Reading session history…
Analyzed 57 sessions.

claude-md-coach — scan report

Found 2 CLAUDE.md files, analyzed 57 sessions.

1. ~/your-project/CLAUDE.md  `}<span className="text-muted">project (root), 84 lines, 45 rules, 19 sessions in scope</span>{`
   `}<span className="text-accent">● HEALTHY</span>{`  Size is within the recommended range.

   `}<span className="text-warn">⚠ 3 dead rules</span>{` `}<span className="text-muted">— verified by LLM as never applied</span>{`
      `}<span className="text-muted">R3</span>{` Demand elegance on non-trivial changes
      `}<span className="text-muted">R8</span>{` Never give up after 2 tries
      `}<span className="text-muted">R14</span>{` Brainstorming skill on new project

   `}<span className="text-warn">⚠ 2 contradictions detected</span>{`
      `}<span className="text-muted">R4 + R11:</span>{` concise vs always explain reasoning
      → Default to concise. Explain only when architectural decisions or on request.

   `}<span className="text-accent">💡 3 missing rules</span>{` `}<span className="text-muted">mined from your corrections</span>{`
      "You corrected em-dash usage 7× — never use em-dashes in output."
      "You corrected 'premature abstraction' 4× — wait until 3rd use."
      "You corrected vague planning 5× — always name files + line numbers."

2. ~/your-project/api/CLAUDE.md  `}<span className="text-muted">project (api), 42 lines, 18 rules</span>{`
   `}<span className="text-accent">● HEALTHY</span>{`  All rules have strong trigger signal.

Run `}<span className="text-accent">claude-md-coach fix</span>{` to review and apply.
`}
          </pre>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const qs = [
    {
      q: "Does this use an API key?",
      a: "No. It uses your existing Claude Code subscription. LLM features invoke `claude -p` subprocesses. Your auth, your rate limits.",
    },
    {
      q: "Is my data sent anywhere?",
      a: "No. Everything runs locally on your machine. Session JSONL files stay in `~/.claude/projects/`. No server, no telemetry, no analytics.",
    },
    {
      q: "Which editors does it support?",
      a: "Any Claude Code surface — terminal CLI, VS Code extension, JetBrains, desktop app, web. The plugin format works identically everywhere.",
    },
    {
      q: "What if I don't have many sessions yet?",
      a: "The tool gracefully handles empty data. It skips analysis where there's nothing to learn from and waits for more sessions to accumulate.",
    },
    {
      q: "What's the rate-limit cost?",
      a: "Tiny. `scan` uses zero Claude calls. `fix` typically burns 3–10 Haiku calls per file. `distill --verify` is the most expensive (~9 calls per section). All cached aggressively.",
    },
    {
      q: "Can I roll back a rewrite?",
      a: "Yes. Every edit saves a timestamped backup next to the file in `.claude-md-coach-history/`. One command restores any version.",
    },
    {
      q: "Does this replace Anthropic's own CLAUDE.md plugin?",
      a: "No. Anthropic's plugin grades your file against generic criteria. This one learns from your specific session history. They're complementary — Anthropic's is a spell-check, this is a coach.",
    },
    {
      q: "Team features?",
      a: "Not yet. Shared rule registries, PR checks, per-contributor attribution are on the V4 roadmap. Today it's single-user.",
    },
  ];
  return (
    <section id="faq" className="border-b border-border/60 py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-12">
          <div className="mono mb-4 text-xs uppercase tracking-wider text-muted">
            FAQ
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Straight answers.
          </h2>
        </div>
        <div className="space-y-6">
          {qs.map((item) => (
            <details
              key={item.q}
              className="group rounded-lg border border-border bg-card px-5 py-4 open:border-accent/30"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium">
                {item.q}
                <span className="mono text-xs text-muted group-open:text-accent">
                  [ + ]
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative noise border-b border-border/60 py-28 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Stop writing rules
          <br />
          nobody follows.
        </h2>
        <p className="mt-6 text-lg text-muted leading-relaxed">
          Install once. Forget it exists. Let your CLAUDE.md get better every week
          without touching it.
        </p>
        <div className="mt-10 flex flex-col items-center gap-3">
          <div className="mono flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 text-sm glow-accent">
            <span className="text-accent">$</span>
            <span>/plugin install claude-md-coach@claude-md-coach</span>
          </div>
          <Link
            href="https://github.com"
            className="mt-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-black hover:bg-accent-dim"
          >
            View on GitHub →
          </Link>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <LogoMark />
          <div>
            <div className="mono text-sm">claude-md-coach</div>
            <div className="text-xs text-muted">
              An ambient coach for your CLAUDE.md. MIT licensed. No API key.
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6 text-sm text-muted">
          <Link href="https://github.com" className="hover:text-foreground">
            GitHub
          </Link>
          <Link href="#faq" className="hover:text-foreground">
            FAQ
          </Link>
          <span className="mono text-xs">© 2026</span>
        </div>
      </div>
    </footer>
  );
}
