import Section from '../components/Section';
import Card from '../components/Card';
import { Hero } from '../components/ui/animated-hero';
import ServicesSection from '../components/ui/services';
import { SEO } from '../components/SEO';

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

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Harborline Digital',
    url: 'https://harborlinedigital.com',
    logo: 'https://harborlinedigital.com/logo.svg',
    description: 'Coastal web design & development for small businesses',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kennebunk',
      addressRegion: 'ME',
      addressCountry: 'US',
    },
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Harborline Digital',
    image: 'https://harborlinedigital.com/og-image.png',
    '@id': 'https://harborlinedigital.com',
    url: 'https://harborlinedigital.com',
    telephone: '',
    priceRange: '$800 - $5000+',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kennebunk',
      addressRegion: 'ME',
      addressCountry: 'US',
    },
    description: 'Clean, modern websites with a coastal calm. We design and build fast, reliable sites for local businesses and creative professionals.',
    areaServed: 'Maine Coast',
  };

  const combinedSchema = {
    '@context': 'https://schema.org',
    '@graph': [organizationSchema, localBusinessSchema],
  };

  return (
    <div>
      <SEO
        title="Harborline Digital - Coastal Web Design & Development"
        description="Clean, modern websites with a coastal calm. We design and build fast, reliable sites for local businesses and creative professionals."
        canonical="https://harborlinedigital.com/"
        keywords="web design, web development, coastal, small business, Maine, Kennebunk, branding, e-commerce"
        structuredData={combinedSchema}
      />
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
          {featuredWork.map((project) => {
            const basePath = project.thumbnail.replace('.png', '');
            return (
              <Card key={project.title} hover className="overflow-hidden flex flex-col">
                <div className="h-48 border-b border-navy/10 bg-slate-50 flex items-center justify-center">
                  <picture>
                    <source
                      srcSet={`${basePath}-400w.webp 400w, ${basePath}-800w.webp 800w, ${basePath}-1200w.webp 1200w`}
                      sizes="(max-width: 640px) 400px, (max-width: 1024px) 800px, 1200px"
                      type="image/webp"
                    />
                    <img
                      src={project.thumbnail}
                      alt={`${project.title} homepage preview`}
                      loading="lazy"
                      className="max-h-full w-auto object-contain"
                    />
                  </picture>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-navy">
                    {project.title}
                  </h3>
                </div>
              </Card>
            );
          })}
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
