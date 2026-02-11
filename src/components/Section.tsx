import type { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  title?: string;
  eyebrow?: string;
  kicker?: string;
  className?: string;
  titleTag?: 'h1' | 'h2';
}

export default function Section({
  children,
  title,
  eyebrow,
  kicker,
  className = '',
  titleTag = 'h2',
}: SectionProps) {
  const TitleTag = titleTag;

  return (
    <section className={`section ${className}`}>
      <div className="container">
        {(eyebrow || title || kicker) && (
          <div className="mb-12 text-center max-w-3xl mx-auto">
            {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
            {title && (
              <TitleTag className="text-3xl md:text-4xl font-bold text-navy mb-4">
                {title}
              </TitleTag>
            )}
            {kicker && <p className="kicker">{kicker}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

