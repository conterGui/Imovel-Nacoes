import React, { useState, useRef, useCallback } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { propertyConfig } from '@/config/property';

interface ComparisonSliderProps {
  before: string;
  after: string;
  label: string;
  beforeLabel: string;
  afterLabel: string;
}

const ComparisonSlider: React.FC<ComparisonSliderProps> = ({ 
  before, 
  after, 
  label,
  beforeLabel,
  afterLabel 
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current || !isDragging.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <div className="space-y-4">
      {label && (
        <h3 className="heading-secondary text-center">{label}</h3>
      )}
      
      <div
        ref={containerRef}
        className="relative aspect-video cursor-ew-resize select-none overflow-hidden"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
        onTouchMove={handleTouchMove}
      >
        {/* After image (full width, below) */}
        <img
          src={after}
          alt="After"
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />

        {/* Before image (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={before}
            alt="Before"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ width: `${100 / (sliderPosition / 100)}%`, maxWidth: 'none' }}
            draggable={false}
          />
        </div>

        {/* Slider line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          {/* Handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
            <div className="flex gap-0.5">
              <div className="w-0.5 h-4 bg-foreground/60" />
              <div className="w-0.5 h-4 bg-foreground/60" />
            </div>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute bottom-4 left-4 bg-black/60 text-white text-sm px-3 py-1.5 backdrop-blur-sm">
          {beforeLabel}
        </div>
        <div className="absolute bottom-4 right-4 bg-black/60 text-white text-sm px-3 py-1.5 backdrop-blur-sm">
          {afterLabel}
        </div>
      </div>
    </div>
  );
};

const BeforeAfterSection: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();
  const comparisons = propertyConfig.beforeAfter;

  if (!comparisons || comparisons.length === 0) return null;

  return (
    <section 
      id="before-after" 
      ref={ref as React.RefObject<HTMLElement>}
      className="section-padding bg-secondary"
    >
      <div className="container-wide">
        <h2 
          className={`heading-primary mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {t.beforeAfter.title}
        </h2>

        <div className={`grid gap-12 ${comparisons.length > 1 ? 'md:grid-cols-2' : ''}`}>
          {comparisons.map((comparison, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <ComparisonSlider
                before={comparison.before}
                after={comparison.after}
                label={comparison.label}
                beforeLabel={t.beforeAfter.before}
                afterLabel={t.beforeAfter.after}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
