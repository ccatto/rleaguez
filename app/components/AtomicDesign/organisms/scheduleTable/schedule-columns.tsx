'use client';

import { ColumnDef } from '@tanstack/react-table';
import { MoreHorizontal } from 'lucide-react';

import { Button } from '../../../../../components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../../../../../components/ui/dropdown-menu';

// import { League } from '@/app/lib/definitions';
import { League } from '../../../../../lib/definitions';

export const PagesColumns: ColumnDef<League>[] = [
  {
    accessorKey: 'leagueId',
    header: 'League Id',
  },
  {
    accessorKey: 'leagueName',
    header: 'League Name',
  },
  {
    accessorKey: 'leagueColor',
    header: 'League Color',
  },
  {
    accessorKey: 'isActive',
    header: 'Is Active',
  },
  {
    accessorKey: 'leagueSport',
    header: 'League Sport',
  },
];

