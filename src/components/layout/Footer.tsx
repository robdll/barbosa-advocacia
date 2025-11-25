import Link from 'next/link';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import Logo from '@/components/ui/Logo';
import { NAV_LINKS, SOCIAL_LINKS, FIRM_NAME, CURRENT_YEAR } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-[#0a0e14] text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Logo className="h-14" />
            <p className="text-sm leading-relaxed">
              Escritório de advocacia comprometido com a excelência jurídica e 
              a defesa dos direitos de nossos clientes em Vitória da Conquista e região.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-white font-serif text-lg font-semibold mb-4">
              Navegação
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-theme-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-serif text-lg font-semibold mb-4">
              Contato
            </h3>
            <ul className="space-y-2 text-sm">
              <li>Vitória da Conquista, BA</li>
              <li>
                <a
                  href="mailto:contato@barbosaadvocacia.com.br"
                  className="hover:text-theme-primary transition-colors"
                >
                  contato@barbosaadvocacia.com.br
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white font-serif text-lg font-semibold mb-4">
              Redes Sociais
            </h3>
            <div className="flex space-x-4">
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-800 hover:bg-theme-primary transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-800 hover:bg-theme-primary transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-800 hover:bg-theme-primary transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>
            © {CURRENT_YEAR} {FIRM_NAME}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

