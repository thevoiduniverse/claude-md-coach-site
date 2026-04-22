import Link from "next/link";
import { InteractiveWatermark, CoachTapProvider, CoachTapHotspot } from "./watermark-wrapper";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 w-full">
      <Hero />
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
    <nav className="absolute top-0 z-50 w-full">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-2 text-[#14110f]">
          <LogoMark solid />
          <span className="text-sm font-semibold tracking-tight">
            claude-md-coach
          </span>
        </Link>
        <div className="flex items-center gap-6 text-sm text-[#14110f]">
          <Link href="#how" className="opacity-80 hover:opacity-100">
            How it works
          </Link>
          <Link href="#faq" className="opacity-80 hover:opacity-100">
            FAQ
          </Link>
          <Link
            href="https://github.com/thevoiduniverse/claude-md-coach"
            className="rounded-full bg-[#14110f] px-4 py-2 text-[#f4efe7] hover:bg-black"
          >
            View on GitHub
          </Link>
        </div>
      </div>
    </nav>
  );
}

function LogoMark({ solid = false }: { solid?: boolean }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1"
        y="1"
        width="18"
        height="18"
        rx="4"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M6 10L9 13L14 7"
        stroke={solid ? "currentColor" : "var(--accent)"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Hero() {
  return (
    <CoachTapProvider>
      <HeroInner />
    </CoachTapProvider>
  );
}

function HeroInner() {
  return (
    <section
      className="relative overflow-hidden min-h-[92vh] flex flex-col select-none"
      style={{
        backgroundColor: "#d04220",
        backgroundImage:
          "radial-gradient(circle at 50% -20%, rgba(255,180,120,0.22), transparent 60%), radial-gradient(circle at 90% 120%, rgba(120,30,10,0.35), transparent 60%)",
        color: "#14110f",
      }}
    >
      <CoachTapHotspot>
        <Nav />
        <InteractiveWatermark />
      </CoachTapHotspot>
      <div className="pointer-events-none relative z-10 flex flex-1 flex-col justify-center pt-32 pb-16">
        <div className="pointer-events-auto mx-auto w-full max-w-6xl px-6">
          <h1
            className="text-[54px] sm:text-[72px] md:text-[96px] lg:text-[120px] font-black tracking-[-0.04em] leading-[0.92]"
            style={{ color: "#14110f" }}
          >
            A <span style={{ color: "#ffffff" }}>coach</span>
            <br />
            for your CLAUDE.md.
          </h1>
          <p
            className="mt-8 max-w-2xl text-base md:text-lg leading-relaxed"
            style={{ color: "#2a1d14" }}
          >
            Claude watches how you work across every session, deletes the
            rules that don&apos;t do anything, drafts the ones you keep correcting
            manually, and quietly keeps your CLAUDE.md sharp. Without you
            lifting a finger.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              href="https://github.com/thevoiduniverse/claude-md-coach"
              className="rounded-full px-6 py-3 text-sm font-medium hover:opacity-90"
              style={{ background: "#14110f", color: "#f4efe7" }}
            >
              Get Started
            </Link>
            <Link
              href="#how"
              className="rounded-full px-6 py-3 text-sm font-medium hover:bg-black/5"
              style={{ border: "1px solid rgba(20,17,15,0.85)", color: "#14110f" }}
            >
              How It Works
            </Link>
          </div>
        </div>
      </div>
      <HeroFeatureRow />
    </section>
  );
}

function HeroFeatureRow() {
  const items = [
    "YOUR HISTORY",
    "YOUR RULES",
    "NO API KEY",
    "NO SERVER",
    "LOCAL-FIRST",
    "AMBIENT",
    "FREE FOREVER",
  ];
  return (
    <div
      className="relative z-10"
      style={{
        borderTop: "1px solid rgba(20,17,15,0.3)",
        background: "rgba(20,17,15,0.06)",
      }}
    >
      <div
        className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 py-4 text-[11px] font-semibold tracking-[0.18em]"
        style={{ color: "#14110f" }}
      >
        {items.map((t, i) => (
          <span key={t} className="flex items-center gap-4">
            <span>{t}</span>
            {i < items.length - 1 && (
              <span
                className="hidden h-3 w-px md:inline-block"
                style={{ background: "rgba(20,17,15,0.25)" }}
              />
            )}
          </span>
        ))}
      </div>
    </div>
  );
}

function Pills() {
  return null;
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5">
      <span className="mono text-[11px] uppercase tracking-[0.22em] text-accent">
        {children}
      </span>
    </div>
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
    <section className="relative border-b border-border/60 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 max-w-3xl">
          <SectionLabel>The problem</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
            Your rules stopped working.
            <br />
            <span className="text-muted">You haven&apos;t noticed yet.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-px rounded-2xl border border-border bg-border overflow-hidden md:grid-cols-2 lg:grid-cols-4">
          {problems.map((p, i) => (
            <div
              key={p.title}
              className="relative bg-background p-7 overflow-hidden"
            >
              <span className="absolute -bottom-8 -right-4 text-[160px] font-black leading-none text-accent/[0.07] select-none pointer-events-none">
                {(i + 1).toString().padStart(2, "0")}
              </span>
              <div className="relative">
                <div className="mono mb-4 text-[11px] uppercase tracking-[0.18em] text-accent">
                  {p.title}
                </div>
                <p className="text-[15px] leading-relaxed text-foreground/80">
                  {p.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Comparison() {
  return (
    <section id="how" className="relative border-b border-border/60 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 max-w-3xl">
          <SectionLabel>How it changes</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
            Stop guessing which rules work.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
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
  const isAccent = tone === "accent";
  return (
    <div
      className={`relative overflow-hidden rounded-2xl p-8 ${
        isAccent
          ? "border border-accent/50 bg-gradient-to-br from-accent/[0.08] to-accent/[0.02]"
          : "border border-border bg-card"
      }`}
      style={
        isAccent
          ? { boxShadow: "0 0 0 1px rgba(232,99,45,0.18), 0 24px 60px -20px rgba(232,99,45,0.22)" }
          : undefined
      }
    >
      <div className="mb-6 flex items-center gap-3">
        <span
          className={`h-2 w-2 rounded-full ${
            isAccent ? "bg-accent" : "bg-muted/60"
          }`}
        />
        <span
          className={`mono text-[11px] uppercase tracking-[0.22em] ${
            isAccent ? "text-accent" : "text-muted"
          }`}
        >
          {label}
        </span>
      </div>
      <ul className="space-y-4">
        {items.map((t) => (
          <li key={t} className="flex items-start gap-3 text-[15px]">
            <span
              className={`mono mt-[3px] text-[11px] shrink-0 ${
                isAccent ? "text-accent" : "text-muted/70"
              }`}
            >
              {isAccent ? "→" : "×"}
            </span>
            <span
              className={
                isAccent ? "text-foreground leading-relaxed" : "text-muted leading-relaxed line-through decoration-muted/30"
              }
            >
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
    <section className="relative border-b border-border/60 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 max-w-3xl">
          <SectionLabel>What it gives you</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
            Four things nobody else does.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <div
              key={it.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-to-b from-card to-background p-7 transition-colors hover:border-accent/40"
            >
              <span className="absolute -right-4 -top-10 text-[140px] font-black leading-none text-accent/[0.08] select-none pointer-events-none transition-colors group-hover:text-accent/[0.14]">
                {(i + 1).toString().padStart(2, "0")}
              </span>
              <div className="relative">
                <div className="mono mb-6 text-[11px] text-accent">
                  0{i + 1}
                </div>
                <h3 className="mb-3 text-lg font-semibold tracking-tight">
                  {it.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-muted">{it.body}</p>
              </div>
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
    <section className="relative border-b border-border/60 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 max-w-3xl">
          <SectionLabel>Ambient flow</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
            Three moments.
            <br />
            <span className="text-muted">Everything else is silent.</span>
          </h2>
        </div>
        <div className="relative grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="pointer-events-none absolute inset-x-0 top-[24px] hidden h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent md:block" />
          {steps.map((s) => (
            <div key={s.label} className="relative">
              <div className="mb-5 flex items-center gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-full border border-accent/50 bg-background mono text-sm text-accent">
                  {s.label}
                </span>
              </div>
              <h3 className="mb-3 text-xl font-semibold tracking-tight">{s.title}</h3>
              <p className="text-[14px] leading-relaxed text-muted">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 gap-5 md:grid-cols-3">
          <Metric
            label="Instruction compliance"
            beforeVal={30}
            afterVal={80}
            beforeUnit="%"
            afterUnit="%"
            caption="after trimming bloat + fixing contradictions"
          />
          <Metric
            label="CLAUDE.md size"
            beforeVal={400}
            afterVal={120}
            beforeUnit=" lines"
            afterUnit=" lines"
            inverted
            caption="with replay-verified distillation"
          />
          <Metric
            label="Setup effort"
            before="weekly cleanup"
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
  beforeVal,
  afterVal,
  beforeUnit,
  afterUnit,
  caption,
  inverted = false,
}: {
  label: string;
  before?: string;
  after?: string;
  beforeVal?: number;
  afterVal?: number;
  beforeUnit?: string;
  afterUnit?: string;
  caption: string;
  inverted?: boolean;
}) {
  const hasBars = beforeVal !== undefined && afterVal !== undefined;
  const max = hasBars ? Math.max(beforeVal!, afterVal!) : 0;
  const beforeWidth = hasBars ? (beforeVal! / max) * 100 : 0;
  const afterWidth = hasBars ? (afterVal! / max) * 100 : 0;

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-6">
      <div className="mono mb-5 text-[11px] uppercase tracking-[0.2em] text-muted">
        {label}
      </div>
      {hasBars ? (
        <div className="space-y-3">
          <div>
            <div className="mb-1 flex items-baseline justify-between">
              <span className="mono text-[10px] uppercase tracking-widest text-muted">Before</span>
              <span className="mono text-sm text-muted line-through">
                {beforeVal}
                {beforeUnit}
              </span>
            </div>
            <div className="h-1 w-full rounded-full bg-border/60">
              <div
                className="h-full rounded-full bg-muted/40"
                style={{ width: `${beforeWidth}%` }}
              />
            </div>
          </div>
          <div>
            <div className="mb-1 flex items-baseline justify-between">
              <span className="mono text-[10px] uppercase tracking-widest text-accent">After</span>
              <span className="text-2xl font-semibold tracking-tight text-accent">
                {afterVal}
                <span className="mono text-sm font-normal">{afterUnit}</span>
              </span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-border/60">
              <div
                className="h-full rounded-full bg-accent"
                style={{ width: `${inverted ? 100 - afterWidth + afterWidth : afterWidth}%` }}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-baseline justify-between">
          <span className="mono text-sm text-muted line-through">{before}</span>
          <span className="text-2xl font-semibold text-accent">{after}</span>
        </div>
      )}
      <div className="mt-5 text-[12px] leading-relaxed text-muted">{caption}</div>
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
      desc: "Trends across scans over time. Watch rule effectiveness evolve.",
      metric: "local snapshots",
    },
    {
      cmd: "pending",
      desc: "One-line nudge surfaced by the SessionStart hook. Non-intrusive.",
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
    <section className="relative border-b border-border/60 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 max-w-3xl">
          <SectionLabel>Commands &amp; surfaces</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
            Six things the coach does.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {caps.map((c) => (
            <div
              key={c.cmd}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all hover:border-accent/50 hover:shadow-[0_24px_60px_-30px_rgba(232,99,45,0.45)]"
            >
              <div className="mono mb-6 flex items-baseline gap-2 text-accent">
                <span className="opacity-60">$</span>
                <span className="text-lg font-semibold tracking-tight">
                  {c.cmd}
                </span>
              </div>
              <p className="mb-8 text-[14px] leading-relaxed text-foreground/80">
                {c.desc}
              </p>
              <div className="flex items-center gap-2 border-t border-border/60 pt-4">
                <span className="size-1.5 rounded-full bg-accent/70" />
                <span className="mono text-[11px] uppercase tracking-[0.18em] text-muted">
                  {c.metric}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TerminalDemo() {
  return (
    <section className="relative border-b border-border/60 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 max-w-3xl">
          <SectionLabel>Real output</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
            Here&apos;s what it actually prints.
          </h2>
        </div>
        <div className="terminal-surface rounded-xl overflow-hidden">
          <div className="terminal-bar flex items-center gap-2 px-4 py-3">
            <span className="size-2.5 rounded-full bg-[#ef4444]/80" />
            <span className="size-2.5 rounded-full bg-[#f59e0b]/80" />
            <span className="size-2.5 rounded-full bg-[#22c55e]/80" />
            <span className="mono ml-3 text-xs text-white/50">
              ~/Documents/your-project
            </span>
          </div>
          <pre className="mono text-[13px] leading-6 text-white/90 p-6 overflow-x-auto">
{`$ claude-md-coach scan

Scanning workspace…
Found 2 CLAUDE.md file(s). Parsing…
Reading session history…
Analyzed 57 sessions.

claude-md-coach · scan report

Found 2 CLAUDE.md files, analyzed 57 sessions.

1. ~/your-project/CLAUDE.md  `}<span className="text-white/50">project (root), 84 lines, 45 rules, 19 sessions in scope</span>{`
   `}<span className="text-[#34d399]">● HEALTHY</span>{`  Size is within the recommended range.

   `}<span className="text-[#f59e0b]">⚠ 3 dead rules</span>{` `}<span className="text-white/50">· verified by LLM as never applied</span>{`
      `}<span className="text-white/50">R3</span>{` Demand elegance on non-trivial changes
      `}<span className="text-white/50">R8</span>{` Never give up after 2 tries
      `}<span className="text-white/50">R14</span>{` Brainstorming skill on new project

   `}<span className="text-[#f59e0b]">⚠ 2 contradictions detected</span>{`
      `}<span className="text-white/50">R4 + R11:</span>{` concise vs always explain reasoning
      → Default to concise. Explain only when architectural decisions or on request.

   `}<span className="text-[#34d399]">💡 3 missing rules</span>{` `}<span className="text-white/50">mined from your corrections</span>{`
      "You corrected em-dash usage 7×. Never use em-dashes in output."
      "You corrected 'premature abstraction' 4×. Wait until 3rd use."
      "You corrected vague planning 5×. Always name files + line numbers."

2. ~/your-project/api/CLAUDE.md  `}<span className="text-white/50">project (api), 42 lines, 18 rules</span>{`
   `}<span className="text-[#34d399]">● HEALTHY</span>{`  All rules have strong trigger signal.

Run `}<span className="text-[#34d399]">claude-md-coach fix</span>{` to review and apply.
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
      a: "Any Claude Code surface: terminal CLI, VS Code extension, JetBrains, desktop app, web. The plugin format works identically everywhere.",
    },
    {
      q: "What if I don't have many sessions yet?",
      a: "The tool gracefully handles empty data. It skips analysis where there's nothing to learn from and waits for more sessions to accumulate.",
    },
    {
      q: "What's the rate-limit cost?",
      a: "Tiny. `scan` uses zero Claude calls. `fix` typically burns 3 to 10 Haiku calls per file. `distill` with replay verification is the most expensive (~9 calls per section). All cached aggressively.",
    },
    {
      q: "Can I roll back a rewrite?",
      a: "Yes. Every edit saves a timestamped backup next to the file in `.claude-md-coach-history/`. One command restores any version.",
    },
    {
      q: "Does this replace Anthropic's own CLAUDE.md plugin?",
      a: "No. Anthropic's plugin grades your file against generic criteria. This one learns from your specific session history. They're complementary. Anthropic's is a spell-check, this is a coach.",
    },
    {
      q: "Team features?",
      a: "Not yet. Shared rule registries, PR checks, per-contributor attribution are on the V4 roadmap. Today it's single-user.",
    },
  ];
  return (
    <section id="faq" className="relative border-b border-border/60 py-28">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-14">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
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
          The CLAUDE.md
          <br />
          that maintains itself.
        </h2>
        <p className="mt-6 text-lg text-muted leading-relaxed">
          Install once. Forget it exists. Your rules stay sharp, every week,
          without you lifting a finger.
        </p>
        <div className="mt-10 flex flex-col items-center gap-3">
          <div className="mono flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 text-sm glow-accent">
            <span className="text-accent">$</span>
            <span>/plugin install claude-md-coach@claude-md-coach</span>
          </div>
          <Link
            href="https://github.com/thevoiduniverse/claude-md-coach"
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
          <Link href="https://github.com/thevoiduniverse/claude-md-coach" className="hover:text-foreground">
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
