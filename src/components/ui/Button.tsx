import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'outline';

interface BaseButtonProps {
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
}

interface ButtonProps extends BaseButtonProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  asChild?: false;
  href?: never;
}

interface ButtonLinkProps extends BaseButtonProps, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'children'> {
  asChild: true;
  href: string;
}

type ButtonComponentProps = ButtonProps | ButtonLinkProps;

export default function Button(props: ButtonComponentProps) {
  const { 
    variant = 'primary', 
    children, 
    className,
    asChild,
    href,
    ...restProps 
  } = props;
  
  const baseStyles = 'px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 min-h-[44px] inline-flex items-center justify-center';
  
  const variants = {
    primary: 'bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 text-white hover:from-amber-500 hover:via-yellow-600 hover:to-amber-700 shadow-lg hover:shadow-xl focus:ring-amber-400',
    secondary: 'bg-theme-secondary text-white hover:opacity-90 focus:ring-theme-secondary',
    outline: 'border-2 border-theme-primary text-theme-primary hover:bg-gradient-to-r hover:from-amber-400 hover:via-yellow-500 hover:to-amber-600 hover:text-white hover:border-transparent focus:ring-theme-primary transition-all',
  };

  const combinedClassName = cn(baseStyles, variants[variant], className);

  if (asChild === true && href) {
    const linkProps = restProps as Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'className'>;
    return (
      <Link
        href={href}
        className={combinedClassName}
        {...linkProps}
      >
        {children}
      </Link>
    );
  }

  const buttonProps = restProps as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button
      className={combinedClassName}
      {...buttonProps}
    >
      {children}
    </button>
  );
}

