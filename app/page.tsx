import { Metadata } from 'next';
import Link from 'next/link';
import JumbotronFlexibleCatto from './components/AtomicDesign/molecules/JumbotronCattoFlexible';
export const metadata: Metadata = {
  title: "Chris Catto's Next starter",
  description: "Chris Catto's Next starter",
};

export default function Page() {
  return (
    <>
      <div className="rounded">
        <JumbotronFlexibleCatto
          title="RLeaguez"
          description="A place for sports leaguez."
        />
      </div>
      <p className="indent-4">
        <Link
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
          href="/leaguez"
        >
          Create a League
        </Link>
      </p>
      <Link href={'/leaguez/orange'}>orange league</Link>
      <br />
      <br />
      <Link href={'/leaguez/league-test-table'}>simple table league</Link>
      <br />
      <br />
      <Link href={'/leaguez/league-grid'}> league data grid</Link>
    </>
  );
}
