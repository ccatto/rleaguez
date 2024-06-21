
import { Metadata } from 'next';
// import React from 'react';
// import JumbotronFlexibleCatto from './components/AtomicDesign/molecules/JumbotronCattoFlexible';
import JumbotronFlexibleCatto from '@components/app/components/AtomicDesign/molecules/JumbotronCattoFlexible';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Chris Catto',
  description: 'About Chris Catto including Code and Family',
  alternates: {
    canonical: 'https://www.rleaguez.com/about',
  },
};

export default function Page() {
  return (
    <div className="h-lvh bg-slate-400">
      <hr className="m-1" />
      <JumbotronFlexibleCatto title='About RLeaguez' description="RLeagueZ is a place for sports leaguez. It's not my league; it's not your league; it's OUR league." />
      <p className='text-black indent-4'>
        It's created by <Link href='https://www.chriscatto.com/' target="_blank" className='font-medium text-blue-600 dark:text-blue-500 hover:underline'>Chris Catto</Link>. 
      </p>
      <hr className="m-3" />
    </div>
  );
}
