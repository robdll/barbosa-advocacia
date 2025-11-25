import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        'w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-[#333333] focus:outline-none focus:ring-2 focus:ring-theme-primary focus:border-transparent transition-all min-h-[44px]',
        'dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100 dark:placeholder-gray-400',
        className
      )}
      {...props}
    />
  );
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function Textarea({ className, ...props }: TextareaProps) {
  return (
    <textarea
      className={cn(
        'w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-[#333333] focus:outline-none focus:ring-2 focus:ring-theme-primary focus:border-transparent transition-all min-h-[120px] resize-y',
        'dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100 dark:placeholder-gray-400',
        className
      )}
      {...props}
    />
  );
}

