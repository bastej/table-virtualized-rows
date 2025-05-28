import { generateShopAddresses } from "../mocks";
import type { ShopDTO } from "./dtos/Shop.dto";

export const fetchShopsAddresses = () => {
  // TODO: replace with call to backend api
  const mockedData = generateShopAddresses(100);

  return new Promise<ShopDTO[]>((resolve) => resolve(mockedData));
};
