'use client';

import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '@/lib/constants';

export default function WhatsAppFAB() {
  const handleClick = () => {
    const message = encodeURIComponent(WHATSAPP_MESSAGE);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse min-w-[64px] min-h-[64px] flex items-center justify-center"
      aria-label="Contatar via WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </button>
  );
}

