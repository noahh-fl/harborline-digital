import { useNavigate } from "react-router-dom";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

const packages = [
  {
    name: "Refresh",
    emoji: "🧽",
    price: "Starting at $800",
    blurb: "Best for businesses with an existing site that needs a modern update.",
    perks: [
      "Design cleanup & layout updates",
      "Mobile-friendly optimization",
      "Basic SEO improvements",
      "Speed & performance tuning",
      "Small content updates",
    ],
    cta: "Request a refresh quote",
  },
  {
    name: "New Build",
    emoji: "🚀",
    price: "Starting at $1,500",
    blurb:
      "Perfect for small businesses, restaurants, and creatives who need a clean, modern website from scratch.",
    perks: [
      "Custom 3–5 page design",
      "Responsive mobile layout",
      "Copy & image integration",
      "Contact form setup",
      "Basic SEO setup",
    ],
    cta: "Start your project",
  },
  {
    name: "Custom & Advanced",
    emoji: "🧭",
    price: "Contact for pricing",
    blurb:
      "Best for projects that need more — user logins, booking systems, databases, or unique integrations.",
    perks: [
      "Tailored features & integrations",
      "Database or API setup",
      "Scalable hosting options",
      "Advanced SEO & analytics",
      "Ongoing maintenance available",
    ],
    cta: "Let’s talk",
  },
];

export default function Pricing() {
  const navigate = useNavigate();
  return (
    <section className="bg-sand min-h-screen flex items-center justify-center pt-40 pb-32 px-4">
      <div className="max-w-5xl mx-auto w-full space-y-12">
        <header className="text-center max-w-3xl mx-auto">
          <p className="text-3xl md:text-4xl font-extrabold text-navy mb-4">
            Pricing & Packages
          </p>
          <p className="text-base md:text-lg text-navy/80 leading-relaxed font-semibold">
            Every project is different, but these packages make it easy to get started.
            Whether you need a full website build or a quick refresh, we’ll help you
            find the right fit — and customize from there if needed.
          </p>
        </header>

        <div className="grid gap-6 justify-center md:grid-cols-3">
          {packages.map((pkg) => (
            <article
              key={pkg.name}
              className="bg-white rounded-3xl p-6 flex flex-col shadow-[0_20px_70px_rgba(15,39,66,0.08)] border border-white/60 w-full max-w-sm mx-auto"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl" aria-hidden="true">
                  {pkg.emoji}
                </span>
                <h3 className="text-xl font-bold text-navy">{pkg.name}</h3>
              </div>
              <p className="text-lg font-semibold text-navy mb-2">{pkg.price}</p>
              <p className="text-sm text-navy/70 font-semibold leading-relaxed mb-6">
                {pkg.blurb}
              </p>
              <ul className="space-y-3 mb-8">
                {pkg.perks.map((perk) => (
                  <li key={perk} className="flex gap-2 items-start text-navy/80">
                    <span aria-hidden="true">✨</span>
                    <span className="text-sm md:text-base font-semibold leading-relaxed">
                      {perk}
                    </span>
                  </li>
                ))}
              </ul>
              <InteractiveHoverButton
                text={pkg.cta}
                className="mt-auto w-full border-navy/15 bg-sand/60 text-navy hover:bg-navy hover:text-white"
                onClick={() => navigate("/contact")}
              />
            </article>
          ))}
        </div>

        <p className="text-center text-sm md:text-base text-navy/80 font-semibold mt-12">
          Not sure where your project fits? Let’s chat. I can help you find a plan that
          fits your needs and budget.
        </p>
      </div>
    </section>
  );
}
