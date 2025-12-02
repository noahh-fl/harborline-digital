import type { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'outline';
  as?: 'button' | 'a';
  href?: string;
}

export default function Button({
  children,
  variant = 'primary',
  as = 'button',
  href,
  className = '',
  ...props
}: ButtonProps) {
  const variantClass = variant === 'primary' ? 'btn-primary' : 'btn-outline';
  const classes = `btn ${variantClass} ${className}`;

  if (as === 'a' && href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

