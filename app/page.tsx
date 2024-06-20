import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Chris Catto's Next starter",
  description: "Chris Catto's Next starter",
};

export default function Page() {
  return (
    <>
      <div className="rounded">Main</div>
    </>
  );
}
