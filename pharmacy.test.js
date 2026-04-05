import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  describe("Default drug", () => {
    it("should decrease benefit by 1 and expiresIn by 1", () => {
      expect(
        new Pharmacy([new Drug("Doliprane", 10, 20)]).updateBenefitValue(),
      ).toEqual([new Drug("Doliprane", 9, 19)]);
    });

    it("should decrease benefit twice as fast after expiration", () => {
      expect(
        new Pharmacy([new Drug("Doliprane", 0, 10)]).updateBenefitValue(),
      ).toEqual([new Drug("Doliprane", -1, 8)]);
    });

    it("should never have a negative benefit", () => {
      expect(
        new Pharmacy([new Drug("Doliprane", 5, 0)]).updateBenefitValue(),
      ).toEqual([new Drug("Doliprane", 4, 0)]);
    });

    it("should never have a negative benefit after expiration", () => {
      expect(
        new Pharmacy([new Drug("Doliprane", -1, 1)]).updateBenefitValue(),
      ).toEqual([new Drug("Doliprane", -2, 0)]);
    });
  });

  describe("Herbal Tea", () => {
    it("should increase benefit by 1 before expiration", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", 10, 5)]).updateBenefitValue(),
      ).toEqual([new Drug("Herbal Tea", 9, 6)]);
    });

    it("should increase benefit twice as fast after expiration", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", 0, 10)]).updateBenefitValue(),
      ).toEqual([new Drug("Herbal Tea", -1, 12)]);
    });

    it("should never exceed a benefit of 50", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", 10, 50)]).updateBenefitValue(),
      ).toEqual([new Drug("Herbal Tea", 9, 50)]);
    });

    it("should never exceed a benefit of 50 after expiration", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", 0, 49)]).updateBenefitValue(),
      ).toEqual([new Drug("Herbal Tea", -1, 50)]);
    });
  });

  describe("Magic Pill", () => {
    it("should never decrease expiresIn", () => {
      expect(
        new Pharmacy([new Drug("Magic Pill", 15, 40)]).updateBenefitValue(),
      ).toEqual([new Drug("Magic Pill", 15, 40)]);
    });

    it("should never change benefit", () => {
      expect(
        new Pharmacy([new Drug("Magic Pill", 0, 40)]).updateBenefitValue(),
      ).toEqual([new Drug("Magic Pill", 0, 40)]);
    });
  });

  describe("Fervex", () => {
    it("should increase benefit by 1 when more than 10 days left", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 15, 20)]).updateBenefitValue(),
      ).toEqual([new Drug("Fervex", 14, 21)]);
    });

    it("should increase benefit by 2 when 10 days or less", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 10, 20)]).updateBenefitValue(),
      ).toEqual([new Drug("Fervex", 9, 22)]);
    });

    it("should increase benefit by 3 when 5 days or less", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 5, 20)]).updateBenefitValue(),
      ).toEqual([new Drug("Fervex", 4, 23)]);
    });

    it("should drop benefit to 0 after expiration", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 0, 35)]).updateBenefitValue(),
      ).toEqual([new Drug("Fervex", -1, 0)]);
    });

    it("should never exceed a benefit of 50", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 5, 49)]).updateBenefitValue(),
      ).toEqual([new Drug("Fervex", 4, 50)]);
    });
  });

  describe("Dafalgan", () => {
    it("should decrease benefit by 2 before expiration", () => {
      expect(
        new Pharmacy([new Drug("Dafalgan", 10, 20)]).updateBenefitValue(),
      ).toEqual([new Drug("Dafalgan", 9, 18)]);
    });

    it("should decrease benefit by 4 after expiration", () => {
      expect(
        new Pharmacy([new Drug("Dafalgan", 0, 20)]).updateBenefitValue(),
      ).toEqual([new Drug("Dafalgan", -1, 16)]);
    });

    it("should never have a negative benefit", () => {
      expect(
        new Pharmacy([new Drug("Dafalgan", 10, 1)]).updateBenefitValue(),
      ).toEqual([new Drug("Dafalgan", 9, 0)]);
    });
  });
});
