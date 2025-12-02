import type { ReactNode } from 'react';
import { useReveal } from '../hooks/useReveal';

interface ServiceItemProps {
  index: number;
  icon: ReactNode;
  title: string;
  description: string;
  bullets?: string[];
}

export default function ServiceItem({ index, icon, title, description, bullets }: ServiceItemProps) {
  const { ref, seen } = useReveal(0.2);

  // Determine if this is an even or odd index for alternating layout
  const isEven = index % 2 === 0;

  // Animation classes based on visibility state
  const cardAnimationClass = seen
    ? 'opacity-100 translate-x-0 translate-y-0'
    : `opacity-0 translate-y-8 ${isEven ? 'md:translate-x-8' : 'md:-translate-x-8'}`;

  return (
    <section
      ref={ref}
      className="grid md:grid-cols-2 items-center gap-8 md:gap-12"
    >
      {/* Text Content - Left on even, Right on odd (desktop) */}
      <div
        className={`${isEven ? 'md:order-1' : 'md:order-2'} transition-all duration-700 ease-out ${cardAnimationClass}`}
      >
        <div className="rounded-2xl border border-navy/10 bg-white p-8 md:p-10 shadow-sm">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-seafoam/20 text-navy mb-6">
            {icon}
          </div>

          {/* Title */}
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-navy mb-4">
            {title}
          </h3>

          {/* Description */}
          <p className="text-navy/70 leading-relaxed text-base md:text-lg mb-6">
            {description}
          </p>

          {/* Optional Bullets */}
          {bullets && bullets.length > 0 && (
            <ul className="space-y-3">
              {bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-seafoam flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-navy/80 text-sm md:text-base">{bullet}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Visual Placeholder - Right on even, Left on odd (desktop) */}
      <div
        className={`${isEven ? 'md:order-2' : 'md:order-1'} transition-all duration-700 ease-out delay-100 ${cardAnimationClass}`}
      >
        <div className="rounded-2xl border border-navy/10 bg-white aspect-video shadow-sm flex items-center justify-center overflow-hidden">
          {/* Subtle gradient background as placeholder */}
          <div className="w-full h-full bg-gradient-to-br from-seafoam/30 via-sand/50 to-white flex items-center justify-center">
            <div className="text-navy/20 scale-[2]">
              {icon}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

