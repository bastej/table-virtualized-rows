type ShopType = "FRANCHISE" | "REGULAR";

export type ShopDTO = {
  id: string;
  address: string; // adres w formacie: ULICA XX-XXX (kod pocztowy), MIASTO np. ul. Jana Pawła 2 66-666, Kraków
  imageUrl: string;
  type: ShopType;
};
