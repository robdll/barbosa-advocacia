'use client';

import { useState, FormEvent } from 'react';
import Button from '@/components/ui/Button';
import { Input, Textarea } from '@/components/ui/Input';
import ScrollAnimation from '@/components/ui/ScrollAnimation';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    console.log('Form submitted:', formData);
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contato"
      className="py-20 bg-[#f8f8f8]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <ScrollAnimation direction="up" className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-theme-foreground mb-4">
              Entre em Contato
            </h2>
            <p className="text-lg text-theme-muted">
              Estamos prontos para ajudar. Envie sua mensagem e retornaremos o mais breve possível.
            </p>
          </ScrollAnimation>

          <ScrollAnimation direction="up" delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <ScrollAnimation direction="up" delay={0.3}>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-theme-foreground mb-2"
                  >
                    Nome Completo
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Seu nome completo"
                  />
                </div>
              </ScrollAnimation>

              <ScrollAnimation direction="up" delay={0.4}>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-theme-foreground mb-2"
                  >
                    E-mail
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="seu@email.com"
                  />
                </div>
              </ScrollAnimation>

              <ScrollAnimation direction="up" delay={0.5}>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-theme-foreground mb-2"
                  >
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Como podemos ajudá-lo?"
                  />
                </div>
              </ScrollAnimation>

              <ScrollAnimation direction="up" delay={0.6}>
                <Button
                  type="submit"
                  variant="primary"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                </Button>
              </ScrollAnimation>
            </form>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}

