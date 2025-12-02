import type { ReactNode, ElementType } from 'react';

interface CardProps {
  children: ReactNode;
  as?: ElementType;
  href?: string;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  as: Component = 'div',
  href,
  className = '',
  hover = false,
}: CardProps) {
  const hoverClasses = hover
    ? 'transition-all duration-200 hover:-translate-y-1 hover:shadow-md'
    : '';

  if (Component === 'a' && href) {
    return (
      <a href={href} className={`card ${hoverClasses} ${className} block`}>
        {children}
      </a>
    );
  }

  return (
    <Component className={`card ${hoverClasses} ${className}`}>
      {children}
    </Component>
  );
}

