import React, { useMemo } from "react";
import { MaterialReactTable, type MRT_ColumnDef } from "material-react-table";
import { ICustomPage } from "../../interfaces";
import { useSelector } from "react-redux";
import { pagesSelector } from "../../store/features/pagesSlice";
import { Link } from "react-router-dom";
import style from "./pagesTable.module.scss";

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
        Cell: ({ cell }) => (
          <div className={style.backgroundCell}>
            <span
              style={{
                backgroundColor: `${cell.getValue<string>()}`,
                width: "25px",
                height: "10px",
                display: "block",
              }}
            ></span>
            <span>{cell.getValue<string>()}</span>
          </div>
        ),
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
    <div className={style.table}>
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
            border: "1px solid #fff",
          },
        }}
        muiTableHeadCellProps={{
          sx: {
            border: "1px solid #E2E2E2",
          },
        }}
        muiTableBodyCellProps={{
          sx: {
            border: "1px solid #E2E2E2",
          },
        }}
      />
    </div>
  );
};
