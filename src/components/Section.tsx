import type { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  title?: string;
  eyebrow?: string;
  kicker?: string;
  className?: string;
}

export default function Section({
  children,
  title,
  eyebrow,
  kicker,
  className = '',
}: SectionProps) {
  return (
    <section className={`section ${className}`}>
      <div className="container">
        {(eyebrow || title || kicker) && (
          <div className="mb-12 text-center max-w-3xl mx-auto">
            {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                {title}
              </h2>
            )}
            {kicker && <p className="kicker">{kicker}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

