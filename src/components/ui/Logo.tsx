import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className="inline-block hover:opacity-90 transition-opacity">
      <Image
        src="/images/logo.png"
        alt="Barbosa Advocacia"
        width={180}
        height={60}
        className={cn("h-12 w-auto object-contain", className)}
        priority
      />
    </Link>
  );
}

