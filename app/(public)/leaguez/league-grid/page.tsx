import { Payment, columns } from './columns';
import { DataTableCatto } from '../../../../components/ui/data-table-catto';
import React from 'react';
import { StaticLeague } from '../../../../lib/definitions';
import { columnsLeague } from './columnsLeague';
import { useState } from 'react';
import { getLeagueData } from './getLeagueData';

//  const [league, setLeague] = useState({});

async function getStaticLeagueData(): Promise<StaticLeague[]> {
  return [
    {
      id: '1',
      leagueId: 12,
      leagueName: 'Blue League',
      leagueColor: 'Blue',
      isActive: true,
      leagueSport: 1,
    },
    {
      id: '11',
      leagueId: 123,
      leagueName: 'zah League',
      leagueColor: 'BlueOrange',
      isActive: true,
      leagueSport: 2,
    },
    {
      id: '13',
      leagueId: 124,
      leagueName: 'Blue League 3',
      leagueColor: 'BlueBlack',
      isActive: true,
      leagueSport: 18,
    },
    {
      id: '121',
      leagueId: 1223,
      leagueName: 'Kelly League',
      leagueColor: 'BlueOrange',
      isActive: true,
      leagueSport: 3,
    },
  ];
}

// const getLeagueData = async () => {
//   console.log('inside ');
//   const leagueResponse = await fetch(
//     process.env.NEXT_PUBLIC_BASE_URL + '/api/league',
//     {
//       method: 'GET',
//       headers: {
//         'content-type': 'application/json',
//       },
//       // body: JSON.stringify(data),
//     },
//   );
//   const data = await leagueResponse.json();
//   console.log('data now === ', data);
//  };

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'm@example.com',
    },
    {
      id: '489e1d42',
      amount: 125,
      status: 'processing',
      email: 'example@gmail.com',
    },
    {
      id: '728ed52f1',
      amount: 100,
      status: 'pending',
      email: 'm@example.com',
    },
    {
      id: '489e1d422',
      amount: 125,
      status: 'processing',
      email: 'example@gmail.com',
    },
    {
      id: '728ed52f3',
      amount: 100,
      status: 'pending',
      email: 'm@example.com',
    },
    {
      id: '489e1d424',
      amount: 125,
      status: 'processing',
      email: 'example@gmail.com',
    },
    {
      id: '728ed52f5',
      amount: 100,
      status: 'pending',
      email: 'm@example.com',
    },
    {
      id: '489e1d426',
      amount: 125,
      status: 'processing',
      email: 'example@gmail.com',
    },
    {
      id: '728ed52f7',
      amount: 100,
      status: 'pending',
      email: 'm@example.com',
    },
    {
      id: '489e1d428',
      amount: 125,
      status: 'processing',
      email: 'Abbyexample@gmail.com',
    },
    {
      id: '728ed52f9',
      amount: 100,
      status: 'pending',
      email: 'SKm@example.com',
    },
    {
      id: '489e1d4299',
      amount: 125,
      status: 'processing',
      email: 'Samexample@gmail.com',
    },
    // ...
  ];
}

const newData = await getLeagueData();
// console.log('newData === ', newData);

export default async function LeagueGridPage() {
  const data = await getData();
  // const leagueData = getLeagueData();
  const staticLeagueData = await getStaticLeagueData();

  return (
    <div className="container mx-auto py-10">
      <DataTableCatto columns={columnsLeague} data={newData} />

      {/* <DataTableCatto columns={columnsLeague} data={staticLeagueData} /> */}
      {/* <DataTableCatto columns={columns} data={data} /> */}
    </div>
  );
}
