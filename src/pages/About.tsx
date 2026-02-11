import Section from '../components/Section';
import Card from '../components/Card';
import { SEO } from '../components/SEO';
import { Breadcrumb } from '../components/Breadcrumb';

export default function About() {
  return (
    <div>
      <SEO
        title="About Us"
        description="Learn about Harborline Digital, a small web design studio in Kennebunk, Maine dedicated to bringing modern web design to coastal small businesses."
        canonical="https://harborlinedigital.com/about"
        keywords="about Harborline Digital, web designer Kennebunk Maine, local web design studio, coastal web designer"
      />
      <div className="container">
        <Breadcrumb items={[{ name: 'About', path: '/about' }]} />
      </div>
      <Section
        eyebrow="About Harborline Digital"
        title="Modern web design for established small businesses."
        kicker="We design and build fast, strategic websites that help local brands present themselves with clarity and confidence."
        className="bg-sand min-h-screen flex items-center justify-center pt-36 pb-28"
      >
        <div className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto w-full">
          {/* Photo Placeholder */}
          <Card className="overflow-hidden">
            <div className="aspect-square bg-gradient-to-br from-seafoam/60 via-sand to-navy/20 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-32 h-32 mx-auto rounded-full bg-white/40 backdrop-blur-sm border-2 border-navy/20 flex items-center justify-center mb-4">
                  <span className="text-4xl font-display font-bold text-navy">HD</span>
                </div>
                <p className="text-sm text-navy/60 italic">Founder photo placeholder</p>
              </div>
            </div>
          </Card>

          {/* Bio */}
          <div className="space-y-6 text-navy/70 leading-relaxed">
            <p>
              Harborline Digital is a web design studio based in Kennebunk, Maine. We specialize in building clean, modern websites for small businesses that want a professional online presence without unnecessary complexity.
            </p>
            <p>
              With a background in full-stack development and digital design, our work blends strong visual presentation with reliable performance. Every site is built to be fast, accessible, and easy to manage.
            </p>
          </div>
        </div>
      </Section>

      {/* Detailed Story */}
      <Section className="bg-white">
        <div className="grid md:grid-cols-2 gap-8">
          <Card
            hover
            className="p-6 space-y-4 select-none cursor-default transition-colors duration-200 hover:bg-sand/30"
          >
            <h3 className="font-display text-xl font-semibold text-navy">
              Our Approach
            </h3>
            <p className="text-navy/70 leading-relaxed">
              We focus on clarity, performance, and usability. Each website is designed around your business goals — whether that is generating leads, supporting customers, or strengthening brand credibility.
            </p>
            <p className="text-navy/70 leading-relaxed">
              Projects are structured, collaborative, and transparent from start to launch. No unnecessary features, no bloated templates — just purposeful design and clean development.
            </p>

          </Card>

          <Card
            hover
            className="p-6 space-y-4 select-none cursor-default transition-colors duration-200 hover:bg-sand/30"
          >
            <h3 className="font-display text-xl font-semibold text-navy">
              Who We Work With
            </h3>
            <p className="text-navy/70 leading-relaxed">
              We partner with established small businesses — boutiques, restaurants, service providers, and professional firms — that need a website reflecting the quality of their work.
            </p>
            <p className="text-navy/70 leading-relaxed">
              Our clients value clear communication, thoughtful design, and long-term reliability. We build sites that support growth, not just aesthetics.
            </p>

          </Card>

          <Card
            hover
            className="p-6 space-y-4 select-none cursor-default transition-colors duration-200 hover:bg-sand/30"
          >
            <h3 className="font-display text-xl font-semibold text-navy">
              Studio Model
            </h3>
            <p className="text-navy/70 leading-relaxed">
              Harborline Digital operates as a focused, independent studio. When projects require additional expertise — such as advanced branding, photography, or specialized development — we collaborate with trusted partners to ensure high standards across every detail.
            </p>
          </Card>

          <Card
            hover
            className="p-6 space-y-4 select-none cursor-default transition-colors duration-200 hover:bg-sand/30"
          >
            <h3 className="font-display text-xl font-semibold text-navy">
              What You Can Expect
            </h3>
            <p className="text-navy/70 leading-relaxed">
              Clear timelines. Direct communication. Thoughtful execution. We aim to make the website process straightforward and efficient, so you can stay focused on running your business.
            </p>
            <p className="text-navy/70 leading-relaxed">
              Every project is built with long-term usability in mind — structured cleanly, optimized for performance, and designed to age well.
            </p>
          </Card>
        </div>
      </Section>
    </div>
  );
}
