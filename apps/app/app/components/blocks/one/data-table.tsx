import * as React from "react";
import { closestCenter, DndContext, KeyboardSensor, MouseSensor, TouchSensor, useSensor, useSensors, type DragEndEvent, type UniqueIdentifier } from "@dnd-kit/core";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import { arrayMove, SortableContext, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { IconChevronDown, IconChevronLeft, IconChevronRight, IconChevronsLeft, IconChevronsRight, IconCircleCheckFilled, IconDotsVertical, IconGripVertical, IconLayoutColumns, IconLoader, IconPlus, IconTrendingUp } from "@tabler/icons-react";
import {
	ColumnDef,
	ColumnFiltersState,
	flexRender,
	getCoreRowModel,
	getFacetedRowModel,
	getFacetedUniqueValues,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	Row,
	SortingState,
	useReactTable,
	VisibilityState,
} from "@tanstack/react-table";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import { toast } from "sonner";
import { z } from "zod";

import { useIsMobile } from "~/modules/hooks/use-mobile";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "~/components/ui/chart";
import { Checkbox } from "~/components/ui/checkbox";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "~/components/ui/drawer";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "~/components/ui/dropdown-menu";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";
import { Separator } from "~/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "~/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import LoginPage4 from "../login/auth4";
import LoginPage8 from "../login/auth8";
import Login1 from "../login/login-01/page";
import { ChartAreaAxes } from "../charts/chart-area-axes";
import Login5 from "../login/login-05/page";
import Login4 from "../login/login-04/page";
import Login3 from "../login/login-03/page";
import Login2 from "../login/login-02/page";
import { ChartAreaDefault } from "../charts/chart-area-default";
import { Calendar01 } from "../calendars/calendar-01";
import { Calendar02 } from "../calendars/calendar-02";
import { ChartAreaGradient } from "../charts/chart-area-gradient";
import { ChartAreaIcons } from "../charts/chart-area-icons";
import { ChartAreaInteractive } from "./chart-area-interactive";
import { ChartAreaLegend } from "../charts/chart-area-legend";
import { ChartAreaLinear } from "../charts/chart-area-linear";
import { ChartTooltipLabelNone } from "../charts/chart-tooltip-label-none";
import { ChartTooltipLabelFormatter } from "../charts/chart-tooltip-label-formatter";
import { ChartTooltipLabelCustom } from "../charts/chart-tooltip-label-custom";
import { ChartTooltipIndicatorNone } from "../charts/chart-tooltip-indicator-none";
import { ChartTooltipIndicatorLine } from "../charts/chart-tooltip-indicator-line";
import { ChartTooltipIcons } from "../charts/chart-tooltip-icons";
import { ChartTooltipFormatter } from "../charts/chart-tooltip-formatter";
import { ChartTooltipDefault } from "../charts/chart-tooltip-default";
import { ChartTooltipAdvanced } from "../charts/chart-tooltip-advanced";
import { ChartRadialText } from "../charts/chart-radial-text";
import { ChartRadialStacked } from "../charts/chart-radial-stacked";
import { ChartRadialSimple } from "../charts/chart-radial-simple";
import { ChartRadialShape } from "../charts/chart-radial-shape";
import { ChartRadialLabel } from "../charts/chart-radial-label";
import { ChartRadialGrid } from "../charts/chart-radial-grid";
import { ChartRadarRadius } from "../charts/chart-radar-radius";
import { ChartRadarMultiple } from "../charts/chart-radar-multiple";
import { ChartRadarLinesOnly } from "../charts/chart-radar-lines-only";
import { ChartRadarLegend } from "../charts/chart-radar-legend";
import { ChartRadarLabelCustom } from "../charts/chart-radar-label-custom";
import { ChartRadarIcons } from "../charts/chart-radar-icons";
import { ChartRadarGridNone } from "../charts/chart-radar-grid-none";
import { ChartRadarGridFill } from "../charts/chart-radar-grid-fill";
import { ChartRadarGridCustom } from "../charts/chart-radar-grid-custom";
import { ChartRadarGridCircle } from "../charts/chart-radar-grid-circle";
import { ChartRadarGridCircleNoLines } from "../charts/chart-radar-grid-circle-no-lines";
import { ChartRadarGridCircleFill } from "../charts/chart-radar-grid-circle-fill";
import { ChartRadarDots } from "../charts/chart-radar-dots";
import { ChartRadarDefault } from "../charts/chart-radar-default";
import { ChartPieStacked } from "../charts/chart-pie-stacked";
import { ChartPieSimple } from "../charts/chart-pie-simple";
import { ChartPieSeparatorNone } from "../charts/chart-pie-separator-none";
import { ChartPieLegend } from "../charts/chart-pie-legend";
import { ChartPieLabel } from "../charts/chart-pie-label";
import { ChartPieLabelList } from "../charts/chart-pie-label-list";
import { ChartPieLabelCustom } from "../charts/chart-pie-label-custom";
import { ChartPieInteractive } from "../charts/chart-pie-interactive";
import { ChartPieDonut } from "../charts/chart-pie-donut";
import { ChartPieDonutText } from "../charts/chart-pie-donut-text";
import { ChartPieDonutActive } from "../charts/chart-pie-donut-active";
import { ChartLineStep } from "../charts/chart-line-step";
import { ChartLineMultiple } from "../charts/chart-line-multiple";
import { ChartLineLinear } from "../charts/chart-line-linear";
import { ChartLineLabel } from "../charts/chart-line-label";
import { ChartLineLabelCustom } from "../charts/chart-line-label-custom";
import { ChartLineInteractive } from "../charts/chart-line-interactive";
import { ChartLineDots } from "../charts/chart-line-dots";
import { ChartLineDotsCustom } from "../charts/chart-line-dots-custom";
import { ChartLineDotsColors } from "../charts/chart-line-dots-colors";
import { ChartLineDefault } from "../charts/chart-line-default";
import { ChartBarStacked } from "../charts/chart-bar-stacked";
import { ChartBarNegative } from "../charts/chart-bar-negative";
import { ChartBarMultiple } from "../charts/chart-bar-multiple";
import { ChartBarMixed } from "../charts/chart-bar-mixed";
import { ChartBarLabel } from "../charts/chart-bar-label";
import { ChartBarLabelCustom } from "../charts/chart-bar-label-custom";
import { ChartBarInteractive } from "../charts/chart-bar-interactive";
import { ChartBarHorizontal } from "../charts/chart-bar-horizontal";
import { ChartBarDefault } from "../charts/chart-bar-default";
import { ChartBarActive } from "../charts/chart-bar-active";
import { ChartAreaStep } from "../charts/chart-area-step";
import { ChartAreaStacked } from "../charts/chart-area-stacked";
import { ChartAreaStackedExpand } from "../charts/chart-area-stacked-expand";
import Calendar03 from "../calendars/calendar-03";
import Calendar32 from "../calendars/calendar-32";
import Calendar31 from "../calendars/calendar-31";
import Calendar30 from "../calendars/calendar-30";
import Calendar29 from "../calendars/calendar-29";
import Calendar28 from "../calendars/calendar-28";
import Calendar27 from "../calendars/calendar-27";
import Calendar26 from "../calendars/calendar-26";
import Calendar25 from "../calendars/calendar-25";
import Calendar24 from "../calendars/calendar-24";
import Calendar23 from "../calendars/calendar-23";
import Calendar22 from "../calendars/calendar-22";
import Calendar21 from "../calendars/calendar-21";
import Calendar20 from "../calendars/calendar-20";
import Calendar19 from "../calendars/calendar-19";
import Calendar18 from "../calendars/calendar-18";
import Calendar17 from "../calendars/calendar-17";
import Calendar16 from "../calendars/calendar-16";
import Calendar15 from "../calendars/calendar-15";
import Calendar14 from "../calendars/calendar-14";
import Calendar13 from "../calendars/calendar-13";
import Calendar12 from "../calendars/calendar-12";
import Calendar11 from "../calendars/calendar-11";
import Calendar10 from "../calendars/calendar-10";
import Calendar09 from "../calendars/calendar-09";
import Calendar08 from "../calendars/calendar-08";
import Calendar07 from "../calendars/calendar-07";
import Calendar06 from "../calendars/calendar-06";
import Calendar05 from "../calendars/calendar-05";
import Calendar04 from "../calendars/calendar-04";

export const schema = z.object({
	id: z.number(),
	header: z.string(),
	type: z.string(),
	status: z.string(),
	target: z.string(),
	limit: z.string(),
	reviewer: z.string(),
});

// Create a separate component for the drag handle
function DragHandle({ id }: { id: number }) {
	const { attributes, listeners } = useSortable({
		id,
	});

	return (
		<Button {...attributes} {...listeners} variant="ghost" size="icon" className="text-muted-foreground size-7 hover:bg-transparent">
			<IconGripVertical className="text-muted-foreground size-3" />
			<span className="sr-only">Drag to reorder</span>
		</Button>
	);
}

const columns: ColumnDef<z.infer<typeof schema>>[] = [
	{
		id: "drag",
		header: () => null,
		cell: ({ row }) => <DragHandle id={row.original.id} />,
	},
	{
		id: "select",
		header: ({ table }) => (
			<div className="flex items-center justify-center">
				<Checkbox checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")} onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)} aria-label="Select all" />
			</div>
		),
		cell: ({ row }) => (
			<div className="flex items-center justify-center">
				<Checkbox checked={row.getIsSelected()} onCheckedChange={(value) => row.toggleSelected(!!value)} aria-label="Select row" />
			</div>
		),
		enableSorting: false,
		enableHiding: false,
	},
	{
		accessorKey: "header",
		header: "Header",
		cell: ({ row }) => {
			return <TableCellViewer item={row.original} />;
		},
		enableHiding: false,
	},
	{
		accessorKey: "type",
		header: "Section Type",
		cell: ({ row }) => (
			<div className="w-32">
				<Badge variant="outline" className="text-muted-foreground px-1.5">
					{row.original.type}
				</Badge>
			</div>
		),
	},
	{
		accessorKey: "status",
		header: "Status",
		cell: ({ row }) => (
			<Badge variant="outline" className="text-muted-foreground px-1.5">
				{row.original.status === "Done" ? <IconCircleCheckFilled className="fill-green-500 dark:fill-green-400" /> : <IconLoader />}
				{row.original.status}
			</Badge>
		),
	},
	{
		accessorKey: "target",
		header: () => <div className="w-full text-right">Target</div>,
		cell: ({ row }) => (
			<form
				onSubmit={(e) => {
					e.preventDefault();
					toast.promise(new Promise((resolve) => setTimeout(resolve, 1000)), {
						loading: `Saving ${row.original.header}`,
						success: "Done",
						error: "Error",
					});
				}}
			>
				<Label htmlFor={`${row.original.id}-target`} className="sr-only">
					Target
				</Label>
				<Input
					className="hover:bg-input/30 focus-visible:bg-background dark:hover:bg-input/30 dark:focus-visible:bg-input/30 h-8 w-16 border-transparent bg-transparent text-right shadow-none focus-visible:border dark:bg-transparent"
					defaultValue={row.original.target}
					id={`${row.original.id}-target`}
				/>
			</form>
		),
	},
	{
		accessorKey: "limit",
		header: () => <div className="w-full text-right">Limit</div>,
		cell: ({ row }) => (
			<form
				onSubmit={(e) => {
					e.preventDefault();
					toast.promise(new Promise((resolve) => setTimeout(resolve, 1000)), {
						loading: `Saving ${row.original.header}`,
						success: "Done",
						error: "Error",
					});
				}}
			>
				<Label htmlFor={`${row.original.id}-limit`} className="sr-only">
					Limit
				</Label>
				<Input
					className="hover:bg-input/30 focus-visible:bg-background dark:hover:bg-input/30 dark:focus-visible:bg-input/30 h-8 w-16 border-transparent bg-transparent text-right shadow-none focus-visible:border dark:bg-transparent"
					defaultValue={row.original.limit}
					id={`${row.original.id}-limit`}
				/>
			</form>
		),
	},
	{
		accessorKey: "reviewer",
		header: "Reviewer",
		cell: ({ row }) => {
			const isAssigned = row.original.reviewer !== "Assign reviewer";

			if (isAssigned) {
				return row.original.reviewer;
			}

			return (
				<>
					<Label htmlFor={`${row.original.id}-reviewer`} className="sr-only">
						Reviewer
					</Label>
					<Select>
						<SelectTrigger className="w-38 **:data-[slot=select-value]:block **:data-[slot=select-value]:truncate" size="sm" id={`${row.original.id}-reviewer`}>
							<SelectValue placeholder="Assign reviewer" />
						</SelectTrigger>
						<SelectContent align="end">
							<SelectItem value="Eddie Lake">Eddie Lake</SelectItem>
							<SelectItem value="Jamik Tashpulatov">Jamik Tashpulatov</SelectItem>
						</SelectContent>
					</Select>
				</>
			);
		},
	},
	{
		id: "actions",
		cell: () => (
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="ghost" className="data-[state=open]:bg-muted text-muted-foreground flex size-8" size="icon">
						<IconDotsVertical />
						<span className="sr-only">Open menu</span>
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end" className="w-32">
					<DropdownMenuItem>Edit</DropdownMenuItem>
					<DropdownMenuItem>Make a copy</DropdownMenuItem>
					<DropdownMenuItem>Favorite</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		),
	},
];

function DraggableRow({ row }: { row: Row<z.infer<typeof schema>> }) {
	const { transform, transition, setNodeRef, isDragging } = useSortable({
		id: row.original.id,
	});

	return (
		<TableRow
			data-state={row.getIsSelected() && "selected"}
			data-dragging={isDragging}
			ref={setNodeRef}
			className="relative z-0 data-[dragging=true]:z-10 data-[dragging=true]:opacity-80"
			style={{
				transform: CSS.Transform.toString(transform),
				transition: transition,
			}}
		>
			{row.getVisibleCells().map((cell) => (
				<TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
			))}
		</TableRow>
	);
}

export function DataTable({ data: initialData }: { data: z.infer<typeof schema>[] }) {
	const [data, setData] = React.useState(() => initialData);
	const [rowSelection, setRowSelection] = React.useState({});
	const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
	const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
	const [sorting, setSorting] = React.useState<SortingState>([]);
	const [pagination, setPagination] = React.useState({
		pageIndex: 0,
		pageSize: 10,
	});
	const sortableId = React.useId();
	const sensors = useSensors(useSensor(MouseSensor, {}), useSensor(TouchSensor, {}), useSensor(KeyboardSensor, {}));

	const dataIds = React.useMemo<UniqueIdentifier[]>(() => data?.map(({ id }) => id) || [], [data]);

	const table = useReactTable({
		data,
		columns,
		state: {
			sorting,
			columnVisibility,
			rowSelection,
			columnFilters,
			pagination,
		},
		getRowId: (row) => row.id.toString(),
		enableRowSelection: true,
		onRowSelectionChange: setRowSelection,
		onSortingChange: setSorting,
		onColumnFiltersChange: setColumnFilters,
		onColumnVisibilityChange: setColumnVisibility,
		onPaginationChange: setPagination,
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFacetedRowModel: getFacetedRowModel(),
		getFacetedUniqueValues: getFacetedUniqueValues(),
	});

	function handleDragEnd(event: DragEndEvent) {
		const { active, over } = event;
		if (active && over && active.id !== over.id) {
			setData((data) => {
				const oldIndex = dataIds.indexOf(active.id);
				const newIndex = dataIds.indexOf(over.id);
				return arrayMove(data, oldIndex, newIndex);
			});
		}
	}
	const [selLogin, setSelLogin] = useState("Alerts");
	const loginSections = [
		{ name: "Login1", value: "Login1" },
		{ name: "Login2", value: "Login2" },
		{ name: "Login3", value: "Login3" },
		{ name: "Login4", value: "Login4" },
		{ name: "Login5", value: "Login5" },
	];

	let viewLogin;
	switch (selLogin) {
		case "Login1":
			viewLogin = <Login1 />;
			break;
      	case "Login2":
			viewLogin = <Login2 />;
			break;
      	case "Login3":
			viewLogin = <Login3 />;
			break;
      	case "Login4":
			viewLogin = <Login4 />;
			break;
      	case "Login5":
			viewLogin = <Login5 />;
			break;
		default:
			viewLogin = <Login1 />;
			break;
	}

	const [selChart, setSelChart] = useState("chart-area-axes");
	const chartSections = [
    {name: "chart-area-axes", value: "chart-area-axes"},
{name: "chart-area-default", value: "chart-area-default"},
{name: "chart-area-gradient", value: "chart-area-gradient"},
{name: "chart-area-icons", value: "chart-area-icons"},
{name: "chart-area-interactive", value: "chart-area-interactive"},
{name: "chart-area-legend", value: "chart-area-legend"},
{name: "chart-area-linear", value: "chart-area-linear"},
{name: "chart-area-stacked-expand", value: "chart-area-stacked-expand"},
{name: "chart-area-stacked", value: "chart-area-stacked"},
{name: "chart-area-step", value: "chart-area-step"},
{name: "chart-bar-active", value: "chart-bar-active"},
{name: "chart-bar-default", value: "chart-bar-default"},
{name: "chart-bar-horizontal", value: "chart-bar-horizontal"},
{name: "chart-bar-interactive", value: "chart-bar-interactive"},
{name: "chart-bar-label-custom", value: "chart-bar-label-custom"},
{name: "chart-bar-label", value: "chart-bar-label"},
{name: "chart-bar-mixed", value: "chart-bar-mixed"},
{name: "chart-bar-multiple", value: "chart-bar-multiple"},
{name: "chart-bar-negative", value: "chart-bar-negative"},
{name: "chart-bar-stacked", value: "chart-bar-stacked"},
{name: "chart-line-default", value: "chart-line-default"},
{name: "chart-line-dots-colors", value: "chart-line-dots-colors"},
{name: "chart-line-dots-custom", value: "chart-line-dots-custom"},
{name: "chart-line-dots", value: "chart-line-dots"},
{name: "chart-line-interactive", value: "chart-line-interactive"},
{name: "chart-line-label-custom", value: "chart-line-label-custom"},
{name: "chart-line-label", value: "chart-line-label"},
{name: "chart-line-linear", value: "chart-line-linear"},
{name: "chart-line-multiple", value: "chart-line-multiple"},
{name: "chart-line-step", value: "chart-line-step"},
{name: "chart-pie-donut-active", value: "chart-pie-donut-active"},
{name: "chart-pie-donut-text", value: "chart-pie-donut-text"},
{name: "chart-pie-donut", value: "chart-pie-donut"},
{name: "chart-pie-interactive", value: "chart-pie-interactive"},
{name: "chart-pie-label-custom", value: "chart-pie-label-custom"},
{name: "chart-pie-label-list", value: "chart-pie-label-list"},
{name: "chart-pie-label", value: "chart-pie-label"},
{name: "chart-pie-legend", value: "chart-pie-legend"},
{name: "chart-pie-separator-none", value: "chart-pie-separator-none"},
{name: "chart-pie-simple", value: "chart-pie-simple"},
{name: "chart-pie-stacked", value: "chart-pie-stacked"},
{name: "chart-radar-default", value: "chart-radar-default"},
{name: "chart-radar-dots", value: "chart-radar-dots"},
{name: "chart-radar-grid-circle-fill", value: "chart-radar-grid-circle-fill"},
{name: "chart-radar-grid-circle-no-lines", value: "chart-radar-grid-circle-no-lines"},
{name: "chart-radar-grid-circle", value: "chart-radar-grid-circle"},
{name: "chart-radar-grid-custom", value: "chart-radar-grid-custom"},
{name: "chart-radar-grid-fill", value: "chart-radar-grid-fill"},
{name: "chart-radar-grid-none", value: "chart-radar-grid-none"},
{name: "chart-radar-icons", value: "chart-radar-icons"},
{name: "chart-radar-label-custom", value: "chart-radar-label-custom"},
{name: "chart-radar-legend", value: "chart-radar-legend"},
{name: "chart-radar-lines-only", value: "chart-radar-lines-only"},
{name: "chart-radar-multiple", value: "chart-radar-multiple"},
{name: "chart-radar-radius", value: "chart-radar-radius"},
{name: "chart-radial-grid", value: "chart-radial-grid"},
{name: "chart-radial-label", value: "chart-radial-label"},
{name: "chart-radial-shape", value: "chart-radial-shape"},
{name: "chart-radial-simple", value: "chart-radial-simple"},
{name: "chart-radial-stacked", value: "chart-radial-stacked"},
{name: "chart-radial-text", value: "chart-radial-text"},
{name: "chart-tooltip-advanced", value: "chart-tooltip-advanced"},
{name: "chart-tooltip-default", value: "chart-tooltip-default"},
{name: "chart-tooltip-formatter", value: "chart-tooltip-formatter"},
{name: "chart-tooltip-icons", value: "chart-tooltip-icons"},
{name: "chart-tooltip-indicator-line", value: "chart-tooltip-indicator-line"},
{name: "chart-tooltip-indicator-none", value: "chart-tooltip-indicator-none"},
{name: "chart-tooltip-label-custom", value: "chart-tooltip-label-custom"},
{name: "chart-tooltip-label-formatter", value: "chart-tooltip-label-formatter"},
{name: "chart-tooltip-label-none", value: "chart-tooltip-label-none"},
  ];
let viewChart;
switch (selChart) {
  case "chart-area-axes":
    viewChart = <ChartAreaAxes />;
    break;
  case "chart-area-default":
    viewChart = <ChartAreaDefault />;
    break;
  case "chart-area-gradient":
    viewChart = <ChartAreaGradient />;
    break;
  case "chart-area-icons":
    viewChart = <ChartAreaIcons />;
    break;
  case "chart-area-interactive":
    viewChart = <ChartAreaInteractive />;
    break;
  case "chart-area-legend":
    viewChart = <ChartAreaLegend />;
    break;
  case "chart-area-linear":
    viewChart = <ChartAreaLinear />;
    break;
  case "chart-area-stacked-expand":
    viewChart = <ChartAreaStackedExpand />;
    break;
  case "chart-area-stacked":
    viewChart = <ChartAreaStacked />;
    break;
  case "chart-area-step":
    viewChart = <ChartAreaStep />;
    break;
  case "chart-bar-active":
    viewChart = <ChartBarActive />;
    break;
  case "chart-bar-default":
    viewChart = <ChartBarDefault />;
    break;
  case "chart-bar-horizontal":
    viewChart = <ChartBarHorizontal />;
    break;
  case "chart-bar-interactive":
    viewChart = <ChartBarInteractive />;
    break;
  case "chart-bar-label-custom":
    viewChart = <ChartBarLabelCustom />;
    break;
  case "chart-bar-label":
    viewChart = <ChartBarLabel />;
    break;
  case "chart-bar-mixed":
    viewChart = <ChartBarMixed />;
    break;
  case "chart-bar-multiple":
    viewChart = <ChartBarMultiple />;
    break;
  case "chart-bar-negative":
    viewChart = <ChartBarNegative />;
    break;
  case "chart-bar-stacked":
    viewChart = <ChartBarStacked />;
    break;
  case "chart-line-default":
    viewChart = <ChartLineDefault />;
    break;
  case "chart-line-dots-colors":
    viewChart = <ChartLineDotsColors />;
    break;
  case "chart-line-dots-custom":
    viewChart = <ChartLineDotsCustom />;
    break;
  case "chart-line-dots":
    viewChart = <ChartLineDots />;
    break;
  case "chart-line-interactive":
    viewChart = <ChartLineInteractive />;
    break;
  case "chart-line-label-custom":
    viewChart = <ChartLineLabelCustom />;
    break;
  case "chart-line-label":
    viewChart = <ChartLineLabel />;
    break;
  case "chart-line-linear":
    viewChart = <ChartLineLinear />;
    break;
  case "chart-line-multiple":
    viewChart = <ChartLineMultiple />;
    break;
  case "chart-line-step":
    viewChart = <ChartLineStep />;
    break;
  case "chart-pie-donut-active":
    viewChart = <ChartPieDonutActive />;
    break;
  case "chart-pie-donut-text":
    viewChart = <ChartPieDonutText />;
    break;
  case "chart-pie-donut":
    viewChart = <ChartPieDonut />;
    break;
  case "chart-pie-interactive":
    viewChart = <ChartPieInteractive />;
    break;
  case "chart-pie-label-custom":
    viewChart = <ChartPieLabelCustom />;
    break;
  case "chart-pie-label-list":
    viewChart = <ChartPieLabelList />;
    break;
  case "chart-pie-label":
    viewChart = <ChartPieLabel />;
    break;
  case "chart-pie-legend":
    viewChart = <ChartPieLegend />;
    break;
  case "chart-pie-separator-none":
    viewChart = <ChartPieSeparatorNone />;
    break;
  case "chart-pie-simple":
    viewChart = <ChartPieSimple />;
    break;
  case "chart-pie-stacked":
    viewChart = <ChartPieStacked />;
    break;
  case "chart-radar-default":
    viewChart = <ChartRadarDefault />;
    break;
  case "chart-radar-dots":
    viewChart = <ChartRadarDots />;
    break;
  case "chart-radar-grid-circle-fill":
    viewChart = <ChartRadarGridCircleFill />;
    break;
  case "chart-radar-grid-circle-no-lines":
    viewChart = <ChartRadarGridCircleNoLines />;
    break;
  case "chart-radar-grid-circle":
    viewChart = <ChartRadarGridCircle />;
    break;
  case "chart-radar-grid-custom":
    viewChart = <ChartRadarGridCustom />;
    break;
  case "chart-radar-grid-fill":
    viewChart = <ChartRadarGridFill />;
    break;
  case "chart-radar-grid-none":
    viewChart = <ChartRadarGridNone />;
    break;
  case "chart-radar-icons":
    viewChart = <ChartRadarIcons />;
    break;
  case "chart-radar-label-custom":
    viewChart = <ChartRadarLabelCustom />;
    break;
  case "chart-radar-legend":
    viewChart = <ChartRadarLegend />;
    break;
  case "chart-radar-lines-only":
    viewChart = <ChartRadarLinesOnly />;
    break;
  case "chart-radar-multiple":
    viewChart = <ChartRadarMultiple />;
    break;
  case "chart-radar-radius":
    viewChart = <ChartRadarRadius />;
    break;
  case "chart-radial-grid":
    viewChart = <ChartRadialGrid />;
    break;
  case "chart-radial-label":
    viewChart = <ChartRadialLabel />;
    break;
  case "chart-radial-shape":
    viewChart = <ChartRadialShape />;
    break;
  case "chart-radial-simple":
    viewChart = <ChartRadialSimple />;
    break;
  case "chart-radial-stacked":
    viewChart = <ChartRadialStacked />;
    break;
  case "chart-radial-text":
    viewChart = <ChartRadialText />;
    break;
  case "chart-tooltip-advanced":
    viewChart = <ChartTooltipAdvanced />;
    break;
  case "chart-tooltip-default":
    viewChart = <ChartTooltipDefault />;
    break;
  case "chart-tooltip-formatter":
    viewChart = <ChartTooltipFormatter />;
    break;
  case "chart-tooltip-icons":
    viewChart = <ChartTooltipIcons />;
    break;
  case "chart-tooltip-indicator-line":
    viewChart = <ChartTooltipIndicatorLine />;
    break;
  case "chart-tooltip-indicator-none":
    viewChart = <ChartTooltipIndicatorNone />;
    break;
  case "chart-tooltip-label-custom":
    viewChart = <ChartTooltipLabelCustom />;
    break;
  case "chart-tooltip-label-formatter":
    viewChart = <ChartTooltipLabelFormatter />;
    break;
  case "chart-tooltip-label-none":
    viewChart = <ChartTooltipLabelNone />;
    break;
  default:
    viewChart = <ChartAreaDefault />;
    break;
}
  	const [selCalendar, setSelCalendar] = useState("chart-area-axes");
	const calendarSections = [
{ name: "calendar-01", value: "calendar-01"},
{ name: "calendar-02", value: "calendar-02"},
{ name: "calendar-03", value: "calendar-03"},
{ name: "calendar-04", value: "calendar-04"},
{ name: "calendar-05", value: "calendar-05"},
{ name: "calendar-06", value: "calendar-06"},
{ name: "calendar-07", value: "calendar-07"},
{ name: "calendar-08", value: "calendar-08"},
{ name: "calendar-09", value: "calendar-09"},
{ name: "calendar-10", value: "calendar-10"},
{ name: "calendar-11", value: "calendar-11"},
{ name: "calendar-12", value: "calendar-12"},
{ name: "calendar-13", value: "calendar-13"},
{ name: "calendar-14", value: "calendar-14"},
{ name: "calendar-15", value: "calendar-15"},
{ name: "calendar-16", value: "calendar-16"},
{ name: "calendar-17", value: "calendar-17"},
{ name: "calendar-18", value: "calendar-18"},
{ name: "calendar-19", value: "calendar-19"},
{ name: "calendar-20", value: "calendar-20"},
{ name: "calendar-21", value: "calendar-21"},
{ name: "calendar-22", value: "calendar-22"},
{ name: "calendar-23", value: "calendar-23"},
{ name: "calendar-24", value: "calendar-24"},
{ name: "calendar-25", value: "calendar-25"},
{ name: "calendar-26", value: "calendar-26"},
{ name: "calendar-27", value: "calendar-27"},
{ name: "calendar-28", value: "calendar-28"},
{ name: "calendar-29", value: "calendar-29"},
{ name: "calendar-30", value: "calendar-30"},
{ name: "calendar-31", value: "calendar-31"},
{ name: "calendar-32", value: "calendar-32"},
  ];
let viewCalendar;
switch (selCalendar) {
  case "calendar-01":
    viewCalendar = <Calendar01 />;
    break;
  case "calendar-02":
    viewCalendar = <Calendar02 />;
    break;
  case "calendar-03":
    viewCalendar = <Calendar03 />;
    break;
  case "calendar-04":
    viewCalendar = <Calendar04 />;
    break;
  case "calendar-05":
    viewCalendar = <Calendar05 />;
    break;
  case "calendar-06":
    viewCalendar = <Calendar06 />;
    break;
  case "calendar-07":
    viewCalendar = <Calendar07 />;
    break;
  case "calendar-08":
    viewCalendar = <Calendar08 />;
    break;
  case "calendar-09":
    viewCalendar = <Calendar09 />;
    break;
  case "calendar-10":
    viewCalendar = <Calendar10 />;
    break;
  case "calendar-11":
    viewCalendar = <Calendar11 />;
    break;
  case "calendar-12":
    viewCalendar = <Calendar12 />;
    break;
  case "calendar-13":
    viewCalendar = <Calendar13 />;
    break;
  case "calendar-14":
    viewCalendar = <Calendar14 />;
    break;
  case "calendar-15":
    viewCalendar = <Calendar15 />;
    break;
  case "calendar-16":
    viewCalendar = <Calendar16 />;
    break;
  case "calendar-17":
    viewCalendar = <Calendar17 />;
    break;
  case "calendar-18":
    viewCalendar = <Calendar18 />;
    break;
  case "calendar-19":
    viewCalendar = <Calendar19 />;
    break;
  case "calendar-20":
    viewCalendar = <Calendar20 />;
    break;
  case "calendar-21":
    viewCalendar = <Calendar21 />;
    break;
  case "calendar-22":
    viewCalendar = <Calendar22 />;
    break;
  case "calendar-23":
    viewCalendar = <Calendar23 />;
    break;
  case "calendar-24":
    viewCalendar = <Calendar24 />;
    break;
  case "calendar-25":
    viewCalendar = <Calendar25 />;
    break;
  case "calendar-26":
    viewCalendar = <Calendar26 />;
    break;
  case "calendar-27":
    viewCalendar = <Calendar27 />;
    break;
  case "calendar-28":
    viewCalendar = <Calendar28 />;
    break;
  case "calendar-29":
    viewCalendar = <Calendar29 />;
    break;
  case "calendar-30":
    viewCalendar = <Calendar30 />;
    break;
  case "calendar-31":
    viewCalendar = <Calendar31 />;
    break;
  case "calendar-32":
    viewCalendar = <Calendar32 />;
    break;
  default:
    viewCalendar = <Calendar01 />;
    break;
}
	return (
		<Tabs defaultValue="outline" className="w-full flex-col justify-start gap-6">
			<div className="flex items-center justify-between px-4 lg:px-6">
				<Label htmlFor="view-selector" className="sr-only">
					View
				</Label>
				<Select defaultValue="outline">
					<SelectTrigger className="flex w-fit @4xl/main:hidden" size="sm" id="view-selector">
						<SelectValue placeholder="Select a view" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="outline">Outline</SelectItem>
						<SelectItem value="past-performance">Login</SelectItem>
						<SelectItem value="key-personnel">Charts</SelectItem>
						<SelectItem value="focus-documents">Calendars</SelectItem>
					</SelectContent>
				</Select>
				<TabsList className="**:data-[slot=badge]:bg-muted-foreground/30 hidden **:data-[slot=badge]:size-5 **:data-[slot=badge]:rounded-full **:data-[slot=badge]:px-1 @4xl/main:flex">
					<TabsTrigger value="outline">Outline</TabsTrigger>
					<TabsTrigger value="past-performance">Login</TabsTrigger>
					<TabsTrigger value="key-personnel">Charts</TabsTrigger>
					<TabsTrigger value="focus-documents">Calendars</TabsTrigger>
				</TabsList>
				<div className="flex items-center gap-2">
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="outline" size="sm">
								<IconLayoutColumns />
								<span className="hidden lg:inline">Customize Columns</span>
								<span className="lg:hidden">Columns</span>
								<IconChevronDown />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end" className="w-56">
							{table
								.getAllColumns()
								.filter((column) => typeof column.accessorFn !== "undefined" && column.getCanHide())
								.map((column) => {
									return (
										<DropdownMenuCheckboxItem key={column.id} className="capitalize" checked={column.getIsVisible()} onCheckedChange={(value) => column.toggleVisibility(!!value)}>
											{column.id}
										</DropdownMenuCheckboxItem>
									);
								})}
						</DropdownMenuContent>
					</DropdownMenu>
					<Button variant="outline" size="sm">
						<IconPlus />
						<span className="hidden lg:inline">Add Section</span>
					</Button>
				</div>
			</div>
			<TabsContent value="outline" className="relative flex flex-col gap-4 overflow-auto px-4 lg:px-6">
				<div className="overflow-hidden rounded-lg border">
					<DndContext collisionDetection={closestCenter} modifiers={[restrictToVerticalAxis]} onDragEnd={handleDragEnd} sensors={sensors} id={sortableId}>
						<Table>
							<TableHeader className="bg-muted sticky top-0 z-10">
								{table.getHeaderGroups().map((headerGroup) => (
									<TableRow key={headerGroup.id}>
										{headerGroup.headers.map((header) => {
											return (
												<TableHead key={header.id} colSpan={header.colSpan}>
													{header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
												</TableHead>
											);
										})}
									</TableRow>
								))}
							</TableHeader>
							<TableBody className="**:data-[slot=table-cell]:first:w-8">
								{table.getRowModel().rows?.length ? (
									<SortableContext items={dataIds} strategy={verticalListSortingStrategy}>
										{table.getRowModel().rows.map((row) => (
											<DraggableRow key={row.id} row={row} />
										))}
									</SortableContext>
								) : (
									<TableRow>
										<TableCell colSpan={columns.length} className="h-24 text-center">
											No results.
										</TableCell>
									</TableRow>
								)}
							</TableBody>
						</Table>
					</DndContext>
				</div>
				<div className="flex items-center justify-between px-4">
					<div className="text-muted-foreground hidden flex-1 text-sm lg:flex">
						{table.getFilteredSelectedRowModel().rows.length} of {table.getFilteredRowModel().rows.length} row(s) selected.
					</div>
					<div className="flex w-full items-center gap-8 lg:w-fit">
						<div className="hidden items-center gap-2 lg:flex">
							<Label htmlFor="rows-per-page" className="text-sm font-medium">
								Rows per page
							</Label>
							<Select
								value={`${table.getState().pagination.pageSize}`}
								onValueChange={(value) => {
									table.setPageSize(Number(value));
								}}
							>
								<SelectTrigger size="sm" className="w-20" id="rows-per-page">
									<SelectValue placeholder={table.getState().pagination.pageSize} />
								</SelectTrigger>
								<SelectContent side="top">
									{[10, 20, 30, 40, 50].map((pageSize) => (
										<SelectItem key={pageSize} value={`${pageSize}`}>
											{pageSize}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						</div>
						<div className="flex w-fit items-center justify-center text-sm font-medium">
							Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
						</div>
						<div className="ml-auto flex items-center gap-2 lg:ml-0">
							<Button variant="outline" className="hidden h-8 w-8 p-0 lg:flex" onClick={() => table.setPageIndex(0)} disabled={!table.getCanPreviousPage()}>
								<span className="sr-only">Go to first page</span>
								<IconChevronsLeft />
							</Button>
							<Button variant="outline" className="size-8" size="icon" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
								<span className="sr-only">Go to previous page</span>
								<IconChevronLeft />
							</Button>
							<Button variant="outline" className="size-8" size="icon" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
								<span className="sr-only">Go to next page</span>
								<IconChevronRight />
							</Button>
							<Button variant="outline" className="hidden size-8 lg:flex" size="icon" onClick={() => table.setPageIndex(table.getPageCount() - 1)} disabled={!table.getCanNextPage()}>
								<span className="sr-only">Go to last page</span>
								<IconChevronsRight />
							</Button>
						</div>
					</div>
				</div>
			</TabsContent>
			<TabsContent value="past-performance" className="flex flex-col px-4 lg:px-6">
				<div className="flex flex-col justify-center gap-3">
					<div className="border-grid border-b">
						<div className="container-wrapper">
							<div className="container py-4 flex justify-center">
								<div className="grid w-full max-w-sm items-center gap-1.5">
									<Label>Login Sections</Label>
									<Select
										value={selLogin}
										onValueChange={(value) => {
											setSelLogin(value);
										}}
									>
										<SelectTrigger>
											<SelectValue />
										</SelectTrigger>
										<SelectContent>
											{loginSections.map((item, index) => {
												return (
													<SelectItem key={index} value={item.value}>
														{item.name}
													</SelectItem>
												);
											})}
										</SelectContent>
									</Select>
								</div>
							</div>
						</div>
					</div>
					<div className="container-wrapper">
						<div className="container py-6">
							<section className="overflow-hidden rounded-[0.5rem] border bg-background shadow">{viewLogin}</section>
						</div>
					</div>
				</div>
			</TabsContent>
			<TabsContent value="key-personnel" className="flex flex-col px-4 lg:px-6">
				<div className="flex flex-col justify-center gap-3">
					<div className="border-grid border-b">
						<div className="container-wrapper">
							<div className="container py-4 flex justify-center">
								<Command className="rounded-lg border shadow-md md:min-w-[450px]">
  <CommandInput 
    placeholder="Chart search..." 
    aria-label="Search chart types"
  />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Chart Sections">
      {chartSections.map((item) => (
        <CommandItem 
          key={item.value}
          value={item.value}
          onSelect={() => setSelChart(item.value)}
          className="cursor-pointer aria-selected:bg-accent aria-selected:text-accent-foreground"
        >
          <span className="capitalize">
            {item.name.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase())}
          </span>
        </CommandItem>
      ))}
    </CommandGroup>
  </CommandList>
</Command>
							</div>
						</div>
					</div>
					<div className="container-wrapper">
						<div className="container py-6">
							<section className="overflow-hidden rounded-[0.5rem] border bg-background shadow">{viewChart}</section>
						</div>
					</div>
				</div>
			</TabsContent>
			<TabsContent value="focus-documents" className="flex flex-col px-4 lg:px-6">
				<div className="flex flex-col justify-center gap-3">
					<div className="border-grid border-b">
						<div className="container-wrapper">
							<div className="container py-4 flex justify-center">
							 <Command className="rounded-lg border shadow-md md:min-w-[450px]">
        <CommandInput placeholder="Calendar search..." />
        <CommandList>
          <CommandEmpty>No calendars found.</CommandEmpty>
          <CommandGroup heading="Calendar Components">
            {calendarSections.map((item) => (
              <CommandItem 
                key={item.value}
                value={item.value}
                onSelect={() => setSelCalendar(item.value)}
              >
                {item.name.replace('calendar-', 'Calendar ')}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
							</div>
						</div>
					</div>
					<div className="container-wrapper">
						<div className="container py-6">
							<section className="overflow-hidden rounded-[0.5rem] border bg-background shadow">{viewCalendar}</section>
						</div>
					</div>
				</div>
			</TabsContent>
		</Tabs>
	);
}

const chartData = [
	{ month: "January", desktop: 186, mobile: 80 },
	{ month: "February", desktop: 305, mobile: 200 },
	{ month: "March", desktop: 237, mobile: 120 },
	{ month: "April", desktop: 73, mobile: 190 },
	{ month: "May", desktop: 209, mobile: 130 },
	{ month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
	desktop: {
		label: "Desktop",
		color: "var(--primary)",
	},
	mobile: {
		label: "Mobile",
		color: "var(--primary)",
	},
} satisfies ChartConfig;

function TableCellViewer({ item }: { item: z.infer<typeof schema> }) {
	const isMobile = useIsMobile();

	return (
		<Drawer direction={isMobile ? "bottom" : "right"}>
			<DrawerTrigger asChild>
				<Button variant="link" className="text-foreground w-fit px-0 text-left">
					{item.header}
				</Button>
			</DrawerTrigger>
			<DrawerContent>
				<DrawerHeader className="gap-1">
					<DrawerTitle>{item.header}</DrawerTitle>
					<DrawerDescription>Showing total visitors for the last 6 months</DrawerDescription>
				</DrawerHeader>
				<div className="flex flex-col gap-4 overflow-y-auto px-4 text-sm">
					{!isMobile && (
						<>
							<ChartContainer config={chartConfig}>
								<AreaChart
									accessibilityLayer
									data={chartData}
									margin={{
										left: 0,
										right: 10,
									}}
								>
									<CartesianGrid vertical={false} />
									<XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} tickFormatter={(value) => value.slice(0, 3)} hide />
									<ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
									<Area dataKey="mobile" type="natural" fill="var(--color-mobile)" fillOpacity={0.6} stroke="var(--color-mobile)" stackId="a" />
									<Area dataKey="desktop" type="natural" fill="var(--color-desktop)" fillOpacity={0.4} stroke="var(--color-desktop)" stackId="a" />
								</AreaChart>
							</ChartContainer>
							<Separator />
							<div className="grid gap-2">
								<div className="flex gap-2 leading-none font-medium">
									Trending up by 5.2% this month <IconTrendingUp className="size-4" />
								</div>
								<div className="text-muted-foreground">Showing total visitors for the last 6 months. This is just some random text to test the layout. It spans multiple lines and should wrap around.</div>
							</div>
							<Separator />
						</>
					)}
					<form className="flex flex-col gap-4">
						<div className="flex flex-col gap-3">
							<Label htmlFor="header">Header</Label>
							<Input id="header" defaultValue={item.header} />
						</div>
						<div className="grid grid-cols-2 gap-4">
							<div className="flex flex-col gap-3">
								<Label htmlFor="type">Type</Label>
								<Select defaultValue={item.type}>
									<SelectTrigger id="type" className="w-full">
										<SelectValue placeholder="Select a type" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="Table of Contents">Table of Contents</SelectItem>
										<SelectItem value="Executive Summary">Executive Summary</SelectItem>
										<SelectItem value="Technical Approach">Technical Approach</SelectItem>
										<SelectItem value="Design">Design</SelectItem>
										<SelectItem value="Capabilities">Capabilities</SelectItem>
										<SelectItem value="Focus Documents">Focus Documents</SelectItem>
										<SelectItem value="Narrative">Narrative</SelectItem>
										<SelectItem value="Cover Page">Cover Page</SelectItem>
									</SelectContent>
								</Select>
							</div>
							<div className="flex flex-col gap-3">
								<Label htmlFor="status">Status</Label>
								<Select defaultValue={item.status}>
									<SelectTrigger id="status" className="w-full">
										<SelectValue placeholder="Select a status" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="Done">Done</SelectItem>
										<SelectItem value="In Progress">In Progress</SelectItem>
										<SelectItem value="Not Started">Not Started</SelectItem>
									</SelectContent>
								</Select>
							</div>
						</div>
						<div className="grid grid-cols-2 gap-4">
							<div className="flex flex-col gap-3">
								<Label htmlFor="target">Target</Label>
								<Input id="target" defaultValue={item.target} />
							</div>
							<div className="flex flex-col gap-3">
								<Label htmlFor="limit">Limit</Label>
								<Input id="limit" defaultValue={item.limit} />
							</div>
						</div>
						<div className="flex flex-col gap-3">
							<Label htmlFor="reviewer">Reviewer</Label>
							<Select defaultValue={item.reviewer}>
								<SelectTrigger id="reviewer" className="w-full">
									<SelectValue placeholder="Select a reviewer" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="Eddie Lake">Eddie Lake</SelectItem>
									<SelectItem value="Jamik Tashpulatov">Jamik Tashpulatov</SelectItem>
									<SelectItem value="Emily Whalen">Emily Whalen</SelectItem>
								</SelectContent>
							</Select>
						</div>
					</form>
				</div>
				<DrawerFooter>
					<Button>Submit</Button>
					<DrawerClose asChild>
						<Button variant="outline">Done</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}
