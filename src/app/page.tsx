import Image from "next/image";
import Button from "@/components/common/Button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-light">
      <section className="w-full max-w-3xl px-6 py-12">
        <h1 className="text-4xl sm:text-6xl font-bold text-primary">
          Transform Your Fitness Journey 💪
        </h1>
        <p className="mt-4 text-lg text-neutral">
          Track workouts, set goals, and achieve new milestones. All in one
          place.
        </p>
        <div className="mt-6">
          <Button variant="primary">Get Started</Button>
        </div>
      </section>

      <section className="w-full max-w-3xl px-6 py-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <FeatureCard
          icon="/icons/workout.svg"
          title="Workout Tracking"
          description="Log your workouts and track progress easily."
        />
        <FeatureCard
          icon="/icons/goals.svg"
          title="Set Your Goals"
          description="Define fitness goals and stay motivated."
        />
        <FeatureCard
          icon="/icons/community.svg"
          title="Community Support"
          description="Engage with others and share progress."
        />
      </section>
    </div>
  );
}

type FeatureProps = {
  icon: string;
  title: string;
  description: string;
};

function FeatureCard({ icon, title, description }: FeatureProps) {
  return (
    <div className="flex flex-col items-center text-center p-4 bg-light rounded-lg shadow-md">
      <Image src={icon} alt={title} width={50} height={50} />
      <h3 className="text-xl font-semibold mt-3">{title}</h3>
      <p className="text-neutral mt-2">{description}</p>
    </div>
  );
}
