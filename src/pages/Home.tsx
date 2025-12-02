import Section from '../components/Section';
import Card from '../components/Card';
import { Hero } from '../components/ui/animated-hero';
import ServicesSection from '../components/ui/services';

export default function Home() {
  const featuredWork = [
    {
      title: 'Wild Tide Florals',
      thumbnail: '/images/work/wild.tide/wt.home-pge.png',
    },
    {
      title: 'Sea Breeze Yoga Studio',
      thumbnail: '/images/work/sea.breeze/sb.home-pge2.png',
    },
    {
      title: 'Bean & Anchor Coffee Co.',
      thumbnail: '/images/work/bean.anchor/ab.home-pge.png',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <ServicesSection />

      {/* Featured Work Preview */}
      <Section
        eyebrow="Recent Projects"
        title="Featured Work"
        kicker="A selection of sites we've built for clients along the coast."
        className="bg-white"
      >
        <div className="grid md:grid-cols-3 gap-6">
          {featuredWork.map((project) => (
            <Card key={project.title} hover className="overflow-hidden flex flex-col">
              <div className="h-48 border-b border-navy/10 bg-slate-50 flex items-center justify-center">
                <img
                  src={project.thumbnail}
                  alt={`${project.title} homepage preview`}
                  className="max-h-full w-auto object-contain"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-navy">
                  {project.title}
                </h3>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="/work"
            className="inline-flex items-center rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy/90"
          >
            View Full Work
          </a>
        </div>
      </Section>
    </div>
  );
}
