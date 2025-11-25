'use client';

import Image from 'next/image';
import ScrollAnimation from '@/components/ui/ScrollAnimation';

export default function AboutSection() {
  return (
    <section
      id="sobre"
      className="py-20 bg-dark-section relative"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <ScrollAnimation direction="right" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-dark-foreground">
              Sobre Nós
            </h2>
            <div className="space-y-4 text-dark-muted leading-relaxed">
              <p>
                O escritório <strong className="text-dark-foreground">Barbosa Advocacia</strong> 
                {' '}é uma referência em serviços jurídicos em Vitória da Conquista e região. 
                Com anos de experiência e dedicação, oferecemos soluções jurídicas completas 
                e personalizadas para nossos clientes.
              </p>
              <p>
                Nossa missão é defender os direitos de nossos clientes com integridade, 
                transparência e excelência técnica. Acreditamos que cada caso é único e 
                merece atenção especializada e comprometida.
              </p>
              <p>
                Contamos com uma equipe de profissionais qualificados, sempre atualizados 
                com as mudanças legislativas e jurisprudenciais, garantindo o melhor 
                resultado possível em cada demanda.
              </p>
            </div>
          </ScrollAnimation>

          {/* Right Column - Image */}
          <ScrollAnimation direction="left" delay={0.2}>
            <div className="relative w-full h-[400px] sm:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://placehold.co/500x500/png"
                alt="Equipe do escritório Barbosa Advocacia"
                fill
                className="object-cover"
              />
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}

