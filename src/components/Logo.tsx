import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'default' | 'white';
}

const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  size = 'medium',
  variant = 'default' 
}) => {
  const sizeClasses = {
    small: 'h-6 w-auto',
    medium: 'h-12 w-auto',
    large: 'h-16 w-auto'
  };

  const variantClasses = {
    default: '',
    white: 'filter brightness-0 invert'
  };

  return (
    <img
      src="/aventora-logo.png"
      alt="Aventora International"
      className={`${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    />
  );
};

export default Logo;