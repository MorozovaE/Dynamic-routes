"use strict";
exports.__esModule = true;
exports.PagesTable = void 0;
var react_1 = require("react");
var material_react_table_1 = require("material-react-table");
var react_redux_1 = require("react-redux");
var pagesSlice_1 = require("../../store/features/pagesSlice");
var react_router_dom_1 = require("react-router-dom");
exports.PagesTable = function () {
    var pages = react_redux_1.useSelector(pagesSlice_1.pagesSelector);
    var columns = react_1.useMemo(function () { return [
        {
            accessorKey: "metaTitle",
            header: "Title (metaTitle)"
        },
        {
            accessorKey: "h1",
            header: "Header (h1)"
        },
        {
            accessorKey: "backgroundColor",
            header: "Background Color"
        },
        {
            accessorKey: "path",
            header: "Path",
            Cell: function (_a) {
                var cell = _a.cell;
                return (react_1["default"].createElement(react_router_dom_1.Link, { to: "/" + cell.getValue() }, cell.getValue()));
            }
        },
    ]; }, []);
    return (react_1["default"].createElement(material_react_table_1.MaterialReactTable, { columns: columns, data: pages, enableColumnActions: false, enableColumnFilters: false, enablePagination: false, enableSorting: false, enableBottomToolbar: false, enableTopToolbar: false, muiTableBodyRowProps: { hover: false }, muiTableProps: {
            sx: {
                border: "1px solid rgba(81, 81, 81, 1)"
            }
        }, muiTableHeadCellProps: {
            sx: {
                border: "1px solid rgba(81, 81, 81, 1)"
            }
        }, muiTableBodyCellProps: {
            sx: {
                border: "1px solid rgba(81, 81, 81, 1)"
            }
        } }));
};
