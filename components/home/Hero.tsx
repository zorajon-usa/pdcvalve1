import Link from 'next/link';
import RFQButton from '@/components/rfq/RFQButton';
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Boxes,
  CircuitBoard,
  Cog,
  Factory,
  Gauge,
  Settings,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Workflow,
  type LucideIcon,
} from 'lucide-react';

type MarqueeItem = {
  label: string;
  icon: LucideIcon;
};

const marqueeItems: MarqueeItem[] = [
  {
    label: 'Butterfly & Damper Valves',
    icon: SlidersHorizontal,
  },
  {
    label: 'Valve Automation',
    icon: Settings,
  },
  {
    label: 'Pneumatic Actuation',
    icon: Gauge,
  },
  {
    label: 'Electric Actuation',
    icon: CircuitBoard,
  },
  {
    label: 'Application Engineering',
    icon: Cog,
  },
  {
    label: 'Custom Valve Assemblies',
    icon: Boxes,
  },
  {
    label: 'In-House Machining',
    icon: Factory,
  },
  {
    label: 'Engineered Flow Control',
    icon: Workflow,
  },
  {
    label: 'ISO 9001 Certified',
    icon: BadgeCheck,
  },
  {
    label: 'Pittsburgh Built',
    icon: ShieldCheck,
  },
  {
    label: 'Established 1970',
    icon: Award,
  },
];

export default function Hero() {
  return (
    <section className="relative isolate min-h-[calc(100svh-84px)] overflow-hidden bg-[#020b07] text-white md:min-h-[calc(100svh-118px)]">
      {/* Dedicated desktop and mobile compositions prevent the ultra-wide
          artwork from being awkwardly cropped on a portrait screen. */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#020b07]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet="/images/home/hero-flow-desktop.webp"
          />
          <img
            src="/images/home/hero-flow-mobile.webp"
            alt=""
            aria-hidden="true"
            width={941}
            height={1672}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </picture>
      </div>

      {/* =====================================================
          READABILITY OVERLAYS
      ====================================================== */}

      {/* Smooth left-side gradient */}
      <div className="pointer-events-none absolute inset-0 z-[1] hidden bg-[linear-gradient(90deg,rgba(2,11,7,0.94)_0%,rgba(2,11,7,0.86)_18%,rgba(2,11,7,0.70)_34%,rgba(2,11,7,0.40)_49%,rgba(2,11,7,0.14)_65%,rgba(2,11,7,0.02)_82%,rgba(2,11,7,0)_100%)] lg:block" />

      {/* Cinematic top and bottom shading */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(1,7,5,0.24)_0%,rgba(1,7,5,0.02)_35%,rgba(1,7,5,0.10)_68%,rgba(1,7,5,0.68)_100%)]" />

      {/* Mobile text protection */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(2,11,7,0.08)_0%,rgba(2,11,7,0.18)_35%,rgba(2,11,7,0.80)_70%,rgba(2,11,7,0.98)_100%)] lg:hidden" />

      {/* Fine texture */}
      <div className="noise-overlay pointer-events-none absolute inset-0 z-[2] opacity-[0.02] mix-blend-overlay" />

      {/* =====================================================
          HERO CONTENT
      ====================================================== */}
<div className="relative z-10 mx-auto flex min-h-[calc(100svh-84px)] w-full max-w-[90rem] items-center justify-center px-5 pb-24 pt-20 text-center sm:px-6 sm:pb-28 md:min-h-[calc(100svh-118px)] lg:items-end lg:justify-start lg:px-8 lg:pb-36 lg:pt-7 lg:text-left">
        <div className="w-full max-w-[560px]">
                      {/* PDC / NECT logo lockup */}
            <div className="mb-6 hidden lg:block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/home/pdc-nect-hero-logo.webp"
                alt="PDC Process Development & Control LLC, a division of NECT"
                className="h-auto w-[415px] object-contain"
              />
            </div>
          {/* Eyebrow */}
          <div className="hero-reveal hero-reveal-1 flex justify-center lg:justify-start">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#55cf86]/40 bg-[#082319]/65 px-3.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-[#70db99] shadow-[0_10px_30px_rgba(0,0,0,0.20)] backdrop-blur-md sm:text-[11px] lg:px-4 lg:py-2 lg:text-[11px]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#55d487] shadow-[0_0_12px_rgba(85,212,135,0.90)]" />

              Industrial Valves &amp; Actuation
            </span>
          </div>

          {/* Main heading */}
          <div className="mt-4 sm:mt-5">
            <h1 className="pdc-hero-heading text-[1.9rem] font-extrabold leading-[1.1] tracking-[-0.045em] text-white sm:text-[2.47rem] lg:text-[3.28rem] xl:text-[3.56rem]">
              <span className="pdc-hero-line pdc-hero-line-1 block overflow-hidden pb-[0.08em]">
                <span className="pdc-hero-line-inner block">Valves with Value.</span>
              </span>
            </h1>
          </div>

          {/* Secondary heading */}
        <h2 className="hero-reveal hero-reveal-3 mt-2 max-w-[520px] text-[1.35rem] font-bold leading-[1.16] tracking-[-0.03em] sm:mt-3 sm:text-[1.8rem] lg:text-[1.9rem] xl:text-[2rem]">
            <span className="block bg-gradient-to-r from-[#76df99] via-[#45c778] to-[#168447] bg-clip-text text-transparent">
              Engineered Flow Control
            </span>
          
            <span className="block bg-gradient-to-r from-[#76df99] via-[#45c778] to-[#168447] bg-clip-text text-transparent">
              Built Around Your Application
            </span>
          </h2>

          {/* Description */}
<p className="hero-reveal hero-reveal-4 mx-auto mt-4 max-w-[34rem] text-[13.5px] leading-6 text-white/75 sm:mt-5 sm:text-base sm:leading-8 lg:mx-0 lg:mt-5 lg:max-w-[37rem] lg:text-[15px]">
  <span className="block">
    PDC designs and manufactures butterfly and damper valves for
  </span>
  <span className="block">
    demanding applications. Our valves are built for long service life,
  </span>
  <span className="block">
    low maintenance, and precise flow control, with customizable
  </span>
  <span className="block">
    automation packages available to match your process requirements.
  </span>
</p>

          {/* Primary + quote CTA */}
          <div className="pdc-hero-cta hero-reveal hero-reveal-5 mt-6 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center lg:mt-6 lg:justify-start">
            <Link
              href="/products"
              className="group pdc-hero-btn relative inline-flex min-h-[52px] items-center justify-center gap-3 overflow-hidden rounded-lg bg-[#168447] px-8 py-3.5 text-sm font-bold text-white shadow-[0_16px_38px_rgba(22,132,71,0.30)] transition-[transform,background-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-[#1b9852] hover:shadow-[0_20px_46px_rgba(22,132,71,0.38)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#63df95] focus-visible:ring-offset-2 focus-visible:ring-offset-[#020b07]"
            >
              {/* Shine sweep on hover */}
              <span className="pdc-btn-shine pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.35)_50%,transparent_75%)] transition-transform duration-700 ease-out group-hover:translate-x-full" />

              <span className="relative z-10">Explore Products</span>

              <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            {/* Quote path — the site's primary conversion, previously absent
                from the hero entirely. */}
            <RFQButton
              variant="outline"
              size="lg"
              className="min-h-[52px] rounded-lg border-white/25 px-8 text-sm font-bold"
            />
          </div>
        </div>
      </div>

      {/* Scroll cue — the hero fills the viewport, so signal there is more */}
      <div className="pdc-scroll-cue pointer-events-none absolute inset-x-0 bottom-16 z-10 hidden justify-center lg:flex">
        <span className="flex h-9 w-[22px] items-start justify-center rounded-full border border-white/25 pt-2">
          <span className="pdc-scroll-dot h-1.5 w-1.5 rounded-full bg-brand-green" />
        </span>
      </div>

      {/* Full-width continuous trust and capabilities ribbon */}
      <div className="hero-reveal hero-reveal-6 absolute inset-x-0 bottom-0 z-10 w-full">
        <TrustMarquee />
      </div>

      {/* Bottom divider */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      {/* Spacer to prevent content overlap with the bottom marquee */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-14" aria-hidden="true" />
    </section>
  );
}

/**
 * Seamless, continuously moving capability ribbon.
 *
 * The same group is rendered twice so the animation can travel
 * exactly 50% and loop without a visible jump.
 */
function TrustMarquee() {
  return (
    <div
      className="pdc-trust-marquee relative overflow-hidden border-t border-white/10 bg-black/25 py-3 shadow-[0_-12px_40px_rgba(0,0,0,0.20)] backdrop-blur-md"
      aria-label="PDC capabilities and certifications"
    >
      {/* Soft disappearance on the left */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#020b07] via-[#020b07]/80 to-transparent sm:w-24" />

      {/* Soft disappearance on the right */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#020b07] via-[#020b07]/80 to-transparent sm:w-24" />

      {/* Moving content */}
      <div className="pdc-trust-marquee-track flex w-max">
        <MarqueeGroup />

        <div className="pdc-trust-marquee-copy" aria-hidden="true">
          <MarqueeGroup />
        </div>
      </div>
    </div>
  );
}

function MarqueeGroup() {
  return (
    <div className="flex shrink-0 items-center">
      {marqueeItems.map(({ label, icon: Icon }, index) => (
        <div
          key={`${label}-${index}`}
          className="group flex shrink-0 items-center"
        >
          <div className="flex items-center gap-2.5 px-4 py-1.5 sm:px-5">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#55cf86]/25 bg-[#168447]/15 text-[#62d78f] shadow-[0_0_18px_rgba(68,201,122,0.05)] transition-[background-color,border-color,transform] duration-300 group-hover:scale-105 group-hover:border-[#55cf86]/45 group-hover:bg-[#168447]/25">
              <Icon className="h-3.5 w-3.5" strokeWidth={1.8} />
            </span>

            <span className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.09em] text-white/78 sm:text-xs">
              {label}
            </span>
          </div>

          <span
            className="mx-1 h-1 w-1 shrink-0 rounded-full bg-[#55cf86]/50 shadow-[0_0_8px_rgba(85,207,134,0.55)]"
            aria-hidden="true"
          />
        </div>
      ))}
    </div>
  );
}

