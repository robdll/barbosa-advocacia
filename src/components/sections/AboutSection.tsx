'use client';

import ScrollAnimation from '@/components/ui/ScrollAnimation';

export default function AboutSection() {
  return (
    <section
      id="sobre"
      className="py-20 bg-[#f8f8f8]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center">
          {/* Left Column - Content */}
          <ScrollAnimation direction="right" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-theme-foreground">
              Sobre Nós
            </h2>
            <div className="space-y-4 text-theme-muted leading-relaxed">
              <p>
                O escritório <strong className="text-theme-foreground">Barbosa Advocacia</strong> 
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

          {/* Right Column - Video */}
          <ScrollAnimation direction="left" delay={0.2}>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <video
                src="/images/video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="h-full object-contain"
              >
                Seu navegador não suporta o elemento de vídeo.
              </video>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}

