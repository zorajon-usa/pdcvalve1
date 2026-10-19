'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import type { CoreFunction } from '@/types/site';
import { ArrowUpRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

type CoreVisual = {
  image: string;
  alt: string;
  kicker: string;
  linkLabel: string;
  linkHref: string;
  accent: string;
};

const visuals: CoreVisual[] = [
  {
    image: '/images/core-functions/core-control.png',
    alt: 'PDC butterfly valve with pneumatic actuator on an engineering drawing background',
    kicker: 'Industrial Flow Regulation',
    linkLabel: 'Explore Control Products',
    linkHref: '/products',
    accent: '#168447',
  },
  {
    image: '/images/core-functions/core-automation.png',
    alt: 'PDC butterfly valve and actuator assembly on an engineering drawing background',
    kicker: 'Engineered Valve Automation',
    linkLabel: 'Explore Automation Products',
    linkHref: '/products',
    accent: '#0e6b9e',
  },
  {
    image: '/images/core-functions/core-isolation.png',
    alt: 'PDC triple offset butterfly valve with gearbox on an engineering drawing background',
    kicker: 'Reliable Process Isolation',
    linkLabel: 'Explore Isolation Products',
    linkHref: '/products',
    accent: '#b84c1a',
  },
];

const MOBILE_HEADER_HEIGHT = 58;
const MOBILE_IMAGE_HEIGHT = 224;
const MOBILE_COPY_HEIGHT = 154;
const MOBILE_CARD_HEIGHT = MOBILE_IMAGE_HEIGHT + MOBILE_COPY_HEIGHT;

export default function CoreFunctions({ items }: { items: CoreFunction[] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const cards = items.slice(0, 3);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      const prefersReduced = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches;

      if (prefersReduced) {
        gsap.set('.cf-head-item, .cf-panel', {
          opacity: 1,
          y: 0,
          clipPath: 'none',
        });
      } else {
        gsap.from('.cf-head-item', {
          opacity: 0,
          y: 26,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.cf-head',
            start: 'top 90%',
          },
        });

        gsap.from('.cf-rule', {
          scaleX: 0,
          duration: 1.1,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: '.cf-head',
            start: 'top 90%',
          },
        });
      }

      /* Desktop only: preserve the existing horizontal accordion behavior. */
      mm.add('(min-width: 1024px)', () => {
        if (prefersReduced) return;

        gsap.from('.cf-panel', {
          opacity: 0,
          y: 56,
          clipPath: 'inset(100% 0 0 0)',
          duration: 1,
          stagger: 0.13,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.cf-rail',
            start: 'top 88%',
          },
        });
      });

      /* Mobile/tablet: image-aware layered card stack. */
      mm.add('(max-width: 1023px)', () => {
        const stack = stackRef.current;
        if (!stack) return;

        const mobileCards = gsap.utils.toArray<HTMLElement>(
          stack.querySelectorAll('.cf-mobile-card'),
        );
        const mobileHeaders = gsap.utils.toArray<HTMLElement>(
          stack.querySelectorAll('.cf-mobile-header'),
        );
        const identities = gsap.utils.toArray<HTMLElement>(
          stack.querySelectorAll('.cf-mobile-identity'),
        );
        const identityShells = gsap.utils.toArray<HTMLElement>(
          stack.querySelectorAll('.cf-mobile-identity-shell'),
        );
        const identityNumbers = gsap.utils.toArray<HTMLElement>(
          stack.querySelectorAll('.cf-mobile-identity-number'),
        );
        const identityTitles = gsap.utils.toArray<HTMLElement>(
          stack.querySelectorAll('.cf-mobile-identity-title'),
        );
        const mobileImages = gsap.utils.toArray<HTMLElement>(
          stack.querySelectorAll('.cf-mobile-image'),
        );

        if (!mobileCards.length) return;

        const getOffscreenY = () =>
          Math.max(window.innerHeight * 0.62, MOBILE_CARD_HEIGHT + 80);

        // Keep the pinned deck fully inside the viewport on short and tall phones.
        const getPinTop = () =>
          Math.max(64, Math.floor((window.innerHeight - mobileStackHeight) / 2));

        if (prefersReduced) {
          mobileCards.forEach((card, index) => {
            gsap.set(card, {
              position: 'relative',
              y: 0,
              opacity: 1,
              marginTop: index === 0 ? 0 : 14,
            });
          });
          gsap.set(mobileHeaders, { backgroundColor: 'rgba(0,0,0,0)' });
          gsap.set(identities, { y: 78, scale: 1, opacity: 1 });
          gsap.set(mobileImages, { scale: 1 });
          return;
        }

        /*
         * The identity starts inside the intentionally-empty LEFT side of the image.
         * It later docks into the 58px header when the next card arrives.
         */
        // Card 1 is visible immediately. Only the later cards begin off-screen.
        // This removes the blank/dead area while GSAP initializes.
        gsap.set(mobileCards, {
          y: (index) => (index === 0 ? 0 : getOffscreenY()),
          opacity: 1,
          force3D: true,
        });

        gsap.set(mobileHeaders, {
          backgroundColor: 'rgba(0,0,0,0)',
        });

        gsap.set(identities, {
          y: 78,
          scale: 1,
          opacity: 1,
          transformOrigin: 'left center',
          force3D: true,
        });

        gsap.set(identityShells, {
          backgroundColor: 'rgba(255,255,255,0.84)',
          borderColor: 'rgba(255,255,255,0.74)',
          boxShadow: '0 12px 32px rgba(14,36,24,0.13)',
        });

        gsap.set(mobileImages, {
          scale: 1.035,
          transformOrigin: '50% 50%',
        });

        const timeline = gsap.timeline({
          defaults: {
            ease: 'power3.inOut',
          },
          scrollTrigger: {
            trigger: stack,
            // Pin the stack where the complete deck can actually be seen.
            start: () => `top ${getPinTop()}px`,
            // Shorter scroll distance makes the transitions respond on time.
            end: () => `+=${Math.max(window.innerHeight * 1.7, 1050)}`,
            pin: true,
            pinSpacing: true,
            scrub: 0.38,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        const dockIdentity = (index: number, position: string) => {
          const visual = visuals[index] ?? visuals[0];

          timeline
            .to(
              mobileHeaders[index],
              {
                backgroundColor: visual.accent,
                duration: 0.44,
              },
              position,
            )
            .to(
              identities[index],
              {
                y: 0,
                scale: 0.72,
                duration: 0.5,
                ease: 'power3.inOut',
              },
              position,
            )
            .to(
              identityShells[index],
              {
                backgroundColor: 'rgba(255,255,255,0)',
                borderColor: 'rgba(255,255,255,0)',
                boxShadow: '0 0 0 rgba(0,0,0,0)',
                duration: 0.4,
              },
              position,
            )
            .to(
              identityNumbers[index],
              {
                color: '#ffffff',
                duration: 0.35,
              },
              position,
            )
            .to(
              identityTitles[index],
              {
                color: '#ffffff',
                duration: 0.35,
              },
              position,
            );
        };

        // Card 1 is already on screen when the stack pins.
        // Give the user a short beat to see it before card 2 arrives.
        if (mobileImages[0]) {
          timeline.to(
            mobileImages[0],
            {
              scale: 1,
              duration: 0.35,
              ease: 'power2.out',
            },
            0,
          );
        }
        timeline.to({}, { duration: 0.32 });

        // Only cards 2 and 3 travel upward into the stack.
        for (let index = 1; index < mobileCards.length; index += 1) {
          const landingY = index * MOBILE_HEADER_HEIGHT;
          const label = `cf-card-${index}`;

          timeline.addLabel(label);
          dockIdentity(index - 1, label);

          timeline.to(
            mobileCards[index],
            {
              y: landingY,
              duration: 0.78,
              ease: 'power3.out',
            },
            label,
          );

          if (mobileImages[index]) {
            timeline.to(
              mobileImages[index],
              {
                scale: 1,
                duration: 0.72,
                ease: 'power2.out',
              },
              label,
            );
          }

          timeline.to({}, { duration: 0.22 });
        }

        return () => {
          timeline.scrollTrigger?.kill();
          timeline.kill();
        };
      });
    }, sectionRef);

    // Recalculate trigger positions once the initial layout has settled.
    requestAnimationFrame(() => ScrollTrigger.refresh());

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      mm.revert();
      ctx.revert();
    };
  }, []);

  const mobileStackHeight =
    MOBILE_CARD_HEIGHT + Math.max(cards.length - 1, 0) * MOBILE_HEADER_HEIGHT;

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#eef1ec] py-14 sm:py-16 lg:flex lg:h-[calc(100svh-118px)] lg:max-h-[940px] lg:min-h-[560px] lg:items-center lg:overflow-hidden lg:py-8"
    >
      {/* Dot grid — desktop only */}
      <div
        className="pointer-events-none absolute inset-0 hidden opacity-50 lg:block"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(16,37,26,0.09) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage:
            'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)',
        }}
      />

      <div className="relative mx-auto flex w-full max-w-[1320px] flex-col sm:px-6 lg:h-full lg:justify-center lg:px-10">
        {/* Heading — shared */}
        <div className="cf-head px-4 sm:px-0 lg:flex lg:items-end lg:justify-between lg:gap-12">
          <div className="max-w-2xl">
            <span className="cf-head-item inline-flex items-center gap-2 rounded-full border border-[#168447]/20 bg-white px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#168447] shadow-sm sm:text-[11px]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#168447]" />
              Core Capabilities
            </span>

            <h2 className="cf-head-item mt-4 text-[1.85rem] font-extrabold leading-[1.05] tracking-[-0.04em] text-[#0e2418] sm:text-[2.4rem] lg:text-[2.65rem]">
              Engineered Around
              <span className="block text-[#168447]">
                Three Core Functions
              </span>
            </h2>
          </div>

          <p className="cf-head-item mt-4 max-w-xl text-[13.5px] leading-6 text-[#4a5e53] sm:text-[15px] sm:leading-7 lg:mt-0 lg:max-w-[22rem] lg:pb-1 lg:text-right">
              PDC brings industrial flow control, engineered valve automation, and
              dependable process isolation together in application-specific valve solutions.
          </p>
        </div>

        <div className="cf-rule mt-7 h-px w-full origin-left bg-gradient-to-r from-[#168447] via-[#0e2418]/20 to-transparent sm:mt-9 lg:mt-6" />

        {/* ===== Mobile: image-aware stacking deck ===== */}
        <div className="px-4 sm:px-0 lg:hidden">
          <div
            ref={stackRef}
            className="cf-stack relative z-10 mt-5 w-full"
            style={{ height: mobileStackHeight }}
          >
            {cards.map((item, index) => {
              const visual = visuals[index] ?? visuals[0];

              return (
                <article
                  key={item.number}
                  className="cf-mobile-card absolute inset-x-0 top-0 overflow-hidden rounded-[20px] border border-white/45 bg-white shadow-[0_16px_46px_rgba(14,36,24,0.16)] will-change-transform"
                  style={{
                    height: MOBILE_CARD_HEIGHT,
                    zIndex: index + 1,
                    // Progressive fallback: card 1 is visible even before GSAP hydrates.
                    opacity: index === 0 ? 1 : 0,
                  }}
                >
                  {/*
                   * Header is transparent while the card is expanded.
                   * The SAME identity group begins down in the empty left side of the image,
                   * then GSAP moves it into this header when the next card arrives.
                   */}
                  <div
                    className="cf-mobile-header pointer-events-none absolute inset-x-0 top-0 z-30 flex items-center px-4"
                    style={{ height: MOBILE_HEADER_HEIGHT }}
                  >
                    <div className="cf-mobile-identity origin-left will-change-transform">
                      <div className="cf-mobile-identity-shell flex w-fit items-center gap-2.5 rounded-xl border px-3.5 py-2 backdrop-blur-[5px]">
                        <span
                          className="cf-mobile-identity-number font-mono text-[16px] font-black tracking-[-0.02em]"
                          style={{ color: visual.accent }}
                        >
                          {item.number}
                        </span>
                        <span
                          className="cf-mobile-identity-title text-[22px] font-black uppercase leading-none tracking-[-0.035em] text-[#0e2418]"
                        >
                          {item.title}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Full-width source image. No crop logic that throws away its intentional negative space. */}
                  <div
                    className="relative overflow-hidden bg-[#dfe7df]"
                    style={{ height: MOBILE_IMAGE_HEIGHT }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={visual.image}
                      alt={visual.alt}
                      className="cf-mobile-image absolute inset-0 h-full w-full object-cover object-center will-change-transform"
                    />

                    {/* Subtle LEFT-side readability veil only. Product on the right remains untouched. */}
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(238,241,236,0.18)_0%,rgba(238,241,236,0.06)_45%,transparent_68%)]" />
                    <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/[0.05]" />
                  </div>

                  {/* Description remains separate, clean and readable. */}
                  <div
                    className="relative flex flex-col justify-center border-t border-[#0e2418]/10 bg-[#f8faf7] px-5 sm:px-6"
                    style={{ height: MOBILE_COPY_HEIGHT }}
                  >
                    <span
                      className="block text-[10px] font-extrabold uppercase tracking-[0.2em]"
                      style={{ color: visual.accent }}
                    >
                      {visual.kicker}
                    </span>

                    <p className="mt-2 max-w-[22rem] text-[13px] font-medium leading-[1.5] text-[#30473a] sm:text-[13.5px]">
                      {item.description}
                    </p>

                    <Link
                      href={visual.linkHref}
                      className="mt-3 inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-[11px] font-extrabold text-white shadow-[0_7px_18px_rgba(14,36,24,0.16)] transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0e2418]/25"
                      style={{ background: visual.accent }}
                    >
                      {visual.linkLabel}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* ===== Desktop: existing accordion rail ===== */}
        <div className="cf-rail hidden lg:mt-5 lg:flex lg:min-h-[340px] lg:flex-1 lg:flex-row lg:gap-3">
          {cards.map((item, index) => {
            const visual = visuals[index] ?? visuals[0];
            const isActive = active === index;

            return (
              <article
                key={item.number}
                data-active={isActive}
                onMouseEnter={() => setActive(index)}
                onFocusCapture={() => setActive(index)}
                onClick={() => setActive(index)}
                style={{ ['--accent' as string]: visual.accent }}
                className={[
                  'cf-panel group/panel relative isolate overflow-hidden rounded-2xl border bg-white',
                  'shadow-[0_10px_34px_rgba(14,36,24,0.10)]',
                  'transition-[flex-grow,border-color,box-shadow] duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)]',
                  'lg:min-w-0 lg:flex-1 lg:basis-0',
                  'data-[active=true]:border-[var(--accent)]/40 data-[active=true]:shadow-[0_18px_50px_rgba(14,36,24,0.16)]',
                  'lg:data-[active=true]:grow-[2.6]',
                ].join(' ')}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={visual.image}
                  alt={visual.alt}
                  loading="lazy"
                  width={1536}
                  height={1024}
                  className="absolute inset-0 -z-10 h-full w-full scale-100 object-cover object-[70%_center] transition-transform duration-[900ms] ease-out lg:group-data-[active=false]/panel:scale-[1.06]"
                />

                <div className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(255,255,255,0.99)_0%,rgba(255,255,255,0.97)_34%,rgba(255,255,255,0.78)_56%,rgba(255,255,255,0.12)_82%)]" />

                <div className="absolute inset-0 -z-10 bg-white/0 transition-colors duration-700 lg:group-data-[active=false]/panel:bg-white/45" />

                <span className="absolute left-0 top-0 z-10 h-[3px] w-full origin-left scale-x-0 bg-[var(--accent)] transition-transform duration-[700ms] ease-out group-data-[active=true]/panel:scale-x-100" />

                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-3 -top-6 z-0 select-none font-mono text-[9rem] font-extrabold leading-none text-[#0e2418]/[0.07] transition-colors duration-700 group-data-[active=true]/panel:text-[var(--accent)]/20"
                />

                <span className="absolute left-3 top-3 z-10 h-3 w-3 border-l border-t border-[#0e2418]/20" />
                <span className="absolute bottom-3 right-3 z-10 h-3 w-3 border-b border-r border-[#0e2418]/20" />

                <div className="pointer-events-none absolute inset-0 z-10 hidden items-end justify-start p-6 transition-opacity duration-500 group-data-[active=true]/panel:opacity-0 lg:flex">
                  <span className="flex items-center gap-4 [writing-mode:vertical-rl] rotate-180">
                    <span
                      className="font-mono text-sm font-extrabold"
                      style={{ color: visual.accent }}
                    >
                      {item.number}
                    </span>
                    <span className="text-lg font-extrabold uppercase tracking-[0.12em] text-[#0e2418]">
                      {item.title}
                    </span>
                  </span>
                </div>

                <div className="relative z-10 flex h-full flex-col justify-end p-6 opacity-0 transition-opacity duration-500 sm:p-8 lg:group-data-[active=true]/panel:opacity-100 lg:group-data-[active=true]/panel:delay-150">
                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-full font-mono text-[13px] font-extrabold text-white shadow-md"
                    style={{ background: visual.accent }}
                  >
                    {item.number}
                  </span>

                  <span
                    className="mt-4 block text-[11px] font-bold uppercase tracking-[0.2em]"
                    style={{ color: visual.accent }}
                  >
                    {visual.kicker}
                  </span>

                  <h3 className="mt-2 text-[2.4rem] font-extrabold uppercase leading-[1.04] tracking-[-0.035em] text-[#0e2418] lg:whitespace-nowrap">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 max-w-[22rem] text-[14.5px] leading-6 text-[#4a5e53]">
                    {item.description}
                  </p>

                  <Link
                    href={visual.linkHref}
                    className="mt-6 inline-flex w-fit items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold text-white shadow-[0_8px_24px_rgba(14,36,24,0.22)] transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0e2418]/40"
                    style={{ background: visual.accent }}
                  >
                    {visual.linkLabel}
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
