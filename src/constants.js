export const BIRTH_DATE = 0;
export const BIRTH_PLACE = 1;
export const PASSPORT_ISSUE_DATE = 2;
export const PASSPORT_EXPIRY = 3;
export const PASSPORT_LOCATION = 4;
export const RESIDENCE_CC = 5;
export const RESIDENCE_A = 6;

export const arrayFromNationality = (nationality) => {
  switch (nationality) {
    case "Austria":
      return [RESIDENCE_CC, PASSPORT_EXPIRY];
    case "Belgium":
      return [BIRTH_DATE, RESIDENCE_CC, RESIDENCE_A];
    case "France":
      return [BIRTH_DATE, BIRTH_PLACE, RESIDENCE_CC];
    case "Greece":
      return [PASSPORT_ISSUE_DATE, PASSPORT_LOCATION, PASSPORT_EXPIRY];
    case "Spain":
      return [RESIDENCE_A];
    default:
      return [];
  }
};
