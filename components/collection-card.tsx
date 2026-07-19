import Image from "next/image";
import Link from "next/link";

interface CollectionCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  cta?: string;
}

export function CollectionCard({
  title,
  description,
  image,
  href,
  cta = "Explore Collection",
}: CollectionCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="relative overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={title}
          width={800}
          height={600}
          className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="font-serif text-xl font-semibold text-primary-foreground">
            {title}
          </h3>
          <p className="mt-1 text-sm text-primary-foreground/80 leading-relaxed">
            {description}
          </p>
          <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors group-hover:text-accent/80">
            {cta}
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
