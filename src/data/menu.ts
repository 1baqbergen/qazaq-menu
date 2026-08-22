import type { FoodItem, Category } from '../types';
import beshbarmak from '../assets/images/beshbarmak.webp';
import assorti from '../assets/images/assorti.jpg';
import ovosh_assorti from '../assets/images/ovosh-assorti.jpg'
import myas from '../assets/images/myas.jpg';
import baursak from '../assets/images/baursak.webp';
import kuyrdak from '../assets/images/kuyrdak.jpeg';
import manty from '../assets/images/manty.jpg';
import lagman from '../assets/images/lagman.webp';
import plov from '../assets/images/plov.jpg';
import shashlik from '../assets/images/shashlik.webp';
import shashlik_gov from '../assets/images/shashlik-gov.jpg';
import pizza_mar from '../assets/images/pizza-mar.jpg';
import pizza_pep from '../assets/images/pizza-pep.webp';
import pizza_grib from '../assets/images/pizza-grib.jpeg';
import cheesecake from '../assets/images/cheezcake.jpeg';
import choco from '../assets/images/choco.jpg';
import black_tea from '../assets/images/black-tea.jpg';
import milk_tea from '../assets/images/milk-tea.jpg';
import lemonade from '../assets/images/lemonade.jpeg';
import mors from '../assets/images/mors.webp';

export const categories: Category[] = [
  {
    id: 'signature',
    name: {
      kz: 'Фирмалық',
      ru: 'Фирменные',
      en: 'Signature',
    },
    description: {
      kz: 'QAZAQ мейрамханасының ерекше тағамдары',
      ru: 'Особые блюда ресторана QAZAQ',
      en: 'QAZAQ restaurant specialties',
    },
  },

  {
    id: 'starters',
    name: {
      kz: 'Тіскебасарлар',
      ru: 'Закуски',
      en: 'Starters',
    },
  },

  {
    id: 'main',
    name: {
      kz: 'Негізгі тағамдар',
      ru: 'Основные блюда',
      en: 'Main Course',
    },
  },

  {
    id: 'pizza',
    name: {
      kz: 'Пицца',
      ru: 'Пицца',
      en: 'Pizza',
    },
  },

  {
    id: 'desserts',
    name: {
      kz: 'Десерттер',
      ru: 'Десерты',
      en: 'Desserts',
    },
  },

  {
    id: 'drinks',
    name: {
      kz: 'Сусындар',
      ru: 'Напитки',
      en: 'Drinks',
    },
  },
];

export const menuItems: FoodItem[] = [
  // =====================================================
  // ФИРМАЛЫҚ
  // =====================================================

  {
    id: '1',
    name: {
      kz: 'QAZAQ фирмалық бешбармағы',
      ru: 'Фирменный бешбармак QAZAQ',
      en: 'QAZAQ Signature Beshbarmak',
    },
    description: {
      kz: 'Жұқа жайма, жылқы еті, қазы, пияз және хош иісті сорпамен ұсынылатын қазақтың дәстүрлі тағамы.',
      ru: 'Традиционный бешбармак с домашней лапшой, кониной, казы, луком и насыщенным бульоном.',
      en: 'Traditional Kazakh beshbarmak with homemade noodles, horse meat, kazy, onions and rich broth.',
    },
    price: 3990,
    currency: '₸',
    image:
      beshbarmak,
    category: 'signature',
    ingredients: {
      kz: ['Жылқы еті', 'Қазы', 'Жайма', 'Пияз', 'Сорпа', 'Көк шөп'],
      ru: ['Конина', 'Казы', 'Домашняя лапша', 'Лук', 'Бульон', 'Зелень'],
      en: ['Horse meat', 'Kazy', 'Homemade noodles', 'Onion', 'Broth', 'Herbs'],
    },
    isSignature: true,
  },

  {
    id: '2',
    name: {
      kz: 'QAZAQ етті таба',
      ru: 'Мясная сковорода QAZAQ',
      en: 'QAZAQ Meat Skillet',
    },
    description: {
      kz: 'Сиыр еті, картоп, болгар бұрышы, пияз және арнайы дәмдеуіштермен табада дайындалады.',
      ru: 'Сочная говядина, картофель, болгарский перец и лук, приготовленные на горячей сковороде.',
      en: 'Tender beef, potatoes, bell pepper and onions cooked together on a hot skillet.',
    },
    price: 4490,
    currency: '₸',
    image:
      myas,
    category: 'signature',
    ingredients: {
      kz: ['Сиыр еті', 'Картоп', 'Болгар бұрышы', 'Пияз', 'Сарымсақ', 'Дәмдеуіштер'],
      ru: ['Говядина', 'Картофель', 'Болгарский перец', 'Лук', 'Чеснок', 'Специи'],
      en: ['Beef', 'Potatoes', 'Bell pepper', 'Onion', 'Garlic', 'Spices'],
    },
    isSignature: true,
  },

  // =====================================================
  // ТІСКЕБАСАРЛАР
  // =====================================================

  {
    id: '3',
    name: {
      kz: 'Қазы және ет ассортиі',
      ru: 'Мясное ассорти с казы',
      en: 'Kazy & Meat Assortment',
    },
    description: {
      kz: 'Қазы, жылқы еті, сиыр еті және жаңа піскен көкөністерден құралған дәстүрлі ассорти.',
      ru: 'Ассорти из казы, конины, говядины и свежих овощей.',
      en: 'An assortment of kazy, horse meat, beef and fresh vegetables.',
    },
    price: 4590,
    currency: '₸',
    image:
      assorti,
    category: 'starters',
    ingredients: {
      kz: ['Қазы', 'Жылқы еті', 'Сиыр еті', 'Қияр', 'Қызанақ', 'Көк шөп'],
      ru: ['Казы', 'Конина', 'Говядина', 'Огурец', 'Помидор', 'Зелень'],
      en: ['Kazy', 'Horse meat', 'Beef', 'Cucumber', 'Tomato', 'Herbs'],
    },
  },

  {
    id: '4',
    name: {
      kz: 'Көкөніс ассортиі',
      ru: 'Овощное ассорти',
      en: 'Fresh Vegetable Assortment',
    },
    description: {
      kz: 'Қызанақ, қияр, болгар бұрышы, көк шөп және пияздан тұратын жеңіл тіскебасар.',
      ru: 'Свежие помидоры, огурцы, болгарский перец, зелень и лук.',
      en: 'Fresh tomatoes, cucumbers, bell pepper, herbs and onions.',
    },
    price: 1990,
    currency: '₸',
    image:
      ovosh_assorti,
    category: 'starters',
    ingredients: {
      kz: ['Қызанақ', 'Қияр', 'Болгар бұрышы', 'Пияз', 'Көк шөп'],
      ru: ['Помидоры', 'Огурцы', 'Болгарский перец', 'Лук', 'Зелень'],
      en: ['Tomatoes', 'Cucumbers', 'Bell pepper', 'Onion', 'Herbs'],
    },
    isVegetarian: true,
    isGlutenFree: true,
  },

  {
    id: '5',
    name: {
      kz: 'Бауырсақ және қаймақ',
      ru: 'Баурсаки со сметаной',
      en: 'Baursaks with Sour Cream',
    },
    description: {
      kz: 'Жаңа піскен, жұмсақ бауырсақтар қаймақпен бірге ұсынылады.',
      ru: 'Тёплые домашние баурсаки со сметаной.',
      en: 'Warm homemade baursaks served with sour cream.',
    },
    price: 990,
    currency: '₸',
    image:
      baursak,
    category: 'starters',
    ingredients: {
      kz: ['Ұн', 'Сүт', 'Жұмыртқа', 'Май', 'Қаймақ'],
      ru: ['Мука', 'Молоко', 'Яйцо', 'Масло', 'Сметана'],
      en: ['Flour', 'Milk', 'Egg', 'Oil', 'Sour cream'],
    },
    isVegetarian: true,
  },

  // =====================================================
  // НЕГІЗГІ ТАҒАМДАР
  // =====================================================

  {
    id: '6',
    name: {
      kz: 'Қуырдақ',
      ru: 'Куырдак',
      en: 'Kuyrdak',
    },
    description: {
      kz: 'Нәзік сиыр еті, картоп, пияз және дәмдеуіштермен дайындалған қазақтың дәстүрлі қуырдағы.',
      ru: 'Традиционный куырдак из говядины с картофелем, луком и специями.',
      en: 'Traditional Kazakh kuyrdak made with beef, potatoes, onions and spices.',
    },
    price: 3290,
    currency: '₸',
    image:
      kuyrdak,
    category: 'main',
    ingredients: {
      kz: ['Сиыр еті', 'Картоп', 'Пияз', 'Сарымсақ', 'Дәмдеуіштер'],
      ru: ['Говядина', 'Картофель', 'Лук', 'Чеснок', 'Специи'],
      en: ['Beef', 'Potatoes', 'Onion', 'Garlic', 'Spices'],
    },
  },

  {
    id: '7',
    name: {
      kz: 'Манты',
      ru: 'Манты',
      en: 'Manti',
    },
    description: {
      kz: 'Жұқа қамырға оралған сиыр еті мен пияздан жасалған буға піскен манты.',
      ru: 'Манты на пару с рубленой говядиной и луком.',
      en: 'Steamed dumplings filled with chopped beef and onions.',
    },
    price: 2290,
    currency: '₸',
    image:
      manty,
    category: 'main',
    ingredients: {
      kz: ['Сиыр еті', 'Қамыр', 'Пияз', 'Қара бұрыш', 'Тұз'],
      ru: ['Говядина', 'Тесто', 'Лук', 'Чёрный перец', 'Соль'],
      en: ['Beef', 'Dough', 'Onion', 'Black pepper', 'Salt'],
    },
  },

  {
    id: '8',
    name: {
      kz: 'Гуйру лагман',
      ru: 'Гуйру лагман',
      en: 'Güiro Lagman',
    },
    description: {
      kz: 'Қолмен созылған кеспе, сиыр еті, болгар бұрышы, қырыққабат, пияз және көкөністер қосылған қою тұздық.',
      ru: 'Домашняя лапша с говядиной, овощами и ароматным соусом.',
      en: 'Hand-pulled noodles with beef, vegetables and a rich aromatic sauce.',
    },
    price: 2890,
    currency: '₸',
    image:
      lagman,
    category: 'main',
    ingredients: {
      kz: ['Сиыр еті', 'Қол кеспе', 'Болгар бұрышы', 'Қырыққабат', 'Пияз', 'Сәбіз'],
      ru: ['Говядина', 'Лапша', 'Болгарский перец', 'Капуста', 'Лук', 'Морковь'],
      en: ['Beef', 'Noodles', 'Bell pepper', 'Cabbage', 'Onion', 'Carrot'],
    },
  },

  {
    id: '9',
    name: {
      kz: 'Өзбек палауы',
      ru: 'Узбекский плов',
      en: 'Uzbek Plov',
    },
    description: {
      kz: 'Хош иісті күріш, сиыр еті, сәбіз, пияз және дәмдеуіштермен дайындалған палау.',
      ru: 'Ароматный плов с рисом, говядиной, морковью, луком и специями.',
      en: 'Aromatic rice with beef, carrots, onions and traditional spices.',
    },
    price: 2790,
    currency: '₸',
    image:
      plov,
    category: 'main',
    ingredients: {
      kz: ['Күріш', 'Сиыр еті', 'Сәбіз', 'Пияз', 'Сарымсақ', 'Зире'],
      ru: ['Рис', 'Говядина', 'Морковь', 'Лук', 'Чеснок', 'Зира'],
      en: ['Rice', 'Beef', 'Carrot', 'Onion', 'Garlic', 'Cumin'],
    },
  },

  {
    id: '10',
    name: {
      kz: 'Тауық етінен кәуап',
      ru: 'Шашлык из курицы',
      en: 'Chicken Shashlik',
    },
    description: {
      kz: 'Арнайы маринадта дайындалған тауық еті көмірде пісіріліп, пияз және көкөністермен беріледі.',
      ru: 'Куриное филе в маринаде, приготовленное на углях и поданное с луком и овощами.',
      en: 'Marinated chicken grilled over charcoal and served with onions and vegetables.',
    },
    price: 2690,
    currency: '₸',
    image:
      shashlik,
    category: 'main',
    ingredients: {
      kz: ['Тауық еті', 'Пияз', 'Дәмдеуіштер', 'Көк шөп'],
      ru: ['Курица', 'Лук', 'Специи', 'Зелень'],
      en: ['Chicken', 'Onion', 'Spices', 'Herbs'],
    },
  },

  {
    id: '11',
    name: {
      kz: 'Сиыр етінен кәуап',
      ru: 'Шашлык из говядины',
      en: 'Beef Shashlik',
    },
    description: {
      kz: 'Жұмсақ сиыр еті пияз және арнайы дәмдеуіштермен маринадталып, көмірде дайындалады.',
      ru: 'Нежная говядина, маринованная с луком и специями и приготовленная на углях.',
      en: 'Tender beef marinated with onions and spices, grilled over charcoal.',
    },
    price: 3290,
    currency: '₸',
    image:
      shashlik_gov,
    category: 'main',
    ingredients: {
      kz: ['Сиыр еті', 'Пияз', 'Зире', 'Қара бұрыш', 'Тұз'],
      ru: ['Говядина', 'Лук', 'Зира', 'Чёрный перец', 'Соль'],
      en: ['Beef', 'Onion', 'Cumin', 'Black pepper', 'Salt'],
    },
  },

  // =====================================================
  // ПИЦЦА
  // =====================================================

  {
    id: '12',
    name: {
      kz: 'Пицца Маргарита',
      ru: 'Пицца Маргарита',
      en: 'Margherita Pizza',
    },
    description: {
      kz: 'Қызанақ соусы, моцарелла және базилик қосылған классикалық пицца.',
      ru: 'Классическая пицца с томатным соусом, моцареллой и базиликом.',
      en: 'Classic pizza with tomato sauce, mozzarella and basil.',
    },
    price: 2990,
    currency: '₸',
    image:
      pizza_mar,
    category: 'pizza',
    ingredients: {
      kz: ['Қызанақ соусы', 'Моцарелла', 'Базилик', 'Зәйтүн майы'],
      ru: ['Томатный соус', 'Моцарелла', 'Базилик', 'Оливковое масло'],
      en: ['Tomato sauce', 'Mozzarella', 'Basil', 'Olive oil'],
    },
    isVegetarian: true,
  },

  {
    id: '13',
    name: {
      kz: 'Пицца Пепперони',
      ru: 'Пицца Пепперони',
      en: 'Pepperoni Pizza',
    },
    description: {
      kz: 'Қызанақ соусы, моцарелла және ащылау пепперони шұжығымен дайындалған пицца.',
      ru: 'Пицца с томатным соусом, моцареллой и пикантной пепперони.',
      en: 'Pizza with tomato sauce, mozzarella and spicy pepperoni.',
    },
    price: 3490,
    currency: '₸',
    image:
      pizza_pep,
    category: 'pizza',
    ingredients: {
      kz: ['Қызанақ соусы', 'Моцарелла', 'Пепперони', 'Итальяндық шөптер'],
      ru: ['Томатный соус', 'Моцарелла', 'Пепперони', 'Итальянские травы'],
      en: ['Tomato sauce', 'Mozzarella', 'Pepperoni', 'Italian herbs'],
    },
  },

  {
    id: '14',
    name: {
      kz: 'Тауық еті және саңырауқұлақ қосылған пицца',
      ru: 'Пицца с курицей и грибами',
      en: 'Chicken & Mushroom Pizza',
    },
    description: {
      kz: 'Моцарелла, тауық еті, саңырауқұлақ және арнайы ақ соус қосылған пицца.',
      ru: 'Пицца с курицей, шампиньонами, моцареллой и сливочным соусом.',
      en: 'Pizza with chicken, mushrooms, mozzarella and creamy sauce.',
    },
    price: 3690,
    currency: '₸',
    image:
      pizza_grib,
    category: 'pizza',
    ingredients: {
      kz: ['Тауық еті', 'Саңырауқұлақ', 'Моцарелла', 'Ақ соус', 'Шөптер'],
      ru: ['Курица', 'Шампиньоны', 'Моцарелла', 'Белый соус', 'Травы'],
      en: ['Chicken', 'Mushrooms', 'Mozzarella', 'White sauce', 'Herbs'],
    },
  },

  // =====================================================
  // ДЕСЕРТТЕР
  // =====================================================

  {
    id: '15',
    name: {
      kz: 'Чизкейк',
      ru: 'Чизкейк',
      en: 'Cheesecake',
    },
    description: {
      kz: 'Нәзік кремді ірімшік негізіндегі десерт, жидек соусымен ұсынылады.',
      ru: 'Нежный сливочный чизкейк с ягодным соусом.',
      en: 'Creamy cheesecake served with berry sauce.',
    },
    price: 1890,
    currency: '₸',
    image:
      cheesecake,
    category: 'desserts',
    ingredients: {
      kz: ['Кремді ірімшік', 'Печенье', 'Қант', 'Жұмыртқа', 'Жидек'],
      ru: ['Сливочный сыр', 'Печенье', 'Сахар', 'Яйцо', 'Ягоды'],
      en: ['Cream cheese', 'Biscuits', 'Sugar', 'Egg', 'Berries'],
    },
    isVegetarian: true,
  },

  {
    id: '16',
    name: {
      kz: 'Шоколадты фондан',
      ru: 'Шоколадный фондан',
      en: 'Chocolate Fondant',
    },
    description: {
      kz: 'Іші сұйық шоколадты жылы десерт, ванильді балмұздақпен ұсынылады.',
      ru: 'Тёплый шоколадный фондан с жидкой начинкой и ванильным мороженым.',
      en: 'Warm chocolate fondant with a molten center and vanilla ice cream.',
    },
    price: 1990,
    currency: '₸',
    image:
      choco,
    category: 'desserts',
    ingredients: {
      kz: ['Қара шоколад', 'Жұмыртқа', 'Ұн', 'Қант', 'Балмұздақ'],
      ru: ['Тёмный шоколад', 'Яйцо', 'Мука', 'Сахар', 'Мороженое'],
      en: ['Dark chocolate', 'Egg', 'Flour', 'Sugar', 'Ice cream'],
    },
    isVegetarian: true,
  },

  // =====================================================
  // СУСЫНДАР
  // =====================================================

  {
    id: '17',
    name: {
      kz: 'Қара шай',
      ru: 'Чёрный чай',
      en: 'Black Tea',
    },
    description: {
      kz: 'Хош иісті қара шай. Лимон және қантпен бірге ұсынылады.',
      ru: 'Ароматный чёрный чай с лимоном и сахаром.',
      en: 'Aromatic black tea served with lemon and sugar.',
    },
    price: 790,
    currency: '₸',
    image:
      black_tea,
    category: 'drinks',
    ingredients: {
      kz: ['Қара шай', 'Лимон', 'Қант'],
      ru: ['Чёрный чай', 'Лимон', 'Сахар'],
      en: ['Black tea', 'Lemon', 'Sugar'],
    },
    isVegetarian: true,
    isGlutenFree: true,
  },

  {
    id: '18',
    name: {
      kz: 'Шай сүтпен',
      ru: 'Чай с молоком',
      en: 'Tea with Milk',
    },
    description: {
      kz: 'Қара шай мен ыстық сүттің жұмсақ үйлесімі.',
      ru: 'Мягкое сочетание чёрного чая и горячего молока.',
      en: 'A smooth combination of black tea and warm milk.',
    },
    price: 990,
    currency: '₸',
    image:
      milk_tea,
    category: 'drinks',
    ingredients: {
      kz: ['Қара шай', 'Сүт'],
      ru: ['Чёрный чай', 'Молоко'],
      en: ['Black tea', 'Milk'],
    },
    isVegetarian: true,
  },

  {
    id: '19',
    name: {
      kz: 'Үй лимонады',
      ru: 'Домашний лимонад',
      en: 'Homemade Lemonade',
    },
    description: {
      kz: 'Лимон, лайм, жалбыз және газдалған сумен дайындалған салқын сусын.',
      ru: 'Освежающий лимонад с лимоном, лаймом, мятой и газированной водой.',
      en: 'Refreshing lemonade with lemon, lime, mint and sparkling water.',
    },
    price: 1490,
    currency: '₸',
    image:
      lemonade,
    category: 'drinks',
    ingredients: {
      kz: ['Лимон', 'Лайм', 'Жалбыз', 'Газдалған су', 'Сироп'],
      ru: ['Лимон', 'Лайм', 'Мята', 'Газированная вода', 'Сироп'],
      en: ['Lemon', 'Lime', 'Mint', 'Sparkling water', 'Syrup'],
    },
    isVegetarian: true,
    isGlutenFree: true,
  },

  {
    id: '20',
    name: {
      kz: 'Морс',
      ru: 'Морс',
      en: 'Berry Fruit Drink',
    },
    description: {
      kz: 'Табиғи жидектерден дайындалған салқын морс.',
      ru: 'Освежающий морс из натуральных ягод.',
      en: 'Refreshing fruit drink made from natural berries.',
    },
    price: 1190,
    currency: '₸',
    image:
      mors,
    category: 'drinks',
    ingredients: {
      kz: ['Жидектер', 'Су', 'Қант'],
      ru: ['Ягоды', 'Вода', 'Сахар'],
      en: ['Berries', 'Water', 'Sugar'],
    },
    isVegetarian: true,
    isGlutenFree: true,
  },
];

export const getMenuByCategory = (categoryId: string): FoodItem[] => {
  return menuItems.filter((item) => item.category === categoryId);
};

export const getCategoriesWithItems = () => {
  return categories.map((category) => ({
    category,
    items: getMenuByCategory(category.id),
  }));
};