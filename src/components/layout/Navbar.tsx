'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import Logo from '@/components/ui/Logo';
import Button from '@/components/ui/Button';
import MobileMenu from './MobileMenu';
import { NAV_LINKS } from '@/lib/constants';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? 'backdrop-blur-sm shadow-lg'
            : ''
        }`}
        style={{
          background: 'radial-gradient(ellipse at center, #1a2433 0%, #111828 50%, #0a0e14 100%)',
        }}
      >
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at center, #1f2937 0%, transparent 60%)',
          }}
        ></div>
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-between h-20">
            <Logo className="h-16" />
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-dark-foreground hover:text-theme-primary transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <Button variant="primary" asChild href="#contato">
                Contato
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Abrir menu"
            >
              <Menu className="w-6 h-6 text-dark-foreground" />
            </button>
          </div>
        </nav>
      </header>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}

