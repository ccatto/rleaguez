// 'use client';
import React from 'react';
// import { useState } from 'react';
// import { useEffect, useState } from 'react';

type Props = {
  league: string;
  // description: string;
  // isButton?: boolean,
  // buttonText: string,
};

const getLeagueData = async () => {
  // const [league, setLeague] = useState({});

  
  console.log('inside ');
  const leagueResponse = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + '/api/league',
    {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
      // body: JSON.stringify(data),
    },
  );
  const data = await leagueResponse.json();
  console.log('data now === ', data);
  // setLeague(data);
  // return data;
  // console.log('pagesDataResponse.json === ', pagesDataResponse.json());
  // console.log('pagesDataResponse.json === ', pagesDataResponse.json());
  // console.log('next attempt', Response.json(pagesDataResponse));
};

// export async function LeaguezTable () {
export async function LeaguezTable({ league }: Props) {
  console.log('hey now');
  const leagueData = getLeagueData();
  // console.log(" =-------------- ", league);
  // console.log('leagueData === ',  leagueData);
  return (
    <>
      <h1>league data </h1>
      <div> {league} = passed prop</div>
    </>
  );
}

// const LeaguezTable = ({ league }: Props) => {
//   // const JumbotronCattoFlexible = ({ title, description, isButton, buttonText}: Props ) => {

//   // const pagesDataResponse = await fetch('api/pages', {
//   //   method: 'GET',
//   //   headers: {
//   //     'content-type': 'application/json',
//   //   },
//   //   // body: JSON.stringify(data),
//   // });

//   const [leagueData, setLeagueData] = useState<string>("");
//   const fetchLeagueData = async () => {
//     const leagueDataInfo = await fetch('api/pages', {
//       method: 'GET',
//       headers: {
//         'content-type': 'application/json',
//       },
//       // body: JSON.stringify(data),
//     });
//     // setLeagueData(leagueDataInfo);
//   }
//   // useEffect(() => {fetchFoo});

//   return (
//     <>
//       <div>leaguez table</div>

//     </>
//   );
// };

// export default LeaguezTable;
