import type { ShopType } from "./ShopType";

export type ShopsListItem = {
  id: string;
  image: string;
  city: string;
  street: string;
  type: ShopType;
};
