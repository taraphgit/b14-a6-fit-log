import Link from "next/link";
import { Clock3, Flame, Star } from "lucide-react";

export default function WorkoutCard({ workout }) {
  const categories = workout.muscleGroups || [];

  return (
    <Link
      href={`/workouts/${workout.id}`}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-[#111111] transition duration-300 hover:-translate-y-1 hover:border-[#ccff00]/40"
    >
      <div className="aspect-[4/3] overflow-hidden bg-[#181818]">
        <img
          src={workout.image}
          alt={workout.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <span
              key={category}
              className="rounded-full border border-[#ccff00]/30 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-[#ccff00]"
            >
              {category}
            </span>
          ))}
        </div>

        <h3 className="mt-4 text-xl font-black uppercase leading-tight">
          {workout.name}
        </h3>

        <p className="mt-2 text-sm text-white/50">
          {workout.equipment}
        </p>

        <div className="mt-5 flex items-center gap-4 text-xs text-white/60">
          <span className="flex items-center gap-1.5">
            <Clock3 size={14} />
            {workout.duration} min
          </span>

          <span className="flex items-center gap-1.5">
            <Flame size={14} />
            {workout.caloriesBurned} kcal
          </span>

          <span className="flex items-center gap-1.5">
            <Star size={14} />
            {workout.rating}
          </span>
        </div>
      </div>
    </Link>
  );
}