import { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import LeaguezTable from '../../components/AtomicDesign/organisms/LeaguezTable/LeaguezTable';


// import LeaguezTable from './../../components/AtomicDesign/molecules/LeaguezTable';
// import { LeaguezTable } from '../../components/AtomicDesign/molecules/zzzLeaguezTable';
// import LeagueGridPage from './league-grid/page';
// import { LeaguezTable } from '../../components/AtomicDesign/molecules/zzzLeaguezTable';
// import LeaguezTable from '../../components/AtomicDesign/organisms/
// import { Test } from '../../components/AtomicDesign/organisms/
// import LeaguezTable

export const metadata: Metadata = {
  title: 'RLeaguez Sports Leaguez',
  description: 'RLeaguez Create & Maintain R Sports Leaguez',
  alternates: {
    canonical: 'https://www.rleaguez.com/leaguez',
  },
};

const Page = () => {
// export default function Page() {
  return (
    <div className="h-lvh bg-slate-700">
      <hr className="m-1" />
      RLeaguez sports leaguez
      <br />
      Begin :YO-
      {/* <LeaguezTable league="blue" /> */}
      End of league table
      <br />
      <button
        type="button"
        className="mb-2 me-2 rounded-2xl bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Create a League
      </button>
      <Link href="/leaguez/create">create a league</Link>
      {/* <Link href={'/leaguez/orange'}>orange league</Link> */}
      <hr className="m-5 mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 dark:bg-gray-700 md:my-10" />
          <h1>Leagues</h1>
          {/* <LeaguezTable /> */}
          <LeaguezTable/>
          {/* <LeagueGridPage/> */}
      <hr className="m-3" />
    </div>
  );
}

export default Page;