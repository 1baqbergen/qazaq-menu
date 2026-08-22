import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { Category } from '../types';
import { useLanguage } from '../context/LanguageContext';
interface CategoryNavProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export const CategoryNav = ({ 
  categories, 
  activeCategory, 
  onCategoryChange 
}: CategoryNavProps) => {
    const { language } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const activeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Scroll active category into view
    if (activeButtonRef.current && containerRef.current) {
      const container = containerRef.current;
      const button = activeButtonRef.current;
      const containerWidth = container.offsetWidth;
      const buttonLeft = button.offsetLeft;
      const buttonWidth = button.offsetWidth;
      
      container.scrollTo({
        left: buttonLeft - containerWidth / 2 + buttonWidth / 2,
        behavior: 'smooth',
      });
    }
  }, [activeCategory]);

  return (
    <nav 
      className="sticky top-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-sm border-b border-[#F5F0EB]/5"
      aria-label="Menu categories"
    >
      <div 
        ref={containerRef}
        className="flex gap-6 px-4 py-3 overflow-x-auto scrollbar-hide"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {categories.map((category) => {
          const isActive = activeCategory === category.id;
          return (
            <button
              key={category.id}
              ref={isActive ? activeButtonRef : null}
              onClick={() => onCategoryChange(category.id)}
              className={`relative flex-shrink-0 px-1 py-2 text-xs tracking-[0.25em] uppercase transition-colors duration-300 touch-manipulation min-h-[44px] flex items-center ${
                isActive ? 'text-[#C9A96E]' : 'text-[#F5F0EB]/60 hover:text-[#F5F0EB]'
              }`}
              aria-current={isActive ? 'true' : undefined}
            >
              {category.name[language]}
              {isActive && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C9A96E]"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};