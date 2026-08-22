import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { restaurantData } from '../data/restaurant';
import { translations } from '../data/translations';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';

interface HeroProps {
  onViewMenu: () => void;
}

export const Hero = ({ onViewMenu }: HeroProps) => {
  const { language } = useLanguage();

  const t = translations[language];

  return (
    <section
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden"
      aria-label={t.accessibility.hero}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${restaurantData.heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[#0A0A0A]/60" />
      </div>

      {/* Language Switcher */}
      <div className="absolute top-5 right-5 sm:top-7 sm:right-7 z-30">
        <div className="rounded-full bg-[#0A0A0A]/70 backdrop-blur-md border border-[#F5F0EB]/10 px-1 py-1">
          <LanguageSwitcher />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-2xl mx-auto"
        >
          {/* Small label */}
          <p className="font-serif text-[#C9A96E] text-sm tracking-[0.4em] uppercase mb-6">
            {t.hero.label}
          </p>

          {/* Restaurant name */}
          <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl font-light tracking-wider text-white mb-4">
            {restaurantData.name}
          </h1>

          {/* Tagline */}
          <p className="font-serif text-xl md:text-2xl font-light text-[#E8D5A3] tracking-wide mb-8">
            {restaurantData.tagline[language]}
          </p>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={onViewMenu}
            className="btn-primary mx-auto"
            aria-label={t.hero.ariaLabel}
          >
            {t.hero.button}
          </motion.button>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <ChevronDown className="w-6 h-6 text-[#C9A96E] opacity-50 animate-bounce" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};