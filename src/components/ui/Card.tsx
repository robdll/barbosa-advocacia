import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        'bg-[#fafafa] rounded-lg shadow-md p-6 border border-gray-200 transition-all duration-300',
        className
      )}
    >
      {children}
    </div>
  );
}

