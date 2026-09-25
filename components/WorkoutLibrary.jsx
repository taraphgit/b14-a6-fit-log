"use client";

import { useMemo, useState } from "react";
import { Search, ChevronDown } from "lucide-react";
import WorkoutCard from "@/components/WorkoutCard";

export default function WorkoutLibrary({ workouts }) {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("duration");

  const filteredWorkouts = useMemo(() => {
    const query = search.trim().toLowerCase();

    const filtered = workouts.filter((workout) => {
      const name = String(workout.name || "").toLowerCase();
      const groups = Array.isArray(workout.muscleGroups)
        ? workout.muscleGroups.join(" ").toLowerCase()
        : "";

      return name.includes(query) || groups.includes(query);
    });

    return [...filtered].sort((a, b) => {
      if (sortBy === "duration") {
        return Number(a.duration || 0) - Number(b.duration || 0);
      }

      if (sortBy === "calories") {
        return (
          Number(a.caloriesBurned || 0) -
          Number(b.caloriesBurned || 0)
        );
      }

      if (sortBy === "rating") {
        return Number(b.rating || 0) - Number(a.rating || 0);
      }

      return 0;
    });
  }, [workouts, search, sortBy]);

  return (
    <div className="mt-10">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full lg:max-w-md">
          <Search
            size={18}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/35"
          />

          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search workouts or muscle groups..."
            className="w-full rounded-full border border-white/10 bg-[#111111] py-3.5 pl-11 pr-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#ccff00]/50"
          />
        </div>

        <div className="relative w-full sm:w-56">
          <label className="sr-only" htmlFor="sort-workouts">
            Sort By
          </label>

          <select
            id="sort-workouts"
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
            className="w-full appearance-none rounded-full border border-white/10 bg-[#111111] px-4 py-3.5 text-sm font-bold text-white outline-none focus:border-[#ccff00]/50"
          >
            <option value="duration">Sort By: Duration</option>
            <option value="calories">Sort By: Calories</option>
            <option value="rating">Sort By: Rating</option>
          </select>

          <ChevronDown
            size={17}
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/50"
          />
        </div>
      </div>

      {filteredWorkouts.length > 0 ? (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredWorkouts.map((workout) => (
            <WorkoutCard key={workout.id} workout={workout} />
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-2xl border border-dashed border-white/10 bg-[#111111] p-12 text-center">
          <p className="text-sm font-black uppercase tracking-wider text-white/50">
            No workouts found
          </p>

          <p className="mt-2 text-sm text-white/30">
            Try another workout name or muscle group.
          </p>
        </div>
      )}
    </div>
  );
}