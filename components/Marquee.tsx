import type { ReactNode } from 'react';

interface MarqueeProps {
  items: string[];
  /** Seconds for one full loop */
  duration?: number;
  /** Text styling for each phrase */
  itemClassName?: string;
  /** Separator element between phrases */
  separator?: ReactNode;
  className?: string;
}

// Infinite horizontal ticker — pure CSS, no client JS. The phrase list is
// repeated so one half is always wider than the screen, then the track
// scrolls exactly one half and loops seamlessly.
export default function Marquee({
  items,
  duration = 40,
  itemClassName = '',
  separator = <span className="text-pink">★</span>,
  className = '',
}: MarqueeProps) {
  const half = [...items, ...items, ...items];
  const row = [...half, ...half];

  return (
    <div className={`pause-on-hover relative overflow-hidden ${className}`} aria-hidden="true">
      <div
        className="animate-marquee flex w-max items-center whitespace-nowrap"
        style={{ ['--marquee-duration' as string]: `${duration}s` }}
      >
        {row.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className={itemClassName}>{item}</span>
            <span className="mx-6 md:mx-10">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
