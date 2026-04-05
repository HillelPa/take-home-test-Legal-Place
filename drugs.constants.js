export const DRUG_NAMES = {
  HERBAL_TEA: "Herbal Tea",
  MAGIC_PILL: "Magic Pill",
  FERVEX: "Fervex",
  DAFALGAN: "Dafalgan",
};

export const DEFAULT_DRUG_CONFIG = {
  benefitChange: -1,
  expiryBenefitChange: -1,
  neverExpires: false,
  dropToZeroOnExpiry: false,
  thresholds: [],
};

export const DRUGS_CONFIG = {
  [DRUG_NAMES.MAGIC_PILL]: {
    benefitChange: 0,
    expiryBenefitChange: 0,
    neverExpires: true,
    dropToZeroOnExpiry: false,
    thresholds: [],
  },
  [DRUG_NAMES.HERBAL_TEA]: {
    benefitChange: 1,
    expiryBenefitChange: 1,
    neverExpires: false,
    dropToZeroOnExpiry: false,
    thresholds: [],
  },
  [DRUG_NAMES.FERVEX]: {
    benefitChange: 1,
    expiryBenefitChange: 0,
    neverExpires: false,
    dropToZeroOnExpiry: true,
    thresholds: [
      { daysLeft: 10, bonusChange: 1 },
      { daysLeft: 5, bonusChange: 1 },
    ],
  },
  [DRUG_NAMES.DAFALGAN]: {
    benefitChange: -2,
    expiryBenefitChange: -2,
    neverExpires: false,
    dropToZeroOnExpiry: false,
    thresholds: [],
  },
};
