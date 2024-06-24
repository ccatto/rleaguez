'use client';

import { Metadata } from 'next';
import React from 'react';
// import { redirect } from 'next/navigation';
import JumbotronFlexibleCatto from '../../molecules/JumbotronCattoFlexible';
// import JumbotronFlexibleCatto from '@components/app/components/AtomicDesign/molecules/JumbotronCattoFlexible';
// import Jumbotron
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';


export default function Page() {


  return (
    <div className="h-lvh bg-slate-400">
      <hr className="m-1" />
      <JumbotronFlexibleCatto title="Leaguez Schedule" description="This is the Orange sports league schedule list." />
      <br /><br />
      <div className='ml-5 max-w-sm p-6 bg-white border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700'>
        Schedule Table: 
        {/* <Link href="/leaguez/schedulez/create">Create one</Link> */}
      </div>
      <br/>
      <div className='ml-5 max-w-sm p-6 bg-white border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700'>
        section here
      </div>
      {/* <button type="button" className="text-white rounded-2xl bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Create a League</button> */}
      <hr className="m-3" />
    </div>
  );
}
