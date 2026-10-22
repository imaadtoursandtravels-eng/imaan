import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export interface LightboxImage {
  src: string;
  title: string;
  location?: string;
  caption?: string;
}

interface ImageLightboxProps {
  images: LightboxImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev Button */}
      {images.length > 1 && (
        <button
          onClick={onPrev}
          className="absolute left-4 z-50 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          aria-label="Previous Image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Next Button */}
      {images.length > 1 && (
        <button
          onClick={onNext}
          className="absolute right-4 z-50 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          aria-label="Next Image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Main Image & Caption Container */}
      <div className="max-w-5xl w-full max-h-[88vh] flex flex-col items-center justify-center">
        <div className="relative overflow-hidden rounded-xl border border-[#D4AF37]/40 shadow-2xl bg-black">
          <img
            src={currentImage.src}
            alt={currentImage.title}
            className="max-h-[72vh] w-auto max-w-full object-contain mx-auto"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="mt-4 text-center max-w-xl text-white space-y-1">
          <h3 className="font-serif text-lg font-bold text-[#F3E5AB]">
            {currentImage.title}
          </h3>
          {currentImage.location && (
            <p className="text-xs text-[#D4AF37] font-medium">
              {currentImage.location}
            </p>
          )}
          {currentImage.caption && (
            <p className="text-xs text-neutral-300">
              {currentImage.caption}
            </p>
          )}
          <p className="text-[11px] text-neutral-500 pt-1">
            {currentIndex + 1} of {images.length}
          </p>
        </div>
      </div>
    </div>
  );
};
