import type { Restaurant } from '../types';

export const restaurantData: Restaurant = {
  id: 'qazaq',
  name: 'QAZAQ',

  tagline: {
    kz: '',
    ru: '',
    en: '',
  },

  description: {
    kz: 'QAZAQ — Тараз қаласындағы заманауи мейрамхана. Біз қазақы дастарқанның сүйікті тағамдарын заманауи ұсыну үлгісімен біріктіріп, жайлы атмосферада ұсынамыз.',
    ru: 'QAZAQ — современный ресторан в Таразе, где любимые блюда казахской кухни сочетаются с современной подачей и уютной атмосферой.',
    en: 'QAZAQ is a modern restaurant in Taraz, combining beloved Kazakh dishes with contemporary presentation in a warm and elegant atmosphere.',
  },

  heroImage:
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=80',

  openingHours: {
    kz: 'Күн сайын: 10:00 - 00:00',
    ru: 'Ежедневно: 10:00 - 00:00',
    en: 'Daily: 10:00 - 00:00',
  },

  address: {
    kz: 'Төле би көшесі, 42, Тараз',
    ru: 'ул. Толе би, 42, Тараз',
    en: '42 Tole Bi Street, Taraz',
  },

  phone: '+7 (776) 325-79-63',

  instagram: 'https://www.instagram.com/bvq.bergen/',

  googleMaps:
    'https://www.google.com/maps/search/?api=1&query=Тараз,+Төле+би+42',

  qrCode:
    'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://qazaq-menu.kz',
};