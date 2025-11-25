import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="text-2xl font-serif font-bold text-dark-foreground hover:text-theme-primary transition-colors">
      Barbosa Advocacia
    </Link>
  );
}

