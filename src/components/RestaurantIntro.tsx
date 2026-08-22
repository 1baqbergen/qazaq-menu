import { motion } from 'framer-motion';
import { restaurantData } from '../data/restaurant';
import { translations } from '../data/translations';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLanguage } from '../context/LanguageContext';

export const RestaurantIntro = () => {
  const { language } = useLanguage();
  const { ref, isInView } = useScrollReveal(0.2);

  const t = translations[language];

  return (
    <section
      ref={ref}
      className="py-16 sm:py-20 md:py-24 bg-[#0A0A0A]"
      aria-label={t.accessibility.restaurantInfo}
    >
      <div className="container-custom text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={
            isInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-3xl mx-auto"
        >
          {/* Label */}
          <p className="subtitle-editorial mb-6">
            {t.intro.welcome} {restaurantData.name}
          </p>

          {/* Separator */}
          <div className="separator-gold mb-6" />

          {/* Description */}
          <p className="font-serif text-lg sm:text-xl md:text-2xl font-light leading-relaxed text-[#F5F0EB]/90">
            {restaurantData.description[language]}
          </p>

          {/* Quick info */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 text-sm tracking-wider text-[#F5F0EB]/60">
            <span>{t.intro.cuisine}</span>

            <span className="hidden sm:inline text-[#C9A96E]">
              |
            </span>

            <span>{t.intro.atmosphere}</span>

            <span className="hidden sm:inline text-[#C9A96E]">
              |
            </span>

            <span>{t.intro.service}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};