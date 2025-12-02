import { useState, type FormEvent } from 'react';
import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';

const inputClasses =
  'w-full px-4 py-3 rounded-lg border border-navy/15 bg-white text-navy placeholder-navy/40 focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-transparent transition-all';
const selectClasses = `${inputClasses} appearance-none pr-12 cursor-pointer`;

const SelectArrow = () => (
  <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-navy/40">
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M5 8l5 5 5-5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Placeholder - no backend
    setSubmitted(true);
  };

  return (
    <div className="space-y-0">
      <Section
        eyebrow="🪶 Contact"
        title="Let’s get your site sailing smoothly."
        kicker="Tell me a bit about your project below — whether you need a full website build, a refresh of something outdated, or just want to talk options. I’ll get back to you personally within a day."
      >
        <div className="max-w-4xl mx-auto">
          {!submitted ? (
            <Card className="p-8 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-navy"
                    >
                      Name
                    </label>
                    <p className="text-xs text-navy/60 mt-1">
                      Full name or business name so I know who to thank.
                    </p>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className={`mt-3 ${inputClasses}`}
                      placeholder="Harborline Supply Co."
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-navy"
                    >
                      Email
                    </label>
                    <p className="text-xs text-navy/60 mt-1">
                      Required — this is how I’ll reach back out.
                    </p>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className={`mt-3 ${inputClasses}`}
                      placeholder="you@harborlinedigital.com"
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="business"
                      className="block text-sm font-medium text-navy"
                    >
                      Business or brand name
                    </label>
                    <p className="text-xs text-navy/60 mt-1">
                      Optional, but it helps me understand your industry.
                    </p>
                    <input
                      type="text"
                      id="business"
                      name="business"
                      className={`mt-3 ${inputClasses}`}
                      placeholder="Downeast Dock Builders"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="website"
                      className="block text-sm font-medium text-navy"
                    >
                      Website (if you have one)
                    </label>
                    <p className="text-xs text-navy/60 mt-1">
                      Lets me see if you need a refresh or a new build.
                    </p>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      className={`mt-3 ${inputClasses}`}
                      placeholder="www.mainedocksupply.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="projectType"
                    className="block text-sm font-medium text-navy"
                  >
                    What are you looking for?
                  </label>
                  <p className="text-xs text-navy/60 mt-1">
                    Helps me tailor my reply and keep leads organized.
                  </p>
                  <div className="relative mt-3">
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      className={selectClasses}
                    >
                      <option value="">Select an option</option>
                      <option value="refresh">Website refresh</option>
                      <option value="new">New website design</option>
                      <option value="custom">Custom project or integration</option>
                      <option value="ongoing">Ongoing updates & support</option>
                      <option value="unsure">Not sure yet — just exploring options</option>
                    </select>
                    <SelectArrow />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-navy"
                  >
                    Short project description
                  </label>
                  <p className="text-xs text-navy/60 mt-1">
                    Tell me a little about what you’re hoping to do.
                  </p>
                  <textarea
                    id="description"
                    name="description"
                    rows={5}
                    required
                    className={`mt-3 resize-none ${inputClasses}`}
                    placeholder="I’m rebuilding our marina site and need online booking plus photo galleries..."
                  />
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="timeline"
                      className="block text-sm font-medium text-navy"
                    >
                      Ideal timeline (optional)
                    </label>
                    <div className="relative mt-3">
                      <select
                        id="timeline"
                        name="timeline"
                        className={selectClasses}
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Choose a timeline
                        </option>
                        <option value="asap">ASAP</option>
                        <option value="month">Within a month</option>
                        <option value="quarter">1–3 months</option>
                        <option value="planning">Just planning ahead</option>
                      </select>
                      <SelectArrow />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-sm font-medium text-navy"
                    >
                      Budget range (optional)
                    </label>
                    <div className="relative mt-3">
                      <select
                        id="budget"
                        name="budget"
                        className={selectClasses}
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Pick a range
                        </option>
                        <option value="under-1k">Under $1,000</option>
                        <option value="1-25">$1,000–$2,500</option>
                        <option value="25-5">$2,500–$5,000</option>
                        <option value="over-5">$5,000+</option>
                        <option value="unknown">Not sure yet</option>
                      </select>
                      <SelectArrow />
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="referral"
                    className="block text-sm font-medium text-navy"
                  >
                    How did you hear about Harborline Digital?
                  </label>
                  <p className="text-xs text-navy/60 mt-1">
                    Friend, local business, Google, social... I love to know what’s working.
                  </p>
                  <div className="relative mt-3">
                    <select
                      id="referral"
                      name="referral"
                      className={selectClasses}
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select one
                      </option>
                      <option value="friend">Friend</option>
                      <option value="local">Local business</option>
                      <option value="google">Google</option>
                      <option value="social">Social media</option>
                      <option value="other">Other</option>
                    </select>
                    <SelectArrow />
                  </div>
                </div>

                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <p className="text-sm text-navy/70">
                    I read every submission and reply within 24 hours.
                  </p>
                  <Button type="submit" className="w-full md:w-auto">
                    <span aria-hidden="true">→</span> Send message
                  </Button>
                </div>
              </form>
            </Card>
          ) : (
            <Card className="p-12 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-seafoam/40 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-navy"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-semibold text-navy mb-4">
                Got it — thank you!
              </h3>
              <p className="text-navy/70 leading-relaxed mb-6">
                I’ll review your answers and send a personal reply within a day. If I need anything
                else, I’ll reach out right away.
              </p>
              <Button
                variant="outline"
                onClick={() => setSubmitted(false)}
              >
                Send another project
              </Button>
            </Card>
          )}

          <div className="mt-10 text-center text-sm text-navy/80 space-y-2">
            <p>
              Prefer email? Reach me directly at{' '}
              <a
                href="mailto:noah@harborline.digital"
                className="underline decoration-navy/40 underline-offset-2 hover:decoration-navy"
              >
                noah@harborline.digital
              </a>
              .
            </p>
            <p>
              Or{' '}
              <a
                href="https://cal.com/harborline-digital/chat"
                target="_blank"
                rel="noreferrer noopener"
                className="underline decoration-navy/40 underline-offset-2 hover:decoration-navy"
              >
                book a quick chat
              </a>{' '}
              if you’d rather talk things through live.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
