'use client';

import Image from 'next/image';
import Button from '@/components/ui/Button';
import ScrollAnimation from '@/components/ui/ScrollAnimation';

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center bg-gradient-to-br from-gray-100 to-[#f8f8f8] py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <ScrollAnimation direction="right" className="space-y-8 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-theme-foreground leading-tight">
              Assessoria Jurídica de{' '}
              <span className="inline-block bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent drop-shadow-lg [text-shadow:_0_2px_8px_rgb(251_191_36_/_0.3)]">
                Excelência
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-theme-muted leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Defendendo seus direitos com integridade, expertise e compromisso. 
              Soluções jurídicas profissionais e personalizadas em Vitória da Conquista.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="primary" asChild href="#contato">
                Agende uma Consulta
              </Button>
              <Button variant="outline" asChild href="#servicos">
                Nossos Serviços
              </Button>
            </div>
          </ScrollAnimation>

          {/* Right Column - Image */}
          <ScrollAnimation direction="left" delay={0.2}>
            <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="https://placehold.co/600x400/png"
                alt="Escritório de advocacia profissional"
                fill
                className="object-cover"
                priority
              />
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}

