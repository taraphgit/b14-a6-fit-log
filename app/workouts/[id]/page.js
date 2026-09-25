import Link from "next/link";
import { ArrowLeft, Clock3, Flame, Star, Dumbbell } from "lucide-react";
import { notFound } from "next/navigation";
import { getWorkoutById } from "@/lib/api";

export default async function WorkoutDetailsPage({ params }) {
  const { id } = await params;

  const result = await getWorkoutById(id);
  const workout = result?.data || result;

  if (!workout || !workout.id) {
    notFound();
  }

  const categories = Array.isArray(workout.muscleGroups)
    ? workout.muscleGroups
    : [];

  const instructions = Array.isArray(workout.instructions)
    ? workout.instructions
    : [];

  return (
    <main className="bg-[#090909]">
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
        <Link
          href="/#library"
          className="mb-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white/50 transition hover:text-[#ccff00]"
        >
          <ArrowLeft size={17} />
          Back to library
        </Link>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#111111]">
            <img
              src={workout.image}
              alt={workout.name}
              className="h-full min-h-[420px] w-full object-cover sm:min-h-[560px]"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ccff00]">
              Workout Details
            </p>

            <h1 className="mt-4 text-4xl font-black uppercase leading-tight tracking-tight sm:text-5xl">
              {workout.name}
            </h1>

            <p className="mt-5 max-w-2xl leading-7 text-white/60">
              {workout.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {categories.map((category) => (
                <span
                  key={category}
                  className="rounded-full border border-[#ccff00]/30 px-3 py-1.5 text-xs font-black uppercase tracking-wider text-[#ccff00]"
                >
                  {category}
                </span>
              ))}
            </div>

            <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-[#111111]">
              <div className="border-b border-white/10 px-5 py-4">
                <h2 className="text-sm font-black uppercase tracking-[0.2em] text-white/60">
                  Key Specs
                </h2>
              </div>

              <div className="grid sm:grid-cols-2">
                <Spec label="Equipment" value={workout.equipment} />
                <Spec label="Difficulty" value={workout.difficulty} />
                <Spec label="Sets" value={workout.sets} />
                <Spec label="Reps" value={workout.reps} />
                <Spec label="Duration" value={`${workout.duration} min`} />
                <Spec
                  label="Calories"
                  value={`${workout.caloriesBurned} kcal`}
                />
                <Spec label="Rating" value={workout.rating} />
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-[#111111] px-4 py-2.5 text-sm text-white/70">
                <Clock3 size={16} />
                {workout.duration} min
              </div>

              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-[#111111] px-4 py-2.5 text-sm text-white/70">
                <Flame size={16} />
                {workout.caloriesBurned} kcal
              </div>

              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-[#111111] px-4 py-2.5 text-sm text-white/70">
                <Star size={16} />
                {workout.rating}
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-sm font-black uppercase tracking-[0.2em] text-white/60">
                Instructions
              </h2>

              <ol className="mt-4 space-y-3">
                {instructions.map((instruction, index) => (
                  <li
                    key={index}
                    className="flex gap-4 rounded-xl border border-white/10 bg-[#111111] p-4"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#ccff00] text-xs font-black text-black">
                      {index + 1}
                    </span>

                    <p className="pt-1 text-sm leading-6 text-white/70">
                      {instruction}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ccff00] px-5 py-4 text-sm font-black uppercase tracking-wider text-black transition hover:opacity-90"
              >
                <Dumbbell size={18} />
                Add to today&apos;s plan
              </button>

              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-transparent px-5 py-4 text-sm font-black uppercase tracking-wider text-white transition hover:border-white"
              >
                Save for later
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Spec({ label, value }) {
  return (
    <div className="border-b border-white/10 px-5 py-4 sm:[&:nth-child(odd)]:border-r">
      <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/35">
        {label}
      </p>

      <p className="mt-1 text-sm font-bold text-white">
        {value ?? "—"}
      </p>
    </div>
  );
}
