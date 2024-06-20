import { Metadata } from 'next';;
import JumbotronFlexibleCatto from './components/AtomicDesign/molecules/JumbotronCattoFlexible';
export const metadata: Metadata = {
  title: "Chris Catto's Next starter",
  description: "Chris Catto's Next starter",
};

export default function Page() {
  return (
    <>
      <div className="rounded">
        <JumbotronFlexibleCatto title="RLeaguez" description="A place for sports leaguez."/>
      </div>
    </>
  );
}
