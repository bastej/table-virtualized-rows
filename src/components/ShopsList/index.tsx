import type { ShopDTO } from "../../api";

type Props = {
  shopsAddresses: ShopDTO[];
};

export const ShopsList = (props: Props) => {
  const { shopsAddresses } = props;

  return shopsAddresses.map((shop) => <div>{shop.address}</div>);
};
