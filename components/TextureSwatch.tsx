import Image from 'next/image';
import Link from 'next/link';

interface TextureSwatchProps {
  title: string;
  image: string;
  href: string;
}

export default function TextureSwatch({ title, image, href }: TextureSwatchProps) {
  return (
    <Link
      href={href}
      className="group relative aspect-[4/5] overflow-hidden rounded-lg"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-charcoal/40 group-hover:bg-charcoal/60 transition-colors" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
        <h3 className="text-heading-3 font-heading text-white mb-2 group-hover:scale-105 transition-transform">
          {title}
        </h3>
        <div className="w-12 h-px bg-gold group-hover:w-16 transition-all" />
        <p className="mt-4 text-sm text-white/80 group-hover:text-white transition-colors">
          Shop Now →
        </p>
      </div>
    </Link>
  );
}
