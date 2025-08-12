import { Column, RowData, Table } from '@tanstack/react-table'
import React from 'react'
import {  Select,  SelectContent,  SelectGroup,  SelectItem,  SelectLabel,  SelectTrigger,  SelectValue,} from "~/components/ui/select"
import { DebouncedInput } from './debouncedInput'
type NumberInputProps = {
  columnFilterValue: [number, number]
  getFacetedMinMaxValues: () => [number, number] | undefined
  setFilterValue: (updater: any) => void
}

const NumberInput: React.FC<NumberInputProps> = ({
  columnFilterValue,
  getFacetedMinMaxValues,
  setFilterValue,
}) => {
  const minOpt = getFacetedMinMaxValues()?.[0]
  const min = Number(minOpt ?? '')

  const maxOpt = getFacetedMinMaxValues()?.[1]
  const max = Number(maxOpt)

  return (
    <div>
      <div className="flex space-x-2">
        <DebouncedInput
          type="number"
          min={min}
          max={max}
          value={columnFilterValue?.[0] ?? ''}
          onChange={value =>
            setFilterValue((old: [number, number]) => [value, old?.[1]])
          }
          placeholder={`Min ${minOpt ? `(${min})` : ''}`}
          className="w-24 border border-transparent shadow rounded"
        />
        <DebouncedInput
          type="number"
          min={min}
          max={max}
          value={columnFilterValue?.[1] ?? ''}
          onChange={value =>
            setFilterValue((old: [number, number]) => [old?.[0], value])
          }
          placeholder={`Max ${maxOpt ? `(${max})` : ''}`}
          className="w-24 border border-transparent shadow rounded"
        />
      </div>
      <div className="h-1" />
    </div>
  )
}

type TextInputProps = {
  columnId: string
  columnFilterValue: string
  columnSize: number
  setFilterValue: (updater: any) => void
  sortedUniqueValues: any[]
}

const TextInput: React.FC<TextInputProps> = ({
  columnId,
  columnFilterValue,
  columnSize,
  setFilterValue,
  sortedUniqueValues,
}) => {
  const dataListId = columnId + 'list'

  return (
    <React.Fragment>
      <datalist id={dataListId}>
        {sortedUniqueValues.slice(0, 5000).map((value: any) => (
          <option value={value} key={value} />
        ))}
      </datalist>
      <DebouncedInput
        type="text"
        value={columnFilterValue ?? ''}
        onChange={value => setFilterValue(value)}
        placeholder={`Search... (${columnSize})`}
        className="w-36 border border-transparent shadow rounded"
        list={dataListId}
      />
      <div className="h-1" />
    </React.Fragment>
  )
}

type Props<T extends RowData> = {
  column: Column<T, unknown>
  table: Table<T>
}

export function Filter({ column, table }) {
  const firstValue = table
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue(column.id)
  const { filterVariant } = column.columnDef.meta ?? {}
const exampleValue =  {
    meta: {
       filterVariant: 'range', //select, datalist
    }
  }
  const columnFilterValue = column.getFilterValue()
  const uniqueValues = column.getFacetedUniqueValues()

  const sortedUniqueValues = React.useMemo(
    () =>
      typeof firstValue === 'number'
        ? []
        : Array.from(uniqueValues.keys()).sort(),
    [uniqueValues]
  )

   return filterVariant === 'range' ? (
    <div>
      <div className="flex space-x-2">
        <DebouncedInput
          type="number"
          min={Number(column.getFacetedMinMaxValues()?.[0] ?? '')}
          max={Number(column.getFacetedMinMaxValues()?.[1] ?? '')}
          value={(columnFilterValue as [number, number])?.[0] ?? ''}
          onChange={value =>
            column.setFilterValue((old: [number, number]) => [value, old?.[1]])
          }
          placeholder={`Min ${column.getFacetedMinMaxValues()?.[0] !== undefined
            ? `(${column.getFacetedMinMaxValues()?.[0]})`
            : ''
            }`}
          className="w-24 border border-transparent shadow rounded"
        />
        <DebouncedInput
          type="number"
          min={Number(column.getFacetedMinMaxValues()?.[0] ?? '')}
          max={Number(column.getFacetedMinMaxValues()?.[1] ?? '')}
          value={(columnFilterValue as [number, number])?.[1] ?? ''}
          onChange={value =>
            column.setFilterValue((old: [number, number]) => [old?.[0], value])
          }
          placeholder={`Max ${column.getFacetedMinMaxValues()?.[1]
            ? `(${column.getFacetedMinMaxValues()?.[1]})`
            : ''
            }`}
          className="w-24 border border-transparent shadow rounded"
        />
      </div>
      <div className="h-1" />
    </div>
  ) : filterVariant === 'select' ? (
    <Select onValueChange={value => column.setFilterValue(value)} value={columnFilterValue?.toString()}>
      <SelectTrigger
        className={"w-[100px]",
          column.id === 'dealerId' ? 'w-[100px] border-none' :
            column.id === 'subCategory' ? 'w-[100px]' :
              column.id === 'subCategory' ? 'w-[100px]' :
                'w-full min-w-[180px]  border-none'}>
        <SelectValue placeholder={column.id === 'dealerId' ? 'Id' :
          column.id === 'salesperson' ? 'Sales Person' :
            column.id === 'sellingDept' ? 'Selling Dept' :
              column.id === 'date' ? 'Sale Date' :
                column.id === 'total' ? 'Amount' :
                  column.id === 'title' ? 'Title' :
                              column.id === 'status' ? 'Status' :
                              column.id === 'label' ? 'Label' :
                              column.id === 'priority' ? 'Priority' :
                  column.id === 'sentDate' ? 'Sent' :
                    column.id === 'userName' ? 'Selling User' :
                      column.id === 'pacUserName' ? 'Dept User' :
                        column.id === 'subCategory' ? 'Sub Category' :
                          column.id === 'onOrder' ? 'On Order' :

                            (`${column.id}`).replace(/\b\w/g, char => char.toUpperCase())} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="">All</SelectItem>
        {sortedUniqueValues.map(value => (
          <SelectItem key={value} value={value}>
            {value}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  ) : filterVariant === 'datalist' ? (
    <>
      {/* Autocomplete suggestions from faceted values feature */}
      <datalist id={column.id + 'list'}>
        {sortedUniqueValues.map((value: any) => (
          <option value={value} key={value} />
        ))}
      </datalist>
      <DebouncedInput
        type="text"
        value={(columnFilterValue ?? '') as string}
        onChange={value => column.setFilterValue(value)}
        placeholder={column.id === 'dealerId' ? 'Dealer Id' :
          column.id === 'salesperson' ? 'Sales Person' :
            column.id === 'sellingDept' ? 'Selling Dept' :
              column.id === 'date' ? 'Sale Date' :
                column.id === 'twoDaysFromNow' ? 'Set Quick F-U' :
                  column.id === 'completeCall' ? 'Set F-U' :
                    column.id === 'userName' ? 'Selling User' :
                      column.id === 'lastContact' ? 'Last Contacted' :
                        column.id === 'subCategory' ? 'Sub Category' :
                          column.id === 'contactTimesByType' ? 'Times Contacted' :
                            column.id === 'createdAt' ? '' :
                              column.id === 'action' ? '' :
                              column.id === 'id' ? 'ID' :
                              column.id === 'title' ? 'Title' :
                              column.id === 'status' ? 'Status' :
                              column.id === 'label' ? 'Label' :
                              column.id === 'priority' ? 'Priority' :
                                column.id === 'managersName' ? 'Reviewing Manager' :
                                  column.id === 'employeeRead' ? 'Read' :
                                    (`${column.id}`).replace(/\b\w/g, char => char.toUpperCase())}
        className={"w-full min-w-[100px] text-center border border-transparent",
          column.id === 'dealerId' ? 'w-[115px] text-center border-none' :
            column.id === 'id' ? 'w-[100px]  border border-transparent' :
            column.id === 'title' ? 'min-w-[200px]  border border-transparent' :
            column.id === 'status' ? 'min-w-[100px]  border border-transparent' :
            column.id === 'priority' ? 'min-w-[100px]  border border-transparent' :
            column.id === 'dealerId' ? 'w-[100px]' :
              column.id === 'subCategory' ? 'w-[100px]' :
                column.id === 'subCategory' ? 'w-[100px]' :
                  'w-full min-w-[150px]  text-center border border-transparent'}
        list={column.id + 'list'}
      />
      <div className="h-1" />
    </>
  ): typeof firstValue === 'number' ? (
    <NumberInput
      columnFilterValue={columnFilterValue as [number, number]}
      getFacetedMinMaxValues={column.getFacetedMinMaxValues}
      setFilterValue={column.setFilterValue}
    />
  ) : (
    <TextInput
      columnId={column.id}
      columnFilterValue={columnFilterValue as string}
      columnSize={uniqueValues.size}
      setFilterValue={column.setFilterValue}
      sortedUniqueValues={sortedUniqueValues}
    />
  )
}

export default Filter
