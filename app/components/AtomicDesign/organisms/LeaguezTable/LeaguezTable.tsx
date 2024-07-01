// import { DataTableCatto } from '../../../../../components/ui/data-table-catto';
import { DataTableFilterCatto } from '../../../../../components/ui/data-table-filter-catto';
import React from 'react';
import { ColumnsLeague } from './ColumnsLeague';
// // import { useState } from 'react';
import { getLeagueData } from './getLeagueData';

// export default async function LeagueGridPage() {
const LeaguezTable = async () => {
  const leagueData = await getLeagueData();
  console.log('leagueData === ', leagueData);

  return (
    <div className="container mx-auto h-screen py-10">
      <h1>Data table component hey now</h1>
      {/* <DataTableCatto columns={ColumnsLeague} data={leagueData} /> */}
      <hr />
      <DataTableFilterCatto
        columns={ColumnsLeague}
        data={leagueData}
        filterVal={'league_name'}
        filterText={'League Name'}
      />
    </div>
  );
};
export default LeaguezTable;
