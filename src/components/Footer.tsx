import { restaurantData } from '../data/restaurant';
import { translations } from '../data/translations';
import { Phone, MapPin, Clock } from 'lucide-react';
import { InstagramIcon } from './icons/InstagramIcon';
import { useLanguage } from '../context/LanguageContext';

export const Footer = () => {
  const { language } = useLanguage();

  const currentYear = new Date().getFullYear();

  const t = translations[language];

  return (
    <footer
      className="py-8 bg-[#0A0A0A] border-t border-[#F5F0EB]/5"
      aria-label={t.accessibility.footer}
    >
      <div className="container-custom px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">

          {/* Brand */}
          <div>
            <p className="font-serif text-lg text-[#F5F0EB]">
              {restaurantData.name}
            </p>

            <p className="text-xs tracking-[0.2em] uppercase text-[#F5F0EB]/30">
              {restaurantData.tagline[language]}
            </p>
          </div>

          {/* Contact links */}
          <div className="flex items-center gap-6 text-sm text-[#F5F0EB]/40">

            {/* Phone */}
            <a
              href={`tel:${restaurantData.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-1.5 hover:text-[#C9A96E] transition-colors"
              aria-label={`${t.footer.call}: ${restaurantData.phone}`}
            >
              <Phone className="w-3.5 h-3.5" />

              <span className="hidden sm:inline">
                {restaurantData.phone}
              </span>
            </a>

            {/* Instagram */}
            <a
              href={restaurantData.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C9A96E] transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>

            {/* Google Maps */}
            <a
              href={restaurantData.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C9A96E] transition-colors"
              aria-label={t.info.address}
            >
              <MapPin className="w-4 h-4" />
            </a>
          </div>

          {/* Hours */}
          <div className="text-xs text-[#F5F0EB]/30">
            <Clock className="w-3 h-3 inline mr-1.5" />

            {restaurantData.openingHours[language]}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-6 pt-6 border-t border-[#F5F0EB]/5 text-center">
          <p className="text-xs text-[#F5F0EB]/20 tracking-wider">
            © {currentYear} {restaurantData.name}. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};