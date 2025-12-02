import { Timeline } from "@/components/ui/timeline";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

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
            <img
              src="/images/services/service-cards/1.1.png"
              alt="Website refresh concept"
              className={cardImageClass}
            />
            <img
              src="/images/services/service-cards/1.2.png"
              alt="Navigation improvements preview"
              className={cardImageClass}
            />
            <img
              src="/images/services/service-cards/1.3.png"
              alt="Feature updates mockup"
              className={cardImageClass}
            />
            <img
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
            <img
              src="/images/services/service-cards/2.1.png"
              alt="New website concept"
              className={cardImageClass}
            />
            <img
              src="/images/services/service-cards/2.2.png"
              alt="Responsive layout preview"
              className={cardImageClass}
            />
            <img
              src="/images/services/service-cards/2.3.png"
              alt="Clean website layout example"
              className={cardImageClass}
            />
            <img
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
            <img
              src="/images/services/service-cards/3.1.png"
              alt="Custom add-on interface"
              className={cardImageClass}
            />
            <img
              src="/images/services/service-cards/3.2.png"
              alt="Booking tool example"
              className={cardImageClass}
            />
            <img
              src="/images/services/service-cards/3.3.png"
              alt="Database connection visualization"
              className={cardImageClass}
            />
            <img
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
            <img
              src="/images/services/service-cards/4.1.png"
              alt="Website maintenance example"
              className={cardImageClass}
            />
            <img
              src="/images/services/service-cards/4.2.png"
              alt="SEO optimization example"
              className={cardImageClass}
            />
            <img
              src="/images/services/service-cards/4.3.png"
              alt="Analytics dashboard example"
              className={cardImageClass}
            />
            <img
              src="/images/services/service-cards/4.4.png"
              alt="Website support example"
              className={cardImageClass}
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
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

      <section className="bg-sand/40 min-h-[50vh] py-20 px-6 flex items-center">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-navy">
            Every project is{" "}
            <span className="underline decoration-seafoam decoration-4 underline-offset-8">
              Uniqie
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
