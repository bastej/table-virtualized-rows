import type { ShopDTO } from "./dtos/Shop.dto";
import { shopsAddressesMock } from "./mocks";

export const fetchShopsAddresses = () => {
  // TODO: replace with call to backend api
  return new Promise<ShopDTO[]>((resolve) => resolve(shopsAddressesMock));
};
