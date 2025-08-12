import { rankItem, compareItems, RankingInfo, } from "@tanstack/match-sorter-utils";
import { getSortedRowModel, getFacetedRowModel, getFacetedUniqueValues, getFacetedMinMaxValues, sortingFns, ColumnFiltersState, FilterFn, SortingState, VisibilityState, Column, ExpandedState, useReactTable, getCoreRowModel, getPaginationRowModel, getFilteredRowModel, getExpandedRowModel, ColumnDef, flexRender,SortingFn,RowData,RowModel   } from "@tanstack/react-table";

export const fuzzySort = (rowA, rowB, columnId) => {
    let dir = 0

    // Only sort by rank if the column has ranking information
    if (rowA.columnFiltersMeta[columnId]) {
        dir = compareItems(
            rowA.columnFiltersMeta[columnId]! as RankingInfo,
            rowB.columnFiltersMeta[columnId]! as RankingInfo
        )
    }

    // Provide an alphanumeric fallback for when the item ranks are equal
    return dir === 0 ? sortingFns.alphanumeric(rowA, rowB, columnId) : dir
}