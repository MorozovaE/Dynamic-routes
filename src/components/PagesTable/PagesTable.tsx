import React, { useMemo } from "react";
import { MaterialReactTable, type MRT_ColumnDef } from "material-react-table";
import { ICustomPage } from "../../interfaces";
import { useSelector } from "react-redux";
import { pagesSelector } from "../../store/features/pagesSlice";
import { Link } from "react-router-dom";

export const PagesTable = () => {
  const pages = useSelector(pagesSelector);

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
        Cell: ({ cell }) => (
          <Link to={"/" + cell.getValue<string>()}>
            {cell.getValue<string>()}
          </Link>
        ),
      },
    ],
    []
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={pages}
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
          // width: "500px",
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
