import type { NavLink, CoreFunction, ProductFamily, Industry, Capability, Differentiator, MegaMenuColumn, MegaMenuFeature } from '@/types/site';

export const siteConfig = {
  name: 'PDC Valve & Actuators',
  tagline: 'Precision Flow Control Solutions',
  description:
    'High-performance valves and actuators for industrial flow control applications worldwide.',
  email: 'sales@pdcvalve.com',
  phone: '+1 724-695-3440',
  address: '1075 Montour West Industrial Park, Coraopolis, PA 15108',
} as const;

export const mainNav: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Industries', href: '/industries' },
  { label: 'Company', href: '/company' },
  { label: 'Resources', href: '/resources' },
];

export const companyMenuLinks: NavLink[] = [
  { label: 'About PDC', href: '/company/about' },
  { label: 'Engineering Support', href: '/company/engineering' },
  { label: 'Manufacturing', href: '/company/manufacturing' },
  { label: 'Quality & Compliance', href: '/company/quality' },
  { label: 'Find PDC', href: '/company/location' },
];

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: 'Products',
    links: [
      { label: 'Butterfly Damper Valves', href: '/products/butterfly-damper-valves' },
      { label: 'Butterfly Valves', href: '/products/butterfly-valves' },
      { label: 'Pneumatic Actuators', href: '/products/pneumatic-actuators' },
      { label: 'Electric Actuators', href: '/products/electric-actuators' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About PDC', href: '/company/about' },
      { label: 'Engineering Support', href: '/company/engineering' },
      { label: 'Manufacturing', href: '/company/manufacturing' },
      { label: 'Quality & Compliance', href: '/company/quality' },
      { label: 'Find PDC', href: '/company/location' },
    ],
  },
  {
    title: 'Industries',
    links: [
      { label: 'Oil & Gas', href: '/industries/oil-and-gas' },
      { label: 'Power Generation', href: '/industries/power-generation' },
      { label: 'Chemical', href: '/industries/chemical' },
      { label: 'Water & Wastewater', href: '/industries/water-and-wastewater' },
      { label: 'OEM & Engineered Systems', href: '/industries/oem' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Resources', href: '/resources' },
      { label: 'Product Finder', href: '/product-finder' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];

export const coreFunctions: CoreFunction[] = [
  {
    number: '01',
    title: 'Control',
    description:
      'Butterfly and damper valves engineered for reliable flow control across demanding industrial applications.',
  },
  {
    number: '02',
    title: 'Automation',
    description:
      'Complete electric and pneumatic automation packages matched to the valve, application, and control requirements.',
  },
  {
    number: '03',
    title: 'Isolation',
    description:
      'Manual and automated butterfly valves for dependable process isolation and shutoff service.',
  },
];

export const productFamilies: ProductFamily[] = [
  {
    name: 'Damper & Control Valves',
    slug: 'butterfly-damper-valves',
    description:
      'Heavy-duty butterfly and damper valves engineered for modulating flow, high-temperature service, and demanding industrial applications.',
  },
  {
    name: 'Butterfly Valves',
    slug: 'butterfly-valves',
    description:
      'Industrial butterfly valves for reliable shutoff, isolation, and general process service.',
  },
  {
    name: 'Pneumatic Actuation',
    slug: 'pneumatic-actuators',
    description:
      'Pneumatic actuator packages sized, mounted, and configured for reliable valve operation.',
  },
  {
    name: 'Electric Actuation',
    slug: 'electric-actuators',
    description:
      'Electric actuator packages engineered for accurate positioning, dependable operation, and application-specific control.',
  },
];

export const industries: Industry[] = [
  {
    name: 'Power Generation',
    slug: 'power-generation',
    description:
      'Critical flow control for steam, cooling, and combustion systems.',
    image:
      'https://images.pexels.com/photos/16705829/pexels-photo-16705829.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt:
      'Power plant with cooling towers and electricity pylons',
  },
  {
    name: 'Air Management',
    slug: 'air-management',
    description:
      'Precision dampers and valves for industrial air handling systems.',
    image:
      'https://images.pexels.com/photos/32032996/pexels-photo-32032996.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt:
      'Modern metallic ventilation system in an industrial setting',
  },
  {
    name: 'Oil & Gas',
    slug: 'oil-and-gas',
    description:
      'Severe-service valves engineered for upstream and midstream operations.',
    image:
      'https://images.pexels.com/photos/15961091/pexels-photo-15961091.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt:
      'Offshore oil and gas platform surrounded by open ocean',
  },
  {
    name: 'Chemical',
    slug: 'chemical',
    description:
      'Corrosion-resistant flow control for aggressive chemical processes.',
    image:
      'https://images.pexels.com/photos/10666081/pexels-photo-10666081.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt:
      'Large chemical processing factory with industrial piping and equipment',
  },
  {
    name: 'Petrochemical',
    slug: 'petrochemical',
    description:
      'High-integrity valves for refining and petrochemical production.',
    image:
      'https://images.pexels.com/photos/15893881/pexels-photo-15893881.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt:
      'Refinery towers and process structures against a dusk sky',
  },
  {
    name: 'Water & Wastewater',
    slug: 'water-and-wastewater',
    description:
      'Durable valves for municipal and industrial water treatment.',
    image:
      'https://images.pexels.com/photos/12975471/pexels-photo-12975471.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt:
      'Aerial view of a water treatment plant near a river',
  },
];

export const capabilities: Capability[] = [
  { value: '300', label: 'Casting Patterns', numeric: true },
  { value: '10', label: 'Core Product Lines', numeric: true },
  { value: 'ISO', label: '9001:2015' },
  { value: 'In-House', label: 'Machining' },
  { value: 'Custom', label: 'Valve Assemblies' },
  { value: 'Engineering', label: 'Support' },
];

export const differentiators: Differentiator[] = [
  {
    title: 'Application Engineering',
    description:
      'Our engineers work directly with your team to specify the right valve and actuator for your operating conditions.',
  },
  {
    title: 'Product Customization',
    description:
      'Custom configurations, materials, and actuator packages tailored to your specific application requirements.',
  },
  {
    title: 'Fast Lead Times',
    description:
      'In-house machining and inventory management deliver shorter lead times than typical industry standards.',
  },
  {
    title: 'Reliable Manufacturing',
    description:
      'ISO 9001:2015 certified processes and decades of manufacturing expertise ensure consistent, dependable products.',
  },
];

// NOTE: Canonical product routes remain the source of truth in
// data/products/content.ts and data/products/families.ts. This navigation
// config mirrors those routes for the mega menu layout.
export const megaMenuColumns: MegaMenuColumn[] = [
  {
    groups: [
      {
        heading: 'Butterfly Damper Valves',
        headingSlug: 'butterfly-damper-valves',
        links: [
          { label: 'Econotrol', slug: 'econotrol' },
          { label: 'Medium Duty', slug: 'medium-duty' },
          { label: 'Excel', slug: 'excel' },
          { label: 'Flanged End', slug: 'flanged-end' },
          { label: 'Reduced Port', slug: 'reduced-port' },
          { label: 'Combustion Valve', slug: 'combustion-valve' },
          { label: 'Thread End', slug: 'thread-end' },
        ],
      },
    ],
  },
  {
    groups: [
      {
        heading: 'Butterfly Valves',
        headingSlug: 'butterfly-valves',
        links: [
          { label: 'High Performance', slug: 'high-performance' },
          { label: 'Triple Offset', slug: 'triple-offset' },
        ],
      },
      {
        heading: 'Pneumatic Actuators',
        headingSlug: 'pneumatic-actuators',
        links: [
          { label: 'Magnus Force Double Acting', slug: 'double-acting' },
          { label: 'Magnus Force Spring Return', slug: 'spring-return' },
        ],
      },
    ],
  },
  {
    groups: [
      {
        heading: 'Electric Actuators',
        headingSlug: 'electric-actuators',
        links: [
          { label: 'PDCQ', slug: 'pdcq' },
          { label: 'PDCS', slug: 'pdcs' },
        ],
      },
      {
        heading: 'Product Finder',
        headingSlug: 'product-finder',
        headingHref: null,
        links: [
          { label: 'Find the Right Product', slug: 'product-finder', href: '/product-finder' },
        ],
      },
    ],
  },
];

export const megaMenuFeature: MegaMenuFeature = {
  title: 'Featured Product',
  description:
    'High-performance butterfly valve with precision-engineered seat design for severe-service applications.',
  ctaLabel: 'Explore Product',
  ctaSlug: 'butterfly-valves/high-performance',
};
