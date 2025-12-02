import Section from '../components/Section';
import Card from '../components/Card';

export default function About() {
  return (
    <div>
      <Section
        eyebrow="⚓ About Harborline Digital"
        title="A small studio built for big ideas."
        kicker="Clean, modern web design for the small businesses that keep towns like Kennebunk feeling alive."
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
              I started Harborline Digital to bring clean, modern web design to the small businesses I grew up around, the ones that make towns like Kennebunk feel alive.
            </p>
            <p>
              I recently finished a six-month full stack web development bootcamp, but my roots with technology go way back. I have always been drawn to creating things on a computer, whether that is graphic design, video editing, 3D animation, or building small games. Web design turned out to be the perfect mix of creativity and logic for me.
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
              My approach
            </h3>
            <p className="text-navy/70 leading-relaxed">
              I focus on creating simple, highly functional websites that feel modern, fast, and easy to use. Every project is collaborative: I check in often, share progress, and make sure every decision fits your business goals before moving forward.
            </p>
            <p className="text-navy/70 leading-relaxed">
              I do not believe in one-size-fits-all templates. Each site is built intentionally, with attention to detail and a focus on long-term usability.
            </p>
          </Card>

          <Card
            hover
            className="p-6 space-y-4 select-none cursor-default transition-colors duration-200 hover:bg-sand/30"
          >
            <h3 className="font-display text-xl font-semibold text-navy">
              Why small businesses
            </h3>
            <p className="text-navy/70 leading-relaxed">
              The tech world is crowded, and working with local brands feels more meaningful than blending into a massive company. Growing up in Kennebunk, I have seen firsthand how many small businesses do not have the time or budget to prioritize their online presence, and that is exactly where I can help.
            </p>
            <p className="text-navy/70 leading-relaxed">
              Whether you are a boutique, restaurant, or local service provider, my goal is to make your business feel polished and professional online, without the overwhelm.
            </p>
          </Card>

          <Card
            hover
            className="p-6 space-y-4 select-none cursor-default transition-colors duration-200 hover:bg-sand/30"
          >
            <h3 className="font-display text-xl font-semibold text-navy">
              Looking ahead
            </h3>
            <p className="text-navy/70 leading-relaxed">
              Harborline Digital is currently a one-person studio, but I plan to grow over time by collaborating with other designers and developers who share the same values of craftsmanship, clarity, and community.
            </p>
          </Card>

          <Card
            hover
            className="p-6 space-y-4 select-none cursor-default transition-colors duration-200 hover:bg-sand/30"
          >
            <h3 className="font-display text-xl font-semibold text-navy">
              Personal note
            </h3>
            <p className="text-navy/70 leading-relaxed">
              I am a Kennebunk kid through and through: grew up biking to the beach, working summers around town, and even valet parking at the White Barn Inn. These days, I am temporarily based in California, but I am still proud to work with clients back home and beyond.
            </p>
            <p className="text-navy/70 leading-relaxed">
              Wherever you are based, if you care about your craft, I would love to help you bring that same care to your website.
            </p>
          </Card>
        </div>
      </Section>
    </div>
  );
}
