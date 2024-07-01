// import { Payment } from './columns';
import { DataTableCatto } from '../../../../../components/ui/data-table-catto';
import React from 'react';
import { Leaguez } from '../../../../../lib/definitions';
// import { columnsLeague } from './columnsLeague';
// // import { useState } from 'react';
// import { getLeagueData } from './getLeagueData';

// const newData = await getLeagueData();
// console.log('newData === ', newData);

// export default async function LeagueGridPage() {
const LeaguezTable = async () => {
  // const newData = await getLeagueData();
  // const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <h1>Data table component hey now</h1>
      {/* <DataTableCatto columns={columnsLeague} data={newData} /> */}

    </div>
  );
}
export default LeaguezTable;
