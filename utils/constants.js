const CHAPTERS = [
  { code: 'A', title: 'La voie publique' },
  { code: 'B', title: 'Les usagers de la route' },
  { code: 'C', title: 'La voiture' },
  { code: 'D', title: 'La vitesse' },
  { code: 'E', title: 'Croisement et depassement' },
  { code: 'F', title: 'La priorite' },
  { code: 'G', title: 'Ou circuler' },
  { code: 'H', title: 'Arret et stationnement' },
  { code: 'I', title: 'Divers' },
  { code: 'J', title: 'Panneaux et signalisation' },
  { code: 'K', title: 'Fautes graves' }
];

const FREE_SERIES = [
  {
    code: 'free_set_1',
    storageCode: 'FREE_SET_1',
    name: 'Serie gratuite 1',
    offset: 0,
    questionCount: 15
  },
  {
    code: 'free_set_2',
    storageCode: 'FREE_SET_2',
    name: 'Serie gratuite 2',
    offset: 15,
    questionCount: 15
  }
];

const SUBSCRIPTION_PLANS = {
  pass5days: {
    code: 'pass5days',
    name: 'Pass 3 jours',
    amount: 99,
    durationDays: 3,
    priceEnvKey: 'STRIPE_PRICE_3_DAYS',
    legacyPriceEnvKey: 'STRIPE_PRICE_5_DAYS',
    description: 'Acces integral pendant 3 jours'
  },
  pass1month: {
    code: 'pass1month',
    name: 'Pass 30 jours',
    amount: 500,
    durationDays: 30,
    priceEnvKey: 'STRIPE_PRICE_1_MONTH',
    description: 'Acces integral pendant 30 jours'
  }
};

module.exports = {
  CHAPTERS,
  FREE_SERIES,
  SUBSCRIPTION_PLANS
};
