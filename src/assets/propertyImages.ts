// ============================================
// IMAGENS DO IMÓVEL (TypeScript)
// ============================================

// HERO
import heroImage from "@/assets/hero/DSC02663.jpg";

// BEFORE / AFTER
import beforeLiving from "@/assets/before/before-living.jpg";
import afterLiving from "@/assets/after/after-living.jpg";
import afterOffice from "@/assets/after/after-office.jpg";
import beforeOffice from "@/assets/before/before-office.jpg";
import beforeDining from "@/assets/before/before-dining.jpg";
import afterDining from "@/assets/after/after-dining.jpg";

// DRONE
import g1 from "@/assets/gallery/DSC02664.jpg";
import g2 from "@/assets/gallery/DSC02662.jpg";
import g3 from "@/assets/gallery/DSC02661.jpg";
import g4 from "@/assets/gallery/DSC02660.jpg";
import g5 from "@/assets/gallery/DSC02659.jpg";
import g6 from "@/assets/gallery/DSC02658.jpg";
import g7 from "@/assets/gallery/DSC02513Blend.jpg";
import g8 from "@/assets/gallery/DSC02518Blend.jpg";
import g9 from "@/assets/gallery/DSC02523Blend.jpg";
import g10 from "@/assets/gallery/DSC02528Blend.jpg";
import g11 from "@/assets/gallery/DSC02533Blend.jpg";
import g12 from "@/assets/gallery/DSC02538Blend.jpg";
import g13 from "@/assets/gallery/DSC02543Blend.jpg";
import g14 from "@/assets/gallery/DSC02548Blend.jpg";
import g15 from "@/assets/gallery/DSC02553Blend.jpg";
import g16 from "@/assets/gallery/DSC02558Blend.jpg";
import g17 from "@/assets/gallery/DSC02563Blend.jpg";
import g18 from "@/assets/gallery/DSC02568Blend.jpg";
import g19 from "@/assets/gallery/DSC02573Blend.jpg";
import g20 from "@/assets/gallery/DSC02578Blend.jpg";
import g21 from "@/assets/gallery/DSC02583Blend.jpg";
import g22 from "@/assets/gallery/DSC02588Blend.jpg";
import g23 from "@/assets/gallery/DSC02593Blend.jpg";

import g24 from "@/assets/gallery/DSC02598Blend.jpg";
import g25 from "@/assets/gallery/DSC02603Blend.jpg";
import g26 from "@/assets/gallery/DSC02608Blend.jpg";
import g27 from "@/assets/gallery/DSC02613Blend.jpg";
import g28 from "@/assets/gallery/DSC02618Blend.jpg";
import g29 from "@/assets/gallery/DSC02623Blend.jpg";
import g30 from "@/assets/gallery/DSC02628Blend.jpg";
import g31 from "@/assets/gallery/DSC02633Blend.jpg";
import g32 from "@/assets/gallery/DSC02638Blend.jpg";
import g33 from "@/assets/gallery/DSC02643Blend.jpg";
import g34 from "@/assets/gallery/DSC02648Blend.jpg";
import g35 from "@/assets/gallery/DSC02653Blend.jpg";



// =======================
// TIPOS
// =======================
export interface BeforeAfterItem {
  label: string;
  before: string;
  after: string;
}

export interface PropertyImages {
  hero: string;
  gallery: string[];
  beforeAfter: BeforeAfterItem[];
}

// =======================
// EXPORT FINAL
// =======================
export const propertyImages: PropertyImages = {
  hero: heroImage,

  gallery: [
    g1, g2, g3, g4, g5, g6, g7, g8,
    g9, g10, g11, g12, g13, g14, g15,
    g16, g17, g18, g19, g20, g21, g22, g23, g24, g25, g26, g27, g28,
    g29, g30, g31, g32, g33, g34, g35,
  ],

  beforeAfter: [
    {
      label: "livingRoom",
      before: beforeLiving,
      after: afterLiving,
    },
    {
      label: "office",
      before: beforeOffice,
      after: afterOffice,
    },
    
    {
      label: "dining",
      before: beforeDining,
      after: afterDining,
    },
  ],
};

export const galleryImages = propertyImages.gallery;
export const beforeAfterImages = propertyImages.beforeAfter;
