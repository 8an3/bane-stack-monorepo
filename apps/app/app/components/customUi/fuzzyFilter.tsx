import { rankItem, compareItems, RankingInfo, } from "@tanstack/match-sorter-utils";
import { getSortedRowModel, getFacetedRowModel, getFacetedUniqueValues, getFacetedMinMaxValues, sortingFns, ColumnFiltersState, FilterFn, SortingState, VisibilityState, Column, ExpandedState, useReactTable, getCoreRowModel, getPaginationRowModel, getFilteredRowModel, getExpandedRowModel, ColumnDef, flexRender,SortingFn,RowData,RowModel   } from "@tanstack/react-table";

export const fuzzyFilter = (
    row,
    columnId,
    value,
    addMeta
) => {
    // Rank the item
    const itemRank = rankItem(row.getValue(columnId), value)

    // Store the ranking info
    addMeta(itemRank)

    // Return if the item should be filtered in/out
    return itemRank.passed
}