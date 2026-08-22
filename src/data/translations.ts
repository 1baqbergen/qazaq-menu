import type { Language } from '../types';

export const translations: Record<
  Language,
  {
    hero: {
      label: string;
      button: string;
      ariaLabel: string;
    };

    intro: {
      welcome: string;
      cuisine: string;
      atmosphere: string;
      service: string;
    };

    info: {
      title: string;
      openingHours: string;
      address: string;
      localTime: string;
      openMaps: string;
      callUs: string;
      followInstagram: string;
    };

    modal: {
      ingredients: string;
      vegetarian: string;
      glutenFree: string;
    };

    qr: {
      label: string;
      title: string;
      description: string;
      digitalMenu: string;
      alt: string;
    };

    footer: {
      call: string;
      rights: string;
    };

    accessibility: {
      hero: string;
      restaurantInfo: string;
      qrSection: string;
      footer: string;
      menu: string;
      close: string;
    };
  }
> = {
  // =========================
  // 🇰🇿 ҚАЗАҚША
  // =========================
  kz: {
    hero: {
      label: 'Заманауи асхана',
      button: 'Мәзірді көру',
      ariaLabel: 'Мәзірді көру',
    },

    intro: {
      welcome: 'Қош келдіңіз,',
      cuisine: 'Асхана: Заманауи',
      atmosphere: 'Атмосфера: Ерекше',
      service: 'Қызмет көрсету: Мәзір бойынша',
    },

    info: {
      title: 'Бізге келіңіз',
      openingHours: 'Жұмыс уақыты',
      address: 'Мекенжай',
      localTime: 'Жергілікті уақыт:',
      openMaps: 'Картадан көру →',
      callUs: 'Бізге қоңырау шалу',
      followInstagram: 'Instagram-ға өту',
    },

    modal: {
      ingredients: 'Құрамы',
      vegetarian: 'Вегетариандық',
      glutenFree: 'Глютенсіз',
    },

    qr: {
      label: 'Сканерлеңіз және танысыңыз',
      title: 'QR мәзір',
      description:
        'Үстеліңіздегі QR кодты сканерлеп, цифрлық мәзірді бірден ашыңыз.',
      digitalMenu: 'Цифрлық мәзір',
      alt: 'Мәзірдің QR коды',
    },

    footer: {
      call: 'Қоңырау шалу',
      rights: 'Барлық құқықтар қорғалған.',
    },

    accessibility: {
      hero: 'Басты бөлім',
      restaurantInfo: 'Мейрамхана туралы ақпарат',
      qrSection: 'QR мәзір бөлімі',
      footer: 'Төменгі бөлім',
      menu: 'Мәзір',
      close: 'Жабу',
    },
  },

  // =========================
  // 🇷🇺 РУССКИЙ
  // =========================
  ru: {
    hero: {
      label: 'Современная кухня',
      button: 'Посмотреть меню',
      ariaLabel: 'Посмотреть меню',
    },

    intro: {
      welcome: 'Добро пожаловать в',
      cuisine: 'Кухня: Современная',
      atmosphere: 'Атмосфера: Изысканная',
      service: 'Обслуживание: À la carte',
    },

    info: {
      title: 'Посетите нас',
      openingHours: 'Часы работы',
      address: 'Адрес',
      localTime: 'Местное время:',
      openMaps: 'Открыть на карте →',
      callUs: 'Позвонить нам',
      followInstagram: 'Мы в Instagram',
    },

    modal: {
      ingredients: 'Состав',
      vegetarian: 'Вегетарианское',
      glutenFree: 'Без глютена',
    },

    qr: {
      label: 'Сканируйте и открывайте',
      title: 'QR-меню',
      description:
        'Отсканируйте QR-код на вашем столе, чтобы мгновенно открыть цифровое меню.',
      digitalMenu: 'Цифровое меню',
      alt: 'QR-код меню',
    },

    footer: {
      call: 'Позвонить',
      rights: 'Все права защищены.',
    },

    accessibility: {
      hero: 'Главный раздел',
      restaurantInfo: 'Информация о ресторане',
      qrSection: 'Раздел QR-меню',
      footer: 'Нижний раздел',
      menu: 'Меню',
      close: 'Закрыть',
    },
  },

  // =========================
  // 🇬🇧 ENGLISH
  // =========================
  en: {
    hero: {
      label: 'Contemporary Dining',
      button: 'View Menu',
      ariaLabel: 'View menu',
    },

    intro: {
      welcome: 'Welcome to',
      cuisine: 'Cuisine: Contemporary',
      atmosphere: 'Atmosphere: Refined',
      service: 'Service: À la carte',
    },

    info: {
      title: 'Visit Us',
      openingHours: 'Opening Hours',
      address: 'Address',
      localTime: 'Local time:',
      openMaps: 'Open in Maps →',
      callUs: 'Call Us',
      followInstagram: 'Follow us on Instagram',
    },

    modal: {
      ingredients: 'Ingredients',
      vegetarian: 'Vegetarian',
      glutenFree: 'Gluten Free',
    },

    qr: {
      label: 'Scan & Discover',
      title: 'QR Menu',
      description:
        'Scan the QR code on your table to access the digital menu instantly.',
      digitalMenu: 'Digital Menu',
      alt: 'QR Code for the menu',
    },

    footer: {
      call: 'Call',
      rights: 'All rights reserved.',
    },

    accessibility: {
      hero: 'Hero section',
      restaurantInfo: 'Restaurant information',
      qrSection: 'QR Code section',
      footer: 'Footer',
      menu: 'Menu',
      close: 'Close',
    },
  },
};