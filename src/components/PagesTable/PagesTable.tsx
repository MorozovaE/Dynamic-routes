import React, { useMemo } from "react";
import { MaterialReactTable, type MRT_ColumnDef } from "material-react-table";
// import { data, type Person } from "./makeData";
import { ICustomPage } from "../../interfaces";
import { useSelector } from "react-redux";
import { pagesSelector } from "../../store/features/pagesSlice";

export const PagesTable = () => {
  const data = useSelector(pagesSelector);
  const columns = useMemo<MRT_ColumnDef<ICustomPage>[]>(
    () => [
      {
        accessorKey: "metaTitle",
        header: "Title (metaTitle)",
      },
      {
        accessorKey: "h1",
        header: "Header (h1)",
      },
      {
        accessorKey: "backgroundColor",
        header: "Background Color",
      },
      {
        accessorKey: "path",
        header: "Path",
      },
    ],
    []
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      enableColumnActions={false}
      enableColumnFilters={false}
      enablePagination={false}
      enableSorting={false}
      enableBottomToolbar={false}
      enableTopToolbar={false}
      muiTableBodyRowProps={{ hover: false }}
      muiTableProps={{
        sx: {
          border: "1px solid rgba(81, 81, 81, 1)",
        },
      }}
      muiTableHeadCellProps={{
        sx: {
          border: "1px solid rgba(81, 81, 81, 1)",
        },
      }}
      muiTableBodyCellProps={{
        sx: {
          border: "1px solid rgba(81, 81, 81, 1)",
        },
      }}
    />
  );
};

