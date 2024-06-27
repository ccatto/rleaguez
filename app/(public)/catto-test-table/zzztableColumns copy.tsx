// 'use client';

// import { ColumnDef } from '@tanstack/react-table';
// import { MoreHorizontal } from 'lucide-react';

// import { Button } from '../../../components/ui/button';
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from '../../../components/ui/dropdown-menu';

// // import { League } from '@/app/lib/definitions';
// // import { League } from '../../../../../lib/definitions';

// // import type:
// import Person from './data';

// // export const PagesColumns: ColumnDef<Person>[] = [

// // const columnHelper = createColumnHelper<Person>()

// // const columns = [
// export const PagesColumns: ColumnDef<Person>[] = [
//   {
//     accessorKey: 'firstName',
//     header: 'firstName',
//   },
//   columnHelper.accessor('firstName', {
//     cell: info => info.getValue(),
//     footer: info => info.column.id,
//   }),
//   columnHelper.accessor(row => row.lastName, {
//     id: 'lastName',
//     cell: info => <i>{info.getValue()}</i>,
//     header: () => <span>Last Name</span>,
//     footer: info => info.column.id,
//   }),
//   columnHelper.accessor('age', {
//     header: () => 'Age',
//     cell: info => info.renderValue(),
//     footer: info => info.column.id,
//   }),
//   columnHelper.accessor('visits', {
//     header: () => <span>Visits</span>,
//     footer: info => info.column.id,
//   }),
//   columnHelper.accessor('status', {
//     header: 'Status',
//     footer: info => info.column.id,
//   }),
//   columnHelper.accessor('progress', {
//     header: 'Profile Progress',
//     footer: info => info.column.id,
//   }),
// ]
