import React from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import { flexRender, getCoreRowModel, useReactTable, type ColumnDef } from "@tanstack/react-table";

import type { ShopDTO } from "../../api";
import { getAddressInfo } from "../../utils";
import type { ShopsListItem } from "../../types";

import { LazyImage } from "../LazyImage";

import { TABLE_COLUMN_LABELS, TABLE_ROW_HEIGHT } from "./constants";

import "../../css/table.css";

type Props = {
  shopsAddresses: ShopDTO[];
};

export const ShopsList = (props: Props) => {
  const { shopsAddresses } = props;

  const columns = React.useMemo<Array<ColumnDef<ShopsListItem>>>(
    () => [
      { accessorKey: "id", header: TABLE_COLUMN_LABELS.id, maxSize: 50 },
      {
        accessorKey: "image",
        header: TABLE_COLUMN_LABELS.image,
        maxSize: 100,
        cell: (info) => (
          <LazyImage
            src={info.getValue<string>()}
            alt={`shop ${info.row.original.street}, ${info.row.original.type} image`}
          />
        ),
      },
      { accessorKey: "city", header: TABLE_COLUMN_LABELS.city },
      { accessorKey: "street", header: TABLE_COLUMN_LABELS.street },
      { accessorKey: "type", header: TABLE_COLUMN_LABELS.type },
    ],
    []
  );

  const table = useReactTable({
    data: shopsAddresses.map((el) => ({
      id: el.id,
      image: el.imageUrl,
      city: getAddressInfo(el.address).city,
      street: getAddressInfo(el.address).street,
      type: el.type,
    })),
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const { rows } = table.getRowModel();

  const parentRef = React.useRef<HTMLDivElement>(null);

  const rowVirtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => TABLE_ROW_HEIGHT,
  });

  return (
    <div ref={parentRef} className="h-screen overflow-auto p-4">
      <div style={{ height: `${rowVirtualizer.getTotalSize()}px` }}>
        <table className="table">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <th
                      key={header.id}
                      colSpan={header.colSpan}
                      style={{ width: header.getSize() }}
                      className="table-th"
                    >
                      {flexRender(header.column.columnDef.header, header.getContext())}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {rowVirtualizer.getVirtualItems().map((virtualRow, index) => {
              const row = rows[virtualRow.index];

              return (
                <tr
                  key={row.id}
                  style={{
                    height: `${virtualRow.size}px`,
                    transform: `translateY(${virtualRow.start - index * virtualRow.size}px)`,
                  }}
                  className="table-tr"
                >
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td key={cell.id} className="table-td">
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
