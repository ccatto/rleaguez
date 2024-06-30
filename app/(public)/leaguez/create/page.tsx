'use client';

import { Metadata } from 'next';
import React from 'react';
import JumbotronFlexibleCatto from '@components/app/components/AtomicDesign/molecules/JumbotronCattoFlexible';
import { SubmitHandler, useForm } from 'react-hook-form';
import { number, z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { navigate } from '../../../components/Utils/Redirect/redirect';
import { useState } from 'react';
import Link from 'next/link';

// export const metadata: Metadata = {
//   title: 'RLeaguez Create a Sports League',
//   description: 'RLeaguez Create a League',
//   alternates: {
//     canonical: 'https://www.rleaguez.com/leaguez/create',
//   },
// };

// league_id    Int    @id @default(autoincrement())
// league_name     String
// league_color    String
// is_active     Boolean @default(true)
// league_sport  String

const schema = z.object({
  // league_id: z.number(),
  league_name: z.string().min(3),
  league_color: z.string().min(2),
  // is_active: z.boolean(),
  league_sport: z.string().min(2),
});

type FormFields = z.infer<typeof schema>;

// export default function Page() {
const LeagueCreatePage = () => {
  const [isSubmitSuccessfulTrue, setIsSubmitSuccessfulTrue] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    defaultValues: {
      league_name: 'my league name',
    },
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      console.log('data == ', data);

      const leagueResponse = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL + '/api/v2/league',
        {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(data),
        },
      );
      console.log(
        '--------------       -----------------         --------------',
      );
      console.log('leagueResponse === ', leagueResponse);
      if (leagueResponse.status === 200) {
        setIsSubmitSuccessfulTrue(true);
      }
      // const data = await leagueResponse.json();
    } catch {
      setError('root', {
        message: 'This is an error with the form',
      });
    } finally {
      setIsSubmitSuccessfulTrue(true);
      // navigate('/leaguez/create');
    }
  };

  return (
    <>
      {!isSubmitSuccessfulTrue && (
        <div className="h-lvh heigh-screen bg-slate-400 font-light ">
          <hr className="m-1" />
          <JumbotronFlexibleCatto
            title="Create a Sports League 1"
            description="Create a sports league 1 to maintain schedule & playoff brackets"
          />
          <br />
          <Link
            href={'/leaguez'}
            className="font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            Leaguez Home page
          </Link>
          <br />

          <div className="ml-5 max-w-sm rounded-2xl border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800">
            <form className="gap-2" onSubmit={handleSubmit(onSubmit)}>
              {/* <p className="m-4 font-light text-white">League Id:</p>
          <input
            {...register('league_id')}
            type="text"
            // { ...register('leagueId', { valueAsNumber: true } ) }
            // type="number"
            // placeholder=""
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          />
          {errors.league_id && <div>{errors.league_id.message}</div>} */}
              {/* <br /> */}
              <p className="m-4 font-light text-white">League Name:</p>
              <input
                {...register('league_name')}
                type="text"
                placeholder="League Name"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              />
              {errors.league_name && <div>{errors.league_name.message}</div>}
              {/* <br /> */}
              <p className="m-4 font-light text-white">League Color:</p>
              <input
                {...register('league_color')}
                type="text"
                placeholder="League Name"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              />
              {errors.league_color && <div>{errors.league_color.message}</div>}
              {/* <br /> */}
              <p className="m-4 font-light text-white">Sport:</p>
              <input
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                {...register('league_sport')}
                type="text"
                placeholder="Pickleball"
              />
              {errors.league_sport && <div>{errors.league_sport.message}</div>}

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
      )}
      {isSubmitSuccessfulTrue && (
        <div className="h-screen bg-slate-400 font-light ">
          <h1 className="text-black">Form Submitted successfully.</h1>
        </div>
      )}
    </>
  );
};

export default LeagueCreatePage;
