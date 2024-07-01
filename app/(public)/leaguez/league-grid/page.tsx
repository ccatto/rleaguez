import { Payment, columns } from './columns';
import { DataTableCatto } from '../../../../components/ui/data-table-catto';
import React from 'react';
import { StaticLeague } from '../../../../lib/definitions';
import { columnsLeague } from './columnsLeague';
import { useState } from 'react';
import { getLeagueData } from './getLeagueData';

export default async function LeagueGridPage() {
  const newData = await getLeagueData();
  console.log('newData === ', newData);
  return (
    <div className="container mx-auto py-10">
      <DataTableCatto columns={columnsLeague} data={newData} />
    </div>
  );
}
