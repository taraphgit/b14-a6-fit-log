export const dynamic = "force-dynamic";

import Hero from "@/components/Hero";
import WorkoutLibrary from "@/components/WorkoutLibrary";
import { getWorkouts } from "@/lib/api";

export default async function Home() {
  let workouts = [];

  try {
    const data = await getWorkouts();

    workouts = Array.isArray(data)
      ? data
      : data?.data || data?.workouts || [];
  } catch (error) {
    console.error("Workout fetch error:", error);
  }

  return (
    <>
      <Hero />

      <section
        id="library"
        className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
      >
        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ccff00]">
            Workout Library
          </p>

          <h2 className="mt-3 text-4xl font-black uppercase tracking-tight sm:text-5xl">
            The Library
          </h2>

          <p className="mt-4 text-white/50">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        {workouts.length > 0 ? (
          <WorkoutLibrary workouts={workouts} />
        ) : (
          <div className="mt-10 rounded-2xl border border-white/10 bg-[#111111] p-10 text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-white/50">
              No workouts available
            </p>
          </div>
        )}
      </section>
    </>
  );
}