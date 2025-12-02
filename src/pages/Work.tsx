import { useState, useEffect } from 'react';
import Section from '../components/Section';
import Card from '../components/Card';
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button';
import { X } from 'lucide-react';

type ProjectVisual = {
  src: string;
  caption: string;
  type?: 'image' | 'video';
};

type Project = {
  title: string;
  industry: string;
  result: string;
  thumbnail: string;
  visuals: ProjectVisual[];
  overview: string;
  services: string[];
  features: string[];
  notes: string;
};

export default function Work() {
  const projects: Project[] = [
    {
      title: 'Sea Breeze Yoga Studio',
      industry: 'Health & Wellness',
      result:
        'Lead-generation experience for boutique studios with class schedules, tiered memberships, and simple inquiries baked in.',
      thumbnail: '/images/work/sea.breeze/sb.home-pge2.png',
      visuals: [
        {
          src: '/images/work/sea.breeze/sb.home-pge2.png',
          caption: 'Immersive homepage highlighting programming and retreat imagery.',
        },
        {
          src: '/images/work/sea.breeze/sb.price-pge.png',
          caption: 'Pricing grid that spotlights membership tiers and guest passes.',
        },
        {
          src: '/images/work/sea.breeze/sb.home-pge.mov',
          caption: 'Looping hero walkthrough showing schedule highlights.',
          type: 'video',
        },
        {
          src: '/images/work/sea.breeze/sb.inst-pge.mov',
          caption: 'Class detail section preview with animated transitions.',
          type: 'video',
        },
      ],
      overview:
        'Built for studios that rotate classes frequently and need quick edits. The layout keeps hero imagery on-brand while offering straightforward CTAs into booking or consultation calls.',
      services: ['Landing page design', 'Membership pricing UI', 'Inquiry automation wiring'],
      features: ['Editable class schedule blocks', 'Tiered pricing with highlight states', 'Testimonial carousel placeholders'],
      notes:
        'Swap in studio photography, instructors, and calendar details to make it production-ready for pilates, barre, or wellness retreats.',
    },
    {
      title: 'Wild Tide Florals — Flower Shop',
      industry: 'Lifestyle & Retail',
      result:
        'Editorial landing page for boutique florists showcasing signature arrangements, gifting options, and lead capture for events.',
      thumbnail: '/images/work/wild.tide/wt.home-pge.png',
      visuals: [
        {
          src: '/images/work/wild.tide/wt.home-pge.png',
          caption: 'Homepage with collection highlights and event inquiry prompts.',
        },
        {
          src: '/images/work/wild.tide/wt.home-pge.mov',
          caption: 'Hero flow showcasing bouquet collections in motion.',
          type: 'video',
        },
      ],
      overview:
        'Ideal for florists or stylists who want a cinematic hero, featured collections, and a clear path into wedding or event inquiries.',
      services: ['Brand-forward landing design', 'Collection storytelling', 'Event inquiry funnel'],
      features: ['Gallery-ready hero module', 'Collection tiles with hover states', 'Lead capture form section'],
      notes:
        'Update copy and palette to match the florist’s tone, then plug in product photos or reels for a fully custom feel.',
    },
    {
      title: 'Bean & Anchor Coffee Co.',
      industry: 'Retail & E-commerce',
      result:
        'Custom Shopify template that keeps seasonal drops, bean stories, and subscriptions front-and-center for an easy brand swap.',
      thumbnail: '/images/work/bean.anchor/ab.home-pge.png',
      visuals: [
        {
          src: '/images/work/bean.anchor/ab.home-pge.png',
          caption: 'Homepage hero highlighting featured roasts and membership perks.',
        },
        {
          src: '/images/work/bean.anchor/ab.home-pge.mov',
          caption: 'Scrolling hero demonstrating autoplayed featured roast reel.',
          type: 'video',
        },
      ],
      overview:
        'Flexible storefront built for craft roasters or boutique F&B brands who want to highlight story-driven products with quick add-to-cart moments.',
      services: ['Shopify theme customization', 'Product storytelling layout', 'Subscription CTA blocks'],
      features: ['Modular product highlights', 'Long-form brand section', 'Sticky purchase prompts'],
      notes:
        'Easily tailored to any artisanal goods brand by swapping palette, photography, and featured beans with their signature offerings.',
    },
  ];

  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeVisualDetail, setActiveVisualDetail] = useState<{
    projectTitle: string;
    visual: ProjectVisual;
  } | null>(null);

  useEffect(() => {
    if (!activeProject && !activeVisualDetail) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;

      if (activeVisualDetail) {
        setActiveVisualDetail(null);
        return;
      }

      if (activeProject) {
        setActiveProject(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeProject, activeVisualDetail]);

  const closeModal = () => setActiveProject(null);
  const sortedVisuals: ProjectVisual[] = activeProject
    ? [...activeProject.visuals].sort((a, b) => {
        const priority = (visual: ProjectVisual) => (visual.type === 'video' ? 0 : 1);
        return priority(a) - priority(b);
      })
    : [];

  return (
    <div>
      <Section
        eyebrow="Portfolio"
        title="Our Work"
        kicker="We've helped local businesses and creative professionals build their online presence with custom websites that deliver results."
        className="bg-sand/40 min-h-screen flex items-center justify-center pt-36 pb-28"
      >
        <div className="grid gap-8 justify-center md:grid-cols-2 lg:grid-cols-3 mx-auto w-full max-w-5xl">
          {projects.map((project) => (
            <Card
              key={project.title}
              hover
              className="overflow-hidden flex flex-col w-full max-w-sm mx-auto"
            >
              <div className="aspect-video border-b border-navy/10 bg-slate-100">
                <img
                  src={project.thumbnail}
                  alt={`${project.title} homepage preview`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-1 flex-col">
                <p className="eyebrow mb-2">{project.industry}</p>
                <h3 className="font-display text-xl font-semibold text-navy mb-3">
                  {project.title}
                </h3>
                <p className="text-sm text-navy/70 leading-relaxed flex-1">
                  {project.result}
                </p>
                <div className="mt-6 flex">
                  <InteractiveHoverButton
                    text="View details"
                    className="w-auto whitespace-nowrap self-start border-navy/20 bg-white text-navy px-5"
                    onClick={() => setActiveProject(project)}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {activeProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
        >
          <div
            className="absolute inset-0 bg-navy/70 backdrop-blur-sm"
            onClick={closeModal}
          />
          <div className="relative z-10 w-full max-w-6xl overflow-hidden rounded-3xl bg-white shadow-2xl">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-7/12 border-b lg:border-b-0 lg:border-r border-navy/10 bg-slate-50">
                <div className="max-h-[75vh] overflow-y-auto">
                  {sortedVisuals.map((visual) => (
                    <figure key={visual.src} className="p-4">
                      <button
                        type="button"
                        onClick={() =>
                          setActiveVisualDetail({
                            projectTitle: activeProject.title,
                            visual,
                          })
                        }
                        className="w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-seafoam/80 rounded-2xl"
                      >
                        <div className="overflow-hidden rounded-2xl border border-navy/10 bg-white">
                          {visual.type === 'video' ? (
                            <video
                              src={visual.src}
                              autoPlay
                              loop
                              muted
                              playsInline
                              className="w-full object-cover"
                            />
                          ) : (
                            <img
                              src={visual.src}
                              alt={visual.caption}
                              className="w-full object-cover"
                            />
                          )}
                        </div>
                      </button>
                      <figcaption className="mt-3 text-xs uppercase tracking-wide text-navy/60">
                        {visual.caption}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
              <div className="lg:w-5/12 max-h-[75vh] overflow-y-auto p-6 lg:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="eyebrow mb-1 text-navy/70">{activeProject.industry}</p>
                    <h3 className="font-display text-2xl font-semibold text-navy">
                      {activeProject.title}
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="rounded-full border border-navy/20 px-3 py-1 text-sm font-medium text-navy/70 transition hover:border-navy/40 hover:text-navy"
                  >
                    Close
                  </button>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-navy/80">
                  {activeProject.overview}
                </p>

                <div className="mt-6 space-y-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-navy/50">
                      Services
                    </p>
                    <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-navy/80">
                      {activeProject.services.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-navy/50">
                      Features
                    </p>
                    <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-navy/80">
                      {activeProject.features.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-navy/10 bg-slate-50/80 p-4 text-sm text-navy/80">
                  <p className="font-semibold text-navy">Implementation Notes</p>
                  <p className="mt-1 leading-relaxed">{activeProject.notes}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeVisualDetail && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[70] flex items-center justify-center px-4"
        >
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur"
            onClick={() => setActiveVisualDetail(null)}
          />
          <div className="relative z-10 w-full max-w-5xl rounded-3xl bg-white/95 shadow-2xl">
            <div className="flex justify-between items-center border-b border-navy/10 px-6 py-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-navy/60">
                  {activeVisualDetail.projectTitle}
                </p>
                <h4 className="text-xl font-semibold text-navy mt-1">
                  {activeVisualDetail.visual.caption}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setActiveVisualDetail(null)}
                aria-label="Close detailed view"
                className="rounded-full bg-slate-100 p-2 text-navy hover:bg-slate-200 transition"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="grid gap-8 px-6 py-6 lg:grid-cols-[3fr_2fr]">
              <div className="overflow-hidden rounded-2xl bg-white shadow-inner border border-navy/10">
                {activeVisualDetail.visual.type === 'video' ? (
                  <video
                    src={activeVisualDetail.visual.src}
                    controls
                    autoPlay
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={activeVisualDetail.visual.src}
                    alt={activeVisualDetail.visual.caption}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="flex flex-col gap-4 text-sm text-navy/80">
                <div>
                  <p className="font-semibold text-navy">Format</p>
                  <p>
                    {activeVisualDetail.visual.type === 'video'
                      ? 'High-definition walkthrough'
                      : 'High-resolution mockup'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-navy">What to look for</p>
                  <p>
                    {activeVisualDetail.visual.caption}
                  </p>
                </div>
                <div className="rounded-2xl bg-sand/70 px-4 py-3 text-navy">
                  <p className="text-xs uppercase tracking-widest text-navy/60 mb-1">
                    Detail
                  </p>
                  <p className="text-sm">
                    Tap anywhere on the background or press ESC to return to the project overview.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
