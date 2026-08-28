import Image from 'next/image';
import { FOUNDER } from '@/lib/demo-data';

export default function AboutPage() {
  return (
    <div className="section">
      <div className="container max-w-4xl">
        <div className="text-center mb-14">
          <h1 className="font-display uppercase text-3xl md:text-5xl text-ink tracking-wide">
            <span className="text-pink mr-3">★</span>About<span className="text-pink ml-3">★</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
            <Image src={FOUNDER.image} alt={FOUNDER.name} fill className="object-cover" />
          </div>
          <div>
            <p className="text-pink text-sm uppercase tracking-widest mb-2 font-semibold">The Founder</p>
            <h2 className="font-heading text-3xl text-ink mb-4">{FOUNDER.name}</h2>
            <p className="text-ink/90 text-lg italic mb-4">&ldquo;{FOUNDER.quote}&rdquo;</p>
            <p className="text-silver-dark mb-6">{FOUNDER.tagline}</p>
            <p className="text-pink font-heading text-xl tracking-wide">{FOUNDER.challenge}</p>
          </div>
        </div>

        <div className="prose-content text-silver-dark leading-relaxed space-y-4">
          <p>
            The IndiAffect started with a simple idea: give women the tools — literally and
            figuratively — to feel like the best version of themselves. What began as a virgin
            hair line has grown into a full brand spanning premium hair, statement merch, and
            the &ldquo;Broke 2 Boss&rdquo; business resource series for women building something
            of their own.
          </p>
          <p>
            Every product carries the same signature line: &ldquo;I Have That Affect On
            People.&rdquo; It's not just a tagline — it's a challenge to create, influence, and
            evolve, in whatever way that means for you.
          </p>
        </div>
      </div>
    </div>
  );
}
