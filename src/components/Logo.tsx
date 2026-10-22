import React from 'react';
import { ASSET_IMAGES } from '../assets/images';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showText?: boolean;
  variant?: 'card' | 'plain';
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  className = '',
  showText = false,
  variant = 'card'
}) => {
  // Height classes that respect original aspect ratio (approx 25:12 horizontal)
  const imageSizeClasses = {
    sm: 'h-7 sm:h-8 w-auto max-w-[140px]',
    md: 'h-10 sm:h-11 w-auto max-w-[200px]',
    lg: 'h-14 sm:h-16 w-auto max-w-[280px]',
    xl: 'h-20 sm:h-24 w-auto max-w-[380px]'
  }[size];

  const cardPaddingClasses = {
    sm: 'px-2 py-1 rounded-lg',
    md: 'px-3 py-1.5 rounded-xl',
    lg: 'px-6 py-3 rounded-2xl',
    xl: 'px-8 py-4 rounded-3xl'
  }[size];

  const content = (
    <img
      src={ASSET_IMAGES.imaadLogo}
      alt="Imaad International Tours & Travels"
      className={`${imageSizeClasses} object-contain transition-transform duration-200 group-hover:scale-[1.02]`}
      loading="eager"
      decoding="async"
      style={{ aspectRatio: '25 / 12' }}
    />
  );

  return (
    <div className={`inline-flex items-center shrink-0 ${className}`}>
      {/* 
        Official Logo display supporting both high-contrast card and transparent representations.
        Card variant guarantees navy & gold lettering is razor-sharp on dark and light surfaces.
      */}
      {variant === 'card' ? (
        <div
          className={`bg-white shadow-sm border border-neutral-100 flex items-center justify-center transition-all duration-200 hover:shadow-md hover:bg-neutral-50/95 ${cardPaddingClasses}`}
        >
          {content}
        </div>
      ) : (
        <div className="filter drop-shadow-[0_0_2px_rgba(255,255,255,0.9)] drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
          {content}
        </div>
      )}

      {showText && (
        <span className="sr-only">Imaad International Tours & Travels</span>
      )}
    </div>
  );
};

export default Logo;
