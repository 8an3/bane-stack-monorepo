import { cn } from "~/components/ui/utils"
import { Button } from "~/components/ui/button"
import { Badge } from "~/components/ui/badge"
import { Checkbox } from "~/components/ui/checkbox"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, } from "~/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger, } from "~/components/ui/popover"
import { Separator } from "~/components/ui/separator"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, DropdownMenuCheckboxItem, DropdownMenuLabel, DropdownMenuGroup } from "~/components/ui/dropdown-menu"
import { ColumnDef, ColumnFiltersState, SortingState, VisibilityState, flexRender, getCoreRowModel, getFacetedRowModel, getFacetedUniqueValues, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable, Row, Table as ReactTable, getFacetedMinMaxValues, Column } from "@tanstack/react-table"
import { Avatar, AvatarFallback, AvatarImage, } from "~/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "~/components/ui/table"
import { Check, EllipsisVertical, Funnel, EyeClosed, CirclePlus, X, ArrowDown, ArrowUp, Columns2, Search, } from "lucide-react";
import Filter from "~/components/customUi/filter"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, } from "~/components/ui/pagination"
import eP from '~/utils/ext';
import { authSessionStorage } from "~/modules/auth/auth_session";
import { useLoaderData, } from '@remix-run/react';
import React, { useEffect, useState } from "react"
import { DebouncedInput } from "~/components/customUi/debouncedInput"
import { fuzzyFilter } from "~/components/customUi/fuzzyFilter"
import { ArrowDownIcon, ArrowRightIcon, ArrowUpIcon, CheckCircledIcon, CircleIcon, CrossCircledIcon, QuestionMarkCircledIcon, StopwatchIcon, } from "@radix-ui/react-icons"
import { ActionArgs, json, redirect, type ActionArgs, type LoaderArgs } from '@remix-run/node';
import { LoadingPage } from "~/components/customUi/loadingPage"
import { LoadErrorPage } from "~/components/customUi/loadErrorPage"



export async function loader({ request }: LoaderArgs) {
    const session = await authSessionStorage.getSession(request.headers.get("Cookie"));
    const email = session.get("email");
    const user = await eP.user.all(email)
    if (!user) { return redirect(import.meta.env.VITE_LOGIN); }
    const data = [
        {
            "id": "TASK-8782",
            "title": "You can't compress the program without quantifying the open-source SSD pixel!",
            "status": "in progress",
            "label": "documentation",
            "priority": "medium"
        },
        {
            "id": "TASK-7878",
            "title": "Try to calculate the EXE feed, maybe it will index the multi-byte pixel!",
            "status": "backlog",
            "label": "documentation",
            "priority": "medium"
        },
        {
            "id": "TASK-7839",
            "title": "We need to bypass the neural TCP card!",
            "status": "todo",
            "label": "bug",
            "priority": "high"
        },
        {
            "id": "TASK-5562",
            "title": "The SAS interface is down, bypass the open-source pixel so we can back up the PNG bandwidth!",
            "status": "backlog",
            "label": "feature",
            "priority": "medium"
        },
        {
            "id": "TASK-8686",
            "title": "I'll parse the wireless SSL protocol, that should driver the API panel!",
            "status": "canceled",
            "label": "feature",
            "priority": "medium"
        },
        {
            "id": "TASK-1280",
            "title": "Use the digital TLS panel, then you can transmit the haptic system!",
            "status": "done",
            "label": "bug",
            "priority": "high"
        },
        {
            "id": "TASK-7262",
            "title": "The UTF8 application is down, parse the neural bandwidth so we can back up the PNG firewall!",
            "status": "done",
            "label": "feature",
            "priority": "high"
        },
        {
            "id": "TASK-1138",
            "title": "Generating the driver won't do anything, we need to quantify the 1080p SMTP bandwidth!",
            "status": "in progress",
            "label": "feature",
            "priority": "medium"
        },
        {
            "id": "TASK-7184",
            "title": "We need to program the back-end THX pixel!",
            "status": "todo",
            "label": "feature",
            "priority": "low"
        },
        {
            "id": "TASK-5160",
            "title": "Calculating the bus won't do anything, we need to navigate the back-end JSON protocol!",
            "status": "in progress",
            "label": "documentation",
            "priority": "high"
        },
        {
            "id": "TASK-5618",
            "title": "Generating the driver won't do anything, we need to index the online SSL application!",
            "status": "done",
            "label": "documentation",
            "priority": "medium"
        },
        {
            "id": "TASK-6699",
            "title": "I'll transmit the wireless JBOD capacitor, that should hard drive the SSD feed!",
            "status": "backlog",
            "label": "documentation",
            "priority": "medium"
        },
        {
            "id": "TASK-2858",
            "title": "We need to override the online UDP bus!",
            "status": "backlog",
            "label": "bug",
            "priority": "medium"
        },
        {
            "id": "TASK-9864",
            "title": "I'll reboot the 1080p FTP panel, that should matrix the HEX hard drive!",
            "status": "done",
            "label": "bug",
            "priority": "high"
        },
        {
            "id": "TASK-8404",
            "title": "We need to generate the virtual HEX alarm!",
            "status": "in progress",
            "label": "bug",
            "priority": "low"
        },
        {
            "id": "TASK-5365",
            "title": "Backing up the pixel won't do anything, we need to transmit the primary IB array!",
            "status": "in progress",
            "label": "documentation",
            "priority": "low"
        },
        {
            "id": "TASK-1780",
            "title": "The CSS feed is down, index the bluetooth transmitter so we can compress the CLI protocol!",
            "status": "todo",
            "label": "documentation",
            "priority": "high"
        },
        {
            "id": "TASK-6938",
            "title": "Use the redundant SCSI application, then you can hack the optical alarm!",
            "status": "todo",
            "label": "documentation",
            "priority": "high"
        },
        {
            "id": "TASK-9885",
            "title": "We need to compress the auxiliary VGA driver!",
            "status": "backlog",
            "label": "bug",
            "priority": "high"
        },
        {
            "id": "TASK-3216",
            "title": "Transmitting the transmitter won't do anything, we need to compress the virtual HDD sensor!",
            "status": "backlog",
            "label": "documentation",
            "priority": "medium"
        },
        {
            "id": "TASK-9285",
            "title": "The IP monitor is down, copy the haptic alarm so we can generate the HTTP transmitter!",
            "status": "todo",
            "label": "bug",
            "priority": "high"
        },
        {
            "id": "TASK-1024",
            "title": "Overriding the microchip won't do anything, we need to transmit the digital OCR transmitter!",
            "status": "in progress",
            "label": "documentation",
            "priority": "low"
        },
        {
            "id": "TASK-7068",
            "title": "You can't generate the capacitor without indexing the wireless HEX pixel!",
            "status": "canceled",
            "label": "bug",
            "priority": "low"
        },
        {
            "id": "TASK-6502",
            "title": "Navigating the microchip won't do anything, we need to bypass the back-end SQL bus!",
            "status": "todo",
            "label": "bug",
            "priority": "high"
        },
        {
            "id": "TASK-5326",
            "title": "We need to hack the redundant UTF8 transmitter!",
            "status": "todo",
            "label": "bug",
            "priority": "low"
        },
        {
            "id": "TASK-6274",
            "title": "Use the virtual PCI circuit, then you can parse the bluetooth alarm!",
            "status": "canceled",
            "label": "documentation",
            "priority": "low"
        },
        {
            "id": "TASK-1571",
            "title": "I'll input the neural DRAM circuit, that should protocol the SMTP interface!",
            "status": "in progress",
            "label": "feature",
            "priority": "medium"
        },
        {
            "id": "TASK-9518",
            "title": "Compressing the interface won't do anything, we need to compress the online SDD matrix!",
            "status": "canceled",
            "label": "documentation",
            "priority": "medium"
        },
        {
            "id": "TASK-5581",
            "title": "I'll synthesize the digital COM pixel, that should transmitter the UTF8 protocol!",
            "status": "backlog",
            "label": "documentation",
            "priority": "high"
        },
        {
            "id": "TASK-2197",
            "title": "Parsing the feed won't do anything, we need to copy the bluetooth DRAM bus!",
            "status": "todo",
            "label": "documentation",
            "priority": "low"
        },
        {
            "id": "TASK-8484",
            "title": "We need to parse the solid state UDP firewall!",
            "status": "in progress",
            "label": "bug",
            "priority": "low"
        },
        {
            "id": "TASK-9892",
            "title": "If we back up the application, we can get to the UDP application through the multi-byte THX capacitor!",
            "status": "done",
            "label": "documentation",
            "priority": "high"
        },
        {
            "id": "TASK-9616",
            "title": "We need to synthesize the cross-platform ASCII pixel!",
            "status": "in progress",
            "label": "feature",
            "priority": "medium"
        },
        {
            "id": "TASK-9744",
            "title": "Use the back-end IP card, then you can input the solid state hard drive!",
            "status": "done",
            "label": "documentation",
            "priority": "low"
        },
        {
            "id": "TASK-1376",
            "title": "Generating the alarm won't do anything, we need to generate the mobile IP capacitor!",
            "status": "backlog",
            "label": "documentation",
            "priority": "low"
        },
        {
            "id": "TASK-7382",
            "title": "If we back up the firewall, we can get to the RAM alarm through the primary UTF8 pixel!",
            "status": "todo",
            "label": "feature",
            "priority": "low"
        },
        {
            "id": "TASK-2290",
            "title": "I'll compress the virtual JSON panel, that should application the UTF8 bus!",
            "status": "canceled",
            "label": "documentation",
            "priority": "high"
        },
        {
            "id": "TASK-1533",
            "title": "You can't input the firewall without overriding the wireless TCP firewall!",
            "status": "done",
            "label": "bug",
            "priority": "high"
        },
        {
            "id": "TASK-4920",
            "title": "Bypassing the hard drive won't do anything, we need to input the bluetooth JSON program!",
            "status": "in progress",
            "label": "bug",
            "priority": "high"
        },
        {
            "id": "TASK-5168",
            "title": "If we synthesize the bus, we can get to the IP panel through the virtual TLS array!",
            "status": "in progress",
            "label": "feature",
            "priority": "low"
        },
        {
            "id": "TASK-7103",
            "title": "We need to parse the multi-byte EXE bandwidth!",
            "status": "canceled",
            "label": "feature",
            "priority": "low"
        },
        {
            "id": "TASK-4314",
            "title": "If we compress the program, we can get to the XML alarm through the multi-byte COM matrix!",
            "status": "in progress",
            "label": "bug",
            "priority": "high"
        },
        {
            "id": "TASK-3415",
            "title": "Use the cross-platform XML application, then you can quantify the solid state feed!",
            "status": "todo",
            "label": "feature",
            "priority": "high"
        },
        {
            "id": "TASK-8339",
            "title": "Try to calculate the DNS interface, maybe it will input the bluetooth capacitor!",
            "status": "in progress",
            "label": "feature",
            "priority": "low"
        },
        {
            "id": "TASK-6995",
            "title": "Try to hack the XSS bandwidth, maybe it will override the bluetooth matrix!",
            "status": "todo",
            "label": "feature",
            "priority": "high"
        },
        {
            "id": "TASK-8053",
            "title": "If we connect the program, we can get to the UTF8 matrix through the digital UDP protocol!",
            "status": "todo",
            "label": "feature",
            "priority": "medium"
        },
        {
            "id": "TASK-4336",
            "title": "If we synthesize the microchip, we can get to the SAS sensor through the optical UDP program!",
            "status": "todo",
            "label": "documentation",
            "priority": "low"
        },
        {
            "id": "TASK-8790",
            "title": "I'll back up the optical COM alarm, that should alarm the RSS capacitor!",
            "status": "done",
            "label": "bug",
            "priority": "medium"
        },
        {
            "id": "TASK-8980",
            "title": "Try to navigate the SQL transmitter, maybe it will back up the virtual firewall!",
            "status": "canceled",
            "label": "bug",
            "priority": "low"
        },
        {
            "id": "TASK-7342",
            "title": "Use the neural CLI card, then you can parse the online port!",
            "status": "backlog",
            "label": "documentation",
            "priority": "low"
        },
        {
            "id": "TASK-5608",
            "title": "I'll hack the haptic SSL program, that should bus the UDP transmitter!",
            "status": "canceled",
            "label": "documentation",
            "priority": "low"
        },
        {
            "id": "TASK-1606",
            "title": "I'll generate the bluetooth PNG firewall, that should pixel the SSL driver!",
            "status": "done",
            "label": "feature",
            "priority": "medium"
        },
        {
            "id": "TASK-7872",
            "title": "Transmitting the circuit won't do anything, we need to reboot the 1080p RSS monitor!",
            "status": "canceled",
            "label": "feature",
            "priority": "medium"
        },
        {
            "id": "TASK-4167",
            "title": "Use the cross-platform SMS circuit, then you can synthesize the optical feed!",
            "status": "canceled",
            "label": "bug",
            "priority": "medium"
        },
        {
            "id": "TASK-9581",
            "title": "You can't index the port without hacking the cross-platform XSS monitor!",
            "status": "backlog",
            "label": "documentation",
            "priority": "low"
        },
        {
            "id": "TASK-8806",
            "title": "We need to bypass the back-end SSL panel!",
            "status": "done",
            "label": "bug",
            "priority": "medium"
        },
        {
            "id": "TASK-6542",
            "title": "Try to quantify the RSS firewall, maybe it will quantify the open-source system!",
            "status": "done",
            "label": "feature",
            "priority": "low"
        },
        {
            "id": "TASK-6806",
            "title": "The VGA protocol is down, reboot the back-end matrix so we can parse the CSS panel!",
            "status": "canceled",
            "label": "documentation",
            "priority": "low"
        },
        {
            "id": "TASK-9549",
            "title": "You can't bypass the bus without connecting the neural JBOD bus!",
            "status": "todo",
            "label": "feature",
            "priority": "high"
        },
        {
            "id": "TASK-1075",
            "title": "Backing up the driver won't do anything, we need to parse the redundant RAM pixel!",
            "status": "done",
            "label": "feature",
            "priority": "medium"
        },
        {
            "id": "TASK-1427",
            "title": "Use the auxiliary PCI circuit, then you can calculate the cross-platform interface!",
            "status": "done",
            "label": "documentation",
            "priority": "high"
        },
        {
            "id": "TASK-1907",
            "title": "Hacking the circuit won't do anything, we need to back up the online DRAM system!",
            "status": "todo",
            "label": "documentation",
            "priority": "high"
        },
        {
            "id": "TASK-4309",
            "title": "If we generate the system, we can get to the TCP sensor through the optical GB pixel!",
            "status": "backlog",
            "label": "bug",
            "priority": "medium"
        },
        {
            "id": "TASK-3973",
            "title": "I'll parse the back-end ADP array, that should bandwidth the RSS bandwidth!",
            "status": "todo",
            "label": "feature",
            "priority": "medium"
        },
        {
            "id": "TASK-7962",
            "title": "Use the wireless RAM program, then you can hack the cross-platform feed!",
            "status": "canceled",
            "label": "bug",
            "priority": "low"
        },
        {
            "id": "TASK-3360",
            "title": "You can't quantify the program without synthesizing the neural OCR interface!",
            "status": "done",
            "label": "feature",
            "priority": "medium"
        },
        {
            "id": "TASK-9887",
            "title": "Use the auxiliary ASCII sensor, then you can connect the solid state port!",
            "status": "backlog",
            "label": "bug",
            "priority": "medium"
        },
        {
            "id": "TASK-3649",
            "title": "I'll input the virtual USB system, that should circuit the DNS monitor!",
            "status": "in progress",
            "label": "feature",
            "priority": "medium"
        },
        {
            "id": "TASK-3586",
            "title": "If we quantify the circuit, we can get to the CLI feed through the mobile SMS hard drive!",
            "status": "in progress",
            "label": "bug",
            "priority": "low"
        },
        {
            "id": "TASK-5150",
            "title": "I'll hack the wireless XSS port, that should transmitter the IP interface!",
            "status": "canceled",
            "label": "feature",
            "priority": "medium"
        },
        {
            "id": "TASK-3652",
            "title": "The SQL interface is down, override the optical bus so we can program the ASCII interface!",
            "status": "backlog",
            "label": "feature",
            "priority": "low"
        },
        {
            "id": "TASK-6884",
            "title": "Use the digital PCI circuit, then you can synthesize the multi-byte microchip!",
            "status": "canceled",
            "label": "feature",
            "priority": "high"
        },
        {
            "id": "TASK-1591",
            "title": "We need to connect the mobile XSS driver!",
            "status": "in progress",
            "label": "feature",
            "priority": "high"
        },
        {
            "id": "TASK-3802",
            "title": "Try to override the ASCII protocol, maybe it will parse the virtual matrix!",
            "status": "in progress",
            "label": "feature",
            "priority": "low"
        },
        {
            "id": "TASK-7253",
            "title": "Programming the capacitor won't do anything, we need to bypass the neural IB hard drive!",
            "status": "backlog",
            "label": "bug",
            "priority": "high"
        },
        {
            "id": "TASK-9739",
            "title": "We need to hack the multi-byte HDD bus!",
            "status": "done",
            "label": "documentation",
            "priority": "medium"
        },
        {
            "id": "TASK-4424",
            "title": "Try to hack the HEX alarm, maybe it will connect the optical pixel!",
            "status": "in progress",
            "label": "documentation",
            "priority": "medium"
        },
        {
            "id": "TASK-3922",
            "title": "You can't back up the capacitor without generating the wireless PCI program!",
            "status": "backlog",
            "label": "bug",
            "priority": "low"
        },
        {
            "id": "TASK-4921",
            "title": "I'll index the open-source IP feed, that should system the GB application!",
            "status": "canceled",
            "label": "bug",
            "priority": "low"
        },
        {
            "id": "TASK-5814",
            "title": "We need to calculate the 1080p AGP feed!",
            "status": "backlog",
            "label": "bug",
            "priority": "high"
        },
        {
            "id": "TASK-2645",
            "title": "Synthesizing the system won't do anything, we need to navigate the multi-byte HDD firewall!",
            "status": "todo",
            "label": "documentation",
            "priority": "medium"
        },
        {
            "id": "TASK-4535",
            "title": "Try to copy the JSON circuit, maybe it will connect the wireless feed!",
            "status": "in progress",
            "label": "feature",
            "priority": "low"
        },
        {
            "id": "TASK-4463",
            "title": "We need to copy the solid state AGP monitor!",
            "status": "done",
            "label": "documentation",
            "priority": "low"
        },
        {
            "id": "TASK-9745",
            "title": "If we connect the protocol, we can get to the GB system through the bluetooth PCI microchip!",
            "status": "canceled",
            "label": "feature",
            "priority": "high"
        },
        {
            "id": "TASK-2080",
            "title": "If we input the bus, we can get to the RAM matrix through the auxiliary RAM card!",
            "status": "todo",
            "label": "bug",
            "priority": "medium"
        },
        {
            "id": "TASK-3838",
            "title": "I'll bypass the online TCP application, that should panel the AGP system!",
            "status": "backlog",
            "label": "bug",
            "priority": "high"
        },
        {
            "id": "TASK-1340",
            "title": "We need to navigate the virtual PNG circuit!",
            "status": "todo",
            "label": "bug",
            "priority": "medium"
        },
        {
            "id": "TASK-6665",
            "title": "If we parse the monitor, we can get to the SSD hard drive through the cross-platform AGP alarm!",
            "status": "canceled",
            "label": "feature",
            "priority": "low"
        },
        {
            "id": "TASK-7585",
            "title": "If we calculate the hard drive, we can get to the SSL program through the multi-byte CSS microchip!",
            "status": "backlog",
            "label": "feature",
            "priority": "low"
        },
        {
            "id": "TASK-6319",
            "title": "We need to copy the multi-byte SCSI program!",
            "status": "backlog",
            "label": "bug",
            "priority": "high"
        },
        {
            "id": "TASK-4369",
            "title": "Try to input the SCSI bus, maybe it will generate the 1080p pixel!",
            "status": "backlog",
            "label": "bug",
            "priority": "high"
        },
        {
            "id": "TASK-9035",
            "title": "We need to override the solid state PNG array!",
            "status": "canceled",
            "label": "documentation",
            "priority": "low"
        },
        {
            "id": "TASK-3970",
            "title": "You can't index the transmitter without quantifying the haptic ASCII card!",
            "status": "todo",
            "label": "documentation",
            "priority": "medium"
        },
        {
            "id": "TASK-4473",
            "title": "You can't bypass the protocol without overriding the neural RSS program!",
            "status": "todo",
            "label": "documentation",
            "priority": "low"
        },
        {
            "id": "TASK-4136",
            "title": "You can't hack the hard drive without hacking the primary JSON program!",
            "status": "canceled",
            "label": "bug",
            "priority": "medium"
        },
        {
            "id": "TASK-3939",
            "title": "Use the back-end SQL firewall, then you can connect the neural hard drive!",
            "status": "done",
            "label": "feature",
            "priority": "low"
        },
        {
            "id": "TASK-2007",
            "title": "I'll input the back-end USB protocol, that should bandwidth the PCI system!",
            "status": "backlog",
            "label": "bug",
            "priority": "high"
        },
        {
            "id": "TASK-7516",
            "title": "Use the primary SQL program, then you can generate the auxiliary transmitter!",
            "status": "done",
            "label": "documentation",
            "priority": "medium"
        },
        {
            "id": "TASK-6906",
            "title": "Try to back up the DRAM system, maybe it will reboot the online transmitter!",
            "status": "done",
            "label": "feature",
            "priority": "high"
        },
        {
            "id": "TASK-5207",
            "title": "The SMS interface is down, copy the bluetooth bus so we can quantify the VGA card!",
            "status": "in progress",
            "label": "bug",
            "priority": "low"
        }
    ]
    return json({ user, data })

}

export default function DataTable() {
    const { user, data } = useLoaderData()
    const [isLoading, setIsLoading] = useState(true);
    const [loadError, setLoadError] = useState(null);

    useEffect(() => {
        try {
            if (!user) {
                setLoadError("No user found. Please log in.");
                setIsLoading(false);
                return;
            }
            // If user exists, continue with your logic
            // Your other initialization code here
            if (!data) {
                setLoadError("No data found.");
                setIsLoading(false);
                return;
            }

            setIsLoading(false);
        } catch (error) {
            setLoadError(error.message || "An error occurred");
            setIsLoading(false);
        }
    }, [user, data]);

    //  if (isLoading) { return (<LoadingPage />); }
    // if (loadError) { return (<LoadErrorPage loadError={loadError} />); }

    const columns = [
        {
            id: "select",
            header: ({ table }) => (
                <Checkbox
                    checked={
                        table.getIsAllPageRowsSelected() ||
                        (table.getIsSomePageRowsSelected() && "indeterminate")
                    }
                    onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                    aria-label="Select all"
                    className="translate-y-[2px]"
                />
            ),
            cell: ({ row }) => (
                <Checkbox
                    checked={row.getIsSelected()}
                    onCheckedChange={(value) => row.toggleSelected(!!value)}
                    aria-label="Select row"
                    className="translate-y-[2px]"
                />
            ),
           
            enableSorting: false,
            enableHiding: false,
        },
        {
            accessorKey: "id",
            header: ({ column }) => (
                <DataTableColumnHeader column={column} title="Task" />
            ),
            cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
            enableSorting: false,
            enableHiding: false,
             meta: {
                filterVariant: 'datalist', //select,  range
            },
        },
        {
            accessorKey: "title",
            header: ({ column }) => (
                <DataTableColumnHeader column={column} title="Title" />
            ),
            cell: ({ row }) => {
                const label = labels.find((label) => label.value === row.original.label)

                return (
                    <div className="flex space-x-2">
                        {label && <Badge variant="outline">{label.label}</Badge>}
                        <span className="max-w-[500px] truncate font-medium">
                            {row.getValue("title")}
                        </span>
                    </div>
                )
            },
              meta: {
                filterVariant: 'datalist', //select,  range
            },
        },
        {
            accessorKey: "status",
            header: ({ column }) => (
                <DataTableColumnHeader column={column} title="Status" />
            ),
            cell: ({ row }) => {
                const status = statuses.find(
                    (status) => status.value === row.getValue("status")
                )

                if (!status) {
                    return null
                }

                return (
                    <div className="flex w-[100px] items-center">
                        {status.icon && (
                            <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
                        )}
                        <span>{status.label}</span>
                    </div>
                )
            },
            filterFn: (row, id, value) => {
                return value.includes(row.getValue(id))
            },
              meta: {
                filterVariant: 'datalist', //select,  range
            },
        },
        {
            accessorKey: "priority",
            cell: ({ row }) => {
                const priority = priorities.find(
                    (priority) => priority.value === row.getValue("priority")
                )

                if (!priority) {
                    return null
                }

                return (
                    <div className="flex items-center">
                        {priority.icon && (
                            <priority.icon className="mr-2 h-4 w-4 text-muted-foreground" />
                        )}
                        <span>{priority.label}</span>
                    </div>
                )
            },
            filterFn: (row, id, value) => {
                return value.includes(row.getValue(id))
            },
              meta: {
                filterVariant: 'datalist', //select,  range
            },
        },
        {
            id: "actions",
            cell: ({ row }) => <DataTableRowActions data={row} />,
        },
    ]
    const [rowSelection, setRowSelection] = React.useState({})
    const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [globalFilter, setGlobalFilter] = React.useState('')

    const table = useReactTable({
        data: data,
        columns: columns,
        state: {
            sorting,
            columnVisibility,
            rowSelection,
            columnFilters,
            globalFilter,
        },
        enableRowSelection: true,
        onRowSelectionChange: setRowSelection,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        onColumnVisibilityChange: setColumnVisibility,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFacetedRowModel: getFacetedRowModel(),
        getFacetedUniqueValues: getFacetedUniqueValues(),
        enableColumnResizing: true,
        columnResizeMode: 'onChange',
        getFacetedMinMaxValues: getFacetedMinMaxValues(),
        onGlobalFilterChange: setGlobalFilter,
        globalFilterFn: fuzzyFilter,
    })

    const hasNextPage = table.getCanNextPage()
    const hasPreviousPage = table.getCanPreviousPage()
    const nextPage = table.nextPage
    const pageCount = table.getPageCount()
    const pageIndex = table.getState().pagination.pageIndex
    const pageSize = table.getState().pagination.pageSize
    const previousPage = table.previousPage

    return (
        <div className="space-y-4 bg-background">
            <DataTableToolbar table={table} globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} />
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id} colSpan={header.colSpan}>
                                            {header.isPlaceholder
                                                ? null
                                                : (<>
                                                    {header.column.getCanFilter() ? (
                                                        <div>
                                                            <Filter column={header.column} table={table} />
                                                        </div>
                                                    ) : null}
                                                </>)}
                                           
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-between px-2">
                <div className="flex items-center space-x-6 lg:space-x-8">
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem onClick={previousPage} disabled={!hasPreviousPage} className='cursor-pointer'>
                                <PaginationPrevious />
                            </PaginationItem>

                            <Pagination>
                                {Array.from({ length: pageCount }, (_, i) => (
                                    <PaginationItem key={i}  className='cursor-pointer'>
                                        <PaginationLink
                                            isActive={i === pageIndex}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                table.setPageIndex(i);
                                            }}
                                        >
                                            {i + 1}
                                        </PaginationLink>
                                    </PaginationItem>
                                ))}
                            </Pagination>

                          <PaginationItem>
                            <p className="whitespace-nowrap text-xs">
  {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
  </p>
</PaginationItem>

                            <PaginationItem
                            className='cursor-pointer'
                                onClick={nextPage}
                                disabled={!hasNextPage}>
                                <PaginationNext />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            </div>
        </div>
    )
}

export function UserNav() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-9 w-9">
                        <AvatarImage src="/avatars/03.png" alt="@shadcn" />
                        <AvatarFallback>SC</AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">shadcn</p>
                        <p className="text-xs leading-none text-muted-foreground">
                            m@example.com
                        </p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        Profile
                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Billing
                        <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Settings
                        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>New Team</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    Log out
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
export function DataTableViewOptions<TData>({ table, }: DataTableViewOptionsProps<TData>) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    size="sm"
                    className="ml-auto hidden h-8 lg:flex"
                >
                    <Columns2 className="mr-2 h-4 w-4" />
                    View
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[150px]">
                <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {table
                    .getAllColumns()
                    .filter(
                        (column) =>
                            typeof column.accessorFn !== "undefined" && column.getCanHide()
                    )
                    .map((column) => {
                        return (
                            <DropdownMenuCheckboxItem
                                key={column.id}
                                className="capitalize"
                                checked={column.getIsVisible()}
                                onCheckedChange={(value) => column.toggleVisibility(!!value)}
                            >
                                {column.id}
                            </DropdownMenuCheckboxItem>
                        )
                    })}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
export function DataTableToolbar<TData>({ table, globalFilter, setGlobalFilter, }: DataTableToolbarProps<TData>) {
    const isFiltered = table.getState().columnFilters.length > 0

    return (
        <div className="flex items-center justify-between">
            <div className="flex flex-1 items-center space-x-2">
                <div className="relative ">
                    <Search className="absolute left-2.5 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <DebouncedInput
                        value={globalFilter ?? ""}
                        onChange={(value) => setGlobalFilter(String(value))}
                        className=" w-[150px] lg:w-[400px] border border-border pl-8 h-10 "
                    />
                    <Button
                        onClick={() => {
                            setGlobalFilter([]);
                        }}
                        size="icon"
                        variant="ghost"
                        className="absolute right-2 top-2.5 mr-2 h-4 w-4 bg-transparent text-foreground "
                    >
                        <X />
                    </Button>
                </div>
                {table.getColumn("status") && (
                    <DataTableFacetedFilter
                        column={table.getColumn("status")}
                        title="Status"
                        options={statuses}
                    />
                )}
                {table.getColumn("priority") && (
                    <DataTableFacetedFilter
                        column={table.getColumn("priority")}
                        title="Priority"
                        options={priorities}
                    />
                )}
                {isFiltered && (
                    <Button
                        variant="ghost"
                        onClick={() => table.resetColumnFilters()}
                        className="h-8 px-2 lg:px-3"
                    >
                        Reset
                    </Button>
                )}
            </div>
            <DataTableViewOptions table={table} />
        </div>
    )
}

export const labels = [
    {
        value: "bug",
        label: "Bug",
    },
    {
        value: "feature",
        label: "Feature",
    },
    {
        value: "documentation",
        label: "Documentation",
    },
]
export const statuses = [
    {
        value: "backlog",
        label: "Backlog",
        icon: QuestionMarkCircledIcon,
    },
    {
        value: "todo",
        label: "Todo",
        icon: CircleIcon,
    },
    {
        value: "in progress",
        label: "In Progress",
        icon: StopwatchIcon,
    },
    {
        value: "done",
        label: "Done",
        icon: CheckCircledIcon,
    },
    {
        value: "canceled",
        label: "Canceled",
        icon: CrossCircledIcon,
    },
]
export const priorities = [
    {
        label: "Low",
        value: "low",
        icon: ArrowDownIcon,
    },
    {
        label: "Medium",
        value: "medium",
        icon: ArrowRightIcon,
    },
    {
        label: "High",
        value: "high",
        icon: ArrowUpIcon,
    },
]

export function DataTableRowActions<TData>({ data, }: DataTableRowActionsProps<TData>) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                >
                    <EllipsisVertical className="h-4 w-4" />
                    <span className="sr-only">Open menu</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[160px]">
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Make a copy</DropdownMenuItem>
                <DropdownMenuItem>Favorite</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuSub>
                    <DropdownMenuSubTrigger>Labels</DropdownMenuSubTrigger>
                    <DropdownMenuSubContent>
                        <DropdownMenuRadioGroup value={data.label}>
                            {labels.map((label) => (
                                <DropdownMenuRadioItem key={label.value} value={label.value}>
                                    {label.label}
                                </DropdownMenuRadioItem>
                            ))}
                        </DropdownMenuRadioGroup>
                    </DropdownMenuSubContent>
                </DropdownMenuSub>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    Delete
                    <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
export function DataTableFacetedFilter<TData, TValue>({ column, title, options, }: DataTableFacetedFilterProps<TData, TValue>) {
    const facets = column?.getFacetedUniqueValues()
    const selectedValues = new Set(column?.getFilterValue() as string[])
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline" size="sm" className="h-8 border-dashed">
                    <CirclePlus className="mr-2 h-4 w-4" />
                    {title}
                    {selectedValues?.size > 0 && (
                        <>
                            <Separator orientation="vertical" className="mx-2 h-4" />
                            <Badge
                                variant="secondary"
                                className="rounded-sm px-1 font-normal lg:hidden"
                            >
                                {selectedValues.size}
                            </Badge>
                            <div className="hidden space-x-1 lg:flex">
                                {selectedValues.size > 2 ? (
                                    <Badge
                                        variant="secondary"
                                        className="rounded-sm px-1 font-normal"
                                    >
                                        {selectedValues.size} selected
                                    </Badge>
                                ) : (
                                    options
                                        .filter((option) => selectedValues.has(option.value))
                                        .map((option) => (
                                            <Badge
                                                variant="secondary"
                                                key={option.value}
                                                className="rounded-sm px-1 font-normal"
                                            >
                                                {option.label}
                                            </Badge>
                                        ))
                                )}
                            </div>
                        </>
                    )}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0" align="start">
                <Command>
                    <CommandInput placeholder={title} />
                    <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup>
                            {options.map((option) => {
                                const isSelected = selectedValues.has(option.value)
                                return (
                                    <CommandItem
                                        key={option.value}
                                        onSelect={() => {
                                            if (isSelected) {
                                                selectedValues.delete(option.value)
                                            } else {
                                                selectedValues.add(option.value)
                                            }
                                            const filterValues = Array.from(selectedValues)
                                            column?.setFilterValue(
                                                filterValues.length ? filterValues : undefined
                                            )
                                        }}
                                    >
                                        <div
                                            className={cn(
                                                "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                                                isSelected
                                                    ? "bg-primary text-primary-foreground"
                                                    : "opacity-50 [&_svg]:invisible"
                                            )}
                                        >
                                            <Check className={cn("h-4 w-4")} />
                                        </div>
                                        {option.icon && (
                                            <option.icon className="mr-2 h-4 w-4 text-muted-foreground" />
                                        )}
                                        <span>{option.label}</span>
                                        {facets?.get(option.value) && (
                                            <span className="ml-auto flex h-4 w-4 items-center justify-center font-mono text-xs">
                                                {facets.get(option.value)}
                                            </span>
                                        )}
                                    </CommandItem>
                                )
                            })}
                        </CommandGroup>
                        {selectedValues.size > 0 && (
                            <>
                                <CommandSeparator />
                                <CommandGroup>
                                    <CommandItem
                                        onSelect={() => column?.setFilterValue(undefined)}
                                        className="justify-center text-center"
                                    >
                                        Clear filters
                                    </CommandItem>
                                </CommandGroup>
                            </>
                        )}
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
export function DataTableColumnHeader<TData, TValue>({ column, title, className, }: DataTableColumnHeaderProps<TData, TValue>) {
    if (!column.getCanSort()) {
        return <div className={cn(className)}>{title}</div>
    }
    return (
        <div className={cn("flex items-center space-x-2", className)}>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="ghost"
                        size="sm"
                        className="-ml-3 h-8 data-[state=open]:bg-accent"
                    >
                        <span>{title}</span>
                        {column.getIsSorted() === "desc" ? (
                            <ArrowDown className="ml-2 h-4 w-4" />
                        ) : column.getIsSorted() === "asc" ? (
                            <ArrowUp className="ml-2 h-4 w-4" />
                        ) : (
                            <Funnel className="ml-2 h-4 w-4" />
                        )}
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                    <DropdownMenuItem onClick={() => column.toggleSorting(false)}>
                        <ArrowUp className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
                        Asc
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => column.toggleSorting(true)}>
                        <ArrowDown className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
                        Desc
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => column.toggleVisibility(false)}>
                        <EyeClosed className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
                        Hide
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}



interface DataTableProps<TData, TValue> { columns: ColumnDef<TData, TValue>[]; data: TData[]; }
interface DataTableViewOptionsProps<TData> { table: ReactTable<TData> }
interface DataTableToolbarProps<TData> { table: Table<TData> }
interface DataTableRowActionsProps<TData> { row: Row<TData> }
interface DataTableFacetedFilterProps<TData, TValue> {
    column?: Column<TData, TValue>
    title?: string
    options: {
        label: string
        value: string
        icon?: React.ComponentType<{ className?: string }>
    }[]
}
interface DataTableColumnHeaderProps<TData, TValue>
    extends React.HTMLAttributes<HTMLDivElement> {
    column: Column<TData, TValue>
    title: string
}
interface DataTablePaginationProps<TData> { table: Table<TData> }