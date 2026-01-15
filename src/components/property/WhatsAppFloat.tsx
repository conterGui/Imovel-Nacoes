import React from "react";
import { propertyConfig } from "@/config/property";
import { MessageCircle } from "lucide-react";

const WhatsAppFloat: React.FC = () => {
  const handleClick = () => {
    const message = encodeURIComponent("Olá! Tenho interesse no imóvel.");
    window.open(
      `https://wa.me/${propertyConfig.whatsapp}?text=${message}`,
      "_blank"
    );
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:brightness-110 hover:scale-110 transition-all duration-300 animate-pulse-slow"
      aria-label="WhatsApp"
    >
      <MessageCircle className="w-6 h-6 translate-x-[1px] translate-y-[-0.5px]" />
    </button>
  );
};

export default WhatsAppFloat;
