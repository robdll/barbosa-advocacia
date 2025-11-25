'use client';

import Card from '@/components/ui/Card';
import { SERVICES } from '@/lib/constants';
import ScrollAnimation from '@/components/ui/ScrollAnimation';
import { 
  Scale, 
  Briefcase, 
  Heart, 
  Building2, 
  Shield, 
  FileText 
} from 'lucide-react';

const iconMap = {
  Scale,
  Briefcase,
  Heart,
  Building2,
  Shield,
  FileText,
};

export default function ServicesSection() {
  return (
    <section
      id="servicos"
      className="py-20 bg-gray-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation direction="up" className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-theme-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-theme-muted max-w-2xl mx-auto">
            Oferecemos uma ampla gama de serviços jurídicos para atender todas as suas necessidades legais.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <ScrollAnimation
                key={service.title}
                direction="up"
                delay={index * 0.1}
              >
                <Card className="hover:scale-105 hover:shadow-lg cursor-pointer">
                  <div className="flex flex-col items-start space-y-4">
                    <div className="p-3 bg-theme-primary/10 rounded-lg">
                      {Icon && <Icon className="w-8 h-8 text-theme-primary" />}
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-theme-foreground">
                      {service.title}
                    </h3>
                    <p className="text-theme-muted leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </Card>
              </ScrollAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
}

