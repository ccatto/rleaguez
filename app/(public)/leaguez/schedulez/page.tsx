
import { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RLeaguez Sports Leaguez',
  description: 'RLeaguez Create & Maintain R Sports Leaguez',
  alternates: {
    canonical: 'https://www.rleaguez.com/leaguez',
  },
};

export default function Page() {
  return (
    <div className="h-lvh bg-slate-400">
      <hr className="m-1" />
       RLeaguez Schedulez
       <br /><br />
       <button type="button" className="text-white rounded-2xl bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Create a League</button>
        <Link href={'/leaguez/schedulez/create'}>Create a league</Link>
      <hr className="m-3" />
    </div>
  );
}
