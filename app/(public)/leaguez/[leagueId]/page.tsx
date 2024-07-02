import React from 'react';
// import JumbotronFle
import JumbotronFlexibleCatto from '@components/app/components/AtomicDesign/molecules/JumbotronCattoFlexible';
// import fakeTest from '../../../components/AtomicDesign/organisms/fakeTest/fakeTest';
// import LeaguezTable from '../../../components/AtomicDesign/organisms/LeaguezTable/LeaguezTable';
// import JumbotronFlexibleCatto from "../../../components/AtomicDesign/molecules";
// import JumbotronFlexibleCatto from '@components/app/components/AtomicDesign/molecules/JumbotronCattoFlexible';
import { getLeagueData } from './getLeagueData';
import Link from 'next/link';

// export default async function LeagueGridPage() {
const Page = async ({ params }: { params: any }) => {
  console.log('---------------  ');
  console.log('inside page of league detail');
  const leagueData = await getLeagueData(params.leagueId);
  console.log('newData === ', leagueData);

  // leagueId

  return (
    <div className="h-screen bg-slate-700">
      <h1 className="text-2xl">
        League Detail K8 <br /> {params.leagueId}
      </h1>

      <JumbotronFlexibleCatto title="Test" description="TEST" />
      <Link
        href={'/leaguez'}
        className="font-medium text-blue-600 hover:underline dark:text-blue-500"
      >
        Leaguez List
      </Link>
      <h1>League Name: {leagueData.league_name}</h1>
      <h2>League Color: {leagueData.league_color}</h2>
      <h2>Is Active: {leagueData.is_active}</h2>
      <h2>League Color: {leagueData.league_color}</h2>
      <h2>League Sport: {leagueData.league_sport}</h2>
      {/*          <LeaguezTable/> */}
      {/* <fakeTest/> */}
    </div>
  );
};

export default Page;
