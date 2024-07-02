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
// import LeagueGridPage from '../league-grid/page';

// export const metadata: Metadata = {
//   title: 'RLeaguez Create a Sports League',
//   description: 'RLeaguez Create a League',
//   alternates: {
//     canonical: 'https://www.rleaguez.com/leaguez/create',
//   },
// };

// organization_id: number;
// organization_name: string;
// organization_color: string;
// is_active: boolean;
// organization_owner: string;

const schema = z.object({
  // league_id: z.number(),
  organization_name: z.string().min(3),
  organization_color: z.string().min(2),
  // is_active: z.boolean(),
  organization_owner: z.string().min(2),
});

type FormFields = z.infer<typeof schema>;

// export default function Page() {
const OrganizationCreatePage = () => {
  const [isSubmitSuccessfulTrue, setIsSubmitSuccessfulTrue] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    defaultValues: {
      organization_name: 'Org Name',
    },
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      console.log('data == ', data);

      const orgResponse = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL + '/api/v2/organization',
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
      console.log('orgResponse === ', orgResponse);
      if (orgResponse.status === 200) {
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
            title="Create an Organization"
            description="Create a sports Organization! After creating your organization then create a league & schedule."
          />
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
              <p className="m-4 font-light text-white">Organization Name:</p>
              <input
                {...register('organization_name')}
                type="text"
                placeholder="Org Name"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              />
              {errors.organization_name && (
                <div>{errors.organization_name.message}</div>
              )}
              {/* <br /> */}
              <p className="m-4 font-light text-white">Organization Color:</p>
              <input
                {...register('organization_color')}
                type="text"
                placeholder="Org Color"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              />
              {errors.organization_color && (
                <div>{errors.organization_color.message}</div>
              )}
              {/* <br /> */}
              <p className="m-4 font-light text-white">Sport:</p>
              <input
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                {...register('organization_owner')}
                type="text"
                placeholder="Catto"
              />
              {errors.organization_owner && (
                <div>{errors.organization_owner.message}</div>
              )}

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
          <br />

          <hr className="m-3" />
        </div>
      )}
      {isSubmitSuccessfulTrue && (
        <div className="h-screen bg-slate-400 font-light ">
          <JumbotronFlexibleCatto
            title="Organization Created Successfully"
            description="We created your Organization! Let's navigate to your organization page to create a league."
          />
          <h1 className="text-black">Form Submitted successfully.</h1>
          <Link
            href={'/organizationz'}
            className="pl-3 font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            Your Organization Home page (#todo K8 add the slug at the end which
            will be the name)
          </Link>
        </div>
      )}
    </>
  );
};

export default OrganizationCreatePage;
