import { motion } from 'framer-motion';
import { QrCode } from 'lucide-react';
import { restaurantData } from '../data/restaurant';
import { translations } from '../data/translations';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLanguage } from '../context/LanguageContext';

export const QRSection = () => {
  const { language } = useLanguage();
  const { ref, isInView } = useScrollReveal(0.2);

  const t = translations[language];

  return (
    <section
      ref={ref}
      className="py-16 sm:py-20 md:py-24 bg-[#0A0A0A]"
      aria-label={t.accessibility.qrSection}
    >
      <div className="container-custom px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={
            isInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-2xl mx-auto"
        >
          {/* Icon */}
          <QrCode className="w-12 h-12 text-[#C9A96E] mx-auto mb-6" />

          {/* Label */}
          <p className="subtitle-editorial mb-3">
            {t.qr.label}
          </p>

          {/* Title */}
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#F5F0EB] mb-4">
            {t.qr.title}
          </h2>

          {/* Description */}
          <p className="text-[#F5F0EB]/50 mb-8 leading-relaxed max-w-md mx-auto">
            {t.qr.description}
          </p>

          {/* QR Code */}
          <div className="inline-block p-4 bg-white rounded-lg">
            <img
              src={restaurantData.qrCode}
              alt={`${t.qr.alt} — ${restaurantData.name}`}
              className="w-40 h-40 sm:w-48 sm:h-48"
              loading="lazy"
            />
          </div>

          {/* Bottom label */}
          <p className="mt-4 text-xs tracking-[0.2em] uppercase text-[#F5F0EB]/30">
            {restaurantData.name} • {t.qr.digitalMenu}
          </p>
        </motion.div>
      </div>
    </section>
  );
};