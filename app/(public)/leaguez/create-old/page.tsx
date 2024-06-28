'use client';

import { Metadata } from 'next';
import React from 'react';
// import JumbotronFlexibleCatto from './components/AtomicDesign/molecules/JumbotronCattoFlexible';
import JumbotronFlexibleCatto from '@components/app/components/AtomicDesign/molecules/JumbotronCattoFlexible';
import { SubmitHandler, useForm } from 'react-hook-form';
import { number, z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { navigate } from '../../../components/Utils/Redirect/redirect';

// export const metadata: Metadata = {
//   title: 'RLeaguez Create a Sports League',
//   description: 'RLeaguez Create a League',
//   alternates: {
//     canonical: 'https://www.rleaguez.com/leaguez/create',
//   },
// };

// id: string;
// leagueId: number;
// leagueName: string;
// leagueColor: string;
// isActive: boolean;
// leagueSport: number;

const schema = z.object({
  // id: z.number(),
  id: z.string().min(2),
  // leagueId: number(),
  leagueId: z.string().min(2),
  leagueName: z.string().min(3),
  leagueColor: z.string().min(2),
  leagueSport: z.number(),
});

type FormFields = z.infer<typeof schema>;

export default function Page() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    defaultValues: {
      leagueName: '',
    },
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      // simple await 1 second to prove await with async
      // await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log('data == ', data);

      const leagueResponse = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL + '/api/league',
        {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(data),
        },
      );
      console.log('leagueResponse === ', leagueResponse);
      // const data = await leagueResponse.json();
    } catch {
      setError('root', {
        message: 'This is an error with the form',
      });
    } finally {
      navigate('/leaguez/create');
    }
  };

  return (
    <div className="h-lvh heigh-screen bg-slate-400 font-light ">
      <hr className="m-1" />
      <JumbotronFlexibleCatto
        title="Create a Sports League"
        description="Create a sports league to maintain schedule & playoff brackets"
      />
      <br />
      <br />

      <div className="ml-5 max-w-sm rounded-2xl border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800">
        <form className="gap-2" onSubmit={handleSubmit(onSubmit)}>
          <p className="m-4 font-light text-white">League Id:</p>
          <input
            {...register('leagueId')}
            type="text"
            // { ...register('leagueId', { valueAsNumber: true } ) }
            // type="number"
            // placeholder=""
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          />
          {errors.leagueId && <div>{errors.leagueId.message}</div>}
          {/* <br /> */}
          <p className="m-4 font-medium text-white">Id:</p>
          <input
            {...register('id')}
            // {...register('id')}
            type="text"
            // placeholder=""
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          />
          {errors.id && <div>{errors.id.message}</div>}
          {/* <br /> */}
          <p className="m-4 font-light text-white">League Name:</p>
          <input
            {...register('leagueName')}
            type="text"
            placeholder="League Name"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          />
          {errors.leagueName && <div>{errors.leagueName.message}</div>}
          {/* <br /> */}
          <p className="m-4 font-light text-white">League Color:</p>
          <input
            {...register('leagueColor')}
            type="text"
            placeholder="League Name"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          />
          {errors.leagueColor && <div>{errors.leagueColor.message}</div>}
          {/* <br /> */}
          <p className="m-4 font-light text-white">Sport:</p>
          <input
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            {...register('leagueSport', { valueAsNumber: true })}
            type="number"
            placeholder=""
          />
          {errors.leagueSport && <div>{errors.leagueSport.message}</div>}
          <button
            disabled={isSubmitting}
            type="submit"
            className="mb-2 me-2 mt-4 rounded-2xl bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {isSubmitting ? 'Loading..' : 'Submit'}
          </button>
          {errors.root && <div>{errors.root.message}</div>}
        </form>
      </div>
      {/* <button type="button" className="text-white rounded-2xl bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Create a League</button> */}
      <hr className="m-3" />
    </div>
  );
}
