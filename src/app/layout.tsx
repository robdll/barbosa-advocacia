import type { Metadata } from 'next';
import { Libre_Baskerville, Lato } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppFAB from '@/components/ui/WhatsAppFAB';

const libreBaskerville = Libre_Baskerville({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const lato = Lato({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Barbosa Advocacia | Serviços Jurídicos em Vitoria da Conquista',
  description: 'Escritório de advocacia especializado em Direito Civil, Trabalhista, Família, Empresarial, Criminal e Previdenciário. Soluções jurídicas profissionais e elegantes em Vitória da Conquista, Bahia.',
  keywords: 'advocacia, direito civil, direito trabalhista, direito de família, direito empresarial, direito criminal, direito previdenciário, Vitória da Conquista, Bahia',
  authors: [{ name: 'Barbosa Advocacia' }],
  openGraph: {
    title: 'Barbosa Advocacia | Serviços Jurídicos em Vitoria da Conquista',
    description: 'Escritório de advocacia especializado em soluções jurídicas profissionais e elegantes.',
    type: 'website',
    locale: 'pt_BR',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${libreBaskerville.variable} ${lato.variable}`}>
      <body className="font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  );
}

