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
      RLeaguez sports leaguez
      <br />
      <br />
      <button
        type="button"
        className="mb-2 me-2 rounded-2xl bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Create a League
      </button>
      {/* <Link href={'/leaguez/orange'}>orange league</Link> */}
      <hr className="m-3" />
    </div>
  );
}
