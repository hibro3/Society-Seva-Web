import React from 'react';

/**
 * Reusable button component with optional gradient and hover effects.
 * Props:
 * - href: target URL (string)
 * - children: button label or inner content (ReactNode)
 * - variant: 'primary' | 'secondary' | 'ghost' (string) - determines styling
 * - className: additional Tailwind classes (string)
 */
export default function Button({ href = '#', children, variant = 'primary', className = '' }) {
  const baseClasses = 'inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-button text-button transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variants = {
    primary: 'bg-gradient-to-r from-primary to-secondary text-white hover:from-primary-dark hover:to-secondary-dark hover:scale-105 shadow-lg hover:shadow-xl',
    secondary: 'bg-white/10 backdrop-blur-sm text-white border border-white/30 hover:bg-white/20 hover:scale-105 shadow-sm',
    ghost: 'bg-transparent text-primary hover:bg-primary/10 rounded-full',
  };
  const finalClasses = `${baseClasses} ${variants[variant] || variants.primary} ${className}`;

  return (
    <a href={href} className={finalClasses}>
      {children}
    </a>
  );
}
