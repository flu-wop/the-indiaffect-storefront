import Reveal from '@/components/Reveal';
import type { ReactNode } from 'react';

// Recurring "eyebrow + giant display headline" unit that opens most sections.
export default function SectionHeading({
  eyebrow,
  title,
  tone = 'light',
  align = 'left',
  className = '',
}: {
  eyebrow?: string;
  title: ReactNode;
  tone?: 'light' | 'dark';
  align?: 'left' | 'center';
  className?: string;
}) {
  return (
    <div className={`${align === 'center' ? 'text-center' : ''} ${className}`}>
      {eyebrow && (
        <Reveal>
          <p className={`eyebrow mb-5 ${align === 'center' ? 'justify-center' : ''}`}>{eyebrow}</p>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2 className={`display-lg ${tone === 'dark' ? 'text-paper' : 'text-ink'}`}>{title}</h2>
      </Reveal>
    </div>
  );
}
