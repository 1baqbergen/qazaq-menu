import { motion } from 'framer-motion';
import type { FoodItem } from '../types';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLanguage } from '../context/LanguageContext';

interface FoodCardProps {
  item: FoodItem;
  onClick: (item: FoodItem) => void;
  index: number;
}

export const FoodCard = ({ item, onClick, index }: FoodCardProps) => {
  const { ref, isInView } = useScrollReveal(0.1);
  const { language } = useLanguage();

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.3), ease: 'easeOut' }}
      onClick={() => onClick(item)}
      className="group cursor-pointer touch-manipulation"
      role="button"
      tabIndex={0}
      aria-label={`${item.name[language]} — ${language === 'kz'
  ? 'Толығырақ көру'
  : language === 'ru'
    ? 'Подробнее'
    : 'View details'
}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick(item);
        }
      }}
    >
      <div className="overflow-hidden bg-[#1A1A1A]">
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={item.image}
            alt={item.name[language]}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {item.isSignature && (
            <span className="absolute top-3 left-3 px-3 py-1 text-[10px] tracking-[0.15em] uppercase bg-[#C9A96E] text-[#0A0A0A] font-medium">
              Signature
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-serif text-base sm:text-lg font-light text-[#F5F0EB] leading-tight">
              {item.name[language]}
            </h3>
            <span className="font-serif text-[#C9A96E] text-base sm:text-lg font-light whitespace-nowrap">
              {item.currency}{item.price}
            </span>
          </div>
          <p className="mt-1.5 text-sm text-[#F5F0EB]/50 line-clamp-2 leading-relaxed">
            {item.description[language]}
          </p>
        </div>
      </div>
    </motion.article>
  );
};