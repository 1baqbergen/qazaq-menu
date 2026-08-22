import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import type { FoodItem } from '../types';
import { useLanguage } from '../context/LanguageContext';
interface FoodModalProps {
  item: FoodItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const FoodModal = ({ item, isOpen, onClose }: FoodModalProps) => {
    const { language } = useLanguage();
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  if (!item) return null;

  const dietaryLabels = [];
  if (item.isVegetarian) dietaryLabels.push('Vegetarian');
  if (item.isGlutenFree) dietaryLabels.push('Gluten Free');

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal */}
          <motion.div
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed inset-x-0 bottom-0 z-50 max-h-[90dvh] md:max-h-[80dvh] md:inset-y-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-2xl md:w-full bg-[#1A1A1A] rounded-t-3xl md:rounded-3xl overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-label={
  language === 'kz'
    ? `${item.name[language]} — тағам туралы толық ақпарат`
    : language === 'ru'
      ? `${item.name[language]} — подробная информация`
      : `${item.name[language]} — details`
}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-[#0A0A0A]/80 hover:bg-[#0A0A0A] rounded-full transition-colors touch-manipulation"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-[#F5F0EB]" />
            </button>

            {/* Content */}
            <div className="overflow-y-auto max-h-[90dvh] md:max-h-[80dvh]">
              {/* Image */}
              <div className="relative aspect-[4/3] bg-[#0A0A0A]">
                <img
                  src={item.image}
                  alt={item.name[language]}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Details */}
              <div className="p-6 md:p-8">
                {/* Name & Price */}
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#F5F0EB]">
                    {item.name[language]}
                  </h2>
                  <span className="font-serif text-2xl sm:text-3xl font-light text-[#C9A96E]">
                    {item.currency}{item.price}
                  </span>
                </div>

                {/* Dietary labels */}
                {dietaryLabels.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {dietaryLabels.map((label) => (
                      <span
                        key={label}
                        className="px-3 py-1 text-[10px] tracking-[0.1em] uppercase border border-[#C9A96E]/30 text-[#C9A96E]"
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                )}

                {/* Description */}
                <p className="text-[#F5F0EB]/70 leading-relaxed mb-6">
                  {item.description[language]}
                </p>

                {/* Ingredients */}
                <div>
                  <h3 className="text-xs tracking-[0.25em] uppercase text-[#C9A96E] mb-3">
                    Ingredients
                  </h3>
                  <ul className="flex flex-wrap gap-2">
                    {item.ingredients[language].map((ingredient) => (
                      <li
                        key={ingredient}
                        className="px-3 py-1.5 text-sm bg-[#0A0A0A] text-[#F5F0EB]/60"
                      >
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};