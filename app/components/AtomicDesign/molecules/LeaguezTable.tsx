// 'use client';
import React from 'react';
import { useState } from 'react';

type Props = {
  league: string;
  // description: string;
  // isButton?: boolean,
  // buttonText: string,
};

const getLeagueData = async () => {
  console.log('inside ');
  const pagesDataResponse = await fetch('api/league', {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
    // body: JSON.stringify(data),
  });
  console.log('pagesDataResponse === ', pagesDataResponse);
};

// export async function LeaguezTable () {
export  function LeaguezTable({ league }: Props) {
  console.log('hey now');
  // const leagueData = getLeagueData();
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
