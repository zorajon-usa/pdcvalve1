import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ProductFamilyCard from '@/components/products/ProductFamilyCard';
import { productFamilies } from '@/data/site';
import Reveal from '@/components/products/Reveal';

export default function ProductFamilies() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      {/* Subtle top divider line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-green-dark/10 to-transparent" />

      <div className="relative mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Section heading — split layout so it doesn't repeat the
            centred pattern used by the neighbouring sections. */}
        <Reveal>
          <div className="flex flex-col gap-6 px-4 sm:px-0 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-green">
                Product Catalog
              </span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-green-dark sm:text-4xl lg:text-[2.75rem]">
                Industrial Flow Control Products
              </h2>
                <p className="mt-4 text-base leading-relaxed text-brand-graphite/65">
                  Explore PDC&apos;s engineered valve and actuation solutions.
                </p>
              <div className="mt-6 h-px w-16 bg-brand-green/40" />
            </div>

            <Link
              href="/products"
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-bold text-brand-green transition-colors hover:text-brand-green-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/30"
            >
              View all products
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>

        {/* Product grid */}
        <div className="mt-16 grid grid-cols-1 gap-0 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productFamilies.map((product, i) => (
            <Reveal key={product.slug} delay={i * 80} className="h-full">
              <ProductFamilyCard product={product} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
