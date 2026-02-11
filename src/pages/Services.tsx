import { Timeline } from "@/components/ui/timeline";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from '../components/SEO';
import { Breadcrumb } from '../components/Breadcrumb';

const ServiceImage = ({ src, alt, className }: { src: string; alt: string; className: string }) => {
  const basePath = src.replace('.png', '');
  return (
    <picture>
      <source
        srcSet={`${basePath}-400w.webp 400w, ${basePath}-800w.webp 800w, ${basePath}-1200w.webp 1200w`}
        sizes="(max-width: 640px) 400px, (max-width: 1024px) 800px, 1200px"
        type="image/webp"
      />
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={className}
      />
    </picture>
  );
};

export default function Services() {
  const bodyTextClass =
    "text-navy/80 text-sm md:text-base font-semibold mb-8 leading-relaxed";
  const listItemClass =
    "flex gap-3 items-start text-navy/80 text-sm md:text-base font-semibold";
  const cardImageClass =
    "rounded-lg object-cover object-center h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]";

  const data = [
    {
      title: "Website Refresh",
      content: (
        <div>
          <p className={bodyTextClass}>
            Modernize your existing website with a fresh design, smoother navigation,
            and updated features that fit today's standards. I'll keep what is working
            and rebuild what isn't so your site feels new again without starting from
            scratch.
          </p>
          <div className="mb-8 space-y-3">
            <div className={listItemClass}>
              <Check className="w-5 h-5 text-seafoam stroke-[2.5] mt-0.5 flex-shrink-0" />
              <span>Keep trusted content while revamping the experience</span>
            </div>
            <div className={listItemClass}>
              <Check className="w-5 h-5 text-seafoam stroke-[2.5] mt-0.5 flex-shrink-0" />
              <span>Improve navigation flows and accessibility</span>
            </div>
            <div className={listItemClass}>
              <Check className="w-5 h-5 text-seafoam stroke-[2.5] mt-0.5 flex-shrink-0" />
              <span>Update features, speed, and security to today's standards</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <ServiceImage
              src="/images/services/service-cards/1.1.png"
              alt="Website refresh concept"
              className={cardImageClass}
            />
            <ServiceImage
              src="/images/services/service-cards/1.2.png"
              alt="Navigation improvements preview"
              className={cardImageClass}
            />
            <ServiceImage
              src="/images/services/service-cards/1.3.png"
              alt="Feature updates mockup"
              className={cardImageClass}
            />
            <ServiceImage
              src="/images/services/service-cards/1.4.png"
              alt="Updated visual design example"
              className={cardImageClass}
            />
          </div>
        </div>
      ),
    },
    {
      title: "New Website Builds",
      content: (
        <div>
          <p className={bodyTextClass}>
            Need a website from the ground up? I create simple, elegant sites tailored
            to your business — built for clarity, speed, and easy maintenance. Perfect
            for small shops, restaurants, and creatives who want a polished online
            presence.
          </p>
          <div className="mb-8 space-y-3">
            <div className={listItemClass}>
              <Check className="w-5 h-5 text-seafoam stroke-[2.5] mt-0.5 flex-shrink-0" />
              <span>Intuitive site architecture for clarity</span>
            </div>
            <div className={listItemClass}>
              <Check className="w-5 h-5 text-seafoam stroke-[2.5] mt-0.5 flex-shrink-0" />
              <span>Lightweight builds for fast load times</span>
            </div>
            <div className={listItemClass}>
              <Check className="w-5 h-5 text-seafoam stroke-[2.5] mt-0.5 flex-shrink-0" />
              <span>Easy maintenance so you can update content confidently</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <ServiceImage
              src="/images/services/service-cards/2.1.png"
              alt="New website concept"
              className={cardImageClass}
            />
            <ServiceImage
              src="/images/services/service-cards/2.2.png"
              alt="Responsive layout preview"
              className={cardImageClass}
            />
            <ServiceImage
              src="/images/services/service-cards/2.3.png"
              alt="Clean website layout example"
              className={cardImageClass}
            />
            <ServiceImage
              src="/images/services/service-cards/2.4.png"
              alt="Small business website example"
              className={cardImageClass}
            />
          </div>
        </div>
      ),
    },
    {
      title: "Custom Add-Ons",
      content: (
        <div>
          <p className={bodyTextClass}>
            Want to go a bit further? Whether it's adding booking tools, connecting
            existing databases, or setting up secure user logins, I can help extend
            your site with the right functionality. Every business is different — we can
            talk through your goals and find what fits best.
          </p>
          <div className="mb-8 space-y-3">
            <div className={listItemClass}>
              <Check className="w-5 h-5 text-seafoam stroke-[2.5] mt-0.5 flex-shrink-0" />
              <span>Booking tools, scheduling, and lead capture flows</span>
            </div>
            <div className={listItemClass}>
              <Check className="w-5 h-5 text-seafoam stroke-[2.5] mt-0.5 flex-shrink-0" />
              <span>Database connections and API-driven integrations</span>
            </div>
            <div className={listItemClass}>
              <Check className="w-5 h-5 text-seafoam stroke-[2.5] mt-0.5 flex-shrink-0" />
              <span>Secure user logins or member-only areas</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <ServiceImage
              src="/images/services/service-cards/3.1.png"
              alt="Custom add-on interface"
              className={cardImageClass}
            />
            <ServiceImage
              src="/images/services/service-cards/3.2.png"
              alt="Booking tool example"
              className={cardImageClass}
            />
            <ServiceImage
              src="/images/services/service-cards/3.3.png"
              alt="Database connection visualization"
              className={cardImageClass}
            />
            <ServiceImage
              src="/images/services/service-cards/3.4.png"
              alt="Secure login mockup"
              className={cardImageClass}
            />
          </div>
        </div>
      ),
    },
    {
      title: "Ongoing Support & SEO",
      content: (
        <div>
          <p className={bodyTextClass}>
            We don't disappear after launch. I can keep your site running smoothly, make
            updates when needed, and help more people find you online.
          </p>
          <div className="mb-8 space-y-3">
            <div className={listItemClass}>
              <Check className="w-5 h-5 text-seafoam stroke-[2.5] mt-0.5 flex-shrink-0" />
              <span>Regular site updates</span>
            </div>
            <div className={listItemClass}>
              <Check className="w-5 h-5 text-seafoam stroke-[2.5] mt-0.5 flex-shrink-0" />
              <span>SEO and performance tracking</span>
            </div>
            <div className={listItemClass}>
              <Check className="w-5 h-5 text-seafoam stroke-[2.5] mt-0.5 flex-shrink-0" />
              <span>Email setup and contact forms</span>
            </div>
            <div className={listItemClass}>
              <Check className="w-5 h-5 text-seafoam stroke-[2.5] mt-0.5 flex-shrink-0" />
              <span>Content or copywriting support</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <ServiceImage
              src="/images/services/service-cards/4.1.png"
              alt="Website maintenance example"
              className={cardImageClass}
            />
            <ServiceImage
              src="/images/services/service-cards/4.2.png"
              alt="SEO optimization example"
              className={cardImageClass}
            />
            <ServiceImage
              src="/images/services/service-cards/4.3.png"
              alt="Analytics dashboard example"
              className={cardImageClass}
            />
            <ServiceImage
              src="/images/services/service-cards/4.4.png"
              alt="Website support example"
              className={cardImageClass}
            />
          </div>
        </div>
      ),
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does a website cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Website projects start at $800 for refreshes and $1,500 for new builds. Custom projects with advanced features (booking systems, databases, user logins) are priced individually based on scope.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does it take to build a website?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most website refreshes take 1-2 weeks, while new builds typically take 2-4 weeks depending on complexity. Custom projects with integrations may take longer.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you provide ongoing support after launch?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! I offer ongoing support packages for regular site updates, content changes, SEO monitoring, and performance tracking.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will my website be mobile-friendly?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. Every site I build is fully responsive and optimized for mobile, tablet, and desktop devices.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you help with SEO?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! All websites include basic SEO setup (meta tags, structured data, sitemap, fast loading speeds). For ongoing SEO work, I offer dedicated SEO support packages.',
        },
      },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        serviceType: 'Web Design and Development',
        provider: {
          '@type': 'LocalBusiness',
          name: 'Harborline Digital',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Kennebunk',
            addressRegion: 'ME',
            addressCountry: 'US',
          },
        },
        areaServed: 'Maine Coast',
        description: 'Professional web design services including website refreshes, new builds, custom add-ons, and ongoing support & SEO',
        offers: {
          '@type': 'Offer',
          priceRange: '$800+',
        },
      },
      faqSchema,
    ],
  };

  return (
    <div className="w-full">
      <SEO
        title="Web Design Services"
        description="Professional web design services for coastal businesses. Website refreshes starting at $800, new builds from $1,500, custom add-ons, and ongoing support & SEO."
        canonical="https://harborlinedigital.com/services"
        keywords="web design services, website refresh, new website build, custom web development, ongoing website support, SEO services, Maine web design"
        structuredData={serviceSchema}
      />
      <div className="container">
        <Breadcrumb items={[{ name: 'Services', path: '/services' }]} />
      </div>
      {/* Full-height Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-seafoam/40 via-sand to-white">
        <div className="container max-w-4xl mx-auto px-6 py-20 text-center">
          <p className="eyebrow mb-4">What We Offer</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6 leading-tight">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-navy/70 leading-relaxed max-w-3xl mx-auto">
            Whether you need to refresh an existing site, build something new, or keep
            things running with ongoing improvements, Harborline Digital makes the
            process simple. We'll modernize what you have, add the functionality you
            need, and support you long-term so you can stay focused on your business.
          </p>
          <div className="mt-12">
            <p className="text-sm text-navy/50 animate-bounce">
              ↓ Scroll to explore our services
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Component */}
      <Timeline data={data} />

      {/* FAQ Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="eyebrow mb-4">Common Questions</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-6">
            <div className="border-l-4 border-seafoam pl-6 py-4">
              <h3 className="font-display text-xl font-semibold text-navy mb-3">
                How much does a website cost?
              </h3>
              <p className="text-navy/80 leading-relaxed">
                Website projects start at $800 for refreshes and $1,500 for new builds. Custom projects with advanced features (booking systems, databases, user logins) are priced individually based on scope. We'll discuss your needs upfront and provide a clear estimate before starting work.
              </p>
            </div>
            <div className="border-l-4 border-seafoam pl-6 py-4">
              <h3 className="font-display text-xl font-semibold text-navy mb-3">
                How long does it take to build a website?
              </h3>
              <p className="text-navy/80 leading-relaxed">
                Most website refreshes take 1-2 weeks, while new builds typically take 2-4 weeks depending on complexity. Custom projects with integrations may take longer. Timeline depends on feedback cycles and content availability, so I'll work with you to establish realistic milestones.
              </p>
            </div>
            <div className="border-l-4 border-seafoam pl-6 py-4">
              <h3 className="font-display text-xl font-semibold text-navy mb-3">
                Do you provide ongoing support after launch?
              </h3>
              <p className="text-navy/80 leading-relaxed">
                Yes! I offer ongoing support packages for regular site updates, content changes, SEO monitoring, and performance tracking. You're never locked into a maintenance plan, but many clients find it helpful to have support available as their business grows.
              </p>
            </div>
            <div className="border-l-4 border-seafoam pl-6 py-4">
              <h3 className="font-display text-xl font-semibold text-navy mb-3">
                Will my website be mobile-friendly?
              </h3>
              <p className="text-navy/80 leading-relaxed">
                Absolutely. Every site I build is fully responsive and optimized for mobile, tablet, and desktop devices. With most web traffic coming from mobile devices, ensuring a great mobile experience is a top priority for every project.
              </p>
            </div>
            <div className="border-l-4 border-seafoam pl-6 py-4">
              <h3 className="font-display text-xl font-semibold text-navy mb-3">
                Can you help with SEO?
              </h3>
              <p className="text-navy/80 leading-relaxed">
                Yes! All websites include basic SEO setup (meta tags, structured data, sitemap, fast loading speeds). For ongoing SEO work like keyword tracking, content optimization, and local search improvements, I offer dedicated SEO support packages.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sand/40 min-h-[50vh] py-20 px-6 flex items-center">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-navy">
            Every project is{" "}
            <span className="underline decoration-seafoam decoration-4 underline-offset-8">
              Unique
            </span>
          </h2>
          <p className="text-navy/80 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            If you're not sure where your idea fits, let's chat. I'm always open to
            discussing custom solutions and pricing that make sense for your goals, no
            matter how niche or ambitious.
          </p>
          <Link
            to="/contact"
            className="mx-auto inline-flex items-center justify-center rounded-full bg-navy px-10 py-4 text-base font-semibold uppercase tracking-wide text-white transition hover:bg-navy/90"
          >
            Start A Project
          </Link>
        </div>
      </section>
    </div>
  );
}
