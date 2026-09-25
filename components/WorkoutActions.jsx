"use client";

import { Bookmark, Dumbbell } from "lucide-react";
import { useFitLog } from "@/context/FitLogContext";

export default function WorkoutActions({ workout }) {
  const {
    addToPlan,
    saveWorkout,
    plan,
    isInPlan,
    isSaved,
  } = useFitLog();

  const alreadyInPlan = isInPlan(workout.id);
  const alreadySaved = isSaved(workout.id);
  const planFull = plan.length >= 5;

  return (
    <div className="mt-8 grid gap-3 sm:grid-cols-2">
      <button
        type="button"
        onClick={() => addToPlan(workout)}
        disabled={alreadyInPlan || planFull}
        className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-4 text-sm font-black uppercase tracking-wider transition ${
          alreadyInPlan || planFull
            ? "cursor-not-allowed bg-white/10 text-white/35"
            : "bg-[#ccff00] text-black hover:opacity-90"
        }`}
      >
        <Dumbbell size={18} />

        {alreadyInPlan
          ? "Already in today's plan"
          : planFull
            ? "Plan is full"
            : "Add to today's plan"}
      </button>

      <button
        type="button"
        onClick={() => saveWorkout(workout)}
        className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-transparent px-5 py-4 text-sm font-black uppercase tracking-wider text-white transition hover:border-white"
      >
        <Bookmark
          size={18}
          fill={alreadySaved ? "currentColor" : "none"}
        />

        {alreadySaved ? "Already saved" : "Save for later"}
      </button>
    </div>
  );
}