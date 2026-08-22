import { motion } from 'framer-motion';
import { Phone, MapPin, Clock } from 'lucide-react';
import { InstagramIcon } from './icons/InstagramIcon';
import { restaurantData } from '../data/restaurant';
import { translations } from '../data/translations';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useCurrentTime } from '../hooks/useCurrentTime';
import { useLanguage } from '../context/LanguageContext';

export const RestaurantInfo = () => {
  const { language } = useLanguage();
  const { ref, isInView } = useScrollReveal(0.2);
  const currentTime = useCurrentTime();

  const t = translations[language];

  return (
    <section
      ref={ref}
      className="py-16 sm:py-20 md:py-24 bg-[#1A1A1A]"
      aria-label={t.accessibility.restaurantInfo}
    >
      <div className="container-custom px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={
            isInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-4xl mx-auto"
        >
          {/* Heading */}
          <div className="text-center mb-12">
            <p className="subtitle-editorial mb-3">
              {t.info.title}
            </p>

            <div className="separator-gold mx-auto" />
          </div>

          {/* Info grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">

            {/* Hours */}
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-3 mb-2">
                <Clock className="w-4 h-4 text-[#C9A96E]" />

                <h3 className="text-xs tracking-[0.25em] uppercase text-[#F5F0EB]/60">
                  {t.info.openingHours}
                </h3>
              </div>

              <p className="font-serif text-[#F5F0EB]">
                {restaurantData.openingHours[language]}
              </p>

              <p className="text-sm text-[#F5F0EB]/40 mt-1">
                {t.info.localTime} {currentTime}
              </p>
            </div>

            {/* Address */}
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-3 mb-2">
                <MapPin className="w-4 h-4 text-[#C9A96E]" />

                <h3 className="text-xs tracking-[0.25em] uppercase text-[#F5F0EB]/60">
                  {t.info.address}
                </h3>
              </div>

              <p className="font-serif text-[#F5F0EB]">
                {restaurantData.address[language]}
              </p>

              <a
                href={restaurantData.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#C9A96E] hover:text-[#E8D5A3] transition-colors inline-block mt-1"
              >
                {t.info.openMaps}
              </a>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">

            {/* Phone */}
            <a
              href={`tel:${restaurantData.phone.replace(/\s/g, '')}`}
              className="btn-primary w-full sm:w-auto"
              aria-label={`${t.info.callUs}: ${restaurantData.phone}`}
            >
              <Phone className="w-4 h-4 mr-2" />
              {t.info.callUs}
            </a>

            {/* Instagram */}
            <a
              href={restaurantData.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto"
              aria-label={t.info.followInstagram}
            >
              <InstagramIcon className="w-4 h-4 mr-2" />
              Instagram
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};