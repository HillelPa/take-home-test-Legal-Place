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
    ...DEFAULT_DRUG_CONFIG,
    benefitChange: 0,
    expiryBenefitChange: 0,
    neverExpires: true,
  },
  [DRUG_NAMES.HERBAL_TEA]: {
    ...DEFAULT_DRUG_CONFIG,
    benefitChange: 1,
    expiryBenefitChange: 1,
  },
  [DRUG_NAMES.FERVEX]: {
    ...DEFAULT_DRUG_CONFIG,
    benefitChange: 1,
    expiryBenefitChange: 0,
    dropToZeroOnExpiry: true,
    thresholds: [
      { daysLeft: 10, bonusChange: 1 },
      { daysLeft: 5, bonusChange: 1 },
    ],
  },
  [DRUG_NAMES.DAFALGAN]: {
    ...DEFAULT_DRUG_CONFIG,
    benefitChange: -2,
    expiryBenefitChange: -2,
  },
};
