import { faker } from "@faker-js/faker";
import type { ShopType } from "../types";

export const generateShopAddresses = (count: number) => {
  return Array.from({ length: count }, (_, i) => {
    const type: ShopType = i % 2 === 0 ? "REGULAR" : "FRANCHISE";

    const street = faker.location.street();
    const buildingNumber = faker.location.buildingNumber();
    const postalCode = faker.location.zipCode("##-###");
    const city = faker.location.city();

    return {
      id: (i + 1).toString(),
      address: `ul. ${street} ${buildingNumber} ${postalCode}, ${city}`,
      type,
      imageUrl: faker.image.urlPicsumPhotos({ width: 400, height: 200 }),
    } as const;
  });
};
