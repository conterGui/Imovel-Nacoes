import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { propertyConfig } from "@/config/property";
import {
  Home,
  BedDouble,
  Bath,
  Car,
  Euro,
  Calendar,
  SquareDashed,
  Bolt,
  Zap,
  HousePlus,
  BrickWall,
} from "lucide-react";

const DetailsSection: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const details = [
    {
      icon: Euro,
      label: t.details.price,
      value: propertyConfig.price,
    },
    {
      icon: Home,
      label: t.details.area,
      value: `${propertyConfig.area} ${t.details.sqm}`,
    },
    {
      icon: BedDouble,
      label: t.details.bedrooms,
      value: propertyConfig.bedrooms.toString(),
    },
    {
      icon: Bath,
      label: t.details.bathrooms,
      value: propertyConfig.bathrooms.toString(),
    },
    {
      icon: Car,
      label: t.details.parking,
      value: propertyConfig.parking.toString(),
    },
    {
      icon: Calendar,
      label: t.details.yearsBuilt,
      value: propertyConfig.yearBuilt.toString(),
    },
    {
      icon: HousePlus,
      label: t.details.totalArea,
      value: `${propertyConfig.totalArea} ${t.details.sqm}`,
    },
    {
      icon: BrickWall,
      label: t.details.condition,
      value: propertyConfig.condition,
    },
    {
      icon: Zap,
      label: t.details.energyRating,
      value: propertyConfig.energyRating,
    },
  ];

  return (
    <section
      id="details"
      ref={ref as React.RefObject<HTMLElement>}
      className="section-padding bg-charcoal text-warm-white"
    >
      <div className="container-wide">
        {/* Gold accent line */}
        <div className="w-12 h-0.5 bg-primary mb-8" />

        <h2
          className={`heading-primary text-warm-white mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {t.details.title}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {details.map((detail, index) => (
            <div
              key={detail.label}
              className={`flex flex-col items-start transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <detail.icon className="w-6 h-6 text-primary mb-4" />
              <span className="text-sm text-warm-white/60 mb-2 uppercase tracking-wider">
                {detail.label}
              </span>
              <span className="heading-secondary text-warm-white">
                {detail.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;
