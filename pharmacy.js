import { DEFAULT_DRUG_CONFIG, DRUGS_CONFIG } from "./drugs.constants";
export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
    console.log(this.drugs);
  }
  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      const drug = this.drugs[i];
      const config = DRUGS_CONFIG[drug.name] ?? DEFAULT_DRUG_CONFIG;

      drug.benefit += config.benefitChange;

      for (const threshold of config.thresholds) {
        if (drug.expiresIn <= threshold.daysLeft) {
          drug.benefit += threshold.bonusChange;
        }
      }

      if (!config.neverExpires) {
        drug.expiresIn -= 1;
      }

      if (drug.expiresIn < 0) {
        if (config.dropToZeroOnExpiry) {
          drug.benefit = 0;
        } else {
          drug.benefit += config.expiryBenefitChange;
        }
      }

      drug.benefit = Math.min(50, Math.max(0, drug.benefit));
    }

    return this.drugs;
  }
}
