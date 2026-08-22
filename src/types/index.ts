export type Language = 'kz' | 'ru' | 'en';

export interface LocalizedText {
  kz: string;
  ru: string;
  en: string;
}

export interface Restaurant {
  id: string;
  name: string;

  tagline: LocalizedText;
  description: LocalizedText;

  heroImage: string;

  openingHours: LocalizedText;
  address: LocalizedText;

  phone: string;
  instagram: string;
  googleMaps: string;
  qrCode: string;
}

export interface FoodItem {
  id: string;

  name: LocalizedText;
  description: LocalizedText;

  price: number;
  currency: '₸';

  image: string;

  category: string;

  ingredients: {
    kz: string[];
    ru: string[];
    en: string[];
  };

  isSignature?: boolean;
  isVegetarian?: boolean;
  isGlutenFree?: boolean;
}

export interface Category {
  id: string;

  name: LocalizedText;

  description?: LocalizedText;
}

export interface MenuSection {
  category: Category;
  items: FoodItem[];
}