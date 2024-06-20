
import { Metadata } from 'next';
import React from 'react';

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
      About RLeaguez
      <hr className="m-3" />
    </div>
  );
}
