import { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
// import LeaguezTable from '../../../../components/AtomicDesign/organisms/LeaguezTable/LeaguezTable';
import LeaguezTable from '../../../../components/AtomicDesign/organisms/LeaguezTable/LeaguezTable';

export const metadata: Metadata = {
  title: 'RLeaguez Sports Leaguez',
  description: 'RLeaguez Create & Maintain R Sports Leaguez',
  alternates: {
    canonical: 'https://www.rleaguez.com/leaguez',
  },
};

const Page = () => {
  return (
    <div className="h-full bg-slate-700">
      <hr className="m-1" />
      RLeaguez sports leaguez
      <br />
      <Link
        href="/teamz/create"
        className="font-medium text-blue-600 hover:underline dark:text-blue-500"
      >
        Create a Team
      </Link>
      <hr className="m-5 mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 dark:bg-gray-700 md:my-10" />
      <h1>Teamz</h1>
      <LeaguezTable />
      <hr className="m-3" />
    </div>
  );
};

export default Page;
