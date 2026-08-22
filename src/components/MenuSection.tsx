import type { FoodItem } from '../types';
import { FoodCard } from './FoodCard';

interface MenuSectionProps {
  categoryName: string;
  items: FoodItem[];
  onItemClick: (item: FoodItem) => void;
}

export const MenuSection = ({ 
  categoryName, 
  items, 
  onItemClick 
}: MenuSectionProps) => {
  if (items.length === 0) return null;

  return (
    <section className="py-8 first:pt-0" aria-label={`${categoryName} menu section`}>
      <div className="mb-6">
        <h2 className="font-serif text-xl sm:text-2xl font-light text-[#F5F0EB] tracking-wide">
          {categoryName}
        </h2>
        <div className="separator-gold mt-2" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
        {items.map((item, index) => (
          <FoodCard
            key={item.id}
            item={item}
            onClick={onItemClick}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};