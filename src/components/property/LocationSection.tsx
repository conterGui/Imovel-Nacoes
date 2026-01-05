import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { propertyConfig } from '@/config/property';
import { MapPin, Navigation } from 'lucide-react';

const LocationSection: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const openMaps = () => {
    const { lat, lng } = propertyConfig.mapCenter;
    window.open(`https://www.google.com/maps?q=${lat},${lng}`, '_blank');
  };

  return (
    <section 
      id="location" 
      ref={ref as React.RefObject<HTMLElement>}
      className="section-padding bg-background"
    >
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info */}
          <div 
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <h2 className="heading-primary mb-8">
              {t.location.title}
            </h2>

            <p className="body-large text-muted-foreground mb-8">
              {t.location.description}
            </p>

            <div className="flex items-start gap-3 mb-8">
              <MapPin className="w-5 h-5 text-muted-foreground mt-1 flex-shrink-0" />
              <span className="body-base">{propertyConfig.address}</span>
            </div>

            <div className="divider mb-8" />

            <h3 className="heading-secondary mb-6">
              {t.location.highlights.title}
            </h3>

            <ul className="space-y-4 mb-8">
              {t.location.highlights.items.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-foreground rounded-full" />
                  <span className="body-base">{item}</span>
                </li>
              ))}
            </ul>

            <button onClick={openMaps} className="btn-secondary">
              <Navigation className="w-5 h-5" />
              Ver no Google Maps
            </button>
          </div>

          {/* Map placeholder */}
          <div 
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div 
              className="aspect-square bg-muted flex items-center justify-center cursor-pointer hover:bg-muted/80 transition-colors"
              onClick={openMaps}
            >
              <div className="text-center">
                <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="body-small">Clique para abrir no Google Maps</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
