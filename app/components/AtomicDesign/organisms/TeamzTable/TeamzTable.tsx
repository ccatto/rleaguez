// import { DataTableCatto } from '../../../../../components/ui/data-table-catto';
import { DataTableFilterCatto } from '../../../../../components/ui/data-table-filter-catto';
import React from 'react';
import { ColumnsTeam } from './ColumnsTeam';
// // import { useState } from 'react';
import { getTeamData } from './getTeamData';

// export default async function LeagueGridPage() {
const TeamzTable = async () => {
  const teamData = await getTeamData();
  console.log('leagueData === ', teamData);

  return (
    <div className="container mx-auto h-screen py-10">
      <h1>Data table component hey now</h1>
      {/* <DataTableCatto columns={ColumnsLeague} data={leagueData} /> */}
      <hr />
      <DataTableFilterCatto
        columns={ColumnsTeam}
        data={teamData}
        filterVal={'team_name'}
        filterText={'Team Name'}
      />
    </div>
  );
};
export default TeamzTable;
