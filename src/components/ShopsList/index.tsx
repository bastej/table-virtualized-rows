import type { ShopDTO } from "../../api";
import { getAddressInfo } from "../../utils";

type Props = {
  shopsAddresses: ShopDTO[];
};

export const ShopsList = (props: Props) => {
  const { shopsAddresses } = props;

  return shopsAddresses.map((shop) => {
    const { city, street } = getAddressInfo(shop.address);

    return (
      <div>
        ul. {street}, {city}
      </div>
    );
  });
};
