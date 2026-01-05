import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { propertyConfig } from '@/config/property';

const VideoSection: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  if (!propertyConfig.tourVideo) return null;

  return (
    <section 
      id="video" 
      ref={ref as React.RefObject<HTMLElement>}
      className="section-padding bg-background"
    >
      <div className="container-wide">
        <h2 
          className={`heading-primary mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {t.video.title}
        </h2>

        <div 
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="aspect-video bg-muted">
            <video
              controls
              className="w-full h-full object-cover"
              poster={propertyConfig.heroImage}
            >
              <source src={propertyConfig.tourVideo} type="video/mp4" />
              Seu navegador não suporta vídeos.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
