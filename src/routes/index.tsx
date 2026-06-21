import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  CreditCard,
  FileCheck2,
  Fingerprint,
  Globe,
  GraduationCap,
  HeartPulse,
  IdCard,
  LayoutDashboard,
  LineChart,
  Lock,
  Palette,
  PlayCircle,
  Scan,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Truck,
  UserCheck,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import heroDashboard from "@/assets/hero-dashboard.jpg";
import heroBg from "@/assets/hero-bg.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Trust Point 360 — White-Label Workforce Compliance Platform" },
      {
        name: "description",
        content:
          "Launch your own branded employee screening, background check, identity verification, I-9 and compliance business. The Shopify for workforce compliance.",
      },
      { property: "og:title", content: "Trust Point 360 — Launch Your Own Screening Business" },
      {
        property: "og:description",
        content:
          "White-label background screening, identity verification, drug testing, fingerprinting, and onboarding under your own brand.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Landing,
});

/* ----------------------------- Hero ----------------------------- */

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-background">
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-x-0 top-0 z-0 h-[520px] w-full object-cover object-center opacity-100 sm:h-[580px] lg:h-[640px]"
      />
      <div className="absolute inset-x-0 top-0 z-0 h-[520px] bg-gradient-to-r from-background/95 via-background/65 via-45% to-background/10 sm:h-[580px] lg:h-[640px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="max-w-2xl text-left animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated/90 px-3.5 py-1.5 text-xs font-medium text-muted-foreground shadow-card backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-brand-green" />
            The Shopify for workforce compliance
          </div>
          <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Launch your own employee screening &{" "}
            <span className="bg-brand-gradient bg-clip-text text-transparent">compliance business</span>
          </h1>
          <p className="mt-6 max-w-xl text-balance text-lg text-muted-foreground sm:text-xl">
            Offer background checks, identity verification, I-9 onboarding, drug testing, fingerprinting,
            and compliance tracking — under your own brand, in your local market.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button variant="hero" size="xl" className="w-full sm:w-auto">
              Start free trial <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="xl" className="w-full sm:w-auto">
              <PlayCircle className="h-4 w-4" /> Book live demo
            </Button>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            14-day free trial · No credit card required · Cancel anytime
          </p>
        </div>

        <div className="relative mx-auto mt-16 max-w-6xl">
          <div className="absolute -inset-x-12 -inset-y-8 -z-10 rounded-[3rem] bg-brand-gradient opacity-10 blur-3xl" />
          <div className="overflow-hidden rounded-2xl border border-border bg-surface-elevated shadow-elegant">
            <img
              src={heroDashboard}
              alt="Trust Point 360 dashboard showing candidate onboarding, identity verification, and background check status"
              width={1600}
              height={1024}
              className="block w-full"
            />
          </div>
          {/* Floating cards */}
          <div className="absolute -left-4 top-12 hidden w-56 rounded-xl border border-border bg-surface-elevated p-3 shadow-elegant animate-float lg:block">
            <div className="flex items-center gap-2.5">
              <div className="grid h-9 w-9 place-items-center rounded-lg bg-accent text-brand-green">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-semibold text-foreground">Identity verified</div>
                <div className="truncate text-[11px] text-muted-foreground">Liveness · 99.4% match</div>
              </div>
            </div>
          </div>
          <div className="absolute -right-4 bottom-12 hidden w-60 rounded-xl border border-border bg-surface-elevated p-3 shadow-elegant animate-float lg:block" style={{ animationDelay: "1.5s" }}>
            <div className="flex items-center gap-2.5">
              <div className="grid h-9 w-9 place-items-center rounded-lg bg-accent text-brand-green">
                <LineChart className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-semibold text-foreground">MRR this month</div>
                <div className="truncate text-[11px] text-muted-foreground">$14,820 · +18.2%</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <p className="text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Trusted by entrepreneurs building the next generation of local compliance providers
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6">
            {["FBI-Approved", "SOC 2", "GDPR Ready", "E-Verify", "FCRA", "PBSA"].map((b) => (
              <div
                key={b}
                className="flex items-center justify-center rounded-lg border border-border bg-surface-elevated/90 px-4 py-3 text-xs font-semibold tracking-wide text-muted-foreground shadow-card backdrop-blur"
              >
                {b}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- How it works --------------------------- */

const steps = [
  {
    n: "01",
    icon: Palette,
    title: "Create your brand",
    desc: "Upload your logo, pick your colors, connect a custom domain, and customize every candidate email.",
    bullets: ["Upload logo", "Choose colors", "Custom domain", "Custom emails"],
  },
  {
    n: "02",
    icon: Users,
    title: "Invite your clients",
    desc: "Onboard local businesses in minutes with a portal that looks like it was built by your company.",
    bullets: ["Staffing agencies", "Security firms", "Healthcare", "Construction"],
  },
  {
    n: "03",
    icon: Workflow,
    title: "Process employees",
    desc: "Run end-to-end screening and onboarding from a single beautiful dashboard.",
    bullets: ["Identity verification", "Background checks", "Drug & fingerprints", "I-9 & documents"],
  },
  {
    n: "04",
    icon: CreditCard,
    title: "Generate recurring revenue",
    desc: "Charge per screening, per seat, or as monthly compliance retainers — you set the pricing.",
    bullets: ["Per-screen pricing", "Monthly retainers", "Onboarding packages", "Credential tracking"],
  },
];

function HowItWorks() {
  return (
    <section id="how" className="border-t border-border bg-surface py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How it works"
          title="From zero to your own compliance business in 4 steps"
          subtitle="No engineering. No infrastructure. No upfront capital. Just turn on the platform under your brand and start onboarding clients."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="flex items-center justify-between">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-brand-green">
                  <s.icon className="h-5 w-5" />
                </div>
                <span className="font-display text-sm font-bold tracking-widest text-muted-foreground">
                  {s.n}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <ul className="mt-5 space-y-2">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-foreground/80">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-green" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Features ----------------------------- */

const featureGroups = [
  {
    icon: Palette,
    title: "White-label platform",
    items: ["Custom logo & colors", "Custom domain & emails", "Branded client portal", "Branded candidate portal", "Custom pricing & invoices"],
  },
  {
    icon: Scan,
    title: "AI identity verification",
    items: ["Driver license & passport", "State ID & document auth", "Selfie + face match", "Liveness detection", "Fraud risk signals"],
  },
  {
    icon: FileCheck2,
    title: "Digital onboarding",
    items: ["Digital hiring packets", "Offer letters & W-4", "Direct deposit forms", "Policy acknowledgments", "Electronic signatures"],
  },
  {
    icon: IdCard,
    title: "I-9 management",
    items: ["Section 1 & 2 workflow", "Document storage", "Audit trail & alerts", "E-Verify integration ready"],
  },
  {
    icon: ShieldCheck,
    title: "Background screening",
    items: ["Criminal county / federal / national", "Employment & education verify", "Professional license", "Motor vehicle records"],
  },
  {
    icon: HeartPulse,
    title: "Drug testing",
    items: ["Order & track tests", "Collection-site locator", "Chain-of-custody tracking", "Compliance reporting"],
  },
  {
    icon: Fingerprint,
    title: "Fingerprinting",
    items: ["Live Scan requests", "Appointment scheduling", "Real-time status tracking", "Results monitoring"],
  },
  {
    icon: BadgeCheck,
    title: "Compliance management",
    items: ["License & cert tracking", "Training tracking", "Expiration alerts", "Audit reporting"],
  },
  {
    icon: LayoutDashboard,
    title: "CRM & billing",
    items: ["Lead & pipeline tracking", "Subscription + per-report billing", "Invoice generation", "Reseller revenue tracking"],
  },
];

function Features() {
  return (
    <section id="features" className="border-t border-border py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Platform"
          title="Everything you need to run a modern screening business"
          subtitle="A complete white-label workforce compliance stack — identity, screening, onboarding, billing, and CRM in one platform."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featureGroups.map((g) => (
            <div
              key={g.title}
              className="rounded-2xl border border-border bg-card p-7 shadow-card transition-all hover:border-brand-green/50 hover:shadow-elegant"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-navy-gradient text-white">
                <g.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{g.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {g.items.map((it) => (
                  <li key={it} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------ Revenue calculator ------------------------ */

function RevenueCalculator() {
  const [clients, setClients] = useState(10);
  const [employees, setEmployees] = useState(50);
  const [perScreen, setPerScreen] = useState(75);
  const [monthlyRetainer, setMonthlyRetainer] = useState(149);

  const { screens, screenRevenue, retainerRevenue, mrr, annual } = useMemo(() => {
    const screens = clients * employees;
    const screenRevenue = screens * perScreen;
    const retainerRevenue = clients * monthlyRetainer;
    const mrr = screenRevenue + retainerRevenue;
    return { screens, screenRevenue, retainerRevenue, mrr, annual: mrr * 12 };
  }, [clients, employees, perScreen, monthlyRetainer]);

  const fmt = (n: number) =>
    n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

  return (
    <section id="revenue" className="relative overflow-hidden border-t border-border bg-navy-gradient py-24 text-white">
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "var(--gradient-hero)" }} />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-medium backdrop-blur">
            <LineChart className="h-3.5 w-3.5 text-brand-green" />
            Revenue opportunity
          </div>
          <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight sm:text-5xl">
            See how fast a local screening business compounds
          </h2>
          <p className="mt-5 text-balance text-lg text-white/70">
            Adjust the numbers below. This is what your business could look like by month 12.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-6 lg:grid-cols-5">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur lg:col-span-3">
            <div className="space-y-7">
              <Slider label="Local clients" value={clients} min={1} max={100} step={1} onChange={setClients} suffix="clients" />
              <Slider label="Employees screened per client / month" value={employees} min={1} max={200} step={1} onChange={setEmployees} suffix="employees" />
              <Slider label="Average screening revenue" value={perScreen} min={25} max={250} step={5} onChange={setPerScreen} prefix="$" />
              <Slider label="Monthly compliance retainer / client" value={monthlyRetainer} min={0} max={500} step={10} onChange={setMonthlyRetainer} prefix="$" />
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur lg:col-span-2">
            <div className="text-sm font-medium uppercase tracking-widest text-white/60">Projection</div>
            <div className="mt-4 space-y-5">
              <Stat label="Screens / month" value={screens.toLocaleString()} />
              <Stat label="Screening revenue" value={fmt(screenRevenue)} />
              <Stat label="Recurring retainers" value={fmt(retainerRevenue)} />
              <div className="border-t border-white/10 pt-5">
                <div className="text-xs uppercase tracking-widest text-white/60">Monthly recurring</div>
                <div className="mt-1 font-display text-4xl font-bold text-brand-green">{fmt(mrr)}</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-white/60">Annual projection</div>
                <div className="mt-1 font-display text-3xl font-bold">{fmt(annual)}</div>
              </div>
              <Button variant="hero" size="lg" className="mt-2 w-full">
                Start building this <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Slider({
  label, value, min, max, step, onChange, prefix = "", suffix = "",
}: {
  label: string; value: number; min: number; max: number; step: number;
  onChange: (n: number) => void; prefix?: string; suffix?: string;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <label className="text-sm font-medium text-white/80">{label}</label>
        <span className="font-display text-lg font-semibold text-white">
          {prefix}{value.toLocaleString()}{suffix ? ` ${suffix}` : ""}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full bg-white/15 accent-[oklch(0.72_0.17_132)]"
      />
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between">
      <span className="text-sm text-white/70">{label}</span>
      <span className="font-display text-xl font-semibold">{value}</span>
    </div>
  );
}

/* ----------------------------- Pricing ----------------------------- */

const tiers = [
  {
    name: "Starter",
    price: 99,
    perfect: "Local entrepreneurs",
    cta: "Start building your business",
    variant: "outline" as const,
    perReport: "$35 per report",
    features: [
      "White-label branding",
      "Custom logo",
      "Candidate & client portals",
      "Background check ordering",
      "Identity verification",
      "I-9 forms",
      "Basic CRM",
      "Email notifications",
      "Up to 5 staff users",
    ],
  },
  {
    name: "Professional",
    price: 199,
    perfect: "Growing agencies",
    cta: "Scale your local market",
    variant: "hero" as const,
    featured: true,
    perReport: "$30 per report",
    features: [
      "Everything in Starter",
      "Custom domain",
      "Drug testing module",
      "Fingerprinting module",
      "Advanced CRM",
      "Compliance dashboard",
      "Training & license tracking",
      "25 staff users",
      "API access · Priority support",
    ],
  },
  {
    name: "Enterprise",
    price: 299,
    perfect: "Regional providers",
    cta: "Build a regional empire",
    variant: "navy" as const,
    perReport: "$25 per report",
    features: [
      "Everything in Professional",
      "Multi-location management",
      "Sub-accounts & reseller mgmt",
      "Private-label websites",
      "Advanced analytics",
      "Custom workflows",
      "Unlimited users",
      "Enterprise API",
      "Dedicated success manager",
    ],
  },
];

function Pricing() {
  return (
    <section id="pricing" className="border-t border-border py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Pricing"
          title="One platform. Three plans. Your brand on top."
          subtitle="Start for $99/month and scale into a regional compliance provider. No transaction fees on your customer billing."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative flex flex-col rounded-2xl border bg-card p-8 shadow-card transition-all ${
                t.featured
                  ? "border-brand-green shadow-elegant ring-1 ring-brand-green/40 lg:-translate-y-2"
                  : "border-border hover:-translate-y-1 hover:shadow-elegant"
              }`}
            >
              {t.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-gradient px-3 py-1 text-xs font-semibold text-white shadow-glow">
                  Most popular
                </span>
              )}
              <div className="text-sm font-semibold uppercase tracking-widest text-brand-green">
                {t.name}
              </div>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-display text-5xl font-bold text-foreground">${t.price}</span>
                <span className="text-sm text-muted-foreground">/month</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">Perfect for {t.perfect.toLowerCase()}</p>
              <ul className="mt-7 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground/85">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-7 rounded-lg border border-dashed border-border bg-surface px-4 py-3 text-center text-sm">
                <span className="text-muted-foreground">Background checks: </span>
                <span className="font-semibold text-foreground">{t.perReport}</span>
              </div>
              <Button variant={t.variant} size="lg" className="mt-7 w-full">
                {t.cta} <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Customers ----------------------------- */

const customers = [
  { icon: ShieldCheck, label: "Security companies" },
  { icon: Users, label: "Staffing agencies" },
  { icon: UserCheck, label: "Recruiters" },
  { icon: CreditCard, label: "Payroll companies" },
  { icon: Building2, label: "PEOs" },
  { icon: HeartPulse, label: "Drug testing firms" },
  { icon: Fingerprint, label: "Fingerprint providers" },
  { icon: BadgeCheck, label: "HR consultants" },
  { icon: Stethoscope, label: "Healthcare staffing" },
  { icon: Truck, label: "Transportation" },
  { icon: GraduationCap, label: "Construction firms" },
  { icon: Globe, label: "Property management" },
];

function Customers() {
  return (
    <section id="customers" className="border-t border-border bg-surface py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Built for"
          title="The businesses powering America's local workforce"
          subtitle="From a single founder to a regional reseller — Trust Point 360 fits every model of compliance provider."
        />
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {customers.map((c) => (
            <div
              key={c.label}
              className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-4 shadow-card transition-all hover:border-brand-green/50"
            >
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent text-brand-green">
                <c.icon className="h-4 w-4" />
              </div>
              <span className="truncate text-sm font-medium text-foreground">{c.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Trust strip ----------------------------- */

function TrustStrip() {
  const items = [
    { icon: Lock, title: "Bank-level security", desc: "SOC 2-aligned controls, encryption at rest and in transit." },
    { icon: ShieldCheck, title: "FCRA compliant", desc: "Audit-ready workflows for adverse action and consent." },
    { icon: Zap, title: "Instant onboarding", desc: "Launch your branded portal in under 15 minutes." },
    { icon: BadgeCheck, title: "You own the customer", desc: "Your brand, your pricing, your client relationships." },
  ];
  return (
    <section className="border-t border-border py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {items.map((it) => (
          <div key={it.title}>
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-brand-green">
              <it.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold text-foreground">{it.title}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------ CTA ------------------------------ */

function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-t border-border py-24">
      <div className="absolute inset-0 -z-10 bg-hero-gradient" />
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-balance font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Your city. Your brand. Your compliance business.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-balance text-lg text-muted-foreground">
          Start your 14-day free trial. Have your branded portal live by the end of the day.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button variant="hero" size="xl">
            Start free trial <ArrowRight className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="xl">
            <PlayCircle className="h-4 w-4" /> Book live demo
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ------------------------- Section heading ------------------------- */

function SectionHeading({
  eyebrow, title, subtitle,
}: {
  eyebrow: string; title: string; subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-green">
        {eyebrow}
      </div>
      <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-balance text-lg text-muted-foreground">{subtitle}</p>
      )}
    </div>
  );
}

/* ---------------------------- Page shell ---------------------------- */

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <RevenueCalculator />
        <Pricing />
        <Customers />
        <TrustStrip />
        <FinalCTA />
      </main>
      <SiteFooter />
    </div>
  );
}
