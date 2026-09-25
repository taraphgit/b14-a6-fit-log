"use client";

import Link from "next/link";
import { useState } from "react";
import PlanCard from "@/components/PlanCard";
import Loading from "@/components/Loading";
import { useFitLog } from "@/context/FitLogContext";

export default function MyPlanPage() {
  const [activeTab, setActiveTab] = useState("plan");

  const { plan, saved, hydrated } = useFitLog();

  if (!hydrated) {
    return <Loading />;
  }

  const minutes = plan.reduce(
    (total, workout) => total + (Number.parseFloat(workout.duration) || 0),
    0
  );

  const calories = plan.reduce(
    (total, workout) =>
      total + (Number.parseFloat(workout.caloriesBurned) || 0),
    0
  );

  const currentList = activeTab === "plan" ? plan : saved;

  return (
    <main className="min-h-[75vh] bg-[#090909]">
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ccff00]">
          Workout Log
        </p>

        <h1 className="mt-3 text-5xl font-black uppercase tracking-tight sm:text-6xl">
          My Plan
        </h1>

        <p className="mt-4 max-w-2xl text-white/50">
          Cap of five lifts for today. Finish them, then load more.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <Metric label="Exercises" value={plan.length} />
          <Metric label="Minutes" value={minutes} />
          <Metric label="Calories" value={calories} />
        </div>

        <div className="mt-10 flex w-fit rounded-full border border-white/10 bg-[#111111] p-1">
          <button
            type="button"
            onClick={() => setActiveTab("plan")}
            className={`rounded-full px-5 py-2.5 text-xs font-black uppercase tracking-wider transition ${
              activeTab === "plan"
                ? "bg-[#ccff00] text-black"
                : "text-white/50 hover:text-white"
            }`}
          >
            Today&apos;s Plan
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("saved")}
            className={`rounded-full px-5 py-2.5 text-xs font-black uppercase tracking-wider transition ${
              activeTab === "saved"
                ? "bg-[#ccff00] text-black"
                : "text-white/50 hover:text-white"
            }`}
          >
            Saved
          </button>
        </div>

        <div className="mt-8 space-y-5">
          {currentList.length > 0 ? (
            currentList.map((workout) => (
              <PlanCard
                key={workout.id}
                workout={workout}
                type={activeTab}
              />
            ))
          ) : (
            <EmptyState tab={activeTab} />
          )}
        </div>
      </section>
    </main>
  );
}

function Metric({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#111111] p-6">
      <p className="text-xs font-black uppercase tracking-[0.2em] text-white/40">
        {label}
      </p>

      <p className="mt-3 text-4xl font-black text-[#ccff00]">
        {value}
      </p>
    </div>
  );
}

function EmptyState({ tab }) {
  return (
    <div className="rounded-3xl border border-dashed border-white/10 bg-[#111111] px-6 py-16 text-center">
      <h2 className="text-2xl font-black uppercase">
        Nothing Here Yet
      </h2>

      <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-white/50">
        {tab === "plan"
          ? "Browse the library and add a lift to get today moving."
          : "Save a workout from the library and it will appear here."}
      </p>

      <Link
        href="/"
        className="mt-6 inline-flex rounded-full bg-[#ccff00] px-5 py-3 text-xs font-black uppercase tracking-wider text-black"
      >
        Go to workouts
      </Link>
    </div>
  );
}