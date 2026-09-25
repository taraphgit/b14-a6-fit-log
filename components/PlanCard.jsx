"use client";

import Link from "next/link";
import {
  Check,
  Clock3,
  Eye,
  Flame,
  Star,
  X,
} from "lucide-react";
import { useFitLog } from "@/context/FitLogContext";

export default function PlanCard({ workout, type }) {
  const { markAsDone, removeFromPlan, removeFromSaved } = useFitLog();

  const isPlan = type === "plan";

  return (
    <article className="overflow-hidden rounded-2xl border border-white/10 bg-[#111111]">
      <div className="grid md:grid-cols-[220px_1fr]">
        <div className="h-56 md:h-full">
          <img
            src={workout.image}
            alt={workout.name}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-between p-5 sm:p-6">
          <div>
            <div className="flex flex-wrap gap-2">
              {(workout.muscleGroups || []).map((group) => (
                <span
                  key={group}
                  className="rounded-full border border-[#ccff00]/30 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-[#ccff00]"
                >
                  {group}
                </span>
              ))}
            </div>

            <div className="mt-3 flex items-start justify-between gap-4">
              <div>
                <h3
                  className={`text-2xl font-black uppercase leading-tight ${
                    workout.done ? "text-white/40 line-through" : "text-white"
                  }`}
                >
                  {workout.name}
                </h3>

                <p className="mt-2 text-sm text-white/50">
                  {workout.equipment}
                </p>
              </div>

              {isPlan && workout.done && (
                <span className="flex shrink-0 items-center gap-1 rounded-full bg-[#ccff00] px-3 py-1.5 text-xs font-black uppercase text-black">
                  <Check size={14} />
                  Done
                </span>
              )}
            </div>

            <div className="mt-5 flex flex-wrap gap-4 text-sm text-white/60">
              <span className="flex items-center gap-1.5">
                <Clock3 size={16} />
                {workout.duration} min
              </span>

              <span className="flex items-center gap-1.5">
                <Flame size={16} />
                {workout.caloriesBurned} kcal
              </span>

              <span className="flex items-center gap-1.5">
                <Star size={16} />
                {workout.rating}
              </span>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <Link
              href={`/workouts/${workout.id}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2.5 text-xs font-black uppercase tracking-wider text-white transition hover:border-white"
            >
              <Eye size={15} />
              View Details
            </Link>

            {isPlan ? (
              <>
                {!workout.done && (
                  <button
                    type="button"
                    onClick={() => markAsDone(workout.id)}
                    className="inline-flex items-center gap-2 rounded-full bg-[#ccff00] px-4 py-2.5 text-xs font-black uppercase tracking-wider text-black transition hover:opacity-90"
                  >
                    <Check size={15} />
                    Mark as Done
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => removeFromPlan(workout.id)}
                  className="inline-flex items-center gap-2 rounded-full border border-red-400/30 px-4 py-2.5 text-xs font-black uppercase tracking-wider text-red-300 transition hover:border-red-300"
                >
                  <X size={15} />
                  Remove
                </button>
              </>
            ) : (
              <button
                type="button"
                onClick={() => removeFromSaved(workout.id)}
                className="inline-flex items-center gap-2 rounded-full border border-red-400/30 px-4 py-2.5 text-xs font-black uppercase tracking-wider text-red-300 transition hover:border-red-300"
              >
                <X size={15} />
                Remove
              </button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}