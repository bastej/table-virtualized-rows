// TODO: could be nice to create separated comp. Table, with props 'records', and 'columns'
//       and sub-components such TableHeader, TableRow, and TableColumn

import type { ShopDTO } from "../../api";
import { getAddressInfo } from "../../utils";

import "../../css/table.css";

type Props = {
  shopsAddresses: ShopDTO[];
};

export const ShopsList = (props: Props) => {
  const { shopsAddresses } = props;

  return (
    <div className="p-4">
      <table className="table">
        <thead className="bg-gray-100">
          <tr>
            <th className="table-th">ID</th>
            <th className="table-th">Image</th>
            <th className="table-th">City</th>
            <th className="table-th">Street</th>
            <th className="table-th">Type</th>
          </tr>
        </thead>
        <tbody>
          {shopsAddresses.map((shop) => {
            const { id, address, imageUrl, type } = shop;
            const { city, street } = getAddressInfo(address);

            return (
              <tr key={id} className="table-tr">
                <td className="table-td">{id}</td>
                <td className="table-td">
                  <img
                    src={imageUrl}
                    alt={`shop ${address}, ${type} image`}
                    className="h-12 rounded"
                  />
                </td>
                <td className="table-td">{city}</td>
                <td className="table-td">{street}</td>
                <td className="table-td">{type}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
