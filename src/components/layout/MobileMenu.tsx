'use client';

import { NAV_LINKS } from '@/lib/constants';
import { X } from 'lucide-react';
import Link from 'next/link';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-xl">
        <div className="flex items-center justify-between p-6 border-b">
          <span className="text-xl font-serif font-bold text-theme-foreground">
            Menu
          </span>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Fechar menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex flex-col p-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="py-4 text-lg text-theme-foreground hover:text-theme-primary transition-colors border-b border-gray-100 min-h-[44px] flex items-center"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contato"
            onClick={onClose}
            className="mt-4 px-6 py-3 bg-theme-primary text-white rounded-lg text-center hover:opacity-90 transition-opacity min-h-[44px] flex items-center justify-center"
          >
            Contato
          </Link>
        </nav>
      </div>
    </div>
  );
}

