import { useState } from 'react';
import { categories, getMenuByCategory } from '../data/menu';
import type { FoodItem } from '../types';
import { CategoryNav } from './CategoryNav';
import { MenuSection } from './MenuSection';
import { FoodModal } from './FoodModal';
import { useLanguage } from '../context/LanguageContext';

export const MenuView = () => {
    const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const [selectedItem, setSelectedItem] = useState<FoodItem | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const activeCategoryData = categories.find(
    (category) => category.id === activeCategory
  );

  const activeItems = getMenuByCategory(activeCategory);

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    const menuSection = document.querySelector('#menu-section');

    if (menuSection) {
      const navHeight = 64;
      const offset =
        menuSection.getBoundingClientRect().top +
        window.scrollY -
        navHeight;

      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      });
    }
  };

  const handleItemClick = (item: FoodItem) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);

    setTimeout(() => {
      setSelectedItem(null);
    }, 300);
  };

  return (
    <section
      id="menu"
      className="py-12 bg-[#0A0A0A]"
      aria-label="Menu"
    >
      {/* Category navigation */}
      <CategoryNav
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />

      {/* Active category */}
      <div className="container-custom px-4 sm:px-6 mt-8">
        {activeCategoryData && (
          <MenuSection
            categoryName={activeCategoryData.name[language]}
            items={activeItems}
            onItemClick={handleItemClick}
          />
        )}
      </div>

      {/* Food modal */}
      <FoodModal
        item={selectedItem}
        isOpen={modalOpen}
        onClose={handleModalClose}
      />
    </section>
  );
};