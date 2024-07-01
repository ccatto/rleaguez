'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { ColumnDef } from '@tanstack/react-table';

import { ArrowUpDown, MoreHorizontal } from 'lucide-react';
// import { Checkbox } from '../../../../../components/ui/checkbox';
import { Button } from '../../../../../components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../../../../../components/ui/dropdown-menu';
// import { MoreHorizontal } from "lucide-react"

// This type is used to define the shape of our data. we can use a Zod schema here if you want.
import { Leaguez } from '../../../../../lib/definitions';
// league_id: number;
// league_name: string;
// league_color: string;
// is_active: boolean;
// league_sport: number;

export const ColumnsLeague: ColumnDef<Leaguez>[] = [
  // {
  //   id: "select",
  //   header: ({ table }) => (
  //     <Checkbox
  //       checked={
  //         table.getIsAllPageRowsSelected() ||
  //         (table.getIsSomePageRowsSelected() && "indeterminate")
  //       }
  //       onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
  //       aria-label="Select all"
  //     />
  //   ),
  //   cell: ({ row }) => (
  //     <Checkbox
  //       checked={row.getIsSelected()}
  //       onCheckedChange={(value) => row.toggleSelected(!!value)}
  //       aria-label="Select row"
  //     />
  //   ),
  //   enableSorting: false,
  //   enableHiding: false,
  // },

  {
    id: 'actions',
    cell: ({ row }) => {
      // const payment = row.original;
      const league = row.original;
      const router = useRouter();
      // const leaguePath = '/leaguez/' + league.league_id;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              // onClick={() => navigator.clipboard.writeText(league.league_name)}
              // onClick={() => router.push('/leaguez/create')}
              onClick={() => router.push('/leaguez/' + league.league_id)}
            >
              View league details
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            {/* <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View league details</DropdownMenuItem> */}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
  {
    accessorKey: 'is_active',
    header: 'Is Active',
  },
  {
    accessorKey: 'league_name',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          League Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: 'league_sport',
    header: 'Sport Number',
  },
];
