import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-foreground text-background/60 border-t border-background/10">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-sm">
            © {currentYear} {t.footer.rights}
          </span>
          <span className="text-sm">
            Desenvolvido com excelência
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
