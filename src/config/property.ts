// ============================================
// CONFIGURAÇÃO DO IMÓVEL
// Edite este arquivo para personalizar o imóvel
// ============================================

// Imagens importadas como ES6 modules
import heroImage from '@/assets/hero-property.jpg';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';
import gallery5 from '@/assets/gallery-5.jpg';
import gallery6 from '@/assets/gallery-6.jpg';
import beforeLiving from '@/assets/before-living.jpg';
import afterLiving from '@/assets/after-living.jpg';

export const propertyConfig = {
  // Informações básicas
  price: "R$ 2.850.000",
  area: 450,
  bedrooms: 4,
  bathrooms: 5,
  parking: 3,

  // Contato
  whatsapp: "5511999999999", // Número com código do país, sem símbolos
  phone: "+55 11 99999-9999",
  email: "contato@exemplo.com",

  // Localização
  address: "Rua das Palmeiras, 1234 - Jardins, São Paulo",
  mapCenter: { lat: -23.5505, lng: -46.6333 },
  
  // Pontos de interesse (para o mapa)
  pointsOfInterest: [
    { name: "Metrô", distance: "5 min" },
    { name: "Parque", distance: "200m" },
    { name: "Shopping", distance: "10 min" },
  ],

  // Seções ativas (true = visível, false = oculto)
  sections: {
    hero: true,
    about: true,
    details: true,
    gallery: true,
    beforeAfter: true,
    video: false, // Ative quando tiver um vídeo de tour
    location: true,
    contact: true,
  },

  // Galeria de imagens
  gallery: [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
  ],

  // Before/After comparisons
  // Cada item representa um ambiente diferente
  beforeAfter: [
    {
      label: "Sala de Estar",
      before: beforeLiving,
      after: afterLiving,
    },
  ],

  // Vídeos
  heroVideo: "", // URL do vídeo do hero (deixe vazio para usar imagem)
  heroImage: heroImage, // Imagem de fallback/mobile
  tourVideo: "", // URL do vídeo do tour virtual
};
